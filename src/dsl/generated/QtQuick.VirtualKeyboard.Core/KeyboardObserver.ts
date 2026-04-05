// AUTO-GENERATED — DO NOT EDIT
// Type: KeyboardObserver
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { EnterKeyActionAttachedBuilder } from './EnterKeyActionAttachedType.js';
import type { VirtualKeyboardAttachedBuilder } from './VirtualKeyboardAttachedType.js';
export interface KeyboardObserverBuilder {
  id(id: string): KeyboardObserverBuilder;
  child(obj: QmlObjectBuilder): KeyboardObserverBuilder;

  objectName(value: string): KeyboardObserverBuilder;
  objectNameBind(expr: string): KeyboardObserverBuilder;
  onLayoutChanged(body: string): KeyboardObserverBuilder;
  onObjectNameChanged(body: string): KeyboardObserverBuilder;
  enterKeyAction(setup: (b: EnterKeyActionAttachedBuilder) => void): KeyboardObserverBuilder;
  virtualKeyboard(setup: (b: VirtualKeyboardAttachedBuilder) => void): KeyboardObserverBuilder;
}

const KEYBOARDOBSERVER_META: TypeMetadata = {
  typeName: 'KeyboardObserver',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onLayoutChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
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

export function KeyboardObserver(): KeyboardObserverBuilder {
  return createFluentBuilder('KeyboardObserver', KEYBOARDOBSERVER_META) as unknown as KeyboardObserverBuilder;
}
