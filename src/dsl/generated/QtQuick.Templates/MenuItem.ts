// AUTO-GENERATED — DO NOT EDIT
// Type: MenuItem
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
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
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface MenuItemBuilder {
  id(id: string): MenuItemBuilder;
  child(obj: QmlObjectBuilder): MenuItemBuilder;

  action(value: ActionBuilder): MenuItemBuilder;
  actionBind(expr: string): MenuItemBuilder;
  activeFocusOnTab(value: boolean): MenuItemBuilder;
  activeFocusOnTabBind(expr: string): MenuItemBuilder;
  antialiasing(value: boolean): MenuItemBuilder;
  antialiasingBind(expr: string): MenuItemBuilder;
  arrow(value: ItemBuilder): MenuItemBuilder;
  arrowBind(expr: string): MenuItemBuilder;
  autoExclusive(value: boolean): MenuItemBuilder;
  autoExclusiveBind(expr: string): MenuItemBuilder;
  autoRepeat(value: boolean): MenuItemBuilder;
  autoRepeatBind(expr: string): MenuItemBuilder;
  autoRepeatDelay(value: number): MenuItemBuilder;
  autoRepeatDelayBind(expr: string): MenuItemBuilder;
  autoRepeatInterval(value: number): MenuItemBuilder;
  autoRepeatIntervalBind(expr: string): MenuItemBuilder;
  background(value: ItemBuilder): MenuItemBuilder;
  backgroundBind(expr: string): MenuItemBuilder;
  baselineOffset(value: number): MenuItemBuilder;
  baselineOffsetBind(expr: string): MenuItemBuilder;
  bottomInset(value: number): MenuItemBuilder;
  bottomInsetBind(expr: string): MenuItemBuilder;
  bottomPadding(value: number): MenuItemBuilder;
  bottomPaddingBind(expr: string): MenuItemBuilder;
  checkable(value: boolean): MenuItemBuilder;
  checkableBind(expr: string): MenuItemBuilder;
  checked(value: boolean): MenuItemBuilder;
  checkedBind(expr: string): MenuItemBuilder;
  clip(value: boolean): MenuItemBuilder;
  clipBind(expr: string): MenuItemBuilder;
  containmentMask(value: QtObjectBuilder): MenuItemBuilder;
  containmentMaskBind(expr: string): MenuItemBuilder;
  contentItem(value: ItemBuilder): MenuItemBuilder;
  contentItemBind(expr: string): MenuItemBuilder;
  display(value: QmlEnumToken): MenuItemBuilder;
  displayBind(expr: string): MenuItemBuilder;
  down(value: boolean): MenuItemBuilder;
  downBind(expr: string): MenuItemBuilder;
  enabled(value: boolean): MenuItemBuilder;
  enabledBind(expr: string): MenuItemBuilder;
  focus(value: boolean): MenuItemBuilder;
  focusBind(expr: string): MenuItemBuilder;
  focusPolicy(value: QmlEnumToken): MenuItemBuilder;
  focusPolicyBind(expr: string): MenuItemBuilder;
  focusReason(value: QmlEnumToken): MenuItemBuilder;
  focusReasonBind(expr: string): MenuItemBuilder;
  font(value: QmlFont): MenuItemBuilder;
  fontBind(expr: string): MenuItemBuilder;
  height(value: number): MenuItemBuilder;
  heightBind(expr: string): MenuItemBuilder;
  highlighted(value: boolean): MenuItemBuilder;
  highlightedBind(expr: string): MenuItemBuilder;
  horizontalPadding(value: number): MenuItemBuilder;
  horizontalPaddingBind(expr: string): MenuItemBuilder;
  hoverEnabled(value: boolean): MenuItemBuilder;
  hoverEnabledBind(expr: string): MenuItemBuilder;
  icon(value: QmlValue): MenuItemBuilder;
  iconBind(expr: string): MenuItemBuilder;
  implicitHeight(value: number): MenuItemBuilder;
  implicitHeightBind(expr: string): MenuItemBuilder;
  implicitTextPadding(value: number): MenuItemBuilder;
  implicitTextPaddingBind(expr: string): MenuItemBuilder;
  implicitWidth(value: number): MenuItemBuilder;
  implicitWidthBind(expr: string): MenuItemBuilder;
  indicator(value: ItemBuilder): MenuItemBuilder;
  indicatorBind(expr: string): MenuItemBuilder;
  leftInset(value: number): MenuItemBuilder;
  leftInsetBind(expr: string): MenuItemBuilder;
  leftPadding(value: number): MenuItemBuilder;
  leftPaddingBind(expr: string): MenuItemBuilder;
  locale(value: string): MenuItemBuilder;
  localeBind(expr: string): MenuItemBuilder;
  objectName(value: string): MenuItemBuilder;
  objectNameBind(expr: string): MenuItemBuilder;
  opacity(value: number): MenuItemBuilder;
  opacityBind(expr: string): MenuItemBuilder;
  padding(value: number): MenuItemBuilder;
  paddingBind(expr: string): MenuItemBuilder;
  palette(value: PaletteBuilder): MenuItemBuilder;
  paletteBind(expr: string): MenuItemBuilder;
  parent(value: ItemBuilder): MenuItemBuilder;
  parentBind(expr: string): MenuItemBuilder;
  rightInset(value: number): MenuItemBuilder;
  rightInsetBind(expr: string): MenuItemBuilder;
  rightPadding(value: number): MenuItemBuilder;
  rightPaddingBind(expr: string): MenuItemBuilder;
  rotation(value: number): MenuItemBuilder;
  rotationBind(expr: string): MenuItemBuilder;
  scale(value: number): MenuItemBuilder;
  scaleBind(expr: string): MenuItemBuilder;
  smooth(value: boolean): MenuItemBuilder;
  smoothBind(expr: string): MenuItemBuilder;
  spacing(value: number): MenuItemBuilder;
  spacingBind(expr: string): MenuItemBuilder;
  state(value: string): MenuItemBuilder;
  stateBind(expr: string): MenuItemBuilder;
  text(value: string): MenuItemBuilder;
  textBind(expr: string): MenuItemBuilder;
  topInset(value: number): MenuItemBuilder;
  topInsetBind(expr: string): MenuItemBuilder;
  topPadding(value: number): MenuItemBuilder;
  topPaddingBind(expr: string): MenuItemBuilder;
  transformOrigin(value: QmlEnumToken): MenuItemBuilder;
  transformOriginBind(expr: string): MenuItemBuilder;
  verticalPadding(value: number): MenuItemBuilder;
  verticalPaddingBind(expr: string): MenuItemBuilder;
  visible(value: boolean): MenuItemBuilder;
  visibleBind(expr: string): MenuItemBuilder;
  wheelEnabled(value: boolean): MenuItemBuilder;
  wheelEnabledBind(expr: string): MenuItemBuilder;
  width(value: number): MenuItemBuilder;
  widthBind(expr: string): MenuItemBuilder;
  x(value: number): MenuItemBuilder;
  xBind(expr: string): MenuItemBuilder;
  y(value: number): MenuItemBuilder;
  yBind(expr: string): MenuItemBuilder;
  z(value: number): MenuItemBuilder;
  zBind(expr: string): MenuItemBuilder;
  onActionChanged(body: string): MenuItemBuilder;
  onActiveFocusChanged(body: string): MenuItemBuilder;
  onActiveFocusOnTabChanged(body: string): MenuItemBuilder;
  onAntialiasingChanged(body: string): MenuItemBuilder;
  onArrowChanged(body: string): MenuItemBuilder;
  onAutoExclusiveChanged(body: string): MenuItemBuilder;
  onAutoRepeatChanged(body: string): MenuItemBuilder;
  onAutoRepeatDelayChanged(body: string): MenuItemBuilder;
  onAutoRepeatIntervalChanged(body: string): MenuItemBuilder;
  onAvailableHeightChanged(body: string): MenuItemBuilder;
  onAvailableWidthChanged(body: string): MenuItemBuilder;
  onBackgroundChanged(body: string): MenuItemBuilder;
  onBaselineOffsetChanged(body: string): MenuItemBuilder;
  onBottomInsetChanged(body: string): MenuItemBuilder;
  onBottomPaddingChanged(body: string): MenuItemBuilder;
  onCanceled(body: string): MenuItemBuilder;
  onCheckableChanged(body: string): MenuItemBuilder;
  onCheckedChanged(body: string): MenuItemBuilder;
  onChildrenChanged(body: string): MenuItemBuilder;
  onChildrenRectChanged(body: string): MenuItemBuilder;
  onClicked(body: string): MenuItemBuilder;
  onClipChanged(body: string): MenuItemBuilder;
  onContainmentMaskChanged(body: string): MenuItemBuilder;
  onContentItemChanged(body: string): MenuItemBuilder;
  onDisplayChanged(body: string): MenuItemBuilder;
  onDoubleClicked(body: string): MenuItemBuilder;
  onDownChanged(body: string): MenuItemBuilder;
  onEnabledChanged(body: string): MenuItemBuilder;
  onFocusChanged(body: string): MenuItemBuilder;
  onFocusPolicyChanged(body: string): MenuItemBuilder;
  onFocusReasonChanged(body: string): MenuItemBuilder;
  onFontChanged(body: string): MenuItemBuilder;
  onHeightChanged(body: string): MenuItemBuilder;
  onHighlightedChanged(body: string): MenuItemBuilder;
  onHorizontalPaddingChanged(body: string): MenuItemBuilder;
  onHoverEnabledChanged(body: string): MenuItemBuilder;
  onHoveredChanged(body: string): MenuItemBuilder;
  onIconChanged(body: string): MenuItemBuilder;
  onImplicitBackgroundHeightChanged(body: string): MenuItemBuilder;
  onImplicitBackgroundWidthChanged(body: string): MenuItemBuilder;
  onImplicitContentHeightChanged(body: string): MenuItemBuilder;
  onImplicitContentWidthChanged(body: string): MenuItemBuilder;
  onImplicitHeightChanged(body: string): MenuItemBuilder;
  onImplicitIndicatorHeightChanged(body: string): MenuItemBuilder;
  onImplicitIndicatorWidthChanged(body: string): MenuItemBuilder;
  onImplicitTextPaddingChanged(body: string): MenuItemBuilder;
  onImplicitWidthChanged(body: string): MenuItemBuilder;
  onIndicatorChanged(body: string): MenuItemBuilder;
  onLeftInsetChanged(body: string): MenuItemBuilder;
  onLeftPaddingChanged(body: string): MenuItemBuilder;
  onLocaleChanged(body: string): MenuItemBuilder;
  onMenuChanged(body: string): MenuItemBuilder;
  onMirroredChanged(body: string): MenuItemBuilder;
  onObjectNameChanged(body: string): MenuItemBuilder;
  onOpacityChanged(body: string): MenuItemBuilder;
  onPaddingChanged(body: string): MenuItemBuilder;
  onPaletteChanged(body: string): MenuItemBuilder;
  onPaletteCreated(body: string): MenuItemBuilder;
  onParentChanged(body: string): MenuItemBuilder;
  onPressAndHold(body: string): MenuItemBuilder;
  onPressXChanged(body: string): MenuItemBuilder;
  onPressYChanged(body: string): MenuItemBuilder;
  onPressed(body: string): MenuItemBuilder;
  onPressedChanged(body: string): MenuItemBuilder;
  onReleased(body: string): MenuItemBuilder;
  onRightInsetChanged(body: string): MenuItemBuilder;
  onRightPaddingChanged(body: string): MenuItemBuilder;
  onRotationChanged(body: string): MenuItemBuilder;
  onScaleChanged(body: string): MenuItemBuilder;
  onSmoothChanged(body: string): MenuItemBuilder;
  onSpacingChanged(body: string): MenuItemBuilder;
  onStateChanged(body: string): MenuItemBuilder;
  onSubMenuChanged(body: string): MenuItemBuilder;
  onTextChanged(body: string): MenuItemBuilder;
  onTextPaddingChanged(body: string): MenuItemBuilder;
  onToggled(body: string): MenuItemBuilder;
  onTopInsetChanged(body: string): MenuItemBuilder;
  onTopPaddingChanged(body: string): MenuItemBuilder;
  onTransformOriginChanged(body: string): MenuItemBuilder;
  onTriggered(body: string): MenuItemBuilder;
  onVerticalPaddingChanged(body: string): MenuItemBuilder;
  onVisibleChanged(body: string): MenuItemBuilder;
  onVisibleChildrenChanged(body: string): MenuItemBuilder;
  onVisualFocusChanged(body: string): MenuItemBuilder;
  onWheelEnabledChanged(body: string): MenuItemBuilder;
  onWidthChanged(body: string): MenuItemBuilder;
  onWindowChanged(body: string): MenuItemBuilder;
  onXChanged(body: string): MenuItemBuilder;
  onYChanged(body: string): MenuItemBuilder;
  onZChanged(body: string): MenuItemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuItemBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuItemBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuItemBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuItemBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuItemBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuItemBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuItemBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuItemBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuItemBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuItemBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuItemBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuItemBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuItemBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuItemBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuItemBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuItemBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuItemBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuItemBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuItemBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuItemBuilder;
}

