// AUTO-GENERATED — DO NOT EDIT
// Type: XrCamera
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface XrCameraBuilder {
  id(id: string): XrCameraBuilder;
  child(obj: QmlObjectBuilder): XrCameraBuilder;
  children(...objs: QmlObjectBuilder[]): XrCameraBuilder;

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
  onChildrenChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onClipFarChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onClipNearChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onParentChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onRightChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onStateChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onUpChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onXChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onYChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
  onZChanged(handler: DslSignalHandlerValue): XrCameraBuilder;
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
  grouped: [],
  attached: [],
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
