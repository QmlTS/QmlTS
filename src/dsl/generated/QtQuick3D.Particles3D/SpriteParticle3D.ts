// AUTO-GENERATED — DO NOT EDIT
// Type: SpriteParticle3D
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  QmlVector4d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { TextureBuilder } from '../QtQuick3D/Texture.js';
import type { SpriteSequence3DBuilder } from './SpriteSequence3D.js';
export interface SpriteParticle3DBuilder {
  id(id: string): SpriteParticle3DBuilder;
  child(obj: QmlObjectBuilder): SpriteParticle3DBuilder;

  alignMode(value: QmlEnumToken): SpriteParticle3DBuilder;
  alignModeBind(expr: string): SpriteParticle3DBuilder;
  alignTargetPosition(value: QmlVector3d): SpriteParticle3DBuilder;
  alignTargetPositionBind(expr: string): SpriteParticle3DBuilder;
  billboard(value: boolean): SpriteParticle3DBuilder;
  billboardBind(expr: string): SpriteParticle3DBuilder;
  blendMode(value: QmlEnumToken): SpriteParticle3DBuilder;
  blendModeBind(expr: string): SpriteParticle3DBuilder;
  castsReflections(value: boolean): SpriteParticle3DBuilder;
  castsReflectionsBind(expr: string): SpriteParticle3DBuilder;
  color(value: QmlColor): SpriteParticle3DBuilder;
  colorBind(expr: string): SpriteParticle3DBuilder;
  colorTable(value: TextureBuilder): SpriteParticle3DBuilder;
  colorTableBind(expr: string): SpriteParticle3DBuilder;
  colorVariation(value: QmlVector4d): SpriteParticle3DBuilder;
  colorVariationBind(expr: string): SpriteParticle3DBuilder;
  fadeInDuration(value: number): SpriteParticle3DBuilder;
  fadeInDurationBind(expr: string): SpriteParticle3DBuilder;
  fadeInEffect(value: QmlEnumToken): SpriteParticle3DBuilder;
  fadeInEffectBind(expr: string): SpriteParticle3DBuilder;
  fadeOutDuration(value: number): SpriteParticle3DBuilder;
  fadeOutDurationBind(expr: string): SpriteParticle3DBuilder;
  fadeOutEffect(value: QmlEnumToken): SpriteParticle3DBuilder;
  fadeOutEffectBind(expr: string): SpriteParticle3DBuilder;
  hasTransparency(value: boolean): SpriteParticle3DBuilder;
  hasTransparencyBind(expr: string): SpriteParticle3DBuilder;
  maxAmount(value: number): SpriteParticle3DBuilder;
  maxAmountBind(expr: string): SpriteParticle3DBuilder;
  objectName(value: string): SpriteParticle3DBuilder;
  objectNameBind(expr: string): SpriteParticle3DBuilder;
  offsetX(value: number): SpriteParticle3DBuilder;
  offsetXBind(expr: string): SpriteParticle3DBuilder;
  offsetY(value: number): SpriteParticle3DBuilder;
  offsetYBind(expr: string): SpriteParticle3DBuilder;
  parent(value: QmlValue): SpriteParticle3DBuilder;
  parentBind(expr: string): SpriteParticle3DBuilder;
  particleScale(value: number): SpriteParticle3DBuilder;
  particleScaleBind(expr: string): SpriteParticle3DBuilder;
  sortMode(value: QmlEnumToken): SpriteParticle3DBuilder;
  sortModeBind(expr: string): SpriteParticle3DBuilder;
  sprite(value: TextureBuilder): SpriteParticle3DBuilder;
  spriteBind(expr: string): SpriteParticle3DBuilder;
  spriteSequence(value: SpriteSequence3DBuilder): SpriteParticle3DBuilder;
  spriteSequenceBind(expr: string): SpriteParticle3DBuilder;
  state(value: string): SpriteParticle3DBuilder;
  stateBind(expr: string): SpriteParticle3DBuilder;
  unifiedColorVariation(value: boolean): SpriteParticle3DBuilder;
  unifiedColorVariationBind(expr: string): SpriteParticle3DBuilder;
  onAlignModeChanged(body: string): SpriteParticle3DBuilder;
  onAlignTargetPositionChanged(body: string): SpriteParticle3DBuilder;
  onBillboardChanged(body: string): SpriteParticle3DBuilder;
  onBlendModeChanged(body: string): SpriteParticle3DBuilder;
  onCastsReflectionsChanged(body: string): SpriteParticle3DBuilder;
  onChildrenChanged(body: string): SpriteParticle3DBuilder;
  onColorChanged(body: string): SpriteParticle3DBuilder;
  onColorTableChanged(body: string): SpriteParticle3DBuilder;
  onColorVariationChanged(body: string): SpriteParticle3DBuilder;
  onFadeInDurationChanged(body: string): SpriteParticle3DBuilder;
  onFadeInEffectChanged(body: string): SpriteParticle3DBuilder;
  onFadeOutDurationChanged(body: string): SpriteParticle3DBuilder;
  onFadeOutEffectChanged(body: string): SpriteParticle3DBuilder;
  onHasTransparencyChanged(body: string): SpriteParticle3DBuilder;
  onLightsChanged(body: string): SpriteParticle3DBuilder;
  onMaxAmountChanged(body: string): SpriteParticle3DBuilder;
  onObjectNameChanged(body: string): SpriteParticle3DBuilder;
  onOffsetXChanged(body: string): SpriteParticle3DBuilder;
  onOffsetYChanged(body: string): SpriteParticle3DBuilder;
  onParentChanged(body: string): SpriteParticle3DBuilder;
  onParticleScaleChanged(body: string): SpriteParticle3DBuilder;
  onSortModeChanged(body: string): SpriteParticle3DBuilder;
  onSpriteChanged(body: string): SpriteParticle3DBuilder;
  onSpriteSequenceChanged(body: string): SpriteParticle3DBuilder;
  onStateChanged(body: string): SpriteParticle3DBuilder;
  onSystemChanged(body: string): SpriteParticle3DBuilder;
  onUnifiedColorVariationChanged(body: string): SpriteParticle3DBuilder;
}

