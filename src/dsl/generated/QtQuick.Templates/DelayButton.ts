// AUTO-GENERATED — DO NOT EDIT
// Type: DelayButton
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
import type { TransitionBuilder } from '../QtQuick/Transition.js';
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
export interface DelayButtonBuilder {
  id(id: string): DelayButtonBuilder;
  child(obj: QmlObjectBuilder): DelayButtonBuilder;
  children(...objs: QmlObjectBuilder[]): DelayButtonBuilder;

  action(value: ActionBuilder): DelayButtonBuilder;
  actionBind(expr: string): DelayButtonBuilder;
  activeFocusOnTab(value: boolean): DelayButtonBuilder;
  activeFocusOnTabBind(expr: string): DelayButtonBuilder;
  antialiasing(value: boolean): DelayButtonBuilder;
  antialiasingBind(expr: string): DelayButtonBuilder;
  autoExclusive(value: boolean): DelayButtonBuilder;
  autoExclusiveBind(expr: string): DelayButtonBuilder;
  autoRepeat(value: boolean): DelayButtonBuilder;
  autoRepeatBind(expr: string): DelayButtonBuilder;
  autoRepeatDelay(value: number): DelayButtonBuilder;
  autoRepeatDelayBind(expr: string): DelayButtonBuilder;
  autoRepeatInterval(value: number): DelayButtonBuilder;
  autoRepeatIntervalBind(expr: string): DelayButtonBuilder;
  background(value: ItemBuilder): DelayButtonBuilder;
  backgroundBind(expr: string): DelayButtonBuilder;
  baselineOffset(value: number): DelayButtonBuilder;
  baselineOffsetBind(expr: string): DelayButtonBuilder;
  bottomInset(value: number): DelayButtonBuilder;
  bottomInsetBind(expr: string): DelayButtonBuilder;
  bottomPadding(value: number): DelayButtonBuilder;
  bottomPaddingBind(expr: string): DelayButtonBuilder;
  checkable(value: boolean): DelayButtonBuilder;
  checkableBind(expr: string): DelayButtonBuilder;
  checked(value: boolean): DelayButtonBuilder;
  checkedBind(expr: string): DelayButtonBuilder;
  clip(value: boolean): DelayButtonBuilder;
  clipBind(expr: string): DelayButtonBuilder;
  containmentMask(value: QtObjectBuilder): DelayButtonBuilder;
  containmentMaskBind(expr: string): DelayButtonBuilder;
  contentItem(value: ItemBuilder): DelayButtonBuilder;
  contentItemBind(expr: string): DelayButtonBuilder;
  delay(value: number): DelayButtonBuilder;
  delayBind(expr: string): DelayButtonBuilder;
  display(value: QmlEnumToken): DelayButtonBuilder;
  displayBind(expr: string): DelayButtonBuilder;
  down(value: boolean): DelayButtonBuilder;
  downBind(expr: string): DelayButtonBuilder;
  enabled(value: boolean): DelayButtonBuilder;
  enabledBind(expr: string): DelayButtonBuilder;
  focus(value: boolean): DelayButtonBuilder;
  focusBind(expr: string): DelayButtonBuilder;
  focusPolicy(value: QmlEnumToken): DelayButtonBuilder;
  focusPolicyBind(expr: string): DelayButtonBuilder;
  focusReason(value: QmlEnumToken): DelayButtonBuilder;
  focusReasonBind(expr: string): DelayButtonBuilder;
  font(value: QmlFont): DelayButtonBuilder;
  fontBind(expr: string): DelayButtonBuilder;
  height(value: number): DelayButtonBuilder;
  heightBind(expr: string): DelayButtonBuilder;
  horizontalPadding(value: number): DelayButtonBuilder;
  horizontalPaddingBind(expr: string): DelayButtonBuilder;
  hoverEnabled(value: boolean): DelayButtonBuilder;
  hoverEnabledBind(expr: string): DelayButtonBuilder;
  icon(value: QmlValue): DelayButtonBuilder;
  iconBind(expr: string): DelayButtonBuilder;
  implicitHeight(value: number): DelayButtonBuilder;
  implicitHeightBind(expr: string): DelayButtonBuilder;
  implicitWidth(value: number): DelayButtonBuilder;
  implicitWidthBind(expr: string): DelayButtonBuilder;
  indicator(value: ItemBuilder): DelayButtonBuilder;
  indicatorBind(expr: string): DelayButtonBuilder;
  leftInset(value: number): DelayButtonBuilder;
  leftInsetBind(expr: string): DelayButtonBuilder;
  leftPadding(value: number): DelayButtonBuilder;
  leftPaddingBind(expr: string): DelayButtonBuilder;
  locale(value: string): DelayButtonBuilder;
  localeBind(expr: string): DelayButtonBuilder;
  objectName(value: string): DelayButtonBuilder;
  objectNameBind(expr: string): DelayButtonBuilder;
  opacity(value: number): DelayButtonBuilder;
  opacityBind(expr: string): DelayButtonBuilder;
  padding(value: number): DelayButtonBuilder;
  paddingBind(expr: string): DelayButtonBuilder;
  palette(value: PaletteBuilder): DelayButtonBuilder;
  paletteBind(expr: string): DelayButtonBuilder;
  parent(value: ItemBuilder): DelayButtonBuilder;
  parentBind(expr: string): DelayButtonBuilder;
  progress(value: number): DelayButtonBuilder;
  progressBind(expr: string): DelayButtonBuilder;
  rightInset(value: number): DelayButtonBuilder;
  rightInsetBind(expr: string): DelayButtonBuilder;
  rightPadding(value: number): DelayButtonBuilder;
  rightPaddingBind(expr: string): DelayButtonBuilder;
  rotation(value: number): DelayButtonBuilder;
  rotationBind(expr: string): DelayButtonBuilder;
  scale(value: number): DelayButtonBuilder;
  scaleBind(expr: string): DelayButtonBuilder;
  smooth(value: boolean): DelayButtonBuilder;
  smoothBind(expr: string): DelayButtonBuilder;
  spacing(value: number): DelayButtonBuilder;
  spacingBind(expr: string): DelayButtonBuilder;
  state(value: string): DelayButtonBuilder;
  stateBind(expr: string): DelayButtonBuilder;
  text(value: string): DelayButtonBuilder;
  textBind(expr: string): DelayButtonBuilder;
  topInset(value: number): DelayButtonBuilder;
  topInsetBind(expr: string): DelayButtonBuilder;
  topPadding(value: number): DelayButtonBuilder;
  topPaddingBind(expr: string): DelayButtonBuilder;
  transformOrigin(value: QmlEnumToken): DelayButtonBuilder;
  transformOriginBind(expr: string): DelayButtonBuilder;
  transition(value: TransitionBuilder): DelayButtonBuilder;
  transitionBind(expr: string): DelayButtonBuilder;
  verticalPadding(value: number): DelayButtonBuilder;
  verticalPaddingBind(expr: string): DelayButtonBuilder;
  visible(value: boolean): DelayButtonBuilder;
  visibleBind(expr: string): DelayButtonBuilder;
  wheelEnabled(value: boolean): DelayButtonBuilder;
  wheelEnabledBind(expr: string): DelayButtonBuilder;
  width(value: number): DelayButtonBuilder;
  widthBind(expr: string): DelayButtonBuilder;
  x(value: number): DelayButtonBuilder;
  xBind(expr: string): DelayButtonBuilder;
  y(value: number): DelayButtonBuilder;
  yBind(expr: string): DelayButtonBuilder;
  z(value: number): DelayButtonBuilder;
  zBind(expr: string): DelayButtonBuilder;
  onActionChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onActivated(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAutoExclusiveChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAutoRepeatChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAutoRepeatDelayChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAutoRepeatIntervalChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onCanceled(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onCheckableChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onCheckedChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onClicked(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onClipChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onDelayChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onDisplayChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onDownChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onFontChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onIconChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onIndicatorChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPressAndHold(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPressXChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPressYChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPressed(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onProgressChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onReleased(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onStateChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onTextChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onToggled(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onTransitionChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onXChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onYChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onZChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DelayButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): DelayButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DelayButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DelayButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DelayButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DelayButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DelayButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DelayButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DelayButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DelayButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DelayButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DelayButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DelayButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DelayButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DelayButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DelayButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DelayButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DelayButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DelayButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DelayButtonBuilder;
}

const DELAYBUTTON_META: TypeMetadata = {
  typeName: 'DelayButton',
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
    { name: 'delay', hasValue: true, hasBinding: true },
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
    { name: 'progress', hasValue: true, hasBinding: true },
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
    { name: 'transition', hasValue: true, hasBinding: true },
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
    { handlerName: 'onActivated', paramCount: 0 },
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
    { handlerName: 'onDelayChanged', paramCount: 0 },
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
    { handlerName: 'onProgressChanged', paramCount: 0 },
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
    { handlerName: 'onTransitionChanged', paramCount: 0 },
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

export function DelayButton(): DelayButtonBuilder {
  return createFluentBuilder('DelayButton', DELAYBUTTON_META) as unknown as DelayButtonBuilder;
}

export namespace DelayButton {
  export namespace Display {
    export const IconOnly = createEnumToken('DelayButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('DelayButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('DelayButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('DelayButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DelayButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DelayButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DelayButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DelayButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('DelayButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DelayButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DelayButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DelayButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DelayButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DelayButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DelayButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DelayButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DelayButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DelayButton', 'TransformOrigin', 'BottomRight');
  }
}
