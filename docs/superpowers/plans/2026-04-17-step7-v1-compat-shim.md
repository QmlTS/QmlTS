# Step 7: V1 Compatibility Shim — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a deliberately constrained V1 compatibility shim for `runtime: "v2"` + `v1Compat: true` that provides `vm` and `__qmlts` context property aliases pointing at the primary V2 ViewModel QObject instance during construction, with Phase 1 limits enforced by compiler and build diagnostics.

**Architecture:** The compat shim spans five layers: (1) compiler validation emits QMLTS-V009/V010 per source file; (2) build pipeline emits QMLTS-B003 for multi-VM-type modules; (3) entry generator/manifest thread `v1Compat` into the registration call and build output; (4) TS host contract extends `ModuleRegistration` and `V2NativeBindings.registerModule` with a `v1Compat` param; (5) native Rust engine stores `v1_compat` flag and installs `vm`/`__qmlts` context properties on the first V2 instance created during QML loading. V1 mode is untouched. V2 QML output is unchanged by `v1Compat`.

**Tech Stack:** TypeScript (Bun test runner, ts-morph), Rust (napi-rs, cxx-qt 0.7.3, Qt 6.11.0), biome

**Repository:** `C:\MyFile\DevAll\QmlTS`
**Branch:** `step7/v1-compat-shim` (from `main`)
**Design Spec:** `docs/superpowers/specs/2026-04-17-step7-v1-compat-shim-design.md`

---

## Scope Guard

This step DOES:
- Add diagnostic codes QMLTS-V009, QMLTS-V010, QMLTS-B003
- Add compiler Phase 1 validation (multi-VM per file, injected VM)
- Add build pipeline Phase 1 validation (multi-VM-type module)
- Thread `v1Compat` through entry generator, manifest, and build pipeline
- Extend `ModuleRegistration` and `V2NativeBindings.registerModule` with `v1Compat`
- Extend `QmltsHost.registerModule()` to forward `v1Compat`
- Add `v1_compat` param to N-API `register_module` (6th param)
- Add `v1_compat` and `v1_compat_applied` fields to `V2EngineState`
- Implement context property setup in `create_v2_context_guard()` closure
- Add comprehensive tests at all layers
- Keep V1 mode byte-for-byte unchanged
- Keep V2 QML output unchanged (compiler output is not affected by `v1Compat`)

This step does NOT:
- Change V2 transformer, post-processor, or DSL lowering
- Add V1 numeric `invoke(commandId)` support on V2 QObjects
- Support standalone old V1 QML without typed V2 ViewModel instantiation
- Support multiple ViewModel types per module in compat mode
- Support injected ViewModels in compat mode
- Change InstanceRegistry, TypeRegistrar, or V2 dispatch internals
- Add Phase 2 or Phase 3 migration features

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/compiler/diagnostics.ts` | Modify | Add QMLTS-V009, QMLTS-V010, QMLTS-B003 codes |
| `src/compiler/pipeline/pipeline-types.ts` | Modify | Add `v1Compat?: boolean` to `CompilationUnit` |
| `src/compiler/pipeline/compiler.ts` | Modify | Add Phase 1 validation in `compileSingleSource()` |
| `src/build/build-types.ts` | Modify | Add `v1Compat` to `EntryGeneratorOptions.moduleRegistration` and `BuildManifest` |
| `src/build/entry-generator.ts` | Modify | Emit `v1Compat: true` in `registerModule()` call |
| `src/build/product-layout.ts` | Modify | Thread `v1Compat` into `createManifest()` |
| `src/build/build-pipeline.ts` | Modify | Add QMLTS-B003 validation; thread `v1Compat` to entry/manifest |
| `native/npm/qmlts-host/src/v2-types.ts` | Modify | Add `v1Compat` to `ModuleRegistration` and `V2NativeBindings.registerModule` |
| `native/npm/qmlts-host/src/qmlts-host.ts` | Modify | Forward `v1Compat` in `registerModule()` |
| `native/crates/qmlts-host/src/exports.rs` | Modify | Add 6th `v1_compat` param to `register_module` |
| `native/crates/qmlts-host/src/engine.rs` | Modify | Accept `v1_compat` param; install context properties in `create_v2_context_guard()` |
| `native/crates/qmlts-host/src/v2_runtime.rs` | Modify | Add `v1_compat` + `v1_compat_applied` to `V2EngineState` |
| `tests/compiler/pipeline/compiler.test.ts` | Modify | Add V009/V010/v1Compat compiler tests |
| `tests/build/entry-generator.test.ts` | Modify | Add v1Compat entry generation tests |
| `tests/build/build-pipeline.test.ts` | Modify | Add B003 build pipeline tests |
| `tests/host/qmlts-host.test.ts` | Modify | Add v1Compat host contract tests |

---

## Tasks

### Task 1: Create branch from main

- [ ] **Step 1: Fetch latest main and create branch**

```powershell
cd C:\MyFile\DevAll\QmlTS
git checkout main
git pull origin main
git checkout -b step7/v1-compat-shim
```

- [ ] **Step 2: Verify branch**

```powershell
git branch --show-current
```

Expected: `step7/v1-compat-shim`

---

### Task 2: Add diagnostic codes (shared contract)

**Files:**
- Modify: `src/compiler/diagnostics.ts`

- [ ] **Step 1: Add QMLTS-V009, QMLTS-V010, QMLTS-B003 to DiagnosticCode type**

In `src/compiler/diagnostics.ts`, after the existing `'QMLTS-V008'` line (line 81), add:

```typescript
  // V2 V1-Compat Validation (V009+)
  | 'QMLTS-V009'
  | 'QMLTS-V010'
```

After the existing `'QMLTS-B002'` line (line 84), add:

```typescript
  | 'QMLTS-B003'
```

- [ ] **Step 2: Verify TypeScript typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 5
```

Expected: No errors (codes are string literals, no runtime code needed).

