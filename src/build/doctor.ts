import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, extname, isAbsolute, join, resolve } from 'node:path';
import { resolveQtDir } from '../qt-tools/toolchain.js';
import type {
  DoctorCheck,
  DoctorCheckName,
  DoctorCommandOptions,
  DoctorResult,
} from './build-types.js';
import { DEFAULT_TARGET_VERSION } from './config-defaults.js';
import { ConfigError } from './config-error.js';
import { loadConfig } from './config-loader.js';
import type { ResolvedQmltsConfig } from './config-types.js';
import { currentPlatform, hostLibFilename } from './product-layout.js';

const ALL_CHECK_NAMES: readonly DoctorCheckName[] = [
  'qt-installed',
  'qt-version',
  'qmlformat-available',
  'qmllint-available',
  'qmlcachegen-available',
  'node-version',
  'bun-available',
  'cargo-available',
  'rustc-available',
  'cmake-available',
  'cmake-version',
  'msvc-available',
  'ninja-available',
  'host-lib-exists',
  'config-valid',
  'dependencies-resolved',
];

function getExecutableCandidates(file: string): string[] {
  if (process.platform !== 'win32' || extname(file) !== '') {
    return [file];
  }

  return [file, `${file}.exe`, `${file}.cmd`, `${file}.bat`];
}

function execCandidate(file: string, args: readonly string[]): string {
  return execFileSync(file, [...args], {
    encoding: 'utf-8',
    timeout: 10_000,
    stdio: ['pipe', 'pipe', 'pipe'],
    shell: false,
    env: { ...process.env },
  }).trim();
}

function tryExec(file: string, args: readonly string[] = []): { ok: boolean; stdout: string } {
  for (const candidate of getExecutableCandidates(file)) {
    try {
      const stdout = execCandidate(candidate, args);
      return { ok: true, stdout };
    } catch {
      // try next candidate
    }
  }
  return { ok: false, stdout: '' };
}

function checkBinaryAvailable(
  binary: string,
  versionFlag = '--version',
): { available: boolean; version: string } {
  const result = tryExec(binary, [versionFlag]);
  return { available: result.ok, version: result.stdout.split('\n')[0] ?? '' };
}

function parseVersion(versionStr: string): number[] {
  const match = versionStr.match(/(\d+)\.(\d+)(?:\.(\d+))?/);
  if (!match) return [0, 0, 0];
  return [
    Number.parseInt(match[1]!, 10),
    Number.parseInt(match[2]!, 10),
    Number.parseInt(match[3] ?? '0', 10),
  ];
}

function parseQtVersion(output: string): number[] {
  const qtVersionLine =
    output.split(/\r?\n/).find((line) => line.toLowerCase().includes('using qt version')) ?? output;
  return parseVersion(qtVersionLine);
}

function versionAtLeast(actual: number[], required: number[]): boolean {
  for (let i = 0; i < required.length; i++) {
    if ((actual[i] ?? 0) > (required[i] ?? 0)) return true;
    if ((actual[i] ?? 0) < (required[i] ?? 0)) return false;
  }
  return true;
}

function resolveProjectDir(configPath?: string): string {
  if (!configPath) return process.cwd();
  const resolvedPath = isAbsolute(configPath) ? configPath : resolve(process.cwd(), configPath);
  return dirname(resolvedPath);
}

// ─── Individual check implementations ───────────────────────

function checkQtInstalled(qtDir = resolveQtDir()): DoctorCheck {
  if (qtDir && existsSync(qtDir)) {
    return {
      name: 'qt-installed',
      description: 'Qt framework installed',
      status: 'pass',
      message: `Qt found at ${qtDir}`,
    };
  }
  return {
    name: 'qt-installed',
    description: 'Qt framework installed',
    status: 'fail',
    message: 'Qt not found. Set QT_DIR environment variable or install Qt.',
    fixable: true,
    fixCommand: 'Set QT_DIR=/path/to/qt',
  };
}

function checkQtVersion(
  qtDir = resolveQtDir(),
  requiredVersionText = DEFAULT_TARGET_VERSION,
): DoctorCheck {
  const requiredVersion = parseVersion(requiredVersionText);
  const description = `Qt version >= ${requiredVersionText}`;
  if (!qtDir) {
    return {
      name: 'qt-version',
      description,
      status: 'fail',
      message: 'Cannot check Qt version: Qt not found',
    };
  }
  const qmakePaths = [join(qtDir, 'bin', 'qmake6'), join(qtDir, 'bin', 'qmake'), 'qmake6', 'qmake'];
  for (const qmake of qmakePaths) {
    const result = tryExec(qmake, ['--version']);
    if (result.ok) {
      const version = parseQtVersion(result.stdout);
      if (versionAtLeast(version, requiredVersion)) {
        return {
          name: 'qt-version',
          description,
          status: 'pass',
          message: `Qt ${version.join('.')}`,
        };
      }
      return {
        name: 'qt-version',
        description,
        status: 'warn',
        message: `Qt ${version.join('.')} detected — QmlTS requires ${requiredVersionText}+`,
      };
    }
  }
  return {
    name: 'qt-version',
    description,
    status: 'warn',
    message: 'Could not determine Qt version (qmake not found in Qt dir)',
  };
}

