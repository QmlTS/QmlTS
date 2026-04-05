// AUTO-GENERATED — DO NOT EDIT
// Type: SelectionRectangle
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
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
export interface SelectionRectangleBuilder {
  id(id: string): SelectionRectangleBuilder;
  child(obj: QmlObjectBuilder): SelectionRectangleBuilder;

  activeFocusOnTab(value: boolean): SelectionRectangleBuilder;
  activeFocusOnTabBind(expr: string): SelectionRectangleBuilder;
  antialiasing(value: boolean): SelectionRectangleBuilder;
  antialiasingBind(expr: string): SelectionRectangleBuilder;
  background(value: ItemBuilder): SelectionRectangleBuilder;
  backgroundBind(expr: string): SelectionRectangleBuilder;
  baselineOffset(value: number): SelectionRectangleBuilder;
  baselineOffsetBind(expr: string): SelectionRectangleBuilder;
  bottomInset(value: number): SelectionRectangleBuilder;
  bottomInsetBind(expr: string): SelectionRectangleBuilder;
  bottomPadding(value: number): SelectionRectangleBuilder;
  bottomPaddingBind(expr: string): SelectionRectangleBuilder;
  bottomRightHandle(value: QmlComponent): SelectionRectangleBuilder;
  bottomRightHandleBind(expr: string): SelectionRectangleBuilder;
  clip(value: boolean): SelectionRectangleBuilder;
  clipBind(expr: string): SelectionRectangleBuilder;
  containmentMask(value: QtObjectBuilder): SelectionRectangleBuilder;
  containmentMaskBind(expr: string): SelectionRectangleBuilder;
  contentItem(value: ItemBuilder): SelectionRectangleBuilder;
  contentItemBind(expr: string): SelectionRectangleBuilder;
  enabled(value: boolean): SelectionRectangleBuilder;
  enabledBind(expr: string): SelectionRectangleBuilder;
  focus(value: boolean): SelectionRectangleBuilder;
  focusBind(expr: string): SelectionRectangleBuilder;
  focusPolicy(value: QmlEnumToken): SelectionRectangleBuilder;
  focusPolicyBind(expr: string): SelectionRectangleBuilder;
  focusReason(value: QmlEnumToken): SelectionRectangleBuilder;
  focusReasonBind(expr: string): SelectionRectangleBuilder;
  font(value: QmlFont): SelectionRectangleBuilder;
  fontBind(expr: string): SelectionRectangleBuilder;
  height(value: number): SelectionRectangleBuilder;
  heightBind(expr: string): SelectionRectangleBuilder;
  horizontalPadding(value: number): SelectionRectangleBuilder;
  horizontalPaddingBind(expr: string): SelectionRectangleBuilder;
  hoverEnabled(value: boolean): SelectionRectangleBuilder;
  hoverEnabledBind(expr: string): SelectionRectangleBuilder;
  implicitHeight(value: number): SelectionRectangleBuilder;
  implicitHeightBind(expr: string): SelectionRectangleBuilder;
  implicitWidth(value: number): SelectionRectangleBuilder;
  implicitWidthBind(expr: string): SelectionRectangleBuilder;
  leftInset(value: number): SelectionRectangleBuilder;
  leftInsetBind(expr: string): SelectionRectangleBuilder;
  leftPadding(value: number): SelectionRectangleBuilder;
  leftPaddingBind(expr: string): SelectionRectangleBuilder;
  locale(value: string): SelectionRectangleBuilder;
  localeBind(expr: string): SelectionRectangleBuilder;
  objectName(value: string): SelectionRectangleBuilder;
  objectNameBind(expr: string): SelectionRectangleBuilder;
  opacity(value: number): SelectionRectangleBuilder;
  opacityBind(expr: string): SelectionRectangleBuilder;
  padding(value: number): SelectionRectangleBuilder;
  paddingBind(expr: string): SelectionRectangleBuilder;
  palette(value: PaletteBuilder): SelectionRectangleBuilder;
  paletteBind(expr: string): SelectionRectangleBuilder;
  parent(value: ItemBuilder): SelectionRectangleBuilder;
  parentBind(expr: string): SelectionRectangleBuilder;
  rightInset(value: number): SelectionRectangleBuilder;
  rightInsetBind(expr: string): SelectionRectangleBuilder;
  rightPadding(value: number): SelectionRectangleBuilder;
  rightPaddingBind(expr: string): SelectionRectangleBuilder;
  rotation(value: number): SelectionRectangleBuilder;
  rotationBind(expr: string): SelectionRectangleBuilder;
  scale(value: number): SelectionRectangleBuilder;
  scaleBind(expr: string): SelectionRectangleBuilder;
  selectionMode(value: QmlEnumToken): SelectionRectangleBuilder;
  selectionModeBind(expr: string): SelectionRectangleBuilder;
  smooth(value: boolean): SelectionRectangleBuilder;
  smoothBind(expr: string): SelectionRectangleBuilder;
  spacing(value: number): SelectionRectangleBuilder;
  spacingBind(expr: string): SelectionRectangleBuilder;
  state(value: string): SelectionRectangleBuilder;
  stateBind(expr: string): SelectionRectangleBuilder;
  target(value: ItemBuilder): SelectionRectangleBuilder;
  targetBind(expr: string): SelectionRectangleBuilder;
  topInset(value: number): SelectionRectangleBuilder;
  topInsetBind(expr: string): SelectionRectangleBuilder;
  topLeftHandle(value: QmlComponent): SelectionRectangleBuilder;
  topLeftHandleBind(expr: string): SelectionRectangleBuilder;
  topPadding(value: number): SelectionRectangleBuilder;
  topPaddingBind(expr: string): SelectionRectangleBuilder;
  transformOrigin(value: QmlEnumToken): SelectionRectangleBuilder;
  transformOriginBind(expr: string): SelectionRectangleBuilder;
  verticalPadding(value: number): SelectionRectangleBuilder;
  verticalPaddingBind(expr: string): SelectionRectangleBuilder;
  visible(value: boolean): SelectionRectangleBuilder;
  visibleBind(expr: string): SelectionRectangleBuilder;
  wheelEnabled(value: boolean): SelectionRectangleBuilder;
  wheelEnabledBind(expr: string): SelectionRectangleBuilder;
  width(value: number): SelectionRectangleBuilder;
  widthBind(expr: string): SelectionRectangleBuilder;
  x(value: number): SelectionRectangleBuilder;
  xBind(expr: string): SelectionRectangleBuilder;
  y(value: number): SelectionRectangleBuilder;
  yBind(expr: string): SelectionRectangleBuilder;
  z(value: number): SelectionRectangleBuilder;
  zBind(expr: string): SelectionRectangleBuilder;
  onActiveChanged(body: string): SelectionRectangleBuilder;
  onActiveFocusChanged(body: string): SelectionRectangleBuilder;
  onActiveFocusOnTabChanged(body: string): SelectionRectangleBuilder;
  onAntialiasingChanged(body: string): SelectionRectangleBuilder;
  onAvailableHeightChanged(body: string): SelectionRectangleBuilder;
  onAvailableWidthChanged(body: string): SelectionRectangleBuilder;
  onBackgroundChanged(body: string): SelectionRectangleBuilder;
  onBaselineOffsetChanged(body: string): SelectionRectangleBuilder;
  onBottomInsetChanged(body: string): SelectionRectangleBuilder;
  onBottomPaddingChanged(body: string): SelectionRectangleBuilder;
  onBottomRightHandleChanged(body: string): SelectionRectangleBuilder;
  onChildrenChanged(body: string): SelectionRectangleBuilder;
  onChildrenRectChanged(body: string): SelectionRectangleBuilder;
  onClipChanged(body: string): SelectionRectangleBuilder;
  onContainmentMaskChanged(body: string): SelectionRectangleBuilder;
  onContentItemChanged(body: string): SelectionRectangleBuilder;
  onDraggingChanged(body: string): SelectionRectangleBuilder;
  onEnabledChanged(body: string): SelectionRectangleBuilder;
  onFocusChanged(body: string): SelectionRectangleBuilder;
  onFocusPolicyChanged(body: string): SelectionRectangleBuilder;
  onFocusReasonChanged(body: string): SelectionRectangleBuilder;
  onFontChanged(body: string): SelectionRectangleBuilder;
  onHeightChanged(body: string): SelectionRectangleBuilder;
  onHorizontalPaddingChanged(body: string): SelectionRectangleBuilder;
  onHoverEnabledChanged(body: string): SelectionRectangleBuilder;
  onHoveredChanged(body: string): SelectionRectangleBuilder;
  onImplicitBackgroundHeightChanged(body: string): SelectionRectangleBuilder;
  onImplicitBackgroundWidthChanged(body: string): SelectionRectangleBuilder;
  onImplicitContentHeightChanged(body: string): SelectionRectangleBuilder;
  onImplicitContentWidthChanged(body: string): SelectionRectangleBuilder;
  onImplicitHeightChanged(body: string): SelectionRectangleBuilder;
  onImplicitWidthChanged(body: string): SelectionRectangleBuilder;
  onLeftInsetChanged(body: string): SelectionRectangleBuilder;
  onLeftPaddingChanged(body: string): SelectionRectangleBuilder;
  onLocaleChanged(body: string): SelectionRectangleBuilder;
  onMirroredChanged(body: string): SelectionRectangleBuilder;
  onObjectNameChanged(body: string): SelectionRectangleBuilder;
  onOpacityChanged(body: string): SelectionRectangleBuilder;
  onPaddingChanged(body: string): SelectionRectangleBuilder;
  onPaletteChanged(body: string): SelectionRectangleBuilder;
  onPaletteCreated(body: string): SelectionRectangleBuilder;
  onParentChanged(body: string): SelectionRectangleBuilder;
  onRightInsetChanged(body: string): SelectionRectangleBuilder;
  onRightPaddingChanged(body: string): SelectionRectangleBuilder;
  onRotationChanged(body: string): SelectionRectangleBuilder;
  onScaleChanged(body: string): SelectionRectangleBuilder;
  onSelectionModeChanged(body: string): SelectionRectangleBuilder;
  onSmoothChanged(body: string): SelectionRectangleBuilder;
  onSpacingChanged(body: string): SelectionRectangleBuilder;
  onStateChanged(body: string): SelectionRectangleBuilder;
  onTargetChanged(body: string): SelectionRectangleBuilder;
  onTopInsetChanged(body: string): SelectionRectangleBuilder;
  onTopLeftHandleChanged(body: string): SelectionRectangleBuilder;
  onTopPaddingChanged(body: string): SelectionRectangleBuilder;
  onTransformOriginChanged(body: string): SelectionRectangleBuilder;
  onVerticalPaddingChanged(body: string): SelectionRectangleBuilder;
  onVisibleChanged(body: string): SelectionRectangleBuilder;
  onVisibleChildrenChanged(body: string): SelectionRectangleBuilder;
  onVisualFocusChanged(body: string): SelectionRectangleBuilder;
  onWheelEnabledChanged(body: string): SelectionRectangleBuilder;
  onWidthChanged(body: string): SelectionRectangleBuilder;
  onWindowChanged(body: string): SelectionRectangleBuilder;
  onXChanged(body: string): SelectionRectangleBuilder;
  onYChanged(body: string): SelectionRectangleBuilder;
  onZChanged(body: string): SelectionRectangleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SelectionRectangleBuilder;
  layer(setup: (b: LayerBuilder) => void): SelectionRectangleBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SelectionRectangleBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): SelectionRectangleBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SelectionRectangleBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SelectionRectangleBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SelectionRectangleBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SelectionRectangleBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SelectionRectangleBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SelectionRectangleBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): SelectionRectangleBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SelectionRectangleBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SelectionRectangleBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SelectionRectangleBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SelectionRectangleBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SelectionRectangleBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SelectionRectangleBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SelectionRectangleBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SelectionRectangleBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SelectionRectangleBuilder;
}

const SELECTIONRECTANGLE_META: TypeMetadata = {
  typeName: 'SelectionRectangle',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'bottomRightHandle', hasValue: true, hasBinding: true },
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
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectionMode', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topLeftHandle', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBottomRightHandleChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onDraggingChanged', paramCount: 0 },
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
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectionModeChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopLeftHandleChanged', paramCount: 0 },
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

export function SelectionRectangle(): SelectionRectangleBuilder {
  return createFluentBuilder(
    'SelectionRectangle',
    SELECTIONRECTANGLE_META,
  ) as unknown as SelectionRectangleBuilder;
}

export namespace SelectionRectangle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('SelectionRectangle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SelectionMode {
    export const Drag = createEnumToken('SelectionRectangle', 'SelectionMode', 'Drag');
    export const PressAndHold = createEnumToken(
      'SelectionRectangle',
      'SelectionMode',
      'PressAndHold',
    );
    export const Auto = createEnumToken('SelectionRectangle', 'SelectionMode', 'Auto');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SelectionRectangle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SelectionRectangle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'SelectionRectangle',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'SelectionRectangle',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
