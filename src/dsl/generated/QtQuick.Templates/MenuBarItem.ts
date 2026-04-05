// AUTO-GENERATED — DO NOT EDIT
// Type: MenuBarItem
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
import type { MenuBuilder } from './Menu.js';
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
export interface MenuBarItemBuilder {
  id(id: string): MenuBarItemBuilder;
  child(obj: QmlObjectBuilder): MenuBarItemBuilder;

  action(value: ActionBuilder): MenuBarItemBuilder;
  actionBind(expr: string): MenuBarItemBuilder;
  activeFocusOnTab(value: boolean): MenuBarItemBuilder;
  activeFocusOnTabBind(expr: string): MenuBarItemBuilder;
  antialiasing(value: boolean): MenuBarItemBuilder;
  antialiasingBind(expr: string): MenuBarItemBuilder;
  autoExclusive(value: boolean): MenuBarItemBuilder;
  autoExclusiveBind(expr: string): MenuBarItemBuilder;
  autoRepeat(value: boolean): MenuBarItemBuilder;
  autoRepeatBind(expr: string): MenuBarItemBuilder;
  autoRepeatDelay(value: number): MenuBarItemBuilder;
  autoRepeatDelayBind(expr: string): MenuBarItemBuilder;
  autoRepeatInterval(value: number): MenuBarItemBuilder;
  autoRepeatIntervalBind(expr: string): MenuBarItemBuilder;
  background(value: ItemBuilder): MenuBarItemBuilder;
  backgroundBind(expr: string): MenuBarItemBuilder;
  baselineOffset(value: number): MenuBarItemBuilder;
  baselineOffsetBind(expr: string): MenuBarItemBuilder;
  bottomInset(value: number): MenuBarItemBuilder;
  bottomInsetBind(expr: string): MenuBarItemBuilder;
  bottomPadding(value: number): MenuBarItemBuilder;
  bottomPaddingBind(expr: string): MenuBarItemBuilder;
  checkable(value: boolean): MenuBarItemBuilder;
  checkableBind(expr: string): MenuBarItemBuilder;
  checked(value: boolean): MenuBarItemBuilder;
  checkedBind(expr: string): MenuBarItemBuilder;
  clip(value: boolean): MenuBarItemBuilder;
  clipBind(expr: string): MenuBarItemBuilder;
  containmentMask(value: QtObjectBuilder): MenuBarItemBuilder;
  containmentMaskBind(expr: string): MenuBarItemBuilder;
  contentItem(value: ItemBuilder): MenuBarItemBuilder;
  contentItemBind(expr: string): MenuBarItemBuilder;
  display(value: QmlEnumToken): MenuBarItemBuilder;
  displayBind(expr: string): MenuBarItemBuilder;
  down(value: boolean): MenuBarItemBuilder;
  downBind(expr: string): MenuBarItemBuilder;
  enabled(value: boolean): MenuBarItemBuilder;
  enabledBind(expr: string): MenuBarItemBuilder;
  focus(value: boolean): MenuBarItemBuilder;
  focusBind(expr: string): MenuBarItemBuilder;
  focusPolicy(value: QmlEnumToken): MenuBarItemBuilder;
  focusPolicyBind(expr: string): MenuBarItemBuilder;
  focusReason(value: QmlEnumToken): MenuBarItemBuilder;
  focusReasonBind(expr: string): MenuBarItemBuilder;
  font(value: QmlFont): MenuBarItemBuilder;
  fontBind(expr: string): MenuBarItemBuilder;
  height(value: number): MenuBarItemBuilder;
  heightBind(expr: string): MenuBarItemBuilder;
  highlighted(value: boolean): MenuBarItemBuilder;
  highlightedBind(expr: string): MenuBarItemBuilder;
  horizontalPadding(value: number): MenuBarItemBuilder;
  horizontalPaddingBind(expr: string): MenuBarItemBuilder;
  hoverEnabled(value: boolean): MenuBarItemBuilder;
  hoverEnabledBind(expr: string): MenuBarItemBuilder;
  icon(value: QmlValue): MenuBarItemBuilder;
  iconBind(expr: string): MenuBarItemBuilder;
  implicitHeight(value: number): MenuBarItemBuilder;
  implicitHeightBind(expr: string): MenuBarItemBuilder;
  implicitWidth(value: number): MenuBarItemBuilder;
  implicitWidthBind(expr: string): MenuBarItemBuilder;
  indicator(value: ItemBuilder): MenuBarItemBuilder;
  indicatorBind(expr: string): MenuBarItemBuilder;
  leftInset(value: number): MenuBarItemBuilder;
  leftInsetBind(expr: string): MenuBarItemBuilder;
  leftPadding(value: number): MenuBarItemBuilder;
  leftPaddingBind(expr: string): MenuBarItemBuilder;
  locale(value: QmlValue): MenuBarItemBuilder;
  localeBind(expr: string): MenuBarItemBuilder;
  menu(value: MenuBuilder): MenuBarItemBuilder;
  menuBind(expr: string): MenuBarItemBuilder;
  objectName(value: string): MenuBarItemBuilder;
  objectNameBind(expr: string): MenuBarItemBuilder;
  opacity(value: number): MenuBarItemBuilder;
  opacityBind(expr: string): MenuBarItemBuilder;
  padding(value: number): MenuBarItemBuilder;
  paddingBind(expr: string): MenuBarItemBuilder;
  palette(value: PaletteBuilder): MenuBarItemBuilder;
  paletteBind(expr: string): MenuBarItemBuilder;
  parent(value: ItemBuilder): MenuBarItemBuilder;
  parentBind(expr: string): MenuBarItemBuilder;
  rightInset(value: number): MenuBarItemBuilder;
  rightInsetBind(expr: string): MenuBarItemBuilder;
  rightPadding(value: number): MenuBarItemBuilder;
  rightPaddingBind(expr: string): MenuBarItemBuilder;
  rotation(value: number): MenuBarItemBuilder;
  rotationBind(expr: string): MenuBarItemBuilder;
  scale(value: number): MenuBarItemBuilder;
  scaleBind(expr: string): MenuBarItemBuilder;
  smooth(value: boolean): MenuBarItemBuilder;
  smoothBind(expr: string): MenuBarItemBuilder;
  spacing(value: number): MenuBarItemBuilder;
  spacingBind(expr: string): MenuBarItemBuilder;
  state(value: string): MenuBarItemBuilder;
  stateBind(expr: string): MenuBarItemBuilder;
  text(value: string): MenuBarItemBuilder;
  textBind(expr: string): MenuBarItemBuilder;
  topInset(value: number): MenuBarItemBuilder;
  topInsetBind(expr: string): MenuBarItemBuilder;
  topPadding(value: number): MenuBarItemBuilder;
  topPaddingBind(expr: string): MenuBarItemBuilder;
  transformOrigin(value: QmlEnumToken): MenuBarItemBuilder;
  transformOriginBind(expr: string): MenuBarItemBuilder;
  verticalPadding(value: number): MenuBarItemBuilder;
  verticalPaddingBind(expr: string): MenuBarItemBuilder;
  visible(value: boolean): MenuBarItemBuilder;
  visibleBind(expr: string): MenuBarItemBuilder;
  wheelEnabled(value: boolean): MenuBarItemBuilder;
  wheelEnabledBind(expr: string): MenuBarItemBuilder;
  width(value: number): MenuBarItemBuilder;
  widthBind(expr: string): MenuBarItemBuilder;
  x(value: number): MenuBarItemBuilder;
  xBind(expr: string): MenuBarItemBuilder;
  y(value: number): MenuBarItemBuilder;
  yBind(expr: string): MenuBarItemBuilder;
  z(value: number): MenuBarItemBuilder;
  zBind(expr: string): MenuBarItemBuilder;
  onActionChanged(body: string): MenuBarItemBuilder;
  onActiveFocusChanged(body: string): MenuBarItemBuilder;
  onActiveFocusOnTabChanged(body: string): MenuBarItemBuilder;
  onAntialiasingChanged(body: string): MenuBarItemBuilder;
  onAutoExclusiveChanged(body: string): MenuBarItemBuilder;
  onAutoRepeatChanged(body: string): MenuBarItemBuilder;
  onAutoRepeatDelayChanged(body: string): MenuBarItemBuilder;
  onAutoRepeatIntervalChanged(body: string): MenuBarItemBuilder;
  onAvailableHeightChanged(body: string): MenuBarItemBuilder;
  onAvailableWidthChanged(body: string): MenuBarItemBuilder;
  onBackgroundChanged(body: string): MenuBarItemBuilder;
  onBaselineOffsetChanged(body: string): MenuBarItemBuilder;
  onBottomInsetChanged(body: string): MenuBarItemBuilder;
  onBottomPaddingChanged(body: string): MenuBarItemBuilder;
  onCanceled(body: string): MenuBarItemBuilder;
  onCheckableChanged(body: string): MenuBarItemBuilder;
  onCheckedChanged(body: string): MenuBarItemBuilder;
  onChildrenChanged(body: string): MenuBarItemBuilder;
  onChildrenRectChanged(body: string): MenuBarItemBuilder;
  onClicked(body: string): MenuBarItemBuilder;
  onClipChanged(body: string): MenuBarItemBuilder;
  onContainmentMaskChanged(body: string): MenuBarItemBuilder;
  onContentItemChanged(body: string): MenuBarItemBuilder;
  onDisplayChanged(body: string): MenuBarItemBuilder;
  onDoubleClicked(body: string): MenuBarItemBuilder;
  onDownChanged(body: string): MenuBarItemBuilder;
  onEnabledChanged(body: string): MenuBarItemBuilder;
  onFocusChanged(body: string): MenuBarItemBuilder;
  onFocusPolicyChanged(body: string): MenuBarItemBuilder;
  onFocusReasonChanged(body: string): MenuBarItemBuilder;
  onFontChanged(body: string): MenuBarItemBuilder;
  onHeightChanged(body: string): MenuBarItemBuilder;
  onHighlightedChanged(body: string): MenuBarItemBuilder;
  onHorizontalPaddingChanged(body: string): MenuBarItemBuilder;
  onHoverEnabledChanged(body: string): MenuBarItemBuilder;
  onHoveredChanged(body: string): MenuBarItemBuilder;
  onIconChanged(body: string): MenuBarItemBuilder;
  onImplicitBackgroundHeightChanged(body: string): MenuBarItemBuilder;
  onImplicitBackgroundWidthChanged(body: string): MenuBarItemBuilder;
  onImplicitContentHeightChanged(body: string): MenuBarItemBuilder;
  onImplicitContentWidthChanged(body: string): MenuBarItemBuilder;
  onImplicitHeightChanged(body: string): MenuBarItemBuilder;
  onImplicitIndicatorHeightChanged(body: string): MenuBarItemBuilder;
  onImplicitIndicatorWidthChanged(body: string): MenuBarItemBuilder;
  onImplicitWidthChanged(body: string): MenuBarItemBuilder;
  onIndicatorChanged(body: string): MenuBarItemBuilder;
  onLeftInsetChanged(body: string): MenuBarItemBuilder;
  onLeftPaddingChanged(body: string): MenuBarItemBuilder;
  onLocaleChanged(body: string): MenuBarItemBuilder;
  onMenuBarChanged(body: string): MenuBarItemBuilder;
  onMenuChanged(body: string): MenuBarItemBuilder;
  onMirroredChanged(body: string): MenuBarItemBuilder;
  onObjectNameChanged(body: string): MenuBarItemBuilder;
  onOpacityChanged(body: string): MenuBarItemBuilder;
  onPaddingChanged(body: string): MenuBarItemBuilder;
  onPaletteChanged(body: string): MenuBarItemBuilder;
  onPaletteCreated(body: string): MenuBarItemBuilder;
  onParentChanged(body: string): MenuBarItemBuilder;
  onPressAndHold(body: string): MenuBarItemBuilder;
  onPressXChanged(body: string): MenuBarItemBuilder;
  onPressYChanged(body: string): MenuBarItemBuilder;
  onPressed(body: string): MenuBarItemBuilder;
  onPressedChanged(body: string): MenuBarItemBuilder;
  onReleased(body: string): MenuBarItemBuilder;
  onRightInsetChanged(body: string): MenuBarItemBuilder;
  onRightPaddingChanged(body: string): MenuBarItemBuilder;
  onRotationChanged(body: string): MenuBarItemBuilder;
  onScaleChanged(body: string): MenuBarItemBuilder;
  onSmoothChanged(body: string): MenuBarItemBuilder;
  onSpacingChanged(body: string): MenuBarItemBuilder;
  onStateChanged(body: string): MenuBarItemBuilder;
  onTextChanged(body: string): MenuBarItemBuilder;
  onToggled(body: string): MenuBarItemBuilder;
  onTopInsetChanged(body: string): MenuBarItemBuilder;
  onTopPaddingChanged(body: string): MenuBarItemBuilder;
  onTransformOriginChanged(body: string): MenuBarItemBuilder;
  onTriggered(body: string): MenuBarItemBuilder;
  onVerticalPaddingChanged(body: string): MenuBarItemBuilder;
  onVisibleChanged(body: string): MenuBarItemBuilder;
  onVisibleChildrenChanged(body: string): MenuBarItemBuilder;
  onVisualFocusChanged(body: string): MenuBarItemBuilder;
  onWheelEnabledChanged(body: string): MenuBarItemBuilder;
  onWidthChanged(body: string): MenuBarItemBuilder;
  onWindowChanged(body: string): MenuBarItemBuilder;
  onXChanged(body: string): MenuBarItemBuilder;
  onYChanged(body: string): MenuBarItemBuilder;
  onZChanged(body: string): MenuBarItemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuBarItemBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuBarItemBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuBarItemBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuBarItemBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuBarItemBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuBarItemBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuBarItemBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuBarItemBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuBarItemBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuBarItemBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuBarItemBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuBarItemBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuBarItemBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuBarItemBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuBarItemBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuBarItemBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuBarItemBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuBarItemBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuBarItemBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuBarItemBuilder;
}

const MENUBARITEM_META: TypeMetadata = {
  typeName: 'MenuBarItem',
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
    { name: 'menu', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMenuBarChanged', paramCount: 0 },
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
    { handlerName: 'onTextChanged', paramCount: 0 },
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

export function MenuBarItem(): MenuBarItemBuilder {
  return createFluentBuilder('MenuBarItem', MENUBARITEM_META) as unknown as MenuBarItemBuilder;
}

export namespace MenuBarItem {
  export namespace Display {
    export const IconOnly = createEnumToken('MenuBarItem', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('MenuBarItem', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('MenuBarItem', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('MenuBarItem', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MenuBarItem',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MenuBarItem',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MenuBarItem', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuBarItem', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuBarItem', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuBarItem', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MenuBarItem',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MenuBarItem', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuBarItem', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuBarItem', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuBarItem', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuBarItem', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuBarItem', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuBarItem', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuBarItem', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuBarItem', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuBarItem', 'TransformOrigin', 'BottomRight');
  }
}
