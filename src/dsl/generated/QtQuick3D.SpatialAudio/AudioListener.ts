// AUTO-GENERATED — DO NOT EDIT
// Type: AudioListener
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
export interface AudioListenerBuilder {
  id(id: string): AudioListenerBuilder;
  child(obj: QmlObjectBuilder): AudioListenerBuilder;
  children(...objs: QmlObjectBuilder[]): AudioListenerBuilder;

  eulerRotation(value: QmlVector3d): AudioListenerBuilder;
  eulerRotationBind(expr: string): AudioListenerBuilder;
  layers(value: number): AudioListenerBuilder;
  layersBind(expr: string): AudioListenerBuilder;
  objectName(value: string): AudioListenerBuilder;
  objectNameBind(expr: string): AudioListenerBuilder;
  opacity(value: number): AudioListenerBuilder;
  opacityBind(expr: string): AudioListenerBuilder;
  parent(value: QmlValue): AudioListenerBuilder;
  parentBind(expr: string): AudioListenerBuilder;
  pivot(value: QmlVector3d): AudioListenerBuilder;
  pivotBind(expr: string): AudioListenerBuilder;
  position(value: QmlVector3d): AudioListenerBuilder;
  positionBind(expr: string): AudioListenerBuilder;
  rotation(value: QmlQuaternion): AudioListenerBuilder;
  rotationBind(expr: string): AudioListenerBuilder;
  scale(value: QmlVector3d): AudioListenerBuilder;
  scaleBind(expr: string): AudioListenerBuilder;
  state(value: string): AudioListenerBuilder;
  stateBind(expr: string): AudioListenerBuilder;
  staticFlags(value: number): AudioListenerBuilder;
  staticFlagsBind(expr: string): AudioListenerBuilder;
  visible(value: boolean): AudioListenerBuilder;
  visibleBind(expr: string): AudioListenerBuilder;
  x(value: number): AudioListenerBuilder;
  xBind(expr: string): AudioListenerBuilder;
  y(value: number): AudioListenerBuilder;
  yBind(expr: string): AudioListenerBuilder;
  z(value: number): AudioListenerBuilder;
  zBind(expr: string): AudioListenerBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onRightChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onStateChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onUpChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onXChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onYChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
  onZChanged(handler: DslSignalHandlerValue): AudioListenerBuilder;
}

const AUDIOLISTENER_META: TypeMetadata = {
  typeName: 'AudioListener',
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
};

export function AudioListener(): AudioListenerBuilder {
  return createFluentBuilder(
    'AudioListener',
    AUDIOLISTENER_META,
  ) as unknown as AudioListenerBuilder;
}

export namespace AudioListener {
  export namespace StaticFlags {
    export const None = createEnumToken('AudioListener', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('AudioListener', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('AudioListener', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('AudioListener', 'TransformSpace', 'SceneSpace');
  }
}
