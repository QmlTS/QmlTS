# Step 3: TsAnalyzer — Design Spec

## 1. Purpose

TsAnalyzer is the structural discovery layer for Phase 06. It identifies what
exists in TypeScript source files — imports, ViewModel class candidates, and
View function candidates — without performing deep extraction or DSL lowering.

TsAnalyzer feeds into later steps:
- Step 4 (ViewModelExtractor) receives discovered ViewModel classes and
  extracts `@State`/`@Command`/`@Effect` details.
- Step 5 (DslTransformer) receives discovered View functions and builds
  `DslCallNode` trees.

Step 3 scope is **discovery only**.

## 2. Dependencies

- **ts-morph** added as a regular dependency (required at compiler runtime).
- Imports shared `Diagnostic`/`DiagnosticCode` from `src/compiler/diagnostics.ts` (new in Step 3).

## 3. File Structure

```
src/compiler/
  diagnostics.ts             — Canonical compiler-wide: Diagnostic, DiagnosticCode,
                               DiagnosticSeverity, RelatedDiagnostic, DiagnosticFix
  analyzer/
    analyzer-types.ts        — Discovered* types (DiscoveredSourceFile, DiscoveredImport,
                               DiscoveredView, DiscoveredViewModel, DiscoveredProject)
    ts-analyzer.ts           — TsAnalyzer class + createTsAnalyzer() factory
    discover-imports.ts      — discoverImports(sourceFile) helper
    discover-viewmodels.ts   — discoverViewModels(sourceFile) helper
    discover-views.ts        — discoverViews(sourceFile) helper
    analyze-diagnostics.ts   — analyzeDiagnostics(sourceFile) helper
    dsl-module-map.ts        — Canonical mapping table: DSL import specifier → Qt module URI
    index.ts                 — Barrel exports
  index.ts                   — Compiler barrel (re-exports analyzer/ + diagnostics)

tests/compiler/
  analyzer/
    ts-analyzer.test.ts      — AN-01..AN-23
    fixtures/                — Minimal tsconfig + source files for analyzeProject tests
```

Root `src/index.ts` gets `export * from './compiler/index.js'`.

## 4. Type Definitions

### 4.1 Shared Compiler Diagnostics (`src/compiler/diagnostics.ts`)

```ts
export type DiagnosticSeverity = 'error' | 'warning' | 'info' | 'hint';

export interface Diagnostic {
  readonly severity: DiagnosticSeverity;
  readonly code: DiagnosticCode;
  readonly message: string;
  readonly file?: string;
  readonly line?: number;
  readonly column?: number;
  readonly endLine?: number;
  readonly endColumn?: number;
  readonly relatedInformation?: readonly RelatedDiagnostic[];
  readonly fix?: DiagnosticFix;
}

export interface RelatedDiagnostic {
  readonly message: string;
  readonly file: string;
  readonly line: number;
  readonly column: number;
}

export interface DiagnosticFix {
  readonly description: string;
  readonly replacement?: string;
}

export type DiagnosticCode =
  // Analysis (A)
  | 'QMLTS-A001' | 'QMLTS-A002' | 'QMLTS-A003' | 'QMLTS-A004'
  | 'QMLTS-A005' | 'QMLTS-A006' | 'QMLTS-A007' | 'QMLTS-A008'
  | 'QMLTS-A009' | 'QMLTS-A010'
  | 'QMLTS-A011' // TypeScript source diagnostic (syntax/bind/semantic passthrough)
  // Transform (T)
  | 'QMLTS-T001' | 'QMLTS-T002' | 'QMLTS-T003' | 'QMLTS-T004'
  | 'QMLTS-T005' | 'QMLTS-T006' | 'QMLTS-T007' | 'QMLTS-T008'
  | 'QMLTS-T009' | 'QMLTS-T010'
  // PostProcess (P)
  | 'QMLTS-P001' | 'QMLTS-P002' | 'QMLTS-P003' | 'QMLTS-P004'
  // Codegen (C)
  | 'QMLTS-C001' | 'QMLTS-C002' | 'QMLTS-C003'
  // General (G)
  | 'QMLTS-G001' | 'QMLTS-G002' | 'QMLTS-G003';
```

