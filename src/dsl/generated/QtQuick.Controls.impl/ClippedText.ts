// AUTO-GENERATED — DO NOT EDIT
// Type: ClippedText
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
export interface ClippedTextBuilder {
  id(id: string): ClippedTextBuilder;
  child(obj: QmlObjectBuilder): ClippedTextBuilder;
  children(...objs: QmlObjectBuilder[]): ClippedTextBuilder;

  activeFocusOnTab(value: boolean): ClippedTextBuilder;
  activeFocusOnTabBind(expr: string): ClippedTextBuilder;
  antialiasing(value: boolean): ClippedTextBuilder;
  antialiasingBind(expr: string): ClippedTextBuilder;
  baseUrl(value: QmlUrl): ClippedTextBuilder;
  baseUrlBind(expr: string): ClippedTextBuilder;
  baselineOffset(value: number): ClippedTextBuilder;
  baselineOffsetBind(expr: string): ClippedTextBuilder;
  bottomPadding(value: number): ClippedTextBuilder;
  bottomPaddingBind(expr: string): ClippedTextBuilder;
  clip(value: boolean): ClippedTextBuilder;
  clipBind(expr: string): ClippedTextBuilder;
  clipHeight(value: number): ClippedTextBuilder;
  clipHeightBind(expr: string): ClippedTextBuilder;
  clipWidth(value: number): ClippedTextBuilder;
  clipWidthBind(expr: string): ClippedTextBuilder;
  clipX(value: number): ClippedTextBuilder;
  clipXBind(expr: string): ClippedTextBuilder;
  clipY(value: number): ClippedTextBuilder;
  clipYBind(expr: string): ClippedTextBuilder;
  color(value: QmlColor): ClippedTextBuilder;
  colorBind(expr: string): ClippedTextBuilder;
  containmentMask(value: QtObjectBuilder): ClippedTextBuilder;
  containmentMaskBind(expr: string): ClippedTextBuilder;
  elide(value: QmlEnumToken): ClippedTextBuilder;
  elideBind(expr: string): ClippedTextBuilder;
  enabled(value: boolean): ClippedTextBuilder;
  enabledBind(expr: string): ClippedTextBuilder;
  focus(value: boolean): ClippedTextBuilder;
  focusBind(expr: string): ClippedTextBuilder;
  focusPolicy(value: QmlEnumToken): ClippedTextBuilder;
  focusPolicyBind(expr: string): ClippedTextBuilder;
  font(value: QmlFont): ClippedTextBuilder;
  fontBind(expr: string): ClippedTextBuilder;
  fontSizeMode(value: QmlEnumToken): ClippedTextBuilder;
  fontSizeModeBind(expr: string): ClippedTextBuilder;
  height(value: number): ClippedTextBuilder;
  heightBind(expr: string): ClippedTextBuilder;
  horizontalAlignment(value: QmlEnumToken): ClippedTextBuilder;
  horizontalAlignmentBind(expr: string): ClippedTextBuilder;
  leftPadding(value: number): ClippedTextBuilder;
  leftPaddingBind(expr: string): ClippedTextBuilder;
  lineHeight(value: number): ClippedTextBuilder;
  lineHeightBind(expr: string): ClippedTextBuilder;
  lineHeightMode(value: QmlEnumToken): ClippedTextBuilder;
  lineHeightModeBind(expr: string): ClippedTextBuilder;
  linkColor(value: QmlColor): ClippedTextBuilder;
  linkColorBind(expr: string): ClippedTextBuilder;
  maximumLineCount(value: number): ClippedTextBuilder;
  maximumLineCountBind(expr: string): ClippedTextBuilder;
  minimumPixelSize(value: number): ClippedTextBuilder;
  minimumPixelSizeBind(expr: string): ClippedTextBuilder;
  minimumPointSize(value: number): ClippedTextBuilder;
  minimumPointSizeBind(expr: string): ClippedTextBuilder;
  objectName(value: string): ClippedTextBuilder;
  objectNameBind(expr: string): ClippedTextBuilder;
  opacity(value: number): ClippedTextBuilder;
  opacityBind(expr: string): ClippedTextBuilder;
  padding(value: number): ClippedTextBuilder;
  paddingBind(expr: string): ClippedTextBuilder;
  palette(value: PaletteBuilder): ClippedTextBuilder;
  paletteBind(expr: string): ClippedTextBuilder;
  parent(value: ItemBuilder): ClippedTextBuilder;
  parentBind(expr: string): ClippedTextBuilder;
  renderType(value: QmlEnumToken): ClippedTextBuilder;
  renderTypeBind(expr: string): ClippedTextBuilder;
  renderTypeQuality(value: number): ClippedTextBuilder;
  renderTypeQualityBind(expr: string): ClippedTextBuilder;
  rightPadding(value: number): ClippedTextBuilder;
  rightPaddingBind(expr: string): ClippedTextBuilder;
  rotation(value: number): ClippedTextBuilder;
  rotationBind(expr: string): ClippedTextBuilder;
  scale(value: number): ClippedTextBuilder;
  scaleBind(expr: string): ClippedTextBuilder;
  smooth(value: boolean): ClippedTextBuilder;
  smoothBind(expr: string): ClippedTextBuilder;
  state(value: string): ClippedTextBuilder;
  stateBind(expr: string): ClippedTextBuilder;
  style(value: QmlEnumToken): ClippedTextBuilder;
  styleBind(expr: string): ClippedTextBuilder;
  styleColor(value: QmlColor): ClippedTextBuilder;
  styleColorBind(expr: string): ClippedTextBuilder;
  text(value: string): ClippedTextBuilder;
  textBind(expr: string): ClippedTextBuilder;
  textFormat(value: QmlEnumToken): ClippedTextBuilder;
  textFormatBind(expr: string): ClippedTextBuilder;
  topPadding(value: number): ClippedTextBuilder;
  topPaddingBind(expr: string): ClippedTextBuilder;
  transformOrigin(value: QmlEnumToken): ClippedTextBuilder;
  transformOriginBind(expr: string): ClippedTextBuilder;
  verticalAlignment(value: QmlEnumToken): ClippedTextBuilder;
  verticalAlignmentBind(expr: string): ClippedTextBuilder;
  visible(value: boolean): ClippedTextBuilder;
  visibleBind(expr: string): ClippedTextBuilder;
  width(value: number): ClippedTextBuilder;
  widthBind(expr: string): ClippedTextBuilder;
  wrapMode(value: QmlEnumToken): ClippedTextBuilder;
  wrapModeBind(expr: string): ClippedTextBuilder;
  x(value: number): ClippedTextBuilder;
  xBind(expr: string): ClippedTextBuilder;
  y(value: number): ClippedTextBuilder;
  yBind(expr: string): ClippedTextBuilder;
  z(value: number): ClippedTextBuilder;
  zBind(expr: string): ClippedTextBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onBaseUrlChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onClipChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onColorChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onContentSizeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onElideModeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onFontChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onFontInfoChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onFontSizeModeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onHorizontalAlignmentChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLineCountChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLineHeightChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLineHeightModeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLineLaidOut(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLinkActivated(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLinkColorChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onLinkHovered(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onMaximumLineCountChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onMinimumPixelSizeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onMinimumPointSizeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onRenderTypeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onRenderTypeQualityChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onStyleChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onStyleColorChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onTextChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onTextFormatChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onTruncatedChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onVerticalAlignmentChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onWrapModeChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onXChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onYChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  onZChanged(handler: DslSignalHandlerValue): ClippedTextBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ClippedTextBuilder;
  layer(setup: (b: LayerBuilder) => void): ClippedTextBuilder;
}

const CLIPPEDTEXT_META: TypeMetadata = {
  typeName: 'ClippedText',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baseUrl', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'clipHeight', hasValue: true, hasBinding: true },
    { name: 'clipWidth', hasValue: true, hasBinding: true },
    { name: 'clipX', hasValue: true, hasBinding: true },
    { name: 'clipY', hasValue: true, hasBinding: true },
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

export function ClippedText(): ClippedTextBuilder {
  return createFluentBuilder('ClippedText', CLIPPEDTEXT_META) as unknown as ClippedTextBuilder;
}

export namespace ClippedText {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ClippedText',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ClippedText',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ClippedText', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ClippedText', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ClippedText', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ClippedText', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ClippedText',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FontSizeMode {
    export const FixedSize = createEnumToken('ClippedText', 'FontSizeMode', 'FixedSize');
    export const HorizontalFit = createEnumToken('ClippedText', 'FontSizeMode', 'HorizontalFit');
    export const VerticalFit = createEnumToken('ClippedText', 'FontSizeMode', 'VerticalFit');
    export const Fit = createEnumToken('ClippedText', 'FontSizeMode', 'Fit');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('ClippedText', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('ClippedText', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('ClippedText', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('ClippedText', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ClippedText', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ClippedText',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LineHeightMode {
    export const ProportionalHeight = createEnumToken(
      'ClippedText',
      'LineHeightMode',
      'ProportionalHeight',
    );
    export const FixedHeight = createEnumToken('ClippedText', 'LineHeightMode', 'FixedHeight');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('ClippedText', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('ClippedText', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('ClippedText', 'RenderType', 'CurveRendering');
  }
  export namespace RenderTypeQuality {
    export const DefaultRenderTypeQuality = createEnumToken(
      'ClippedText',
      'RenderTypeQuality',
      'DefaultRenderTypeQuality',
    );
    export const LowRenderTypeQuality = createEnumToken(
      'ClippedText',
      'RenderTypeQuality',
      'LowRenderTypeQuality',
    );
    export const NormalRenderTypeQuality = createEnumToken(
      'ClippedText',
      'RenderTypeQuality',
      'NormalRenderTypeQuality',
    );
    export const HighRenderTypeQuality = createEnumToken(
      'ClippedText',
      'RenderTypeQuality',
      'HighRenderTypeQuality',
    );
    export const VeryHighRenderTypeQuality = createEnumToken(
      'ClippedText',
      'RenderTypeQuality',
      'VeryHighRenderTypeQuality',
    );
  }
  export namespace TextElideMode {
    export const ElideLeft = createEnumToken('ClippedText', 'TextElideMode', 'ElideLeft');
    export const ElideRight = createEnumToken('ClippedText', 'TextElideMode', 'ElideRight');
    export const ElideMiddle = createEnumToken('ClippedText', 'TextElideMode', 'ElideMiddle');
    export const ElideNone = createEnumToken('ClippedText', 'TextElideMode', 'ElideNone');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('ClippedText', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('ClippedText', 'TextFormat', 'RichText');
    export const MarkdownText = createEnumToken('ClippedText', 'TextFormat', 'MarkdownText');
    export const AutoText = createEnumToken('ClippedText', 'TextFormat', 'AutoText');
    export const StyledText = createEnumToken('ClippedText', 'TextFormat', 'StyledText');
  }
  export namespace TextStyle {
    export const Normal = createEnumToken('ClippedText', 'TextStyle', 'Normal');
    export const Outline = createEnumToken('ClippedText', 'TextStyle', 'Outline');
    export const Raised = createEnumToken('ClippedText', 'TextStyle', 'Raised');
    export const Sunken = createEnumToken('ClippedText', 'TextStyle', 'Sunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ClippedText', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ClippedText', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ClippedText', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ClippedText', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ClippedText', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ClippedText', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ClippedText', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ClippedText', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ClippedText', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('ClippedText', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('ClippedText', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('ClippedText', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('ClippedText', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('ClippedText', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('ClippedText', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'ClippedText',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('ClippedText', 'WrapMode', 'Wrap');
  }
}
