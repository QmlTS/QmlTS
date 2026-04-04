import { parseLintJson, parseStderr } from './diagnostic.js';
import { withTempQmlFile } from './temp-file.js';
import { runTool } from './tool-runner.js';
import type {
  QmlLintBatchResult,
  QmlLintDiagnostic,
  QmlLintOptions,
  QmlLintResult,
  QtInstallation,
} from './types.js';

export function buildLintArgs(filePaths: readonly string[], options?: QmlLintOptions): string[] {
  const args: string[] = ['--json', '-'];

  if (options?.importPaths) {
    for (const p of options.importPaths) args.push('-I', p);
  }
  if (options?.qmltypesFiles) {
    for (const f of options.qmltypesFiles) args.push('-i', f);
  }
  if (options?.resourceFiles) {
    for (const f of options.resourceFiles) args.push('--resource', f);
  }
  if (options?.silent) args.push('--silent');
  if (options?.ignoreSettings) args.push('--ignore-settings');
  if (options?.bare) args.push('--bare');
  if (options?.fix) args.push('--fix');
  if (options?.dryRun) args.push('--dry-run');
  if (options?.module) args.push('--module');
  if (options?.maxWarnings !== undefined) args.push('--max-warnings', String(options.maxWarnings));
  if (options?.disablePlugins && options.disablePlugins.length > 0) {
    args.push('-D', options.disablePlugins.join(','));
  }
  if (options?.pluginPaths) {
    for (const p of options.pluginPaths) args.push('-P', p);
  }
  if (options?.warningLevels) {
    for (const [category, level] of Object.entries(options.warningLevels)) {
      if (level !== undefined) {
        args.push(`--${category}`, level);
      }
    }
  }

  args.push(...filePaths);
  return args;
}

function buildLintResult(
  exitCode: number,
  stdout: string,
  stderr: string,
  durationMs: number,
  command: string,
  filePath: string,
): QmlLintResult {
  let diagnostics: QmlLintDiagnostic[] = [];
  let valid = true;

  // Try JSON parsing first (from --json - flag)
  const jsonText = stdout.trim();
  if (jsonText.startsWith('{')) {
    try {
      diagnostics = parseLintJson(jsonText);
      // Parse the JSON to check success field
      const parsed = JSON.parse(jsonText);
      const fileEntry = parsed.files?.[0];
      if (fileEntry) {
        valid = fileEntry.success === true;
      }
    } catch {
      // Fall back to stderr parsing
      diagnostics = parseStderr(stderr, filePath);
      valid = exitCode === 0;
    }
  } else {
    diagnostics = parseStderr(stderr, filePath);
    valid = exitCode === 0;
  }

  const summary = {
    errors: diagnostics.filter((d) => d.level === 'error').length,
    warnings: diagnostics.filter((d) => d.level === 'warning').length,
    infos: diagnostics.filter((d) => d.level === 'info').length,
  };

  return { exitCode, stdout, stderr, durationMs, command, valid, diagnostics, summary };
}

export async function lintFile(
  installation: QtInstallation,
  filePath: string,
  options?: QmlLintOptions,
): Promise<QmlLintResult> {
  const args = buildLintArgs([filePath], options);
  const result = await runTool(installation, 'qmllint', args);
  return buildLintResult(
    result.exitCode,
    result.stdout,
    result.stderr,
    result.durationMs,
    result.command,
    filePath,
  );
}

export async function lintString(
  installation: QtInstallation,
  qmlSource: string,
  options?: QmlLintOptions,
): Promise<QmlLintResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => lintFile(installation, tmpPath, options));
}

