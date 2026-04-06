// AUTO-GENERATED — DO NOT EDIT
// Type: Joint
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
import type { SkeletonBuilder } from './Skeleton.js';
export interface JointBuilder {
  id(id: string): JointBuilder;
  child(obj: QmlObjectBuilder): JointBuilder;
  children(...objs: QmlObjectBuilder[]): JointBuilder;

  eulerRotation(value: QmlVector3d): JointBuilder;
  eulerRotationBind(expr: string): JointBuilder;
  index(value: number): JointBuilder;
  indexBind(expr: string): JointBuilder;
  layers(value: number): JointBuilder;
  layersBind(expr: string): JointBuilder;
  objectName(value: string): JointBuilder;
  objectNameBind(expr: string): JointBuilder;
  opacity(value: number): JointBuilder;
  opacityBind(expr: string): JointBuilder;
  parent(value: QmlValue): JointBuilder;
  parentBind(expr: string): JointBuilder;
  pivot(value: QmlVector3d): JointBuilder;
  pivotBind(expr: string): JointBuilder;
  position(value: QmlVector3d): JointBuilder;
  positionBind(expr: string): JointBuilder;
  rotation(value: QmlQuaternion): JointBuilder;
  rotationBind(expr: string): JointBuilder;
  scale(value: QmlVector3d): JointBuilder;
  scaleBind(expr: string): JointBuilder;
  skeletonRoot(value: SkeletonBuilder): JointBuilder;
  skeletonRootBind(expr: string): JointBuilder;
  state(value: string): JointBuilder;
  stateBind(expr: string): JointBuilder;
  staticFlags(value: number): JointBuilder;
  staticFlagsBind(expr: string): JointBuilder;
  visible(value: boolean): JointBuilder;
  visibleBind(expr: string): JointBuilder;
  x(value: number): JointBuilder;
  xBind(expr: string): JointBuilder;
  y(value: number): JointBuilder;
  yBind(expr: string): JointBuilder;
  z(value: number): JointBuilder;
  zBind(expr: string): JointBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): JointBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): JointBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): JointBuilder;
  onIndexChanged(handler: DslSignalHandlerValue): JointBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): JointBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): JointBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): JointBuilder;
  onParentChanged(handler: DslSignalHandlerValue): JointBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): JointBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): JointBuilder;
  onRightChanged(handler: DslSignalHandlerValue): JointBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): JointBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): JointBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): JointBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): JointBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): JointBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): JointBuilder;
  onSkeletonRootChanged(handler: DslSignalHandlerValue): JointBuilder;
  onStateChanged(handler: DslSignalHandlerValue): JointBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): JointBuilder;
  onUpChanged(handler: DslSignalHandlerValue): JointBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): JointBuilder;
  onXChanged(handler: DslSignalHandlerValue): JointBuilder;
  onYChanged(handler: DslSignalHandlerValue): JointBuilder;
  onZChanged(handler: DslSignalHandlerValue): JointBuilder;
}

const JOINT_META: TypeMetadata = {
  typeName: 'Joint',
  properties: [
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'index', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'skeletonRoot', hasValue: true, hasBinding: true },
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
    { handlerName: 'onIndexChanged', paramCount: 0 },
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
    { handlerName: 'onSkeletonRootChanged', paramCount: 0 },
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

export function Joint(): JointBuilder {
  return createFluentBuilder('Joint', JOINT_META) as unknown as JointBuilder;
}

export namespace Joint {
  export namespace StaticFlags {
    export const None = createEnumToken('Joint', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Joint', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Joint', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Joint', 'TransformSpace', 'SceneSpace');
  }
}
