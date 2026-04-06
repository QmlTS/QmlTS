// AUTO-GENERATED — DO NOT EDIT
// Type: Switch
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
export interface SwitchBuilder {
  id(id: string): SwitchBuilder;
  child(obj: QmlObjectBuilder): SwitchBuilder;
  children(...objs: QmlObjectBuilder[]): SwitchBuilder;

  action(value: ActionBuilder): SwitchBuilder;
  actionBind(expr: string): SwitchBuilder;
  activeFocusOnTab(value: boolean): SwitchBuilder;
  activeFocusOnTabBind(expr: string): SwitchBuilder;
  antialiasing(value: boolean): SwitchBuilder;
  antialiasingBind(expr: string): SwitchBuilder;
  autoExclusive(value: boolean): SwitchBuilder;
  autoExclusiveBind(expr: string): SwitchBuilder;
  autoRepeat(value: boolean): SwitchBuilder;
  autoRepeatBind(expr: string): SwitchBuilder;
  autoRepeatDelay(value: number): SwitchBuilder;
  autoRepeatDelayBind(expr: string): SwitchBuilder;
  autoRepeatInterval(value: number): SwitchBuilder;
  autoRepeatIntervalBind(expr: string): SwitchBuilder;
  background(value: ItemBuilder): SwitchBuilder;
  backgroundBind(expr: string): SwitchBuilder;
  baselineOffset(value: number): SwitchBuilder;
  baselineOffsetBind(expr: string): SwitchBuilder;
  bottomInset(value: number): SwitchBuilder;
  bottomInsetBind(expr: string): SwitchBuilder;
  bottomPadding(value: number): SwitchBuilder;
  bottomPaddingBind(expr: string): SwitchBuilder;
  checkable(value: boolean): SwitchBuilder;
  checkableBind(expr: string): SwitchBuilder;
  checked(value: boolean): SwitchBuilder;
  checkedBind(expr: string): SwitchBuilder;
  clip(value: boolean): SwitchBuilder;
  clipBind(expr: string): SwitchBuilder;
  containmentMask(value: QtObjectBuilder): SwitchBuilder;
  containmentMaskBind(expr: string): SwitchBuilder;
  contentItem(value: ItemBuilder): SwitchBuilder;
  contentItemBind(expr: string): SwitchBuilder;
  display(value: QmlEnumToken): SwitchBuilder;
  displayBind(expr: string): SwitchBuilder;
  down(value: boolean): SwitchBuilder;
  downBind(expr: string): SwitchBuilder;
  enabled(value: boolean): SwitchBuilder;
  enabledBind(expr: string): SwitchBuilder;
  focus(value: boolean): SwitchBuilder;
  focusBind(expr: string): SwitchBuilder;
  focusPolicy(value: QmlEnumToken): SwitchBuilder;
  focusPolicyBind(expr: string): SwitchBuilder;
  focusReason(value: QmlEnumToken): SwitchBuilder;
  focusReasonBind(expr: string): SwitchBuilder;
  font(value: QmlFont): SwitchBuilder;
  fontBind(expr: string): SwitchBuilder;
  height(value: number): SwitchBuilder;
  heightBind(expr: string): SwitchBuilder;
  horizontalPadding(value: number): SwitchBuilder;
  horizontalPaddingBind(expr: string): SwitchBuilder;
  hoverEnabled(value: boolean): SwitchBuilder;
  hoverEnabledBind(expr: string): SwitchBuilder;
  icon(value: QmlValue): SwitchBuilder;
  iconBind(expr: string): SwitchBuilder;
  implicitHeight(value: number): SwitchBuilder;
  implicitHeightBind(expr: string): SwitchBuilder;
  implicitWidth(value: number): SwitchBuilder;
  implicitWidthBind(expr: string): SwitchBuilder;
  indicator(value: ItemBuilder): SwitchBuilder;
  indicatorBind(expr: string): SwitchBuilder;
  leftInset(value: number): SwitchBuilder;
  leftInsetBind(expr: string): SwitchBuilder;
  leftPadding(value: number): SwitchBuilder;
  leftPaddingBind(expr: string): SwitchBuilder;
  locale(value: string): SwitchBuilder;
  localeBind(expr: string): SwitchBuilder;
  objectName(value: string): SwitchBuilder;
  objectNameBind(expr: string): SwitchBuilder;
  opacity(value: number): SwitchBuilder;
  opacityBind(expr: string): SwitchBuilder;
  padding(value: number): SwitchBuilder;
  paddingBind(expr: string): SwitchBuilder;
  palette(value: PaletteBuilder): SwitchBuilder;
  paletteBind(expr: string): SwitchBuilder;
  parent(value: ItemBuilder): SwitchBuilder;
  parentBind(expr: string): SwitchBuilder;
  position(value: number): SwitchBuilder;
  positionBind(expr: string): SwitchBuilder;
  rightInset(value: number): SwitchBuilder;
  rightInsetBind(expr: string): SwitchBuilder;
  rightPadding(value: number): SwitchBuilder;
  rightPaddingBind(expr: string): SwitchBuilder;
  rotation(value: number): SwitchBuilder;
  rotationBind(expr: string): SwitchBuilder;
  scale(value: number): SwitchBuilder;
  scaleBind(expr: string): SwitchBuilder;
  smooth(value: boolean): SwitchBuilder;
  smoothBind(expr: string): SwitchBuilder;
  spacing(value: number): SwitchBuilder;
  spacingBind(expr: string): SwitchBuilder;
  state(value: string): SwitchBuilder;
  stateBind(expr: string): SwitchBuilder;
  text(value: string): SwitchBuilder;
  textBind(expr: string): SwitchBuilder;
  topInset(value: number): SwitchBuilder;
  topInsetBind(expr: string): SwitchBuilder;
  topPadding(value: number): SwitchBuilder;
  topPaddingBind(expr: string): SwitchBuilder;
  transformOrigin(value: QmlEnumToken): SwitchBuilder;
  transformOriginBind(expr: string): SwitchBuilder;
  verticalPadding(value: number): SwitchBuilder;
  verticalPaddingBind(expr: string): SwitchBuilder;
  visible(value: boolean): SwitchBuilder;
  visibleBind(expr: string): SwitchBuilder;
  wheelEnabled(value: boolean): SwitchBuilder;
  wheelEnabledBind(expr: string): SwitchBuilder;
  width(value: number): SwitchBuilder;
  widthBind(expr: string): SwitchBuilder;
  x(value: number): SwitchBuilder;
  xBind(expr: string): SwitchBuilder;
  y(value: number): SwitchBuilder;
  yBind(expr: string): SwitchBuilder;
  z(value: number): SwitchBuilder;
  zBind(expr: string): SwitchBuilder;
  onActionChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onAutoExclusiveChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onAutoRepeatChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onAutoRepeatDelayChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onAutoRepeatIntervalChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onCanceled(handler: DslSignalHandlerValue): SwitchBuilder;
  onCheckableChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onCheckedChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onClicked(handler: DslSignalHandlerValue): SwitchBuilder;
  onClipChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onDisplayChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): SwitchBuilder;
  onDownChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onFontChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onIconChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitIndicatorHeightChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitIndicatorWidthChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onIndicatorChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): SwitchBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onPressAndHold(handler: DslSignalHandlerValue): SwitchBuilder;
  onPressXChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onPressYChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onPressed(handler: DslSignalHandlerValue): SwitchBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onReleased(handler: DslSignalHandlerValue): SwitchBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onTextChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onToggled(handler: DslSignalHandlerValue): SwitchBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onVisualPositionChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onXChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onYChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  onZChanged(handler: DslSignalHandlerValue): SwitchBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwitchBuilder;
  layer(setup: (b: LayerBuilder) => void): SwitchBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwitchBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwitchBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwitchBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwitchBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwitchBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwitchBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwitchBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwitchBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwitchBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwitchBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwitchBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwitchBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwitchBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwitchBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwitchBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwitchBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwitchBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwitchBuilder;
}

const SWITCH_META: TypeMetadata = {
  typeName: 'Switch',
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
    { name: 'position', hasValue: true, hasBinding: true },
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
    { handlerName: 'onPositionChanged', paramCount: 0 },
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
    { handlerName: 'onVisualPositionChanged', paramCount: 0 },
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

export function Switch(): SwitchBuilder {
  return createFluentBuilder('Switch', SWITCH_META) as unknown as SwitchBuilder;
}

export namespace Switch {
  export namespace Display {
    export const IconOnly = createEnumToken('Switch', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('Switch', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('Switch', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('Switch', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Switch',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Switch',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Switch', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Switch', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Switch', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Switch', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Switch', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Switch', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Switch', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Switch', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Switch', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Switch', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Switch', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Switch', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Switch', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Switch', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Switch', 'TransformOrigin', 'BottomRight');
  }
}
