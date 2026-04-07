import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { ViewModelSchema } from '../../viewmodel/schema.js';
import type { Diagnostic } from '../diagnostics.js';
import { compileProjectCore, createProjectContext } from './compiler.js';
import { createDiagnosticReporter } from './diagnostic-reporter.js';
import { buildEventBindings } from './event-bindings.js';
import { hashContent } from './hash-utils.js';
import type {
  CompilationResult,
  CompilationUnit,
  CompilerOptions,
  FileCacheEntry,
  IncrementalCompiler,
} from './pipeline-types.js';

export function createIncrementalCompiler(): IncrementalCompiler {
  const cache = new Map<string, FileCacheEntry>();
  const vmFileDeps = new Map<string, Set<string>>();
  let totalLookups = 0;
  let totalHits = 0;
  let lastDirtySet = new Set<string>();

  function getChangedFiles(): readonly string[] {
    return [...lastDirtySet];
  }

  function needsRecompile(filePath: string): boolean {
    return !cache.has(resolve(filePath));
  }

  function cacheFile(filePath: string, entry: FileCacheEntry): void {
    cache.set(resolve(filePath), entry);
  }

  function getCachedFile(filePath: string): FileCacheEntry | undefined {
    return cache.get(resolve(filePath));
  }

  function cacheUnit(unit: CompilationUnit): void {
    const key = resolve(unit.sourceFile);
    const existing = cache.get(key);
    if (existing) {
      cache.set(key, {
        ...existing,
        units: [...existing.units, unit],
      });
    } else {
      cache.set(key, {
        contentHash: 0,
        units: [unit],
        schemas: unit.schema ? [unit.schema] : [],
        schemaHash: 0,
      });
    }
  }

  function getCachedUnit(filePath: string): CompilationUnit | undefined {
    const entry = cache.get(resolve(filePath));
    return entry?.units[0];
  }

  function clearCache(): void {
    cache.clear();
    vmFileDeps.clear();
    totalLookups = 0;
    totalHits = 0;
    lastDirtySet = new Set();
  }

  function getCacheStats(): {
    entries: number;
    hitRate: number;
    sizeBytes: number;
  } {
    const entries = cache.size;
    const hitRate = totalLookups === 0 ? 0 : totalHits / totalLookups;
    let sizeBytes = 0;
    for (const entry of cache.values()) {
      for (const unit of entry.units) {
        sizeBytes += unit.qmlContent.length * 2;
        if (unit.schema) {
          sizeBytes += JSON.stringify(unit.schema).length * 2;
        }
      }
    }
    return { entries, hitRate, sizeBytes };
  }

  function buildDirtySet(
    project: readonly import('../analyzer/analyzer-types.js').DiscoveredSourceFile[],
  ): Set<string> {
    const dirty = new Set<string>();

    for (const file of project) {
      const absPath = resolve(file.filePath);
      totalLookups++;

      const cached = cache.get(absPath);
      if (!cached) {
        dirty.add(absPath);
        continue;
      }

      let content: string;
      try {
        content = readFileSync(absPath, 'utf-8');
      } catch {
        dirty.add(absPath);
        continue;
      }

      const currentHash = hashContent(content);
      if (currentHash !== cached.contentHash) {
        dirty.add(absPath);
      } else {
        totalHits++;
      }
    }

    // Schema-based invalidation: if a dirty VM file changes,
    // invalidate dependent view files
    const vmDirtyFiles = [...dirty].filter((f) => vmFileDeps.has(f));
    for (const vmFile of vmDirtyFiles) {
      const deps = vmFileDeps.get(vmFile);
      if (deps) {
        for (const viewFile of deps) {
          if (!dirty.has(viewFile)) {
            dirty.add(viewFile);
          }
        }
      }
    }

    return dirty;
  }

  function updateDependencyGraph(
    project: readonly import('../analyzer/analyzer-types.js').DiscoveredSourceFile[],
  ): void {
    vmFileDeps.clear();
    const vmFileMap = new Map<string, string>();

    for (const file of project) {
      const absPath = resolve(file.filePath);
      for (const vm of file.viewModels) {
        vmFileMap.set(vm.className, absPath);
      }
    }

    for (const file of project) {
      const absPath = resolve(file.filePath);
      for (const view of file.views) {
        if (view.vmParam?.type) {
          const vmFile = vmFileMap.get(view.vmParam.type);
          if (vmFile && vmFile !== absPath) {
            if (!vmFileDeps.has(vmFile)) {
              vmFileDeps.set(vmFile, new Set());
            }
            vmFileDeps.get(vmFile)!.add(absPath);
          }
        }
      }
    }
  }

  function updateCache(
    coreResult: {
      units: CompilationUnit[];
      schemas: ViewModelSchema[];
    },
    dirtyFiles: ReadonlySet<string>,
  ): void {
    const fileUnits = new Map<string, CompilationUnit[]>();
    const fileSchemas = new Map<string, ViewModelSchema[]>();

    for (const unit of coreResult.units) {
      const absPath = resolve(unit.sourceFile);
      if (!dirtyFiles.has(absPath)) continue;
      if (!fileUnits.has(absPath)) fileUnits.set(absPath, []);
      fileUnits.get(absPath)!.push(unit);
      if (unit.schema) {
        if (!fileSchemas.has(absPath)) fileSchemas.set(absPath, []);
        fileSchemas.get(absPath)!.push(unit.schema);
      }
    }

    for (const filePath of dirtyFiles) {
      let content: string;
      try {
        content = readFileSync(filePath, 'utf-8');
      } catch {
        cache.delete(filePath);
        continue;
      }

      const units = fileUnits.get(filePath) ?? [];
      const schemas = fileSchemas.get(filePath) ?? [];

      cache.set(filePath, {
        contentHash: hashContent(content),
        units,
        schemas,
        schemaHash: hashContent(JSON.stringify(schemas)),
      });
    }
  }

  function incrementalCompile(options: CompilerOptions): CompilationResult {
    const startTime = performance.now();
    const reporter = createDiagnosticReporter(options.diagnostics);

    const ctx = createProjectContext(options, reporter);
    if (!ctx) {
      return buildEmptyIncrementalResult(reporter, startTime);
    }

    // Resolve all file paths for consistency
    const resolvedProject = ctx.project.map((f) => ({
      ...f,
      filePath: resolve(f.filePath),
    }));
    const resolvedCtx = { ...ctx, project: resolvedProject };

    const dirtyFiles = buildDirtySet(resolvedProject);
    lastDirtySet = dirtyFiles;

    updateDependencyGraph(resolvedProject);

    const coreResult = compileProjectCore(resolvedCtx, dirtyFiles, cache, reporter);

    updateCache(coreResult, dirtyFiles);

    const eventBindings = buildEventBindings(coreResult.schemas);
    const durationMs = Math.round(performance.now() - startTime);

    const allDiagnostics = [
      ...coreResult.diagnostics,
      ...coreResult.units.flatMap((u) => u.diagnostics),
    ];
    const success = !allDiagnostics.some((d) => d.severity === 'error');

    return {
      units: coreResult.units,
      eventBindings,
      diagnostics: allDiagnostics,
      success,
      stats: { ...coreResult.stats, durationMs },
    };
  }

  return {
    getChangedFiles,
    needsRecompile,
    cacheFile,
    getCachedFile,
    cacheUnit,
    getCachedUnit,
    clearCache,
    getCacheStats,
    compile: incrementalCompile,
  };
}

function buildEmptyIncrementalResult(
  reporter: { getDiagnostics(): readonly Diagnostic[] },
  startTime: number,
): CompilationResult {
  return {
    units: [],
    eventBindings: { commands: [], effects: [] },
    diagnostics: [...reporter.getDiagnostics()],
    success: false,
    stats: {
      totalFiles: 0,
      totalViewModels: 0,
      totalViews: 0,
      totalStates: 0,
      totalCommands: 0,
      totalEffects: 0,
      durationMs: Math.round(performance.now() - startTime),
    },
  };
}
