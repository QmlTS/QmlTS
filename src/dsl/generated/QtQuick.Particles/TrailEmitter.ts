// AUTO-GENERATED — DO NOT EDIT
// Type: TrailEmitter
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ParticleSystemBuilder } from './ParticleSystem.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface TrailEmitterBuilder {
  id(id: string): TrailEmitterBuilder;
  child(obj: QmlObjectBuilder): TrailEmitterBuilder;

  acceleration(value: QmlValue): TrailEmitterBuilder;
  accelerationBind(expr: string): TrailEmitterBuilder;
  activeFocusOnTab(value: boolean): TrailEmitterBuilder;
  activeFocusOnTabBind(expr: string): TrailEmitterBuilder;
  antialiasing(value: boolean): TrailEmitterBuilder;
  antialiasingBind(expr: string): TrailEmitterBuilder;
  baselineOffset(value: number): TrailEmitterBuilder;
  baselineOffsetBind(expr: string): TrailEmitterBuilder;
  clip(value: boolean): TrailEmitterBuilder;
  clipBind(expr: string): TrailEmitterBuilder;
  containmentMask(value: QtObjectBuilder): TrailEmitterBuilder;
  containmentMaskBind(expr: string): TrailEmitterBuilder;
  emitHeight(value: number): TrailEmitterBuilder;
  emitHeightBind(expr: string): TrailEmitterBuilder;
  emitRate(value: number): TrailEmitterBuilder;
  emitRateBind(expr: string): TrailEmitterBuilder;
  emitRatePerParticle(value: number): TrailEmitterBuilder;
  emitRatePerParticleBind(expr: string): TrailEmitterBuilder;
  emitShape(value: QmlValue): TrailEmitterBuilder;
  emitShapeBind(expr: string): TrailEmitterBuilder;
  emitWidth(value: number): TrailEmitterBuilder;
  emitWidthBind(expr: string): TrailEmitterBuilder;
  enabled(value: boolean): TrailEmitterBuilder;
  enabledBind(expr: string): TrailEmitterBuilder;
  endSize(value: number): TrailEmitterBuilder;
  endSizeBind(expr: string): TrailEmitterBuilder;
  focus(value: boolean): TrailEmitterBuilder;
  focusBind(expr: string): TrailEmitterBuilder;
  focusPolicy(value: QmlEnumToken): TrailEmitterBuilder;
  focusPolicyBind(expr: string): TrailEmitterBuilder;
  follow(value: string): TrailEmitterBuilder;
  followBind(expr: string): TrailEmitterBuilder;
  group(value: string): TrailEmitterBuilder;
  groupBind(expr: string): TrailEmitterBuilder;
  height(value: number): TrailEmitterBuilder;
  heightBind(expr: string): TrailEmitterBuilder;
  implicitHeight(value: number): TrailEmitterBuilder;
  implicitHeightBind(expr: string): TrailEmitterBuilder;
  implicitWidth(value: number): TrailEmitterBuilder;
  implicitWidthBind(expr: string): TrailEmitterBuilder;
  lifeSpan(value: number): TrailEmitterBuilder;
  lifeSpanBind(expr: string): TrailEmitterBuilder;
  lifeSpanVariation(value: number): TrailEmitterBuilder;
  lifeSpanVariationBind(expr: string): TrailEmitterBuilder;
  maximumEmitted(value: number): TrailEmitterBuilder;
  maximumEmittedBind(expr: string): TrailEmitterBuilder;
  objectName(value: string): TrailEmitterBuilder;
  objectNameBind(expr: string): TrailEmitterBuilder;
  opacity(value: number): TrailEmitterBuilder;
  opacityBind(expr: string): TrailEmitterBuilder;
  palette(value: PaletteBuilder): TrailEmitterBuilder;
  paletteBind(expr: string): TrailEmitterBuilder;
  parent(value: ItemBuilder): TrailEmitterBuilder;
  parentBind(expr: string): TrailEmitterBuilder;
  rotation(value: number): TrailEmitterBuilder;
  rotationBind(expr: string): TrailEmitterBuilder;
  scale(value: number): TrailEmitterBuilder;
  scaleBind(expr: string): TrailEmitterBuilder;
  shape(value: QmlValue): TrailEmitterBuilder;
  shapeBind(expr: string): TrailEmitterBuilder;
  size(value: number): TrailEmitterBuilder;
  sizeBind(expr: string): TrailEmitterBuilder;
  sizeVariation(value: number): TrailEmitterBuilder;
  sizeVariationBind(expr: string): TrailEmitterBuilder;
  smooth(value: boolean): TrailEmitterBuilder;
  smoothBind(expr: string): TrailEmitterBuilder;
  startTime(value: number): TrailEmitterBuilder;
  startTimeBind(expr: string): TrailEmitterBuilder;
  state(value: string): TrailEmitterBuilder;
  stateBind(expr: string): TrailEmitterBuilder;
  system(value: ParticleSystemBuilder): TrailEmitterBuilder;
  systemBind(expr: string): TrailEmitterBuilder;
  transformOrigin(value: QmlEnumToken): TrailEmitterBuilder;
  transformOriginBind(expr: string): TrailEmitterBuilder;
  velocity(value: QmlValue): TrailEmitterBuilder;
  velocityBind(expr: string): TrailEmitterBuilder;
  velocityFromMovement(value: number): TrailEmitterBuilder;
  velocityFromMovementBind(expr: string): TrailEmitterBuilder;
  visible(value: boolean): TrailEmitterBuilder;
  visibleBind(expr: string): TrailEmitterBuilder;
  width(value: number): TrailEmitterBuilder;
  widthBind(expr: string): TrailEmitterBuilder;
  x(value: number): TrailEmitterBuilder;
  xBind(expr: string): TrailEmitterBuilder;
  y(value: number): TrailEmitterBuilder;
  yBind(expr: string): TrailEmitterBuilder;
  z(value: number): TrailEmitterBuilder;
  zBind(expr: string): TrailEmitterBuilder;
  onAccelerationChanged(body: string): TrailEmitterBuilder;
  onActiveFocusChanged(body: string): TrailEmitterBuilder;
  onActiveFocusOnTabChanged(body: string): TrailEmitterBuilder;
  onAntialiasingChanged(body: string): TrailEmitterBuilder;
  onBaselineOffsetChanged(body: string): TrailEmitterBuilder;
  onChildrenChanged(body: string): TrailEmitterBuilder;
  onChildrenRectChanged(body: string): TrailEmitterBuilder;
  onClipChanged(body: string): TrailEmitterBuilder;
  onContainmentMaskChanged(body: string): TrailEmitterBuilder;
  onEmissionShapeChanged(body: string): TrailEmitterBuilder;
  onEmitFollowParticles(body: string): TrailEmitterBuilder;
  onEmitParticles(body: string): TrailEmitterBuilder;
  onEmitterXVariationChanged(body: string): TrailEmitterBuilder;
  onEmitterYVariationChanged(body: string): TrailEmitterBuilder;
  onEnabledChanged(body: string): TrailEmitterBuilder;
  onExtruderChanged(body: string): TrailEmitterBuilder;
  onFocusChanged(body: string): TrailEmitterBuilder;
  onFocusPolicyChanged(body: string): TrailEmitterBuilder;
  onFollowChanged(body: string): TrailEmitterBuilder;
  onGroupChanged(body: string): TrailEmitterBuilder;
  onHeightChanged(body: string): TrailEmitterBuilder;
  onImplicitHeightChanged(body: string): TrailEmitterBuilder;
  onImplicitWidthChanged(body: string): TrailEmitterBuilder;
  onMaximumEmittedChanged(body: string): TrailEmitterBuilder;
  onObjectNameChanged(body: string): TrailEmitterBuilder;
  onOpacityChanged(body: string): TrailEmitterBuilder;
  onPaletteChanged(body: string): TrailEmitterBuilder;
  onPaletteCreated(body: string): TrailEmitterBuilder;
  onParentChanged(body: string): TrailEmitterBuilder;
  onParticleCountChanged(body: string): TrailEmitterBuilder;
  onParticleDurationChanged(body: string): TrailEmitterBuilder;
  onParticleDurationVariationChanged(body: string): TrailEmitterBuilder;
  onParticleEndSizeChanged(body: string): TrailEmitterBuilder;
  onParticleSizeChanged(body: string): TrailEmitterBuilder;
  onParticleSizeVariationChanged(body: string): TrailEmitterBuilder;
  onParticlesPerParticlePerSecondChanged(body: string): TrailEmitterBuilder;
  onParticlesPerSecondChanged(body: string): TrailEmitterBuilder;
  onRotationChanged(body: string): TrailEmitterBuilder;
  onScaleChanged(body: string): TrailEmitterBuilder;
  onSmoothChanged(body: string): TrailEmitterBuilder;
  onStartTimeChanged(body: string): TrailEmitterBuilder;
  onStateChanged(body: string): TrailEmitterBuilder;
  onSystemChanged(body: string): TrailEmitterBuilder;
  onTransformOriginChanged(body: string): TrailEmitterBuilder;
  onVelocityChanged(body: string): TrailEmitterBuilder;
  onVelocityFromMovementChanged(body: string): TrailEmitterBuilder;
  onVisibleChanged(body: string): TrailEmitterBuilder;
  onVisibleChildrenChanged(body: string): TrailEmitterBuilder;
  onWidthChanged(body: string): TrailEmitterBuilder;
  onWindowChanged(body: string): TrailEmitterBuilder;
  onXChanged(body: string): TrailEmitterBuilder;
  onYChanged(body: string): TrailEmitterBuilder;
  onZChanged(body: string): TrailEmitterBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TrailEmitterBuilder;
  layer(setup: (b: LayerBuilder) => void): TrailEmitterBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): TrailEmitterBuilder;
}

