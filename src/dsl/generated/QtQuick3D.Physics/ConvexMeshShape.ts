// AUTO-GENERATED — DO NOT EDIT
// Type: ConvexMeshShape
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ConvexMeshShapeBuilder {
  id(id: string): ConvexMeshShapeBuilder;
  child(obj: QmlObjectBuilder): ConvexMeshShapeBuilder;
  children(...objs: QmlObjectBuilder[]): ConvexMeshShapeBuilder;

  enableDebugDraw(value: boolean): ConvexMeshShapeBuilder;
  enableDebugDrawBind(expr: string): ConvexMeshShapeBuilder;
  eulerRotation(value: QmlVector3d): ConvexMeshShapeBuilder;
  eulerRotationBind(expr: string): ConvexMeshShapeBuilder;
  geometry(value: QmlValue): ConvexMeshShapeBuilder;
  geometryBind(expr: string): ConvexMeshShapeBuilder;
  layers(value: number): ConvexMeshShapeBuilder;
  layersBind(expr: string): ConvexMeshShapeBuilder;
  objectName(value: string): ConvexMeshShapeBuilder;
  objectNameBind(expr: string): ConvexMeshShapeBuilder;
  opacity(value: number): ConvexMeshShapeBuilder;
  opacityBind(expr: string): ConvexMeshShapeBuilder;
  parent(value: QmlValue): ConvexMeshShapeBuilder;
  parentBind(expr: string): ConvexMeshShapeBuilder;
  pivot(value: QmlVector3d): ConvexMeshShapeBuilder;
  pivotBind(expr: string): ConvexMeshShapeBuilder;
  position(value: QmlVector3d): ConvexMeshShapeBuilder;
  positionBind(expr: string): ConvexMeshShapeBuilder;
  rotation(value: QmlQuaternion): ConvexMeshShapeBuilder;
  rotationBind(expr: string): ConvexMeshShapeBuilder;
  scale(value: QmlVector3d): ConvexMeshShapeBuilder;
  scaleBind(expr: string): ConvexMeshShapeBuilder;
  source(value: QmlUrl): ConvexMeshShapeBuilder;
  sourceBind(expr: string): ConvexMeshShapeBuilder;
  state(value: string): ConvexMeshShapeBuilder;
  stateBind(expr: string): ConvexMeshShapeBuilder;
  staticFlags(value: number): ConvexMeshShapeBuilder;
  staticFlagsBind(expr: string): ConvexMeshShapeBuilder;
  visible(value: boolean): ConvexMeshShapeBuilder;
  visibleBind(expr: string): ConvexMeshShapeBuilder;
  x(value: number): ConvexMeshShapeBuilder;
  xBind(expr: string): ConvexMeshShapeBuilder;
  y(value: number): ConvexMeshShapeBuilder;
  yBind(expr: string): ConvexMeshShapeBuilder;
  z(value: number): ConvexMeshShapeBuilder;
  zBind(expr: string): ConvexMeshShapeBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onEnableDebugDrawChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onNeedsRebuild(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onRightChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onUpChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onXChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onYChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
  onZChanged(handler: DslSignalHandlerValue): ConvexMeshShapeBuilder;
}

const CONVEXMESHSHAPE_META: TypeMetadata = {
  typeName: 'ConvexMeshShape',
  properties: [
    { name: 'enableDebugDraw', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEnableDebugDrawChanged', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
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
    { handlerName: 'onSourceChanged', paramCount: 0 },
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

export function ConvexMeshShape(): ConvexMeshShapeBuilder {
  return createFluentBuilder(
    'ConvexMeshShape',
    CONVEXMESHSHAPE_META,
  ) as unknown as ConvexMeshShapeBuilder;
}

export namespace ConvexMeshShape {
  export namespace StaticFlags {
    export const None = createEnumToken('ConvexMeshShape', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('ConvexMeshShape', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('ConvexMeshShape', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('ConvexMeshShape', 'TransformSpace', 'SceneSpace');
  }
}
