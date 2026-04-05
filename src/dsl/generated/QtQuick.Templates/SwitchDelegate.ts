// AUTO-GENERATED — DO NOT EDIT
// Type: SwitchDelegate
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
export interface SwitchDelegateBuilder {
  id(id: string): SwitchDelegateBuilder;
  child(obj: QmlObjectBuilder): SwitchDelegateBuilder;

  action(value: ActionBuilder): SwitchDelegateBuilder;
  actionBind(expr: string): SwitchDelegateBuilder;
  activeFocusOnTab(value: boolean): SwitchDelegateBuilder;
  activeFocusOnTabBind(expr: string): SwitchDelegateBuilder;
  antialiasing(value: boolean): SwitchDelegateBuilder;
  antialiasingBind(expr: string): SwitchDelegateBuilder;
  autoExclusive(value: boolean): SwitchDelegateBuilder;
  autoExclusiveBind(expr: string): SwitchDelegateBuilder;
  autoRepeat(value: boolean): SwitchDelegateBuilder;
  autoRepeatBind(expr: string): SwitchDelegateBuilder;
  autoRepeatDelay(value: number): SwitchDelegateBuilder;
  autoRepeatDelayBind(expr: string): SwitchDelegateBuilder;
  autoRepeatInterval(value: number): SwitchDelegateBuilder;
  autoRepeatIntervalBind(expr: string): SwitchDelegateBuilder;
  background(value: ItemBuilder): SwitchDelegateBuilder;
  backgroundBind(expr: string): SwitchDelegateBuilder;
  baselineOffset(value: number): SwitchDelegateBuilder;
  baselineOffsetBind(expr: string): SwitchDelegateBuilder;
  bottomInset(value: number): SwitchDelegateBuilder;
  bottomInsetBind(expr: string): SwitchDelegateBuilder;
  bottomPadding(value: number): SwitchDelegateBuilder;
  bottomPaddingBind(expr: string): SwitchDelegateBuilder;
  checkable(value: boolean): SwitchDelegateBuilder;
  checkableBind(expr: string): SwitchDelegateBuilder;
  checked(value: boolean): SwitchDelegateBuilder;
  checkedBind(expr: string): SwitchDelegateBuilder;
  clip(value: boolean): SwitchDelegateBuilder;
  clipBind(expr: string): SwitchDelegateBuilder;
  containmentMask(value: QtObjectBuilder): SwitchDelegateBuilder;
  containmentMaskBind(expr: string): SwitchDelegateBuilder;
  contentItem(value: ItemBuilder): SwitchDelegateBuilder;
  contentItemBind(expr: string): SwitchDelegateBuilder;
  display(value: QmlEnumToken): SwitchDelegateBuilder;
  displayBind(expr: string): SwitchDelegateBuilder;
  down(value: boolean): SwitchDelegateBuilder;
  downBind(expr: string): SwitchDelegateBuilder;
  enabled(value: boolean): SwitchDelegateBuilder;
  enabledBind(expr: string): SwitchDelegateBuilder;
  focus(value: boolean): SwitchDelegateBuilder;
  focusBind(expr: string): SwitchDelegateBuilder;
  focusPolicy(value: QmlEnumToken): SwitchDelegateBuilder;
  focusPolicyBind(expr: string): SwitchDelegateBuilder;
  focusReason(value: QmlEnumToken): SwitchDelegateBuilder;
  focusReasonBind(expr: string): SwitchDelegateBuilder;
  font(value: QmlFont): SwitchDelegateBuilder;
  fontBind(expr: string): SwitchDelegateBuilder;
  height(value: number): SwitchDelegateBuilder;
  heightBind(expr: string): SwitchDelegateBuilder;
  highlighted(value: boolean): SwitchDelegateBuilder;
  highlightedBind(expr: string): SwitchDelegateBuilder;
  horizontalPadding(value: number): SwitchDelegateBuilder;
  horizontalPaddingBind(expr: string): SwitchDelegateBuilder;
  hoverEnabled(value: boolean): SwitchDelegateBuilder;
  hoverEnabledBind(expr: string): SwitchDelegateBuilder;
  icon(value: QmlValue): SwitchDelegateBuilder;
  iconBind(expr: string): SwitchDelegateBuilder;
  implicitHeight(value: number): SwitchDelegateBuilder;
  implicitHeightBind(expr: string): SwitchDelegateBuilder;
  implicitWidth(value: number): SwitchDelegateBuilder;
  implicitWidthBind(expr: string): SwitchDelegateBuilder;
  indicator(value: ItemBuilder): SwitchDelegateBuilder;
  indicatorBind(expr: string): SwitchDelegateBuilder;
  leftInset(value: number): SwitchDelegateBuilder;
  leftInsetBind(expr: string): SwitchDelegateBuilder;
  leftPadding(value: number): SwitchDelegateBuilder;
  leftPaddingBind(expr: string): SwitchDelegateBuilder;
  locale(value: string): SwitchDelegateBuilder;
  localeBind(expr: string): SwitchDelegateBuilder;
  objectName(value: string): SwitchDelegateBuilder;
  objectNameBind(expr: string): SwitchDelegateBuilder;
  opacity(value: number): SwitchDelegateBuilder;
  opacityBind(expr: string): SwitchDelegateBuilder;
  padding(value: number): SwitchDelegateBuilder;
  paddingBind(expr: string): SwitchDelegateBuilder;
  palette(value: PaletteBuilder): SwitchDelegateBuilder;
  paletteBind(expr: string): SwitchDelegateBuilder;
  parent(value: ItemBuilder): SwitchDelegateBuilder;
  parentBind(expr: string): SwitchDelegateBuilder;
  position(value: number): SwitchDelegateBuilder;
  positionBind(expr: string): SwitchDelegateBuilder;
  rightInset(value: number): SwitchDelegateBuilder;
  rightInsetBind(expr: string): SwitchDelegateBuilder;
  rightPadding(value: number): SwitchDelegateBuilder;
  rightPaddingBind(expr: string): SwitchDelegateBuilder;
  rotation(value: number): SwitchDelegateBuilder;
  rotationBind(expr: string): SwitchDelegateBuilder;
  scale(value: number): SwitchDelegateBuilder;
  scaleBind(expr: string): SwitchDelegateBuilder;
  smooth(value: boolean): SwitchDelegateBuilder;
  smoothBind(expr: string): SwitchDelegateBuilder;
  spacing(value: number): SwitchDelegateBuilder;
  spacingBind(expr: string): SwitchDelegateBuilder;
  state(value: string): SwitchDelegateBuilder;
  stateBind(expr: string): SwitchDelegateBuilder;
  text(value: string): SwitchDelegateBuilder;
  textBind(expr: string): SwitchDelegateBuilder;
  topInset(value: number): SwitchDelegateBuilder;
  topInsetBind(expr: string): SwitchDelegateBuilder;
  topPadding(value: number): SwitchDelegateBuilder;
  topPaddingBind(expr: string): SwitchDelegateBuilder;
  transformOrigin(value: QmlEnumToken): SwitchDelegateBuilder;
  transformOriginBind(expr: string): SwitchDelegateBuilder;
  verticalPadding(value: number): SwitchDelegateBuilder;
  verticalPaddingBind(expr: string): SwitchDelegateBuilder;
  visible(value: boolean): SwitchDelegateBuilder;
  visibleBind(expr: string): SwitchDelegateBuilder;
  wheelEnabled(value: boolean): SwitchDelegateBuilder;
  wheelEnabledBind(expr: string): SwitchDelegateBuilder;
  width(value: number): SwitchDelegateBuilder;
  widthBind(expr: string): SwitchDelegateBuilder;
  x(value: number): SwitchDelegateBuilder;
  xBind(expr: string): SwitchDelegateBuilder;
  y(value: number): SwitchDelegateBuilder;
  yBind(expr: string): SwitchDelegateBuilder;
  z(value: number): SwitchDelegateBuilder;
  zBind(expr: string): SwitchDelegateBuilder;
  onActionChanged(body: string): SwitchDelegateBuilder;
  onActiveFocusChanged(body: string): SwitchDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): SwitchDelegateBuilder;
  onAntialiasingChanged(body: string): SwitchDelegateBuilder;
  onAutoExclusiveChanged(body: string): SwitchDelegateBuilder;
  onAutoRepeatChanged(body: string): SwitchDelegateBuilder;
  onAutoRepeatDelayChanged(body: string): SwitchDelegateBuilder;
  onAutoRepeatIntervalChanged(body: string): SwitchDelegateBuilder;
  onAvailableHeightChanged(body: string): SwitchDelegateBuilder;
  onAvailableWidthChanged(body: string): SwitchDelegateBuilder;
  onBackgroundChanged(body: string): SwitchDelegateBuilder;
  onBaselineOffsetChanged(body: string): SwitchDelegateBuilder;
  onBottomInsetChanged(body: string): SwitchDelegateBuilder;
  onBottomPaddingChanged(body: string): SwitchDelegateBuilder;
  onCanceled(body: string): SwitchDelegateBuilder;
  onCheckableChanged(body: string): SwitchDelegateBuilder;
  onCheckedChanged(body: string): SwitchDelegateBuilder;
  onChildrenChanged(body: string): SwitchDelegateBuilder;
  onChildrenRectChanged(body: string): SwitchDelegateBuilder;
  onClicked(body: string): SwitchDelegateBuilder;
  onClipChanged(body: string): SwitchDelegateBuilder;
  onContainmentMaskChanged(body: string): SwitchDelegateBuilder;
  onContentItemChanged(body: string): SwitchDelegateBuilder;
  onDisplayChanged(body: string): SwitchDelegateBuilder;
  onDoubleClicked(body: string): SwitchDelegateBuilder;
  onDownChanged(body: string): SwitchDelegateBuilder;
  onEnabledChanged(body: string): SwitchDelegateBuilder;
  onFocusChanged(body: string): SwitchDelegateBuilder;
  onFocusPolicyChanged(body: string): SwitchDelegateBuilder;
  onFocusReasonChanged(body: string): SwitchDelegateBuilder;
  onFontChanged(body: string): SwitchDelegateBuilder;
  onHeightChanged(body: string): SwitchDelegateBuilder;
  onHighlightedChanged(body: string): SwitchDelegateBuilder;
  onHorizontalPaddingChanged(body: string): SwitchDelegateBuilder;
  onHoverEnabledChanged(body: string): SwitchDelegateBuilder;
  onHoveredChanged(body: string): SwitchDelegateBuilder;
  onIconChanged(body: string): SwitchDelegateBuilder;
  onImplicitBackgroundHeightChanged(body: string): SwitchDelegateBuilder;
  onImplicitBackgroundWidthChanged(body: string): SwitchDelegateBuilder;
  onImplicitContentHeightChanged(body: string): SwitchDelegateBuilder;
  onImplicitContentWidthChanged(body: string): SwitchDelegateBuilder;
  onImplicitHeightChanged(body: string): SwitchDelegateBuilder;
  onImplicitIndicatorHeightChanged(body: string): SwitchDelegateBuilder;
  onImplicitIndicatorWidthChanged(body: string): SwitchDelegateBuilder;
  onImplicitWidthChanged(body: string): SwitchDelegateBuilder;
  onIndicatorChanged(body: string): SwitchDelegateBuilder;
  onLeftInsetChanged(body: string): SwitchDelegateBuilder;
  onLeftPaddingChanged(body: string): SwitchDelegateBuilder;
  onLocaleChanged(body: string): SwitchDelegateBuilder;
  onMirroredChanged(body: string): SwitchDelegateBuilder;
  onObjectNameChanged(body: string): SwitchDelegateBuilder;
  onOpacityChanged(body: string): SwitchDelegateBuilder;
  onPaddingChanged(body: string): SwitchDelegateBuilder;
  onPaletteChanged(body: string): SwitchDelegateBuilder;
  onPaletteCreated(body: string): SwitchDelegateBuilder;
  onParentChanged(body: string): SwitchDelegateBuilder;
  onPositionChanged(body: string): SwitchDelegateBuilder;
  onPressAndHold(body: string): SwitchDelegateBuilder;
  onPressXChanged(body: string): SwitchDelegateBuilder;
  onPressYChanged(body: string): SwitchDelegateBuilder;
  onPressed(body: string): SwitchDelegateBuilder;
  onPressedChanged(body: string): SwitchDelegateBuilder;
  onReleased(body: string): SwitchDelegateBuilder;
  onRightInsetChanged(body: string): SwitchDelegateBuilder;
  onRightPaddingChanged(body: string): SwitchDelegateBuilder;
  onRotationChanged(body: string): SwitchDelegateBuilder;
  onScaleChanged(body: string): SwitchDelegateBuilder;
  onSmoothChanged(body: string): SwitchDelegateBuilder;
  onSpacingChanged(body: string): SwitchDelegateBuilder;
  onStateChanged(body: string): SwitchDelegateBuilder;
  onTextChanged(body: string): SwitchDelegateBuilder;
  onToggled(body: string): SwitchDelegateBuilder;
  onTopInsetChanged(body: string): SwitchDelegateBuilder;
  onTopPaddingChanged(body: string): SwitchDelegateBuilder;
  onTransformOriginChanged(body: string): SwitchDelegateBuilder;
  onVerticalPaddingChanged(body: string): SwitchDelegateBuilder;
  onVisibleChanged(body: string): SwitchDelegateBuilder;
  onVisibleChildrenChanged(body: string): SwitchDelegateBuilder;
  onVisualFocusChanged(body: string): SwitchDelegateBuilder;
  onVisualPositionChanged(body: string): SwitchDelegateBuilder;
  onWheelEnabledChanged(body: string): SwitchDelegateBuilder;
  onWidthChanged(body: string): SwitchDelegateBuilder;
  onWindowChanged(body: string): SwitchDelegateBuilder;
  onXChanged(body: string): SwitchDelegateBuilder;
  onYChanged(body: string): SwitchDelegateBuilder;
  onZChanged(body: string): SwitchDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwitchDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): SwitchDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwitchDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwitchDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwitchDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwitchDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwitchDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwitchDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwitchDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwitchDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwitchDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwitchDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwitchDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwitchDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwitchDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwitchDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwitchDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwitchDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwitchDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwitchDelegateBuilder;
}

const SWITCHDELEGATE_META: TypeMetadata = {
  typeName: 'SwitchDelegate',
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

export function SwitchDelegate(): SwitchDelegateBuilder {
  return createFluentBuilder('SwitchDelegate', SWITCHDELEGATE_META) as unknown as SwitchDelegateBuilder;
}

export namespace SwitchDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('SwitchDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('SwitchDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('SwitchDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('SwitchDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('SwitchDelegate', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('SwitchDelegate', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('SwitchDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SwitchDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SwitchDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SwitchDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('SwitchDelegate', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('SwitchDelegate', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SwitchDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SwitchDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SwitchDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SwitchDelegate', 'TransformOrigin', 'BottomRight');
  }
}