const TRAILEMITTER_META: TypeMetadata = {
  typeName: 'TrailEmitter',
  properties: [
    { name: 'acceleration', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'emitHeight', hasValue: true, hasBinding: true },
    { name: 'emitRate', hasValue: true, hasBinding: true },
    { name: 'emitRatePerParticle', hasValue: true, hasBinding: true },
    { name: 'emitShape', hasValue: true, hasBinding: true },
    { name: 'emitWidth', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'endSize', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'follow', hasValue: true, hasBinding: true },
    { name: 'group', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'lifeSpan', hasValue: true, hasBinding: true },
    { name: 'lifeSpanVariation', hasValue: true, hasBinding: true },
    { name: 'maximumEmitted', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'size', hasValue: true, hasBinding: true },
    { name: 'sizeVariation', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'startTime', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'velocity', hasValue: true, hasBinding: true },
    { name: 'velocityFromMovement', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccelerationChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEmissionShapeChanged', paramCount: 1 },
    { handlerName: 'onEmitFollowParticles', paramCount: 2 },
    { handlerName: 'onEmitParticles', paramCount: 1 },
    { handlerName: 'onEmitterXVariationChanged', paramCount: 1 },
    { handlerName: 'onEmitterYVariationChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onExtruderChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFollowChanged', paramCount: 1 },
    { handlerName: 'onGroupChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onMaximumEmittedChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onParticleCountChanged', paramCount: 0 },
    { handlerName: 'onParticleDurationChanged', paramCount: 1 },
    { handlerName: 'onParticleDurationVariationChanged', paramCount: 1 },
    { handlerName: 'onParticleEndSizeChanged', paramCount: 1 },
    { handlerName: 'onParticleSizeChanged', paramCount: 1 },
    { handlerName: 'onParticleSizeVariationChanged', paramCount: 1 },
    { handlerName: 'onParticlesPerParticlePerSecondChanged', paramCount: 1 },
    { handlerName: 'onParticlesPerSecondChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStartTimeChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVelocityChanged', paramCount: 1 },
    { handlerName: 'onVelocityFromMovementChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'anchors',
      groupName: 'anchors',
      properties: [
        { name: 'alignWhenCentered', hasValue: true, hasBinding: true },
        { name: 'baseline', hasValue: true, hasBinding: true },
        { name: 'baselineOffset', hasValue: true, hasBinding: true },
        { name: 'bottom', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'centerIn', hasValue: true, hasBinding: true },
        { name: 'fill', hasValue: true, hasBinding: true },
        { name: 'horizontalCenter', hasValue: true, hasBinding: true },
        { name: 'horizontalCenterOffset', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'top', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'verticalCenter', hasValue: true, hasBinding: true },
        { name: 'verticalCenterOffset', hasValue: true, hasBinding: true },
      ],
    },
    {
      methodName: 'layer',
      groupName: 'layer',
      properties: [
        { name: 'effect', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'format', hasValue: true, hasBinding: true },
        { name: 'live', hasValue: true, hasBinding: true },
        { name: 'mipmap', hasValue: true, hasBinding: true },
        { name: 'samplerName', hasValue: true, hasBinding: true },
        { name: 'samples', hasValue: true, hasBinding: true },
        { name: 'smooth', hasValue: true, hasBinding: true },
        { name: 'sourceRect', hasValue: true, hasBinding: true },
        { name: 'textureMirroring', hasValue: true, hasBinding: true },
        { name: 'textureSize', hasValue: true, hasBinding: true },
        { name: 'wrapMode', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
    {
      methodName: 'itemParticle',
      attachedTypeName: 'ItemParticle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function TrailEmitter(): TrailEmitterBuilder {
  return createFluentBuilder('TrailEmitter', TRAILEMITTER_META) as unknown as TrailEmitterBuilder;
}

export namespace TrailEmitter {
  export namespace EmitSize {
    export const ParticleSize = createEnumToken('TrailEmitter', 'EmitSize', 'ParticleSize');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TrailEmitter',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TrailEmitter',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TrailEmitter', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TrailEmitter', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TrailEmitter', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TrailEmitter', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TrailEmitter',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TrailEmitter', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TrailEmitter',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Lifetime {
    export const InfiniteLife = createEnumToken('TrailEmitter', 'Lifetime', 'InfiniteLife');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TrailEmitter', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TrailEmitter', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TrailEmitter', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TrailEmitter', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TrailEmitter', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TrailEmitter', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TrailEmitter', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TrailEmitter', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TrailEmitter', 'TransformOrigin', 'BottomRight');
  }
}
