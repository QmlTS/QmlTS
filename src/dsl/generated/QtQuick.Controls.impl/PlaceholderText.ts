// AUTO-GENERATED — DO NOT EDIT
// Type: PlaceholderText
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface PlaceholderTextBuilder {
  id(id: string): PlaceholderTextBuilder;
  child(obj: QmlObjectBuilder): PlaceholderTextBuilder;

  activeFocusOnTab(value: boolean): PlaceholderTextBuilder;
  activeFocusOnTabBind(expr: string): PlaceholderTextBuilder;
  antialiasing(value: boolean): PlaceholderTextBuilder;
  antialiasingBind(expr: string): PlaceholderTextBuilder;
  baseUrl(value: QmlUrl): PlaceholderTextBuilder;
  baseUrlBind(expr: string): PlaceholderTextBuilder;
  baselineOffset(value: number): PlaceholderTextBuilder;
  baselineOffsetBind(expr: string): PlaceholderTextBuilder;
  bottomPadding(value: number): PlaceholderTextBuilder;
  bottomPaddingBind(expr: string): PlaceholderTextBuilder;
  clip(value: boolean): PlaceholderTextBuilder;
  clipBind(expr: string): PlaceholderTextBuilder;
  color(value: QmlColor): PlaceholderTextBuilder;
  colorBind(expr: string): PlaceholderTextBuilder;
  containmentMask(value: QtObjectBuilder): PlaceholderTextBuilder;
  containmentMaskBind(expr: string): PlaceholderTextBuilder;
  elide(value: QmlEnumToken): PlaceholderTextBuilder;
  elideBind(expr: string): PlaceholderTextBuilder;
  enabled(value: boolean): PlaceholderTextBuilder;
  enabledBind(expr: string): PlaceholderTextBuilder;
  focus(value: boolean): PlaceholderTextBuilder;
  focusBind(expr: string): PlaceholderTextBuilder;
  focusPolicy(value: QmlEnumToken): PlaceholderTextBuilder;
  focusPolicyBind(expr: string): PlaceholderTextBuilder;
  font(value: QmlFont): PlaceholderTextBuilder;
  fontBind(expr: string): PlaceholderTextBuilder;
  fontSizeMode(value: QmlEnumToken): PlaceholderTextBuilder;
  fontSizeModeBind(expr: string): PlaceholderTextBuilder;
  height(value: number): PlaceholderTextBuilder;
  heightBind(expr: string): PlaceholderTextBuilder;
  horizontalAlignment(value: QmlEnumToken): PlaceholderTextBuilder;
  horizontalAlignmentBind(expr: string): PlaceholderTextBuilder;
  leftPadding(value: number): PlaceholderTextBuilder;
  leftPaddingBind(expr: string): PlaceholderTextBuilder;
  lineHeight(value: number): PlaceholderTextBuilder;
  lineHeightBind(expr: string): PlaceholderTextBuilder;
  lineHeightMode(value: QmlEnumToken): PlaceholderTextBuilder;
  lineHeightModeBind(expr: string): PlaceholderTextBuilder;
  linkColor(value: QmlColor): PlaceholderTextBuilder;
  linkColorBind(expr: string): PlaceholderTextBuilder;
  maximumLineCount(value: number): PlaceholderTextBuilder;
  maximumLineCountBind(expr: string): PlaceholderTextBuilder;
  minimumPixelSize(value: number): PlaceholderTextBuilder;
  minimumPixelSizeBind(expr: string): PlaceholderTextBuilder;
  minimumPointSize(value: number): PlaceholderTextBuilder;
  minimumPointSizeBind(expr: string): PlaceholderTextBuilder;
  objectName(value: string): PlaceholderTextBuilder;
  objectNameBind(expr: string): PlaceholderTextBuilder;
  opacity(value: number): PlaceholderTextBuilder;
  opacityBind(expr: string): PlaceholderTextBuilder;
  padding(value: number): PlaceholderTextBuilder;
  paddingBind(expr: string): PlaceholderTextBuilder;
  palette(value: PaletteBuilder): PlaceholderTextBuilder;
  paletteBind(expr: string): PlaceholderTextBuilder;
  parent(value: ItemBuilder): PlaceholderTextBuilder;
  parentBind(expr: string): PlaceholderTextBuilder;
  renderType(value: QmlEnumToken): PlaceholderTextBuilder;
  renderTypeBind(expr: string): PlaceholderTextBuilder;
  renderTypeQuality(value: number): PlaceholderTextBuilder;
  renderTypeQualityBind(expr: string): PlaceholderTextBuilder;
  rightPadding(value: number): PlaceholderTextBuilder;
  rightPaddingBind(expr: string): PlaceholderTextBuilder;
  rotation(value: number): PlaceholderTextBuilder;
  rotationBind(expr: string): PlaceholderTextBuilder;
  scale(value: number): PlaceholderTextBuilder;
  scaleBind(expr: string): PlaceholderTextBuilder;
  smooth(value: boolean): PlaceholderTextBuilder;
  smoothBind(expr: string): PlaceholderTextBuilder;
  state(value: string): PlaceholderTextBuilder;
  stateBind(expr: string): PlaceholderTextBuilder;
  style(value: QmlEnumToken): PlaceholderTextBuilder;
  styleBind(expr: string): PlaceholderTextBuilder;
  styleColor(value: QmlColor): PlaceholderTextBuilder;
  styleColorBind(expr: string): PlaceholderTextBuilder;
  text(value: string): PlaceholderTextBuilder;
  textBind(expr: string): PlaceholderTextBuilder;
  textFormat(value: QmlEnumToken): PlaceholderTextBuilder;
  textFormatBind(expr: string): PlaceholderTextBuilder;
  topPadding(value: number): PlaceholderTextBuilder;
  topPaddingBind(expr: string): PlaceholderTextBuilder;
  transformOrigin(value: QmlEnumToken): PlaceholderTextBuilder;
  transformOriginBind(expr: string): PlaceholderTextBuilder;
  verticalAlignment(value: QmlEnumToken): PlaceholderTextBuilder;
  verticalAlignmentBind(expr: string): PlaceholderTextBuilder;
  visible(value: boolean): PlaceholderTextBuilder;
  visibleBind(expr: string): PlaceholderTextBuilder;
  width(value: number): PlaceholderTextBuilder;
  widthBind(expr: string): PlaceholderTextBuilder;
  wrapMode(value: QmlEnumToken): PlaceholderTextBuilder;
  wrapModeBind(expr: string): PlaceholderTextBuilder;
  x(value: number): PlaceholderTextBuilder;
  xBind(expr: string): PlaceholderTextBuilder;
  y(value: number): PlaceholderTextBuilder;
  yBind(expr: string): PlaceholderTextBuilder;
  z(value: number): PlaceholderTextBuilder;
  zBind(expr: string): PlaceholderTextBuilder;
  onActiveFocusChanged(body: string): PlaceholderTextBuilder;
  onActiveFocusOnTabChanged(body: string): PlaceholderTextBuilder;
  onAntialiasingChanged(body: string): PlaceholderTextBuilder;
  onBaseUrlChanged(body: string): PlaceholderTextBuilder;
  onBaselineOffsetChanged(body: string): PlaceholderTextBuilder;
  onBottomPaddingChanged(body: string): PlaceholderTextBuilder;
  onChildrenChanged(body: string): PlaceholderTextBuilder;
  onChildrenRectChanged(body: string): PlaceholderTextBuilder;
  onClipChanged(body: string): PlaceholderTextBuilder;
  onColorChanged(body: string): PlaceholderTextBuilder;
  onContainmentMaskChanged(body: string): PlaceholderTextBuilder;
  onContentHeightChanged(body: string): PlaceholderTextBuilder;
  onContentSizeChanged(body: string): PlaceholderTextBuilder;
  onContentWidthChanged(body: string): PlaceholderTextBuilder;
  onEffectiveHorizontalAlignmentChanged(body: string): PlaceholderTextBuilder;
  onElideModeChanged(body: string): PlaceholderTextBuilder;
  onEnabledChanged(body: string): PlaceholderTextBuilder;
  onFocusChanged(body: string): PlaceholderTextBuilder;
  onFocusPolicyChanged(body: string): PlaceholderTextBuilder;
  onFontChanged(body: string): PlaceholderTextBuilder;
  onFontInfoChanged(body: string): PlaceholderTextBuilder;
  onFontSizeModeChanged(body: string): PlaceholderTextBuilder;
  onHeightChanged(body: string): PlaceholderTextBuilder;
  onHorizontalAlignmentChanged(body: string): PlaceholderTextBuilder;
  onImplicitHeightChanged(body: string): PlaceholderTextBuilder;
  onImplicitWidthChanged(body: string): PlaceholderTextBuilder;
  onLeftPaddingChanged(body: string): PlaceholderTextBuilder;
  onLineCountChanged(body: string): PlaceholderTextBuilder;
  onLineHeightChanged(body: string): PlaceholderTextBuilder;
  onLineHeightModeChanged(body: string): PlaceholderTextBuilder;
  onLineLaidOut(body: string): PlaceholderTextBuilder;
  onLinkActivated(body: string): PlaceholderTextBuilder;
  onLinkColorChanged(body: string): PlaceholderTextBuilder;
  onLinkHovered(body: string): PlaceholderTextBuilder;
  onMaximumLineCountChanged(body: string): PlaceholderTextBuilder;
  onMinimumPixelSizeChanged(body: string): PlaceholderTextBuilder;
  onMinimumPointSizeChanged(body: string): PlaceholderTextBuilder;
  onObjectNameChanged(body: string): PlaceholderTextBuilder;
  onOpacityChanged(body: string): PlaceholderTextBuilder;
  onPaddingChanged(body: string): PlaceholderTextBuilder;
  onPaletteChanged(body: string): PlaceholderTextBuilder;
  onPaletteCreated(body: string): PlaceholderTextBuilder;
  onParentChanged(body: string): PlaceholderTextBuilder;
  onRenderTypeChanged(body: string): PlaceholderTextBuilder;
  onRenderTypeQualityChanged(body: string): PlaceholderTextBuilder;
  onRightPaddingChanged(body: string): PlaceholderTextBuilder;
  onRotationChanged(body: string): PlaceholderTextBuilder;
  onScaleChanged(body: string): PlaceholderTextBuilder;
  onSmoothChanged(body: string): PlaceholderTextBuilder;
  onStateChanged(body: string): PlaceholderTextBuilder;
  onStyleChanged(body: string): PlaceholderTextBuilder;
  onStyleColorChanged(body: string): PlaceholderTextBuilder;
  onTextChanged(body: string): PlaceholderTextBuilder;
  onTextFormatChanged(body: string): PlaceholderTextBuilder;
  onTopPaddingChanged(body: string): PlaceholderTextBuilder;
  onTransformOriginChanged(body: string): PlaceholderTextBuilder;
  onTruncatedChanged(body: string): PlaceholderTextBuilder;
  onVerticalAlignmentChanged(body: string): PlaceholderTextBuilder;
  onVisibleChanged(body: string): PlaceholderTextBuilder;
  onVisibleChildrenChanged(body: string): PlaceholderTextBuilder;
  onWidthChanged(body: string): PlaceholderTextBuilder;
  onWindowChanged(body: string): PlaceholderTextBuilder;
  onWrapModeChanged(body: string): PlaceholderTextBuilder;
  onXChanged(body: string): PlaceholderTextBuilder;
  onYChanged(body: string): PlaceholderTextBuilder;
  onZChanged(body: string): PlaceholderTextBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PlaceholderTextBuilder;
  layer(setup: (b: LayerBuilder) => void): PlaceholderTextBuilder;
}

