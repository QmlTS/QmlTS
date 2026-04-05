// AUTO-GENERATED — DO NOT EDIT
// Type: MenuItem
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
export interface MenuItemBuilder {
  id(id: string): MenuItemBuilder;
  child(obj: QmlObjectBuilder): MenuItemBuilder;

  action(value: ActionBuilder): MenuItemBuilder;
  actionBind(expr: string): MenuItemBuilder;
  activeFocusOnTab(value: boolean): MenuItemBuilder;
  activeFocusOnTabBind(expr: string): MenuItemBuilder;
  antialiasing(value: boolean): MenuItemBuilder;
  antialiasingBind(expr: string): MenuItemBuilder;
  arrow(value: ItemBuilder): MenuItemBuilder;
  arrowBind(expr: string): MenuItemBuilder;
  autoExclusive(value: boolean): MenuItemBuilder;
  autoExclusiveBind(expr: string): MenuItemBuilder;
  autoRepeat(value: boolean): MenuItemBuilder;
  autoRepeatBind(expr: string): MenuItemBuilder;
  autoRepeatDelay(value: number): MenuItemBuilder;
  autoRepeatDelayBind(expr: string): MenuItemBuilder;
  autoRepeatInterval(value: number): MenuItemBuilder;
  autoRepeatIntervalBind(expr: string): MenuItemBuilder;
  background(value: ItemBuilder): MenuItemBuilder;
  backgroundBind(expr: string): MenuItemBuilder;
  baselineOffset(value: number): MenuItemBuilder;
  baselineOffsetBind(expr: string): MenuItemBuilder;
  bottomInset(value: number): MenuItemBuilder;
  bottomInsetBind(expr: string): MenuItemBuilder;
  bottomPadding(value: number): MenuItemBuilder;
  bottomPaddingBind(expr: string): MenuItemBuilder;
  checkable(value: boolean): MenuItemBuilder;
  checkableBind(expr: string): MenuItemBuilder;
  checked(value: boolean): MenuItemBuilder;
  checkedBind(expr: string): MenuItemBuilder;
  clip(value: boolean): MenuItemBuilder;
  clipBind(expr: string): MenuItemBuilder;
  containmentMask(value: QtObjectBuilder): MenuItemBuilder;
  containmentMaskBind(expr: string): MenuItemBuilder;
  contentItem(value: ItemBuilder): MenuItemBuilder;
  contentItemBind(expr: string): MenuItemBuilder;
  display(value: QmlValue): MenuItemBuilder;
  displayBind(expr: string): MenuItemBuilder;
  down(value: boolean): MenuItemBuilder;
  downBind(expr: string): MenuItemBuilder;
  enabled(value: boolean): MenuItemBuilder;
  enabledBind(expr: string): MenuItemBuilder;
  focus(value: boolean): MenuItemBuilder;
  focusBind(expr: string): MenuItemBuilder;
  focusPolicy(value: QmlValue): MenuItemBuilder;
  focusPolicyBind(expr: string): MenuItemBuilder;
  focusReason(value: QmlValue): MenuItemBuilder;
  focusReasonBind(expr: string): MenuItemBuilder;
  font(value: QmlFont): MenuItemBuilder;
  fontBind(expr: string): MenuItemBuilder;
  height(value: number): MenuItemBuilder;
  heightBind(expr: string): MenuItemBuilder;
  highlighted(value: boolean): MenuItemBuilder;
  highlightedBind(expr: string): MenuItemBuilder;
  horizontalPadding(value: number): MenuItemBuilder;
  horizontalPaddingBind(expr: string): MenuItemBuilder;
  hoverEnabled(value: boolean): MenuItemBuilder;
  hoverEnabledBind(expr: string): MenuItemBuilder;
  icon(value: QmlValue): MenuItemBuilder;
  iconBind(expr: string): MenuItemBuilder;
  implicitHeight(value: number): MenuItemBuilder;
  implicitHeightBind(expr: string): MenuItemBuilder;
  implicitTextPadding(value: number): MenuItemBuilder;
  implicitTextPaddingBind(expr: string): MenuItemBuilder;
  implicitWidth(value: number): MenuItemBuilder;
  implicitWidthBind(expr: string): MenuItemBuilder;
  indicator(value: ItemBuilder): MenuItemBuilder;
  indicatorBind(expr: string): MenuItemBuilder;
  leftInset(value: number): MenuItemBuilder;
  leftInsetBind(expr: string): MenuItemBuilder;
  leftPadding(value: number): MenuItemBuilder;
  leftPaddingBind(expr: string): MenuItemBuilder;
  locale(value: QmlValue): MenuItemBuilder;
  localeBind(expr: string): MenuItemBuilder;
  objectName(value: string): MenuItemBuilder;
  objectNameBind(expr: string): MenuItemBuilder;
  opacity(value: number): MenuItemBuilder;
  opacityBind(expr: string): MenuItemBuilder;
  padding(value: number): MenuItemBuilder;
  paddingBind(expr: string): MenuItemBuilder;
  palette(value: PaletteBuilder): MenuItemBuilder;
  paletteBind(expr: string): MenuItemBuilder;
  parent(value: ItemBuilder): MenuItemBuilder;
  parentBind(expr: string): MenuItemBuilder;
  rightInset(value: number): MenuItemBuilder;
  rightInsetBind(expr: string): MenuItemBuilder;
  rightPadding(value: number): MenuItemBuilder;
  rightPaddingBind(expr: string): MenuItemBuilder;
  rotation(value: number): MenuItemBuilder;
  rotationBind(expr: string): MenuItemBuilder;
  scale(value: number): MenuItemBuilder;
  scaleBind(expr: string): MenuItemBuilder;
  smooth(value: boolean): MenuItemBuilder;
  smoothBind(expr: string): MenuItemBuilder;
  spacing(value: number): MenuItemBuilder;
  spacingBind(expr: string): MenuItemBuilder;
  state(value: string): MenuItemBuilder;
  stateBind(expr: string): MenuItemBuilder;
  text(value: string): MenuItemBuilder;
  textBind(expr: string): MenuItemBuilder;
  topInset(value: number): MenuItemBuilder;
  topInsetBind(expr: string): MenuItemBuilder;
  topPadding(value: number): MenuItemBuilder;
  topPaddingBind(expr: string): MenuItemBuilder;
  transformOrigin(value: QmlValue): MenuItemBuilder;
  transformOriginBind(expr: string): MenuItemBuilder;
  verticalPadding(value: number): MenuItemBuilder;
  verticalPaddingBind(expr: string): MenuItemBuilder;
  visible(value: boolean): MenuItemBuilder;
  visibleBind(expr: string): MenuItemBuilder;
  wheelEnabled(value: boolean): MenuItemBuilder;
  wheelEnabledBind(expr: string): MenuItemBuilder;
  width(value: number): MenuItemBuilder;
  widthBind(expr: string): MenuItemBuilder;
  x(value: number): MenuItemBuilder;
  xBind(expr: string): MenuItemBuilder;
  y(value: number): MenuItemBuilder;
  yBind(expr: string): MenuItemBuilder;
  z(value: number): MenuItemBuilder;
  zBind(expr: string): MenuItemBuilder;
  onActionChanged(handler: () => void): MenuItemBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): MenuItemBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): MenuItemBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): MenuItemBuilder;
  onArrowChanged(handler: () => void): MenuItemBuilder;
  onAutoExclusiveChanged(handler: () => void): MenuItemBuilder;
  onAutoRepeatChanged(handler: () => void): MenuItemBuilder;
  onAutoRepeatDelayChanged(handler: () => void): MenuItemBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): MenuItemBuilder;
  onAvailableHeightChanged(handler: () => void): MenuItemBuilder;
  onAvailableWidthChanged(handler: () => void): MenuItemBuilder;
  onBackgroundChanged(handler: () => void): MenuItemBuilder;
  onBaselineOffsetChanged(handler: () => void): MenuItemBuilder;
  onBottomInsetChanged(handler: () => void): MenuItemBuilder;
  onBottomPaddingChanged(handler: () => void): MenuItemBuilder;
  onCanceled(handler: () => void): MenuItemBuilder;
  onCheckableChanged(handler: () => void): MenuItemBuilder;
  onCheckedChanged(handler: () => void): MenuItemBuilder;
  onChildrenChanged(handler: () => void): MenuItemBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): MenuItemBuilder;
  onClicked(handler: () => void): MenuItemBuilder;
  onClipChanged(handler: (arg0: boolean) => void): MenuItemBuilder;
  onContainmentMaskChanged(handler: () => void): MenuItemBuilder;
  onContentItemChanged(handler: () => void): MenuItemBuilder;
  onDisplayChanged(handler: () => void): MenuItemBuilder;
  onDoubleClicked(handler: () => void): MenuItemBuilder;
  onDownChanged(handler: () => void): MenuItemBuilder;
  onEnabledChanged(handler: () => void): MenuItemBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): MenuItemBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): MenuItemBuilder;
  onFocusReasonChanged(handler: () => void): MenuItemBuilder;
  onFontChanged(handler: () => void): MenuItemBuilder;
  onHeightChanged(handler: () => void): MenuItemBuilder;
  onHighlightedChanged(handler: () => void): MenuItemBuilder;
  onHorizontalPaddingChanged(handler: () => void): MenuItemBuilder;
  onHoverEnabledChanged(handler: () => void): MenuItemBuilder;
  onHoveredChanged(handler: () => void): MenuItemBuilder;
  onIconChanged(handler: () => void): MenuItemBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): MenuItemBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): MenuItemBuilder;
  onImplicitContentHeightChanged(handler: () => void): MenuItemBuilder;
  onImplicitContentWidthChanged(handler: () => void): MenuItemBuilder;
  onImplicitHeightChanged(handler: () => void): MenuItemBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): MenuItemBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): MenuItemBuilder;
  onImplicitTextPaddingChanged(handler: () => void): MenuItemBuilder;
  onImplicitWidthChanged(handler: () => void): MenuItemBuilder;
  onIndicatorChanged(handler: () => void): MenuItemBuilder;
  onLeftInsetChanged(handler: () => void): MenuItemBuilder;
  onLeftPaddingChanged(handler: () => void): MenuItemBuilder;
  onLocaleChanged(handler: () => void): MenuItemBuilder;
  onMenuChanged(handler: () => void): MenuItemBuilder;
  onMirroredChanged(handler: () => void): MenuItemBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MenuItemBuilder;
  onOpacityChanged(handler: () => void): MenuItemBuilder;
  onPaddingChanged(handler: () => void): MenuItemBuilder;
  onPaletteChanged(handler: () => void): MenuItemBuilder;
  onPaletteCreated(handler: () => void): MenuItemBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): MenuItemBuilder;
  onPressAndHold(handler: () => void): MenuItemBuilder;
  onPressXChanged(handler: () => void): MenuItemBuilder;
  onPressYChanged(handler: () => void): MenuItemBuilder;
  onPressed(handler: () => void): MenuItemBuilder;
  onPressedChanged(handler: () => void): MenuItemBuilder;
  onReleased(handler: () => void): MenuItemBuilder;
  onRightInsetChanged(handler: () => void): MenuItemBuilder;
  onRightPaddingChanged(handler: () => void): MenuItemBuilder;
  onRotationChanged(handler: () => void): MenuItemBuilder;
  onScaleChanged(handler: () => void): MenuItemBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): MenuItemBuilder;
  onSpacingChanged(handler: () => void): MenuItemBuilder;
  onStateChanged(handler: (arg0: string) => void): MenuItemBuilder;
  onSubMenuChanged(handler: () => void): MenuItemBuilder;
  onTextChanged(handler: () => void): MenuItemBuilder;
  onTextPaddingChanged(handler: () => void): MenuItemBuilder;
  onToggled(handler: () => void): MenuItemBuilder;
  onTopInsetChanged(handler: () => void): MenuItemBuilder;
  onTopPaddingChanged(handler: () => void): MenuItemBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): MenuItemBuilder;
  onTriggered(handler: () => void): MenuItemBuilder;
  onVerticalPaddingChanged(handler: () => void): MenuItemBuilder;
  onVisibleChanged(handler: () => void): MenuItemBuilder;
  onVisibleChildrenChanged(handler: () => void): MenuItemBuilder;
  onVisualFocusChanged(handler: () => void): MenuItemBuilder;
  onWheelEnabledChanged(handler: () => void): MenuItemBuilder;
  onWidthChanged(handler: () => void): MenuItemBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): MenuItemBuilder;
  onXChanged(handler: () => void): MenuItemBuilder;
  onYChanged(handler: () => void): MenuItemBuilder;
  onZChanged(handler: () => void): MenuItemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuItemBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuItemBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuItemBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuItemBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuItemBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuItemBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuItemBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuItemBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuItemBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuItemBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuItemBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuItemBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuItemBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuItemBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuItemBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuItemBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuItemBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuItemBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuItemBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuItemBuilder;
}

export function MenuItem(): MenuItemBuilder {
  return new DslBuilderImpl('MenuItem') as unknown as MenuItemBuilder;
}

export namespace MenuItem {
  export namespace Display {
    export const IconOnly = createEnumToken('MenuItem', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('MenuItem', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('MenuItem', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('MenuItem', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MenuItem',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MenuItem',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MenuItem', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuItem', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuItem', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuItem', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MenuItem',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MenuItem', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MenuItem',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuItem', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuItem', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuItem', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuItem', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuItem', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuItem', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuItem', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuItem', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuItem', 'TransformOrigin', 'BottomRight');
  }
}
