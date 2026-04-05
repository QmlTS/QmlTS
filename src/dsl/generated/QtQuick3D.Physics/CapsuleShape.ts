// AUTO-GENERATED — DO NOT EDIT
// Type: CapsuleShape
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface CapsuleShapeBuilder {
  id(id: string): CapsuleShapeBuilder;
  child(obj: QmlObjectBuilder): CapsuleShapeBuilder;

  diameter(value: number): CapsuleShapeBuilder;
  diameterBind(expr: string): CapsuleShapeBuilder;
  enableDebugDraw(value: boolean): CapsuleShapeBuilder;
  enableDebugDrawBind(expr: string): CapsuleShapeBuilder;
  eulerRotation(value: QmlVector3d): CapsuleShapeBuilder;
  eulerRotationBind(expr: string): CapsuleShapeBuilder;
  height(value: number): CapsuleShapeBuilder;
  heightBind(expr: string): CapsuleShapeBuilder;
  layers(value: number): CapsuleShapeBuilder;
  layersBind(expr: string): CapsuleShapeBuilder;
  objectName(value: string): CapsuleShapeBuilder;
  objectNameBind(expr: string): CapsuleShapeBuilder;
  opacity(value: number): CapsuleShapeBuilder;
  opacityBind(expr: string): CapsuleShapeBuilder;
  parent(value: QmlValue): CapsuleShapeBuilder;
  parentBind(expr: string): CapsuleShapeBuilder;
  pivot(value: QmlVector3d): CapsuleShapeBuilder;
  pivotBind(expr: string): CapsuleShapeBuilder;
  position(value: QmlVector3d): CapsuleShapeBuilder;
  positionBind(expr: string): CapsuleShapeBuilder;
  rotation(value: QmlQuaternion): CapsuleShapeBuilder;
  rotationBind(expr: string): CapsuleShapeBuilder;
  scale(value: QmlVector3d): CapsuleShapeBuilder;
  scaleBind(expr: string): CapsuleShapeBuilder;
  state(value: string): CapsuleShapeBuilder;
  stateBind(expr: string): CapsuleShapeBuilder;
  staticFlags(value: number): CapsuleShapeBuilder;
  staticFlagsBind(expr: string): CapsuleShapeBuilder;
  visible(value: boolean): CapsuleShapeBuilder;
  visibleBind(expr: string): CapsuleShapeBuilder;
  x(value: number): CapsuleShapeBuilder;
  xBind(expr: string): CapsuleShapeBuilder;
  y(value: number): CapsuleShapeBuilder;
  yBind(expr: string): CapsuleShapeBuilder;
  z(value: number): CapsuleShapeBuilder;
  zBind(expr: string): CapsuleShapeBuilder;
  onChildrenChanged(body: string): CapsuleShapeBuilder;
  onDiameterChanged(body: string): CapsuleShapeBuilder;
  onEnableDebugDrawChanged(body: string): CapsuleShapeBuilder;
  onEulerRotationChanged(body: string): CapsuleShapeBuilder;
  onForwardChanged(body: string): CapsuleShapeBuilder;
  onHeightChanged(body: string): CapsuleShapeBuilder;
  onLayersChanged(body: string): CapsuleShapeBuilder;
  onLocalOpacityChanged(body: string): CapsuleShapeBuilder;
  onNeedsRebuild(body: string): CapsuleShapeBuilder;
  onObjectNameChanged(body: string): CapsuleShapeBuilder;
  onParentChanged(body: string): CapsuleShapeBuilder;
  onPivotChanged(body: string): CapsuleShapeBuilder;
  onPositionChanged(body: string): CapsuleShapeBuilder;
  onRightChanged(body: string): CapsuleShapeBuilder;
  onRotationChanged(body: string): CapsuleShapeBuilder;
  onScaleChanged(body: string): CapsuleShapeBuilder;
  onScenePositionChanged(body: string): CapsuleShapeBuilder;
  onSceneRotationChanged(body: string): CapsuleShapeBuilder;
  onSceneScaleChanged(body: string): CapsuleShapeBuilder;
  onSceneTransformChanged(body: string): CapsuleShapeBuilder;
  onStateChanged(body: string): CapsuleShapeBuilder;
  onStaticFlagsChanged(body: string): CapsuleShapeBuilder;
  onUpChanged(body: string): CapsuleShapeBuilder;
  onVisibleChanged(body: string): CapsuleShapeBuilder;
  onXChanged(body: string): CapsuleShapeBuilder;
  onYChanged(body: string): CapsuleShapeBuilder;
  onZChanged(body: string): CapsuleShapeBuilder;
}

const CAPSULESHAPE_META: TypeMetadata = {
  typeName: 'CapsuleShape',
  properties: [
    { name: 'diameter', hasValue: true, hasBinding: true },
    { name: 'enableDebugDraw', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDiameterChanged', paramCount: 0 },
    { handlerName: 'onEnableDebugDrawChanged', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
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

export function CapsuleShape(): CapsuleShapeBuilder {
  return createFluentBuilder('CapsuleShape', CAPSULESHAPE_META) as unknown as CapsuleShapeBuilder;
}

export namespace CapsuleShape {
  export namespace StaticFlags {
    export const None = createEnumToken('CapsuleShape', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('CapsuleShape', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('CapsuleShape', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('CapsuleShape', 'TransformSpace', 'SceneSpace');
  }
}
