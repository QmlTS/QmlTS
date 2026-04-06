// AUTO-GENERATED — DO NOT EDIT
// Type: SphereShape
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
export interface SphereShapeBuilder {
  id(id: string): SphereShapeBuilder;
  child(obj: QmlObjectBuilder): SphereShapeBuilder;
  children(...objs: QmlObjectBuilder[]): SphereShapeBuilder;

  diameter(value: number): SphereShapeBuilder;
  diameterBind(expr: string): SphereShapeBuilder;
  enableDebugDraw(value: boolean): SphereShapeBuilder;
  enableDebugDrawBind(expr: string): SphereShapeBuilder;
  eulerRotation(value: QmlVector3d): SphereShapeBuilder;
  eulerRotationBind(expr: string): SphereShapeBuilder;
  layers(value: number): SphereShapeBuilder;
  layersBind(expr: string): SphereShapeBuilder;
  objectName(value: string): SphereShapeBuilder;
  objectNameBind(expr: string): SphereShapeBuilder;
  opacity(value: number): SphereShapeBuilder;
  opacityBind(expr: string): SphereShapeBuilder;
  parent(value: QmlValue): SphereShapeBuilder;
  parentBind(expr: string): SphereShapeBuilder;
  pivot(value: QmlVector3d): SphereShapeBuilder;
  pivotBind(expr: string): SphereShapeBuilder;
  position(value: QmlVector3d): SphereShapeBuilder;
  positionBind(expr: string): SphereShapeBuilder;
  rotation(value: QmlQuaternion): SphereShapeBuilder;
  rotationBind(expr: string): SphereShapeBuilder;
  scale(value: QmlVector3d): SphereShapeBuilder;
  scaleBind(expr: string): SphereShapeBuilder;
  state(value: string): SphereShapeBuilder;
  stateBind(expr: string): SphereShapeBuilder;
  staticFlags(value: number): SphereShapeBuilder;
  staticFlagsBind(expr: string): SphereShapeBuilder;
  visible(value: boolean): SphereShapeBuilder;
  visibleBind(expr: string): SphereShapeBuilder;
  x(value: number): SphereShapeBuilder;
  xBind(expr: string): SphereShapeBuilder;
  y(value: number): SphereShapeBuilder;
  yBind(expr: string): SphereShapeBuilder;
  z(value: number): SphereShapeBuilder;
  zBind(expr: string): SphereShapeBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onDiameterChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onEnableDebugDrawChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onNeedsRebuild(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onRightChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onUpChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onXChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onYChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
  onZChanged(handler: DslSignalHandlerValue): SphereShapeBuilder;
}

const SPHERESHAPE_META: TypeMetadata = {
  typeName: 'SphereShape',
  properties: [
    { name: 'diameter', hasValue: true, hasBinding: true },
    { name: 'enableDebugDraw', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDiameterChanged', paramCount: 1 },
    { handlerName: 'onEnableDebugDrawChanged', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onNeedsRebuild', paramCount: 1 },
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

export function SphereShape(): SphereShapeBuilder {
  return createFluentBuilder('SphereShape', SPHERESHAPE_META) as unknown as SphereShapeBuilder;
}

export namespace SphereShape {
  export namespace StaticFlags {
    export const None = createEnumToken('SphereShape', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('SphereShape', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('SphereShape', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('SphereShape', 'TransformSpace', 'SceneSpace');
  }
}
