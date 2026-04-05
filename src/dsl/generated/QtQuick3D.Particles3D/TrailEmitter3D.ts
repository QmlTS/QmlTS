// AUTO-GENERATED — DO NOT EDIT
// Type: TrailEmitter3D
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ParticleSystem3DBuilder } from './ParticleSystem3D.js';
export interface TrailEmitter3DBuilder {
  id(id: string): TrailEmitter3DBuilder;
  child(obj: QmlObjectBuilder): TrailEmitter3DBuilder;

  depthBias(value: number): TrailEmitter3DBuilder;
  depthBiasBind(expr: string): TrailEmitter3DBuilder;
  emitMode(value: QmlEnumToken): TrailEmitter3DBuilder;
  emitModeBind(expr: string): TrailEmitter3DBuilder;
  emitRate(value: number): TrailEmitter3DBuilder;
  emitRateBind(expr: string): TrailEmitter3DBuilder;
  enabled(value: boolean): TrailEmitter3DBuilder;
  enabledBind(expr: string): TrailEmitter3DBuilder;
  eulerRotation(value: QmlVector3d): TrailEmitter3DBuilder;
  eulerRotationBind(expr: string): TrailEmitter3DBuilder;
  follow(value: QmlValue): TrailEmitter3DBuilder;
  followBind(expr: string): TrailEmitter3DBuilder;
  layers(value: number): TrailEmitter3DBuilder;
  layersBind(expr: string): TrailEmitter3DBuilder;
  lifeSpan(value: number): TrailEmitter3DBuilder;
  lifeSpanBind(expr: string): TrailEmitter3DBuilder;
  lifeSpanVariation(value: number): TrailEmitter3DBuilder;
  lifeSpanVariationBind(expr: string): TrailEmitter3DBuilder;
  objectName(value: string): TrailEmitter3DBuilder;
  objectNameBind(expr: string): TrailEmitter3DBuilder;
  opacity(value: number): TrailEmitter3DBuilder;
  opacityBind(expr: string): TrailEmitter3DBuilder;
  parent(value: QmlValue): TrailEmitter3DBuilder;
  parentBind(expr: string): TrailEmitter3DBuilder;
  particle(value: QmlValue): TrailEmitter3DBuilder;
  particleBind(expr: string): TrailEmitter3DBuilder;
  particleEndScale(value: number): TrailEmitter3DBuilder;
  particleEndScaleBind(expr: string): TrailEmitter3DBuilder;
  particleEndScaleVariation(value: number): TrailEmitter3DBuilder;
  particleEndScaleVariationBind(expr: string): TrailEmitter3DBuilder;
  particleRotation(value: QmlVector3d): TrailEmitter3DBuilder;
  particleRotationBind(expr: string): TrailEmitter3DBuilder;
  particleRotationVariation(value: QmlVector3d): TrailEmitter3DBuilder;
  particleRotationVariationBind(expr: string): TrailEmitter3DBuilder;
  particleRotationVelocity(value: QmlVector3d): TrailEmitter3DBuilder;
  particleRotationVelocityBind(expr: string): TrailEmitter3DBuilder;
  particleRotationVelocityVariation(value: QmlVector3d): TrailEmitter3DBuilder;
  particleRotationVelocityVariationBind(expr: string): TrailEmitter3DBuilder;
  particleScale(value: number): TrailEmitter3DBuilder;
  particleScaleBind(expr: string): TrailEmitter3DBuilder;
  particleScaleVariation(value: number): TrailEmitter3DBuilder;
  particleScaleVariationBind(expr: string): TrailEmitter3DBuilder;
  pivot(value: QmlVector3d): TrailEmitter3DBuilder;
  pivotBind(expr: string): TrailEmitter3DBuilder;
  position(value: QmlVector3d): TrailEmitter3DBuilder;
  positionBind(expr: string): TrailEmitter3DBuilder;
  reversed(value: boolean): TrailEmitter3DBuilder;
  reversedBind(expr: string): TrailEmitter3DBuilder;
  rotation(value: QmlQuaternion): TrailEmitter3DBuilder;
  rotationBind(expr: string): TrailEmitter3DBuilder;
  scale(value: QmlVector3d): TrailEmitter3DBuilder;
  scaleBind(expr: string): TrailEmitter3DBuilder;
  shape(value: QmlValue): TrailEmitter3DBuilder;
  shapeBind(expr: string): TrailEmitter3DBuilder;
  state(value: string): TrailEmitter3DBuilder;
  stateBind(expr: string): TrailEmitter3DBuilder;
  staticFlags(value: number): TrailEmitter3DBuilder;
  staticFlagsBind(expr: string): TrailEmitter3DBuilder;
  system(value: ParticleSystem3DBuilder): TrailEmitter3DBuilder;
  systemBind(expr: string): TrailEmitter3DBuilder;
  velocity(value: QmlValue): TrailEmitter3DBuilder;
  velocityBind(expr: string): TrailEmitter3DBuilder;
  visible(value: boolean): TrailEmitter3DBuilder;
  visibleBind(expr: string): TrailEmitter3DBuilder;
  x(value: number): TrailEmitter3DBuilder;
  xBind(expr: string): TrailEmitter3DBuilder;
  y(value: number): TrailEmitter3DBuilder;
  yBind(expr: string): TrailEmitter3DBuilder;
  z(value: number): TrailEmitter3DBuilder;
  zBind(expr: string): TrailEmitter3DBuilder;
  onChildrenChanged(body: string): TrailEmitter3DBuilder;
  onDepthBiasChanged(body: string): TrailEmitter3DBuilder;
  onEmitModeChanged(body: string): TrailEmitter3DBuilder;
  onEmitRateChanged(body: string): TrailEmitter3DBuilder;
  onEnabledChanged(body: string): TrailEmitter3DBuilder;
  onEulerRotationChanged(body: string): TrailEmitter3DBuilder;
  onFollowChanged(body: string): TrailEmitter3DBuilder;
  onForwardChanged(body: string): TrailEmitter3DBuilder;
  onLayersChanged(body: string): TrailEmitter3DBuilder;
  onLifeSpanChanged(body: string): TrailEmitter3DBuilder;
  onLifeSpanVariationChanged(body: string): TrailEmitter3DBuilder;
  onLocalOpacityChanged(body: string): TrailEmitter3DBuilder;
  onObjectNameChanged(body: string): TrailEmitter3DBuilder;
  onParentChanged(body: string): TrailEmitter3DBuilder;
  onParticleChanged(body: string): TrailEmitter3DBuilder;
  onParticleEndScaleChanged(body: string): TrailEmitter3DBuilder;
  onParticleEndScaleVariationChanged(body: string): TrailEmitter3DBuilder;
  onParticleRotationChanged(body: string): TrailEmitter3DBuilder;
  onParticleRotationVariationChanged(body: string): TrailEmitter3DBuilder;
  onParticleRotationVariationVelocityChanged(body: string): TrailEmitter3DBuilder;
  onParticleRotationVelocityChanged(body: string): TrailEmitter3DBuilder;
  onParticleScaleChanged(body: string): TrailEmitter3DBuilder;
  onParticleScaleVariationChanged(body: string): TrailEmitter3DBuilder;
  onPivotChanged(body: string): TrailEmitter3DBuilder;
  onPositionChanged(body: string): TrailEmitter3DBuilder;
  onReversedChanged(body: string): TrailEmitter3DBuilder;
  onRightChanged(body: string): TrailEmitter3DBuilder;
  onRotationChanged(body: string): TrailEmitter3DBuilder;
  onScaleChanged(body: string): TrailEmitter3DBuilder;
  onScenePositionChanged(body: string): TrailEmitter3DBuilder;
  onSceneRotationChanged(body: string): TrailEmitter3DBuilder;
  onSceneScaleChanged(body: string): TrailEmitter3DBuilder;
  onSceneTransformChanged(body: string): TrailEmitter3DBuilder;
  onShapeChanged(body: string): TrailEmitter3DBuilder;
  onStateChanged(body: string): TrailEmitter3DBuilder;
  onStaticFlagsChanged(body: string): TrailEmitter3DBuilder;
  onSystemChanged(body: string): TrailEmitter3DBuilder;
  onUpChanged(body: string): TrailEmitter3DBuilder;
  onVelocityChanged(body: string): TrailEmitter3DBuilder;
  onVisibleChanged(body: string): TrailEmitter3DBuilder;
  onXChanged(body: string): TrailEmitter3DBuilder;
  onYChanged(body: string): TrailEmitter3DBuilder;
  onZChanged(body: string): TrailEmitter3DBuilder;
}

