// AUTO-GENERATED — DO NOT EDIT
// Type: MenuBarItem
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { WindowBuilder } from '../QtQuick/Window.js';
import type { ActionBuilder } from './Action.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { MenuBuilder } from './Menu.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
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
export interface MenuBarItemBuilder {
  id(id: string): MenuBarItemBuilder;
  child(obj: QmlObjectBuilder): MenuBarItemBuilder;

  action(value: ActionBuilder): MenuBarItemBuilder;
  actionBind(expr: string): MenuBarItemBuilder;
  activeFocusOnTab(value: boolean): MenuBarItemBuilder;
  activeFocusOnTabBind(expr: string): MenuBarItemBuilder;
  antialiasing(value: boolean): MenuBarItemBuilder;
  antialiasingBind(expr: string): MenuBarItemBuilder;
  autoExclusive(value: boolean): MenuBarItemBuilder;
  autoExclusiveBind(expr: string): MenuBarItemBuilder;
  autoRepeat(value: boolean): MenuBarItemBuilder;
  autoRepeatBind(expr: string): MenuBarItemBuilder;
  autoRepeatDelay(value: number): MenuBarItemBuilder;
  autoRepeatDelayBind(expr: string): MenuBarItemBuilder;
  autoRepeatInterval(value: number): MenuBarItemBuilder;
  autoRepeatIntervalBind(expr: string): MenuBarItemBuilder;
  background(value: ItemBuilder): MenuBarItemBuilder;
  backgroundBind(expr: string): MenuBarItemBuilder;
  baselineOffset(value: number): MenuBarItemBuilder;
  baselineOffsetBind(expr: string): MenuBarItemBuilder;
  bottomInset(value: number): MenuBarItemBuilder;
  bottomInsetBind(expr: string): MenuBarItemBuilder;
  bottomPadding(value: number): MenuBarItemBuilder;
  bottomPaddingBind(expr: string): MenuBarItemBuilder;
  checkable(value: boolean): MenuBarItemBuilder;
  checkableBind(expr: string): MenuBarItemBuilder;
  checked(value: boolean): MenuBarItemBuilder;
  checkedBind(expr: string): MenuBarItemBuilder;
  clip(value: boolean): MenuBarItemBuilder;
  clipBind(expr: string): MenuBarItemBuilder;
  containmentMask(value: QtObjectBuilder): MenuBarItemBuilder;
  containmentMaskBind(expr: string): MenuBarItemBuilder;
  contentItem(value: ItemBuilder): MenuBarItemBuilder;
  contentItemBind(expr: string): MenuBarItemBuilder;
  display(value: QmlValue): MenuBarItemBuilder;
  displayBind(expr: string): MenuBarItemBuilder;
  down(value: boolean): MenuBarItemBuilder;
  downBind(expr: string): MenuBarItemBuilder;
  enabled(value: boolean): MenuBarItemBuilder;
  enabledBind(expr: string): MenuBarItemBuilder;
  focus(value: boolean): MenuBarItemBuilder;
  focusBind(expr: string): MenuBarItemBuilder;
  focusPolicy(value: QmlValue): MenuBarItemBuilder;
  focusPolicyBind(expr: string): MenuBarItemBuilder;
  focusReason(value: QmlValue): MenuBarItemBuilder;
  focusReasonBind(expr: string): MenuBarItemBuilder;
  font(value: QmlFont): MenuBarItemBuilder;
  fontBind(expr: string): MenuBarItemBuilder;
  height(value: number): MenuBarItemBuilder;
  heightBind(expr: string): MenuBarItemBuilder;
  highlighted(value: boolean): MenuBarItemBuilder;
  highlightedBind(expr: string): MenuBarItemBuilder;
  horizontalPadding(value: number): MenuBarItemBuilder;
  horizontalPaddingBind(expr: string): MenuBarItemBuilder;
  hoverEnabled(value: boolean): MenuBarItemBuilder;
  hoverEnabledBind(expr: string): MenuBarItemBuilder;
  icon(value: QmlValue): MenuBarItemBuilder;
  iconBind(expr: string): MenuBarItemBuilder;
  implicitHeight(value: number): MenuBarItemBuilder;
  implicitHeightBind(expr: string): MenuBarItemBuilder;
  implicitWidth(value: number): MenuBarItemBuilder;
  implicitWidthBind(expr: string): MenuBarItemBuilder;
  indicator(value: ItemBuilder): MenuBarItemBuilder;
  indicatorBind(expr: string): MenuBarItemBuilder;
  leftInset(value: number): MenuBarItemBuilder;
  leftInsetBind(expr: string): MenuBarItemBuilder;
  leftPadding(value: number): MenuBarItemBuilder;
  leftPaddingBind(expr: string): MenuBarItemBuilder;
  locale(value: QmlValue): MenuBarItemBuilder;
  localeBind(expr: string): MenuBarItemBuilder;
  menu(value: MenuBuilder): MenuBarItemBuilder;
  menuBind(expr: string): MenuBarItemBuilder;
  objectName(value: string): MenuBarItemBuilder;
  objectNameBind(expr: string): MenuBarItemBuilder;
  opacity(value: number): MenuBarItemBuilder;
  opacityBind(expr: string): MenuBarItemBuilder;
  padding(value: number): MenuBarItemBuilder;
  paddingBind(expr: string): MenuBarItemBuilder;
  palette(value: PaletteBuilder): MenuBarItemBuilder;
  paletteBind(expr: string): MenuBarItemBuilder;
  parent(value: ItemBuilder): MenuBarItemBuilder;
  parentBind(expr: string): MenuBarItemBuilder;
  rightInset(value: number): MenuBarItemBuilder;
  rightInsetBind(expr: string): MenuBarItemBuilder;
  rightPadding(value: number): MenuBarItemBuilder;
  rightPaddingBind(expr: string): MenuBarItemBuilder;
  rotation(value: number): MenuBarItemBuilder;
  rotationBind(expr: string): MenuBarItemBuilder;
  scale(value: number): MenuBarItemBuilder;
  scaleBind(expr: string): MenuBarItemBuilder;
  smooth(value: boolean): MenuBarItemBuilder;
  smoothBind(expr: string): MenuBarItemBuilder;
  spacing(value: number): MenuBarItemBuilder;
  spacingBind(expr: string): MenuBarItemBuilder;
  state(value: string): MenuBarItemBuilder;
  stateBind(expr: string): MenuBarItemBuilder;
  text(value: string): MenuBarItemBuilder;
  textBind(expr: string): MenuBarItemBuilder;
  topInset(value: number): MenuBarItemBuilder;
  topInsetBind(expr: string): MenuBarItemBuilder;
  topPadding(value: number): MenuBarItemBuilder;
  topPaddingBind(expr: string): MenuBarItemBuilder;
  transformOrigin(value: QmlValue): MenuBarItemBuilder;
  transformOriginBind(expr: string): MenuBarItemBuilder;
  verticalPadding(value: number): MenuBarItemBuilder;
  verticalPaddingBind(expr: string): MenuBarItemBuilder;
  visible(value: boolean): MenuBarItemBuilder;
  visibleBind(expr: string): MenuBarItemBuilder;
  wheelEnabled(value: boolean): MenuBarItemBuilder;
  wheelEnabledBind(expr: string): MenuBarItemBuilder;
  width(value: number): MenuBarItemBuilder;
  widthBind(expr: string): MenuBarItemBuilder;
  x(value: number): MenuBarItemBuilder;
  xBind(expr: string): MenuBarItemBuilder;
  y(value: number): MenuBarItemBuilder;
  yBind(expr: string): MenuBarItemBuilder;
  z(value: number): MenuBarItemBuilder;
  zBind(expr: string): MenuBarItemBuilder;
  onActionChanged(handler: () => void): MenuBarItemBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): MenuBarItemBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): MenuBarItemBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): MenuBarItemBuilder;
  onAutoExclusiveChanged(handler: () => void): MenuBarItemBuilder;
  onAutoRepeatChanged(handler: () => void): MenuBarItemBuilder;
  onAutoRepeatDelayChanged(handler: () => void): MenuBarItemBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): MenuBarItemBuilder;
  onAvailableHeightChanged(handler: () => void): MenuBarItemBuilder;
  onAvailableWidthChanged(handler: () => void): MenuBarItemBuilder;
  onBackgroundChanged(handler: () => void): MenuBarItemBuilder;
  onBaselineOffsetChanged(handler: () => void): MenuBarItemBuilder;
  onBottomInsetChanged(handler: () => void): MenuBarItemBuilder;
  onBottomPaddingChanged(handler: () => void): MenuBarItemBuilder;
  onCanceled(handler: () => void): MenuBarItemBuilder;
  onCheckableChanged(handler: () => void): MenuBarItemBuilder;
  onCheckedChanged(handler: () => void): MenuBarItemBuilder;
  onChildrenChanged(handler: () => void): MenuBarItemBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): MenuBarItemBuilder;
  onClicked(handler: () => void): MenuBarItemBuilder;
  onClipChanged(handler: (arg0: boolean) => void): MenuBarItemBuilder;
  onContainmentMaskChanged(handler: () => void): MenuBarItemBuilder;
  onContentItemChanged(handler: () => void): MenuBarItemBuilder;
  onDisplayChanged(handler: () => void): MenuBarItemBuilder;
  onDoubleClicked(handler: () => void): MenuBarItemBuilder;
  onDownChanged(handler: () => void): MenuBarItemBuilder;
  onEnabledChanged(handler: () => void): MenuBarItemBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): MenuBarItemBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): MenuBarItemBuilder;
  onFocusReasonChanged(handler: () => void): MenuBarItemBuilder;
  onFontChanged(handler: () => void): MenuBarItemBuilder;
  onHeightChanged(handler: () => void): MenuBarItemBuilder;
  onHighlightedChanged(handler: () => void): MenuBarItemBuilder;
  onHorizontalPaddingChanged(handler: () => void): MenuBarItemBuilder;
  onHoverEnabledChanged(handler: () => void): MenuBarItemBuilder;
  onHoveredChanged(handler: () => void): MenuBarItemBuilder;
  onIconChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitContentHeightChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitContentWidthChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitHeightChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): MenuBarItemBuilder;
  onImplicitWidthChanged(handler: () => void): MenuBarItemBuilder;
  onIndicatorChanged(handler: () => void): MenuBarItemBuilder;
  onLeftInsetChanged(handler: () => void): MenuBarItemBuilder;
  onLeftPaddingChanged(handler: () => void): MenuBarItemBuilder;
  onLocaleChanged(handler: () => void): MenuBarItemBuilder;
  onMenuBarChanged(handler: () => void): MenuBarItemBuilder;
  onMenuChanged(handler: () => void): MenuBarItemBuilder;
  onMirroredChanged(handler: () => void): MenuBarItemBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MenuBarItemBuilder;
  onOpacityChanged(handler: () => void): MenuBarItemBuilder;
  onPaddingChanged(handler: () => void): MenuBarItemBuilder;
  onPaletteChanged(handler: () => void): MenuBarItemBuilder;
  onPaletteCreated(handler: () => void): MenuBarItemBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): MenuBarItemBuilder;
  onPressAndHold(handler: () => void): MenuBarItemBuilder;
  onPressXChanged(handler: () => void): MenuBarItemBuilder;
  onPressYChanged(handler: () => void): MenuBarItemBuilder;
  onPressed(handler: () => void): MenuBarItemBuilder;
  onPressedChanged(handler: () => void): MenuBarItemBuilder;
  onReleased(handler: () => void): MenuBarItemBuilder;
  onRightInsetChanged(handler: () => void): MenuBarItemBuilder;
  onRightPaddingChanged(handler: () => void): MenuBarItemBuilder;
  onRotationChanged(handler: () => void): MenuBarItemBuilder;
  onScaleChanged(handler: () => void): MenuBarItemBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): MenuBarItemBuilder;
  onSpacingChanged(handler: () => void): MenuBarItemBuilder;
  onStateChanged(handler: (arg0: string) => void): MenuBarItemBuilder;
  onTextChanged(handler: () => void): MenuBarItemBuilder;
  onToggled(handler: () => void): MenuBarItemBuilder;
  onTopInsetChanged(handler: () => void): MenuBarItemBuilder;
  onTopPaddingChanged(handler: () => void): MenuBarItemBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): MenuBarItemBuilder;
  onTriggered(handler: () => void): MenuBarItemBuilder;
  onVerticalPaddingChanged(handler: () => void): MenuBarItemBuilder;
  onVisibleChanged(handler: () => void): MenuBarItemBuilder;
  onVisibleChildrenChanged(handler: () => void): MenuBarItemBuilder;
  onVisualFocusChanged(handler: () => void): MenuBarItemBuilder;
  onWheelEnabledChanged(handler: () => void): MenuBarItemBuilder;
  onWidthChanged(handler: () => void): MenuBarItemBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): MenuBarItemBuilder;
  onXChanged(handler: () => void): MenuBarItemBuilder;
  onYChanged(handler: () => void): MenuBarItemBuilder;
  onZChanged(handler: () => void): MenuBarItemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuBarItemBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuBarItemBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuBarItemBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuBarItemBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuBarItemBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuBarItemBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuBarItemBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuBarItemBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuBarItemBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuBarItemBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuBarItemBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuBarItemBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuBarItemBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuBarItemBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuBarItemBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuBarItemBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuBarItemBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuBarItemBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuBarItemBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuBarItemBuilder;
}

export function MenuBarItem(): MenuBarItemBuilder {
  return new DslBuilderImpl('MenuBarItem') as unknown as MenuBarItemBuilder;
}

export namespace MenuBarItem {
  export namespace Display {
    export const IconOnly = createEnumToken('MenuBarItem', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('MenuBarItem', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('MenuBarItem', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('MenuBarItem', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MenuBarItem',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MenuBarItem',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MenuBarItem', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuBarItem', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuBarItem', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuBarItem', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MenuBarItem',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MenuBarItem', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MenuBarItem',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuBarItem', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuBarItem', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuBarItem', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuBarItem', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuBarItem', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuBarItem', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuBarItem', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuBarItem', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuBarItem', 'TransformOrigin', 'BottomRight');
  }
}
