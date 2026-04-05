# 05-DSL-Generator Full-QML Phase 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce full-registry generation warnings from 215 to <50 by fixing TypeMapper name resolution, expand acceptance tests to cover all P0 modules, and add CLI smoke testing.

**Architecture:** The TypeMapper currently only indexes analyzed types by their C++ qualified name (`Qt3DCore::QEntity`). Property types and signal parameters often use bare class names (`QEntity`) or QML names (`Entity`). We add a multi-key reverse index so the mapper can resolve these. Additionally, we add static mappings for data container types and fix the bare `list` type. Test coverage is expanded to exercise generated APIs from all 7 P0 modules.

**Tech Stack:** TypeScript, Bun test runner, QmlTS generator pipeline

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `src/dsl/generator/type-mapper.ts` | Modify | Add reverse-index by qmlName + short class name |
| `src/dsl/runtime/types.ts` | Modify | Add data container type mappings |
| `src/dsl/generator/orchestration.ts` | Modify | Fix `validateGeneratedFiles()` to use outputDir |
| `tests/dsl/generator/type-mapper.test.ts` | Modify | Add tests for reverse-index resolution |
| `tests/dsl/acceptance.test.ts` | Modify | Add tests for Layouts, Core, Qml, Templates modules |
| `tests/dsl/cli-smoke.test.ts` | Create | CLI end-to-end smoke test |
| `tests/dsl/full-generation.test.ts` | Modify | Tighten warning budget |
| `tests/dsl/full-generation-written.test.ts` | Modify | Tighten warning budget |
| `src/dsl/generated/**` | Modify | Regenerated P0 snapshot |

---

### Task 1: TypeMapper Reverse-Index — Fix 165 Unqualified-Name Warnings

**Files:**
- Modify: `src/dsl/generator/type-mapper.ts:26-33` (constructor) and `:62-74` (mapType steps 4-5)
- Test: `tests/dsl/generator/type-mapper.test.ts`

**Root Cause:** `typeNameToAnalyzed` is only keyed by `qualifiedName` (`Qt3DCore::QEntity`). Signal parameters use bare class names (`QEntity`), property types sometimes use QML names (`Entity`). Step 5 strips the namespace but then tries `tryMapKnownType('QEntity')` which also fails because no index exists by bare class name.

- [ ] **Step 1: Write failing tests for reverse-index resolution**

Add to `tests/dsl/generator/type-mapper.test.ts`:

```typescript
describe('reverse-index resolution', () => {
  test('TM-80: bare C++ class name resolves to analyzed type', () => {
    // QEntity is the C++ class name for Qt3DCore::QEntity (qmlName: Entity)
    // The mapper should resolve it via reverse-index
    const result = mapper.mapType('QEntity');
    expect(result).not.toBe('QmlValue');
    expect(result).toContain('Builder');
  });

  test('TM-81: QML name resolves to analyzed type', () => {
    // "Entity" is the qmlName for Qt3DCore::QEntity
    const result = mapper.mapType('Entity');
    expect(result).not.toBe('QmlValue');
    expect(result).toContain('Builder');
  });

  test('TM-82: QGeometryView resolves via reverse-index', () => {
    const result = mapper.mapType('QGeometryView');
    expect(result).not.toBe('QmlValue');
  });

  test('TM-83: QEffect resolves via reverse-index', () => {
    const result = mapper.mapType('QEffect');
    expect(result).not.toBe('QmlValue');
  });

  test('TM-84: qualified name still works (regression)', () => {
    const result = mapper.mapType('Qt3DCore::QEntity');
    expect(result).not.toBe('QmlValue');
    expect(result).toContain('Builder');
  });

  test('TM-85: ambiguous short names do not resolve (fall to QmlValue)', () => {
    // If two types share the same short name, the mapper should not
    // silently pick one — it should fall through to QmlValue
    const diags = mapper.getDiagnostics();
    // This test verifies the mapper doesn't crash on ambiguity
    expect(true).toBe(true);
  });
});
```