### 4.2 Discovery Types (`src/compiler/analyzer/analyzer-types.ts`)

```ts
export interface DiscoveredSourceFile {
  readonly filePath: string;
  readonly viewModels: readonly DiscoveredViewModel[];
  readonly views: readonly DiscoveredView[];
  readonly imports: readonly DiscoveredImport[];
  readonly diagnostics: readonly Diagnostic[];
}

export interface DiscoveredImport {
  readonly moduleSpecifier: string;
  readonly namedImports: readonly string[];
  readonly defaultImport?: string;
  readonly isDslImport: boolean;
  readonly qtModuleUri?: string;
}

export interface DiscoveredView {
  readonly functionName: string;
  readonly exportKind: 'default' | 'named';
  readonly vmParam?: { readonly name: string; readonly type: string };
  readonly filePath: string;
  readonly line: number;
}

export interface DiscoveredViewModel {
  readonly className: string;
  readonly filePath: string;
  readonly line: number;
  readonly isExported: boolean;
}

export interface DiscoveredProject {
  readonly files: readonly DiscoveredSourceFile[];
  readonly allViewModels: readonly DiscoveredViewModel[];
  readonly allViews: readonly DiscoveredView[];
  readonly diagnostics: readonly Diagnostic[];
}
```

### 4.3 TsAnalyzer Interface

```ts
export interface TsAnalyzer {
  analyzeSource(source: string, fileName?: string): DiscoveredSourceFile;
  analyzeFile(filePath: string): DiscoveredSourceFile;
  analyzeProject(tsconfigPath: string): DiscoveredProject;
}

export function createTsAnalyzer(tsconfigPath?: string): TsAnalyzer;
```

## 5. Discovery Logic

### 5.1 DSL Import Detection (`discover-imports.ts` + `dsl-module-map.ts`)

The DSL import detection strategy must work against the real current `main`
repository state, not only a future published-package surface.

**Current `main` import forms (Step 3 must support):**

DSL factory imports in the current repository use relative or absolute paths
containing `dsl/generated/<QtModuleUri>/`:

```ts
import { Rectangle } from '../../src/dsl/generated/QtQuick/Rectangle.js';
import { Timer } from '../../src/dsl/generated/QtQml/Timer.js';
import { ColumnLayout } from '../../src/dsl/generated/QtQuick.Layouts/ColumnLayout.js';
```

Decorator/ViewModel imports use paths containing `viewmodel/`:

```ts
import { State, Command, Effect } from '../../src/viewmodel/index.js';
```

**Detection strategy:**

A compiler-owned mapping module (`dsl-module-map.ts`) provides:
1. A function to classify a module specifier as DSL factory import:
   - if the specifier contains a path segment matching `dsl/generated/<X>/`
     where `<X>` is a known Qt module URI → `isDslImport = true`,
     `qtModuleUri = <X>`
   - a static set of known Qt module URI strings (e.g. `'QtQuick'`,
     `'QtCore'`, `'QtQml'`, `'QtQuick.Layouts'`, etc.) derived from the
     canonical generated module list
2. A function to classify as decorator/core import:
   - if the specifier contains `viewmodel/` → NOT a DSL factory import
3. All other imports → `isDslImport = false`, `qtModuleUri = undefined`

**Future package form (documented but not required in Step 3):**

Future versions may support `@qmlts/*` package-style imports
(e.g. `@qmlts/qtquick` → `QtQuick`). The mapping module can be extended
to support these when the package surface is published. Step 3 does not
require this.

Import classification summary:
- **DSL factory imports**: path contains `dsl/generated/<KnownModuleUri>/`.
  `isDslImport = true`.
- **Decorator/core imports**: path contains `viewmodel/`.
  `isDslImport = false`.
- **Other imports**: `isDslImport = false`, `qtModuleUri = undefined`.

