// AUTO-GENERATED — DO NOT EDIT
// Type: JapaneseInputMethod
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface JapaneseInputMethodBuilder {
  id(id: string): JapaneseInputMethodBuilder;
  child(obj: QmlObjectBuilder): JapaneseInputMethodBuilder;

  objectName(value: string): JapaneseInputMethodBuilder;
  objectNameBind(expr: string): JapaneseInputMethodBuilder;
  onObjectNameChanged(body: string): JapaneseInputMethodBuilder;
  onSelectionListActiveItemChanged(body: string): JapaneseInputMethodBuilder;
  onSelectionListChanged(body: string): JapaneseInputMethodBuilder;
  onSelectionListsChanged(body: string): JapaneseInputMethodBuilder;
}

const JAPANESEINPUTMETHOD_META: TypeMetadata = {
  typeName: 'JapaneseInputMethod',
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

export function JapaneseInputMethod(): JapaneseInputMethodBuilder {
  return createFluentBuilder(
    'JapaneseInputMethod',
    JAPANESEINPUTMETHOD_META,
  ) as unknown as JapaneseInputMethodBuilder;
}
