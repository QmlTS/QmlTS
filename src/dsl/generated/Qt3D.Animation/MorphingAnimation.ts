// AUTO-GENERATED — DO NOT EDIT
// Type: MorphingAnimation
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { GeometryRendererBuilder } from '../Qt3D.Render/GeometryRenderer.js';
export interface MorphingAnimationBuilder {
  id(id: string): MorphingAnimationBuilder;
  child(obj: QmlObjectBuilder): MorphingAnimationBuilder;

  animationName(value: string): MorphingAnimationBuilder;
  animationNameBind(expr: string): MorphingAnimationBuilder;
  easing(value: QmlValue): MorphingAnimationBuilder;
  easingBind(expr: string): MorphingAnimationBuilder;
  method(value: QmlEnumToken): MorphingAnimationBuilder;
  methodBind(expr: string): MorphingAnimationBuilder;
  objectName(value: string): MorphingAnimationBuilder;
  objectNameBind(expr: string): MorphingAnimationBuilder;
  position(value: number): MorphingAnimationBuilder;
  positionBind(expr: string): MorphingAnimationBuilder;
  target(value: GeometryRendererBuilder): MorphingAnimationBuilder;
  targetBind(expr: string): MorphingAnimationBuilder;
  targetName(value: string): MorphingAnimationBuilder;
  targetNameBind(expr: string): MorphingAnimationBuilder;
  targetPositions(value: number): MorphingAnimationBuilder;
  targetPositionsBind(expr: string): MorphingAnimationBuilder;
  onAnimationNameChanged(body: string): MorphingAnimationBuilder;
  onDurationChanged(body: string): MorphingAnimationBuilder;
  onEasingChanged(body: string): MorphingAnimationBuilder;
  onInterpolatorChanged(body: string): MorphingAnimationBuilder;
  onMethodChanged(body: string): MorphingAnimationBuilder;
  onObjectNameChanged(body: string): MorphingAnimationBuilder;
  onPositionChanged(body: string): MorphingAnimationBuilder;
  onTargetChanged(body: string): MorphingAnimationBuilder;
  onTargetNameChanged(body: string): MorphingAnimationBuilder;
  onTargetPositionsChanged(body: string): MorphingAnimationBuilder;
}

const MORPHINGANIMATION_META: TypeMetadata = {
  typeName: 'MorphingAnimation',
  properties: [
    { name: 'animationName', hasValue: true, hasBinding: true },
    { name: 'easing', hasValue: true, hasBinding: true },
    { name: 'method', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'targetName', hasValue: true, hasBinding: true },
    { name: 'targetPositions', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAnimationNameChanged', paramCount: 1 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEasingChanged', paramCount: 1 },
    { handlerName: 'onInterpolatorChanged', paramCount: 1 },
    { handlerName: 'onMethodChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 1 },
    { handlerName: 'onTargetNameChanged', paramCount: 1 },
    { handlerName: 'onTargetPositionsChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function MorphingAnimation(): MorphingAnimationBuilder {
  return createFluentBuilder('MorphingAnimation', MORPHINGANIMATION_META) as unknown as MorphingAnimationBuilder;
}

export namespace MorphingAnimation {
  export namespace AnimationType {
    export const KeyframeAnimation = createEnumToken('MorphingAnimation', 'AnimationType', 'KeyframeAnimation');
    export const MorphingAnimation = createEnumToken('MorphingAnimation', 'AnimationType', 'MorphingAnimation');
    export const VertexBlendAnimation = createEnumToken('MorphingAnimation', 'AnimationType', 'VertexBlendAnimation');
  }
  export namespace Method {
    export const Normalized = createEnumToken('MorphingAnimation', 'Method', 'Normalized');
    export const Relative = createEnumToken('MorphingAnimation', 'Method', 'Relative');
  }
}
