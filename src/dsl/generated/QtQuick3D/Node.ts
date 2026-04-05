// AUTO-GENERATED — DO NOT EDIT
// Type: Node
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface NodeBuilder {
  id(id: string): NodeBuilder;
  child(obj: QmlObjectBuilder): NodeBuilder;

  eulerRotation(value: QmlVector3d): NodeBuilder;
  eulerRotationBind(expr: string): NodeBuilder;
  layers(value: number): NodeBuilder;
  layersBind(expr: string): NodeBuilder;
  objectName(value: string): NodeBuilder;
  objectNameBind(expr: string): NodeBuilder;
  opacity(value: number): NodeBuilder;
  opacityBind(expr: string): NodeBuilder;
  parent(value: QmlValue): NodeBuilder;
  parentBind(expr: string): NodeBuilder;
  pivot(value: QmlVector3d): NodeBuilder;
  pivotBind(expr: string): NodeBuilder;
  position(value: QmlVector3d): NodeBuilder;
  positionBind(expr: string): NodeBuilder;
  rotation(value: QmlQuaternion): NodeBuilder;
  rotationBind(expr: string): NodeBuilder;
  scale(value: QmlVector3d): NodeBuilder;
  scaleBind(expr: string): NodeBuilder;
  state(value: string): NodeBuilder;
  stateBind(expr: string): NodeBuilder;
  staticFlags(value: number): NodeBuilder;
  staticFlagsBind(expr: string): NodeBuilder;
  visible(value: boolean): NodeBuilder;
  visibleBind(expr: string): NodeBuilder;
  x(value: number): NodeBuilder;
  xBind(expr: string): NodeBuilder;
  y(value: number): NodeBuilder;
  yBind(expr: string): NodeBuilder;
  z(value: number): NodeBuilder;
  zBind(expr: string): NodeBuilder;
  onChildrenChanged(body: string): NodeBuilder;
  onEulerRotationChanged(body: string): NodeBuilder;
  onForwardChanged(body: string): NodeBuilder;
  onLayersChanged(body: string): NodeBuilder;
  onLocalOpacityChanged(body: string): NodeBuilder;
  onObjectNameChanged(body: string): NodeBuilder;
  onParentChanged(body: string): NodeBuilder;
  onPivotChanged(body: string): NodeBuilder;
  onPositionChanged(body: string): NodeBuilder;
  onRightChanged(body: string): NodeBuilder;
  onRotationChanged(body: string): NodeBuilder;
  onScaleChanged(body: string): NodeBuilder;
  onScenePositionChanged(body: string): NodeBuilder;
  onSceneRotationChanged(body: string): NodeBuilder;
  onSceneScaleChanged(body: string): NodeBuilder;
  onSceneTransformChanged(body: string): NodeBuilder;
  onStateChanged(body: string): NodeBuilder;
  onStaticFlagsChanged(body: string): NodeBuilder;
  onUpChanged(body: string): NodeBuilder;
  onVisibleChanged(body: string): NodeBuilder;
  onXChanged(body: string): NodeBuilder;
  onYChanged(body: string): NodeBuilder;
  onZChanged(body: string): NodeBuilder;
}

const NODE_META: TypeMetadata = {
  typeName: 'Node',
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
  defaultProperty: 'data',
};

export function Node(): NodeBuilder {
  return createFluentBuilder('Node', NODE_META) as unknown as NodeBuilder;
}

export namespace Node {
  export namespace StaticFlags {
    export const None = createEnumToken('Node', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Node', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Node', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Node', 'TransformSpace', 'SceneSpace');
  }
}
