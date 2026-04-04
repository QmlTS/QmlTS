import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { v } from '../../src/ast/values.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §2: Builder — Document (BD-01..BD-10)
// ═══════════════════════════════════════════════════════════════════════════

describe('DocumentBuilder', () => {
  // BD-01
  test('empty document with only root object', () => {
    const doc = createDocument().root(createObject('Item'));
    expect(doc.kind).toBe('Document');
    expect(doc.pragmas).toEqual([]);
    expect(doc.imports).toEqual([]);
    expect(doc.rootObject.kind).toBe('ObjectDefinition');
    expect(doc.rootObject.typeName).toBe('Item');
  });

  // BD-02
  test('pragma Singleton', () => {
    const doc = createDocument().pragma('Singleton').root(createObject('Item'));
    expect(doc.pragmas).toHaveLength(1);
    expect(doc.pragmas[0]!.name).toBe('Singleton');
    expect(doc.pragmas[0]!.value).toBeUndefined();
  });

  // BD-03
  test('pragma ComponentBehavior: Bound', () => {
    const doc = createDocument().pragma('ComponentBehavior', 'Bound').root(createObject('Item'));
    expect(doc.pragmas[0]!.name).toBe('ComponentBehavior');
    expect(doc.pragmas[0]!.value).toBe('Bound');
  });

  // BD-04
  test('all 8 pragma types', () => {
    const doc = createDocument()
      .pragma('Singleton')
      .pragma('ComponentBehavior', 'Bound')
      .pragma('ListPropertyAssignBehavior', 'Replace')
      .pragma('FunctionSignatureBehavior', 'Enforced')
      .pragma('NativeMethodBehavior', 'AcceptThisObject')
      .pragma('ValueTypeBehavior', 'Copy')
      .pragma('NativeTextRendering')
      .pragma('Translator', 'MyContext')
      .root(createObject('Item'));
    expect(doc.pragmas).toHaveLength(8);
    expect(doc.pragmas[0]!.name).toBe('Singleton');
    expect(doc.pragmas[1]!.value).toBe('Bound');
    expect(doc.pragmas[6]!.name).toBe('NativeTextRendering');
    expect(doc.pragmas[6]!.value).toBeUndefined();
    expect(doc.pragmas[7]!.name).toBe('Translator');
    expect(doc.pragmas[7]!.value).toBe('MyContext');
  });

  // BD-05
  test('importModule basic', () => {
    const doc = createDocument().importModule('QtQuick').root(createObject('Item'));
    expect(doc.imports).toHaveLength(1);
    expect(doc.imports[0]!.importKind).toBe('module');
    expect(doc.imports[0]!.moduleUri).toBe('QtQuick');
    expect(doc.imports[0]!.version).toBeUndefined();
  });

  // BD-06
  test('importModule with version', () => {
    const doc = createDocument().importModule('QtQuick', '6.0').root(createObject('Item'));
    expect(doc.imports[0]!.version).toBe('6.0');
  });

  // BD-07
  test('importModule with qualifier', () => {
    const doc = createDocument()
      .importModule('QtQuick', undefined, 'QQ')
      .root(createObject('Item'));
    expect(doc.imports[0]!.qualifier).toBe('QQ');
    expect(doc.imports[0]!.version).toBeUndefined();
  });

  // BD-08
  test('importDirectory', () => {
    const doc = createDocument().importDirectory('../components').root(createObject('Item'));
    expect(doc.imports[0]!.importKind).toBe('directory');
    expect(doc.imports[0]!.path).toBe('../components');
  });

  // BD-09
  test('importJs', () => {
    const doc = createDocument().importJs('logic.js', 'Logic').root(createObject('Item'));
    expect(doc.imports[0]!.importKind).toBe('javascript');
    expect(doc.imports[0]!.path).toBe('logic.js');
    expect(doc.imports[0]!.qualifier).toBe('Logic');
  });

  // BD-10
  test('multiple imports preserve order', () => {
    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Controls')
      .importJs('utils.js', 'Utils')
      .root(createObject('Item'));
    expect(doc.imports).toHaveLength(3);
    expect(doc.imports[0]!.moduleUri).toBe('QtQuick');
    expect(doc.imports[1]!.moduleUri).toBe('QtQuick.Controls');
    expect(doc.imports[2]!.path).toBe('utils.js');
  });
});

