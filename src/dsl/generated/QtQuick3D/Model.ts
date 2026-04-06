// AUTO-GENERATED — DO NOT EDIT
// Type: Model
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlMatrix4x4,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { BakedLightmapBuilder } from './BakedLightmap.js';
import type { NodeBuilder } from './Node.js';
import type { SkeletonBuilder } from './Skeleton.js';
import type { SkinBuilder } from './Skin.js';
export interface ModelBuilder {
  id(id: string): ModelBuilder;
  child(obj: QmlObjectBuilder): ModelBuilder;
  children(...objs: QmlObjectBuilder[]): ModelBuilder;

  bakedLightmap(value: BakedLightmapBuilder): ModelBuilder;
  bakedLightmapBind(expr: string): ModelBuilder;
  castsReflections(value: boolean): ModelBuilder;
  castsReflectionsBind(expr: string): ModelBuilder;
  castsShadows(value: boolean): ModelBuilder;
  castsShadowsBind(expr: string): ModelBuilder;
  depthBias(value: number): ModelBuilder;
  depthBiasBind(expr: string): ModelBuilder;
  eulerRotation(value: QmlVector3d): ModelBuilder;
  eulerRotationBind(expr: string): ModelBuilder;
  geometry(value: QmlValue): ModelBuilder;
  geometryBind(expr: string): ModelBuilder;
  instanceRoot(value: NodeBuilder): ModelBuilder;
  instanceRootBind(expr: string): ModelBuilder;
  instancing(value: QmlValue): ModelBuilder;
  instancingBind(expr: string): ModelBuilder;
  instancingLodMax(value: number): ModelBuilder;
  instancingLodMaxBind(expr: string): ModelBuilder;
  instancingLodMin(value: number): ModelBuilder;
  instancingLodMinBind(expr: string): ModelBuilder;
  inverseBindPoses(value: QmlMatrix4x4): ModelBuilder;
  inverseBindPosesBind(expr: string): ModelBuilder;
  layers(value: number): ModelBuilder;
  layersBind(expr: string): ModelBuilder;
  levelOfDetailBias(value: number): ModelBuilder;
  levelOfDetailBiasBind(expr: string): ModelBuilder;
  lightmapBaseResolution(value: number): ModelBuilder;
  lightmapBaseResolutionBind(expr: string): ModelBuilder;
  motionVectorEnabled(value: boolean): ModelBuilder;
  motionVectorEnabledBind(expr: string): ModelBuilder;
  motionVectorScale(value: number): ModelBuilder;
  motionVectorScaleBind(expr: string): ModelBuilder;
  objectName(value: string): ModelBuilder;
  objectNameBind(expr: string): ModelBuilder;
  opacity(value: number): ModelBuilder;
  opacityBind(expr: string): ModelBuilder;
  parent(value: QmlValue): ModelBuilder;
  parentBind(expr: string): ModelBuilder;
  pickable(value: boolean): ModelBuilder;
  pickableBind(expr: string): ModelBuilder;
  pivot(value: QmlVector3d): ModelBuilder;
  pivotBind(expr: string): ModelBuilder;
  position(value: QmlVector3d): ModelBuilder;
  positionBind(expr: string): ModelBuilder;
  receivesReflections(value: boolean): ModelBuilder;
  receivesReflectionsBind(expr: string): ModelBuilder;
  receivesShadows(value: boolean): ModelBuilder;
  receivesShadowsBind(expr: string): ModelBuilder;
  rotation(value: QmlQuaternion): ModelBuilder;
  rotationBind(expr: string): ModelBuilder;
  scale(value: QmlVector3d): ModelBuilder;
  scaleBind(expr: string): ModelBuilder;
  skeleton(value: SkeletonBuilder): ModelBuilder;
  skeletonBind(expr: string): ModelBuilder;
  skin(value: SkinBuilder): ModelBuilder;
  skinBind(expr: string): ModelBuilder;
  source(value: QmlUrl): ModelBuilder;
  sourceBind(expr: string): ModelBuilder;
  state(value: string): ModelBuilder;
  stateBind(expr: string): ModelBuilder;
  staticFlags(value: number): ModelBuilder;
  staticFlagsBind(expr: string): ModelBuilder;
  texelsPerUnit(value: number): ModelBuilder;
  texelsPerUnitBind(expr: string): ModelBuilder;
  usedInBakedLighting(value: boolean): ModelBuilder;
  usedInBakedLightingBind(expr: string): ModelBuilder;
  visible(value: boolean): ModelBuilder;
  visibleBind(expr: string): ModelBuilder;
  x(value: number): ModelBuilder;
  xBind(expr: string): ModelBuilder;
  y(value: number): ModelBuilder;
  yBind(expr: string): ModelBuilder;
  z(value: number): ModelBuilder;
  zBind(expr: string): ModelBuilder;
  onBakedLightmapChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onBoundsChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onCastsReflectionsChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onCastsShadowsChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onDepthBiasChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onInstanceRootChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onInstancingChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onInstancingLodMaxChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onInstancingLodMinChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onInverseBindPosesChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onLevelOfDetailBiasChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onLightmapBaseResolutionChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onMorphTargetsChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onMotionVectorEnabledChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onMotionVectorScaleChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onPickableChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onReceivesReflectionsChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onReceivesShadowsChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onRightChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onSkeletonChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onSkinChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onTexelsPerUnitChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onUpChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onUsedInBakedLightingChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onXChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onYChanged(handler: DslSignalHandlerValue): ModelBuilder;
  onZChanged(handler: DslSignalHandlerValue): ModelBuilder;
}

