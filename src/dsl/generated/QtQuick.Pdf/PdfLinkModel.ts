// AUTO-GENERATED — DO NOT EDIT
// Type: PdfLinkModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PdfDocumentBuilder } from './PdfDocument.js';
export interface PdfLinkModelBuilder {
  id(id: string): PdfLinkModelBuilder;
  child(obj: QmlObjectBuilder): PdfLinkModelBuilder;

  document(value: PdfDocumentBuilder): PdfLinkModelBuilder;
  documentBind(expr: string): PdfLinkModelBuilder;
  objectName(value: string): PdfLinkModelBuilder;
  objectNameBind(expr: string): PdfLinkModelBuilder;
  page(value: number): PdfLinkModelBuilder;
  pageBind(expr: string): PdfLinkModelBuilder;
  onColumnsAboutToBeInserted(body: string): PdfLinkModelBuilder;
  onColumnsAboutToBeMoved(body: string): PdfLinkModelBuilder;
  onColumnsAboutToBeRemoved(body: string): PdfLinkModelBuilder;
  onColumnsInserted(body: string): PdfLinkModelBuilder;
  onColumnsMoved(body: string): PdfLinkModelBuilder;
  onColumnsRemoved(body: string): PdfLinkModelBuilder;
  onDataChanged(body: string): PdfLinkModelBuilder;
  onDocumentChanged(body: string): PdfLinkModelBuilder;
  onHeaderDataChanged(body: string): PdfLinkModelBuilder;
  onLayoutAboutToBeChanged(body: string): PdfLinkModelBuilder;
  onLayoutChanged(body: string): PdfLinkModelBuilder;
  onModelAboutToBeReset(body: string): PdfLinkModelBuilder;
  onModelReset(body: string): PdfLinkModelBuilder;
  onObjectNameChanged(body: string): PdfLinkModelBuilder;
  onPageChanged(body: string): PdfLinkModelBuilder;
  onRowsAboutToBeInserted(body: string): PdfLinkModelBuilder;
  onRowsAboutToBeMoved(body: string): PdfLinkModelBuilder;
  onRowsAboutToBeRemoved(body: string): PdfLinkModelBuilder;
  onRowsInserted(body: string): PdfLinkModelBuilder;
  onRowsMoved(body: string): PdfLinkModelBuilder;
  onRowsRemoved(body: string): PdfLinkModelBuilder;
}

const PDFLINKMODEL_META: TypeMetadata = {
  typeName: 'PdfLinkModel',
  properties: [
    { name: 'document', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'page', hasValue: true, hasBinding: true },
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
    { handlerName: 'onPageChanged', paramCount: 1 },
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

export function PdfLinkModel(): PdfLinkModelBuilder {
  return createFluentBuilder('PdfLinkModel', PDFLINKMODEL_META) as unknown as PdfLinkModelBuilder;
}

export namespace PdfLinkModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('PdfLinkModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('PdfLinkModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken(
      'PdfLinkModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'PdfLinkModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'PdfLinkModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'PdfLinkModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'PdfLinkModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
  export namespace Role {
    export const Link = createEnumToken('PdfLinkModel', 'Role', 'Link');
    export const Rectangle = createEnumToken('PdfLinkModel', 'Role', 'Rectangle');
    export const Url = createEnumToken('PdfLinkModel', 'Role', 'Url');
    export const Page = createEnumToken('PdfLinkModel', 'Role', 'Page');
    export const Location = createEnumToken('PdfLinkModel', 'Role', 'Location');
    export const Zoom = createEnumToken('PdfLinkModel', 'Role', 'Zoom');
    export const NRoles = createEnumToken('PdfLinkModel', 'Role', 'NRoles');
  }
}
