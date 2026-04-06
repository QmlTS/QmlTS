// AUTO-GENERATED — DO NOT EDIT
// Type: OrbitCameraController
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { CameraBuilder } from '../Qt3D.Render/Camera.js';
export interface OrbitCameraControllerBuilder {
  id(id: string): OrbitCameraControllerBuilder;
  child(obj: QmlObjectBuilder): OrbitCameraControllerBuilder;
  children(...objs: QmlObjectBuilder[]): OrbitCameraControllerBuilder;

  acceleration(value: number): OrbitCameraControllerBuilder;
  accelerationBind(expr: string): OrbitCameraControllerBuilder;
  camera(value: CameraBuilder): OrbitCameraControllerBuilder;
  cameraBind(expr: string): OrbitCameraControllerBuilder;
  deceleration(value: number): OrbitCameraControllerBuilder;
  decelerationBind(expr: string): OrbitCameraControllerBuilder;
  enabled(value: boolean): OrbitCameraControllerBuilder;
  enabledBind(expr: string): OrbitCameraControllerBuilder;
  inversePan(value: boolean): OrbitCameraControllerBuilder;
  inversePanBind(expr: string): OrbitCameraControllerBuilder;
  inverseTilt(value: boolean): OrbitCameraControllerBuilder;
  inverseTiltBind(expr: string): OrbitCameraControllerBuilder;
  inverseXTranslate(value: boolean): OrbitCameraControllerBuilder;
  inverseXTranslateBind(expr: string): OrbitCameraControllerBuilder;
  inverseYTranslate(value: boolean): OrbitCameraControllerBuilder;
  inverseYTranslateBind(expr: string): OrbitCameraControllerBuilder;
  linearSpeed(value: number): OrbitCameraControllerBuilder;
  linearSpeedBind(expr: string): OrbitCameraControllerBuilder;
  lookSpeed(value: number): OrbitCameraControllerBuilder;
  lookSpeedBind(expr: string): OrbitCameraControllerBuilder;
  objectName(value: string): OrbitCameraControllerBuilder;
  objectNameBind(expr: string): OrbitCameraControllerBuilder;
  parent(value: QmlValue): OrbitCameraControllerBuilder;
  parentBind(expr: string): OrbitCameraControllerBuilder;
  upVector(value: QmlVector3d): OrbitCameraControllerBuilder;
  upVectorBind(expr: string): OrbitCameraControllerBuilder;
  zoomInLimit(value: number): OrbitCameraControllerBuilder;
  zoomInLimitBind(expr: string): OrbitCameraControllerBuilder;
  zoomTranslateViewCenter(value: boolean): OrbitCameraControllerBuilder;
  zoomTranslateViewCenterBind(expr: string): OrbitCameraControllerBuilder;
  onAccelerationChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onCameraChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onDecelerationChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onInversePanChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onInverseTiltChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onInverseXTranslateChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onInverseYTranslateChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onLinearSpeedChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onLookSpeedChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onUpVectorChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onZoomInLimitChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
  onZoomTranslateViewCenterChanged(handler: DslSignalHandlerValue): OrbitCameraControllerBuilder;
}

const ORBITCAMERACONTROLLER_META: TypeMetadata = {
  typeName: 'OrbitCameraController',
  properties: [
    { name: 'acceleration', hasValue: true, hasBinding: true },
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'deceleration', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'inversePan', hasValue: true, hasBinding: true },
    { name: 'inverseTilt', hasValue: true, hasBinding: true },
    { name: 'inverseXTranslate', hasValue: true, hasBinding: true },
    { name: 'inverseYTranslate', hasValue: true, hasBinding: true },
    { name: 'linearSpeed', hasValue: true, hasBinding: true },
    { name: 'lookSpeed', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'upVector', hasValue: true, hasBinding: true },
    { name: 'zoomInLimit', hasValue: true, hasBinding: true },
    { name: 'zoomTranslateViewCenter', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccelerationChanged', paramCount: 1 },
    { handlerName: 'onCameraChanged', paramCount: 0 },
    { handlerName: 'onDecelerationChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onInversePanChanged', paramCount: 1 },
    { handlerName: 'onInverseTiltChanged', paramCount: 1 },
    { handlerName: 'onInverseXTranslateChanged', paramCount: 1 },
    { handlerName: 'onInverseYTranslateChanged', paramCount: 1 },
    { handlerName: 'onLinearSpeedChanged', paramCount: 0 },
    { handlerName: 'onLookSpeedChanged', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onUpVectorChanged', paramCount: 1 },
    { handlerName: 'onZoomInLimitChanged', paramCount: 0 },
    { handlerName: 'onZoomTranslateViewCenterChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function OrbitCameraController(): OrbitCameraControllerBuilder {
  return createFluentBuilder(
    'OrbitCameraController',
    ORBITCAMERACONTROLLER_META,
  ) as unknown as OrbitCameraControllerBuilder;
}
