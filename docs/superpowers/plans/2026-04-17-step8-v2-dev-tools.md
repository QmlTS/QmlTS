# Step 8: V2 Dev Tools & Hot Reload — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade dev tools and hot reload to V2 instance-scoped semantics — capture/restore V2 instance state during hot reload via schema-filtered native QProperty traversal, add instance selector targeting for REPL/console/overlay/profiler, and add V2 DevServer status states.

**Architecture:** Layered approach — existing UI geometry capture (`captureSnapshot`/`restoreSnapshot`) stays separate from new V2 instance state capture/restore. The hot reload orchestrator gains a 6-step V2 flow. Native `captureInstanceStates`/`restoreInstanceStates` use `V2StatePropertyDescriptor` metadata (not `schema_json` parsing). Instance matching uses `(className, compilerSlotKey)` only — no fallbacks. All dev tools gain optional instance context parameters.

**Tech Stack:** TypeScript (Bun test runner), Rust (qmlts-host, qmlts-host-generated), C++ (Qt 6.11.0 FFI), napi-rs

**Repository:** `C:\MyFile\DevAll\QmlTS`
**Branch:** `step8/v2-dev-tools-hot-reload`
**Design Spec:** `docs/superpowers/specs/2026-04-17-step8-v2-dev-tools-design.md`

---

## Scope Guard

This step DOES:
- Add `V2StatePropertyDescriptor` and `state_properties` to `V2BridgeDescriptor`
- Add `qmlts_v2_read_properties` / `qmlts_v2_write_properties` C++ FFI + mock-qt
- Add `captureInstanceStates` / `restoreInstanceStates` engine methods + N-API exports
- Add instance selector parsing and resolution (`parseInstanceSelector`, `resolveInstanceSelector`)
- Add V2 hot reload orchestrator flow (capture → match → restore)
- Add `HotReloadDiagnostic`, `NativeInstanceSnapshot`, `InstanceRestorePair`, `RestoreDiagnostics` types
- Add V2 status states (`capturing-state`, `restoring-state`) to DevServer
- Add instance targeting to REPL, ErrorOverlay, DevConsole, PerfProfiler
- Add `captureInstanceStates`/`restoreInstanceStates` to `V2NativeBindings` and `HotReloadClient`
- Preserve all V1 behavior and existing ~160+ dev-tools tests

This step does NOT:
- Change file watcher behavior
- Change V2 QML output or compiler behavior
- Add visual UI redesign for error overlay
- Add schema-driven native code generation
- Add single-instance inference for V2 targeting

---

## File Map

### New Files

| File | Purpose |
|------|---------|
| `src/dev-tools/instance-selector.ts` | Instance selector parsing + resolution |
| `tests/dev-tools/instance-selector.test.ts` | ~8 selector tests |

### Modified Files — TypeScript

| File | Changes |
|------|---------|
| `src/dev-tools/dev-types.ts` | Add V2 types: `HotReloadDiagnostic`, `NativeInstanceSnapshot`, `InstanceRestorePair`, `RestoreDiagnostics`, `InstanceContext`, V2 `DevServerStatus` values, V2 `HotReloadOrchestratorResult` fields, V2 `PerfRecord`/`PerfSpan` additions |
| `src/dev-tools/hot-reload-orchestrator.ts` | V2 6-step flow: capture → match → restore; `HotReloadOrchestratorOptions` gains optional `v2` context |
| `src/dev-tools/dev-server.ts` | V2 status transitions, V2 orchestrator wiring |
| `src/dev-tools/error-overlay.ts` | `formatOverlayErrors` gains optional instance context |
| `src/dev-tools/dev-console.ts` | Instance-tagged output formatting |
| `src/dev-tools/repl.ts` | Instance selector targeting for V2 |
| `src/dev-tools/perf-profiler.ts` | Per-instance span tags, filter helpers |
| `src/dev-tools/index.ts` | Export new types and functions |
| `src/build/build-types.ts` | `HotReloadClient` gains optional V2 methods |
| `native/npm/qmlts-host/src/v2-types.ts` | `V2NativeBindings` gains `captureInstanceStates`/`restoreInstanceStates` |

### Modified Files — TypeScript Tests

| File | Changes |
|------|---------|
| `tests/dev-tools/hot-reload-orchestrator.test.ts` | ~14 V2 tests |
| `tests/dev-tools/dev-server.test.ts` | ~10 V2 tests |
| `tests/dev-tools/repl.test.ts` | V2 selector tests |
| `tests/dev-tools/dev-console.test.ts` | Instance tag tests |
| `tests/dev-tools/perf-profiler.test.ts` | Per-instance span tests |
| `tests/dev-tools/error-overlay.test.ts` | Instance context tag test |

### Modified Files — Rust

| File | Changes |
|------|---------|
| `native/crates/qmlts-host-generated/src/lib.rs` | Add `V2StatePropertyDescriptor`, `state_properties` to `V2BridgeDescriptor`, populate for Login/Counter/Search |
| `native/crates/qmlts-host/src/engine.rs` | Add `capture_instance_states()`, `restore_instance_states()` |
| `native/crates/qmlts-host/src/exports.rs` | Add `captureInstanceStates`, `restoreInstanceStates` N-API exports |
| `native/crates/qmlts-host/src/qt_context.rs` | Add `v2_read_properties()`, `v2_write_properties()` with mock-qt |

### Modified Files — C++

| File | Changes |
|------|---------|
| `native/crates/qmlts-host/cpp/qt_context.cpp` | Add `qmlts_v2_read_properties()`, `qmlts_v2_write_properties()` |

---

## Tasks

### Checkpoint 1: Instance Selector + New Types/Diagnostics

---

### Task 1: Add V2 types to dev-types.ts

**Files:**
- Modify: `src/dev-tools/dev-types.ts`

- [ ] **Step 1: Add HotReloadDiagnostic type**

After the `HotReloadOrchestratorOptions` interface (line 71), add:

```ts
// ─── V2 Hot Reload Types ────────────────────────────────────

export interface HotReloadDiagnostic {
  readonly code: string;
  readonly message: string;
  readonly instanceId?: number;
  readonly className?: string;
  readonly compilerSlotKey?: string;
}

export interface NativeInstanceSnapshot {
  readonly instanceId: number;
  readonly className: string;
  readonly properties: Readonly<Record<string, unknown>>;
}

export interface InstanceRestorePair {
  readonly instanceId: number;
  readonly properties: Readonly<Record<string, unknown>>;
}

export interface RestoreDiagnostics {
  readonly diagnostics: readonly HotReloadDiagnostic[];
}

export interface InstanceContext {
  readonly instanceId: number;
  readonly className: string;
  readonly compilerSlotKey?: string;
}
```

- [ ] **Step 2: Add V2 fields to HotReloadOrchestratorResult**

Update `HotReloadOrchestratorResult`:

```ts
export interface HotReloadOrchestratorResult {
  readonly success: boolean;
  readonly sequence: number;
  readonly durationMs: number;
  readonly filesReloaded: readonly string[];
  readonly error?: string;
  // V2 additions
  readonly instancesRestored?: number;
  readonly instancesUnmatched?: number;
  readonly degraded?: boolean;
  readonly diagnostics?: readonly HotReloadDiagnostic[];
}
```

- [ ] **Step 3: Add V2 DevServerStatus values**

Update `DevServerStatus` type:

```ts
export type DevServerStatus =
  | 'idle'
  | 'starting'
  | 'building'
  | 'running'
  | 'reloading'
  | 'error'
  | 'stopping'
  | 'stopped'
  | 'capturing-state'
  | 'restoring-state';
```

- [ ] **Step 4: Verify tsc**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

---

### Task 2: Add V2 methods to HotReloadClient and V2NativeBindings

**Files:**
- Modify: `src/build/build-types.ts`
- Modify: `native/npm/qmlts-host/src/v2-types.ts`

- [ ] **Step 1: Add V2 optional methods to HotReloadClient**

In `src/build/build-types.ts`, after the existing `HotReloadClient` interface members, add:

```ts
export interface HotReloadClient {
  reload(changedFiles: readonly string[], outputDir: string): Promise<HotReloadResult>;
  isConnected(): boolean;
  dispose(): void;
  // V2 optional methods — absent means V1-only client
  captureInstanceStates?(): Promise<NativeInstanceSnapshot[]> | NativeInstanceSnapshot[];
  restoreInstanceStates?(pairs: InstanceRestorePair[]): Promise<RestoreDiagnostics> | RestoreDiagnostics;
}
```

Add the necessary imports from dev-types at the top of build-types.ts:

```ts
import type { NativeInstanceSnapshot, InstanceRestorePair, RestoreDiagnostics } from '../dev-tools/dev-types.js';
```

- [ ] **Step 2: Add V2 methods to V2NativeBindings**

In `native/npm/qmlts-host/src/v2-types.ts`, add to `V2NativeBindings`:

