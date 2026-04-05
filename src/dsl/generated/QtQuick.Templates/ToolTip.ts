// AUTO-GENERATED — DO NOT EDIT
// Type: ToolTip
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
  closePolicy(value: QmlValue): ToolTipBuilder;
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
  locale(value: QmlValue): ToolTipBuilder;
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
  popupType(value: QmlValue): ToolTipBuilder;
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
  transformOrigin(value: QmlValue): ToolTipBuilder;
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
  onAboutToHide(handler: () => void): ToolTipBuilder;
  onAboutToShow(handler: () => void): ToolTipBuilder;
  onActiveFocusChanged(handler: () => void): ToolTipBuilder;
  onAvailableHeightChanged(handler: () => void): ToolTipBuilder;
  onAvailableWidthChanged(handler: () => void): ToolTipBuilder;
  onBackgroundChanged(handler: () => void): ToolTipBuilder;
  onBottomInsetChanged(handler: () => void): ToolTipBuilder;
  onBottomMarginChanged(handler: () => void): ToolTipBuilder;
  onBottomPaddingChanged(handler: () => void): ToolTipBuilder;
  onClipChanged(handler: () => void): ToolTipBuilder;
  onClosePolicyChanged(handler: () => void): ToolTipBuilder;
  onClosed(handler: () => void): ToolTipBuilder;
  onContentChildrenChanged(handler: () => void): ToolTipBuilder;
  onContentHeightChanged(handler: () => void): ToolTipBuilder;
  onContentItemChanged(handler: () => void): ToolTipBuilder;
  onContentWidthChanged(handler: () => void): ToolTipBuilder;
  onDelayChanged(handler: () => void): ToolTipBuilder;
  onDimChanged(handler: () => void): ToolTipBuilder;
  onEnabledChanged(handler: () => void): ToolTipBuilder;
  onEnterChanged(handler: () => void): ToolTipBuilder;
  onExitChanged(handler: () => void): ToolTipBuilder;
  onFocusChanged(handler: () => void): ToolTipBuilder;
  onFontChanged(handler: () => void): ToolTipBuilder;
  onHeightChanged(handler: () => void): ToolTipBuilder;
  onHorizontalPaddingChanged(handler: () => void): ToolTipBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ToolTipBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ToolTipBuilder;
  onImplicitContentHeightChanged(handler: () => void): ToolTipBuilder;
  onImplicitContentWidthChanged(handler: () => void): ToolTipBuilder;
  onImplicitHeightChanged(handler: () => void): ToolTipBuilder;
  onImplicitWidthChanged(handler: () => void): ToolTipBuilder;
  onLeftInsetChanged(handler: () => void): ToolTipBuilder;
  onLeftMarginChanged(handler: () => void): ToolTipBuilder;
  onLeftPaddingChanged(handler: () => void): ToolTipBuilder;
  onLocaleChanged(handler: () => void): ToolTipBuilder;
  onMarginsChanged(handler: () => void): ToolTipBuilder;
  onMirroredChanged(handler: () => void): ToolTipBuilder;
  onModalChanged(handler: () => void): ToolTipBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ToolTipBuilder;
  onOpacityChanged(handler: () => void): ToolTipBuilder;
  onOpened(handler: () => void): ToolTipBuilder;
  onOpenedChanged(handler: () => void): ToolTipBuilder;
  onPaddingChanged(handler: () => void): ToolTipBuilder;
  onPaletteChanged(handler: () => void): ToolTipBuilder;
  onPaletteCreated(handler: () => void): ToolTipBuilder;
  onParentChanged(handler: () => void): ToolTipBuilder;
  onPopupTypeChanged(handler: () => void): ToolTipBuilder;
  onRightInsetChanged(handler: () => void): ToolTipBuilder;
  onRightMarginChanged(handler: () => void): ToolTipBuilder;
  onRightPaddingChanged(handler: () => void): ToolTipBuilder;
  onScaleChanged(handler: () => void): ToolTipBuilder;
  onSpacingChanged(handler: () => void): ToolTipBuilder;
  onTextChanged(handler: () => void): ToolTipBuilder;
  onTimeoutChanged(handler: () => void): ToolTipBuilder;
  onTopInsetChanged(handler: () => void): ToolTipBuilder;
  onTopMarginChanged(handler: () => void): ToolTipBuilder;
  onTopPaddingChanged(handler: () => void): ToolTipBuilder;
  onVerticalPaddingChanged(handler: () => void): ToolTipBuilder;
  onVisibleChanged(handler: () => void): ToolTipBuilder;
  onWidthChanged(handler: () => void): ToolTipBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ToolTipBuilder;
  onXChanged(handler: () => void): ToolTipBuilder;
  onYChanged(handler: () => void): ToolTipBuilder;
  onZChanged(handler: () => void): ToolTipBuilder;
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

export function ToolTip(): ToolTipBuilder {
  return new DslBuilderImpl('ToolTip') as unknown as ToolTipBuilder;
}

export namespace ToolTip {
  export namespace ClosePolicy {
    export const NoAutoClose = createEnumToken('ToolTip', 'ClosePolicy', 'NoAutoClose');
    export const CloseOnPressOutside = createEnumToken(
      'ToolTip',
      'ClosePolicy',
      'CloseOnPressOutside',
    );
    export const CloseOnPressOutsideParent = createEnumToken(
      'ToolTip',
      'ClosePolicy',
      'CloseOnPressOutsideParent',
    );
    export const CloseOnReleaseOutside = createEnumToken(
      'ToolTip',
      'ClosePolicy',
      'CloseOnReleaseOutside',
    );
    export const CloseOnReleaseOutsideParent = createEnumToken(
      'ToolTip',
      'ClosePolicy',
      'CloseOnReleaseOutsideParent',
    );
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
