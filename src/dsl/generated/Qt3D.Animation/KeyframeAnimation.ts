// AUTO-GENERATED — DO NOT EDIT
// Type: KeyframeAnimation
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { TransformBuilder } from '../Qt3D.Core/Transform.js';
export interface KeyframeAnimationBuilder {
  id(id: string): KeyframeAnimationBuilder;
  child(obj: QmlObjectBuilder): KeyframeAnimationBuilder;
  children(...objs: QmlObjectBuilder[]): KeyframeAnimationBuilder;

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
  onAnimationNameChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onEasingChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onEndModeChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onFramePositionsChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onStartModeChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onTargetChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
  onTargetNameChanged(handler: DslSignalHandlerValue): KeyframeAnimationBuilder;
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
  grouped: [],
  attached: [],
};

export function KeyframeAnimation(): KeyframeAnimationBuilder {
  return createFluentBuilder(
    'KeyframeAnimation',
    KEYFRAMEANIMATION_META,
  ) as unknown as KeyframeAnimationBuilder;
}

export namespace KeyframeAnimation {
  export namespace AnimationType {
    export const KeyframeAnimation = createEnumToken(
      'KeyframeAnimation',
      'AnimationType',
      'KeyframeAnimation',
    );
    export const MorphingAnimation = createEnumToken(
      'KeyframeAnimation',
      'AnimationType',
      'MorphingAnimation',
    );
    export const VertexBlendAnimation = createEnumToken(
      'KeyframeAnimation',
      'AnimationType',
      'VertexBlendAnimation',
    );
  }
  export namespace RepeatMode {
    export const None = createEnumToken('KeyframeAnimation', 'RepeatMode', 'None');
    export const Constant = createEnumToken('KeyframeAnimation', 'RepeatMode', 'Constant');
    export const Repeat = createEnumToken('KeyframeAnimation', 'RepeatMode', 'Repeat');
  }
}