```ts
  /** Capture state of all ready V2 instances. Returns JSON string. */
  captureInstanceStates(engine: QmltsEngine): string;
  /** Restore state to matched V2 instances. Returns JSON string with diagnostics. */
  restoreInstanceStates(engine: QmltsEngine, matchedPairsJson: string): string;
```

Do NOT add these to `V2_REQUIRED_METHODS` — these are Step 8 additive methods, not core V2.

- [ ] **Step 3: Verify tsc**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

---

### Task 3: Create instance selector

**Files:**
- Create: `src/dev-tools/instance-selector.ts`

- [ ] **Step 1: Create instance-selector.ts**

```ts
import type { InstanceStateSnapshot } from '../../native/npm/qmlts-host/src/v2-types.js';

// ─── Selector Types ─────────────────────────────────────────

export type SelectorErrorCode =
  | 'SELECTOR_INVALID'
  | 'SELECTOR_INSTANCE_NOT_FOUND'
  | 'SELECTOR_CLASS_NOT_FOUND'
  | 'SELECTOR_AMBIGUOUS'
  | 'SELECTOR_SLOT_NOT_FOUND';

export interface SelectorError {
  readonly code: SelectorErrorCode;
  readonly message: string;
}

export type InstanceSelectorKind =
  | { readonly type: 'byId'; readonly instanceId: number }
  | { readonly type: 'byClass'; readonly className: string }
  | { readonly type: 'byClassAndSlot'; readonly className: string; readonly slotKey: string };

export type InstanceSelector = InstanceSelectorKind;

// ─── Parsing ────────────────────────────────────────────────

/**
 * Parse an instance selector string into a structured selector.
 *
 * Grammar:
 * - `#<instanceId>` — by numeric instance ID
 * - `@<className>` — by class name
 * - `@<className>#<slotKey>` — by class name + compiler slot key
 */
export function parseInstanceSelector(input: string): InstanceSelector | SelectorError {
  const trimmed = input.trim();

  if (trimmed.startsWith('#')) {
    const idStr = trimmed.slice(1);
    const id = Number.parseInt(idStr, 10);
    if (Number.isNaN(id) || id < 0 || String(id) !== idStr) {
      return { code: 'SELECTOR_INVALID', message: `Invalid instance ID: '${idStr}'` };
    }
    return { type: 'byId', instanceId: id };
  }

  if (trimmed.startsWith('@')) {
    const rest = trimmed.slice(1);
    const hashIdx = rest.indexOf('#');
    if (hashIdx === -1) {
      const className = rest;
      if (!className || /\s/.test(className)) {
        return { code: 'SELECTOR_INVALID', message: `Invalid class name: '${className}'` };
      }
      return { type: 'byClass', className };
    }
    const className = rest.slice(0, hashIdx);
    const slotKey = rest.slice(hashIdx + 1);
    if (!className || !slotKey) {
      return { code: 'SELECTOR_INVALID', message: `Invalid selector: '${trimmed}'` };
    }
    return { type: 'byClassAndSlot', className, slotKey };
  }

  return { code: 'SELECTOR_INVALID', message: `Selector must start with '#' or '@': '${trimmed}'` };
}

/**
 * Check if a value is a SelectorError.
 */
export function isSelectorError(value: InstanceSelector | SelectorError): value is SelectorError {
  return 'code' in value && 'message' in value && !('type' in value);
}

// ─── Resolution ─────────────────────────────────────────────

/**
 * Resolve a parsed selector against live instance slots.
 *
 * Returns the matched instanceId or a SelectorError.
 */
export function resolveInstanceSelector(
  selector: InstanceSelector,
  slots: readonly InstanceStateSnapshot[],
): number | SelectorError {
  switch (selector.type) {
    case 'byId': {
      const match = slots.find((s) => s.instanceId === selector.instanceId);
      if (!match) {
        return {
          code: 'SELECTOR_INSTANCE_NOT_FOUND',
          message: `Instance #${selector.instanceId} not found`,
        };
      }
      return match.instanceId;
    }

    case 'byClass': {
      const matches = slots.filter((s) => s.className === selector.className);
      if (matches.length === 0) {
        return {
          code: 'SELECTOR_CLASS_NOT_FOUND',
          message: `No instances of class '${selector.className}'`,
        };
      }
      if (matches.length > 1) {
        const available = matches
          .map((m) => (m.compilerSlotKey ? `@${m.className}#${m.compilerSlotKey}` : `#${m.instanceId}`))
          .join(', ');
        return {
          code: 'SELECTOR_AMBIGUOUS',
          message: `Multiple instances of '${selector.className}': ${available}`,
        };
      }
      return matches[0]!.instanceId;
    }

    case 'byClassAndSlot': {
      const match = slots.find(
        (s) => s.className === selector.className && s.compilerSlotKey === selector.slotKey,
      );
      if (!match) {
        const classMatches = slots.filter((s) => s.className === selector.className);
        if (classMatches.length === 0) {
          return {
            code: 'SELECTOR_CLASS_NOT_FOUND',
            message: `No instances of class '${selector.className}'`,
          };
        }
        return {
          code: 'SELECTOR_SLOT_NOT_FOUND',
          message: `No instance of '${selector.className}' with slotKey '${selector.slotKey}'`,
        };
      }
      return match.instanceId;
    }
  }
}
```

- [ ] **Step 2: Verify tsc**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

---

### Task 4: Add instance selector tests

**Files:**
- Create: `tests/dev-tools/instance-selector.test.ts`

- [ ] **Step 1: Create instance-selector.test.ts**

```ts
import { describe, expect, test } from 'bun:test';
import type { InstanceStateSnapshot } from '../../native/npm/qmlts-host/src/v2-types.js';
import {
  isSelectorError,
  parseInstanceSelector,
  resolveInstanceSelector,
} from '../../src/dev-tools/instance-selector.js';

const SLOTS: InstanceStateSnapshot[] = [
  {
    instanceId: 0,
    className: 'LoginViewModel',
    compilerSlotKey: 'login-slot',
    properties: { username: '', password: '' },
  },
  {
    instanceId: 1,
    className: 'LoginViewModel',
    compilerSlotKey: 'login-slot-2',
    properties: { username: 'admin', password: '' },
  },
  {
    instanceId: 2,
    className: 'CounterViewModel',
    compilerSlotKey: 'counter-slot',
    properties: { count: 0 },
  },
];

