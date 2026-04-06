// AUTO-GENERATED — DO NOT EDIT
// Type: LookAtNode
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
import type { NodeBuilder } from '../QtQuick3D/Node.js';
export interface LookAtNodeBuilder {
  id(id: string): LookAtNodeBuilder;
  child(obj: QmlObjectBuilder): LookAtNodeBuilder;
  children(...objs: QmlObjectBuilder[]): LookAtNodeBuilder;

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
  onChildrenChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onRightChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onTargetChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onUpChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onXChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onYChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
  onZChanged(handler: DslSignalHandlerValue): LookAtNodeBuilder;
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
