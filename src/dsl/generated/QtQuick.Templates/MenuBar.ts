// AUTO-GENERATED — DO NOT EDIT
// Type: MenuBar
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
export interface MenuBarBuilder {
  id(id: string): MenuBarBuilder;
  child(obj: QmlObjectBuilder): MenuBarBuilder;

  activeFocusOnTab(value: boolean): MenuBarBuilder;
  activeFocusOnTabBind(expr: string): MenuBarBuilder;
  antialiasing(value: boolean): MenuBarBuilder;
  antialiasingBind(expr: string): MenuBarBuilder;
  background(value: ItemBuilder): MenuBarBuilder;
  backgroundBind(expr: string): MenuBarBuilder;
  baselineOffset(value: number): MenuBarBuilder;
  baselineOffsetBind(expr: string): MenuBarBuilder;
  bottomInset(value: number): MenuBarBuilder;
  bottomInsetBind(expr: string): MenuBarBuilder;
  bottomPadding(value: number): MenuBarBuilder;
  bottomPaddingBind(expr: string): MenuBarBuilder;
  clip(value: boolean): MenuBarBuilder;
  clipBind(expr: string): MenuBarBuilder;
  containmentMask(value: QtObjectBuilder): MenuBarBuilder;
  containmentMaskBind(expr: string): MenuBarBuilder;
  contentHeight(value: number): MenuBarBuilder;
  contentHeightBind(expr: string): MenuBarBuilder;
  contentItem(value: ItemBuilder): MenuBarBuilder;
  contentItemBind(expr: string): MenuBarBuilder;
  contentWidth(value: number): MenuBarBuilder;
  contentWidthBind(expr: string): MenuBarBuilder;
  currentIndex(value: number): MenuBarBuilder;
  currentIndexBind(expr: string): MenuBarBuilder;
  delegate(value: QmlComponent): MenuBarBuilder;
  delegateBind(expr: string): MenuBarBuilder;
  enabled(value: boolean): MenuBarBuilder;
  enabledBind(expr: string): MenuBarBuilder;
  focus(value: boolean): MenuBarBuilder;
  focusBind(expr: string): MenuBarBuilder;
  focusPolicy(value: QmlEnumToken): MenuBarBuilder;
  focusPolicyBind(expr: string): MenuBarBuilder;
  focusReason(value: QmlEnumToken): MenuBarBuilder;
  focusReasonBind(expr: string): MenuBarBuilder;
  font(value: QmlFont): MenuBarBuilder;
  fontBind(expr: string): MenuBarBuilder;
  height(value: number): MenuBarBuilder;
  heightBind(expr: string): MenuBarBuilder;
  horizontalPadding(value: number): MenuBarBuilder;
  horizontalPaddingBind(expr: string): MenuBarBuilder;
  hoverEnabled(value: boolean): MenuBarBuilder;
  hoverEnabledBind(expr: string): MenuBarBuilder;
  implicitHeight(value: number): MenuBarBuilder;
  implicitHeightBind(expr: string): MenuBarBuilder;
  implicitWidth(value: number): MenuBarBuilder;
  implicitWidthBind(expr: string): MenuBarBuilder;
  leftInset(value: number): MenuBarBuilder;
  leftInsetBind(expr: string): MenuBarBuilder;
  leftPadding(value: number): MenuBarBuilder;
  leftPaddingBind(expr: string): MenuBarBuilder;
  locale(value: string): MenuBarBuilder;
  localeBind(expr: string): MenuBarBuilder;
  objectName(value: string): MenuBarBuilder;
  objectNameBind(expr: string): MenuBarBuilder;
  opacity(value: number): MenuBarBuilder;
  opacityBind(expr: string): MenuBarBuilder;
  padding(value: number): MenuBarBuilder;
  paddingBind(expr: string): MenuBarBuilder;
  palette(value: PaletteBuilder): MenuBarBuilder;
  paletteBind(expr: string): MenuBarBuilder;
  parent(value: ItemBuilder): MenuBarBuilder;
  parentBind(expr: string): MenuBarBuilder;
  rightInset(value: number): MenuBarBuilder;
  rightInsetBind(expr: string): MenuBarBuilder;
  rightPadding(value: number): MenuBarBuilder;
  rightPaddingBind(expr: string): MenuBarBuilder;
  rotation(value: number): MenuBarBuilder;
  rotationBind(expr: string): MenuBarBuilder;
  scale(value: number): MenuBarBuilder;
  scaleBind(expr: string): MenuBarBuilder;
  smooth(value: boolean): MenuBarBuilder;
  smoothBind(expr: string): MenuBarBuilder;
  spacing(value: number): MenuBarBuilder;
  spacingBind(expr: string): MenuBarBuilder;
  state(value: string): MenuBarBuilder;
  stateBind(expr: string): MenuBarBuilder;
  topInset(value: number): MenuBarBuilder;
  topInsetBind(expr: string): MenuBarBuilder;
  topPadding(value: number): MenuBarBuilder;
  topPaddingBind(expr: string): MenuBarBuilder;
  transformOrigin(value: QmlEnumToken): MenuBarBuilder;
  transformOriginBind(expr: string): MenuBarBuilder;
  verticalPadding(value: number): MenuBarBuilder;
  verticalPaddingBind(expr: string): MenuBarBuilder;
  visible(value: boolean): MenuBarBuilder;
  visibleBind(expr: string): MenuBarBuilder;
  wheelEnabled(value: boolean): MenuBarBuilder;
  wheelEnabledBind(expr: string): MenuBarBuilder;
  width(value: number): MenuBarBuilder;
  widthBind(expr: string): MenuBarBuilder;
  x(value: number): MenuBarBuilder;
  xBind(expr: string): MenuBarBuilder;
  y(value: number): MenuBarBuilder;
  yBind(expr: string): MenuBarBuilder;
  z(value: number): MenuBarBuilder;
  zBind(expr: string): MenuBarBuilder;
  onActiveFocusChanged(body: string): MenuBarBuilder;
  onActiveFocusOnTabChanged(body: string): MenuBarBuilder;
  onAntialiasingChanged(body: string): MenuBarBuilder;
  onAvailableHeightChanged(body: string): MenuBarBuilder;
  onAvailableWidthChanged(body: string): MenuBarBuilder;
  onBackgroundChanged(body: string): MenuBarBuilder;
  onBaselineOffsetChanged(body: string): MenuBarBuilder;
  onBottomInsetChanged(body: string): MenuBarBuilder;
  onBottomPaddingChanged(body: string): MenuBarBuilder;
  onChildrenChanged(body: string): MenuBarBuilder;
  onChildrenRectChanged(body: string): MenuBarBuilder;
  onClipChanged(body: string): MenuBarBuilder;
  onContainmentMaskChanged(body: string): MenuBarBuilder;
  onContentChildrenChanged(body: string): MenuBarBuilder;
  onContentHeightChanged(body: string): MenuBarBuilder;
  onContentItemChanged(body: string): MenuBarBuilder;
  onContentWidthChanged(body: string): MenuBarBuilder;
  onCountChanged(body: string): MenuBarBuilder;
  onCurrentIndexChanged(body: string): MenuBarBuilder;
  onCurrentItemChanged(body: string): MenuBarBuilder;
  onDelegateChanged(body: string): MenuBarBuilder;
  onEnabledChanged(body: string): MenuBarBuilder;
  onFocusChanged(body: string): MenuBarBuilder;
  onFocusPolicyChanged(body: string): MenuBarBuilder;
  onFocusReasonChanged(body: string): MenuBarBuilder;
  onFontChanged(body: string): MenuBarBuilder;
  onHeightChanged(body: string): MenuBarBuilder;
  onHorizontalPaddingChanged(body: string): MenuBarBuilder;
  onHoverEnabledChanged(body: string): MenuBarBuilder;
  onHoveredChanged(body: string): MenuBarBuilder;
  onImplicitBackgroundHeightChanged(body: string): MenuBarBuilder;
  onImplicitBackgroundWidthChanged(body: string): MenuBarBuilder;
  onImplicitContentHeightChanged(body: string): MenuBarBuilder;
  onImplicitContentWidthChanged(body: string): MenuBarBuilder;
  onImplicitHeightChanged(body: string): MenuBarBuilder;
  onImplicitWidthChanged(body: string): MenuBarBuilder;
  onLeftInsetChanged(body: string): MenuBarBuilder;
  onLeftPaddingChanged(body: string): MenuBarBuilder;
  onLocaleChanged(body: string): MenuBarBuilder;
  onMenusChanged(body: string): MenuBarBuilder;
  onMirroredChanged(body: string): MenuBarBuilder;
  onObjectNameChanged(body: string): MenuBarBuilder;
  onOpacityChanged(body: string): MenuBarBuilder;
  onPaddingChanged(body: string): MenuBarBuilder;
  onPaletteChanged(body: string): MenuBarBuilder;
  onPaletteCreated(body: string): MenuBarBuilder;
  onParentChanged(body: string): MenuBarBuilder;
  onRightInsetChanged(body: string): MenuBarBuilder;
  onRightPaddingChanged(body: string): MenuBarBuilder;
  onRotationChanged(body: string): MenuBarBuilder;
  onScaleChanged(body: string): MenuBarBuilder;
  onSmoothChanged(body: string): MenuBarBuilder;
  onSpacingChanged(body: string): MenuBarBuilder;
  onStateChanged(body: string): MenuBarBuilder;
  onTopInsetChanged(body: string): MenuBarBuilder;
  onTopPaddingChanged(body: string): MenuBarBuilder;
  onTransformOriginChanged(body: string): MenuBarBuilder;
  onVerticalPaddingChanged(body: string): MenuBarBuilder;
  onVisibleChanged(body: string): MenuBarBuilder;
  onVisibleChildrenChanged(body: string): MenuBarBuilder;
  onVisualFocusChanged(body: string): MenuBarBuilder;
  onWheelEnabledChanged(body: string): MenuBarBuilder;
  onWidthChanged(body: string): MenuBarBuilder;
  onWindowChanged(body: string): MenuBarBuilder;
  onXChanged(body: string): MenuBarBuilder;
  onYChanged(body: string): MenuBarBuilder;
  onZChanged(body: string): MenuBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuBarBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuBarBuilder;
}

const MENUBAR_META: TypeMetadata = {
  typeName: 'MenuBar',
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
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
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
    { handlerName: 'onMenusChanged', paramCount: 0 },
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
  defaultProperty: 'contentData',
};

export function MenuBar(): MenuBarBuilder {
  return createFluentBuilder('MenuBar', MENUBAR_META) as unknown as MenuBarBuilder;
}

export namespace MenuBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MenuBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MenuBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MenuBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MenuBar', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MenuBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuBar', 'TransformOrigin', 'BottomRight');
  }
}
