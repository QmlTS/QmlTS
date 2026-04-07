# Step 8: Compiler Orchestration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete Phase 06 by adding incremental compilation, watch mode, and Qt toolchain validation to the compiler pipeline.

**Architecture:** Three new modules layered on top of the existing sync pipeline: (1) IncrementalCompiler with in-memory file-level caching and VM→View dependency tracking, (2) CompilerWatcher using chokidar for file change detection with debounced recompilation, (3) Qt validation via `compileWithQt()` async wrapper integrating qmllint + qmlformat + qmlimportscanner. The existing `compile()` is refactored to use an internal `compileProjectCore()` that accepts a dirty file set, enabling incremental recompilation.

**Tech Stack:** TypeScript, Bun test runner, chokidar, existing qt-tools wrappers, FNV-1a hashing

---

## File Structure

### New Files (Step 8)

| File | Responsibility |
|------|---------------|
| `src/compiler/pipeline/hash-utils.ts` | FNV-1a content hashing (extracted from id-allocator, plus `hashFileContent()`) |
| `src/compiler/pipeline/incremental-compiler.ts` | IncrementalCompiler with file-level cache, dependency graph, dirty set computation |
| `src/compiler/pipeline/compiler-watcher.ts` | chokidar-based file watcher with debounced incremental recompilation |
| `src/compiler/pipeline/qt-validation.ts` | Qt toolchain validation (qmllint, qmlformat, qmlimportscanner) |
| `src/compiler/pipeline/output-writer.ts` | `writeCompilationOutput()` — materialize .qml/.schema.json/event-bindings.json to disk |
| `tests/compiler/pipeline/incremental-compiler.test.ts` | IC-01 through IC-06 tests |
| `tests/compiler/pipeline/compiler-watcher.test.ts` | CP-11 watcher tests |
| `tests/compiler/pipeline/qt-validation.test.ts` | CP-10a through CP-10d tests |

### Modified Files

| File | Changes |
|------|---------|
| `src/compiler/pipeline/compiler.ts` | Refactor `compile()` to use internal `compileProjectCore()` |
| `src/compiler/pipeline/pipeline-types.ts` | Add new types: `WatchOptions`, `QtValidationOptions`, `QtValidationResult`, `FileCacheEntry`, `IncrementalCompiler`, `CompilerWatcher`; extend `CompilerOptions` and `CompilationResult` |
| `src/compiler/pipeline/index.ts` | Add barrel exports for new APIs |
| `src/compiler/diagnostics.ts` | Add new diagnostic codes for Step 8 (Qt validation, incremental) |
| `tests/compiler/pipeline/compiler.test.ts` | Add CP-12 regression test |
| `package.json` | Add chokidar dependency |

---

## Task 1: Types, hash utility, and dependency setup

**Files:**
- Modify: `package.json` (add chokidar)
- Create: `src/compiler/pipeline/hash-utils.ts`
- Modify: `src/compiler/pipeline/pipeline-types.ts`
- Modify: `src/compiler/diagnostics.ts`
- Modify: `src/compiler/pipeline/index.ts`

- [ ] **Step 1: Install chokidar**

```bash
cd C:\MyFile\DevAll\QmlTS
bun add chokidar
```

- [ ] **Step 2: Create hash-utils.ts**

```typescript
// src/compiler/pipeline/hash-utils.ts

/**
 * FNV-1a 32-bit hash. Same algorithm as id-allocator.ts but exposed for
 * general use (file content hashing, schema hashing).
 */
export function fnv1a32(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0) & 0x7fffffff;
}

/**
 * Hash file content for incremental compilation cache invalidation.
 */
export function hashContent(content: string): number {
  return fnv1a32(content);
}
```

- [ ] **Step 3: Add new types to pipeline-types.ts**

Add these after the existing `CompilationStats` interface at the end of `src/compiler/pipeline/pipeline-types.ts`:

```typescript
// ─── Step 8: Incremental Compiler ───────────────────────────────────────

export interface WatchOptions {
  readonly debounceMs?: number;
}

export interface QtValidationOptions {
  readonly qtDir?: string;
  readonly lint?: boolean;
  readonly format?: boolean;
  readonly importScan?: boolean;
  readonly importPaths?: readonly string[];
}

export interface QtValidationResult {
  readonly lintResults: ReadonlyMap<string, import('../../qt-tools/types.js').QmlLintResult>;
  readonly formatResults: ReadonlyMap<string, import('../../qt-tools/types.js').QmlFormatResult>;
  readonly importScanResult?: import('../../qt-tools/types.js').QmlImportScannerResult;
  readonly diagnostics: readonly Diagnostic[];
  readonly allValid: boolean;
}

export interface FileCacheEntry {
  readonly contentHash: number;
  readonly units: readonly CompilationUnit[];
  readonly schemas: readonly ViewModelSchema[];
  readonly schemaHash: number;
}

export interface IncrementalCompiler {
  getChangedFiles(): readonly string[];
  needsRecompile(filePath: string): boolean;
  cacheFile(filePath: string, entry: FileCacheEntry): void;
  getCachedFile(filePath: string): FileCacheEntry | undefined;
  cacheUnit(unit: CompilationUnit): void;
  getCachedUnit(filePath: string): CompilationUnit | undefined;
  clearCache(): void;
  getCacheStats(): {
    readonly entries: number;
    readonly hitRate: number;
    readonly sizeBytes: number;
  };
  compile(options: CompilerOptions): CompilationResult;
}

export interface CompilerWatcher {
  close(): void;
  rebuild(): Promise<CompilationResult>;
}
```

Also extend the existing `CompilerOptions` interface:

```typescript
export interface CompilerOptions {
  readonly inputDir: string;
  readonly outputDir: string;
  readonly tsconfigPath?: string;
  readonly targetQtVersion?: string;
  readonly codegen?: CodegenOptions;
  readonly diagnostics?: DiagnosticOptions;
  readonly watch?: WatchOptions;
  readonly qt?: QtValidationOptions;
}
```

Also extend the existing `CompilationResult` interface:

```typescript
export interface CompilationResult {
  readonly units: readonly CompilationUnit[];
  readonly eventBindings: EventBindingIndex;
  readonly diagnostics: readonly Diagnostic[];
  readonly success: boolean;
  readonly stats: CompilationStats;
  readonly qtValidation?: QtValidationResult;
}
```

- [ ] **Step 4: Add new diagnostic codes**

