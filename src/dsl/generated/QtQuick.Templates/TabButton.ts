// AUTO-GENERATED — DO NOT EDIT
// Type: TabButton
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface TabButtonBuilder {
  id(id: string): TabButtonBuilder;
  child(obj: QmlObjectBuilder): TabButtonBuilder;
  children(...objs: QmlObjectBuilder[]): TabButtonBuilder;

  action(value: ActionBuilder): TabButtonBuilder;
  actionBind(expr: string): TabButtonBuilder;
  activeFocusOnTab(value: boolean): TabButtonBuilder;
  activeFocusOnTabBind(expr: string): TabButtonBuilder;
  antialiasing(value: boolean): TabButtonBuilder;
  antialiasingBind(expr: string): TabButtonBuilder;
  autoExclusive(value: boolean): TabButtonBuilder;
  autoExclusiveBind(expr: string): TabButtonBuilder;
  autoRepeat(value: boolean): TabButtonBuilder;
  autoRepeatBind(expr: string): TabButtonBuilder;
  autoRepeatDelay(value: number): TabButtonBuilder;
  autoRepeatDelayBind(expr: string): TabButtonBuilder;
  autoRepeatInterval(value: number): TabButtonBuilder;
  autoRepeatIntervalBind(expr: string): TabButtonBuilder;
  background(value: ItemBuilder): TabButtonBuilder;
  backgroundBind(expr: string): TabButtonBuilder;
  baselineOffset(value: number): TabButtonBuilder;
  baselineOffsetBind(expr: string): TabButtonBuilder;
  bottomInset(value: number): TabButtonBuilder;
  bottomInsetBind(expr: string): TabButtonBuilder;
  bottomPadding(value: number): TabButtonBuilder;
  bottomPaddingBind(expr: string): TabButtonBuilder;
  checkable(value: boolean): TabButtonBuilder;
  checkableBind(expr: string): TabButtonBuilder;
  checked(value: boolean): TabButtonBuilder;
  checkedBind(expr: string): TabButtonBuilder;
  clip(value: boolean): TabButtonBuilder;
  clipBind(expr: string): TabButtonBuilder;
  containmentMask(value: QtObjectBuilder): TabButtonBuilder;
  containmentMaskBind(expr: string): TabButtonBuilder;
  contentItem(value: ItemBuilder): TabButtonBuilder;
  contentItemBind(expr: string): TabButtonBuilder;
  display(value: QmlEnumToken): TabButtonBuilder;
  displayBind(expr: string): TabButtonBuilder;
  down(value: boolean): TabButtonBuilder;
  downBind(expr: string): TabButtonBuilder;
  enabled(value: boolean): TabButtonBuilder;
  enabledBind(expr: string): TabButtonBuilder;
  focus(value: boolean): TabButtonBuilder;
  focusBind(expr: string): TabButtonBuilder;
  focusPolicy(value: QmlEnumToken): TabButtonBuilder;
  focusPolicyBind(expr: string): TabButtonBuilder;
  focusReason(value: QmlEnumToken): TabButtonBuilder;
  focusReasonBind(expr: string): TabButtonBuilder;
  font(value: QmlFont): TabButtonBuilder;
  fontBind(expr: string): TabButtonBuilder;
  height(value: number): TabButtonBuilder;
  heightBind(expr: string): TabButtonBuilder;
  horizontalPadding(value: number): TabButtonBuilder;
  horizontalPaddingBind(expr: string): TabButtonBuilder;
  hoverEnabled(value: boolean): TabButtonBuilder;
  hoverEnabledBind(expr: string): TabButtonBuilder;
  icon(value: QmlValue): TabButtonBuilder;
  iconBind(expr: string): TabButtonBuilder;
  implicitHeight(value: number): TabButtonBuilder;
  implicitHeightBind(expr: string): TabButtonBuilder;
  implicitWidth(value: number): TabButtonBuilder;
  implicitWidthBind(expr: string): TabButtonBuilder;
  indicator(value: ItemBuilder): TabButtonBuilder;
  indicatorBind(expr: string): TabButtonBuilder;
  leftInset(value: number): TabButtonBuilder;
  leftInsetBind(expr: string): TabButtonBuilder;
  leftPadding(value: number): TabButtonBuilder;
  leftPaddingBind(expr: string): TabButtonBuilder;
  locale(value: string): TabButtonBuilder;
  localeBind(expr: string): TabButtonBuilder;
  objectName(value: string): TabButtonBuilder;
  objectNameBind(expr: string): TabButtonBuilder;
  opacity(value: number): TabButtonBuilder;
  opacityBind(expr: string): TabButtonBuilder;
  padding(value: number): TabButtonBuilder;
  paddingBind(expr: string): TabButtonBuilder;
  palette(value: PaletteBuilder): TabButtonBuilder;
  paletteBind(expr: string): TabButtonBuilder;
  parent(value: ItemBuilder): TabButtonBuilder;
  parentBind(expr: string): TabButtonBuilder;
  rightInset(value: number): TabButtonBuilder;
  rightInsetBind(expr: string): TabButtonBuilder;
  rightPadding(value: number): TabButtonBuilder;
  rightPaddingBind(expr: string): TabButtonBuilder;
  rotation(value: number): TabButtonBuilder;
  rotationBind(expr: string): TabButtonBuilder;
  scale(value: number): TabButtonBuilder;
  scaleBind(expr: string): TabButtonBuilder;
  smooth(value: boolean): TabButtonBuilder;
  smoothBind(expr: string): TabButtonBuilder;
  spacing(value: number): TabButtonBuilder;
  spacingBind(expr: string): TabButtonBuilder;
  state(value: string): TabButtonBuilder;
  stateBind(expr: string): TabButtonBuilder;
  text(value: string): TabButtonBuilder;
  textBind(expr: string): TabButtonBuilder;
  topInset(value: number): TabButtonBuilder;
  topInsetBind(expr: string): TabButtonBuilder;
  topPadding(value: number): TabButtonBuilder;
  topPaddingBind(expr: string): TabButtonBuilder;
  transformOrigin(value: QmlEnumToken): TabButtonBuilder;
  transformOriginBind(expr: string): TabButtonBuilder;
  verticalPadding(value: number): TabButtonBuilder;
  verticalPaddingBind(expr: string): TabButtonBuilder;
  visible(value: boolean): TabButtonBuilder;
  visibleBind(expr: string): TabButtonBuilder;
  wheelEnabled(value: boolean): TabButtonBuilder;
  wheelEnabledBind(expr: string): TabButtonBuilder;
  width(value: number): TabButtonBuilder;
  widthBind(expr: string): TabButtonBuilder;
  x(value: number): TabButtonBuilder;
  xBind(expr: string): TabButtonBuilder;
  y(value: number): TabButtonBuilder;
  yBind(expr: string): TabButtonBuilder;
  z(value: number): TabButtonBuilder;
  zBind(expr: string): TabButtonBuilder;
  onActionChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onAutoExclusiveChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onAutoRepeatChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onAutoRepeatDelayChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onAutoRepeatIntervalChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onCanceled(handler: DslSignalHandlerValue): TabButtonBuilder;
  onCheckableChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onCheckedChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onClicked(handler: DslSignalHandlerValue): TabButtonBuilder;
  onClipChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onDisplayChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): TabButtonBuilder;
  onDownChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onFontChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onIconChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onIndicatorChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): TabButtonBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPressAndHold(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPressXChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPressYChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPressed(handler: DslSignalHandlerValue): TabButtonBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onReleased(handler: DslSignalHandlerValue): TabButtonBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onTextChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onToggled(handler: DslSignalHandlerValue): TabButtonBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onXChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onYChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  onZChanged(handler: DslSignalHandlerValue): TabButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TabButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): TabButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TabButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TabButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TabButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TabButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TabButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TabButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TabButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TabButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TabButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TabButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TabButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TabButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TabButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TabButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TabButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TabButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TabButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TabButtonBuilder;
}

const TABBUTTON_META: TypeMetadata = {
  typeName: 'TabButton',
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

export function TabButton(): TabButtonBuilder {
  return createFluentBuilder('TabButton', TABBUTTON_META) as unknown as TabButtonBuilder;
}

export namespace TabButton {
  export namespace Display {
    export const IconOnly = createEnumToken('TabButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('TabButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('TabButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('TabButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TabButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TabButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TabButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TabButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TabButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TabButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TabButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TabButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TabButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TabButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TabButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TabButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TabButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TabButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TabButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TabButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TabButton', 'TransformOrigin', 'BottomRight');
  }
}
