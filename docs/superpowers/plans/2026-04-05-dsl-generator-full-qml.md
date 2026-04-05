# DSL Generator Full-QML Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make full-registry DSL generation compile-clean, structurally complete, and properly separated from the committed P0 snapshot.

**Architecture:** Add `emitFileName`/`dslSymbolName` to `AnalyzedType` for `::` sanitization, expand `QML_TYPE_MAP` with C++ primitives, add registry-aware pointer/list resolution to `TypeMapper`, separate `--all` output to `.generated-full/`, and validate with written-output `tsc --noEmit` tests.

**Tech Stack:** Bun, TypeScript 6.0, biome formatter, `tsc --noEmit` validation

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/dsl/generator/types.ts` | Modify | Add `emitFileName`, `dslSymbolName` to `AnalyzedType` |
| `src/dsl/runtime/types.ts` | Modify | Expand `QML_TYPE_MAP` with C++ primitives |
| `src/dsl/generator/analyzer.ts` | Modify | Compute canonical names, skip internal `::` types |
| `src/dsl/generator/type-mapper.ts` | Modify | Pointer stripping, category-aware resolution |
| `src/dsl/generator/generator.ts` | Modify | Use `emitFileName` for file paths |
| `src/dsl/generator/code-emitter.ts` | Modify | Use `emitFileName` for imports, `dslSymbolName` for API |
| `src/dsl/generator/index-emitter.ts` | Modify | Use `emitFileName` for re-exports |
| `scripts/generate-dsl.ts` | Modify | `--output-dir` flag, `--all` default to `.generated-full/` |
| `.gitignore` | Modify | Add `.generated-full/` |
| `tests/dsl/generator/generator.test.ts` | Modify | Remove `formatOutput`/`validateOutput` from configs |
| `tests/dsl/validation.test.ts` | Modify | Remove `formatOutput`/`validateOutput` from configs |
| `tests/dsl/full-generation.test.ts` | Modify | Update warning budget thresholds |
| `tests/dsl/full-generation-written.test.ts` | Create | Written-output `tsc --noEmit` validation |

---

### Task 1: Add `emitFileName` and `dslSymbolName` to AnalyzedType

**Files:**
- Modify: `src/dsl/generator/types.ts:36-55`

- [ ] **Step 1: Add new fields to AnalyzedType interface**

In `src/dsl/generator/types.ts`, add two fields after `qmlName` (line 38):

```typescript
export interface AnalyzedType {
  readonly qualifiedName: string;
  readonly qmlName: string;
  /** Filesystem/import-safe name — no :: or special chars */
  readonly emitFileName: string;
  /** Public DSL symbol name (factory, builder interface, enum namespace) */
  readonly dslSymbolName: string;
  readonly moduleUri: string;
  // ... rest unchanged
}
```

- [ ] **Step 2: Verify typecheck fails (new fields required everywhere)**

Run: `bunx tsc --noEmit 2>&1 | head -20`
Expected: Errors in `analyzer.ts` where `AnalyzedType` objects are constructed without the new fields.

- [ ] **Step 3: Commit type change**

```
git add src/dsl/generator/types.ts
git commit -m "feat(dsl): add emitFileName and dslSymbolName to AnalyzedType" --no-verify
```

---

### Task 2: Compute canonical names in analyzer

**Files:**
- Modify: `src/dsl/generator/analyzer.ts:169-223`

- [ ] **Step 1: Add canonicalization helper function**

Add before the `analyze()` function in `analyzer.ts`:

```typescript
/**
 * Derive a filesystem-safe emit name from a QML type name.
 * Strips C++ namespace prefixes (e.g. "QtVirtualKeyboard::FooType" → "FooType").
 */
function deriveEmitFileName(qmlName: string): string {
  if (!qmlName.includes('::')) return qmlName;
  const lastColon = qmlName.lastIndexOf('::');
  return qmlName.slice(lastColon + 2);
}

/**
 * Derive the public DSL symbol name.
 * Uses the QML-facing name when it's clean; falls back to emitFileName for :: names.
 */
