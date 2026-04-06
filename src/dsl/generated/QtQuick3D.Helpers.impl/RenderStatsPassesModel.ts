// AUTO-GENERATED — DO NOT EDIT
// Type: RenderStatsPassesModel
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RenderStatsPassesModelBuilder {
  id(id: string): RenderStatsPassesModelBuilder;
  child(obj: QmlObjectBuilder): RenderStatsPassesModelBuilder;
  children(...objs: QmlObjectBuilder[]): RenderStatsPassesModelBuilder;

  objectName(value: string): RenderStatsPassesModelBuilder;
  objectNameBind(expr: string): RenderStatsPassesModelBuilder;
  passData(value: string): RenderStatsPassesModelBuilder;
  passDataBind(expr: string): RenderStatsPassesModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onPassDataChanged(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): RenderStatsPassesModelBuilder;
}

const RENDERSTATSPASSESMODEL_META: TypeMetadata = {
  typeName: 'RenderStatsPassesModel',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'passData', hasValue: true, hasBinding: true },
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
    { handlerName: 'onPassDataChanged', paramCount: 0 },
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

export function RenderStatsPassesModel(): RenderStatsPassesModelBuilder {
  return createFluentBuilder(
    'RenderStatsPassesModel',
    RENDERSTATSPASSESMODEL_META,
  ) as unknown as RenderStatsPassesModelBuilder;
}

export namespace RenderStatsPassesModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken(
      'RenderStatsPassesModel',
      'CheckIndexOption',
      'NoOption',
    );
    export const IndexIsValid = createEnumToken(
      'RenderStatsPassesModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'RenderStatsPassesModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'RenderStatsPassesModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'RenderStatsPassesModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'RenderStatsPassesModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'RenderStatsPassesModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
