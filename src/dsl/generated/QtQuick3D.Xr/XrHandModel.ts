// AUTO-GENERATED — DO NOT EDIT
// Type: XrHandModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlMatrix4x4, QmlObjectBuilder, QmlQuaternion, QmlUrl, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { BakedLightmapBuilder } from '../QtQuick3D/BakedLightmap.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
import type { SkeletonBuilder } from '../QtQuick3D/Skeleton.js';
import type { SkinBuilder } from '../QtQuick3D/Skin.js';
export interface XrHandModelBuilder {
  id(id: string): XrHandModelBuilder;
  child(obj: QmlObjectBuilder): XrHandModelBuilder;

  bakedLightmap(value: BakedLightmapBuilder): XrHandModelBuilder;
  bakedLightmapBind(expr: string): XrHandModelBuilder;
  castsReflections(value: boolean): XrHandModelBuilder;
  castsReflectionsBind(expr: string): XrHandModelBuilder;
  castsShadows(value: boolean): XrHandModelBuilder;
  castsShadowsBind(expr: string): XrHandModelBuilder;
  depthBias(value: number): XrHandModelBuilder;
  depthBiasBind(expr: string): XrHandModelBuilder;
  eulerRotation(value: QmlVector3d): XrHandModelBuilder;
  eulerRotationBind(expr: string): XrHandModelBuilder;
  geometry(value: QmlValue): XrHandModelBuilder;
  geometryBind(expr: string): XrHandModelBuilder;
  hand(value: QmlEnumToken): XrHandModelBuilder;
  handBind(expr: string): XrHandModelBuilder;
  instanceRoot(value: NodeBuilder): XrHandModelBuilder;
  instanceRootBind(expr: string): XrHandModelBuilder;
  instancing(value: QmlValue): XrHandModelBuilder;
  instancingBind(expr: string): XrHandModelBuilder;
  instancingLodMax(value: number): XrHandModelBuilder;
  instancingLodMaxBind(expr: string): XrHandModelBuilder;
  instancingLodMin(value: number): XrHandModelBuilder;
  instancingLodMinBind(expr: string): XrHandModelBuilder;
  inverseBindPoses(value: QmlMatrix4x4): XrHandModelBuilder;
  inverseBindPosesBind(expr: string): XrHandModelBuilder;
  layers(value: number): XrHandModelBuilder;
  layersBind(expr: string): XrHandModelBuilder;
  levelOfDetailBias(value: number): XrHandModelBuilder;
  levelOfDetailBiasBind(expr: string): XrHandModelBuilder;
  lightmapBaseResolution(value: number): XrHandModelBuilder;
  lightmapBaseResolutionBind(expr: string): XrHandModelBuilder;
  motionVectorEnabled(value: boolean): XrHandModelBuilder;
  motionVectorEnabledBind(expr: string): XrHandModelBuilder;
  motionVectorScale(value: number): XrHandModelBuilder;
  motionVectorScaleBind(expr: string): XrHandModelBuilder;
  objectName(value: string): XrHandModelBuilder;
  objectNameBind(expr: string): XrHandModelBuilder;
  opacity(value: number): XrHandModelBuilder;
  opacityBind(expr: string): XrHandModelBuilder;
  parent(value: QmlValue): XrHandModelBuilder;
  parentBind(expr: string): XrHandModelBuilder;
  pickable(value: boolean): XrHandModelBuilder;
  pickableBind(expr: string): XrHandModelBuilder;
  pivot(value: QmlVector3d): XrHandModelBuilder;
  pivotBind(expr: string): XrHandModelBuilder;
  position(value: QmlVector3d): XrHandModelBuilder;
  positionBind(expr: string): XrHandModelBuilder;
  receivesReflections(value: boolean): XrHandModelBuilder;
  receivesReflectionsBind(expr: string): XrHandModelBuilder;
  receivesShadows(value: boolean): XrHandModelBuilder;
  receivesShadowsBind(expr: string): XrHandModelBuilder;
  rotation(value: QmlQuaternion): XrHandModelBuilder;
  rotationBind(expr: string): XrHandModelBuilder;
  scale(value: QmlVector3d): XrHandModelBuilder;
  scaleBind(expr: string): XrHandModelBuilder;
  skeleton(value: SkeletonBuilder): XrHandModelBuilder;
  skeletonBind(expr: string): XrHandModelBuilder;
  skin(value: SkinBuilder): XrHandModelBuilder;
  skinBind(expr: string): XrHandModelBuilder;
  source(value: QmlUrl): XrHandModelBuilder;
  sourceBind(expr: string): XrHandModelBuilder;
  state(value: string): XrHandModelBuilder;
  stateBind(expr: string): XrHandModelBuilder;
  staticFlags(value: number): XrHandModelBuilder;
  staticFlagsBind(expr: string): XrHandModelBuilder;
  texelsPerUnit(value: number): XrHandModelBuilder;
  texelsPerUnitBind(expr: string): XrHandModelBuilder;
  usedInBakedLighting(value: boolean): XrHandModelBuilder;
  usedInBakedLightingBind(expr: string): XrHandModelBuilder;
  visible(value: boolean): XrHandModelBuilder;
  visibleBind(expr: string): XrHandModelBuilder;
  x(value: number): XrHandModelBuilder;
  xBind(expr: string): XrHandModelBuilder;
  y(value: number): XrHandModelBuilder;
  yBind(expr: string): XrHandModelBuilder;
  z(value: number): XrHandModelBuilder;
  zBind(expr: string): XrHandModelBuilder;
  onBakedLightmapChanged(body: string): XrHandModelBuilder;
  onBoundsChanged(body: string): XrHandModelBuilder;
  onCastsReflectionsChanged(body: string): XrHandModelBuilder;
  onCastsShadowsChanged(body: string): XrHandModelBuilder;
  onChildrenChanged(body: string): XrHandModelBuilder;
  onDepthBiasChanged(body: string): XrHandModelBuilder;
  onEulerRotationChanged(body: string): XrHandModelBuilder;
  onForwardChanged(body: string): XrHandModelBuilder;
  onGeometryChanged(body: string): XrHandModelBuilder;
  onHandChanged(body: string): XrHandModelBuilder;
  onHandTrackerChanged(body: string): XrHandModelBuilder;
  onInstanceRootChanged(body: string): XrHandModelBuilder;
  onInstancingChanged(body: string): XrHandModelBuilder;
  onInstancingLodMaxChanged(body: string): XrHandModelBuilder;
  onInstancingLodMinChanged(body: string): XrHandModelBuilder;
  onInverseBindPosesChanged(body: string): XrHandModelBuilder;
  onLayersChanged(body: string): XrHandModelBuilder;
  onLevelOfDetailBiasChanged(body: string): XrHandModelBuilder;
  onLightmapBaseResolutionChanged(body: string): XrHandModelBuilder;
  onLocalOpacityChanged(body: string): XrHandModelBuilder;
  onMorphTargetsChanged(body: string): XrHandModelBuilder;
  onMotionVectorEnabledChanged(body: string): XrHandModelBuilder;
  onMotionVectorScaleChanged(body: string): XrHandModelBuilder;
  onObjectNameChanged(body: string): XrHandModelBuilder;
  onParentChanged(body: string): XrHandModelBuilder;
  onPickableChanged(body: string): XrHandModelBuilder;
  onPivotChanged(body: string): XrHandModelBuilder;
  onPositionChanged(body: string): XrHandModelBuilder;
  onReceivesReflectionsChanged(body: string): XrHandModelBuilder;
  onReceivesShadowsChanged(body: string): XrHandModelBuilder;
  onRightChanged(body: string): XrHandModelBuilder;
  onRotationChanged(body: string): XrHandModelBuilder;
  onScaleChanged(body: string): XrHandModelBuilder;
  onScenePositionChanged(body: string): XrHandModelBuilder;
  onSceneRotationChanged(body: string): XrHandModelBuilder;
  onSceneScaleChanged(body: string): XrHandModelBuilder;
  onSceneTransformChanged(body: string): XrHandModelBuilder;
  onSkeletonChanged(body: string): XrHandModelBuilder;
  onSkinChanged(body: string): XrHandModelBuilder;
  onSourceChanged(body: string): XrHandModelBuilder;
  onStateChanged(body: string): XrHandModelBuilder;
  onStaticFlagsChanged(body: string): XrHandModelBuilder;
  onTexelsPerUnitChanged(body: string): XrHandModelBuilder;
  onUpChanged(body: string): XrHandModelBuilder;
  onUsedInBakedLightingChanged(body: string): XrHandModelBuilder;
  onVisibleChanged(body: string): XrHandModelBuilder;
  onXChanged(body: string): XrHandModelBuilder;
  onYChanged(body: string): XrHandModelBuilder;
  onZChanged(body: string): XrHandModelBuilder;
}

