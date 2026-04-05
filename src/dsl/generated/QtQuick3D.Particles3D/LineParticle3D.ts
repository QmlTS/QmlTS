// AUTO-GENERATED — DO NOT EDIT
// Type: LineParticle3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlValue, QmlVector3d, QmlVector4d, TypeMetadata } from '../../runtime/index.js';
import type { TextureBuilder } from '../QtQuick3D/Texture.js';
import type { SpriteSequence3DBuilder } from './SpriteSequence3D.js';
export interface LineParticle3DBuilder {
  id(id: string): LineParticle3DBuilder;
  child(obj: QmlObjectBuilder): LineParticle3DBuilder;

  alignMode(value: QmlEnumToken): LineParticle3DBuilder;
  alignModeBind(expr: string): LineParticle3DBuilder;
  alignTargetPosition(value: QmlVector3d): LineParticle3DBuilder;
  alignTargetPositionBind(expr: string): LineParticle3DBuilder;
  alphaFade(value: number): LineParticle3DBuilder;
  alphaFadeBind(expr: string): LineParticle3DBuilder;
  billboard(value: boolean): LineParticle3DBuilder;
  billboardBind(expr: string): LineParticle3DBuilder;
  blendMode(value: QmlEnumToken): LineParticle3DBuilder;
  blendModeBind(expr: string): LineParticle3DBuilder;
  castsReflections(value: boolean): LineParticle3DBuilder;
  castsReflectionsBind(expr: string): LineParticle3DBuilder;
  color(value: QmlColor): LineParticle3DBuilder;
  colorBind(expr: string): LineParticle3DBuilder;
  colorTable(value: TextureBuilder): LineParticle3DBuilder;
  colorTableBind(expr: string): LineParticle3DBuilder;
  colorVariation(value: QmlVector4d): LineParticle3DBuilder;
  colorVariationBind(expr: string): LineParticle3DBuilder;
  eolFadeOutDuration(value: number): LineParticle3DBuilder;
  eolFadeOutDurationBind(expr: string): LineParticle3DBuilder;
  fadeInDuration(value: number): LineParticle3DBuilder;
  fadeInDurationBind(expr: string): LineParticle3DBuilder;
  fadeInEffect(value: QmlEnumToken): LineParticle3DBuilder;
  fadeInEffectBind(expr: string): LineParticle3DBuilder;
  fadeOutDuration(value: number): LineParticle3DBuilder;
  fadeOutDurationBind(expr: string): LineParticle3DBuilder;
  fadeOutEffect(value: QmlEnumToken): LineParticle3DBuilder;
  fadeOutEffectBind(expr: string): LineParticle3DBuilder;
  hasTransparency(value: boolean): LineParticle3DBuilder;
  hasTransparencyBind(expr: string): LineParticle3DBuilder;
  length(value: number): LineParticle3DBuilder;
  lengthBind(expr: string): LineParticle3DBuilder;
  lengthDeltaMin(value: number): LineParticle3DBuilder;
  lengthDeltaMinBind(expr: string): LineParticle3DBuilder;
  lengthVariation(value: number): LineParticle3DBuilder;
  lengthVariationBind(expr: string): LineParticle3DBuilder;
  maxAmount(value: number): LineParticle3DBuilder;
  maxAmountBind(expr: string): LineParticle3DBuilder;
  objectName(value: string): LineParticle3DBuilder;
  objectNameBind(expr: string): LineParticle3DBuilder;
  offsetX(value: number): LineParticle3DBuilder;
  offsetXBind(expr: string): LineParticle3DBuilder;
  offsetY(value: number): LineParticle3DBuilder;
  offsetYBind(expr: string): LineParticle3DBuilder;
  parent(value: QmlValue): LineParticle3DBuilder;
  parentBind(expr: string): LineParticle3DBuilder;
  particleScale(value: number): LineParticle3DBuilder;
  particleScaleBind(expr: string): LineParticle3DBuilder;
  scaleMultiplier(value: number): LineParticle3DBuilder;
  scaleMultiplierBind(expr: string): LineParticle3DBuilder;
  segmentCount(value: number): LineParticle3DBuilder;
  segmentCountBind(expr: string): LineParticle3DBuilder;
  sortMode(value: QmlEnumToken): LineParticle3DBuilder;
  sortModeBind(expr: string): LineParticle3DBuilder;
  sprite(value: TextureBuilder): LineParticle3DBuilder;
  spriteBind(expr: string): LineParticle3DBuilder;
  spriteSequence(value: SpriteSequence3DBuilder): LineParticle3DBuilder;
  spriteSequenceBind(expr: string): LineParticle3DBuilder;
  state(value: string): LineParticle3DBuilder;
  stateBind(expr: string): LineParticle3DBuilder;
  texcoordMode(value: QmlEnumToken): LineParticle3DBuilder;
  texcoordModeBind(expr: string): LineParticle3DBuilder;
  texcoordMultiplier(value: number): LineParticle3DBuilder;
  texcoordMultiplierBind(expr: string): LineParticle3DBuilder;
  unifiedColorVariation(value: boolean): LineParticle3DBuilder;
  unifiedColorVariationBind(expr: string): LineParticle3DBuilder;
  onAlignModeChanged(body: string): LineParticle3DBuilder;
  onAlignTargetPositionChanged(body: string): LineParticle3DBuilder;
  onAlphaFadeChanged(body: string): LineParticle3DBuilder;
  onBillboardChanged(body: string): LineParticle3DBuilder;
  onBlendModeChanged(body: string): LineParticle3DBuilder;
  onCastsReflectionsChanged(body: string): LineParticle3DBuilder;
  onChildrenChanged(body: string): LineParticle3DBuilder;
  onColorChanged(body: string): LineParticle3DBuilder;
  onColorTableChanged(body: string): LineParticle3DBuilder;
  onColorVariationChanged(body: string): LineParticle3DBuilder;
  onEolFadeOutDurationChanged(body: string): LineParticle3DBuilder;
  onFadeInDurationChanged(body: string): LineParticle3DBuilder;
  onFadeInEffectChanged(body: string): LineParticle3DBuilder;
  onFadeOutDurationChanged(body: string): LineParticle3DBuilder;
  onFadeOutEffectChanged(body: string): LineParticle3DBuilder;
  onHasTransparencyChanged(body: string): LineParticle3DBuilder;
  onLengthChanged(body: string): LineParticle3DBuilder;
  onLengthDeltaMinChanged(body: string): LineParticle3DBuilder;
  onLengthVariationChanged(body: string): LineParticle3DBuilder;
  onLightsChanged(body: string): LineParticle3DBuilder;
  onMaxAmountChanged(body: string): LineParticle3DBuilder;
  onObjectNameChanged(body: string): LineParticle3DBuilder;
  onOffsetXChanged(body: string): LineParticle3DBuilder;
  onOffsetYChanged(body: string): LineParticle3DBuilder;
  onParentChanged(body: string): LineParticle3DBuilder;
  onParticleScaleChanged(body: string): LineParticle3DBuilder;
  onScaleMultiplierChanged(body: string): LineParticle3DBuilder;
  onSegmentCountChanged(body: string): LineParticle3DBuilder;
  onSortModeChanged(body: string): LineParticle3DBuilder;
  onSpriteChanged(body: string): LineParticle3DBuilder;
  onSpriteSequenceChanged(body: string): LineParticle3DBuilder;
  onStateChanged(body: string): LineParticle3DBuilder;
  onSystemChanged(body: string): LineParticle3DBuilder;
  onTexcoordModeChanged(body: string): LineParticle3DBuilder;
  onTexcoordMultiplierChanged(body: string): LineParticle3DBuilder;
  onUnifiedColorVariationChanged(body: string): LineParticle3DBuilder;
}

