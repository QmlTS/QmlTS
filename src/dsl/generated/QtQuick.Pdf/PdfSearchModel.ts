// AUTO-GENERATED — DO NOT EDIT
// Type: PdfSearchModel
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PdfDocumentBuilder } from './PdfDocument.js';
export interface PdfSearchModelBuilder {
  id(id: string): PdfSearchModelBuilder;
  child(obj: QmlObjectBuilder): PdfSearchModelBuilder;
  children(...objs: QmlObjectBuilder[]): PdfSearchModelBuilder;

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
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onCountChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onCurrentPageBoundingPolygonsChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onCurrentPageChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onCurrentResultBoundingPolygonsChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onCurrentResultBoundingRectChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onCurrentResultChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onCurrentResultLinkChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onDocumentChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
  onSearchStringChanged(handler: DslSignalHandlerValue): PdfSearchModelBuilder;
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
  grouped: [],
  attached: [],
};

export function PdfSearchModel(): PdfSearchModelBuilder {
  return createFluentBuilder(
    'PdfSearchModel',
    PDFSEARCHMODEL_META,
  ) as unknown as PdfSearchModelBuilder;
}

export namespace PdfSearchModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('PdfSearchModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken(
      'PdfSearchModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'PdfSearchModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'PdfSearchModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'PdfSearchModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'PdfSearchModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'PdfSearchModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
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
