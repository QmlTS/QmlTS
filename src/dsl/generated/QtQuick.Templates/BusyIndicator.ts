// AUTO-GENERATED — DO NOT EDIT
// Type: BusyIndicator
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
export interface BusyIndicatorBuilder {
  id(id: string): BusyIndicatorBuilder;
  child(obj: QmlObjectBuilder): BusyIndicatorBuilder;

  activeFocusOnTab(value: boolean): BusyIndicatorBuilder;
  activeFocusOnTabBind(expr: string): BusyIndicatorBuilder;
  antialiasing(value: boolean): BusyIndicatorBuilder;
  antialiasingBind(expr: string): BusyIndicatorBuilder;
  background(value: ItemBuilder): BusyIndicatorBuilder;
  backgroundBind(expr: string): BusyIndicatorBuilder;
  baselineOffset(value: number): BusyIndicatorBuilder;
  baselineOffsetBind(expr: string): BusyIndicatorBuilder;
  bottomInset(value: number): BusyIndicatorBuilder;
  bottomInsetBind(expr: string): BusyIndicatorBuilder;
  bottomPadding(value: number): BusyIndicatorBuilder;
  bottomPaddingBind(expr: string): BusyIndicatorBuilder;
  clip(value: boolean): BusyIndicatorBuilder;
  clipBind(expr: string): BusyIndicatorBuilder;
  containmentMask(value: QtObjectBuilder): BusyIndicatorBuilder;
  containmentMaskBind(expr: string): BusyIndicatorBuilder;
  contentItem(value: ItemBuilder): BusyIndicatorBuilder;
  contentItemBind(expr: string): BusyIndicatorBuilder;
  enabled(value: boolean): BusyIndicatorBuilder;
  enabledBind(expr: string): BusyIndicatorBuilder;
  focus(value: boolean): BusyIndicatorBuilder;
  focusBind(expr: string): BusyIndicatorBuilder;
  focusPolicy(value: QmlEnumToken): BusyIndicatorBuilder;
  focusPolicyBind(expr: string): BusyIndicatorBuilder;
  focusReason(value: QmlEnumToken): BusyIndicatorBuilder;
  focusReasonBind(expr: string): BusyIndicatorBuilder;
  font(value: QmlFont): BusyIndicatorBuilder;
  fontBind(expr: string): BusyIndicatorBuilder;
  height(value: number): BusyIndicatorBuilder;
  heightBind(expr: string): BusyIndicatorBuilder;
  horizontalPadding(value: number): BusyIndicatorBuilder;
  horizontalPaddingBind(expr: string): BusyIndicatorBuilder;
  hoverEnabled(value: boolean): BusyIndicatorBuilder;
  hoverEnabledBind(expr: string): BusyIndicatorBuilder;
  implicitHeight(value: number): BusyIndicatorBuilder;
  implicitHeightBind(expr: string): BusyIndicatorBuilder;
  implicitWidth(value: number): BusyIndicatorBuilder;
  implicitWidthBind(expr: string): BusyIndicatorBuilder;
  leftInset(value: number): BusyIndicatorBuilder;
  leftInsetBind(expr: string): BusyIndicatorBuilder;
  leftPadding(value: number): BusyIndicatorBuilder;
  leftPaddingBind(expr: string): BusyIndicatorBuilder;
  locale(value: string): BusyIndicatorBuilder;
  localeBind(expr: string): BusyIndicatorBuilder;
  objectName(value: string): BusyIndicatorBuilder;
  objectNameBind(expr: string): BusyIndicatorBuilder;
  opacity(value: number): BusyIndicatorBuilder;
  opacityBind(expr: string): BusyIndicatorBuilder;
  padding(value: number): BusyIndicatorBuilder;
  paddingBind(expr: string): BusyIndicatorBuilder;
  palette(value: PaletteBuilder): BusyIndicatorBuilder;
  paletteBind(expr: string): BusyIndicatorBuilder;
  parent(value: ItemBuilder): BusyIndicatorBuilder;
  parentBind(expr: string): BusyIndicatorBuilder;
  rightInset(value: number): BusyIndicatorBuilder;
  rightInsetBind(expr: string): BusyIndicatorBuilder;
  rightPadding(value: number): BusyIndicatorBuilder;
  rightPaddingBind(expr: string): BusyIndicatorBuilder;
  rotation(value: number): BusyIndicatorBuilder;
  rotationBind(expr: string): BusyIndicatorBuilder;
  running(value: boolean): BusyIndicatorBuilder;
  runningBind(expr: string): BusyIndicatorBuilder;
  scale(value: number): BusyIndicatorBuilder;
  scaleBind(expr: string): BusyIndicatorBuilder;
  smooth(value: boolean): BusyIndicatorBuilder;
  smoothBind(expr: string): BusyIndicatorBuilder;
  spacing(value: number): BusyIndicatorBuilder;
  spacingBind(expr: string): BusyIndicatorBuilder;
  state(value: string): BusyIndicatorBuilder;
  stateBind(expr: string): BusyIndicatorBuilder;
  topInset(value: number): BusyIndicatorBuilder;
  topInsetBind(expr: string): BusyIndicatorBuilder;
  topPadding(value: number): BusyIndicatorBuilder;
  topPaddingBind(expr: string): BusyIndicatorBuilder;
  transformOrigin(value: QmlEnumToken): BusyIndicatorBuilder;
  transformOriginBind(expr: string): BusyIndicatorBuilder;
  verticalPadding(value: number): BusyIndicatorBuilder;
  verticalPaddingBind(expr: string): BusyIndicatorBuilder;
  visible(value: boolean): BusyIndicatorBuilder;
  visibleBind(expr: string): BusyIndicatorBuilder;
  wheelEnabled(value: boolean): BusyIndicatorBuilder;
  wheelEnabledBind(expr: string): BusyIndicatorBuilder;
  width(value: number): BusyIndicatorBuilder;
  widthBind(expr: string): BusyIndicatorBuilder;
  x(value: number): BusyIndicatorBuilder;
  xBind(expr: string): BusyIndicatorBuilder;
  y(value: number): BusyIndicatorBuilder;
  yBind(expr: string): BusyIndicatorBuilder;
  z(value: number): BusyIndicatorBuilder;
  zBind(expr: string): BusyIndicatorBuilder;
  onActiveFocusChanged(body: string): BusyIndicatorBuilder;
  onActiveFocusOnTabChanged(body: string): BusyIndicatorBuilder;
  onAntialiasingChanged(body: string): BusyIndicatorBuilder;
  onAvailableHeightChanged(body: string): BusyIndicatorBuilder;
  onAvailableWidthChanged(body: string): BusyIndicatorBuilder;
  onBackgroundChanged(body: string): BusyIndicatorBuilder;
  onBaselineOffsetChanged(body: string): BusyIndicatorBuilder;
  onBottomInsetChanged(body: string): BusyIndicatorBuilder;
  onBottomPaddingChanged(body: string): BusyIndicatorBuilder;
  onChildrenChanged(body: string): BusyIndicatorBuilder;
  onChildrenRectChanged(body: string): BusyIndicatorBuilder;
  onClipChanged(body: string): BusyIndicatorBuilder;
  onContainmentMaskChanged(body: string): BusyIndicatorBuilder;
  onContentItemChanged(body: string): BusyIndicatorBuilder;
  onEnabledChanged(body: string): BusyIndicatorBuilder;
  onFocusChanged(body: string): BusyIndicatorBuilder;
  onFocusPolicyChanged(body: string): BusyIndicatorBuilder;
  onFocusReasonChanged(body: string): BusyIndicatorBuilder;
  onFontChanged(body: string): BusyIndicatorBuilder;
  onHeightChanged(body: string): BusyIndicatorBuilder;
  onHorizontalPaddingChanged(body: string): BusyIndicatorBuilder;
  onHoverEnabledChanged(body: string): BusyIndicatorBuilder;
  onHoveredChanged(body: string): BusyIndicatorBuilder;
  onImplicitBackgroundHeightChanged(body: string): BusyIndicatorBuilder;
  onImplicitBackgroundWidthChanged(body: string): BusyIndicatorBuilder;
  onImplicitContentHeightChanged(body: string): BusyIndicatorBuilder;
  onImplicitContentWidthChanged(body: string): BusyIndicatorBuilder;
  onImplicitHeightChanged(body: string): BusyIndicatorBuilder;
  onImplicitWidthChanged(body: string): BusyIndicatorBuilder;
  onLeftInsetChanged(body: string): BusyIndicatorBuilder;
  onLeftPaddingChanged(body: string): BusyIndicatorBuilder;
  onLocaleChanged(body: string): BusyIndicatorBuilder;
  onMirroredChanged(body: string): BusyIndicatorBuilder;
  onObjectNameChanged(body: string): BusyIndicatorBuilder;
  onOpacityChanged(body: string): BusyIndicatorBuilder;
  onPaddingChanged(body: string): BusyIndicatorBuilder;
  onPaletteChanged(body: string): BusyIndicatorBuilder;
  onPaletteCreated(body: string): BusyIndicatorBuilder;
  onParentChanged(body: string): BusyIndicatorBuilder;
  onRightInsetChanged(body: string): BusyIndicatorBuilder;
  onRightPaddingChanged(body: string): BusyIndicatorBuilder;
  onRotationChanged(body: string): BusyIndicatorBuilder;
  onRunningChanged(body: string): BusyIndicatorBuilder;
  onScaleChanged(body: string): BusyIndicatorBuilder;
  onSmoothChanged(body: string): BusyIndicatorBuilder;
  onSpacingChanged(body: string): BusyIndicatorBuilder;
  onStateChanged(body: string): BusyIndicatorBuilder;
  onTopInsetChanged(body: string): BusyIndicatorBuilder;
  onTopPaddingChanged(body: string): BusyIndicatorBuilder;
  onTransformOriginChanged(body: string): BusyIndicatorBuilder;
  onVerticalPaddingChanged(body: string): BusyIndicatorBuilder;
  onVisibleChanged(body: string): BusyIndicatorBuilder;
  onVisibleChildrenChanged(body: string): BusyIndicatorBuilder;
  onVisualFocusChanged(body: string): BusyIndicatorBuilder;
  onWheelEnabledChanged(body: string): BusyIndicatorBuilder;
  onWidthChanged(body: string): BusyIndicatorBuilder;
  onWindowChanged(body: string): BusyIndicatorBuilder;
  onXChanged(body: string): BusyIndicatorBuilder;
  onYChanged(body: string): BusyIndicatorBuilder;
  onZChanged(body: string): BusyIndicatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): BusyIndicatorBuilder;
  layer(setup: (b: LayerBuilder) => void): BusyIndicatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): BusyIndicatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): BusyIndicatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): BusyIndicatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): BusyIndicatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): BusyIndicatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): BusyIndicatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): BusyIndicatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): BusyIndicatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): BusyIndicatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): BusyIndicatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): BusyIndicatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): BusyIndicatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): BusyIndicatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): BusyIndicatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): BusyIndicatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): BusyIndicatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): BusyIndicatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): BusyIndicatorBuilder;
}

const BUSYINDICATOR_META: TypeMetadata = {
  typeName: 'BusyIndicator',
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
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
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
    { handlerName: 'onRunningChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
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

export function BusyIndicator(): BusyIndicatorBuilder {
  return createFluentBuilder(
    'BusyIndicator',
    BUSYINDICATOR_META,
  ) as unknown as BusyIndicatorBuilder;
}

export namespace BusyIndicator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'BusyIndicator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'BusyIndicator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('BusyIndicator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('BusyIndicator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('BusyIndicator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('BusyIndicator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'BusyIndicator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('BusyIndicator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('BusyIndicator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('BusyIndicator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('BusyIndicator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('BusyIndicator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('BusyIndicator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('BusyIndicator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('BusyIndicator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('BusyIndicator', 'TransformOrigin', 'BottomRight');
  }
}
