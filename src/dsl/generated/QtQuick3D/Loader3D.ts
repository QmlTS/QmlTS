// AUTO-GENERATED — DO NOT EDIT
// Type: Loader3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
  children(...objs: QmlObjectBuilder[]): Loader3DBuilder;

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
  onActiveChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onItemChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onLoaded(handler: DslSignalHandlerValue): Loader3DBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onProgressChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onRightChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onSourceComponentChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onUpChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onXChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onYChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
  onZChanged(handler: DslSignalHandlerValue): Loader3DBuilder;
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