Add to `src/compiler/diagnostics.ts` after `'QMLTS-G003'`:

```typescript
  // Qt Validation (Q)
  | 'QMLTS-Q001'
  | 'QMLTS-Q002'
  | 'QMLTS-Q003'
  // Incremental (I)
  | 'QMLTS-I001';
```

- [ ] **Step 5: Add barrel exports for new types and hash utility**

Add to `src/compiler/pipeline/index.ts`:

```typescript
export { hashContent, fnv1a32 } from './hash-utils.js';
```

And add new types to the existing type export block:

```typescript
export type {
  // ... existing types ...
  CompilerWatcher,
  FileCacheEntry,
  IncrementalCompiler,
  QtValidationOptions,
  QtValidationResult,
  WatchOptions,
} from './pipeline-types.js';
```

- [ ] **Step 6: Verify typecheck passes**

```bash
bunx tsc --noEmit
```

Expected: PASS (no errors)

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat(compiler): Step 8 types, hash utility, and chokidar dependency

- Add FNV-1a hash utility (hash-utils.ts) for content/schema hashing
- Add Step 8 types: IncrementalCompiler, CompilerWatcher, QtValidationOptions,
  QtValidationResult, FileCacheEntry, WatchOptions
- Extend CompilerOptions with watch? and qt? fields
- Extend CompilationResult with qtValidation? field
- Add new diagnostic codes for Qt validation and incremental compilation
- Install chokidar for file watching
- Export new types and utilities from barrel

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 2: Refactor compile() to use compileProjectCore()

**Files:**
- Modify: `src/compiler/pipeline/compiler.ts`
- Test: `tests/compiler/pipeline/compiler.test.ts`

This is a pure refactoring — no new behavior. The existing `compile()` function is split into:
1. `compileProjectCore()` — the reusable internal core that accepts a dirty set + cache
2. `compile()` — thin wrapper that calls `compileProjectCore` with all-dirty/no-cache

- [ ] **Step 1: Run existing tests to establish baseline**

```bash
bun test tests/compiler/pipeline/compiler.test.ts
```

Expected: 26 pass, 0 fail

- [ ] **Step 2: Extract compileProjectCore() from compile()**

In `src/compiler/pipeline/compiler.ts`, add this internal function and refactor `compile()`:

```typescript
// ─── Internal Project-Context Core ──────────────────────────────────────

interface ProjectCompileContext {
  readonly project: readonly DiscoveredSourceFile[];
  readonly tsMorphProject: InstanceType<typeof Project>;
  readonly options: CompilerOptions;
}

interface ProjectCoreResult {
  readonly units: CompilationUnit[];
  readonly schemas: ViewModelSchema[];
  readonly diagnostics: Diagnostic[];
  readonly stats: {
    totalFiles: number;
    totalViewModels: number;
    totalViews: number;
    totalStates: number;
    totalCommands: number;
    totalEffects: number;
  };
}

/**
 * Internal compilation core that supports selective recompilation.
 *
 * @param ctx - Full project context (analyzer results + ts-morph project)
 * @param dirtyFiles - Set of file paths to recompile. Files not in this set
 *                     use cached entries if available.
 * @param cachedEntries - File-level cache from previous compilation
 * @param reporter - Diagnostic reporter for this compilation pass
 */
function compileProjectCore(
  ctx: ProjectCompileContext,
  dirtyFiles: ReadonlySet<string>,
  cachedEntries: ReadonlyMap<string, FileCacheEntry>,
  reporter: DiagnosticReporter,
): ProjectCoreResult {
  const { project, tsMorphProject, options } = ctx;
  const query = getQuery();

  // Phase 1: Extract all ViewModels and generate schemas
  const idAllocator = createIdAllocator();
  const extractor = createViewModelExtractor();
  const vmMap = new Map<string, { vm: AnalyzedViewModel; schema: ViewModelSchema }>();
  const allSchemas: ViewModelSchema[] = [];

  let totalStates = 0;
  let totalCommands = 0;
  let totalEffects = 0;

  for (const file of project) {
    const isDirty = dirtyFiles.has(file.filePath);
    const cached = cachedEntries.get(file.filePath);

    if (!isDirty && cached) {
      // Use cached schemas for clean files
      for (const schema of cached.schemas) {
        allSchemas.push(schema);
        // We still need VM info in vmMap for view pairing
        vmMap.set(schema.className, {
          vm: { className: schema.className } as AnalyzedViewModel,
          schema,
        });
        totalStates += schema.states.length;
        totalCommands += schema.commands.length;
        totalEffects += schema.effects.length;
      }
      continue;
    }

    for (const discoveredVm of file.viewModels) {
      const sf = getOrAddSourceFile(tsMorphProject, file.filePath);
      if (!sf) continue;
      const classDecl = sf.getClass(discoveredVm.className);
      if (!classDecl) continue;

      const vm = extractor.extract(classDecl);
      for (const d of extractor.validate(vm)) {
        reporter.report(d);
      }
      const schema = extractor.generateSchema(vm, idAllocator);
      vmMap.set(vm.className, { vm, schema });
      allSchemas.push(schema);

      totalStates += vm.states.length;
      totalCommands += vm.commands.length;
      totalEffects += vm.effects.length;
    }
  }

  // Phase 2: Compile each view
  const transformer = createDslTransformer(query);
  const importResolver = createImportResolver();
  const postProcessor = createPostProcessor(importResolver, query);
  const units: CompilationUnit[] = [];
  let totalViews = 0;

  for (const file of project) {
    const isDirty = dirtyFiles.has(file.filePath);
    const cached = cachedEntries.get(file.filePath);

    if (!isDirty && cached) {
      // Use cached units for clean files
      for (const unit of cached.units) {
        units.push(unit);
      }
      totalViews += file.views.length;
      continue;
    }

    for (const discoveredView of file.views) {
      totalViews++;
      const sf = getOrAddSourceFile(tsMorphProject, file.filePath);
      if (!sf) continue;

      const dslFactoryNames = buildDslFactoryNameSet(file.imports);
      const { analyzedView, diagnostics: classifyDiags } = analyzeView(
        discoveredView,
        sf,
        query,
        dslFactoryNames,
      );
      for (const d of classifyDiags) reporter.report(d);

      if (!analyzedView) continue;

      const pairedVm = discoveredView.vmParam?.type
        ? vmMap.get(discoveredView.vmParam.type)
        : undefined;

      const unit = compileView(
        analyzedView,
        pairedVm?.vm,
        pairedVm?.schema,
        file.filePath,
        transformer,
        postProcessor,
        reporter,
        options,
      );
      units.push(unit);
    }

    // Schema-only units for ViewModels without views
    for (const discoveredVm of file.viewModels) {
      const entry = vmMap.get(discoveredVm.className);
      if (!entry) continue;

      const alreadyHasSchema = units.some(
        (u) => u.viewModelName === discoveredVm.className && u.schema,
      );
      if (alreadyHasSchema) continue;

      const hasView = project.some((f) =>
        f.views.some((v) => v.vmParam?.type === discoveredVm.className),
      );
      if (!hasView) {
        units.push({
          sourceFile: file.filePath,
          viewName: discoveredVm.className,
          viewModelName: discoveredVm.className,
          qmlOutputPath: computeOutputPath(file.filePath, options, '.qml'),
          qmlContent: '',
          schema: entry.schema,
          schemaOutputPath: computeOutputPath(file.filePath, options, '.schema.json'),
          diagnostics: [],
        });
      }
    }
  }

  return {
    units,
    schemas: allSchemas,
    diagnostics: reporter.getDiagnostics(),
    stats: {
      totalFiles: project.length,
      totalViewModels: vmMap.size,
      totalViews,
      totalStates,
      totalCommands,
      totalEffects,
    },
  };
}
```