const MODEL_META: TypeMetadata = {
  typeName: 'Model',
  properties: [
    { name: 'bakedLightmap', hasValue: true, hasBinding: true },
    { name: 'castsReflections', hasValue: true, hasBinding: true },
    { name: 'castsShadows', hasValue: true, hasBinding: true },
    { name: 'depthBias', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'instanceRoot', hasValue: true, hasBinding: true },
    { name: 'instancing', hasValue: true, hasBinding: true },
    { name: 'instancingLodMax', hasValue: true, hasBinding: true },
    { name: 'instancingLodMin', hasValue: true, hasBinding: true },
    { name: 'inverseBindPoses', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'levelOfDetailBias', hasValue: true, hasBinding: true },
    { name: 'lightmapBaseResolution', hasValue: true, hasBinding: true },
    { name: 'motionVectorEnabled', hasValue: true, hasBinding: true },
    { name: 'motionVectorScale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pickable', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'receivesReflections', hasValue: true, hasBinding: true },
    { name: 'receivesShadows', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'skeleton', hasValue: true, hasBinding: true },
    { name: 'skin', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'texelsPerUnit', hasValue: true, hasBinding: true },
    { name: 'usedInBakedLighting', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBakedLightmapChanged', paramCount: 0 },
    { handlerName: 'onBoundsChanged', paramCount: 0 },
    { handlerName: 'onCastsReflectionsChanged', paramCount: 0 },
    { handlerName: 'onCastsShadowsChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDepthBiasChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onInstanceRootChanged', paramCount: 0 },
    { handlerName: 'onInstancingChanged', paramCount: 0 },
    { handlerName: 'onInstancingLodMaxChanged', paramCount: 0 },
    { handlerName: 'onInstancingLodMinChanged', paramCount: 0 },
    { handlerName: 'onInverseBindPosesChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLevelOfDetailBiasChanged', paramCount: 0 },
    { handlerName: 'onLightmapBaseResolutionChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onMorphTargetsChanged', paramCount: 0 },
    { handlerName: 'onMotionVectorEnabledChanged', paramCount: 0 },
    { handlerName: 'onMotionVectorScaleChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPickableChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onReceivesReflectionsChanged', paramCount: 0 },
    { handlerName: 'onReceivesShadowsChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onSkeletonChanged', paramCount: 0 },
    { handlerName: 'onSkinChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onTexelsPerUnitChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onUsedInBakedLightingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Model(): ModelBuilder {
  return createFluentBuilder('Model', MODEL_META) as unknown as ModelBuilder;
}

export namespace Model {
  export namespace StaticFlags {
    export const None = createEnumToken('Model', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Model', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Model', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Model', 'TransformSpace', 'SceneSpace');
  }
}
