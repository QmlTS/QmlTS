// AUTO-GENERATED — DO NOT EDIT
// Type: Dialog
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
export interface DialogBuilder {
  id(id: string): DialogBuilder;
  child(obj: QmlObjectBuilder): DialogBuilder;

  background(value: ItemBuilder): DialogBuilder;
  backgroundBind(expr: string): DialogBuilder;
  bottomInset(value: number): DialogBuilder;
  bottomInsetBind(expr: string): DialogBuilder;
  bottomMargin(value: number): DialogBuilder;
  bottomMarginBind(expr: string): DialogBuilder;
  bottomPadding(value: number): DialogBuilder;
  bottomPaddingBind(expr: string): DialogBuilder;
  clip(value: boolean): DialogBuilder;
  clipBind(expr: string): DialogBuilder;
  closePolicy(value: QmlEnumToken): DialogBuilder;
  closePolicyBind(expr: string): DialogBuilder;
  contentHeight(value: number): DialogBuilder;
  contentHeightBind(expr: string): DialogBuilder;
  contentItem(value: ItemBuilder): DialogBuilder;
  contentItemBind(expr: string): DialogBuilder;
  contentWidth(value: number): DialogBuilder;
  contentWidthBind(expr: string): DialogBuilder;
  dim(value: boolean): DialogBuilder;
  dimBind(expr: string): DialogBuilder;
  enabled(value: boolean): DialogBuilder;
  enabledBind(expr: string): DialogBuilder;
  enter(value: TransitionBuilder): DialogBuilder;
  enterBind(expr: string): DialogBuilder;
  exit(value: TransitionBuilder): DialogBuilder;
  exitBind(expr: string): DialogBuilder;
  focus(value: boolean): DialogBuilder;
  focusBind(expr: string): DialogBuilder;
  font(value: QmlFont): DialogBuilder;
  fontBind(expr: string): DialogBuilder;
  footer(value: ItemBuilder): DialogBuilder;
  footerBind(expr: string): DialogBuilder;
  header(value: ItemBuilder): DialogBuilder;
  headerBind(expr: string): DialogBuilder;
  height(value: number): DialogBuilder;
  heightBind(expr: string): DialogBuilder;
  horizontalPadding(value: number): DialogBuilder;
  horizontalPaddingBind(expr: string): DialogBuilder;
  implicitHeight(value: number): DialogBuilder;
  implicitHeightBind(expr: string): DialogBuilder;
  implicitWidth(value: number): DialogBuilder;
  implicitWidthBind(expr: string): DialogBuilder;
  leftInset(value: number): DialogBuilder;
  leftInsetBind(expr: string): DialogBuilder;
  leftMargin(value: number): DialogBuilder;
  leftMarginBind(expr: string): DialogBuilder;
  leftPadding(value: number): DialogBuilder;
  leftPaddingBind(expr: string): DialogBuilder;
  locale(value: string): DialogBuilder;
  localeBind(expr: string): DialogBuilder;
  margins(value: number): DialogBuilder;
  marginsBind(expr: string): DialogBuilder;
  modal(value: boolean): DialogBuilder;
  modalBind(expr: string): DialogBuilder;
  objectName(value: string): DialogBuilder;
  objectNameBind(expr: string): DialogBuilder;
  opacity(value: number): DialogBuilder;
  opacityBind(expr: string): DialogBuilder;
  padding(value: number): DialogBuilder;
  paddingBind(expr: string): DialogBuilder;
  palette(value: PaletteBuilder): DialogBuilder;
  paletteBind(expr: string): DialogBuilder;
  parent(value: ItemBuilder): DialogBuilder;
  parentBind(expr: string): DialogBuilder;
  popupType(value: QmlEnumToken): DialogBuilder;
  popupTypeBind(expr: string): DialogBuilder;
  result(value: number): DialogBuilder;
  resultBind(expr: string): DialogBuilder;
  rightInset(value: number): DialogBuilder;
  rightInsetBind(expr: string): DialogBuilder;
  rightMargin(value: number): DialogBuilder;
  rightMarginBind(expr: string): DialogBuilder;
  rightPadding(value: number): DialogBuilder;
  rightPaddingBind(expr: string): DialogBuilder;
  scale(value: number): DialogBuilder;
  scaleBind(expr: string): DialogBuilder;
  spacing(value: number): DialogBuilder;
  spacingBind(expr: string): DialogBuilder;
  standardButtons(value: QmlEnumToken): DialogBuilder;
  standardButtonsBind(expr: string): DialogBuilder;
  title(value: string): DialogBuilder;
  titleBind(expr: string): DialogBuilder;
  topInset(value: number): DialogBuilder;
  topInsetBind(expr: string): DialogBuilder;
  topMargin(value: number): DialogBuilder;
  topMarginBind(expr: string): DialogBuilder;
  topPadding(value: number): DialogBuilder;
  topPaddingBind(expr: string): DialogBuilder;
  transformOrigin(value: QmlEnumToken): DialogBuilder;
  transformOriginBind(expr: string): DialogBuilder;
  verticalPadding(value: number): DialogBuilder;
  verticalPaddingBind(expr: string): DialogBuilder;
  visible(value: boolean): DialogBuilder;
  visibleBind(expr: string): DialogBuilder;
  width(value: number): DialogBuilder;
  widthBind(expr: string): DialogBuilder;
  x(value: number): DialogBuilder;
  xBind(expr: string): DialogBuilder;
  y(value: number): DialogBuilder;
  yBind(expr: string): DialogBuilder;
  z(value: number): DialogBuilder;
  zBind(expr: string): DialogBuilder;
  onAboutToHide(body: string): DialogBuilder;
  onAboutToShow(body: string): DialogBuilder;
  onAccepted(body: string): DialogBuilder;
  onActiveFocusChanged(body: string): DialogBuilder;
  onApplied(body: string): DialogBuilder;
  onAvailableHeightChanged(body: string): DialogBuilder;
  onAvailableWidthChanged(body: string): DialogBuilder;
  onBackgroundChanged(body: string): DialogBuilder;
  onBottomInsetChanged(body: string): DialogBuilder;
  onBottomMarginChanged(body: string): DialogBuilder;
  onBottomPaddingChanged(body: string): DialogBuilder;
  onClipChanged(body: string): DialogBuilder;
  onClosePolicyChanged(body: string): DialogBuilder;
  onClosed(body: string): DialogBuilder;
  onContentChildrenChanged(body: string): DialogBuilder;
  onContentHeightChanged(body: string): DialogBuilder;
  onContentItemChanged(body: string): DialogBuilder;
  onContentWidthChanged(body: string): DialogBuilder;
  onDimChanged(body: string): DialogBuilder;
  onDiscarded(body: string): DialogBuilder;
  onEnabledChanged(body: string): DialogBuilder;
  onEnterChanged(body: string): DialogBuilder;
  onExitChanged(body: string): DialogBuilder;
  onFocusChanged(body: string): DialogBuilder;
  onFontChanged(body: string): DialogBuilder;
  onFooterChanged(body: string): DialogBuilder;
  onHeaderChanged(body: string): DialogBuilder;
  onHeightChanged(body: string): DialogBuilder;
  onHelpRequested(body: string): DialogBuilder;
  onHorizontalPaddingChanged(body: string): DialogBuilder;
  onImplicitBackgroundHeightChanged(body: string): DialogBuilder;
  onImplicitBackgroundWidthChanged(body: string): DialogBuilder;
  onImplicitContentHeightChanged(body: string): DialogBuilder;
  onImplicitContentWidthChanged(body: string): DialogBuilder;
  onImplicitFooterHeightChanged(body: string): DialogBuilder;
  onImplicitFooterWidthChanged(body: string): DialogBuilder;
  onImplicitHeaderHeightChanged(body: string): DialogBuilder;
  onImplicitHeaderWidthChanged(body: string): DialogBuilder;
  onImplicitHeightChanged(body: string): DialogBuilder;
  onImplicitWidthChanged(body: string): DialogBuilder;
  onLeftInsetChanged(body: string): DialogBuilder;
  onLeftMarginChanged(body: string): DialogBuilder;
  onLeftPaddingChanged(body: string): DialogBuilder;
  onLocaleChanged(body: string): DialogBuilder;
  onMarginsChanged(body: string): DialogBuilder;
  onMirroredChanged(body: string): DialogBuilder;
  onModalChanged(body: string): DialogBuilder;
  onObjectNameChanged(body: string): DialogBuilder;
  onOpacityChanged(body: string): DialogBuilder;
  onOpened(body: string): DialogBuilder;
  onOpenedChanged(body: string): DialogBuilder;
  onPaddingChanged(body: string): DialogBuilder;
  onPaletteChanged(body: string): DialogBuilder;
  onPaletteCreated(body: string): DialogBuilder;
  onParentChanged(body: string): DialogBuilder;
  onPopupTypeChanged(body: string): DialogBuilder;
  onRejected(body: string): DialogBuilder;
  onReset(body: string): DialogBuilder;
  onResultChanged(body: string): DialogBuilder;
  onRightInsetChanged(body: string): DialogBuilder;
  onRightMarginChanged(body: string): DialogBuilder;
  onRightPaddingChanged(body: string): DialogBuilder;
  onScaleChanged(body: string): DialogBuilder;
  onSpacingChanged(body: string): DialogBuilder;
  onStandardButtonsChanged(body: string): DialogBuilder;
  onTitleChanged(body: string): DialogBuilder;
  onTopInsetChanged(body: string): DialogBuilder;
  onTopMarginChanged(body: string): DialogBuilder;
  onTopPaddingChanged(body: string): DialogBuilder;
  onVerticalPaddingChanged(body: string): DialogBuilder;
  onVisibleChanged(body: string): DialogBuilder;
  onWidthChanged(body: string): DialogBuilder;
  onWindowChanged(body: string): DialogBuilder;
  onXChanged(body: string): DialogBuilder;
  onYChanged(body: string): DialogBuilder;
  onZChanged(body: string): DialogBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DialogBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DialogBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DialogBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DialogBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DialogBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DialogBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DialogBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DialogBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DialogBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DialogBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DialogBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DialogBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DialogBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DialogBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DialogBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DialogBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DialogBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DialogBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DialogBuilder;
}

