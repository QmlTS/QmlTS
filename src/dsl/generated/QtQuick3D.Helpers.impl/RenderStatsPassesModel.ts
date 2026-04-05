// AUTO-GENERATED — DO NOT EDIT
// Type: RenderStatsPassesModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RenderStatsPassesModelBuilder {
  id(id: string): RenderStatsPassesModelBuilder;
  child(obj: QmlObjectBuilder): RenderStatsPassesModelBuilder;

  objectName(value: string): RenderStatsPassesModelBuilder;
  objectNameBind(expr: string): RenderStatsPassesModelBuilder;
  passData(value: string): RenderStatsPassesModelBuilder;
  passDataBind(expr: string): RenderStatsPassesModelBuilder;
  onColumnsAboutToBeInserted(body: string): RenderStatsPassesModelBuilder;
  onColumnsAboutToBeMoved(body: string): RenderStatsPassesModelBuilder;
  onColumnsAboutToBeRemoved(body: string): RenderStatsPassesModelBuilder;
  onColumnsInserted(body: string): RenderStatsPassesModelBuilder;
  onColumnsMoved(body: string): RenderStatsPassesModelBuilder;
  onColumnsRemoved(body: string): RenderStatsPassesModelBuilder;
  onDataChanged(body: string): RenderStatsPassesModelBuilder;
  onHeaderDataChanged(body: string): RenderStatsPassesModelBuilder;
  onLayoutAboutToBeChanged(body: string): RenderStatsPassesModelBuilder;
  onLayoutChanged(body: string): RenderStatsPassesModelBuilder;
  onModelAboutToBeReset(body: string): RenderStatsPassesModelBuilder;
  onModelReset(body: string): RenderStatsPassesModelBuilder;
  onObjectNameChanged(body: string): RenderStatsPassesModelBuilder;
  onPassDataChanged(body: string): RenderStatsPassesModelBuilder;
  onRowsAboutToBeInserted(body: string): RenderStatsPassesModelBuilder;
  onRowsAboutToBeMoved(body: string): RenderStatsPassesModelBuilder;
  onRowsAboutToBeRemoved(body: string): RenderStatsPassesModelBuilder;
  onRowsInserted(body: string): RenderStatsPassesModelBuilder;
  onRowsMoved(body: string): RenderStatsPassesModelBuilder;
  onRowsRemoved(body: string): RenderStatsPassesModelBuilder;
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
