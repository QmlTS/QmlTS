// AUTO-GENERATED — DO NOT EDIT
// Type: PdfPageNavigator
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface PdfPageNavigatorBuilder {
  id(id: string): PdfPageNavigatorBuilder;
  child(obj: QmlObjectBuilder): PdfPageNavigatorBuilder;
  children(...objs: QmlObjectBuilder[]): PdfPageNavigatorBuilder;

  objectName(value: string): PdfPageNavigatorBuilder;
  objectNameBind(expr: string): PdfPageNavigatorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PdfPageNavigatorBuilder;
}

const PDFPAGENAVIGATOR_META: TypeMetadata = {
  typeName: 'PdfPageNavigator',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function PdfPageNavigator(): PdfPageNavigatorBuilder {
  return createFluentBuilder(
    'PdfPageNavigator',
    PDFPAGENAVIGATOR_META,
  ) as unknown as PdfPageNavigatorBuilder;
}
