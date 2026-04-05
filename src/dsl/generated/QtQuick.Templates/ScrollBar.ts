// AUTO-GENERATED — DO NOT EDIT
// Type: ScrollBar
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
export interface ScrollBarBuilder {
  id(id: string): ScrollBarBuilder;
  child(obj: QmlObjectBuilder): ScrollBarBuilder;

  active(value: boolean): ScrollBarBuilder;
  activeBind(expr: string): ScrollBarBuilder;
  activeFocusOnTab(value: boolean): ScrollBarBuilder;
  activeFocusOnTabBind(expr: string): ScrollBarBuilder;
  antialiasing(value: boolean): ScrollBarBuilder;
  antialiasingBind(expr: string): ScrollBarBuilder;
  background(value: ItemBuilder): ScrollBarBuilder;
  backgroundBind(expr: string): ScrollBarBuilder;
  baselineOffset(value: number): ScrollBarBuilder;
  baselineOffsetBind(expr: string): ScrollBarBuilder;
  bottomInset(value: number): ScrollBarBuilder;
  bottomInsetBind(expr: string): ScrollBarBuilder;
  bottomPadding(value: number): ScrollBarBuilder;
  bottomPaddingBind(expr: string): ScrollBarBuilder;
  clip(value: boolean): ScrollBarBuilder;
  clipBind(expr: string): ScrollBarBuilder;
  containmentMask(value: QtObjectBuilder): ScrollBarBuilder;
  containmentMaskBind(expr: string): ScrollBarBuilder;
  contentItem(value: ItemBuilder): ScrollBarBuilder;
  contentItemBind(expr: string): ScrollBarBuilder;
  enabled(value: boolean): ScrollBarBuilder;
  enabledBind(expr: string): ScrollBarBuilder;
  focus(value: boolean): ScrollBarBuilder;
  focusBind(expr: string): ScrollBarBuilder;
  focusPolicy(value: QmlEnumToken): ScrollBarBuilder;
  focusPolicyBind(expr: string): ScrollBarBuilder;
  focusReason(value: QmlEnumToken): ScrollBarBuilder;
  focusReasonBind(expr: string): ScrollBarBuilder;
  font(value: QmlFont): ScrollBarBuilder;
  fontBind(expr: string): ScrollBarBuilder;
  height(value: number): ScrollBarBuilder;
  heightBind(expr: string): ScrollBarBuilder;
  horizontalPadding(value: number): ScrollBarBuilder;
  horizontalPaddingBind(expr: string): ScrollBarBuilder;
  hoverEnabled(value: boolean): ScrollBarBuilder;
  hoverEnabledBind(expr: string): ScrollBarBuilder;
  implicitHeight(value: number): ScrollBarBuilder;
  implicitHeightBind(expr: string): ScrollBarBuilder;
  implicitWidth(value: number): ScrollBarBuilder;
  implicitWidthBind(expr: string): ScrollBarBuilder;
  interactive(value: boolean): ScrollBarBuilder;
  interactiveBind(expr: string): ScrollBarBuilder;
  leftInset(value: number): ScrollBarBuilder;
  leftInsetBind(expr: string): ScrollBarBuilder;
  leftPadding(value: number): ScrollBarBuilder;
  leftPaddingBind(expr: string): ScrollBarBuilder;
  locale(value: QmlValue): ScrollBarBuilder;
  localeBind(expr: string): ScrollBarBuilder;
  minimumSize(value: number): ScrollBarBuilder;
  minimumSizeBind(expr: string): ScrollBarBuilder;
  objectName(value: string): ScrollBarBuilder;
  objectNameBind(expr: string): ScrollBarBuilder;
  opacity(value: number): ScrollBarBuilder;
  opacityBind(expr: string): ScrollBarBuilder;
  orientation(value: QmlEnumToken): ScrollBarBuilder;
  orientationBind(expr: string): ScrollBarBuilder;
  padding(value: number): ScrollBarBuilder;
  paddingBind(expr: string): ScrollBarBuilder;
  palette(value: PaletteBuilder): ScrollBarBuilder;
  paletteBind(expr: string): ScrollBarBuilder;
  parent(value: ItemBuilder): ScrollBarBuilder;
  parentBind(expr: string): ScrollBarBuilder;
  policy(value: QmlEnumToken): ScrollBarBuilder;
  policyBind(expr: string): ScrollBarBuilder;
  position(value: number): ScrollBarBuilder;
  positionBind(expr: string): ScrollBarBuilder;
  pressed(value: boolean): ScrollBarBuilder;
  pressedBind(expr: string): ScrollBarBuilder;
  rightInset(value: number): ScrollBarBuilder;
  rightInsetBind(expr: string): ScrollBarBuilder;
  rightPadding(value: number): ScrollBarBuilder;
  rightPaddingBind(expr: string): ScrollBarBuilder;
  rotation(value: number): ScrollBarBuilder;
  rotationBind(expr: string): ScrollBarBuilder;
  scale(value: number): ScrollBarBuilder;
  scaleBind(expr: string): ScrollBarBuilder;
  size(value: number): ScrollBarBuilder;
  sizeBind(expr: string): ScrollBarBuilder;
  smooth(value: boolean): ScrollBarBuilder;
  smoothBind(expr: string): ScrollBarBuilder;
  snapMode(value: QmlEnumToken): ScrollBarBuilder;
  snapModeBind(expr: string): ScrollBarBuilder;
  spacing(value: number): ScrollBarBuilder;
  spacingBind(expr: string): ScrollBarBuilder;
  state(value: string): ScrollBarBuilder;
  stateBind(expr: string): ScrollBarBuilder;
  stepSize(value: number): ScrollBarBuilder;
  stepSizeBind(expr: string): ScrollBarBuilder;
  topInset(value: number): ScrollBarBuilder;
  topInsetBind(expr: string): ScrollBarBuilder;
  topPadding(value: number): ScrollBarBuilder;
  topPaddingBind(expr: string): ScrollBarBuilder;
  transformOrigin(value: QmlEnumToken): ScrollBarBuilder;
  transformOriginBind(expr: string): ScrollBarBuilder;
  verticalPadding(value: number): ScrollBarBuilder;
  verticalPaddingBind(expr: string): ScrollBarBuilder;
  visible(value: boolean): ScrollBarBuilder;
  visibleBind(expr: string): ScrollBarBuilder;
  wheelEnabled(value: boolean): ScrollBarBuilder;
  wheelEnabledBind(expr: string): ScrollBarBuilder;
  width(value: number): ScrollBarBuilder;
  widthBind(expr: string): ScrollBarBuilder;
  x(value: number): ScrollBarBuilder;
  xBind(expr: string): ScrollBarBuilder;
  y(value: number): ScrollBarBuilder;
  yBind(expr: string): ScrollBarBuilder;
  z(value: number): ScrollBarBuilder;
  zBind(expr: string): ScrollBarBuilder;
  onActiveChanged(body: string): ScrollBarBuilder;
  onActiveFocusChanged(body: string): ScrollBarBuilder;
  onActiveFocusOnTabChanged(body: string): ScrollBarBuilder;
  onAntialiasingChanged(body: string): ScrollBarBuilder;
  onAvailableHeightChanged(body: string): ScrollBarBuilder;
  onAvailableWidthChanged(body: string): ScrollBarBuilder;
  onBackgroundChanged(body: string): ScrollBarBuilder;
  onBaselineOffsetChanged(body: string): ScrollBarBuilder;
  onBottomInsetChanged(body: string): ScrollBarBuilder;
  onBottomPaddingChanged(body: string): ScrollBarBuilder;
  onChildrenChanged(body: string): ScrollBarBuilder;
  onChildrenRectChanged(body: string): ScrollBarBuilder;
  onClipChanged(body: string): ScrollBarBuilder;
  onContainmentMaskChanged(body: string): ScrollBarBuilder;
  onContentItemChanged(body: string): ScrollBarBuilder;
  onEnabledChanged(body: string): ScrollBarBuilder;
  onFocusChanged(body: string): ScrollBarBuilder;
  onFocusPolicyChanged(body: string): ScrollBarBuilder;
  onFocusReasonChanged(body: string): ScrollBarBuilder;
  onFontChanged(body: string): ScrollBarBuilder;
  onHeightChanged(body: string): ScrollBarBuilder;
  onHorizontalPaddingChanged(body: string): ScrollBarBuilder;
  onHoverEnabledChanged(body: string): ScrollBarBuilder;
  onHoveredChanged(body: string): ScrollBarBuilder;
  onImplicitBackgroundHeightChanged(body: string): ScrollBarBuilder;
  onImplicitBackgroundWidthChanged(body: string): ScrollBarBuilder;
  onImplicitContentHeightChanged(body: string): ScrollBarBuilder;
  onImplicitContentWidthChanged(body: string): ScrollBarBuilder;
  onImplicitHeightChanged(body: string): ScrollBarBuilder;
  onImplicitWidthChanged(body: string): ScrollBarBuilder;
  onInteractiveChanged(body: string): ScrollBarBuilder;
  onLeftInsetChanged(body: string): ScrollBarBuilder;
  onLeftPaddingChanged(body: string): ScrollBarBuilder;
  onLocaleChanged(body: string): ScrollBarBuilder;
  onMinimumSizeChanged(body: string): ScrollBarBuilder;
  onMirroredChanged(body: string): ScrollBarBuilder;
  onObjectNameChanged(body: string): ScrollBarBuilder;
  onOpacityChanged(body: string): ScrollBarBuilder;
  onOrientationChanged(body: string): ScrollBarBuilder;
  onPaddingChanged(body: string): ScrollBarBuilder;
  onPaletteChanged(body: string): ScrollBarBuilder;
  onPaletteCreated(body: string): ScrollBarBuilder;
  onParentChanged(body: string): ScrollBarBuilder;
  onPolicyChanged(body: string): ScrollBarBuilder;
  onPositionChanged(body: string): ScrollBarBuilder;
  onPressedChanged(body: string): ScrollBarBuilder;
  onRightInsetChanged(body: string): ScrollBarBuilder;
  onRightPaddingChanged(body: string): ScrollBarBuilder;
  onRotationChanged(body: string): ScrollBarBuilder;
  onScaleChanged(body: string): ScrollBarBuilder;
  onSizeChanged(body: string): ScrollBarBuilder;
  onSmoothChanged(body: string): ScrollBarBuilder;
  onSnapModeChanged(body: string): ScrollBarBuilder;
  onSpacingChanged(body: string): ScrollBarBuilder;
  onStateChanged(body: string): ScrollBarBuilder;
  onStepSizeChanged(body: string): ScrollBarBuilder;
  onTopInsetChanged(body: string): ScrollBarBuilder;
  onTopPaddingChanged(body: string): ScrollBarBuilder;
  onTransformOriginChanged(body: string): ScrollBarBuilder;
  onVerticalPaddingChanged(body: string): ScrollBarBuilder;
  onVisibleChanged(body: string): ScrollBarBuilder;
  onVisibleChildrenChanged(body: string): ScrollBarBuilder;
  onVisualFocusChanged(body: string): ScrollBarBuilder;
  onVisualPositionChanged(body: string): ScrollBarBuilder;
  onVisualSizeChanged(body: string): ScrollBarBuilder;
  onWheelEnabledChanged(body: string): ScrollBarBuilder;
  onWidthChanged(body: string): ScrollBarBuilder;
  onWindowChanged(body: string): ScrollBarBuilder;
  onXChanged(body: string): ScrollBarBuilder;
  onYChanged(body: string): ScrollBarBuilder;
  onZChanged(body: string): ScrollBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ScrollBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ScrollBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ScrollBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ScrollBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ScrollBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ScrollBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ScrollBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ScrollBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ScrollBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ScrollBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ScrollBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ScrollBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ScrollBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ScrollBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ScrollBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ScrollBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ScrollBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ScrollBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ScrollBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ScrollBarBuilder;
}

