// AUTO-GENERATED — DO NOT EDIT
// Type: Slider
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
export interface SliderBuilder {
  id(id: string): SliderBuilder;
  child(obj: QmlObjectBuilder): SliderBuilder;

  activeFocusOnTab(value: boolean): SliderBuilder;
  activeFocusOnTabBind(expr: string): SliderBuilder;
  antialiasing(value: boolean): SliderBuilder;
  antialiasingBind(expr: string): SliderBuilder;
  background(value: ItemBuilder): SliderBuilder;
  backgroundBind(expr: string): SliderBuilder;
  baselineOffset(value: number): SliderBuilder;
  baselineOffsetBind(expr: string): SliderBuilder;
  bottomInset(value: number): SliderBuilder;
  bottomInsetBind(expr: string): SliderBuilder;
  bottomPadding(value: number): SliderBuilder;
  bottomPaddingBind(expr: string): SliderBuilder;
  clip(value: boolean): SliderBuilder;
  clipBind(expr: string): SliderBuilder;
  containmentMask(value: QtObjectBuilder): SliderBuilder;
  containmentMaskBind(expr: string): SliderBuilder;
  contentItem(value: ItemBuilder): SliderBuilder;
  contentItemBind(expr: string): SliderBuilder;
  enabled(value: boolean): SliderBuilder;
  enabledBind(expr: string): SliderBuilder;
  focus(value: boolean): SliderBuilder;
  focusBind(expr: string): SliderBuilder;
  focusPolicy(value: QmlEnumToken): SliderBuilder;
  focusPolicyBind(expr: string): SliderBuilder;
  focusReason(value: QmlEnumToken): SliderBuilder;
  focusReasonBind(expr: string): SliderBuilder;
  font(value: QmlFont): SliderBuilder;
  fontBind(expr: string): SliderBuilder;
  from(value: number): SliderBuilder;
  fromBind(expr: string): SliderBuilder;
  handle(value: ItemBuilder): SliderBuilder;
  handleBind(expr: string): SliderBuilder;
  height(value: number): SliderBuilder;
  heightBind(expr: string): SliderBuilder;
  horizontalPadding(value: number): SliderBuilder;
  horizontalPaddingBind(expr: string): SliderBuilder;
  hoverEnabled(value: boolean): SliderBuilder;
  hoverEnabledBind(expr: string): SliderBuilder;
  implicitHeight(value: number): SliderBuilder;
  implicitHeightBind(expr: string): SliderBuilder;
  implicitWidth(value: number): SliderBuilder;
  implicitWidthBind(expr: string): SliderBuilder;
  leftInset(value: number): SliderBuilder;
  leftInsetBind(expr: string): SliderBuilder;
  leftPadding(value: number): SliderBuilder;
  leftPaddingBind(expr: string): SliderBuilder;
  live(value: boolean): SliderBuilder;
  liveBind(expr: string): SliderBuilder;
  locale(value: string): SliderBuilder;
  localeBind(expr: string): SliderBuilder;
  objectName(value: string): SliderBuilder;
  objectNameBind(expr: string): SliderBuilder;
  opacity(value: number): SliderBuilder;
  opacityBind(expr: string): SliderBuilder;
  orientation(value: QmlEnumToken): SliderBuilder;
  orientationBind(expr: string): SliderBuilder;
  padding(value: number): SliderBuilder;
  paddingBind(expr: string): SliderBuilder;
  palette(value: PaletteBuilder): SliderBuilder;
  paletteBind(expr: string): SliderBuilder;
  parent(value: ItemBuilder): SliderBuilder;
  parentBind(expr: string): SliderBuilder;
  pressed(value: boolean): SliderBuilder;
  pressedBind(expr: string): SliderBuilder;
  rightInset(value: number): SliderBuilder;
  rightInsetBind(expr: string): SliderBuilder;
  rightPadding(value: number): SliderBuilder;
  rightPaddingBind(expr: string): SliderBuilder;
  rotation(value: number): SliderBuilder;
  rotationBind(expr: string): SliderBuilder;
  scale(value: number): SliderBuilder;
  scaleBind(expr: string): SliderBuilder;
  smooth(value: boolean): SliderBuilder;
  smoothBind(expr: string): SliderBuilder;
  snapMode(value: QmlEnumToken): SliderBuilder;
  snapModeBind(expr: string): SliderBuilder;
  spacing(value: number): SliderBuilder;
  spacingBind(expr: string): SliderBuilder;
  state(value: string): SliderBuilder;
  stateBind(expr: string): SliderBuilder;
  stepSize(value: number): SliderBuilder;
  stepSizeBind(expr: string): SliderBuilder;
  to(value: number): SliderBuilder;
  toBind(expr: string): SliderBuilder;
  topInset(value: number): SliderBuilder;
  topInsetBind(expr: string): SliderBuilder;
  topPadding(value: number): SliderBuilder;
  topPaddingBind(expr: string): SliderBuilder;
  touchDragThreshold(value: number): SliderBuilder;
  touchDragThresholdBind(expr: string): SliderBuilder;
  transformOrigin(value: QmlEnumToken): SliderBuilder;
  transformOriginBind(expr: string): SliderBuilder;
  value(value: number): SliderBuilder;
  valueBind(expr: string): SliderBuilder;
  verticalPadding(value: number): SliderBuilder;
  verticalPaddingBind(expr: string): SliderBuilder;
  visible(value: boolean): SliderBuilder;
  visibleBind(expr: string): SliderBuilder;
  wheelEnabled(value: boolean): SliderBuilder;
  wheelEnabledBind(expr: string): SliderBuilder;
  width(value: number): SliderBuilder;
  widthBind(expr: string): SliderBuilder;
  x(value: number): SliderBuilder;
  xBind(expr: string): SliderBuilder;
  y(value: number): SliderBuilder;
  yBind(expr: string): SliderBuilder;
  z(value: number): SliderBuilder;
  zBind(expr: string): SliderBuilder;
  onActiveFocusChanged(body: string): SliderBuilder;
  onActiveFocusOnTabChanged(body: string): SliderBuilder;
  onAntialiasingChanged(body: string): SliderBuilder;
  onAvailableHeightChanged(body: string): SliderBuilder;
  onAvailableWidthChanged(body: string): SliderBuilder;
  onBackgroundChanged(body: string): SliderBuilder;
  onBaselineOffsetChanged(body: string): SliderBuilder;
  onBottomInsetChanged(body: string): SliderBuilder;
  onBottomPaddingChanged(body: string): SliderBuilder;
  onChildrenChanged(body: string): SliderBuilder;
  onChildrenRectChanged(body: string): SliderBuilder;
  onClipChanged(body: string): SliderBuilder;
  onContainmentMaskChanged(body: string): SliderBuilder;
  onContentItemChanged(body: string): SliderBuilder;
  onEnabledChanged(body: string): SliderBuilder;
  onFocusChanged(body: string): SliderBuilder;
  onFocusPolicyChanged(body: string): SliderBuilder;
  onFocusReasonChanged(body: string): SliderBuilder;
  onFontChanged(body: string): SliderBuilder;
  onFromChanged(body: string): SliderBuilder;
  onHandleChanged(body: string): SliderBuilder;
  onHeightChanged(body: string): SliderBuilder;
  onHorizontalPaddingChanged(body: string): SliderBuilder;
  onHoverEnabledChanged(body: string): SliderBuilder;
  onHoveredChanged(body: string): SliderBuilder;
  onImplicitBackgroundHeightChanged(body: string): SliderBuilder;
  onImplicitBackgroundWidthChanged(body: string): SliderBuilder;
  onImplicitContentHeightChanged(body: string): SliderBuilder;
  onImplicitContentWidthChanged(body: string): SliderBuilder;
  onImplicitHandleHeightChanged(body: string): SliderBuilder;
  onImplicitHandleWidthChanged(body: string): SliderBuilder;
  onImplicitHeightChanged(body: string): SliderBuilder;
  onImplicitWidthChanged(body: string): SliderBuilder;
  onLeftInsetChanged(body: string): SliderBuilder;
  onLeftPaddingChanged(body: string): SliderBuilder;
  onLiveChanged(body: string): SliderBuilder;
  onLocaleChanged(body: string): SliderBuilder;
  onMirroredChanged(body: string): SliderBuilder;
  onMoved(body: string): SliderBuilder;
  onObjectNameChanged(body: string): SliderBuilder;
  onOpacityChanged(body: string): SliderBuilder;
  onOrientationChanged(body: string): SliderBuilder;
  onPaddingChanged(body: string): SliderBuilder;
  onPaletteChanged(body: string): SliderBuilder;
  onPaletteCreated(body: string): SliderBuilder;
  onParentChanged(body: string): SliderBuilder;
  onPositionChanged(body: string): SliderBuilder;
  onPressedChanged(body: string): SliderBuilder;
  onRightInsetChanged(body: string): SliderBuilder;
  onRightPaddingChanged(body: string): SliderBuilder;
  onRotationChanged(body: string): SliderBuilder;
  onScaleChanged(body: string): SliderBuilder;
  onSmoothChanged(body: string): SliderBuilder;
  onSnapModeChanged(body: string): SliderBuilder;
  onSpacingChanged(body: string): SliderBuilder;
  onStateChanged(body: string): SliderBuilder;
  onStepSizeChanged(body: string): SliderBuilder;
  onToChanged(body: string): SliderBuilder;
  onTopInsetChanged(body: string): SliderBuilder;
  onTopPaddingChanged(body: string): SliderBuilder;
  onTouchDragThresholdChanged(body: string): SliderBuilder;
  onTransformOriginChanged(body: string): SliderBuilder;
  onValueChanged(body: string): SliderBuilder;
  onVerticalPaddingChanged(body: string): SliderBuilder;
  onVisibleChanged(body: string): SliderBuilder;
  onVisibleChildrenChanged(body: string): SliderBuilder;
  onVisualFocusChanged(body: string): SliderBuilder;
  onVisualPositionChanged(body: string): SliderBuilder;
  onWheelEnabledChanged(body: string): SliderBuilder;
  onWidthChanged(body: string): SliderBuilder;
  onWindowChanged(body: string): SliderBuilder;
  onXChanged(body: string): SliderBuilder;
  onYChanged(body: string): SliderBuilder;
  onZChanged(body: string): SliderBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SliderBuilder;
  layer(setup: (b: LayerBuilder) => void): SliderBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SliderBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SliderBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SliderBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SliderBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SliderBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SliderBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SliderBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SliderBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SliderBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SliderBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SliderBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SliderBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SliderBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SliderBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SliderBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SliderBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SliderBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SliderBuilder;
}

const SLIDER_META: TypeMetadata = {
  typeName: 'Slider',
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
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'live', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pressed', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'snapMode', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'stepSize', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'touchDragThreshold', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
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
    { handlerName: 'onImplicitHandleHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHandleWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLiveChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onMoved', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
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
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStepSizeChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTouchDragThresholdChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 0 },
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

export function Slider(): SliderBuilder {
  return createFluentBuilder('Slider', SLIDER_META) as unknown as SliderBuilder;
}

export namespace Slider {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Slider', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Slider', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Slider', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Slider', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Slider', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Slider', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Slider', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Slider', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Slider', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Slider', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('Slider', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('Slider', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('Slider', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Slider', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Slider', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Slider', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Slider', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Slider', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Slider', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Slider', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Slider', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Slider', 'TransformOrigin', 'BottomRight');
  }
}
