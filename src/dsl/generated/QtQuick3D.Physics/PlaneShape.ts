// AUTO-GENERATED — DO NOT EDIT
// Type: PlaneShape
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
export interface PlaneShapeBuilder {
  id(id: string): PlaneShapeBuilder;
  child(obj: QmlObjectBuilder): PlaneShapeBuilder;
  children(...objs: QmlObjectBuilder[]): PlaneShapeBuilder;

  enableDebugDraw(value: boolean): PlaneShapeBuilder;
  enableDebugDrawBind(expr: string): PlaneShapeBuilder;
  eulerRotation(value: QmlVector3d): PlaneShapeBuilder;
  eulerRotationBind(expr: string): PlaneShapeBuilder;
  layers(value: number): PlaneShapeBuilder;
  layersBind(expr: string): PlaneShapeBuilder;
  objectName(value: string): PlaneShapeBuilder;
  objectNameBind(expr: string): PlaneShapeBuilder;
  opacity(value: number): PlaneShapeBuilder;
  opacityBind(expr: string): PlaneShapeBuilder;
  parent(value: QmlValue): PlaneShapeBuilder;
  parentBind(expr: string): PlaneShapeBuilder;
  pivot(value: QmlVector3d): PlaneShapeBuilder;
  pivotBind(expr: string): PlaneShapeBuilder;
  position(value: QmlVector3d): PlaneShapeBuilder;
  positionBind(expr: string): PlaneShapeBuilder;
  rotation(value: QmlQuaternion): PlaneShapeBuilder;
  rotationBind(expr: string): PlaneShapeBuilder;
  scale(value: QmlVector3d): PlaneShapeBuilder;
  scaleBind(expr: string): PlaneShapeBuilder;
  state(value: string): PlaneShapeBuilder;
  stateBind(expr: string): PlaneShapeBuilder;
  staticFlags(value: number): PlaneShapeBuilder;
  staticFlagsBind(expr: string): PlaneShapeBuilder;
  visible(value: boolean): PlaneShapeBuilder;
  visibleBind(expr: string): PlaneShapeBuilder;
  x(value: number): PlaneShapeBuilder;
  xBind(expr: string): PlaneShapeBuilder;
  y(value: number): PlaneShapeBuilder;
  yBind(expr: string): PlaneShapeBuilder;
  z(value: number): PlaneShapeBuilder;
  zBind(expr: string): PlaneShapeBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onEnableDebugDrawChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onNeedsRebuild(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onRightChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onUpChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onXChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onYChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
  onZChanged(handler: DslSignalHandlerValue): PlaneShapeBuilder;
}

const PLANESHAPE_META: TypeMetadata = {
  typeName: 'PlaneShape',
  properties: [
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

export function PlaneShape(): PlaneShapeBuilder {
  return createFluentBuilder('PlaneShape', PLANESHAPE_META) as unknown as PlaneShapeBuilder;
}

export namespace PlaneShape {
  export namespace StaticFlags {
    export const None = createEnumToken('PlaneShape', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('PlaneShape', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('PlaneShape', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('PlaneShape', 'TransformSpace', 'SceneSpace');
  }
}
