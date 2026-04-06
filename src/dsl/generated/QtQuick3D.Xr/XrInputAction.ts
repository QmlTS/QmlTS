// AUTO-GENERATED — DO NOT EDIT
// Type: XrInputAction
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface XrInputActionBuilder {
  id(id: string): XrInputActionBuilder;
  child(obj: QmlObjectBuilder): XrInputActionBuilder;
  children(...objs: QmlObjectBuilder[]): XrInputActionBuilder;

  actionId(value: QmlEnumToken): XrInputActionBuilder;
  actionIdBind(expr: string): XrInputActionBuilder;
  actionName(value: string): XrInputActionBuilder;
  actionNameBind(expr: string): XrInputActionBuilder;
  controller(value: QmlEnumToken): XrInputActionBuilder;
  controllerBind(expr: string): XrInputActionBuilder;
  enabled(value: boolean): XrInputActionBuilder;
  enabledBind(expr: string): XrInputActionBuilder;
  hand(value: QmlEnumToken): XrInputActionBuilder;
  handBind(expr: string): XrInputActionBuilder;
  objectName(value: string): XrInputActionBuilder;
  objectNameBind(expr: string): XrInputActionBuilder;
  onActionIdChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onActionNameChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onControllerChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onHandChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onTriggered(handler: DslSignalHandlerValue): XrInputActionBuilder;
  onValueChanged(handler: DslSignalHandlerValue): XrInputActionBuilder;
}

const XRINPUTACTION_META: TypeMetadata = {
  typeName: 'XrInputAction',
  properties: [
    { name: 'actionId', hasValue: true, hasBinding: true },
    { name: 'actionName', hasValue: true, hasBinding: true },
    { name: 'controller', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'hand', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActionIdChanged', paramCount: 0 },
    { handlerName: 'onActionNameChanged', paramCount: 0 },
    { handlerName: 'onControllerChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onHandChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onTriggered', paramCount: 0 },
    { handlerName: 'onValueChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function XrInputAction(): XrInputActionBuilder {
  return createFluentBuilder(
    'XrInputAction',
    XRINPUTACTION_META,
  ) as unknown as XrInputActionBuilder;
}

export namespace XrInputAction {
  export namespace Action {
    export const CustomAction = createEnumToken('XrInputAction', 'Action', 'CustomAction');
    export const Button1Pressed = createEnumToken('XrInputAction', 'Action', 'Button1Pressed');
    export const Button1Touched = createEnumToken('XrInputAction', 'Action', 'Button1Touched');
    export const Button2Pressed = createEnumToken('XrInputAction', 'Action', 'Button2Pressed');
    export const Button2Touched = createEnumToken('XrInputAction', 'Action', 'Button2Touched');
    export const ButtonMenuPressed = createEnumToken(
      'XrInputAction',
      'Action',
      'ButtonMenuPressed',
    );
    export const ButtonMenuTouched = createEnumToken(
      'XrInputAction',
      'Action',
      'ButtonMenuTouched',
    );
    export const ButtonSystemPressed = createEnumToken(
      'XrInputAction',
      'Action',
      'ButtonSystemPressed',
    );
    export const ButtonSystemTouched = createEnumToken(
      'XrInputAction',
      'Action',
      'ButtonSystemTouched',
    );
    export const SqueezeValue = createEnumToken('XrInputAction', 'Action', 'SqueezeValue');
    export const SqueezeForce = createEnumToken('XrInputAction', 'Action', 'SqueezeForce');
    export const SqueezePressed = createEnumToken('XrInputAction', 'Action', 'SqueezePressed');
    export const TriggerValue = createEnumToken('XrInputAction', 'Action', 'TriggerValue');
    export const TriggerPressed = createEnumToken('XrInputAction', 'Action', 'TriggerPressed');
    export const TriggerTouched = createEnumToken('XrInputAction', 'Action', 'TriggerTouched');
    export const ThumbstickX = createEnumToken('XrInputAction', 'Action', 'ThumbstickX');
    export const ThumbstickY = createEnumToken('XrInputAction', 'Action', 'ThumbstickY');
    export const ThumbstickPressed = createEnumToken(
      'XrInputAction',
      'Action',
      'ThumbstickPressed',
    );
    export const ThumbstickTouched = createEnumToken(
      'XrInputAction',
      'Action',
      'ThumbstickTouched',
    );
    export const ThumbrestTouched = createEnumToken('XrInputAction', 'Action', 'ThumbrestTouched');
    export const TrackpadX = createEnumToken('XrInputAction', 'Action', 'TrackpadX');
    export const TrackpadY = createEnumToken('XrInputAction', 'Action', 'TrackpadY');
    export const TrackpadForce = createEnumToken('XrInputAction', 'Action', 'TrackpadForce');
    export const TrackpadTouched = createEnumToken('XrInputAction', 'Action', 'TrackpadTouched');
    export const TrackpadPressed = createEnumToken('XrInputAction', 'Action', 'TrackpadPressed');
    export const IndexFingerPinch = createEnumToken('XrInputAction', 'Action', 'IndexFingerPinch');
    export const MiddleFingerPinch = createEnumToken(
      'XrInputAction',
      'Action',
      'MiddleFingerPinch',
    );
    export const RingFingerPinch = createEnumToken('XrInputAction', 'Action', 'RingFingerPinch');
    export const LittleFingerPinch = createEnumToken(
      'XrInputAction',
      'Action',
      'LittleFingerPinch',
    );
    export const HandTrackingMenuPress = createEnumToken(
      'XrInputAction',
      'Action',
      'HandTrackingMenuPress',
    );
    export const NumHandActions = createEnumToken('XrInputAction', 'Action', 'NumHandActions');
    export const NumActions = createEnumToken('XrInputAction', 'Action', 'NumActions');
  }
  export namespace Controller {
    export const LeftHand = createEnumToken('XrInputAction', 'Controller', 'LeftHand');
    export const RightHand = createEnumToken('XrInputAction', 'Controller', 'RightHand');
    export const Unknown = createEnumToken('XrInputAction', 'Controller', 'Unknown');
    export const LeftController = createEnumToken('XrInputAction', 'Controller', 'LeftController');
    export const RightController = createEnumToken(
      'XrInputAction',
      'Controller',
      'RightController',
    );
    export const UnknownController = createEnumToken(
      'XrInputAction',
      'Controller',
      'UnknownController',
    );
  }
}
