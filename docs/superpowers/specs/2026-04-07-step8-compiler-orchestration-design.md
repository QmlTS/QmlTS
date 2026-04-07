# Step 8: Compiler Orchestration — IncrementalCompiler, Watcher, Qt Validation

## Goal

Complete Phase 06 by adding incremental compilation, watch mode, and Qt toolchain validation to the compiler pipeline. This is the final step that makes the compiler production-shaped.

## Architecture

Step 8 adds three modules on top of the existing sync pipeline (compile/compileFile/compileSource from Step 7):

1. **IncrementalCompiler** — In-memory file-level caching with VM→View dependency tracking
2. **CompilerWatcher** — chokidar-based file watching with debounced incremental recompilation
3. **Qt Validation** — Post-compile qmllint + qmlformat + qmlimportscanner integration via async `compileWithQt()`

The existing sync APIs remain unchanged. New async/stateful APIs are additive.

## Tech Stack

- chokidar (file watching)
- Existing qt-tools wrappers (qmllint, qmlformat, qmlimportscanner)
- FNV-1a hashing (already in codebase via IdAllocator)
- Bun test runner

---

## 1. IncrementalCompiler

### Prerequisite: Internal Project-Context Core

Step 7's `compile()` is a monolithic full-project pass. Step 8 must first extract (or introduce) an internal **project-context compilation core** that can:

1. Analyze the full project context (TsAnalyzer creates the ts-morph Project, discovers all files)
2. Accept a **dirty file set** to selectively recompile only those files
3. Preserve correct cross-file View/ViewModel pairing from the full project context
4. Aggregate outputs from both cached and freshly-compiled units

This internal core is **not a new public API** — it is a refactoring of Step 7's `compile()` internals into a reusable function:

```typescript
// Internal (not exported)
function compileProjectCore(
  project: Project,                          // ts-morph project (full context)
  discoveredFiles: readonly DiscoveredSourceFile[],
  dirtyFiles: ReadonlySet<string>,           // only these files get recompiled
  cachedEntries: ReadonlyMap<string, FileCacheEntry>,
  options: CompilerOptions,
): { units: CompilationUnit[]; schemas: ViewModelSchema[]; diagnostics: Diagnostic[] }
```

The existing `compile()` function is then refactored to call `compileProjectCore(project, allFiles, allDirty, emptyCache, options)` — i.e., full compilation is just incremental with all files dirty and no cache.

### Interface (file-level, aligned with cache model)

The design doc §11 defines unit-level methods (`cacheUnit`, `getCachedUnit`). Since the cache model is file-level (`FileCacheEntry` contains `units[]`), the interface uses file-level operations. The unit-level methods from §11 are compatibility façades:

```typescript
interface IncrementalCompiler {
  // File-level operations (primary API)
  getChangedFiles(): readonly string[];
  needsRecompile(filePath: string): boolean;
  cacheFile(filePath: string, entry: FileCacheEntry): void;
  getCachedFile(filePath: string): FileCacheEntry | undefined;
  clearCache(): void;
  getCacheStats(): {
    readonly entries: number;
    readonly hitRate: number;
    readonly sizeBytes: number;
  };

  // Unit-level façades (for §11 compatibility)
  cacheUnit(unit: CompilationUnit): void;
  getCachedUnit(filePath: string): CompilationUnit | undefined;

  // High-level entry
  compile(options: CompilerOptions): CompilationResult;
}
```

`cacheUnit()` wraps the unit into a `FileCacheEntry` keyed by `unit.sourceFile`. `getCachedUnit()` returns the first unit from the cached file entry (or undefined).

### Cache Model

```typescript
interface FileCacheEntry {
  readonly contentHash: number;                    // FNV-1a of source file content
  readonly units: readonly CompilationUnit[];      // a file may produce multiple units
  readonly schemas: readonly ViewModelSchema[];    // ViewModel schemas from this file
  readonly schemaHash: number;                     // FNV-1a of JSON.stringify(schemas)
}
```

Internal state:
- `cache: Map<string, FileCacheEntry>` — filePath → cached file result
- `vmFileDeps: Map<string, Set<string>>` — vmFilePath → Set<viewFilePath>
- `stats: { lookups: number; hits: number }` — for hitRate computation

### Invalidation Strategy

Three levels:
1. **Content hash**: If file content hash unchanged → cache hit (skip recompile)
2. **Schema hash**: If a ViewModel file's content changed AND its schema hash changed → invalidate all dependent view files via `vmFileDeps`
3. **File deletion**: Remove from cache, remove from dependency graph, invalidate dependents if VM file

### Incremental Compile Flow

