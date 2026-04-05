// AUTO-GENERATED — DO NOT EDIT
// Type: Attractor3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { ParticleSystem3DBuilder } from './ParticleSystem3D.js';
export interface Attractor3DBuilder {
  id(id: string): Attractor3DBuilder;
  child(obj: QmlObjectBuilder): Attractor3DBuilder;

  duration(value: number): Attractor3DBuilder;
  durationBind(expr: string): Attractor3DBuilder;
  durationVariation(value: number): Attractor3DBuilder;
  durationVariationBind(expr: string): Attractor3DBuilder;
  enabled(value: boolean): Attractor3DBuilder;
  enabledBind(expr: string): Attractor3DBuilder;
  eulerRotation(value: QmlVector3d): Attractor3DBuilder;
  eulerRotationBind(expr: string): Attractor3DBuilder;
  hideAtEnd(value: boolean): Attractor3DBuilder;
  hideAtEndBind(expr: string): Attractor3DBuilder;
  layers(value: number): Attractor3DBuilder;
  layersBind(expr: string): Attractor3DBuilder;
  objectName(value: string): Attractor3DBuilder;
  objectNameBind(expr: string): Attractor3DBuilder;
  opacity(value: number): Attractor3DBuilder;
  opacityBind(expr: string): Attractor3DBuilder;
  parent(value: QmlValue): Attractor3DBuilder;
  parentBind(expr: string): Attractor3DBuilder;
  pivot(value: QmlVector3d): Attractor3DBuilder;
  pivotBind(expr: string): Attractor3DBuilder;
  position(value: QmlVector3d): Attractor3DBuilder;
  positionBind(expr: string): Attractor3DBuilder;
  positionVariation(value: QmlVector3d): Attractor3DBuilder;
  positionVariationBind(expr: string): Attractor3DBuilder;
  positionsAmount(value: number): Attractor3DBuilder;
  positionsAmountBind(expr: string): Attractor3DBuilder;
  rotation(value: QmlQuaternion): Attractor3DBuilder;
  rotationBind(expr: string): Attractor3DBuilder;
  scale(value: QmlVector3d): Attractor3DBuilder;
  scaleBind(expr: string): Attractor3DBuilder;
  shape(value: QmlValue): Attractor3DBuilder;
  shapeBind(expr: string): Attractor3DBuilder;
  state(value: string): Attractor3DBuilder;
  stateBind(expr: string): Attractor3DBuilder;
  staticFlags(value: number): Attractor3DBuilder;
  staticFlagsBind(expr: string): Attractor3DBuilder;
  system(value: ParticleSystem3DBuilder): Attractor3DBuilder;
  systemBind(expr: string): Attractor3DBuilder;
  useCachedPositions(value: boolean): Attractor3DBuilder;
  useCachedPositionsBind(expr: string): Attractor3DBuilder;
  visible(value: boolean): Attractor3DBuilder;
  visibleBind(expr: string): Attractor3DBuilder;
  x(value: number): Attractor3DBuilder;
  xBind(expr: string): Attractor3DBuilder;
  y(value: number): Attractor3DBuilder;
  yBind(expr: string): Attractor3DBuilder;
  z(value: number): Attractor3DBuilder;
  zBind(expr: string): Attractor3DBuilder;
  onChildrenChanged(body: string): Attractor3DBuilder;
  onDurationChanged(body: string): Attractor3DBuilder;
  onDurationVariationChanged(body: string): Attractor3DBuilder;
  onEnabledChanged(body: string): Attractor3DBuilder;
  onEulerRotationChanged(body: string): Attractor3DBuilder;
  onForwardChanged(body: string): Attractor3DBuilder;
  onHideAtEndChanged(body: string): Attractor3DBuilder;
  onLayersChanged(body: string): Attractor3DBuilder;
  onLocalOpacityChanged(body: string): Attractor3DBuilder;
  onObjectNameChanged(body: string): Attractor3DBuilder;
  onParentChanged(body: string): Attractor3DBuilder;
  onPivotChanged(body: string): Attractor3DBuilder;
  onPositionChanged(body: string): Attractor3DBuilder;
  onPositionVariationChanged(body: string): Attractor3DBuilder;
  onPositionsAmountChanged(body: string): Attractor3DBuilder;
  onRightChanged(body: string): Attractor3DBuilder;
  onRotationChanged(body: string): Attractor3DBuilder;
  onScaleChanged(body: string): Attractor3DBuilder;
  onScenePositionChanged(body: string): Attractor3DBuilder;
  onSceneRotationChanged(body: string): Attractor3DBuilder;
  onSceneScaleChanged(body: string): Attractor3DBuilder;
  onSceneTransformChanged(body: string): Attractor3DBuilder;
  onShapeChanged(body: string): Attractor3DBuilder;
  onStateChanged(body: string): Attractor3DBuilder;
  onStaticFlagsChanged(body: string): Attractor3DBuilder;
  onSystemChanged(body: string): Attractor3DBuilder;
  onUpChanged(body: string): Attractor3DBuilder;
  onUpdate(body: string): Attractor3DBuilder;
  onUseCachedPositionsChanged(body: string): Attractor3DBuilder;
  onVisibleChanged(body: string): Attractor3DBuilder;
  onXChanged(body: string): Attractor3DBuilder;
  onYChanged(body: string): Attractor3DBuilder;
  onZChanged(body: string): Attractor3DBuilder;
}

const ATTRACTOR3D_META: TypeMetadata = {
  typeName: 'Attractor3D',
  properties: [
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'durationVariation', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'hideAtEnd', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'positionVariation', hasValue: true, hasBinding: true },
    { name: 'positionsAmount', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'useCachedPositions', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 0 },
    { handlerName: 'onDurationVariationChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onHideAtEndChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onPositionVariationChanged', paramCount: 0 },
    { handlerName: 'onPositionsAmountChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onShapeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onUseCachedPositionsChanged', paramCount: 0 },
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

export function Attractor3D(): Attractor3DBuilder {
  return createFluentBuilder('Attractor3D', ATTRACTOR3D_META) as unknown as Attractor3DBuilder;
}

export namespace Attractor3D {
  export namespace StaticFlags {
    export const None = createEnumToken('Attractor3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Attractor3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Attractor3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Attractor3D', 'TransformSpace', 'SceneSpace');
  }
}
