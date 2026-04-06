// AUTO-GENERATED — DO NOT EDIT
// Type: HangulInputMethod
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface HangulInputMethodBuilder {
  id(id: string): HangulInputMethodBuilder;
  child(obj: QmlObjectBuilder): HangulInputMethodBuilder;
  children(...objs: QmlObjectBuilder[]): HangulInputMethodBuilder;

  objectName(value: string): HangulInputMethodBuilder;
  objectNameBind(expr: string): HangulInputMethodBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): HangulInputMethodBuilder;
  onSelectionListActiveItemChanged(handler: DslSignalHandlerValue): HangulInputMethodBuilder;
  onSelectionListChanged(handler: DslSignalHandlerValue): HangulInputMethodBuilder;
  onSelectionListsChanged(handler: DslSignalHandlerValue): HangulInputMethodBuilder;
}

const HANGULINPUTMETHOD_META: TypeMetadata = {
  typeName: 'HangulInputMethod',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSelectionListActiveItemChanged', paramCount: 2 },
    { handlerName: 'onSelectionListChanged', paramCount: 1 },
    { handlerName: 'onSelectionListsChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function HangulInputMethod(): HangulInputMethodBuilder {
  return createFluentBuilder(
    'HangulInputMethod',
    HANGULINPUTMETHOD_META,
  ) as unknown as HangulInputMethodBuilder;
}
