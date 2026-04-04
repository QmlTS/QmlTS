// Golden file generation script
// Run: bun scripts/generate-golden.ts
// Generates AST JSON fixtures and corresponding golden QML files

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { astSerializer, createDocument, createObject, v } from '../src/ast/index.js';
import { emit } from '../src/emitter/index.js';

const AST_DIR = join(import.meta.dir, '..', 'tests', 'emitter', 'fixtures', 'ast');
const GOLDEN_DIR = join(import.meta.dir, '..', 'tests', 'emitter', 'fixtures', 'golden');

mkdirSync(AST_DIR, { recursive: true });
mkdirSync(GOLDEN_DIR, { recursive: true });

function save(
  name: string,
  doc: ReturnType<typeof createDocument>['root'] extends (o: infer _) => infer R ? R : never,
) {
  const json = astSerializer.serialize(doc, true);
  const qml = emit(doc);
  writeFileSync(join(AST_DIR, `${name}.json`), json, 'utf-8');
  writeFileSync(join(GOLDEN_DIR, `${name}.qml`), qml, 'utf-8');
  console.log(`  ✓ ${name}`);
}

console.log('Generating golden files...');

// 1. minimal — just a root object
save('minimal', createDocument().root(createObject('Item')));

// 2. full-syntax — every syntax node at least once
save(
  'full-syntax',
  createDocument()
    .pragma('Singleton')
    .pragma('ComponentBehavior', 'Bound')
    .importModule('QtQuick', '6.0')
    .importModule('QtQuick.Controls')
    .importDirectory('../components')
    .importJs('logic.js', 'Logic')
    .root(
      createObject('ApplicationWindow')
        .id('root')
        .declareProp('int', 'count', 0)
        .declareProp('string', 'title', v.str('My App'))
        .declareProp('list<Item>', 'items')
        .declareAlias('mainContent', 'contentArea.data')
        .declareSignal('activated', [
          { name: 'x', type: 'int' },
          { name: 'y', type: 'int' },
        ])
        .handler('onActivated', { params: ['x', 'y'], body: 'console.log(x, y)', isBlock: true })
        .bind('width', 800)
        .bind('height', 600)
        .bind('visible', true)
        .bind('opacity', v.expr('enabled ? 1.0 : 0.5'))
        .grouped('anchors', (g) => {
          g.bind('fill', v.expr('parent'));
        })
        .attached('Layout', (a) => {
          a.bind('fillWidth', true);
          a.bind('preferredHeight', 100);
        })
        .fn('doStuff', { params: [{ name: 'x', type: 'int' }], returnType: 'bool' }, 'return x > 0')
        .declareEnum('Status', [
          { name: 'Idle', value: 0 },
          { name: 'Loading', value: 1 },
          { name: 'Done', value: 2 },
        ])
        .child(
          createObject('Rectangle')
            .id('contentArea')
            .bind('color', v.str('white'))
            .child(createObject('Text').bind('text', v.str('Hello')).bind('font.pixelSize', 24)),
        )
        .inlineComponent('MyButton', createObject('Button').bind('text', v.str('Click'))),
    ),
);

// 3. nested — 5 levels deep
save(
  'nested',
  createDocument()
    .importModule('QtQuick')
    .root(
      createObject('Item').child(
        createObject('Column').child(
          createObject('Row').child(
            createObject('Rectangle').child(createObject('Text').bind('text', v.str('Deep'))),
          ),
        ),
      ),
    ),
);

// 4. all-bindings — every BindingValue kind
save(
  'all-bindings',
  createDocument()
    .importModule('QtQuick')
    .root(
      createObject('Item')
        .bind('width', 400)
        .bind('opacity', v.num(0.5))
        .bind('x', v.num(-10))
        .bind('text', v.str('hello'))
        .bind('visible', true)
        .bind('enabled', false)
        .bind('model', null)
        .bind('wrapMode', v.enumRef('Text', 'WordWrap'))
        .bind('color', v.expr('enabled ? "blue" : "gray"'))
        .bind('onClicked', v.block('count++'))
        .grouped('anchors', (g) => {
          g.bind('left', v.expr('parent.left'));
          g.bind('right', v.expr('parent.right'));
        })
        .attached('Layout', (a) => {
          a.bind('fillWidth', true);
        })
        .arrayBind('states', [v.str('idle'), v.str('active')])
        .behaviorOn('opacity', createObject('NumberAnimation').bind('duration', 200)),
    ),
);

// 5. all-members — every ObjectMember type
save(
  'all-members',
  createDocument()
    .importModule('QtQuick')
    .root(
      createObject('Item')
        .id('root')
        .declareProp('int', 'count', 0)
        .declareProp('string', 'name')
        .declareProp('real', 'area', v.expr('w * h'), { readonly: true })
        .declareProp('string', 'title', undefined, { required: true })
        .declareAlias('text', 'label.text')
        .declareSignal('clicked')
        .declareSignal('moved', [
          { name: 'x', type: 'int' },
          { name: 'y', type: 'int' },
        ])
        .handler('onClicked', v.expr('doStuff()'))
        .handler('onMoved', v.block('console.log("moved")'))
        .handler('onPressed', { params: ['event'], body: 'handle(event)', isBlock: true })
        .fn(
          'calculate',
          {
            params: [
              { name: 'a', type: 'int' },
              { name: 'b', type: 'int' },
            ],
            returnType: 'int',
          },
          'return a + b',
        )
        .fn('reset', {}, 'count = 0')
        .bind('width', 100)
        .bind('height', 200)
        .child(createObject('Rectangle').bind('color', v.str('red')))
        .inlineComponent('Badge', createObject('Text').bind('text', v.str('!')))
        .declareEnum('Direction', [
          { name: 'Up' },
          { name: 'Down' },
          { name: 'Left' },
          { name: 'Right' },
        ]),
    ),
);

// 6. comments — various comment positions
save(
  'comments',
  createDocument()
    .importModule('QtQuick')
    .root(
      createObject('Item')
        .comment('This is a line comment')
        .bind('width', 100)
        .comment('Block comment', 'block')
        .bind('height', 200)
        .addMember({
          kind: 'Binding',
          property: 'color',
          value: { kind: 'string', value: 'red' },
          leadingComments: ['Color binding below'],
        })
        .addMember({
          kind: 'Binding',
          property: 'opacity',
          value: { kind: 'number', value: 1.0 },
          trailingComment: 'full opacity',
        }),
    ),
);

// 7. normalized — same as all-members but with normalize=true
const normalizedDoc = createDocument()
  .importModule('QtQuick')
  .root(
    createObject('Item')
      .bind('width', 100)
      .child(createObject('Rectangle').bind('color', v.str('red')))
      .declareProp('int', 'count', 0)
      .handler('onClicked', v.expr('doStuff()'))
      .id('root')
      .declareSignal('clicked')
      .fn('calc', {}, 'return 42'),
  );

const normalizedJson = astSerializer.serialize(normalizedDoc, true);
const normalizedQml = emit(normalizedDoc, { normalize: true });
writeFileSync(join(AST_DIR, 'normalized.json'), normalizedJson, 'utf-8');
writeFileSync(join(GOLDEN_DIR, 'normalized.qml'), normalizedQml, 'utf-8');
console.log('  ✓ normalized');

console.log('Done! Generated 7 golden file pairs.');
