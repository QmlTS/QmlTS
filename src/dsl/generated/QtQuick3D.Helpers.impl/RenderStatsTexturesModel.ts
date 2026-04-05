// AUTO-GENERATED — DO NOT EDIT
// Type: RenderStatsTexturesModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface RenderStatsTexturesModelBuilder {
  id(id: string): RenderStatsTexturesModelBuilder;
  child(obj: QmlObjectBuilder): RenderStatsTexturesModelBuilder;

  objectName(value: string): RenderStatsTexturesModelBuilder;
  objectNameBind(expr: string): RenderStatsTexturesModelBuilder;
  textureData(value: string): RenderStatsTexturesModelBuilder;
  textureDataBind(expr: string): RenderStatsTexturesModelBuilder;
  onColumnsAboutToBeInserted(body: string): RenderStatsTexturesModelBuilder;
  onColumnsAboutToBeMoved(body: string): RenderStatsTexturesModelBuilder;
  onColumnsAboutToBeRemoved(body: string): RenderStatsTexturesModelBuilder;
  onColumnsInserted(body: string): RenderStatsTexturesModelBuilder;
  onColumnsMoved(body: string): RenderStatsTexturesModelBuilder;
  onColumnsRemoved(body: string): RenderStatsTexturesModelBuilder;
  onDataChanged(body: string): RenderStatsTexturesModelBuilder;
  onHeaderDataChanged(body: string): RenderStatsTexturesModelBuilder;
  onLayoutAboutToBeChanged(body: string): RenderStatsTexturesModelBuilder;
  onLayoutChanged(body: string): RenderStatsTexturesModelBuilder;
  onModelAboutToBeReset(body: string): RenderStatsTexturesModelBuilder;
  onModelReset(body: string): RenderStatsTexturesModelBuilder;
  onObjectNameChanged(body: string): RenderStatsTexturesModelBuilder;
  onRowsAboutToBeInserted(body: string): RenderStatsTexturesModelBuilder;
  onRowsAboutToBeMoved(body: string): RenderStatsTexturesModelBuilder;
  onRowsAboutToBeRemoved(body: string): RenderStatsTexturesModelBuilder;
  onRowsInserted(body: string): RenderStatsTexturesModelBuilder;
  onRowsMoved(body: string): RenderStatsTexturesModelBuilder;
  onRowsRemoved(body: string): RenderStatsTexturesModelBuilder;
  onTextureDataChanged(body: string): RenderStatsTexturesModelBuilder;
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
  grouped: [
  ],
  attached: [
  ],
};

export function RenderStatsTexturesModel(): RenderStatsTexturesModelBuilder {
  return createFluentBuilder('RenderStatsTexturesModel', RENDERSTATSTEXTURESMODEL_META) as unknown as RenderStatsTexturesModelBuilder;
}

export namespace RenderStatsTexturesModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('RenderStatsTexturesModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('RenderStatsTexturesModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('RenderStatsTexturesModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('RenderStatsTexturesModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('RenderStatsTexturesModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('RenderStatsTexturesModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('RenderStatsTexturesModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
}