const TRAILEMITTER3D_META: TypeMetadata = {
  typeName: 'TrailEmitter3D',
  properties: [
    { name: 'depthBias', hasValue: true, hasBinding: true },
    { name: 'emitMode', hasValue: true, hasBinding: true },
    { name: 'emitRate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'follow', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'lifeSpan', hasValue: true, hasBinding: true },
    { name: 'lifeSpanVariation', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'particle', hasValue: true, hasBinding: true },
    { name: 'particleEndScale', hasValue: true, hasBinding: true },
    { name: 'particleEndScaleVariation', hasValue: true, hasBinding: true },
    { name: 'particleRotation', hasValue: true, hasBinding: true },
    { name: 'particleRotationVariation', hasValue: true, hasBinding: true },
    { name: 'particleRotationVelocity', hasValue: true, hasBinding: true },
    { name: 'particleRotationVelocityVariation', hasValue: true, hasBinding: true },
    { name: 'particleScale', hasValue: true, hasBinding: true },
    { name: 'particleScaleVariation', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'reversed', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'velocity', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDepthBiasChanged', paramCount: 0 },
    { handlerName: 'onEmitModeChanged', paramCount: 0 },
    { handlerName: 'onEmitRateChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onFollowChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLifeSpanChanged', paramCount: 0 },
    { handlerName: 'onLifeSpanVariationChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onParticleChanged', paramCount: 0 },
    { handlerName: 'onParticleEndScaleChanged', paramCount: 0 },
    { handlerName: 'onParticleEndScaleVariationChanged', paramCount: 0 },
    { handlerName: 'onParticleRotationChanged', paramCount: 0 },
    { handlerName: 'onParticleRotationVariationChanged', paramCount: 0 },
    { handlerName: 'onParticleRotationVariationVelocityChanged', paramCount: 0 },
    { handlerName: 'onParticleRotationVelocityChanged', paramCount: 0 },
    { handlerName: 'onParticleScaleChanged', paramCount: 0 },
    { handlerName: 'onParticleScaleVariationChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onReversedChanged', paramCount: 0 },
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
    { handlerName: 'onVelocityChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TrailEmitter3D(): TrailEmitter3DBuilder {
  return createFluentBuilder(
    'TrailEmitter3D',
    TRAILEMITTER3D_META,
  ) as unknown as TrailEmitter3DBuilder;
}

export namespace TrailEmitter3D {
  export namespace EmitMode {
    export const Default = createEnumToken('TrailEmitter3D', 'EmitMode', 'Default');
    export const SurfaceNormal = createEnumToken('TrailEmitter3D', 'EmitMode', 'SurfaceNormal');
    export const SurfaceReflected = createEnumToken(
      'TrailEmitter3D',
      'EmitMode',
      'SurfaceReflected',
    );
  }
  export namespace StaticFlags {
    export const None = createEnumToken('TrailEmitter3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('TrailEmitter3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('TrailEmitter3D', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('TrailEmitter3D', 'TransformSpace', 'SceneSpace');
  }
}