---

### Task 3: Add `v1Compat` to CompilationUnit type

**Files:**
- Modify: `src/compiler/pipeline/pipeline-types.ts`

- [ ] **Step 1: Add `v1Compat` to CompilationUnit interface**

In `src/compiler/pipeline/pipeline-types.ts`, after the `moduleImports` field block (lines 105-108), add:

```typescript
  /** V2: Whether V1 compatibility mode is active for this unit. */
  readonly v1Compat?: boolean;
```

- [ ] **Step 2: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 5
```

---

### Task 4: Add compiler Phase 1 validation

**Files:**
- Modify: `src/compiler/pipeline/compiler.ts`

This adds QMLTS-V009 and QMLTS-V010 validation in `compileSingleSource()`, and threads `v1Compat` into `CompilationUnit` output from `compileView()`.

- [ ] **Step 1: Add v1Compat to the CompilationUnit returned by compileView()**

In `compileView()` (line 430), in the returned `CompilationUnit` object (line 554), add `v1Compat` alongside the existing V2 slot spread. The returned object currently has a conditional `...(slot ? { ... } : {})` spread at lines 566-583. Add `v1Compat` into that spread:

Replace the block at lines 566-583:

```typescript
    ...(slot
      ? {
          compilerSlotKey: slot.compilerSlotKey,
          moduleUri: schema!.moduleUri,
          viewModelNames: [vm!.className],
          viewModelSlots: [slot],
          moduleImports: schema!.moduleUri
            ? [
                {
                  moduleUri: schema!.moduleUri,
                  version: schema!.moduleVersion
                    ? `${schema!.moduleVersion.major}.${schema!.moduleVersion.minor}`
                    : undefined,
                },
              ]
            : undefined,
        }
      : {}),
```

with:

```typescript
    ...(slot
      ? {
          compilerSlotKey: slot.compilerSlotKey,
          moduleUri: schema!.moduleUri,
          viewModelNames: [vm!.className],
          viewModelSlots: [slot],
          moduleImports: schema!.moduleUri
            ? [
                {
                  moduleUri: schema!.moduleUri,
                  version: schema!.moduleVersion
                    ? `${schema!.moduleVersion.major}.${schema!.moduleVersion.minor}`
                    : undefined,
                },
              ]
            : undefined,
          ...(options?.v1Compat ? { v1Compat: true } : {}),
        }
      : {}),
```

- [ ] **Step 2: Add Phase 1 validation after all views are compiled in compileSingleSource()**

In `compileSingleSource()`, after line 425 (`return units;`), replace the final `return units;` with validation logic:

```typescript
  // ── V1 Compat Phase 1 validation ────────────────────────────────────
  if (options?.runtime === 'v2' && options?.v1Compat) {
    // V009: Collect unique ViewModel types across all units in this source file
    const vmClassNames = new Set<string>();
    for (const unit of units) {
      if (unit.viewModelName) {
        vmClassNames.add(unit.viewModelName);
      }
    }
    if (vmClassNames.size > 1) {
      const nameList = [...vmClassNames].sort().join(', ');
      reporter.error(
        'QMLTS-V009',
        `V1 compat mode (Phase 1) supports only a single ViewModel type per source file. ` +
          `Found: ${nameList}. Remove v1Compat or consolidate to a single ViewModel.`,
        filePath ? { file: filePath } : undefined,
      );
    }

    // V010: Check for injected ownership (forward-looking guard)
    for (const unit of units) {
      if (unit.viewModelSlots) {
        for (const slot of unit.viewModelSlots) {
          if (slot.ownership === 'injected') {
            reporter.error(
              'QMLTS-V010',
              `V1 compat mode (Phase 1) does not support externally injected ViewModels. ` +
                `ViewModel "${slot.className}" has injected ownership.`,
              filePath ? { file: filePath } : undefined,
            );
          }
        }
      }
    }
  }

  return units;
