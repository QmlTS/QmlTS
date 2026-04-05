// AUTO-GENERATED — DO NOT EDIT
// Type: Turbulence
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ParticleSystemBuilder } from './ParticleSystem.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface TurbulenceBuilder {
  id(id: string): TurbulenceBuilder;
  child(obj: QmlObjectBuilder): TurbulenceBuilder;

  activeFocusOnTab(value: boolean): TurbulenceBuilder;
  activeFocusOnTabBind(expr: string): TurbulenceBuilder;
  antialiasing(value: boolean): TurbulenceBuilder;
  antialiasingBind(expr: string): TurbulenceBuilder;
  baselineOffset(value: number): TurbulenceBuilder;
  baselineOffsetBind(expr: string): TurbulenceBuilder;
  clip(value: boolean): TurbulenceBuilder;
  clipBind(expr: string): TurbulenceBuilder;
  containmentMask(value: QtObjectBuilder): TurbulenceBuilder;
  containmentMaskBind(expr: string): TurbulenceBuilder;
  enabled(value: boolean): TurbulenceBuilder;
  enabledBind(expr: string): TurbulenceBuilder;
  focus(value: boolean): TurbulenceBuilder;
  focusBind(expr: string): TurbulenceBuilder;
  focusPolicy(value: QmlEnumToken): TurbulenceBuilder;
  focusPolicyBind(expr: string): TurbulenceBuilder;
  groups(value: string[]): TurbulenceBuilder;
  groupsBind(expr: string): TurbulenceBuilder;
  height(value: number): TurbulenceBuilder;
  heightBind(expr: string): TurbulenceBuilder;
  implicitHeight(value: number): TurbulenceBuilder;
  implicitHeightBind(expr: string): TurbulenceBuilder;
  implicitWidth(value: number): TurbulenceBuilder;
  implicitWidthBind(expr: string): TurbulenceBuilder;
  noiseSource(value: QmlUrl): TurbulenceBuilder;
  noiseSourceBind(expr: string): TurbulenceBuilder;
  objectName(value: string): TurbulenceBuilder;
  objectNameBind(expr: string): TurbulenceBuilder;
  once(value: boolean): TurbulenceBuilder;
  onceBind(expr: string): TurbulenceBuilder;
  opacity(value: number): TurbulenceBuilder;
  opacityBind(expr: string): TurbulenceBuilder;
  palette(value: PaletteBuilder): TurbulenceBuilder;
  paletteBind(expr: string): TurbulenceBuilder;
  parent(value: ItemBuilder): TurbulenceBuilder;
  parentBind(expr: string): TurbulenceBuilder;
  rotation(value: number): TurbulenceBuilder;
  rotationBind(expr: string): TurbulenceBuilder;
  scale(value: number): TurbulenceBuilder;
  scaleBind(expr: string): TurbulenceBuilder;
  shape(value: QmlValue): TurbulenceBuilder;
  shapeBind(expr: string): TurbulenceBuilder;
  smooth(value: boolean): TurbulenceBuilder;
  smoothBind(expr: string): TurbulenceBuilder;
  state(value: string): TurbulenceBuilder;
  stateBind(expr: string): TurbulenceBuilder;
  strength(value: number): TurbulenceBuilder;
  strengthBind(expr: string): TurbulenceBuilder;
  system(value: ParticleSystemBuilder): TurbulenceBuilder;
  systemBind(expr: string): TurbulenceBuilder;
  transformOrigin(value: QmlEnumToken): TurbulenceBuilder;
  transformOriginBind(expr: string): TurbulenceBuilder;
  visible(value: boolean): TurbulenceBuilder;
  visibleBind(expr: string): TurbulenceBuilder;
  whenCollidingWith(value: string[]): TurbulenceBuilder;
  whenCollidingWithBind(expr: string): TurbulenceBuilder;
  width(value: number): TurbulenceBuilder;
  widthBind(expr: string): TurbulenceBuilder;
  x(value: number): TurbulenceBuilder;
  xBind(expr: string): TurbulenceBuilder;
  y(value: number): TurbulenceBuilder;
  yBind(expr: string): TurbulenceBuilder;
  z(value: number): TurbulenceBuilder;
  zBind(expr: string): TurbulenceBuilder;
  onActiveFocusChanged(body: string): TurbulenceBuilder;
  onActiveFocusOnTabChanged(body: string): TurbulenceBuilder;
  onAffected(body: string): TurbulenceBuilder;
  onAntialiasingChanged(body: string): TurbulenceBuilder;
  onBaselineOffsetChanged(body: string): TurbulenceBuilder;
  onChildrenChanged(body: string): TurbulenceBuilder;
  onChildrenRectChanged(body: string): TurbulenceBuilder;
  onClipChanged(body: string): TurbulenceBuilder;
  onContainmentMaskChanged(body: string): TurbulenceBuilder;
  onEnabledChanged(body: string): TurbulenceBuilder;
  onFocusChanged(body: string): TurbulenceBuilder;
  onFocusPolicyChanged(body: string): TurbulenceBuilder;
  onGroupsChanged(body: string): TurbulenceBuilder;
  onHeightChanged(body: string): TurbulenceBuilder;
  onImplicitHeightChanged(body: string): TurbulenceBuilder;
  onImplicitWidthChanged(body: string): TurbulenceBuilder;
  onNoiseSourceChanged(body: string): TurbulenceBuilder;
  onObjectNameChanged(body: string): TurbulenceBuilder;
  onOnceChanged(body: string): TurbulenceBuilder;
  onOpacityChanged(body: string): TurbulenceBuilder;
  onPaletteChanged(body: string): TurbulenceBuilder;
  onPaletteCreated(body: string): TurbulenceBuilder;
  onParentChanged(body: string): TurbulenceBuilder;
  onRotationChanged(body: string): TurbulenceBuilder;
  onScaleChanged(body: string): TurbulenceBuilder;
  onShapeChanged(body: string): TurbulenceBuilder;
  onSmoothChanged(body: string): TurbulenceBuilder;
  onStateChanged(body: string): TurbulenceBuilder;
  onStrengthChanged(body: string): TurbulenceBuilder;
  onSystemChanged(body: string): TurbulenceBuilder;
  onTransformOriginChanged(body: string): TurbulenceBuilder;
  onVisibleChanged(body: string): TurbulenceBuilder;
  onVisibleChildrenChanged(body: string): TurbulenceBuilder;
  onWhenCollidingWithChanged(body: string): TurbulenceBuilder;
  onWidthChanged(body: string): TurbulenceBuilder;
  onWindowChanged(body: string): TurbulenceBuilder;
  onXChanged(body: string): TurbulenceBuilder;
  onYChanged(body: string): TurbulenceBuilder;
  onZChanged(body: string): TurbulenceBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TurbulenceBuilder;
  layer(setup: (b: LayerBuilder) => void): TurbulenceBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): TurbulenceBuilder;
}

const TURBULENCE_META: TypeMetadata = {
  typeName: 'Turbulence',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'groups', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'noiseSource', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'once', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'strength', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'whenCollidingWith', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAffected', paramCount: 2 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGroupsChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onNoiseSourceChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOnceChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShapeChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStrengthChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWhenCollidingWithChanged', paramCount: 1 },
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function Turbulence(): TurbulenceBuilder {
  return createFluentBuilder('Turbulence', TURBULENCE_META) as unknown as TurbulenceBuilder;
}

export namespace Turbulence {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Turbulence', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Turbulence', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Turbulence', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Turbulence', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Turbulence', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Turbulence', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Turbulence', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Turbulence', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Turbulence', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Turbulence', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Turbulence', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Turbulence', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Turbulence', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Turbulence', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Turbulence', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Turbulence', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Turbulence', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Turbulence', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Turbulence', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Turbulence', 'TransformOrigin', 'BottomRight');
  }
}
