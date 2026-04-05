// AUTO-GENERATED — DO NOT EDIT
// Type: Dial
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
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
export interface DialBuilder {
  id(id: string): DialBuilder;
  child(obj: QmlObjectBuilder): DialBuilder;

  activeFocusOnTab(value: boolean): DialBuilder;
  activeFocusOnTabBind(expr: string): DialBuilder;
  antialiasing(value: boolean): DialBuilder;
  antialiasingBind(expr: string): DialBuilder;
  background(value: ItemBuilder): DialBuilder;
  backgroundBind(expr: string): DialBuilder;
  baselineOffset(value: number): DialBuilder;
  baselineOffsetBind(expr: string): DialBuilder;
  bottomInset(value: number): DialBuilder;
  bottomInsetBind(expr: string): DialBuilder;
  bottomPadding(value: number): DialBuilder;
  bottomPaddingBind(expr: string): DialBuilder;
  clip(value: boolean): DialBuilder;
  clipBind(expr: string): DialBuilder;
  containmentMask(value: QtObjectBuilder): DialBuilder;
  containmentMaskBind(expr: string): DialBuilder;
  contentItem(value: ItemBuilder): DialBuilder;
  contentItemBind(expr: string): DialBuilder;
  enabled(value: boolean): DialBuilder;
  enabledBind(expr: string): DialBuilder;
  endAngle(value: number): DialBuilder;
  endAngleBind(expr: string): DialBuilder;
  focus(value: boolean): DialBuilder;
  focusBind(expr: string): DialBuilder;
  focusPolicy(value: QmlEnumToken): DialBuilder;
  focusPolicyBind(expr: string): DialBuilder;
  focusReason(value: QmlEnumToken): DialBuilder;
  focusReasonBind(expr: string): DialBuilder;
  font(value: QmlFont): DialBuilder;
  fontBind(expr: string): DialBuilder;
  from(value: number): DialBuilder;
  fromBind(expr: string): DialBuilder;
  handle(value: ItemBuilder): DialBuilder;
  handleBind(expr: string): DialBuilder;
  height(value: number): DialBuilder;
  heightBind(expr: string): DialBuilder;
  horizontalPadding(value: number): DialBuilder;
  horizontalPaddingBind(expr: string): DialBuilder;
  hoverEnabled(value: boolean): DialBuilder;
  hoverEnabledBind(expr: string): DialBuilder;
  implicitHeight(value: number): DialBuilder;
  implicitHeightBind(expr: string): DialBuilder;
  implicitWidth(value: number): DialBuilder;
  implicitWidthBind(expr: string): DialBuilder;
  inputMode(value: QmlEnumToken): DialBuilder;
  inputModeBind(expr: string): DialBuilder;
  leftInset(value: number): DialBuilder;
  leftInsetBind(expr: string): DialBuilder;
  leftPadding(value: number): DialBuilder;
  leftPaddingBind(expr: string): DialBuilder;
  live(value: boolean): DialBuilder;
  liveBind(expr: string): DialBuilder;
  locale(value: string): DialBuilder;
  localeBind(expr: string): DialBuilder;
  objectName(value: string): DialBuilder;
  objectNameBind(expr: string): DialBuilder;
  opacity(value: number): DialBuilder;
  opacityBind(expr: string): DialBuilder;
  padding(value: number): DialBuilder;
  paddingBind(expr: string): DialBuilder;
  palette(value: PaletteBuilder): DialBuilder;
  paletteBind(expr: string): DialBuilder;
  parent(value: ItemBuilder): DialBuilder;
  parentBind(expr: string): DialBuilder;
  rightInset(value: number): DialBuilder;
  rightInsetBind(expr: string): DialBuilder;
  rightPadding(value: number): DialBuilder;
  rightPaddingBind(expr: string): DialBuilder;
  rotation(value: number): DialBuilder;
  rotationBind(expr: string): DialBuilder;
  scale(value: number): DialBuilder;
  scaleBind(expr: string): DialBuilder;
  smooth(value: boolean): DialBuilder;
  smoothBind(expr: string): DialBuilder;
  snapMode(value: QmlEnumToken): DialBuilder;
  snapModeBind(expr: string): DialBuilder;
  spacing(value: number): DialBuilder;
  spacingBind(expr: string): DialBuilder;
  startAngle(value: number): DialBuilder;
  startAngleBind(expr: string): DialBuilder;
  state(value: string): DialBuilder;
  stateBind(expr: string): DialBuilder;
  stepSize(value: number): DialBuilder;
  stepSizeBind(expr: string): DialBuilder;
  to(value: number): DialBuilder;
  toBind(expr: string): DialBuilder;
  topInset(value: number): DialBuilder;
  topInsetBind(expr: string): DialBuilder;
  topPadding(value: number): DialBuilder;
  topPaddingBind(expr: string): DialBuilder;
  transformOrigin(value: QmlEnumToken): DialBuilder;
  transformOriginBind(expr: string): DialBuilder;
  value(value: number): DialBuilder;
  valueBind(expr: string): DialBuilder;
  verticalPadding(value: number): DialBuilder;
  verticalPaddingBind(expr: string): DialBuilder;
  visible(value: boolean): DialBuilder;
  visibleBind(expr: string): DialBuilder;
  wheelEnabled(value: boolean): DialBuilder;
  wheelEnabledBind(expr: string): DialBuilder;
  width(value: number): DialBuilder;
  widthBind(expr: string): DialBuilder;
  wrap(value: boolean): DialBuilder;
  wrapBind(expr: string): DialBuilder;
  x(value: number): DialBuilder;
  xBind(expr: string): DialBuilder;
  y(value: number): DialBuilder;
  yBind(expr: string): DialBuilder;
  z(value: number): DialBuilder;
  zBind(expr: string): DialBuilder;
  onActiveFocusChanged(body: string): DialBuilder;
  onActiveFocusOnTabChanged(body: string): DialBuilder;
  onAngleChanged(body: string): DialBuilder;
  onAntialiasingChanged(body: string): DialBuilder;
  onAvailableHeightChanged(body: string): DialBuilder;
  onAvailableWidthChanged(body: string): DialBuilder;
  onBackgroundChanged(body: string): DialBuilder;
  onBaselineOffsetChanged(body: string): DialBuilder;
  onBottomInsetChanged(body: string): DialBuilder;
  onBottomPaddingChanged(body: string): DialBuilder;
  onChildrenChanged(body: string): DialBuilder;
  onChildrenRectChanged(body: string): DialBuilder;
  onClipChanged(body: string): DialBuilder;
  onContainmentMaskChanged(body: string): DialBuilder;
  onContentItemChanged(body: string): DialBuilder;
  onEnabledChanged(body: string): DialBuilder;
  onEndAngleChanged(body: string): DialBuilder;
  onFocusChanged(body: string): DialBuilder;
  onFocusPolicyChanged(body: string): DialBuilder;
  onFocusReasonChanged(body: string): DialBuilder;
  onFontChanged(body: string): DialBuilder;
  onFromChanged(body: string): DialBuilder;
  onHandleChanged(body: string): DialBuilder;
  onHeightChanged(body: string): DialBuilder;
  onHorizontalPaddingChanged(body: string): DialBuilder;
  onHoverEnabledChanged(body: string): DialBuilder;
  onHoveredChanged(body: string): DialBuilder;
  onImplicitBackgroundHeightChanged(body: string): DialBuilder;
  onImplicitBackgroundWidthChanged(body: string): DialBuilder;
  onImplicitContentHeightChanged(body: string): DialBuilder;
  onImplicitContentWidthChanged(body: string): DialBuilder;
  onImplicitHeightChanged(body: string): DialBuilder;
  onImplicitWidthChanged(body: string): DialBuilder;
  onInputModeChanged(body: string): DialBuilder;
  onLeftInsetChanged(body: string): DialBuilder;
  onLeftPaddingChanged(body: string): DialBuilder;
  onLiveChanged(body: string): DialBuilder;
  onLocaleChanged(body: string): DialBuilder;
  onMirroredChanged(body: string): DialBuilder;
  onMoved(body: string): DialBuilder;
  onObjectNameChanged(body: string): DialBuilder;
  onOpacityChanged(body: string): DialBuilder;
  onPaddingChanged(body: string): DialBuilder;
  onPaletteChanged(body: string): DialBuilder;
  onPaletteCreated(body: string): DialBuilder;
  onParentChanged(body: string): DialBuilder;
  onPositionChanged(body: string): DialBuilder;
  onPressedChanged(body: string): DialBuilder;
  onRightInsetChanged(body: string): DialBuilder;
  onRightPaddingChanged(body: string): DialBuilder;
  onRotationChanged(body: string): DialBuilder;
  onScaleChanged(body: string): DialBuilder;
  onSmoothChanged(body: string): DialBuilder;
  onSnapModeChanged(body: string): DialBuilder;
  onSpacingChanged(body: string): DialBuilder;
  onStartAngleChanged(body: string): DialBuilder;
  onStateChanged(body: string): DialBuilder;
  onStepSizeChanged(body: string): DialBuilder;
  onToChanged(body: string): DialBuilder;
  onTopInsetChanged(body: string): DialBuilder;
  onTopPaddingChanged(body: string): DialBuilder;
  onTransformOriginChanged(body: string): DialBuilder;
  onValueChanged(body: string): DialBuilder;
  onVerticalPaddingChanged(body: string): DialBuilder;
  onVisibleChanged(body: string): DialBuilder;
  onVisibleChildrenChanged(body: string): DialBuilder;
  onVisualFocusChanged(body: string): DialBuilder;
  onWheelEnabledChanged(body: string): DialBuilder;
  onWidthChanged(body: string): DialBuilder;
  onWindowChanged(body: string): DialBuilder;
  onWrapChanged(body: string): DialBuilder;
  onWrapped(body: string): DialBuilder;
  onXChanged(body: string): DialBuilder;
  onYChanged(body: string): DialBuilder;
  onZChanged(body: string): DialBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DialBuilder;
  layer(setup: (b: LayerBuilder) => void): DialBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DialBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DialBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DialBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DialBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DialBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DialBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DialBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DialBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DialBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DialBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DialBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DialBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DialBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DialBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DialBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DialBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DialBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DialBuilder;
}

