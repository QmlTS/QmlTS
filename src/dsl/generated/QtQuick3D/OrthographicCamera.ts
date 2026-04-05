// AUTO-GENERATED — DO NOT EDIT
// Type: OrthographicCamera
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { NodeBuilder } from './Node.js';
export interface OrthographicCameraBuilder {
  id(id: string): OrthographicCameraBuilder;
  child(obj: QmlObjectBuilder): OrthographicCameraBuilder;

  clipFar(value: number): OrthographicCameraBuilder;
  clipFarBind(expr: string): OrthographicCameraBuilder;
  clipNear(value: number): OrthographicCameraBuilder;
  clipNearBind(expr: string): OrthographicCameraBuilder;
  eulerRotation(value: QmlVector3d): OrthographicCameraBuilder;
  eulerRotationBind(expr: string): OrthographicCameraBuilder;
  frustumCullingEnabled(value: boolean): OrthographicCameraBuilder;
  frustumCullingEnabledBind(expr: string): OrthographicCameraBuilder;
  horizontalMagnification(value: number): OrthographicCameraBuilder;
  horizontalMagnificationBind(expr: string): OrthographicCameraBuilder;
  layers(value: number): OrthographicCameraBuilder;
  layersBind(expr: string): OrthographicCameraBuilder;
  levelOfDetailBias(value: number): OrthographicCameraBuilder;
  levelOfDetailBiasBind(expr: string): OrthographicCameraBuilder;
  lookAtNode(value: NodeBuilder): OrthographicCameraBuilder;
  lookAtNodeBind(expr: string): OrthographicCameraBuilder;
  objectName(value: string): OrthographicCameraBuilder;
  objectNameBind(expr: string): OrthographicCameraBuilder;
  opacity(value: number): OrthographicCameraBuilder;
  opacityBind(expr: string): OrthographicCameraBuilder;
  parent(value: QmlValue): OrthographicCameraBuilder;
  parentBind(expr: string): OrthographicCameraBuilder;
  pivot(value: QmlVector3d): OrthographicCameraBuilder;
  pivotBind(expr: string): OrthographicCameraBuilder;
  position(value: QmlVector3d): OrthographicCameraBuilder;
  positionBind(expr: string): OrthographicCameraBuilder;
  rotation(value: QmlQuaternion): OrthographicCameraBuilder;
  rotationBind(expr: string): OrthographicCameraBuilder;
  scale(value: QmlVector3d): OrthographicCameraBuilder;
  scaleBind(expr: string): OrthographicCameraBuilder;
  state(value: string): OrthographicCameraBuilder;
  stateBind(expr: string): OrthographicCameraBuilder;
  staticFlags(value: number): OrthographicCameraBuilder;
  staticFlagsBind(expr: string): OrthographicCameraBuilder;
  verticalMagnification(value: number): OrthographicCameraBuilder;
  verticalMagnificationBind(expr: string): OrthographicCameraBuilder;
  visible(value: boolean): OrthographicCameraBuilder;
  visibleBind(expr: string): OrthographicCameraBuilder;
  x(value: number): OrthographicCameraBuilder;
  xBind(expr: string): OrthographicCameraBuilder;
  y(value: number): OrthographicCameraBuilder;
  yBind(expr: string): OrthographicCameraBuilder;
  z(value: number): OrthographicCameraBuilder;
  zBind(expr: string): OrthographicCameraBuilder;
  onChildrenChanged(body: string): OrthographicCameraBuilder;
  onClipFarChanged(body: string): OrthographicCameraBuilder;
  onClipNearChanged(body: string): OrthographicCameraBuilder;
  onEulerRotationChanged(body: string): OrthographicCameraBuilder;
  onForwardChanged(body: string): OrthographicCameraBuilder;
  onFrustumCullingEnabledChanged(body: string): OrthographicCameraBuilder;
  onHorizontalMagnificationChanged(body: string): OrthographicCameraBuilder;
  onLayersChanged(body: string): OrthographicCameraBuilder;
  onLevelOfDetailBiasChanged(body: string): OrthographicCameraBuilder;
  onLocalOpacityChanged(body: string): OrthographicCameraBuilder;
  onLookAtNodeChanged(body: string): OrthographicCameraBuilder;
  onObjectNameChanged(body: string): OrthographicCameraBuilder;
  onParentChanged(body: string): OrthographicCameraBuilder;
  onPivotChanged(body: string): OrthographicCameraBuilder;
  onPositionChanged(body: string): OrthographicCameraBuilder;
  onRightChanged(body: string): OrthographicCameraBuilder;
  onRotationChanged(body: string): OrthographicCameraBuilder;
  onScaleChanged(body: string): OrthographicCameraBuilder;
  onScenePositionChanged(body: string): OrthographicCameraBuilder;
  onSceneRotationChanged(body: string): OrthographicCameraBuilder;
  onSceneScaleChanged(body: string): OrthographicCameraBuilder;
  onSceneTransformChanged(body: string): OrthographicCameraBuilder;
  onStateChanged(body: string): OrthographicCameraBuilder;
  onStaticFlagsChanged(body: string): OrthographicCameraBuilder;
  onUpChanged(body: string): OrthographicCameraBuilder;
  onVerticalMagnificationChanged(body: string): OrthographicCameraBuilder;
  onVisibleChanged(body: string): OrthographicCameraBuilder;
  onXChanged(body: string): OrthographicCameraBuilder;
  onYChanged(body: string): OrthographicCameraBuilder;
  onZChanged(body: string): OrthographicCameraBuilder;
}

const ORTHOGRAPHICCAMERA_META: TypeMetadata = {
  typeName: 'OrthographicCamera',
  properties: [
    { name: 'clipFar', hasValue: true, hasBinding: true },
    { name: 'clipNear', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'frustumCullingEnabled', hasValue: true, hasBinding: true },
    { name: 'horizontalMagnification', hasValue: true, hasBinding: true },
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
    { name: 'verticalMagnification', hasValue: true, hasBinding: true },
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
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onFrustumCullingEnabledChanged', paramCount: 0 },
    { handlerName: 'onHorizontalMagnificationChanged', paramCount: 0 },
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
    { handlerName: 'onVerticalMagnificationChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function OrthographicCamera(): OrthographicCameraBuilder {
  return createFluentBuilder(
    'OrthographicCamera',
    ORTHOGRAPHICCAMERA_META,
  ) as unknown as OrthographicCameraBuilder;
}

export namespace OrthographicCamera {
  export namespace StaticFlags {
    export const None = createEnumToken('OrthographicCamera', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('OrthographicCamera', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken(
      'OrthographicCamera',
      'TransformSpace',
      'ParentSpace',
    );
    export const SceneSpace = createEnumToken('OrthographicCamera', 'TransformSpace', 'SceneSpace');
  }
}
