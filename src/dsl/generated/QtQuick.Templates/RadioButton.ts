// AUTO-GENERATED — DO NOT EDIT
// Type: RadioButton
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
export interface RadioButtonBuilder {
  id(id: string): RadioButtonBuilder;
  child(obj: QmlObjectBuilder): RadioButtonBuilder;

  action(value: ActionBuilder): RadioButtonBuilder;
  actionBind(expr: string): RadioButtonBuilder;
  activeFocusOnTab(value: boolean): RadioButtonBuilder;
  activeFocusOnTabBind(expr: string): RadioButtonBuilder;
  antialiasing(value: boolean): RadioButtonBuilder;
  antialiasingBind(expr: string): RadioButtonBuilder;
  autoExclusive(value: boolean): RadioButtonBuilder;
  autoExclusiveBind(expr: string): RadioButtonBuilder;
  autoRepeat(value: boolean): RadioButtonBuilder;
  autoRepeatBind(expr: string): RadioButtonBuilder;
  autoRepeatDelay(value: number): RadioButtonBuilder;
  autoRepeatDelayBind(expr: string): RadioButtonBuilder;
  autoRepeatInterval(value: number): RadioButtonBuilder;
  autoRepeatIntervalBind(expr: string): RadioButtonBuilder;
  background(value: ItemBuilder): RadioButtonBuilder;
  backgroundBind(expr: string): RadioButtonBuilder;
  baselineOffset(value: number): RadioButtonBuilder;
  baselineOffsetBind(expr: string): RadioButtonBuilder;
  bottomInset(value: number): RadioButtonBuilder;
  bottomInsetBind(expr: string): RadioButtonBuilder;
  bottomPadding(value: number): RadioButtonBuilder;
  bottomPaddingBind(expr: string): RadioButtonBuilder;
  checkable(value: boolean): RadioButtonBuilder;
  checkableBind(expr: string): RadioButtonBuilder;
  checked(value: boolean): RadioButtonBuilder;
  checkedBind(expr: string): RadioButtonBuilder;
  clip(value: boolean): RadioButtonBuilder;
  clipBind(expr: string): RadioButtonBuilder;
  containmentMask(value: QtObjectBuilder): RadioButtonBuilder;
  containmentMaskBind(expr: string): RadioButtonBuilder;
  contentItem(value: ItemBuilder): RadioButtonBuilder;
  contentItemBind(expr: string): RadioButtonBuilder;
  display(value: QmlEnumToken): RadioButtonBuilder;
  displayBind(expr: string): RadioButtonBuilder;
  down(value: boolean): RadioButtonBuilder;
  downBind(expr: string): RadioButtonBuilder;
  enabled(value: boolean): RadioButtonBuilder;
  enabledBind(expr: string): RadioButtonBuilder;
  focus(value: boolean): RadioButtonBuilder;
  focusBind(expr: string): RadioButtonBuilder;
  focusPolicy(value: QmlEnumToken): RadioButtonBuilder;
  focusPolicyBind(expr: string): RadioButtonBuilder;
  focusReason(value: QmlEnumToken): RadioButtonBuilder;
  focusReasonBind(expr: string): RadioButtonBuilder;
  font(value: QmlFont): RadioButtonBuilder;
  fontBind(expr: string): RadioButtonBuilder;
  height(value: number): RadioButtonBuilder;
  heightBind(expr: string): RadioButtonBuilder;
  horizontalPadding(value: number): RadioButtonBuilder;
  horizontalPaddingBind(expr: string): RadioButtonBuilder;
  hoverEnabled(value: boolean): RadioButtonBuilder;
  hoverEnabledBind(expr: string): RadioButtonBuilder;
  icon(value: QmlValue): RadioButtonBuilder;
  iconBind(expr: string): RadioButtonBuilder;
  implicitHeight(value: number): RadioButtonBuilder;
  implicitHeightBind(expr: string): RadioButtonBuilder;
  implicitWidth(value: number): RadioButtonBuilder;
  implicitWidthBind(expr: string): RadioButtonBuilder;
  indicator(value: ItemBuilder): RadioButtonBuilder;
  indicatorBind(expr: string): RadioButtonBuilder;
  leftInset(value: number): RadioButtonBuilder;
  leftInsetBind(expr: string): RadioButtonBuilder;
  leftPadding(value: number): RadioButtonBuilder;
  leftPaddingBind(expr: string): RadioButtonBuilder;
  locale(value: QmlValue): RadioButtonBuilder;
  localeBind(expr: string): RadioButtonBuilder;
  objectName(value: string): RadioButtonBuilder;
  objectNameBind(expr: string): RadioButtonBuilder;
  opacity(value: number): RadioButtonBuilder;
  opacityBind(expr: string): RadioButtonBuilder;
  padding(value: number): RadioButtonBuilder;
  paddingBind(expr: string): RadioButtonBuilder;
  palette(value: PaletteBuilder): RadioButtonBuilder;
  paletteBind(expr: string): RadioButtonBuilder;
  parent(value: ItemBuilder): RadioButtonBuilder;
  parentBind(expr: string): RadioButtonBuilder;
  rightInset(value: number): RadioButtonBuilder;
  rightInsetBind(expr: string): RadioButtonBuilder;
  rightPadding(value: number): RadioButtonBuilder;
  rightPaddingBind(expr: string): RadioButtonBuilder;
  rotation(value: number): RadioButtonBuilder;
  rotationBind(expr: string): RadioButtonBuilder;
  scale(value: number): RadioButtonBuilder;
  scaleBind(expr: string): RadioButtonBuilder;
  smooth(value: boolean): RadioButtonBuilder;
  smoothBind(expr: string): RadioButtonBuilder;
  spacing(value: number): RadioButtonBuilder;
  spacingBind(expr: string): RadioButtonBuilder;
  state(value: string): RadioButtonBuilder;
  stateBind(expr: string): RadioButtonBuilder;
  text(value: string): RadioButtonBuilder;
  textBind(expr: string): RadioButtonBuilder;
  topInset(value: number): RadioButtonBuilder;
  topInsetBind(expr: string): RadioButtonBuilder;
  topPadding(value: number): RadioButtonBuilder;
  topPaddingBind(expr: string): RadioButtonBuilder;
  transformOrigin(value: QmlEnumToken): RadioButtonBuilder;
  transformOriginBind(expr: string): RadioButtonBuilder;
  verticalPadding(value: number): RadioButtonBuilder;
  verticalPaddingBind(expr: string): RadioButtonBuilder;
  visible(value: boolean): RadioButtonBuilder;
  visibleBind(expr: string): RadioButtonBuilder;
  wheelEnabled(value: boolean): RadioButtonBuilder;
  wheelEnabledBind(expr: string): RadioButtonBuilder;
  width(value: number): RadioButtonBuilder;
  widthBind(expr: string): RadioButtonBuilder;
  x(value: number): RadioButtonBuilder;
  xBind(expr: string): RadioButtonBuilder;
  y(value: number): RadioButtonBuilder;
  yBind(expr: string): RadioButtonBuilder;
  z(value: number): RadioButtonBuilder;
  zBind(expr: string): RadioButtonBuilder;
  onActionChanged(body: string): RadioButtonBuilder;
  onActiveFocusChanged(body: string): RadioButtonBuilder;
  onActiveFocusOnTabChanged(body: string): RadioButtonBuilder;
  onAntialiasingChanged(body: string): RadioButtonBuilder;
  onAutoExclusiveChanged(body: string): RadioButtonBuilder;
  onAutoRepeatChanged(body: string): RadioButtonBuilder;
  onAutoRepeatDelayChanged(body: string): RadioButtonBuilder;
  onAutoRepeatIntervalChanged(body: string): RadioButtonBuilder;
  onAvailableHeightChanged(body: string): RadioButtonBuilder;
  onAvailableWidthChanged(body: string): RadioButtonBuilder;
  onBackgroundChanged(body: string): RadioButtonBuilder;
  onBaselineOffsetChanged(body: string): RadioButtonBuilder;
  onBottomInsetChanged(body: string): RadioButtonBuilder;
  onBottomPaddingChanged(body: string): RadioButtonBuilder;
  onCanceled(body: string): RadioButtonBuilder;
  onCheckableChanged(body: string): RadioButtonBuilder;
  onCheckedChanged(body: string): RadioButtonBuilder;
  onChildrenChanged(body: string): RadioButtonBuilder;
  onChildrenRectChanged(body: string): RadioButtonBuilder;
  onClicked(body: string): RadioButtonBuilder;
  onClipChanged(body: string): RadioButtonBuilder;
  onContainmentMaskChanged(body: string): RadioButtonBuilder;
  onContentItemChanged(body: string): RadioButtonBuilder;
  onDisplayChanged(body: string): RadioButtonBuilder;
  onDoubleClicked(body: string): RadioButtonBuilder;
  onDownChanged(body: string): RadioButtonBuilder;
  onEnabledChanged(body: string): RadioButtonBuilder;
  onFocusChanged(body: string): RadioButtonBuilder;
  onFocusPolicyChanged(body: string): RadioButtonBuilder;
  onFocusReasonChanged(body: string): RadioButtonBuilder;
  onFontChanged(body: string): RadioButtonBuilder;
  onHeightChanged(body: string): RadioButtonBuilder;
  onHorizontalPaddingChanged(body: string): RadioButtonBuilder;
  onHoverEnabledChanged(body: string): RadioButtonBuilder;
  onHoveredChanged(body: string): RadioButtonBuilder;
  onIconChanged(body: string): RadioButtonBuilder;
  onImplicitBackgroundHeightChanged(body: string): RadioButtonBuilder;
  onImplicitBackgroundWidthChanged(body: string): RadioButtonBuilder;
  onImplicitContentHeightChanged(body: string): RadioButtonBuilder;
  onImplicitContentWidthChanged(body: string): RadioButtonBuilder;
  onImplicitHeightChanged(body: string): RadioButtonBuilder;
  onImplicitIndicatorHeightChanged(body: string): RadioButtonBuilder;
  onImplicitIndicatorWidthChanged(body: string): RadioButtonBuilder;
  onImplicitWidthChanged(body: string): RadioButtonBuilder;
  onIndicatorChanged(body: string): RadioButtonBuilder;
  onLeftInsetChanged(body: string): RadioButtonBuilder;
  onLeftPaddingChanged(body: string): RadioButtonBuilder;
  onLocaleChanged(body: string): RadioButtonBuilder;
  onMirroredChanged(body: string): RadioButtonBuilder;
  onObjectNameChanged(body: string): RadioButtonBuilder;
  onOpacityChanged(body: string): RadioButtonBuilder;
  onPaddingChanged(body: string): RadioButtonBuilder;
  onPaletteChanged(body: string): RadioButtonBuilder;
  onPaletteCreated(body: string): RadioButtonBuilder;
  onParentChanged(body: string): RadioButtonBuilder;
  onPressAndHold(body: string): RadioButtonBuilder;
  onPressXChanged(body: string): RadioButtonBuilder;
  onPressYChanged(body: string): RadioButtonBuilder;
  onPressed(body: string): RadioButtonBuilder;
  onPressedChanged(body: string): RadioButtonBuilder;
  onReleased(body: string): RadioButtonBuilder;
  onRightInsetChanged(body: string): RadioButtonBuilder;
  onRightPaddingChanged(body: string): RadioButtonBuilder;
  onRotationChanged(body: string): RadioButtonBuilder;
  onScaleChanged(body: string): RadioButtonBuilder;
  onSmoothChanged(body: string): RadioButtonBuilder;
  onSpacingChanged(body: string): RadioButtonBuilder;
  onStateChanged(body: string): RadioButtonBuilder;
  onTextChanged(body: string): RadioButtonBuilder;
  onToggled(body: string): RadioButtonBuilder;
  onTopInsetChanged(body: string): RadioButtonBuilder;
  onTopPaddingChanged(body: string): RadioButtonBuilder;
  onTransformOriginChanged(body: string): RadioButtonBuilder;
  onVerticalPaddingChanged(body: string): RadioButtonBuilder;
  onVisibleChanged(body: string): RadioButtonBuilder;
  onVisibleChildrenChanged(body: string): RadioButtonBuilder;
  onVisualFocusChanged(body: string): RadioButtonBuilder;
  onWheelEnabledChanged(body: string): RadioButtonBuilder;
  onWidthChanged(body: string): RadioButtonBuilder;
  onWindowChanged(body: string): RadioButtonBuilder;
  onXChanged(body: string): RadioButtonBuilder;
  onYChanged(body: string): RadioButtonBuilder;
  onZChanged(body: string): RadioButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RadioButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): RadioButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RadioButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RadioButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RadioButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RadioButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RadioButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RadioButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RadioButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RadioButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RadioButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RadioButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RadioButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RadioButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RadioButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RadioButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RadioButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RadioButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RadioButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RadioButtonBuilder;
}

const RADIOBUTTON_META: TypeMetadata = {
  typeName: 'RadioButton',
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

export function RadioButton(): RadioButtonBuilder {
  return createFluentBuilder('RadioButton', RADIOBUTTON_META) as unknown as RadioButtonBuilder;
}

export namespace RadioButton {
  export namespace Display {
    export const IconOnly = createEnumToken('RadioButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('RadioButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('RadioButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('RadioButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RadioButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RadioButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RadioButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RadioButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RadioButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RadioButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RadioButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('RadioButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RadioButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RadioButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RadioButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RadioButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RadioButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RadioButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RadioButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RadioButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RadioButton', 'TransformOrigin', 'BottomRight');
  }
}
