// AUTO-GENERATED — DO NOT EDIT
// Type: RoundButton
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
export interface RoundButtonBuilder {
  id(id: string): RoundButtonBuilder;
  child(obj: QmlObjectBuilder): RoundButtonBuilder;

  action(value: ActionBuilder): RoundButtonBuilder;
  actionBind(expr: string): RoundButtonBuilder;
  activeFocusOnTab(value: boolean): RoundButtonBuilder;
  activeFocusOnTabBind(expr: string): RoundButtonBuilder;
  antialiasing(value: boolean): RoundButtonBuilder;
  antialiasingBind(expr: string): RoundButtonBuilder;
  autoExclusive(value: boolean): RoundButtonBuilder;
  autoExclusiveBind(expr: string): RoundButtonBuilder;
  autoRepeat(value: boolean): RoundButtonBuilder;
  autoRepeatBind(expr: string): RoundButtonBuilder;
  autoRepeatDelay(value: number): RoundButtonBuilder;
  autoRepeatDelayBind(expr: string): RoundButtonBuilder;
  autoRepeatInterval(value: number): RoundButtonBuilder;
  autoRepeatIntervalBind(expr: string): RoundButtonBuilder;
  background(value: ItemBuilder): RoundButtonBuilder;
  backgroundBind(expr: string): RoundButtonBuilder;
  baselineOffset(value: number): RoundButtonBuilder;
  baselineOffsetBind(expr: string): RoundButtonBuilder;
  bottomInset(value: number): RoundButtonBuilder;
  bottomInsetBind(expr: string): RoundButtonBuilder;
  bottomPadding(value: number): RoundButtonBuilder;
  bottomPaddingBind(expr: string): RoundButtonBuilder;
  checkable(value: boolean): RoundButtonBuilder;
  checkableBind(expr: string): RoundButtonBuilder;
  checked(value: boolean): RoundButtonBuilder;
  checkedBind(expr: string): RoundButtonBuilder;
  clip(value: boolean): RoundButtonBuilder;
  clipBind(expr: string): RoundButtonBuilder;
  containmentMask(value: QtObjectBuilder): RoundButtonBuilder;
  containmentMaskBind(expr: string): RoundButtonBuilder;
  contentItem(value: ItemBuilder): RoundButtonBuilder;
  contentItemBind(expr: string): RoundButtonBuilder;
  display(value: QmlEnumToken): RoundButtonBuilder;
  displayBind(expr: string): RoundButtonBuilder;
  down(value: boolean): RoundButtonBuilder;
  downBind(expr: string): RoundButtonBuilder;
  enabled(value: boolean): RoundButtonBuilder;
  enabledBind(expr: string): RoundButtonBuilder;
  flat(value: boolean): RoundButtonBuilder;
  flatBind(expr: string): RoundButtonBuilder;
  focus(value: boolean): RoundButtonBuilder;
  focusBind(expr: string): RoundButtonBuilder;
  focusPolicy(value: QmlEnumToken): RoundButtonBuilder;
  focusPolicyBind(expr: string): RoundButtonBuilder;
  focusReason(value: QmlEnumToken): RoundButtonBuilder;
  focusReasonBind(expr: string): RoundButtonBuilder;
  font(value: QmlFont): RoundButtonBuilder;
  fontBind(expr: string): RoundButtonBuilder;
  height(value: number): RoundButtonBuilder;
  heightBind(expr: string): RoundButtonBuilder;
  highlighted(value: boolean): RoundButtonBuilder;
  highlightedBind(expr: string): RoundButtonBuilder;
  horizontalPadding(value: number): RoundButtonBuilder;
  horizontalPaddingBind(expr: string): RoundButtonBuilder;
  hoverEnabled(value: boolean): RoundButtonBuilder;
  hoverEnabledBind(expr: string): RoundButtonBuilder;
  icon(value: QmlValue): RoundButtonBuilder;
  iconBind(expr: string): RoundButtonBuilder;
  implicitHeight(value: number): RoundButtonBuilder;
  implicitHeightBind(expr: string): RoundButtonBuilder;
  implicitWidth(value: number): RoundButtonBuilder;
  implicitWidthBind(expr: string): RoundButtonBuilder;
  indicator(value: ItemBuilder): RoundButtonBuilder;
  indicatorBind(expr: string): RoundButtonBuilder;
  leftInset(value: number): RoundButtonBuilder;
  leftInsetBind(expr: string): RoundButtonBuilder;
  leftPadding(value: number): RoundButtonBuilder;
  leftPaddingBind(expr: string): RoundButtonBuilder;
  locale(value: string): RoundButtonBuilder;
  localeBind(expr: string): RoundButtonBuilder;
  objectName(value: string): RoundButtonBuilder;
  objectNameBind(expr: string): RoundButtonBuilder;
  opacity(value: number): RoundButtonBuilder;
  opacityBind(expr: string): RoundButtonBuilder;
  padding(value: number): RoundButtonBuilder;
  paddingBind(expr: string): RoundButtonBuilder;
  palette(value: PaletteBuilder): RoundButtonBuilder;
  paletteBind(expr: string): RoundButtonBuilder;
  parent(value: ItemBuilder): RoundButtonBuilder;
  parentBind(expr: string): RoundButtonBuilder;
  radius(value: number): RoundButtonBuilder;
  radiusBind(expr: string): RoundButtonBuilder;
  rightInset(value: number): RoundButtonBuilder;
  rightInsetBind(expr: string): RoundButtonBuilder;
  rightPadding(value: number): RoundButtonBuilder;
  rightPaddingBind(expr: string): RoundButtonBuilder;
  rotation(value: number): RoundButtonBuilder;
  rotationBind(expr: string): RoundButtonBuilder;
  scale(value: number): RoundButtonBuilder;
  scaleBind(expr: string): RoundButtonBuilder;
  smooth(value: boolean): RoundButtonBuilder;
  smoothBind(expr: string): RoundButtonBuilder;
  spacing(value: number): RoundButtonBuilder;
  spacingBind(expr: string): RoundButtonBuilder;
  state(value: string): RoundButtonBuilder;
  stateBind(expr: string): RoundButtonBuilder;
  text(value: string): RoundButtonBuilder;
  textBind(expr: string): RoundButtonBuilder;
  topInset(value: number): RoundButtonBuilder;
  topInsetBind(expr: string): RoundButtonBuilder;
  topPadding(value: number): RoundButtonBuilder;
  topPaddingBind(expr: string): RoundButtonBuilder;
  transformOrigin(value: QmlEnumToken): RoundButtonBuilder;
  transformOriginBind(expr: string): RoundButtonBuilder;
  verticalPadding(value: number): RoundButtonBuilder;
  verticalPaddingBind(expr: string): RoundButtonBuilder;
  visible(value: boolean): RoundButtonBuilder;
  visibleBind(expr: string): RoundButtonBuilder;
  wheelEnabled(value: boolean): RoundButtonBuilder;
  wheelEnabledBind(expr: string): RoundButtonBuilder;
  width(value: number): RoundButtonBuilder;
  widthBind(expr: string): RoundButtonBuilder;
  x(value: number): RoundButtonBuilder;
  xBind(expr: string): RoundButtonBuilder;
  y(value: number): RoundButtonBuilder;
  yBind(expr: string): RoundButtonBuilder;
  z(value: number): RoundButtonBuilder;
  zBind(expr: string): RoundButtonBuilder;
  onActionChanged(body: string): RoundButtonBuilder;
  onActiveFocusChanged(body: string): RoundButtonBuilder;
  onActiveFocusOnTabChanged(body: string): RoundButtonBuilder;
  onAntialiasingChanged(body: string): RoundButtonBuilder;
  onAutoExclusiveChanged(body: string): RoundButtonBuilder;
  onAutoRepeatChanged(body: string): RoundButtonBuilder;
  onAutoRepeatDelayChanged(body: string): RoundButtonBuilder;
  onAutoRepeatIntervalChanged(body: string): RoundButtonBuilder;
  onAvailableHeightChanged(body: string): RoundButtonBuilder;
  onAvailableWidthChanged(body: string): RoundButtonBuilder;
  onBackgroundChanged(body: string): RoundButtonBuilder;
  onBaselineOffsetChanged(body: string): RoundButtonBuilder;
  onBottomInsetChanged(body: string): RoundButtonBuilder;
  onBottomPaddingChanged(body: string): RoundButtonBuilder;
  onCanceled(body: string): RoundButtonBuilder;
  onCheckableChanged(body: string): RoundButtonBuilder;
  onCheckedChanged(body: string): RoundButtonBuilder;
  onChildrenChanged(body: string): RoundButtonBuilder;
  onChildrenRectChanged(body: string): RoundButtonBuilder;
  onClicked(body: string): RoundButtonBuilder;
  onClipChanged(body: string): RoundButtonBuilder;
  onContainmentMaskChanged(body: string): RoundButtonBuilder;
  onContentItemChanged(body: string): RoundButtonBuilder;
  onDisplayChanged(body: string): RoundButtonBuilder;
  onDoubleClicked(body: string): RoundButtonBuilder;
  onDownChanged(body: string): RoundButtonBuilder;
  onEnabledChanged(body: string): RoundButtonBuilder;
  onFlatChanged(body: string): RoundButtonBuilder;
  onFocusChanged(body: string): RoundButtonBuilder;
  onFocusPolicyChanged(body: string): RoundButtonBuilder;
  onFocusReasonChanged(body: string): RoundButtonBuilder;
  onFontChanged(body: string): RoundButtonBuilder;
  onHeightChanged(body: string): RoundButtonBuilder;
  onHighlightedChanged(body: string): RoundButtonBuilder;
  onHorizontalPaddingChanged(body: string): RoundButtonBuilder;
  onHoverEnabledChanged(body: string): RoundButtonBuilder;
  onHoveredChanged(body: string): RoundButtonBuilder;
  onIconChanged(body: string): RoundButtonBuilder;
  onImplicitBackgroundHeightChanged(body: string): RoundButtonBuilder;
  onImplicitBackgroundWidthChanged(body: string): RoundButtonBuilder;
  onImplicitContentHeightChanged(body: string): RoundButtonBuilder;
  onImplicitContentWidthChanged(body: string): RoundButtonBuilder;
  onImplicitHeightChanged(body: string): RoundButtonBuilder;
  onImplicitIndicatorHeightChanged(body: string): RoundButtonBuilder;
  onImplicitIndicatorWidthChanged(body: string): RoundButtonBuilder;
  onImplicitWidthChanged(body: string): RoundButtonBuilder;
  onIndicatorChanged(body: string): RoundButtonBuilder;
  onLeftInsetChanged(body: string): RoundButtonBuilder;
  onLeftPaddingChanged(body: string): RoundButtonBuilder;
  onLocaleChanged(body: string): RoundButtonBuilder;
  onMirroredChanged(body: string): RoundButtonBuilder;
  onObjectNameChanged(body: string): RoundButtonBuilder;
  onOpacityChanged(body: string): RoundButtonBuilder;
  onPaddingChanged(body: string): RoundButtonBuilder;
  onPaletteChanged(body: string): RoundButtonBuilder;
  onPaletteCreated(body: string): RoundButtonBuilder;
  onParentChanged(body: string): RoundButtonBuilder;
  onPressAndHold(body: string): RoundButtonBuilder;
  onPressXChanged(body: string): RoundButtonBuilder;
  onPressYChanged(body: string): RoundButtonBuilder;
  onPressed(body: string): RoundButtonBuilder;
  onPressedChanged(body: string): RoundButtonBuilder;
  onRadiusChanged(body: string): RoundButtonBuilder;
  onReleased(body: string): RoundButtonBuilder;
  onRightInsetChanged(body: string): RoundButtonBuilder;
  onRightPaddingChanged(body: string): RoundButtonBuilder;
  onRotationChanged(body: string): RoundButtonBuilder;
  onScaleChanged(body: string): RoundButtonBuilder;
  onSmoothChanged(body: string): RoundButtonBuilder;
  onSpacingChanged(body: string): RoundButtonBuilder;
  onStateChanged(body: string): RoundButtonBuilder;
  onTextChanged(body: string): RoundButtonBuilder;
  onToggled(body: string): RoundButtonBuilder;
  onTopInsetChanged(body: string): RoundButtonBuilder;
  onTopPaddingChanged(body: string): RoundButtonBuilder;
  onTransformOriginChanged(body: string): RoundButtonBuilder;
  onVerticalPaddingChanged(body: string): RoundButtonBuilder;
  onVisibleChanged(body: string): RoundButtonBuilder;
  onVisibleChildrenChanged(body: string): RoundButtonBuilder;
  onVisualFocusChanged(body: string): RoundButtonBuilder;
  onWheelEnabledChanged(body: string): RoundButtonBuilder;
  onWidthChanged(body: string): RoundButtonBuilder;
  onWindowChanged(body: string): RoundButtonBuilder;
  onXChanged(body: string): RoundButtonBuilder;
  onYChanged(body: string): RoundButtonBuilder;
  onZChanged(body: string): RoundButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RoundButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): RoundButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RoundButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RoundButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RoundButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RoundButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RoundButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RoundButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RoundButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RoundButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RoundButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RoundButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RoundButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RoundButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RoundButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RoundButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RoundButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RoundButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RoundButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RoundButtonBuilder;
}

const ROUNDBUTTON_META: TypeMetadata = {
  typeName: 'RoundButton',
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
    { name: 'flat', hasValue: true, hasBinding: true },
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
    { name: 'radius', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFlatChanged', paramCount: 0 },
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
    { handlerName: 'onRadiusChanged', paramCount: 0 },
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

export function RoundButton(): RoundButtonBuilder {
  return createFluentBuilder('RoundButton', ROUNDBUTTON_META) as unknown as RoundButtonBuilder;
}

export namespace RoundButton {
  export namespace Display {
    export const IconOnly = createEnumToken('RoundButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('RoundButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('RoundButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('RoundButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('RoundButton', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('RoundButton', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('RoundButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RoundButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RoundButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RoundButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('RoundButton', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('RoundButton', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('RoundButton', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('RoundButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('RoundButton', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RoundButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RoundButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RoundButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RoundButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RoundButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RoundButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RoundButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RoundButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RoundButton', 'TransformOrigin', 'BottomRight');
  }
}