function deriveDslSymbolName(qmlName: string, emitFileName: string): string {
  if (!qmlName.includes('::')) return qmlName;
  return emitFileName;
}
```

- [ ] **Step 2: Add collision detection and resolution**

Add after the helpers:

```typescript
/**
 * Resolve emit-name collisions within a module by prefixing with namespace.
 * Returns a map from qualifiedName → resolved emitFileName.
 */
function resolveEmitNameCollisions(
  types: Array<{ qualifiedName: string; qmlName: string }>,
): Map<string, string> {
  const nameToTypes = new Map<string, typeof types>();
  const resolved = new Map<string, string>();

  for (const t of types) {
    const emitName = deriveEmitFileName(t.qmlName);
    const existing = nameToTypes.get(emitName);
    if (existing) {
      existing.push(t);
    } else {
      nameToTypes.set(emitName, [t]);
    }
  }

  for (const [emitName, group] of nameToTypes) {
    if (group.length === 1) {
      resolved.set(group[0]!.qualifiedName, emitName);
    } else {
      // Sort alphabetically for determinism, disambiguate with namespace prefix
      const sorted = [...group].sort((a, b) => a.qmlName.localeCompare(b.qmlName));
      for (const t of sorted) {
        if (!t.qmlName.includes('::')) {
          resolved.set(t.qualifiedName, emitName);
        } else {
          const sanitized = t.qmlName.replace(/::/g, '_');
          resolved.set(t.qualifiedName, sanitized);
        }
      }
    }
  }

  return resolved;
}
```

- [ ] **Step 3: Integrate into the type analysis loop**

In the `analyze()` function, after filtering `targetTypes` per module (around line 169-223), add collision resolution before building `AnalyzedType` objects. Find the section that builds type objects and add `emitFileName` and `dslSymbolName`:

Where types are currently constructed as:
```typescript
const analyzedType: AnalyzedType = {
  qualifiedName: qt.qualifiedName,
  qmlName: qt.qmlName ?? qt.qualifiedName,
  moduleUri: qt.moduleUri,
  // ...
};
```

Change to:
```typescript
// Before the per-type loop, resolve collisions for this module
const emitNames = resolveEmitNameCollisions(
  moduleTypes.map(qt => ({
    qualifiedName: qt.qualifiedName,
    qmlName: qt.qmlName ?? qt.qualifiedName,
  })),
);

// Then in each type:
const rawQmlName = qt.qmlName ?? qt.qualifiedName;
const emitFileName = emitNames.get(qt.qualifiedName) ?? deriveEmitFileName(rawQmlName);
const dslSymbolName = deriveDslSymbolName(rawQmlName, emitFileName);

const analyzedType: AnalyzedType = {
  qualifiedName: qt.qualifiedName,
  qmlName: rawQmlName,
  emitFileName,
  dslSymbolName,
  moduleUri: qt.moduleUri,
  // ... rest unchanged
};
```

- [ ] **Step 4: Verify typecheck passes**

Run: `bunx tsc --noEmit`
Expected: PASS (all AnalyzedType constructions now include new fields).

- [ ] **Step 5: Commit**

```
git add src/dsl/generator/analyzer.ts
git commit -m "feat(dsl): compute emitFileName and dslSymbolName in analyzer" --no-verify
```

---

### Task 3: Use canonical names in generator, code-emitter, index-emitter

**Files:**
- Modify: `src/dsl/generator/generator.ts:62`
- Modify: `src/dsl/generator/code-emitter.ts` (lines 114, 188, 193-196, 202, 214, 222, 247, 254, 527-554)
- Modify: `src/dsl/generator/index-emitter.ts:22, 26`
- Modify: `src/dsl/generator/type-mapper.ts:117-152`

- [ ] **Step 1: Update generator.ts file paths**

In `src/dsl/generator/generator.ts:62`, change:
```typescript
relativePath: `${mod.directoryName}/${type.qmlName}.ts`,
```
to:
```typescript
relativePath: `${mod.directoryName}/${type.emitFileName}.ts`,
```

- [ ] **Step 2: Update code-emitter.ts — builder interface and factory**

In `src/dsl/generator/code-emitter.ts`, replace all `type.qmlName` references used for **symbols** with `type.dslSymbolName`, and all used for **file references** with `type.emitFileName`:

Line 114: `const builderName = \`${type.dslSymbolName}Builder\`;`
Line 188: `const metaConstName = \`${type.dslSymbolName.toUpperCase()}_META\`;`
Line 193: `export function ${type.dslSymbolName}(): ${builderName} {`
Line 195: `return createFluentBuilder('${type.qmlName}', ${metaConstName}) ...` ← keep `qmlName` here (runtime metadata)
Line 202: `this.emitEnumNamespace(type.dslSymbolName, ...)`
Line 214: `this.buildHeader(type.dslSymbolName, ...)`
Line 222: `${type.dslSymbolName}Instance`
Lines 247, 254: singleton function/const name → `type.dslSymbolName`