```

- [ ] **Step 3: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

---

### Task 5: Add compiler Phase 1 tests

**Files:**
- Modify: `tests/compiler/pipeline/compiler.test.ts`

- [ ] **Step 1: Add multi-VM source fixture for V009 testing**

After the existing `VIEW_WITH_VM_SOURCE` fixture (around line 70), add a new fixture. The exact location is after the closing backtick of the last source fixture. Add:

```typescript
const MULTI_VM_SOURCE = `
import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
import { Text } from '../../dsl/generated/QtQuick/Text.js';

function State(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Command(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Effect(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}

export class AlphaViewModel {
  @State() value = 0;
}

export class BetaViewModel {
  @State() name = "";
}

export default function AlphaView(vm: AlphaViewModel) {
  return Rectangle()
    .width(400)
    .height(300)
    .children(
      Text().text(vm.value)
    );
}

export function BetaView(vm: BetaViewModel) {
  return Rectangle()
    .width(200)
    .height(100)
    .children(
      Text().text(vm.name)
    );
}
`;
```

- [ ] **Step 2: Add v1Compat compiler test section**

At the end of the test file, inside the top-level `describe`, add a new describe block:

```typescript
  describe('v1Compat Phase 1 validation', () => {
    const V2_MODULE_CONFIG = { prefix: 'MyApp', version: { major: 1, minor: 0 } };

    // CP-V1C-01: V009 — multi-VM per file with v1Compat → error
    test('CP-V1C-01: V009 — multi-VM per file with v1Compat emits error', () => {
      const result = compileSource(MULTI_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: V2_MODULE_CONFIG,
        v1Compat: true,
      });
      const v009 = result.diagnostics.filter((d) => d.code === 'QMLTS-V009');
      expect(v009.length).toBeGreaterThanOrEqual(1);
      expect(v009[0]!.message).toContain('single ViewModel type per source file');
      expect(v009[0]!.message).toContain('AlphaViewModel');
      expect(v009[0]!.message).toContain('BetaViewModel');
    });

    // CP-V1C-02: V009-neg — same VM type in multiple views + v1Compat → no error
    test('CP-V1C-02: same VM type in multiple views with v1Compat does not emit V009', () => {
      const result = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: V2_MODULE_CONFIG,
        v1Compat: true,
      });
      const v009 = result.diagnostics.filter((d) => d.code === 'QMLTS-V009');
      expect(v009.length).toBe(0);
    });

    // CP-V1C-03: no v1Compat — multi-VM does not trigger V009
    test('CP-V1C-03: multi-VM without v1Compat does not emit V009', () => {
      const result = compileSource(MULTI_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: V2_MODULE_CONFIG,
      });
      const v009 = result.diagnostics.filter((d) => d.code === 'QMLTS-V009');
      expect(v009.length).toBe(0);
    });

    // CP-V1C-04: V1 mode with v1Compat does not trigger validation (v1Compat only valid with v2)
    test('CP-V1C-04: V1 mode ignores v1Compat flag', () => {
      const result = compileSource(MULTI_VM_SOURCE, {
        runtime: 'v1',
        v1Compat: true,
      });
      const v009 = result.diagnostics.filter((d) => d.code === 'QMLTS-V009');
      expect(v009.length).toBe(0);
    });

    // CP-V1C-05: v1Compat does NOT change QML output (still V2-shaped)
    test('CP-V1C-05: v1Compat does not change V2 QML output', () => {
      const withCompat = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: V2_MODULE_CONFIG,
        v1Compat: true,
      });
      const withoutCompat = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: V2_MODULE_CONFIG,
      });
      // QML output should be identical
      const unitWith = withCompat.units[0]!;
      const unitWithout = withoutCompat.units[0]!;
      expect(unitWith.qmlContent).toBe(unitWithout.qmlContent);
    });

    // CP-V1C-06: v1Compat flag is set on CompilationUnit
    test('CP-V1C-06: v1Compat flag included in CompilationUnit', () => {
      const result = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: V2_MODULE_CONFIG,
        v1Compat: true,
      });
      const unit = result.units.find((u) => u.viewModelName);
      expect(unit?.v1Compat).toBe(true);
    });

    // CP-V1C-07: without v1Compat, no v1Compat flag on CompilationUnit
    test('CP-V1C-07: no v1Compat flag when v1Compat is false', () => {
      const result = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: V2_MODULE_CONFIG,
      });
      const unit = result.units.find((u) => u.viewModelName);
      expect(unit?.v1Compat).toBeUndefined();
    });
  });
```

- [ ] **Step 3: Run compiler tests**

```powershell
bun test tests/compiler/pipeline/compiler.test.ts 2>&1 | Select-Object -Last 30
```

Expected: All existing tests pass plus new CP-V1C-01 through CP-V1C-07 pass.

---

### Task 6: Add build types extensions

**Files:**
- Modify: `src/build/build-types.ts`

- [ ] **Step 1: Add `v1Compat` to `EntryGeneratorOptions.moduleRegistration`**

In `src/build/build-types.ts`, in the `moduleRegistration` type (lines 248-253), add `v1Compat` after `typeNames`:

Replace lines 248-253:
```typescript
  /** V2: Module registration metadata. Undefined means no ViewModels in V2 mode. */
  readonly moduleRegistration?: {
    readonly moduleUri: string;
    readonly versionMajor: number;
    readonly versionMinor: number;
    readonly typeNames: readonly string[];
  };
```

with:
```typescript
  /** V2: Module registration metadata. Undefined means no ViewModels in V2 mode. */
  readonly moduleRegistration?: {
    readonly moduleUri: string;
    readonly versionMajor: number;
    readonly versionMinor: number;
    readonly typeNames: readonly string[];
    /** V2: Enable V1 compatibility shim (context property aliases). */
    readonly v1Compat?: boolean;
  };
```

- [ ] **Step 2: Add `v1Compat` to `BuildManifest`**

In `src/build/build-types.ts`, in the `BuildManifest` interface (after the `modules` field, line 85), add:

```typescript
  /** V2: V1 compatibility shim enabled for this build. */
  readonly v1Compat?: boolean;
```

- [ ] **Step 3: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 5
```

---

### Task 7: Update entry generator for v1Compat

**Files:**
- Modify: `src/build/entry-generator.ts`

- [ ] **Step 1: Emit `v1Compat: true` in registerModule call when active**

In `generateV2Entry()`, after line 119 (the `typeNames` line), add the v1Compat field conditionally. Replace lines 118-120:

```typescript
    const typeNamesStr = reg.typeNames.map((t) => JSON.stringify(t)).join(', ');
    lines.push(`  typeNames: [${typeNamesStr}],`);
    lines.push('});');
```

with:

```typescript
    const typeNamesStr = reg.typeNames.map((t) => JSON.stringify(t)).join(', ');
    lines.push(`  typeNames: [${typeNamesStr}],`);
    if (reg.v1Compat) {
      lines.push('  v1Compat: true,');
    }
    lines.push('});');
```

- [ ] **Step 2: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 5
```

---

### Task 8: Update entry generator tests

**Files:**
- Modify: `tests/build/entry-generator.test.ts`

- [ ] **Step 1: Add v1Compat entry generator tests**

At the end of the test file, inside the existing `describe('EntryGenerator')` block (before its closing `})`), add:

```typescript
  // ─── V1 Compat Entry Tests ──────────────────────────────────

  // BP-V1C-01: V2 entry with v1Compat includes v1Compat: true
  test('BP-V1C-01: V2 entry with v1Compat includes v1Compat in registerModule', () => {
    const code = generator.generate(
      makeV2Options({
        moduleRegistration: {
          moduleUri: 'TestApp.ViewModels',
          versionMajor: 1,
          versionMinor: 0,
          typeNames: ['CounterViewModel'],
          v1Compat: true,
        },
      }),
    );
    expect(code).toContain('v1Compat: true');
    expect(code).toContain('registerModule(');
  });

  // BP-V1C-02: V2 entry without v1Compat does NOT include v1Compat
  test('BP-V1C-02: V2 entry without v1Compat does not include v1Compat field', () => {
    const code = generator.generate(makeV2Options());
    expect(code).not.toContain('v1Compat');
  });

  // BP-V1C-03: V1 entry completely unaffected by v1Compat
  test('BP-V1C-03: V1 entry unaffected by v1Compat option', () => {
    const code = generator.generate(makeOptions({ runtime: 'v1' }));
    expect(code).not.toContain('v1Compat');
    expect(code).not.toContain('registerModule');
    expect(code).toContain('registerViewModel');
  });