const PLACEHOLDERTEXT_META: TypeMetadata = {
  typeName: 'PlaceholderText',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baseUrl', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'elide', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'fontSizeMode', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'lineHeight', hasValue: true, hasBinding: true },
    { name: 'lineHeightMode', hasValue: true, hasBinding: true },
    { name: 'linkColor', hasValue: true, hasBinding: true },
    { name: 'maximumLineCount', hasValue: true, hasBinding: true },
    { name: 'minimumPixelSize', hasValue: true, hasBinding: true },
    { name: 'minimumPointSize', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderType', hasValue: true, hasBinding: true },
    { name: 'renderTypeQuality', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'style', hasValue: true, hasBinding: true },
    { name: 'styleColor', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'textFormat', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalAlignment', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrapMode', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaseUrlChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 1 },
    { handlerName: 'onContentSizeChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 1 },
    { handlerName: 'onEffectiveHorizontalAlignmentChanged', paramCount: 0 },
    { handlerName: 'onElideModeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 1 },
    { handlerName: 'onFontInfoChanged', paramCount: 0 },
    { handlerName: 'onFontSizeModeChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLineCountChanged', paramCount: 0 },
    { handlerName: 'onLineHeightChanged', paramCount: 1 },
    { handlerName: 'onLineHeightModeChanged', paramCount: 1 },
    { handlerName: 'onLineLaidOut', paramCount: 1 },
    { handlerName: 'onLinkActivated', paramCount: 1 },
    { handlerName: 'onLinkColorChanged', paramCount: 0 },
    { handlerName: 'onLinkHovered', paramCount: 1 },
    { handlerName: 'onMaximumLineCountChanged', paramCount: 0 },
    { handlerName: 'onMinimumPixelSizeChanged', paramCount: 0 },
    { handlerName: 'onMinimumPointSizeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRenderTypeChanged', paramCount: 0 },
    { handlerName: 'onRenderTypeQualityChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStyleChanged', paramCount: 1 },
    { handlerName: 'onStyleColorChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 1 },
    { handlerName: 'onTextFormatChanged', paramCount: 1 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onTruncatedChanged', paramCount: 0 },
    { handlerName: 'onVerticalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapModeChanged', paramCount: 0 },
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

export function PlaceholderText(): PlaceholderTextBuilder {
  return createFluentBuilder(
    'PlaceholderText',
    PLACEHOLDERTEXT_META,
  ) as unknown as PlaceholderTextBuilder;
}

export namespace PlaceholderText {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PlaceholderText',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PlaceholderText',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PlaceholderText', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PlaceholderText', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PlaceholderText', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PlaceholderText', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PlaceholderText',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FontSizeMode {
    export const FixedSize = createEnumToken('PlaceholderText', 'FontSizeMode', 'FixedSize');
    export const HorizontalFit = createEnumToken(
      'PlaceholderText',
      'FontSizeMode',
      'HorizontalFit',
    );
    export const VerticalFit = createEnumToken('PlaceholderText', 'FontSizeMode', 'VerticalFit');
    export const Fit = createEnumToken('PlaceholderText', 'FontSizeMode', 'Fit');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('PlaceholderText', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('PlaceholderText', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('PlaceholderText', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('PlaceholderText', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PlaceholderText',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LineHeightMode {
    export const ProportionalHeight = createEnumToken(
      'PlaceholderText',
      'LineHeightMode',
      'ProportionalHeight',
    );
    export const FixedHeight = createEnumToken('PlaceholderText', 'LineHeightMode', 'FixedHeight');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('PlaceholderText', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken(
      'PlaceholderText',
      'RenderType',
      'NativeRendering',
    );
    export const CurveRendering = createEnumToken(
      'PlaceholderText',
      'RenderType',
      'CurveRendering',
    );
  }
  export namespace RenderTypeQuality {
    export const DefaultRenderTypeQuality = createEnumToken(
      'PlaceholderText',
      'RenderTypeQuality',
      'DefaultRenderTypeQuality',
    );
    export const LowRenderTypeQuality = createEnumToken(
      'PlaceholderText',
      'RenderTypeQuality',
      'LowRenderTypeQuality',
    );
    export const NormalRenderTypeQuality = createEnumToken(
      'PlaceholderText',
      'RenderTypeQuality',
      'NormalRenderTypeQuality',
    );
    export const HighRenderTypeQuality = createEnumToken(
      'PlaceholderText',
      'RenderTypeQuality',
      'HighRenderTypeQuality',
    );
    export const VeryHighRenderTypeQuality = createEnumToken(
      'PlaceholderText',
      'RenderTypeQuality',
      'VeryHighRenderTypeQuality',
    );
  }
  export namespace TextElideMode {
    export const ElideLeft = createEnumToken('PlaceholderText', 'TextElideMode', 'ElideLeft');
    export const ElideRight = createEnumToken('PlaceholderText', 'TextElideMode', 'ElideRight');
    export const ElideMiddle = createEnumToken('PlaceholderText', 'TextElideMode', 'ElideMiddle');
    export const ElideNone = createEnumToken('PlaceholderText', 'TextElideMode', 'ElideNone');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('PlaceholderText', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('PlaceholderText', 'TextFormat', 'RichText');
    export const MarkdownText = createEnumToken('PlaceholderText', 'TextFormat', 'MarkdownText');
    export const AutoText = createEnumToken('PlaceholderText', 'TextFormat', 'AutoText');
    export const StyledText = createEnumToken('PlaceholderText', 'TextFormat', 'StyledText');
  }
  export namespace TextStyle {
    export const Normal = createEnumToken('PlaceholderText', 'TextStyle', 'Normal');
    export const Outline = createEnumToken('PlaceholderText', 'TextStyle', 'Outline');
    export const Raised = createEnumToken('PlaceholderText', 'TextStyle', 'Raised');
    export const Sunken = createEnumToken('PlaceholderText', 'TextStyle', 'Sunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PlaceholderText', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PlaceholderText', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PlaceholderText', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PlaceholderText', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PlaceholderText', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PlaceholderText', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PlaceholderText', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PlaceholderText', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PlaceholderText', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('PlaceholderText', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('PlaceholderText', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('PlaceholderText', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('PlaceholderText', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('PlaceholderText', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('PlaceholderText', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'PlaceholderText',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('PlaceholderText', 'WrapMode', 'Wrap');
  }
}
