// AUTO-GENERATED — DO NOT EDIT
// Type: RangeSlider
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
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
import type { FirstBuilder } from './QQuickRangeSliderNode.js';
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
export interface RangeSliderBuilder {
  id(id: string): RangeSliderBuilder;
  child(obj: QmlObjectBuilder): RangeSliderBuilder;

  activeFocusOnTab(value: boolean): RangeSliderBuilder;
  activeFocusOnTabBind(expr: string): RangeSliderBuilder;
  antialiasing(value: boolean): RangeSliderBuilder;
  antialiasingBind(expr: string): RangeSliderBuilder;
  background(value: ItemBuilder): RangeSliderBuilder;
  backgroundBind(expr: string): RangeSliderBuilder;
  baselineOffset(value: number): RangeSliderBuilder;
  baselineOffsetBind(expr: string): RangeSliderBuilder;
  bottomInset(value: number): RangeSliderBuilder;
  bottomInsetBind(expr: string): RangeSliderBuilder;
  bottomPadding(value: number): RangeSliderBuilder;
  bottomPaddingBind(expr: string): RangeSliderBuilder;
  clip(value: boolean): RangeSliderBuilder;
  clipBind(expr: string): RangeSliderBuilder;
  containmentMask(value: QtObjectBuilder): RangeSliderBuilder;
  containmentMaskBind(expr: string): RangeSliderBuilder;
  contentItem(value: ItemBuilder): RangeSliderBuilder;
  contentItemBind(expr: string): RangeSliderBuilder;
  enabled(value: boolean): RangeSliderBuilder;
  enabledBind(expr: string): RangeSliderBuilder;
  focus(value: boolean): RangeSliderBuilder;
  focusBind(expr: string): RangeSliderBuilder;
  focusPolicy(value: QmlEnumToken): RangeSliderBuilder;
  focusPolicyBind(expr: string): RangeSliderBuilder;
  focusReason(value: QmlEnumToken): RangeSliderBuilder;
  focusReasonBind(expr: string): RangeSliderBuilder;
  font(value: QmlFont): RangeSliderBuilder;
  fontBind(expr: string): RangeSliderBuilder;
  from(value: number): RangeSliderBuilder;
  fromBind(expr: string): RangeSliderBuilder;
  height(value: number): RangeSliderBuilder;
  heightBind(expr: string): RangeSliderBuilder;
  horizontalPadding(value: number): RangeSliderBuilder;
  horizontalPaddingBind(expr: string): RangeSliderBuilder;
  hoverEnabled(value: boolean): RangeSliderBuilder;
  hoverEnabledBind(expr: string): RangeSliderBuilder;
  implicitHeight(value: number): RangeSliderBuilder;
  implicitHeightBind(expr: string): RangeSliderBuilder;
  implicitWidth(value: number): RangeSliderBuilder;
  implicitWidthBind(expr: string): RangeSliderBuilder;
  leftInset(value: number): RangeSliderBuilder;
  leftInsetBind(expr: string): RangeSliderBuilder;
  leftPadding(value: number): RangeSliderBuilder;
  leftPaddingBind(expr: string): RangeSliderBuilder;
  live(value: boolean): RangeSliderBuilder;
  liveBind(expr: string): RangeSliderBuilder;
  locale(value: string): RangeSliderBuilder;
  localeBind(expr: string): RangeSliderBuilder;
  objectName(value: string): RangeSliderBuilder;
  objectNameBind(expr: string): RangeSliderBuilder;
  opacity(value: number): RangeSliderBuilder;
  opacityBind(expr: string): RangeSliderBuilder;
  orientation(value: QmlEnumToken): RangeSliderBuilder;
  orientationBind(expr: string): RangeSliderBuilder;
  padding(value: number): RangeSliderBuilder;
  paddingBind(expr: string): RangeSliderBuilder;
  palette(value: PaletteBuilder): RangeSliderBuilder;
  paletteBind(expr: string): RangeSliderBuilder;
  parent(value: ItemBuilder): RangeSliderBuilder;
  parentBind(expr: string): RangeSliderBuilder;
  rightInset(value: number): RangeSliderBuilder;
  rightInsetBind(expr: string): RangeSliderBuilder;
  rightPadding(value: number): RangeSliderBuilder;
  rightPaddingBind(expr: string): RangeSliderBuilder;
  rotation(value: number): RangeSliderBuilder;
  rotationBind(expr: string): RangeSliderBuilder;
  scale(value: number): RangeSliderBuilder;
  scaleBind(expr: string): RangeSliderBuilder;
  smooth(value: boolean): RangeSliderBuilder;
  smoothBind(expr: string): RangeSliderBuilder;
  snapMode(value: QmlEnumToken): RangeSliderBuilder;
  snapModeBind(expr: string): RangeSliderBuilder;
  spacing(value: number): RangeSliderBuilder;
  spacingBind(expr: string): RangeSliderBuilder;
  state(value: string): RangeSliderBuilder;
  stateBind(expr: string): RangeSliderBuilder;
  stepSize(value: number): RangeSliderBuilder;
  stepSizeBind(expr: string): RangeSliderBuilder;
  to(value: number): RangeSliderBuilder;
  toBind(expr: string): RangeSliderBuilder;
  topInset(value: number): RangeSliderBuilder;
  topInsetBind(expr: string): RangeSliderBuilder;
  topPadding(value: number): RangeSliderBuilder;
  topPaddingBind(expr: string): RangeSliderBuilder;
  touchDragThreshold(value: number): RangeSliderBuilder;
  touchDragThresholdBind(expr: string): RangeSliderBuilder;
  transformOrigin(value: QmlEnumToken): RangeSliderBuilder;
  transformOriginBind(expr: string): RangeSliderBuilder;
  verticalPadding(value: number): RangeSliderBuilder;
  verticalPaddingBind(expr: string): RangeSliderBuilder;
  visible(value: boolean): RangeSliderBuilder;
  visibleBind(expr: string): RangeSliderBuilder;
  wheelEnabled(value: boolean): RangeSliderBuilder;
  wheelEnabledBind(expr: string): RangeSliderBuilder;
  width(value: number): RangeSliderBuilder;
  widthBind(expr: string): RangeSliderBuilder;
  x(value: number): RangeSliderBuilder;
  xBind(expr: string): RangeSliderBuilder;
  y(value: number): RangeSliderBuilder;
  yBind(expr: string): RangeSliderBuilder;
  z(value: number): RangeSliderBuilder;
  zBind(expr: string): RangeSliderBuilder;
  onActiveFocusChanged(body: string): RangeSliderBuilder;
  onActiveFocusOnTabChanged(body: string): RangeSliderBuilder;
  onAntialiasingChanged(body: string): RangeSliderBuilder;
  onAvailableHeightChanged(body: string): RangeSliderBuilder;
  onAvailableWidthChanged(body: string): RangeSliderBuilder;
  onBackgroundChanged(body: string): RangeSliderBuilder;
  onBaselineOffsetChanged(body: string): RangeSliderBuilder;
  onBottomInsetChanged(body: string): RangeSliderBuilder;
  onBottomPaddingChanged(body: string): RangeSliderBuilder;
  onChildrenChanged(body: string): RangeSliderBuilder;
  onChildrenRectChanged(body: string): RangeSliderBuilder;
  onClipChanged(body: string): RangeSliderBuilder;
  onContainmentMaskChanged(body: string): RangeSliderBuilder;
  onContentItemChanged(body: string): RangeSliderBuilder;
  onEnabledChanged(body: string): RangeSliderBuilder;
  onFocusChanged(body: string): RangeSliderBuilder;
  onFocusPolicyChanged(body: string): RangeSliderBuilder;
  onFocusReasonChanged(body: string): RangeSliderBuilder;
  onFontChanged(body: string): RangeSliderBuilder;
  onFromChanged(body: string): RangeSliderBuilder;
  onHeightChanged(body: string): RangeSliderBuilder;
  onHorizontalPaddingChanged(body: string): RangeSliderBuilder;
  onHoverEnabledChanged(body: string): RangeSliderBuilder;
  onHoveredChanged(body: string): RangeSliderBuilder;
  onImplicitBackgroundHeightChanged(body: string): RangeSliderBuilder;
  onImplicitBackgroundWidthChanged(body: string): RangeSliderBuilder;
  onImplicitContentHeightChanged(body: string): RangeSliderBuilder;
  onImplicitContentWidthChanged(body: string): RangeSliderBuilder;
  onImplicitHeightChanged(body: string): RangeSliderBuilder;
  onImplicitWidthChanged(body: string): RangeSliderBuilder;
  onLeftInsetChanged(body: string): RangeSliderBuilder;
  onLeftPaddingChanged(body: string): RangeSliderBuilder;
  onLiveChanged(body: string): RangeSliderBuilder;
  onLocaleChanged(body: string): RangeSliderBuilder;
  onMirroredChanged(body: string): RangeSliderBuilder;
  onObjectNameChanged(body: string): RangeSliderBuilder;
  onOpacityChanged(body: string): RangeSliderBuilder;
  onOrientationChanged(body: string): RangeSliderBuilder;
  onPaddingChanged(body: string): RangeSliderBuilder;
  onPaletteChanged(body: string): RangeSliderBuilder;
  onPaletteCreated(body: string): RangeSliderBuilder;
  onParentChanged(body: string): RangeSliderBuilder;
  onRightInsetChanged(body: string): RangeSliderBuilder;
  onRightPaddingChanged(body: string): RangeSliderBuilder;
  onRotationChanged(body: string): RangeSliderBuilder;
  onScaleChanged(body: string): RangeSliderBuilder;
  onSmoothChanged(body: string): RangeSliderBuilder;
  onSnapModeChanged(body: string): RangeSliderBuilder;
  onSpacingChanged(body: string): RangeSliderBuilder;
  onStateChanged(body: string): RangeSliderBuilder;
  onStepSizeChanged(body: string): RangeSliderBuilder;
  onToChanged(body: string): RangeSliderBuilder;
  onTopInsetChanged(body: string): RangeSliderBuilder;
  onTopPaddingChanged(body: string): RangeSliderBuilder;
  onTouchDragThresholdChanged(body: string): RangeSliderBuilder;
  onTransformOriginChanged(body: string): RangeSliderBuilder;
  onVerticalPaddingChanged(body: string): RangeSliderBuilder;
  onVisibleChanged(body: string): RangeSliderBuilder;
  onVisibleChildrenChanged(body: string): RangeSliderBuilder;
  onVisualFocusChanged(body: string): RangeSliderBuilder;
  onWheelEnabledChanged(body: string): RangeSliderBuilder;
  onWidthChanged(body: string): RangeSliderBuilder;
  onWindowChanged(body: string): RangeSliderBuilder;
  onXChanged(body: string): RangeSliderBuilder;
  onYChanged(body: string): RangeSliderBuilder;
  onZChanged(body: string): RangeSliderBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RangeSliderBuilder;
  first(setup: (b: FirstBuilder) => void): RangeSliderBuilder;
  layer(setup: (b: LayerBuilder) => void): RangeSliderBuilder;
  second(setup: (b: FirstBuilder) => void): RangeSliderBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RangeSliderBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RangeSliderBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RangeSliderBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RangeSliderBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RangeSliderBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RangeSliderBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RangeSliderBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RangeSliderBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RangeSliderBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RangeSliderBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RangeSliderBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RangeSliderBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RangeSliderBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RangeSliderBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RangeSliderBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RangeSliderBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RangeSliderBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RangeSliderBuilder;
}