function checkQtTool(
  name: DoctorCheckName,
  binary: string,
  description: string,
  qtDir = resolveQtDir(),
): DoctorCheck {
  const candidates = qtDir ? [join(qtDir, 'bin', binary), binary] : [binary];

  for (const candidate of candidates) {
    const result = tryExec(candidate, ['--version']);
    if (result.ok) {
      return { name, description, status: 'pass', message: `${binary} available` };
    }
  }
  return {
    name,
    description,
    status: name === 'qmlcachegen-available' ? 'warn' : 'fail',
    message: `${binary} not found`,
  };
}

function checkNodeVersion(): DoctorCheck {
  const version = parseVersion(process.version);
  if (versionAtLeast(version, [18, 0, 0])) {
    return {
      name: 'node-version',
      description: 'Node.js version >= 18',
      status: 'pass',
      message: `Node.js ${process.version}`,
    };
  }
  return {
    name: 'node-version',
    description: 'Node.js version >= 18',
    status: 'fail',
    message: `Node.js ${process.version} — requires >= 18.0.0`,
  };
}

function checkBunAvailable(): DoctorCheck {
  const info = checkBinaryAvailable('bun');
  if (info.available) {
    return {
      name: 'bun-available',
      description: 'Bun runtime available',
      status: 'pass',
      message: `Bun ${info.version}`,
    };
  }
  return {
    name: 'bun-available',
    description: 'Bun runtime available',
    status: 'warn',
    message: 'Bun not found (optional, but recommended)',
  };
}

function checkCargoAvailable(): DoctorCheck {
  const info = checkBinaryAvailable('cargo');
  if (info.available) {
    return {
      name: 'cargo-available',
      description: 'Cargo build tool',
      status: 'pass',
      message: info.version,
    };
  }
  return {
    name: 'cargo-available',
    description: 'Cargo build tool',
    status: 'fail',
    message: 'Cargo not found. Install Rust via https://rustup.rs',
    fixable: true,
    fixCommand: 'curl --proto =https --tlsv1.2 -sSf https://sh.rustup.rs | sh',
  };
}

function checkRustcAvailable(): DoctorCheck {
  const info = checkBinaryAvailable('rustc');
  if (info.available) {
    return {
      name: 'rustc-available',
      description: 'Rust compiler',
      status: 'pass',
      message: info.version,
    };
  }
  return {
    name: 'rustc-available',
    description: 'Rust compiler',
    status: 'fail',
    message: 'rustc not found. Install Rust via https://rustup.rs',
    fixable: true,
    fixCommand: 'curl --proto =https --tlsv1.2 -sSf https://sh.rustup.rs | sh',
  };
}

function checkCmakeAvailable(): DoctorCheck {
  const info = checkBinaryAvailable('cmake');
  if (info.available) {
    return {
      name: 'cmake-available',
      description: 'CMake build tool (cxx-qt dependency)',
      status: 'pass',
      message: info.version,
    };
  }
  return {
    name: 'cmake-available',
    description: 'CMake build tool (cxx-qt dependency)',
    status: 'fail',
    message: 'CMake not found. Required by cxx-qt-build.',
  };
}

function checkCmakeVersion(): DoctorCheck {
  const info = checkBinaryAvailable('cmake');
  if (!info.available) {
    return {
      name: 'cmake-version',
      description: 'CMake version >= 3.24',
      status: 'fail',
      message: 'Cannot check CMake version: cmake not found',
    };
  }
  const version = parseVersion(info.version);
  if (versionAtLeast(version, [3, 24, 0])) {
    return {
      name: 'cmake-version',
      description: 'CMake version >= 3.24',
      status: 'pass',
      message: `CMake ${version.join('.')}`,
    };
  }
  return {
    name: 'cmake-version',
    description: 'CMake version >= 3.24',
    status: 'warn',
    message: `CMake ${version.join('.')} — cxx-qt-build recommends >= 3.24`,
  };
}

function checkMsvcAvailable(): DoctorCheck {
  if (process.platform !== 'win32') {
    return {
      name: 'msvc-available',
      description: 'MSVC toolchain (Windows)',
      status: 'pass',
      message: 'Not required on this platform',
    };
  }
  const result = tryExec('where', ['cl.exe']);
  if (result.ok) {
    return {
      name: 'msvc-available',
      description: 'MSVC toolchain (Windows)',
      status: 'pass',
      message: 'MSVC cl.exe found',
    };
  }
  const vsWhere = tryExec(
    'C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer\\vswhere.exe',
    ['-latest', '-property', 'installationPath'],
  );
  if (vsWhere.ok && vsWhere.stdout.length > 0) {
    return {
      name: 'msvc-available',
      description: 'MSVC toolchain (Windows)',
      status: 'pass',
      message: `Visual Studio found at ${vsWhere.stdout}`,
    };
  }
  return {
    name: 'msvc-available',
    description: 'MSVC toolchain (Windows)',
    status: 'fail',
    message: 'MSVC not found. Install Visual Studio Build Tools.',
    fixable: true,
    fixCommand:
      'winget install Microsoft.VisualStudio.2022.BuildTools --override "--add Microsoft.VisualStudio.Workload.VCTools"',
  };
}

