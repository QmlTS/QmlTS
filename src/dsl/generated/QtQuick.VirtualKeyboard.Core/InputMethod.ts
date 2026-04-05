// AUTO-GENERATED — DO NOT EDIT
// Type: InputMethod
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { EnterKeyActionAttachedBuilder } from './EnterKeyActionAttachedType.js';
import type { VirtualKeyboardAttachedBuilder } from './VirtualKeyboardAttachedType.js';
export interface InputMethodBuilder {
  id(id: string): InputMethodBuilder;
  child(obj: QmlObjectBuilder): InputMethodBuilder;

  objectName(value: string): InputMethodBuilder;
  objectNameBind(expr: string): InputMethodBuilder;
  onObjectNameChanged(body: string): InputMethodBuilder;
  onSelectionListActiveItemChanged(body: string): InputMethodBuilder;
  onSelectionListChanged(body: string): InputMethodBuilder;
  onSelectionListsChanged(body: string): InputMethodBuilder;
  enterKeyAction(setup: (b: EnterKeyActionAttachedBuilder) => void): InputMethodBuilder;
  virtualKeyboard(setup: (b: VirtualKeyboardAttachedBuilder) => void): InputMethodBuilder;
}

const INPUTMETHOD_META: TypeMetadata = {
  typeName: 'InputMethod',
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
    {
      methodName: 'enterKeyAction',
      attachedTypeName: 'EnterKeyAction',
      properties: [
        { name: 'actionId', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'label', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActionIdChanged', paramCount: 0 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onLabelChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'virtualKeyboard',
      attachedTypeName: 'VirtualKeyboard',
      properties: [
        { name: 'extraDictionaries', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onExtraDictionariesChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function InputMethod(): InputMethodBuilder {
  return createFluentBuilder('InputMethod', INPUTMETHOD_META) as unknown as InputMethodBuilder;
}
