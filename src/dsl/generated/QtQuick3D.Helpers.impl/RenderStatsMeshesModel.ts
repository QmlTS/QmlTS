// AUTO-GENERATED — DO NOT EDIT
// Type: RenderStatsMeshesModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface RenderStatsMeshesModelBuilder {
  id(id: string): RenderStatsMeshesModelBuilder;
  child(obj: QmlObjectBuilder): RenderStatsMeshesModelBuilder;

  meshData(value: string): RenderStatsMeshesModelBuilder;
  meshDataBind(expr: string): RenderStatsMeshesModelBuilder;
  objectName(value: string): RenderStatsMeshesModelBuilder;
  objectNameBind(expr: string): RenderStatsMeshesModelBuilder;
  onColumnsAboutToBeInserted(body: string): RenderStatsMeshesModelBuilder;
  onColumnsAboutToBeMoved(body: string): RenderStatsMeshesModelBuilder;
  onColumnsAboutToBeRemoved(body: string): RenderStatsMeshesModelBuilder;
  onColumnsInserted(body: string): RenderStatsMeshesModelBuilder;
  onColumnsMoved(body: string): RenderStatsMeshesModelBuilder;
  onColumnsRemoved(body: string): RenderStatsMeshesModelBuilder;
  onDataChanged(body: string): RenderStatsMeshesModelBuilder;
  onHeaderDataChanged(body: string): RenderStatsMeshesModelBuilder;
  onLayoutAboutToBeChanged(body: string): RenderStatsMeshesModelBuilder;
  onLayoutChanged(body: string): RenderStatsMeshesModelBuilder;
  onMeshDataChanged(body: string): RenderStatsMeshesModelBuilder;
  onModelAboutToBeReset(body: string): RenderStatsMeshesModelBuilder;
  onModelReset(body: string): RenderStatsMeshesModelBuilder;
  onObjectNameChanged(body: string): RenderStatsMeshesModelBuilder;
  onRowsAboutToBeInserted(body: string): RenderStatsMeshesModelBuilder;
  onRowsAboutToBeMoved(body: string): RenderStatsMeshesModelBuilder;
  onRowsAboutToBeRemoved(body: string): RenderStatsMeshesModelBuilder;
  onRowsInserted(body: string): RenderStatsMeshesModelBuilder;
  onRowsMoved(body: string): RenderStatsMeshesModelBuilder;
  onRowsRemoved(body: string): RenderStatsMeshesModelBuilder;
}

const RENDERSTATSMESHESMODEL_META: TypeMetadata = {
  typeName: 'RenderStatsMeshesModel',
  properties: [
    { name: 'meshData', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMeshDataChanged', paramCount: 0 },
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
  grouped: [
  ],
  attached: [
  ],
};

export function RenderStatsMeshesModel(): RenderStatsMeshesModelBuilder {
  return createFluentBuilder('RenderStatsMeshesModel', RENDERSTATSMESHESMODEL_META) as unknown as RenderStatsMeshesModelBuilder;
}

export namespace RenderStatsMeshesModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('RenderStatsMeshesModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('RenderStatsMeshesModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('RenderStatsMeshesModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('RenderStatsMeshesModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('RenderStatsMeshesModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('RenderStatsMeshesModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('RenderStatsMeshesModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
}
