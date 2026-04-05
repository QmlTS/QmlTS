// AUTO-GENERATED — DO NOT EDIT
// Type: ToolBar
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
export interface ToolBarBuilder {
  id(id: string): ToolBarBuilder;
  child(obj: QmlObjectBuilder): ToolBarBuilder;

  activeFocusOnTab(value: boolean): ToolBarBuilder;
  activeFocusOnTabBind(expr: string): ToolBarBuilder;
  antialiasing(value: boolean): ToolBarBuilder;
  antialiasingBind(expr: string): ToolBarBuilder;
  background(value: ItemBuilder): ToolBarBuilder;
  backgroundBind(expr: string): ToolBarBuilder;
  baselineOffset(value: number): ToolBarBuilder;
  baselineOffsetBind(expr: string): ToolBarBuilder;
  bottomInset(value: number): ToolBarBuilder;
  bottomInsetBind(expr: string): ToolBarBuilder;
  bottomPadding(value: number): ToolBarBuilder;
  bottomPaddingBind(expr: string): ToolBarBuilder;
  clip(value: boolean): ToolBarBuilder;
  clipBind(expr: string): ToolBarBuilder;
  containmentMask(value: QtObjectBuilder): ToolBarBuilder;
  containmentMaskBind(expr: string): ToolBarBuilder;
  contentHeight(value: number): ToolBarBuilder;
  contentHeightBind(expr: string): ToolBarBuilder;
  contentItem(value: ItemBuilder): ToolBarBuilder;
  contentItemBind(expr: string): ToolBarBuilder;
  contentWidth(value: number): ToolBarBuilder;
  contentWidthBind(expr: string): ToolBarBuilder;
  enabled(value: boolean): ToolBarBuilder;
  enabledBind(expr: string): ToolBarBuilder;
  focus(value: boolean): ToolBarBuilder;
  focusBind(expr: string): ToolBarBuilder;
  focusPolicy(value: QmlEnumToken): ToolBarBuilder;
  focusPolicyBind(expr: string): ToolBarBuilder;
  focusReason(value: QmlEnumToken): ToolBarBuilder;
  focusReasonBind(expr: string): ToolBarBuilder;
  font(value: QmlFont): ToolBarBuilder;
  fontBind(expr: string): ToolBarBuilder;
  height(value: number): ToolBarBuilder;
  heightBind(expr: string): ToolBarBuilder;
  horizontalPadding(value: number): ToolBarBuilder;
  horizontalPaddingBind(expr: string): ToolBarBuilder;
  hoverEnabled(value: boolean): ToolBarBuilder;
  hoverEnabledBind(expr: string): ToolBarBuilder;
  implicitHeight(value: number): ToolBarBuilder;
  implicitHeightBind(expr: string): ToolBarBuilder;
  implicitWidth(value: number): ToolBarBuilder;
  implicitWidthBind(expr: string): ToolBarBuilder;
  leftInset(value: number): ToolBarBuilder;
  leftInsetBind(expr: string): ToolBarBuilder;
  leftPadding(value: number): ToolBarBuilder;
  leftPaddingBind(expr: string): ToolBarBuilder;
  locale(value: string): ToolBarBuilder;
  localeBind(expr: string): ToolBarBuilder;
  objectName(value: string): ToolBarBuilder;
  objectNameBind(expr: string): ToolBarBuilder;
  opacity(value: number): ToolBarBuilder;
  opacityBind(expr: string): ToolBarBuilder;
  padding(value: number): ToolBarBuilder;
  paddingBind(expr: string): ToolBarBuilder;
  palette(value: PaletteBuilder): ToolBarBuilder;
  paletteBind(expr: string): ToolBarBuilder;
  parent(value: ItemBuilder): ToolBarBuilder;
  parentBind(expr: string): ToolBarBuilder;
  position(value: QmlEnumToken): ToolBarBuilder;
  positionBind(expr: string): ToolBarBuilder;
  rightInset(value: number): ToolBarBuilder;
  rightInsetBind(expr: string): ToolBarBuilder;
  rightPadding(value: number): ToolBarBuilder;
  rightPaddingBind(expr: string): ToolBarBuilder;
  rotation(value: number): ToolBarBuilder;
  rotationBind(expr: string): ToolBarBuilder;
  scale(value: number): ToolBarBuilder;
  scaleBind(expr: string): ToolBarBuilder;
  smooth(value: boolean): ToolBarBuilder;
  smoothBind(expr: string): ToolBarBuilder;
  spacing(value: number): ToolBarBuilder;
  spacingBind(expr: string): ToolBarBuilder;
  state(value: string): ToolBarBuilder;
  stateBind(expr: string): ToolBarBuilder;
  topInset(value: number): ToolBarBuilder;
  topInsetBind(expr: string): ToolBarBuilder;
  topPadding(value: number): ToolBarBuilder;
  topPaddingBind(expr: string): ToolBarBuilder;
  transformOrigin(value: QmlEnumToken): ToolBarBuilder;
  transformOriginBind(expr: string): ToolBarBuilder;
  verticalPadding(value: number): ToolBarBuilder;
  verticalPaddingBind(expr: string): ToolBarBuilder;
  visible(value: boolean): ToolBarBuilder;
  visibleBind(expr: string): ToolBarBuilder;
  wheelEnabled(value: boolean): ToolBarBuilder;
  wheelEnabledBind(expr: string): ToolBarBuilder;
  width(value: number): ToolBarBuilder;
  widthBind(expr: string): ToolBarBuilder;
  x(value: number): ToolBarBuilder;
  xBind(expr: string): ToolBarBuilder;
  y(value: number): ToolBarBuilder;
  yBind(expr: string): ToolBarBuilder;
  z(value: number): ToolBarBuilder;
  zBind(expr: string): ToolBarBuilder;
  onActiveFocusChanged(body: string): ToolBarBuilder;
  onActiveFocusOnTabChanged(body: string): ToolBarBuilder;
  onAntialiasingChanged(body: string): ToolBarBuilder;
  onAvailableHeightChanged(body: string): ToolBarBuilder;
  onAvailableWidthChanged(body: string): ToolBarBuilder;
  onBackgroundChanged(body: string): ToolBarBuilder;
  onBaselineOffsetChanged(body: string): ToolBarBuilder;
  onBottomInsetChanged(body: string): ToolBarBuilder;
  onBottomPaddingChanged(body: string): ToolBarBuilder;
  onChildrenChanged(body: string): ToolBarBuilder;
  onChildrenRectChanged(body: string): ToolBarBuilder;
  onClipChanged(body: string): ToolBarBuilder;
  onContainmentMaskChanged(body: string): ToolBarBuilder;
  onContentChildrenChanged(body: string): ToolBarBuilder;
  onContentHeightChanged(body: string): ToolBarBuilder;
  onContentItemChanged(body: string): ToolBarBuilder;
  onContentWidthChanged(body: string): ToolBarBuilder;
  onEnabledChanged(body: string): ToolBarBuilder;
  onFocusChanged(body: string): ToolBarBuilder;
  onFocusPolicyChanged(body: string): ToolBarBuilder;
  onFocusReasonChanged(body: string): ToolBarBuilder;
  onFontChanged(body: string): ToolBarBuilder;
  onHeightChanged(body: string): ToolBarBuilder;
  onHorizontalPaddingChanged(body: string): ToolBarBuilder;
  onHoverEnabledChanged(body: string): ToolBarBuilder;
  onHoveredChanged(body: string): ToolBarBuilder;
  onImplicitBackgroundHeightChanged(body: string): ToolBarBuilder;
  onImplicitBackgroundWidthChanged(body: string): ToolBarBuilder;
  onImplicitContentHeightChanged(body: string): ToolBarBuilder;
  onImplicitContentWidthChanged(body: string): ToolBarBuilder;
  onImplicitHeightChanged(body: string): ToolBarBuilder;
  onImplicitWidthChanged(body: string): ToolBarBuilder;
  onLeftInsetChanged(body: string): ToolBarBuilder;
  onLeftPaddingChanged(body: string): ToolBarBuilder;
  onLocaleChanged(body: string): ToolBarBuilder;
  onMirroredChanged(body: string): ToolBarBuilder;
  onObjectNameChanged(body: string): ToolBarBuilder;
  onOpacityChanged(body: string): ToolBarBuilder;
  onPaddingChanged(body: string): ToolBarBuilder;
  onPaletteChanged(body: string): ToolBarBuilder;
  onPaletteCreated(body: string): ToolBarBuilder;
  onParentChanged(body: string): ToolBarBuilder;
  onPositionChanged(body: string): ToolBarBuilder;
  onRightInsetChanged(body: string): ToolBarBuilder;
  onRightPaddingChanged(body: string): ToolBarBuilder;
  onRotationChanged(body: string): ToolBarBuilder;
  onScaleChanged(body: string): ToolBarBuilder;
  onSmoothChanged(body: string): ToolBarBuilder;
  onSpacingChanged(body: string): ToolBarBuilder;
  onStateChanged(body: string): ToolBarBuilder;
  onTopInsetChanged(body: string): ToolBarBuilder;
  onTopPaddingChanged(body: string): ToolBarBuilder;
  onTransformOriginChanged(body: string): ToolBarBuilder;
  onVerticalPaddingChanged(body: string): ToolBarBuilder;
  onVisibleChanged(body: string): ToolBarBuilder;
  onVisibleChildrenChanged(body: string): ToolBarBuilder;
  onVisualFocusChanged(body: string): ToolBarBuilder;
  onWheelEnabledChanged(body: string): ToolBarBuilder;
  onWidthChanged(body: string): ToolBarBuilder;
  onWindowChanged(body: string): ToolBarBuilder;
  onXChanged(body: string): ToolBarBuilder;
  onYChanged(body: string): ToolBarBuilder;
  onZChanged(body: string): ToolBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ToolBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ToolBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ToolBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ToolBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ToolBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ToolBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ToolBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ToolBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ToolBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ToolBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ToolBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ToolBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ToolBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ToolBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ToolBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ToolBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ToolBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ToolBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ToolBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ToolBarBuilder;
}

const TOOLBAR_META: TypeMetadata = {
  typeName: 'ToolBar',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
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
    { name: 'position', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
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
    { handlerName: 'onPositionChanged', paramCount: 0 },
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
  defaultProperty: 'contentData',
};

export function ToolBar(): ToolBarBuilder {
  return createFluentBuilder('ToolBar', TOOLBAR_META) as unknown as ToolBarBuilder;
}

export namespace ToolBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('ToolBar', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('ToolBar', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('ToolBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ToolBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ToolBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ToolBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('ToolBar', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('ToolBar', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('ToolBar', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('ToolBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('ToolBar', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace Position {
    export const Header = createEnumToken('ToolBar', 'Position', 'Header');
    export const Footer = createEnumToken('ToolBar', 'Position', 'Footer');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ToolBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ToolBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ToolBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ToolBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ToolBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ToolBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ToolBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ToolBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ToolBar', 'TransformOrigin', 'BottomRight');
  }
}