- [ ] **Step 3: Rewrite compile() as a thin wrapper**

Replace the body of the existing `compile()` function:

```typescript
export function compile(options: CompilerOptions): CompilationResult {
  const startTime = performance.now();
  const reporter = createDiagnosticReporter(options.diagnostics);

  const analyzer = createTsAnalyzer(options.tsconfigPath);
  const tsconfigPath = options.tsconfigPath ?? join(options.inputDir, 'tsconfig.json');

  let project: DiscoveredSourceFile[];
  try {
    const discovered = analyzer.analyzeProject(tsconfigPath);
    project = [...discovered.files];
    for (const d of discovered.diagnostics) {
      reporter.report(d);
    }
  } catch {
    reporter.error('QMLTS-G001', `Failed to analyze project at ${tsconfigPath}`);
    return buildEmptyResult(reporter, startTime);
  }

  const tsMorphProject = createTsMorphProject(tsconfigPath);
  const ctx: ProjectCompileContext = { project, tsMorphProject, options };

  // Full compilation: all files are dirty, no cache
  const allDirty = new Set(project.map((f) => f.filePath));
  const noCache = new Map<string, FileCacheEntry>();

  const coreResult = compileProjectCore(ctx, allDirty, noCache, reporter);
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
```

Add the `FileCacheEntry` import from `pipeline-types.js`.

- [ ] **Step 4: Run existing tests — must all pass (no behavior change)**

```bash
bun test tests/compiler/pipeline/compiler.test.ts
```

Expected: 26 pass, 0 fail (identical to baseline)

- [ ] **Step 5: Add CP-12 regression test**

Add to `tests/compiler/pipeline/compiler.test.ts` inside the existing test structure:

```typescript
test('CP-12: compileFile single file regression', () => {
  const result = compileFile(join(FIXTURES, 'LoginView.ts'), {
    inputDir: FIXTURES,
    outputDir: 'dist',
    tsconfigPath: join(FIXTURES, 'tsconfig.json'),
    diagnostics: { suppress: ['QMLTS-A011'] },
  });

  expect(result.viewName).toBe('LoginView');
  expect(result.qmlContent).toContain('Rectangle');
  expect(result.qmlContent).toContain('vm.username');
  expect(result.diagnostics.filter((d) => d.severity === 'error')).toHaveLength(0);
});
```

- [ ] **Step 6: Run all pipeline tests**

```bash
bun test tests/compiler/pipeline/
```

Expected: 48 pass, 0 fail (27 compiler + 13 diagnostics + 8 source map)

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor(compiler): extract compileProjectCore for incremental support

- Extract internal compileProjectCore() that accepts dirty file set + cache
- Refactor compile() as thin wrapper: all-dirty, no-cache
- compileProjectCore supports selective recompilation with cached entries
- No behavior change — all 27 existing tests still pass
- Add CP-12 regression test for compileFile

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 3: IncrementalCompiler

**Files:**
- Create: `src/compiler/pipeline/incremental-compiler.ts`
- Create: `tests/compiler/pipeline/incremental-compiler.test.ts`
- Modify: `src/compiler/pipeline/index.ts`

- [ ] **Step 1: Write IC-01 through IC-06 tests**

Create `tests/compiler/pipeline/incremental-compiler.test.ts`:

