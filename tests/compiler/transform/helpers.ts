import { RegistryQuery } from '../../../src/registry/registry-query.js';
import type {
  QmlEnum,
  QmlProperty,
  QmlRegistry,
  QmlSignal,
  QmlType,
  RegistryQueryInterface,
} from '../../../src/registry/types.js';

// ─── Helper factories ───────────────────────────────────────────────────

function makeProperty(name: string, type: string, opts: Partial<QmlProperty> = {}): QmlProperty {
  return {
    name,
    type,
    cppType: type,
    readonly: false,
    constant: false,
    required: false,
    final: false,
    pointer: false,
    list: false,
    hasNotify: true,
    hasBindable: false,
    ...opts,
  };
}

function makeSignal(name: string, params: { name: string; type: string }[] = []): QmlSignal {
  return {
    name,
    parameters: params.map((p) => ({
      name: p.name,
      type: p.type,
      cppType: p.type,
      pointer: false,
    })),
  };
}

function makeEnum(name: string, values: { name: string; value?: number }[]): QmlEnum {
  return {
    name,
    isFlag: false,
    isScoped: false,
    values: values.map((v) => ({ name: v.name, value: v.value })),
  };
}

function makeType(
  qualifiedName: string,
  qmlName: string,
  moduleUri: string,
  opts: {
    baseType?: string;
    properties?: QmlProperty[];
    signals?: QmlSignal[];
    enums?: QmlEnum[];
    creatable?: boolean;
    defaultProperty?: string;
    attachedType?: string;
  } = {},
): QmlType {
  return {
    qualifiedName,
    qmlName,
    moduleUri,
    accessSemantics: 'reference',
    exports: [{ module: moduleUri, name: qmlName, version: '6.11', revision: 0 }],
    creatable: opts.creatable ?? true,
    singleton: false,
    properties: opts.properties ?? [],
    signals: opts.signals ?? [],
    methods: [],
    enums: opts.enums ?? [],
    sources: [],
    baseType: opts.baseType,
    defaultProperty: opts.defaultProperty,
    attachedType: opts.attachedType,
  };
}

// ─── Mock Registry ──────────────────────────────────────────────────────

