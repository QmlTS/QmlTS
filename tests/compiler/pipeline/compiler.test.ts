import { describe, expect, test } from 'bun:test';
import { compileSource } from '../../../src/compiler/pipeline/compiler.js';
import { findSource, findTarget } from '../../../src/compiler/pipeline/source-map.js';

// Helper: a minimal TS source with a View using DSL factories
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

// View + ViewModel in the same source
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

// Invalid source with unknown type
const INVALID_VIEW_SOURCE = `
import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';

export default function BrokenView() {
  return Rectangle()
    .unknownProperty(42);
}
`;

describe('Compiler Pipeline', () => {
  describe('compileSource', () => {
    // CP-04: compileSource returns CompilationUnit with all fields populated
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

    // CP-05: valid input → no error diagnostics
    test('CP-05: valid input produces no error-level diagnostics', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE);
      const errors = unit.diagnostics.filter((d) => d.severity === 'error');
      expect(errors.length).toBe(0);
    });

    // CP-01 (inline variant): compileSource with Rectangle/Text → expected QML structure
    test('CP-01: simple view generates correct QML structure', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE);

      // Must contain import
      expect(unit.qmlContent).toContain('import QtQuick');
      // Must contain root Rectangle
      expect(unit.qmlContent).toContain('Rectangle {');
      // Must contain bindings
      expect(unit.qmlContent).toContain('width: 400');
      expect(unit.qmlContent).toContain('height: 300');
      // Must contain child Text
      expect(unit.qmlContent).toContain('Text {');
    });

    // CP-03 (inline variant): View with ViewModel → correct QML + schema
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

    // CP-02 (inline variant): Schema has correct IDs and structure
    test('CP-02: generated schema has stable commandId/effectId', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);

      expect(unit.schema).toBeDefined();
      const schema = unit.schema!;

      // States have memberIds
      for (const state of schema.states) {
        expect(state.memberId).toBeNumber();
        expect(state.name).toBeTruthy();
        expect(state.qmlType).toBeTruthy();
      }

      // Commands have commandIds
      for (const cmd of schema.commands) {
        expect(cmd.commandId).toBeNumber();
        expect(cmd.name).toBeTruthy();
      }

      // Effects have effectIds
      for (const eff of schema.effects) {
        expect(eff.effectId).toBeNumber();
        expect(eff.name).toBeTruthy();
      }
    });

    // CP-06: invalid source → diagnostics with errors
    test('CP-06: invalid source produces error diagnostics', () => {
      const unit = compileSource(INVALID_VIEW_SOURCE);
      // The property 'unknownProperty' should trigger a warning/error
      // from the transformer validation (unknown property on Rectangle)
      const allDiags = unit.diagnostics;
      expect(allDiags.length).toBeGreaterThan(0);
    });

    // CP-09: source map generation
    test('CP-09: compileSource with sourceMap option generates source map', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, {
        codegen: { sourceMap: true },
      });

      expect(unit.sourceMap).toBeDefined();
      const map = unit.sourceMap!;
      expect(map.mappings.length).toBeGreaterThan(0);

      // Verify some mappings exist with correct kinds
      const kinds = new Set(map.mappings.map((m) => m.kind));
      // Should have at least bindings and child mappings
      expect(kinds.size).toBeGreaterThan(0);

      // Verify findSource/findTarget work
      const firstMapping = map.mappings[0]!;
      const source = findSource(map, firstMapping.target.line, firstMapping.target.column);
      expect(source).toBeDefined();

      const target = findTarget(map, firstMapping.source.line, firstMapping.source.column);
      expect(target).toBeDefined();
    });

    // ViewModel lifecycle injection
    test('view with ViewModel lifecycle gets Component.onCompleted injected', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);

      // The ViewModel has onMounted → should inject Component.onCompleted
      expect(unit.qmlContent).toContain('Component.onCompleted');
    });

    // Connections injection for effects
    test('view with ViewModel effects gets Connections injected', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE);

      // The ViewModel has an @Effect → should inject Connections
      expect(unit.qmlContent).toContain('Connections');
    });

    // No ViewModel → no Connections, no lifecycle
    test('view without ViewModel produces clean QML', () => {
      const unit = compileSource(SIMPLE_VIEW_SOURCE);

      expect(unit.qmlContent).not.toContain('Connections');
      expect(unit.qmlContent).not.toContain('Component.onCompleted');
      expect(unit.viewModelName).toBeUndefined();
      expect(unit.schema).toBeUndefined();
    });
  });
});
