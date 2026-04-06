// AUTO-GENERATED — DO NOT EDIT
// Type: CheckDelegate
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
export interface CheckDelegateBuilder {
  id(id: string): CheckDelegateBuilder;
  child(obj: QmlObjectBuilder): CheckDelegateBuilder;
  children(...objs: QmlObjectBuilder[]): CheckDelegateBuilder;

  action(value: ActionBuilder): CheckDelegateBuilder;
  actionBind(expr: string): CheckDelegateBuilder;
  activeFocusOnTab(value: boolean): CheckDelegateBuilder;
  activeFocusOnTabBind(expr: string): CheckDelegateBuilder;
  antialiasing(value: boolean): CheckDelegateBuilder;
  antialiasingBind(expr: string): CheckDelegateBuilder;
  autoExclusive(value: boolean): CheckDelegateBuilder;
  autoExclusiveBind(expr: string): CheckDelegateBuilder;
  autoRepeat(value: boolean): CheckDelegateBuilder;
  autoRepeatBind(expr: string): CheckDelegateBuilder;
  autoRepeatDelay(value: number): CheckDelegateBuilder;
  autoRepeatDelayBind(expr: string): CheckDelegateBuilder;
  autoRepeatInterval(value: number): CheckDelegateBuilder;
  autoRepeatIntervalBind(expr: string): CheckDelegateBuilder;
  background(value: ItemBuilder): CheckDelegateBuilder;
  backgroundBind(expr: string): CheckDelegateBuilder;
  baselineOffset(value: number): CheckDelegateBuilder;
  baselineOffsetBind(expr: string): CheckDelegateBuilder;
  bottomInset(value: number): CheckDelegateBuilder;
  bottomInsetBind(expr: string): CheckDelegateBuilder;
  bottomPadding(value: number): CheckDelegateBuilder;
  bottomPaddingBind(expr: string): CheckDelegateBuilder;
  checkState(value: QmlEnumToken): CheckDelegateBuilder;
  checkStateBind(expr: string): CheckDelegateBuilder;
  checkable(value: boolean): CheckDelegateBuilder;
  checkableBind(expr: string): CheckDelegateBuilder;
  checked(value: boolean): CheckDelegateBuilder;
  checkedBind(expr: string): CheckDelegateBuilder;
  clip(value: boolean): CheckDelegateBuilder;
  clipBind(expr: string): CheckDelegateBuilder;
  containmentMask(value: QtObjectBuilder): CheckDelegateBuilder;
  containmentMaskBind(expr: string): CheckDelegateBuilder;
  contentItem(value: ItemBuilder): CheckDelegateBuilder;
  contentItemBind(expr: string): CheckDelegateBuilder;
  display(value: QmlEnumToken): CheckDelegateBuilder;
  displayBind(expr: string): CheckDelegateBuilder;
  down(value: boolean): CheckDelegateBuilder;
  downBind(expr: string): CheckDelegateBuilder;
  enabled(value: boolean): CheckDelegateBuilder;
  enabledBind(expr: string): CheckDelegateBuilder;
  focus(value: boolean): CheckDelegateBuilder;
  focusBind(expr: string): CheckDelegateBuilder;
  focusPolicy(value: QmlEnumToken): CheckDelegateBuilder;
  focusPolicyBind(expr: string): CheckDelegateBuilder;
  focusReason(value: QmlEnumToken): CheckDelegateBuilder;
  focusReasonBind(expr: string): CheckDelegateBuilder;
  font(value: QmlFont): CheckDelegateBuilder;
  fontBind(expr: string): CheckDelegateBuilder;
  height(value: number): CheckDelegateBuilder;
  heightBind(expr: string): CheckDelegateBuilder;
  highlighted(value: boolean): CheckDelegateBuilder;
  highlightedBind(expr: string): CheckDelegateBuilder;
  horizontalPadding(value: number): CheckDelegateBuilder;
  horizontalPaddingBind(expr: string): CheckDelegateBuilder;
  hoverEnabled(value: boolean): CheckDelegateBuilder;
  hoverEnabledBind(expr: string): CheckDelegateBuilder;
  icon(value: QmlValue): CheckDelegateBuilder;
  iconBind(expr: string): CheckDelegateBuilder;
  implicitHeight(value: number): CheckDelegateBuilder;
  implicitHeightBind(expr: string): CheckDelegateBuilder;
  implicitWidth(value: number): CheckDelegateBuilder;
  implicitWidthBind(expr: string): CheckDelegateBuilder;
  indicator(value: ItemBuilder): CheckDelegateBuilder;
  indicatorBind(expr: string): CheckDelegateBuilder;
  leftInset(value: number): CheckDelegateBuilder;
  leftInsetBind(expr: string): CheckDelegateBuilder;
  leftPadding(value: number): CheckDelegateBuilder;
  leftPaddingBind(expr: string): CheckDelegateBuilder;
  locale(value: string): CheckDelegateBuilder;
  localeBind(expr: string): CheckDelegateBuilder;
  nextCheckState(value: QmlValue): CheckDelegateBuilder;
  nextCheckStateBind(expr: string): CheckDelegateBuilder;
  objectName(value: string): CheckDelegateBuilder;
  objectNameBind(expr: string): CheckDelegateBuilder;
  opacity(value: number): CheckDelegateBuilder;
  opacityBind(expr: string): CheckDelegateBuilder;
  padding(value: number): CheckDelegateBuilder;
  paddingBind(expr: string): CheckDelegateBuilder;
  palette(value: PaletteBuilder): CheckDelegateBuilder;
  paletteBind(expr: string): CheckDelegateBuilder;
  parent(value: ItemBuilder): CheckDelegateBuilder;
  parentBind(expr: string): CheckDelegateBuilder;
  rightInset(value: number): CheckDelegateBuilder;
  rightInsetBind(expr: string): CheckDelegateBuilder;
  rightPadding(value: number): CheckDelegateBuilder;
  rightPaddingBind(expr: string): CheckDelegateBuilder;
  rotation(value: number): CheckDelegateBuilder;
  rotationBind(expr: string): CheckDelegateBuilder;
  scale(value: number): CheckDelegateBuilder;
  scaleBind(expr: string): CheckDelegateBuilder;
  smooth(value: boolean): CheckDelegateBuilder;
  smoothBind(expr: string): CheckDelegateBuilder;
  spacing(value: number): CheckDelegateBuilder;
  spacingBind(expr: string): CheckDelegateBuilder;
  state(value: string): CheckDelegateBuilder;
  stateBind(expr: string): CheckDelegateBuilder;
  text(value: string): CheckDelegateBuilder;
  textBind(expr: string): CheckDelegateBuilder;
  topInset(value: number): CheckDelegateBuilder;
  topInsetBind(expr: string): CheckDelegateBuilder;
  topPadding(value: number): CheckDelegateBuilder;
  topPaddingBind(expr: string): CheckDelegateBuilder;
  transformOrigin(value: QmlEnumToken): CheckDelegateBuilder;
  transformOriginBind(expr: string): CheckDelegateBuilder;
  tristate(value: boolean): CheckDelegateBuilder;
  tristateBind(expr: string): CheckDelegateBuilder;
  verticalPadding(value: number): CheckDelegateBuilder;
  verticalPaddingBind(expr: string): CheckDelegateBuilder;
  visible(value: boolean): CheckDelegateBuilder;
  visibleBind(expr: string): CheckDelegateBuilder;
  wheelEnabled(value: boolean): CheckDelegateBuilder;
  wheelEnabledBind(expr: string): CheckDelegateBuilder;
  width(value: number): CheckDelegateBuilder;
  widthBind(expr: string): CheckDelegateBuilder;
  x(value: number): CheckDelegateBuilder;
  xBind(expr: string): CheckDelegateBuilder;
  y(value: number): CheckDelegateBuilder;
  yBind(expr: string): CheckDelegateBuilder;
  z(value: number): CheckDelegateBuilder;
  zBind(expr: string): CheckDelegateBuilder;
  onActionChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onAutoExclusiveChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onAutoRepeatChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onAutoRepeatDelayChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onCanceled(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onCheckStateChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onCheckableChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onCheckedChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onClicked(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onClipChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onDisplayChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onDownChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onFontChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onHighlightedChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onIconChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onIndicatorChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onNextCheckStateChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onParentChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPressAndHold(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPressXChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPressYChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPressed(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onReleased(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onStateChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onTextChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onToggled(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onTristateChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onXChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onYChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  onZChanged(handler: DslSignalHandlerValue): CheckDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CheckDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): CheckDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): CheckDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): CheckDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): CheckDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): CheckDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): CheckDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): CheckDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): CheckDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): CheckDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): CheckDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): CheckDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): CheckDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): CheckDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): CheckDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): CheckDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): CheckDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): CheckDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): CheckDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): CheckDelegateBuilder;
}

const CHECKDELEGATE_META: TypeMetadata = {
  typeName: 'CheckDelegate',
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
    { name: 'checkState', hasValue: true, hasBinding: true },
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
    { name: 'nextCheckState', hasValue: true, hasBinding: true },
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
    { name: 'tristate', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCheckStateChanged', paramCount: 0 },
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
    { handlerName: 'onNextCheckStateChanged', paramCount: 0 },
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
    { handlerName: 'onTristateChanged', paramCount: 0 },
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

export function CheckDelegate(): CheckDelegateBuilder {
  return createFluentBuilder(
    'CheckDelegate',
    CHECKDELEGATE_META,
  ) as unknown as CheckDelegateBuilder;
}

export namespace CheckDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('CheckDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('CheckDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('CheckDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('CheckDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'CheckDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'CheckDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('CheckDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('CheckDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('CheckDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('CheckDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'CheckDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('CheckDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('CheckDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('CheckDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('CheckDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('CheckDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('CheckDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('CheckDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('CheckDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('CheckDelegate', 'TransformOrigin', 'BottomRight');
  }
}