const MENUITEM_META: TypeMetadata = {
  typeName: 'MenuItem',
  properties: [
    { name: 'action', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'arrow', hasValue: true, hasBinding: true },
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
    { name: 'implicitTextPadding', hasValue: true, hasBinding: true },
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
    { handlerName: 'onArrowChanged', paramCount: 0 },
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
    { handlerName: 'onImplicitTextPaddingChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMenuChanged', paramCount: 0 },
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
    { handlerName: 'onSubMenuChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTextPaddingChanged', paramCount: 0 },
    { handlerName: 'onToggled', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onTriggered', paramCount: 0 },
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function MenuItem(): MenuItemBuilder {
  return createFluentBuilder('MenuItem', MENUITEM_META) as unknown as MenuItemBuilder;
}

export namespace MenuItem {
  export namespace Display {
    export const IconOnly = createEnumToken('MenuItem', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('MenuItem', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('MenuItem', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('MenuItem', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MenuItem', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MenuItem', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MenuItem', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuItem', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuItem', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuItem', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MenuItem', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MenuItem', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MenuItem', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MenuItem', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MenuItem', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuItem', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuItem', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuItem', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuItem', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuItem', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuItem', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuItem', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuItem', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuItem', 'TransformOrigin', 'BottomRight');
  }
}
