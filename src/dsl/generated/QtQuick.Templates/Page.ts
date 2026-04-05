// AUTO-GENERATED — DO NOT EDIT
// Type: Page
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
export interface PageBuilder {
  id(id: string): PageBuilder;
  child(obj: QmlObjectBuilder): PageBuilder;

  activeFocusOnTab(value: boolean): PageBuilder;
  activeFocusOnTabBind(expr: string): PageBuilder;
  antialiasing(value: boolean): PageBuilder;
  antialiasingBind(expr: string): PageBuilder;
  background(value: ItemBuilder): PageBuilder;
  backgroundBind(expr: string): PageBuilder;
  baselineOffset(value: number): PageBuilder;
  baselineOffsetBind(expr: string): PageBuilder;
  bottomInset(value: number): PageBuilder;
  bottomInsetBind(expr: string): PageBuilder;
  bottomPadding(value: number): PageBuilder;
  bottomPaddingBind(expr: string): PageBuilder;
  clip(value: boolean): PageBuilder;
  clipBind(expr: string): PageBuilder;
  containmentMask(value: QtObjectBuilder): PageBuilder;
  containmentMaskBind(expr: string): PageBuilder;
  contentHeight(value: number): PageBuilder;
  contentHeightBind(expr: string): PageBuilder;
  contentItem(value: ItemBuilder): PageBuilder;
  contentItemBind(expr: string): PageBuilder;
  contentWidth(value: number): PageBuilder;
  contentWidthBind(expr: string): PageBuilder;
  enabled(value: boolean): PageBuilder;
  enabledBind(expr: string): PageBuilder;
  focus(value: boolean): PageBuilder;
  focusBind(expr: string): PageBuilder;
  focusPolicy(value: QmlEnumToken): PageBuilder;
  focusPolicyBind(expr: string): PageBuilder;
  focusReason(value: QmlEnumToken): PageBuilder;
  focusReasonBind(expr: string): PageBuilder;
  font(value: QmlFont): PageBuilder;
  fontBind(expr: string): PageBuilder;
  footer(value: ItemBuilder): PageBuilder;
  footerBind(expr: string): PageBuilder;
  header(value: ItemBuilder): PageBuilder;
  headerBind(expr: string): PageBuilder;
  height(value: number): PageBuilder;
  heightBind(expr: string): PageBuilder;
  horizontalPadding(value: number): PageBuilder;
  horizontalPaddingBind(expr: string): PageBuilder;
  hoverEnabled(value: boolean): PageBuilder;
  hoverEnabledBind(expr: string): PageBuilder;
  implicitHeight(value: number): PageBuilder;
  implicitHeightBind(expr: string): PageBuilder;
  implicitWidth(value: number): PageBuilder;
  implicitWidthBind(expr: string): PageBuilder;
  leftInset(value: number): PageBuilder;
  leftInsetBind(expr: string): PageBuilder;
  leftPadding(value: number): PageBuilder;
  leftPaddingBind(expr: string): PageBuilder;
  locale(value: string): PageBuilder;
  localeBind(expr: string): PageBuilder;
  objectName(value: string): PageBuilder;
  objectNameBind(expr: string): PageBuilder;
  opacity(value: number): PageBuilder;
  opacityBind(expr: string): PageBuilder;
  padding(value: number): PageBuilder;
  paddingBind(expr: string): PageBuilder;
  palette(value: PaletteBuilder): PageBuilder;
  paletteBind(expr: string): PageBuilder;
  parent(value: ItemBuilder): PageBuilder;
  parentBind(expr: string): PageBuilder;
  rightInset(value: number): PageBuilder;
  rightInsetBind(expr: string): PageBuilder;
  rightPadding(value: number): PageBuilder;
  rightPaddingBind(expr: string): PageBuilder;
  rotation(value: number): PageBuilder;
  rotationBind(expr: string): PageBuilder;
  scale(value: number): PageBuilder;
  scaleBind(expr: string): PageBuilder;
  smooth(value: boolean): PageBuilder;
  smoothBind(expr: string): PageBuilder;
  spacing(value: number): PageBuilder;
  spacingBind(expr: string): PageBuilder;
  state(value: string): PageBuilder;
  stateBind(expr: string): PageBuilder;
  title(value: string): PageBuilder;
  titleBind(expr: string): PageBuilder;
  topInset(value: number): PageBuilder;
  topInsetBind(expr: string): PageBuilder;
  topPadding(value: number): PageBuilder;
  topPaddingBind(expr: string): PageBuilder;
  transformOrigin(value: QmlEnumToken): PageBuilder;
  transformOriginBind(expr: string): PageBuilder;
  verticalPadding(value: number): PageBuilder;
  verticalPaddingBind(expr: string): PageBuilder;
  visible(value: boolean): PageBuilder;
  visibleBind(expr: string): PageBuilder;
  wheelEnabled(value: boolean): PageBuilder;
  wheelEnabledBind(expr: string): PageBuilder;
  width(value: number): PageBuilder;
  widthBind(expr: string): PageBuilder;
  x(value: number): PageBuilder;
  xBind(expr: string): PageBuilder;
  y(value: number): PageBuilder;
  yBind(expr: string): PageBuilder;
  z(value: number): PageBuilder;
  zBind(expr: string): PageBuilder;
  onActiveFocusChanged(body: string): PageBuilder;
  onActiveFocusOnTabChanged(body: string): PageBuilder;
  onAntialiasingChanged(body: string): PageBuilder;
  onAvailableHeightChanged(body: string): PageBuilder;
  onAvailableWidthChanged(body: string): PageBuilder;
  onBackgroundChanged(body: string): PageBuilder;
  onBaselineOffsetChanged(body: string): PageBuilder;
  onBottomInsetChanged(body: string): PageBuilder;
  onBottomPaddingChanged(body: string): PageBuilder;
  onChildrenChanged(body: string): PageBuilder;
  onChildrenRectChanged(body: string): PageBuilder;
  onClipChanged(body: string): PageBuilder;
  onContainmentMaskChanged(body: string): PageBuilder;
  onContentChildrenChanged(body: string): PageBuilder;
  onContentHeightChanged(body: string): PageBuilder;
  onContentItemChanged(body: string): PageBuilder;
  onContentWidthChanged(body: string): PageBuilder;
  onEnabledChanged(body: string): PageBuilder;
  onFocusChanged(body: string): PageBuilder;
  onFocusPolicyChanged(body: string): PageBuilder;
  onFocusReasonChanged(body: string): PageBuilder;
  onFontChanged(body: string): PageBuilder;
  onFooterChanged(body: string): PageBuilder;
  onHeaderChanged(body: string): PageBuilder;
  onHeightChanged(body: string): PageBuilder;
  onHorizontalPaddingChanged(body: string): PageBuilder;
  onHoverEnabledChanged(body: string): PageBuilder;
  onHoveredChanged(body: string): PageBuilder;
  onImplicitBackgroundHeightChanged(body: string): PageBuilder;
  onImplicitBackgroundWidthChanged(body: string): PageBuilder;
  onImplicitContentHeightChanged(body: string): PageBuilder;
  onImplicitContentWidthChanged(body: string): PageBuilder;
  onImplicitFooterHeightChanged(body: string): PageBuilder;
  onImplicitFooterWidthChanged(body: string): PageBuilder;
  onImplicitHeaderHeightChanged(body: string): PageBuilder;
  onImplicitHeaderWidthChanged(body: string): PageBuilder;
  onImplicitHeightChanged(body: string): PageBuilder;
  onImplicitWidthChanged(body: string): PageBuilder;
  onLeftInsetChanged(body: string): PageBuilder;
  onLeftPaddingChanged(body: string): PageBuilder;
  onLocaleChanged(body: string): PageBuilder;
  onMirroredChanged(body: string): PageBuilder;
  onObjectNameChanged(body: string): PageBuilder;
  onOpacityChanged(body: string): PageBuilder;
  onPaddingChanged(body: string): PageBuilder;
  onPaletteChanged(body: string): PageBuilder;
  onPaletteCreated(body: string): PageBuilder;
  onParentChanged(body: string): PageBuilder;
  onRightInsetChanged(body: string): PageBuilder;
  onRightPaddingChanged(body: string): PageBuilder;
  onRotationChanged(body: string): PageBuilder;
  onScaleChanged(body: string): PageBuilder;
  onSmoothChanged(body: string): PageBuilder;
  onSpacingChanged(body: string): PageBuilder;
  onStateChanged(body: string): PageBuilder;
  onTitleChanged(body: string): PageBuilder;
  onTopInsetChanged(body: string): PageBuilder;
  onTopPaddingChanged(body: string): PageBuilder;
  onTransformOriginChanged(body: string): PageBuilder;
  onVerticalPaddingChanged(body: string): PageBuilder;
  onVisibleChanged(body: string): PageBuilder;
  onVisibleChildrenChanged(body: string): PageBuilder;
  onVisualFocusChanged(body: string): PageBuilder;
  onWheelEnabledChanged(body: string): PageBuilder;
  onWidthChanged(body: string): PageBuilder;
  onWindowChanged(body: string): PageBuilder;
  onXChanged(body: string): PageBuilder;
  onYChanged(body: string): PageBuilder;
  onZChanged(body: string): PageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PageBuilder;
  layer(setup: (b: LayerBuilder) => void): PageBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): PageBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): PageBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): PageBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): PageBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): PageBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): PageBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): PageBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): PageBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): PageBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): PageBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): PageBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): PageBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): PageBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): PageBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): PageBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): PageBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): PageBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): PageBuilder;
}

const PAGE_META: TypeMetadata = {
  typeName: 'Page',
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
    { name: 'footer', hasValue: true, hasBinding: true },
    { name: 'header', hasValue: true, hasBinding: true },
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
    { name: 'title', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFooterChanged', paramCount: 0 },
    { handlerName: 'onHeaderChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitFooterHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitFooterWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeaderHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeaderWidthChanged', paramCount: 0 },
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
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
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

export function Page(): PageBuilder {
  return createFluentBuilder('Page', PAGE_META) as unknown as PageBuilder;
}

export namespace Page {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Page', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Page', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Page', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Page', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Page', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Page', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Page', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Page', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Page', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Page', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Page', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Page', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Page', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Page', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Page', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Page', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Page', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Page', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Page', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Page', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Page', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Page', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Page', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Page', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Page', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Page', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Page', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Page', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Page', 'TransformOrigin', 'BottomRight');
  }
}
