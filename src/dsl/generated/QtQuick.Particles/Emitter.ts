// AUTO-GENERATED — DO NOT EDIT
// Type: Emitter
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
export interface EmitterBuilder {
  id(id: string): EmitterBuilder;
  child(obj: QmlObjectBuilder): EmitterBuilder;

  acceleration(value: QmlValue): EmitterBuilder;
  accelerationBind(expr: string): EmitterBuilder;
  activeFocusOnTab(value: boolean): EmitterBuilder;
  activeFocusOnTabBind(expr: string): EmitterBuilder;
  antialiasing(value: boolean): EmitterBuilder;
  antialiasingBind(expr: string): EmitterBuilder;
  baselineOffset(value: number): EmitterBuilder;
  baselineOffsetBind(expr: string): EmitterBuilder;
  clip(value: boolean): EmitterBuilder;
  clipBind(expr: string): EmitterBuilder;
  containmentMask(value: QtObjectBuilder): EmitterBuilder;
  containmentMaskBind(expr: string): EmitterBuilder;
  emitRate(value: number): EmitterBuilder;
  emitRateBind(expr: string): EmitterBuilder;
  enabled(value: boolean): EmitterBuilder;
  enabledBind(expr: string): EmitterBuilder;
  endSize(value: number): EmitterBuilder;
  endSizeBind(expr: string): EmitterBuilder;
  focus(value: boolean): EmitterBuilder;
  focusBind(expr: string): EmitterBuilder;
  focusPolicy(value: QmlEnumToken): EmitterBuilder;
  focusPolicyBind(expr: string): EmitterBuilder;
  group(value: string): EmitterBuilder;
  groupBind(expr: string): EmitterBuilder;
  height(value: number): EmitterBuilder;
  heightBind(expr: string): EmitterBuilder;
  implicitHeight(value: number): EmitterBuilder;
  implicitHeightBind(expr: string): EmitterBuilder;
  implicitWidth(value: number): EmitterBuilder;
  implicitWidthBind(expr: string): EmitterBuilder;
  lifeSpan(value: number): EmitterBuilder;
  lifeSpanBind(expr: string): EmitterBuilder;
  lifeSpanVariation(value: number): EmitterBuilder;
  lifeSpanVariationBind(expr: string): EmitterBuilder;
  maximumEmitted(value: number): EmitterBuilder;
  maximumEmittedBind(expr: string): EmitterBuilder;
  objectName(value: string): EmitterBuilder;
  objectNameBind(expr: string): EmitterBuilder;
  opacity(value: number): EmitterBuilder;
  opacityBind(expr: string): EmitterBuilder;
  palette(value: PaletteBuilder): EmitterBuilder;
  paletteBind(expr: string): EmitterBuilder;
  parent(value: ItemBuilder): EmitterBuilder;
  parentBind(expr: string): EmitterBuilder;
  rotation(value: number): EmitterBuilder;
  rotationBind(expr: string): EmitterBuilder;
  scale(value: number): EmitterBuilder;
  scaleBind(expr: string): EmitterBuilder;
  shape(value: QmlValue): EmitterBuilder;
  shapeBind(expr: string): EmitterBuilder;
  size(value: number): EmitterBuilder;
  sizeBind(expr: string): EmitterBuilder;
  sizeVariation(value: number): EmitterBuilder;
  sizeVariationBind(expr: string): EmitterBuilder;
  smooth(value: boolean): EmitterBuilder;
  smoothBind(expr: string): EmitterBuilder;
  startTime(value: number): EmitterBuilder;
  startTimeBind(expr: string): EmitterBuilder;
  state(value: string): EmitterBuilder;
  stateBind(expr: string): EmitterBuilder;
  system(value: ParticleSystemBuilder): EmitterBuilder;
  systemBind(expr: string): EmitterBuilder;
  transformOrigin(value: QmlEnumToken): EmitterBuilder;
  transformOriginBind(expr: string): EmitterBuilder;
  velocity(value: QmlValue): EmitterBuilder;
  velocityBind(expr: string): EmitterBuilder;
  velocityFromMovement(value: number): EmitterBuilder;
  velocityFromMovementBind(expr: string): EmitterBuilder;
  visible(value: boolean): EmitterBuilder;
  visibleBind(expr: string): EmitterBuilder;
  width(value: number): EmitterBuilder;
  widthBind(expr: string): EmitterBuilder;
  x(value: number): EmitterBuilder;
  xBind(expr: string): EmitterBuilder;
  y(value: number): EmitterBuilder;
  yBind(expr: string): EmitterBuilder;
  z(value: number): EmitterBuilder;
  zBind(expr: string): EmitterBuilder;
  onAccelerationChanged(body: string): EmitterBuilder;
  onActiveFocusChanged(body: string): EmitterBuilder;
  onActiveFocusOnTabChanged(body: string): EmitterBuilder;
  onAntialiasingChanged(body: string): EmitterBuilder;
  onBaselineOffsetChanged(body: string): EmitterBuilder;
  onChildrenChanged(body: string): EmitterBuilder;
  onChildrenRectChanged(body: string): EmitterBuilder;
  onClipChanged(body: string): EmitterBuilder;
  onContainmentMaskChanged(body: string): EmitterBuilder;
  onEmitParticles(body: string): EmitterBuilder;
  onEnabledChanged(body: string): EmitterBuilder;
  onExtruderChanged(body: string): EmitterBuilder;
  onFocusChanged(body: string): EmitterBuilder;
  onFocusPolicyChanged(body: string): EmitterBuilder;
  onGroupChanged(body: string): EmitterBuilder;
  onHeightChanged(body: string): EmitterBuilder;
  onImplicitHeightChanged(body: string): EmitterBuilder;
  onImplicitWidthChanged(body: string): EmitterBuilder;
  onMaximumEmittedChanged(body: string): EmitterBuilder;
  onObjectNameChanged(body: string): EmitterBuilder;
  onOpacityChanged(body: string): EmitterBuilder;
  onPaletteChanged(body: string): EmitterBuilder;
  onPaletteCreated(body: string): EmitterBuilder;
  onParentChanged(body: string): EmitterBuilder;
  onParticleCountChanged(body: string): EmitterBuilder;
  onParticleDurationChanged(body: string): EmitterBuilder;
  onParticleDurationVariationChanged(body: string): EmitterBuilder;
  onParticleEndSizeChanged(body: string): EmitterBuilder;
  onParticleSizeChanged(body: string): EmitterBuilder;
  onParticleSizeVariationChanged(body: string): EmitterBuilder;
  onParticlesPerSecondChanged(body: string): EmitterBuilder;
  onRotationChanged(body: string): EmitterBuilder;
  onScaleChanged(body: string): EmitterBuilder;
  onSmoothChanged(body: string): EmitterBuilder;
  onStartTimeChanged(body: string): EmitterBuilder;
  onStateChanged(body: string): EmitterBuilder;
  onSystemChanged(body: string): EmitterBuilder;
  onTransformOriginChanged(body: string): EmitterBuilder;
  onVelocityChanged(body: string): EmitterBuilder;
  onVelocityFromMovementChanged(body: string): EmitterBuilder;
  onVisibleChanged(body: string): EmitterBuilder;
  onVisibleChildrenChanged(body: string): EmitterBuilder;
  onWidthChanged(body: string): EmitterBuilder;
  onWindowChanged(body: string): EmitterBuilder;
  onXChanged(body: string): EmitterBuilder;
  onYChanged(body: string): EmitterBuilder;
  onZChanged(body: string): EmitterBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): EmitterBuilder;
  layer(setup: (b: LayerBuilder) => void): EmitterBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): EmitterBuilder;
}

const EMITTER_META: TypeMetadata = {
  typeName: 'Emitter',
  properties: [
    { name: 'acceleration', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'emitRate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'endSize', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
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
    { handlerName: 'onEmitParticles', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onExtruderChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
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
  defaultProperty: 'data',
};

export function Emitter(): EmitterBuilder {
  return createFluentBuilder('Emitter', EMITTER_META) as unknown as EmitterBuilder;
}

export namespace Emitter {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Emitter',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Emitter',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Emitter', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Emitter', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Emitter', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Emitter', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Emitter', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Emitter', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Emitter',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Lifetime {
    export const InfiniteLife = createEnumToken('Emitter', 'Lifetime', 'InfiniteLife');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Emitter', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Emitter', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Emitter', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Emitter', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Emitter', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Emitter', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Emitter', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Emitter', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Emitter', 'TransformOrigin', 'BottomRight');
  }
}
