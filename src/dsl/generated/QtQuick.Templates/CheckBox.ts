// AUTO-GENERATED — DO NOT EDIT
// Type: CheckBox
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
export interface CheckBoxBuilder {
  id(id: string): CheckBoxBuilder;
  child(obj: QmlObjectBuilder): CheckBoxBuilder;

  action(value: ActionBuilder): CheckBoxBuilder;
  actionBind(expr: string): CheckBoxBuilder;
  activeFocusOnTab(value: boolean): CheckBoxBuilder;
  activeFocusOnTabBind(expr: string): CheckBoxBuilder;
  antialiasing(value: boolean): CheckBoxBuilder;
  antialiasingBind(expr: string): CheckBoxBuilder;
  autoExclusive(value: boolean): CheckBoxBuilder;
  autoExclusiveBind(expr: string): CheckBoxBuilder;
  autoRepeat(value: boolean): CheckBoxBuilder;
  autoRepeatBind(expr: string): CheckBoxBuilder;
  autoRepeatDelay(value: number): CheckBoxBuilder;
  autoRepeatDelayBind(expr: string): CheckBoxBuilder;
  autoRepeatInterval(value: number): CheckBoxBuilder;
  autoRepeatIntervalBind(expr: string): CheckBoxBuilder;
  background(value: ItemBuilder): CheckBoxBuilder;
  backgroundBind(expr: string): CheckBoxBuilder;
  baselineOffset(value: number): CheckBoxBuilder;
  baselineOffsetBind(expr: string): CheckBoxBuilder;
  bottomInset(value: number): CheckBoxBuilder;
  bottomInsetBind(expr: string): CheckBoxBuilder;
  bottomPadding(value: number): CheckBoxBuilder;
  bottomPaddingBind(expr: string): CheckBoxBuilder;
  checkState(value: QmlEnumToken): CheckBoxBuilder;
  checkStateBind(expr: string): CheckBoxBuilder;
  checkable(value: boolean): CheckBoxBuilder;
  checkableBind(expr: string): CheckBoxBuilder;
  checked(value: boolean): CheckBoxBuilder;
  checkedBind(expr: string): CheckBoxBuilder;
  clip(value: boolean): CheckBoxBuilder;
  clipBind(expr: string): CheckBoxBuilder;
  containmentMask(value: QtObjectBuilder): CheckBoxBuilder;
  containmentMaskBind(expr: string): CheckBoxBuilder;
  contentItem(value: ItemBuilder): CheckBoxBuilder;
  contentItemBind(expr: string): CheckBoxBuilder;
  display(value: QmlEnumToken): CheckBoxBuilder;
  displayBind(expr: string): CheckBoxBuilder;
  down(value: boolean): CheckBoxBuilder;
  downBind(expr: string): CheckBoxBuilder;
  enabled(value: boolean): CheckBoxBuilder;
  enabledBind(expr: string): CheckBoxBuilder;
  focus(value: boolean): CheckBoxBuilder;
  focusBind(expr: string): CheckBoxBuilder;
  focusPolicy(value: QmlEnumToken): CheckBoxBuilder;
  focusPolicyBind(expr: string): CheckBoxBuilder;
  focusReason(value: QmlEnumToken): CheckBoxBuilder;
  focusReasonBind(expr: string): CheckBoxBuilder;
  font(value: QmlFont): CheckBoxBuilder;
  fontBind(expr: string): CheckBoxBuilder;
  height(value: number): CheckBoxBuilder;
  heightBind(expr: string): CheckBoxBuilder;
  horizontalPadding(value: number): CheckBoxBuilder;
  horizontalPaddingBind(expr: string): CheckBoxBuilder;
  hoverEnabled(value: boolean): CheckBoxBuilder;
  hoverEnabledBind(expr: string): CheckBoxBuilder;
  icon(value: QmlValue): CheckBoxBuilder;
  iconBind(expr: string): CheckBoxBuilder;
  implicitHeight(value: number): CheckBoxBuilder;
  implicitHeightBind(expr: string): CheckBoxBuilder;
  implicitWidth(value: number): CheckBoxBuilder;
  implicitWidthBind(expr: string): CheckBoxBuilder;
  indicator(value: ItemBuilder): CheckBoxBuilder;
  indicatorBind(expr: string): CheckBoxBuilder;
  leftInset(value: number): CheckBoxBuilder;
  leftInsetBind(expr: string): CheckBoxBuilder;
  leftPadding(value: number): CheckBoxBuilder;
  leftPaddingBind(expr: string): CheckBoxBuilder;
  locale(value: string): CheckBoxBuilder;
  localeBind(expr: string): CheckBoxBuilder;
  nextCheckState(value: QmlValue): CheckBoxBuilder;
  nextCheckStateBind(expr: string): CheckBoxBuilder;
  objectName(value: string): CheckBoxBuilder;
  objectNameBind(expr: string): CheckBoxBuilder;
  opacity(value: number): CheckBoxBuilder;
  opacityBind(expr: string): CheckBoxBuilder;
  padding(value: number): CheckBoxBuilder;
  paddingBind(expr: string): CheckBoxBuilder;
  palette(value: PaletteBuilder): CheckBoxBuilder;
  paletteBind(expr: string): CheckBoxBuilder;
  parent(value: ItemBuilder): CheckBoxBuilder;
  parentBind(expr: string): CheckBoxBuilder;
  rightInset(value: number): CheckBoxBuilder;
  rightInsetBind(expr: string): CheckBoxBuilder;
  rightPadding(value: number): CheckBoxBuilder;
  rightPaddingBind(expr: string): CheckBoxBuilder;
  rotation(value: number): CheckBoxBuilder;
  rotationBind(expr: string): CheckBoxBuilder;
  scale(value: number): CheckBoxBuilder;
  scaleBind(expr: string): CheckBoxBuilder;
  smooth(value: boolean): CheckBoxBuilder;
  smoothBind(expr: string): CheckBoxBuilder;
  spacing(value: number): CheckBoxBuilder;
  spacingBind(expr: string): CheckBoxBuilder;
  state(value: string): CheckBoxBuilder;
  stateBind(expr: string): CheckBoxBuilder;
  text(value: string): CheckBoxBuilder;
  textBind(expr: string): CheckBoxBuilder;
  topInset(value: number): CheckBoxBuilder;
  topInsetBind(expr: string): CheckBoxBuilder;
  topPadding(value: number): CheckBoxBuilder;
  topPaddingBind(expr: string): CheckBoxBuilder;
  transformOrigin(value: QmlEnumToken): CheckBoxBuilder;
  transformOriginBind(expr: string): CheckBoxBuilder;
  tristate(value: boolean): CheckBoxBuilder;
  tristateBind(expr: string): CheckBoxBuilder;
  verticalPadding(value: number): CheckBoxBuilder;
  verticalPaddingBind(expr: string): CheckBoxBuilder;
  visible(value: boolean): CheckBoxBuilder;
  visibleBind(expr: string): CheckBoxBuilder;
  wheelEnabled(value: boolean): CheckBoxBuilder;
  wheelEnabledBind(expr: string): CheckBoxBuilder;
  width(value: number): CheckBoxBuilder;
  widthBind(expr: string): CheckBoxBuilder;
  x(value: number): CheckBoxBuilder;
  xBind(expr: string): CheckBoxBuilder;
  y(value: number): CheckBoxBuilder;
  yBind(expr: string): CheckBoxBuilder;
  z(value: number): CheckBoxBuilder;
  zBind(expr: string): CheckBoxBuilder;
  onActionChanged(body: string): CheckBoxBuilder;
  onActiveFocusChanged(body: string): CheckBoxBuilder;
  onActiveFocusOnTabChanged(body: string): CheckBoxBuilder;
  onAntialiasingChanged(body: string): CheckBoxBuilder;
  onAutoExclusiveChanged(body: string): CheckBoxBuilder;
  onAutoRepeatChanged(body: string): CheckBoxBuilder;
  onAutoRepeatDelayChanged(body: string): CheckBoxBuilder;
  onAutoRepeatIntervalChanged(body: string): CheckBoxBuilder;
  onAvailableHeightChanged(body: string): CheckBoxBuilder;
  onAvailableWidthChanged(body: string): CheckBoxBuilder;
  onBackgroundChanged(body: string): CheckBoxBuilder;
  onBaselineOffsetChanged(body: string): CheckBoxBuilder;
  onBottomInsetChanged(body: string): CheckBoxBuilder;
  onBottomPaddingChanged(body: string): CheckBoxBuilder;
  onCanceled(body: string): CheckBoxBuilder;
  onCheckStateChanged(body: string): CheckBoxBuilder;
  onCheckableChanged(body: string): CheckBoxBuilder;
  onCheckedChanged(body: string): CheckBoxBuilder;
  onChildrenChanged(body: string): CheckBoxBuilder;
  onChildrenRectChanged(body: string): CheckBoxBuilder;
  onClicked(body: string): CheckBoxBuilder;
  onClipChanged(body: string): CheckBoxBuilder;
  onContainmentMaskChanged(body: string): CheckBoxBuilder;
  onContentItemChanged(body: string): CheckBoxBuilder;
  onDisplayChanged(body: string): CheckBoxBuilder;
  onDoubleClicked(body: string): CheckBoxBuilder;
  onDownChanged(body: string): CheckBoxBuilder;
  onEnabledChanged(body: string): CheckBoxBuilder;
  onFocusChanged(body: string): CheckBoxBuilder;
  onFocusPolicyChanged(body: string): CheckBoxBuilder;
  onFocusReasonChanged(body: string): CheckBoxBuilder;
  onFontChanged(body: string): CheckBoxBuilder;
  onHeightChanged(body: string): CheckBoxBuilder;
  onHorizontalPaddingChanged(body: string): CheckBoxBuilder;
  onHoverEnabledChanged(body: string): CheckBoxBuilder;
  onHoveredChanged(body: string): CheckBoxBuilder;
  onIconChanged(body: string): CheckBoxBuilder;
  onImplicitBackgroundHeightChanged(body: string): CheckBoxBuilder;
  onImplicitBackgroundWidthChanged(body: string): CheckBoxBuilder;
  onImplicitContentHeightChanged(body: string): CheckBoxBuilder;
  onImplicitContentWidthChanged(body: string): CheckBoxBuilder;
  onImplicitHeightChanged(body: string): CheckBoxBuilder;
  onImplicitIndicatorHeightChanged(body: string): CheckBoxBuilder;
  onImplicitIndicatorWidthChanged(body: string): CheckBoxBuilder;
  onImplicitWidthChanged(body: string): CheckBoxBuilder;
  onIndicatorChanged(body: string): CheckBoxBuilder;
  onLeftInsetChanged(body: string): CheckBoxBuilder;
  onLeftPaddingChanged(body: string): CheckBoxBuilder;
  onLocaleChanged(body: string): CheckBoxBuilder;
  onMirroredChanged(body: string): CheckBoxBuilder;
  onNextCheckStateChanged(body: string): CheckBoxBuilder;
  onObjectNameChanged(body: string): CheckBoxBuilder;
  onOpacityChanged(body: string): CheckBoxBuilder;
  onPaddingChanged(body: string): CheckBoxBuilder;
  onPaletteChanged(body: string): CheckBoxBuilder;
  onPaletteCreated(body: string): CheckBoxBuilder;
  onParentChanged(body: string): CheckBoxBuilder;
  onPressAndHold(body: string): CheckBoxBuilder;
  onPressXChanged(body: string): CheckBoxBuilder;
  onPressYChanged(body: string): CheckBoxBuilder;
  onPressed(body: string): CheckBoxBuilder;
  onPressedChanged(body: string): CheckBoxBuilder;
  onReleased(body: string): CheckBoxBuilder;
  onRightInsetChanged(body: string): CheckBoxBuilder;
  onRightPaddingChanged(body: string): CheckBoxBuilder;
  onRotationChanged(body: string): CheckBoxBuilder;
  onScaleChanged(body: string): CheckBoxBuilder;
  onSmoothChanged(body: string): CheckBoxBuilder;
  onSpacingChanged(body: string): CheckBoxBuilder;
  onStateChanged(body: string): CheckBoxBuilder;
  onTextChanged(body: string): CheckBoxBuilder;
  onToggled(body: string): CheckBoxBuilder;
  onTopInsetChanged(body: string): CheckBoxBuilder;
  onTopPaddingChanged(body: string): CheckBoxBuilder;
  onTransformOriginChanged(body: string): CheckBoxBuilder;
  onTristateChanged(body: string): CheckBoxBuilder;
  onVerticalPaddingChanged(body: string): CheckBoxBuilder;
  onVisibleChanged(body: string): CheckBoxBuilder;
  onVisibleChildrenChanged(body: string): CheckBoxBuilder;
  onVisualFocusChanged(body: string): CheckBoxBuilder;
  onWheelEnabledChanged(body: string): CheckBoxBuilder;
  onWidthChanged(body: string): CheckBoxBuilder;
  onWindowChanged(body: string): CheckBoxBuilder;
  onXChanged(body: string): CheckBoxBuilder;
  onYChanged(body: string): CheckBoxBuilder;
  onZChanged(body: string): CheckBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CheckBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): CheckBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): CheckBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): CheckBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): CheckBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): CheckBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): CheckBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): CheckBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): CheckBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): CheckBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): CheckBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): CheckBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): CheckBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): CheckBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): CheckBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): CheckBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): CheckBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): CheckBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): CheckBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): CheckBoxBuilder;
}

const CHECKBOX_META: TypeMetadata = {
  typeName: 'CheckBox',
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

export function CheckBox(): CheckBoxBuilder {
  return createFluentBuilder('CheckBox', CHECKBOX_META) as unknown as CheckBoxBuilder;
}

export namespace CheckBox {
  export namespace Display {
    export const IconOnly = createEnumToken('CheckBox', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('CheckBox', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('CheckBox', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('CheckBox', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('CheckBox', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('CheckBox', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('CheckBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('CheckBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('CheckBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('CheckBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('CheckBox', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('CheckBox', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('CheckBox', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('CheckBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('CheckBox', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('CheckBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('CheckBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('CheckBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('CheckBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('CheckBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('CheckBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('CheckBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('CheckBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('CheckBox', 'TransformOrigin', 'BottomRight');
  }
}
