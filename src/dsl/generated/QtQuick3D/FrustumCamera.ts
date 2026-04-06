// AUTO-GENERATED — DO NOT EDIT
// Type: FrustumCamera
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { NodeBuilder } from './Node.js';
export interface FrustumCameraBuilder {
  id(id: string): FrustumCameraBuilder;
  child(obj: QmlObjectBuilder): FrustumCameraBuilder;
  children(...objs: QmlObjectBuilder[]): FrustumCameraBuilder;

  bottom(value: number): FrustumCameraBuilder;
  bottomBind(expr: string): FrustumCameraBuilder;
  clipFar(value: number): FrustumCameraBuilder;
  clipFarBind(expr: string): FrustumCameraBuilder;
  clipNear(value: number): FrustumCameraBuilder;
  clipNearBind(expr: string): FrustumCameraBuilder;
  eulerRotation(value: QmlVector3d): FrustumCameraBuilder;
  eulerRotationBind(expr: string): FrustumCameraBuilder;
  fieldOfView(value: number): FrustumCameraBuilder;
  fieldOfViewBind(expr: string): FrustumCameraBuilder;
  fieldOfViewOrientation(value: QmlEnumToken): FrustumCameraBuilder;
  fieldOfViewOrientationBind(expr: string): FrustumCameraBuilder;
  frustumCullingEnabled(value: boolean): FrustumCameraBuilder;
  frustumCullingEnabledBind(expr: string): FrustumCameraBuilder;
  layers(value: number): FrustumCameraBuilder;
  layersBind(expr: string): FrustumCameraBuilder;
  left(value: number): FrustumCameraBuilder;
  leftBind(expr: string): FrustumCameraBuilder;
  levelOfDetailBias(value: number): FrustumCameraBuilder;
  levelOfDetailBiasBind(expr: string): FrustumCameraBuilder;
  lookAtNode(value: NodeBuilder): FrustumCameraBuilder;
  lookAtNodeBind(expr: string): FrustumCameraBuilder;
  objectName(value: string): FrustumCameraBuilder;
  objectNameBind(expr: string): FrustumCameraBuilder;
  opacity(value: number): FrustumCameraBuilder;
  opacityBind(expr: string): FrustumCameraBuilder;
  parent(value: QmlValue): FrustumCameraBuilder;
  parentBind(expr: string): FrustumCameraBuilder;
  pivot(value: QmlVector3d): FrustumCameraBuilder;
  pivotBind(expr: string): FrustumCameraBuilder;
  position(value: QmlVector3d): FrustumCameraBuilder;
  positionBind(expr: string): FrustumCameraBuilder;
  right(value: number): FrustumCameraBuilder;
  rightBind(expr: string): FrustumCameraBuilder;
  rotation(value: QmlQuaternion): FrustumCameraBuilder;
  rotationBind(expr: string): FrustumCameraBuilder;
  scale(value: QmlVector3d): FrustumCameraBuilder;
  scaleBind(expr: string): FrustumCameraBuilder;
  state(value: string): FrustumCameraBuilder;
  stateBind(expr: string): FrustumCameraBuilder;
  staticFlags(value: number): FrustumCameraBuilder;
  staticFlagsBind(expr: string): FrustumCameraBuilder;
  top(value: number): FrustumCameraBuilder;
  topBind(expr: string): FrustumCameraBuilder;
  visible(value: boolean): FrustumCameraBuilder;
  visibleBind(expr: string): FrustumCameraBuilder;
  x(value: number): FrustumCameraBuilder;
  xBind(expr: string): FrustumCameraBuilder;
  y(value: number): FrustumCameraBuilder;
  yBind(expr: string): FrustumCameraBuilder;
  z(value: number): FrustumCameraBuilder;
  zBind(expr: string): FrustumCameraBuilder;
  onBottomChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onClipFarChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onClipNearChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onFieldOfViewChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onFieldOfViewOrientationChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onFrustumCullingEnabledChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onLeftChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onLevelOfDetailBiasChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onLookAtNodeChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onRightChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onStateChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onTopChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onUpChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onXChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onYChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
  onZChanged(handler: DslSignalHandlerValue): FrustumCameraBuilder;
}

const FRUSTUMCAMERA_META: TypeMetadata = {
  typeName: 'FrustumCamera',
  properties: [
    { name: 'bottom', hasValue: true, hasBinding: true },
    { name: 'clipFar', hasValue: true, hasBinding: true },
    { name: 'clipNear', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'fieldOfView', hasValue: true, hasBinding: true },
    { name: 'fieldOfViewOrientation', hasValue: true, hasBinding: true },
    { name: 'frustumCullingEnabled', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'left', hasValue: true, hasBinding: true },
    { name: 'levelOfDetailBias', hasValue: true, hasBinding: true },
    { name: 'lookAtNode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'right', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'top', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBottomChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onClipFarChanged', paramCount: 0 },
    { handlerName: 'onClipNearChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onFieldOfViewChanged', paramCount: 0 },
    { handlerName: 'onFieldOfViewOrientationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onFrustumCullingEnabledChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLeftChanged', paramCount: 0 },
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
    { handlerName: 'onTopChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function FrustumCamera(): FrustumCameraBuilder {
  return createFluentBuilder(
    'FrustumCamera',
    FRUSTUMCAMERA_META,
  ) as unknown as FrustumCameraBuilder;
}

export namespace FrustumCamera {
  export namespace FieldOfViewOrientation {
    export const Vertical = createEnumToken('FrustumCamera', 'FieldOfViewOrientation', 'Vertical');
    export const Horizontal = createEnumToken(
      'FrustumCamera',
      'FieldOfViewOrientation',
      'Horizontal',
    );
  }
  export namespace StaticFlags {
    export const None = createEnumToken('FrustumCamera', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('FrustumCamera', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('FrustumCamera', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('FrustumCamera', 'TransformSpace', 'SceneSpace');
  }
}