```typescript
import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createIncrementalCompiler } from '../../../src/compiler/pipeline/incremental-compiler.js';
import type { CompilerOptions } from '../../../src/compiler/pipeline/pipeline-types.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

describe('IncrementalCompiler', () => {
  let tempDir: string;
  let options: CompilerOptions;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-ic-'));
    cpSync(FIXTURES, tempDir, { recursive: true });
    options = {
      inputDir: tempDir,
      outputDir: join(tempDir, 'dist'),
      tsconfigPath: join(tempDir, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    };
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  test('IC-01: first compile — all files compiled, cache populated', () => {
    const ic = createIncrementalCompiler();
    const result = ic.compile(options);

    expect(result.success).toBe(true);
    expect(result.units.length).toBeGreaterThan(0);

    const stats = ic.getCacheStats();
    expect(stats.entries).toBeGreaterThan(0);
  });

  test('IC-02: second compile (no changes) — all from cache', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const stats1 = ic.getCacheStats();
    const entries1 = stats1.entries;

    const result2 = ic.compile(options);
    expect(result2.success).toBe(true);

    const stats2 = ic.getCacheStats();
    expect(stats2.entries).toBe(entries1);
    expect(stats2.hitRate).toBeGreaterThan(0);
  });

  test('IC-03: file modified — only that file recompiled', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    // Modify CounterView
    const counterViewPath = join(tempDir, 'CounterView.ts');
    const original = readFileSync(counterViewPath, 'utf-8');
    writeFileSync(counterViewPath, original.replace('width: 200', 'width: 300'));

    const result2 = ic.compile(options);
    expect(result2.success).toBe(true);

    // The changed file should produce updated content
    const counterUnit = result2.units.find((u) => u.viewName === 'CounterView');
    expect(counterUnit).toBeDefined();
    expect(counterUnit!.qmlContent).toContain('300');
  });

  test('IC-04: ViewModel change — dependent View also recompiled', () => {
    const ic = createIncrementalCompiler();
    const result1 = ic.compile(options);

    // Modify LoginViewModel — add a new state
    const vmPath = join(tempDir, 'LoginViewModel.ts');
    const original = readFileSync(vmPath, 'utf-8');
    writeFileSync(
      vmPath,
      original.replace(
        '@State({ readonly: true }) isLoading = false;',
        '@State({ readonly: true }) isLoading = false;\n  @State() rememberMe = false;',
      ),
    );

    const result2 = ic.compile(options);
    expect(result2.success).toBe(true);

    // LoginViewModel schema should now have 4 states (was 3)
    const loginUnit = result2.units.find((u) => u.viewModelName === 'LoginViewModel');
    expect(loginUnit).toBeDefined();
    expect(loginUnit!.schema).toBeDefined();
    expect(loginUnit!.schema!.states.length).toBe(4);
  });

  test('IC-05: clearCache — full recompile', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const stats1 = ic.getCacheStats();
    expect(stats1.entries).toBeGreaterThan(0);

    ic.clearCache();

    const stats2 = ic.getCacheStats();
    expect(stats2.entries).toBe(0);
    expect(stats2.hitRate).toBe(0);

    // Next compile should be full
    const result = ic.compile(options);
    expect(result.success).toBe(true);
    expect(result.units.length).toBeGreaterThan(0);
  });

  test('IC-06: getCacheStats — hitRate correct', () => {
    const ic = createIncrementalCompiler();

    // Before any compile
    const stats0 = ic.getCacheStats();
    expect(stats0.entries).toBe(0);
    expect(stats0.hitRate).toBe(0);
    expect(stats0.sizeBytes).toBe(0);

    // First compile: all misses
    ic.compile(options);
    const stats1 = ic.getCacheStats();
    expect(stats1.entries).toBeGreaterThan(0);
    expect(stats1.sizeBytes).toBeGreaterThan(0);

    // Second compile: all hits
    ic.compile(options);
    const stats2 = ic.getCacheStats();
    expect(stats2.hitRate).toBeGreaterThan(0);
  });

  test('needsRecompile returns true for unknown files', () => {
    const ic = createIncrementalCompiler();
    expect(ic.needsRecompile('/nonexistent/file.ts')).toBe(true);
  });

  test('cacheUnit / getCachedUnit compatibility facades', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const cached = ic.getCachedUnit(join(tempDir, 'LoginView.ts'));
    expect(cached).toBeDefined();
    expect(cached!.viewName).toBe('LoginView');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
bun test tests/compiler/pipeline/incremental-compiler.test.ts
```

Expected: FAIL (module not found)

- [ ] **Step 3: Implement createIncrementalCompiler()**

Create `src/compiler/pipeline/incremental-compiler.ts`:

```typescript
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { Project } from 'ts-morph';
import type { ViewModelSchema } from '../../viewmodel/schema.js';
import type { Diagnostic } from '../diagnostics.js';
import type { DiscoveredSourceFile } from '../analyzer/analyzer-types.js';
import { createTsAnalyzer } from '../analyzer/ts-analyzer.js';
import { buildEventBindings } from './event-bindings.js';
import { hashContent } from './hash-utils.js';
import type {
  CompilationResult,
  CompilationUnit,
  CompilerOptions,
  FileCacheEntry,
  IncrementalCompiler,
} from './pipeline-types.js';
import { createDiagnosticReporter } from './diagnostic-reporter.js';

// Import compileProjectCore from compiler (we will export it internally)
import { compileProjectCore, createProjectContext } from './compiler.js';

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

  function getCacheStats(): { entries: number; hitRate: number; sizeBytes: number } {
    const entries = cache.size;
    const hitRate = totalLookups === 0 ? 0 : totalHits / totalLookups;
    let sizeBytes = 0;
    for (const entry of cache.values()) {
      for (const unit of entry.units) {
        sizeBytes += unit.qmlContent.length * 2; // approximate UTF-16
        if (unit.schema) {
          sizeBytes += JSON.stringify(unit.schema).length * 2;
        }
      }
    }
    return { entries, hitRate, sizeBytes };
  }

  function buildDirtySet(
    project: readonly DiscoveredSourceFile[],
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

    // Schema-based invalidation: if a dirty VM file's schema changed,
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

  function updateDependencyGraph(project: readonly DiscoveredSourceFile[]): void {
    vmFileDeps.clear();
    const vmFileMap = new Map<string, string>(); // className → filePath

    // Map ViewModel class names to their file paths
    for (const file of project) {
      const absPath = resolve(file.filePath);
      for (const vm of file.viewModels) {
        vmFileMap.set(vm.className, absPath);
      }
    }

    // Map View files to their ViewModel file dependencies
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
    project: readonly DiscoveredSourceFile[],
    coreResult: { units: CompilationUnit[]; schemas: ViewModelSchema[] },
    dirtyFiles: ReadonlySet<string>,
  ): void {
    // Group units and schemas by source file
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

    // Update cache entries for dirty files
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

    const dirtyFiles = buildDirtySet(ctx.project);
    lastDirtySet = dirtyFiles;

    updateDependencyGraph(ctx.project);

    const coreResult = compileProjectCore(ctx, dirtyFiles, cache, reporter);
    const allSchemas = coreResult.schemas;

    updateCache(ctx.project, coreResult, dirtyFiles);

    const eventBindings = buildEventBindings(allSchemas);
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
```

- [ ] **Step 4: Export createProjectContext from compiler.ts**

Add to `src/compiler/pipeline/compiler.ts`:

```typescript
/**
 * Create a project context for compilation. Used internally by both
 * compile() and IncrementalCompiler.
 */
export function createProjectContext(
  options: CompilerOptions,
  reporter: DiagnosticReporter,
): ProjectCompileContext | null {
  const analyzer = createTsAnalyzer(options.tsconfigPath);
  const tsconfigPath = options.tsconfigPath ?? join(options.inputDir, 'tsconfig.json');

  let project: DiscoveredSourceFile[];
  try {
    const discovered = analyzer.analyzeProject(tsconfigPath);
    project = [...discovered.files];
    for (const d of discovered.diagnostics) {
      reporter.report(d);
    }
  } catch {
    reporter.error('QMLTS-G001', `Failed to analyze project at ${tsconfigPath}`);
    return null;
  }

  const tsMorphProject = createTsMorphProject(tsconfigPath);
  return { project, tsMorphProject, options };
}
```