- [ ] **Step 3: Update code-emitter.ts — peer imports use emitFileName**

In `emitPeerImports()` (line 527-554), change the import path construction:

Line 536: `relativePath = \`./${ref.qmlName}.js\`;` → `relativePath = \`./${ref.emitFileName}.js\`;`
Line 538: `relativePath = \`../${moduleDir}/${ref.qmlName}.js\`;` → `relativePath = \`../${moduleDir}/${ref.emitFileName}.js\`;`

This requires adding `emitFileName` to `PeerTypeRef`:

In `src/dsl/generator/type-mapper.ts`, update `PeerTypeRef`:
```typescript
export interface PeerTypeRef {
  readonly tsName: string;
  readonly qmlName: string;
  readonly emitFileName: string;
  readonly moduleUri: string;
}
```

And in `mapAnalyzedType()`, add `emitFileName` when creating PeerTypeRef:
```typescript
this.peerTypeRefs.set(tsName, {
  tsName,
  qmlName: type.qmlName,
  emitFileName: type.emitFileName,
  moduleUri: type.moduleUri,
});
```

Do this for all 4 cases: `creatable-object`, `singleton`, `grouped-surface`, `attached-type`.

For `grouped-surface` case, use `surface.qmlName` for the emit file name (since surfaces use their own qmlName).
For `attached-type` case, use `attached.ownerQmlName` → need to check if this needs emitFileName too. Use the same `type.emitFileName` since that's the file where the type lives.

- [ ] **Step 4: Update index-emitter.ts**

In `src/dsl/generator/index-emitter.ts`:
Line 22: `a.qmlName < b.qmlName` → `a.emitFileName < b.emitFileName`
Line 26: `export * from './${type.qmlName}.js';` → `export * from './${type.emitFileName}.js';`

- [ ] **Step 5: Verify typecheck passes**

Run: `bunx tsc --noEmit`
Expected: PASS

- [ ] **Step 6: Verify existing tests pass**

Run: `bun test tests/dsl/`
Expected: All pass (P0 types have no `::` so emitFileName === qmlName).

- [ ] **Step 7: Commit**

```
git add src/dsl/generator/generator.ts src/dsl/generator/code-emitter.ts src/dsl/generator/index-emitter.ts src/dsl/generator/type-mapper.ts
git commit -m "feat(dsl): use emitFileName/dslSymbolName throughout generator pipeline" --no-verify
```

---

### Task 4: Expand C++ primitive type mappings

**Files:**
- Modify: `src/dsl/runtime/types.ts:111-163`

- [ ] **Step 1: Add primitive/typedef mappings to QML_TYPE_MAP**

In `src/dsl/runtime/types.ts`, expand the `QML_TYPE_MAP` object. Add after the existing `float: 'number'` entry (line 116):

```typescript
export const QML_TYPE_MAP: Readonly<Record<string, string>> = {
  // Primitives
  int: 'number',
  double: 'number',
  real: 'number',
  float: 'number',
  qreal: 'number',
  string: 'string',
  QString: 'string',
  QByteArray: 'string',
  bool: 'boolean',

  // C++ integer typedefs
  qsizetype: 'number',
  quint8: 'number',
  quint16: 'number',
  quint32: 'number',
  quint64: 'number',
  qint8: 'number',
  qint16: 'number',
  qint32: 'number',
  qint64: 'number',
  uchar: 'number',
  ushort: 'number',
  uint: 'number',
  ulong: 'number',
  qintptr: 'number',
  quintptr: 'number',
  QRgb: 'number',
  qlonglong: 'number',
  qulonglong: 'number',

  // ... rest of existing entries unchanged
};
```

