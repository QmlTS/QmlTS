import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';
import { runTool } from './tool-runner.js';
import type { QtInstallation, RccOptions, RccResult } from './types.js';

export function buildRccArgs(qrcFile: string, options?: RccOptions): string[] {
  const args: string[] = [];
  if (options?.outputFile) args.push('-o', options.outputFile);
  if (options?.name) args.push('--name', options.name);
  if (options?.root) args.push('--root', options.root);
  if (options?.compressAlgo) args.push('--compress-algo', options.compressAlgo);
  if (options?.compressLevel !== undefined) args.push('--compress', String(options.compressLevel));
  if (options?.noCompress) args.push('--no-compress');
  if (options?.generator) args.push('-g', options.generator);
  if (options?.binary) args.push('--binary');
  if (options?.useNamespace) args.push('--namespace');
  if (options?.verbose) args.push('--verbose');
  if (options?.depfile) args.push('--depfile', options.depfile);
  if (options?.list) args.push('--list');
  if (options?.listMapping) args.push('--list-mapping');
  args.push(qrcFile);
  return args;
}

export async function compile(
  installation: QtInstallation,
  qrcFile: string,
  options?: RccOptions,
): Promise<RccResult> {
  const needsTempOutput = !options?.outputFile && !options?.list && !options?.listMapping;
  let tempDir: string | undefined;
  let outputFile: string | undefined;

  if (needsTempOutput) {
    tempDir = await mkdtemp(join(tmpdir(), 'qmlts-rcc-'));
    outputFile = join(tempDir, `${basename(qrcFile, '.qrc')}_rcc.cpp`);
  } else {
    outputFile = options?.outputFile;
  }

  const mergedOptions: RccOptions = {
    ...options,
    outputFile: needsTempOutput ? outputFile : options?.outputFile,
  };

  const args = buildRccArgs(qrcFile, mergedOptions);
  const result = await runTool(installation, 'rcc', args);
  const success = result.exitCode === 0;

  let entries: readonly string[] | undefined;
  if (options?.list && success) {
    entries = result.stdout
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
  }

  let mappings: ReadonlyMap<string, string> | undefined;
  if (options?.listMapping && success) {
    const map = new Map<string, string>();
    for (const line of result.stdout.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      // Format: <resource_path>\t<real_path>
      const tabIdx = trimmed.indexOf('\t');
      if (tabIdx > 0) {
        map.set(trimmed.slice(0, tabIdx), trimmed.slice(tabIdx + 1));
      }
    }
    mappings = map;
  }

  if (tempDir) {
    await rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }

  return {
    ...result,
    success,
    outputFile: needsTempOutput ? undefined : outputFile,
    entries,
    mappings,
  };
}

export async function listEntries(
  installation: QtInstallation,
  qrcFile: string,
): Promise<readonly string[]> {
  const result = await compile(installation, qrcFile, { list: true });
  return result.entries ?? [];
}

export async function listMappings(
  installation: QtInstallation,
  qrcFile: string,
): Promise<ReadonlyMap<string, string>> {
  const result = await compile(installation, qrcFile, { listMapping: true });
  return result.mappings ?? new Map();
}

export async function generateProjectQrc(
  installation: QtInstallation,
  dir: string,
): Promise<string> {
  const result = await runTool(installation, 'rcc', ['--project'], { cwd: dir });
  return result.stdout;
}

export function createQrcXml(
  files: readonly string[],
  options?: { readonly prefix?: string },
): string {
  const prefix = options?.prefix ?? '/';
  const entries = files.map((f) => `<file>${f}</file>`).join('\n');
  return `<!DOCTYPE RCC><RCC version="1.0">
<qresource prefix="${prefix}">
${entries}
</qresource>
</RCC>
`;
}