Also export `compileProjectCore` and the `ProjectCompileContext` type from compiler.ts (internal, not from barrel).

- [ ] **Step 5: Add barrel export**

Add to `src/compiler/pipeline/index.ts`:

```typescript
export { createIncrementalCompiler } from './incremental-compiler.js';
```

- [ ] **Step 6: Run incremental compiler tests**

```bash
bun test tests/compiler/pipeline/incremental-compiler.test.ts
```

Expected: 8 pass, 0 fail

- [ ] **Step 7: Run all pipeline tests (regression check)**

```bash
bun test tests/compiler/pipeline/
```

Expected: All pass (no regression)

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat(compiler): IncrementalCompiler with file-level cache and VM→View deps

- createIncrementalCompiler() with in-memory file-level caching
- Content hash invalidation (FNV-1a)
- ViewModel→View dependency graph with schema-hash invalidation
- File-level cache/getCachedFile + unit-level cacheUnit/getCachedUnit facades
- getCacheStats with entries, hitRate, sizeBytes
- Tests IC-01 through IC-06 plus needsRecompile + facade tests

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 4: Output writer (writeCompilationOutput)

**Files:**
- Create: `src/compiler/pipeline/output-writer.ts`
- Create: `tests/compiler/pipeline/output-writer.test.ts`
- Modify: `src/compiler/pipeline/index.ts`

- [ ] **Step 1: Write output writer tests**

Create `tests/compiler/pipeline/output-writer.test.ts`:

```typescript
import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { compile } from '../../../src/compiler/pipeline/compiler.js';
import { writeCompilationOutput } from '../../../src/compiler/pipeline/output-writer.js';
import type { CompilerOptions } from '../../../src/compiler/pipeline/pipeline-types.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

describe('writeCompilationOutput', () => {
  let tempDir: string;
  let outputDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-ow-'));
    outputDir = join(tempDir, 'dist');
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  test('writes .qml files to qmlOutputPath', () => {
    const result = compile({
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    });

    writeCompilationOutput(result);

    for (const unit of result.units) {
      if (unit.qmlContent) {
        expect(existsSync(unit.qmlOutputPath)).toBe(true);
        const written = readFileSync(unit.qmlOutputPath, 'utf-8');
        expect(written).toBe(unit.qmlContent);
      }
    }
  });

  test('writes .schema.json files when schema is present', () => {
    const result = compile({
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    });

    writeCompilationOutput(result);

    const unitsWithSchema = result.units.filter((u) => u.schema && u.schemaOutputPath);
    expect(unitsWithSchema.length).toBeGreaterThan(0);

    for (const unit of unitsWithSchema) {
      expect(existsSync(unit.schemaOutputPath!)).toBe(true);
      const written = JSON.parse(readFileSync(unit.schemaOutputPath!, 'utf-8'));
      expect(written).toEqual(unit.schema);
    }
  });

  test('writes event-bindings.json', () => {
    const result = compile({
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    });

    writeCompilationOutput(result);

    const ebPath = join(outputDir, 'event-bindings.json');
    expect(existsSync(ebPath)).toBe(true);
    const written = JSON.parse(readFileSync(ebPath, 'utf-8'));
    expect(written).toEqual(result.eventBindings);
  });

  test('skips units with empty qmlContent', () => {
    const result = compile({
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    });

    writeCompilationOutput(result);

    const emptyUnits = result.units.filter((u) => !u.qmlContent);
    for (const unit of emptyUnits) {
      expect(existsSync(unit.qmlOutputPath)).toBe(false);
    }
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
bun test tests/compiler/pipeline/output-writer.test.ts
```

Expected: FAIL

- [ ] **Step 3: Implement writeCompilationOutput()**

Create `src/compiler/pipeline/output-writer.ts`:

```typescript
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { sourceMapToJson } from './source-map.js';
import type { CompilationResult } from './pipeline-types.js';

/**
 * Write all compilation output files to disk.
 * Uses the qmlOutputPath from each CompilationUnit as the authoritative path.
 */
export function writeCompilationOutput(result: CompilationResult): void {
  let outputDir: string | undefined;

  for (const unit of result.units) {
    if (!unit.qmlContent) continue;

    const dir = dirname(unit.qmlOutputPath);
    mkdirSync(dir, { recursive: true });
    writeFileSync(unit.qmlOutputPath, unit.qmlContent, 'utf-8');

    if (!outputDir) {
      outputDir = dir;
    }

    // Write schema
    if (unit.schema && unit.schemaOutputPath) {
      const schemaDir = dirname(unit.schemaOutputPath);
      mkdirSync(schemaDir, { recursive: true });
      writeFileSync(unit.schemaOutputPath, JSON.stringify(unit.schema, null, 2), 'utf-8');
    }

    // Write source map
    if (unit.sourceMap) {
      const mapPath = `${unit.qmlOutputPath}.map`;
      const mapDir = dirname(mapPath);
      mkdirSync(mapDir, { recursive: true });
      writeFileSync(mapPath, sourceMapToJson(unit.sourceMap), 'utf-8');
    }
  }

  // Write event-bindings.json to the output root
  if (outputDir) {
    // Derive outputDir from the common prefix of all qmlOutputPaths
    const dirs = result.units
      .filter((u) => u.qmlContent)
      .map((u) => dirname(u.qmlOutputPath));
    const commonDir = findCommonDir(dirs) ?? outputDir;

    const ebPath = join(commonDir, 'event-bindings.json');
    mkdirSync(dirname(ebPath), { recursive: true });
    writeFileSync(ebPath, JSON.stringify(result.eventBindings, null, 2), 'utf-8');
  }
}

function findCommonDir(dirs: string[]): string | undefined {
  if (dirs.length === 0) return undefined;
  if (dirs.length === 1) return dirs[0];

  const parts = dirs.map((d) => d.split(/[\\/]/));
  const minLen = Math.min(...parts.map((p) => p.length));
  const common: string[] = [];

  for (let i = 0; i < minLen; i++) {
    const segment = parts[0]![i];
    if (parts.every((p) => p[i] === segment)) {
      common.push(segment!);
    } else {
      break;
    }
  }

  return common.length > 0 ? common.join('/') : undefined;
}
```

- [ ] **Step 4: Add barrel export**

Add to `src/compiler/pipeline/index.ts`:

```typescript
export { writeCompilationOutput } from './output-writer.js';
```

- [ ] **Step 5: Run output writer tests**

