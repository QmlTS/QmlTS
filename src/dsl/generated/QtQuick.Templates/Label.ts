// AUTO-GENERATED — DO NOT EDIT
// Type: Label
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
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
import type { ScrollBarAttachedBuilder } from './QQuickScrollBarAttached.js';
import type { ScrollIndicatorAttachedBuilder } from './QQuickScrollIndicatorAttached.js';
import type { SelectionRectangleAttachedBuilder } from './QQuickSelectionRectangleAttached.js';
import type { SplitViewAttachedBuilder } from './QQuickSplitViewAttached.js';
import type { StackViewAttachedBuilder } from './QQuickStackViewAttached.js';
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface LabelBuilder {
  id(id: string): LabelBuilder;
  child(obj: QmlObjectBuilder): LabelBuilder;
  children(...objs: QmlObjectBuilder[]): LabelBuilder;

  activeFocusOnTab(value: boolean): LabelBuilder;
  activeFocusOnTabBind(expr: string): LabelBuilder;
  antialiasing(value: boolean): LabelBuilder;
  antialiasingBind(expr: string): LabelBuilder;
  background(value: ItemBuilder): LabelBuilder;
  backgroundBind(expr: string): LabelBuilder;
  baseUrl(value: QmlUrl): LabelBuilder;
  baseUrlBind(expr: string): LabelBuilder;
  baselineOffset(value: number): LabelBuilder;
  baselineOffsetBind(expr: string): LabelBuilder;
  bottomInset(value: number): LabelBuilder;
  bottomInsetBind(expr: string): LabelBuilder;
  bottomPadding(value: number): LabelBuilder;
  bottomPaddingBind(expr: string): LabelBuilder;
  clip(value: boolean): LabelBuilder;
  clipBind(expr: string): LabelBuilder;
  color(value: QmlColor): LabelBuilder;
  colorBind(expr: string): LabelBuilder;
  containmentMask(value: QtObjectBuilder): LabelBuilder;
  containmentMaskBind(expr: string): LabelBuilder;
  elide(value: QmlEnumToken): LabelBuilder;
  elideBind(expr: string): LabelBuilder;
  enabled(value: boolean): LabelBuilder;
  enabledBind(expr: string): LabelBuilder;
  focus(value: boolean): LabelBuilder;
  focusBind(expr: string): LabelBuilder;
  focusPolicy(value: QmlEnumToken): LabelBuilder;
  focusPolicyBind(expr: string): LabelBuilder;
  font(value: QmlFont): LabelBuilder;
  fontBind(expr: string): LabelBuilder;
  fontSizeMode(value: QmlEnumToken): LabelBuilder;
  fontSizeModeBind(expr: string): LabelBuilder;
  height(value: number): LabelBuilder;
  heightBind(expr: string): LabelBuilder;
  horizontalAlignment(value: QmlEnumToken): LabelBuilder;
  horizontalAlignmentBind(expr: string): LabelBuilder;
  leftInset(value: number): LabelBuilder;
  leftInsetBind(expr: string): LabelBuilder;
  leftPadding(value: number): LabelBuilder;
  leftPaddingBind(expr: string): LabelBuilder;
  lineHeight(value: number): LabelBuilder;
  lineHeightBind(expr: string): LabelBuilder;
  lineHeightMode(value: QmlEnumToken): LabelBuilder;
  lineHeightModeBind(expr: string): LabelBuilder;
  linkColor(value: QmlColor): LabelBuilder;
  linkColorBind(expr: string): LabelBuilder;
  maximumLineCount(value: number): LabelBuilder;
  maximumLineCountBind(expr: string): LabelBuilder;
  minimumPixelSize(value: number): LabelBuilder;
  minimumPixelSizeBind(expr: string): LabelBuilder;
  minimumPointSize(value: number): LabelBuilder;
  minimumPointSizeBind(expr: string): LabelBuilder;
  objectName(value: string): LabelBuilder;
  objectNameBind(expr: string): LabelBuilder;
  opacity(value: number): LabelBuilder;
  opacityBind(expr: string): LabelBuilder;
  padding(value: number): LabelBuilder;
  paddingBind(expr: string): LabelBuilder;
  palette(value: PaletteBuilder): LabelBuilder;
  paletteBind(expr: string): LabelBuilder;
  parent(value: ItemBuilder): LabelBuilder;
  parentBind(expr: string): LabelBuilder;
  renderType(value: QmlEnumToken): LabelBuilder;
  renderTypeBind(expr: string): LabelBuilder;
  renderTypeQuality(value: number): LabelBuilder;
  renderTypeQualityBind(expr: string): LabelBuilder;
  rightInset(value: number): LabelBuilder;
  rightInsetBind(expr: string): LabelBuilder;
  rightPadding(value: number): LabelBuilder;
  rightPaddingBind(expr: string): LabelBuilder;
  rotation(value: number): LabelBuilder;
  rotationBind(expr: string): LabelBuilder;
  scale(value: number): LabelBuilder;
  scaleBind(expr: string): LabelBuilder;
  smooth(value: boolean): LabelBuilder;
  smoothBind(expr: string): LabelBuilder;
  state(value: string): LabelBuilder;
  stateBind(expr: string): LabelBuilder;
  style(value: QmlEnumToken): LabelBuilder;
  styleBind(expr: string): LabelBuilder;
  styleColor(value: QmlColor): LabelBuilder;
  styleColorBind(expr: string): LabelBuilder;
  text(value: string): LabelBuilder;
  textBind(expr: string): LabelBuilder;
  textFormat(value: QmlEnumToken): LabelBuilder;
  textFormatBind(expr: string): LabelBuilder;
  topInset(value: number): LabelBuilder;
  topInsetBind(expr: string): LabelBuilder;
  topPadding(value: number): LabelBuilder;
  topPaddingBind(expr: string): LabelBuilder;
  transformOrigin(value: QmlEnumToken): LabelBuilder;
  transformOriginBind(expr: string): LabelBuilder;
  verticalAlignment(value: QmlEnumToken): LabelBuilder;
  verticalAlignmentBind(expr: string): LabelBuilder;
  visible(value: boolean): LabelBuilder;
  visibleBind(expr: string): LabelBuilder;
  width(value: number): LabelBuilder;
  widthBind(expr: string): LabelBuilder;
  wrapMode(value: QmlEnumToken): LabelBuilder;
  wrapModeBind(expr: string): LabelBuilder;
  x(value: number): LabelBuilder;
  xBind(expr: string): LabelBuilder;
  y(value: number): LabelBuilder;
  yBind(expr: string): LabelBuilder;
  z(value: number): LabelBuilder;
  zBind(expr: string): LabelBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onBaseUrlChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onClipChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onColorChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onContentSizeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onElideModeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onFontChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onFontInfoChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onFontSizeModeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onHorizontalAlignmentChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onLineCountChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onLineHeightChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onLineHeightModeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onLineLaidOut(handler: DslSignalHandlerValue): LabelBuilder;
  onLinkActivated(handler: DslSignalHandlerValue): LabelBuilder;
  onLinkColorChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onLinkHovered(handler: DslSignalHandlerValue): LabelBuilder;
  onMaximumLineCountChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onMinimumPixelSizeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onMinimumPointSizeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): LabelBuilder;
  onParentChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onRenderTypeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onRenderTypeQualityChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onStateChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onStyleChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onStyleColorChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onTextChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onTextFormatChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onTruncatedChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onVerticalAlignmentChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onWrapModeChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onXChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onYChanged(handler: DslSignalHandlerValue): LabelBuilder;
  onZChanged(handler: DslSignalHandlerValue): LabelBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): LabelBuilder;
  layer(setup: (b: LayerBuilder) => void): LabelBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): LabelBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): LabelBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): LabelBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): LabelBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): LabelBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): LabelBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): LabelBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): LabelBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): LabelBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): LabelBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): LabelBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): LabelBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): LabelBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): LabelBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): LabelBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): LabelBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): LabelBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): LabelBuilder;
}

