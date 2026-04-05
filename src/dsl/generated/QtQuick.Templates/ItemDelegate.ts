// AUTO-GENERATED — DO NOT EDIT
// Type: ItemDelegate
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
export interface ItemDelegateBuilder {
  id(id: string): ItemDelegateBuilder;
  child(obj: QmlObjectBuilder): ItemDelegateBuilder;

  action(value: ActionBuilder): ItemDelegateBuilder;
  actionBind(expr: string): ItemDelegateBuilder;
  activeFocusOnTab(value: boolean): ItemDelegateBuilder;
  activeFocusOnTabBind(expr: string): ItemDelegateBuilder;
  antialiasing(value: boolean): ItemDelegateBuilder;
  antialiasingBind(expr: string): ItemDelegateBuilder;
  autoExclusive(value: boolean): ItemDelegateBuilder;
  autoExclusiveBind(expr: string): ItemDelegateBuilder;
  autoRepeat(value: boolean): ItemDelegateBuilder;
  autoRepeatBind(expr: string): ItemDelegateBuilder;
  autoRepeatDelay(value: number): ItemDelegateBuilder;
  autoRepeatDelayBind(expr: string): ItemDelegateBuilder;
  autoRepeatInterval(value: number): ItemDelegateBuilder;
  autoRepeatIntervalBind(expr: string): ItemDelegateBuilder;
  background(value: ItemBuilder): ItemDelegateBuilder;
  backgroundBind(expr: string): ItemDelegateBuilder;
  baselineOffset(value: number): ItemDelegateBuilder;
  baselineOffsetBind(expr: string): ItemDelegateBuilder;
  bottomInset(value: number): ItemDelegateBuilder;
  bottomInsetBind(expr: string): ItemDelegateBuilder;
  bottomPadding(value: number): ItemDelegateBuilder;
  bottomPaddingBind(expr: string): ItemDelegateBuilder;
  checkable(value: boolean): ItemDelegateBuilder;
  checkableBind(expr: string): ItemDelegateBuilder;
  checked(value: boolean): ItemDelegateBuilder;
  checkedBind(expr: string): ItemDelegateBuilder;
  clip(value: boolean): ItemDelegateBuilder;
  clipBind(expr: string): ItemDelegateBuilder;
  containmentMask(value: QtObjectBuilder): ItemDelegateBuilder;
  containmentMaskBind(expr: string): ItemDelegateBuilder;
  contentItem(value: ItemBuilder): ItemDelegateBuilder;
  contentItemBind(expr: string): ItemDelegateBuilder;
  display(value: QmlEnumToken): ItemDelegateBuilder;
  displayBind(expr: string): ItemDelegateBuilder;
  down(value: boolean): ItemDelegateBuilder;
  downBind(expr: string): ItemDelegateBuilder;
  enabled(value: boolean): ItemDelegateBuilder;
  enabledBind(expr: string): ItemDelegateBuilder;
  focus(value: boolean): ItemDelegateBuilder;
  focusBind(expr: string): ItemDelegateBuilder;
  focusPolicy(value: QmlEnumToken): ItemDelegateBuilder;
  focusPolicyBind(expr: string): ItemDelegateBuilder;
  focusReason(value: QmlEnumToken): ItemDelegateBuilder;
  focusReasonBind(expr: string): ItemDelegateBuilder;
  font(value: QmlFont): ItemDelegateBuilder;
  fontBind(expr: string): ItemDelegateBuilder;
  height(value: number): ItemDelegateBuilder;
  heightBind(expr: string): ItemDelegateBuilder;
  highlighted(value: boolean): ItemDelegateBuilder;
  highlightedBind(expr: string): ItemDelegateBuilder;
  horizontalPadding(value: number): ItemDelegateBuilder;
  horizontalPaddingBind(expr: string): ItemDelegateBuilder;
  hoverEnabled(value: boolean): ItemDelegateBuilder;
  hoverEnabledBind(expr: string): ItemDelegateBuilder;
  icon(value: QmlValue): ItemDelegateBuilder;
  iconBind(expr: string): ItemDelegateBuilder;
  implicitHeight(value: number): ItemDelegateBuilder;
  implicitHeightBind(expr: string): ItemDelegateBuilder;
  implicitWidth(value: number): ItemDelegateBuilder;
  implicitWidthBind(expr: string): ItemDelegateBuilder;
  indicator(value: ItemBuilder): ItemDelegateBuilder;
  indicatorBind(expr: string): ItemDelegateBuilder;
  leftInset(value: number): ItemDelegateBuilder;
  leftInsetBind(expr: string): ItemDelegateBuilder;
  leftPadding(value: number): ItemDelegateBuilder;
  leftPaddingBind(expr: string): ItemDelegateBuilder;
  locale(value: QmlValue): ItemDelegateBuilder;
  localeBind(expr: string): ItemDelegateBuilder;
  objectName(value: string): ItemDelegateBuilder;
  objectNameBind(expr: string): ItemDelegateBuilder;
  opacity(value: number): ItemDelegateBuilder;
  opacityBind(expr: string): ItemDelegateBuilder;
  padding(value: number): ItemDelegateBuilder;
  paddingBind(expr: string): ItemDelegateBuilder;
  palette(value: PaletteBuilder): ItemDelegateBuilder;
  paletteBind(expr: string): ItemDelegateBuilder;
  parent(value: ItemBuilder): ItemDelegateBuilder;
  parentBind(expr: string): ItemDelegateBuilder;
  rightInset(value: number): ItemDelegateBuilder;
  rightInsetBind(expr: string): ItemDelegateBuilder;
  rightPadding(value: number): ItemDelegateBuilder;
  rightPaddingBind(expr: string): ItemDelegateBuilder;
  rotation(value: number): ItemDelegateBuilder;
  rotationBind(expr: string): ItemDelegateBuilder;
  scale(value: number): ItemDelegateBuilder;
  scaleBind(expr: string): ItemDelegateBuilder;
  smooth(value: boolean): ItemDelegateBuilder;
  smoothBind(expr: string): ItemDelegateBuilder;
  spacing(value: number): ItemDelegateBuilder;
  spacingBind(expr: string): ItemDelegateBuilder;
  state(value: string): ItemDelegateBuilder;
  stateBind(expr: string): ItemDelegateBuilder;
  text(value: string): ItemDelegateBuilder;
  textBind(expr: string): ItemDelegateBuilder;
  topInset(value: number): ItemDelegateBuilder;
  topInsetBind(expr: string): ItemDelegateBuilder;
  topPadding(value: number): ItemDelegateBuilder;
  topPaddingBind(expr: string): ItemDelegateBuilder;
  transformOrigin(value: QmlEnumToken): ItemDelegateBuilder;
  transformOriginBind(expr: string): ItemDelegateBuilder;
  verticalPadding(value: number): ItemDelegateBuilder;
  verticalPaddingBind(expr: string): ItemDelegateBuilder;
  visible(value: boolean): ItemDelegateBuilder;
  visibleBind(expr: string): ItemDelegateBuilder;
  wheelEnabled(value: boolean): ItemDelegateBuilder;
  wheelEnabledBind(expr: string): ItemDelegateBuilder;
  width(value: number): ItemDelegateBuilder;
  widthBind(expr: string): ItemDelegateBuilder;
  x(value: number): ItemDelegateBuilder;
  xBind(expr: string): ItemDelegateBuilder;
  y(value: number): ItemDelegateBuilder;
  yBind(expr: string): ItemDelegateBuilder;
  z(value: number): ItemDelegateBuilder;
  zBind(expr: string): ItemDelegateBuilder;
  onActionChanged(body: string): ItemDelegateBuilder;
  onActiveFocusChanged(body: string): ItemDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): ItemDelegateBuilder;
  onAntialiasingChanged(body: string): ItemDelegateBuilder;
  onAutoExclusiveChanged(body: string): ItemDelegateBuilder;
  onAutoRepeatChanged(body: string): ItemDelegateBuilder;
  onAutoRepeatDelayChanged(body: string): ItemDelegateBuilder;
  onAutoRepeatIntervalChanged(body: string): ItemDelegateBuilder;
  onAvailableHeightChanged(body: string): ItemDelegateBuilder;
  onAvailableWidthChanged(body: string): ItemDelegateBuilder;
  onBackgroundChanged(body: string): ItemDelegateBuilder;
  onBaselineOffsetChanged(body: string): ItemDelegateBuilder;
  onBottomInsetChanged(body: string): ItemDelegateBuilder;
  onBottomPaddingChanged(body: string): ItemDelegateBuilder;
  onCanceled(body: string): ItemDelegateBuilder;
  onCheckableChanged(body: string): ItemDelegateBuilder;
  onCheckedChanged(body: string): ItemDelegateBuilder;
  onChildrenChanged(body: string): ItemDelegateBuilder;
  onChildrenRectChanged(body: string): ItemDelegateBuilder;
  onClicked(body: string): ItemDelegateBuilder;
  onClipChanged(body: string): ItemDelegateBuilder;
  onContainmentMaskChanged(body: string): ItemDelegateBuilder;
  onContentItemChanged(body: string): ItemDelegateBuilder;
  onDisplayChanged(body: string): ItemDelegateBuilder;
  onDoubleClicked(body: string): ItemDelegateBuilder;
  onDownChanged(body: string): ItemDelegateBuilder;
  onEnabledChanged(body: string): ItemDelegateBuilder;
  onFocusChanged(body: string): ItemDelegateBuilder;
  onFocusPolicyChanged(body: string): ItemDelegateBuilder;
  onFocusReasonChanged(body: string): ItemDelegateBuilder;
  onFontChanged(body: string): ItemDelegateBuilder;
  onHeightChanged(body: string): ItemDelegateBuilder;
  onHighlightedChanged(body: string): ItemDelegateBuilder;
  onHorizontalPaddingChanged(body: string): ItemDelegateBuilder;
  onHoverEnabledChanged(body: string): ItemDelegateBuilder;
  onHoveredChanged(body: string): ItemDelegateBuilder;
  onIconChanged(body: string): ItemDelegateBuilder;
  onImplicitBackgroundHeightChanged(body: string): ItemDelegateBuilder;
  onImplicitBackgroundWidthChanged(body: string): ItemDelegateBuilder;
  onImplicitContentHeightChanged(body: string): ItemDelegateBuilder;
  onImplicitContentWidthChanged(body: string): ItemDelegateBuilder;
  onImplicitHeightChanged(body: string): ItemDelegateBuilder;
  onImplicitIndicatorHeightChanged(body: string): ItemDelegateBuilder;
  onImplicitIndicatorWidthChanged(body: string): ItemDelegateBuilder;
  onImplicitWidthChanged(body: string): ItemDelegateBuilder;
  onIndicatorChanged(body: string): ItemDelegateBuilder;
  onLeftInsetChanged(body: string): ItemDelegateBuilder;
  onLeftPaddingChanged(body: string): ItemDelegateBuilder;
  onLocaleChanged(body: string): ItemDelegateBuilder;
  onMirroredChanged(body: string): ItemDelegateBuilder;
  onObjectNameChanged(body: string): ItemDelegateBuilder;
  onOpacityChanged(body: string): ItemDelegateBuilder;
  onPaddingChanged(body: string): ItemDelegateBuilder;
  onPaletteChanged(body: string): ItemDelegateBuilder;
  onPaletteCreated(body: string): ItemDelegateBuilder;
  onParentChanged(body: string): ItemDelegateBuilder;
  onPressAndHold(body: string): ItemDelegateBuilder;
  onPressXChanged(body: string): ItemDelegateBuilder;
  onPressYChanged(body: string): ItemDelegateBuilder;
  onPressed(body: string): ItemDelegateBuilder;
  onPressedChanged(body: string): ItemDelegateBuilder;
  onReleased(body: string): ItemDelegateBuilder;
  onRightInsetChanged(body: string): ItemDelegateBuilder;
  onRightPaddingChanged(body: string): ItemDelegateBuilder;
  onRotationChanged(body: string): ItemDelegateBuilder;
  onScaleChanged(body: string): ItemDelegateBuilder;
  onSmoothChanged(body: string): ItemDelegateBuilder;
  onSpacingChanged(body: string): ItemDelegateBuilder;
  onStateChanged(body: string): ItemDelegateBuilder;
  onTextChanged(body: string): ItemDelegateBuilder;
  onToggled(body: string): ItemDelegateBuilder;
  onTopInsetChanged(body: string): ItemDelegateBuilder;
  onTopPaddingChanged(body: string): ItemDelegateBuilder;
  onTransformOriginChanged(body: string): ItemDelegateBuilder;
  onVerticalPaddingChanged(body: string): ItemDelegateBuilder;
  onVisibleChanged(body: string): ItemDelegateBuilder;
  onVisibleChildrenChanged(body: string): ItemDelegateBuilder;
  onVisualFocusChanged(body: string): ItemDelegateBuilder;
  onWheelEnabledChanged(body: string): ItemDelegateBuilder;
  onWidthChanged(body: string): ItemDelegateBuilder;
  onWindowChanged(body: string): ItemDelegateBuilder;
  onXChanged(body: string): ItemDelegateBuilder;
  onYChanged(body: string): ItemDelegateBuilder;
  onZChanged(body: string): ItemDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ItemDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): ItemDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ItemDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ItemDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ItemDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ItemDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ItemDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ItemDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ItemDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ItemDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ItemDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ItemDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ItemDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ItemDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ItemDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ItemDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ItemDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ItemDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ItemDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ItemDelegateBuilder;
}

const ITEMDELEGATE_META: TypeMetadata = {
  typeName: 'ItemDelegate',
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

export function ItemDelegate(): ItemDelegateBuilder {
  return createFluentBuilder('ItemDelegate', ITEMDELEGATE_META) as unknown as ItemDelegateBuilder;
}

export namespace ItemDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('ItemDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('ItemDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('ItemDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('ItemDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ItemDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ItemDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ItemDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ItemDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ItemDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ItemDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ItemDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ItemDelegate', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ItemDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ItemDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ItemDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ItemDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ItemDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ItemDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ItemDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ItemDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ItemDelegate', 'TransformOrigin', 'BottomRight');
  }
}
