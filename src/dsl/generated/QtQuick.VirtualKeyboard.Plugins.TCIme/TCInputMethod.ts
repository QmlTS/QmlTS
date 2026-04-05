// AUTO-GENERATED — DO NOT EDIT
// Type: TCInputMethod
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TCInputMethodBuilder {
  id(id: string): TCInputMethodBuilder;
  child(obj: QmlObjectBuilder): TCInputMethodBuilder;

  objectName(value: string): TCInputMethodBuilder;
  objectNameBind(expr: string): TCInputMethodBuilder;
  simplified(value: boolean): TCInputMethodBuilder;
  simplifiedBind(expr: string): TCInputMethodBuilder;
  onObjectNameChanged(body: string): TCInputMethodBuilder;
  onSelectionListActiveItemChanged(body: string): TCInputMethodBuilder;
  onSelectionListChanged(body: string): TCInputMethodBuilder;
  onSelectionListsChanged(body: string): TCInputMethodBuilder;
  onSimplifiedChanged(body: string): TCInputMethodBuilder;
}

const TCINPUTMETHOD_META: TypeMetadata = {
  typeName: 'TCInputMethod',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'simplified', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSelectionListActiveItemChanged', paramCount: 2 },
    { handlerName: 'onSelectionListChanged', paramCount: 1 },
    { handlerName: 'onSelectionListsChanged', paramCount: 0 },
    { handlerName: 'onSimplifiedChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TCInputMethod(): TCInputMethodBuilder {
  return createFluentBuilder(
    'TCInputMethod',
    TCINPUTMETHOD_META,
  ) as unknown as TCInputMethodBuilder;
}
