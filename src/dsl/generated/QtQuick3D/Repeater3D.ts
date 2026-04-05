// AUTO-GENERATED — DO NOT EDIT
// Type: Repeater3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface Repeater3DBuilder {
  id(id: string): Repeater3DBuilder;
  child(obj: QmlObjectBuilder): Repeater3DBuilder;

  delegate(value: QmlComponent): Repeater3DBuilder;
  delegateBind(expr: string): Repeater3DBuilder;
  delegateModelAccess(value: QmlEnumToken): Repeater3DBuilder;
  delegateModelAccessBind(expr: string): Repeater3DBuilder;
  eulerRotation(value: QmlVector3d): Repeater3DBuilder;
  eulerRotationBind(expr: string): Repeater3DBuilder;
  layers(value: number): Repeater3DBuilder;
  layersBind(expr: string): Repeater3DBuilder;
  model(value: QmlValue): Repeater3DBuilder;
  modelBind(expr: string): Repeater3DBuilder;
  objectName(value: string): Repeater3DBuilder;
  objectNameBind(expr: string): Repeater3DBuilder;
  opacity(value: number): Repeater3DBuilder;
  opacityBind(expr: string): Repeater3DBuilder;
  parent(value: QmlValue): Repeater3DBuilder;
  parentBind(expr: string): Repeater3DBuilder;
  pivot(value: QmlVector3d): Repeater3DBuilder;
  pivotBind(expr: string): Repeater3DBuilder;
  position(value: QmlVector3d): Repeater3DBuilder;
  positionBind(expr: string): Repeater3DBuilder;
  rotation(value: QmlQuaternion): Repeater3DBuilder;
  rotationBind(expr: string): Repeater3DBuilder;
  scale(value: QmlVector3d): Repeater3DBuilder;
  scaleBind(expr: string): Repeater3DBuilder;
  state(value: string): Repeater3DBuilder;
  stateBind(expr: string): Repeater3DBuilder;
  staticFlags(value: number): Repeater3DBuilder;
  staticFlagsBind(expr: string): Repeater3DBuilder;
  visible(value: boolean): Repeater3DBuilder;
  visibleBind(expr: string): Repeater3DBuilder;
  x(value: number): Repeater3DBuilder;
  xBind(expr: string): Repeater3DBuilder;
  y(value: number): Repeater3DBuilder;
  yBind(expr: string): Repeater3DBuilder;
  z(value: number): Repeater3DBuilder;
  zBind(expr: string): Repeater3DBuilder;
  onChildrenChanged(body: string): Repeater3DBuilder;
  onCountChanged(body: string): Repeater3DBuilder;
  onDelegateChanged(body: string): Repeater3DBuilder;
  onDelegateModelAccessChanged(body: string): Repeater3DBuilder;
  onEulerRotationChanged(body: string): Repeater3DBuilder;
  onForwardChanged(body: string): Repeater3DBuilder;
  onLayersChanged(body: string): Repeater3DBuilder;
  onLocalOpacityChanged(body: string): Repeater3DBuilder;
  onModelChanged(body: string): Repeater3DBuilder;
  onObjectAdded(body: string): Repeater3DBuilder;
  onObjectNameChanged(body: string): Repeater3DBuilder;
  onObjectRemoved(body: string): Repeater3DBuilder;
  onParentChanged(body: string): Repeater3DBuilder;
  onPivotChanged(body: string): Repeater3DBuilder;
  onPositionChanged(body: string): Repeater3DBuilder;
  onRightChanged(body: string): Repeater3DBuilder;
  onRotationChanged(body: string): Repeater3DBuilder;
  onScaleChanged(body: string): Repeater3DBuilder;
  onScenePositionChanged(body: string): Repeater3DBuilder;
  onSceneRotationChanged(body: string): Repeater3DBuilder;
  onSceneScaleChanged(body: string): Repeater3DBuilder;
  onSceneTransformChanged(body: string): Repeater3DBuilder;
  onStateChanged(body: string): Repeater3DBuilder;
  onStaticFlagsChanged(body: string): Repeater3DBuilder;
  onUpChanged(body: string): Repeater3DBuilder;
  onVisibleChanged(body: string): Repeater3DBuilder;
  onXChanged(body: string): Repeater3DBuilder;
  onYChanged(body: string): Repeater3DBuilder;
  onZChanged(body: string): Repeater3DBuilder;
}

const REPEATER3D_META: TypeMetadata = {
  typeName: 'Repeater3D',
  properties: [
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'delegateModelAccess', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
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
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'delegate',
};

export function Repeater3D(): Repeater3DBuilder {
  return createFluentBuilder('Repeater3D', REPEATER3D_META) as unknown as Repeater3DBuilder;
}

export namespace Repeater3D {
  export namespace StaticFlags {
    export const None = createEnumToken('Repeater3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Repeater3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Repeater3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Repeater3D', 'TransformSpace', 'SceneSpace');
  }
}