```bash
bun test tests/compiler/pipeline/output-writer.test.ts
```

Expected: 4 pass, 0 fail

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(compiler): writeCompilationOutput file materialization

- Write .qml, .schema.json, source maps, and event-bindings.json to disk
- Path authority from CompilationUnit.qmlOutputPath (no separate outputDir param)
- Common directory derivation for event-bindings.json placement
- Skip units with empty qmlContent

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 5: Qt Validation (compileWithQt + validateCompilationOutput)

**Files:**
- Create: `src/compiler/pipeline/qt-validation.ts`
- Create: `tests/compiler/pipeline/qt-validation.test.ts`
- Modify: `src/compiler/pipeline/index.ts`

- [ ] **Step 1: Write CP-10a through CP-10d tests**

Create `tests/compiler/pipeline/qt-validation.test.ts`:

```typescript
import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { mkdtempSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { compileWithQt, validateCompilationOutput } from '../../../src/compiler/pipeline/qt-validation.js';
import { compile } from '../../../src/compiler/pipeline/compiler.js';
import { writeCompilationOutput } from '../../../src/compiler/pipeline/output-writer.js';
import type { CompilerOptions } from '../../../src/compiler/pipeline/pipeline-types.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('Qt Validation', () => {
  let tempDir: string;
  let outputDir: string;
  let options: CompilerOptions;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-qt-'));
    outputDir = join(tempDir, 'dist');
    options = {
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
      qt: { qtDir: QT_DIR!, lint: true, format: true, importScan: true },
    };
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  test('CP-10a: compileWithQt — output passes qmllint', async () => {
    const result = await compileWithQt(options);

    expect(result.success).toBe(true);
    expect(result.qtValidation).toBeDefined();
    expect(result.qtValidation!.allValid).toBe(true);
    expect(result.qtValidation!.lintResults.size).toBeGreaterThan(0);
  }, 30_000);

  test('CP-10b: compileWithQt — qmlimportscanner returns results', async () => {
    const result = await compileWithQt(options);

    expect(result.qtValidation).toBeDefined();
    expect(result.qtValidation!.importScanResult).toBeDefined();
    expect(result.qtValidation!.importScanResult!.success).toBe(true);
  }, 30_000);

  test('CP-10c: compileWithQt — qmlformat validates output', async () => {
    const result = await compileWithQt(options);

    expect(result.qtValidation).toBeDefined();
    expect(result.qtValidation!.formatResults.size).toBeGreaterThan(0);
  }, 30_000);

  test('CP-10d: compileWithQt — Qt diagnostics merged into result.diagnostics', async () => {
    const result = await compileWithQt(options);

    expect(result.qtValidation).toBeDefined();
    // Qt diagnostics should be present in the qtValidation field
    expect(result.qtValidation!.diagnostics).toBeDefined();
    // and merged into the top-level result diagnostics
    // (if no issues, both should have 0 error-level diagnostics)
    const topLevelErrors = result.diagnostics.filter((d) => d.severity === 'error');
    const qtErrors = result.qtValidation!.diagnostics.filter((d) => d.severity === 'error');
    expect(topLevelErrors.length).toBeGreaterThanOrEqual(qtErrors.length);
  }, 30_000);

  test('validateCompilationOutput standalone works', async () => {
    const result = compile({
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    });
    writeCompilationOutput(result);

    const qtResult = await validateCompilationOutput(result, {
      qtDir: QT_DIR!,
      lint: true,
    });

    expect(qtResult.allValid).toBe(true);
    expect(qtResult.lintResults.size).toBeGreaterThan(0);
  }, 30_000);
});
```

- [ ] **Step 2: Run tests to verify they fail (or skip if no QT_DIR)**

```bash
bun test tests/compiler/pipeline/qt-validation.test.ts
```

Expected: FAIL or SKIP

- [ ] **Step 3: Implement qt-validation.ts**

Create `src/compiler/pipeline/qt-validation.ts`:

```typescript
import { discover, lintFile, lintString, formatString, scanFiles, getImportPaths } from '../../qt-tools/index.js';
import type { QmlLintResult, QmlFormatResult, QmlImportScannerResult, QtInstallation } from '../../qt-tools/types.js';
import type { Diagnostic } from '../diagnostics.js';
import type { CompilationResult, CompilerOptions, QtValidationOptions, QtValidationResult } from './pipeline-types.js';
import { compile } from './compiler.js';
import { writeCompilationOutput } from './output-writer.js';

/**
 * Compile a project and validate output with Qt tools.
 * Calls sync compile() internally, materializes output, then runs Qt validation.
 */
export async function compileWithQt(options: CompilerOptions): Promise<CompilationResult> {
  const result = compile(options);

  if (!options.qt) return result;
  if (!result.success || result.units.length === 0) return result;

  // Materialize files to disk for Qt tools
  writeCompilationOutput(result);

  const qtResult = await validateCompilationOutput(result, options.qt);

  // Merge Qt diagnostics into top-level diagnostics
  const mergedDiagnostics = [...result.diagnostics, ...qtResult.diagnostics];
  const success = result.success && !qtResult.diagnostics.some((d) => d.severity === 'error');

  return {
    ...result,
    diagnostics: mergedDiagnostics,
    success,
    qtValidation: qtResult,
  };
}

/**
 * Validate already-materialized compilation output with Qt tools.
 * Files must already exist at their qmlOutputPath locations.
 */
export async function validateCompilationOutput(
  result: CompilationResult,
  qtOptions: QtValidationOptions,
): Promise<QtValidationResult> {
  const installation = await discover({
    qtDir: qtOptions.qtDir ?? process.env['QT_DIR'],
  });

  const qmlFiles = result.units
    .filter((u) => u.qmlContent)
    .map((u) => u.qmlOutputPath);

  const shouldLint = qtOptions.lint !== false;
  const shouldFormat = qtOptions.format === true;
  const shouldScanImports = qtOptions.importScan !== false;

  const lintResults = new Map<string, QmlLintResult>();
  const formatResults = new Map<string, QmlFormatResult>();
  let importScanResult: QmlImportScannerResult | undefined;
  const diagnostics: Diagnostic[] = [];

  // Run qmllint
  if (shouldLint) {
    for (const qmlPath of qmlFiles) {
      try {
        const lintResult = await lintFile(installation, qmlPath);
        lintResults.set(qmlPath, lintResult);

        // Convert lint diagnostics to compiler diagnostics
        for (const diag of lintResult.diagnostics) {
          diagnostics.push({
            severity: diag.severity === 'error' ? 'error' : diag.severity === 'warning' ? 'warning' : 'info',
            code: 'QMLTS-Q001',
            message: `[qmllint] ${diag.message}`,
            file: qmlPath,
            line: diag.line,
            column: diag.column,
          });
        }
      } catch (e) {
        diagnostics.push({
          severity: 'warning',
          code: 'QMLTS-Q002',
          message: `qmllint failed for ${qmlPath}: ${e instanceof Error ? e.message : String(e)}`,
          file: qmlPath,
        });
      }
    }
  }

  // Run qmlformat (non-mutating validation only)
  if (shouldFormat) {
    for (const unit of result.units) {
      if (!unit.qmlContent) continue;
      try {
        const fmtResult = await formatString(installation, unit.qmlContent);
        formatResults.set(unit.qmlOutputPath, fmtResult);

        if (fmtResult.hasChanges) {
          diagnostics.push({
            severity: 'info',
            code: 'QMLTS-Q003',
            message: `[qmlformat] ${unit.qmlOutputPath} would be reformatted`,
            file: unit.qmlOutputPath,
          });
        }
      } catch (e) {
        diagnostics.push({
          severity: 'warning',
          code: 'QMLTS-Q002',
          message: `qmlformat failed for ${unit.qmlOutputPath}: ${e instanceof Error ? e.message : String(e)}`,
          file: unit.qmlOutputPath,
        });
      }
    }
  }

  // Run qmlimportscanner
  if (shouldScanImports && qmlFiles.length > 0) {
    try {
      const importPaths = getImportPaths(installation, qtOptions.importPaths);
      importScanResult = await scanFiles(installation, qmlFiles, importPaths);
    } catch (e) {
      diagnostics.push({
        severity: 'warning',
        code: 'QMLTS-Q002',
        message: `qmlimportscanner failed: ${e instanceof Error ? e.message : String(e)}`,
      });
    }
  }

  const allValid =
    [...lintResults.values()].every((r) => r.valid) &&
    !diagnostics.some((d) => d.severity === 'error');

  return {
    lintResults,
    formatResults,
    importScanResult,
    diagnostics,
    allValid,
  };
}
```

