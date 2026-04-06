// AUTO-GENERATED — DO NOT EDIT
// Type: PdfDocument
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface PdfDocumentBuilder {
  id(id: string): PdfDocumentBuilder;
  child(obj: QmlObjectBuilder): PdfDocumentBuilder;
  children(...objs: QmlObjectBuilder[]): PdfDocumentBuilder;

  objectName(value: string): PdfDocumentBuilder;
  objectNameBind(expr: string): PdfDocumentBuilder;
  source(value: QmlUrl): PdfDocumentBuilder;
  sourceBind(expr: string): PdfDocumentBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): PdfDocumentBuilder;
  onMetaDataChanged(handler: DslSignalHandlerValue): PdfDocumentBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PdfDocumentBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): PdfDocumentBuilder;
}

const PDFDOCUMENT_META: TypeMetadata = {
  typeName: 'PdfDocument',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onMetaDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function PdfDocument(): PdfDocumentBuilder {
  return createFluentBuilder('PdfDocument', PDFDOCUMENT_META) as unknown as PdfDocumentBuilder;
}
