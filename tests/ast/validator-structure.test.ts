import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { DiagnosticCode } from '../../src/ast/types.js';
import { validateStructure } from '../../src/ast/validator.js';
import { v } from '../../src/ast/values.js';

describe('validateStructure', () => {
  // VS-01
  test('valid minimal document', () => {
    const doc = createDocument().importModule('QtQuick').root(createObject('Item'));
    const result = validateStructure(doc);
    expect(result.valid).toBe(true);
    expect(result.diagnostics).toEqual([]);
  });

  // VS-02
  test('duplicate id', () => {
    const doc = createDocument().root(
      createObject('Column').id('root').child(createObject('Text').id('root')),
    );
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.DUPLICATE_ID)).toBe(true);
  });

  // VS-03
  test('invalid id (uppercase start)', () => {
    const doc = createDocument().root(createObject('Item').id('Root'));
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.INVALID_ID_FORMAT)).toBe(true);
  });

  // VS-04
  test('invalid id (special characters)', () => {
    const doc = createDocument().root(createObject('Item').id('my-id'));
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.INVALID_ID_FORMAT)).toBe(true);
  });

  // VS-05
  test('duplicate property name', () => {
    const doc = createDocument().root(
      createObject('Item')
        .declareProp('int', 'count', v.num(0))
        .declareProp('string', 'count', v.str('')),
    );
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.DUPLICATE_PROPERTY_NAME)).toBe(
      true,
    );
  });

  // VS-06
  test('duplicate signal name', () => {
    const doc = createDocument().root(
      createObject('Item').declareSignal('clicked').declareSignal('clicked'),
    );
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.DUPLICATE_SIGNAL_NAME)).toBe(
      true,
    );
  });

  // VS-07
  test('handler name not starting with "on"', () => {
    const doc = createDocument().root(createObject('Item').handler('clicked', v.expr('doStuff()')));
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.INVALID_HANDLER_NAME)).toBe(
      true,
    );
  });

  // VS-08
  test('required + readonly conflict', () => {
    const doc = createDocument().root(
      createObject('Item').declareProp('int', 'x', undefined, { required: true, readonly: true }),
    );
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(
      result.diagnostics.some((d) => d.code === DiagnosticCode.REQUIRED_READONLY_CONFLICT),
    ).toBe(true);
  });

  // VS-09
  test('invalid import path (empty)', () => {
    const doc = createDocument()
      .addImport({ kind: 'Import', importKind: 'directory', path: '' })
      .root(createObject('Item'));
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.INVALID_IMPORT_PATH)).toBe(
      true,
    );
  });

  // VS-10
  test('duplicate enum member', () => {
    const doc = createDocument().root(
      createObject('Item').declareEnum('Status', [
        { name: 'Idle' },
        { name: 'Loading' },
        { name: 'Idle' },
      ]),
    );
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.DUPLICATE_ENUM_MEMBER)).toBe(
      true,
    );
  });

  // VS-11
  test('inline component name lowercase', () => {
    const doc = createDocument().root(
      createObject('Item').inlineComponent('badge', createObject('Rectangle')),
    );
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.INVALID_COMPONENT_NAME)).toBe(
      true,
    );
  });

  // VS-12
  test('max nesting exceeded', () => {
    // Build a 51-level deep nesting
    let inner = createObject('Item');
    for (let i = 0; i < 51; i++) {
      inner = createObject('Item').child(inner);
    }
    const doc = createDocument().root(inner);
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.some((d) => d.code === DiagnosticCode.MAX_NESTING_EXCEEDED)).toBe(
      true,
    );
  });

  // VS-13
  test('complex valid document (all syntax)', () => {
    const doc = createDocument()
      .pragma('Singleton')
      .pragma('ComponentBehavior', 'Bound')
      .importModule('QtQuick')
      .importModule('QtQuick.Controls', '6.0')
      .importJs('logic.js', 'Logic')
      .root(
        createObject('ApplicationWindow')
          .id('window')
          .declareProp('int', 'count', v.num(0))
          .declareProp('string', 'title', v.str('App'), { required: true })
          .declareAlias('labelText', 'label.text')
          .bind('width', 800)
          .bind('height', 600)
          .bind('visible', true)
          .grouped('anchors', (g) => g.bind('fill', v.expr('parent')))
          .attached('Layout', (a) => a.bind('fillWidth', true))
          .declareSignal('submitted', [{ name: 'data', type: 'var' }])
          .handler('onClicked', v.block('count++'))
          .fn(
            'calculate',
            { params: [{ name: 'x', type: 'int' }], returnType: 'real' },
            'return x * 2',
          )
          .declareEnum('Status', [{ name: 'Idle' }, { name: 'Loading' }, { name: 'Error' }])
          .inlineComponent('Badge', createObject('Rectangle').bind('radius', 10))
          .comment('Children')
          .child(
            createObject('Column').child(
              createObject('Text').id('label').bind('text', v.str('hello')),
            ),
          ),
      );
    const result = validateStructure(doc);
    expect(result.valid).toBe(true);
    expect(result.diagnostics).toEqual([]);
  });

  // VS-14
  test('multiple errors reported simultaneously', () => {
    const doc = createDocument()
      .addImport({ kind: 'Import', importKind: 'directory', path: '' })
      .root(
        createObject('Item')
          .id('Root') // E002
          .declareProp('int', 'x', undefined, { required: true, readonly: true }) // E006
          .declareSignal('clicked')
          .declareSignal('clicked') // E004
          .inlineComponent('badge', createObject('Rectangle')) // E009
          .declareEnum('E', [{ name: 'A' }, { name: 'A' }]), // E008
      );
    const result = validateStructure(doc);
    expect(result.valid).toBe(false);
    expect(result.diagnostics.length).toBeGreaterThanOrEqual(5);
    const codes = result.diagnostics.map((d) => d.code);
    expect(codes).toContain(DiagnosticCode.INVALID_ID_FORMAT);
    expect(codes).toContain(DiagnosticCode.REQUIRED_READONLY_CONFLICT);
    expect(codes).toContain(DiagnosticCode.DUPLICATE_SIGNAL_NAME);
    expect(codes).toContain(DiagnosticCode.INVALID_COMPONENT_NAME);
    expect(codes).toContain(DiagnosticCode.DUPLICATE_ENUM_MEMBER);
    expect(codes).toContain(DiagnosticCode.INVALID_IMPORT_PATH);
  });
});
