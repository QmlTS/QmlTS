// AUTO-GENERATED — DO NOT EDIT
// Type: ToolSeparator
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
export interface ToolSeparatorBuilder {
  id(id: string): ToolSeparatorBuilder;
  child(obj: QmlObjectBuilder): ToolSeparatorBuilder;

  activeFocusOnTab(value: boolean): ToolSeparatorBuilder;
  activeFocusOnTabBind(expr: string): ToolSeparatorBuilder;
  antialiasing(value: boolean): ToolSeparatorBuilder;
  antialiasingBind(expr: string): ToolSeparatorBuilder;
  background(value: ItemBuilder): ToolSeparatorBuilder;
  backgroundBind(expr: string): ToolSeparatorBuilder;
  baselineOffset(value: number): ToolSeparatorBuilder;
  baselineOffsetBind(expr: string): ToolSeparatorBuilder;
  bottomInset(value: number): ToolSeparatorBuilder;
  bottomInsetBind(expr: string): ToolSeparatorBuilder;
  bottomPadding(value: number): ToolSeparatorBuilder;
  bottomPaddingBind(expr: string): ToolSeparatorBuilder;
  clip(value: boolean): ToolSeparatorBuilder;
  clipBind(expr: string): ToolSeparatorBuilder;
  containmentMask(value: QtObjectBuilder): ToolSeparatorBuilder;
  containmentMaskBind(expr: string): ToolSeparatorBuilder;
  contentItem(value: ItemBuilder): ToolSeparatorBuilder;
  contentItemBind(expr: string): ToolSeparatorBuilder;
  enabled(value: boolean): ToolSeparatorBuilder;
  enabledBind(expr: string): ToolSeparatorBuilder;
  focus(value: boolean): ToolSeparatorBuilder;
  focusBind(expr: string): ToolSeparatorBuilder;
  focusPolicy(value: QmlEnumToken): ToolSeparatorBuilder;
  focusPolicyBind(expr: string): ToolSeparatorBuilder;
  focusReason(value: QmlEnumToken): ToolSeparatorBuilder;
  focusReasonBind(expr: string): ToolSeparatorBuilder;
  font(value: QmlFont): ToolSeparatorBuilder;
  fontBind(expr: string): ToolSeparatorBuilder;
  height(value: number): ToolSeparatorBuilder;
  heightBind(expr: string): ToolSeparatorBuilder;
  horizontalPadding(value: number): ToolSeparatorBuilder;
  horizontalPaddingBind(expr: string): ToolSeparatorBuilder;
  hoverEnabled(value: boolean): ToolSeparatorBuilder;
  hoverEnabledBind(expr: string): ToolSeparatorBuilder;
  implicitHeight(value: number): ToolSeparatorBuilder;
  implicitHeightBind(expr: string): ToolSeparatorBuilder;
  implicitWidth(value: number): ToolSeparatorBuilder;
  implicitWidthBind(expr: string): ToolSeparatorBuilder;
  leftInset(value: number): ToolSeparatorBuilder;
  leftInsetBind(expr: string): ToolSeparatorBuilder;
  leftPadding(value: number): ToolSeparatorBuilder;
  leftPaddingBind(expr: string): ToolSeparatorBuilder;
  locale(value: string): ToolSeparatorBuilder;
  localeBind(expr: string): ToolSeparatorBuilder;
  objectName(value: string): ToolSeparatorBuilder;
  objectNameBind(expr: string): ToolSeparatorBuilder;
  opacity(value: number): ToolSeparatorBuilder;
  opacityBind(expr: string): ToolSeparatorBuilder;
  orientation(value: QmlEnumToken): ToolSeparatorBuilder;
  orientationBind(expr: string): ToolSeparatorBuilder;
  padding(value: number): ToolSeparatorBuilder;
  paddingBind(expr: string): ToolSeparatorBuilder;
  palette(value: PaletteBuilder): ToolSeparatorBuilder;
  paletteBind(expr: string): ToolSeparatorBuilder;
  parent(value: ItemBuilder): ToolSeparatorBuilder;
  parentBind(expr: string): ToolSeparatorBuilder;
  rightInset(value: number): ToolSeparatorBuilder;
  rightInsetBind(expr: string): ToolSeparatorBuilder;
  rightPadding(value: number): ToolSeparatorBuilder;
  rightPaddingBind(expr: string): ToolSeparatorBuilder;
  rotation(value: number): ToolSeparatorBuilder;
  rotationBind(expr: string): ToolSeparatorBuilder;
  scale(value: number): ToolSeparatorBuilder;
  scaleBind(expr: string): ToolSeparatorBuilder;
  smooth(value: boolean): ToolSeparatorBuilder;
  smoothBind(expr: string): ToolSeparatorBuilder;
  spacing(value: number): ToolSeparatorBuilder;
  spacingBind(expr: string): ToolSeparatorBuilder;
  state(value: string): ToolSeparatorBuilder;
  stateBind(expr: string): ToolSeparatorBuilder;
  topInset(value: number): ToolSeparatorBuilder;
  topInsetBind(expr: string): ToolSeparatorBuilder;
  topPadding(value: number): ToolSeparatorBuilder;
  topPaddingBind(expr: string): ToolSeparatorBuilder;
  transformOrigin(value: QmlEnumToken): ToolSeparatorBuilder;
  transformOriginBind(expr: string): ToolSeparatorBuilder;
  verticalPadding(value: number): ToolSeparatorBuilder;
  verticalPaddingBind(expr: string): ToolSeparatorBuilder;
  visible(value: boolean): ToolSeparatorBuilder;
  visibleBind(expr: string): ToolSeparatorBuilder;
  wheelEnabled(value: boolean): ToolSeparatorBuilder;
  wheelEnabledBind(expr: string): ToolSeparatorBuilder;
  width(value: number): ToolSeparatorBuilder;
  widthBind(expr: string): ToolSeparatorBuilder;
  x(value: number): ToolSeparatorBuilder;
  xBind(expr: string): ToolSeparatorBuilder;
  y(value: number): ToolSeparatorBuilder;
  yBind(expr: string): ToolSeparatorBuilder;
  z(value: number): ToolSeparatorBuilder;
  zBind(expr: string): ToolSeparatorBuilder;
  onActiveFocusChanged(body: string): ToolSeparatorBuilder;
  onActiveFocusOnTabChanged(body: string): ToolSeparatorBuilder;
  onAntialiasingChanged(body: string): ToolSeparatorBuilder;
  onAvailableHeightChanged(body: string): ToolSeparatorBuilder;
  onAvailableWidthChanged(body: string): ToolSeparatorBuilder;
  onBackgroundChanged(body: string): ToolSeparatorBuilder;
  onBaselineOffsetChanged(body: string): ToolSeparatorBuilder;
  onBottomInsetChanged(body: string): ToolSeparatorBuilder;
  onBottomPaddingChanged(body: string): ToolSeparatorBuilder;
  onChildrenChanged(body: string): ToolSeparatorBuilder;
  onChildrenRectChanged(body: string): ToolSeparatorBuilder;
  onClipChanged(body: string): ToolSeparatorBuilder;
  onContainmentMaskChanged(body: string): ToolSeparatorBuilder;
  onContentItemChanged(body: string): ToolSeparatorBuilder;
  onEnabledChanged(body: string): ToolSeparatorBuilder;
  onFocusChanged(body: string): ToolSeparatorBuilder;
  onFocusPolicyChanged(body: string): ToolSeparatorBuilder;
  onFocusReasonChanged(body: string): ToolSeparatorBuilder;
  onFontChanged(body: string): ToolSeparatorBuilder;
  onHeightChanged(body: string): ToolSeparatorBuilder;
  onHorizontalPaddingChanged(body: string): ToolSeparatorBuilder;
  onHoverEnabledChanged(body: string): ToolSeparatorBuilder;
  onHoveredChanged(body: string): ToolSeparatorBuilder;
  onImplicitBackgroundHeightChanged(body: string): ToolSeparatorBuilder;
  onImplicitBackgroundWidthChanged(body: string): ToolSeparatorBuilder;
  onImplicitContentHeightChanged(body: string): ToolSeparatorBuilder;
  onImplicitContentWidthChanged(body: string): ToolSeparatorBuilder;
  onImplicitHeightChanged(body: string): ToolSeparatorBuilder;
  onImplicitWidthChanged(body: string): ToolSeparatorBuilder;
  onLeftInsetChanged(body: string): ToolSeparatorBuilder;
  onLeftPaddingChanged(body: string): ToolSeparatorBuilder;
  onLocaleChanged(body: string): ToolSeparatorBuilder;
  onMirroredChanged(body: string): ToolSeparatorBuilder;
  onObjectNameChanged(body: string): ToolSeparatorBuilder;
  onOpacityChanged(body: string): ToolSeparatorBuilder;
  onOrientationChanged(body: string): ToolSeparatorBuilder;
  onPaddingChanged(body: string): ToolSeparatorBuilder;
  onPaletteChanged(body: string): ToolSeparatorBuilder;
  onPaletteCreated(body: string): ToolSeparatorBuilder;
  onParentChanged(body: string): ToolSeparatorBuilder;
  onRightInsetChanged(body: string): ToolSeparatorBuilder;
  onRightPaddingChanged(body: string): ToolSeparatorBuilder;
  onRotationChanged(body: string): ToolSeparatorBuilder;
  onScaleChanged(body: string): ToolSeparatorBuilder;
  onSmoothChanged(body: string): ToolSeparatorBuilder;
  onSpacingChanged(body: string): ToolSeparatorBuilder;
  onStateChanged(body: string): ToolSeparatorBuilder;
  onTopInsetChanged(body: string): ToolSeparatorBuilder;
  onTopPaddingChanged(body: string): ToolSeparatorBuilder;
  onTransformOriginChanged(body: string): ToolSeparatorBuilder;
  onVerticalPaddingChanged(body: string): ToolSeparatorBuilder;
  onVisibleChanged(body: string): ToolSeparatorBuilder;
  onVisibleChildrenChanged(body: string): ToolSeparatorBuilder;
  onVisualFocusChanged(body: string): ToolSeparatorBuilder;
  onWheelEnabledChanged(body: string): ToolSeparatorBuilder;
  onWidthChanged(body: string): ToolSeparatorBuilder;
  onWindowChanged(body: string): ToolSeparatorBuilder;
  onXChanged(body: string): ToolSeparatorBuilder;
  onYChanged(body: string): ToolSeparatorBuilder;
  onZChanged(body: string): ToolSeparatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ToolSeparatorBuilder;
  layer(setup: (b: LayerBuilder) => void): ToolSeparatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ToolSeparatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ToolSeparatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ToolSeparatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ToolSeparatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ToolSeparatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ToolSeparatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ToolSeparatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ToolSeparatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ToolSeparatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ToolSeparatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ToolSeparatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ToolSeparatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ToolSeparatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ToolSeparatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ToolSeparatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ToolSeparatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ToolSeparatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ToolSeparatorBuilder;
}

const TOOLSEPARATOR_META: TypeMetadata = {
  typeName: 'ToolSeparator',
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
    { name: 'orientation', hasValue: true, hasBinding: true },
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
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
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

export function ToolSeparator(): ToolSeparatorBuilder {
  return createFluentBuilder(
    'ToolSeparator',
    TOOLSEPARATOR_META,
  ) as unknown as ToolSeparatorBuilder;
}

export namespace ToolSeparator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ToolSeparator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ToolSeparator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ToolSeparator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ToolSeparator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ToolSeparator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ToolSeparator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ToolSeparator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ToolSeparator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ToolSeparator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ToolSeparator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ToolSeparator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ToolSeparator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ToolSeparator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ToolSeparator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ToolSeparator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ToolSeparator', 'TransformOrigin', 'BottomRight');
  }
}
