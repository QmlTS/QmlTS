// AUTO-GENERATED — DO NOT EDIT
// Type: RuntimeLoader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RuntimeLoaderBuilder {
  id(id: string): RuntimeLoaderBuilder;
  child(obj: QmlObjectBuilder): RuntimeLoaderBuilder;
  children(...objs: QmlObjectBuilder[]): RuntimeLoaderBuilder;

  eulerRotation(value: QmlVector3d): RuntimeLoaderBuilder;
  eulerRotationBind(expr: string): RuntimeLoaderBuilder;
  instancing(value: QmlValue): RuntimeLoaderBuilder;
  instancingBind(expr: string): RuntimeLoaderBuilder;
  layers(value: number): RuntimeLoaderBuilder;
  layersBind(expr: string): RuntimeLoaderBuilder;
  objectName(value: string): RuntimeLoaderBuilder;
  objectNameBind(expr: string): RuntimeLoaderBuilder;
  opacity(value: number): RuntimeLoaderBuilder;
  opacityBind(expr: string): RuntimeLoaderBuilder;
  parent(value: QmlValue): RuntimeLoaderBuilder;
  parentBind(expr: string): RuntimeLoaderBuilder;
  pivot(value: QmlVector3d): RuntimeLoaderBuilder;
  pivotBind(expr: string): RuntimeLoaderBuilder;
  position(value: QmlVector3d): RuntimeLoaderBuilder;
  positionBind(expr: string): RuntimeLoaderBuilder;
  rotation(value: QmlQuaternion): RuntimeLoaderBuilder;
  rotationBind(expr: string): RuntimeLoaderBuilder;
  scale(value: QmlVector3d): RuntimeLoaderBuilder;
  scaleBind(expr: string): RuntimeLoaderBuilder;
  source(value: QmlUrl): RuntimeLoaderBuilder;
  sourceBind(expr: string): RuntimeLoaderBuilder;
  state(value: string): RuntimeLoaderBuilder;
  stateBind(expr: string): RuntimeLoaderBuilder;
  staticFlags(value: number): RuntimeLoaderBuilder;
  staticFlagsBind(expr: string): RuntimeLoaderBuilder;
  visible(value: boolean): RuntimeLoaderBuilder;
  visibleBind(expr: string): RuntimeLoaderBuilder;
  x(value: number): RuntimeLoaderBuilder;
  xBind(expr: string): RuntimeLoaderBuilder;
  y(value: number): RuntimeLoaderBuilder;
  yBind(expr: string): RuntimeLoaderBuilder;
  z(value: number): RuntimeLoaderBuilder;
  zBind(expr: string): RuntimeLoaderBuilder;
  onBoundsChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onErrorStringChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onInstancingChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onRightChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onStateChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onUpChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onXChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onYChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
  onZChanged(handler: DslSignalHandlerValue): RuntimeLoaderBuilder;
}

const RUNTIMELOADER_META: TypeMetadata = {
  typeName: 'RuntimeLoader',
  properties: [
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'instancing', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundsChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onErrorStringChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onInstancingChanged', paramCount: 0 },
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
    { handlerName: 'onSourceChanged', paramCount: 0 },
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

export function RuntimeLoader(): RuntimeLoaderBuilder {
  return createFluentBuilder(
    'RuntimeLoader',
    RUNTIMELOADER_META,
  ) as unknown as RuntimeLoaderBuilder;
}

export namespace RuntimeLoader {
  export namespace StaticFlags {
    export const None = createEnumToken('RuntimeLoader', 'StaticFlags', 'None');
  }
  export namespace Status {
    export const Empty = createEnumToken('RuntimeLoader', 'Status', 'Empty');
    export const Success = createEnumToken('RuntimeLoader', 'Status', 'Success');
    export const Error = createEnumToken('RuntimeLoader', 'Status', 'Error');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('RuntimeLoader', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('RuntimeLoader', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('RuntimeLoader', 'TransformSpace', 'SceneSpace');
  }
}
