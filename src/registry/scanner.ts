import { join, relative, dirname } from 'node:path';
import { readdir, stat } from 'node:fs/promises';
import type { ScannerConfig, ScanResult, DiscoveredFile } from './types.js';
import { ScanError } from './errors.js';

const BUILTIN_FILES = new Set(['builtins.qmltypes', 'jsroot.qmltypes']);
const VERSION_PATTERN = /\d+\.\d+\.\d+/;

export async function validateQtDir(qtDir: string): Promise<string | null> {
  // Check directory exists
  try {
    const dirStat = await stat(qtDir);
    if (!dirStat.isDirectory()) return null;
  } catch {
    return null;
  }

  // Look for a qmake binary
  const qmakeCandidates = ['bin/qmake.exe', 'bin/qmake', 'bin/qmake6.exe', 'bin/qmake6'];
  let hasQmake = false;
  for (const candidate of qmakeCandidates) {
    try {
      await stat(join(qtDir, candidate));
      hasQmake = true;
      break;
    } catch {
      // not found, try next
    }
  }

  // Check for qml/ directory
  let hasQmlDir = false;
  try {
    const qmlStat = await stat(join(qtDir, 'qml'));
    hasQmlDir = qmlStat.isDirectory();
  } catch {
    // not found
  }

  if (!hasQmake && !hasQmlDir) return null;

  // Extract version from path segments
  const normalized = qtDir.replace(/\\/g, '/');
  const segments = normalized.split('/');
  for (let i = segments.length - 1; i >= 0; i--) {
    const seg = segments[i]!;
    const match = VERSION_PATTERN.exec(seg);
    if (match) return match[0];
  }

  // Try reading qtcoreversion.h for version info
  try {
    const { readFile } = await import('node:fs/promises');
    const versionHeader = join(qtDir, 'include', 'QtCore', 'qtcoreversion.h');
    const content = await readFile(versionHeader, 'utf-8');
    const versionMatch = /QT_VERSION_STR\s+"(\d+\.\d+\.\d+)"/.exec(content);
    if (versionMatch?.[1]) return versionMatch[1];
  } catch {
    // not available
  }

  return null;
}

export async function scan(config: ScannerConfig): Promise<ScanResult> {
  const startTime = performance.now();
  const { qtDir } = config;
  const includeBuiltins = config.includeBuiltins ?? true;
  const includeMetatypes = config.includeMetatypes ?? true;
  const moduleFilter = config.moduleFilter;

  // Validate the Qt directory
  const version = await validateQtDir(qtDir);
  if (version === null) {
    throw new ScanError(
      `Invalid Qt installation directory: ${qtDir}`,
      qtDir,
      'not-qt'
    );
  }

  const warnings: string[] = [];
  const qmltypesFiles: DiscoveredFile[] = [];
  const qmldirFiles: DiscoveredFile[] = [];
  const metatypesFiles: DiscoveredFile[] = [];

  // Scan qml/ directory (and lib/qml/ as fallback for builtins)
  const qmlSearchDirs = [join(qtDir, 'qml')];
  try {
    const libQml = join(qtDir, 'lib', 'qml');
    const libQmlStat = await stat(libQml);
    if (libQmlStat.isDirectory()) qmlSearchDirs.push(libQml);
  } catch {
    // lib/qml doesn't exist
  }

  for (const searchDir of qmlSearchDirs) {
    try {
      await walkQmlDir(searchDir, qtDir, searchDir, qmltypesFiles, qmldirFiles, warnings);
    } catch {
      // directory doesn't exist or can't be read
    }
  }

  // Scan metatypes/ directory
  if (includeMetatypes) {
    const metatypesDir = join(qtDir, 'metatypes');
    try {
      await walkMetatypesDir(metatypesDir, qtDir, metatypesFiles, warnings);
    } catch {
      // metatypes directory may not exist
    }
  }

  // Apply filters
  const filteredQmltypes = applyFilters(qmltypesFiles, moduleFilter, includeBuiltins);
  const filteredQmldir = applyFilters(qmldirFiles, moduleFilter, includeBuiltins);

  const duration = performance.now() - startTime;

  return {
    qmltypesFiles: filteredQmltypes,
    qmldirFiles: filteredQmldir,
    metatypesFiles,
    duration,
    warnings,
  };
}

function applyFilters(
  files: DiscoveredFile[],
  moduleFilter: string[] | undefined,
  includeBuiltins: boolean
): DiscoveredFile[] {
  let result = files;

  if (!includeBuiltins) {
    result = result.filter(f => !f.isBuiltin);
  }

  if (moduleFilter && moduleFilter.length > 0) {
    result = result.filter(f => {
      if (f.isBuiltin) return includeBuiltins;
      if (!f.inferredModule) return false;
      return moduleFilter.some(m => f.inferredModule === m || f.inferredModule?.startsWith(m + '.'));
    });
  }

  return result;
}

function inferModule(filePath: string, qmlRoot: string): string {
  const rel = relative(qmlRoot, dirname(filePath)).replace(/\\/g, '/');
  if (!rel || rel === '.') return '';
  return rel.split('/').join('.');
}

async function walkQmlDir(
  dir: string,
  qtDir: string,
  qmlRoot: string,
  qmltypesFiles: DiscoveredFile[],
  qmldirFiles: DiscoveredFile[],
  warnings: string[]
): Promise<void> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkQmlDir(fullPath, qtDir, qmlRoot, qmltypesFiles, qmldirFiles, warnings);
      continue;
    }

    if (!entry.isFile()) continue;

    const name = entry.name;
    const isQmltypes = name.endsWith('.qmltypes');
    const isQmldir = name === 'qmldir';

    if (!isQmltypes && !isQmldir) continue;

    const fileStat = await stat(fullPath);
    const absolutePath = fullPath;
    const relativePath = relative(qtDir, fullPath).replace(/\\/g, '/');
    const size = fileStat.size;
    const isBuiltin = BUILTIN_FILES.has(name);
    const inferredModule = inferModule(fullPath, qmlRoot);

    if (size === 0) {
      warnings.push(`Empty file: ${relativePath}`);
    }

    const discovered: DiscoveredFile = {
      absolutePath,
      relativePath,
      size,
      inferredModule: inferredModule || undefined,
      isBuiltin,
    };

    if (isQmltypes) {
      qmltypesFiles.push(discovered);
    } else {
      qmldirFiles.push(discovered);
    }
  }
}

async function walkMetatypesDir(
  dir: string,
  qtDir: string,
  metatypesFiles: DiscoveredFile[],
  warnings: string[]
): Promise<void> {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkMetatypesDir(fullPath, qtDir, metatypesFiles, warnings);
      continue;
    }

    if (!entry.isFile()) continue;
    if (!entry.name.endsWith('_metatypes.json')) continue;

    const fileStat = await stat(fullPath);
    const relativePath = relative(qtDir, fullPath).replace(/\\/g, '/');

    if (fileStat.size === 0) {
      warnings.push(`Empty file: ${relativePath}`);
    }

    metatypesFiles.push({
      absolutePath: fullPath,
      relativePath,
      size: fileStat.size,
      inferredModule: undefined,
      isBuiltin: false,
    });
  }
}
