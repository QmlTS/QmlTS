# DSL Generator Full-QML Completion Design

> Date: 2026-04-05
> Status: Approved
> Branch: `05-dsl-generator-full-qml`

## Problem Statement

Module 05 core is implemented and the P0 snapshot works. But full-registry generation is not yet production-quality:

- **6 files** have `::` in type names, producing invalid file paths and import specifiers
- **434 warnings** from unmapped C++ types (181 `qsizetype`, 100+ Qt3D/QtCharts classes)
- **22 test references** to removed `formatOutput`/`validateOutput` config fields
- **No output separation** — `generate:dsl --all` writes directly into the committed P0 snapshot directory
- **No written-output validation** — no `tsc --noEmit` test against full generated output

## Design

### 1. Output Directory Separation

**CLI changes to `scripts/generate-dsl.ts`:**

- `generate:dsl` (P0 default) → `src/dsl/generated/` (committed snapshot, unchanged)
- `generate:dsl --all` → `.generated-full/` (gitignored stabilization target)
- `--output-dir=<path>` flag overrides either default explicitly

Add `.generated-full/` to `.gitignore`.

This is a **temporary stabilization strategy**. Once full-generation quality is good enough, the long-term direction is to commit the full version-bound generated snapshot.

### 2. Type Name Canonicalization

**Problem:** Registry types like `QtVirtualKeyboard::EnterKeyActionAttachedType` leak raw C++ `::` names into file paths and import specifiers.

**Solution — two-level naming in `AnalyzedType`:**

1. **`emitFileName`** — filesystem/import-safe name for file paths and import specifiers.
   - Derived from `qmlName` by stripping C++ namespace prefix (after last `::`)
   - Used for: `.ts` file name, `import ... from './EmitFileName.js'`, barrel index re-exports
   - Collision handling: if two types in same module collide, disambiguate with namespace prefix (e.g., `QtVirtualKeyboard_EnterKeyActionAttachedType`). Alphabetically sorted for determinism.

2. **`dslSymbolName`** — the public DSL-facing symbol (builder interface name, factory function name).
   - Keeps the real QML-facing name when one exists
   - Falls back to `emitFileName` only when the QML name IS the raw `::` string

**Separation of concerns:**
- `emitFileName` → file paths, import specifiers, internal identifiers
- `dslSymbolName` → public API surface (factory functions, builder interfaces, enum namespaces)
- Raw `qmlName` → `TypeMetadata.typeName` (runtime), diagnostics, comment headers

**Skip rule:** Generate no file for types that: (a) have `::` in qmlName, AND (b) are not referenced as attached/grouped/property type by any other generated type in any module.

**Affected code:**
- `analyzer.ts` — compute `emitFileName` and `dslSymbolName` during analysis
- `generator.ts` — use `emitFileName` for file paths
- `code-emitter.ts` — use `emitFileName` for import specifiers, `dslSymbolName` for public symbols
- `index-emitter.ts` — use `emitFileName` for barrel exports

### 3. C++ Type Mapping Expansion

**Tier 1 — Direct primitive/typedef mappings** (in `type-mapper.ts`):

| C++ Type | DSL Type |
|----------|----------|
| `qsizetype`, `quint8`..`quint64`, `qint8`..`qint64` | `number` |
| `uchar`, `ushort`, `uint`, `ulong` | `number` |
| `float`, `double`, `qreal` | `number` |
| `QRgb` | `number` |

No hard-coded `list → QmlValue[]`. Generic `list<T>` resolved by extracting element type first.

**Tier 2 — Registry-aware category-respecting resolution:**

- Strip pointer suffix `*` before lookup
- Search analyzed registry by `qualifiedName` or `qmlName`
- Map according to the resolved type's **category**:
  - Creatable object → that type's builder interface
  - Singleton → singleton/interface type
  - Value type → value type mapping
  - Grouped surface → grouped builder surface
  - Attached type → attached builder surface (only where semantically valid)
- `list<T>` → resolve `T` through the same pipeline, produce `ResolvedT[]` or fallback

**Tier 3 — Keep warnings for truly unresolved:**

Types not matching any primitive table or registry entry → `QmlValue` + warning. No blanket `QmlObjectBuilder` or `QmlValue[]` fallbacks.

### 4. Test Cleanup & Validation

**Cleanup:**
- Remove all 22 instances of `formatOutput`/`validateOutput` from test config objects in `generator.test.ts` (16) and `validation.test.ts` (6)

**Written-output full-gen validation test** (`tests/dsl/full-generation-written.test.ts`):
1. Generate all modules to a temp directory
2. Verify all files written successfully (no ENOENT from `::` paths)
3. Verify per-module `index.ts` and top-level `index.ts` exist
4. Copy runtime source files into temp dir (needed for import resolution)
5. Create a minimal `tsconfig.json` pointing at the temp dir
6. Run `tsc --noEmit` on the temp dir and assert zero errors
7. Assert warning count < budget threshold
8. Clean up temp dir in `afterAll`

**In-memory full-gen tests** (existing `full-generation.test.ts`):
- Keep as-is; update warning budget threshold after Tier 1+2 mappings reduce count

**Committed P0 snapshot tests** (existing `validation.test.ts`):
- Keep focused on P0 snapshot in `src/dsl/generated/` only

### 5. Implementation Order

**Phase A — Foundation fixes (no generated output changes):**
1. CLI: add `--output-dir` flag, change `--all` default to `.generated-full/`
2. Add `.generated-full/` to `.gitignore`
3. Clean up 22 old config field references in tests
4. Type name canonicalization (`emitFileName` + `dslSymbolName`) in analyzer

**Phase B — Type mapping improvements:**
5. Tier 1: add C++ primitive/typedef mapping table to `type-mapper.ts`
6. Tier 2: registry-aware category-respecting resolution
7. `list<T>` element type extraction and resolution

**Phase C — Integration and validation:**
8. Regenerate P0 snapshot (verify no regression)
9. Run full generation to `.generated-full/`, verify no `::` in paths
10. Written-output validation test (`tsc --noEmit` on full output)
11. Update in-memory warning budget thresholds

**Phase D — Final verification:**
12. Full test suite green
13. Push branch, create PR
