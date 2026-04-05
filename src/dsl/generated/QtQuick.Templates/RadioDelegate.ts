// AUTO-GENERATED — DO NOT EDIT
// Type: RadioDelegate
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
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface RadioDelegateBuilder {
  id(id: string): RadioDelegateBuilder;
  child(obj: QmlObjectBuilder): RadioDelegateBuilder;

  action(value: ActionBuilder): RadioDelegateBuilder;
  actionBind(expr: string): RadioDelegateBuilder;
  activeFocusOnTab(value: boolean): RadioDelegateBuilder;
  activeFocusOnTabBind(expr: string): RadioDelegateBuilder;
  antialiasing(value: boolean): RadioDelegateBuilder;
  antialiasingBind(expr: string): RadioDelegateBuilder;
  autoExclusive(value: boolean): RadioDelegateBuilder;
  autoExclusiveBind(expr: string): RadioDelegateBuilder;
  autoRepeat(value: boolean): RadioDelegateBuilder;
  autoRepeatBind(expr: string): RadioDelegateBuilder;
  autoRepeatDelay(value: number): RadioDelegateBuilder;
  autoRepeatDelayBind(expr: string): RadioDelegateBuilder;
  autoRepeatInterval(value: number): RadioDelegateBuilder;
  autoRepeatIntervalBind(expr: string): RadioDelegateBuilder;
  background(value: ItemBuilder): RadioDelegateBuilder;
  backgroundBind(expr: string): RadioDelegateBuilder;
  baselineOffset(value: number): RadioDelegateBuilder;
  baselineOffsetBind(expr: string): RadioDelegateBuilder;
  bottomInset(value: number): RadioDelegateBuilder;
  bottomInsetBind(expr: string): RadioDelegateBuilder;
  bottomPadding(value: number): RadioDelegateBuilder;
  bottomPaddingBind(expr: string): RadioDelegateBuilder;
  checkable(value: boolean): RadioDelegateBuilder;
  checkableBind(expr: string): RadioDelegateBuilder;
  checked(value: boolean): RadioDelegateBuilder;
  checkedBind(expr: string): RadioDelegateBuilder;
  clip(value: boolean): RadioDelegateBuilder;
  clipBind(expr: string): RadioDelegateBuilder;
  containmentMask(value: QtObjectBuilder): RadioDelegateBuilder;
  containmentMaskBind(expr: string): RadioDelegateBuilder;
  contentItem(value: ItemBuilder): RadioDelegateBuilder;
  contentItemBind(expr: string): RadioDelegateBuilder;
  display(value: QmlEnumToken): RadioDelegateBuilder;
  displayBind(expr: string): RadioDelegateBuilder;
  down(value: boolean): RadioDelegateBuilder;
  downBind(expr: string): RadioDelegateBuilder;
  enabled(value: boolean): RadioDelegateBuilder;
  enabledBind(expr: string): RadioDelegateBuilder;
  focus(value: boolean): RadioDelegateBuilder;
  focusBind(expr: string): RadioDelegateBuilder;
  focusPolicy(value: QmlEnumToken): RadioDelegateBuilder;
  focusPolicyBind(expr: string): RadioDelegateBuilder;
  focusReason(value: QmlEnumToken): RadioDelegateBuilder;
  focusReasonBind(expr: string): RadioDelegateBuilder;
  font(value: QmlFont): RadioDelegateBuilder;
  fontBind(expr: string): RadioDelegateBuilder;
  height(value: number): RadioDelegateBuilder;
  heightBind(expr: string): RadioDelegateBuilder;
  highlighted(value: boolean): RadioDelegateBuilder;
  highlightedBind(expr: string): RadioDelegateBuilder;
  horizontalPadding(value: number): RadioDelegateBuilder;
  horizontalPaddingBind(expr: string): RadioDelegateBuilder;
  hoverEnabled(value: boolean): RadioDelegateBuilder;
  hoverEnabledBind(expr: string): RadioDelegateBuilder;
  icon(value: QmlValue): RadioDelegateBuilder;
  iconBind(expr: string): RadioDelegateBuilder;
  implicitHeight(value: number): RadioDelegateBuilder;
  implicitHeightBind(expr: string): RadioDelegateBuilder;
  implicitWidth(value: number): RadioDelegateBuilder;
  implicitWidthBind(expr: string): RadioDelegateBuilder;
  indicator(value: ItemBuilder): RadioDelegateBuilder;
  indicatorBind(expr: string): RadioDelegateBuilder;
  leftInset(value: number): RadioDelegateBuilder;
  leftInsetBind(expr: string): RadioDelegateBuilder;
  leftPadding(value: number): RadioDelegateBuilder;
  leftPaddingBind(expr: string): RadioDelegateBuilder;
  locale(value: string): RadioDelegateBuilder;
  localeBind(expr: string): RadioDelegateBuilder;
  objectName(value: string): RadioDelegateBuilder;
  objectNameBind(expr: string): RadioDelegateBuilder;
  opacity(value: number): RadioDelegateBuilder;
  opacityBind(expr: string): RadioDelegateBuilder;
  padding(value: number): RadioDelegateBuilder;
  paddingBind(expr: string): RadioDelegateBuilder;
  palette(value: PaletteBuilder): RadioDelegateBuilder;
  paletteBind(expr: string): RadioDelegateBuilder;
  parent(value: ItemBuilder): RadioDelegateBuilder;
  parentBind(expr: string): RadioDelegateBuilder;
  rightInset(value: number): RadioDelegateBuilder;
  rightInsetBind(expr: string): RadioDelegateBuilder;
  rightPadding(value: number): RadioDelegateBuilder;
  rightPaddingBind(expr: string): RadioDelegateBuilder;
  rotation(value: number): RadioDelegateBuilder;
  rotationBind(expr: string): RadioDelegateBuilder;
  scale(value: number): RadioDelegateBuilder;
  scaleBind(expr: string): RadioDelegateBuilder;
  smooth(value: boolean): RadioDelegateBuilder;
  smoothBind(expr: string): RadioDelegateBuilder;
  spacing(value: number): RadioDelegateBuilder;
  spacingBind(expr: string): RadioDelegateBuilder;
  state(value: string): RadioDelegateBuilder;
  stateBind(expr: string): RadioDelegateBuilder;
  text(value: string): RadioDelegateBuilder;
  textBind(expr: string): RadioDelegateBuilder;
  topInset(value: number): RadioDelegateBuilder;
  topInsetBind(expr: string): RadioDelegateBuilder;
  topPadding(value: number): RadioDelegateBuilder;
  topPaddingBind(expr: string): RadioDelegateBuilder;
  transformOrigin(value: QmlEnumToken): RadioDelegateBuilder;
  transformOriginBind(expr: string): RadioDelegateBuilder;
  verticalPadding(value: number): RadioDelegateBuilder;
  verticalPaddingBind(expr: string): RadioDelegateBuilder;
  visible(value: boolean): RadioDelegateBuilder;
  visibleBind(expr: string): RadioDelegateBuilder;
  wheelEnabled(value: boolean): RadioDelegateBuilder;
  wheelEnabledBind(expr: string): RadioDelegateBuilder;
  width(value: number): RadioDelegateBuilder;
  widthBind(expr: string): RadioDelegateBuilder;
  x(value: number): RadioDelegateBuilder;
  xBind(expr: string): RadioDelegateBuilder;
  y(value: number): RadioDelegateBuilder;
  yBind(expr: string): RadioDelegateBuilder;
  z(value: number): RadioDelegateBuilder;
  zBind(expr: string): RadioDelegateBuilder;
  onActionChanged(body: string): RadioDelegateBuilder;
  onActiveFocusChanged(body: string): RadioDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): RadioDelegateBuilder;
  onAntialiasingChanged(body: string): RadioDelegateBuilder;
  onAutoExclusiveChanged(body: string): RadioDelegateBuilder;
  onAutoRepeatChanged(body: string): RadioDelegateBuilder;
  onAutoRepeatDelayChanged(body: string): RadioDelegateBuilder;
  onAutoRepeatIntervalChanged(body: string): RadioDelegateBuilder;
  onAvailableHeightChanged(body: string): RadioDelegateBuilder;
  onAvailableWidthChanged(body: string): RadioDelegateBuilder;
  onBackgroundChanged(body: string): RadioDelegateBuilder;
  onBaselineOffsetChanged(body: string): RadioDelegateBuilder;
  onBottomInsetChanged(body: string): RadioDelegateBuilder;
  onBottomPaddingChanged(body: string): RadioDelegateBuilder;
  onCanceled(body: string): RadioDelegateBuilder;
  onCheckableChanged(body: string): RadioDelegateBuilder;
  onCheckedChanged(body: string): RadioDelegateBuilder;
  onChildrenChanged(body: string): RadioDelegateBuilder;
  onChildrenRectChanged(body: string): RadioDelegateBuilder;
  onClicked(body: string): RadioDelegateBuilder;
  onClipChanged(body: string): RadioDelegateBuilder;
  onContainmentMaskChanged(body: string): RadioDelegateBuilder;
  onContentItemChanged(body: string): RadioDelegateBuilder;
  onDisplayChanged(body: string): RadioDelegateBuilder;
  onDoubleClicked(body: string): RadioDelegateBuilder;
  onDownChanged(body: string): RadioDelegateBuilder;
  onEnabledChanged(body: string): RadioDelegateBuilder;
  onFocusChanged(body: string): RadioDelegateBuilder;
  onFocusPolicyChanged(body: string): RadioDelegateBuilder;
  onFocusReasonChanged(body: string): RadioDelegateBuilder;
  onFontChanged(body: string): RadioDelegateBuilder;
  onHeightChanged(body: string): RadioDelegateBuilder;
  onHighlightedChanged(body: string): RadioDelegateBuilder;
  onHorizontalPaddingChanged(body: string): RadioDelegateBuilder;
  onHoverEnabledChanged(body: string): RadioDelegateBuilder;
  onHoveredChanged(body: string): RadioDelegateBuilder;
  onIconChanged(body: string): RadioDelegateBuilder;
  onImplicitBackgroundHeightChanged(body: string): RadioDelegateBuilder;
  onImplicitBackgroundWidthChanged(body: string): RadioDelegateBuilder;
  onImplicitContentHeightChanged(body: string): RadioDelegateBuilder;
  onImplicitContentWidthChanged(body: string): RadioDelegateBuilder;
  onImplicitHeightChanged(body: string): RadioDelegateBuilder;
  onImplicitIndicatorHeightChanged(body: string): RadioDelegateBuilder;
  onImplicitIndicatorWidthChanged(body: string): RadioDelegateBuilder;
  onImplicitWidthChanged(body: string): RadioDelegateBuilder;
  onIndicatorChanged(body: string): RadioDelegateBuilder;
  onLeftInsetChanged(body: string): RadioDelegateBuilder;
  onLeftPaddingChanged(body: string): RadioDelegateBuilder;
  onLocaleChanged(body: string): RadioDelegateBuilder;
  onMirroredChanged(body: string): RadioDelegateBuilder;
  onObjectNameChanged(body: string): RadioDelegateBuilder;
  onOpacityChanged(body: string): RadioDelegateBuilder;
  onPaddingChanged(body: string): RadioDelegateBuilder;
  onPaletteChanged(body: string): RadioDelegateBuilder;
  onPaletteCreated(body: string): RadioDelegateBuilder;
  onParentChanged(body: string): RadioDelegateBuilder;
  onPressAndHold(body: string): RadioDelegateBuilder;
  onPressXChanged(body: string): RadioDelegateBuilder;
  onPressYChanged(body: string): RadioDelegateBuilder;
  onPressed(body: string): RadioDelegateBuilder;
  onPressedChanged(body: string): RadioDelegateBuilder;
  onReleased(body: string): RadioDelegateBuilder;
  onRightInsetChanged(body: string): RadioDelegateBuilder;
  onRightPaddingChanged(body: string): RadioDelegateBuilder;
  onRotationChanged(body: string): RadioDelegateBuilder;
  onScaleChanged(body: string): RadioDelegateBuilder;
  onSmoothChanged(body: string): RadioDelegateBuilder;
  onSpacingChanged(body: string): RadioDelegateBuilder;
  onStateChanged(body: string): RadioDelegateBuilder;
  onTextChanged(body: string): RadioDelegateBuilder;
  onToggled(body: string): RadioDelegateBuilder;
  onTopInsetChanged(body: string): RadioDelegateBuilder;
  onTopPaddingChanged(body: string): RadioDelegateBuilder;
  onTransformOriginChanged(body: string): RadioDelegateBuilder;
  onVerticalPaddingChanged(body: string): RadioDelegateBuilder;
  onVisibleChanged(body: string): RadioDelegateBuilder;
  onVisibleChildrenChanged(body: string): RadioDelegateBuilder;
  onVisualFocusChanged(body: string): RadioDelegateBuilder;
  onWheelEnabledChanged(body: string): RadioDelegateBuilder;
  onWidthChanged(body: string): RadioDelegateBuilder;
  onWindowChanged(body: string): RadioDelegateBuilder;
  onXChanged(body: string): RadioDelegateBuilder;
  onYChanged(body: string): RadioDelegateBuilder;
  onZChanged(body: string): RadioDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RadioDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): RadioDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RadioDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RadioDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RadioDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RadioDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RadioDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RadioDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RadioDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RadioDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RadioDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RadioDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RadioDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RadioDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RadioDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RadioDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RadioDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RadioDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RadioDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RadioDelegateBuilder;
}

const RADIODELEGATE_META: TypeMetadata = {
  typeName: 'RadioDelegate',
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

export function RadioDelegate(): RadioDelegateBuilder {
  return createFluentBuilder(
    'RadioDelegate',
    RADIODELEGATE_META,
  ) as unknown as RadioDelegateBuilder;
}

export namespace RadioDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('RadioDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('RadioDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('RadioDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('RadioDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RadioDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RadioDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RadioDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RadioDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RadioDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RadioDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RadioDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RadioDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RadioDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RadioDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RadioDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RadioDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RadioDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RadioDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RadioDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RadioDelegate', 'TransformOrigin', 'BottomRight');
  }
}