const DIAL_META: TypeMetadata = {
  typeName: 'Dial',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'endAngle', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'handle', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'inputMode', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'live', hasValue: true, hasBinding: true },
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
    { name: 'snapMode', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'startAngle', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'stepSize', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrap', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAngleChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEndAngleChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
    { handlerName: 'onHandleChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInputModeChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLiveChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onMoved', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSnapModeChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStartAngleChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStepSizeChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 0 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onWheelEnabledChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapChanged', paramCount: 0 },
    { handlerName: 'onWrapped', paramCount: 1 },
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

export function Dial(): DialBuilder {
  return createFluentBuilder('Dial', DIAL_META) as unknown as DialBuilder;
}

export namespace Dial {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Dial', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Dial', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Dial', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Dial', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Dial', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Dial', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Dial', 'Flags', 'ItemObservesViewport');
  }
  export namespace InputMode {
    export const Circular = createEnumToken('Dial', 'InputMode', 'Circular');
    export const Horizontal = createEnumToken('Dial', 'InputMode', 'Horizontal');
    export const Vertical = createEnumToken('Dial', 'InputMode', 'Vertical');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Dial', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Dial', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Dial', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('Dial', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('Dial', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('Dial', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Dial', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Dial', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Dial', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Dial', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Dial', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Dial', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Dial', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Dial', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Dial', 'TransformOrigin', 'BottomRight');
  }
  export namespace WrapDirection {
    export const Clockwise = createEnumToken('Dial', 'WrapDirection', 'Clockwise');
    export const CounterClockwise = createEnumToken('Dial', 'WrapDirection', 'CounterClockwise');
  }
}
