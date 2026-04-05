// AUTO-GENERATED — DO NOT EDIT
// Type: Dialog
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
import type { WindowBuilder } from '../QtQuick/Window.js';
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
  closePolicy(value: QmlValue): DialogBuilder;
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
  locale(value: QmlValue): DialogBuilder;
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
  popupType(value: QmlValue): DialogBuilder;
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
  standardButtons(value: QmlValue): DialogBuilder;
  standardButtonsBind(expr: string): DialogBuilder;
  title(value: string): DialogBuilder;
  titleBind(expr: string): DialogBuilder;
  topInset(value: number): DialogBuilder;
  topInsetBind(expr: string): DialogBuilder;
  topMargin(value: number): DialogBuilder;
  topMarginBind(expr: string): DialogBuilder;
  topPadding(value: number): DialogBuilder;
  topPaddingBind(expr: string): DialogBuilder;
  transformOrigin(value: QmlValue): DialogBuilder;
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
  onAboutToHide(handler: () => void): DialogBuilder;
  onAboutToShow(handler: () => void): DialogBuilder;
  onAccepted(handler: () => void): DialogBuilder;
  onActiveFocusChanged(handler: () => void): DialogBuilder;
  onApplied(handler: () => void): DialogBuilder;
  onAvailableHeightChanged(handler: () => void): DialogBuilder;
  onAvailableWidthChanged(handler: () => void): DialogBuilder;
  onBackgroundChanged(handler: () => void): DialogBuilder;
  onBottomInsetChanged(handler: () => void): DialogBuilder;
  onBottomMarginChanged(handler: () => void): DialogBuilder;
  onBottomPaddingChanged(handler: () => void): DialogBuilder;
  onClipChanged(handler: () => void): DialogBuilder;
  onClosePolicyChanged(handler: () => void): DialogBuilder;
  onClosed(handler: () => void): DialogBuilder;
  onContentChildrenChanged(handler: () => void): DialogBuilder;
  onContentHeightChanged(handler: () => void): DialogBuilder;
  onContentItemChanged(handler: () => void): DialogBuilder;
  onContentWidthChanged(handler: () => void): DialogBuilder;
  onDimChanged(handler: () => void): DialogBuilder;
  onDiscarded(handler: () => void): DialogBuilder;
  onEnabledChanged(handler: () => void): DialogBuilder;
  onEnterChanged(handler: () => void): DialogBuilder;
  onExitChanged(handler: () => void): DialogBuilder;
  onFocusChanged(handler: () => void): DialogBuilder;
  onFontChanged(handler: () => void): DialogBuilder;
  onFooterChanged(handler: () => void): DialogBuilder;
  onHeaderChanged(handler: () => void): DialogBuilder;
  onHeightChanged(handler: () => void): DialogBuilder;
  onHelpRequested(handler: () => void): DialogBuilder;
  onHorizontalPaddingChanged(handler: () => void): DialogBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): DialogBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): DialogBuilder;
  onImplicitContentHeightChanged(handler: () => void): DialogBuilder;
  onImplicitContentWidthChanged(handler: () => void): DialogBuilder;
  onImplicitFooterHeightChanged(handler: () => void): DialogBuilder;
  onImplicitFooterWidthChanged(handler: () => void): DialogBuilder;
  onImplicitHeaderHeightChanged(handler: () => void): DialogBuilder;
  onImplicitHeaderWidthChanged(handler: () => void): DialogBuilder;
  onImplicitHeightChanged(handler: () => void): DialogBuilder;
  onImplicitWidthChanged(handler: () => void): DialogBuilder;
  onLeftInsetChanged(handler: () => void): DialogBuilder;
  onLeftMarginChanged(handler: () => void): DialogBuilder;
  onLeftPaddingChanged(handler: () => void): DialogBuilder;
  onLocaleChanged(handler: () => void): DialogBuilder;
  onMarginsChanged(handler: () => void): DialogBuilder;
  onMirroredChanged(handler: () => void): DialogBuilder;
  onModalChanged(handler: () => void): DialogBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DialogBuilder;
  onOpacityChanged(handler: () => void): DialogBuilder;
  onOpened(handler: () => void): DialogBuilder;
  onOpenedChanged(handler: () => void): DialogBuilder;
  onPaddingChanged(handler: () => void): DialogBuilder;
  onPaletteChanged(handler: () => void): DialogBuilder;
  onPaletteCreated(handler: () => void): DialogBuilder;
  onParentChanged(handler: () => void): DialogBuilder;
  onPopupTypeChanged(handler: () => void): DialogBuilder;
  onRejected(handler: () => void): DialogBuilder;
  onReset(handler: () => void): DialogBuilder;
  onResultChanged(handler: () => void): DialogBuilder;
  onRightInsetChanged(handler: () => void): DialogBuilder;
  onRightMarginChanged(handler: () => void): DialogBuilder;
  onRightPaddingChanged(handler: () => void): DialogBuilder;
  onScaleChanged(handler: () => void): DialogBuilder;
  onSpacingChanged(handler: () => void): DialogBuilder;
  onStandardButtonsChanged(handler: () => void): DialogBuilder;
  onTitleChanged(handler: () => void): DialogBuilder;
  onTopInsetChanged(handler: () => void): DialogBuilder;
  onTopMarginChanged(handler: () => void): DialogBuilder;
  onTopPaddingChanged(handler: () => void): DialogBuilder;
  onVerticalPaddingChanged(handler: () => void): DialogBuilder;
  onVisibleChanged(handler: () => void): DialogBuilder;
  onWidthChanged(handler: () => void): DialogBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): DialogBuilder;
  onXChanged(handler: () => void): DialogBuilder;
  onYChanged(handler: () => void): DialogBuilder;
  onZChanged(handler: () => void): DialogBuilder;
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

export function Dialog(): DialogBuilder {
  return new DslBuilderImpl('Dialog') as unknown as DialogBuilder;
}

export namespace Dialog {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('Dialog', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'Dialog',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'Dialog',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'Dialog',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'Dialog',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
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
