// AUTO-GENERATED — DO NOT EDIT
// Type: KeyframeAnimation
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { TransformBuilder } from '../Qt3D.Core/Transform.js';
export interface KeyframeAnimationBuilder {
  id(id: string): KeyframeAnimationBuilder;
  child(obj: QmlObjectBuilder): KeyframeAnimationBuilder;

  animationName(value: string): KeyframeAnimationBuilder;
  animationNameBind(expr: string): KeyframeAnimationBuilder;
  easing(value: QmlValue): KeyframeAnimationBuilder;
  easingBind(expr: string): KeyframeAnimationBuilder;
  endMode(value: QmlEnumToken): KeyframeAnimationBuilder;
  endModeBind(expr: string): KeyframeAnimationBuilder;
  framePositions(value: number): KeyframeAnimationBuilder;
  framePositionsBind(expr: string): KeyframeAnimationBuilder;
  objectName(value: string): KeyframeAnimationBuilder;
  objectNameBind(expr: string): KeyframeAnimationBuilder;
  position(value: number): KeyframeAnimationBuilder;
  positionBind(expr: string): KeyframeAnimationBuilder;
  startMode(value: QmlEnumToken): KeyframeAnimationBuilder;
  startModeBind(expr: string): KeyframeAnimationBuilder;
  target(value: TransformBuilder): KeyframeAnimationBuilder;
  targetBind(expr: string): KeyframeAnimationBuilder;
  targetName(value: string): KeyframeAnimationBuilder;
  targetNameBind(expr: string): KeyframeAnimationBuilder;
  onAnimationNameChanged(body: string): KeyframeAnimationBuilder;
  onDurationChanged(body: string): KeyframeAnimationBuilder;
  onEasingChanged(body: string): KeyframeAnimationBuilder;
  onEndModeChanged(body: string): KeyframeAnimationBuilder;
  onFramePositionsChanged(body: string): KeyframeAnimationBuilder;
  onObjectNameChanged(body: string): KeyframeAnimationBuilder;
  onPositionChanged(body: string): KeyframeAnimationBuilder;
  onStartModeChanged(body: string): KeyframeAnimationBuilder;
  onTargetChanged(body: string): KeyframeAnimationBuilder;
  onTargetNameChanged(body: string): KeyframeAnimationBuilder;
}

const KEYFRAMEANIMATION_META: TypeMetadata = {
  typeName: 'KeyframeAnimation',
  properties: [
    { name: 'animationName', hasValue: true, hasBinding: true },
    { name: 'easing', hasValue: true, hasBinding: true },
    { name: 'endMode', hasValue: true, hasBinding: true },
    { name: 'framePositions', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'startMode', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'targetName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAnimationNameChanged', paramCount: 1 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEasingChanged', paramCount: 1 },
    { handlerName: 'onEndModeChanged', paramCount: 1 },
    { handlerName: 'onFramePositionsChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onStartModeChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 1 },
    { handlerName: 'onTargetNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function KeyframeAnimation(): KeyframeAnimationBuilder {
  return createFluentBuilder('KeyframeAnimation', KEYFRAMEANIMATION_META) as unknown as KeyframeAnimationBuilder;
}

export namespace KeyframeAnimation {
  export namespace AnimationType {
    export const KeyframeAnimation = createEnumToken('KeyframeAnimation', 'AnimationType', 'KeyframeAnimation');
    export const MorphingAnimation = createEnumToken('KeyframeAnimation', 'AnimationType', 'MorphingAnimation');
    export const VertexBlendAnimation = createEnumToken('KeyframeAnimation', 'AnimationType', 'VertexBlendAnimation');
  }
  export namespace RepeatMode {
    export const None = createEnumToken('KeyframeAnimation', 'RepeatMode', 'None');
    export const Constant = createEnumToken('KeyframeAnimation', 'RepeatMode', 'Constant');
    export const Repeat = createEnumToken('KeyframeAnimation', 'RepeatMode', 'Repeat');
  }
}
