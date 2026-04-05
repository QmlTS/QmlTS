// AUTO-GENERATED — DO NOT EDIT
// Type: ToolTip
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
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
export interface ToolTipBuilder {
  id(id: string): ToolTipBuilder;
  child(obj: QmlObjectBuilder): ToolTipBuilder;

  background(value: ItemBuilder): ToolTipBuilder;
  backgroundBind(expr: string): ToolTipBuilder;
  bottomInset(value: number): ToolTipBuilder;
  bottomInsetBind(expr: string): ToolTipBuilder;
  bottomMargin(value: number): ToolTipBuilder;
  bottomMarginBind(expr: string): ToolTipBuilder;
  bottomPadding(value: number): ToolTipBuilder;
  bottomPaddingBind(expr: string): ToolTipBuilder;
  clip(value: boolean): ToolTipBuilder;
  clipBind(expr: string): ToolTipBuilder;
  closePolicy(value: QmlEnumToken): ToolTipBuilder;
  closePolicyBind(expr: string): ToolTipBuilder;
  contentHeight(value: number): ToolTipBuilder;
  contentHeightBind(expr: string): ToolTipBuilder;
  contentItem(value: ItemBuilder): ToolTipBuilder;
  contentItemBind(expr: string): ToolTipBuilder;
  contentWidth(value: number): ToolTipBuilder;
  contentWidthBind(expr: string): ToolTipBuilder;
  delay(value: number): ToolTipBuilder;
  delayBind(expr: string): ToolTipBuilder;
  dim(value: boolean): ToolTipBuilder;
  dimBind(expr: string): ToolTipBuilder;
  enabled(value: boolean): ToolTipBuilder;
  enabledBind(expr: string): ToolTipBuilder;
  enter(value: TransitionBuilder): ToolTipBuilder;
  enterBind(expr: string): ToolTipBuilder;
  exit(value: TransitionBuilder): ToolTipBuilder;
  exitBind(expr: string): ToolTipBuilder;
  focus(value: boolean): ToolTipBuilder;
  focusBind(expr: string): ToolTipBuilder;
  font(value: QmlFont): ToolTipBuilder;
  fontBind(expr: string): ToolTipBuilder;
  height(value: number): ToolTipBuilder;
  heightBind(expr: string): ToolTipBuilder;
  horizontalPadding(value: number): ToolTipBuilder;
  horizontalPaddingBind(expr: string): ToolTipBuilder;
  implicitHeight(value: number): ToolTipBuilder;
  implicitHeightBind(expr: string): ToolTipBuilder;
  implicitWidth(value: number): ToolTipBuilder;
  implicitWidthBind(expr: string): ToolTipBuilder;
  leftInset(value: number): ToolTipBuilder;
  leftInsetBind(expr: string): ToolTipBuilder;
  leftMargin(value: number): ToolTipBuilder;
  leftMarginBind(expr: string): ToolTipBuilder;
  leftPadding(value: number): ToolTipBuilder;
  leftPaddingBind(expr: string): ToolTipBuilder;
  locale(value: string): ToolTipBuilder;
  localeBind(expr: string): ToolTipBuilder;
  margins(value: number): ToolTipBuilder;
  marginsBind(expr: string): ToolTipBuilder;
  modal(value: boolean): ToolTipBuilder;
  modalBind(expr: string): ToolTipBuilder;
  objectName(value: string): ToolTipBuilder;
  objectNameBind(expr: string): ToolTipBuilder;
  opacity(value: number): ToolTipBuilder;
  opacityBind(expr: string): ToolTipBuilder;
  padding(value: number): ToolTipBuilder;
  paddingBind(expr: string): ToolTipBuilder;
  palette(value: PaletteBuilder): ToolTipBuilder;
  paletteBind(expr: string): ToolTipBuilder;
  parent(value: ItemBuilder): ToolTipBuilder;
  parentBind(expr: string): ToolTipBuilder;
  popupType(value: QmlEnumToken): ToolTipBuilder;
  popupTypeBind(expr: string): ToolTipBuilder;
  rightInset(value: number): ToolTipBuilder;
  rightInsetBind(expr: string): ToolTipBuilder;
  rightMargin(value: number): ToolTipBuilder;
  rightMarginBind(expr: string): ToolTipBuilder;
  rightPadding(value: number): ToolTipBuilder;
  rightPaddingBind(expr: string): ToolTipBuilder;
  scale(value: number): ToolTipBuilder;
  scaleBind(expr: string): ToolTipBuilder;
  spacing(value: number): ToolTipBuilder;
  spacingBind(expr: string): ToolTipBuilder;
  text(value: string): ToolTipBuilder;
  textBind(expr: string): ToolTipBuilder;
  timeout(value: number): ToolTipBuilder;
  timeoutBind(expr: string): ToolTipBuilder;
  topInset(value: number): ToolTipBuilder;
  topInsetBind(expr: string): ToolTipBuilder;
  topMargin(value: number): ToolTipBuilder;
  topMarginBind(expr: string): ToolTipBuilder;
  topPadding(value: number): ToolTipBuilder;
  topPaddingBind(expr: string): ToolTipBuilder;
  transformOrigin(value: QmlEnumToken): ToolTipBuilder;
  transformOriginBind(expr: string): ToolTipBuilder;
  verticalPadding(value: number): ToolTipBuilder;
  verticalPaddingBind(expr: string): ToolTipBuilder;
  visible(value: boolean): ToolTipBuilder;
  visibleBind(expr: string): ToolTipBuilder;
  width(value: number): ToolTipBuilder;
  widthBind(expr: string): ToolTipBuilder;
  x(value: number): ToolTipBuilder;
  xBind(expr: string): ToolTipBuilder;
  y(value: number): ToolTipBuilder;
  yBind(expr: string): ToolTipBuilder;
  z(value: number): ToolTipBuilder;
  zBind(expr: string): ToolTipBuilder;
  onAboutToHide(body: string): ToolTipBuilder;
  onAboutToShow(body: string): ToolTipBuilder;
  onActiveFocusChanged(body: string): ToolTipBuilder;
  onAvailableHeightChanged(body: string): ToolTipBuilder;
  onAvailableWidthChanged(body: string): ToolTipBuilder;
  onBackgroundChanged(body: string): ToolTipBuilder;
  onBottomInsetChanged(body: string): ToolTipBuilder;
  onBottomMarginChanged(body: string): ToolTipBuilder;
  onBottomPaddingChanged(body: string): ToolTipBuilder;
  onClipChanged(body: string): ToolTipBuilder;
  onClosePolicyChanged(body: string): ToolTipBuilder;
  onClosed(body: string): ToolTipBuilder;
  onContentChildrenChanged(body: string): ToolTipBuilder;
  onContentHeightChanged(body: string): ToolTipBuilder;
  onContentItemChanged(body: string): ToolTipBuilder;
  onContentWidthChanged(body: string): ToolTipBuilder;
  onDelayChanged(body: string): ToolTipBuilder;
  onDimChanged(body: string): ToolTipBuilder;
  onEnabledChanged(body: string): ToolTipBuilder;
  onEnterChanged(body: string): ToolTipBuilder;
  onExitChanged(body: string): ToolTipBuilder;
  onFocusChanged(body: string): ToolTipBuilder;
  onFontChanged(body: string): ToolTipBuilder;
  onHeightChanged(body: string): ToolTipBuilder;
  onHorizontalPaddingChanged(body: string): ToolTipBuilder;
  onImplicitBackgroundHeightChanged(body: string): ToolTipBuilder;
  onImplicitBackgroundWidthChanged(body: string): ToolTipBuilder;
  onImplicitContentHeightChanged(body: string): ToolTipBuilder;
  onImplicitContentWidthChanged(body: string): ToolTipBuilder;
  onImplicitHeightChanged(body: string): ToolTipBuilder;
  onImplicitWidthChanged(body: string): ToolTipBuilder;
  onLeftInsetChanged(body: string): ToolTipBuilder;
  onLeftMarginChanged(body: string): ToolTipBuilder;
  onLeftPaddingChanged(body: string): ToolTipBuilder;
  onLocaleChanged(body: string): ToolTipBuilder;
  onMarginsChanged(body: string): ToolTipBuilder;
  onMirroredChanged(body: string): ToolTipBuilder;
  onModalChanged(body: string): ToolTipBuilder;
  onObjectNameChanged(body: string): ToolTipBuilder;
  onOpacityChanged(body: string): ToolTipBuilder;
  onOpened(body: string): ToolTipBuilder;
  onOpenedChanged(body: string): ToolTipBuilder;
  onPaddingChanged(body: string): ToolTipBuilder;
  onPaletteChanged(body: string): ToolTipBuilder;
  onPaletteCreated(body: string): ToolTipBuilder;
  onParentChanged(body: string): ToolTipBuilder;
  onPopupTypeChanged(body: string): ToolTipBuilder;
  onRightInsetChanged(body: string): ToolTipBuilder;
  onRightMarginChanged(body: string): ToolTipBuilder;
  onRightPaddingChanged(body: string): ToolTipBuilder;
  onScaleChanged(body: string): ToolTipBuilder;
  onSpacingChanged(body: string): ToolTipBuilder;
  onTextChanged(body: string): ToolTipBuilder;
  onTimeoutChanged(body: string): ToolTipBuilder;
  onTopInsetChanged(body: string): ToolTipBuilder;
  onTopMarginChanged(body: string): ToolTipBuilder;
  onTopPaddingChanged(body: string): ToolTipBuilder;
  onVerticalPaddingChanged(body: string): ToolTipBuilder;
  onVisibleChanged(body: string): ToolTipBuilder;
  onWidthChanged(body: string): ToolTipBuilder;
  onWindowChanged(body: string): ToolTipBuilder;
  onXChanged(body: string): ToolTipBuilder;
  onYChanged(body: string): ToolTipBuilder;
  onZChanged(body: string): ToolTipBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ToolTipBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ToolTipBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ToolTipBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ToolTipBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ToolTipBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ToolTipBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ToolTipBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ToolTipBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ToolTipBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ToolTipBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ToolTipBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ToolTipBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ToolTipBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ToolTipBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ToolTipBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ToolTipBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ToolTipBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ToolTipBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ToolTipBuilder;
}