const DIALOG_META: TypeMetadata = {
  typeName: 'Dialog',
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
    { name: 'footer', hasValue: true, hasBinding: true },
    { name: 'header', hasValue: true, hasBinding: true },
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
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'standardButtons', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 0 },
    { handlerName: 'onApplied', paramCount: 0 },
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
    { handlerName: 'onDiscarded', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnterChanged', paramCount: 0 },
    { handlerName: 'onExitChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFooterChanged', paramCount: 0 },
    { handlerName: 'onHeaderChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHelpRequested', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
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
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onReset', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightMarginChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStandardButtonsChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
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

export function Dialog(): DialogBuilder {
  return createFluentBuilder('Dialog', DIALOG_META) as unknown as DialogBuilder;
}

export namespace Dialog {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('Dialog', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken('Dialog', 'ClosePolicy', 'CloseOnPressOutside');
    export const CloseOnPressOutsideParent = createEnumToken('Dialog', 'ClosePolicy', 'CloseOnPressOutsideParent');
    export const CloseOnReleaseOutside = createEnumToken('Dialog', 'ClosePolicy', 'CloseOnReleaseOutside');
    export const CloseOnReleaseOutsideParent = createEnumToken('Dialog', 'ClosePolicy', 'CloseOnReleaseOutsideParent');
    export const CloseOnEscape = createEnumToken('Dialog', 'ClosePolicy', 'CloseOnEscape');
  }
  export namespace PopupType {
    export const Item = createEnumToken('Dialog', 'PopupType', 'Item');
    export const Window = createEnumToken('Dialog', 'PopupType', 'Window');
    export const Native = createEnumToken('Dialog', 'PopupType', 'Native');
  }
  export namespace StandardCode {
    export const Rejected = createEnumToken('Dialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('Dialog', 'StandardCode', 'Accepted');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Dialog', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Dialog', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Dialog', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Dialog', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Dialog', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Dialog', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Dialog', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Dialog', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Dialog', 'TransformOrigin', 'BottomRight');
  }
}
