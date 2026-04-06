// AUTO-GENERATED — DO NOT EDIT
// Type: KeyboardHandler
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { KeyboardDeviceBuilder } from './KeyboardDevice.js';
export interface KeyboardHandlerBuilder {
  id(id: string): KeyboardHandlerBuilder;
  child(obj: QmlObjectBuilder): KeyboardHandlerBuilder;
  children(...objs: QmlObjectBuilder[]): KeyboardHandlerBuilder;

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
  onAddedToEntity(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onAsteriskPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onBackPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onBacktabPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onCallPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onCancelPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onContext1Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onContext2Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onContext3Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onContext4Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDeletePressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit0Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit1Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit2Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit3Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit4Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit5Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit6Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit7Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit8Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDigit9Pressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onDownPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onEnterPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onEscapePressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onFlipPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onHangupPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onLeftPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onMenuPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onNoPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onNumberSignPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onReleased(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onReturnPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onRightPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onSelectPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onSourceDeviceChanged(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onSpacePressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onTabPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onUpPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onVolumeDownPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onVolumeUpPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
  onYesPressed(handler: DslSignalHandlerValue): KeyboardHandlerBuilder;
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
  grouped: [],
  attached: [],
};

export function KeyboardHandler(): KeyboardHandlerBuilder {
  return createFluentBuilder(
    'KeyboardHandler',
    KEYBOARDHANDLER_META,
  ) as unknown as KeyboardHandlerBuilder;
}
