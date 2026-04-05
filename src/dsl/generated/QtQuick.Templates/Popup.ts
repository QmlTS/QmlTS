// AUTO-GENERATED — DO NOT EDIT
// Type: Popup
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
import type { AnchorsBuilder } from './QQuickPopupAnchors.js';
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
export interface PopupBuilder {
  id(id: string): PopupBuilder;
  child(obj: QmlObjectBuilder): PopupBuilder;

  background(value: ItemBuilder): PopupBuilder;
  backgroundBind(expr: string): PopupBuilder;
  bottomInset(value: number): PopupBuilder;
  bottomInsetBind(expr: string): PopupBuilder;
  bottomMargin(value: number): PopupBuilder;
  bottomMarginBind(expr: string): PopupBuilder;
  bottomPadding(value: number): PopupBuilder;
  bottomPaddingBind(expr: string): PopupBuilder;
  clip(value: boolean): PopupBuilder;
  clipBind(expr: string): PopupBuilder;
  closePolicy(value: QmlEnumToken): PopupBuilder;
  closePolicyBind(expr: string): PopupBuilder;
  contentHeight(value: number): PopupBuilder;
  contentHeightBind(expr: string): PopupBuilder;
  contentItem(value: ItemBuilder): PopupBuilder;
  contentItemBind(expr: string): PopupBuilder;
  contentWidth(value: number): PopupBuilder;
  contentWidthBind(expr: string): PopupBuilder;
  dim(value: boolean): PopupBuilder;
  dimBind(expr: string): PopupBuilder;
  enabled(value: boolean): PopupBuilder;
  enabledBind(expr: string): PopupBuilder;
  enter(value: TransitionBuilder): PopupBuilder;
  enterBind(expr: string): PopupBuilder;
  exit(value: TransitionBuilder): PopupBuilder;
  exitBind(expr: string): PopupBuilder;
  focus(value: boolean): PopupBuilder;
  focusBind(expr: string): PopupBuilder;
  font(value: QmlFont): PopupBuilder;
  fontBind(expr: string): PopupBuilder;
  height(value: number): PopupBuilder;
  heightBind(expr: string): PopupBuilder;
  horizontalPadding(value: number): PopupBuilder;
  horizontalPaddingBind(expr: string): PopupBuilder;
  implicitHeight(value: number): PopupBuilder;
  implicitHeightBind(expr: string): PopupBuilder;
  implicitWidth(value: number): PopupBuilder;
  implicitWidthBind(expr: string): PopupBuilder;
  leftInset(value: number): PopupBuilder;
  leftInsetBind(expr: string): PopupBuilder;
  leftMargin(value: number): PopupBuilder;
  leftMarginBind(expr: string): PopupBuilder;
  leftPadding(value: number): PopupBuilder;
  leftPaddingBind(expr: string): PopupBuilder;
  locale(value: string): PopupBuilder;
  localeBind(expr: string): PopupBuilder;
  margins(value: number): PopupBuilder;
  marginsBind(expr: string): PopupBuilder;
  modal(value: boolean): PopupBuilder;
  modalBind(expr: string): PopupBuilder;
  objectName(value: string): PopupBuilder;
  objectNameBind(expr: string): PopupBuilder;
  opacity(value: number): PopupBuilder;
  opacityBind(expr: string): PopupBuilder;
  padding(value: number): PopupBuilder;
  paddingBind(expr: string): PopupBuilder;
  palette(value: PaletteBuilder): PopupBuilder;
  paletteBind(expr: string): PopupBuilder;
  parent(value: ItemBuilder): PopupBuilder;
  parentBind(expr: string): PopupBuilder;
  popupType(value: QmlEnumToken): PopupBuilder;
  popupTypeBind(expr: string): PopupBuilder;
  rightInset(value: number): PopupBuilder;
  rightInsetBind(expr: string): PopupBuilder;
  rightMargin(value: number): PopupBuilder;
  rightMarginBind(expr: string): PopupBuilder;
  rightPadding(value: number): PopupBuilder;
  rightPaddingBind(expr: string): PopupBuilder;
  scale(value: number): PopupBuilder;
  scaleBind(expr: string): PopupBuilder;
  spacing(value: number): PopupBuilder;
  spacingBind(expr: string): PopupBuilder;
  topInset(value: number): PopupBuilder;
  topInsetBind(expr: string): PopupBuilder;
  topMargin(value: number): PopupBuilder;
  topMarginBind(expr: string): PopupBuilder;
  topPadding(value: number): PopupBuilder;
  topPaddingBind(expr: string): PopupBuilder;
  transformOrigin(value: QmlEnumToken): PopupBuilder;
  transformOriginBind(expr: string): PopupBuilder;
  verticalPadding(value: number): PopupBuilder;
  verticalPaddingBind(expr: string): PopupBuilder;
  visible(value: boolean): PopupBuilder;
  visibleBind(expr: string): PopupBuilder;
  width(value: number): PopupBuilder;
  widthBind(expr: string): PopupBuilder;
  x(value: number): PopupBuilder;
  xBind(expr: string): PopupBuilder;
  y(value: number): PopupBuilder;
  yBind(expr: string): PopupBuilder;
  z(value: number): PopupBuilder;
  zBind(expr: string): PopupBuilder;
  onAboutToHide(body: string): PopupBuilder;
  onAboutToShow(body: string): PopupBuilder;
  onActiveFocusChanged(body: string): PopupBuilder;
  onAvailableHeightChanged(body: string): PopupBuilder;
  onAvailableWidthChanged(body: string): PopupBuilder;
  onBackgroundChanged(body: string): PopupBuilder;
  onBottomInsetChanged(body: string): PopupBuilder;
  onBottomMarginChanged(body: string): PopupBuilder;
  onBottomPaddingChanged(body: string): PopupBuilder;
  onClipChanged(body: string): PopupBuilder;
  onClosePolicyChanged(body: string): PopupBuilder;
  onClosed(body: string): PopupBuilder;
  onContentChildrenChanged(body: string): PopupBuilder;
  onContentHeightChanged(body: string): PopupBuilder;
  onContentItemChanged(body: string): PopupBuilder;
  onContentWidthChanged(body: string): PopupBuilder;
  onDimChanged(body: string): PopupBuilder;
  onEnabledChanged(body: string): PopupBuilder;
  onEnterChanged(body: string): PopupBuilder;
  onExitChanged(body: string): PopupBuilder;
  onFocusChanged(body: string): PopupBuilder;
  onFontChanged(body: string): PopupBuilder;
  onHeightChanged(body: string): PopupBuilder;
  onHorizontalPaddingChanged(body: string): PopupBuilder;
  onImplicitBackgroundHeightChanged(body: string): PopupBuilder;
  onImplicitBackgroundWidthChanged(body: string): PopupBuilder;
  onImplicitContentHeightChanged(body: string): PopupBuilder;
  onImplicitContentWidthChanged(body: string): PopupBuilder;
  onImplicitHeightChanged(body: string): PopupBuilder;
  onImplicitWidthChanged(body: string): PopupBuilder;
  onLeftInsetChanged(body: string): PopupBuilder;
  onLeftMarginChanged(body: string): PopupBuilder;
  onLeftPaddingChanged(body: string): PopupBuilder;
  onLocaleChanged(body: string): PopupBuilder;
  onMarginsChanged(body: string): PopupBuilder;
  onMirroredChanged(body: string): PopupBuilder;
  onModalChanged(body: string): PopupBuilder;
  onObjectNameChanged(body: string): PopupBuilder;
  onOpacityChanged(body: string): PopupBuilder;
  onOpened(body: string): PopupBuilder;
  onOpenedChanged(body: string): PopupBuilder;
  onPaddingChanged(body: string): PopupBuilder;
  onPaletteChanged(body: string): PopupBuilder;
  onPaletteCreated(body: string): PopupBuilder;
  onParentChanged(body: string): PopupBuilder;
  onPopupTypeChanged(body: string): PopupBuilder;
  onRightInsetChanged(body: string): PopupBuilder;
  onRightMarginChanged(body: string): PopupBuilder;
  onRightPaddingChanged(body: string): PopupBuilder;
  onScaleChanged(body: string): PopupBuilder;
  onSpacingChanged(body: string): PopupBuilder;
  onTopInsetChanged(body: string): PopupBuilder;
  onTopMarginChanged(body: string): PopupBuilder;
  onTopPaddingChanged(body: string): PopupBuilder;
  onVerticalPaddingChanged(body: string): PopupBuilder;
  onVisibleChanged(body: string): PopupBuilder;
  onWidthChanged(body: string): PopupBuilder;
  onWindowChanged(body: string): PopupBuilder;
  onXChanged(body: string): PopupBuilder;
  onYChanged(body: string): PopupBuilder;
  onZChanged(body: string): PopupBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PopupBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): PopupBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): PopupBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): PopupBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): PopupBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): PopupBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): PopupBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): PopupBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): PopupBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): PopupBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): PopupBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): PopupBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): PopupBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): PopupBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): PopupBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): PopupBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): PopupBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): PopupBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): PopupBuilder;
}