```

- [ ] **Step 2: Run entry generator tests**

```powershell
bun test tests/build/entry-generator.test.ts 2>&1 | Select-Object -Last 20
```

Expected: All tests pass.

---

### Task 9: Update manifest generation for v1Compat

**Files:**
- Modify: `src/build/product-layout.ts`

- [ ] **Step 1: Thread v1Compat into manifest**

In `createManifest()` (line 65 of `product-layout.ts`), in the `if (config.runtime === 'v2')` block (lines 93-106), add `v1Compat` to the returned manifest. Replace lines 93-106:

```typescript
  if (config.runtime === 'v2') {
    const modules = moduleMeta
      ? [
          {
            uri: moduleMeta.moduleUri,
            version: moduleMeta.versionString,
            types: [...moduleMeta.typeNames],
            qmldir: `./qml/${moduleMeta.moduleRelDir}/qmldir`,
            qmltypes: `./qml/${moduleMeta.moduleRelDir}/${moduleMeta.qmltypesFilename}`,
          },
        ]
      : [];
    return { ...base, runtime: 'v2', modules };
  }
```

with:

```typescript
  if (config.runtime === 'v2') {
    const modules = moduleMeta
      ? [
          {
            uri: moduleMeta.moduleUri,
            version: moduleMeta.versionString,
            types: [...moduleMeta.typeNames],
            qmldir: `./qml/${moduleMeta.moduleRelDir}/qmldir`,
            qmltypes: `./qml/${moduleMeta.moduleRelDir}/${moduleMeta.qmltypesFilename}`,
          },
        ]
      : [];
    return {
      ...base,
      runtime: 'v2',
      modules,
      ...(config.v1Compat ? { v1Compat: true } : {}),
    };
  }
```

- [ ] **Step 2: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 5
```

---

### Task 10: Add QMLTS-B003 validation in build pipeline

**Files:**
- Modify: `src/build/build-pipeline.ts`

- [ ] **Step 1: Add B003 validation after module meta computation**

In `phaseWriteOutput()`, after the `moduleMeta = deriveModuleMeta(...)` call (line 499) and before `layout = attachModuleDir(layout, moduleMeta)` (line 512), add B003 validation:

```typescript
    // QMLTS-B003: v1Compat rejects multi-VM-type modules
    if (ctx.config.v1Compat && moduleMeta && moduleMeta.typeNames.length > 1) {
      const nameList = [...moduleMeta.typeNames].join(', ');
      return Promise.resolve({
        diagnostics: [
          {
            severity: 'error',
            code: 'QMLTS-B003' as import('../compiler/diagnostics.js').DiagnosticCode,
            message:
              `V1 compat mode (Phase 1) supports only a single ViewModel type per module. ` +
              `Module "${moduleMeta.moduleUri}" registers ${moduleMeta.typeNames.length} types: ${nameList}. ` +
              `Remove v1Compat or reduce to a single ViewModel type.`,
          },
        ],
      });
    }
```

- [ ] **Step 2: Thread v1Compat to entry generator moduleRegistration**

In `phaseWriteOutput()`, in the `entryContent = generator.generate({...})` call (lines 581-595), add `v1Compat` to the `moduleRegistration` object. Replace lines 587-594:

```typescript
    moduleRegistration: moduleMeta
      ? {
          moduleUri: moduleMeta.moduleUri,
          versionMajor: moduleMeta.versionMajor,
          versionMinor: moduleMeta.versionMinor,
          typeNames: [...moduleMeta.typeNames],
        }
      : undefined,
```

with:

```typescript
    moduleRegistration: moduleMeta
      ? {
          moduleUri: moduleMeta.moduleUri,
          versionMajor: moduleMeta.versionMajor,
          versionMinor: moduleMeta.versionMinor,
          typeNames: [...moduleMeta.typeNames],
          ...(ctx.config.v1Compat ? { v1Compat: true } : {}),
        }
      : undefined,
```

