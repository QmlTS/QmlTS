// AUTO-GENERATED — DO NOT EDIT
// Type: RenderStatsTexturesModel
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RenderStatsTexturesModelBuilder {
  id(id: string): RenderStatsTexturesModelBuilder;
  child(obj: QmlObjectBuilder): RenderStatsTexturesModelBuilder;
  children(...objs: QmlObjectBuilder[]): RenderStatsTexturesModelBuilder;

  objectName(value: string): RenderStatsTexturesModelBuilder;
  objectNameBind(expr: string): RenderStatsTexturesModelBuilder;
  textureData(value: string): RenderStatsTexturesModelBuilder;
  textureDataBind(expr: string): RenderStatsTexturesModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
  onTextureDataChanged(handler: DslSignalHandlerValue): RenderStatsTexturesModelBuilder;
}

const RENDERSTATSTEXTURESMODEL_META: TypeMetadata = {
  typeName: 'RenderStatsTexturesModel',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'textureData', hasValue: true, hasBinding: true },
  ],
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
    { handlerName: 'onTextureDataChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function RenderStatsTexturesModel(): RenderStatsTexturesModelBuilder {
  return createFluentBuilder(
    'RenderStatsTexturesModel',
    RENDERSTATSTEXTURESMODEL_META,
  ) as unknown as RenderStatsTexturesModelBuilder;
}

export namespace RenderStatsTexturesModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken(
      'RenderStatsTexturesModel',
      'CheckIndexOption',
      'NoOption',
    );
    export const IndexIsValid = createEnumToken(
      'RenderStatsTexturesModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'RenderStatsTexturesModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'RenderStatsTexturesModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'RenderStatsTexturesModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'RenderStatsTexturesModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'RenderStatsTexturesModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