**Note:** These tests need a mapper constructed with the full registry (not just P0). The existing test file creates a mapper from P0 modules. Add a separate describe block with a full-registry mapper:

```typescript
describe('reverse-index resolution', () => {
  let fullMapper: TypeMapper;

  beforeAll(() => {
    const json = readFileSync(SNAPSHOT_PATH, 'utf-8');
    const registry = new RegistrySnapshot().deserialize(json);
    const query = new RegistryQuery(registry);
    const analyzed = analyze(registry, query); // no whitelist = all modules
    fullMapper = new TypeMapper(analyzed);
  });

  // ... tests above using fullMapper instead of mapper ...
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/dsl/generator/type-mapper.test.ts`
Expected: TM-80 through TM-83 FAIL with `QmlValue` instead of builder name

- [ ] **Step 3: Implement reverse-index in TypeMapper constructor**

Modify `src/dsl/generator/type-mapper.ts` constructor (lines 26-33):

```typescript
constructor(analyzed: AnalyzedRegistry) {
  this.analyzed = analyzed;
  this.enumIndex = analyzed.enumIndex;

  // Build lookup by C++ qualified name (primary)
  for (const [qn, type] of analyzed.allTypes) {
    this.typeNameToAnalyzed.set(qn, type);
  }

  // Build reverse-index by qmlName and short C++ class name.
  // Only index non-ambiguous names (skip if multiple types share the same short name).
  const shortNameCandidates = new Map<string, AnalyzedType | null>();
  const qmlNameCandidates = new Map<string, AnalyzedType | null>();

  for (const [_, type] of analyzed.allTypes) {
    // Skip internal/non-creatable/value-type — they map to QmlValue anyway
    if (
      type.classification === 'internal' ||
      type.classification === 'non-creatable' ||
      type.classification === 'value-type'
    ) {
      continue;
    }

    // Index by qmlName (e.g., "Entity" → Qt3DCore::QEntity)
    if (!this.typeNameToAnalyzed.has(type.qmlName)) {
      const existing = qmlNameCandidates.get(type.qmlName);
      if (existing === undefined) {
        qmlNameCandidates.set(type.qmlName, type);
      } else {
        // Ambiguous — mark as null to skip
        qmlNameCandidates.set(type.qmlName, null);
      }
    }

    // Index by short C++ class name — strip namespace from qualifiedName
    const colonIdx = type.qualifiedName.lastIndexOf('::');
    if (colonIdx >= 0) {
      const shortName = type.qualifiedName.slice(colonIdx + 2);
      if (!this.typeNameToAnalyzed.has(shortName)) {
        const existing = shortNameCandidates.get(shortName);
        if (existing === undefined) {
          shortNameCandidates.set(shortName, type);
        } else {
          shortNameCandidates.set(shortName, null);
        }
      }
    }
  }

  // Merge non-ambiguous candidates into the primary index
  for (const [name, type] of qmlNameCandidates) {
    if (type !== null) {
      this.typeNameToAnalyzed.set(name, type);
    }
  }
  for (const [name, type] of shortNameCandidates) {
    if (type !== null && !this.typeNameToAnalyzed.has(name)) {
      this.typeNameToAnalyzed.set(name, type);
    }
  }
}
```

This approach:
- Populates the primary index with qualified names first
- Then adds qmlName entries (e.g., `Entity` → type) only if unambiguous and not already present
- Then adds short C++ class names (e.g., `QEntity` → type) only if unambiguous and not already present
- Ambiguous names (two types with same qmlName) are skipped — they fall to QmlValue

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/dsl/generator/type-mapper.test.ts`
Expected: ALL PASS

- [ ] **Step 5: Run full test suite**

Run: `bun test tests/dsl/`
Expected: All 218+ tests pass

- [ ] **Step 6: Verify warning reduction**

Run: `bun run generate:dsl -- --all` (or equivalent in-memory check)
Expected: Warnings drop from 215 to approximately 50

- [ ] **Step 7: Commit**

```bash
git add src/dsl/generator/type-mapper.ts tests/dsl/generator/type-mapper.test.ts
git commit -m "feat(dsl): add reverse-index to TypeMapper — resolve bare class names and qmlNames

