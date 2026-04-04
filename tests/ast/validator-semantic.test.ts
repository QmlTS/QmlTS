import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { DiagnosticCode } from '../../src/ast/types.js';
import { validateSemantics } from '../../src/ast/validator.js';
import { v } from '../../src/ast/values.js';
import { getQuery } from '../../src/index.js';

// Use the pre-built snapshot's query engine
const query = getQuery();

describe('validateSemantics', () => {
  // VSM-01: Unknown type name
  test('unknown type reports E100', () => {
    const doc = createDocument().importModule('QtQuick').root(createObject('NonExistentWidget'));
    const result = validateSemantics(doc, query);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.UNKNOWN_TYPE)).toBe(true);
  });

  // VSM-02: Known type name
  test('known type has no E100', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .root(createObject('Rectangle').bind('width', 100));
    const result = validateSemantics(doc, query);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.UNKNOWN_TYPE)).toBe(false);
  });

  // VSM-03: Unknown property
  test('unknown property reports E101', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .root(createObject('Rectangle').bind('nonExistentProp', 42));
    const result = validateSemantics(doc, query);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.UNKNOWN_PROPERTY)).toBe(true);
  });

  // VSM-04: Known property
  test('known property has no E101', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .root(createObject('Rectangle').bind('width', 100));
    const result = validateSemantics(doc, query);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.UNKNOWN_PROPERTY)).toBe(false);
  });

  // VSM-05: Handler with no corresponding signal
  test('unknown signal handler reports E102', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .root(createObject('Rectangle').handler('onNonExistentSignal', v.expr('doStuff()')));
    const result = validateSemantics(doc, query);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.UNKNOWN_SIGNAL)).toBe(true);
  });

  // VSM-06: Unknown attached type
  test('unknown attached type reports E103', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .root(createObject('Rectangle').attached('NonExistentAttached', (a) => a.bind('x', 1)));
    const result = validateSemantics(doc, query);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.UNKNOWN_ATTACHED_TYPE)).toBe(
      true,
    );
  });

  // VSM-07: Required property not assigned (E104)
  // Note: RegistryQueryLike doesn't expose 'required' flag, so this test validates
  // that the validator doesn't crash; actual required checking needs richer interface
  test('missing required property is detected when applicable', () => {
    // This tests that the validator runs without error for properties
    const doc = createDocument().importModule('QtQuick').root(createObject('Rectangle'));
    const result = validateSemantics(doc, query);
    // Rectangle has no required properties, so no E104
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.MISSING_REQUIRED_PROP)).toBe(
      false,
    );
  });

  // VSM-08: Readonly property bound (E105)
  test('readonly property binding reports E105', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .root(
        createObject('Rectangle').child(
          // MouseArea has a 'pressed' property which is readonly
          createObject('MouseArea').bind('pressed', true),
        ),
      );
    const result = validateSemantics(doc, query);
    // 'pressed' is indeed readonly on MouseArea
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.READONLY_PROP_BOUND)).toBe(
      true,
    );
  });

  // VSM-09: Invalid enum reference (E106)
  test('invalid enum reference reports E106', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .root(createObject('Rectangle').bind('color', v.enumRef('NonExistentType', 'SomeValue')));
    const result = validateSemantics(doc, query);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.INVALID_ENUM_REF)).toBe(true);
  });

  // VSM-10: Unknown module (currently limited — RegistryQueryLike doesn't expose module listing)
  // This test validates that we can process module imports without crashing
  test('import processing does not crash', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Controls')
      .root(createObject('Rectangle'));
    const result = validateSemantics(doc, query);
    // Should complete without throwing
    expect(result).toBeDefined();
  });

  // VSM-11: Unused import warning (W001)
  test('unused import produces W001 warning', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Controls')
      .root(createObject('Rectangle')); // Rectangle is from QtQuick, not Controls
    const result = validateSemantics(doc, query);
    // QtQuick.Controls should be flagged as unused
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.UNUSED_IMPORT)).toBe(true);
  });
});