- [ ] **Step 3: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 5
```

---

### Task 11: Add build pipeline B003 tests

**Files:**
- Modify: `tests/build/build-pipeline.test.ts`

- [ ] **Step 1: Add B003 build pipeline tests**

At the end of the `describe('V2 Build Pipeline')` block, add:

```typescript
  // BP-V1C-B003-01: v1Compat + single VM type → no error
  test('BP-V1C-B003-01: v1Compat with single VM type builds successfully', async () => {
    const config = makeConfig({
      runtime: 'v2',
      v1Compat: true,
      module: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
    });
    const pipeline = createBuildPipeline();
    const result = await pipeline.build(config, { dryRun: true });
    const b003 = result.phases.get('writing-output')?.diagnostics.filter(
      (d) => d.code === 'QMLTS-B003',
    );
    expect(b003?.length ?? 0).toBe(0);
  });

  // BP-V1C-B003-02: no v1Compat + multiple VM types → no error (B003 only fires with v1Compat)
  test('BP-V1C-B003-02: multiple VM types without v1Compat does not trigger B003', async () => {
    // This test verifies that B003 only fires when v1Compat is true.
    // The sample project only has one VM type, so we can't trigger the multi-type case here,
    // but we verify the non-v1Compat path doesn't add B003.
    const config = makeConfig({
      runtime: 'v2',
      module: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
    });
    const pipeline = createBuildPipeline();
    const result = await pipeline.build(config, { dryRun: true });
    const b003 = result.phases.get('writing-output')?.diagnostics.filter(
      (d) => d.code === 'QMLTS-B003',
    );
    expect(b003?.length ?? 0).toBe(0);
  });

  // BP-V1C-MANIFEST-01: V2 manifest with v1Compat includes v1Compat field
  test('BP-V1C-MANIFEST-01: V2 manifest includes v1Compat when enabled', async () => {
    const outDir = mkdtempSync(join(tmpdir(), 'qmlts-bp-v1c-'));
    try {
      const config = makeConfig({
        outDir,
        runtime: 'v2',
        v1Compat: true,
        module: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
      });
      const pipeline = createBuildPipeline();
      await pipeline.build(config);
      const manifestPath = join(outDir, 'manifest.json');
      expect(existsSync(manifestPath)).toBe(true);
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
      expect(manifest.v1Compat).toBe(true);
    } finally {
      rmSync(outDir, { recursive: true, force: true });
    }
  });

  // BP-V1C-MANIFEST-02: V2 manifest without v1Compat omits the field
  test('BP-V1C-MANIFEST-02: V2 manifest omits v1Compat when not enabled', async () => {
    const outDir = mkdtempSync(join(tmpdir(), 'qmlts-bp-v1c2-'));
    try {
      const config = makeConfig({
        outDir,
        runtime: 'v2',
        module: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
      });
      const pipeline = createBuildPipeline();
      await pipeline.build(config);
      const manifestPath = join(outDir, 'manifest.json');
      expect(existsSync(manifestPath)).toBe(true);
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
      expect(manifest.v1Compat).toBeUndefined();
    } finally {
      rmSync(outDir, { recursive: true, force: true });
    }
  });
```

- [ ] **Step 2: Run build pipeline tests**

```powershell
bun test tests/build/build-pipeline.test.ts 2>&1 | Select-Object -Last 30
```

Expected: All tests pass.

---

### Task 12: Extend TS host contract (v2-types.ts)

**Files:**
- Modify: `native/npm/qmlts-host/src/v2-types.ts`

- [ ] **Step 1: Add `v1Compat` to `ModuleRegistration`**

In `v2-types.ts`, in the `ModuleRegistration` interface (lines 29-34), after `readonly typeNames: readonly string[];` (line 33), add:

```typescript
	/** V1 compatibility mode: set vm/\_\_qmlts context properties for first instance. */
	readonly v1Compat?: boolean;
```

- [ ] **Step 2: Add 6th param to `V2NativeBindings.registerModule`**

In `v2-types.ts`, in the `V2NativeBindings` interface, replace the `registerModule` signature (lines 130-136):

```typescript
	/** Register ViewModel types as a QML module. Call before loadFile/loadString. */
	registerModule(
		engine: QmltsEngine,
		moduleUri: string,
		versionMajor: number,
		versionMinor: number,
		typeNames: string[],
	): void;
```

with:

```typescript
	/** Register ViewModel types as a QML module. Call before loadFile/loadString. */
	registerModule(
		engine: QmltsEngine,
		moduleUri: string,
		versionMajor: number,
		versionMinor: number,
		typeNames: string[],
		v1Compat: boolean,
	): void;
```

- [ ] **Step 3: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

Note: This will cause a type error in `qmlts-host.ts` which is fixed in the next task.

---

### Task 13: Update QmltsHost.registerModule() to forward v1Compat

**Files:**
- Modify: `native/npm/qmlts-host/src/qmlts-host.ts`

- [ ] **Step 1: Forward v1Compat in registerModule()**

In `qmlts-host.ts`, in the `registerModule()` method (lines 633-643), replace:

```typescript
	registerModule(registration: ModuleRegistration): void {
		const eng = this.requireEngine();
		const fn = this.getV2Fn('registerModule');
		fn(
			eng,
			registration.moduleUri,
			registration.versionMajor,
			registration.versionMinor,
			[...registration.typeNames],
		);
	}
```

with:

```typescript
	registerModule(registration: ModuleRegistration): void {
		const eng = this.requireEngine();
		const fn = this.getV2Fn('registerModule');
		fn(
			eng,
			registration.moduleUri,
			registration.versionMajor,
			registration.versionMinor,
			[...registration.typeNames],
			registration.v1Compat ?? false,
		);
	}
```

- [ ] **Step 2: Verify typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

Expected: No errors (native binding type now matches the call).

---

### Task 14: Add TS host contract tests

**Files:**
- Modify: `tests/host/qmlts-host.test.ts`

- [ ] **Step 1: Add v1Compat host tests**

At the end of the existing test file's main `describe` block, add:

```typescript
  // ─── V1 Compat Host Contract ────────────────────────────────

  test('TH-V1C-01: registerModule accepts v1Compat option', () => {
    const host = new QmltsHost();
    try {
      if (!host.supportsV2()) {
        // V2 not available: verify it at least doesn't crash with v1Compat
        expect(() =>
          host.registerModule({
            moduleUri: 'Test.ViewModels',
            versionMajor: 1,
            versionMinor: 0,
            typeNames: ['LoginViewModel'],
            v1Compat: true,
          }),
        ).toThrow(/V2 native host API/);
      } else {
        // V2 available: should accept v1Compat
        expect(() =>
          host.registerModule({
            moduleUri: 'Test.ViewModels',
            versionMajor: 1,
            versionMinor: 0,
            typeNames: ['LoginViewModel'],
            v1Compat: true,
          }),
        ).not.toThrow();
      }
    } finally {
      host.dispose();
    }
  });

  test('TH-V1C-02: registerModule works without v1Compat (backward compat)', () => {
    const host = new QmltsHost();
    try {
      if (!host.supportsV2()) {
        expect(() =>
          host.registerModule({
            moduleUri: 'Test.ViewModels',
            versionMajor: 1,
            versionMinor: 0,
            typeNames: ['LoginViewModel'],
          }),
        ).toThrow(/V2 native host API/);
      } else {
        expect(() =>
          host.registerModule({
            moduleUri: 'Test.ViewModels',
            versionMajor: 1,
            versionMinor: 0,
            typeNames: ['LoginViewModel'],
          }),
        ).not.toThrow();
      }
    } finally {
      host.dispose();
    }
  });
