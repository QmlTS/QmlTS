// AUTO-GENERATED — DO NOT EDIT
// Type: Menu
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
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
export interface MenuBuilder {
  id(id: string): MenuBuilder;
  child(obj: QmlObjectBuilder): MenuBuilder;

  background(value: ItemBuilder): MenuBuilder;
  backgroundBind(expr: string): MenuBuilder;
  bottomInset(value: number): MenuBuilder;
  bottomInsetBind(expr: string): MenuBuilder;
  bottomMargin(value: number): MenuBuilder;
  bottomMarginBind(expr: string): MenuBuilder;
  bottomPadding(value: number): MenuBuilder;
  bottomPaddingBind(expr: string): MenuBuilder;
  cascade(value: boolean): MenuBuilder;
  cascadeBind(expr: string): MenuBuilder;
  clip(value: boolean): MenuBuilder;
  clipBind(expr: string): MenuBuilder;
  closePolicy(value: QmlEnumToken): MenuBuilder;
  closePolicyBind(expr: string): MenuBuilder;
  contentHeight(value: number): MenuBuilder;
  contentHeightBind(expr: string): MenuBuilder;
  contentItem(value: ItemBuilder): MenuBuilder;
  contentItemBind(expr: string): MenuBuilder;
  contentWidth(value: number): MenuBuilder;
  contentWidthBind(expr: string): MenuBuilder;
  currentIndex(value: number): MenuBuilder;
  currentIndexBind(expr: string): MenuBuilder;
  delegate(value: QmlComponent): MenuBuilder;
  delegateBind(expr: string): MenuBuilder;
  dim(value: boolean): MenuBuilder;
  dimBind(expr: string): MenuBuilder;
  enabled(value: boolean): MenuBuilder;
  enabledBind(expr: string): MenuBuilder;
  enter(value: TransitionBuilder): MenuBuilder;
  enterBind(expr: string): MenuBuilder;
  exit(value: TransitionBuilder): MenuBuilder;
  exitBind(expr: string): MenuBuilder;
  focus(value: boolean): MenuBuilder;
  focusBind(expr: string): MenuBuilder;
  font(value: QmlFont): MenuBuilder;
  fontBind(expr: string): MenuBuilder;
  height(value: number): MenuBuilder;
  heightBind(expr: string): MenuBuilder;
  horizontalPadding(value: number): MenuBuilder;
  horizontalPaddingBind(expr: string): MenuBuilder;
  icon(value: QmlValue): MenuBuilder;
  iconBind(expr: string): MenuBuilder;
  implicitHeight(value: number): MenuBuilder;
  implicitHeightBind(expr: string): MenuBuilder;
  implicitWidth(value: number): MenuBuilder;
  implicitWidthBind(expr: string): MenuBuilder;
  leftInset(value: number): MenuBuilder;
  leftInsetBind(expr: string): MenuBuilder;
  leftMargin(value: number): MenuBuilder;
  leftMarginBind(expr: string): MenuBuilder;
  leftPadding(value: number): MenuBuilder;
  leftPaddingBind(expr: string): MenuBuilder;
  locale(value: QmlValue): MenuBuilder;
  localeBind(expr: string): MenuBuilder;
  margins(value: number): MenuBuilder;
  marginsBind(expr: string): MenuBuilder;
  modal(value: boolean): MenuBuilder;
  modalBind(expr: string): MenuBuilder;
  objectName(value: string): MenuBuilder;
  objectNameBind(expr: string): MenuBuilder;
  opacity(value: number): MenuBuilder;
  opacityBind(expr: string): MenuBuilder;
  overlap(value: number): MenuBuilder;
  overlapBind(expr: string): MenuBuilder;
  padding(value: number): MenuBuilder;
  paddingBind(expr: string): MenuBuilder;
  palette(value: PaletteBuilder): MenuBuilder;
  paletteBind(expr: string): MenuBuilder;
  parent(value: ItemBuilder): MenuBuilder;
  parentBind(expr: string): MenuBuilder;
  popupType(value: QmlEnumToken): MenuBuilder;
  popupTypeBind(expr: string): MenuBuilder;
  rightInset(value: number): MenuBuilder;
  rightInsetBind(expr: string): MenuBuilder;
  rightMargin(value: number): MenuBuilder;
  rightMarginBind(expr: string): MenuBuilder;
  rightPadding(value: number): MenuBuilder;
  rightPaddingBind(expr: string): MenuBuilder;
  scale(value: number): MenuBuilder;
  scaleBind(expr: string): MenuBuilder;
  spacing(value: number): MenuBuilder;
  spacingBind(expr: string): MenuBuilder;
  title(value: string): MenuBuilder;
  titleBind(expr: string): MenuBuilder;
  topInset(value: number): MenuBuilder;
  topInsetBind(expr: string): MenuBuilder;
  topMargin(value: number): MenuBuilder;
  topMarginBind(expr: string): MenuBuilder;
  topPadding(value: number): MenuBuilder;
  topPaddingBind(expr: string): MenuBuilder;
  transformOrigin(value: QmlEnumToken): MenuBuilder;
  transformOriginBind(expr: string): MenuBuilder;
  verticalPadding(value: number): MenuBuilder;
  verticalPaddingBind(expr: string): MenuBuilder;
  visible(value: boolean): MenuBuilder;
  visibleBind(expr: string): MenuBuilder;
  width(value: number): MenuBuilder;
  widthBind(expr: string): MenuBuilder;
  x(value: number): MenuBuilder;
  xBind(expr: string): MenuBuilder;
  y(value: number): MenuBuilder;
  yBind(expr: string): MenuBuilder;
  z(value: number): MenuBuilder;
  zBind(expr: string): MenuBuilder;
  onAboutToHide(body: string): MenuBuilder;
  onAboutToShow(body: string): MenuBuilder;
  onActiveFocusChanged(body: string): MenuBuilder;
  onAvailableHeightChanged(body: string): MenuBuilder;
  onAvailableWidthChanged(body: string): MenuBuilder;
  onBackgroundChanged(body: string): MenuBuilder;
  onBottomInsetChanged(body: string): MenuBuilder;
  onBottomMarginChanged(body: string): MenuBuilder;
  onBottomPaddingChanged(body: string): MenuBuilder;
  onCascadeChanged(body: string): MenuBuilder;
  onClipChanged(body: string): MenuBuilder;
  onClosePolicyChanged(body: string): MenuBuilder;
  onClosed(body: string): MenuBuilder;
  onContentChildrenChanged(body: string): MenuBuilder;
  onContentHeightChanged(body: string): MenuBuilder;
  onContentItemChanged(body: string): MenuBuilder;
  onContentWidthChanged(body: string): MenuBuilder;
  onCountChanged(body: string): MenuBuilder;
  onCurrentIndexChanged(body: string): MenuBuilder;
  onDelegateChanged(body: string): MenuBuilder;
  onDimChanged(body: string): MenuBuilder;
  onEnabledChanged(body: string): MenuBuilder;
  onEnterChanged(body: string): MenuBuilder;
  onExitChanged(body: string): MenuBuilder;
  onFocusChanged(body: string): MenuBuilder;
  onFontChanged(body: string): MenuBuilder;
  onHeightChanged(body: string): MenuBuilder;
  onHorizontalPaddingChanged(body: string): MenuBuilder;
  onIconChanged(body: string): MenuBuilder;
  onImplicitBackgroundHeightChanged(body: string): MenuBuilder;
  onImplicitBackgroundWidthChanged(body: string): MenuBuilder;
  onImplicitContentHeightChanged(body: string): MenuBuilder;
  onImplicitContentWidthChanged(body: string): MenuBuilder;
  onImplicitHeightChanged(body: string): MenuBuilder;
  onImplicitWidthChanged(body: string): MenuBuilder;
  onLeftInsetChanged(body: string): MenuBuilder;
  onLeftMarginChanged(body: string): MenuBuilder;
  onLeftPaddingChanged(body: string): MenuBuilder;
  onLocaleChanged(body: string): MenuBuilder;
  onMarginsChanged(body: string): MenuBuilder;
  onMirroredChanged(body: string): MenuBuilder;
  onModalChanged(body: string): MenuBuilder;
  onObjectNameChanged(body: string): MenuBuilder;
  onOpacityChanged(body: string): MenuBuilder;
  onOpened(body: string): MenuBuilder;
  onOpenedChanged(body: string): MenuBuilder;
  onOverlapChanged(body: string): MenuBuilder;
  onPaddingChanged(body: string): MenuBuilder;
  onPaletteChanged(body: string): MenuBuilder;
  onPaletteCreated(body: string): MenuBuilder;
  onParentChanged(body: string): MenuBuilder;
  onPopupTypeChanged(body: string): MenuBuilder;
  onRightInsetChanged(body: string): MenuBuilder;
  onRightMarginChanged(body: string): MenuBuilder;
  onRightPaddingChanged(body: string): MenuBuilder;
  onScaleChanged(body: string): MenuBuilder;
  onSpacingChanged(body: string): MenuBuilder;
  onTitleChanged(body: string): MenuBuilder;
  onTopInsetChanged(body: string): MenuBuilder;
  onTopMarginChanged(body: string): MenuBuilder;
  onTopPaddingChanged(body: string): MenuBuilder;
  onVerticalPaddingChanged(body: string): MenuBuilder;
  onVisibleChanged(body: string): MenuBuilder;
  onWidthChanged(body: string): MenuBuilder;
  onWindowChanged(body: string): MenuBuilder;
  onXChanged(body: string): MenuBuilder;
  onYChanged(body: string): MenuBuilder;
  onZChanged(body: string): MenuBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuBuilder;
}