describe('InstanceSelector', () => {
  // ─── SEL-01: Parse #<id> ────────────────────────────────
  test('SEL-01: parse #42 → byId', () => {
    const sel = parseInstanceSelector('#42');
    expect(isSelectorError(sel)).toBe(false);
    if (!isSelectorError(sel)) {
      expect(sel.type).toBe('byId');
      if (sel.type === 'byId') expect(sel.instanceId).toBe(42);
    }
  });

  // ─── SEL-02: Parse @ClassName ───────────────────────────
  test('SEL-02: parse @LoginViewModel → byClass', () => {
    const sel = parseInstanceSelector('@LoginViewModel');
    expect(isSelectorError(sel)).toBe(false);
    if (!isSelectorError(sel)) {
      expect(sel.type).toBe('byClass');
      if (sel.type === 'byClass') expect(sel.className).toBe('LoginViewModel');
    }
  });

  // ─── SEL-03: Parse @ClassName#slotKey ───────────────────
  test('SEL-03: parse @LoginViewModel#login-slot → byClassAndSlot', () => {
    const sel = parseInstanceSelector('@LoginViewModel#login-slot');
    expect(isSelectorError(sel)).toBe(false);
    if (!isSelectorError(sel)) {
      expect(sel.type).toBe('byClassAndSlot');
      if (sel.type === 'byClassAndSlot') {
        expect(sel.className).toBe('LoginViewModel');
        expect(sel.slotKey).toBe('login-slot');
      }
    }
  });

  // ─── SEL-04: Invalid syntax ─────────────────────────────
  test('SEL-04: invalid syntax → SELECTOR_INVALID', () => {
    const sel = parseInstanceSelector('foobar');
    expect(isSelectorError(sel)).toBe(true);
    if (isSelectorError(sel)) {
      expect(sel.code).toBe('SELECTOR_INVALID');
    }
  });

  test('SEL-04b: empty selector → SELECTOR_INVALID', () => {
    const sel = parseInstanceSelector('');
    expect(isSelectorError(sel)).toBe(true);
    if (isSelectorError(sel)) expect(sel.code).toBe('SELECTOR_INVALID');
  });

  test('SEL-04c: negative id → SELECTOR_INVALID', () => {
    const sel = parseInstanceSelector('#-5');
    expect(isSelectorError(sel)).toBe(true);
    if (isSelectorError(sel)) expect(sel.code).toBe('SELECTOR_INVALID');
  });

  // ─── SEL-05: Ambiguous class ────────────────────────────
  test('SEL-05: ambiguous class → SELECTOR_AMBIGUOUS', () => {
    const sel = parseInstanceSelector('@LoginViewModel');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(typeof result).toBe('object');
      if (typeof result === 'object') {
        expect(result.code).toBe('SELECTOR_AMBIGUOUS');
      }
    }
  });

  // ─── SEL-06: Unknown instance ───────────────────────────
  test('SEL-06: unknown instance → SELECTOR_INSTANCE_NOT_FOUND', () => {
    const sel = parseInstanceSelector('#999');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(typeof result).toBe('object');
      if (typeof result === 'object') {
        expect(result.code).toBe('SELECTOR_INSTANCE_NOT_FOUND');
      }
    }
  });

  // ─── SEL-07: Unknown slotKey ────────────────────────────
  test('SEL-07: unknown slotKey → SELECTOR_SLOT_NOT_FOUND', () => {
    const sel = parseInstanceSelector('@LoginViewModel#no-such-slot');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(typeof result).toBe('object');
      if (typeof result === 'object') {
        expect(result.code).toBe('SELECTOR_SLOT_NOT_FOUND');
      }
    }
  });

  // ─── SEL-08: Successful resolution ──────────────────────
  test('SEL-08: resolve @LoginViewModel#login-slot → instanceId 0', () => {
    const sel = parseInstanceSelector('@LoginViewModel#login-slot');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(result).toBe(0);
    }
  });

  test('SEL-08b: resolve unique class → instanceId', () => {
    const sel = parseInstanceSelector('@CounterViewModel');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(result).toBe(2);
    }
  });

  test('SEL-08c: resolve #2 → instanceId 2', () => {
    const sel = parseInstanceSelector('#2');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(result).toBe(2);
    }
  });
});
```

- [ ] **Step 2: Run selector tests**

```powershell
bun test tests/dev-tools/instance-selector.test.ts 2>&1 | Select-Object -Last 20
```

Expected: All SEL-01 through SEL-08c pass.

---

### Checkpoint 2: Native Capture/Restore (Rust + C++ + mock-qt)

---

### Task 5: Add V2StatePropertyDescriptor to qmlts-host-generated

**Files:**
- Modify: `native/crates/qmlts-host-generated/src/lib.rs`

- [ ] **Step 1: Add V2StatePropertyDescriptor struct**

After the `V2BridgeDescriptor` struct definition, add:

```rust
/// Descriptor for a single declared state property on a V2 ViewModel.
///
/// Used by the capture/restore path to read/write only schema-declared
/// state properties. `schema_json` is NOT parsed at runtime for this path.
pub struct V2StatePropertyDescriptor {
    /// Rust/TS property name (e.g., `"username"`).
    pub name: &'static str,
    /// QML property name (e.g., `"username"` — same unless aliased).
    pub qml_name: &'static str,
    /// QML/Qt type for serialization: `"bool"` | `"int"` | `"real"` | `"string"`.
    pub qml_type: &'static str,
}
```

- [ ] **Step 2: Add state_properties field to V2BridgeDescriptor**

Add to `V2BridgeDescriptor`:

```rust
    /// Structured metadata for schema-declared state properties.
    /// Used by capture/restore to read/write only these properties.
    pub state_properties: &'static [V2StatePropertyDescriptor],
```

- [ ] **Step 3: Define static property descriptor arrays**

Add before the `v2_descriptors()` function:

```rust
static LOGIN_STATE_PROPERTIES: &[V2StatePropertyDescriptor] = &[
    V2StatePropertyDescriptor { name: "username", qml_name: "username", qml_type: "string" },
    V2StatePropertyDescriptor { name: "password", qml_name: "password", qml_type: "string" },
    V2StatePropertyDescriptor { name: "isLoading", qml_name: "isLoading", qml_type: "bool" },
];

static COUNTER_STATE_PROPERTIES: &[V2StatePropertyDescriptor] = &[
    V2StatePropertyDescriptor { name: "count", qml_name: "count", qml_type: "int" },
];

static SEARCH_STATE_PROPERTIES: &[V2StatePropertyDescriptor] = &[
    V2StatePropertyDescriptor { name: "query", qml_name: "query", qml_type: "string" },
    V2StatePropertyDescriptor { name: "resultCount", qml_name: "resultCount", qml_type: "int" },
];
```

- [ ] **Step 4: Populate state_properties in v2_descriptors()**

Add `state_properties: LOGIN_STATE_PROPERTIES,` to the Login descriptor, similarly for Counter and Search in `v2_descriptors()`.

- [ ] **Step 5: Add tests**

```rust
    #[test]
    fn v2_descriptors_have_state_properties() {
        let descs = v2_descriptors();
        let login = descs.iter().find(|d| d.class_name == "LoginViewModel").unwrap();
        assert_eq!(login.state_properties.len(), 3);
        assert_eq!(login.state_properties[0].name, "username");
        assert_eq!(login.state_properties[0].qml_type, "string");

        let counter = descs.iter().find(|d| d.class_name == "CounterViewModel").unwrap();
        assert_eq!(counter.state_properties.len(), 1);
        assert_eq!(counter.state_properties[0].qml_type, "int");
    }
```

- [ ] **Step 6: Verify**

```powershell
cargo check -p qmlts-host-generated 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
cargo test -p qmlts-host-generated -- v2_descriptors 2>&1 | Select-Object -Last 10
```

---

### Task 6: Add C++ FFI read/write properties

**Files:**
- Modify: `native/crates/qmlts-host/cpp/qt_context.cpp`

- [ ] **Step 1: Add qmlts_v2_read_properties**

Add at the end of `qt_context.cpp`, before the closing comment:

```cpp
// ─────────────────────────────────────────────────────────────────────────
//  V2 Instance State Capture / Restore (Step 8)
// ─────────────────────────────────────────────────────────────────────────

extern "C" char* qmlts_v2_read_properties(void* qobject_ptr, const char* property_names_json) {
    QObject* obj = static_cast<QObject*>(qobject_ptr);
    if (!obj || !property_names_json) {
        return qmlts_strdup("{\"props\":{},\"diagnostics\":[{\"code\":\"HR_NULL_OBJECT\",\"message\":\"null qobject\"}]}");
    }

    QJsonDocument namesDoc = QJsonDocument::fromJson(property_names_json);
    if (!namesDoc.isArray()) {
        return qmlts_strdup("{\"props\":{},\"diagnostics\":[{\"code\":\"HR_INVALID_INPUT\",\"message\":\"property_names_json not an array\"}]}");
    }

    QJsonObject props;
    QJsonArray diags;
    const QMetaObject* meta = obj->metaObject();

    for (const QJsonValue& nameVal : namesDoc.array()) {
        if (!nameVal.isString()) continue;
        QString propName = nameVal.toString();
        int propIndex = meta->indexOfProperty(propName.toUtf8().constData());
        if (propIndex < 0) {
            QJsonObject diag;
            diag["code"] = "HR_PROPERTY_NOT_FOUND";
            diag["message"] = QString("Property '%1' not found on QObject").arg(propName);
            diags.append(diag);
            continue;
        }
        QVariant value = meta->property(propIndex).read(obj);
        switch (value.typeId()) {
            case QMetaType::Bool:
                props[propName] = value.toBool();
                break;
            case QMetaType::Int:
                props[propName] = value.toInt();
                break;
            case QMetaType::Double:
            case QMetaType::Float:
                props[propName] = value.toDouble();
                break;
            case QMetaType::QString:
                props[propName] = value.toString();
                break;
            default: {
                QJsonObject diag;
                diag["code"] = "HR_UNSUPPORTED_TYPE";
                diag["message"] = QString("Property '%1' has unsupported type %2")
                    .arg(propName, QString::fromUtf8(value.typeName()));
                diags.append(diag);
                break;
            }
        }
    }

    QJsonObject result;
    result["props"] = props;
    result["diagnostics"] = diags;
    QByteArray json = QJsonDocument(result).toJson(QJsonDocument::Compact);
    return qmlts_strdup(json.constData());
}

extern "C" bool qmlts_v2_write_properties(void* qobject_ptr, const char* properties_json) {
    QObject* obj = static_cast<QObject*>(qobject_ptr);
    if (!obj || !properties_json) return false;

    QJsonDocument doc = QJsonDocument::fromJson(properties_json);
    if (!doc.isObject()) return false;

    const QMetaObject* meta = obj->metaObject();
    QJsonObject propsObj = doc.object();

    for (auto it = propsObj.begin(); it != propsObj.end(); ++it) {
        int propIndex = meta->indexOfProperty(it.key().toUtf8().constData());
        if (propIndex < 0) continue;
        QMetaProperty prop = meta->property(propIndex);
        QJsonValue val = it.value();

        QVariant variant;
        if (val.isBool()) variant = QVariant(val.toBool());
        else if (val.isDouble()) {
            // Determine if int or real from property type
            if (prop.typeId() == QMetaType::Int)
                variant = QVariant(static_cast<int>(val.toDouble()));
            else
                variant = QVariant(val.toDouble());
        }
        else if (val.isString()) variant = QVariant(val.toString());
        else continue;

        prop.write(obj, variant);
    }
    return true;
}
```

---

### Task 7: Add Rust qt_context FFI wrappers + mock-qt

**Files:**
- Modify: `native/crates/qmlts-host/src/qt_context.rs`

- [ ] **Step 1: Add extern declarations (non-mock block)**

In the `#[cfg(not(feature = "mock-qt"))]` extern block (around line 136), add:

```rust
    fn qmlts_v2_read_properties(
        qobject_ptr: *mut c_void,
        property_names_json: *const std::ffi::c_char,
    ) -> *mut std::ffi::c_char;
    fn qmlts_v2_write_properties(
        qobject_ptr: *mut c_void,
        properties_json: *const std::ffi::c_char,
    ) -> bool;
```

- [ ] **Step 2: Add safe wrappers (non-mock)**

```rust
#[cfg(not(feature = "mock-qt"))]
pub fn v2_read_properties(qobject_ptr: *mut c_void, property_names_json: &str) -> Option<String> {
    let c_json = std::ffi::CString::new(property_names_json).ok()?;
    let raw = unsafe { qmlts_v2_read_properties(qobject_ptr, c_json.as_ptr()) };
    if raw.is_null() {
        return None;
    }
    let result = unsafe { std::ffi::CStr::from_ptr(raw) }
        .to_str()
        .ok()
        .map(|s| s.to_string());
    unsafe { qmlts_free_string(raw) };
    result
}

#[cfg(not(feature = "mock-qt"))]
pub fn v2_write_properties(qobject_ptr: *mut c_void, properties_json: &str) -> bool {
    let Ok(c_json) = std::ffi::CString::new(properties_json) else {
        return false;
    };
    unsafe { qmlts_v2_write_properties(qobject_ptr, c_json.as_ptr()) }
}
```

- [ ] **Step 3: Add mock-qt implementations**

```rust
#[cfg(feature = "mock-qt")]
pub fn v2_read_properties(_qobject_ptr: *mut c_void, property_names_json: &str) -> Option<String> {
    use std::sync::LazyLock;
    use std::collections::HashMap;
    use std::sync::Mutex;

    // Thread-local mock store: ptr → {prop_name → json_value}
    static MOCK_PROPERTIES: LazyLock<Mutex<HashMap<usize, HashMap<String, String>>>> =
        LazyLock::new(|| Mutex::new(HashMap::new()));

    let ptr_key = _qobject_ptr as usize;
    let names: Vec<String> = serde_json::from_str(property_names_json).ok()?;
    let store = MOCK_PROPERTIES.lock().expect("mock props lock");
    let obj_props = store.get(&ptr_key);

    let mut props = serde_json::Map::new();
    let diagnostics = serde_json::Value::Array(vec![]);

    for name in &names {
        if let Some(obj) = obj_props {
            if let Some(val_str) = obj.get(name) {
                if let Ok(val) = serde_json::from_str::<serde_json::Value>(val_str) {
                    props.insert(name.clone(), val);
                }
            }
        }
    }

    let result = serde_json::json!({ "props": props, "diagnostics": diagnostics });
    Some(result.to_string())
}

#[cfg(feature = "mock-qt")]
pub fn v2_write_properties(_qobject_ptr: *mut c_void, properties_json: &str) -> bool {
    use std::sync::LazyLock;
    use std::collections::HashMap;
    use std::sync::Mutex;

    static MOCK_PROPERTIES: LazyLock<Mutex<HashMap<usize, HashMap<String, String>>>> =
        LazyLock::new(|| Mutex::new(HashMap::new()));

    let ptr_key = _qobject_ptr as usize;
    let props: serde_json::Map<String, serde_json::Value> =
        match serde_json::from_str(properties_json) {
            Ok(serde_json::Value::Object(m)) => m,
            _ => return false,
        };

    let mut store = MOCK_PROPERTIES.lock().expect("mock props lock");
    let obj_props = store.entry(ptr_key).or_default();
    for (k, v) in props {
        obj_props.insert(k, v.to_string());
    }
    true
}

/// Seed mock property data for a QObject pointer. Test-only.
#[cfg(feature = "mock-qt")]
pub fn mock_seed_v2_properties(qobject_ptr: *mut c_void, properties: &[(&str, &str)]) {
    use std::sync::LazyLock;
    use std::collections::HashMap;
    use std::sync::Mutex;

    static MOCK_PROPERTIES: LazyLock<Mutex<HashMap<usize, HashMap<String, String>>>> =
        LazyLock::new(|| Mutex::new(HashMap::new()));

    let ptr_key = qobject_ptr as usize;
    let mut store = MOCK_PROPERTIES.lock().expect("mock props lock");
    let obj_props = store.entry(ptr_key).or_default();
    for (name, value) in properties {
        obj_props.insert((*name).to_string(), (*value).to_string());
    }
}
```

**Note:** The static `MOCK_PROPERTIES` maps must be the same instance across `v2_read_properties`, `v2_write_properties`, and `mock_seed_v2_properties`. If Rust complains about separate statics, refactor to a single module-level static. The simplest approach is a single `LazyLock<Mutex<HashMap<usize, HashMap<String, String>>>>` at module level, accessible by all three functions.

- [ ] **Step 4: Verify cargo check**

```powershell
cargo check -p qmlts-host --features mock-qt 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
```

---

### Task 8: Add engine capture/restore methods

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs`

- [ ] **Step 1: Add capture_instance_states method**

Add to `impl QmltsEngine`, after the existing V2 methods:

```rust
    /// Capture state of all ready V2 instances.
    ///
    /// Returns JSON: `{"snapshots": [...], "diagnostics": [...]}`
    /// Each snapshot: `{"instanceId": N, "className": "...", "properties": {...}}`
    ///
    /// Only ready instances are captured. Unready instances produce a diagnostic.
    pub fn capture_instance_states(&self) -> Result<String> {
        let state = self.require_v2()?;
        let reg = state.registry.lock().expect("registry lock poisoned");
        let descriptors = qmlts_host_generated::v2_descriptors();

        let mut snapshots = Vec::new();
        let mut diagnostics = Vec::new();

        for (instance_id, class_name, ptr, ready) in reg.iter_instances() {
            if !ready {
                diagnostics.push(serde_json::json!({
                    "code": "HR_INSTANCE_NOT_READY",
                    "message": format!("Instance {} ({}) not ready, skipped", instance_id, class_name),
                    "instanceId": instance_id,
                    "className": class_name,
                }));
                continue;
            }

            // Look up descriptor for state_properties
            let desc = descriptors.iter().find(|d| d.class_name == class_name);
            let Some(desc) = desc else {
                diagnostics.push(serde_json::json!({
                    "code": "HR_NO_DESCRIPTOR",
                    "message": format!("No V2 descriptor for class '{}'", class_name),
                    "instanceId": instance_id,
                    "className": class_name,
                }));
                continue;
            };

            // Build property names array from structured descriptors
            let prop_names: Vec<&str> = desc.state_properties.iter().map(|p| p.qml_name).collect();
            let names_json = serde_json::to_string(&prop_names)
                .map_err(|e| QmltsError::Internal(e.to_string()))?;

            // Read properties from native QObject
            let read_result = qt_context::v2_read_properties(ptr, &names_json);
            match read_result {
                Some(json_str) => {
                    // Parse the read result
                    if let Ok(parsed) = serde_json::from_str::<serde_json::Value>(&json_str) {
                        let props = parsed.get("props").cloned().unwrap_or(serde_json::json!({}));
                        // Forward any read diagnostics
                        if let Some(read_diags) = parsed.get("diagnostics") {
                            if let Some(arr) = read_diags.as_array() {
                                for d in arr {
                                    let mut diag = d.clone();
                                    if let Some(obj) = diag.as_object_mut() {
                                        obj.insert("instanceId".to_string(), serde_json::json!(instance_id));
                                        obj.insert("className".to_string(), serde_json::json!(class_name));
                                    }
                                    diagnostics.push(diag);
                                }
                            }
                        }
                        snapshots.push(serde_json::json!({
                            "instanceId": instance_id,
                            "className": class_name,
                            "properties": props,
                        }));
                    }
                }
                None => {
                    diagnostics.push(serde_json::json!({
                        "code": "HR_READ_FAILED",
                        "message": format!("Failed to read properties for instance {}", instance_id),
                        "instanceId": instance_id,
                        "className": class_name,
                    }));
                }
            }
        }

        let result = serde_json::json!({ "snapshots": snapshots, "diagnostics": diagnostics });
        Ok(result.to_string())
    }

    /// Restore state to matched V2 instances.
    ///
    /// `matched_pairs_json`: JSON array of `{"instanceId": N, "properties": {...}}`
    /// Returns JSON: `{"diagnostics": [...]}`
    pub fn restore_instance_states(&self, matched_pairs_json: &str) -> Result<String> {
        let state = self.require_v2()?;
        let reg = state.registry.lock().expect("registry lock poisoned");
        let descriptors = qmlts_host_generated::v2_descriptors();

        let pairs: Vec<serde_json::Value> = serde_json::from_str(matched_pairs_json)
            .map_err(|e| QmltsError::Internal(format!("Invalid matched pairs JSON: {e}")))?;

        let mut diagnostics = Vec::new();

        for pair in &pairs {
            let instance_id = pair.get("instanceId")
                .and_then(|v| v.as_u64())
                .map(|v| v as u32);
            let properties = pair.get("properties");

            let Some(instance_id) = instance_id else {
                diagnostics.push(serde_json::json!({
                    "code": "HR_INVALID_PAIR",
                    "message": "Restore pair missing instanceId",
                }));
                continue;
            };

            let Some(properties) = properties else {
                continue; // No properties to restore, skip silently
            };

            let ptr = reg.get_qobject_ptr(instance_id);
            let class_name = reg.get_class_name(instance_id);

            let Some(ptr) = ptr else {
                diagnostics.push(serde_json::json!({
                    "code": "HR_INSTANCE_NOT_FOUND",
                    "message": format!("Instance {} not found in registry", instance_id),
                    "instanceId": instance_id,
                }));
                continue;
            };

            let Some(class_name) = class_name else {
                continue;
            };

            // Validate property names against descriptor allowlist
            let desc = descriptors.iter().find(|d| d.class_name == class_name);
            if let Some(desc) = desc {
                if let Some(obj) = properties.as_object() {
                    let allowed: std::collections::HashSet<&str> =
                        desc.state_properties.iter().map(|p| p.qml_name).collect();
                    for key in obj.keys() {
                        if !allowed.contains(key.as_str()) {
                            diagnostics.push(serde_json::json!({
                                "code": "HR_UNKNOWN_PROPERTY",
                                "message": format!("Property '{}' not in schema for '{}'", key, class_name),
                                "instanceId": instance_id,
                                "className": class_name,
                            }));
                        }
                    }
                }
            }

            // Write with suppress guard
            let _suppress = qt_context::SuppressGuard::new(ptr);
            let props_json = serde_json::to_string(properties)
                .map_err(|e| QmltsError::Internal(e.to_string()))?;

            if !qt_context::v2_write_properties(ptr, &props_json) {
                diagnostics.push(serde_json::json!({
                    "code": "HR_WRITE_FAILED",
                    "message": format!("Failed to write properties for instance {}", instance_id),
                    "instanceId": instance_id,
                    "className": class_name.to_string(),
                }));
            }
        }

        let result = serde_json::json!({ "diagnostics": diagnostics });
        Ok(result.to_string())
    }
