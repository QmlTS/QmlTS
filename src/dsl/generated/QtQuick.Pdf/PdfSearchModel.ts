// AUTO-GENERATED — DO NOT EDIT
// Type: PdfSearchModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { PdfDocumentBuilder } from './PdfDocument.js';
export interface PdfSearchModelBuilder {
  id(id: string): PdfSearchModelBuilder;
  child(obj: QmlObjectBuilder): PdfSearchModelBuilder;

  currentPage(value: number): PdfSearchModelBuilder;
  currentPageBind(expr: string): PdfSearchModelBuilder;
  currentResult(value: number): PdfSearchModelBuilder;
  currentResultBind(expr: string): PdfSearchModelBuilder;
  document(value: PdfDocumentBuilder): PdfSearchModelBuilder;
  documentBind(expr: string): PdfSearchModelBuilder;
  objectName(value: string): PdfSearchModelBuilder;
  objectNameBind(expr: string): PdfSearchModelBuilder;
  searchString(value: string): PdfSearchModelBuilder;
  searchStringBind(expr: string): PdfSearchModelBuilder;
  onColumnsAboutToBeInserted(body: string): PdfSearchModelBuilder;
  onColumnsAboutToBeMoved(body: string): PdfSearchModelBuilder;
  onColumnsAboutToBeRemoved(body: string): PdfSearchModelBuilder;
  onColumnsInserted(body: string): PdfSearchModelBuilder;
  onColumnsMoved(body: string): PdfSearchModelBuilder;
  onColumnsRemoved(body: string): PdfSearchModelBuilder;
  onCountChanged(body: string): PdfSearchModelBuilder;
  onCurrentPageBoundingPolygonsChanged(body: string): PdfSearchModelBuilder;
  onCurrentPageChanged(body: string): PdfSearchModelBuilder;
  onCurrentResultBoundingPolygonsChanged(body: string): PdfSearchModelBuilder;
  onCurrentResultBoundingRectChanged(body: string): PdfSearchModelBuilder;
  onCurrentResultChanged(body: string): PdfSearchModelBuilder;
  onCurrentResultLinkChanged(body: string): PdfSearchModelBuilder;
  onDataChanged(body: string): PdfSearchModelBuilder;
  onDocumentChanged(body: string): PdfSearchModelBuilder;
  onHeaderDataChanged(body: string): PdfSearchModelBuilder;
  onLayoutAboutToBeChanged(body: string): PdfSearchModelBuilder;
  onLayoutChanged(body: string): PdfSearchModelBuilder;
  onModelAboutToBeReset(body: string): PdfSearchModelBuilder;
  onModelReset(body: string): PdfSearchModelBuilder;
  onObjectNameChanged(body: string): PdfSearchModelBuilder;
  onRowsAboutToBeInserted(body: string): PdfSearchModelBuilder;
  onRowsAboutToBeMoved(body: string): PdfSearchModelBuilder;
  onRowsAboutToBeRemoved(body: string): PdfSearchModelBuilder;
  onRowsInserted(body: string): PdfSearchModelBuilder;
  onRowsMoved(body: string): PdfSearchModelBuilder;
  onRowsRemoved(body: string): PdfSearchModelBuilder;
  onSearchStringChanged(body: string): PdfSearchModelBuilder;
}

const PDFSEARCHMODEL_META: TypeMetadata = {
  typeName: 'PdfSearchModel',
  properties: [
    { name: 'currentPage', hasValue: true, hasBinding: true },
    { name: 'currentResult', hasValue: true, hasBinding: true },
    { name: 'document', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'searchString', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentPageBoundingPolygonsChanged', paramCount: 0 },
    { handlerName: 'onCurrentPageChanged', paramCount: 0 },
    { handlerName: 'onCurrentResultBoundingPolygonsChanged', paramCount: 0 },
    { handlerName: 'onCurrentResultBoundingRectChanged', paramCount: 0 },
    { handlerName: 'onCurrentResultChanged', paramCount: 0 },
    { handlerName: 'onCurrentResultLinkChanged', paramCount: 0 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onDocumentChanged', paramCount: 0 },
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
    { handlerName: 'onSearchStringChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PdfSearchModel(): PdfSearchModelBuilder {
  return createFluentBuilder('PdfSearchModel', PDFSEARCHMODEL_META) as unknown as PdfSearchModelBuilder;
}

export namespace PdfSearchModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('PdfSearchModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('PdfSearchModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('PdfSearchModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('PdfSearchModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('PdfSearchModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('PdfSearchModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('PdfSearchModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
  export namespace Role {
    export const Page = createEnumToken('PdfSearchModel', 'Role', 'Page');
    export const IndexOnPage = createEnumToken('PdfSearchModel', 'Role', 'IndexOnPage');
    export const Location = createEnumToken('PdfSearchModel', 'Role', 'Location');
    export const ContextBefore = createEnumToken('PdfSearchModel', 'Role', 'ContextBefore');
    export const ContextAfter = createEnumToken('PdfSearchModel', 'Role', 'ContextAfter');
    export const NRoles = createEnumToken('PdfSearchModel', 'Role', 'NRoles');
  }
}
