// AUTO-GENERATED — DO NOT EDIT
// Type: KeyboardHandler
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { KeyboardDeviceBuilder } from './KeyboardDevice.js';
export interface KeyboardHandlerBuilder {
  id(id: string): KeyboardHandlerBuilder;
  child(obj: QmlObjectBuilder): KeyboardHandlerBuilder;

  enabled(value: boolean): KeyboardHandlerBuilder;
  enabledBind(expr: string): KeyboardHandlerBuilder;
  focus(value: boolean): KeyboardHandlerBuilder;
  focusBind(expr: string): KeyboardHandlerBuilder;
  isShareable(value: boolean): KeyboardHandlerBuilder;
  isShareableBind(expr: string): KeyboardHandlerBuilder;
  objectName(value: string): KeyboardHandlerBuilder;
  objectNameBind(expr: string): KeyboardHandlerBuilder;
  parent(value: QmlValue): KeyboardHandlerBuilder;
  parentBind(expr: string): KeyboardHandlerBuilder;
  sourceDevice(value: KeyboardDeviceBuilder): KeyboardHandlerBuilder;
  sourceDeviceBind(expr: string): KeyboardHandlerBuilder;
  onAddedToEntity(body: string): KeyboardHandlerBuilder;
  onAsteriskPressed(body: string): KeyboardHandlerBuilder;
  onBackPressed(body: string): KeyboardHandlerBuilder;
  onBacktabPressed(body: string): KeyboardHandlerBuilder;
  onCallPressed(body: string): KeyboardHandlerBuilder;
  onCancelPressed(body: string): KeyboardHandlerBuilder;
  onContext1Pressed(body: string): KeyboardHandlerBuilder;
  onContext2Pressed(body: string): KeyboardHandlerBuilder;
  onContext3Pressed(body: string): KeyboardHandlerBuilder;
  onContext4Pressed(body: string): KeyboardHandlerBuilder;
  onDeletePressed(body: string): KeyboardHandlerBuilder;
  onDigit0Pressed(body: string): KeyboardHandlerBuilder;
  onDigit1Pressed(body: string): KeyboardHandlerBuilder;
  onDigit2Pressed(body: string): KeyboardHandlerBuilder;
  onDigit3Pressed(body: string): KeyboardHandlerBuilder;
  onDigit4Pressed(body: string): KeyboardHandlerBuilder;
  onDigit5Pressed(body: string): KeyboardHandlerBuilder;
  onDigit6Pressed(body: string): KeyboardHandlerBuilder;
  onDigit7Pressed(body: string): KeyboardHandlerBuilder;
  onDigit8Pressed(body: string): KeyboardHandlerBuilder;
  onDigit9Pressed(body: string): KeyboardHandlerBuilder;
  onDownPressed(body: string): KeyboardHandlerBuilder;
  onEnabledChanged(body: string): KeyboardHandlerBuilder;
  onEnterPressed(body: string): KeyboardHandlerBuilder;
  onEscapePressed(body: string): KeyboardHandlerBuilder;
  onFlipPressed(body: string): KeyboardHandlerBuilder;
  onFocusChanged(body: string): KeyboardHandlerBuilder;
  onHangupPressed(body: string): KeyboardHandlerBuilder;
  onLeftPressed(body: string): KeyboardHandlerBuilder;
  onMenuPressed(body: string): KeyboardHandlerBuilder;
  onNoPressed(body: string): KeyboardHandlerBuilder;
  onNodeDestroyed(body: string): KeyboardHandlerBuilder;
  onNumberSignPressed(body: string): KeyboardHandlerBuilder;
  onObjectNameChanged(body: string): KeyboardHandlerBuilder;
  onParentChanged(body: string): KeyboardHandlerBuilder;
  onPressed(body: string): KeyboardHandlerBuilder;
  onReleased(body: string): KeyboardHandlerBuilder;
  onRemovedFromEntity(body: string): KeyboardHandlerBuilder;
  onReturnPressed(body: string): KeyboardHandlerBuilder;
  onRightPressed(body: string): KeyboardHandlerBuilder;
  onSelectPressed(body: string): KeyboardHandlerBuilder;
  onShareableChanged(body: string): KeyboardHandlerBuilder;
  onSourceDeviceChanged(body: string): KeyboardHandlerBuilder;
  onSpacePressed(body: string): KeyboardHandlerBuilder;
  onTabPressed(body: string): KeyboardHandlerBuilder;
  onUpPressed(body: string): KeyboardHandlerBuilder;
  onVolumeDownPressed(body: string): KeyboardHandlerBuilder;
  onVolumeUpPressed(body: string): KeyboardHandlerBuilder;
  onYesPressed(body: string): KeyboardHandlerBuilder;
}

const KEYBOARDHANDLER_META: TypeMetadata = {
  typeName: 'KeyboardHandler',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sourceDevice', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAsteriskPressed', paramCount: 1 },
    { handlerName: 'onBackPressed', paramCount: 1 },
    { handlerName: 'onBacktabPressed', paramCount: 1 },
    { handlerName: 'onCallPressed', paramCount: 1 },
    { handlerName: 'onCancelPressed', paramCount: 1 },
    { handlerName: 'onContext1Pressed', paramCount: 1 },
    { handlerName: 'onContext2Pressed', paramCount: 1 },
    { handlerName: 'onContext3Pressed', paramCount: 1 },
    { handlerName: 'onContext4Pressed', paramCount: 1 },
    { handlerName: 'onDeletePressed', paramCount: 1 },
    { handlerName: 'onDigit0Pressed', paramCount: 1 },
    { handlerName: 'onDigit1Pressed', paramCount: 1 },
    { handlerName: 'onDigit2Pressed', paramCount: 1 },
    { handlerName: 'onDigit3Pressed', paramCount: 1 },
    { handlerName: 'onDigit4Pressed', paramCount: 1 },
    { handlerName: 'onDigit5Pressed', paramCount: 1 },
    { handlerName: 'onDigit6Pressed', paramCount: 1 },
    { handlerName: 'onDigit7Pressed', paramCount: 1 },
    { handlerName: 'onDigit8Pressed', paramCount: 1 },
    { handlerName: 'onDigit9Pressed', paramCount: 1 },
    { handlerName: 'onDownPressed', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEnterPressed', paramCount: 1 },
    { handlerName: 'onEscapePressed', paramCount: 1 },
    { handlerName: 'onFlipPressed', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onHangupPressed', paramCount: 1 },
    { handlerName: 'onLeftPressed', paramCount: 1 },
    { handlerName: 'onMenuPressed', paramCount: 1 },
    { handlerName: 'onNoPressed', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onNumberSignPressed', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onReturnPressed', paramCount: 1 },
    { handlerName: 'onRightPressed', paramCount: 1 },
    { handlerName: 'onSelectPressed', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSourceDeviceChanged', paramCount: 1 },
    { handlerName: 'onSpacePressed', paramCount: 1 },
    { handlerName: 'onTabPressed', paramCount: 1 },
    { handlerName: 'onUpPressed', paramCount: 1 },
    { handlerName: 'onVolumeDownPressed', paramCount: 1 },
    { handlerName: 'onVolumeUpPressed', paramCount: 1 },
    { handlerName: 'onYesPressed', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function KeyboardHandler(): KeyboardHandlerBuilder {
  return createFluentBuilder('KeyboardHandler', KEYBOARDHANDLER_META) as unknown as KeyboardHandlerBuilder;
}
