// AUTO-GENERATED — DO NOT EDIT
// Type: TableModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TableModelBuilder {
  id(id: string): TableModelBuilder;
  child(obj: QmlObjectBuilder): TableModelBuilder;

  objectName(value: string): TableModelBuilder;
  objectNameBind(expr: string): TableModelBuilder;
  rows(value: QmlValue): TableModelBuilder;
  rowsBind(expr: string): TableModelBuilder;
  onColumnCountChanged(body: string): TableModelBuilder;
  onColumnsAboutToBeInserted(body: string): TableModelBuilder;
  onColumnsAboutToBeMoved(body: string): TableModelBuilder;
  onColumnsAboutToBeRemoved(body: string): TableModelBuilder;
  onColumnsInserted(body: string): TableModelBuilder;
  onColumnsMoved(body: string): TableModelBuilder;
  onColumnsRemoved(body: string): TableModelBuilder;
  onDataChanged(body: string): TableModelBuilder;
  onHeaderDataChanged(body: string): TableModelBuilder;
  onLayoutAboutToBeChanged(body: string): TableModelBuilder;
  onLayoutChanged(body: string): TableModelBuilder;
  onModelAboutToBeReset(body: string): TableModelBuilder;
  onModelReset(body: string): TableModelBuilder;
  onObjectNameChanged(body: string): TableModelBuilder;
  onRowCountChanged(body: string): TableModelBuilder;
  onRowsAboutToBeInserted(body: string): TableModelBuilder;
  onRowsAboutToBeMoved(body: string): TableModelBuilder;
  onRowsAboutToBeRemoved(body: string): TableModelBuilder;
  onRowsChanged(body: string): TableModelBuilder;
  onRowsInserted(body: string): TableModelBuilder;
  onRowsMoved(body: string): TableModelBuilder;
  onRowsRemoved(body: string): TableModelBuilder;
}

const TABLEMODEL_META: TypeMetadata = {
  typeName: 'TableModel',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rows', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnCountChanged', paramCount: 0 },
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
    { handlerName: 'onRowCountChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsChanged', paramCount: 0 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'columns',
};

export function TableModel(): TableModelBuilder {
  return createFluentBuilder('TableModel', TABLEMODEL_META) as unknown as TableModelBuilder;
}

export namespace TableModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('TableModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('TableModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken(
      'TableModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'TableModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'TableModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'TableModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'TableModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
