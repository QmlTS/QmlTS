// AUTO-GENERATED — DO NOT EDIT
// Type: SpriteSequence3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SpriteSequence3DBuilder {
  id(id: string): SpriteSequence3DBuilder;
  child(obj: QmlObjectBuilder): SpriteSequence3DBuilder;
  children(...objs: QmlObjectBuilder[]): SpriteSequence3DBuilder;

  animationDirection(value: QmlEnumToken): SpriteSequence3DBuilder;
  animationDirectionBind(expr: string): SpriteSequence3DBuilder;
  duration(value: number): SpriteSequence3DBuilder;
  durationBind(expr: string): SpriteSequence3DBuilder;
  durationVariation(value: number): SpriteSequence3DBuilder;
  durationVariationBind(expr: string): SpriteSequence3DBuilder;
  frameCount(value: number): SpriteSequence3DBuilder;
  frameCountBind(expr: string): SpriteSequence3DBuilder;
  frameIndex(value: number): SpriteSequence3DBuilder;
  frameIndexBind(expr: string): SpriteSequence3DBuilder;
  interpolate(value: boolean): SpriteSequence3DBuilder;
  interpolateBind(expr: string): SpriteSequence3DBuilder;
  objectName(value: string): SpriteSequence3DBuilder;
  objectNameBind(expr: string): SpriteSequence3DBuilder;
  randomStart(value: boolean): SpriteSequence3DBuilder;
  randomStartBind(expr: string): SpriteSequence3DBuilder;
  onAnimationDirectionChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
  onDurationVariationChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
  onFrameCountChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
  onFrameIndexChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
  onInterpolateChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
  onRandomStartChanged(handler: DslSignalHandlerValue): SpriteSequence3DBuilder;
}

const SPRITESEQUENCE3D_META: TypeMetadata = {
  typeName: 'SpriteSequence3D',
  properties: [
    { name: 'animationDirection', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'durationVariation', hasValue: true, hasBinding: true },
    { name: 'frameCount', hasValue: true, hasBinding: true },
    { name: 'frameIndex', hasValue: true, hasBinding: true },
    { name: 'interpolate', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'randomStart', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAnimationDirectionChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 0 },
    { handlerName: 'onDurationVariationChanged', paramCount: 0 },
    { handlerName: 'onFrameCountChanged', paramCount: 0 },
    { handlerName: 'onFrameIndexChanged', paramCount: 0 },
    { handlerName: 'onInterpolateChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRandomStartChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SpriteSequence3D(): SpriteSequence3DBuilder {
  return createFluentBuilder(
    'SpriteSequence3D',
    SPRITESEQUENCE3D_META,
  ) as unknown as SpriteSequence3DBuilder;
}

export namespace SpriteSequence3D {
  export namespace AnimationDirection {
    export const Normal = createEnumToken('SpriteSequence3D', 'AnimationDirection', 'Normal');
    export const Reverse = createEnumToken('SpriteSequence3D', 'AnimationDirection', 'Reverse');
    export const Alternate = createEnumToken('SpriteSequence3D', 'AnimationDirection', 'Alternate');
    export const AlternateReverse = createEnumToken(
      'SpriteSequence3D',
      'AnimationDirection',
      'AlternateReverse',
    );
    export const SingleFrame = createEnumToken(
      'SpriteSequence3D',
      'AnimationDirection',
      'SingleFrame',
    );
  }
}