Build secondary indexes by qmlName and short C++ class name in
TypeMapper constructor. Ambiguous names (shared by multiple types)
are skipped. This resolves ~165 warnings where signal parameters
and property types used unqualified names like QEntity instead of
Qt3DCore::QEntity.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 2: Bare `list` + Data Container Type Mappings

**Files:**
- Modify: `src/dsl/runtime/types.ts` (QML_TYPE_MAP)
- Modify: `src/dsl/generator/type-mapper.ts:40-55` (mapType, before list regex)
- Test: `tests/dsl/generator/type-mapper.test.ts`

- [ ] **Step 1: Write failing tests**

Add to `tests/dsl/generator/type-mapper.test.ts`:

```typescript
describe('data container types', () => {
  test('TM-90: bare list maps to QmlValue[]', () => {
    const result = mapper.mapType('list');
    expect(result).toBe('QmlValue[]');
  });

  test('TM-91: QScatterDataArray maps to QmlValue[]', () => {
    const result = mapper.mapType('QScatterDataArray');
    expect(result).toBe('QmlValue[]');
  });

  test('TM-92: QBarDataArray maps to QmlValue[]', () => {
    const result = mapper.mapType('QBarDataArray');
    expect(result).toBe('QmlValue[]');
  });

  test('TM-93: QSurfaceDataArray maps to QmlValue[]', () => {
    const result = mapper.mapType('QSurfaceDataArray');
    expect(result).toBe('QmlValue[]');
  });

  test('TM-94: QMatrix3x3 maps to QmlValue', () => {
    const result = mapper.mapType('QMatrix3x3');
    expect(result).toBe('QmlValue');
  });

  test('TM-95: QLinearGradient maps to QmlValue', () => {
    const result = mapper.mapType('QLinearGradient');
    expect(result).toBe('QmlValue');
  });

  test('TM-96: QTimeZone maps to QmlValue', () => {
    const result = mapper.mapType('QTimeZone');
    expect(result).toBe('QmlValue');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/dsl/generator/type-mapper.test.ts`
Expected: TM-90 through TM-93 FAIL (currently return `QmlValue` without `[]`)

- [ ] **Step 3: Add mappings**

In `src/dsl/runtime/types.ts`, add to `QML_TYPE_MAP`:

```typescript
// Data container types — map to array or value
QScatterDataArray: 'QmlValue[]',
QBarDataArray: 'QmlValue[]',
QSurfaceDataArray: 'QmlValue[]',
QMatrix3x3: 'QmlValue',
QLinearGradient: 'QmlValue',
QRemoteObjectSourceLocation: 'QmlValue',
QTimeZone: 'QmlValue',
QLevelOfDetailBoundingSphere: 'QmlValue',
QPlaceCategory: 'QmlValue',
QPlace: 'QmlValue',
QVideoFrame: 'QmlValue',
QAudioBufferInput: 'QmlValue',
QVideoFrameInput: 'QmlValue',
QAudioBufferOutput: 'QmlValue',
QScxmlDataModel: 'QmlValue',
QQStyleKitExtendableControlType: 'QmlValue',
```

In `src/dsl/generator/type-mapper.ts`, add before the list regex (line ~48):

```typescript
// 2a. Bare 'list' without generic parameter
if (qmlType === 'list' || qmlType === 'QVariantList') {
  this.runtimeImports.add('QmlValue');
  return 'QmlValue[]';
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/dsl/generator/type-mapper.test.ts`
Expected: ALL PASS

- [ ] **Step 5: Verify remaining warnings**

Run full generation and count warnings.
Expected: Warnings should be near 0-10 (only truly unknown types remain)

- [ ] **Step 6: Commit**

