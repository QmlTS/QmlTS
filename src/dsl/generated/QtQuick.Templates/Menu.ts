// AUTO-GENERATED — DO NOT EDIT
// Type: Menu
// Generated from Qt 6.11.0

import type { QmlComponent, QmlFont, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
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
  closePolicy(value: QmlValue): MenuBuilder;
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
  popupType(value: QmlValue): MenuBuilder;
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
  transformOrigin(value: QmlValue): MenuBuilder;
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
  onAboutToHide(handler: () => void): MenuBuilder;
  onAboutToShow(handler: () => void): MenuBuilder;
  onActiveFocusChanged(handler: () => void): MenuBuilder;
  onAvailableHeightChanged(handler: () => void): MenuBuilder;
  onAvailableWidthChanged(handler: () => void): MenuBuilder;
  onBackgroundChanged(handler: () => void): MenuBuilder;
  onBottomInsetChanged(handler: () => void): MenuBuilder;
  onBottomMarginChanged(handler: () => void): MenuBuilder;
  onBottomPaddingChanged(handler: () => void): MenuBuilder;
  onCascadeChanged(handler: (cascade: boolean) => void): MenuBuilder;
  onClipChanged(handler: () => void): MenuBuilder;
  onClosePolicyChanged(handler: () => void): MenuBuilder;
  onClosed(handler: () => void): MenuBuilder;
  onContentChildrenChanged(handler: () => void): MenuBuilder;
  onContentHeightChanged(handler: () => void): MenuBuilder;
  onContentItemChanged(handler: () => void): MenuBuilder;
  onContentWidthChanged(handler: () => void): MenuBuilder;
  onCountChanged(handler: () => void): MenuBuilder;
  onCurrentIndexChanged(handler: () => void): MenuBuilder;
  onDelegateChanged(handler: () => void): MenuBuilder;
  onDimChanged(handler: () => void): MenuBuilder;
  onEnabledChanged(handler: () => void): MenuBuilder;
  onEnterChanged(handler: () => void): MenuBuilder;
  onExitChanged(handler: () => void): MenuBuilder;
  onFocusChanged(handler: () => void): MenuBuilder;
  onFontChanged(handler: () => void): MenuBuilder;
  onHeightChanged(handler: () => void): MenuBuilder;
  onHorizontalPaddingChanged(handler: () => void): MenuBuilder;
  onIconChanged(handler: (icon: QmlValue) => void): MenuBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): MenuBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): MenuBuilder;
  onImplicitContentHeightChanged(handler: () => void): MenuBuilder;
  onImplicitContentWidthChanged(handler: () => void): MenuBuilder;
  onImplicitHeightChanged(handler: () => void): MenuBuilder;
  onImplicitWidthChanged(handler: () => void): MenuBuilder;
  onLeftInsetChanged(handler: () => void): MenuBuilder;
  onLeftMarginChanged(handler: () => void): MenuBuilder;
  onLeftPaddingChanged(handler: () => void): MenuBuilder;
  onLocaleChanged(handler: () => void): MenuBuilder;
  onMarginsChanged(handler: () => void): MenuBuilder;
  onMirroredChanged(handler: () => void): MenuBuilder;
  onModalChanged(handler: () => void): MenuBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MenuBuilder;
  onOpacityChanged(handler: () => void): MenuBuilder;
  onOpened(handler: () => void): MenuBuilder;
  onOpenedChanged(handler: () => void): MenuBuilder;
  onOverlapChanged(handler: () => void): MenuBuilder;
  onPaddingChanged(handler: () => void): MenuBuilder;
  onPaletteChanged(handler: () => void): MenuBuilder;
  onPaletteCreated(handler: () => void): MenuBuilder;
  onParentChanged(handler: () => void): MenuBuilder;
  onPopupTypeChanged(handler: () => void): MenuBuilder;
  onRightInsetChanged(handler: () => void): MenuBuilder;
  onRightMarginChanged(handler: () => void): MenuBuilder;
  onRightPaddingChanged(handler: () => void): MenuBuilder;
  onScaleChanged(handler: () => void): MenuBuilder;
  onSpacingChanged(handler: () => void): MenuBuilder;
  onTitleChanged(handler: (title: string) => void): MenuBuilder;
  onTopInsetChanged(handler: () => void): MenuBuilder;
  onTopMarginChanged(handler: () => void): MenuBuilder;
  onTopPaddingChanged(handler: () => void): MenuBuilder;
  onVerticalPaddingChanged(handler: () => void): MenuBuilder;
  onVisibleChanged(handler: () => void): MenuBuilder;
  onWidthChanged(handler: () => void): MenuBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): MenuBuilder;
  onXChanged(handler: () => void): MenuBuilder;
  onYChanged(handler: () => void): MenuBuilder;
  onZChanged(handler: () => void): MenuBuilder;
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

export function Menu(): MenuBuilder {
  return new DslBuilderImpl('Menu') as unknown as MenuBuilder;
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
