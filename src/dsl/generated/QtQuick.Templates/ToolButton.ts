// AUTO-GENERATED — DO NOT EDIT
// Type: ToolButton
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
export interface ToolButtonBuilder {
  id(id: string): ToolButtonBuilder;
  child(obj: QmlObjectBuilder): ToolButtonBuilder;

  action(value: ActionBuilder): ToolButtonBuilder;
  actionBind(expr: string): ToolButtonBuilder;
  activeFocusOnTab(value: boolean): ToolButtonBuilder;
  activeFocusOnTabBind(expr: string): ToolButtonBuilder;
  antialiasing(value: boolean): ToolButtonBuilder;
  antialiasingBind(expr: string): ToolButtonBuilder;
  autoExclusive(value: boolean): ToolButtonBuilder;
  autoExclusiveBind(expr: string): ToolButtonBuilder;
  autoRepeat(value: boolean): ToolButtonBuilder;
  autoRepeatBind(expr: string): ToolButtonBuilder;
  autoRepeatDelay(value: number): ToolButtonBuilder;
  autoRepeatDelayBind(expr: string): ToolButtonBuilder;
  autoRepeatInterval(value: number): ToolButtonBuilder;
  autoRepeatIntervalBind(expr: string): ToolButtonBuilder;
  background(value: ItemBuilder): ToolButtonBuilder;
  backgroundBind(expr: string): ToolButtonBuilder;
  baselineOffset(value: number): ToolButtonBuilder;
  baselineOffsetBind(expr: string): ToolButtonBuilder;
  bottomInset(value: number): ToolButtonBuilder;
  bottomInsetBind(expr: string): ToolButtonBuilder;
  bottomPadding(value: number): ToolButtonBuilder;
  bottomPaddingBind(expr: string): ToolButtonBuilder;
  checkable(value: boolean): ToolButtonBuilder;
  checkableBind(expr: string): ToolButtonBuilder;
  checked(value: boolean): ToolButtonBuilder;
  checkedBind(expr: string): ToolButtonBuilder;
  clip(value: boolean): ToolButtonBuilder;
  clipBind(expr: string): ToolButtonBuilder;
  containmentMask(value: QtObjectBuilder): ToolButtonBuilder;
  containmentMaskBind(expr: string): ToolButtonBuilder;
  contentItem(value: ItemBuilder): ToolButtonBuilder;
  contentItemBind(expr: string): ToolButtonBuilder;
  display(value: QmlEnumToken): ToolButtonBuilder;
  displayBind(expr: string): ToolButtonBuilder;
  down(value: boolean): ToolButtonBuilder;
  downBind(expr: string): ToolButtonBuilder;
  enabled(value: boolean): ToolButtonBuilder;
  enabledBind(expr: string): ToolButtonBuilder;
  flat(value: boolean): ToolButtonBuilder;
  flatBind(expr: string): ToolButtonBuilder;
  focus(value: boolean): ToolButtonBuilder;
  focusBind(expr: string): ToolButtonBuilder;
  focusPolicy(value: QmlEnumToken): ToolButtonBuilder;
  focusPolicyBind(expr: string): ToolButtonBuilder;
  focusReason(value: QmlEnumToken): ToolButtonBuilder;
  focusReasonBind(expr: string): ToolButtonBuilder;
  font(value: QmlFont): ToolButtonBuilder;
  fontBind(expr: string): ToolButtonBuilder;
  height(value: number): ToolButtonBuilder;
  heightBind(expr: string): ToolButtonBuilder;
  highlighted(value: boolean): ToolButtonBuilder;
  highlightedBind(expr: string): ToolButtonBuilder;
  horizontalPadding(value: number): ToolButtonBuilder;
  horizontalPaddingBind(expr: string): ToolButtonBuilder;
  hoverEnabled(value: boolean): ToolButtonBuilder;
  hoverEnabledBind(expr: string): ToolButtonBuilder;
  icon(value: QmlValue): ToolButtonBuilder;
  iconBind(expr: string): ToolButtonBuilder;
  implicitHeight(value: number): ToolButtonBuilder;
  implicitHeightBind(expr: string): ToolButtonBuilder;
  implicitWidth(value: number): ToolButtonBuilder;
  implicitWidthBind(expr: string): ToolButtonBuilder;
  indicator(value: ItemBuilder): ToolButtonBuilder;
  indicatorBind(expr: string): ToolButtonBuilder;
  leftInset(value: number): ToolButtonBuilder;
  leftInsetBind(expr: string): ToolButtonBuilder;
  leftPadding(value: number): ToolButtonBuilder;
  leftPaddingBind(expr: string): ToolButtonBuilder;
  locale(value: QmlValue): ToolButtonBuilder;
  localeBind(expr: string): ToolButtonBuilder;
  objectName(value: string): ToolButtonBuilder;
  objectNameBind(expr: string): ToolButtonBuilder;
  opacity(value: number): ToolButtonBuilder;
  opacityBind(expr: string): ToolButtonBuilder;
  padding(value: number): ToolButtonBuilder;
  paddingBind(expr: string): ToolButtonBuilder;
  palette(value: PaletteBuilder): ToolButtonBuilder;
  paletteBind(expr: string): ToolButtonBuilder;
  parent(value: ItemBuilder): ToolButtonBuilder;
  parentBind(expr: string): ToolButtonBuilder;
  rightInset(value: number): ToolButtonBuilder;
  rightInsetBind(expr: string): ToolButtonBuilder;
  rightPadding(value: number): ToolButtonBuilder;
  rightPaddingBind(expr: string): ToolButtonBuilder;
  rotation(value: number): ToolButtonBuilder;
  rotationBind(expr: string): ToolButtonBuilder;
  scale(value: number): ToolButtonBuilder;
  scaleBind(expr: string): ToolButtonBuilder;
  smooth(value: boolean): ToolButtonBuilder;
  smoothBind(expr: string): ToolButtonBuilder;
  spacing(value: number): ToolButtonBuilder;
  spacingBind(expr: string): ToolButtonBuilder;
  state(value: string): ToolButtonBuilder;
  stateBind(expr: string): ToolButtonBuilder;
  text(value: string): ToolButtonBuilder;
  textBind(expr: string): ToolButtonBuilder;
  topInset(value: number): ToolButtonBuilder;
  topInsetBind(expr: string): ToolButtonBuilder;
  topPadding(value: number): ToolButtonBuilder;
  topPaddingBind(expr: string): ToolButtonBuilder;
  transformOrigin(value: QmlEnumToken): ToolButtonBuilder;
  transformOriginBind(expr: string): ToolButtonBuilder;
  verticalPadding(value: number): ToolButtonBuilder;
  verticalPaddingBind(expr: string): ToolButtonBuilder;
  visible(value: boolean): ToolButtonBuilder;
  visibleBind(expr: string): ToolButtonBuilder;
  wheelEnabled(value: boolean): ToolButtonBuilder;
  wheelEnabledBind(expr: string): ToolButtonBuilder;
  width(value: number): ToolButtonBuilder;
  widthBind(expr: string): ToolButtonBuilder;
  x(value: number): ToolButtonBuilder;
  xBind(expr: string): ToolButtonBuilder;
  y(value: number): ToolButtonBuilder;
  yBind(expr: string): ToolButtonBuilder;
  z(value: number): ToolButtonBuilder;
  zBind(expr: string): ToolButtonBuilder;
  onActionChanged(body: string): ToolButtonBuilder;
  onActiveFocusChanged(body: string): ToolButtonBuilder;
  onActiveFocusOnTabChanged(body: string): ToolButtonBuilder;
  onAntialiasingChanged(body: string): ToolButtonBuilder;
  onAutoExclusiveChanged(body: string): ToolButtonBuilder;
  onAutoRepeatChanged(body: string): ToolButtonBuilder;
  onAutoRepeatDelayChanged(body: string): ToolButtonBuilder;
  onAutoRepeatIntervalChanged(body: string): ToolButtonBuilder;
  onAvailableHeightChanged(body: string): ToolButtonBuilder;
  onAvailableWidthChanged(body: string): ToolButtonBuilder;
  onBackgroundChanged(body: string): ToolButtonBuilder;
  onBaselineOffsetChanged(body: string): ToolButtonBuilder;
  onBottomInsetChanged(body: string): ToolButtonBuilder;
  onBottomPaddingChanged(body: string): ToolButtonBuilder;
  onCanceled(body: string): ToolButtonBuilder;
  onCheckableChanged(body: string): ToolButtonBuilder;
  onCheckedChanged(body: string): ToolButtonBuilder;
  onChildrenChanged(body: string): ToolButtonBuilder;
  onChildrenRectChanged(body: string): ToolButtonBuilder;
  onClicked(body: string): ToolButtonBuilder;
  onClipChanged(body: string): ToolButtonBuilder;
  onContainmentMaskChanged(body: string): ToolButtonBuilder;
  onContentItemChanged(body: string): ToolButtonBuilder;
  onDisplayChanged(body: string): ToolButtonBuilder;
  onDoubleClicked(body: string): ToolButtonBuilder;
  onDownChanged(body: string): ToolButtonBuilder;
  onEnabledChanged(body: string): ToolButtonBuilder;
  onFlatChanged(body: string): ToolButtonBuilder;
  onFocusChanged(body: string): ToolButtonBuilder;
  onFocusPolicyChanged(body: string): ToolButtonBuilder;
  onFocusReasonChanged(body: string): ToolButtonBuilder;
  onFontChanged(body: string): ToolButtonBuilder;
  onHeightChanged(body: string): ToolButtonBuilder;
  onHighlightedChanged(body: string): ToolButtonBuilder;
  onHorizontalPaddingChanged(body: string): ToolButtonBuilder;
  onHoverEnabledChanged(body: string): ToolButtonBuilder;
  onHoveredChanged(body: string): ToolButtonBuilder;
  onIconChanged(body: string): ToolButtonBuilder;
  onImplicitBackgroundHeightChanged(body: string): ToolButtonBuilder;
  onImplicitBackgroundWidthChanged(body: string): ToolButtonBuilder;
  onImplicitContentHeightChanged(body: string): ToolButtonBuilder;
  onImplicitContentWidthChanged(body: string): ToolButtonBuilder;
  onImplicitHeightChanged(body: string): ToolButtonBuilder;
  onImplicitIndicatorHeightChanged(body: string): ToolButtonBuilder;
  onImplicitIndicatorWidthChanged(body: string): ToolButtonBuilder;
  onImplicitWidthChanged(body: string): ToolButtonBuilder;
  onIndicatorChanged(body: string): ToolButtonBuilder;
  onLeftInsetChanged(body: string): ToolButtonBuilder;
  onLeftPaddingChanged(body: string): ToolButtonBuilder;
  onLocaleChanged(body: string): ToolButtonBuilder;
  onMirroredChanged(body: string): ToolButtonBuilder;
  onObjectNameChanged(body: string): ToolButtonBuilder;
  onOpacityChanged(body: string): ToolButtonBuilder;
  onPaddingChanged(body: string): ToolButtonBuilder;
  onPaletteChanged(body: string): ToolButtonBuilder;
  onPaletteCreated(body: string): ToolButtonBuilder;
  onParentChanged(body: string): ToolButtonBuilder;
  onPressAndHold(body: string): ToolButtonBuilder;
  onPressXChanged(body: string): ToolButtonBuilder;
  onPressYChanged(body: string): ToolButtonBuilder;
  onPressed(body: string): ToolButtonBuilder;
  onPressedChanged(body: string): ToolButtonBuilder;
  onReleased(body: string): ToolButtonBuilder;
  onRightInsetChanged(body: string): ToolButtonBuilder;
  onRightPaddingChanged(body: string): ToolButtonBuilder;
  onRotationChanged(body: string): ToolButtonBuilder;
  onScaleChanged(body: string): ToolButtonBuilder;
  onSmoothChanged(body: string): ToolButtonBuilder;
  onSpacingChanged(body: string): ToolButtonBuilder;
  onStateChanged(body: string): ToolButtonBuilder;
  onTextChanged(body: string): ToolButtonBuilder;
  onToggled(body: string): ToolButtonBuilder;
  onTopInsetChanged(body: string): ToolButtonBuilder;
  onTopPaddingChanged(body: string): ToolButtonBuilder;
  onTransformOriginChanged(body: string): ToolButtonBuilder;
  onVerticalPaddingChanged(body: string): ToolButtonBuilder;
  onVisibleChanged(body: string): ToolButtonBuilder;
  onVisibleChildrenChanged(body: string): ToolButtonBuilder;
  onVisualFocusChanged(body: string): ToolButtonBuilder;
  onWheelEnabledChanged(body: string): ToolButtonBuilder;
  onWidthChanged(body: string): ToolButtonBuilder;
  onWindowChanged(body: string): ToolButtonBuilder;
  onXChanged(body: string): ToolButtonBuilder;
  onYChanged(body: string): ToolButtonBuilder;
  onZChanged(body: string): ToolButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ToolButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): ToolButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ToolButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ToolButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ToolButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ToolButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ToolButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ToolButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ToolButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ToolButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ToolButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ToolButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ToolButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ToolButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ToolButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ToolButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ToolButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ToolButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ToolButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ToolButtonBuilder;
}

const TOOLBUTTON_META: TypeMetadata = {
  typeName: 'ToolButton',
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

export function ToolButton(): ToolButtonBuilder {
  return createFluentBuilder('ToolButton', TOOLBUTTON_META) as unknown as ToolButtonBuilder;
}

export namespace ToolButton {
  export namespace Display {
    export const IconOnly = createEnumToken('ToolButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('ToolButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('ToolButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('ToolButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ToolButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ToolButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ToolButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ToolButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ToolButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ToolButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ToolButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ToolButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ToolButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ToolButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ToolButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ToolButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ToolButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ToolButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ToolButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ToolButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ToolButton', 'TransformOrigin', 'BottomRight');
  }
}
