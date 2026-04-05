// AUTO-GENERATED — DO NOT EDIT
// Type: Wander3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { ParticleSystem3DBuilder } from './ParticleSystem3D.js';
export interface Wander3DBuilder {
  id(id: string): Wander3DBuilder;
  child(obj: QmlObjectBuilder): Wander3DBuilder;

  enabled(value: boolean): Wander3DBuilder;
  enabledBind(expr: string): Wander3DBuilder;
  eulerRotation(value: QmlVector3d): Wander3DBuilder;
  eulerRotationBind(expr: string): Wander3DBuilder;
  fadeInDuration(value: number): Wander3DBuilder;
  fadeInDurationBind(expr: string): Wander3DBuilder;
  fadeOutDuration(value: number): Wander3DBuilder;
  fadeOutDurationBind(expr: string): Wander3DBuilder;
  globalAmount(value: QmlVector3d): Wander3DBuilder;
  globalAmountBind(expr: string): Wander3DBuilder;
  globalPace(value: QmlVector3d): Wander3DBuilder;
  globalPaceBind(expr: string): Wander3DBuilder;
  globalPaceStart(value: QmlVector3d): Wander3DBuilder;
  globalPaceStartBind(expr: string): Wander3DBuilder;
  layers(value: number): Wander3DBuilder;
  layersBind(expr: string): Wander3DBuilder;
  objectName(value: string): Wander3DBuilder;
  objectNameBind(expr: string): Wander3DBuilder;
  opacity(value: number): Wander3DBuilder;
  opacityBind(expr: string): Wander3DBuilder;
  parent(value: QmlValue): Wander3DBuilder;
  parentBind(expr: string): Wander3DBuilder;
  pivot(value: QmlVector3d): Wander3DBuilder;
  pivotBind(expr: string): Wander3DBuilder;
  position(value: QmlVector3d): Wander3DBuilder;
  positionBind(expr: string): Wander3DBuilder;
  rotation(value: QmlQuaternion): Wander3DBuilder;
  rotationBind(expr: string): Wander3DBuilder;
  scale(value: QmlVector3d): Wander3DBuilder;
  scaleBind(expr: string): Wander3DBuilder;
  state(value: string): Wander3DBuilder;
  stateBind(expr: string): Wander3DBuilder;
  staticFlags(value: number): Wander3DBuilder;
  staticFlagsBind(expr: string): Wander3DBuilder;
  system(value: ParticleSystem3DBuilder): Wander3DBuilder;
  systemBind(expr: string): Wander3DBuilder;
  uniqueAmount(value: QmlVector3d): Wander3DBuilder;
  uniqueAmountBind(expr: string): Wander3DBuilder;
  uniqueAmountVariation(value: number): Wander3DBuilder;
  uniqueAmountVariationBind(expr: string): Wander3DBuilder;
  uniquePace(value: QmlVector3d): Wander3DBuilder;
  uniquePaceBind(expr: string): Wander3DBuilder;
  uniquePaceVariation(value: number): Wander3DBuilder;
  uniquePaceVariationBind(expr: string): Wander3DBuilder;
  visible(value: boolean): Wander3DBuilder;
  visibleBind(expr: string): Wander3DBuilder;
  x(value: number): Wander3DBuilder;
  xBind(expr: string): Wander3DBuilder;
  y(value: number): Wander3DBuilder;
  yBind(expr: string): Wander3DBuilder;
  z(value: number): Wander3DBuilder;
  zBind(expr: string): Wander3DBuilder;
  onChildrenChanged(body: string): Wander3DBuilder;
  onEnabledChanged(body: string): Wander3DBuilder;
  onEulerRotationChanged(body: string): Wander3DBuilder;
  onFadeInDurationChanged(body: string): Wander3DBuilder;
  onFadeOutDurationChanged(body: string): Wander3DBuilder;
  onForwardChanged(body: string): Wander3DBuilder;
  onGlobalAmountChanged(body: string): Wander3DBuilder;
  onGlobalPaceChanged(body: string): Wander3DBuilder;
  onGlobalPaceStartChanged(body: string): Wander3DBuilder;
  onLayersChanged(body: string): Wander3DBuilder;
  onLocalOpacityChanged(body: string): Wander3DBuilder;
  onObjectNameChanged(body: string): Wander3DBuilder;
  onParentChanged(body: string): Wander3DBuilder;
  onPivotChanged(body: string): Wander3DBuilder;
  onPositionChanged(body: string): Wander3DBuilder;
  onRightChanged(body: string): Wander3DBuilder;
  onRotationChanged(body: string): Wander3DBuilder;
  onScaleChanged(body: string): Wander3DBuilder;
  onScenePositionChanged(body: string): Wander3DBuilder;
  onSceneRotationChanged(body: string): Wander3DBuilder;
  onSceneScaleChanged(body: string): Wander3DBuilder;
  onSceneTransformChanged(body: string): Wander3DBuilder;
  onStateChanged(body: string): Wander3DBuilder;
  onStaticFlagsChanged(body: string): Wander3DBuilder;
  onSystemChanged(body: string): Wander3DBuilder;
  onUniqueAmountChanged(body: string): Wander3DBuilder;
  onUniqueAmountVariationChanged(body: string): Wander3DBuilder;
  onUniquePaceChanged(body: string): Wander3DBuilder;
  onUniquePaceVariationChanged(body: string): Wander3DBuilder;
  onUpChanged(body: string): Wander3DBuilder;
  onUpdate(body: string): Wander3DBuilder;
  onVisibleChanged(body: string): Wander3DBuilder;
  onXChanged(body: string): Wander3DBuilder;
  onYChanged(body: string): Wander3DBuilder;
  onZChanged(body: string): Wander3DBuilder;
}

const WANDER3D_META: TypeMetadata = {
  typeName: 'Wander3D',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'fadeInDuration', hasValue: true, hasBinding: true },
    { name: 'fadeOutDuration', hasValue: true, hasBinding: true },
    { name: 'globalAmount', hasValue: true, hasBinding: true },
    { name: 'globalPace', hasValue: true, hasBinding: true },
    { name: 'globalPaceStart', hasValue: true, hasBinding: true },
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
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'uniqueAmount', hasValue: true, hasBinding: true },
    { name: 'uniqueAmountVariation', hasValue: true, hasBinding: true },
    { name: 'uniquePace', hasValue: true, hasBinding: true },
    { name: 'uniquePaceVariation', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onFadeInDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeOutDurationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onGlobalAmountChanged', paramCount: 0 },
    { handlerName: 'onGlobalPaceChanged', paramCount: 0 },
    { handlerName: 'onGlobalPaceStartChanged', paramCount: 0 },
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
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onUniqueAmountChanged', paramCount: 0 },
    { handlerName: 'onUniqueAmountVariationChanged', paramCount: 0 },
    { handlerName: 'onUniquePaceChanged', paramCount: 0 },
    { handlerName: 'onUniquePaceVariationChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onUpdate', paramCount: 0 },
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

export function Wander3D(): Wander3DBuilder {
  return createFluentBuilder('Wander3D', WANDER3D_META) as unknown as Wander3DBuilder;
}

export namespace Wander3D {
  export namespace StaticFlags {
    export const None = createEnumToken('Wander3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Wander3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Wander3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Wander3D', 'TransformSpace', 'SceneSpace');
  }
}
