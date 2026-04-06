// AUTO-GENERATED — DO NOT EDIT
// Type: UniformModel
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface UniformModelBuilder {
  id(id: string): UniformModelBuilder;
  child(obj: QmlObjectBuilder): UniformModelBuilder;
  children(...objs: QmlObjectBuilder[]): UniformModelBuilder;

  objectName(value: string): UniformModelBuilder;
  objectNameBind(expr: string): UniformModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): UniformModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): UniformModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): UniformModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): UniformModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): UniformModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): UniformModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): UniformModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): UniformModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): UniformModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): UniformModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): UniformModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): UniformModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): UniformModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): UniformModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): UniformModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): UniformModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): UniformModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): UniformModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): UniformModelBuilder;
}

const UNIFORMMODEL_META: TypeMetadata = {
  typeName: 'UniformModel',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
  ],
  grouped: [],
  attached: [],
};

export function UniformModel(): UniformModelBuilder {
  return createFluentBuilder('UniformModel', UNIFORMMODEL_META) as unknown as UniformModelBuilder;
}

export namespace UniformModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('UniformModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('UniformModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken(
      'UniformModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'UniformModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'UniformModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'UniformModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'UniformModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
  export namespace UniformType {
    export const Bool = createEnumToken('UniformModel', 'UniformType', 'Bool');
    export const Int = createEnumToken('UniformModel', 'UniformType', 'Int');
    export const Float = createEnumToken('UniformModel', 'UniformType', 'Float');
    export const Vec2 = createEnumToken('UniformModel', 'UniformType', 'Vec2');
    export const Vec3 = createEnumToken('UniformModel', 'UniformType', 'Vec3');
    export const Vec4 = createEnumToken('UniformModel', 'UniformType', 'Vec4');
    export const Mat44 = createEnumToken('UniformModel', 'UniformType', 'Mat44');
    export const Sampler = createEnumToken('UniformModel', 'UniformType', 'Sampler');
  }
}
