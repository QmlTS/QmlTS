import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { compile, compileFile, compileSource } from '../../../src/compiler/pipeline/compiler.js';
import { findSource, findTarget } from '../../../src/compiler/pipeline/source-map.js';

// ─── Inline source fixtures ────────────────────────────────────────────

const SIMPLE_VIEW_SOURCE = `
import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
import { Text } from '../../dsl/generated/QtQuick/Text.js';

export default function SimpleView() {
  return Rectangle()
    .width(400)
    .height(300)
    .children(
      Text().text("Hello")
    );
}
`;

const VIEW_WITH_VM_SOURCE = `
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

export class CounterViewModel {
  @State() count = 0;
  @State({ readonly: true }) label = "Counter";

  @Command()
  increment() { /* logic */ }

  @Effect()
  readonly onCountChanged = (..._args: unknown[]) => {};

  onMounted() { /* init */ }
}

export default function CounterView(vm: CounterViewModel) {
  return Rectangle()
    .width(300)
    .height(200)
    .children(
      Text().text(vm.count)
    );
}
`;

const INVALID_VIEW_SOURCE = `
import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';

export default function BrokenView() {
  return Rectangle()
    .unknownProperty(42);
}
`;

// ─── File fixture paths ────────────────────────────────────────────────

const FIXTURES_DIR = resolve(__dirname, 'fixtures');
const GOLDEN_DIR = join(FIXTURES_DIR, 'golden');
const TSCONFIG_PATH = join(FIXTURES_DIR, 'tsconfig.json');

function readGolden(name: string): string {
  return readFileSync(join(GOLDEN_DIR, name), 'utf-8').replace(/\r\n/g, '\n');
}

// ─── Tests ─────────────────────────────────────────────────────────────

