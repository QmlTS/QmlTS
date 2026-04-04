import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { astSerializer } from '../../src/ast/serializer.js';
import { v } from '../../src/ast/values.js';

function makeDoc() {
  return createDocument()
    .importModule('QtQuick')
    .root(
      createObject('Rectangle')
        .id('root')
        .bind('width', 400)
        .bind('color', v.str('red'))
        .declareSignal('clicked')
        .child(createObject('Text').bind('text', v.str('hello'))),
    );
}

describe('AstSerializer', () => {
  // SR-01
  test('serialize → deserialize roundtrip', () => {
    const doc = makeDoc();
    const json = astSerializer.serialize(doc);
    const restored = astSerializer.deserialize(json);
    expect(restored).toEqual(doc);
  });

  // SR-02
  test('all node types survive serialization', () => {
    const doc = createDocument()
      .pragma('Singleton')
      .importModule('QtQuick')
      .importDirectory('../components')
      .importJs('logic.js', 'Logic')
      .root(
        createObject('Item')
          .id('root')
          .declareProp('int', 'count', v.num(0))
          .declareAlias('text', 'label.text')
          .bind('width', 400)
          .grouped('anchors', (g) => g.bind('fill', v.expr('parent')))
          .attached('Layout', (a) => a.bind('fillWidth', true))
          .arrayBind('states', [{ kind: 'object', node: createObject('State').build() }])
          .behaviorOn('opacity', createObject('NumberAnimation'))
          .declareSignal('clicked', [{ name: 'x', type: 'int' }])
          .handler('onClicked', v.block('count++'))
          .fn('calc', { params: [{ name: 'a', type: 'int' }], returnType: 'real' }, 'return a * 2')
          .declareEnum('Status', [{ name: 'Idle' }, { name: 'Active', value: 1 }])
          .inlineComponent('Badge', createObject('Rectangle'))
          .comment('section')
          .child(createObject('Text')),
      );
    const json = astSerializer.serialize(doc);
    const restored = astSerializer.deserialize(json);
    expect(restored).toEqual(doc);
  });

  // SR-03
  test('pretty=true produces formatted JSON', () => {
    const doc = createDocument().root(createObject('Item'));
    const pretty = astSerializer.serialize(doc, true);
    expect(pretty).toContain('\n');
    expect(pretty).toContain('  ');
  });

  // SR-04
  test('clone produces deep copy', () => {
    const doc = makeDoc();
    const cloned = astSerializer.clone(doc);
    expect(cloned).toEqual(doc);
    // Modify clone, original should be unchanged
    cloned.rootObject.typeName = 'Modified';
    expect(doc.rootObject.typeName).toBe('Rectangle');
  });

  // SR-05
  test('deserialize invalid JSON throws', () => {
    expect(() => astSerializer.deserialize('not json')).toThrow('Invalid JSON');
  });

  // SR-06
  test('deserialize missing kind field throws', () => {
    expect(() => astSerializer.deserialize('{"foo": "bar"}')).toThrow("missing 'kind'");
  });
});
