// AUTO-GENERATED — DO NOT EDIT
// Type: CustomCamera
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlMatrix4x4, QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { NodeBuilder } from './Node.js';
export interface CustomCameraBuilder {
  id(id: string): CustomCameraBuilder;
  child(obj: QmlObjectBuilder): CustomCameraBuilder;

  eulerRotation(value: QmlVector3d): CustomCameraBuilder;
  eulerRotationBind(expr: string): CustomCameraBuilder;
  frustumCullingEnabled(value: boolean): CustomCameraBuilder;
  frustumCullingEnabledBind(expr: string): CustomCameraBuilder;
  layers(value: number): CustomCameraBuilder;
  layersBind(expr: string): CustomCameraBuilder;
  levelOfDetailBias(value: number): CustomCameraBuilder;
  levelOfDetailBiasBind(expr: string): CustomCameraBuilder;
  lookAtNode(value: NodeBuilder): CustomCameraBuilder;
  lookAtNodeBind(expr: string): CustomCameraBuilder;
  objectName(value: string): CustomCameraBuilder;
  objectNameBind(expr: string): CustomCameraBuilder;
  opacity(value: number): CustomCameraBuilder;
  opacityBind(expr: string): CustomCameraBuilder;
  parent(value: QmlValue): CustomCameraBuilder;
  parentBind(expr: string): CustomCameraBuilder;
  pivot(value: QmlVector3d): CustomCameraBuilder;
  pivotBind(expr: string): CustomCameraBuilder;
  position(value: QmlVector3d): CustomCameraBuilder;
  positionBind(expr: string): CustomCameraBuilder;
  projection(value: QmlMatrix4x4): CustomCameraBuilder;
  projectionBind(expr: string): CustomCameraBuilder;
  rotation(value: QmlQuaternion): CustomCameraBuilder;
  rotationBind(expr: string): CustomCameraBuilder;
  scale(value: QmlVector3d): CustomCameraBuilder;
  scaleBind(expr: string): CustomCameraBuilder;
  state(value: string): CustomCameraBuilder;
  stateBind(expr: string): CustomCameraBuilder;
  staticFlags(value: number): CustomCameraBuilder;
  staticFlagsBind(expr: string): CustomCameraBuilder;
  visible(value: boolean): CustomCameraBuilder;
  visibleBind(expr: string): CustomCameraBuilder;
  x(value: number): CustomCameraBuilder;
  xBind(expr: string): CustomCameraBuilder;
  y(value: number): CustomCameraBuilder;
  yBind(expr: string): CustomCameraBuilder;
  z(value: number): CustomCameraBuilder;
  zBind(expr: string): CustomCameraBuilder;
  onChildrenChanged(body: string): CustomCameraBuilder;
  onEulerRotationChanged(body: string): CustomCameraBuilder;
  onForwardChanged(body: string): CustomCameraBuilder;
  onFrustumCullingEnabledChanged(body: string): CustomCameraBuilder;
  onLayersChanged(body: string): CustomCameraBuilder;
  onLevelOfDetailBiasChanged(body: string): CustomCameraBuilder;
  onLocalOpacityChanged(body: string): CustomCameraBuilder;
  onLookAtNodeChanged(body: string): CustomCameraBuilder;
  onObjectNameChanged(body: string): CustomCameraBuilder;
  onParentChanged(body: string): CustomCameraBuilder;
  onPivotChanged(body: string): CustomCameraBuilder;
  onPositionChanged(body: string): CustomCameraBuilder;
  onProjectionChanged(body: string): CustomCameraBuilder;
  onRightChanged(body: string): CustomCameraBuilder;
  onRotationChanged(body: string): CustomCameraBuilder;
  onScaleChanged(body: string): CustomCameraBuilder;
  onScenePositionChanged(body: string): CustomCameraBuilder;
  onSceneRotationChanged(body: string): CustomCameraBuilder;
  onSceneScaleChanged(body: string): CustomCameraBuilder;
  onSceneTransformChanged(body: string): CustomCameraBuilder;
  onStateChanged(body: string): CustomCameraBuilder;
  onStaticFlagsChanged(body: string): CustomCameraBuilder;
  onUpChanged(body: string): CustomCameraBuilder;
  onVisibleChanged(body: string): CustomCameraBuilder;
  onXChanged(body: string): CustomCameraBuilder;
  onYChanged(body: string): CustomCameraBuilder;
  onZChanged(body: string): CustomCameraBuilder;
}

const CUSTOMCAMERA_META: TypeMetadata = {
  typeName: 'CustomCamera',
  properties: [
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'frustumCullingEnabled', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'levelOfDetailBias', hasValue: true, hasBinding: true },
    { name: 'lookAtNode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'projection', hasValue: true, hasBinding: true },
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
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onFrustumCullingEnabledChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLevelOfDetailBiasChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onLookAtNodeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onProjectionChanged', paramCount: 0 },
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

export function CustomCamera(): CustomCameraBuilder {
  return createFluentBuilder('CustomCamera', CUSTOMCAMERA_META) as unknown as CustomCameraBuilder;
}

export namespace CustomCamera {
  export namespace StaticFlags {
    export const None = createEnumToken('CustomCamera', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('CustomCamera', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('CustomCamera', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('CustomCamera', 'TransformSpace', 'SceneSpace');
  }
}