const RANGESLIDER_META: TypeMetadata = {
  typeName: 'RangeSlider',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'live', hasValue: true, hasBinding: true },
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
    { name: 'snapMode', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'stepSize', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'touchDragThreshold', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
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
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLiveChanged', paramCount: 0 },
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
    { handlerName: 'onSnapModeChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStepSizeChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTouchDragThresholdChanged', paramCount: 0 },
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
      methodName: 'first',
      groupName: 'first',
      properties: [
        { name: 'handle', hasValue: true, hasBinding: true },
        { name: 'hovered', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
        { name: 'value', hasValue: true, hasBinding: true },
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
    {
      methodName: 'second',
      groupName: 'second',
      properties: [
        { name: 'handle', hasValue: true, hasBinding: true },
        { name: 'hovered', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
        { name: 'value', hasValue: true, hasBinding: true },
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

export function RangeSlider(): RangeSliderBuilder {
  return createFluentBuilder('RangeSlider', RANGESLIDER_META) as unknown as RangeSliderBuilder;
}

export namespace RangeSlider {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RangeSlider',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RangeSlider',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RangeSlider', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RangeSlider', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RangeSlider', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RangeSlider', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RangeSlider',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('RangeSlider', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('RangeSlider', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('RangeSlider', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('RangeSlider', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RangeSlider', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RangeSlider', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RangeSlider', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RangeSlider', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RangeSlider', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RangeSlider', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RangeSlider', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RangeSlider', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RangeSlider', 'TransformOrigin', 'BottomRight');
  }
}