```

- [ ] **Step 2: Add iter_instances to InstanceRegistry**

In `native/crates/qmlts-host/src/instance_registry.rs`, add:

```rust
    /// Iterate over all instances: (instance_id, class_name, qobject_ptr, ready).
    pub fn iter_instances(&self) -> Vec<(u32, String, *mut c_void, bool)> {
        self.instances
            .iter()
            .map(|(&id, entry)| (id, entry.class_name.clone(), entry.qobject_ptr, entry.ready))
            .collect()
    }
```

- [ ] **Step 3: Verify**

```powershell
cargo check -p qmlts-host --features mock-qt 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
```

---

### Task 9: Add N-API exports for capture/restore

**Files:**
- Modify: `native/crates/qmlts-host/src/exports.rs`

- [ ] **Step 1: Add captureInstanceStates export**

After the existing V2 exports section:

```rust
/// Capture state of all ready V2 instances.
///
/// Returns JSON string: `{"snapshots": [...], "diagnostics": [...]}`
#[napi(js_name = "captureInstanceStates")]
pub fn capture_instance_states(engine: &QmltsEngine) -> Result<String> {
    engine
        .inner
        .capture_instance_states()
        .map_err(|e| -> napi::Error { e.into() })
}

/// Restore state to matched V2 instances.
///
/// @param engine - The engine instance.
/// @param matchedPairsJson - JSON array of `{instanceId, properties}`.
/// Returns JSON string: `{"diagnostics": [...]}`
#[napi(js_name = "restoreInstanceStates")]
pub fn restore_instance_states(
    engine: &QmltsEngine,
    matched_pairs_json: String,
) -> Result<String> {
    engine
        .inner
        .restore_instance_states(&matched_pairs_json)
        .map_err(|e| -> napi::Error { e.into() })
}
```

- [ ] **Step 2: Verify**

```powershell
cargo check -p qmlts-host --features mock-qt 2>&1 | Select-String -Pattern "error" | Select-Object -First 10
```

---

### Task 10: Rust tests for capture/restore

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs` (test module)

- [ ] **Step 1: Add capture/restore tests**

In the engine test module:

```rust
    #[test]
    fn v2_capture_instance_states_empty_when_no_instances() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false).unwrap();
        let json = engine.capture_instance_states().unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();
        assert_eq!(parsed["snapshots"].as_array().unwrap().len(), 0);
    }

    #[test]
    fn v2_capture_requires_v2_enabled() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.capture_instance_states().is_err());
    }

    #[test]
    fn v2_restore_requires_v2_enabled() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.restore_instance_states("[]").is_err());
    }

    #[test]
    fn v2_restore_empty_pairs_is_noop() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false).unwrap();
        let json = engine.restore_instance_states("[]").unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();
        assert_eq!(parsed["diagnostics"].as_array().unwrap().len(), 0);
    }
```

- [ ] **Step 2: Run Rust tests**

```powershell
cargo test -p qmlts-host --features mock-qt -- capture_instance 2>&1 | Select-Object -Last 20
cargo test -p qmlts-host --features mock-qt -- restore_instance 2>&1 | Select-Object -Last 20
```

---

### Checkpoint 3: Hot Reload Orchestrator V2 Upgrade

---

### Task 11: Upgrade HotReloadOrchestratorOptions and Result

**Files:**
- Modify: `src/dev-tools/dev-types.ts`

- [ ] **Step 1: Add V2 fields to HotReloadOrchestratorOptions**

```ts
export interface HotReloadOrchestratorOptions {
  readonly client: HotReloadClient;
  // V2 optional context for instance-scoped hot reload
  readonly getInstanceSlots?: () => InstanceStateSnapshot[];
}
```

Add the import for `InstanceStateSnapshot` from v2-types.

---

### Task 12: Upgrade hot-reload-orchestrator.ts for V2

**Files:**
- Modify: `src/dev-tools/hot-reload-orchestrator.ts`

- [ ] **Step 1: Add V2 capture/match/restore logic**

Update `OrchestratorInternals` to include V2 context:

```ts
interface OrchestratorInternals {
  client: HotReloadClient;
  sequence: number;
  lastResult: HotReloadOrchestratorResult | undefined;
  reloadInProgress: boolean;
  beforeHooks: Set<(ctx: HotReloadContext) => void | Promise<void>>;
  afterHooks: Set<(result: HotReloadOrchestratorResult) => void | Promise<void>>;
  disposed: boolean;
  getInstanceSlots?: () => InstanceStateSnapshot[];
}
```

Add import for `InstanceStateSnapshot`, `NativeInstanceSnapshot`, `InstanceRestorePair`, `HotReloadDiagnostic` from `./dev-types.js`.

In the `reload()` method, after the client connection check and before `client.reload()`, add the V2 capture/match/restore flow:

```ts
// V2 capture phase
let capturedSnapshots: NativeInstanceSnapshot[] | undefined;
const v2Diagnostics: HotReloadDiagnostic[] = [];

if (internals.client.captureInstanceStates) {
  try {
    capturedSnapshots = await internals.client.captureInstanceStates();
  } catch (err) {
    v2Diagnostics.push({
      code: 'HR_CAPTURE_FAILED',
      message: `Capture failed: ${toErrorMessage(err)}`,
    });
  }
}
```

After the `client.reload()` call, add matching and restore:

```ts
// V2 matching + restore
let instancesRestored: number | undefined;
let instancesUnmatched: number | undefined;
let degraded: boolean | undefined;

if (capturedSnapshots && internals.getInstanceSlots && internals.client.restoreInstanceStates) {
  const newSlots = internals.getInstanceSlots();
  const { pairs, unmatched } = matchSnapshots(capturedSnapshots, newSlots);
  instancesUnmatched = unmatched;

  try {
    const restoreResult = await internals.client.restoreInstanceStates(pairs);
    instancesRestored = pairs.length;
    v2Diagnostics.push(...restoreResult.diagnostics);
  } catch (err) {
    v2Diagnostics.push({
      code: 'HR_RESTORE_FAILED',
      message: `Restore failed: ${toErrorMessage(err)}`,
    });
  }
} else if (internals.client.captureInstanceStates === undefined && internals.getInstanceSlots) {
  // V2 runtime but no native V2 methods — degraded
  degraded = true;
  v2Diagnostics.push({
    code: 'HR_DEGRADED',
    message: 'V2 hot reload not available: native captureInstanceStates not implemented',
  });
}
```

Add the `matchSnapshots` helper function:

```ts
function matchSnapshots(
  oldSnapshots: readonly NativeInstanceSnapshot[],
  newSlots: readonly InstanceStateSnapshot[],
): { pairs: InstanceRestorePair[]; unmatched: number } {
  const pairs: InstanceRestorePair[] = [];
  let unmatched = 0;

  for (const old of oldSnapshots) {
    // Build a match key from the slot metadata
    // We need to find the compilerSlotKey for the old snapshot.
    // Old snapshots come from native and don't have compilerSlotKey.
    // We need to look up old slots (pre-capture) to find the key.
    // Actually, the matching must happen with the old slot metadata.
    // Let's iterate new slots and match by (className, compilerSlotKey).
  }

  // The design says: match old snapshots to new by (className, compilerSlotKey).
  // Old snapshots have instanceId + className + properties.
  // We need oldSlots (from getInstanceSlots before reload) to get compilerSlotKey.
  // So we need to capture oldSlots before reload too.

  // Revised approach: capture both native props and TS slot metadata before reload.
  // Then match old (className, compilerSlotKey) → new (className, compilerSlotKey).

  return { pairs, unmatched };
}
```

**Important design note:** The orchestrator needs BOTH native property snapshots AND TS slot metadata (which contains compilerSlotKey) from BEFORE reload to match against new slots AFTER reload. The flow should be:

1. Before reload: `getInstanceSlots()` → oldSlots (has compilerSlotKey)
2. Before reload: `captureInstanceStates()` → nativeSnapshots (has properties)
3. `client.reload()`
4. After reload: `getInstanceSlots()` → newSlots (has compilerSlotKey)
5. Match: old.className + old.compilerSlotKey → new.className + new.compilerSlotKey
6. `restoreInstanceStates(pairs)` where each pair = { newInstanceId, old.properties }

- [ ] **Step 2: Implement complete V2 reload flow**

Rewrite the `reload()` method in `createHotReloadOrchestrator` to implement:

```ts
// In the success branch (client is connected):

// Phase 1: Capture (before reload)
let oldSlots: InstanceStateSnapshot[] | undefined;
let capturedSnapshots: NativeInstanceSnapshot[] | undefined;
const v2Diagnostics: HotReloadDiagnostic[] = [];
let degraded: boolean | undefined;

if (internals.getInstanceSlots && internals.client.captureInstanceStates) {
  oldSlots = internals.getInstanceSlots();
  try {
    capturedSnapshots = await internals.client.captureInstanceStates();
  } catch (err) {
    v2Diagnostics.push({
      code: 'HR_CAPTURE_FAILED',
      message: `Capture failed: ${toErrorMessage(err)}`,
    });
  }
} else if (internals.getInstanceSlots && !internals.client.captureInstanceStates) {
  degraded = true;
  v2Diagnostics.push({
    code: 'HR_DEGRADED',
    message: 'V2 hot reload degraded: native captureInstanceStates not available',
  });
}

// Phase 2: Reload
const clientResult = await internals.client.reload(changedFiles, outputDir);
const durationMs = performance.now() - start;

// Phase 3: Restore (after reload)
let instancesRestored: number | undefined;
let instancesUnmatched: number | undefined;

if (clientResult.success && capturedSnapshots && oldSlots && internals.client.restoreInstanceStates) {
  const newSlots = internals.getInstanceSlots!();
  const { pairs, unmatched } = matchSnapshots(capturedSnapshots, oldSlots, newSlots);
  instancesUnmatched = unmatched;

  if (pairs.length > 0) {
    try {
      const restoreResult = await internals.client.restoreInstanceStates(pairs);
      instancesRestored = pairs.length;
      v2Diagnostics.push(...restoreResult.diagnostics);
    } catch (err) {
      v2Diagnostics.push({
        code: 'HR_RESTORE_FAILED',
        message: `Restore failed: ${toErrorMessage(err)}`,
      });
    }
  } else {
    instancesRestored = 0;
  }
}

result = {
  success: clientResult.success,
  sequence: currentSequence,
  durationMs,
  filesReloaded: [...changedFiles],
  error: clientResult.error,
  instancesRestored,
  instancesUnmatched,
  degraded,
  diagnostics: v2Diagnostics.length > 0 ? v2Diagnostics : undefined,
};
```

Implement `matchSnapshots`:

```ts
function matchSnapshots(
  nativeSnapshots: readonly NativeInstanceSnapshot[],
  oldSlots: readonly InstanceStateSnapshot[],
  newSlots: readonly InstanceStateSnapshot[],
): { pairs: InstanceRestorePair[]; unmatched: number } {
  const pairs: InstanceRestorePair[] = [];
  let unmatched = 0;

  // Build lookup: old instanceId → (className, compilerSlotKey)
  const oldSlotMap = new Map<number, { className: string; compilerSlotKey?: string }>();
  for (const slot of oldSlots) {
    oldSlotMap.set(slot.instanceId, {
      className: slot.className,
      compilerSlotKey: slot.compilerSlotKey,
    });
  }

  // Build lookup: (className, compilerSlotKey) → new instanceId
  const newSlotMap = new Map<string, number>();
  for (const slot of newSlots) {
    if (slot.compilerSlotKey) {
      newSlotMap.set(`${slot.className}::${slot.compilerSlotKey}`, slot.instanceId);
    }
  }

  for (const snapshot of nativeSnapshots) {
    const oldMeta = oldSlotMap.get(snapshot.instanceId);
    if (!oldMeta?.compilerSlotKey) {
      unmatched++;
      continue;
    }

    const matchKey = `${oldMeta.className}::${oldMeta.compilerSlotKey}`;
    const newInstanceId = newSlotMap.get(matchKey);

    if (newInstanceId !== undefined) {
      pairs.push({
        instanceId: newInstanceId,
        properties: snapshot.properties,
      });
    } else {
      unmatched++;
    }
  }

  return { pairs, unmatched };
}
```

---

### Task 13: Add V2 hot reload orchestrator tests

**Files:**
- Modify: `tests/dev-tools/hot-reload-orchestrator.test.ts`

- [ ] **Step 1: Add V2 mock client factory**

```ts
import type {
  HotReloadDiagnostic,
  InstanceRestorePair,
  NativeInstanceSnapshot,
  RestoreDiagnostics,
} from '../../src/dev-tools/dev-types.js';
import type { InstanceStateSnapshot } from '../../native/npm/qmlts-host/src/v2-types.js';

function createV2MockClient(
  options: {
    connected?: boolean;
    shouldFail?: boolean;
    capturedSnapshots?: NativeInstanceSnapshot[];
    restoreDiagnostics?: HotReloadDiagnostic[];
  } = {},
): HotReloadClient & {
  calls: Array<{ files: readonly string[]; dir: string }>;
  captureCalls: number;
  restoreCalls: Array<InstanceRestorePair[]>;
} {
  const calls: Array<{ files: readonly string[]; dir: string }> = [];
  const restoreCalls: Array<InstanceRestorePair[]> = [];
  let captureCalls = 0;
  let disposed = false;

  return {
    calls,
    captureCalls: 0,
    restoreCalls,
    async reload(changedFiles, outputDir): Promise<HotReloadResult> {
      calls.push({ files: changedFiles, dir: outputDir });
      if (options.shouldFail) {
        return { success: false, durationMs: 1, error: 'Mock failure' };
      }
      return { success: true, durationMs: 5 };
    },
    isConnected() {
      return !disposed && (options.connected ?? true);
    },
    dispose() {
      disposed = true;
    },
    captureInstanceStates() {
      captureCalls++;
      return options.capturedSnapshots ?? [];
    },
    restoreInstanceStates(pairs) {
      restoreCalls.push(pairs);
      return { diagnostics: options.restoreDiagnostics ?? [] };
    },
  };
}
```

- [ ] **Step 2: Add HR-V2-01 through HR-V2-14 tests**

