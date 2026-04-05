// AUTO-GENERATED — DO NOT EDIT
// Type: HangulInputMethod
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface HangulInputMethodBuilder {
  id(id: string): HangulInputMethodBuilder;
  child(obj: QmlObjectBuilder): HangulInputMethodBuilder;

  objectName(value: string): HangulInputMethodBuilder;
  objectNameBind(expr: string): HangulInputMethodBuilder;
  onObjectNameChanged(body: string): HangulInputMethodBuilder;
  onSelectionListActiveItemChanged(body: string): HangulInputMethodBuilder;
  onSelectionListChanged(body: string): HangulInputMethodBuilder;
  onSelectionListsChanged(body: string): HangulInputMethodBuilder;
}

const HANGULINPUTMETHOD_META: TypeMetadata = {
  typeName: 'HangulInputMethod',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSelectionListActiveItemChanged', paramCount: 2 },
    { handlerName: 'onSelectionListChanged', paramCount: 1 },
    { handlerName: 'onSelectionListsChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function HangulInputMethod(): HangulInputMethodBuilder {
  return createFluentBuilder('HangulInputMethod', HANGULINPUTMETHOD_META) as unknown as HangulInputMethodBuilder;
}
