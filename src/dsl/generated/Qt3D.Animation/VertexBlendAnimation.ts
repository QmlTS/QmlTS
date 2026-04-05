// AUTO-GENERATED — DO NOT EDIT
// Type: VertexBlendAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GeometryRendererBuilder } from '../Qt3D.Render/GeometryRenderer.js';
export interface VertexBlendAnimationBuilder {
  id(id: string): VertexBlendAnimationBuilder;
  child(obj: QmlObjectBuilder): VertexBlendAnimationBuilder;

  animationName(value: string): VertexBlendAnimationBuilder;
  animationNameBind(expr: string): VertexBlendAnimationBuilder;
  objectName(value: string): VertexBlendAnimationBuilder;
  objectNameBind(expr: string): VertexBlendAnimationBuilder;
  position(value: number): VertexBlendAnimationBuilder;
  positionBind(expr: string): VertexBlendAnimationBuilder;
  target(value: GeometryRendererBuilder): VertexBlendAnimationBuilder;
  targetBind(expr: string): VertexBlendAnimationBuilder;
  targetName(value: string): VertexBlendAnimationBuilder;
  targetNameBind(expr: string): VertexBlendAnimationBuilder;
  targetPositions(value: number): VertexBlendAnimationBuilder;
  targetPositionsBind(expr: string): VertexBlendAnimationBuilder;
  onAnimationNameChanged(body: string): VertexBlendAnimationBuilder;
  onDurationChanged(body: string): VertexBlendAnimationBuilder;
  onInterpolatorChanged(body: string): VertexBlendAnimationBuilder;
  onObjectNameChanged(body: string): VertexBlendAnimationBuilder;
  onPositionChanged(body: string): VertexBlendAnimationBuilder;
  onTargetChanged(body: string): VertexBlendAnimationBuilder;
  onTargetNameChanged(body: string): VertexBlendAnimationBuilder;
  onTargetPositionsChanged(body: string): VertexBlendAnimationBuilder;
}

const VERTEXBLENDANIMATION_META: TypeMetadata = {
  typeName: 'VertexBlendAnimation',
  properties: [
    { name: 'animationName', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'targetName', hasValue: true, hasBinding: true },
    { name: 'targetPositions', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAnimationNameChanged', paramCount: 1 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onInterpolatorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 1 },
    { handlerName: 'onTargetNameChanged', paramCount: 1 },
    { handlerName: 'onTargetPositionsChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function VertexBlendAnimation(): VertexBlendAnimationBuilder {
  return createFluentBuilder(
    'VertexBlendAnimation',
    VERTEXBLENDANIMATION_META,
  ) as unknown as VertexBlendAnimationBuilder;
}

export namespace VertexBlendAnimation {
  export namespace AnimationType {
    export const KeyframeAnimation = createEnumToken(
      'VertexBlendAnimation',
      'AnimationType',
      'KeyframeAnimation',
    );
    export const MorphingAnimation = createEnumToken(
      'VertexBlendAnimation',
      'AnimationType',
      'MorphingAnimation',
    );
    export const VertexBlendAnimation = createEnumToken(
      'VertexBlendAnimation',
      'AnimationType',
      'VertexBlendAnimation',
    );
  }
}