```ts
describe('HotReloadOrchestrator V2', () => {
  const makeOldSlots = (): InstanceStateSnapshot[] => [
    { instanceId: 0, className: 'LoginViewModel', compilerSlotKey: 'login-slot', properties: {} },
  ];

  const makeNewSlots = (): InstanceStateSnapshot[] => [
    { instanceId: 10, className: 'LoginViewModel', compilerSlotKey: 'login-slot', properties: {} },
  ];

  // HR-V2-01: Single-instance capture → reload → restore by compilerSlotKey
  test('HR-V2-01: single instance capture/restore by compilerSlotKey', async () => {
    const client = createV2MockClient({
      capturedSnapshots: [
        { instanceId: 0, className: 'LoginViewModel', properties: { username: 'test' } },
      ],
    });
    let slotsPhase = 'old';
    const orch = createHotReloadOrchestrator({
      client,
      getInstanceSlots: () =>
        slotsPhase === 'old' ? makeOldSlots() : makeNewSlots(),
    });
    // After reload, switch to new slots
    const origReload = client.reload.bind(client);
    client.reload = async (f, d) => {
      const r = await origReload(f, d);
      slotsPhase = 'new';
      return r;
    };

    const result = await orch.reload(['file.ts'], '/output');
    expect(result.success).toBe(true);
    expect(result.instancesRestored).toBe(1);
    expect(result.instancesUnmatched).toBe(0);
    expect(client.restoreCalls.length).toBe(1);
    expect(client.restoreCalls[0]![0]!.instanceId).toBe(10);
    expect(client.restoreCalls[0]![0]!.properties).toEqual({ username: 'test' });
  });

  // HR-V2-05: Same className but missing compilerSlotKey → NO restore
  test('HR-V2-05: missing compilerSlotKey → no match', async () => {
    const client = createV2MockClient({
      capturedSnapshots: [
        { instanceId: 0, className: 'LoginViewModel', properties: { username: 'test' } },
      ],
    });
    // Old slots have no compilerSlotKey
    const orch = createHotReloadOrchestrator({
      client,
      getInstanceSlots: () => [
        { instanceId: 0, className: 'LoginViewModel', properties: {} },
      ],
    });
    const result = await orch.reload(['file.ts'], '/output');
    expect(result.instancesUnmatched).toBe(1);
    expect(result.instancesRestored).toBe(0);
  });

  // HR-V2-08: V2 mode with missing native capture/restore → degraded
  test('HR-V2-08: missing native V2 methods → degraded', async () => {
    const client = createMockClient(); // V1-only client
    const orch = createHotReloadOrchestrator({
      client,
      getInstanceSlots: () => makeOldSlots(),
    });
    const result = await orch.reload(['file.ts'], '/output');
    expect(result.success).toBe(true);
    expect(result.degraded).toBe(true);
    expect(result.diagnostics).toBeDefined();
    expect(result.instancesRestored).toBeUndefined();
  });

  // HR-V2-09: Build failure → no capture/restore
  test('HR-V2-09: build failure → no capture/restore', async () => {
    const client = createV2MockClient({ shouldFail: true });
    let captured = false;
    const origCapture = client.captureInstanceStates;
    client.captureInstanceStates = () => {
      captured = true;
      return origCapture!.call(client);
    };
    const orch = createHotReloadOrchestrator({
      client,
      getInstanceSlots: () => makeOldSlots(),
    });
    const result = await orch.reload(['file.ts'], '/output');
    expect(result.success).toBe(false);
    // Note: capture happens BEFORE reload, so it may still fire.
    // The key is that restore does NOT fire on failure.
    expect(client.restoreCalls.length).toBe(0);
  });

  // HR-V2-11: Result includes instancesRestored/instancesUnmatched
  test('HR-V2-11: result includes V2 counts', async () => {
    const client = createV2MockClient({
      capturedSnapshots: [
        { instanceId: 0, className: 'LoginViewModel', properties: { username: 'a' } },
        { instanceId: 1, className: 'CounterViewModel', properties: { count: 5 } },
      ],
    });
    let phase = 'old';
    const orch = createHotReloadOrchestrator({
      client,
      getInstanceSlots: () => {
        if (phase === 'old') {
          return [
            { instanceId: 0, className: 'LoginViewModel', compilerSlotKey: 'login-slot', properties: {} },
            { instanceId: 1, className: 'CounterViewModel', compilerSlotKey: 'counter-slot', properties: {} },
          ];
        }
        return [
          { instanceId: 10, className: 'LoginViewModel', compilerSlotKey: 'login-slot', properties: {} },
          // CounterViewModel removed after reload
        ];
      },
    });
    const origReload = client.reload.bind(client);
    client.reload = async (f, d) => {
      const r = await origReload(f, d);
      phase = 'new';
      return r;
    };
    const result = await orch.reload(['file.ts'], '/output');
    expect(result.instancesRestored).toBe(1);
    expect(result.instancesUnmatched).toBe(1);
  });

  // HR-V2-14: V1 flat behavior preserved
  test('HR-V2-14: V1 client without getInstanceSlots → no V2 fields', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });
    const result = await orch.reload(['file.ts'], '/output');
    expect(result.instancesRestored).toBeUndefined();
    expect(result.instancesUnmatched).toBeUndefined();
    expect(result.degraded).toBeUndefined();
    expect(result.diagnostics).toBeUndefined();
  });
});
```

- [ ] **Step 3: Run tests**

```powershell
bun test tests/dev-tools/hot-reload-orchestrator.test.ts 2>&1 | Select-Object -Last 30
```

---

### Checkpoint 4: Dev Tools Instance Targeting

---

### Task 14: Upgrade PerfProfiler with instance tags

**Files:**
- Modify: `src/dev-tools/dev-types.ts`
- Modify: `src/dev-tools/perf-profiler.ts`

- [ ] **Step 1: Add instance fields to PerfRecord and PerfSpan**

In `dev-types.ts`, update `PerfRecord`:

```ts
export interface PerfRecord {
  readonly name: string;
  readonly category: PerfCategory;
  readonly startMs: number;
  readonly durationMs: number;
  readonly metadata?: Readonly<Record<string, string | number | boolean>>;
  // V2 instance context
  readonly instanceId?: number;
  readonly className?: string;
  readonly compilerSlotKey?: string;
}
```

Update `PerfSpan`:

```ts
export interface PerfSpan {
  end(): void;
  addMetadata(key: string, value: string | number | boolean): void;
  setInstanceContext?(instanceId: number, className: string, compilerSlotKey?: string): void;
}
```

Add instance filter methods to `PerfProfiler`:

```ts
export interface PerfProfiler {
  startSpan(name: string, category: PerfCategory): PerfSpan;
  getRecords(): readonly PerfRecord[];
  getSummary(): PerfSummary;
  clear(): void;
  exportChromeTrace(): string;
  // V2 instance filtering
  getRecordsByInstance?(instanceId: number): readonly PerfRecord[];
  getRecordsByClass?(className: string): readonly PerfRecord[];
  getRecordsBySlotKey?(slotKey: string): readonly PerfRecord[];
}
```

- [ ] **Step 2: Implement instance context in perf-profiler.ts**

Update `MutableRecord`:

```ts
interface MutableRecord {
  name: string;
  category: PerfCategory;
  startMs: number;
  durationMs: number;
  metadata: Record<string, string | number | boolean>;
  ended: boolean;
  instanceId?: number;
  className?: string;
  compilerSlotKey?: string;
}
```

Update `startSpan` to include `setInstanceContext`:

```ts
return {
  end(): void { /* existing */ },
  addMetadata(key, value): void { /* existing */ },
  setInstanceContext(instanceId: number, className: string, compilerSlotKey?: string): void {
    if (record.ended) return;
    record.instanceId = instanceId;
    record.className = className;
    record.compilerSlotKey = compilerSlotKey;
  },
};
```

Update `getRecords()` to include instance fields, `exportChromeTrace()` to include them in args.

Add filter methods:

```ts
getRecordsByInstance(instanceId: number): readonly PerfRecord[] {
  return records.filter((r) => r.instanceId === instanceId).map(/* same map as getRecords */);
},
getRecordsByClass(className: string): readonly PerfRecord[] {
  return records.filter((r) => r.className === className).map(/* ... */);
},
getRecordsBySlotKey(slotKey: string): readonly PerfRecord[] {
  return records.filter((r) => r.compilerSlotKey === slotKey).map(/* ... */);
},
```

---

### Task 15: Upgrade DevConsole with instance tags

**Files:**
- Modify: `src/dev-tools/dev-console.ts`

- [ ] **Step 1: Add instance-tagged formatting**

Add a helper function:

```ts
function formatInstanceTag(ctx?: InstanceContext): string {
  if (!ctx) return '';
  return `[${ctx.className}#${ctx.instanceId}] `;
}
```

Add `InstanceContext` import from `./dev-types.js`.

Update `DevConsole` interface in `dev-types.ts` to add optional instance context to message methods:

```ts
export interface DevConsole {
  // existing methods...
  info(message: string, instanceContext?: InstanceContext): void;
  warn(message: string, instanceContext?: InstanceContext): void;
  error(message: string, instanceContext?: InstanceContext): void;
  debug(message: string, instanceContext?: InstanceContext): void;
  // ...
}
```

In `dev-console.ts`, update the `info`/`warn`/`error`/`debug` implementations to prepend the instance tag when present.

---

### Task 16: Upgrade ErrorOverlay with instance context

**Files:**
- Modify: `src/dev-tools/error-overlay.ts`

- [ ] **Step 1: Add instance context to formatOverlayErrors**

Update `formatOverlayErrors`:

```ts
export function formatOverlayErrors(
  errors: readonly OverlayError[],
  instanceContext?: InstanceContext,
): string {
  if (errors.length === 0) {
    return 'Unknown error';
  }

  const parts: string[] = [];
  if (instanceContext) {
    parts.push(`[${instanceContext.className}#${instanceContext.instanceId}]`);
    parts.push('');
  }

  // existing error formatting...
}
```

Add `InstanceContext` import. The `ErrorOverlay.show()` interface does NOT change (no breaking change); the context is threaded through internal helpers when available.

---

### Task 17: Upgrade REPL with instance selector

**Files:**
- Modify: `src/dev-tools/dev-types.ts`
- Modify: `src/dev-tools/repl.ts`

- [ ] **Step 1: Add selector options to REPL**

In `dev-types.ts`, add to `QmltsRepl`:

```ts
export interface QmltsRepl {
  start(): Promise<void>;
  stop(): Promise<void>;
  eval(input: string, options?: ReplEvalOptions): Promise<ReplResult>;
  setMode(mode: ReplMode): void;
  readonly mode: ReplMode;
  readonly history: readonly string[];
}