const LINEPARTICLE3D_META: TypeMetadata = {
  typeName: 'LineParticle3D',
  properties: [
    { name: 'alignMode', hasValue: true, hasBinding: true },
    { name: 'alignTargetPosition', hasValue: true, hasBinding: true },
    { name: 'alphaFade', hasValue: true, hasBinding: true },
    { name: 'billboard', hasValue: true, hasBinding: true },
    { name: 'blendMode', hasValue: true, hasBinding: true },
    { name: 'castsReflections', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'colorTable', hasValue: true, hasBinding: true },
    { name: 'colorVariation', hasValue: true, hasBinding: true },
    { name: 'eolFadeOutDuration', hasValue: true, hasBinding: true },
    { name: 'fadeInDuration', hasValue: true, hasBinding: true },
    { name: 'fadeInEffect', hasValue: true, hasBinding: true },
    { name: 'fadeOutDuration', hasValue: true, hasBinding: true },
    { name: 'fadeOutEffect', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'lengthDeltaMin', hasValue: true, hasBinding: true },
    { name: 'lengthVariation', hasValue: true, hasBinding: true },
    { name: 'maxAmount', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offsetX', hasValue: true, hasBinding: true },
    { name: 'offsetY', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'particleScale', hasValue: true, hasBinding: true },
    { name: 'scaleMultiplier', hasValue: true, hasBinding: true },
    { name: 'segmentCount', hasValue: true, hasBinding: true },
    { name: 'sortMode', hasValue: true, hasBinding: true },
    { name: 'sprite', hasValue: true, hasBinding: true },
    { name: 'spriteSequence', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'texcoordMode', hasValue: true, hasBinding: true },
    { name: 'texcoordMultiplier', hasValue: true, hasBinding: true },
    { name: 'unifiedColorVariation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlignModeChanged', paramCount: 0 },
    { handlerName: 'onAlignTargetPositionChanged', paramCount: 0 },
    { handlerName: 'onAlphaFadeChanged', paramCount: 0 },
    { handlerName: 'onBillboardChanged', paramCount: 0 },
    { handlerName: 'onBlendModeChanged', paramCount: 0 },
    { handlerName: 'onCastsReflectionsChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onColorTableChanged', paramCount: 0 },
    { handlerName: 'onColorVariationChanged', paramCount: 0 },
    { handlerName: 'onEolFadeOutDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeInDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeInEffectChanged', paramCount: 0 },
    { handlerName: 'onFadeOutDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeOutEffectChanged', paramCount: 0 },
    { handlerName: 'onHasTransparencyChanged', paramCount: 0 },
    { handlerName: 'onLengthChanged', paramCount: 0 },
    { handlerName: 'onLengthDeltaMinChanged', paramCount: 0 },
    { handlerName: 'onLengthVariationChanged', paramCount: 0 },
    { handlerName: 'onLightsChanged', paramCount: 0 },
    { handlerName: 'onMaxAmountChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOffsetXChanged', paramCount: 0 },
    { handlerName: 'onOffsetYChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onParticleScaleChanged', paramCount: 0 },
    { handlerName: 'onScaleMultiplierChanged', paramCount: 0 },
    { handlerName: 'onSegmentCountChanged', paramCount: 0 },
    { handlerName: 'onSortModeChanged', paramCount: 0 },
    { handlerName: 'onSpriteChanged', paramCount: 0 },
    { handlerName: 'onSpriteSequenceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onTexcoordModeChanged', paramCount: 0 },
    { handlerName: 'onTexcoordMultiplierChanged', paramCount: 0 },
    { handlerName: 'onUnifiedColorVariationChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function LineParticle3D(): LineParticle3DBuilder {
  return createFluentBuilder('LineParticle3D', LINEPARTICLE3D_META) as unknown as LineParticle3DBuilder;
}

export namespace LineParticle3D {
  export namespace AlignMode {
    export const AlignNone = createEnumToken('LineParticle3D', 'AlignMode', 'AlignNone');
    export const AlignTowardsTarget = createEnumToken('LineParticle3D', 'AlignMode', 'AlignTowardsTarget');
    export const AlignTowardsStartVelocity = createEnumToken('LineParticle3D', 'AlignMode', 'AlignTowardsStartVelocity');
  }
  export namespace BlendMode {
    export const SourceOver = createEnumToken('LineParticle3D', 'BlendMode', 'SourceOver');
    export const Screen = createEnumToken('LineParticle3D', 'BlendMode', 'Screen');
    export const Multiply = createEnumToken('LineParticle3D', 'BlendMode', 'Multiply');
  }
  export namespace FadeType {
    export const FadeNone = createEnumToken('LineParticle3D', 'FadeType', 'FadeNone');
    export const FadeOpacity = createEnumToken('LineParticle3D', 'FadeType', 'FadeOpacity');
    export const FadeScale = createEnumToken('LineParticle3D', 'FadeType', 'FadeScale');
  }
  export namespace SortMode {
    export const SortNone = createEnumToken('LineParticle3D', 'SortMode', 'SortNone');
    export const SortNewest = createEnumToken('LineParticle3D', 'SortMode', 'SortNewest');
    export const SortOldest = createEnumToken('LineParticle3D', 'SortMode', 'SortOldest');
    export const SortDistance = createEnumToken('LineParticle3D', 'SortMode', 'SortDistance');
  }
  export namespace TexcoordMode {
    export const Absolute = createEnumToken('LineParticle3D', 'TexcoordMode', 'Absolute');
    export const Relative = createEnumToken('LineParticle3D', 'TexcoordMode', 'Relative');
    export const Fill = createEnumToken('LineParticle3D', 'TexcoordMode', 'Fill');
  }
}
