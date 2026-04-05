// AUTO-GENERATED — DO NOT EDIT
// Type: Skeleton
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SkeletonBuilder {
  id(id: string): SkeletonBuilder;
  child(obj: QmlObjectBuilder): SkeletonBuilder;

  eulerRotation(value: QmlVector3d): SkeletonBuilder;
  eulerRotationBind(expr: string): SkeletonBuilder;
  layers(value: number): SkeletonBuilder;
  layersBind(expr: string): SkeletonBuilder;
  objectName(value: string): SkeletonBuilder;
  objectNameBind(expr: string): SkeletonBuilder;
  opacity(value: number): SkeletonBuilder;
  opacityBind(expr: string): SkeletonBuilder;
  parent(value: QmlValue): SkeletonBuilder;
  parentBind(expr: string): SkeletonBuilder;
  pivot(value: QmlVector3d): SkeletonBuilder;
  pivotBind(expr: string): SkeletonBuilder;
  position(value: QmlVector3d): SkeletonBuilder;
  positionBind(expr: string): SkeletonBuilder;
  rotation(value: QmlQuaternion): SkeletonBuilder;
  rotationBind(expr: string): SkeletonBuilder;
  scale(value: QmlVector3d): SkeletonBuilder;
  scaleBind(expr: string): SkeletonBuilder;
  state(value: string): SkeletonBuilder;
  stateBind(expr: string): SkeletonBuilder;
  staticFlags(value: number): SkeletonBuilder;
  staticFlagsBind(expr: string): SkeletonBuilder;
  visible(value: boolean): SkeletonBuilder;
  visibleBind(expr: string): SkeletonBuilder;
  x(value: number): SkeletonBuilder;
  xBind(expr: string): SkeletonBuilder;
  y(value: number): SkeletonBuilder;
  yBind(expr: string): SkeletonBuilder;
  z(value: number): SkeletonBuilder;
  zBind(expr: string): SkeletonBuilder;
  onChildrenChanged(body: string): SkeletonBuilder;
  onEulerRotationChanged(body: string): SkeletonBuilder;
  onForwardChanged(body: string): SkeletonBuilder;
  onLayersChanged(body: string): SkeletonBuilder;
  onLocalOpacityChanged(body: string): SkeletonBuilder;
  onObjectNameChanged(body: string): SkeletonBuilder;
  onParentChanged(body: string): SkeletonBuilder;
  onPivotChanged(body: string): SkeletonBuilder;
  onPositionChanged(body: string): SkeletonBuilder;
  onRightChanged(body: string): SkeletonBuilder;
  onRotationChanged(body: string): SkeletonBuilder;
  onScaleChanged(body: string): SkeletonBuilder;
  onScenePositionChanged(body: string): SkeletonBuilder;
  onSceneRotationChanged(body: string): SkeletonBuilder;
  onSceneScaleChanged(body: string): SkeletonBuilder;
  onSceneTransformChanged(body: string): SkeletonBuilder;
  onSkeletonNodeDirty(body: string): SkeletonBuilder;
  onStateChanged(body: string): SkeletonBuilder;
  onStaticFlagsChanged(body: string): SkeletonBuilder;
  onUpChanged(body: string): SkeletonBuilder;
  onVisibleChanged(body: string): SkeletonBuilder;
  onXChanged(body: string): SkeletonBuilder;
  onYChanged(body: string): SkeletonBuilder;
  onZChanged(body: string): SkeletonBuilder;
}

const SKELETON_META: TypeMetadata = {
  typeName: 'Skeleton',
  properties: [
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
    { handlerName: 'onSkeletonNodeDirty', paramCount: 0 },
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

export function Skeleton(): SkeletonBuilder {
  return createFluentBuilder('Skeleton', SKELETON_META) as unknown as SkeletonBuilder;
}

export namespace Skeleton {
  export namespace StaticFlags {
    export const None = createEnumToken('Skeleton', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Skeleton', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Skeleton', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Skeleton', 'TransformSpace', 'SceneSpace');
  }
}