export interface ReplEvalOptions {
  readonly selector?: string;
}
```

In `repl.ts`, add selector parameter to `eval()` (V1 behavior: selector ignored).

---

### Task 18: Add dev tools instance targeting tests

**Files:**
- Modify: `tests/dev-tools/perf-profiler.test.ts`
- Modify: `tests/dev-tools/dev-console.test.ts`
- Modify: `tests/dev-tools/error-overlay.test.ts`

- [ ] **Step 1: PerfProfiler instance tag tests**

```ts
test('PP-V2-01: span with instance context includes instanceId in record', () => {
  const profiler = createPerfProfiler();
  const span = profiler.startSpan('test', 'compile');
  span.setInstanceContext?.(42, 'LoginViewModel', 'login-slot');
  span.end();
  const records = profiler.getRecords();
  expect(records[0]!.instanceId).toBe(42);
  expect(records[0]!.className).toBe('LoginViewModel');
  expect(records[0]!.compilerSlotKey).toBe('login-slot');
});

test('PP-V2-02: getRecordsByInstance filters correctly', () => {
  const profiler = createPerfProfiler();
  const s1 = profiler.startSpan('a', 'compile');
  s1.setInstanceContext?.(1, 'A');
  s1.end();
  const s2 = profiler.startSpan('b', 'compile');
  s2.setInstanceContext?.(2, 'B');
  s2.end();
  expect(profiler.getRecordsByInstance?.(1).length).toBe(1);
  expect(profiler.getRecordsByInstance?.(2).length).toBe(1);
});

test('PP-V2-03: Chrome trace includes instance args', () => {
  const profiler = createPerfProfiler();
  const span = profiler.startSpan('test', 'compile');
  span.setInstanceContext?.(42, 'Login');
  span.end();
  const trace = JSON.parse(profiler.exportChromeTrace());
  expect(trace.traceEvents[0].args.instanceId).toBe(42);
});
```

- [ ] **Step 2: DevConsole instance tag tests**

```ts
test('DC-V2-01: info with instance context includes tag', () => {
  const output: string[] = [];
  const console = createDevConsole({ write: (t) => output.push(t), color: false });
  console.info('test message', { instanceId: 42, className: 'LoginViewModel' });
  expect(output.some((line) => line.includes('[LoginViewModel#42]'))).toBe(true);
});
```

- [ ] **Step 3: ErrorOverlay instance context tests**

```ts
test('EO-V2-01: formatOverlayErrors includes instance context tag', () => {
  const errors: OverlayError[] = [
    { file: 'a.ts', line: 1, column: 1, message: 'err', severity: 'error' },
  ];
  const result = formatOverlayErrors(errors, { instanceId: 42, className: 'Login' });
  expect(result).toContain('[Login#42]');
});
```

- [ ] **Step 4: Run all dev-tools tests**

```powershell
bun test tests/dev-tools/ 2>&1 | Select-Object -Last 30
```

---

### Checkpoint 5: DevServer/DevSession V2 Integration

---

### Task 19: Update DevServer for V2 status states

**Files:**
- Modify: `src/dev-tools/dev-server.ts`

- [ ] **Step 1: Add V2 status transitions**

In `performHotReload`, add V2 status transitions around the orchestrator call:

```ts
// Before orchestrator.reload():
if (internals.getInstanceSlots) {
  transition(internals, 'capturing-state', {});
}

// ... orchestrator.reload() ...

// After reload success, before emitting hot-reload event:
if (internals.getInstanceSlots && result.instancesRestored !== undefined) {
  transition(internals, 'restoring-state', {});
}
```

Ensure that `ServerInternals` can hold `getInstanceSlots`.

- [ ] **Step 2: Thread V2 context through DevServerOptions**

Add to `DevServerOptions`:

```ts
export interface DevServerOptions {
  // ...existing...
  /** V2: function to get current instance slot metadata for hot reload matching */
  readonly getInstanceSlots?: () => InstanceStateSnapshot[];
}
```

Thread this to the hot reload orchestrator options when creating it.

---

### Task 20: Add DevServer V2 tests

**Files:**
- Modify: `tests/dev-tools/dev-server.test.ts`

- [ ] **Step 1: Add V2 status sequence test**

```ts
test('DS-V2-01: V2 hot reload emits capturing-state and restoring-state', async () => {
  // Create dev server with V2 client and getInstanceSlots
  // Trigger rebuild + hot reload
  // Assert status sequence: building → capturing-state → reloading → restoring-state → running
});

test('DS-V2-02: build failure → no capturing-state emitted', async () => {
  // Create dev server with build that fails
  // Assert: building → error, no capturing-state
});

test('DS-V2-03: V1 mode → no V2 status states', async () => {
  // Create dev server without getInstanceSlots
  // Assert: building → reloading → running (no V2 states)
});
```

- [ ] **Step 2: Run tests**

```powershell
bun test tests/dev-tools/dev-server.test.ts 2>&1 | Select-Object -Last 30
```

---

### Checkpoint 6: Exports + Full Verification + Commit/Push/PR

---

### Task 21: Update barrel exports

**Files:**
- Modify: `src/dev-tools/index.ts`

- [ ] **Step 1: Export new types and functions**

Add to index.ts:

```ts
export type {
  HotReloadDiagnostic,
  InstanceContext,
  InstanceRestorePair,
  NativeInstanceSnapshot,
  ReplEvalOptions,
  RestoreDiagnostics,
} from './dev-types.js';
export {
  isSelectorError,
  parseInstanceSelector,
  resolveInstanceSelector,
} from './instance-selector.js';
export type {
  InstanceSelector,
  InstanceSelectorKind,
  SelectorError,
  SelectorErrorCode,
} from './instance-selector.js';
```

---

### Task 22: Full verification

- [ ] **Step 1: TypeScript typecheck**

```powershell
npx tsc --noEmit 2>&1 | Select-Object -Last 10
```

- [ ] **Step 2: Biome format + check**

```powershell
bunx biome format --write src/ tests/ 2>&1 | Select-Object -Last 5
bunx biome check --fix src/ tests/ 2>&1 | Select-Object -Last 5
```

- [ ] **Step 3: Full TS test suite**

```powershell
bun test 2>&1 | Select-Object -Last 30
```

Expected: All ~1826+ tests pass (including ~160+ dev-tools tests unchanged + new V2 tests).

- [ ] **Step 4: Rust clippy**

```powershell
cargo clippy -p qmlts-host --features mock-qt -- -D warnings 2>&1 | Select-Object -Last 10
cargo clippy -p qmlts-host-generated -- -D warnings 2>&1 | Select-Object -Last 10
```

- [ ] **Step 5: Rust tests**

```powershell
cargo test -p qmlts-host --features mock-qt 2>&1 | Select-Object -Last 20
cargo test -p qmlts-host-generated 2>&1 | Select-Object -Last 10
```

---

### Task 23: Commit, push, and open PR

- [ ] **Step 1: Stage and commit**

```powershell
cd C:\MyFile\DevAll\QmlTS
git add -A
git status
git commit -m "feat: upgrade dev tools and hot reload to V2 instance-scoped semantics

- Add V2StatePropertyDescriptor and state_properties to V2BridgeDescriptor
- Add qmlts_v2_read_properties / qmlts_v2_write_properties C++ FFI + mock-qt
- Add captureInstanceStates / restoreInstanceStates engine methods + N-API exports
- Add instance selector parsing and resolution (parseInstanceSelector, resolveInstanceSelector)
- Upgrade hot reload orchestrator for V2 capture → match → restore flow
- Add HotReloadDiagnostic, NativeInstanceSnapshot, InstanceRestorePair types
- Add V2 status states (capturing-state, restoring-state) to DevServer
- Add instance targeting to REPL, ErrorOverlay, DevConsole, PerfProfiler
- Add captureInstanceStates / restoreInstanceStates to V2NativeBindings + HotReloadClient
- V1 behavior fully preserved
- Comprehensive tests for all V2 additions

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

- [ ] **Step 2: Push**

```powershell
git push -u origin step8/v2-dev-tools-hot-reload
```

- [ ] **Step 3: Open PR**

Create PR targeting `main` with title: "feat: Step 8 — V2 dev tools & hot reload instance-scoped semantics". Do NOT merge.
