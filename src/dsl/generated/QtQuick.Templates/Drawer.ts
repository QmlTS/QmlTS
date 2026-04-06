// AUTO-GENERATED — DO NOT EDIT
// Type: Drawer
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
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
export interface DrawerBuilder {
  id(id: string): DrawerBuilder;
  child(obj: QmlObjectBuilder): DrawerBuilder;
  children(...objs: QmlObjectBuilder[]): DrawerBuilder;

  background(value: ItemBuilder): DrawerBuilder;
  backgroundBind(expr: string): DrawerBuilder;
  bottomInset(value: number): DrawerBuilder;
  bottomInsetBind(expr: string): DrawerBuilder;
  bottomMargin(value: number): DrawerBuilder;
  bottomMarginBind(expr: string): DrawerBuilder;
  bottomPadding(value: number): DrawerBuilder;
  bottomPaddingBind(expr: string): DrawerBuilder;
  clip(value: boolean): DrawerBuilder;
  clipBind(expr: string): DrawerBuilder;
  closePolicy(value: QmlEnumToken): DrawerBuilder;
  closePolicyBind(expr: string): DrawerBuilder;
  contentHeight(value: number): DrawerBuilder;
  contentHeightBind(expr: string): DrawerBuilder;
  contentItem(value: ItemBuilder): DrawerBuilder;
  contentItemBind(expr: string): DrawerBuilder;
  contentWidth(value: number): DrawerBuilder;
  contentWidthBind(expr: string): DrawerBuilder;
  dim(value: boolean): DrawerBuilder;
  dimBind(expr: string): DrawerBuilder;
  dragMargin(value: number): DrawerBuilder;
  dragMarginBind(expr: string): DrawerBuilder;
  edge(value: QmlEnumToken): DrawerBuilder;
  edgeBind(expr: string): DrawerBuilder;
  enabled(value: boolean): DrawerBuilder;
  enabledBind(expr: string): DrawerBuilder;
  enter(value: TransitionBuilder): DrawerBuilder;
  enterBind(expr: string): DrawerBuilder;
  exit(value: TransitionBuilder): DrawerBuilder;
  exitBind(expr: string): DrawerBuilder;
  focus(value: boolean): DrawerBuilder;
  focusBind(expr: string): DrawerBuilder;
  font(value: QmlFont): DrawerBuilder;
  fontBind(expr: string): DrawerBuilder;
  height(value: number): DrawerBuilder;
  heightBind(expr: string): DrawerBuilder;
  horizontalPadding(value: number): DrawerBuilder;
  horizontalPaddingBind(expr: string): DrawerBuilder;
  implicitHeight(value: number): DrawerBuilder;
  implicitHeightBind(expr: string): DrawerBuilder;
  implicitWidth(value: number): DrawerBuilder;
  implicitWidthBind(expr: string): DrawerBuilder;
  interactive(value: boolean): DrawerBuilder;
  interactiveBind(expr: string): DrawerBuilder;
  leftInset(value: number): DrawerBuilder;
  leftInsetBind(expr: string): DrawerBuilder;
  leftMargin(value: number): DrawerBuilder;
  leftMarginBind(expr: string): DrawerBuilder;
  leftPadding(value: number): DrawerBuilder;
  leftPaddingBind(expr: string): DrawerBuilder;
  locale(value: string): DrawerBuilder;
  localeBind(expr: string): DrawerBuilder;
  margins(value: number): DrawerBuilder;
  marginsBind(expr: string): DrawerBuilder;
  modal(value: boolean): DrawerBuilder;
  modalBind(expr: string): DrawerBuilder;
  objectName(value: string): DrawerBuilder;
  objectNameBind(expr: string): DrawerBuilder;
  opacity(value: number): DrawerBuilder;
  opacityBind(expr: string): DrawerBuilder;
  padding(value: number): DrawerBuilder;
  paddingBind(expr: string): DrawerBuilder;
  palette(value: PaletteBuilder): DrawerBuilder;
  paletteBind(expr: string): DrawerBuilder;
  parent(value: ItemBuilder): DrawerBuilder;
  parentBind(expr: string): DrawerBuilder;
  popupType(value: QmlEnumToken): DrawerBuilder;
  popupTypeBind(expr: string): DrawerBuilder;
  position(value: number): DrawerBuilder;
  positionBind(expr: string): DrawerBuilder;
  rightInset(value: number): DrawerBuilder;
  rightInsetBind(expr: string): DrawerBuilder;
  rightMargin(value: number): DrawerBuilder;
  rightMarginBind(expr: string): DrawerBuilder;
  rightPadding(value: number): DrawerBuilder;
  rightPaddingBind(expr: string): DrawerBuilder;
  scale(value: number): DrawerBuilder;
  scaleBind(expr: string): DrawerBuilder;
  spacing(value: number): DrawerBuilder;
  spacingBind(expr: string): DrawerBuilder;
  topInset(value: number): DrawerBuilder;
  topInsetBind(expr: string): DrawerBuilder;
  topMargin(value: number): DrawerBuilder;
  topMarginBind(expr: string): DrawerBuilder;
  topPadding(value: number): DrawerBuilder;
  topPaddingBind(expr: string): DrawerBuilder;
  transformOrigin(value: QmlEnumToken): DrawerBuilder;
  transformOriginBind(expr: string): DrawerBuilder;
  verticalPadding(value: number): DrawerBuilder;
  verticalPaddingBind(expr: string): DrawerBuilder;
  visible(value: boolean): DrawerBuilder;
  visibleBind(expr: string): DrawerBuilder;
  width(value: number): DrawerBuilder;
  widthBind(expr: string): DrawerBuilder;
  x(value: number): DrawerBuilder;
  xBind(expr: string): DrawerBuilder;
  y(value: number): DrawerBuilder;
  yBind(expr: string): DrawerBuilder;
  z(value: number): DrawerBuilder;
  zBind(expr: string): DrawerBuilder;
  onAboutToHide(handler: DslSignalHandlerValue): DrawerBuilder;
  onAboutToShow(handler: DslSignalHandlerValue): DrawerBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onBottomMarginChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onClipChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onClosePolicyChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onClosed(handler: DslSignalHandlerValue): DrawerBuilder;
  onContentChildrenChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onContentHeightChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onContentWidthChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onDimChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onDragMarginChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onEdgeChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onEnterChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onExitChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onFontChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onInteractiveChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onLeftMarginChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onMarginsChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onModalChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onOpened(handler: DslSignalHandlerValue): DrawerBuilder;
  onOpenedChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): DrawerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onPopupTypeChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onRightMarginChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onTopMarginChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onXChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onYChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  onZChanged(handler: DslSignalHandlerValue): DrawerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DrawerBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DrawerBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DrawerBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DrawerBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DrawerBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DrawerBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DrawerBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DrawerBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DrawerBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DrawerBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DrawerBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DrawerBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DrawerBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DrawerBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DrawerBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DrawerBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DrawerBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DrawerBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DrawerBuilder;
}

const DRAWER_META: TypeMetadata = {
  typeName: 'Drawer',
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
    { name: 'dragMargin', hasValue: true, hasBinding: true },
    { name: 'edge', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'enter', hasValue: true, hasBinding: true },
    { name: 'exit', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interactive', hasValue: true, hasBinding: true },
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
    { name: 'position', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDragMarginChanged', paramCount: 0 },
    { handlerName: 'onEdgeChanged', paramCount: 0 },
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
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
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
    { handlerName: 'onPositionChanged', paramCount: 0 },
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

export function Drawer(): DrawerBuilder {
  return createFluentBuilder('Drawer', DRAWER_META) as unknown as DrawerBuilder;
}

export namespace Drawer {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('Drawer', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'Drawer',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'Drawer',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'Drawer',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'Drawer',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
    export const CloseOnEscape = createEnumToken('Drawer', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('Drawer', 'PopupType', 'Item');
    export const Window = createEnumToken('Drawer', 'PopupType', 'Window');
    export const Native = createEnumToken('Drawer', 'PopupType', 'Native');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Drawer', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Drawer', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Drawer', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Drawer', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Drawer', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Drawer', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Drawer', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Drawer', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Drawer', 'TransformOrigin', 'BottomRight');
  }
}
