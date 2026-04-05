// AUTO-GENERATED — DO NOT EDIT
// Type: Loader3D
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface Loader3DBuilder {
  id(id: string): Loader3DBuilder;
  child(obj: QmlObjectBuilder): Loader3DBuilder;

  active(value: boolean): Loader3DBuilder;
  activeBind(expr: string): Loader3DBuilder;
  asynchronous(value: boolean): Loader3DBuilder;
  asynchronousBind(expr: string): Loader3DBuilder;
  eulerRotation(value: QmlVector3d): Loader3DBuilder;
  eulerRotationBind(expr: string): Loader3DBuilder;
  layers(value: number): Loader3DBuilder;
  layersBind(expr: string): Loader3DBuilder;
  objectName(value: string): Loader3DBuilder;
  objectNameBind(expr: string): Loader3DBuilder;
  opacity(value: number): Loader3DBuilder;
  opacityBind(expr: string): Loader3DBuilder;
  parent(value: QmlValue): Loader3DBuilder;
  parentBind(expr: string): Loader3DBuilder;
  pivot(value: QmlVector3d): Loader3DBuilder;
  pivotBind(expr: string): Loader3DBuilder;
  position(value: QmlVector3d): Loader3DBuilder;
  positionBind(expr: string): Loader3DBuilder;
  rotation(value: QmlQuaternion): Loader3DBuilder;
  rotationBind(expr: string): Loader3DBuilder;
  scale(value: QmlVector3d): Loader3DBuilder;
  scaleBind(expr: string): Loader3DBuilder;
  source(value: QmlUrl): Loader3DBuilder;
  sourceBind(expr: string): Loader3DBuilder;
  sourceComponent(value: QmlComponent): Loader3DBuilder;
  sourceComponentBind(expr: string): Loader3DBuilder;
  state(value: string): Loader3DBuilder;
  stateBind(expr: string): Loader3DBuilder;
  staticFlags(value: number): Loader3DBuilder;
  staticFlagsBind(expr: string): Loader3DBuilder;
  visible(value: boolean): Loader3DBuilder;
  visibleBind(expr: string): Loader3DBuilder;
  x(value: number): Loader3DBuilder;
  xBind(expr: string): Loader3DBuilder;
  y(value: number): Loader3DBuilder;
  yBind(expr: string): Loader3DBuilder;
  z(value: number): Loader3DBuilder;
  zBind(expr: string): Loader3DBuilder;
  onActiveChanged(body: string): Loader3DBuilder;
  onAsynchronousChanged(body: string): Loader3DBuilder;
  onChildrenChanged(body: string): Loader3DBuilder;
  onEulerRotationChanged(body: string): Loader3DBuilder;
  onForwardChanged(body: string): Loader3DBuilder;
  onItemChanged(body: string): Loader3DBuilder;
  onLayersChanged(body: string): Loader3DBuilder;
  onLoaded(body: string): Loader3DBuilder;
  onLocalOpacityChanged(body: string): Loader3DBuilder;
  onObjectNameChanged(body: string): Loader3DBuilder;
  onParentChanged(body: string): Loader3DBuilder;
  onPivotChanged(body: string): Loader3DBuilder;
  onPositionChanged(body: string): Loader3DBuilder;
  onProgressChanged(body: string): Loader3DBuilder;
  onRightChanged(body: string): Loader3DBuilder;
  onRotationChanged(body: string): Loader3DBuilder;
  onScaleChanged(body: string): Loader3DBuilder;
  onScenePositionChanged(body: string): Loader3DBuilder;
  onSceneRotationChanged(body: string): Loader3DBuilder;
  onSceneScaleChanged(body: string): Loader3DBuilder;
  onSceneTransformChanged(body: string): Loader3DBuilder;
  onSourceChanged(body: string): Loader3DBuilder;
  onSourceComponentChanged(body: string): Loader3DBuilder;
  onStateChanged(body: string): Loader3DBuilder;
  onStaticFlagsChanged(body: string): Loader3DBuilder;
  onStatusChanged(body: string): Loader3DBuilder;
  onUpChanged(body: string): Loader3DBuilder;
  onVisibleChanged(body: string): Loader3DBuilder;
  onXChanged(body: string): Loader3DBuilder;
  onYChanged(body: string): Loader3DBuilder;
  onZChanged(body: string): Loader3DBuilder;
}

const LOADER3D_META: TypeMetadata = {
  typeName: 'Loader3D',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'sourceComponent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onItemChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLoaded', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onProgressChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSourceComponentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Loader3D(): Loader3DBuilder {
  return createFluentBuilder('Loader3D', LOADER3D_META) as unknown as Loader3DBuilder;
}

export namespace Loader3D {
  export namespace StaticFlags {
    export const None = createEnumToken('Loader3D', 'StaticFlags', 'None');
  }
  export namespace Status {
    export const Null = createEnumToken('Loader3D', 'Status', 'Null');
    export const Ready = createEnumToken('Loader3D', 'Status', 'Ready');
    export const Loading = createEnumToken('Loader3D', 'Status', 'Loading');
    export const Error = createEnumToken('Loader3D', 'Status', 'Error');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Loader3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Loader3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Loader3D', 'TransformSpace', 'SceneSpace');
  }
}
