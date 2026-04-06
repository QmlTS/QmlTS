// AUTO-GENERATED — DO NOT EDIT
// Type: SpatialSound
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SpatialSoundBuilder {
  id(id: string): SpatialSoundBuilder;
  child(obj: QmlObjectBuilder): SpatialSoundBuilder;
  children(...objs: QmlObjectBuilder[]): SpatialSoundBuilder;

  autoPlay(value: boolean): SpatialSoundBuilder;
  autoPlayBind(expr: string): SpatialSoundBuilder;
  directivity(value: number): SpatialSoundBuilder;
  directivityBind(expr: string): SpatialSoundBuilder;
  directivityOrder(value: number): SpatialSoundBuilder;
  directivityOrderBind(expr: string): SpatialSoundBuilder;
  distanceCutoff(value: number): SpatialSoundBuilder;
  distanceCutoffBind(expr: string): SpatialSoundBuilder;
  distanceModel(value: QmlEnumToken): SpatialSoundBuilder;
  distanceModelBind(expr: string): SpatialSoundBuilder;
  eulerRotation(value: QmlVector3d): SpatialSoundBuilder;
  eulerRotationBind(expr: string): SpatialSoundBuilder;
  layers(value: number): SpatialSoundBuilder;
  layersBind(expr: string): SpatialSoundBuilder;
  loops(value: number): SpatialSoundBuilder;
  loopsBind(expr: string): SpatialSoundBuilder;
  manualAttenuation(value: number): SpatialSoundBuilder;
  manualAttenuationBind(expr: string): SpatialSoundBuilder;
  nearFieldGain(value: number): SpatialSoundBuilder;
  nearFieldGainBind(expr: string): SpatialSoundBuilder;
  objectName(value: string): SpatialSoundBuilder;
  objectNameBind(expr: string): SpatialSoundBuilder;
  occlusionIntensity(value: number): SpatialSoundBuilder;
  occlusionIntensityBind(expr: string): SpatialSoundBuilder;
  opacity(value: number): SpatialSoundBuilder;
  opacityBind(expr: string): SpatialSoundBuilder;
  parent(value: QmlValue): SpatialSoundBuilder;
  parentBind(expr: string): SpatialSoundBuilder;
  pivot(value: QmlVector3d): SpatialSoundBuilder;
  pivotBind(expr: string): SpatialSoundBuilder;
  position(value: QmlVector3d): SpatialSoundBuilder;
  positionBind(expr: string): SpatialSoundBuilder;
  rotation(value: QmlQuaternion): SpatialSoundBuilder;
  rotationBind(expr: string): SpatialSoundBuilder;
  scale(value: QmlVector3d): SpatialSoundBuilder;
  scaleBind(expr: string): SpatialSoundBuilder;
  size(value: number): SpatialSoundBuilder;
  sizeBind(expr: string): SpatialSoundBuilder;
  source(value: QmlUrl): SpatialSoundBuilder;
  sourceBind(expr: string): SpatialSoundBuilder;
  state(value: string): SpatialSoundBuilder;
  stateBind(expr: string): SpatialSoundBuilder;
  staticFlags(value: number): SpatialSoundBuilder;
  staticFlagsBind(expr: string): SpatialSoundBuilder;
  visible(value: boolean): SpatialSoundBuilder;
  visibleBind(expr: string): SpatialSoundBuilder;
  volume(value: number): SpatialSoundBuilder;
  volumeBind(expr: string): SpatialSoundBuilder;
  x(value: number): SpatialSoundBuilder;
  xBind(expr: string): SpatialSoundBuilder;
  y(value: number): SpatialSoundBuilder;
  yBind(expr: string): SpatialSoundBuilder;
  z(value: number): SpatialSoundBuilder;
  zBind(expr: string): SpatialSoundBuilder;
  onAutoPlayChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onDirectivityChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onDirectivityOrderChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onDistanceCutoffChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onDistanceModelChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onLoopsChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onManualAttenuationChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onNearFieldGainChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onOcclusionIntensityChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onRightChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onSizeChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onUpChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onVolumeChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onXChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onYChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
  onZChanged(handler: DslSignalHandlerValue): SpatialSoundBuilder;
}

const SPATIALSOUND_META: TypeMetadata = {
  typeName: 'SpatialSound',
  properties: [
    { name: 'autoPlay', hasValue: true, hasBinding: true },
    { name: 'directivity', hasValue: true, hasBinding: true },
    { name: 'directivityOrder', hasValue: true, hasBinding: true },
    { name: 'distanceCutoff', hasValue: true, hasBinding: true },
    { name: 'distanceModel', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'manualAttenuation', hasValue: true, hasBinding: true },
    { name: 'nearFieldGain', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'occlusionIntensity', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'size', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'volume', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoPlayChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDirectivityChanged', paramCount: 0 },
    { handlerName: 'onDirectivityOrderChanged', paramCount: 0 },
    { handlerName: 'onDistanceCutoffChanged', paramCount: 0 },
    { handlerName: 'onDistanceModelChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onLoopsChanged', paramCount: 0 },
    { handlerName: 'onManualAttenuationChanged', paramCount: 0 },
    { handlerName: 'onNearFieldGainChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOcclusionIntensityChanged', paramCount: 0 },
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
    { handlerName: 'onSizeChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVolumeChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SpatialSound(): SpatialSoundBuilder {
  return createFluentBuilder('SpatialSound', SPATIALSOUND_META) as unknown as SpatialSoundBuilder;
}

export namespace SpatialSound {
  export namespace DistanceModel {
    export const Logarithmic = createEnumToken('SpatialSound', 'DistanceModel', 'Logarithmic');
    export const Linear = createEnumToken('SpatialSound', 'DistanceModel', 'Linear');
    export const ManualAttenuation = createEnumToken(
      'SpatialSound',
      'DistanceModel',
      'ManualAttenuation',
    );
  }
  export namespace Loops {
    export const Infinite = createEnumToken('SpatialSound', 'Loops', 'Infinite');
    export const Once = createEnumToken('SpatialSound', 'Loops', 'Once');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('SpatialSound', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('SpatialSound', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('SpatialSound', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('SpatialSound', 'TransformSpace', 'SceneSpace');
  }
}