export async function lintFiles(
  installation: QtInstallation,
  filePaths: readonly string[],
  options?: QmlLintOptions,
): Promise<QmlLintBatchResult> {
  // Run qmllint with all files at once for efficiency
  const args = buildLintArgs(filePaths, options);
  const result = await runTool(installation, 'qmllint', args);

  // Parse the combined JSON output
  const jsonText = result.stdout.trim();
  const perFileResults = new Map<string, QmlLintResult>();

  if (jsonText.startsWith('{')) {
    try {
      const parsed = JSON.parse(jsonText);
      if (!parsed.files || !Array.isArray(parsed.files)) {
        throw new Error('Invalid qmllint JSON output: missing files array');
      }
      for (const fileEntry of parsed.files) {
        const diagnostics = parseLintJson(
          JSON.stringify({ files: [fileEntry], revision: parsed.revision }),
        );
        const valid = fileEntry.success === true;
        const summary = {
          errors: diagnostics.filter((d) => d.level === 'error').length,
          warnings: diagnostics.filter((d) => d.level === 'warning').length,
          infos: diagnostics.filter((d) => d.level === 'info').length,
        };
        perFileResults.set(fileEntry.filename, {
          exitCode: valid ? 0 : 1,
          stdout: result.stdout,
          stderr: result.stderr,
          durationMs: result.durationMs,
          command: result.command,
          valid,
          diagnostics,
          summary,
        });
      }
    } catch {
      // JSON parsing failed — fall back to per-file stderr parsing
      for (const fp of filePaths) {
        const diagnostics = parseStderr(result.stderr, fp);
        const summary = {
          errors: diagnostics.filter((d) => d.level === 'error').length,
          warnings: diagnostics.filter((d) => d.level === 'warning').length,
          infos: diagnostics.filter((d) => d.level === 'info').length,
        };
        perFileResults.set(fp, {
          exitCode: result.exitCode,
          stdout: result.stdout,
          stderr: result.stderr,
          durationMs: result.durationMs,
          command: result.command,
          valid: false,
          diagnostics,
          summary,
        });
      }
    }
  }

  // Map file paths to results (handle path normalization)
  const results = new Map<string, QmlLintResult>();
  const normalize = (p: string) => p.replace(/\\/g, '/');
  for (const fp of filePaths) {
    const normalizedFp = normalize(fp);
    let found = false;
    for (const [filename, lintResult] of perFileResults) {
      const normalizedFilename = normalize(filename);
      if (
        normalizedFp === normalizedFilename ||
        normalizedFp.endsWith(`/${normalizedFilename}`) ||
        normalizedFilename.endsWith(`/${normalizedFp}`)
      ) {
        results.set(fp, lintResult);
        found = true;
        break;
      }
    }
    if (!found) {
      // If not found in JSON, it was likely valid with no output
      results.set(fp, {
        exitCode: 0,
        stdout: '',
        stderr: '',
        durationMs: result.durationMs,
        command: result.command,
        valid: true,
        diagnostics: [],
        summary: { errors: 0, warnings: 0, infos: 0 },
      });
    }
  }

  const passCount = [...results.values()].filter((r) => r.valid).length;
  const totalDiagnostics = [...results.values()].reduce((sum, r) => sum + r.diagnostics.length, 0);

  return {
    results,
    totalFiles: filePaths.length,
    passCount,
    failCount: filePaths.length - passCount,
    totalDiagnostics,
  };
}

export async function lintModule(
  installation: QtInstallation,
  moduleName: string,
  options?: QmlLintOptions,
): Promise<QmlLintResult> {
  const args = buildLintArgs([], { ...options, module: true });
  args.push(moduleName);
  const result = await runTool(installation, 'qmllint', args);
  return buildLintResult(
    result.exitCode,
    result.stdout,
    result.stderr,
    result.durationMs,
    result.command,
    moduleName,
  );
}

export async function listPlugins(installation: QtInstallation): Promise<readonly string[]> {
  const result = await runTool(installation, 'qmllint', ['--list-plugins']);
  // qmllint outputs plugin list to stderr
  const output = result.stderr || result.stdout;
  const lines = output.split('\n').map((l) => l.trim());
  // Skip header line and parse table
  const plugins: string[] = [];
  for (const line of lines.slice(1)) {
    if (!line) continue;
    const name = line.split(/\s+/)[0];
    if (name) plugins.push(name);
  }
  return plugins;
}