For each import declaration:
1. Extract `moduleSpecifier`, `namedImports`, `defaultImport`.
2. Classify the specifier using the mapping module.
3. Set `isDslImport` and `qtModuleUri` accordingly.

### 5.2 ViewModel Discovery (`discover-viewmodels.ts`)

Scans all class declarations in the source file. A class is a ViewModel
candidate if at least one of its members has a `@State`, `@Command`, or
`@Effect` decorator.

For each discovered ViewModel:
- `className`: the class name
- `filePath`: source file path
- `line`: 1-based line number of the class declaration
- `isExported`: whether the class has an export modifier

Non-exported decorated classes ARE discovered (with `isExported = false`).
The diagnostic layer can report QMLTS-A007 for unexported ViewModels.

Classes with no `@State`/`@Command`/`@Effect` decorators are NOT discovered,
even if they have other decorators.

### 5.3 View Discovery (`discover-views.ts`)

Only exported functions/declarations are returned as discovered views.

Supported view declaration forms:
1. `export default function Foo(vm: VM) { return Rectangle()... }`
2. `export function Foo(vm: VM) { return Rectangle()... }`
3. `export const Foo = (vm: VM) => Rectangle()...`
4. `const Foo = (vm: VM) => Rectangle()...; export default Foo;`

A function is a view candidate if:
- It is exported (default or named).
- Its return expression is a call chain rooted in a name imported from a
  known DSL factory module (determined by cross-referencing with
  `discoverImports` results).

For each discovered view:
- `functionName`: the declared name (or `'default'` for anonymous default exports)
- `exportKind`: `'default'` or `'named'`
- `vmParam`: extracted from the first parameter if it has a type annotation
  (name + type name as string)
- `filePath`, `line`: source location

Exported functions that do NOT return a DSL call chain are NOT discovered
as views.

### 5.4 Diagnostics (`analyze-diagnostics.ts`)

Collects TypeScript parse, bind, and semantic diagnostics from ts-morph and
maps them to the shared `Diagnostic` format.

Mapping rules:
- TypeScript diagnostic category → `DiagnosticSeverity`:
  - `ts.DiagnosticCategory.Error` → `'error'`
  - `ts.DiagnosticCategory.Warning` → `'warning'`
  - `ts.DiagnosticCategory.Suggestion` → `'hint'`
  - `ts.DiagnosticCategory.Message` → `'info'`
- `code`: all TS source-file diagnostics (parse, bind, semantic errors)
  use `QMLTS-A011`. The original TS error code (e.g. `TS1005`) and
  message text are preserved in the `message` field.
- `QMLTS-G001` is reserved for tsconfig/project-loading failures only.
- `QMLTS-G003` is reserved for internal compiler errors only.
- Do NOT map ordinary TS source errors to G-series codes.

### 5.5 TsAnalyzer Class (`ts-analyzer.ts`)

**`createTsAnalyzer(tsconfigPath?)`**: creates a ts-morph `Project`.
- If `tsconfigPath` is given, loads from that tsconfig.
- Otherwise, creates a default in-memory project with sensible defaults.

**`analyzeSource(source, fileName?)`**:
1. Creates an in-memory virtual `SourceFile` with a synthetic path
   (e.g. `__qmlts_virtual__/source-<counter>.ts`) that:
   - does not collide with real project files
   - does not pollute project state across repeated calls
2. Runs the discovery pipeline: imports → viewModels → views → diagnostics.
3. Returns `DiscoveredSourceFile`.

**`analyzeFile(filePath)`**:
1. Adds the file to the ts-morph project.
2. Runs the same discovery pipeline.
3. Returns `DiscoveredSourceFile`.

**`analyzeProject(tsconfigPath)`**:
1. Loads the project from the given tsconfig.
2. Iterates project-owned source files only. Uses ts-morph project-level
   APIs to exclude:
   - Declaration files (`.d.ts`)
   - External library source files
   - Generated output directories
   - Non-project files
