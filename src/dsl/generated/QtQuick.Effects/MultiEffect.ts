// AUTO-GENERATED — DO NOT EDIT
// Type: MultiEffect
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlRect, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface MultiEffectBuilder {
  id(id: string): MultiEffectBuilder;
  child(obj: QmlObjectBuilder): MultiEffectBuilder;

  activeFocusOnTab(value: boolean): MultiEffectBuilder;
  activeFocusOnTabBind(expr: string): MultiEffectBuilder;
  antialiasing(value: boolean): MultiEffectBuilder;
  antialiasingBind(expr: string): MultiEffectBuilder;
  autoPaddingEnabled(value: boolean): MultiEffectBuilder;
  autoPaddingEnabledBind(expr: string): MultiEffectBuilder;
  baselineOffset(value: number): MultiEffectBuilder;
  baselineOffsetBind(expr: string): MultiEffectBuilder;
  blur(value: number): MultiEffectBuilder;
  blurBind(expr: string): MultiEffectBuilder;
  blurEnabled(value: boolean): MultiEffectBuilder;
  blurEnabledBind(expr: string): MultiEffectBuilder;
  blurMax(value: number): MultiEffectBuilder;
  blurMaxBind(expr: string): MultiEffectBuilder;
  blurMultiplier(value: number): MultiEffectBuilder;
  blurMultiplierBind(expr: string): MultiEffectBuilder;
  brightness(value: number): MultiEffectBuilder;
  brightnessBind(expr: string): MultiEffectBuilder;
  clip(value: boolean): MultiEffectBuilder;
  clipBind(expr: string): MultiEffectBuilder;
  colorization(value: number): MultiEffectBuilder;
  colorizationBind(expr: string): MultiEffectBuilder;
  colorizationColor(value: QmlColor): MultiEffectBuilder;
  colorizationColorBind(expr: string): MultiEffectBuilder;
  containmentMask(value: QtObjectBuilder): MultiEffectBuilder;
  containmentMaskBind(expr: string): MultiEffectBuilder;
  contrast(value: number): MultiEffectBuilder;
  contrastBind(expr: string): MultiEffectBuilder;
  enabled(value: boolean): MultiEffectBuilder;
  enabledBind(expr: string): MultiEffectBuilder;
  focus(value: boolean): MultiEffectBuilder;
  focusBind(expr: string): MultiEffectBuilder;
  focusPolicy(value: QmlEnumToken): MultiEffectBuilder;
  focusPolicyBind(expr: string): MultiEffectBuilder;
  height(value: number): MultiEffectBuilder;
  heightBind(expr: string): MultiEffectBuilder;
  implicitHeight(value: number): MultiEffectBuilder;
  implicitHeightBind(expr: string): MultiEffectBuilder;
  implicitWidth(value: number): MultiEffectBuilder;
  implicitWidthBind(expr: string): MultiEffectBuilder;
  maskEnabled(value: boolean): MultiEffectBuilder;
  maskEnabledBind(expr: string): MultiEffectBuilder;
  maskInverted(value: boolean): MultiEffectBuilder;
  maskInvertedBind(expr: string): MultiEffectBuilder;
  maskSource(value: ItemBuilder): MultiEffectBuilder;
  maskSourceBind(expr: string): MultiEffectBuilder;
  maskSpreadAtMax(value: number): MultiEffectBuilder;
  maskSpreadAtMaxBind(expr: string): MultiEffectBuilder;
  maskSpreadAtMin(value: number): MultiEffectBuilder;
  maskSpreadAtMinBind(expr: string): MultiEffectBuilder;
  maskThresholdMax(value: number): MultiEffectBuilder;
  maskThresholdMaxBind(expr: string): MultiEffectBuilder;
  maskThresholdMin(value: number): MultiEffectBuilder;
  maskThresholdMinBind(expr: string): MultiEffectBuilder;
  objectName(value: string): MultiEffectBuilder;
  objectNameBind(expr: string): MultiEffectBuilder;
  opacity(value: number): MultiEffectBuilder;
  opacityBind(expr: string): MultiEffectBuilder;
  paddingRect(value: QmlRect): MultiEffectBuilder;
  paddingRectBind(expr: string): MultiEffectBuilder;
  palette(value: PaletteBuilder): MultiEffectBuilder;
  paletteBind(expr: string): MultiEffectBuilder;
  parent(value: ItemBuilder): MultiEffectBuilder;
  parentBind(expr: string): MultiEffectBuilder;
  rotation(value: number): MultiEffectBuilder;
  rotationBind(expr: string): MultiEffectBuilder;
  saturation(value: number): MultiEffectBuilder;
  saturationBind(expr: string): MultiEffectBuilder;
  scale(value: number): MultiEffectBuilder;
  scaleBind(expr: string): MultiEffectBuilder;
  shadowBlur(value: number): MultiEffectBuilder;
  shadowBlurBind(expr: string): MultiEffectBuilder;
  shadowColor(value: QmlColor): MultiEffectBuilder;
  shadowColorBind(expr: string): MultiEffectBuilder;
  shadowEnabled(value: boolean): MultiEffectBuilder;
  shadowEnabledBind(expr: string): MultiEffectBuilder;
  shadowHorizontalOffset(value: number): MultiEffectBuilder;
  shadowHorizontalOffsetBind(expr: string): MultiEffectBuilder;
  shadowOpacity(value: number): MultiEffectBuilder;
  shadowOpacityBind(expr: string): MultiEffectBuilder;
  shadowScale(value: number): MultiEffectBuilder;
  shadowScaleBind(expr: string): MultiEffectBuilder;
  shadowVerticalOffset(value: number): MultiEffectBuilder;
  shadowVerticalOffsetBind(expr: string): MultiEffectBuilder;
  smooth(value: boolean): MultiEffectBuilder;
  smoothBind(expr: string): MultiEffectBuilder;
  source(value: ItemBuilder): MultiEffectBuilder;
  sourceBind(expr: string): MultiEffectBuilder;
  state(value: string): MultiEffectBuilder;
  stateBind(expr: string): MultiEffectBuilder;
  transformOrigin(value: QmlEnumToken): MultiEffectBuilder;
  transformOriginBind(expr: string): MultiEffectBuilder;
  visible(value: boolean): MultiEffectBuilder;
  visibleBind(expr: string): MultiEffectBuilder;
  width(value: number): MultiEffectBuilder;
  widthBind(expr: string): MultiEffectBuilder;
  x(value: number): MultiEffectBuilder;
  xBind(expr: string): MultiEffectBuilder;
  y(value: number): MultiEffectBuilder;
  yBind(expr: string): MultiEffectBuilder;
  z(value: number): MultiEffectBuilder;
  zBind(expr: string): MultiEffectBuilder;
  onActiveFocusChanged(body: string): MultiEffectBuilder;
  onActiveFocusOnTabChanged(body: string): MultiEffectBuilder;
  onAntialiasingChanged(body: string): MultiEffectBuilder;
  onAutoPaddingEnabledChanged(body: string): MultiEffectBuilder;
  onBaselineOffsetChanged(body: string): MultiEffectBuilder;
  onBlurChanged(body: string): MultiEffectBuilder;
  onBlurEnabledChanged(body: string): MultiEffectBuilder;
  onBlurMaxChanged(body: string): MultiEffectBuilder;
  onBlurMultiplierChanged(body: string): MultiEffectBuilder;
  onBrightnessChanged(body: string): MultiEffectBuilder;
  onChildrenChanged(body: string): MultiEffectBuilder;
  onChildrenRectChanged(body: string): MultiEffectBuilder;
  onClipChanged(body: string): MultiEffectBuilder;
  onColorizationChanged(body: string): MultiEffectBuilder;
  onColorizationColorChanged(body: string): MultiEffectBuilder;
  onContainmentMaskChanged(body: string): MultiEffectBuilder;
  onContrastChanged(body: string): MultiEffectBuilder;
  onEnabledChanged(body: string): MultiEffectBuilder;
  onFocusChanged(body: string): MultiEffectBuilder;
  onFocusPolicyChanged(body: string): MultiEffectBuilder;
  onFragmentShaderChanged(body: string): MultiEffectBuilder;
  onHasProxySourceChanged(body: string): MultiEffectBuilder;
  onHeightChanged(body: string): MultiEffectBuilder;
  onImplicitHeightChanged(body: string): MultiEffectBuilder;
  onImplicitWidthChanged(body: string): MultiEffectBuilder;
  onItemRectChanged(body: string): MultiEffectBuilder;
  onItemSizeChanged(body: string): MultiEffectBuilder;
  onMaskEnabledChanged(body: string): MultiEffectBuilder;
  onMaskInvertedChanged(body: string): MultiEffectBuilder;
  onMaskSourceChanged(body: string): MultiEffectBuilder;
  onMaskSpreadAtMaxChanged(body: string): MultiEffectBuilder;
  onMaskSpreadAtMinChanged(body: string): MultiEffectBuilder;
  onMaskThresholdMaxChanged(body: string): MultiEffectBuilder;
  onMaskThresholdMinChanged(body: string): MultiEffectBuilder;
  onObjectNameChanged(body: string): MultiEffectBuilder;
  onOpacityChanged(body: string): MultiEffectBuilder;
  onPaddingRectChanged(body: string): MultiEffectBuilder;
  onPaletteChanged(body: string): MultiEffectBuilder;
  onPaletteCreated(body: string): MultiEffectBuilder;
  onParentChanged(body: string): MultiEffectBuilder;
  onRotationChanged(body: string): MultiEffectBuilder;
  onSaturationChanged(body: string): MultiEffectBuilder;
  onScaleChanged(body: string): MultiEffectBuilder;
  onShaderChanged(body: string): MultiEffectBuilder;
  onShadowBlurChanged(body: string): MultiEffectBuilder;
  onShadowColorChanged(body: string): MultiEffectBuilder;
  onShadowEnabledChanged(body: string): MultiEffectBuilder;
  onShadowHorizontalOffsetChanged(body: string): MultiEffectBuilder;
  onShadowOpacityChanged(body: string): MultiEffectBuilder;
  onShadowScaleChanged(body: string): MultiEffectBuilder;
  onShadowVerticalOffsetChanged(body: string): MultiEffectBuilder;
  onSmoothChanged(body: string): MultiEffectBuilder;
  onSourceChanged(body: string): MultiEffectBuilder;
  onStateChanged(body: string): MultiEffectBuilder;
  onTransformOriginChanged(body: string): MultiEffectBuilder;
  onVertexShaderChanged(body: string): MultiEffectBuilder;
  onVisibleChanged(body: string): MultiEffectBuilder;
  onVisibleChildrenChanged(body: string): MultiEffectBuilder;
  onWidthChanged(body: string): MultiEffectBuilder;
  onWindowChanged(body: string): MultiEffectBuilder;
  onXChanged(body: string): MultiEffectBuilder;
  onYChanged(body: string): MultiEffectBuilder;
  onZChanged(body: string): MultiEffectBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MultiEffectBuilder;
  layer(setup: (b: LayerBuilder) => void): MultiEffectBuilder;
}

