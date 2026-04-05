// AUTO-GENERATED — DO NOT EDIT
// Type: MaterialTextContainer
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface MaterialTextContainerBuilder {
  id(id: string): MaterialTextContainerBuilder;
  child(obj: QmlObjectBuilder): MaterialTextContainerBuilder;

  activeFocusOnTab(value: boolean): MaterialTextContainerBuilder;
  activeFocusOnTabBind(expr: string): MaterialTextContainerBuilder;
  antialiasing(value: boolean): MaterialTextContainerBuilder;
  antialiasingBind(expr: string): MaterialTextContainerBuilder;
  baselineOffset(value: number): MaterialTextContainerBuilder;
  baselineOffsetBind(expr: string): MaterialTextContainerBuilder;
  clip(value: boolean): MaterialTextContainerBuilder;
  clipBind(expr: string): MaterialTextContainerBuilder;
  containmentMask(value: QtObjectBuilder): MaterialTextContainerBuilder;
  containmentMaskBind(expr: string): MaterialTextContainerBuilder;
  contentsScale(value: number): MaterialTextContainerBuilder;
  contentsScaleBind(expr: string): MaterialTextContainerBuilder;
  contentsSize(value: QmlSize): MaterialTextContainerBuilder;
  contentsSizeBind(expr: string): MaterialTextContainerBuilder;
  controlHasActiveFocus(value: boolean): MaterialTextContainerBuilder;
  controlHasActiveFocusBind(expr: string): MaterialTextContainerBuilder;
  controlHasText(value: boolean): MaterialTextContainerBuilder;
  controlHasTextBind(expr: string): MaterialTextContainerBuilder;
  enabled(value: boolean): MaterialTextContainerBuilder;
  enabledBind(expr: string): MaterialTextContainerBuilder;
  fillColor(value: QmlColor): MaterialTextContainerBuilder;
  fillColorBind(expr: string): MaterialTextContainerBuilder;
  filled(value: boolean): MaterialTextContainerBuilder;
  filledBind(expr: string): MaterialTextContainerBuilder;
  focus(value: boolean): MaterialTextContainerBuilder;
  focusBind(expr: string): MaterialTextContainerBuilder;
  focusAnimationProgress(value: number): MaterialTextContainerBuilder;
  focusAnimationProgressBind(expr: string): MaterialTextContainerBuilder;
  focusPolicy(value: QmlEnumToken): MaterialTextContainerBuilder;
  focusPolicyBind(expr: string): MaterialTextContainerBuilder;
  focusedOutlineColor(value: QmlColor): MaterialTextContainerBuilder;
  focusedOutlineColorBind(expr: string): MaterialTextContainerBuilder;
  height(value: number): MaterialTextContainerBuilder;
  heightBind(expr: string): MaterialTextContainerBuilder;
  horizontalPadding(value: number): MaterialTextContainerBuilder;
  horizontalPaddingBind(expr: string): MaterialTextContainerBuilder;
  implicitHeight(value: number): MaterialTextContainerBuilder;
  implicitHeightBind(expr: string): MaterialTextContainerBuilder;
  implicitWidth(value: number): MaterialTextContainerBuilder;
  implicitWidthBind(expr: string): MaterialTextContainerBuilder;
  objectName(value: string): MaterialTextContainerBuilder;
  objectNameBind(expr: string): MaterialTextContainerBuilder;
  opacity(value: number): MaterialTextContainerBuilder;
  opacityBind(expr: string): MaterialTextContainerBuilder;
  outlineColor(value: QmlColor): MaterialTextContainerBuilder;
  outlineColorBind(expr: string): MaterialTextContainerBuilder;
  palette(value: PaletteBuilder): MaterialTextContainerBuilder;
  paletteBind(expr: string): MaterialTextContainerBuilder;
  parent(value: ItemBuilder): MaterialTextContainerBuilder;
  parentBind(expr: string): MaterialTextContainerBuilder;
  placeholderHasText(value: boolean): MaterialTextContainerBuilder;
  placeholderHasTextBind(expr: string): MaterialTextContainerBuilder;
  placeholderTextHAlign(value: QmlEnumToken): MaterialTextContainerBuilder;
  placeholderTextHAlignBind(expr: string): MaterialTextContainerBuilder;
  placeholderTextWidth(value: number): MaterialTextContainerBuilder;
  placeholderTextWidthBind(expr: string): MaterialTextContainerBuilder;
  renderTarget(value: QmlEnumToken): MaterialTextContainerBuilder;
  renderTargetBind(expr: string): MaterialTextContainerBuilder;
  rotation(value: number): MaterialTextContainerBuilder;
  rotationBind(expr: string): MaterialTextContainerBuilder;
  scale(value: number): MaterialTextContainerBuilder;
  scaleBind(expr: string): MaterialTextContainerBuilder;
  smooth(value: boolean): MaterialTextContainerBuilder;
  smoothBind(expr: string): MaterialTextContainerBuilder;
  state(value: string): MaterialTextContainerBuilder;
  stateBind(expr: string): MaterialTextContainerBuilder;
  textureSize(value: QmlSize): MaterialTextContainerBuilder;
  textureSizeBind(expr: string): MaterialTextContainerBuilder;
  transformOrigin(value: QmlEnumToken): MaterialTextContainerBuilder;
  transformOriginBind(expr: string): MaterialTextContainerBuilder;
  visible(value: boolean): MaterialTextContainerBuilder;
  visibleBind(expr: string): MaterialTextContainerBuilder;
  width(value: number): MaterialTextContainerBuilder;
  widthBind(expr: string): MaterialTextContainerBuilder;
  x(value: number): MaterialTextContainerBuilder;
  xBind(expr: string): MaterialTextContainerBuilder;
  y(value: number): MaterialTextContainerBuilder;
  yBind(expr: string): MaterialTextContainerBuilder;
  z(value: number): MaterialTextContainerBuilder;
  zBind(expr: string): MaterialTextContainerBuilder;
  onActiveFocusChanged(body: string): MaterialTextContainerBuilder;
  onActiveFocusOnTabChanged(body: string): MaterialTextContainerBuilder;
  onAnimateChanged(body: string): MaterialTextContainerBuilder;
  onAntialiasingChanged(body: string): MaterialTextContainerBuilder;
  onBaselineOffsetChanged(body: string): MaterialTextContainerBuilder;
  onChildrenChanged(body: string): MaterialTextContainerBuilder;
  onChildrenRectChanged(body: string): MaterialTextContainerBuilder;
  onClipChanged(body: string): MaterialTextContainerBuilder;
  onContainmentMaskChanged(body: string): MaterialTextContainerBuilder;
  onContentsScaleChanged(body: string): MaterialTextContainerBuilder;
  onContentsSizeChanged(body: string): MaterialTextContainerBuilder;
  onControlHasActiveFocusChanged(body: string): MaterialTextContainerBuilder;
  onControlHasTextChanged(body: string): MaterialTextContainerBuilder;
  onEnabledChanged(body: string): MaterialTextContainerBuilder;
  onFillColorChanged(body: string): MaterialTextContainerBuilder;
  onFocusChanged(body: string): MaterialTextContainerBuilder;
  onFocusPolicyChanged(body: string): MaterialTextContainerBuilder;
  onHeightChanged(body: string): MaterialTextContainerBuilder;
  onHorizontalPaddingChanged(body: string): MaterialTextContainerBuilder;
  onImplicitHeightChanged(body: string): MaterialTextContainerBuilder;
  onImplicitWidthChanged(body: string): MaterialTextContainerBuilder;
  onObjectNameChanged(body: string): MaterialTextContainerBuilder;
  onOpacityChanged(body: string): MaterialTextContainerBuilder;
  onPaletteChanged(body: string): MaterialTextContainerBuilder;
  onPaletteCreated(body: string): MaterialTextContainerBuilder;
  onParentChanged(body: string): MaterialTextContainerBuilder;
  onPlaceholderHasTextChanged(body: string): MaterialTextContainerBuilder;
  onRenderTargetChanged(body: string): MaterialTextContainerBuilder;
  onRotationChanged(body: string): MaterialTextContainerBuilder;
  onScaleChanged(body: string): MaterialTextContainerBuilder;
  onSmoothChanged(body: string): MaterialTextContainerBuilder;
  onStateChanged(body: string): MaterialTextContainerBuilder;
  onTextureSizeChanged(body: string): MaterialTextContainerBuilder;
  onTransformOriginChanged(body: string): MaterialTextContainerBuilder;
  onVisibleChanged(body: string): MaterialTextContainerBuilder;
  onVisibleChildrenChanged(body: string): MaterialTextContainerBuilder;
  onWidthChanged(body: string): MaterialTextContainerBuilder;
  onWindowChanged(body: string): MaterialTextContainerBuilder;
  onXChanged(body: string): MaterialTextContainerBuilder;
  onYChanged(body: string): MaterialTextContainerBuilder;
  onZChanged(body: string): MaterialTextContainerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MaterialTextContainerBuilder;
  layer(setup: (b: LayerBuilder) => void): MaterialTextContainerBuilder;
}

