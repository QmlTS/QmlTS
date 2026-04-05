// AUTO-GENERATED — DO NOT EDIT
// Type: Popup
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
  closePolicy(value: QmlValue): PopupBuilder;
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
  locale(value: QmlValue): PopupBuilder;
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
  popupType(value: QmlValue): PopupBuilder;
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
  transformOrigin(value: QmlValue): PopupBuilder;
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
  onAboutToHide(handler: () => void): PopupBuilder;
  onAboutToShow(handler: () => void): PopupBuilder;
  onActiveFocusChanged(handler: () => void): PopupBuilder;
  onAvailableHeightChanged(handler: () => void): PopupBuilder;
  onAvailableWidthChanged(handler: () => void): PopupBuilder;
  onBackgroundChanged(handler: () => void): PopupBuilder;
  onBottomInsetChanged(handler: () => void): PopupBuilder;
  onBottomMarginChanged(handler: () => void): PopupBuilder;
  onBottomPaddingChanged(handler: () => void): PopupBuilder;
  onClipChanged(handler: () => void): PopupBuilder;
  onClosePolicyChanged(handler: () => void): PopupBuilder;
  onClosed(handler: () => void): PopupBuilder;
  onContentChildrenChanged(handler: () => void): PopupBuilder;
  onContentHeightChanged(handler: () => void): PopupBuilder;
  onContentItemChanged(handler: () => void): PopupBuilder;
  onContentWidthChanged(handler: () => void): PopupBuilder;
  onDimChanged(handler: () => void): PopupBuilder;
  onEnabledChanged(handler: () => void): PopupBuilder;
  onEnterChanged(handler: () => void): PopupBuilder;
  onExitChanged(handler: () => void): PopupBuilder;
  onFocusChanged(handler: () => void): PopupBuilder;
  onFontChanged(handler: () => void): PopupBuilder;
  onHeightChanged(handler: () => void): PopupBuilder;
  onHorizontalPaddingChanged(handler: () => void): PopupBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): PopupBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): PopupBuilder;
  onImplicitContentHeightChanged(handler: () => void): PopupBuilder;
  onImplicitContentWidthChanged(handler: () => void): PopupBuilder;
  onImplicitHeightChanged(handler: () => void): PopupBuilder;
  onImplicitWidthChanged(handler: () => void): PopupBuilder;
  onLeftInsetChanged(handler: () => void): PopupBuilder;
  onLeftMarginChanged(handler: () => void): PopupBuilder;
  onLeftPaddingChanged(handler: () => void): PopupBuilder;
  onLocaleChanged(handler: () => void): PopupBuilder;
  onMarginsChanged(handler: () => void): PopupBuilder;
  onMirroredChanged(handler: () => void): PopupBuilder;
  onModalChanged(handler: () => void): PopupBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PopupBuilder;
  onOpacityChanged(handler: () => void): PopupBuilder;
  onOpened(handler: () => void): PopupBuilder;
  onOpenedChanged(handler: () => void): PopupBuilder;
  onPaddingChanged(handler: () => void): PopupBuilder;
  onPaletteChanged(handler: () => void): PopupBuilder;
  onPaletteCreated(handler: () => void): PopupBuilder;
  onParentChanged(handler: () => void): PopupBuilder;
  onPopupTypeChanged(handler: () => void): PopupBuilder;
  onRightInsetChanged(handler: () => void): PopupBuilder;
  onRightMarginChanged(handler: () => void): PopupBuilder;
  onRightPaddingChanged(handler: () => void): PopupBuilder;
  onScaleChanged(handler: () => void): PopupBuilder;
  onSpacingChanged(handler: () => void): PopupBuilder;
  onTopInsetChanged(handler: () => void): PopupBuilder;
  onTopMarginChanged(handler: () => void): PopupBuilder;
  onTopPaddingChanged(handler: () => void): PopupBuilder;
  onVerticalPaddingChanged(handler: () => void): PopupBuilder;
  onVisibleChanged(handler: () => void): PopupBuilder;
  onWidthChanged(handler: () => void): PopupBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): PopupBuilder;
  onXChanged(handler: () => void): PopupBuilder;
  onYChanged(handler: () => void): PopupBuilder;
  onZChanged(handler: () => void): PopupBuilder;
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

export function Popup(): PopupBuilder {
  return new DslBuilderImpl('Popup') as unknown as PopupBuilder;
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