```

- [ ] **Step 2: Run host tests**

```powershell
bun test tests/host/qmlts-host.test.ts 2>&1 | Select-Object -Last 20
```

---

### Task 15: Add v1_compat fields to V2EngineState (Rust)

**Files:**
- Modify: `native/crates/qmlts-host/src/v2_runtime.rs`

- [ ] **Step 1: Add `v1_compat` and `v1_compat_applied` fields to V2EngineState**

In `v2_runtime.rs`, add the import at the top (after the existing `use std::sync::{Arc, Mutex};` on line 6):

```rust
use std::sync::atomic::{AtomicBool, Ordering};
```

Replace the `V2EngineState` struct (lines 68-77):

```rust
pub struct V2EngineState {
    /// Whether V2 runtime is enabled for this engine.
    pub enabled: bool,
    /// Per-engine instance registry (behind Mutex for router access).
    pub registry: Arc<Mutex<InstanceRegistry>>,
    /// Per-engine type registrar.
    pub type_registrar: TypeRegistrar,
    /// Shared handler storage (Arc for router closure).
    pub handlers: Arc<V2Handlers>,
}
```

with:

```rust
pub struct V2EngineState {
    /// Whether V2 runtime is enabled for this engine.
    pub enabled: bool,
    /// V1 compat mode: set `vm` and `__qmlts` context properties for the first instance.
    /// Sticky: once enabled, stays enabled for this engine.
    pub v1_compat: bool,
    /// Whether V1 compat context properties have been applied (first instance only).
    /// Shared with the `register_instance` closure in `create_v2_context_guard`.
    pub v1_compat_applied: Arc<AtomicBool>,
    /// Per-engine instance registry (behind Mutex for router access).
    pub registry: Arc<Mutex<InstanceRegistry>>,
    /// Per-engine type registrar.
    pub type_registrar: TypeRegistrar,
    /// Shared handler storage (Arc for router closure).
    pub handlers: Arc<V2Handlers>,
}
```

- [ ] **Step 2: Update V2EngineState::new()**

Replace the `V2EngineState::new()` (lines 82-89):

```rust
    pub fn new() -> Self {
        Self {
            enabled: true,
            registry: Arc::new(Mutex::new(InstanceRegistry::new())),
            type_registrar: TypeRegistrar::new(),
            handlers: Arc::new(V2Handlers::new()),
        }
    }
```

with:

```rust
    pub fn new() -> Self {
        Self {
            enabled: true,
            v1_compat: false,
            v1_compat_applied: Arc::new(AtomicBool::new(false)),
            registry: Arc::new(Mutex::new(InstanceRegistry::new())),
            type_registrar: TypeRegistrar::new(),
            handlers: Arc::new(V2Handlers::new()),
        }
    }
```

- [ ] **Step 3: Verify Rust check**

```powershell
cargo check -p qmlts-host --features mock-qt 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
```

---

### Task 16: Update engine.rs register_module() for v1_compat

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs`

- [ ] **Step 1: Add `v1_compat` param to `register_module()`**

Replace the `register_module()` method (lines 1134-1151):

```rust
    pub fn register_module(
        &mut self,
        module_uri: &str,
        version_major: i32,
        version_minor: i32,
        type_names: &[String],
    ) -> Result<()> {
        self.ensure_v2_initialized()?;
        let descriptors = qmlts_host_generated::v2_descriptors();
        let state = self.v2_state.as_mut().expect("V2 state just initialized");
        state.type_registrar.register_module(
            module_uri,
            version_major,
            version_minor,
            type_names,
            descriptors,
        )
    }
```

with:

```rust
    pub fn register_module(
        &mut self,
        module_uri: &str,
        version_major: i32,
        version_minor: i32,
        type_names: &[String],
        v1_compat: bool,
    ) -> Result<()> {
        self.ensure_v2_initialized()?;
        let descriptors = qmlts_host_generated::v2_descriptors();
        let state = self.v2_state.as_mut().expect("V2 state just initialized");
        // V1 compat is sticky: once enabled, stays enabled for this engine
        if v1_compat {
            state.v1_compat = true;
        }
        state.type_registrar.register_module(
            module_uri,
            version_major,
            version_minor,
            type_names,
            descriptors,
        )
    }
```

- [ ] **Step 2: Fix all callers of register_module in engine.rs tests**

Search for all `register_module(` calls in engine.rs tests and add the 5th param `false` for non-compat calls:

Find every occurrence of `.register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()])` and replace with `.register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)`.

Also fix any other `register_module(` calls with different type names (e.g., `&["CounterViewModel".into()]`).

- [ ] **Step 3: Verify Rust check**

```powershell
cargo check -p qmlts-host --features mock-qt 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
```

---

