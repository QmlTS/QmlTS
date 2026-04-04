import { existsSync, readdirSync, statSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { QtInstallationNotFoundError, QtToolNotFoundError } from './errors.js';
import { getToolBinaryCandidates, getToolBinaryPath, runTool } from './tool-runner.js';
import type {
  QtInstallation,
  QtToolchainConfig,
  QtToolName,
  QtVersion,
  ToolAvailability,
  ToolInfo,
} from './types.js';

const IS_WINDOWS = process.platform === 'win32';

const COMMON_QT_PATHS: readonly string[] = IS_WINDOWS
  ? ['C:\\Qt', 'D:\\Qt']
  : process.platform === 'darwin'
    ? [`${process.env['HOME']}/Qt`, '/opt/Qt', '/usr/local/Qt']
    : [`${process.env['HOME']}/Qt`, '/opt/Qt', '/usr/lib/qt6', '/usr/local/Qt'];

const KNOWN_TOOLS: readonly QtToolName[] = [
  'qmlformat',
  'qmllint',
  'qmlcachegen',
  'qmltc',
  'qmlimportscanner',
  'qmldom',
  'qml',
  'rcc',
  'qmltyperegistrar',
  'moc',
  'qmlaotstats',
];

export function resolveQtDir(config?: QtToolchainConfig): string | undefined {
  if (config?.qtDir) return config.qtDir;
  const qmltsDir = process.env['QMLTS_QT_DIR'];
  if (qmltsDir) return qmltsDir;
  const qtDir = process.env['QT_DIR'];
  if (qtDir) return qtDir;

  // PATH-based discovery: find qmlformat in PATH and derive Qt root
  const pathEnv = process.env['PATH'];
  if (pathEnv) {
    const pathDirs = pathEnv.split(IS_WINDOWS ? ';' : ':');
    const ext = IS_WINDOWS ? '.exe' : '';
    for (const dir of pathDirs) {
      if (dir && existsSync(join(dir, `qmlformat${ext}`))) {
        const base = basename(dir).toLowerCase();
        if (base !== 'bin' && base !== 'libexec') continue;
        const candidate = resolve(dir, '..');
        if (validateQtDirectory(candidate)) {
          return candidate;
        }
      }
    }
  }

  // Common-path scanning: search well-known Qt installation directories
  for (const root of COMMON_QT_PATHS) {
    if (!existsSync(root)) continue;
    try {
      // Scan for version directories like 6.11.0
      const entries = readdirSync(root, { withFileTypes: true });
      // Sort descending to prefer newest version
      const versionDirs = entries
        .filter((e) => e.isDirectory() && /^\d+\.\d+\.\d+$/.test(e.name))
        .sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }));
      for (const vdir of versionDirs) {
        const versionPath = join(root, vdir.name);
        // Scan platform subdirectories
        const platEntries = readdirSync(versionPath, { withFileTypes: true });
        for (const plat of platEntries) {
          if (!plat.isDirectory()) continue;
          const candidate = join(versionPath, plat.name);
          if (validateQtDirectory(candidate)) {
            return candidate;
          }
        }
      }
    } catch {
      // Permission denied or unreadable — skip
    }
  }

  return undefined;
}

function validateQtDirectory(dir: string): boolean {
  const binDir = join(dir, 'bin');
  const qmlDir = join(dir, 'qml');
  if (!(existsSync(binDir) && statSync(binDir).isDirectory())) return false;
  if (!(existsSync(qmlDir) && statSync(qmlDir).isDirectory())) return false;

  const qmlformatCandidates = getToolBinaryCandidates(
    {
      rootDir: dir,
      binDir,
      qmlDir,
      libDir: join(dir, 'lib'),
      version: { major: 0, minor: 0, patch: 0, string: '0.0.0' },
      platform: '',
    },
    'qmlformat',
  );
  return qmlformatCandidates.some((candidate) => existsSync(candidate));
}

function parseQtVersion(rootDir: string): QtVersion {
  const parts = rootDir.replace(/\\/g, '/').split('/');
  for (const part of parts) {
    const match = part.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (match) {
      return {
        major: Number(match[1]),
        minor: Number(match[2]),
        patch: Number(match[3]),
        string: part,
      };
    }
  }
  return { major: 0, minor: 0, patch: 0, string: '0.0.0' };
}

function detectPlatform(rootDir: string): string {
  return basename(rootDir);
}

export async function discover(config?: QtToolchainConfig): Promise<QtInstallation> {
  const dir = resolveQtDir(config);
  const searched: string[] = [];
  if (config?.qtDir) searched.push(config.qtDir);
  if (process.env['QMLTS_QT_DIR']) searched.push(process.env['QMLTS_QT_DIR']);
  if (process.env['QT_DIR']) searched.push(process.env['QT_DIR']);
  if (!dir) searched.push(...COMMON_QT_PATHS.filter((p) => existsSync(p)));

  if (!dir) {
    throw new QtInstallationNotFoundError(
      searched.length > 0 ? searched : ['(no paths configured)'],
    );
  }

  if (!validateQtDirectory(dir)) {
    throw new QtInstallationNotFoundError([dir]);
  }

  const rootDir = dir;
  const binDir = join(rootDir, 'bin');
  const qmlDir = join(rootDir, 'qml');
  const libDir = join(rootDir, 'lib');
  const version = parseQtVersion(rootDir);
  const platform = detectPlatform(rootDir);

  return { rootDir, binDir, qmlDir, libDir, version, platform };
}

export async function probeToolVersion(
  installation: QtInstallation,
  tool: QtToolName,
): Promise<string | undefined> {
  const binPath = getToolBinaryPath(installation, tool);
  if (!existsSync(binPath)) return undefined;
  try {
    const result = await runTool(installation, tool, ['--version'], {
      timeout: 5000,
    });
    const match = result.stdout.match(/(\d+\.\d+\.\d+)/);
    return match?.[1];
  } catch {
    return undefined;
  }
}

export async function checkTools(installation: QtInstallation): Promise<ToolAvailability> {
  const entries = await Promise.all(
    KNOWN_TOOLS.map(async (name): Promise<[string, ToolInfo]> => {
      const path = getToolBinaryPath(installation, name);
      const available = existsSync(path);
      let version: string | undefined;
      if (available) {
        version = await probeToolVersion(installation, name);
      }
      return [name, { name, path, available, version }];
    }),
  );
  return Object.fromEntries(entries) as unknown as ToolAvailability;
}

export function getToolPath(installation: QtInstallation, tool: QtToolName): string {
  const binPath = getToolBinaryPath(installation, tool);
  if (!existsSync(binPath)) {
    throw new QtToolNotFoundError(tool, getToolBinaryCandidates(installation, tool));
  }
  return binPath;
}

export function getImportPaths(
  installation: QtInstallation,
  extraPaths?: readonly string[],
): readonly string[] {
  const paths: string[] = [installation.qmlDir];
  if (extraPaths) paths.push(...extraPaths);
  return paths;
}
