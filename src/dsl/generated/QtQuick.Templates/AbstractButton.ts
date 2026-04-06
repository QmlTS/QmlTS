// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractButton
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
export interface AbstractButtonBuilder {
  id(id: string): AbstractButtonBuilder;
  child(obj: QmlObjectBuilder): AbstractButtonBuilder;
  children(...objs: QmlObjectBuilder[]): AbstractButtonBuilder;

  action(value: ActionBuilder): AbstractButtonBuilder;
  actionBind(expr: string): AbstractButtonBuilder;
  activeFocusOnTab(value: boolean): AbstractButtonBuilder;
  activeFocusOnTabBind(expr: string): AbstractButtonBuilder;
  antialiasing(value: boolean): AbstractButtonBuilder;
  antialiasingBind(expr: string): AbstractButtonBuilder;
  autoExclusive(value: boolean): AbstractButtonBuilder;
  autoExclusiveBind(expr: string): AbstractButtonBuilder;
  autoRepeat(value: boolean): AbstractButtonBuilder;
  autoRepeatBind(expr: string): AbstractButtonBuilder;
  autoRepeatDelay(value: number): AbstractButtonBuilder;
  autoRepeatDelayBind(expr: string): AbstractButtonBuilder;
  autoRepeatInterval(value: number): AbstractButtonBuilder;
  autoRepeatIntervalBind(expr: string): AbstractButtonBuilder;
  background(value: ItemBuilder): AbstractButtonBuilder;
  backgroundBind(expr: string): AbstractButtonBuilder;
  baselineOffset(value: number): AbstractButtonBuilder;
  baselineOffsetBind(expr: string): AbstractButtonBuilder;
  bottomInset(value: number): AbstractButtonBuilder;
  bottomInsetBind(expr: string): AbstractButtonBuilder;
  bottomPadding(value: number): AbstractButtonBuilder;
  bottomPaddingBind(expr: string): AbstractButtonBuilder;
  checkable(value: boolean): AbstractButtonBuilder;
  checkableBind(expr: string): AbstractButtonBuilder;
  checked(value: boolean): AbstractButtonBuilder;
  checkedBind(expr: string): AbstractButtonBuilder;
  clip(value: boolean): AbstractButtonBuilder;
  clipBind(expr: string): AbstractButtonBuilder;
  containmentMask(value: QtObjectBuilder): AbstractButtonBuilder;
  containmentMaskBind(expr: string): AbstractButtonBuilder;
  contentItem(value: ItemBuilder): AbstractButtonBuilder;
  contentItemBind(expr: string): AbstractButtonBuilder;
  display(value: QmlEnumToken): AbstractButtonBuilder;
  displayBind(expr: string): AbstractButtonBuilder;
  down(value: boolean): AbstractButtonBuilder;
  downBind(expr: string): AbstractButtonBuilder;
  enabled(value: boolean): AbstractButtonBuilder;
  enabledBind(expr: string): AbstractButtonBuilder;
  focus(value: boolean): AbstractButtonBuilder;
  focusBind(expr: string): AbstractButtonBuilder;
  focusPolicy(value: QmlEnumToken): AbstractButtonBuilder;
  focusPolicyBind(expr: string): AbstractButtonBuilder;
  focusReason(value: QmlEnumToken): AbstractButtonBuilder;
  focusReasonBind(expr: string): AbstractButtonBuilder;
  font(value: QmlFont): AbstractButtonBuilder;
  fontBind(expr: string): AbstractButtonBuilder;
  height(value: number): AbstractButtonBuilder;
  heightBind(expr: string): AbstractButtonBuilder;
  horizontalPadding(value: number): AbstractButtonBuilder;
  horizontalPaddingBind(expr: string): AbstractButtonBuilder;
  hoverEnabled(value: boolean): AbstractButtonBuilder;
  hoverEnabledBind(expr: string): AbstractButtonBuilder;
  icon(value: QmlValue): AbstractButtonBuilder;
  iconBind(expr: string): AbstractButtonBuilder;
  implicitHeight(value: number): AbstractButtonBuilder;
  implicitHeightBind(expr: string): AbstractButtonBuilder;
  implicitWidth(value: number): AbstractButtonBuilder;
  implicitWidthBind(expr: string): AbstractButtonBuilder;
  indicator(value: ItemBuilder): AbstractButtonBuilder;
  indicatorBind(expr: string): AbstractButtonBuilder;
  leftInset(value: number): AbstractButtonBuilder;
  leftInsetBind(expr: string): AbstractButtonBuilder;
  leftPadding(value: number): AbstractButtonBuilder;
  leftPaddingBind(expr: string): AbstractButtonBuilder;
  locale(value: string): AbstractButtonBuilder;
  localeBind(expr: string): AbstractButtonBuilder;
  objectName(value: string): AbstractButtonBuilder;
  objectNameBind(expr: string): AbstractButtonBuilder;
  opacity(value: number): AbstractButtonBuilder;
  opacityBind(expr: string): AbstractButtonBuilder;
  padding(value: number): AbstractButtonBuilder;
  paddingBind(expr: string): AbstractButtonBuilder;
  palette(value: PaletteBuilder): AbstractButtonBuilder;
  paletteBind(expr: string): AbstractButtonBuilder;
  parent(value: ItemBuilder): AbstractButtonBuilder;
  parentBind(expr: string): AbstractButtonBuilder;
  rightInset(value: number): AbstractButtonBuilder;
  rightInsetBind(expr: string): AbstractButtonBuilder;
  rightPadding(value: number): AbstractButtonBuilder;
  rightPaddingBind(expr: string): AbstractButtonBuilder;
  rotation(value: number): AbstractButtonBuilder;
  rotationBind(expr: string): AbstractButtonBuilder;
  scale(value: number): AbstractButtonBuilder;
  scaleBind(expr: string): AbstractButtonBuilder;
  smooth(value: boolean): AbstractButtonBuilder;
  smoothBind(expr: string): AbstractButtonBuilder;
  spacing(value: number): AbstractButtonBuilder;
  spacingBind(expr: string): AbstractButtonBuilder;
  state(value: string): AbstractButtonBuilder;
  stateBind(expr: string): AbstractButtonBuilder;
  text(value: string): AbstractButtonBuilder;
  textBind(expr: string): AbstractButtonBuilder;
  topInset(value: number): AbstractButtonBuilder;
  topInsetBind(expr: string): AbstractButtonBuilder;
  topPadding(value: number): AbstractButtonBuilder;
  topPaddingBind(expr: string): AbstractButtonBuilder;
  transformOrigin(value: QmlEnumToken): AbstractButtonBuilder;
  transformOriginBind(expr: string): AbstractButtonBuilder;
  verticalPadding(value: number): AbstractButtonBuilder;
  verticalPaddingBind(expr: string): AbstractButtonBuilder;
  visible(value: boolean): AbstractButtonBuilder;
  visibleBind(expr: string): AbstractButtonBuilder;
  wheelEnabled(value: boolean): AbstractButtonBuilder;
  wheelEnabledBind(expr: string): AbstractButtonBuilder;
  width(value: number): AbstractButtonBuilder;
  widthBind(expr: string): AbstractButtonBuilder;
  x(value: number): AbstractButtonBuilder;
  xBind(expr: string): AbstractButtonBuilder;
  y(value: number): AbstractButtonBuilder;
  yBind(expr: string): AbstractButtonBuilder;
  z(value: number): AbstractButtonBuilder;
  zBind(expr: string): AbstractButtonBuilder;
  onActionChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onAutoExclusiveChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onAutoRepeatChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onAutoRepeatDelayChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onAutoRepeatIntervalChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onCanceled(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onCheckableChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onCheckedChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onClicked(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onClipChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onDisplayChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onDownChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onFontChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onIconChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onIndicatorChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPressAndHold(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPressXChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPressYChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPressed(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onReleased(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onStateChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onTextChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onToggled(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onXChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onYChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  onZChanged(handler: DslSignalHandlerValue): AbstractButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): AbstractButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): AbstractButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): AbstractButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): AbstractButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractButtonBuilder;
}

const ABSTRACTBUTTON_META: TypeMetadata = {
  typeName: 'AbstractButton',
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

export function AbstractButton(): AbstractButtonBuilder {
  return createFluentBuilder(
    'AbstractButton',
    ABSTRACTBUTTON_META,
  ) as unknown as AbstractButtonBuilder;
}

export namespace AbstractButton {
  export namespace Display {
    export const IconOnly = createEnumToken('AbstractButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('AbstractButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('AbstractButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('AbstractButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AbstractButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AbstractButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('AbstractButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AbstractButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AbstractButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AbstractButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'AbstractButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AbstractButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AbstractButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AbstractButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AbstractButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AbstractButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AbstractButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AbstractButton', 'TransformOrigin', 'BottomRight');
  }
}
