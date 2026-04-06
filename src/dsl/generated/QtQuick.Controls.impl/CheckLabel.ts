// AUTO-GENERATED — DO NOT EDIT
// Type: CheckLabel
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
export interface CheckLabelBuilder {
  id(id: string): CheckLabelBuilder;
  child(obj: QmlObjectBuilder): CheckLabelBuilder;
  children(...objs: QmlObjectBuilder[]): CheckLabelBuilder;

  activeFocusOnTab(value: boolean): CheckLabelBuilder;
  activeFocusOnTabBind(expr: string): CheckLabelBuilder;
  antialiasing(value: boolean): CheckLabelBuilder;
  antialiasingBind(expr: string): CheckLabelBuilder;
  baseUrl(value: QmlUrl): CheckLabelBuilder;
  baseUrlBind(expr: string): CheckLabelBuilder;
  baselineOffset(value: number): CheckLabelBuilder;
  baselineOffsetBind(expr: string): CheckLabelBuilder;
  bottomPadding(value: number): CheckLabelBuilder;
  bottomPaddingBind(expr: string): CheckLabelBuilder;
  clip(value: boolean): CheckLabelBuilder;
  clipBind(expr: string): CheckLabelBuilder;
  color(value: QmlColor): CheckLabelBuilder;
  colorBind(expr: string): CheckLabelBuilder;
  containmentMask(value: QtObjectBuilder): CheckLabelBuilder;
  containmentMaskBind(expr: string): CheckLabelBuilder;
  elide(value: QmlEnumToken): CheckLabelBuilder;
  elideBind(expr: string): CheckLabelBuilder;
  enabled(value: boolean): CheckLabelBuilder;
  enabledBind(expr: string): CheckLabelBuilder;
  focus(value: boolean): CheckLabelBuilder;
  focusBind(expr: string): CheckLabelBuilder;
  focusPolicy(value: QmlEnumToken): CheckLabelBuilder;
  focusPolicyBind(expr: string): CheckLabelBuilder;
  font(value: QmlFont): CheckLabelBuilder;
  fontBind(expr: string): CheckLabelBuilder;
  fontSizeMode(value: QmlEnumToken): CheckLabelBuilder;
  fontSizeModeBind(expr: string): CheckLabelBuilder;
  height(value: number): CheckLabelBuilder;
  heightBind(expr: string): CheckLabelBuilder;
  horizontalAlignment(value: QmlEnumToken): CheckLabelBuilder;
  horizontalAlignmentBind(expr: string): CheckLabelBuilder;
  leftPadding(value: number): CheckLabelBuilder;
  leftPaddingBind(expr: string): CheckLabelBuilder;
  lineHeight(value: number): CheckLabelBuilder;
  lineHeightBind(expr: string): CheckLabelBuilder;
  lineHeightMode(value: QmlEnumToken): CheckLabelBuilder;
  lineHeightModeBind(expr: string): CheckLabelBuilder;
  linkColor(value: QmlColor): CheckLabelBuilder;
  linkColorBind(expr: string): CheckLabelBuilder;
  maximumLineCount(value: number): CheckLabelBuilder;
  maximumLineCountBind(expr: string): CheckLabelBuilder;
  minimumPixelSize(value: number): CheckLabelBuilder;
  minimumPixelSizeBind(expr: string): CheckLabelBuilder;
  minimumPointSize(value: number): CheckLabelBuilder;
  minimumPointSizeBind(expr: string): CheckLabelBuilder;
  objectName(value: string): CheckLabelBuilder;
  objectNameBind(expr: string): CheckLabelBuilder;
  opacity(value: number): CheckLabelBuilder;
  opacityBind(expr: string): CheckLabelBuilder;
  padding(value: number): CheckLabelBuilder;
  paddingBind(expr: string): CheckLabelBuilder;
  palette(value: PaletteBuilder): CheckLabelBuilder;
  paletteBind(expr: string): CheckLabelBuilder;
  parent(value: ItemBuilder): CheckLabelBuilder;
  parentBind(expr: string): CheckLabelBuilder;
  renderType(value: QmlEnumToken): CheckLabelBuilder;
  renderTypeBind(expr: string): CheckLabelBuilder;
  renderTypeQuality(value: number): CheckLabelBuilder;
  renderTypeQualityBind(expr: string): CheckLabelBuilder;
  rightPadding(value: number): CheckLabelBuilder;
  rightPaddingBind(expr: string): CheckLabelBuilder;
  rotation(value: number): CheckLabelBuilder;
  rotationBind(expr: string): CheckLabelBuilder;
  scale(value: number): CheckLabelBuilder;
  scaleBind(expr: string): CheckLabelBuilder;
  smooth(value: boolean): CheckLabelBuilder;
  smoothBind(expr: string): CheckLabelBuilder;
  state(value: string): CheckLabelBuilder;
  stateBind(expr: string): CheckLabelBuilder;
  style(value: QmlEnumToken): CheckLabelBuilder;
  styleBind(expr: string): CheckLabelBuilder;
  styleColor(value: QmlColor): CheckLabelBuilder;
  styleColorBind(expr: string): CheckLabelBuilder;
  text(value: string): CheckLabelBuilder;
  textBind(expr: string): CheckLabelBuilder;
  textFormat(value: QmlEnumToken): CheckLabelBuilder;
  textFormatBind(expr: string): CheckLabelBuilder;
  topPadding(value: number): CheckLabelBuilder;
  topPaddingBind(expr: string): CheckLabelBuilder;
  transformOrigin(value: QmlEnumToken): CheckLabelBuilder;
  transformOriginBind(expr: string): CheckLabelBuilder;
  verticalAlignment(value: QmlEnumToken): CheckLabelBuilder;
  verticalAlignmentBind(expr: string): CheckLabelBuilder;
  visible(value: boolean): CheckLabelBuilder;
  visibleBind(expr: string): CheckLabelBuilder;
  width(value: number): CheckLabelBuilder;
  widthBind(expr: string): CheckLabelBuilder;
  wrapMode(value: QmlEnumToken): CheckLabelBuilder;
  wrapModeBind(expr: string): CheckLabelBuilder;
  x(value: number): CheckLabelBuilder;
  xBind(expr: string): CheckLabelBuilder;
  y(value: number): CheckLabelBuilder;
  yBind(expr: string): CheckLabelBuilder;
  z(value: number): CheckLabelBuilder;
  zBind(expr: string): CheckLabelBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onBaseUrlChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onClipChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onColorChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onContentSizeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onElideModeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onFontChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onFontInfoChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onFontSizeModeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onHorizontalAlignmentChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLineCountChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLineHeightChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLineHeightModeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLineLaidOut(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLinkActivated(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLinkColorChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onLinkHovered(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onMaximumLineCountChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onMinimumPixelSizeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onMinimumPointSizeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onParentChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onRenderTypeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onRenderTypeQualityChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onStateChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onStyleChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onStyleColorChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onTextChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onTextFormatChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onTruncatedChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onVerticalAlignmentChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onWrapModeChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onXChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onYChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  onZChanged(handler: DslSignalHandlerValue): CheckLabelBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CheckLabelBuilder;
  layer(setup: (b: LayerBuilder) => void): CheckLabelBuilder;
}

const CHECKLABEL_META: TypeMetadata = {
  typeName: 'CheckLabel',
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

export function CheckLabel(): CheckLabelBuilder {
  return createFluentBuilder('CheckLabel', CHECKLABEL_META) as unknown as CheckLabelBuilder;
}

export namespace CheckLabel {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'CheckLabel',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'CheckLabel',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('CheckLabel', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('CheckLabel', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('CheckLabel', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('CheckLabel', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'CheckLabel',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FontSizeMode {
    export const FixedSize = createEnumToken('CheckLabel', 'FontSizeMode', 'FixedSize');
    export const HorizontalFit = createEnumToken('CheckLabel', 'FontSizeMode', 'HorizontalFit');
    export const VerticalFit = createEnumToken('CheckLabel', 'FontSizeMode', 'VerticalFit');
    export const Fit = createEnumToken('CheckLabel', 'FontSizeMode', 'Fit');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('CheckLabel', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('CheckLabel', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('CheckLabel', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('CheckLabel', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('CheckLabel', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'CheckLabel',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LineHeightMode {
    export const ProportionalHeight = createEnumToken(
      'CheckLabel',
      'LineHeightMode',
      'ProportionalHeight',
    );
    export const FixedHeight = createEnumToken('CheckLabel', 'LineHeightMode', 'FixedHeight');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('CheckLabel', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('CheckLabel', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('CheckLabel', 'RenderType', 'CurveRendering');
  }
  export namespace RenderTypeQuality {
    export const DefaultRenderTypeQuality = createEnumToken(
      'CheckLabel',
      'RenderTypeQuality',
      'DefaultRenderTypeQuality',
    );
    export const LowRenderTypeQuality = createEnumToken(
      'CheckLabel',
      'RenderTypeQuality',
      'LowRenderTypeQuality',
    );
    export const NormalRenderTypeQuality = createEnumToken(
      'CheckLabel',
      'RenderTypeQuality',
      'NormalRenderTypeQuality',
    );
    export const HighRenderTypeQuality = createEnumToken(
      'CheckLabel',
      'RenderTypeQuality',
      'HighRenderTypeQuality',
    );
    export const VeryHighRenderTypeQuality = createEnumToken(
      'CheckLabel',
      'RenderTypeQuality',
      'VeryHighRenderTypeQuality',
    );
  }
  export namespace TextElideMode {
    export const ElideLeft = createEnumToken('CheckLabel', 'TextElideMode', 'ElideLeft');
    export const ElideRight = createEnumToken('CheckLabel', 'TextElideMode', 'ElideRight');
    export const ElideMiddle = createEnumToken('CheckLabel', 'TextElideMode', 'ElideMiddle');
    export const ElideNone = createEnumToken('CheckLabel', 'TextElideMode', 'ElideNone');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('CheckLabel', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('CheckLabel', 'TextFormat', 'RichText');
    export const MarkdownText = createEnumToken('CheckLabel', 'TextFormat', 'MarkdownText');
    export const AutoText = createEnumToken('CheckLabel', 'TextFormat', 'AutoText');
    export const StyledText = createEnumToken('CheckLabel', 'TextFormat', 'StyledText');
  }
  export namespace TextStyle {
    export const Normal = createEnumToken('CheckLabel', 'TextStyle', 'Normal');
    export const Outline = createEnumToken('CheckLabel', 'TextStyle', 'Outline');
    export const Raised = createEnumToken('CheckLabel', 'TextStyle', 'Raised');
    export const Sunken = createEnumToken('CheckLabel', 'TextStyle', 'Sunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('CheckLabel', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('CheckLabel', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('CheckLabel', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('CheckLabel', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('CheckLabel', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('CheckLabel', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('CheckLabel', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('CheckLabel', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('CheckLabel', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('CheckLabel', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('CheckLabel', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('CheckLabel', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('CheckLabel', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('CheckLabel', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('CheckLabel', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'CheckLabel',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('CheckLabel', 'WrapMode', 'Wrap');
  }
}
