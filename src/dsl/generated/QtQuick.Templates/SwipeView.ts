// AUTO-GENERATED — DO NOT EDIT
// Type: SwipeView
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
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
export interface SwipeViewBuilder {
  id(id: string): SwipeViewBuilder;
  child(obj: QmlObjectBuilder): SwipeViewBuilder;
  children(...objs: QmlObjectBuilder[]): SwipeViewBuilder;

  activeFocusOnTab(value: boolean): SwipeViewBuilder;
  activeFocusOnTabBind(expr: string): SwipeViewBuilder;
  antialiasing(value: boolean): SwipeViewBuilder;
  antialiasingBind(expr: string): SwipeViewBuilder;
  background(value: ItemBuilder): SwipeViewBuilder;
  backgroundBind(expr: string): SwipeViewBuilder;
  baselineOffset(value: number): SwipeViewBuilder;
  baselineOffsetBind(expr: string): SwipeViewBuilder;
  bottomInset(value: number): SwipeViewBuilder;
  bottomInsetBind(expr: string): SwipeViewBuilder;
  bottomPadding(value: number): SwipeViewBuilder;
  bottomPaddingBind(expr: string): SwipeViewBuilder;
  clip(value: boolean): SwipeViewBuilder;
  clipBind(expr: string): SwipeViewBuilder;
  containmentMask(value: QtObjectBuilder): SwipeViewBuilder;
  containmentMaskBind(expr: string): SwipeViewBuilder;
  contentHeight(value: number): SwipeViewBuilder;
  contentHeightBind(expr: string): SwipeViewBuilder;
  contentItem(value: ItemBuilder): SwipeViewBuilder;
  contentItemBind(expr: string): SwipeViewBuilder;
  contentWidth(value: number): SwipeViewBuilder;
  contentWidthBind(expr: string): SwipeViewBuilder;
  currentIndex(value: number): SwipeViewBuilder;
  currentIndexBind(expr: string): SwipeViewBuilder;
  enabled(value: boolean): SwipeViewBuilder;
  enabledBind(expr: string): SwipeViewBuilder;
  focus(value: boolean): SwipeViewBuilder;
  focusBind(expr: string): SwipeViewBuilder;
  focusPolicy(value: QmlEnumToken): SwipeViewBuilder;
  focusPolicyBind(expr: string): SwipeViewBuilder;
  focusReason(value: QmlEnumToken): SwipeViewBuilder;
  focusReasonBind(expr: string): SwipeViewBuilder;
  font(value: QmlFont): SwipeViewBuilder;
  fontBind(expr: string): SwipeViewBuilder;
  height(value: number): SwipeViewBuilder;
  heightBind(expr: string): SwipeViewBuilder;
  horizontalPadding(value: number): SwipeViewBuilder;
  horizontalPaddingBind(expr: string): SwipeViewBuilder;
  hoverEnabled(value: boolean): SwipeViewBuilder;
  hoverEnabledBind(expr: string): SwipeViewBuilder;
  implicitHeight(value: number): SwipeViewBuilder;
  implicitHeightBind(expr: string): SwipeViewBuilder;
  implicitWidth(value: number): SwipeViewBuilder;
  implicitWidthBind(expr: string): SwipeViewBuilder;
  interactive(value: boolean): SwipeViewBuilder;
  interactiveBind(expr: string): SwipeViewBuilder;
  leftInset(value: number): SwipeViewBuilder;
  leftInsetBind(expr: string): SwipeViewBuilder;
  leftPadding(value: number): SwipeViewBuilder;
  leftPaddingBind(expr: string): SwipeViewBuilder;
  locale(value: string): SwipeViewBuilder;
  localeBind(expr: string): SwipeViewBuilder;
  objectName(value: string): SwipeViewBuilder;
  objectNameBind(expr: string): SwipeViewBuilder;
  opacity(value: number): SwipeViewBuilder;
  opacityBind(expr: string): SwipeViewBuilder;
  orientation(value: QmlEnumToken): SwipeViewBuilder;
  orientationBind(expr: string): SwipeViewBuilder;
  padding(value: number): SwipeViewBuilder;
  paddingBind(expr: string): SwipeViewBuilder;
  palette(value: PaletteBuilder): SwipeViewBuilder;
  paletteBind(expr: string): SwipeViewBuilder;
  parent(value: ItemBuilder): SwipeViewBuilder;
  parentBind(expr: string): SwipeViewBuilder;
  rightInset(value: number): SwipeViewBuilder;
  rightInsetBind(expr: string): SwipeViewBuilder;
  rightPadding(value: number): SwipeViewBuilder;
  rightPaddingBind(expr: string): SwipeViewBuilder;
  rotation(value: number): SwipeViewBuilder;
  rotationBind(expr: string): SwipeViewBuilder;
  scale(value: number): SwipeViewBuilder;
  scaleBind(expr: string): SwipeViewBuilder;
  smooth(value: boolean): SwipeViewBuilder;
  smoothBind(expr: string): SwipeViewBuilder;
  spacing(value: number): SwipeViewBuilder;
  spacingBind(expr: string): SwipeViewBuilder;
  state(value: string): SwipeViewBuilder;
  stateBind(expr: string): SwipeViewBuilder;
  topInset(value: number): SwipeViewBuilder;
  topInsetBind(expr: string): SwipeViewBuilder;
  topPadding(value: number): SwipeViewBuilder;
  topPaddingBind(expr: string): SwipeViewBuilder;
  transformOrigin(value: QmlEnumToken): SwipeViewBuilder;
  transformOriginBind(expr: string): SwipeViewBuilder;
  verticalPadding(value: number): SwipeViewBuilder;
  verticalPaddingBind(expr: string): SwipeViewBuilder;
  visible(value: boolean): SwipeViewBuilder;
  visibleBind(expr: string): SwipeViewBuilder;
  wheelEnabled(value: boolean): SwipeViewBuilder;
  wheelEnabledBind(expr: string): SwipeViewBuilder;
  width(value: number): SwipeViewBuilder;
  widthBind(expr: string): SwipeViewBuilder;
  x(value: number): SwipeViewBuilder;
  xBind(expr: string): SwipeViewBuilder;
  y(value: number): SwipeViewBuilder;
  yBind(expr: string): SwipeViewBuilder;
  z(value: number): SwipeViewBuilder;
  zBind(expr: string): SwipeViewBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onClipChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onContentChildrenChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onCountChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onCurrentItemChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onFontChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onInteractiveChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): SwipeViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwipeViewBuilder;
  layer(setup: (b: LayerBuilder) => void): SwipeViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwipeViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwipeViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwipeViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwipeViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwipeViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwipeViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwipeViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwipeViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwipeViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwipeViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwipeViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwipeViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwipeViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwipeViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwipeViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwipeViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwipeViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwipeViewBuilder;
}

const SWIPEVIEW_META: TypeMetadata = {
  typeName: 'SwipeView',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interactive', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onWheelEnabledChanged', paramCount: 0 },
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
  defaultProperty: 'contentData',
};

export function SwipeView(): SwipeViewBuilder {
  return createFluentBuilder('SwipeView', SWIPEVIEW_META) as unknown as SwipeViewBuilder;
}

export namespace SwipeView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SwipeView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SwipeView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SwipeView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SwipeView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SwipeView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SwipeView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SwipeView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SwipeView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SwipeView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SwipeView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SwipeView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SwipeView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SwipeView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SwipeView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SwipeView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SwipeView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SwipeView', 'TransformOrigin', 'BottomRight');
  }
}