3. Runs the discovery pipeline on each source file.
4. Aggregates into `DiscoveredProject` with flattened
   `allViewModels`/`allViews` and merged `diagnostics`.
5. If the tsconfig cannot be loaded, returns a `DiscoveredProject` with
   a single `QMLTS-G001` diagnostic.

## 6. Scope Boundaries

**In scope for Step 3:**
- Structural discovery: imports, ViewModel candidates, View candidates
- Import classification (DSL factory vs decorator/core vs other)
- Export shape detection (default vs named)
- Source location reporting (file, line)
- TypeScript diagnostic passthrough
- `analyzeSource` / `analyzeFile` / `analyzeProject` public API
- Canonical DSL module mapping table

**Out of scope (deferred to later steps):**
- Full ViewModel extraction (`states`, `commands`, `effects`, `lifecycle`,
  `constructorParams`) → Step 4 (ViewModelExtractor)
- DSL call tree building (`DslCallNode`, `usedTypes`) → Step 5 (DslTransformer)
- Import resolution for QML output → Step 5 (ImportResolver)
- ViewModel schema generation → Step 4
- ID allocation → later step

## 7. Test Spec

| ID    | Description | Assertion |
|-------|-------------|-----------|
| AN-01 | `analyzeSource` with `@State` class | `viewModels` non-empty, `className` correct, `isExported` correct |
| AN-02 | `analyzeSource` with View function | `views` non-empty, `functionName` correct |
| AN-03 | `analyzeSource` with imports | `imports` populated, `moduleSpecifier`/`namedImports` correct |
| AN-04 | DSL factory import via `dsl/generated/QtQuick/` path | `isDslImport=true`, `qtModuleUri='QtQuick'` |
| AN-05 | Non-DSL import (e.g. `lodash`) | `isDslImport=false`, `qtModuleUri=undefined` |
| AN-06 | Default-exported View function | `exportKind === 'default'` |
| AN-07 | Named-exported View function | `exportKind === 'named'` |
| AN-08 | `analyzeProject` with multi-file tsconfig | Multiple files, `allViewModels`/`allViews` aggregated |
| AN-09 | Source with syntax error | `diagnostics` non-empty, appropriate severity |
| AN-10 | Decorator import (`@qmlts/core`) | NOT classified as DSL factory import (`isDslImport=false`) |
| AN-11 | Non-exported decorated class | Discovered with `isExported=false` |
| AN-12 | Arrow-function View: `export const Foo = (vm) => Rectangle()...` | Discovered as view |
| AN-13 | Re-exported View: `const Foo = ...; export default Foo` | Discovered as view |
| AN-14 | View with typed vmParam | `vmParam.name` and `vmParam.type` extracted |
| AN-15 | View without vmParam | `vmParam` is `undefined` |
| AN-16 | Multiple ViewModels in one file | All discovered |
| AN-17 | Multiple Views in one file | All discovered |
| AN-18 | Empty source file | All arrays empty, no diagnostics |
| AN-19 | `analyzeProject` skips `.d.ts` files | Declaration files not included in results |
| AN-20 | Repeated `analyzeSource` calls are isolated | No collisions, no project pollution |
| AN-21 | Invalid/missing tsconfig in `analyzeProject` | Project-level diagnostic with `QMLTS-G001` |
| AN-22 | Exported function NOT returning DSL call chain | NOT discovered as a view |
| AN-23 | Class without `@State`/`@Command`/`@Effect` | NOT discovered as a ViewModel |

### Test approach for `analyzeProject` tests (AN-08, AN-19, AN-21):
Create temporary directories with fixture files and a minimal `tsconfig.json`.
Use Bun's temp dir APIs or a `tests/compiler/analyzer/fixtures/` directory.

## 8. Implementation Approach

Modular class with focused helpers (Approach 1 from brainstorming):
- One `TsAnalyzer` class orchestrating focused helper modules
- Each helper is a separate file receiving a ts-morph `SourceFile`
- The class manages ts-morph `Project` lifetime
- Natural extension point for later steps to add extraction helpers