const MULTIEFFECT_META: TypeMetadata = {
  typeName: 'MultiEffect',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoPaddingEnabled', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'blur', hasValue: true, hasBinding: true },
    { name: 'blurEnabled', hasValue: true, hasBinding: true },
    { name: 'blurMax', hasValue: true, hasBinding: true },
    { name: 'blurMultiplier', hasValue: true, hasBinding: true },
    { name: 'brightness', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'colorization', hasValue: true, hasBinding: true },
    { name: 'colorizationColor', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contrast', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'maskEnabled', hasValue: true, hasBinding: true },
    { name: 'maskInverted', hasValue: true, hasBinding: true },
    { name: 'maskSource', hasValue: true, hasBinding: true },
    { name: 'maskSpreadAtMax', hasValue: true, hasBinding: true },
    { name: 'maskSpreadAtMin', hasValue: true, hasBinding: true },
    { name: 'maskThresholdMax', hasValue: true, hasBinding: true },
    { name: 'maskThresholdMin', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'paddingRect', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'saturation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shadowBlur', hasValue: true, hasBinding: true },
    { name: 'shadowColor', hasValue: true, hasBinding: true },
    { name: 'shadowEnabled', hasValue: true, hasBinding: true },
    { name: 'shadowHorizontalOffset', hasValue: true, hasBinding: true },
    { name: 'shadowOpacity', hasValue: true, hasBinding: true },
    { name: 'shadowScale', hasValue: true, hasBinding: true },
    { name: 'shadowVerticalOffset', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAutoPaddingEnabledChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBlurChanged', paramCount: 0 },
    { handlerName: 'onBlurEnabledChanged', paramCount: 0 },
    { handlerName: 'onBlurMaxChanged', paramCount: 0 },
    { handlerName: 'onBlurMultiplierChanged', paramCount: 0 },
    { handlerName: 'onBrightnessChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorizationChanged', paramCount: 0 },
    { handlerName: 'onColorizationColorChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContrastChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFragmentShaderChanged', paramCount: 0 },
    { handlerName: 'onHasProxySourceChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onItemRectChanged', paramCount: 0 },
    { handlerName: 'onItemSizeChanged', paramCount: 0 },
    { handlerName: 'onMaskEnabledChanged', paramCount: 0 },
    { handlerName: 'onMaskInvertedChanged', paramCount: 0 },
    { handlerName: 'onMaskSourceChanged', paramCount: 0 },
    { handlerName: 'onMaskSpreadAtMaxChanged', paramCount: 0 },
    { handlerName: 'onMaskSpreadAtMinChanged', paramCount: 0 },
    { handlerName: 'onMaskThresholdMaxChanged', paramCount: 0 },
    { handlerName: 'onMaskThresholdMinChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingRectChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onSaturationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShaderChanged', paramCount: 0 },
    { handlerName: 'onShadowBlurChanged', paramCount: 0 },
    { handlerName: 'onShadowColorChanged', paramCount: 0 },
    { handlerName: 'onShadowEnabledChanged', paramCount: 0 },
    { handlerName: 'onShadowHorizontalOffsetChanged', paramCount: 0 },
    { handlerName: 'onShadowOpacityChanged', paramCount: 0 },
    { handlerName: 'onShadowScaleChanged', paramCount: 0 },
    { handlerName: 'onShadowVerticalOffsetChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVertexShaderChanged', paramCount: 0 },
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
  ],
  defaultProperty: 'data',
};

export function MultiEffect(): MultiEffectBuilder {
  return createFluentBuilder('MultiEffect', MULTIEFFECT_META) as unknown as MultiEffectBuilder;
}

export namespace MultiEffect {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MultiEffect', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MultiEffect', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MultiEffect', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MultiEffect', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MultiEffect', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MultiEffect', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MultiEffect', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MultiEffect', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MultiEffect', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MultiEffect', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MultiEffect', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MultiEffect', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MultiEffect', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MultiEffect', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MultiEffect', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MultiEffect', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MultiEffect', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MultiEffect', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MultiEffect', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MultiEffect', 'TransformOrigin', 'BottomRight');
  }
}
