// AUTO-GENERATED — DO NOT EDIT
// Type: PdfBookmarkModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PdfDocumentBuilder } from './PdfDocument.js';
export interface PdfBookmarkModelBuilder {
  id(id: string): PdfBookmarkModelBuilder;
  child(obj: QmlObjectBuilder): PdfBookmarkModelBuilder;

  document(value: PdfDocumentBuilder): PdfBookmarkModelBuilder;
  documentBind(expr: string): PdfBookmarkModelBuilder;
  objectName(value: string): PdfBookmarkModelBuilder;
  objectNameBind(expr: string): PdfBookmarkModelBuilder;
  onColumnsAboutToBeInserted(body: string): PdfBookmarkModelBuilder;
  onColumnsAboutToBeMoved(body: string): PdfBookmarkModelBuilder;
  onColumnsAboutToBeRemoved(body: string): PdfBookmarkModelBuilder;
  onColumnsInserted(body: string): PdfBookmarkModelBuilder;
  onColumnsMoved(body: string): PdfBookmarkModelBuilder;
  onColumnsRemoved(body: string): PdfBookmarkModelBuilder;
  onDataChanged(body: string): PdfBookmarkModelBuilder;
  onDocumentChanged(body: string): PdfBookmarkModelBuilder;
  onHeaderDataChanged(body: string): PdfBookmarkModelBuilder;
  onLayoutAboutToBeChanged(body: string): PdfBookmarkModelBuilder;
  onLayoutChanged(body: string): PdfBookmarkModelBuilder;
  onModelAboutToBeReset(body: string): PdfBookmarkModelBuilder;
  onModelReset(body: string): PdfBookmarkModelBuilder;
  onObjectNameChanged(body: string): PdfBookmarkModelBuilder;
  onRowsAboutToBeInserted(body: string): PdfBookmarkModelBuilder;
  onRowsAboutToBeMoved(body: string): PdfBookmarkModelBuilder;
  onRowsAboutToBeRemoved(body: string): PdfBookmarkModelBuilder;
  onRowsInserted(body: string): PdfBookmarkModelBuilder;
  onRowsMoved(body: string): PdfBookmarkModelBuilder;
  onRowsRemoved(body: string): PdfBookmarkModelBuilder;
}

const PDFBOOKMARKMODEL_META: TypeMetadata = {
  typeName: 'PdfBookmarkModel',
  properties: [
    { name: 'document', hasValue: true, hasBinding: true },
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
  ],
  grouped: [],
  attached: [],
};

export function PdfBookmarkModel(): PdfBookmarkModelBuilder {
  return createFluentBuilder(
    'PdfBookmarkModel',
    PDFBOOKMARKMODEL_META,
  ) as unknown as PdfBookmarkModelBuilder;
}

export namespace PdfBookmarkModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('PdfBookmarkModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken(
      'PdfBookmarkModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'PdfBookmarkModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'PdfBookmarkModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'PdfBookmarkModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'PdfBookmarkModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'PdfBookmarkModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
  export namespace Role {
    export const Title = createEnumToken('PdfBookmarkModel', 'Role', 'Title');
    export const Level = createEnumToken('PdfBookmarkModel', 'Role', 'Level');
    export const Page = createEnumToken('PdfBookmarkModel', 'Role', 'Page');
    export const Location = createEnumToken('PdfBookmarkModel', 'Role', 'Location');
    export const Zoom = createEnumToken('PdfBookmarkModel', 'Role', 'Zoom');
    export const NRoles = createEnumToken('PdfBookmarkModel', 'Role', 'NRoles');
  }
}