// ═══════════════════════════════════════════════════════════════════════════
//  §3: Builder — Object (BO-01..BO-44)
// ═══════════════════════════════════════════════════════════════════════════

describe('ObjectBuilder', () => {
  // §3.1 Basic construction

  // BO-01
  test('createObject("Rectangle")', () => {
    const obj = createObject('Rectangle').build();
    expect(obj.kind).toBe('ObjectDefinition');
    expect(obj.typeName).toBe('Rectangle');
    expect(obj.members).toEqual([]);
  });

  // BO-02
  test('.id("root")', () => {
    const obj = createObject('Rectangle').id('root').build();
    expect(obj.members).toHaveLength(1);
    expect(obj.members[0]).toEqual({ kind: 'IdAssignment', id: 'root' });
  });

  // BO-03
  test('.bind("width", 400)', () => {
    const obj = createObject('Rectangle').bind('width', 400).build();
    expect(obj.members).toHaveLength(1);
    const binding = obj.members[0]!;
    expect(binding.kind).toBe('Binding');
    if (binding.kind === 'Binding') {
      expect(binding.property).toBe('width');
      expect(binding.value).toEqual({ kind: 'number', value: 400 });
    }
  });

  // BO-04
  test('.bind("visible", true)', () => {
    const obj = createObject('Rectangle').bind('visible', true).build();
    const binding = obj.members[0]!;
    if (binding.kind === 'Binding') {
      expect(binding.value).toEqual({ kind: 'boolean', value: true });
    }
  });

  // BO-05
  test('.bind("model", null)', () => {
    const obj = createObject('Rectangle').bind('model', null).build();
    const binding = obj.members[0]!;
    if (binding.kind === 'Binding') {
      expect(binding.value).toEqual({ kind: 'null' });
    }
  });

  // BO-06
  test('.bind("text", v.str("hello"))', () => {
    const obj = createObject('Text').bind('text', v.str('hello')).build();
    const binding = obj.members[0]!;
    if (binding.kind === 'Binding') {
      expect(binding.value).toEqual({ kind: 'string', value: 'hello' });
    }
  });

  // BO-07
  test('.bind("width", v.expr("parent.width"))', () => {
    const obj = createObject('Item').bind('width', v.expr('parent.width')).build();
    const binding = obj.members[0]!;
    if (binding.kind === 'Binding') {
      expect(binding.value).toEqual({ kind: 'expression', code: 'parent.width' });
    }
  });

  // BO-08
  test('.bind("onClicked", v.block("count++"))', () => {
    const obj = createObject('Item').bind('onClicked', v.block('count++')).build();
    const binding = obj.members[0]!;
    if (binding.kind === 'Binding') {
      expect(binding.value).toEqual({ kind: 'script-block', code: 'count++' });
    }
  });

  // BO-09
  test('members preserve order', () => {
    const obj = createObject('Rectangle').id('root').bind('width', 400).bind('height', 300).build();
    expect(obj.members).toHaveLength(3);
    expect(obj.members[0]!.kind).toBe('IdAssignment');
    expect(obj.members[1]!.kind).toBe('Binding');
    expect(obj.members[2]!.kind).toBe('Binding');
    if (obj.members[1]!.kind === 'Binding') {
      expect(obj.members[1]!.property).toBe('width');
    }
    if (obj.members[2]!.kind === 'Binding') {
      expect(obj.members[2]!.property).toBe('height');
    }
  });

  // §3.2 Property declarations

  // BO-10
  test('declareProp with initial value', () => {
    const obj = createObject('Item').declareProp('int', 'count', v.num(0)).build();
    const prop = obj.members[0]!;
    expect(prop.kind).toBe('PropertyDeclaration');
    if (prop.kind === 'PropertyDeclaration') {
      expect(prop.name).toBe('count');
      expect(prop.typeName).toBe('int');
      expect(prop.initialValue).toEqual({ kind: 'number', value: 0 });
    }
  });

  // BO-11
  test('declareProp required without initial value', () => {
    const obj = createObject('Item')
      .declareProp('string', 'name', undefined, { required: true })
      .build();
    const prop = obj.members[0]!;
    if (prop.kind === 'PropertyDeclaration') {
      expect(prop.isRequired).toBe(true);
      expect(prop.initialValue).toBeUndefined();
    }
  });

  // BO-12
  test('declareProp readonly with expression', () => {
    const obj = createObject('Item')
      .declareProp('real', 'area', v.expr('w*h'), { readonly: true })
      .build();
    const prop = obj.members[0]!;
    if (prop.kind === 'PropertyDeclaration') {
      expect(prop.isReadonly).toBe(true);
      expect(prop.initialValue).toEqual({ kind: 'expression', code: 'w*h' });
    }
  });

  // BO-13
  test('declareProp list type', () => {
    const obj = createObject('Item').declareProp('list<Item>', 'items').build();
    const prop = obj.members[0]!;
    if (prop.kind === 'PropertyDeclaration') {
      expect(prop.typeName).toBe('list<Item>');
    }
  });

  // BO-14
  test('declareProp default', () => {
    const obj = createObject('Item')
      .declareProp('var', 'data', undefined, { default: true })
      .build();
    const prop = obj.members[0]!;
    if (prop.kind === 'PropertyDeclaration') {
      expect(prop.isDefault).toBe(true);
    }
  });

  // BO-15
  test('declareAlias', () => {
    const obj = createObject('Item').declareAlias('text', 'label.text').build();
    const alias = obj.members[0]!;
    expect(alias.kind).toBe('PropertyAlias');
    if (alias.kind === 'PropertyAlias') {
      expect(alias.name).toBe('text');
      expect(alias.targetPath).toBe('label.text');
    }
  });

  // BO-16
  test('declareAlias readonly', () => {
    const obj = createObject('Item')
      .declareAlias('content', 'inner.children', { readonly: true })
      .build();
    const alias = obj.members[0]!;
    if (alias.kind === 'PropertyAlias') {
      expect(alias.isReadonly).toBe(true);
    }
  });

  // BO-17
  test('all modifier combinations', () => {
    const obj = createObject('Item')
      .declareProp('int', 'a', undefined, { default: true, readonly: true })
      .declareProp('int', 'b', undefined, { virtual: true, override: true })
      .declareProp('int', 'c', undefined, { final: true })
      .build();

    const a = obj.members[0]!;
    const b = obj.members[1]!;
    const c = obj.members[2]!;

    if (a.kind === 'PropertyDeclaration') {
      expect(a.isDefault).toBe(true);
      expect(a.isReadonly).toBe(true);
    }
    if (b.kind === 'PropertyDeclaration') {
      expect(b.isVirtual).toBe(true);
      expect(b.isOverride).toBe(true);
    }
    if (c.kind === 'PropertyDeclaration') {
      expect(c.isFinal).toBe(true);
    }
  });

  // §3.3 Grouped and attached bindings

  // BO-20
  test('grouped binding', () => {
    const obj = createObject('Item')
      .grouped('anchors', (g) => g.bind('fill', v.expr('parent')))
      .build();
    const grouped = obj.members[0]!;
    expect(grouped.kind).toBe('GroupedBinding');
    if (grouped.kind === 'GroupedBinding') {
      expect(grouped.group).toBe('anchors');
      expect(grouped.bindings).toHaveLength(1);
      expect(grouped.bindings[0]!.property).toBe('fill');
    }
  });

  // BO-21
  test('grouped multiple bindings', () => {
    const obj = createObject('Item')
      .grouped('anchors', (g) => {
        g.bind('left', v.expr('parent.left')).bind('right', v.expr('parent.right'));
      })
      .build();
    const grouped = obj.members[0]!;
    if (grouped.kind === 'GroupedBinding') {
      expect(grouped.bindings).toHaveLength(2);
    }
  });

  // BO-22
  test('attached binding', () => {
    const obj = createObject('Item')
      .attached('Layout', (a) => a.bind('fillWidth', true))
      .build();
    const attached = obj.members[0]!;
    expect(attached.kind).toBe('AttachedBinding');
    if (attached.kind === 'AttachedBinding') {
      expect(attached.attachedTypeName).toBe('Layout');
      expect(attached.bindings).toHaveLength(1);
      expect(attached.bindings[0]!.property).toBe('fillWidth');
    }
  });

  // BO-23
  test('attached with handler', () => {
    const obj = createObject('Item')
      .attached('Component', (a) => {
        a.handler('onCompleted', v.expr('init()'));
      })
      .build();
    const attached = obj.members[0]!;
    if (attached.kind === 'AttachedBinding') {
      expect(attached.bindings).toHaveLength(1);
      expect(attached.bindings[0]!.property).toBe('onCompleted');
    }
  });

  // BO-24
  test('arrayBind', () => {
    const obj = createObject('Item')
      .arrayBind('states', [
        { kind: 'object', node: createObject('State').bind('name', v.str('active')).build() },
        { kind: 'object', node: createObject('State').bind('name', v.str('inactive')).build() },
      ])
      .build();
    const arr = obj.members[0]!;
    expect(arr.kind).toBe('ArrayBinding');
    if (arr.kind === 'ArrayBinding') {
      expect(arr.property).toBe('states');
      expect(arr.elements).toHaveLength(2);
    }
  });

  // BO-25
  test('behaviorOn', () => {
    const obj = createObject('Item')
      .behaviorOn('opacity', createObject('NumberAnimation').bind('duration', 150))
      .build();
    const behavior = obj.members[0]!;
    expect(behavior.kind).toBe('BehaviorOn');
    if (behavior.kind === 'BehaviorOn') {
      expect(behavior.property).toBe('opacity');
      expect(behavior.members).toHaveLength(1);
      expect(behavior.members[0]!.kind).toBe('ObjectDefinition');
    }
  });

  // §3.4 Signals and functions

  // BO-30
  test('declareSignal no params', () => {
    const obj = createObject('Item').declareSignal('clicked').build();
    const sig = obj.members[0]!;
    expect(sig.kind).toBe('SignalDeclaration');
    if (sig.kind === 'SignalDeclaration') {
      expect(sig.name).toBe('clicked');
      expect(sig.parameters).toEqual([]);
    }
  });

  // BO-31
  test('declareSignal with params', () => {
    const obj = createObject('Item')
      .declareSignal('submitted', [
        { name: 'data', type: 'var' },
        { name: 'index', type: 'int' },
      ])
      .build();
    const sig = obj.members[0]!;
    if (sig.kind === 'SignalDeclaration') {
      expect(sig.parameters).toHaveLength(2);
      expect(sig.parameters[0]).toEqual({ name: 'data', type: 'var' });
      expect(sig.parameters[1]).toEqual({ name: 'index', type: 'int' });
    }
  });

  // BO-32
  test('handler expression form', () => {
    const obj = createObject('Item').handler('onClicked', v.expr('doStuff()')).build();
    const handler = obj.members[0]!;
    expect(handler.kind).toBe('SignalHandler');
    if (handler.kind === 'SignalHandler') {
      expect(handler.name).toBe('onClicked');
      expect(handler.body.form).toBe('expression');
      if (handler.body.form === 'expression') {
        expect(handler.body.code).toBe('doStuff()');
      }
    }
  });

  // BO-33
  test('handler block form', () => {
    const obj = createObject('Item').handler('onClicked', v.block('count++')).build();
    const handler = obj.members[0]!;
    if (handler.kind === 'SignalHandler') {
      expect(handler.body.form).toBe('block');
      if (handler.body.form === 'block') {
        expect(handler.body.code).toBe('count++');
      }
    }
  });

  // BO-34
  test('handler arrow form', () => {
    const obj = createObject('Item')
      .handler('onClicked', { params: ['event'], body: 'handlePress(event)', isBlock: true })
      .build();
    const handler = obj.members[0]!;
    if (handler.kind === 'SignalHandler') {
      expect(handler.body.form).toBe('arrow');
      if (handler.body.form === 'arrow') {
        expect(handler.body.parameters).toEqual(['event']);
        expect(handler.body.body).toBe('handlePress(event)');
        expect(handler.body.isBlock).toBe(true);
      }
    }
  });

  // BO-35
  test('fn with params and return type', () => {
    const obj = createObject('Item')
      .fn('calculate', { params: [{ name: 'x', type: 'int' }], returnType: 'real' }, 'return x * 2')
      .build();
    const fn = obj.members[0]!;
    expect(fn.kind).toBe('FunctionDeclaration');
    if (fn.kind === 'FunctionDeclaration') {
      expect(fn.name).toBe('calculate');
      expect(fn.parameters).toEqual([{ name: 'x', type: 'int' }]);
      expect(fn.returnType).toBe('real');
      expect(fn.body).toBe('return x * 2');
    }
  });

  // BO-36
  test('fn without return type', () => {
    const obj = createObject('Item')
      .fn('doSomething', { params: [] }, 'console.log("done")')
      .build();
    const fn = obj.members[0]!;
    if (fn.kind === 'FunctionDeclaration') {
      expect(fn.returnType).toBeUndefined();
    }
  });

  // §3.5 Children and components

  // BO-40
  test('child object', () => {
    const obj = createObject('Column')
      .child(createObject('Text').bind('text', v.str('hello')))
      .build();
    expect(obj.members).toHaveLength(1);
    const child = obj.members[0]!;
    expect(child.kind).toBe('ObjectDefinition');
    if (child.kind === 'ObjectDefinition') {
      expect(child.typeName).toBe('Text');
    }
  });

  // BO-41
  test('3-level nesting', () => {
    const obj = createObject('Column')
      .child(createObject('Row').child(createObject('Text').bind('text', v.str('deep'))))
      .build();
    const row = obj.members[0]!;
    expect(row.kind).toBe('ObjectDefinition');
    if (row.kind === 'ObjectDefinition') {
      const text = row.members[0]!;
      expect(text.kind).toBe('ObjectDefinition');
      if (text.kind === 'ObjectDefinition') {
        expect(text.typeName).toBe('Text');
      }
    }
  });

  // BO-42
  test('inlineComponent', () => {
    const obj = createObject('Item')
      .inlineComponent('Badge', createObject('Rectangle').bind('radius', 10))
      .build();
    const comp = obj.members[0]!;
    expect(comp.kind).toBe('InlineComponent');
    if (comp.kind === 'InlineComponent') {
      expect(comp.name).toBe('Badge');
      expect(comp.body.typeName).toBe('Rectangle');
    }
  });

  // BO-43
  test('declareEnum', () => {
    const obj = createObject('Item')
      .declareEnum('Status', [{ name: 'Idle' }, { name: 'Loading' }, { name: 'Error', value: 99 }])
      .build();
    const en = obj.members[0]!;
    expect(en.kind).toBe('EnumDeclaration');
    if (en.kind === 'EnumDeclaration') {
      expect(en.name).toBe('Status');
      expect(en.members).toHaveLength(3);
      expect(en.members[2]).toEqual({ name: 'Error', value: 99 });
    }
  });

  // BO-44
  test('comment', () => {
    const obj = createObject('Item').comment('section header').build();
    const c = obj.members[0]!;
    expect(c.kind).toBe('Comment');
    if (c.kind === 'Comment') {
      expect(c.text).toBe('section header');
      expect(c.style).toBe('line');
    }
  });
});
