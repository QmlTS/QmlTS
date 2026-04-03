import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ScanError } from './errors.js';
import { parseMetatypes } from './metatypes-parser.js';
import { normalize } from './normalizer.js';
import { parseQmldir } from './qmldir-parser.js';
import { parseQmltypes } from './qmltypes-parser.js';
import { RegistryQuery } from './registry-query.js';
import { scan, validateQtDir } from './scanner.js';
import { RegistrySnapshot } from './snapshot.js';
import type { BuildConfig, BuildResult, NormalizerConfig, ParseDiagnostic } from './types.js';

const DEFAULT_PARSE_CONCURRENCY = 16;

export class RegistryBuilder {
  async build(config: BuildConfig): Promise<BuildResult> {
    const startTime = performance.now();
    const diagnostics: ParseDiagnostic[] = [];
    const progress = config.onProgress ?? (() => {});

    // Phase 1: Validate Qt directory
    progress('validating', 0, 'Validating Qt installation...');
    const qtVersion = await validateQtDir(config.qtDir);
    if (!qtVersion) {
      throw new ScanError(
        `Invalid Qt installation directory: ${config.qtDir}`,
        config.qtDir,
        'not-qt',
      );
    }

    // Phase 2: Scan for metadata files
    progress('scanning', 10, 'Scanning for metadata files...');
    const scanResult = await scan(config);
    scanResult.warnings.forEach((w) => diagnostics.push({ level: 'warning', message: w }));

    // Phase 3: Parse qmltypes files
    progress(
      'parsing-qmltypes',
      20,
      `Parsing ${scanResult.qmltypesFiles.length} qmltypes files...`,
    );
    const qmltypesResults = await mapWithConcurrency(
      scanResult.qmltypesFiles,
      DEFAULT_PARSE_CONCURRENCY,
      async (f) => {
        const content = await readFile(f.absolutePath, 'utf-8');
        return parseQmltypes(content, f.absolutePath);
      },
    );
    for (const r of qmltypesResults) {
      diagnostics.push(...r.diagnostics);
    }

    // Phase 4: Parse qmldir files
    progress('parsing-qmldir', 40, `Parsing ${scanResult.qmldirFiles.length} qmldir files...`);
    const qmldirResults = await mapWithConcurrency(
      scanResult.qmldirFiles,
      DEFAULT_PARSE_CONCURRENCY,
      async (f) => {
        const content = await readFile(f.absolutePath, 'utf-8');
        return parseQmldir(content, f.absolutePath);
      },
    );
    for (const r of qmldirResults) {
      diagnostics.push(...r.diagnostics);
    }

    // Phase 5: Parse metatypes files
    progress(
      'parsing-metatypes',
      55,
      `Parsing ${scanResult.metatypesFiles.length} metatypes files...`,
    );
    const metatypesResults = await mapWithConcurrency(
      scanResult.metatypesFiles,
      DEFAULT_PARSE_CONCURRENCY,
      async (f) => {
        const content = await readFile(f.absolutePath, 'utf-8');
        return parseMetatypes(content, f.absolutePath);
      },
    );
    for (const r of metatypesResults) {
      diagnostics.push(...r.diagnostics);
    }

    // Phase 6: Normalize (merge three sources)
    progress('normalizing', 70, 'Merging type data...');
    const normConfig: NormalizerConfig = {
      primarySource: config.normalizer?.primarySource ?? 'qmltypes-primary',
      resolveInheritance: config.normalizer?.resolveInheritance ?? true,
      filterPrivate: config.normalizer?.filterPrivate ?? true,
      mergeOverloads: config.normalizer?.mergeOverloads ?? false,
    };

    const normalizeResult = normalize(
      qmltypesResults.map((r) => r.file),
      qmldirResults.map((r) => r.file),
      metatypesResults.map((r) => r.file),
      normConfig,
      qtVersion,
      config.qtDir,
    );
    diagnostics.push(...normalizeResult.diagnostics);

    // Phase 7: Build query index
    progress('indexing', 90, 'Building search indexes...');
    const query = new RegistryQuery(normalizeResult.registry);

    const duration = performance.now() - startTime;
    normalizeResult.registry.buildDuration = duration;

    // Completed
    progress(
      'completed',
      100,
      `Done. ${normalizeResult.registry.stats.typeCount} types in ${Math.round(duration)}ms`,
    );

    const hasErrors = diagnostics.some((d) => d.level === 'error');

    return {
      registry: normalizeResult.registry,
      query,
      diagnostics,
      success: !hasErrors,
      duration,
    };
  }

  async buildCached(config: BuildConfig, cacheDir: string): Promise<BuildResult> {
    const snapshot = new RegistrySnapshot();
    const cacheFile = join(cacheDir, 'registry.snapshot.json');

    // Try loading from cache
    try {
      if (await snapshot.isValid(cacheFile, config.qtDir)) {
        const registry = await snapshot.loadFromFile(cacheFile);
        const query = new RegistryQuery(registry);
        return {
          registry,
          query,
          diagnostics: [],
          success: true,
          duration: 0,
        };
      }
    } catch {
      // Cache miss or invalid — rebuild
    }

    // Build fresh
    const result = await this.build(config);

    // Cache the result
    if (result.success) {
      try {
        const { mkdir } = await import('node:fs/promises');
        await mkdir(cacheDir, { recursive: true });
        await snapshot.saveToFile(result.registry, cacheFile);
      } catch {
        // Caching failure is non-fatal
      }
    }

    return result;
  }
}

async function mapWithConcurrency<T, R>(
  items: T[],
  concurrency: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  if (items.length === 0) return [];

  const results = new Array<R>(items.length);
  let nextIndex = 0;

  const runWorker = async (): Promise<void> => {
    while (true) {
      const currentIndex = nextIndex++;
      if (currentIndex >= items.length) return;
      results[currentIndex] = await worker(items[currentIndex]!, currentIndex);
    }
  };

  const workerCount = Math.min(concurrency, items.length);
  await Promise.all(Array.from({ length: workerCount }, () => runWorker()));
  return results;
}
