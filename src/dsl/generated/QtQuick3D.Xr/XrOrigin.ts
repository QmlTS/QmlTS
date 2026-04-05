// AUTO-GENERATED — DO NOT EDIT
// Type: XrOrigin
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { XrCameraBuilder } from './XrCamera.js';
export interface XrOriginBuilder {
  id(id: string): XrOriginBuilder;
  child(obj: QmlObjectBuilder): XrOriginBuilder;

  camera(value: XrCameraBuilder): XrOriginBuilder;
  cameraBind(expr: string): XrOriginBuilder;
  eulerRotation(value: QmlVector3d): XrOriginBuilder;
  eulerRotationBind(expr: string): XrOriginBuilder;
  layers(value: number): XrOriginBuilder;
  layersBind(expr: string): XrOriginBuilder;
  objectName(value: string): XrOriginBuilder;
  objectNameBind(expr: string): XrOriginBuilder;
  opacity(value: number): XrOriginBuilder;
  opacityBind(expr: string): XrOriginBuilder;
  parent(value: QmlValue): XrOriginBuilder;
  parentBind(expr: string): XrOriginBuilder;
  pivot(value: QmlVector3d): XrOriginBuilder;
  pivotBind(expr: string): XrOriginBuilder;
  position(value: QmlVector3d): XrOriginBuilder;
  positionBind(expr: string): XrOriginBuilder;
  rotation(value: QmlQuaternion): XrOriginBuilder;
  rotationBind(expr: string): XrOriginBuilder;
  scale(value: QmlVector3d): XrOriginBuilder;
  scaleBind(expr: string): XrOriginBuilder;
  state(value: string): XrOriginBuilder;
  stateBind(expr: string): XrOriginBuilder;
  staticFlags(value: number): XrOriginBuilder;
  staticFlagsBind(expr: string): XrOriginBuilder;
  visible(value: boolean): XrOriginBuilder;
  visibleBind(expr: string): XrOriginBuilder;
  x(value: number): XrOriginBuilder;
  xBind(expr: string): XrOriginBuilder;
  y(value: number): XrOriginBuilder;
  yBind(expr: string): XrOriginBuilder;
  z(value: number): XrOriginBuilder;
  zBind(expr: string): XrOriginBuilder;
  onCameraChanged(body: string): XrOriginBuilder;
  onChildrenChanged(body: string): XrOriginBuilder;
  onEulerRotationChanged(body: string): XrOriginBuilder;
  onForwardChanged(body: string): XrOriginBuilder;
  onLayersChanged(body: string): XrOriginBuilder;
  onLocalOpacityChanged(body: string): XrOriginBuilder;
  onObjectNameChanged(body: string): XrOriginBuilder;
  onParentChanged(body: string): XrOriginBuilder;
  onPivotChanged(body: string): XrOriginBuilder;
  onPositionChanged(body: string): XrOriginBuilder;
  onRightChanged(body: string): XrOriginBuilder;
  onRotationChanged(body: string): XrOriginBuilder;
  onScaleChanged(body: string): XrOriginBuilder;
  onScenePositionChanged(body: string): XrOriginBuilder;
  onSceneRotationChanged(body: string): XrOriginBuilder;
  onSceneScaleChanged(body: string): XrOriginBuilder;
  onSceneTransformChanged(body: string): XrOriginBuilder;
  onStateChanged(body: string): XrOriginBuilder;
  onStaticFlagsChanged(body: string): XrOriginBuilder;
  onUpChanged(body: string): XrOriginBuilder;
  onVisibleChanged(body: string): XrOriginBuilder;
  onXChanged(body: string): XrOriginBuilder;
  onYChanged(body: string): XrOriginBuilder;
  onZChanged(body: string): XrOriginBuilder;
}

const XRORIGIN_META: TypeMetadata = {
  typeName: 'XrOrigin',
  properties: [
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCameraChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function XrOrigin(): XrOriginBuilder {
  return createFluentBuilder('XrOrigin', XRORIGIN_META) as unknown as XrOriginBuilder;
}

export namespace XrOrigin {
  export namespace StaticFlags {
    export const None = createEnumToken('XrOrigin', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('XrOrigin', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('XrOrigin', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('XrOrigin', 'TransformSpace', 'SceneSpace');
  }
}