1. Analyze full project context (TsAnalyzer creates ts-morph Project, discovers all files)
2. Hash all current source files in `inputDir`
3. Compare with cached content hashes → build dirty set
4. For dirty VM files: re-extract schemas, compare schema hash → if changed, add dependent view files to dirty set
5. Call `compileProjectCore(project, discoveredFiles, dirtySet, cache, options)`
6. Core recompiles only dirty files, returns fresh units + schemas
7. Merge cached entries (clean files) + fresh entries (dirty files) into final result
8. Rebuild event-bindings from all schemas (cached + fresh)
9. Update cache entries for recompiled files
10. Update dependency graph from analysis results

### Dependency Graph Building

During compilation, the View→ViewModel pairing is captured from `discoveredView.vmParam.type` → ViewModel class name. The dependency is recorded as `vmFilePath → viewFilePath` (file-level, not class-level). This graph is rebuilt/updated after each compilation from the actual analysis results.

---

## 2. CompilerWatcher

### Interface (from design doc §12)

```typescript
function watch(
  options: CompilerOptions,
  callback: (result: CompilationResult) => void,
): CompilerWatcher;

interface CompilerWatcher {
  close(): void;
  rebuild(): Promise<CompilationResult>;
}
```

### Behavior

- Creates an `IncrementalCompiler` internally
- Runs initial full `compile()` and invokes callback with result
- Uses **chokidar** to watch `options.inputDir` for `.ts` file changes
- Monitors `add`, `change`, and `unlink` events
- **Debounce**: Configurable via `options.watch?.debounceMs` (default: 100ms)
- On change: incremental compile → callback with complete result
- Watcher retains the latest `CompilationResult` internally

### File Deletion (unlink)

- Remove deleted file from cache
- Remove from dependency graph
- If deleted file is a VM file → invalidate all dependent view files
- Deleted view files are excluded from next compilation result

### API Details

- `close()`: Stops chokidar watcher, discards incremental compiler
- `rebuild()`: Clears cache entirely, runs full fresh compile, returns complete result

### Initial Compile Failure Behavior

If the initial full compile produces errors (`success: false`):
- The callback is still invoked with the failed result (so the user sees diagnostics)
- The watcher continues running — subsequent file changes trigger incremental recompile
- `rebuild()` always returns a complete result regardless of success/failure
- The latest result (including failed ones) is retained internally

### CompilerOptions Extension

```typescript
interface CompilerOptions {
  // ... existing fields from Step 7 ...
  readonly watch?: WatchOptions;
}

interface WatchOptions {
  readonly debounceMs?: number;  // default: 100
}
```

---

## 3. Qt Validation

### Options

```typescript
interface QtValidationOptions {
  readonly qtDir?: string;                          // explicit Qt path, or auto-detect from QT_DIR env
  readonly lint?: boolean;                          // run qmllint (default: true when qt enabled)
  readonly format?: boolean;                        // run qmlformat (default: false)
  readonly importScan?: boolean;                    // run qmlimportscanner (default: true when qt enabled)
  readonly importPaths?: readonly string[];         // extra QML import paths
}

interface QtValidationResult {
  readonly lintResults: ReadonlyMap<string, QmlLintResult>;
  readonly formatResults: ReadonlyMap<string, QmlFormatResult>;
  readonly importScanResult?: QmlImportScannerResult;
  readonly diagnostics: readonly Diagnostic[];
  readonly allValid: boolean;
}
```

### CompilerOptions Extension

```typescript
interface CompilerOptions {
  // ... existing fields ...
  readonly qt?: QtValidationOptions;
}
```

### Entry Point

```typescript
function compileWithQt(options: CompilerOptions): Promise<CompilationResult>
```

`compileWithQt()` calls sync `compile()` internally, then:
1. Materializes `.qml` files to `outputDir` (see §4 for path rules)
2. Discovers Qt installation via `discover({ qtDir })`
3. Runs enabled validators:
   - **qmllint**: `lintFiles()` on all generated `.qml` files
   - **qmlformat**: **Non-mutating validation only** — uses `formatString()` to check formatting, does NOT write changes back to disk. Reports whether files would change. This preserves consistency between `CompilationUnit.qmlContent`, materialized files, and source maps.
   - **qmlimportscanner**: `scanFiles()` on generated `.qml` files
4. Converts Qt diagnostics to compiler `Diagnostic` format
5. Merges Qt diagnostics into `CompilationResult.diagnostics` (not only into `qtValidation`)
6. Returns extended `CompilationResult` with `qtValidation` field

### Result Extension

```typescript
interface CompilationResult {
  // ... existing fields from Step 7 ...
  readonly qtValidation?: QtValidationResult;
}
```

### Standalone Utility

Also export `validateCompilationOutput()` for users who want to validate already-materialized output at the paths contained in `result`:

```typescript
function validateCompilationOutput(
  result: CompilationResult,
  qtOptions: QtValidationOptions,
): Promise<QtValidationResult>
```

This function assumes files have already been written to disk at their `qmlOutputPath` locations (via `writeCompilationOutput()`). It does NOT take a separate `outputDir` — path authority rests with the paths inside `result`.

---

## 4. File Materialization

Qt tools need real `.qml` files on disk. The materialization strategy:

### Path Authority

`CompilationUnit.qmlOutputPath` is the single source of truth for output file paths. It is computed by `compile()` from `inputDir` → `outputDir` mapping (Step 7 logic). `writeCompilationOutput()` trusts these paths directly — it does NOT recompute paths from a separate base directory.

The `outputDir` parameter on `writeCompilationOutput()` is removed. All paths come from the compilation result:

```typescript
function writeCompilationOutput(result: CompilationResult): void
```

### What Gets Written

- Each `CompilationUnit.qmlOutputPath` → file content from `CompilationUnit.qmlContent`
- Each `CompilationUnit.schemaOutputPath` → JSON from `CompilationUnit.schema` (if present)
- `event-bindings.json` → JSON from `CompilationResult.eventBindings` (written to `outputDir` root)
- Source maps → JSON from `CompilationUnit.sourceMap` (if present, written alongside `.qml` as `.qml.map`)

The `outputDir` for `event-bindings.json` is derived from the common prefix of all `qmlOutputPath` values.

---

## 5. Exports

New Step 8 APIs exported from `src/compiler/pipeline/index.ts`:

Functions:
- `createIncrementalCompiler()`
- `watch()`
- `compileWithQt()`
- `validateCompilationOutput()`
- `writeCompilationOutput()`

Types:
- `IncrementalCompiler`
- `CompilerWatcher`
- `WatchOptions`
- `QtValidationOptions`
- `QtValidationResult`
- `FileCacheEntry` (if useful for testing)

---

## 6. Test Coverage

### IC-* Tests (`incremental-compiler.test.ts`)

| ID | Test Case | Expected |
|----|-----------|----------|
| IC-01 | First compile → all files needsRecompile | All files compiled, cache populated |
| IC-02 | Second compile (no changes) → cache hits | All units from cache, 0 recompiled |
| IC-03 | File modified → that file needsRecompile | Only modified file recompiled |
| IC-04 | VM change → dependent View invalidated | VM file + referencing View files recompiled |
| IC-05 | clearCache → full recompile | All files recompiled after clear |
| IC-06 | getCacheStats → hitRate correct | entries, hitRate, sizeBytes correct |

**Fixtures**: Copy existing `tests/compiler/pipeline/fixtures/` to temp dir. Modify files in-place for IC-03/IC-04.

### CP-10 Tests (`qt-validation.test.ts`) — `describe.skipIf(!QT_DIR)`

| ID | Test Case | Expected |
|----|-----------|----------|
| CP-10a | compileWithQt → output passes qmllint | All QML files valid |
| CP-10b | compileWithQt → qmlimportscanner returns results | importScanResult defined with imports |
| CP-10c | compileWithQt → qmlformat produces valid output | formatResults populated when enabled |
| CP-10d | compileWithQt → Qt diagnostics merged into result.diagnostics | qtValidation field present AND diagnostics merged into top-level result.diagnostics |

### CP-11 Test (`compiler-watcher.test.ts`)

| ID | Test Case | Expected |
|----|-----------|----------|
| CP-11 | Watch mode triggers callback on file change | callback invoked with updated result |
| CP-11b | Watch close stops callbacks | No callback after close() |
| CP-11c | Watch rebuild returns fresh result | Full recompile, cache cleared |
| CP-11d | Watch unlink removes file from result | Deleted view absent from units |

**Approach**: Copy fixtures to temp dir, start watcher, modify file, wait for callback, assert, close.

### CP-12 Test (`compiler.test.ts`)

| ID | Test Case | Expected |
|----|-----------|----------|
| CP-12 | compileFile regression under new layers | Single file compiles correctly, same as Step 7 |

---

## 7. Scope Boundaries

**In scope (Step 8)**:
- IncrementalCompiler with in-memory cache
- CompilerWatcher with chokidar
- Qt validation via compileWithQt()
- File materialization (writeCompilationOutput)
- Tests IC-01–IC-06, CP-10a–d, CP-11, CP-12
- Barrel exports for new APIs

**Out of scope**:
- Disk-based cache persistence
- CLI tool / command-line interface
- Multi-project workspace support
- Hot module replacement
- qmlcachegen / qmltc integration (already in qt-tools, not required by Step 8 spec)
