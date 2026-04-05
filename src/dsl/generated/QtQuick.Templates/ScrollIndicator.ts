// AUTO-GENERATED — DO NOT EDIT
// Type: ScrollIndicator
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
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
export interface ScrollIndicatorBuilder {
  id(id: string): ScrollIndicatorBuilder;
  child(obj: QmlObjectBuilder): ScrollIndicatorBuilder;

  active(value: boolean): ScrollIndicatorBuilder;
  activeBind(expr: string): ScrollIndicatorBuilder;
  activeFocusOnTab(value: boolean): ScrollIndicatorBuilder;
  activeFocusOnTabBind(expr: string): ScrollIndicatorBuilder;
  antialiasing(value: boolean): ScrollIndicatorBuilder;
  antialiasingBind(expr: string): ScrollIndicatorBuilder;
  background(value: ItemBuilder): ScrollIndicatorBuilder;
  backgroundBind(expr: string): ScrollIndicatorBuilder;
  baselineOffset(value: number): ScrollIndicatorBuilder;
  baselineOffsetBind(expr: string): ScrollIndicatorBuilder;
  bottomInset(value: number): ScrollIndicatorBuilder;
  bottomInsetBind(expr: string): ScrollIndicatorBuilder;
  bottomPadding(value: number): ScrollIndicatorBuilder;
  bottomPaddingBind(expr: string): ScrollIndicatorBuilder;
  clip(value: boolean): ScrollIndicatorBuilder;
  clipBind(expr: string): ScrollIndicatorBuilder;
  containmentMask(value: QtObjectBuilder): ScrollIndicatorBuilder;
  containmentMaskBind(expr: string): ScrollIndicatorBuilder;
  contentItem(value: ItemBuilder): ScrollIndicatorBuilder;
  contentItemBind(expr: string): ScrollIndicatorBuilder;
  enabled(value: boolean): ScrollIndicatorBuilder;
  enabledBind(expr: string): ScrollIndicatorBuilder;
  focus(value: boolean): ScrollIndicatorBuilder;
  focusBind(expr: string): ScrollIndicatorBuilder;
  focusPolicy(value: QmlEnumToken): ScrollIndicatorBuilder;
  focusPolicyBind(expr: string): ScrollIndicatorBuilder;
  focusReason(value: QmlEnumToken): ScrollIndicatorBuilder;
  focusReasonBind(expr: string): ScrollIndicatorBuilder;
  font(value: QmlFont): ScrollIndicatorBuilder;
  fontBind(expr: string): ScrollIndicatorBuilder;
  height(value: number): ScrollIndicatorBuilder;
  heightBind(expr: string): ScrollIndicatorBuilder;
  horizontalPadding(value: number): ScrollIndicatorBuilder;
  horizontalPaddingBind(expr: string): ScrollIndicatorBuilder;
  hoverEnabled(value: boolean): ScrollIndicatorBuilder;
  hoverEnabledBind(expr: string): ScrollIndicatorBuilder;
  implicitHeight(value: number): ScrollIndicatorBuilder;
  implicitHeightBind(expr: string): ScrollIndicatorBuilder;
  implicitWidth(value: number): ScrollIndicatorBuilder;
  implicitWidthBind(expr: string): ScrollIndicatorBuilder;
  leftInset(value: number): ScrollIndicatorBuilder;
  leftInsetBind(expr: string): ScrollIndicatorBuilder;
  leftPadding(value: number): ScrollIndicatorBuilder;
  leftPaddingBind(expr: string): ScrollIndicatorBuilder;
  locale(value: string): ScrollIndicatorBuilder;
  localeBind(expr: string): ScrollIndicatorBuilder;
  minimumSize(value: number): ScrollIndicatorBuilder;
  minimumSizeBind(expr: string): ScrollIndicatorBuilder;
  objectName(value: string): ScrollIndicatorBuilder;
  objectNameBind(expr: string): ScrollIndicatorBuilder;
  opacity(value: number): ScrollIndicatorBuilder;
  opacityBind(expr: string): ScrollIndicatorBuilder;
  orientation(value: QmlEnumToken): ScrollIndicatorBuilder;
  orientationBind(expr: string): ScrollIndicatorBuilder;
  padding(value: number): ScrollIndicatorBuilder;
  paddingBind(expr: string): ScrollIndicatorBuilder;
  palette(value: PaletteBuilder): ScrollIndicatorBuilder;
  paletteBind(expr: string): ScrollIndicatorBuilder;
  parent(value: ItemBuilder): ScrollIndicatorBuilder;
  parentBind(expr: string): ScrollIndicatorBuilder;
  position(value: number): ScrollIndicatorBuilder;
  positionBind(expr: string): ScrollIndicatorBuilder;
  rightInset(value: number): ScrollIndicatorBuilder;
  rightInsetBind(expr: string): ScrollIndicatorBuilder;
  rightPadding(value: number): ScrollIndicatorBuilder;
  rightPaddingBind(expr: string): ScrollIndicatorBuilder;
  rotation(value: number): ScrollIndicatorBuilder;
  rotationBind(expr: string): ScrollIndicatorBuilder;
  scale(value: number): ScrollIndicatorBuilder;
  scaleBind(expr: string): ScrollIndicatorBuilder;
  size(value: number): ScrollIndicatorBuilder;
  sizeBind(expr: string): ScrollIndicatorBuilder;
  smooth(value: boolean): ScrollIndicatorBuilder;
  smoothBind(expr: string): ScrollIndicatorBuilder;
  spacing(value: number): ScrollIndicatorBuilder;
  spacingBind(expr: string): ScrollIndicatorBuilder;
  state(value: string): ScrollIndicatorBuilder;
  stateBind(expr: string): ScrollIndicatorBuilder;
  topInset(value: number): ScrollIndicatorBuilder;
  topInsetBind(expr: string): ScrollIndicatorBuilder;
  topPadding(value: number): ScrollIndicatorBuilder;
  topPaddingBind(expr: string): ScrollIndicatorBuilder;
  transformOrigin(value: QmlEnumToken): ScrollIndicatorBuilder;
  transformOriginBind(expr: string): ScrollIndicatorBuilder;
  verticalPadding(value: number): ScrollIndicatorBuilder;
  verticalPaddingBind(expr: string): ScrollIndicatorBuilder;
  visible(value: boolean): ScrollIndicatorBuilder;
  visibleBind(expr: string): ScrollIndicatorBuilder;
  wheelEnabled(value: boolean): ScrollIndicatorBuilder;
  wheelEnabledBind(expr: string): ScrollIndicatorBuilder;
  width(value: number): ScrollIndicatorBuilder;
  widthBind(expr: string): ScrollIndicatorBuilder;
  x(value: number): ScrollIndicatorBuilder;
  xBind(expr: string): ScrollIndicatorBuilder;
  y(value: number): ScrollIndicatorBuilder;
  yBind(expr: string): ScrollIndicatorBuilder;
  z(value: number): ScrollIndicatorBuilder;
  zBind(expr: string): ScrollIndicatorBuilder;
  onActiveChanged(body: string): ScrollIndicatorBuilder;
  onActiveFocusChanged(body: string): ScrollIndicatorBuilder;
  onActiveFocusOnTabChanged(body: string): ScrollIndicatorBuilder;
  onAntialiasingChanged(body: string): ScrollIndicatorBuilder;
  onAvailableHeightChanged(body: string): ScrollIndicatorBuilder;
  onAvailableWidthChanged(body: string): ScrollIndicatorBuilder;
  onBackgroundChanged(body: string): ScrollIndicatorBuilder;
  onBaselineOffsetChanged(body: string): ScrollIndicatorBuilder;
  onBottomInsetChanged(body: string): ScrollIndicatorBuilder;
  onBottomPaddingChanged(body: string): ScrollIndicatorBuilder;
  onChildrenChanged(body: string): ScrollIndicatorBuilder;
  onChildrenRectChanged(body: string): ScrollIndicatorBuilder;
  onClipChanged(body: string): ScrollIndicatorBuilder;
  onContainmentMaskChanged(body: string): ScrollIndicatorBuilder;
  onContentItemChanged(body: string): ScrollIndicatorBuilder;
  onEnabledChanged(body: string): ScrollIndicatorBuilder;
  onFocusChanged(body: string): ScrollIndicatorBuilder;
  onFocusPolicyChanged(body: string): ScrollIndicatorBuilder;
  onFocusReasonChanged(body: string): ScrollIndicatorBuilder;
  onFontChanged(body: string): ScrollIndicatorBuilder;
  onHeightChanged(body: string): ScrollIndicatorBuilder;
  onHorizontalPaddingChanged(body: string): ScrollIndicatorBuilder;
  onHoverEnabledChanged(body: string): ScrollIndicatorBuilder;
  onHoveredChanged(body: string): ScrollIndicatorBuilder;
  onImplicitBackgroundHeightChanged(body: string): ScrollIndicatorBuilder;
  onImplicitBackgroundWidthChanged(body: string): ScrollIndicatorBuilder;
  onImplicitContentHeightChanged(body: string): ScrollIndicatorBuilder;
  onImplicitContentWidthChanged(body: string): ScrollIndicatorBuilder;
  onImplicitHeightChanged(body: string): ScrollIndicatorBuilder;
  onImplicitWidthChanged(body: string): ScrollIndicatorBuilder;
  onLeftInsetChanged(body: string): ScrollIndicatorBuilder;
  onLeftPaddingChanged(body: string): ScrollIndicatorBuilder;
  onLocaleChanged(body: string): ScrollIndicatorBuilder;
  onMinimumSizeChanged(body: string): ScrollIndicatorBuilder;
  onMirroredChanged(body: string): ScrollIndicatorBuilder;
  onObjectNameChanged(body: string): ScrollIndicatorBuilder;
  onOpacityChanged(body: string): ScrollIndicatorBuilder;
  onOrientationChanged(body: string): ScrollIndicatorBuilder;
  onPaddingChanged(body: string): ScrollIndicatorBuilder;
  onPaletteChanged(body: string): ScrollIndicatorBuilder;
  onPaletteCreated(body: string): ScrollIndicatorBuilder;
  onParentChanged(body: string): ScrollIndicatorBuilder;
  onPositionChanged(body: string): ScrollIndicatorBuilder;
  onRightInsetChanged(body: string): ScrollIndicatorBuilder;
  onRightPaddingChanged(body: string): ScrollIndicatorBuilder;
  onRotationChanged(body: string): ScrollIndicatorBuilder;
  onScaleChanged(body: string): ScrollIndicatorBuilder;
  onSizeChanged(body: string): ScrollIndicatorBuilder;
  onSmoothChanged(body: string): ScrollIndicatorBuilder;
  onSpacingChanged(body: string): ScrollIndicatorBuilder;
  onStateChanged(body: string): ScrollIndicatorBuilder;
  onTopInsetChanged(body: string): ScrollIndicatorBuilder;
  onTopPaddingChanged(body: string): ScrollIndicatorBuilder;
  onTransformOriginChanged(body: string): ScrollIndicatorBuilder;
  onVerticalPaddingChanged(body: string): ScrollIndicatorBuilder;
  onVisibleChanged(body: string): ScrollIndicatorBuilder;
  onVisibleChildrenChanged(body: string): ScrollIndicatorBuilder;
  onVisualFocusChanged(body: string): ScrollIndicatorBuilder;
  onVisualPositionChanged(body: string): ScrollIndicatorBuilder;
  onVisualSizeChanged(body: string): ScrollIndicatorBuilder;
  onWheelEnabledChanged(body: string): ScrollIndicatorBuilder;
  onWidthChanged(body: string): ScrollIndicatorBuilder;
  onWindowChanged(body: string): ScrollIndicatorBuilder;
  onXChanged(body: string): ScrollIndicatorBuilder;
  onYChanged(body: string): ScrollIndicatorBuilder;
  onZChanged(body: string): ScrollIndicatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ScrollIndicatorBuilder;
  layer(setup: (b: LayerBuilder) => void): ScrollIndicatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ScrollIndicatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ScrollIndicatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ScrollIndicatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ScrollIndicatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ScrollIndicatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ScrollIndicatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ScrollIndicatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ScrollIndicatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ScrollIndicatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ScrollIndicatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ScrollIndicatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ScrollIndicatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ScrollIndicatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ScrollIndicatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ScrollIndicatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ScrollIndicatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ScrollIndicatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ScrollIndicatorBuilder;
}

const SCROLLINDICATOR_META: TypeMetadata = {
  typeName: 'ScrollIndicator',
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
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'size', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
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
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSizeChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
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

export function ScrollIndicator(): ScrollIndicatorBuilder {
  return createFluentBuilder(
    'ScrollIndicator',
    SCROLLINDICATOR_META,
  ) as unknown as ScrollIndicatorBuilder;
}

export namespace ScrollIndicator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ScrollIndicator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ScrollIndicator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ScrollIndicator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ScrollIndicator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ScrollIndicator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ScrollIndicator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ScrollIndicator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ScrollIndicator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ScrollIndicator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ScrollIndicator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ScrollIndicator', 'TransformOrigin', 'BottomRight');
  }
}
