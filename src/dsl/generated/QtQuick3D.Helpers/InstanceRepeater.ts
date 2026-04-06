// AUTO-GENERATED — DO NOT EDIT
// Type: InstanceRepeater
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface InstanceRepeaterBuilder {
  id(id: string): InstanceRepeaterBuilder;
  child(obj: QmlObjectBuilder): InstanceRepeaterBuilder;
  children(...objs: QmlObjectBuilder[]): InstanceRepeaterBuilder;

  delegate(value: QmlComponent): InstanceRepeaterBuilder;
  delegateBind(expr: string): InstanceRepeaterBuilder;
  delegateModelAccess(value: QmlEnumToken): InstanceRepeaterBuilder;
  delegateModelAccessBind(expr: string): InstanceRepeaterBuilder;
  eulerRotation(value: QmlVector3d): InstanceRepeaterBuilder;
  eulerRotationBind(expr: string): InstanceRepeaterBuilder;
  instancingTable(value: QmlValue): InstanceRepeaterBuilder;
  instancingTableBind(expr: string): InstanceRepeaterBuilder;
  layers(value: number): InstanceRepeaterBuilder;
  layersBind(expr: string): InstanceRepeaterBuilder;
  model(value: QmlValue): InstanceRepeaterBuilder;
  modelBind(expr: string): InstanceRepeaterBuilder;
  objectName(value: string): InstanceRepeaterBuilder;
  objectNameBind(expr: string): InstanceRepeaterBuilder;
  opacity(value: number): InstanceRepeaterBuilder;
  opacityBind(expr: string): InstanceRepeaterBuilder;
  parent(value: QmlValue): InstanceRepeaterBuilder;
  parentBind(expr: string): InstanceRepeaterBuilder;
  pivot(value: QmlVector3d): InstanceRepeaterBuilder;
  pivotBind(expr: string): InstanceRepeaterBuilder;
  position(value: QmlVector3d): InstanceRepeaterBuilder;
  positionBind(expr: string): InstanceRepeaterBuilder;
  rotation(value: QmlQuaternion): InstanceRepeaterBuilder;
  rotationBind(expr: string): InstanceRepeaterBuilder;
  scale(value: QmlVector3d): InstanceRepeaterBuilder;
  scaleBind(expr: string): InstanceRepeaterBuilder;
  state(value: string): InstanceRepeaterBuilder;
  stateBind(expr: string): InstanceRepeaterBuilder;
  staticFlags(value: number): InstanceRepeaterBuilder;
  staticFlagsBind(expr: string): InstanceRepeaterBuilder;
  visible(value: boolean): InstanceRepeaterBuilder;
  visibleBind(expr: string): InstanceRepeaterBuilder;
  x(value: number): InstanceRepeaterBuilder;
  xBind(expr: string): InstanceRepeaterBuilder;
  y(value: number): InstanceRepeaterBuilder;
  yBind(expr: string): InstanceRepeaterBuilder;
  z(value: number): InstanceRepeaterBuilder;
  zBind(expr: string): InstanceRepeaterBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onCountChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onDelegateModelAccessChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onInstancingChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onModelChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onObjectAdded(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onObjectRemoved(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onParentChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onRightChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onStateChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onUpChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onXChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onYChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
  onZChanged(handler: DslSignalHandlerValue): InstanceRepeaterBuilder;
}

const INSTANCEREPEATER_META: TypeMetadata = {
  typeName: 'InstanceRepeater',
  properties: [
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'delegateModelAccess', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'instancingTable', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelAccessChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onInstancingChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectAdded', paramCount: 2 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onObjectRemoved', paramCount: 2 },
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
  defaultProperty: 'delegate',
};

export function InstanceRepeater(): InstanceRepeaterBuilder {
  return createFluentBuilder(
    'InstanceRepeater',
    INSTANCEREPEATER_META,
  ) as unknown as InstanceRepeaterBuilder;
}

export namespace InstanceRepeater {
  export namespace StaticFlags {
    export const None = createEnumToken('InstanceRepeater', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('InstanceRepeater', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('InstanceRepeater', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('InstanceRepeater', 'TransformSpace', 'SceneSpace');
  }
}