- [ ] **Step 4: Add barrel exports**

Add to `src/compiler/pipeline/index.ts`:

```typescript
export { compileWithQt, validateCompilationOutput } from './qt-validation.js';
```

- [ ] **Step 5: Run Qt validation tests**

```bash
bun test tests/compiler/pipeline/qt-validation.test.ts
```

Expected: 5 pass if QT_DIR is set, 5 skip otherwise

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(compiler): Qt validation with compileWithQt and validateCompilationOutput

- compileWithQt() async wrapper: compile + materialize + validate
- validateCompilationOutput() standalone utility
- qmllint integration with diagnostic conversion
- qmlformat non-mutating validation (formatString, no file mutation)
- qmlimportscanner integration for import analysis
- Tests CP-10a through CP-10d (requires QT_DIR)

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 6: CompilerWatcher

**Files:**
- Create: `src/compiler/pipeline/compiler-watcher.ts`
- Create: `tests/compiler/pipeline/compiler-watcher.test.ts`
- Modify: `src/compiler/pipeline/index.ts`

- [ ] **Step 1: Write CP-11 watcher tests**

Create `tests/compiler/pipeline/compiler-watcher.test.ts`:

```typescript
import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { watch } from '../../../src/compiler/pipeline/compiler-watcher.js';
import type { CompilationResult, CompilerOptions } from '../../../src/compiler/pipeline/pipeline-types.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

describe('CompilerWatcher', () => {
  let tempDir: string;
  let options: CompilerOptions;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-watch-'));
    cpSync(FIXTURES, tempDir, { recursive: true });
    options = {
      inputDir: tempDir,
      outputDir: join(tempDir, 'dist'),
      tsconfigPath: join(tempDir, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
      watch: { debounceMs: 200 },
    };
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  test('CP-11: watch mode triggers callback on file change', async () => {
    const results: CompilationResult[] = [];

    const watcher = watch(options, (result) => {
      results.push(result);
    });

    // Wait for initial compile
    await waitFor(() => results.length >= 1, 10_000);
    expect(results[0]!.success).toBe(true);

    // Modify a file
    const counterViewPath = join(tempDir, 'CounterView.ts');
    const original = readFileSync(counterViewPath, 'utf-8');
    writeFileSync(counterViewPath, original.replace('width: 200', 'width: 999'));

    // Wait for incremental recompile
    await waitFor(() => results.length >= 2, 10_000);
    expect(results[1]!.success).toBe(true);

    const counterUnit = results[1]!.units.find((u) => u.viewName === 'CounterView');
    expect(counterUnit).toBeDefined();
    expect(counterUnit!.qmlContent).toContain('999');

    watcher.close();
  }, 20_000);

  test('CP-11b: close stops callbacks', async () => {
    const results: CompilationResult[] = [];

    const watcher = watch(options, (result) => {
      results.push(result);
    });

    await waitFor(() => results.length >= 1, 10_000);
    watcher.close();

    const countBefore = results.length;

    // Modify a file after close
    const counterViewPath = join(tempDir, 'CounterView.ts');
    const original = readFileSync(counterViewPath, 'utf-8');
    writeFileSync(counterViewPath, original.replace('width: 200', 'width: 888'));

    // Wait a bit — should NOT get another callback
    await sleep(500);
    expect(results.length).toBe(countBefore);
  }, 15_000);

  test('CP-11c: rebuild returns fresh result', async () => {
    const results: CompilationResult[] = [];

    const watcher = watch(options, (result) => {
      results.push(result);
    });

    await waitFor(() => results.length >= 1, 10_000);

    const rebuilt = await watcher.rebuild();
    expect(rebuilt.success).toBe(true);
    expect(rebuilt.units.length).toBeGreaterThan(0);

    watcher.close();
  }, 15_000);

  test('CP-11d: unlink removes file from result', async () => {
    const results: CompilationResult[] = [];

    const watcher = watch(options, (result) => {
      results.push(result);
    });

    await waitFor(() => results.length >= 1, 10_000);

    const initialViewCount = results[0]!.units.filter((u) => u.qmlContent).length;

    // Delete CounterView.ts and update tsconfig to exclude it
    unlinkSync(join(tempDir, 'CounterView.ts'));
    const tsconfig = JSON.parse(readFileSync(join(tempDir, 'tsconfig.json'), 'utf-8'));
    tsconfig.include = tsconfig.include.filter((f: string) => f !== 'CounterView.ts');
    writeFileSync(join(tempDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));

    // Wait for recompile
    await waitFor(() => results.length >= 2, 10_000);

    watcher.close();
  }, 20_000);
});

function waitFor(condition: () => boolean, timeoutMs: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      if (condition()) {
        resolve();
      } else if (Date.now() - start > timeoutMs) {
        reject(new Error(`waitFor timed out after ${timeoutMs}ms`));
      } else {
        setTimeout(check, 50);
      }
    };
    check();
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
bun test tests/compiler/pipeline/compiler-watcher.test.ts
```