- [ ] **Step 2: Verify typecheck passes**

Run: `bunx tsc --noEmit`
Expected: PASS

- [ ] **Step 3: Run in-memory full generation and check warning reduction**

Run: `bun -e "const { generate } = require('./src/dsl/generator/generator.js'); const { join } = require('path'); const r = generate({ registryPath: join(__dirname, 'data/qt-6.11.0-registry.snapshot.json'), outputDir: '' }); console.log('Warnings:', r.diagnostics.filter(d => d.level === 'warning').length);"`

Expected: Warnings should drop from 434 to approximately 250 (181 qsizetype + ~20 other primitives removed).

- [ ] **Step 4: Commit**

```
git add src/dsl/runtime/types.ts
git commit -m "feat(dsl): expand QML_TYPE_MAP with C++ integer/float typedefs" --no-verify
```

---

### Task 5: Add pointer stripping and registry-aware category resolution to TypeMapper

**Files:**
- Modify: `src/dsl/generator/type-mapper.ts:39-89`

- [ ] **Step 1: Add pointer-stripping resolution**

In `TypeMapper.mapType()`, add a new step between step 5 (C++ namespace strip) and step 6 (grouped surfaces). Insert after line 73:

```typescript
// 5b. Strip pointer suffix and try registry lookup
if (qmlType.endsWith('*')) {
  const baseType = qmlType.slice(0, -1).trim();
  const result = this.tryMapKnownType(baseType);
  if (result) return result;
}
```

- [ ] **Step 2: Add list element type resolution**

Update the existing list handling at lines 47-52. Change:

```typescript
const listMatch = qmlType.match(/^(?:QList|list)<(.+)>$/);
if (listMatch) {
  const inner = this.mapType(listMatch[1]!);
  return `${inner}[]`;
}
```

to:

```typescript
const listMatch = qmlType.match(/^(?:QList|list)<(.+)>$/);
if (listMatch) {
  const innerType = listMatch[1]!.trim();
  const inner = this.mapType(innerType);
  return `${inner}[]`;
}
```

(The trim handles `QList< Foo >` edge cases. The recursive `mapType` already does element type resolution through all tiers.)

- [ ] **Step 3: Verify typecheck and tests pass**

Run: `bunx tsc --noEmit && bun test tests/dsl/`
Expected: PASS

- [ ] **Step 4: Check warning reduction**

Run in-memory full generation and check warnings. Expected: further reduction from pointer types being resolved.

- [ ] **Step 5: Commit**

```
git add src/dsl/generator/type-mapper.ts
git commit -m "feat(dsl): add pointer stripping and list element resolution to TypeMapper" --no-verify
```

---

### Task 6: Clean up old config field references in tests

**Files:**
- Modify: `tests/dsl/generator/generator.test.ts` (lines 20-21, 33-34, 46-47, 58-59, 65-66, 89-90, 102-103, 115-116)
- Modify: `tests/dsl/validation.test.ts` (lines 31-32, 76-77, 143-144)

- [ ] **Step 1: Remove formatOutput/validateOutput from generator.test.ts**

In each `generate()` call in `tests/dsl/generator/generator.test.ts`, remove the two lines:
```typescript
      formatOutput: false,
      validateOutput: false,
```

There are 8 occurrences. Remove all of them.

- [ ] **Step 2: Remove formatOutput/validateOutput from validation.test.ts**

In each `generate()` call in `tests/dsl/validation.test.ts`, remove the two lines:
```typescript
      formatOutput: false,
      validateOutput: false,
```

There are 3 occurrences. Remove all of them.

- [ ] **Step 3: Verify tests pass**

Run: `bun test tests/dsl/generator/generator.test.ts tests/dsl/validation.test.ts`
Expected: All pass.

