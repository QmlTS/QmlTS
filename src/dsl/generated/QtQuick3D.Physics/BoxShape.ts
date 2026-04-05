// AUTO-GENERATED — DO NOT EDIT
// Type: BoxShape
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface BoxShapeBuilder {
  id(id: string): BoxShapeBuilder;
  child(obj: QmlObjectBuilder): BoxShapeBuilder;

  enableDebugDraw(value: boolean): BoxShapeBuilder;
  enableDebugDrawBind(expr: string): BoxShapeBuilder;
  eulerRotation(value: QmlVector3d): BoxShapeBuilder;
  eulerRotationBind(expr: string): BoxShapeBuilder;
  extents(value: QmlVector3d): BoxShapeBuilder;
  extentsBind(expr: string): BoxShapeBuilder;
  layers(value: number): BoxShapeBuilder;
  layersBind(expr: string): BoxShapeBuilder;
  objectName(value: string): BoxShapeBuilder;
  objectNameBind(expr: string): BoxShapeBuilder;
  opacity(value: number): BoxShapeBuilder;
  opacityBind(expr: string): BoxShapeBuilder;
  parent(value: QmlValue): BoxShapeBuilder;
  parentBind(expr: string): BoxShapeBuilder;
  pivot(value: QmlVector3d): BoxShapeBuilder;
  pivotBind(expr: string): BoxShapeBuilder;
  position(value: QmlVector3d): BoxShapeBuilder;
  positionBind(expr: string): BoxShapeBuilder;
  rotation(value: QmlQuaternion): BoxShapeBuilder;
  rotationBind(expr: string): BoxShapeBuilder;
  scale(value: QmlVector3d): BoxShapeBuilder;
  scaleBind(expr: string): BoxShapeBuilder;
  state(value: string): BoxShapeBuilder;
  stateBind(expr: string): BoxShapeBuilder;
  staticFlags(value: number): BoxShapeBuilder;
  staticFlagsBind(expr: string): BoxShapeBuilder;
  visible(value: boolean): BoxShapeBuilder;
  visibleBind(expr: string): BoxShapeBuilder;
  x(value: number): BoxShapeBuilder;
  xBind(expr: string): BoxShapeBuilder;
  y(value: number): BoxShapeBuilder;
  yBind(expr: string): BoxShapeBuilder;
  z(value: number): BoxShapeBuilder;
  zBind(expr: string): BoxShapeBuilder;
  onChildrenChanged(body: string): BoxShapeBuilder;
  onEnableDebugDrawChanged(body: string): BoxShapeBuilder;
  onEulerRotationChanged(body: string): BoxShapeBuilder;
  onExtentsChanged(body: string): BoxShapeBuilder;
  onForwardChanged(body: string): BoxShapeBuilder;
  onLayersChanged(body: string): BoxShapeBuilder;
  onLocalOpacityChanged(body: string): BoxShapeBuilder;
  onNeedsRebuild(body: string): BoxShapeBuilder;
  onObjectNameChanged(body: string): BoxShapeBuilder;
  onParentChanged(body: string): BoxShapeBuilder;
  onPivotChanged(body: string): BoxShapeBuilder;
  onPositionChanged(body: string): BoxShapeBuilder;
  onRightChanged(body: string): BoxShapeBuilder;
  onRotationChanged(body: string): BoxShapeBuilder;
  onScaleChanged(body: string): BoxShapeBuilder;
  onScenePositionChanged(body: string): BoxShapeBuilder;
  onSceneRotationChanged(body: string): BoxShapeBuilder;
  onSceneScaleChanged(body: string): BoxShapeBuilder;
  onSceneTransformChanged(body: string): BoxShapeBuilder;
  onStateChanged(body: string): BoxShapeBuilder;
  onStaticFlagsChanged(body: string): BoxShapeBuilder;
  onUpChanged(body: string): BoxShapeBuilder;
  onVisibleChanged(body: string): BoxShapeBuilder;
  onXChanged(body: string): BoxShapeBuilder;
  onYChanged(body: string): BoxShapeBuilder;
  onZChanged(body: string): BoxShapeBuilder;
}

const BOXSHAPE_META: TypeMetadata = {
  typeName: 'BoxShape',
  properties: [
    { name: 'enableDebugDraw', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'extents', hasValue: true, hasBinding: true },
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
    { handlerName: 'onEnableDebugDrawChanged', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onExtentsChanged', paramCount: 1 },
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
  grouped: [
  ],
  attached: [
  ],
};

export function BoxShape(): BoxShapeBuilder {
  return createFluentBuilder('BoxShape', BOXSHAPE_META) as unknown as BoxShapeBuilder;
}

export namespace BoxShape {
  export namespace StaticFlags {
    export const None = createEnumToken('BoxShape', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('BoxShape', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('BoxShape', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('BoxShape', 'TransformSpace', 'SceneSpace');
  }
}
