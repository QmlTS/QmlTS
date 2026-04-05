// AUTO-GENERATED — DO NOT EDIT
// Type: PerspectiveCamera
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { NodeBuilder } from './Node.js';
export interface PerspectiveCameraBuilder {
  id(id: string): PerspectiveCameraBuilder;
  child(obj: QmlObjectBuilder): PerspectiveCameraBuilder;

  clipFar(value: number): PerspectiveCameraBuilder;
  clipFarBind(expr: string): PerspectiveCameraBuilder;
  clipNear(value: number): PerspectiveCameraBuilder;
  clipNearBind(expr: string): PerspectiveCameraBuilder;
  eulerRotation(value: QmlVector3d): PerspectiveCameraBuilder;
  eulerRotationBind(expr: string): PerspectiveCameraBuilder;
  fieldOfView(value: number): PerspectiveCameraBuilder;
  fieldOfViewBind(expr: string): PerspectiveCameraBuilder;
  fieldOfViewOrientation(value: QmlEnumToken): PerspectiveCameraBuilder;
  fieldOfViewOrientationBind(expr: string): PerspectiveCameraBuilder;
  frustumCullingEnabled(value: boolean): PerspectiveCameraBuilder;
  frustumCullingEnabledBind(expr: string): PerspectiveCameraBuilder;
  layers(value: number): PerspectiveCameraBuilder;
  layersBind(expr: string): PerspectiveCameraBuilder;
  levelOfDetailBias(value: number): PerspectiveCameraBuilder;
  levelOfDetailBiasBind(expr: string): PerspectiveCameraBuilder;
  lookAtNode(value: NodeBuilder): PerspectiveCameraBuilder;
  lookAtNodeBind(expr: string): PerspectiveCameraBuilder;
  objectName(value: string): PerspectiveCameraBuilder;
  objectNameBind(expr: string): PerspectiveCameraBuilder;
  opacity(value: number): PerspectiveCameraBuilder;
  opacityBind(expr: string): PerspectiveCameraBuilder;
  parent(value: QmlValue): PerspectiveCameraBuilder;
  parentBind(expr: string): PerspectiveCameraBuilder;
  pivot(value: QmlVector3d): PerspectiveCameraBuilder;
  pivotBind(expr: string): PerspectiveCameraBuilder;
  position(value: QmlVector3d): PerspectiveCameraBuilder;
  positionBind(expr: string): PerspectiveCameraBuilder;
  rotation(value: QmlQuaternion): PerspectiveCameraBuilder;
  rotationBind(expr: string): PerspectiveCameraBuilder;
  scale(value: QmlVector3d): PerspectiveCameraBuilder;
  scaleBind(expr: string): PerspectiveCameraBuilder;
  state(value: string): PerspectiveCameraBuilder;
  stateBind(expr: string): PerspectiveCameraBuilder;
  staticFlags(value: number): PerspectiveCameraBuilder;
  staticFlagsBind(expr: string): PerspectiveCameraBuilder;
  visible(value: boolean): PerspectiveCameraBuilder;
  visibleBind(expr: string): PerspectiveCameraBuilder;
  x(value: number): PerspectiveCameraBuilder;
  xBind(expr: string): PerspectiveCameraBuilder;
  y(value: number): PerspectiveCameraBuilder;
  yBind(expr: string): PerspectiveCameraBuilder;
  z(value: number): PerspectiveCameraBuilder;
  zBind(expr: string): PerspectiveCameraBuilder;
  onChildrenChanged(body: string): PerspectiveCameraBuilder;
  onClipFarChanged(body: string): PerspectiveCameraBuilder;
  onClipNearChanged(body: string): PerspectiveCameraBuilder;
  onEulerRotationChanged(body: string): PerspectiveCameraBuilder;
  onFieldOfViewChanged(body: string): PerspectiveCameraBuilder;
  onFieldOfViewOrientationChanged(body: string): PerspectiveCameraBuilder;
  onForwardChanged(body: string): PerspectiveCameraBuilder;
  onFrustumCullingEnabledChanged(body: string): PerspectiveCameraBuilder;
  onLayersChanged(body: string): PerspectiveCameraBuilder;
  onLevelOfDetailBiasChanged(body: string): PerspectiveCameraBuilder;
  onLocalOpacityChanged(body: string): PerspectiveCameraBuilder;
  onLookAtNodeChanged(body: string): PerspectiveCameraBuilder;
  onObjectNameChanged(body: string): PerspectiveCameraBuilder;
  onParentChanged(body: string): PerspectiveCameraBuilder;
  onPivotChanged(body: string): PerspectiveCameraBuilder;
  onPositionChanged(body: string): PerspectiveCameraBuilder;
  onRightChanged(body: string): PerspectiveCameraBuilder;
  onRotationChanged(body: string): PerspectiveCameraBuilder;
  onScaleChanged(body: string): PerspectiveCameraBuilder;
  onScenePositionChanged(body: string): PerspectiveCameraBuilder;
  onSceneRotationChanged(body: string): PerspectiveCameraBuilder;
  onSceneScaleChanged(body: string): PerspectiveCameraBuilder;
  onSceneTransformChanged(body: string): PerspectiveCameraBuilder;
  onStateChanged(body: string): PerspectiveCameraBuilder;
  onStaticFlagsChanged(body: string): PerspectiveCameraBuilder;
  onUpChanged(body: string): PerspectiveCameraBuilder;
  onVisibleChanged(body: string): PerspectiveCameraBuilder;
  onXChanged(body: string): PerspectiveCameraBuilder;
  onYChanged(body: string): PerspectiveCameraBuilder;
  onZChanged(body: string): PerspectiveCameraBuilder;
}

const PERSPECTIVECAMERA_META: TypeMetadata = {
  typeName: 'PerspectiveCamera',
  properties: [
    { name: 'clipFar', hasValue: true, hasBinding: true },
    { name: 'clipNear', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'fieldOfView', hasValue: true, hasBinding: true },
    { name: 'fieldOfViewOrientation', hasValue: true, hasBinding: true },
    { name: 'frustumCullingEnabled', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'levelOfDetailBias', hasValue: true, hasBinding: true },
    { name: 'lookAtNode', hasValue: true, hasBinding: true },
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
    { handlerName: 'onClipFarChanged', paramCount: 0 },
    { handlerName: 'onClipNearChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onFieldOfViewChanged', paramCount: 0 },
    { handlerName: 'onFieldOfViewOrientationChanged', paramCount: 0 },
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

export function PerspectiveCamera(): PerspectiveCameraBuilder {
  return createFluentBuilder('PerspectiveCamera', PERSPECTIVECAMERA_META) as unknown as PerspectiveCameraBuilder;
}

export namespace PerspectiveCamera {
  export namespace FieldOfViewOrientation {
    export const Vertical = createEnumToken('PerspectiveCamera', 'FieldOfViewOrientation', 'Vertical');
    export const Horizontal = createEnumToken('PerspectiveCamera', 'FieldOfViewOrientation', 'Horizontal');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('PerspectiveCamera', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('PerspectiveCamera', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('PerspectiveCamera', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('PerspectiveCamera', 'TransformSpace', 'SceneSpace');
  }
}
