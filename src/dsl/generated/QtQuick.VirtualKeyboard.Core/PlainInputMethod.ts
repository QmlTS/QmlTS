// AUTO-GENERATED — DO NOT EDIT
// Type: PlainInputMethod
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { EnterKeyActionAttachedBuilder } from './EnterKeyActionAttachedType.js';
import type { VirtualKeyboardAttachedBuilder } from './VirtualKeyboardAttachedType.js';
export interface PlainInputMethodBuilder {
  id(id: string): PlainInputMethodBuilder;
  child(obj: QmlObjectBuilder): PlainInputMethodBuilder;

  objectName(value: string): PlainInputMethodBuilder;
  objectNameBind(expr: string): PlainInputMethodBuilder;
  onObjectNameChanged(body: string): PlainInputMethodBuilder;
  onSelectionListActiveItemChanged(body: string): PlainInputMethodBuilder;
  onSelectionListChanged(body: string): PlainInputMethodBuilder;
  onSelectionListsChanged(body: string): PlainInputMethodBuilder;
  enterKeyAction(setup: (b: EnterKeyActionAttachedBuilder) => void): PlainInputMethodBuilder;
  virtualKeyboard(setup: (b: VirtualKeyboardAttachedBuilder) => void): PlainInputMethodBuilder;
}

const PLAININPUTMETHOD_META: TypeMetadata = {
  typeName: 'PlainInputMethod',
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

export function PlainInputMethod(): PlainInputMethodBuilder {
  return createFluentBuilder('PlainInputMethod', PLAININPUTMETHOD_META) as unknown as PlainInputMethodBuilder;
}
