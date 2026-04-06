// AUTO-GENERATED — DO NOT EDIT
// Type: PinyinInputMethod
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface PinyinInputMethodBuilder {
  id(id: string): PinyinInputMethodBuilder;
  child(obj: QmlObjectBuilder): PinyinInputMethodBuilder;
  children(...objs: QmlObjectBuilder[]): PinyinInputMethodBuilder;

  objectName(value: string): PinyinInputMethodBuilder;
  objectNameBind(expr: string): PinyinInputMethodBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PinyinInputMethodBuilder;
  onSelectionListActiveItemChanged(handler: DslSignalHandlerValue): PinyinInputMethodBuilder;
  onSelectionListChanged(handler: DslSignalHandlerValue): PinyinInputMethodBuilder;
  onSelectionListsChanged(handler: DslSignalHandlerValue): PinyinInputMethodBuilder;
}

const PINYININPUTMETHOD_META: TypeMetadata = {
  typeName: 'PinyinInputMethod',
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

export function PinyinInputMethod(): PinyinInputMethodBuilder {
  return createFluentBuilder(
    'PinyinInputMethod',
    PINYININPUTMETHOD_META,
  ) as unknown as PinyinInputMethodBuilder;
}