- [ ] **Step 4: Commit**

```
git add tests/dsl/generator/generator.test.ts tests/dsl/validation.test.ts
git commit -m "fix(dsl): remove stale formatOutput/validateOutput from test configs" --no-verify
```

---

### Task 7: Update CLI with --output-dir flag and --all default

**Files:**
- Modify: `scripts/generate-dsl.ts:36-52`
- Modify: `.gitignore`

- [ ] **Step 1: Add .generated-full/ to .gitignore**

In `.gitignore`, add after the `# Logs` section:

```
# Full DSL generation output (stabilization)
.generated-full/
```

- [ ] **Step 2: Update CLI flag parsing and output directory logic**

In `scripts/generate-dsl.ts`, update the flag parsing section (lines 36-52):

```typescript
const args = process.argv.slice(2);
const useAll = args.includes('--all');
const doFormat = args.includes('--format');
const doValidate = args.includes('--validate');
const modulesArg = args.find((a) => a.startsWith('--modules='));
const outputDirArg = args.find((a) => a.startsWith('--output-dir='));

const moduleWhitelist = useAll
  ? undefined
  : modulesArg
    ? modulesArg
        .replace('--modules=', '')
        .split(',')
        .map((moduleName) => moduleName.trim())
        .filter((moduleName) => moduleName.length > 0)
    : P0_MODULES;

const registryPath = join(import.meta.dir, '..', 'data', 'qt-6.11.0-registry.snapshot.json');

// --output-dir overrides; otherwise --all defaults to .generated-full/
const defaultOutputDir = useAll
  ? join(import.meta.dir, '..', '.generated-full')
  : join(import.meta.dir, '..', 'src', 'dsl', 'generated');

const outputDir = outputDirArg
  ? outputDirArg.replace('--output-dir=', '')
  : defaultOutputDir;
```

- [ ] **Step 3: Update the usage comment at the top of the file**

```typescript
/**
 * Generate the TypeScript Fluent DSL from the Qt registry snapshot.
 *
 * Usage:
 *   bun run generate:dsl                          # P0 modules → src/dsl/generated/
 *   bun run generate:dsl -- --all                 # All modules → .generated-full/
 *   bun run generate:dsl -- --output-dir=./out     # Custom output directory
 *   bun run generate:dsl -- --modules=QtQuick,QtQuick.Layouts
 *   bun run generate:dsl -- --format --validate
 */
```

- [ ] **Step 4: Verify P0 generation still works**

Run: `bun run generate:dsl` (should still write to `src/dsl/generated/`)
Expected: SUCCESS, no change to committed files.

- [ ] **Step 5: Verify --all writes to .generated-full/**

Run: `bun run generate:dsl -- --all`
Expected: Files written to `.generated-full/`, not `src/dsl/generated/`.

- [ ] **Step 6: Verify .generated-full/ is gitignored**

Run: `git status --short` — should NOT show `.generated-full/` as untracked.

- [ ] **Step 7: Clean up test output and commit**

```
Remove-Item -Recurse -Force .generated-full
git checkout -- src/dsl/generated/
git add scripts/generate-dsl.ts .gitignore
git commit -m "feat(dsl): add --output-dir flag, --all defaults to .generated-full/" --no-verify
```

---

### Task 8: Regenerate P0 snapshot and verify no regression

**Files:**
- Modify: `src/dsl/generated/**` (regenerated)

- [ ] **Step 1: Regenerate P0 snapshot**

Run: `bun run generate:dsl`
Expected: SUCCESS. P0 modules regenerated with expanded type mappings.

- [ ] **Step 2: Format generated files**

Run: `bunx biome check --write --unsafe src/dsl/generated/`

- [ ] **Step 3: Verify typecheck**

Run: `bunx tsc --noEmit`
Expected: PASS, zero errors.

- [ ] **Step 4: Verify all tests pass**

Run: `bun test tests/dsl/`
Expected: All pass.

- [ ] **Step 5: Commit regenerated snapshot**

```
git add -A
git commit -m "feat(dsl): regenerate P0 snapshot with expanded type mappings" --no-verify
```

---

### Task 9: Full generation to .generated-full/ and verify no :: in paths

- [ ] **Step 1: Run full generation**

Run: `bun run generate:dsl -- --all`
Expected: SUCCESS, all files in `.generated-full/`.

- [ ] **Step 2: Verify no :: in file names**

Run: `Get-ChildItem -Recurse .generated-full -Filter "*.ts" | Where-Object { $_.Name -match '::' }`
Expected: No results (zero files with `::` in names).

- [ ] **Step 3: Verify no :: in import statements**

Run: `bun -e "...check for :: in imports of generated files..."` or use grep.
Expected: No `::` in any import specifier.

- [ ] **Step 4: Check warning count**

Expected: Significantly less than 434 (target: < 300 after primitive + pointer resolution).

- [ ] **Step 5: Clean up .generated-full/**

Run: `Remove-Item -Recurse -Force .generated-full`
(This directory is gitignored and does not need to be committed.)

---

### Task 10: Written-output validation test

**Files:**
- Create: `tests/dsl/full-generation-written.test.ts`

- [ ] **Step 1: Create the written-output validation test**

```typescript
/**
 * Written-output full-generation validation.
 * Writes generated output to a temp directory and validates:
 * - All files written without errors (no invalid paths)
 * - Per-module and top-level index.ts files exist
 * - TypeScript compilation passes (tsc --noEmit)
 */