export function createMockRegistryQuery(): RegistryQueryInterface {
  const types: QmlType[] = [
    // Item (base type)
    makeType('QtQuick::Item', 'Item', 'QtQuick', {
      defaultProperty: 'children',
      properties: [
        makeProperty('width', 'real'),
        makeProperty('height', 'real'),
        makeProperty('visible', 'bool'),
        makeProperty('opacity', 'real'),
        makeProperty('x', 'real'),
        makeProperty('y', 'real'),
        makeProperty('children', 'list<Item>', { readonly: true, list: true }),
        makeProperty('anchors', 'QtQuick::Anchors'),
      ],
      signals: [],
    }),

    // Rectangle
    makeType('QtQuick::Rectangle', 'Rectangle', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [
        makeProperty('color', 'color'),
        makeProperty('radius', 'real'),
        makeProperty('border', 'QtQuick::BorderGroup'),
        makeProperty('gradient', 'var'),
      ],
      signals: [makeSignal('clicked')],
    }),

    // Text
    makeType('QtQuick::Text', 'Text', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [
        makeProperty('text', 'string'),
        makeProperty('color', 'color'),
        makeProperty('font', 'QtQuick::Font'),
        makeProperty('horizontalAlignment', 'int'),
      ],
      enums: [
        makeEnum('HAlignment', [
          { name: 'AlignLeft', value: 0 },
          { name: 'AlignHCenter', value: 1 },
          { name: 'AlignRight', value: 2 },
        ]),
      ],
    }),

    // MouseArea
    makeType('QtQuick::MouseArea', 'MouseArea', 'QtQuick', {
      baseType: 'QtQuick::Item',
      signals: [
        makeSignal('clicked', [{ name: 'mouse', type: 'var' }]),
        makeSignal('pressed'),
        makeSignal('released'),
      ],
    }),

    // Column
    makeType('QtQuick::Column', 'Column', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('spacing', 'real')],
    }),

    // Row
    makeType('QtQuick::Row', 'Row', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('spacing', 'real')],
    }),

    // LinearGradient
    makeType('QtQuick::LinearGradient', 'LinearGradient', 'QtQuick', {
      properties: [makeProperty('start', 'var'), makeProperty('end', 'var')],
    }),

    // Button (QtQuick.Controls)
    makeType('QtQuick.Controls::Button', 'Button', 'QtQuick.Controls', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('text', 'string'), makeProperty('enabled', 'bool')],
      signals: [makeSignal('clicked')],
    }),

    // Font (group type, not creatable)
    makeType('QtQuick::Font', 'Font', 'QtQuick', {
      creatable: false,
      properties: [
        makeProperty('pixelSize', 'int'),
        makeProperty('pointSize', 'real'),
        makeProperty('bold', 'bool'),
        makeProperty('family', 'string'),
      ],
    }),

    // BorderGroup (group type)
    makeType('QtQuick::BorderGroup', 'BorderGroup', 'QtQuick', {
      creatable: false,
      properties: [makeProperty('width', 'real'), makeProperty('color', 'color')],
    }),

    // Anchors (group type)
    makeType('QtQuick::Anchors', 'Anchors', 'QtQuick', {
      creatable: false,
      properties: [
        makeProperty('left', 'var'),
        makeProperty('right', 'var'),
        makeProperty('top', 'var'),
        makeProperty('bottom', 'var'),
        makeProperty('fill', 'var'),
        makeProperty('margins', 'real'),
        makeProperty('centerIn', 'var'),
      ],
    }),

    // Layout (attached type)
    makeType('QtQuick.Layouts::Layout', 'Layout', 'QtQuick.Layouts', {
      creatable: false,
      properties: [
        makeProperty('fillWidth', 'bool'),
        makeProperty('fillHeight', 'bool'),
        makeProperty('alignment', 'int'),
        makeProperty('preferredWidth', 'real'),
      ],
    }),

    // RequiredItem (has required property)
    makeType('QtQuick::RequiredItem', 'RequiredItem', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [
        makeProperty('requiredText', 'string', { required: true }),
        makeProperty('optionalNum', 'real'),
      ],
    }),
  ];

  // Set attachedType on Item to reference Layout
  const itemType = types.find((t) => t.qualifiedName === 'QtQuick::Item')!;
  (itemType as { attachedType?: string }).attachedType = 'QtQuick.Layouts::Layout';

  const registry: QmlRegistry = {
    formatVersion: '1.0.0',
    generatedAt: '2026-01-01T00:00:00Z',
    qtVersion: '6.11.0',
    qtDir: '/mock/qt',
    buildDuration: 0,
    modules: [
      {
        uri: 'QtQuick',
        dirPath: '/mock/QtQuick',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: [
          'Item',
          'Rectangle',
          'Text',
          'MouseArea',
          'Column',
          'Row',
          'LinearGradient',
          'RequiredItem',
        ],
        qmlFileTypes: [],
      },
      {
        uri: 'QtQuick.Controls',
        dirPath: '/mock/QtQuick/Controls',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Button'],
        qmlFileTypes: [],
      },
      {
        uri: 'QtQuick.Layouts',
        dirPath: '/mock/QtQuick/Layouts',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Layout'],
        qmlFileTypes: [],
      },
    ],
    types,
    builtins: [],
    stats: {
      moduleCount: 3,
      typeCount: types.length,
      builtinCount: 0,
      sourceFiles: { qmltypes: 0, qmldir: 0, metatypes: 0 },
    },
  };

  return new RegistryQuery(registry);
}

/** Standard DSL factory names used in tests */
export const TEST_DSL_FACTORIES = new Set([
  'Item',
  'Rectangle',
  'Text',
  'MouseArea',
  'Column',
  'Row',
  'LinearGradient',
  'Button',
  'RequiredItem',
]);