const TOOLTIP_META: TypeMetadata = {
  typeName: 'ToolTip',
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
    { name: 'delay', hasValue: true, hasBinding: true },
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
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'timeout', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDelayChanged', paramCount: 0 },
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
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTimeoutChanged', paramCount: 0 },
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
      properties: [
        { name: 'centerIn', hasValue: true, hasBinding: true },
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

export function ToolTip(): ToolTipBuilder {
  return createFluentBuilder('ToolTip', TOOLTIP_META) as unknown as ToolTipBuilder;
}

export namespace ToolTip {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('ToolTip', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken('ToolTip', 'ClosePolicy', 'CloseOnPressOutside');
    export const CloseOnPressOutsideParent = createEnumToken('ToolTip', 'ClosePolicy', 'CloseOnPressOutsideParent');
    export const CloseOnReleaseOutside = createEnumToken('ToolTip', 'ClosePolicy', 'CloseOnReleaseOutside');
    export const CloseOnReleaseOutsideParent = createEnumToken('ToolTip', 'ClosePolicy', 'CloseOnReleaseOutsideParent');
    export const CloseOnEscape = createEnumToken('ToolTip', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('ToolTip', 'PopupType', 'Item');
    export const Window = createEnumToken('ToolTip', 'PopupType', 'Window');
    export const Native = createEnumToken('ToolTip', 'PopupType', 'Native');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ToolTip', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ToolTip', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ToolTip', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ToolTip', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ToolTip', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ToolTip', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ToolTip', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ToolTip', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ToolTip', 'TransformOrigin', 'BottomRight');
  }
}
