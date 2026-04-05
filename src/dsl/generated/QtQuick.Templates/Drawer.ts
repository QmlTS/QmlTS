// AUTO-GENERATED — DO NOT EDIT
// Type: Drawer
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
export interface DrawerBuilder {
  id(id: string): DrawerBuilder;
  child(obj: QmlObjectBuilder): DrawerBuilder;

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
  closePolicy(value: QmlValue): DrawerBuilder;
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
  edge(value: QmlValue): DrawerBuilder;
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
  locale(value: QmlValue): DrawerBuilder;
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
  popupType(value: QmlValue): DrawerBuilder;
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
  transformOrigin(value: QmlValue): DrawerBuilder;
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
  onAboutToHide(handler: () => void): DrawerBuilder;
  onAboutToShow(handler: () => void): DrawerBuilder;
  onActiveFocusChanged(handler: () => void): DrawerBuilder;
  onAvailableHeightChanged(handler: () => void): DrawerBuilder;
  onAvailableWidthChanged(handler: () => void): DrawerBuilder;
  onBackgroundChanged(handler: () => void): DrawerBuilder;
  onBottomInsetChanged(handler: () => void): DrawerBuilder;
  onBottomMarginChanged(handler: () => void): DrawerBuilder;
  onBottomPaddingChanged(handler: () => void): DrawerBuilder;
  onClipChanged(handler: () => void): DrawerBuilder;
  onClosePolicyChanged(handler: () => void): DrawerBuilder;
  onClosed(handler: () => void): DrawerBuilder;
  onContentChildrenChanged(handler: () => void): DrawerBuilder;
  onContentHeightChanged(handler: () => void): DrawerBuilder;
  onContentItemChanged(handler: () => void): DrawerBuilder;
  onContentWidthChanged(handler: () => void): DrawerBuilder;
  onDimChanged(handler: () => void): DrawerBuilder;
  onDragMarginChanged(handler: () => void): DrawerBuilder;
  onEdgeChanged(handler: () => void): DrawerBuilder;
  onEnabledChanged(handler: () => void): DrawerBuilder;
  onEnterChanged(handler: () => void): DrawerBuilder;
  onExitChanged(handler: () => void): DrawerBuilder;
  onFocusChanged(handler: () => void): DrawerBuilder;
  onFontChanged(handler: () => void): DrawerBuilder;
  onHeightChanged(handler: () => void): DrawerBuilder;
  onHorizontalPaddingChanged(handler: () => void): DrawerBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): DrawerBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): DrawerBuilder;
  onImplicitContentHeightChanged(handler: () => void): DrawerBuilder;
  onImplicitContentWidthChanged(handler: () => void): DrawerBuilder;
  onImplicitHeightChanged(handler: () => void): DrawerBuilder;
  onImplicitWidthChanged(handler: () => void): DrawerBuilder;
  onInteractiveChanged(handler: () => void): DrawerBuilder;
  onLeftInsetChanged(handler: () => void): DrawerBuilder;
  onLeftMarginChanged(handler: () => void): DrawerBuilder;
  onLeftPaddingChanged(handler: () => void): DrawerBuilder;
  onLocaleChanged(handler: () => void): DrawerBuilder;
  onMarginsChanged(handler: () => void): DrawerBuilder;
  onMirroredChanged(handler: () => void): DrawerBuilder;
  onModalChanged(handler: () => void): DrawerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DrawerBuilder;
  onOpacityChanged(handler: () => void): DrawerBuilder;
  onOpened(handler: () => void): DrawerBuilder;
  onOpenedChanged(handler: () => void): DrawerBuilder;
  onPaddingChanged(handler: () => void): DrawerBuilder;
  onPaletteChanged(handler: () => void): DrawerBuilder;
  onPaletteCreated(handler: () => void): DrawerBuilder;
  onParentChanged(handler: () => void): DrawerBuilder;
  onPopupTypeChanged(handler: () => void): DrawerBuilder;
  onPositionChanged(handler: () => void): DrawerBuilder;
  onRightInsetChanged(handler: () => void): DrawerBuilder;
  onRightMarginChanged(handler: () => void): DrawerBuilder;
  onRightPaddingChanged(handler: () => void): DrawerBuilder;
  onScaleChanged(handler: () => void): DrawerBuilder;
  onSpacingChanged(handler: () => void): DrawerBuilder;
  onTopInsetChanged(handler: () => void): DrawerBuilder;
  onTopMarginChanged(handler: () => void): DrawerBuilder;
  onTopPaddingChanged(handler: () => void): DrawerBuilder;
  onVerticalPaddingChanged(handler: () => void): DrawerBuilder;
  onVisibleChanged(handler: () => void): DrawerBuilder;
  onWidthChanged(handler: () => void): DrawerBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): DrawerBuilder;
  onXChanged(handler: () => void): DrawerBuilder;
  onYChanged(handler: () => void): DrawerBuilder;
  onZChanged(handler: () => void): DrawerBuilder;
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

export function Drawer(): DrawerBuilder {
  return new DslBuilderImpl('Drawer') as unknown as DrawerBuilder;
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