const SCROLLBAR_META: TypeMetadata = {
  typeName: 'ScrollBar',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
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
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interactive', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'minimumSize', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'policy', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'pressed', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'size', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'snapMode', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'stepSize', hasValue: true, hasBinding: true },
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
    { handlerName: 'onActiveChanged', paramCount: 0 },
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
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMinimumSizeChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPolicyChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSizeChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSnapModeChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStepSizeChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onVisualPositionChanged', paramCount: 0 },
    { handlerName: 'onVisualSizeChanged', paramCount: 0 },
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

export function ScrollBar(): ScrollBarBuilder {
  return createFluentBuilder('ScrollBar', SCROLLBAR_META) as unknown as ScrollBarBuilder;
}

export namespace ScrollBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ScrollBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ScrollBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ScrollBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ScrollBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ScrollBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Policy {
    export const AsNeeded = createEnumToken('ScrollBar', 'Policy', 'AsNeeded');
    export const AlwaysOff = createEnumToken('ScrollBar', 'Policy', 'AlwaysOff');
    export const AlwaysOn = createEnumToken('ScrollBar', 'Policy', 'AlwaysOn');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('ScrollBar', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('ScrollBar', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('ScrollBar', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ScrollBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ScrollBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ScrollBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ScrollBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ScrollBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ScrollBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ScrollBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ScrollBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ScrollBar', 'TransformOrigin', 'BottomRight');
  }
}
