// AUTO-GENERATED — DO NOT EDIT
// Type: XmlListModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
export interface XmlListModelBuilder {
  id(id: string): XmlListModelBuilder;
  child(obj: QmlObjectBuilder): XmlListModelBuilder;

  objectName(value: string): XmlListModelBuilder;
  objectNameBind(expr: string): XmlListModelBuilder;
  query(value: string): XmlListModelBuilder;
  queryBind(expr: string): XmlListModelBuilder;
  source(value: QmlUrl): XmlListModelBuilder;
  sourceBind(expr: string): XmlListModelBuilder;
  onColumnsAboutToBeInserted(body: string): XmlListModelBuilder;
  onColumnsAboutToBeMoved(body: string): XmlListModelBuilder;
  onColumnsAboutToBeRemoved(body: string): XmlListModelBuilder;
  onColumnsInserted(body: string): XmlListModelBuilder;
  onColumnsMoved(body: string): XmlListModelBuilder;
  onColumnsRemoved(body: string): XmlListModelBuilder;
  onCountChanged(body: string): XmlListModelBuilder;
  onDataChanged(body: string): XmlListModelBuilder;
  onHeaderDataChanged(body: string): XmlListModelBuilder;
  onLayoutAboutToBeChanged(body: string): XmlListModelBuilder;
  onLayoutChanged(body: string): XmlListModelBuilder;
  onModelAboutToBeReset(body: string): XmlListModelBuilder;
  onModelReset(body: string): XmlListModelBuilder;
  onObjectNameChanged(body: string): XmlListModelBuilder;
  onProgressChanged(body: string): XmlListModelBuilder;
  onQueryChanged(body: string): XmlListModelBuilder;
  onRowsAboutToBeInserted(body: string): XmlListModelBuilder;
  onRowsAboutToBeMoved(body: string): XmlListModelBuilder;
  onRowsAboutToBeRemoved(body: string): XmlListModelBuilder;
  onRowsInserted(body: string): XmlListModelBuilder;
  onRowsMoved(body: string): XmlListModelBuilder;
  onRowsRemoved(body: string): XmlListModelBuilder;
  onSourceChanged(body: string): XmlListModelBuilder;
  onStatusChanged(body: string): XmlListModelBuilder;
}

const XMLLISTMODEL_META: TypeMetadata = {
  typeName: 'XmlListModel',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'query', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onProgressChanged', paramCount: 1 },
    { handlerName: 'onQueryChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'roles',
};

export function XmlListModel(): XmlListModelBuilder {
  return createFluentBuilder('XmlListModel', XMLLISTMODEL_META) as unknown as XmlListModelBuilder;
}

export namespace XmlListModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('XmlListModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('XmlListModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('XmlListModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('XmlListModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('XmlListModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('XmlListModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('XmlListModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
  export namespace Status {
    export const Null = createEnumToken('XmlListModel', 'Status', 'Null');
    export const Ready = createEnumToken('XmlListModel', 'Status', 'Ready');
    export const Loading = createEnumToken('XmlListModel', 'Status', 'Loading');
    export const Error = createEnumToken('XmlListModel', 'Status', 'Error');
  }
}