const MATERIALTEXTCONTAINER_META: TypeMetadata = {
  typeName: 'MaterialTextContainer',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentsScale', hasValue: true, hasBinding: true },
    { name: 'contentsSize', hasValue: true, hasBinding: true },
    { name: 'controlHasActiveFocus', hasValue: true, hasBinding: true },
    { name: 'controlHasText', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillColor', hasValue: true, hasBinding: true },
    { name: 'filled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusAnimationProgress', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusedOutlineColor', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'outlineColor', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'placeholderHasText', hasValue: true, hasBinding: true },
    { name: 'placeholderTextHAlign', hasValue: true, hasBinding: true },
    { name: 'placeholderTextWidth', hasValue: true, hasBinding: true },
    { name: 'renderTarget', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textureSize', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAnimateChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentsScaleChanged', paramCount: 0 },
    { handlerName: 'onContentsSizeChanged', paramCount: 0 },
    { handlerName: 'onControlHasActiveFocusChanged', paramCount: 0 },
    { handlerName: 'onControlHasTextChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillColorChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPlaceholderHasTextChanged', paramCount: 0 },
    { handlerName: 'onRenderTargetChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextureSizeChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
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
  attached: [],
};

export function MaterialTextContainer(): MaterialTextContainerBuilder {
  return createFluentBuilder(
    'MaterialTextContainer',
    MATERIALTEXTCONTAINER_META,
  ) as unknown as MaterialTextContainerBuilder;
}

export namespace MaterialTextContainer {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MaterialTextContainer',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MaterialTextContainer',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'MaterialTextContainer',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'MaterialTextContainer',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'MaterialTextContainer',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken(
      'MaterialTextContainer',
      'Flags',
      'ItemIsViewport',
    );
    export const ItemObservesViewport = createEnumToken(
      'MaterialTextContainer',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MaterialTextContainer',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PerformanceHints {
    export const FastFBOResizing = createEnumToken(
      'MaterialTextContainer',
      'PerformanceHints',
      'FastFBOResizing',
    );
  }
  export namespace PlaceHolderHAlignment {
    export const AlignLeft = createEnumToken(
      'MaterialTextContainer',
      'PlaceHolderHAlignment',
      'AlignLeft',
    );
    export const AlignRight = createEnumToken(
      'MaterialTextContainer',
      'PlaceHolderHAlignment',
      'AlignRight',
    );
    export const AlignHCenter = createEnumToken(
      'MaterialTextContainer',
      'PlaceHolderHAlignment',
      'AlignHCenter',
    );
    export const AlignJustify = createEnumToken(
      'MaterialTextContainer',
      'PlaceHolderHAlignment',
      'AlignJustify',
    );
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('MaterialTextContainer', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken(
      'MaterialTextContainer',
      'RenderTarget',
      'FramebufferObject',
    );
    export const InvertedYFramebufferObject = createEnumToken(
      'MaterialTextContainer',
      'RenderTarget',
      'InvertedYFramebufferObject',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MaterialTextContainer', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MaterialTextContainer', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MaterialTextContainer', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MaterialTextContainer', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MaterialTextContainer', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MaterialTextContainer', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'MaterialTextContainer',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('MaterialTextContainer', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'MaterialTextContainer',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