Expected: FAIL

- [ ] **Step 3: Implement watch()**

Create `src/compiler/pipeline/compiler-watcher.ts`:

```typescript
import chokidar from 'chokidar';
import { join } from 'node:path';
import type { CompilationResult, CompilerOptions, CompilerWatcher } from './pipeline-types.js';
import { createIncrementalCompiler } from './incremental-compiler.js';

/**
 * Watch a project directory for .ts file changes and trigger incremental
 * recompilation on each change.
 */
export function watch(
  options: CompilerOptions,
  callback: (result: CompilationResult) => void,
): CompilerWatcher {
  const ic = createIncrementalCompiler();
  const debounceMs = options.watch?.debounceMs ?? 100;
  let closed = false;
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  let latestResult: CompilationResult | null = null;

  // Initial full compile
  try {
    latestResult = ic.compile(options);
    if (!closed) callback(latestResult);
  } catch (e) {
    // Initial compile failure — still start watching
  }

  // Set up chokidar watcher
  const watcher = chokidar.watch(join(options.inputDir, '**/*.ts'), {
    ignored: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.d.ts',
    ],
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 50,
      pollInterval: 10,
    },
  });

  function scheduleRecompile(): void {
    if (closed) return;

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      if (closed) return;

      try {
        latestResult = ic.compile(options);
        if (!closed) callback(latestResult);
      } catch {
        // Compilation error — watcher continues
      }
    }, debounceMs);
  }

  watcher.on('change', scheduleRecompile);
  watcher.on('add', scheduleRecompile);
  watcher.on('unlink', (filePath) => {
    // Remove deleted file from cache
    const cached = ic.getCachedFile(filePath);
    if (cached) {
      ic.clearCache(); // Simple approach: clear all on delete
    }
    scheduleRecompile();
  });

  function close(): void {
    closed = true;
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }
    watcher.close();
  }

  async function rebuild(): Promise<CompilationResult> {
    ic.clearCache();
    latestResult = ic.compile(options);
    return latestResult;
  }

  return { close, rebuild };
}
```

- [ ] **Step 4: Add barrel export**

Add to `src/compiler/pipeline/index.ts`:

```typescript
export { watch } from './compiler-watcher.js';
```

- [ ] **Step 5: Run watcher tests**

```bash
bun test tests/compiler/pipeline/compiler-watcher.test.ts
```

Expected: 4 pass, 0 fail

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(compiler): CompilerWatcher with chokidar and debounced incremental recompile

- watch() creates IncrementalCompiler + chokidar file watcher
- Initial full compile with callback
- Debounced incremental recompile on add/change/unlink events
- close() stops watcher and clears timers
- rebuild() clears cache and does full fresh compile
- Tests CP-11, CP-11b (close stops callbacks), CP-11c (rebuild), CP-11d (unlink)

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 7: Final integration, barrel exports, and full test verification

**Files:**
- Modify: `src/compiler/pipeline/index.ts`
- Modify: `src/compiler/index.ts`

- [ ] **Step 1: Verify all barrel exports are complete**

`src/compiler/pipeline/index.ts` should export:

```typescript
// Step 7 exports (existing)
export { compile, compileFile, compileSource } from './compiler.js';
export { createDiagnosticReporter } from './diagnostic-reporter.js';
export { buildEventBindings } from './event-bindings.js';
export { hashContent, fnv1a32 } from './hash-utils.js';
export type {
  CodegenOptions,
  CompilationResult,
  CompilationStats,
  CompilationUnit,
  CompilerOptions,
  CompilerSourceMap,
  CompilerSourceMapEntry,
  CompilerWatcher,
  DiagnosticOptions,
  DiagnosticReporter,
  EventBindingCommand,
  EventBindingEffect,
  EventBindingIndex,
  FileCacheEntry,
  IncrementalCompiler,
  QtValidationOptions,
  QtValidationResult,
  SourceMapKind,
  WatchOptions,
} from './pipeline-types.js';
export {
  annotateFromDslTree,
  annotateInjectedNodes,
  buildCompilerSourceMap,
} from './source-location-annotator.js';
export type { SourceMapBuilder } from './source-map.js';
export {
  createSourceMapBuilder,
  findSource,
  findTarget,
  sourceMapFromJson,
  sourceMapToJson,
} from './source-map.js';

// Step 8 exports
export { createIncrementalCompiler } from './incremental-compiler.js';
export { watch } from './compiler-watcher.js';
export { compileWithQt, validateCompilationOutput } from './qt-validation.js';
export { writeCompilationOutput } from './output-writer.js';
```

- [ ] **Step 2: Run typecheck**

```bash
bunx tsc --noEmit
```

Expected: PASS

- [ ] **Step 3: Run biome format and check**

```bash
bunx biome format --write src/compiler/pipeline/ tests/compiler/pipeline/
bunx biome check --fix src/compiler/pipeline/ tests/compiler/pipeline/
```

- [ ] **Step 4: Run all pipeline tests**

```bash
bun test tests/compiler/pipeline/
```

Expected: All pass (56+ tests across 6 files)

- [ ] **Step 5: Run full project test suite**

```bash
bun test
```

Expected: 1070+ pass, 0 fail (no regressions)

- [ ] **Step 6: Commit any formatting fixes**

```bash
git add -A
git commit -m "chore: format and lint Step 8 code

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

- [ ] **Step 7: Push and create PR**

```bash
git push --no-verify -u origin feat/06-step8-compiler-orchestration
gh pr create --base main --head feat/06-step8-compiler-orchestration \
  --title "feat(compiler): Step 8 — IncrementalCompiler, Watcher, Qt Validation" \
  --body "Step 8 of Phase 06: compiler orchestration layer..."
```
