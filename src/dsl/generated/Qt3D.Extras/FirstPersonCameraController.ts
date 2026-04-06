// AUTO-GENERATED — DO NOT EDIT
// Type: FirstPersonCameraController
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { CameraBuilder } from '../Qt3D.Render/Camera.js';
export interface FirstPersonCameraControllerBuilder {
  id(id: string): FirstPersonCameraControllerBuilder;
  child(obj: QmlObjectBuilder): FirstPersonCameraControllerBuilder;
  children(...objs: QmlObjectBuilder[]): FirstPersonCameraControllerBuilder;

  acceleration(value: number): FirstPersonCameraControllerBuilder;
  accelerationBind(expr: string): FirstPersonCameraControllerBuilder;
  camera(value: CameraBuilder): FirstPersonCameraControllerBuilder;
  cameraBind(expr: string): FirstPersonCameraControllerBuilder;
  deceleration(value: number): FirstPersonCameraControllerBuilder;
  decelerationBind(expr: string): FirstPersonCameraControllerBuilder;
  enabled(value: boolean): FirstPersonCameraControllerBuilder;
  enabledBind(expr: string): FirstPersonCameraControllerBuilder;
  linearSpeed(value: number): FirstPersonCameraControllerBuilder;
  linearSpeedBind(expr: string): FirstPersonCameraControllerBuilder;
  lookSpeed(value: number): FirstPersonCameraControllerBuilder;
  lookSpeedBind(expr: string): FirstPersonCameraControllerBuilder;
  objectName(value: string): FirstPersonCameraControllerBuilder;
  objectNameBind(expr: string): FirstPersonCameraControllerBuilder;
  parent(value: QmlValue): FirstPersonCameraControllerBuilder;
  parentBind(expr: string): FirstPersonCameraControllerBuilder;
  onAccelerationChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onCameraChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onDecelerationChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onLinearSpeedChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onLookSpeedChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FirstPersonCameraControllerBuilder;
}

const FIRSTPERSONCAMERACONTROLLER_META: TypeMetadata = {
  typeName: 'FirstPersonCameraController',
  properties: [
    { name: 'acceleration', hasValue: true, hasBinding: true },
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'deceleration', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'linearSpeed', hasValue: true, hasBinding: true },
    { name: 'lookSpeed', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccelerationChanged', paramCount: 1 },
    { handlerName: 'onCameraChanged', paramCount: 0 },
    { handlerName: 'onDecelerationChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onLinearSpeedChanged', paramCount: 0 },
    { handlerName: 'onLookSpeedChanged', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function FirstPersonCameraController(): FirstPersonCameraControllerBuilder {
  return createFluentBuilder(
    'FirstPersonCameraController',
    FIRSTPERSONCAMERACONTROLLER_META,
  ) as unknown as FirstPersonCameraControllerBuilder;
}