const XRHANDMODEL_META: TypeMetadata = {
  typeName: 'XrHandModel',
  properties: [
    { name: 'bakedLightmap', hasValue: true, hasBinding: true },
    { name: 'castsReflections', hasValue: true, hasBinding: true },
    { name: 'castsShadows', hasValue: true, hasBinding: true },
    { name: 'depthBias', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'geometry', hasValue: true, hasBinding: true },
    { name: 'hand', hasValue: true, hasBinding: true },
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
    { handlerName: 'onHandChanged', paramCount: 0 },
    { handlerName: 'onHandTrackerChanged', paramCount: 0 },
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
  grouped: [
  ],
  attached: [
  ],
};

export function XrHandModel(): XrHandModelBuilder {
  return createFluentBuilder('XrHandModel', XRHANDMODEL_META) as unknown as XrHandModelBuilder;
}

export namespace XrHandModel {
  export namespace Hand {
    export const LeftHand = createEnumToken('XrHandModel', 'Hand', 'LeftHand');
    export const RightHand = createEnumToken('XrHandModel', 'Hand', 'RightHand');
    export const Unknown = createEnumToken('XrHandModel', 'Hand', 'Unknown');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('XrHandModel', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('XrHandModel', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('XrHandModel', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('XrHandModel', 'TransformSpace', 'SceneSpace');
  }
}
