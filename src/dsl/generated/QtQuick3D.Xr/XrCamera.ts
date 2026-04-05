// AUTO-GENERATED — DO NOT EDIT
// Type: XrCamera
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface XrCameraBuilder {
  id(id: string): XrCameraBuilder;
  child(obj: QmlObjectBuilder): XrCameraBuilder;

  clipFar(value: number): XrCameraBuilder;
  clipFarBind(expr: string): XrCameraBuilder;
  clipNear(value: number): XrCameraBuilder;
  clipNearBind(expr: string): XrCameraBuilder;
  eulerRotation(value: QmlVector3d): XrCameraBuilder;
  eulerRotationBind(expr: string): XrCameraBuilder;
  layers(value: number): XrCameraBuilder;
  layersBind(expr: string): XrCameraBuilder;
  objectName(value: string): XrCameraBuilder;
  objectNameBind(expr: string): XrCameraBuilder;
  opacity(value: number): XrCameraBuilder;
  opacityBind(expr: string): XrCameraBuilder;
  parent(value: QmlValue): XrCameraBuilder;
  parentBind(expr: string): XrCameraBuilder;
  pivot(value: QmlVector3d): XrCameraBuilder;
  pivotBind(expr: string): XrCameraBuilder;
  position(value: QmlVector3d): XrCameraBuilder;
  positionBind(expr: string): XrCameraBuilder;
  rotation(value: QmlQuaternion): XrCameraBuilder;
  rotationBind(expr: string): XrCameraBuilder;
  scale(value: QmlVector3d): XrCameraBuilder;
  scaleBind(expr: string): XrCameraBuilder;
  state(value: string): XrCameraBuilder;
  stateBind(expr: string): XrCameraBuilder;
  staticFlags(value: number): XrCameraBuilder;
  staticFlagsBind(expr: string): XrCameraBuilder;
  visible(value: boolean): XrCameraBuilder;
  visibleBind(expr: string): XrCameraBuilder;
  x(value: number): XrCameraBuilder;
  xBind(expr: string): XrCameraBuilder;
  y(value: number): XrCameraBuilder;
  yBind(expr: string): XrCameraBuilder;
  z(value: number): XrCameraBuilder;
  zBind(expr: string): XrCameraBuilder;
  onChildrenChanged(body: string): XrCameraBuilder;
  onClipFarChanged(body: string): XrCameraBuilder;
  onClipNearChanged(body: string): XrCameraBuilder;
  onEulerRotationChanged(body: string): XrCameraBuilder;
  onForwardChanged(body: string): XrCameraBuilder;
  onLayersChanged(body: string): XrCameraBuilder;
  onLocalOpacityChanged(body: string): XrCameraBuilder;
  onObjectNameChanged(body: string): XrCameraBuilder;
  onParentChanged(body: string): XrCameraBuilder;
  onPivotChanged(body: string): XrCameraBuilder;
  onPositionChanged(body: string): XrCameraBuilder;
  onRightChanged(body: string): XrCameraBuilder;
  onRotationChanged(body: string): XrCameraBuilder;
  onScaleChanged(body: string): XrCameraBuilder;
  onScenePositionChanged(body: string): XrCameraBuilder;
  onSceneRotationChanged(body: string): XrCameraBuilder;
  onSceneScaleChanged(body: string): XrCameraBuilder;
  onSceneTransformChanged(body: string): XrCameraBuilder;
  onStateChanged(body: string): XrCameraBuilder;
  onStaticFlagsChanged(body: string): XrCameraBuilder;
  onUpChanged(body: string): XrCameraBuilder;
  onVisibleChanged(body: string): XrCameraBuilder;
  onXChanged(body: string): XrCameraBuilder;
  onYChanged(body: string): XrCameraBuilder;
  onZChanged(body: string): XrCameraBuilder;
}

const XRCAMERA_META: TypeMetadata = {
  typeName: 'XrCamera',
  properties: [
    { name: 'clipFar', hasValue: true, hasBinding: true },
    { name: 'clipNear', hasValue: true, hasBinding: true },
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
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onClipFarChanged', paramCount: 1 },
    { handlerName: 'onClipNearChanged', paramCount: 1 },
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

export function XrCamera(): XrCameraBuilder {
  return createFluentBuilder('XrCamera', XRCAMERA_META) as unknown as XrCameraBuilder;
}

export namespace XrCamera {
  export namespace StaticFlags {
    export const None = createEnumToken('XrCamera', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('XrCamera', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('XrCamera', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('XrCamera', 'TransformSpace', 'SceneSpace');
  }
}
