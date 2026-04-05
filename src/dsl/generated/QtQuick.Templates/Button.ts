// AUTO-GENERATED — DO NOT EDIT
// Type: Button
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
export interface ButtonBuilder {
  id(id: string): ButtonBuilder;
  child(obj: QmlObjectBuilder): ButtonBuilder;

  action(value: ActionBuilder): ButtonBuilder;
  actionBind(expr: string): ButtonBuilder;
  activeFocusOnTab(value: boolean): ButtonBuilder;
  activeFocusOnTabBind(expr: string): ButtonBuilder;
  antialiasing(value: boolean): ButtonBuilder;
  antialiasingBind(expr: string): ButtonBuilder;
  autoExclusive(value: boolean): ButtonBuilder;
  autoExclusiveBind(expr: string): ButtonBuilder;
  autoRepeat(value: boolean): ButtonBuilder;
  autoRepeatBind(expr: string): ButtonBuilder;
  autoRepeatDelay(value: number): ButtonBuilder;
  autoRepeatDelayBind(expr: string): ButtonBuilder;
  autoRepeatInterval(value: number): ButtonBuilder;
  autoRepeatIntervalBind(expr: string): ButtonBuilder;
  background(value: ItemBuilder): ButtonBuilder;
  backgroundBind(expr: string): ButtonBuilder;
  baselineOffset(value: number): ButtonBuilder;
  baselineOffsetBind(expr: string): ButtonBuilder;
  bottomInset(value: number): ButtonBuilder;
  bottomInsetBind(expr: string): ButtonBuilder;
  bottomPadding(value: number): ButtonBuilder;
  bottomPaddingBind(expr: string): ButtonBuilder;
  checkable(value: boolean): ButtonBuilder;
  checkableBind(expr: string): ButtonBuilder;
  checked(value: boolean): ButtonBuilder;
  checkedBind(expr: string): ButtonBuilder;
  clip(value: boolean): ButtonBuilder;
  clipBind(expr: string): ButtonBuilder;
  containmentMask(value: QtObjectBuilder): ButtonBuilder;
  containmentMaskBind(expr: string): ButtonBuilder;
  contentItem(value: ItemBuilder): ButtonBuilder;
  contentItemBind(expr: string): ButtonBuilder;
  display(value: QmlEnumToken): ButtonBuilder;
  displayBind(expr: string): ButtonBuilder;
  down(value: boolean): ButtonBuilder;
  downBind(expr: string): ButtonBuilder;
  enabled(value: boolean): ButtonBuilder;
  enabledBind(expr: string): ButtonBuilder;
  flat(value: boolean): ButtonBuilder;
  flatBind(expr: string): ButtonBuilder;
  focus(value: boolean): ButtonBuilder;
  focusBind(expr: string): ButtonBuilder;
  focusPolicy(value: QmlEnumToken): ButtonBuilder;
  focusPolicyBind(expr: string): ButtonBuilder;
  focusReason(value: QmlEnumToken): ButtonBuilder;
  focusReasonBind(expr: string): ButtonBuilder;
  font(value: QmlFont): ButtonBuilder;
  fontBind(expr: string): ButtonBuilder;
  height(value: number): ButtonBuilder;
  heightBind(expr: string): ButtonBuilder;
  highlighted(value: boolean): ButtonBuilder;
  highlightedBind(expr: string): ButtonBuilder;
  horizontalPadding(value: number): ButtonBuilder;
  horizontalPaddingBind(expr: string): ButtonBuilder;
  hoverEnabled(value: boolean): ButtonBuilder;
  hoverEnabledBind(expr: string): ButtonBuilder;
  icon(value: QmlValue): ButtonBuilder;
  iconBind(expr: string): ButtonBuilder;
  implicitHeight(value: number): ButtonBuilder;
  implicitHeightBind(expr: string): ButtonBuilder;
  implicitWidth(value: number): ButtonBuilder;
  implicitWidthBind(expr: string): ButtonBuilder;
  indicator(value: ItemBuilder): ButtonBuilder;
  indicatorBind(expr: string): ButtonBuilder;
  leftInset(value: number): ButtonBuilder;
  leftInsetBind(expr: string): ButtonBuilder;
  leftPadding(value: number): ButtonBuilder;
  leftPaddingBind(expr: string): ButtonBuilder;
  locale(value: string): ButtonBuilder;
  localeBind(expr: string): ButtonBuilder;
  objectName(value: string): ButtonBuilder;
  objectNameBind(expr: string): ButtonBuilder;
  opacity(value: number): ButtonBuilder;
  opacityBind(expr: string): ButtonBuilder;
  padding(value: number): ButtonBuilder;
  paddingBind(expr: string): ButtonBuilder;
  palette(value: PaletteBuilder): ButtonBuilder;
  paletteBind(expr: string): ButtonBuilder;
  parent(value: ItemBuilder): ButtonBuilder;
  parentBind(expr: string): ButtonBuilder;
  rightInset(value: number): ButtonBuilder;
  rightInsetBind(expr: string): ButtonBuilder;
  rightPadding(value: number): ButtonBuilder;
  rightPaddingBind(expr: string): ButtonBuilder;
  rotation(value: number): ButtonBuilder;
  rotationBind(expr: string): ButtonBuilder;
  scale(value: number): ButtonBuilder;
  scaleBind(expr: string): ButtonBuilder;
  smooth(value: boolean): ButtonBuilder;
  smoothBind(expr: string): ButtonBuilder;
  spacing(value: number): ButtonBuilder;
  spacingBind(expr: string): ButtonBuilder;
  state(value: string): ButtonBuilder;
  stateBind(expr: string): ButtonBuilder;
  text(value: string): ButtonBuilder;
  textBind(expr: string): ButtonBuilder;
  topInset(value: number): ButtonBuilder;
  topInsetBind(expr: string): ButtonBuilder;
  topPadding(value: number): ButtonBuilder;
  topPaddingBind(expr: string): ButtonBuilder;
  transformOrigin(value: QmlEnumToken): ButtonBuilder;
  transformOriginBind(expr: string): ButtonBuilder;
  verticalPadding(value: number): ButtonBuilder;
  verticalPaddingBind(expr: string): ButtonBuilder;
  visible(value: boolean): ButtonBuilder;
  visibleBind(expr: string): ButtonBuilder;
  wheelEnabled(value: boolean): ButtonBuilder;
  wheelEnabledBind(expr: string): ButtonBuilder;
  width(value: number): ButtonBuilder;
  widthBind(expr: string): ButtonBuilder;
  x(value: number): ButtonBuilder;
  xBind(expr: string): ButtonBuilder;
  y(value: number): ButtonBuilder;
  yBind(expr: string): ButtonBuilder;
  z(value: number): ButtonBuilder;
  zBind(expr: string): ButtonBuilder;
  onActionChanged(body: string): ButtonBuilder;
  onActiveFocusChanged(body: string): ButtonBuilder;
  onActiveFocusOnTabChanged(body: string): ButtonBuilder;
  onAntialiasingChanged(body: string): ButtonBuilder;
  onAutoExclusiveChanged(body: string): ButtonBuilder;
  onAutoRepeatChanged(body: string): ButtonBuilder;
  onAutoRepeatDelayChanged(body: string): ButtonBuilder;
  onAutoRepeatIntervalChanged(body: string): ButtonBuilder;
  onAvailableHeightChanged(body: string): ButtonBuilder;
  onAvailableWidthChanged(body: string): ButtonBuilder;
  onBackgroundChanged(body: string): ButtonBuilder;
  onBaselineOffsetChanged(body: string): ButtonBuilder;
  onBottomInsetChanged(body: string): ButtonBuilder;
  onBottomPaddingChanged(body: string): ButtonBuilder;
  onCanceled(body: string): ButtonBuilder;
  onCheckableChanged(body: string): ButtonBuilder;
  onCheckedChanged(body: string): ButtonBuilder;
  onChildrenChanged(body: string): ButtonBuilder;
  onChildrenRectChanged(body: string): ButtonBuilder;
  onClicked(body: string): ButtonBuilder;
  onClipChanged(body: string): ButtonBuilder;
  onContainmentMaskChanged(body: string): ButtonBuilder;
  onContentItemChanged(body: string): ButtonBuilder;
  onDisplayChanged(body: string): ButtonBuilder;
  onDoubleClicked(body: string): ButtonBuilder;
  onDownChanged(body: string): ButtonBuilder;
  onEnabledChanged(body: string): ButtonBuilder;
  onFlatChanged(body: string): ButtonBuilder;
  onFocusChanged(body: string): ButtonBuilder;
  onFocusPolicyChanged(body: string): ButtonBuilder;
  onFocusReasonChanged(body: string): ButtonBuilder;
  onFontChanged(body: string): ButtonBuilder;
  onHeightChanged(body: string): ButtonBuilder;
  onHighlightedChanged(body: string): ButtonBuilder;
  onHorizontalPaddingChanged(body: string): ButtonBuilder;
  onHoverEnabledChanged(body: string): ButtonBuilder;
  onHoveredChanged(body: string): ButtonBuilder;
  onIconChanged(body: string): ButtonBuilder;
  onImplicitBackgroundHeightChanged(body: string): ButtonBuilder;
  onImplicitBackgroundWidthChanged(body: string): ButtonBuilder;
  onImplicitContentHeightChanged(body: string): ButtonBuilder;
  onImplicitContentWidthChanged(body: string): ButtonBuilder;
  onImplicitHeightChanged(body: string): ButtonBuilder;
  onImplicitIndicatorHeightChanged(body: string): ButtonBuilder;
  onImplicitIndicatorWidthChanged(body: string): ButtonBuilder;
  onImplicitWidthChanged(body: string): ButtonBuilder;
  onIndicatorChanged(body: string): ButtonBuilder;
  onLeftInsetChanged(body: string): ButtonBuilder;
  onLeftPaddingChanged(body: string): ButtonBuilder;
  onLocaleChanged(body: string): ButtonBuilder;
  onMirroredChanged(body: string): ButtonBuilder;
  onObjectNameChanged(body: string): ButtonBuilder;
  onOpacityChanged(body: string): ButtonBuilder;
  onPaddingChanged(body: string): ButtonBuilder;
  onPaletteChanged(body: string): ButtonBuilder;
  onPaletteCreated(body: string): ButtonBuilder;
  onParentChanged(body: string): ButtonBuilder;
  onPressAndHold(body: string): ButtonBuilder;
  onPressXChanged(body: string): ButtonBuilder;
  onPressYChanged(body: string): ButtonBuilder;
  onPressed(body: string): ButtonBuilder;
  onPressedChanged(body: string): ButtonBuilder;
  onReleased(body: string): ButtonBuilder;
  onRightInsetChanged(body: string): ButtonBuilder;
  onRightPaddingChanged(body: string): ButtonBuilder;
  onRotationChanged(body: string): ButtonBuilder;
  onScaleChanged(body: string): ButtonBuilder;
  onSmoothChanged(body: string): ButtonBuilder;
  onSpacingChanged(body: string): ButtonBuilder;
  onStateChanged(body: string): ButtonBuilder;
  onTextChanged(body: string): ButtonBuilder;
  onToggled(body: string): ButtonBuilder;
  onTopInsetChanged(body: string): ButtonBuilder;
  onTopPaddingChanged(body: string): ButtonBuilder;
  onTransformOriginChanged(body: string): ButtonBuilder;
  onVerticalPaddingChanged(body: string): ButtonBuilder;
  onVisibleChanged(body: string): ButtonBuilder;
  onVisibleChildrenChanged(body: string): ButtonBuilder;
  onVisualFocusChanged(body: string): ButtonBuilder;
  onWheelEnabledChanged(body: string): ButtonBuilder;
  onWidthChanged(body: string): ButtonBuilder;
  onWindowChanged(body: string): ButtonBuilder;
  onXChanged(body: string): ButtonBuilder;
  onYChanged(body: string): ButtonBuilder;
  onZChanged(body: string): ButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): ButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ButtonBuilder;
}

const BUTTON_META: TypeMetadata = {
  typeName: 'Button',
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

export function Button(): ButtonBuilder {
  return createFluentBuilder('Button', BUTTON_META) as unknown as ButtonBuilder;
}

export namespace Button {
  export namespace Display {
    export const IconOnly = createEnumToken('Button', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('Button', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('Button', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('Button', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Button',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Button',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Button', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Button', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Button', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Button', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Button', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Button',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Button',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Button', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Button', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Button', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Button', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Button', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Button', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Button', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Button', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Button', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Button', 'TransformOrigin', 'BottomRight');
  }
}
