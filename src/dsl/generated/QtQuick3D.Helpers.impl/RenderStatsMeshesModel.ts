// AUTO-GENERATED — DO NOT EDIT
// Type: RenderStatsMeshesModel
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RenderStatsMeshesModelBuilder {
  id(id: string): RenderStatsMeshesModelBuilder;
  child(obj: QmlObjectBuilder): RenderStatsMeshesModelBuilder;
  children(...objs: QmlObjectBuilder[]): RenderStatsMeshesModelBuilder;

  meshData(value: string): RenderStatsMeshesModelBuilder;
  meshDataBind(expr: string): RenderStatsMeshesModelBuilder;
  objectName(value: string): RenderStatsMeshesModelBuilder;
  objectNameBind(expr: string): RenderStatsMeshesModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onMeshDataChanged(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): RenderStatsMeshesModelBuilder;
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
  grouped: [],
  attached: [],
};

export function RenderStatsMeshesModel(): RenderStatsMeshesModelBuilder {
  return createFluentBuilder(
    'RenderStatsMeshesModel',
    RENDERSTATSMESHESMODEL_META,
  ) as unknown as RenderStatsMeshesModelBuilder;
}

export namespace RenderStatsMeshesModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken(
      'RenderStatsMeshesModel',
      'CheckIndexOption',
      'NoOption',
    );
    export const IndexIsValid = createEnumToken(
      'RenderStatsMeshesModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'RenderStatsMeshesModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'RenderStatsMeshesModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'RenderStatsMeshesModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'RenderStatsMeshesModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'RenderStatsMeshesModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
