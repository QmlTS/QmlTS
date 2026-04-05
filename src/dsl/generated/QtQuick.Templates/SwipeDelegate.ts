// AUTO-GENERATED — DO NOT EDIT
// Type: SwipeDelegate
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlFont,
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
import type { ActionBuilder } from './Action.js';
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
import type { SwipeBuilder } from './QQuickSwipe.js';
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface SwipeDelegateBuilder {
  id(id: string): SwipeDelegateBuilder;
  child(obj: QmlObjectBuilder): SwipeDelegateBuilder;

  action(value: ActionBuilder): SwipeDelegateBuilder;
  actionBind(expr: string): SwipeDelegateBuilder;
  activeFocusOnTab(value: boolean): SwipeDelegateBuilder;
  activeFocusOnTabBind(expr: string): SwipeDelegateBuilder;
  antialiasing(value: boolean): SwipeDelegateBuilder;
  antialiasingBind(expr: string): SwipeDelegateBuilder;
  autoExclusive(value: boolean): SwipeDelegateBuilder;
  autoExclusiveBind(expr: string): SwipeDelegateBuilder;
  autoRepeat(value: boolean): SwipeDelegateBuilder;
  autoRepeatBind(expr: string): SwipeDelegateBuilder;
  autoRepeatDelay(value: number): SwipeDelegateBuilder;
  autoRepeatDelayBind(expr: string): SwipeDelegateBuilder;
  autoRepeatInterval(value: number): SwipeDelegateBuilder;
  autoRepeatIntervalBind(expr: string): SwipeDelegateBuilder;
  background(value: ItemBuilder): SwipeDelegateBuilder;
  backgroundBind(expr: string): SwipeDelegateBuilder;
  baselineOffset(value: number): SwipeDelegateBuilder;
  baselineOffsetBind(expr: string): SwipeDelegateBuilder;
  bottomInset(value: number): SwipeDelegateBuilder;
  bottomInsetBind(expr: string): SwipeDelegateBuilder;
  bottomPadding(value: number): SwipeDelegateBuilder;
  bottomPaddingBind(expr: string): SwipeDelegateBuilder;
  checkable(value: boolean): SwipeDelegateBuilder;
  checkableBind(expr: string): SwipeDelegateBuilder;
  checked(value: boolean): SwipeDelegateBuilder;
  checkedBind(expr: string): SwipeDelegateBuilder;
  clip(value: boolean): SwipeDelegateBuilder;
  clipBind(expr: string): SwipeDelegateBuilder;
  containmentMask(value: QtObjectBuilder): SwipeDelegateBuilder;
  containmentMaskBind(expr: string): SwipeDelegateBuilder;
  contentItem(value: ItemBuilder): SwipeDelegateBuilder;
  contentItemBind(expr: string): SwipeDelegateBuilder;
  display(value: QmlEnumToken): SwipeDelegateBuilder;
  displayBind(expr: string): SwipeDelegateBuilder;
  down(value: boolean): SwipeDelegateBuilder;
  downBind(expr: string): SwipeDelegateBuilder;
  enabled(value: boolean): SwipeDelegateBuilder;
  enabledBind(expr: string): SwipeDelegateBuilder;
  focus(value: boolean): SwipeDelegateBuilder;
  focusBind(expr: string): SwipeDelegateBuilder;
  focusPolicy(value: QmlEnumToken): SwipeDelegateBuilder;
  focusPolicyBind(expr: string): SwipeDelegateBuilder;
  focusReason(value: QmlEnumToken): SwipeDelegateBuilder;
  focusReasonBind(expr: string): SwipeDelegateBuilder;
  font(value: QmlFont): SwipeDelegateBuilder;
  fontBind(expr: string): SwipeDelegateBuilder;
  height(value: number): SwipeDelegateBuilder;
  heightBind(expr: string): SwipeDelegateBuilder;
  highlighted(value: boolean): SwipeDelegateBuilder;
  highlightedBind(expr: string): SwipeDelegateBuilder;
  horizontalPadding(value: number): SwipeDelegateBuilder;
  horizontalPaddingBind(expr: string): SwipeDelegateBuilder;
  hoverEnabled(value: boolean): SwipeDelegateBuilder;
  hoverEnabledBind(expr: string): SwipeDelegateBuilder;
  icon(value: QmlValue): SwipeDelegateBuilder;
  iconBind(expr: string): SwipeDelegateBuilder;
  implicitHeight(value: number): SwipeDelegateBuilder;
  implicitHeightBind(expr: string): SwipeDelegateBuilder;
  implicitWidth(value: number): SwipeDelegateBuilder;
  implicitWidthBind(expr: string): SwipeDelegateBuilder;
  indicator(value: ItemBuilder): SwipeDelegateBuilder;
  indicatorBind(expr: string): SwipeDelegateBuilder;
  leftInset(value: number): SwipeDelegateBuilder;
  leftInsetBind(expr: string): SwipeDelegateBuilder;
  leftPadding(value: number): SwipeDelegateBuilder;
  leftPaddingBind(expr: string): SwipeDelegateBuilder;
  locale(value: QmlValue): SwipeDelegateBuilder;
  localeBind(expr: string): SwipeDelegateBuilder;
  objectName(value: string): SwipeDelegateBuilder;
  objectNameBind(expr: string): SwipeDelegateBuilder;
  opacity(value: number): SwipeDelegateBuilder;
  opacityBind(expr: string): SwipeDelegateBuilder;
  padding(value: number): SwipeDelegateBuilder;
  paddingBind(expr: string): SwipeDelegateBuilder;
  palette(value: PaletteBuilder): SwipeDelegateBuilder;
  paletteBind(expr: string): SwipeDelegateBuilder;
  parent(value: ItemBuilder): SwipeDelegateBuilder;
  parentBind(expr: string): SwipeDelegateBuilder;
  rightInset(value: number): SwipeDelegateBuilder;
  rightInsetBind(expr: string): SwipeDelegateBuilder;
  rightPadding(value: number): SwipeDelegateBuilder;
  rightPaddingBind(expr: string): SwipeDelegateBuilder;
  rotation(value: number): SwipeDelegateBuilder;
  rotationBind(expr: string): SwipeDelegateBuilder;
  scale(value: number): SwipeDelegateBuilder;
  scaleBind(expr: string): SwipeDelegateBuilder;
  smooth(value: boolean): SwipeDelegateBuilder;
  smoothBind(expr: string): SwipeDelegateBuilder;
  spacing(value: number): SwipeDelegateBuilder;
  spacingBind(expr: string): SwipeDelegateBuilder;
  state(value: string): SwipeDelegateBuilder;
  stateBind(expr: string): SwipeDelegateBuilder;
  text(value: string): SwipeDelegateBuilder;
  textBind(expr: string): SwipeDelegateBuilder;
  topInset(value: number): SwipeDelegateBuilder;
  topInsetBind(expr: string): SwipeDelegateBuilder;
  topPadding(value: number): SwipeDelegateBuilder;
  topPaddingBind(expr: string): SwipeDelegateBuilder;
  transformOrigin(value: QmlEnumToken): SwipeDelegateBuilder;
  transformOriginBind(expr: string): SwipeDelegateBuilder;
  verticalPadding(value: number): SwipeDelegateBuilder;
  verticalPaddingBind(expr: string): SwipeDelegateBuilder;
  visible(value: boolean): SwipeDelegateBuilder;
  visibleBind(expr: string): SwipeDelegateBuilder;
  wheelEnabled(value: boolean): SwipeDelegateBuilder;
  wheelEnabledBind(expr: string): SwipeDelegateBuilder;
  width(value: number): SwipeDelegateBuilder;
  widthBind(expr: string): SwipeDelegateBuilder;
  x(value: number): SwipeDelegateBuilder;
  xBind(expr: string): SwipeDelegateBuilder;
  y(value: number): SwipeDelegateBuilder;
  yBind(expr: string): SwipeDelegateBuilder;
  z(value: number): SwipeDelegateBuilder;
  zBind(expr: string): SwipeDelegateBuilder;
  onActionChanged(body: string): SwipeDelegateBuilder;
  onActiveFocusChanged(body: string): SwipeDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): SwipeDelegateBuilder;
  onAntialiasingChanged(body: string): SwipeDelegateBuilder;
  onAutoExclusiveChanged(body: string): SwipeDelegateBuilder;
  onAutoRepeatChanged(body: string): SwipeDelegateBuilder;
  onAutoRepeatDelayChanged(body: string): SwipeDelegateBuilder;
  onAutoRepeatIntervalChanged(body: string): SwipeDelegateBuilder;
  onAvailableHeightChanged(body: string): SwipeDelegateBuilder;
  onAvailableWidthChanged(body: string): SwipeDelegateBuilder;
  onBackgroundChanged(body: string): SwipeDelegateBuilder;
  onBaselineOffsetChanged(body: string): SwipeDelegateBuilder;
  onBottomInsetChanged(body: string): SwipeDelegateBuilder;
  onBottomPaddingChanged(body: string): SwipeDelegateBuilder;
  onCanceled(body: string): SwipeDelegateBuilder;
  onCheckableChanged(body: string): SwipeDelegateBuilder;
  onCheckedChanged(body: string): SwipeDelegateBuilder;
  onChildrenChanged(body: string): SwipeDelegateBuilder;
  onChildrenRectChanged(body: string): SwipeDelegateBuilder;
  onClicked(body: string): SwipeDelegateBuilder;
  onClipChanged(body: string): SwipeDelegateBuilder;
  onContainmentMaskChanged(body: string): SwipeDelegateBuilder;
  onContentItemChanged(body: string): SwipeDelegateBuilder;
  onDisplayChanged(body: string): SwipeDelegateBuilder;
  onDoubleClicked(body: string): SwipeDelegateBuilder;
  onDownChanged(body: string): SwipeDelegateBuilder;
  onEnabledChanged(body: string): SwipeDelegateBuilder;
  onFocusChanged(body: string): SwipeDelegateBuilder;
  onFocusPolicyChanged(body: string): SwipeDelegateBuilder;
  onFocusReasonChanged(body: string): SwipeDelegateBuilder;
  onFontChanged(body: string): SwipeDelegateBuilder;
  onHeightChanged(body: string): SwipeDelegateBuilder;
  onHighlightedChanged(body: string): SwipeDelegateBuilder;
  onHorizontalPaddingChanged(body: string): SwipeDelegateBuilder;
  onHoverEnabledChanged(body: string): SwipeDelegateBuilder;
  onHoveredChanged(body: string): SwipeDelegateBuilder;
  onIconChanged(body: string): SwipeDelegateBuilder;
  onImplicitBackgroundHeightChanged(body: string): SwipeDelegateBuilder;
  onImplicitBackgroundWidthChanged(body: string): SwipeDelegateBuilder;
  onImplicitContentHeightChanged(body: string): SwipeDelegateBuilder;
  onImplicitContentWidthChanged(body: string): SwipeDelegateBuilder;
  onImplicitHeightChanged(body: string): SwipeDelegateBuilder;
  onImplicitIndicatorHeightChanged(body: string): SwipeDelegateBuilder;
  onImplicitIndicatorWidthChanged(body: string): SwipeDelegateBuilder;
  onImplicitWidthChanged(body: string): SwipeDelegateBuilder;
  onIndicatorChanged(body: string): SwipeDelegateBuilder;
  onLeftInsetChanged(body: string): SwipeDelegateBuilder;
  onLeftPaddingChanged(body: string): SwipeDelegateBuilder;
  onLocaleChanged(body: string): SwipeDelegateBuilder;
  onMirroredChanged(body: string): SwipeDelegateBuilder;
  onObjectNameChanged(body: string): SwipeDelegateBuilder;
  onOpacityChanged(body: string): SwipeDelegateBuilder;
  onPaddingChanged(body: string): SwipeDelegateBuilder;
  onPaletteChanged(body: string): SwipeDelegateBuilder;
  onPaletteCreated(body: string): SwipeDelegateBuilder;
  onParentChanged(body: string): SwipeDelegateBuilder;
  onPressAndHold(body: string): SwipeDelegateBuilder;
  onPressXChanged(body: string): SwipeDelegateBuilder;
  onPressYChanged(body: string): SwipeDelegateBuilder;
  onPressed(body: string): SwipeDelegateBuilder;
  onPressedChanged(body: string): SwipeDelegateBuilder;
  onReleased(body: string): SwipeDelegateBuilder;
  onRightInsetChanged(body: string): SwipeDelegateBuilder;
  onRightPaddingChanged(body: string): SwipeDelegateBuilder;
  onRotationChanged(body: string): SwipeDelegateBuilder;
  onScaleChanged(body: string): SwipeDelegateBuilder;
  onSmoothChanged(body: string): SwipeDelegateBuilder;
  onSpacingChanged(body: string): SwipeDelegateBuilder;
  onStateChanged(body: string): SwipeDelegateBuilder;
  onTextChanged(body: string): SwipeDelegateBuilder;
  onToggled(body: string): SwipeDelegateBuilder;
  onTopInsetChanged(body: string): SwipeDelegateBuilder;
  onTopPaddingChanged(body: string): SwipeDelegateBuilder;
  onTransformOriginChanged(body: string): SwipeDelegateBuilder;
  onVerticalPaddingChanged(body: string): SwipeDelegateBuilder;
  onVisibleChanged(body: string): SwipeDelegateBuilder;
  onVisibleChildrenChanged(body: string): SwipeDelegateBuilder;
  onVisualFocusChanged(body: string): SwipeDelegateBuilder;
  onWheelEnabledChanged(body: string): SwipeDelegateBuilder;
  onWidthChanged(body: string): SwipeDelegateBuilder;
  onWindowChanged(body: string): SwipeDelegateBuilder;
  onXChanged(body: string): SwipeDelegateBuilder;
  onYChanged(body: string): SwipeDelegateBuilder;
  onZChanged(body: string): SwipeDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwipeDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): SwipeDelegateBuilder;
  swipe(setup: (b: SwipeBuilder) => void): SwipeDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwipeDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwipeDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwipeDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwipeDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwipeDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwipeDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwipeDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwipeDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwipeDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwipeDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwipeDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwipeDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwipeDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwipeDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwipeDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwipeDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwipeDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwipeDelegateBuilder;
}