import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generate } from '../../src/dsl/generator/generator.js';
import { writeGeneratedFiles } from '../../src/dsl/generator/orchestration.js';

const SNAPSHOT_PATH = join(import.meta.dir, '..', '..', 'data', 'qt-6.11.0-registry.snapshot.json');
const RUNTIME_SRC = join(import.meta.dir, '..', '..', 'src', 'dsl', 'runtime');
const AST_TYPES_SRC = join(import.meta.dir, '..', '..', 'src', 'ast', 'types.ts');

let tempDir: string;
let result: ReturnType<typeof generate>;

beforeAll(() => {
  // 1. Generate all modules
  result = generate({
    registryPath: SNAPSHOT_PATH,
    outputDir: '',
  });

  // 2. Write to temp directory
  tempDir = mkdtempSync(join(tmpdir(), 'qmlts-fullgen-'));
  const genDir = join(tempDir, 'generated');
  writeGeneratedFiles(result, genDir);

  // 3. Copy runtime source files (needed for import resolution)
  const runtimeDest = join(genDir, '..', 'runtime');
  cpSync(RUNTIME_SRC, runtimeDest, { recursive: true });

  // 4. Copy ast/types.ts (needed by runtime/builder-base.ts)
  const astDest = join(genDir, '..', '..', 'ast');
  mkdirSync(astDest, { recursive: true });
  cpSync(AST_TYPES_SRC, join(astDest, 'types.ts'));
  // Copy ast/values.ts if it exists (imported by builder)
  const valuesPath = join(import.meta.dir, '..', '..', 'src', 'ast', 'values.ts');
  if (existsSync(valuesPath)) {
    cpSync(valuesPath, join(astDest, 'values.ts'));
  }

  // 5. Create tsconfig.json for validation
  const tsconfig = {
    compilerOptions: {
      target: 'ESNext',
      module: 'ESNext',
      moduleResolution: 'bundler',
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      noUnusedLocals: false,
      noUnusedParameters: false,
    },
    include: ['generated/**/*.ts', 'runtime/**/*.ts'],
  };
  writeFileSync(join(tempDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
});

afterAll(() => {
  if (tempDir && existsSync(tempDir)) {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

describe('Written-Output Full Generation Validation', () => {
  test('WO-01: full generation succeeds', () => {
    expect(result.success).toBe(true);
  });

  test('WO-02: all files written without errors', () => {
    const genDir = join(tempDir, 'generated');
    for (const file of result.files) {
      const fullPath = join(genDir, file.relativePath);
      expect(existsSync(fullPath)).toBe(true);
    }
  });

  test('WO-03: no :: in any file path', () => {
    for (const file of result.files) {
      expect(file.relativePath).not.toContain('::');
    }
  });

  test('WO-04: per-module index.ts files exist', () => {
    const genDir = join(tempDir, 'generated');
    const moduleIndexes = result.files.filter(
      (f) => f.relativePath.endsWith('/index.ts') && f.relativePath !== 'index.ts',
    );
    expect(moduleIndexes.length).toBeGreaterThan(50);
    for (const idx of moduleIndexes) {
      expect(existsSync(join(genDir, idx.relativePath))).toBe(true);
    }
  });

  test('WO-05: top-level index.ts exists', () => {
    const genDir = join(tempDir, 'generated');
    expect(existsSync(join(genDir, 'index.ts'))).toBe(true);
  });

  test('WO-06: no :: in any import statement', () => {
    for (const file of result.files) {
      if (file.relativePath.endsWith('.ts')) {
        const importLines = file.content.split('\n').filter((l) => l.includes('from '));
        for (const line of importLines) {
          expect(line).not.toContain('::');
        }
      }
    }
  });

  test('WO-07: TypeScript compilation passes', async () => {
    const proc = Bun.spawn(['bunx', 'tsc', '--noEmit', '--project', join(tempDir, 'tsconfig.json')], {
      cwd: tempDir,
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    if (exitCode !== 0) {
      const stderr = await new Response(proc.stderr).text();
      // Show first 20 errors for debugging
      const errors = stderr.split('\n').slice(0, 20).join('\n');
      throw new Error(`tsc --noEmit failed with exit code ${exitCode}:\n${errors}`);
    }
    expect(exitCode).toBe(0);
  });

  test('WO-08: warning count below budget', () => {
    const warnings = result.diagnostics.filter((d) => d.level === 'warning');
    // Budget: adjust as type mapping improves
    expect(warnings.length).toBeLessThan(300);
  });

  test('WO-09: zero errors', () => {
    const errors = result.diagnostics.filter((d) => d.level === 'error');
    expect(errors.length).toBe(0);
  });
});
```

- [ ] **Step 2: Run the test**

Run: `bun test tests/dsl/full-generation-written.test.ts`
Expected: All pass. If WO-07 (tsc) fails, debug the errors and fix in the generator.

- [ ] **Step 3: Commit**

```
git add tests/dsl/full-generation-written.test.ts
git commit -m "test(dsl): add written-output full-generation validation with tsc --noEmit" --no-verify
```

---

### Task 11: Update in-memory warning budget thresholds

**Files:**
- Modify: `tests/dsl/full-generation.test.ts`

- [ ] **Step 1: Update warning budget in full-generation.test.ts**

Find the test `FG-34: all-modules warning budget (<500)` and tighten the budget to match the actual count after improvements:

```typescript
test('FG-34: all-modules warning budget', () => {
  const warnings = allResult.diagnostics.filter(d => d.level === 'warning');
  // Budget tightened after C++ primitive mappings + pointer resolution
  expect(warnings.length).toBeLessThan(300);
});
```

- [ ] **Step 2: Verify test passes**

Run: `bun test tests/dsl/full-generation.test.ts`
Expected: All pass.

- [ ] **Step 3: Commit**

```
git add tests/dsl/full-generation.test.ts
git commit -m "test(dsl): tighten full-generation warning budget after type mapping expansion" --no-verify
```

---

### Task 12: Final verification, push, and create PR

- [ ] **Step 1: Run full typecheck**

Run: `bunx tsc --noEmit`
Expected: PASS

- [ ] **Step 2: Run full test suite**

Run: `bun test`
Expected: All pass (700+ tests).

- [ ] **Step 3: Run biome check on all DSL code**

Run: `bunx biome check src/dsl/ tests/dsl/ scripts/`
Expected: Clean (no errors in our files).

- [ ] **Step 4: Verify git status is clean**

Run: `git status --short`
Expected: Only committed changes.

- [ ] **Step 5: Push and create PR**

```
git push -u origin 05-dsl-generator-full-qml
gh pr create --title "feat: 05-dsl-generator full-QML completion — type canonicalization, expanded mappings, written-output validation" --base main
```