const SPRITEPARTICLE3D_META: TypeMetadata = {
  typeName: 'SpriteParticle3D',
  properties: [
    { name: 'alignMode', hasValue: true, hasBinding: true },
    { name: 'alignTargetPosition', hasValue: true, hasBinding: true },
    { name: 'billboard', hasValue: true, hasBinding: true },
    { name: 'blendMode', hasValue: true, hasBinding: true },
    { name: 'castsReflections', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'colorTable', hasValue: true, hasBinding: true },
    { name: 'colorVariation', hasValue: true, hasBinding: true },
    { name: 'fadeInDuration', hasValue: true, hasBinding: true },
    { name: 'fadeInEffect', hasValue: true, hasBinding: true },
    { name: 'fadeOutDuration', hasValue: true, hasBinding: true },
    { name: 'fadeOutEffect', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'maxAmount', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offsetX', hasValue: true, hasBinding: true },
    { name: 'offsetY', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'particleScale', hasValue: true, hasBinding: true },
    { name: 'sortMode', hasValue: true, hasBinding: true },
    { name: 'sprite', hasValue: true, hasBinding: true },
    { name: 'spriteSequence', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'unifiedColorVariation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlignModeChanged', paramCount: 0 },
    { handlerName: 'onAlignTargetPositionChanged', paramCount: 0 },
    { handlerName: 'onBillboardChanged', paramCount: 0 },
    { handlerName: 'onBlendModeChanged', paramCount: 0 },
    { handlerName: 'onCastsReflectionsChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onColorTableChanged', paramCount: 0 },
    { handlerName: 'onColorVariationChanged', paramCount: 0 },
    { handlerName: 'onFadeInDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeInEffectChanged', paramCount: 0 },
    { handlerName: 'onFadeOutDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeOutEffectChanged', paramCount: 0 },
    { handlerName: 'onHasTransparencyChanged', paramCount: 0 },
    { handlerName: 'onLightsChanged', paramCount: 0 },
    { handlerName: 'onMaxAmountChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOffsetXChanged', paramCount: 0 },
    { handlerName: 'onOffsetYChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onParticleScaleChanged', paramCount: 0 },
    { handlerName: 'onSortModeChanged', paramCount: 0 },
    { handlerName: 'onSpriteChanged', paramCount: 0 },
    { handlerName: 'onSpriteSequenceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onUnifiedColorVariationChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SpriteParticle3D(): SpriteParticle3DBuilder {
  return createFluentBuilder(
    'SpriteParticle3D',
    SPRITEPARTICLE3D_META,
  ) as unknown as SpriteParticle3DBuilder;
}

export namespace SpriteParticle3D {
  export namespace AlignMode {
    export const AlignNone = createEnumToken('SpriteParticle3D', 'AlignMode', 'AlignNone');
    export const AlignTowardsTarget = createEnumToken(
      'SpriteParticle3D',
      'AlignMode',
      'AlignTowardsTarget',
    );
    export const AlignTowardsStartVelocity = createEnumToken(
      'SpriteParticle3D',
      'AlignMode',
      'AlignTowardsStartVelocity',
    );
  }
  export namespace BlendMode {
    export const SourceOver = createEnumToken('SpriteParticle3D', 'BlendMode', 'SourceOver');
    export const Screen = createEnumToken('SpriteParticle3D', 'BlendMode', 'Screen');
    export const Multiply = createEnumToken('SpriteParticle3D', 'BlendMode', 'Multiply');
  }
  export namespace FadeType {
    export const FadeNone = createEnumToken('SpriteParticle3D', 'FadeType', 'FadeNone');
    export const FadeOpacity = createEnumToken('SpriteParticle3D', 'FadeType', 'FadeOpacity');
    export const FadeScale = createEnumToken('SpriteParticle3D', 'FadeType', 'FadeScale');
  }
  export namespace SortMode {
    export const SortNone = createEnumToken('SpriteParticle3D', 'SortMode', 'SortNone');
    export const SortNewest = createEnumToken('SpriteParticle3D', 'SortMode', 'SortNewest');
    export const SortOldest = createEnumToken('SpriteParticle3D', 'SortMode', 'SortOldest');
    export const SortDistance = createEnumToken('SpriteParticle3D', 'SortMode', 'SortDistance');
  }
}
