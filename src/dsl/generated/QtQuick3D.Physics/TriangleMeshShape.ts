// AUTO-GENERATED — DO NOT EDIT
// Type: TriangleMeshShape
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TriangleMeshShapeBuilder {
  id(id: string): TriangleMeshShapeBuilder;
  child(obj: QmlObjectBuilder): TriangleMeshShapeBuilder;

  enableDebugDraw(value: boolean): TriangleMeshShapeBuilder;
  enableDebugDrawBind(expr: string): TriangleMeshShapeBuilder;
  eulerRotation(value: QmlVector3d): TriangleMeshShapeBuilder;
  eulerRotationBind(expr: string): TriangleMeshShapeBuilder;
  geometry(value: QmlValue): TriangleMeshShapeBuilder;
  geometryBind(expr: string): TriangleMeshShapeBuilder;
  layers(value: number): TriangleMeshShapeBuilder;
  layersBind(expr: string): TriangleMeshShapeBuilder;
  objectName(value: string): TriangleMeshShapeBuilder;
  objectNameBind(expr: string): TriangleMeshShapeBuilder;
  opacity(value: number): TriangleMeshShapeBuilder;
  opacityBind(expr: string): TriangleMeshShapeBuilder;
  parent(value: QmlValue): TriangleMeshShapeBuilder;
  parentBind(expr: string): TriangleMeshShapeBuilder;
  pivot(value: QmlVector3d): TriangleMeshShapeBuilder;
  pivotBind(expr: string): TriangleMeshShapeBuilder;
  position(value: QmlVector3d): TriangleMeshShapeBuilder;
  positionBind(expr: string): TriangleMeshShapeBuilder;
  rotation(value: QmlQuaternion): TriangleMeshShapeBuilder;
  rotationBind(expr: string): TriangleMeshShapeBuilder;
  scale(value: QmlVector3d): TriangleMeshShapeBuilder;
  scaleBind(expr: string): TriangleMeshShapeBuilder;
  source(value: QmlUrl): TriangleMeshShapeBuilder;
  sourceBind(expr: string): TriangleMeshShapeBuilder;
  state(value: string): TriangleMeshShapeBuilder;
  stateBind(expr: string): TriangleMeshShapeBuilder;
  staticFlags(value: number): TriangleMeshShapeBuilder;
  staticFlagsBind(expr: string): TriangleMeshShapeBuilder;
  visible(value: boolean): TriangleMeshShapeBuilder;
  visibleBind(expr: string): TriangleMeshShapeBuilder;
  x(value: number): TriangleMeshShapeBuilder;
  xBind(expr: string): TriangleMeshShapeBuilder;
  y(value: number): TriangleMeshShapeBuilder;
  yBind(expr: string): TriangleMeshShapeBuilder;
  z(value: number): TriangleMeshShapeBuilder;
  zBind(expr: string): TriangleMeshShapeBuilder;
  onChildrenChanged(body: string): TriangleMeshShapeBuilder;
  onEnableDebugDrawChanged(body: string): TriangleMeshShapeBuilder;
  onEulerRotationChanged(body: string): TriangleMeshShapeBuilder;
  onForwardChanged(body: string): TriangleMeshShapeBuilder;
  onGeometryChanged(body: string): TriangleMeshShapeBuilder;
  onLayersChanged(body: string): TriangleMeshShapeBuilder;
  onLocalOpacityChanged(body: string): TriangleMeshShapeBuilder;
  onNeedsRebuild(body: string): TriangleMeshShapeBuilder;
  onObjectNameChanged(body: string): TriangleMeshShapeBuilder;
  onParentChanged(body: string): TriangleMeshShapeBuilder;
  onPivotChanged(body: string): TriangleMeshShapeBuilder;
  onPositionChanged(body: string): TriangleMeshShapeBuilder;
  onRightChanged(body: string): TriangleMeshShapeBuilder;
  onRotationChanged(body: string): TriangleMeshShapeBuilder;
  onScaleChanged(body: string): TriangleMeshShapeBuilder;
  onScenePositionChanged(body: string): TriangleMeshShapeBuilder;
  onSceneRotationChanged(body: string): TriangleMeshShapeBuilder;
  onSceneScaleChanged(body: string): TriangleMeshShapeBuilder;
  onSceneTransformChanged(body: string): TriangleMeshShapeBuilder;
  onSourceChanged(body: string): TriangleMeshShapeBuilder;
  onStateChanged(body: string): TriangleMeshShapeBuilder;
  onStaticFlagsChanged(body: string): TriangleMeshShapeBuilder;
  onUpChanged(body: string): TriangleMeshShapeBuilder;
  onVisibleChanged(body: string): TriangleMeshShapeBuilder;
  onXChanged(body: string): TriangleMeshShapeBuilder;
  onYChanged(body: string): TriangleMeshShapeBuilder;
  onZChanged(body: string): TriangleMeshShapeBuilder;
}

const TRIANGLEMESHSHAPE_META: TypeMetadata = {
  typeName: 'TriangleMeshShape',
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

export function TriangleMeshShape(): TriangleMeshShapeBuilder {
  return createFluentBuilder(
    'TriangleMeshShape',
    TRIANGLEMESHSHAPE_META,
  ) as unknown as TriangleMeshShapeBuilder;
}

export namespace TriangleMeshShape {
  export namespace StaticFlags {
    export const None = createEnumToken('TriangleMeshShape', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('TriangleMeshShape', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken(
      'TriangleMeshShape',
      'TransformSpace',
      'ParentSpace',
    );
    export const SceneSpace = createEnumToken('TriangleMeshShape', 'TransformSpace', 'SceneSpace');
  }
}