const SWIPEDELEGATE_META: TypeMetadata = {
  typeName: 'SwipeDelegate',
  properties: [
    { name: 'action', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoExclusive', hasValue: true, hasBinding: true },
    { name: 'autoRepeat', hasValue: true, hasBinding: true },
    { name: 'autoRepeatDelay', hasValue: true, hasBinding: true },
    { name: 'autoRepeatInterval', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'checkable', hasValue: true, hasBinding: true },
    { name: 'checked', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'display', hasValue: true, hasBinding: true },
    { name: 'down', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'highlighted', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'indicator', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
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
    { name: 'text', hasValue: true, hasBinding: true },
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
    { handlerName: 'onActionChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAutoExclusiveChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatDelayChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatIntervalChanged', paramCount: 0 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCanceled', paramCount: 0 },
    { handlerName: 'onCheckableChanged', paramCount: 0 },
    { handlerName: 'onCheckedChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 0 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onDisplayChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 0 },
    { handlerName: 'onDownChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlightedChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPressAndHold', paramCount: 0 },
    { handlerName: 'onPressXChanged', paramCount: 0 },
    { handlerName: 'onPressYChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onReleased', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onToggled', paramCount: 0 },
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
    {
      methodName: 'swipe',
      groupName: 'swipe',
      properties: [
        { name: 'behind', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'position', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'transition', hasValue: true, hasBinding: true },
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

export function SwipeDelegate(): SwipeDelegateBuilder {
  return createFluentBuilder(
    'SwipeDelegate',
    SWIPEDELEGATE_META,
  ) as unknown as SwipeDelegateBuilder;
}

export namespace SwipeDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('SwipeDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('SwipeDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('SwipeDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('SwipeDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SwipeDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SwipeDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SwipeDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SwipeDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SwipeDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SwipeDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SwipeDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Side {
    export const Left = createEnumToken('SwipeDelegate', 'Side', 'Left');
    export const Right = createEnumToken('SwipeDelegate', 'Side', 'Right');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SwipeDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SwipeDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SwipeDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SwipeDelegate', 'TransformOrigin', 'BottomRight');
  }
}
