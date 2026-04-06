// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleEmitter3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ParticleSystem3DBuilder } from './ParticleSystem3D.js';
export interface ParticleEmitter3DBuilder {
  id(id: string): ParticleEmitter3DBuilder;
  child(obj: QmlObjectBuilder): ParticleEmitter3DBuilder;
  children(...objs: QmlObjectBuilder[]): ParticleEmitter3DBuilder;

  depthBias(value: number): ParticleEmitter3DBuilder;
  depthBiasBind(expr: string): ParticleEmitter3DBuilder;
  emitMode(value: QmlEnumToken): ParticleEmitter3DBuilder;
  emitModeBind(expr: string): ParticleEmitter3DBuilder;
  emitRate(value: number): ParticleEmitter3DBuilder;
  emitRateBind(expr: string): ParticleEmitter3DBuilder;
  enabled(value: boolean): ParticleEmitter3DBuilder;
  enabledBind(expr: string): ParticleEmitter3DBuilder;
  eulerRotation(value: QmlVector3d): ParticleEmitter3DBuilder;
  eulerRotationBind(expr: string): ParticleEmitter3DBuilder;
  layers(value: number): ParticleEmitter3DBuilder;
  layersBind(expr: string): ParticleEmitter3DBuilder;
  lifeSpan(value: number): ParticleEmitter3DBuilder;
  lifeSpanBind(expr: string): ParticleEmitter3DBuilder;
  lifeSpanVariation(value: number): ParticleEmitter3DBuilder;
  lifeSpanVariationBind(expr: string): ParticleEmitter3DBuilder;
  objectName(value: string): ParticleEmitter3DBuilder;
  objectNameBind(expr: string): ParticleEmitter3DBuilder;
  opacity(value: number): ParticleEmitter3DBuilder;
  opacityBind(expr: string): ParticleEmitter3DBuilder;
  parent(value: QmlValue): ParticleEmitter3DBuilder;
  parentBind(expr: string): ParticleEmitter3DBuilder;
  particle(value: QmlValue): ParticleEmitter3DBuilder;
  particleBind(expr: string): ParticleEmitter3DBuilder;
  particleEndScale(value: number): ParticleEmitter3DBuilder;
  particleEndScaleBind(expr: string): ParticleEmitter3DBuilder;
  particleEndScaleVariation(value: number): ParticleEmitter3DBuilder;
  particleEndScaleVariationBind(expr: string): ParticleEmitter3DBuilder;
  particleRotation(value: QmlVector3d): ParticleEmitter3DBuilder;
  particleRotationBind(expr: string): ParticleEmitter3DBuilder;
  particleRotationVariation(value: QmlVector3d): ParticleEmitter3DBuilder;
  particleRotationVariationBind(expr: string): ParticleEmitter3DBuilder;
  particleRotationVelocity(value: QmlVector3d): ParticleEmitter3DBuilder;
  particleRotationVelocityBind(expr: string): ParticleEmitter3DBuilder;
  particleRotationVelocityVariation(value: QmlVector3d): ParticleEmitter3DBuilder;
  particleRotationVelocityVariationBind(expr: string): ParticleEmitter3DBuilder;
  particleScale(value: number): ParticleEmitter3DBuilder;
  particleScaleBind(expr: string): ParticleEmitter3DBuilder;
  particleScaleVariation(value: number): ParticleEmitter3DBuilder;
  particleScaleVariationBind(expr: string): ParticleEmitter3DBuilder;
  pivot(value: QmlVector3d): ParticleEmitter3DBuilder;
  pivotBind(expr: string): ParticleEmitter3DBuilder;
  position(value: QmlVector3d): ParticleEmitter3DBuilder;
  positionBind(expr: string): ParticleEmitter3DBuilder;
  reversed(value: boolean): ParticleEmitter3DBuilder;
  reversedBind(expr: string): ParticleEmitter3DBuilder;
  rotation(value: QmlQuaternion): ParticleEmitter3DBuilder;
  rotationBind(expr: string): ParticleEmitter3DBuilder;
  scale(value: QmlVector3d): ParticleEmitter3DBuilder;
  scaleBind(expr: string): ParticleEmitter3DBuilder;
  shape(value: QmlValue): ParticleEmitter3DBuilder;
  shapeBind(expr: string): ParticleEmitter3DBuilder;
  state(value: string): ParticleEmitter3DBuilder;
  stateBind(expr: string): ParticleEmitter3DBuilder;
  staticFlags(value: number): ParticleEmitter3DBuilder;
  staticFlagsBind(expr: string): ParticleEmitter3DBuilder;
  system(value: ParticleSystem3DBuilder): ParticleEmitter3DBuilder;
  systemBind(expr: string): ParticleEmitter3DBuilder;
  velocity(value: QmlValue): ParticleEmitter3DBuilder;
  velocityBind(expr: string): ParticleEmitter3DBuilder;
  visible(value: boolean): ParticleEmitter3DBuilder;
  visibleBind(expr: string): ParticleEmitter3DBuilder;
  x(value: number): ParticleEmitter3DBuilder;
  xBind(expr: string): ParticleEmitter3DBuilder;
  y(value: number): ParticleEmitter3DBuilder;
  yBind(expr: string): ParticleEmitter3DBuilder;
  z(value: number): ParticleEmitter3DBuilder;
  zBind(expr: string): ParticleEmitter3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onDepthBiasChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onEmitModeChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onEmitRateChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onLifeSpanChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onLifeSpanVariationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleEndScaleChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleEndScaleVariationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleRotationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleRotationVariationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleRotationVariationVelocityChanged(
    handler: DslSignalHandlerValue,
  ): ParticleEmitter3DBuilder;
  onParticleRotationVelocityChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleScaleChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onParticleScaleVariationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onReversedChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onRightChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onShapeChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onUpChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onVelocityChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onXChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onYChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
  onZChanged(handler: DslSignalHandlerValue): ParticleEmitter3DBuilder;
}

const PARTICLEEMITTER3D_META: TypeMetadata = {
  typeName: 'ParticleEmitter3D',
  properties: [
    { name: 'depthBias', hasValue: true, hasBinding: true },
    { name: 'emitMode', hasValue: true, hasBinding: true },
    { name: 'emitRate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
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

export function ParticleEmitter3D(): ParticleEmitter3DBuilder {
  return createFluentBuilder(
    'ParticleEmitter3D',
    PARTICLEEMITTER3D_META,
  ) as unknown as ParticleEmitter3DBuilder;
}

export namespace ParticleEmitter3D {
  export namespace EmitMode {
    export const Default = createEnumToken('ParticleEmitter3D', 'EmitMode', 'Default');
    export const SurfaceNormal = createEnumToken('ParticleEmitter3D', 'EmitMode', 'SurfaceNormal');
    export const SurfaceReflected = createEnumToken(
      'ParticleEmitter3D',
      'EmitMode',
      'SurfaceReflected',
    );
  }
  export namespace StaticFlags {
    export const None = createEnumToken('ParticleEmitter3D', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('ParticleEmitter3D', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken(
      'ParticleEmitter3D',
      'TransformSpace',
      'ParentSpace',
    );
    export const SceneSpace = createEnumToken('ParticleEmitter3D', 'TransformSpace', 'SceneSpace');
  }
}