describe('Compiler Pipeline', () => {
  describe('compileSource', () => {
    test('CP-04: compileSource returns CompilationUnit with all required fields', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE);
      expect(unit.sourceFile).toBeDefined();
      expect(unit.viewName).toBe('SimpleView');
      expect(unit.qmlOutputPath).toContain('.qml');
      expect(unit.qmlContent).toBeTruthy();
      expect(unit.qmlContent).toContain('Rectangle');
      expect(unit.qmlContent).toContain('width: 400');
      expect(unit.qmlContent).toContain('height: 300');
      expect(unit.qmlContent).toContain('Text');
      expect(unit.qmlContent).toContain('Hello');
      expect(unit.diagnostics).toBeDefined();
    });

    test('CP-05: valid input produces no error-level diagnostics', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE);
      const errors = unit.diagnostics.filter((d) => d.severity === 'error');
      expect(errors.length).toBe(0);
    });

    test('CP-01: simple view generates correct QML structure', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE);
      expect(unit.qmlContent).toContain('import QtQuick');
      expect(unit.qmlContent).toContain('Rectangle {');
      expect(unit.qmlContent).toContain('width: 400');
      expect(unit.qmlContent).toContain('height: 300');
      expect(unit.qmlContent).toContain('Text {');
    });

    test('CP-03: view with ViewModel generates QML with state bindings and schema', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);
      expect(unit.viewName).toBe('CounterView');
      expect(unit.viewModelName).toBe('CounterViewModel');
      expect(unit.qmlContent).toContain('Rectangle {');
      expect(unit.qmlContent).toContain('Text {');
      expect(unit.schema).toBeDefined();
      expect(unit.schema!.className).toBe('CounterViewModel');
      expect(unit.schema!.states.length).toBe(2);
      expect(unit.schema!.commands.length).toBe(1);
      expect(unit.schema!.effects.length).toBe(1);
    });

    test('CP-02: generated schema has stable commandId/effectId', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);
      expect(unit.schema).toBeDefined();
      const schema = unit.schema!;

      for (const state of schema.states) {
        expect(state.memberId).toBeNumber();
        expect(state.name).toBeTruthy();
        expect(state.qmlType).toBeTruthy();
      }
      for (const cmd of schema.commands) {
        expect(cmd.commandId).toBeNumber();
        expect(cmd.name).toBeTruthy();
      }
      for (const eff of schema.effects) {
        expect(eff.effectId).toBeNumber();
        expect(eff.name).toBeTruthy();
      }
    });

    test('CP-06: invalid source produces diagnostics', () => {
      const unit = compileSource(INVALID_VIEW_SOURCE);
      expect(unit.diagnostics.length).toBeGreaterThan(0);
    });

    test('CP-09: compileSource with sourceMap option generates source map', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, {
        codegen: { sourceMap: true },
      });
      expect(unit.sourceMap).toBeDefined();
      const map = unit.sourceMap!;
      expect(map.mappings.length).toBeGreaterThan(0);

      const kinds = new Set(map.mappings.map((m) => m.kind));
      expect(kinds.size).toBeGreaterThan(0);

      const firstMapping = map.mappings[0]!;
      const source = findSource(map, firstMapping.target.line, firstMapping.target.column);
      expect(source).toBeDefined();
      const target = findTarget(map, firstMapping.source.line, firstMapping.source.column);
      expect(target).toBeDefined();
    });

    test('view with ViewModel lifecycle gets Component.onCompleted injected', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);
      expect(unit.qmlContent).toContain('Component.onCompleted');
    });

    test('view with ViewModel effects gets Connections injected', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);
      expect(unit.qmlContent).toContain('Connections');
    });

    test('view without ViewModel produces clean QML', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE);
      expect(unit.qmlContent).not.toContain('Connections');
      expect(unit.qmlContent).not.toContain('Component.onCompleted');
      expect(unit.viewModelName).toBeUndefined();
      expect(unit.schema).toBeUndefined();
    });
  });

  describe('compileFile', () => {
    test('CP-01: compileFile LoginView produces correct QML structure', () => {
      const unit = compileFile(join(FIXTURES_DIR, 'LoginView.ts'), {
        diagnostics: { suppress: ['QMLTS-A011'] },
      });
      expect(unit.viewName).toBe('LoginView');
      expect(unit.qmlContent).toContain('import QtQuick');
      expect(unit.qmlContent).toContain('Rectangle {');
      expect(unit.qmlContent).toContain('width: 400');
      expect(unit.qmlContent).toContain('height: 300');
      expect(unit.qmlContent).toContain('Text {');
    });

    test('CP-03: compileFile CounterView produces correct QML structure', () => {
      const unit = compileFile(join(FIXTURES_DIR, 'CounterView.ts'), {
        diagnostics: { suppress: ['QMLTS-A011'] },
      });
      expect(unit.viewName).toBe('CounterView');
      expect(unit.qmlContent).toContain('Rectangle {');
      expect(unit.qmlContent).toContain('width: 200');
      expect(unit.qmlContent).toContain('Text {');
      expect(unit.qmlContent).toContain('vm.count');
    });

    test('compileFile returns correct sourceFile path', () => {
      const filePath = join(FIXTURES_DIR, 'LoginView.ts');
      const unit = compileFile(filePath, {
        diagnostics: { suppress: ['QMLTS-A011'] },
      });
      expect(unit.sourceFile).toBe(resolve(filePath));
    });

    test('compileFile with sourceMap produces mappings', () => {
      const unit = compileFile(join(FIXTURES_DIR, 'CounterView.ts'), {
        codegen: { sourceMap: true },
        diagnostics: { suppress: ['QMLTS-A011'] },
      });
      expect(unit.sourceMap).toBeDefined();
      expect(unit.sourceMap!.mappings.length).toBeGreaterThan(0);
    });
  });

  describe('compile (project)', () => {
    function compileProject() {
      return compile({
        inputDir: FIXTURES_DIR,
        outputDir: 'dist',
        tsconfigPath: TSCONFIG_PATH,
        diagnostics: { suppress: ['QMLTS-A011'] },
      });
    }

    test('CP-05: project compile succeeds with valid input', () => {
      const result = compileProject();
      expect(result.success).toBe(true);
      const errors = result.diagnostics.filter((d) => d.severity === 'error');
      expect(errors.length).toBe(0);
    });

    test('CP-01: LoginView QML matches golden file', () => {
      const result = compileProject();
      const loginUnit = result.units.find((u) => u.viewName === 'LoginView');
      expect(loginUnit).toBeDefined();
      expect(loginUnit!.qmlContent).toBe(readGolden('LoginView.qml'));
    });

    test('CP-03: CounterView QML matches golden file', () => {
      const result = compileProject();
      const counterUnit = result.units.find((u) => u.viewName === 'CounterView');
      expect(counterUnit).toBeDefined();
      expect(counterUnit!.qmlContent).toBe(readGolden('CounterView.qml'));
    });

    test('CP-02: LoginViewModel schema matches golden file', () => {
      const result = compileProject();
      const loginUnit = result.units.find((u) => u.viewModelName === 'LoginViewModel');
      expect(loginUnit).toBeDefined();
      expect(loginUnit!.schema).toBeDefined();
      const expectedSchema = JSON.parse(readGolden('LoginViewModel.schema.json'));
      expect(loginUnit!.schema).toEqual(expectedSchema);
    });

    test('CP-07: event-bindings matches golden file and IDs are consistent', () => {
      const result = compileProject();
      const expectedBindings = JSON.parse(readGolden('event-bindings.json'));
      expect(result.eventBindings).toEqual(expectedBindings);

      // Verify ID consistency between event-bindings and schemas
      const loginUnit = result.units.find((u) => u.viewModelName === 'LoginViewModel');
      expect(loginUnit?.schema).toBeDefined();

      const schemaCommandId = loginUnit!.schema!.commands[0]!.commandId;
      const bindingCommandId = result.eventBindings.commands.find(
        (c) => c.viewModelClass === 'LoginViewModel',
      )?.commandId;
      expect(schemaCommandId).toBe(bindingCommandId);

      const schemaEffectId = loginUnit!.schema!.effects[0]!.effectId;
      const bindingEffectId = result.eventBindings.effects.find(
        (e) => e.viewModelClass === 'LoginViewModel',
      )?.effectId;
      expect(schemaEffectId).toBe(bindingEffectId);
    });

    test('CP-08: compile produces correct stats', () => {
      const result = compileProject();
      expect(result.stats.totalViewModels).toBe(2);
      expect(result.stats.totalViews).toBe(2);
      expect(result.stats.totalStates).toBe(4);
      expect(result.stats.totalCommands).toBe(2);
      expect(result.stats.totalEffects).toBe(1);
      expect(result.stats.durationMs).toBeGreaterThanOrEqual(0);
    });

    test('View/ViewModel pairing: LoginView gets Connections + lifecycle', () => {
      const result = compileProject();
      const loginUnit = result.units.find((u) => u.viewName === 'LoginView');
      expect(loginUnit).toBeDefined();
      expect(loginUnit!.viewModelName).toBe('LoginViewModel');
      expect(loginUnit!.qmlContent).toContain('Connections');
      expect(loginUnit!.qmlContent).toContain('Component.onCompleted');
      expect(loginUnit!.schema).toBeDefined();
    });

    test('View/ViewModel pairing: CounterView gets schema', () => {
      const result = compileProject();
      const counterUnit = result.units.find((u) => u.viewName === 'CounterView');
      expect(counterUnit).toBeDefined();
      expect(counterUnit!.viewModelName).toBe('CounterViewModel');
      expect(counterUnit!.schema).toBeDefined();
      expect(counterUnit!.schema!.className).toBe('CounterViewModel');
    });

    test('output path mapping uses outputDir', () => {
      const result = compileProject();
      for (const unit of result.units) {
        if (unit.qmlContent) {
          expect(unit.qmlOutputPath).toContain('.qml');
        }
      }
    });

    test('CP-09: project compile with sourceMap produces correct kinds', () => {
      const result = compile({
        inputDir: FIXTURES_DIR,
        outputDir: 'dist',
        tsconfigPath: TSCONFIG_PATH,
        codegen: { sourceMap: true },
        diagnostics: { suppress: ['QMLTS-A011'] },
      });
      const loginUnit = result.units.find((u) => u.viewName === 'LoginView');
      expect(loginUnit?.sourceMap).toBeDefined();
      expect(loginUnit!.sourceMap!.mappings.length).toBeGreaterThan(0);

      const kinds = new Set(loginUnit!.sourceMap!.mappings.map((m) => m.kind));
      expect(kinds.has('binding') || kinds.has('state-binding') || kinds.has('child')).toBe(true);
    });
  });

  describe('DiagnosticReporter wiring', () => {
    test('warningsAsErrors escalates pipeline warnings', () => {
      const unit = compileSource(INVALID_VIEW_SOURCE, {
        diagnostics: { warningsAsErrors: true },
      });
      const warnings = unit.diagnostics.filter((d) => d.severity === 'warning');
      expect(warnings.length).toBe(0);
    });

    test('suppress filters specific diagnostic codes', () => {
      const unit = compileSource(INVALID_VIEW_SOURCE, {
        diagnostics: { suppress: ['QMLTS-T004'] },
      });
      const t004 = unit.diagnostics.filter((d) => d.code === 'QMLTS-T004');
      expect(t004.length).toBe(0);
    });
  });

  describe('Regression', () => {
    test('CP-12: compileFile single file regression', () => {
      const result = compileFile(join(FIXTURES_DIR, 'LoginView.ts'), {
        inputDir: FIXTURES_DIR,
        outputDir: 'dist',
        tsconfigPath: join(FIXTURES_DIR, 'tsconfig.json'),
        diagnostics: { suppress: ['QMLTS-A011'] },
      });

      expect(result.viewName).toBe('LoginView');
      expect(result.qmlContent).toContain('Rectangle');
      expect(result.qmlContent).toContain('vm.username');
      expect(result.diagnostics.filter((d) => d.severity === 'error')).toHaveLength(0);
    });
  });

  describe('V2 schema/IR metadata', () => {
    test('CP-13: V1 mode — no V2 metadata on CompilationUnit', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, { runtime: 'v1' });
      expect(unit.compilerSlotKey).toBeUndefined();
      expect(unit.moduleUri).toBeUndefined();
      expect(unit.viewModelNames).toBeUndefined();
      expect(unit.viewModelSlots).toBeUndefined();
      expect(unit.moduleImports).toBeUndefined();
      expect(unit.schema).toBeDefined();
      expect(unit.schema!.version).toBe(1);
    });

    test('CP-14: default (no runtime) — same as V1, no V2 metadata', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);
      expect(unit.compilerSlotKey).toBeUndefined();
      expect(unit.viewModelSlots).toBeUndefined();
      expect(unit.schema!.version).toBe(1);
    });

    test('CP-15: V2 mode — CompilationUnit has viewModelSlots with stable compilerSlotKey', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      });

      expect(unit.schema).toBeDefined();
      expect(unit.schema!.version).toBe(2);
      expect(unit.schema!.moduleUri).toBe('MyApp.ViewModels');
      expect(unit.schema!.moduleVersion).toEqual({ major: 1, minor: 0 });

      expect(unit.viewModelSlots).toBeDefined();
      expect(unit.viewModelSlots).toHaveLength(1);
      const slot = unit.viewModelSlots![0]!;
      expect(slot.viewName).toBe('CounterView');
      expect(slot.className).toBe('CounterViewModel');
      expect(slot.qmlId).toBe('__qmlts_vm0');
      expect(slot.compilerSlotKey).toBe('CounterView::__qmlts_vm0');
      expect(slot.ownership).toBe('owned');
      expect(slot.moduleUri).toBe('MyApp.ViewModels');
      expect(slot.moduleVersion).toEqual({ major: 1, minor: 0 });

      expect(unit.compilerSlotKey).toBe('CounterView::__qmlts_vm0');
      expect(unit.moduleUri).toBe('MyApp.ViewModels');
      expect(unit.viewModelNames).toEqual(['CounterViewModel']);
    });

    test('CP-16: V2 mode — moduleImports populated from schema', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: { prefix: 'TestApp', version: { major: 2, minor: 1 } },
      });

      expect(unit.moduleImports).toBeDefined();
      expect(unit.moduleImports).toHaveLength(1);
      expect(unit.moduleImports![0]!.moduleUri).toBe('TestApp.ViewModels');
      expect(unit.moduleImports![0]!.version).toBe('2.1');
    });

    test('CP-17: V2 mode — QML output is V2-shaped (differs from V1)', () => {
      const v1Unit = compileSource(VIEW_WITH_VM_SOURCE);
      const v2Unit = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      });

      // V2 output must differ from V1 output
      expect(v2Unit.qmlContent).not.toBe(v1Unit.qmlContent);

      // V2 output must contain V2 patterns
      expect(v2Unit.qmlContent).toContain('import MyApp.ViewModels 1.0');
      expect(v2Unit.qmlContent).toContain('CounterViewModel {');
      expect(v2Unit.qmlContent).toContain('id: __qmlts_vm0');
      expect(v2Unit.qmlContent).toContain('__qmlts_vm0.count');
      expect(v2Unit.qmlContent).toContain('__qmlts_vm0.onMounted()');

      // V2 output must NOT contain V1 patterns
      expect(v2Unit.qmlContent).not.toContain('vm.count');
      expect(v2Unit.qmlContent).not.toContain('target: __qmlts');
      expect(v2Unit.qmlContent).not.toContain('__qmlts.onMounted()');
      expect(v2Unit.qmlContent).not.toContain('__qmlts.invoke(');
    });

    test('CP-18: V2 mode — view without ViewModel has no slots or module metadata', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE, {
        runtime: 'v2',
        moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      });

      expect(unit.viewModelSlots).toBeUndefined();
      expect(unit.compilerSlotKey).toBeUndefined();
      expect(unit.moduleUri).toBeUndefined();
      expect(unit.viewModelNames).toBeUndefined();
      expect(unit.moduleImports).toBeUndefined();
    });

    test('CP-19: V2 slot parameterName matches View function parameter name', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      });

      expect(unit.viewModelSlots![0]!.parameterName).toBe('vm');
    });
  });

  describe('V2 compiler output', () => {
    // V2 project-level compile helper
    function compileV2Project() {
      return compile({
        inputDir: FIXTURES_DIR,
        outputDir: 'dist',
        tsconfigPath: TSCONFIG_PATH,
        runtime: 'v2',
        moduleConfig: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
        diagnostics: { suppress: ['QMLTS-A011'] },
      });
    }

    test('CP-V2-01: V2 CounterView QML matches golden file', () => {
      const result = compileV2Project();
      const unit = result.units.find((u) => u.viewName === 'CounterView');
      expect(unit).toBeDefined();
      expect(unit!.qmlContent).toBe(readGolden('CounterView.v2.qml'));
    });

    test('CP-V2-02: V2 LoginView QML matches golden file', () => {
      const result = compileV2Project();
      const unit = result.units.find((u) => u.viewName === 'LoginView');
      expect(unit).toBeDefined();
      expect(unit!.qmlContent).toBe(readGolden('LoginView.v2.qml'));
    });

    test('CP-V2-03: V2 output contains no vm.* bindings for ViewModel-backed views', () => {
      const result = compileV2Project();
      for (const unit of result.units) {
        if (unit.viewModelName) {
          expect(unit.qmlContent).not.toMatch(/\bvm\./);
        }
      }
    });

    test('CP-V2-04: V2 output contains no __qmlts.invoke or Connections { target: __qmlts }', () => {
      const result = compileV2Project();
      for (const unit of result.units) {
        expect(unit.qmlContent).not.toContain('__qmlts.invoke(');
        expect(unit.qmlContent).not.toContain('target: __qmlts');
      }
    });

    test('CP-V2-05: V2 mode with ViewModel but missing moduleConfig emits QMLTS-V007', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        // No moduleConfig — should trigger V007
      });

      const v007 = unit.diagnostics.find((d) => d.code === 'QMLTS-V007');
      expect(v007).toBeDefined();
      expect(v007!.severity).toBe('error');
      expect(v007!.message).toContain('CounterViewModel');
    });

    test('CP-V2-06: V1 golden output is unchanged when runtime is v1', () => {
      const result = compile({
        inputDir: FIXTURES_DIR,
        outputDir: 'dist',
        tsconfigPath: TSCONFIG_PATH,
        runtime: 'v1',
        diagnostics: { suppress: ['QMLTS-A011'] },
      });

      const counterUnit = result.units.find((u) => u.viewName === 'CounterView');
      const loginUnit = result.units.find((u) => u.viewName === 'LoginView');
      expect(counterUnit).toBeDefined();
      expect(loginUnit).toBeDefined();
      expect(counterUnit!.qmlContent).toBe(readGolden('CounterView.qml'));
      expect(loginUnit!.qmlContent).toBe(readGolden('LoginView.qml'));
    });

    test('CP-V2-07: V2 view without ViewModel has no module import or ViewModel block', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE, {
        runtime: 'v2',
        moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      });

      expect(unit.qmlContent).not.toContain('import MyApp.ViewModels');
      expect(unit.qmlContent).not.toContain('__qmlts_vm0');
      expect(unit.qmlContent).toContain('Rectangle {');
    });
  });
});