const MENU_META: TypeMetadata = {
  typeName: 'Menu',
  properties: [
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomMargin', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'cascade', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'closePolicy', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'dim', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'enter', hasValue: true, hasBinding: true },
    { name: 'exit', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
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
    { name: 'overlap', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'popupType', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCascadeChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 0 },
    { handlerName: 'onClosePolicyChanged', paramCount: 0 },
    { handlerName: 'onClosed', paramCount: 0 },
    { handlerName: 'onContentChildrenChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDimChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnterChanged', paramCount: 0 },
    { handlerName: 'onExitChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 1 },
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
    { handlerName: 'onOverlapChanged', paramCount: 0 },
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
    { handlerName: 'onTitleChanged', paramCount: 1 },
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

export function Menu(): MenuBuilder {
  return createFluentBuilder('Menu', MENU_META) as unknown as MenuBuilder;
}

export namespace Menu {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('Menu', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'Menu',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'Menu',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'Menu',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'Menu',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
    export const CloseOnEscape = createEnumToken('Menu', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('Menu', 'PopupType', 'Item');
    export const Window = createEnumToken('Menu', 'PopupType', 'Window');
    export const Native = createEnumToken('Menu', 'PopupType', 'Native');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Menu', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Menu', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Menu', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Menu', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Menu', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Menu', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Menu', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Menu', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Menu', 'TransformOrigin', 'BottomRight');
  }
}