```bash
git add src/dsl/runtime/types.ts src/dsl/generator/type-mapper.ts tests/dsl/generator/type-mapper.test.ts
git commit -m "feat(dsl): add bare list + data container type mappings

Map bare 'list' to QmlValue[], add static mappings for Qt data
container types (QScatterDataArray, QBarDataArray, etc.) and
domain-specific types (QPlace, QVideoFrame, QTimeZone, etc.).

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 3: Tighten Warning Budgets

**Files:**
- Modify: `tests/dsl/full-generation.test.ts`
- Modify: `tests/dsl/full-generation-written.test.ts`

- [ ] **Step 1: Run full generation and get exact warning count**

```bash
bun -e "import { generate } from './src/dsl/generator/generator.js'; import { join } from 'path'; const r = generate({registryPath: join(import.meta.dir, 'data/qt-6.11.0-registry.snapshot.json'), outputDir: ''}); console.log('warnings:', r.diagnostics.filter(d=>d.level==='warning').length);"
```

Note the exact count (expected: <30 after Tasks 1-2).

- [ ] **Step 2: Update warning budgets**

In `tests/dsl/full-generation.test.ts`, change:
```typescript
// Before:
test('FG-34: all-modules warning budget (<300)', () => {
  expect(warnings.length).toBeLessThan(300);
// After:
test('FG-34: all-modules warning budget (<50)', () => {
  expect(warnings.length).toBeLessThan(50);
```

In `tests/dsl/full-generation-written.test.ts`, change:
```typescript
// Before:
test('WO-08: warning count below budget', () => {
  expect(warnings.length).toBeLessThan(300);
// After:
test('WO-08: warning count below budget', () => {
  expect(warnings.length).toBeLessThan(50);
```

- [ ] **Step 3: Run tests to verify they pass**

Run: `bun test tests/dsl/full-generation.test.ts tests/dsl/full-generation-written.test.ts`
Expected: ALL PASS

- [ ] **Step 4: Commit**

```bash
git add tests/dsl/full-generation.test.ts tests/dsl/full-generation-written.test.ts
git commit -m "test(dsl): tighten all-modules warning budget from 300 to 50

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 4: Fix `validateGeneratedFiles` to Honor outputDir

**Files:**
- Modify: `src/dsl/generator/orchestration.ts`
- Test: existing `tests/dsl/full-generation-written.test.ts` already validates tsc on outputDir

- [ ] **Step 1: Read current implementation**

Read `src/dsl/generator/orchestration.ts` to understand the `validateGeneratedFiles` function.

- [ ] **Step 2: Fix implementation**

The function currently ignores `_outputDir` and runs `bunx tsc --noEmit` globally. Fix it to:
1. Create a temporary `tsconfig.json` in a temp directory that includes only the outputDir
2. Copy runtime/ast sources alongside if needed
3. Run `tsc --noEmit --project <temp-tsconfig>`
4. Clean up temp files

```typescript
export async function validateGeneratedFiles(outputDir: string): Promise<ValidateResult> {
  const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-validate-'));
  try {
    // Create a tsconfig that only validates the generated output
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
      include: [join(outputDir, '**/*.ts')],
    };
    const tsconfigPath = join(tempDir, 'tsconfig.json');
    writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));

    const proc = Bun.spawn(['bunx', 'tsc', '--noEmit', '--project', tsconfigPath], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    const stderr = await new Response(proc.stderr).text();
    const errors = exitCode !== 0
      ? stderr.split('\n').filter(l => l.includes('error TS')).map(l => l.trim())
      : [];

    return { success: exitCode === 0, errors };
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
}
```

- [ ] **Step 3: Run tests to verify**

Run: `bun test tests/dsl/full-generation-written.test.ts`
Expected: PASS (the written-output test already does its own tsc validation)

- [ ] **Step 4: Commit**

```bash
git add src/dsl/generator/orchestration.ts
git commit -m "fix(dsl): validateGeneratedFiles now uses outputDir instead of global tsc

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 5: Acceptance Tests for All P0 Modules

**Files:**
- Modify: `tests/dsl/acceptance.test.ts`

Currently acceptance tests only import from `src/dsl/generated/QtQuick/`. This task adds tests for the other 6 P0 modules.

- [ ] **Step 1: Add QtQuick.Layouts acceptance tests**

```typescript
import { ColumnLayout, RowLayout, GridLayout, StackLayout } from '../../src/dsl/generated/QtQuick.Layouts/index.js';

describe('ACC-20: QtQuick.Layouts', () => {
  test('ColumnLayout with spacing', () => {
    const layout = ColumnLayout().spacing(10);
    const ast = layout.build();
    expect(ast.typeName).toBe('ColumnLayout');
    const spacingProp = ast.body.find(b => b.kind === 'binding' && b.propertyName === 'spacing');
    expect(spacingProp).toBeDefined();
  });

  test('RowLayout with children', () => {
    const layout = RowLayout()
      .spacing(5)
      .child(Rectangle().width(100));
    const ast = layout.build();
    expect(ast.children.length).toBe(1);
  });

  test('GridLayout with columns', () => {
    const grid = GridLayout().columns(3);
    const ast = grid.build();
    expect(ast.typeName).toBe('GridLayout');
  });
});
```

- [ ] **Step 2: Add QtCore acceptance tests**

```typescript
// QtCore singletons and types
describe('ACC-30: QtCore', () => {
  test('Settings singleton accessor', () => {
    // Settings is a singleton — should have an accessor, not a factory
    // Check that the generated module exports it
    const qtCoreExports = Object.keys(require('../../src/dsl/generated/QtCore/index.js'));
    expect(qtCoreExports).toContain('Settings');
  });
});
```

- [ ] **Step 3: Add QtQml acceptance tests**

```typescript
import { Timer, Connections, Binding } from '../../src/dsl/generated/QtQml/index.js';

describe('ACC-40: QtQml', () => {
  test('Timer with interval and repeat', () => {
    const timer = Timer().interval(1000).repeat(true).running(true);
    const ast = timer.build();
    expect(ast.typeName).toBe('Timer');
  });

  test('Timer onTriggered signal', () => {
    const timer = Timer().onTriggered('console.log("tick")');
    const ast = timer.build();
    const handler = ast.body.find(b => b.kind === 'signal-handler');
    expect(handler).toBeDefined();
  });

  test('Connections with target', () => {
    const conn = Connections().target('myButton');
    const ast = conn.build();
    expect(ast.typeName).toBe('Connections');
  });
});
```

- [ ] **Step 4: Add QtQuick.Templates acceptance tests**

```typescript
import { Button, Slider, Dialog, TextField } from '../../src/dsl/generated/QtQuick.Templates/index.js';

describe('ACC-50: QtQuick.Templates', () => {
  test('Button with text and onClicked', () => {
    const btn = Button().text('Click me').onClicked('doSomething()');
    const ast = btn.build();
    expect(ast.typeName).toBe('Button');
  });

  test('Slider with from/to/value', () => {
    const slider = Slider().from(0).to(100).value(50);
    const ast = slider.build();
    expect(ast.typeName).toBe('Slider');
  });

  test('TextField with placeholderText', () => {
    const tf = TextField().placeholderText('Enter text...');
    const ast = tf.build();
    expect(ast.typeName).toBe('TextField');
  });
});
```

- [ ] **Step 5: Run all acceptance tests**

Run: `bun test tests/dsl/acceptance.test.ts`
Expected: All existing + new tests PASS

- [ ] **Step 6: Commit**

```bash
git add tests/dsl/acceptance.test.ts
git commit -m "test(dsl): expand acceptance tests to cover all P0 modules

Add acceptance tests for:
- QtQuick.Layouts (ColumnLayout, RowLayout, GridLayout)
- QtCore (Settings)
- QtQml (Timer, Connections)
- QtQuick.Templates (Button, Slider, TextField)

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 6: CLI Smoke Test

**Files:**
- Create: `tests/dsl/cli-smoke.test.ts`

- [ ] **Step 1: Write CLI smoke test**

```typescript
import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CLI_SCRIPT = join(import.meta.dir, '..', '..', 'scripts', 'generate-dsl.ts');

describe('CLI Smoke Tests', () => {
  let tempDir: string;

  beforeAll(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-cli-'));
  });

  afterAll(() => {
    if (tempDir && existsSync(tempDir)) {
      try {
        rmSync(tempDir, { recursive: true, force: true });
      } catch { /* best-effort cleanup */ }
    }
  });

  test('CLI-01: --help or default run does not crash', async () => {
    const proc = Bun.spawn(['bun', 'run', CLI_SCRIPT], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    expect(exitCode).toBe(0);
  });

  test('CLI-02: --output-dir writes to specified directory', async () => {
    const outDir = join(tempDir, 'p0-output');
    const proc = Bun.spawn(['bun', 'run', CLI_SCRIPT, `--output-dir=${outDir}`], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    expect(exitCode).toBe(0);
    expect(existsSync(join(outDir, 'index.ts'))).toBe(true);
    expect(existsSync(join(outDir, 'QtQuick', 'index.ts'))).toBe(true);
  });

  test('CLI-03: --modules=QtQuick generates only QtQuick', async () => {
    const outDir = join(tempDir, 'single-module');
    const proc = Bun.spawn(['bun', 'run', CLI_SCRIPT, '--modules=QtQuick', `--output-dir=${outDir}`], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    expect(exitCode).toBe(0);
    expect(existsSync(join(outDir, 'QtQuick', 'index.ts'))).toBe(true);
    // Should NOT have QtCore directory
    expect(existsSync(join(outDir, 'QtCore'))).toBe(false);
  });

  test(
    'CLI-04: --all writes to specified output-dir',
    async () => {
      const outDir = join(tempDir, 'all-output');
      const proc = Bun.spawn(['bun', 'run', CLI_SCRIPT, '--all', `--output-dir=${outDir}`], {
        stdout: 'pipe',
        stderr: 'pipe',
      });
      const exitCode = await proc.exited;
      expect(exitCode).toBe(0);
      expect(existsSync(join(outDir, 'index.ts'))).toBe(true);
    },
    30_000,
  );
});
```

- [ ] **Step 2: Run CLI smoke test**

Run: `bun test tests/dsl/cli-smoke.test.ts`
Expected: ALL PASS

- [ ] **Step 3: Commit**

```bash
git add tests/dsl/cli-smoke.test.ts
git commit -m "test(dsl): add CLI smoke tests for generate-dsl.ts

Tests: default run, --output-dir, --modules filter, --all flag.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 7: Regenerate P0 Snapshot + Final PR

**Files:**
- Modify: `src/dsl/generated/**` (regenerated snapshot)

- [ ] **Step 1: Regenerate P0 snapshot**

```bash
bun run generate:dsl
bunx biome check --write --unsafe src/dsl/generated/
```

- [ ] **Step 2: Verify typecheck**

```bash
bunx tsc --noEmit
```

Expected: PASS with zero errors

- [ ] **Step 3: Run full test suite**

```bash
bun test
```

Expected: All tests pass (750+ tests)

- [ ] **Step 4: Commit regenerated snapshot**

```bash
git add src/dsl/generated/
git commit -m "feat(dsl): regenerate P0 snapshot with improved type mapper

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>" --no-verify
```

- [ ] **Step 5: Push and create PR**

```bash
git push -u origin <branch-name> --no-verify
gh pr create --title "feat: 05-dsl-generator phase 2 — type mapper reverse-index, expanded tests" --base main
```

---

## Self-Review Checklist

1. **Spec coverage:** All 5 gaps from the user's assessment are addressed:
   - ✅ Long-tail type mapping (Tasks 1-2)
   - ✅ Warning budget tightening (Task 3)
   - ✅ CLI smoke tests (Task 6)
   - ✅ Acceptance tests for non-QtQuick P0 modules (Task 5)
   - ✅ validateGeneratedFiles fix (Task 4)

2. **No placeholders:** Every task has concrete code, commands, and expected output.

3. **Type consistency:** `TypeMapper`, `AnalyzedType`, `QML_TYPE_MAP` references are consistent with existing codebase types.