function checkNinjaAvailable(): DoctorCheck {
  const info = checkBinaryAvailable('ninja');
  if (info.available) {
    return {
      name: 'ninja-available',
      description: 'Ninja build tool',
      status: 'pass',
      message: info.version,
    };
  }
  return {
    name: 'ninja-available',
    description: 'Ninja build tool',
    status: 'warn',
    message: 'Ninja not found (optional, CMake can use other generators)',
  };
}

function checkHostLibExists(projectDir = process.cwd()): DoctorCheck {
  try {
    const platform = currentPlatform();
    const filename = hostLibFilename(platform);
    const nodeModulesPath = join(projectDir, 'node_modules', '@qmlts', 'host', filename);
    if (existsSync(nodeModulesPath)) {
      return {
        name: 'host-lib-exists',
        description: 'Native host library exists',
        status: 'pass',
        message: `Host library found: ${filename}`,
      };
    }
    return {
      name: 'host-lib-exists',
      description: 'Native host library exists',
      status: 'warn',
      message: `Host library not found: ${filename}. Will be built from source or downloaded.`,
    };
  } catch {
    return {
      name: 'host-lib-exists',
      description: 'Native host library exists',
      status: 'warn',
      message: 'Could not determine host library status',
    };
  }
}

async function checkConfigValid(configPath?: string): Promise<DoctorCheck> {
  try {
    await loadConfig(configPath);
    return {
      name: 'config-valid',
      description: 'qmlts.config.ts is valid',
      status: 'pass',
      message: 'Configuration is valid',
    };
  } catch (err) {
    const message =
      err instanceof ConfigError
        ? `Config error in field '${err.field}': ${err.message}`
        : err instanceof Error
          ? err.message
          : String(err);
    return {
      name: 'config-valid',
      description: 'qmlts.config.ts is valid',
      status: 'fail',
      message,
      fixable: false,
    };
  }
}

function checkDependenciesResolved(projectDir = process.cwd()): DoctorCheck {
  const nodeModulesPath = join(projectDir, 'node_modules');
  if (!existsSync(nodeModulesPath)) {
    return {
      name: 'dependencies-resolved',
      description: 'npm dependencies resolved',
      status: 'fail',
      message: `node_modules not found in ${projectDir}. Run npm install.`,
      fixable: true,
      fixCommand: 'npm install',
    };
  }
  return {
    name: 'dependencies-resolved',
    description: 'npm dependencies resolved',
    status: 'pass',
    message: 'Dependencies installed',
  };
}

// ─── Public API ─────────────────────────────────────────────

export function getDoctorCheckNames(): readonly DoctorCheckName[] {
  return ALL_CHECK_NAMES;
}

export async function runDoctorChecks(options: DoctorCommandOptions = {}): Promise<DoctorResult> {
  const checks: DoctorCheck[] = [];
  let loadedConfig: ResolvedQmltsConfig | undefined;

  try {
    loadedConfig = await loadConfig(options.config);
  } catch {
    // config-valid check below will surface any configuration problems
  }

  const projectDir = loadedConfig?.configDir ?? resolveProjectDir(options.config);
  const qtDir = loadedConfig?.qt.dir ?? resolveQtDir();
  const requiredQtVersion = loadedConfig?.qt.targetVersion ?? DEFAULT_TARGET_VERSION;

  checks.push(checkQtInstalled(qtDir));
  checks.push(checkQtVersion(qtDir, requiredQtVersion));
  checks.push(checkQtTool('qmlformat-available', 'qmlformat', 'qmlformat tool', qtDir));
  checks.push(checkQtTool('qmllint-available', 'qmllint', 'qmllint tool', qtDir));
  checks.push(
    checkQtTool('qmlcachegen-available', 'qmlcachegen', 'qmlcachegen AOT compiler', qtDir),
  );
  checks.push(checkNodeVersion());
  checks.push(checkBunAvailable());
  checks.push(checkCargoAvailable());
  checks.push(checkRustcAvailable());
  checks.push(checkCmakeAvailable());
  checks.push(checkCmakeVersion());
  checks.push(checkMsvcAvailable());
  checks.push(checkNinjaAvailable());
  checks.push(checkHostLibExists(projectDir));
  checks.push(await checkConfigValid(options.config));
  checks.push(checkDependenciesResolved(projectDir));

  const allPassed = checks.every((c) => c.status !== 'fail');

  return { checks, allPassed };
}
