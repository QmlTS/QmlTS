// AUTO-GENERATED — DO NOT EDIT
// Type: ThaiInputMethod
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ThaiInputMethodBuilder {
  id(id: string): ThaiInputMethodBuilder;
  child(obj: QmlObjectBuilder): ThaiInputMethodBuilder;
  children(...objs: QmlObjectBuilder[]): ThaiInputMethodBuilder;

  objectName(value: string): ThaiInputMethodBuilder;
  objectNameBind(expr: string): ThaiInputMethodBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ThaiInputMethodBuilder;
  onSelectionListActiveItemChanged(handler: DslSignalHandlerValue): ThaiInputMethodBuilder;
  onSelectionListChanged(handler: DslSignalHandlerValue): ThaiInputMethodBuilder;
  onSelectionListsChanged(handler: DslSignalHandlerValue): ThaiInputMethodBuilder;
}

const THAIINPUTMETHOD_META: TypeMetadata = {
  typeName: 'ThaiInputMethod',
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

export function ThaiInputMethod(): ThaiInputMethodBuilder {
  return createFluentBuilder(
    'ThaiInputMethod',
    THAIINPUTMETHOD_META,
  ) as unknown as ThaiInputMethodBuilder;
}
