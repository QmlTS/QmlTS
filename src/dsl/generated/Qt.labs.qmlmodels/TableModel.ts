// AUTO-GENERATED — DO NOT EDIT
// Type: TableModel
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TableModelBuilder {
  id(id: string): TableModelBuilder;
  child(obj: QmlObjectBuilder): TableModelBuilder;
  children(...objs: QmlObjectBuilder[]): TableModelBuilder;

  objectName(value: string): TableModelBuilder;
  objectNameBind(expr: string): TableModelBuilder;
  rows(value: QmlValue): TableModelBuilder;
  rowsBind(expr: string): TableModelBuilder;
  onColumnCountChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): TableModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): TableModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): TableModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): TableModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): TableModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): TableModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): TableModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): TableModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowCountChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowsChanged(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): TableModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): TableModelBuilder;
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