const POPUP_META: TypeMetadata = {
  typeName: 'Popup',
  properties: [
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomMargin', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'closePolicy', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'dim', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'enter', hasValue: true, hasBinding: true },
    { name: 'exit', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftMargin', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'margins', hasValue: true, hasBinding: true },
    { name: 'modal', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'popupType', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topMargin', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAboutToHide', paramCount: 0 },
    { handlerName: 'onAboutToShow', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 0 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomMarginChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onClipChanged', paramCount: 0 },
    { handlerName: 'onClosePolicyChanged', paramCount: 0 },
    { handlerName: 'onClosed', paramCount: 0 },
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onDimChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnterChanged', paramCount: 0 },
    { handlerName: 'onExitChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftMarginChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMarginsChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onModalChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOpened', paramCount: 0 },
    { handlerName: 'onOpenedChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPopupTypeChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightMarginChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopMarginChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
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
      properties: [{ name: 'centerIn', hasValue: true, hasBinding: true }],
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

export function Popup(): PopupBuilder {
  return createFluentBuilder('Popup', POPUP_META) as unknown as PopupBuilder;
}

export namespace Popup {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('Popup', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'Popup',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'Popup',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'Popup',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'Popup',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
    export const CloseOnEscape = createEnumToken('Popup', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('Popup', 'PopupType', 'Item');
    export const Window = createEnumToken('Popup', 'PopupType', 'Window');
    export const Native = createEnumToken('Popup', 'PopupType', 'Native');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Popup', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Popup', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Popup', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Popup', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Popup', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Popup', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Popup', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Popup', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Popup', 'TransformOrigin', 'BottomRight');
  }
}
