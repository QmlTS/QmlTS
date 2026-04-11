import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { resolveQtDir } from '../qt-tools/toolchain.js';
import type {
  DoctorCheck,
  DoctorCheckName,
  DoctorCommandOptions,
  DoctorResult,
} from './build-types.js';
import { ConfigError } from './config-error.js';
import { loadConfig } from './config-loader.js';
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

function tryExec(command: string): { ok: boolean; stdout: string } {
  try {
    const stdout = execSync(command, {
      encoding: 'utf-8',
      timeout: 10_000,
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
    return { ok: true, stdout };
  } catch {
    return { ok: false, stdout: '' };
  }
}

function checkBinaryAvailable(
  binary: string,
  versionFlag = '--version',
): { available: boolean; version: string } {
  const result = tryExec(`${binary} ${versionFlag}`);
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

function versionAtLeast(actual: number[], required: number[]): boolean {
  for (let i = 0; i < required.length; i++) {
    if ((actual[i] ?? 0) > (required[i] ?? 0)) return true;
    if ((actual[i] ?? 0) < (required[i] ?? 0)) return false;
  }
  return true;
}

// ─── Individual check implementations ───────────────────────

function checkQtInstalled(): DoctorCheck {
  const qtDir = resolveQtDir();
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

function checkQtVersion(): DoctorCheck {
  const qtDir = resolveQtDir();
  if (!qtDir) {
    return {
      name: 'qt-version',
      description: 'Qt version >= 6.0',
      status: 'fail',
      message: 'Cannot check Qt version: Qt not found',
    };
  }
  const qmakePaths = [join(qtDir, 'bin', 'qmake6'), join(qtDir, 'bin', 'qmake'), 'qmake6', 'qmake'];
  for (const qmake of qmakePaths) {
    const result = tryExec(`"${qmake}" --version`);
    if (result.ok) {
      const version = parseVersion(result.stdout);
      if (version[0]! >= 6) {
        return {
          name: 'qt-version',
          description: 'Qt version >= 6.0',
          status: 'pass',
          message: `Qt ${version.join('.')}`,
        };
      }
      return {
        name: 'qt-version',
        description: 'Qt version >= 6.0',
        status: 'warn',
        message: `Qt ${version.join('.')} detected — QmlTS requires Qt 6.0+`,
      };
    }
  }
  return {
    name: 'qt-version',
    description: 'Qt version >= 6.0',
    status: 'warn',
    message: 'Could not determine Qt version (qmake not found in Qt dir)',
  };
}

function checkQtTool(name: DoctorCheckName, binary: string, description: string): DoctorCheck {
  const qtDir = resolveQtDir();
  const candidates = qtDir ? [join(qtDir, 'bin', binary), binary] : [binary];

  for (const candidate of candidates) {
    const result = tryExec(`"${candidate}" --version`);
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
  const result = tryExec('where cl.exe');
  if (result.ok) {
    return {
      name: 'msvc-available',
      description: 'MSVC toolchain (Windows)',
      status: 'pass',
      message: 'MSVC cl.exe found',
    };
  }
  const vsWhere = tryExec(
    '"C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer\\vswhere.exe" -latest -property installationPath',
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

function checkHostLibExists(): DoctorCheck {
  try {
    const platform = currentPlatform();
    const filename = hostLibFilename(platform);
    const nodeModulesPath = join(process.cwd(), 'node_modules', '@qmlts', 'host', filename);
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

function checkDependenciesResolved(): DoctorCheck {
  const nodeModulesPath = join(process.cwd(), 'node_modules');
  if (!existsSync(nodeModulesPath)) {
    return {
      name: 'dependencies-resolved',
      description: 'npm dependencies resolved',
      status: 'fail',
      message: 'node_modules not found. Run npm install.',
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

  checks.push(checkQtInstalled());
  checks.push(checkQtVersion());
  checks.push(checkQtTool('qmlformat-available', 'qmlformat', 'qmlformat tool'));
  checks.push(checkQtTool('qmllint-available', 'qmllint', 'qmllint tool'));
  checks.push(checkQtTool('qmlcachegen-available', 'qmlcachegen', 'qmlcachegen AOT compiler'));
  checks.push(checkNodeVersion());
  checks.push(checkBunAvailable());
  checks.push(checkCargoAvailable());
  checks.push(checkRustcAvailable());
  checks.push(checkCmakeAvailable());
  checks.push(checkCmakeVersion());
  checks.push(checkMsvcAvailable());
  checks.push(checkNinjaAvailable());
  checks.push(checkHostLibExists());
  checks.push(await checkConfigValid(options.config));
  checks.push(checkDependenciesResolved());

  const allPassed = checks.every((c) => c.status !== 'fail');

  return { checks, allPassed };
}