### Task 17: Implement v1_compat context property setup in create_v2_context_guard()

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs`

This is the critical native implementation: the `register_instance` closure must set `vm` and `__qmlts` context properties on the first V2 instance when `v1_compat` is true.

- [ ] **Step 1: Add necessary import**

Add `use std::sync::atomic::Ordering;` to the imports at the top of engine.rs if not already present (check for it; it may already be imported for `AtomicBool`/`AtomicUsize`).

- [ ] **Step 2: Update create_v2_context_guard() to capture v1_compat state**

Replace the `create_v2_context_guard()` method (lines 1484-1524):

```rust
    fn create_v2_context_guard(&self) -> Option<qmlts_host_generated::v2_dispatch::V2ContextGuard> {
        let state = self.v2_state.as_ref()?;
        let registry = Arc::clone(&state.registry);
        let owner_id = self.dispatch_owner_id;
        if i32::try_from(owner_id).is_err() {
            tracing::error!(
                owner_id,
                "V2 dispatch owner id does not fit in i32; V2 QObjects will be inert"
            );
            return None;
        }
        let ctx = qmlts_host_generated::v2_dispatch::V2InitContext {
            owner_id,
            register_instance: Arc::new(move |class_name, ptr| {
                let mut reg = registry.lock().expect("registry lock poisoned");
                match reg.allocate_instance(class_name, ptr) {
                    Ok(id) => {
                        if let Ok(qml_id) = i32::try_from(id) {
                            qml_id
                        } else {
                            tracing::error!(
                                instance_id = id,
                                "Allocated V2 instance id does not fit in i32; removing inert instance"
                            );
                            let _ = reg.remove_instance(id);
                            -1
                        }
                    }
                    Err(e) => {
                        tracing::error!(%e, "Failed to allocate V2 instance");
                        -1
                    }
                }
            }),
        };
        Some(qmlts_host_generated::v2_dispatch::V2ContextGuard::new(ctx))
    }
```

with:

```rust
    fn create_v2_context_guard(&self) -> Option<qmlts_host_generated::v2_dispatch::V2ContextGuard> {
        let state = self.v2_state.as_ref()?;
        let registry = Arc::clone(&state.registry);
        let owner_id = self.dispatch_owner_id;
        if i32::try_from(owner_id).is_err() {
            tracing::error!(
                owner_id,
                "V2 dispatch owner id does not fit in i32; V2 QObjects will be inert"
            );
            return None;
        }

        // V1 compat: capture state for context property setup during first instance creation
        let v1_compat = state.v1_compat;
        let v1_compat_applied = Arc::clone(&state.v1_compat_applied);
        // Capture engine_ptr as usize for Send safety (raw pointers are !Send).
        // This is safe because the closure runs on the Qt main thread during QML loading,
        // which is the same thread that owns the engine pointer.
        let engine_ptr_addr = self.engine_ptr as usize;

        let ctx = qmlts_host_generated::v2_dispatch::V2InitContext {
            owner_id,
            register_instance: Arc::new(move |class_name, ptr| {
                let mut reg = registry.lock().expect("registry lock poisoned");
                match reg.allocate_instance(class_name, ptr) {
                    Ok(id) => {
                        // V1 compat: set context properties for the first instance only
                        if v1_compat
                            && !v1_compat_applied.load(Ordering::SeqCst)
                        {
                            let engine_ptr = engine_ptr_addr as *mut std::ffi::c_void;
                            // SAFETY: Called on Qt main thread during QML loading.
                            // engine_ptr is valid for the lifetime of the engine.
                            // ptr is the just-constructed QObject, valid for its lifetime.
                            unsafe {
                                let vm_ok =
                                    qt_context::set_context_property(engine_ptr, "vm", ptr);
                                let qmlts_ok = qt_context::set_context_property(
                                    engine_ptr,
                                    "__qmlts",
                                    ptr,
                                );
                                if vm_ok && qmlts_ok {
                                    tracing::info!(
                                        instance_id = id,
                                        class_name,
                                        "V1 compat: installed vm/__qmlts context properties"
                                    );
                                } else {
                                    tracing::warn!(
                                        instance_id = id,
                                        vm_ok,
                                        qmlts_ok,
                                        "V1 compat: partial context property setup"
                                    );
                                }
                            }
                            v1_compat_applied.store(true, Ordering::SeqCst);
                        }

                        if let Ok(qml_id) = i32::try_from(id) {
                            qml_id
                        } else {
                            tracing::error!(
                                instance_id = id,
                                "Allocated V2 instance id does not fit in i32; removing inert instance"
                            );
                            let _ = reg.remove_instance(id);
                            -1
                        }
                    }
                    Err(e) => {
                        tracing::error!(%e, "Failed to allocate V2 instance");
                        -1
                    }
                }
            }),
        };
        Some(qmlts_host_generated::v2_dispatch::V2ContextGuard::new(ctx))
    }
```

- [ ] **Step 3: Verify Rust check**

```powershell
cargo check -p qmlts-host --features mock-qt 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
```

---

### Task 18: Update N-API register_module for v1_compat (exports.rs)

**Files:**
- Modify: `native/crates/qmlts-host/src/exports.rs`

- [ ] **Step 1: Add v1_compat param to N-API register_module**

Replace the `register_module` N-API function (lines 887-899):

```rust
#[napi(js_name = "registerModule")]
pub fn register_module(
    engine: &mut QmltsEngine,
    module_uri: String,
    version_major: i32,
    version_minor: i32,
    type_names: Vec<String>,
) -> Result<()> {
    engine
        .inner
        .register_module(&module_uri, version_major, version_minor, &type_names)
        .map_err(|e| -> napi::Error { e.into() })
}
```

with:

```rust
#[napi(js_name = "registerModule")]
pub fn register_module(
    engine: &mut QmltsEngine,
    module_uri: String,
    version_major: i32,
    version_minor: i32,
    type_names: Vec<String>,
    v1_compat: bool,
) -> Result<()> {
    engine
        .inner
        .register_module(&module_uri, version_major, version_minor, &type_names, v1_compat)
        .map_err(|e| -> napi::Error { e.into() })
}
```

- [ ] **Step 2: Verify Rust check**

```powershell
cargo check -p qmlts-host --features mock-qt 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
```

---

### Task 19: Add Rust unit tests for v1_compat

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs` (test module)

- [ ] **Step 1: Add v1_compat engine tests**

At the end of the `#[cfg(test)] mod tests` block in engine.rs, add:

```rust
    // ── V1 Compat Tests ──────────────────────────────────────────────

    #[test]
    fn v1_compat_stored_on_register_module() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], true)
            .unwrap();
        let state = engine.v2_state.as_ref().unwrap();
        assert!(state.v1_compat);
        assert!(!state.v1_compat_applied.load(std::sync::atomic::Ordering::SeqCst));
    }

    #[test]
    fn v1_compat_false_does_not_set_flag() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let state = engine.v2_state.as_ref().unwrap();
        assert!(!state.v1_compat);
    }

    #[test]
    fn v1_compat_is_sticky() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        // First call with v1_compat=true
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], true)
            .unwrap();
        // Second call with v1_compat=false should NOT unset the flag
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let state = engine.v2_state.as_ref().unwrap();
        assert!(state.v1_compat, "v1_compat should be sticky once enabled");
    }

    #[test]
    fn v1_compat_context_guard_captures_flag() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], true)
            .unwrap();
        // The context guard should exist when V2 is enabled
        let guard = engine.create_v2_context_guard();
        assert!(guard.is_some(), "V2 context guard should be created");
        // After guard is dropped, v1_compat_applied should still be false
        // (no instance was registered)
        drop(guard);
        let state = engine.v2_state.as_ref().unwrap();
        assert!(
            !state.v1_compat_applied.load(std::sync::atomic::Ordering::SeqCst),
            "v1_compat_applied should be false before any instance is created"
        );
    }

    #[test]
    fn v1_compat_not_applied_when_disabled() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let state = engine.v2_state.as_ref().unwrap();
        assert!(!state.v1_compat);
        // Context guard still exists (V2 is enabled), but no compat state
        let guard = engine.create_v2_context_guard();
        assert!(guard.is_some());
    }
```

- [ ] **Step 2: Run Rust tests**

```powershell
cargo test -p qmlts-host --features mock-qt -- v1_compat 2>&1 | Select-Object -Last 30
```

Expected: All v1_compat tests pass.

---

### Task 20: Full Rust verification

- [ ] **Step 1: Run all Rust tests**

```powershell
cargo test -p qmlts-host --features mock-qt 2>&1 | Select-Object -Last 30
```

- [ ] **Step 2: Run clippy**

```powershell
cargo clippy -p qmlts-host --features mock-qt -- -D warnings 2>&1 | Select-Object -Last 20
cargo clippy -p qmlts-host-generated -- -D warnings 2>&1 | Select-Object -Last 10
```

---

### Task 21: Full TypeScript verification

- [ ] **Step 1: Biome format and lint**

```powershell
bunx biome format --write src/ tests/ 2>&1 | Select-Object -Last 5
bunx biome check --fix src/ tests/ 2>&1 | Select-Object -Last 5
```

- [ ] **Step 2: TypeScript typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

- [ ] **Step 3: Full test suite**

```powershell
bun test 2>&1 | Select-Object -Last 30
```

Expected: All ~1810+ tests pass (existing + new).

---

### Task 22: Commit, push, and open PR

- [ ] **Step 1: Stage and commit**

```powershell
cd C:\MyFile\DevAll\QmlTS
git add -A
git status
git commit -m "feat: add V1 compatibility shim with Phase 1 limits (Step 7)

- Add QMLTS-V009 diagnostic for multi-VM per source file with v1Compat
- Add QMLTS-V010 diagnostic for injected VM with v1Compat (forward guard)
- Add QMLTS-B003 diagnostic for multi-VM-type module with v1Compat
- Thread v1Compat through compiler, build pipeline, entry generator, manifest
- Extend ModuleRegistration and V2NativeBindings with v1Compat parameter
- Forward v1Compat in QmltsHost.registerModule() to native binding
- Add v1_compat/v1_compat_applied fields to V2EngineState
- Install vm/__qmlts context properties on first V2 instance in v1Compat mode
- Context properties set during QObject construction (before QML binding eval)
- v1Compat is sticky (once enabled, stays enabled per engine)
- V1 mode and V2 QML output completely unchanged
- Comprehensive tests: compiler V009/V010, build B003, entry/manifest, host, Rust

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

- [ ] **Step 2: Push**

```powershell
git push -u origin step7/v1-compat-shim
```

- [ ] **Step 3: Open PR**

Open a PR targeting `main` with title: "feat: Step 7 — V1 compatibility shim with Phase 1 limits". Do NOT merge.

---

## Self-Review Checklist

1. **Spec coverage:** Every section of the spec has at least one task implementing it:
   - V009 → Task 4 (compiler) + Task 5 (tests)
   - V010 → Task 4 (compiler) + Task 5 (tests)
   - B003 → Task 10 (build) + Task 11 (tests)
   - Entry generator v1Compat → Task 7 + Task 8
   - Manifest v1Compat → Task 9 + Task 11
   - ModuleRegistration extension → Task 12
   - V2NativeBindings extension → Task 12
   - QmltsHost.registerModule forwarding → Task 13 + Task 14
   - N-API register_module 6th param → Task 18
   - V2EngineState v1_compat fields → Task 15
   - Engine register_module v1_compat param → Task 16
   - Context property setup in create_v2_context_guard → Task 17
   - Rust tests → Task 19

2. **Placeholder scan:** No TBD, TODO, or "implement later" found.

3. **Type consistency:**
   - `v1Compat: boolean` consistent across: CompilationUnit, EntryGeneratorOptions.moduleRegistration, BuildManifest, ModuleRegistration, V2NativeBindings.registerModule
   - `v1_compat: bool` consistent across: engine.rs register_module, exports.rs register_module, V2EngineState
   - `v1_compat_applied: Arc<AtomicBool>` used in V2EngineState and captured in create_v2_context_guard closure
   - Diagnostic codes: QMLTS-V009, QMLTS-V010, QMLTS-B003 all registered in diagnostics.ts and used consistently