const LABEL_META: TypeMetadata = {
  typeName: 'Label',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baseUrl', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
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
    { name: 'leftInset', hasValue: true, hasBinding: true },
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
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'style', hasValue: true, hasBinding: true },
    { name: 'styleColor', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'textFormat', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaseUrlChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
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
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFontInfoChanged', paramCount: 0 },
    { handlerName: 'onFontSizeModeChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
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
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStyleChanged', paramCount: 1 },
    { handlerName: 'onStyleColorChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 1 },
    { handlerName: 'onTextFormatChanged', paramCount: 1 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
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
  attached: [
    {
      methodName: 'actionGroup',
      attachedTypeName: 'ActionGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'applicationWindow',
      attachedTypeName: 'ApplicationWindow',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onActiveFocusControlChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onFooterChanged', paramCount: 0 },
        { handlerName: 'onHeaderChanged', paramCount: 0 },
        { handlerName: 'onMenuBarChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'buttonGroup',
      attachedTypeName: 'ButtonGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'contextMenu',
      attachedTypeName: 'ContextMenu',
      properties: [
        { name: 'menu', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onMenuChanged', paramCount: 0 },
        { handlerName: 'onRequested', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'dialogButtonBox',
      attachedTypeName: 'DialogButtonBox',
      properties: [
        { name: 'buttonRole', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onButtonRoleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'overlay',
      attachedTypeName: 'Overlay',
      properties: [
        { name: 'modal', hasValue: true, hasBinding: true },
        { name: 'modeless', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onModalChanged', paramCount: 0 },
        { handlerName: 'onModelessChanged', paramCount: 0 },
        { handlerName: 'onOverlayChanged', paramCount: 0 },
        { handlerName: 'onPressed', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollBar',
      attachedTypeName: 'ScrollBar',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollIndicator',
      attachedTypeName: 'ScrollIndicator',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'selectionRectangle',
      attachedTypeName: 'SelectionRectangle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onHoveredChanged', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitView',
      attachedTypeName: 'SplitView',
      properties: [
        { name: 'fillHeight', hasValue: true, hasBinding: true },
        { name: 'fillWidth', hasValue: true, hasBinding: true },
        { name: 'maximumHeight', hasValue: true, hasBinding: true },
        { name: 'maximumWidth', hasValue: true, hasBinding: true },
        { name: 'minimumHeight', hasValue: true, hasBinding: true },
        { name: 'minimumWidth', hasValue: true, hasBinding: true },
        { name: 'preferredHeight', hasValue: true, hasBinding: true },
        { name: 'preferredWidth', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFillHeightChanged', paramCount: 0 },
        { handlerName: 'onFillWidthChanged', paramCount: 0 },
        { handlerName: 'onMaximumHeightChanged', paramCount: 0 },
        { handlerName: 'onMaximumWidthChanged', paramCount: 0 },
        { handlerName: 'onMinimumHeightChanged', paramCount: 0 },
        { handlerName: 'onMinimumWidthChanged', paramCount: 0 },
        { handlerName: 'onPreferredHeightChanged', paramCount: 0 },
        { handlerName: 'onPreferredWidthChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'stackView',
      attachedTypeName: 'StackView',
      properties: [
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActivated', paramCount: 0 },
        { handlerName: 'onActivating', paramCount: 0 },
        { handlerName: 'onDeactivated', paramCount: 0 },
        { handlerName: 'onDeactivating', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onRemoved', paramCount: 0 },
        { handlerName: 'onStatusChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeDelegate',
      attachedTypeName: 'SwipeDelegate',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onIsNextItemChanged', paramCount: 0 },
        { handlerName: 'onIsPreviousItemChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tabBar',
      attachedTypeName: 'TabBar',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onPositionChanged', paramCount: 0 },
        { handlerName: 'onTabBarChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'textArea',
      attachedTypeName: 'TextArea',
      properties: [
        { name: 'flickable', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFlickableChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'toolTip',
      attachedTypeName: 'ToolTip',
      properties: [
        { name: 'delay', hasValue: true, hasBinding: true },
        { name: 'text', hasValue: true, hasBinding: true },
        { name: 'timeout', hasValue: true, hasBinding: true },
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDelayChanged', paramCount: 0 },
        { handlerName: 'onTextChanged', paramCount: 0 },
        { handlerName: 'onTimeoutChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tumbler',
      attachedTypeName: 'Tumbler',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function Label(): LabelBuilder {
  return createFluentBuilder('Label', LABEL_META) as unknown as LabelBuilder;
}

export namespace Label {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Label',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Label',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Label', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Label', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Label', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Label', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Label', 'Flags', 'ItemObservesViewport');
  }
  export namespace FontSizeMode {
    export const FixedSize = createEnumToken('Label', 'FontSizeMode', 'FixedSize');
    export const HorizontalFit = createEnumToken('Label', 'FontSizeMode', 'HorizontalFit');
    export const VerticalFit = createEnumToken('Label', 'FontSizeMode', 'VerticalFit');
    export const Fit = createEnumToken('Label', 'FontSizeMode', 'Fit');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('Label', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('Label', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('Label', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('Label', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Label',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Label',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Label', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LineHeightMode {
    export const ProportionalHeight = createEnumToken(
      'Label',
      'LineHeightMode',
      'ProportionalHeight',
    );
    export const FixedHeight = createEnumToken('Label', 'LineHeightMode', 'FixedHeight');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('Label', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('Label', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('Label', 'RenderType', 'CurveRendering');
  }
  export namespace RenderTypeQuality {
    export const DefaultRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'DefaultRenderTypeQuality',
    );
    export const LowRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'LowRenderTypeQuality',
    );
    export const NormalRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'NormalRenderTypeQuality',
    );
    export const HighRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'HighRenderTypeQuality',
    );
    export const VeryHighRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'VeryHighRenderTypeQuality',
    );
  }
  export namespace TextElideMode {
    export const ElideLeft = createEnumToken('Label', 'TextElideMode', 'ElideLeft');
    export const ElideRight = createEnumToken('Label', 'TextElideMode', 'ElideRight');
    export const ElideMiddle = createEnumToken('Label', 'TextElideMode', 'ElideMiddle');
    export const ElideNone = createEnumToken('Label', 'TextElideMode', 'ElideNone');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('Label', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('Label', 'TextFormat', 'RichText');
    export const MarkdownText = createEnumToken('Label', 'TextFormat', 'MarkdownText');
    export const AutoText = createEnumToken('Label', 'TextFormat', 'AutoText');
    export const StyledText = createEnumToken('Label', 'TextFormat', 'StyledText');
  }
  export namespace TextStyle {
    export const Normal = createEnumToken('Label', 'TextStyle', 'Normal');
    export const Outline = createEnumToken('Label', 'TextStyle', 'Outline');
    export const Raised = createEnumToken('Label', 'TextStyle', 'Raised');
    export const Sunken = createEnumToken('Label', 'TextStyle', 'Sunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Label', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Label', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Label', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Label', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Label', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Label', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Label', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Label', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Label', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('Label', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('Label', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Label', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('Label', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('Label', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('Label', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'Label',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('Label', 'WrapMode', 'Wrap');
  }
}
