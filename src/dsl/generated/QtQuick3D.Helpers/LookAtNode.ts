// AUTO-GENERATED — DO NOT EDIT
// Type: LookAtNode
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
export interface LookAtNodeBuilder {
  id(id: string): LookAtNodeBuilder;
  child(obj: QmlObjectBuilder): LookAtNodeBuilder;

  eulerRotation(value: QmlVector3d): LookAtNodeBuilder;
  eulerRotationBind(expr: string): LookAtNodeBuilder;
  layers(value: number): LookAtNodeBuilder;
  layersBind(expr: string): LookAtNodeBuilder;
  objectName(value: string): LookAtNodeBuilder;
  objectNameBind(expr: string): LookAtNodeBuilder;
  opacity(value: number): LookAtNodeBuilder;
  opacityBind(expr: string): LookAtNodeBuilder;
  parent(value: QmlValue): LookAtNodeBuilder;
  parentBind(expr: string): LookAtNodeBuilder;
  pivot(value: QmlVector3d): LookAtNodeBuilder;
  pivotBind(expr: string): LookAtNodeBuilder;
  position(value: QmlVector3d): LookAtNodeBuilder;
  positionBind(expr: string): LookAtNodeBuilder;
  rotation(value: QmlQuaternion): LookAtNodeBuilder;
  rotationBind(expr: string): LookAtNodeBuilder;
  scale(value: QmlVector3d): LookAtNodeBuilder;
  scaleBind(expr: string): LookAtNodeBuilder;
  state(value: string): LookAtNodeBuilder;
  stateBind(expr: string): LookAtNodeBuilder;
  staticFlags(value: number): LookAtNodeBuilder;
  staticFlagsBind(expr: string): LookAtNodeBuilder;
  target(value: NodeBuilder): LookAtNodeBuilder;
  targetBind(expr: string): LookAtNodeBuilder;
  visible(value: boolean): LookAtNodeBuilder;
  visibleBind(expr: string): LookAtNodeBuilder;
  x(value: number): LookAtNodeBuilder;
  xBind(expr: string): LookAtNodeBuilder;
  y(value: number): LookAtNodeBuilder;
  yBind(expr: string): LookAtNodeBuilder;
  z(value: number): LookAtNodeBuilder;
  zBind(expr: string): LookAtNodeBuilder;
  onChildrenChanged(body: string): LookAtNodeBuilder;
  onEulerRotationChanged(body: string): LookAtNodeBuilder;
  onForwardChanged(body: string): LookAtNodeBuilder;
  onLayersChanged(body: string): LookAtNodeBuilder;
  onLocalOpacityChanged(body: string): LookAtNodeBuilder;
  onObjectNameChanged(body: string): LookAtNodeBuilder;
  onParentChanged(body: string): LookAtNodeBuilder;
  onPivotChanged(body: string): LookAtNodeBuilder;
  onPositionChanged(body: string): LookAtNodeBuilder;
  onRightChanged(body: string): LookAtNodeBuilder;
  onRotationChanged(body: string): LookAtNodeBuilder;
  onScaleChanged(body: string): LookAtNodeBuilder;
  onScenePositionChanged(body: string): LookAtNodeBuilder;
  onSceneRotationChanged(body: string): LookAtNodeBuilder;
  onSceneScaleChanged(body: string): LookAtNodeBuilder;
  onSceneTransformChanged(body: string): LookAtNodeBuilder;
  onStateChanged(body: string): LookAtNodeBuilder;
  onStaticFlagsChanged(body: string): LookAtNodeBuilder;
  onTargetChanged(body: string): LookAtNodeBuilder;
  onUpChanged(body: string): LookAtNodeBuilder;
  onVisibleChanged(body: string): LookAtNodeBuilder;
  onXChanged(body: string): LookAtNodeBuilder;
  onYChanged(body: string): LookAtNodeBuilder;
  onZChanged(body: string): LookAtNodeBuilder;
}

const LOOKATNODE_META: TypeMetadata = {
  typeName: 'LookAtNode',
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
    { name: 'target', hasValue: true, hasBinding: true },
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
    { handlerName: 'onTargetChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function LookAtNode(): LookAtNodeBuilder {
  return createFluentBuilder('LookAtNode', LOOKATNODE_META) as unknown as LookAtNodeBuilder;
}

export namespace LookAtNode {
  export namespace StaticFlags {
    export const None = createEnumToken('LookAtNode', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('LookAtNode', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('LookAtNode', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('LookAtNode', 'TransformSpace', 'SceneSpace');
  }
}
