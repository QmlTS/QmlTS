// AUTO-GENERATED — DO NOT EDIT
// Type: ItemDelegate
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
export interface ItemDelegateBuilder {
  id(id: string): ItemDelegateBuilder;
  child(obj: QmlObjectBuilder): ItemDelegateBuilder;

  action(value: ActionBuilder): ItemDelegateBuilder;
  actionBind(expr: string): ItemDelegateBuilder;
  activeFocusOnTab(value: boolean): ItemDelegateBuilder;
  activeFocusOnTabBind(expr: string): ItemDelegateBuilder;
  antialiasing(value: boolean): ItemDelegateBuilder;
  antialiasingBind(expr: string): ItemDelegateBuilder;
  autoExclusive(value: boolean): ItemDelegateBuilder;
  autoExclusiveBind(expr: string): ItemDelegateBuilder;
  autoRepeat(value: boolean): ItemDelegateBuilder;
  autoRepeatBind(expr: string): ItemDelegateBuilder;
  autoRepeatDelay(value: number): ItemDelegateBuilder;
  autoRepeatDelayBind(expr: string): ItemDelegateBuilder;
  autoRepeatInterval(value: number): ItemDelegateBuilder;
  autoRepeatIntervalBind(expr: string): ItemDelegateBuilder;
  background(value: ItemBuilder): ItemDelegateBuilder;
  backgroundBind(expr: string): ItemDelegateBuilder;
  baselineOffset(value: number): ItemDelegateBuilder;
  baselineOffsetBind(expr: string): ItemDelegateBuilder;
  bottomInset(value: number): ItemDelegateBuilder;
  bottomInsetBind(expr: string): ItemDelegateBuilder;
  bottomPadding(value: number): ItemDelegateBuilder;
  bottomPaddingBind(expr: string): ItemDelegateBuilder;
  checkable(value: boolean): ItemDelegateBuilder;
  checkableBind(expr: string): ItemDelegateBuilder;
  checked(value: boolean): ItemDelegateBuilder;
  checkedBind(expr: string): ItemDelegateBuilder;
  clip(value: boolean): ItemDelegateBuilder;
  clipBind(expr: string): ItemDelegateBuilder;
  containmentMask(value: QtObjectBuilder): ItemDelegateBuilder;
  containmentMaskBind(expr: string): ItemDelegateBuilder;
  contentItem(value: ItemBuilder): ItemDelegateBuilder;
  contentItemBind(expr: string): ItemDelegateBuilder;
  display(value: QmlValue): ItemDelegateBuilder;
  displayBind(expr: string): ItemDelegateBuilder;
  down(value: boolean): ItemDelegateBuilder;
  downBind(expr: string): ItemDelegateBuilder;
  enabled(value: boolean): ItemDelegateBuilder;
  enabledBind(expr: string): ItemDelegateBuilder;
  focus(value: boolean): ItemDelegateBuilder;
  focusBind(expr: string): ItemDelegateBuilder;
  focusPolicy(value: QmlValue): ItemDelegateBuilder;
  focusPolicyBind(expr: string): ItemDelegateBuilder;
  focusReason(value: QmlValue): ItemDelegateBuilder;
  focusReasonBind(expr: string): ItemDelegateBuilder;
  font(value: QmlFont): ItemDelegateBuilder;
  fontBind(expr: string): ItemDelegateBuilder;
  height(value: number): ItemDelegateBuilder;
  heightBind(expr: string): ItemDelegateBuilder;
  highlighted(value: boolean): ItemDelegateBuilder;
  highlightedBind(expr: string): ItemDelegateBuilder;
  horizontalPadding(value: number): ItemDelegateBuilder;
  horizontalPaddingBind(expr: string): ItemDelegateBuilder;
  hoverEnabled(value: boolean): ItemDelegateBuilder;
  hoverEnabledBind(expr: string): ItemDelegateBuilder;
  icon(value: QmlValue): ItemDelegateBuilder;
  iconBind(expr: string): ItemDelegateBuilder;
  implicitHeight(value: number): ItemDelegateBuilder;
  implicitHeightBind(expr: string): ItemDelegateBuilder;
  implicitWidth(value: number): ItemDelegateBuilder;
  implicitWidthBind(expr: string): ItemDelegateBuilder;
  indicator(value: ItemBuilder): ItemDelegateBuilder;
  indicatorBind(expr: string): ItemDelegateBuilder;
  leftInset(value: number): ItemDelegateBuilder;
  leftInsetBind(expr: string): ItemDelegateBuilder;
  leftPadding(value: number): ItemDelegateBuilder;
  leftPaddingBind(expr: string): ItemDelegateBuilder;
  locale(value: QmlValue): ItemDelegateBuilder;
  localeBind(expr: string): ItemDelegateBuilder;
  objectName(value: string): ItemDelegateBuilder;
  objectNameBind(expr: string): ItemDelegateBuilder;
  opacity(value: number): ItemDelegateBuilder;
  opacityBind(expr: string): ItemDelegateBuilder;
  padding(value: number): ItemDelegateBuilder;
  paddingBind(expr: string): ItemDelegateBuilder;
  palette(value: PaletteBuilder): ItemDelegateBuilder;
  paletteBind(expr: string): ItemDelegateBuilder;
  parent(value: ItemBuilder): ItemDelegateBuilder;
  parentBind(expr: string): ItemDelegateBuilder;
  rightInset(value: number): ItemDelegateBuilder;
  rightInsetBind(expr: string): ItemDelegateBuilder;
  rightPadding(value: number): ItemDelegateBuilder;
  rightPaddingBind(expr: string): ItemDelegateBuilder;
  rotation(value: number): ItemDelegateBuilder;
  rotationBind(expr: string): ItemDelegateBuilder;
  scale(value: number): ItemDelegateBuilder;
  scaleBind(expr: string): ItemDelegateBuilder;
  smooth(value: boolean): ItemDelegateBuilder;
  smoothBind(expr: string): ItemDelegateBuilder;
  spacing(value: number): ItemDelegateBuilder;
  spacingBind(expr: string): ItemDelegateBuilder;
  state(value: string): ItemDelegateBuilder;
  stateBind(expr: string): ItemDelegateBuilder;
  text(value: string): ItemDelegateBuilder;
  textBind(expr: string): ItemDelegateBuilder;
  topInset(value: number): ItemDelegateBuilder;
  topInsetBind(expr: string): ItemDelegateBuilder;
  topPadding(value: number): ItemDelegateBuilder;
  topPaddingBind(expr: string): ItemDelegateBuilder;
  transformOrigin(value: QmlValue): ItemDelegateBuilder;
  transformOriginBind(expr: string): ItemDelegateBuilder;
  verticalPadding(value: number): ItemDelegateBuilder;
  verticalPaddingBind(expr: string): ItemDelegateBuilder;
  visible(value: boolean): ItemDelegateBuilder;
  visibleBind(expr: string): ItemDelegateBuilder;
  wheelEnabled(value: boolean): ItemDelegateBuilder;
  wheelEnabledBind(expr: string): ItemDelegateBuilder;
  width(value: number): ItemDelegateBuilder;
  widthBind(expr: string): ItemDelegateBuilder;
  x(value: number): ItemDelegateBuilder;
  xBind(expr: string): ItemDelegateBuilder;
  y(value: number): ItemDelegateBuilder;
  yBind(expr: string): ItemDelegateBuilder;
  z(value: number): ItemDelegateBuilder;
  zBind(expr: string): ItemDelegateBuilder;
  onActionChanged(handler: () => void): ItemDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ItemDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ItemDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ItemDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): ItemDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): ItemDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): ItemDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): ItemDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): ItemDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): ItemDelegateBuilder;
  onBackgroundChanged(handler: () => void): ItemDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): ItemDelegateBuilder;
  onBottomInsetChanged(handler: () => void): ItemDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): ItemDelegateBuilder;
  onCanceled(handler: () => void): ItemDelegateBuilder;
  onCheckableChanged(handler: () => void): ItemDelegateBuilder;
  onCheckedChanged(handler: () => void): ItemDelegateBuilder;
  onChildrenChanged(handler: () => void): ItemDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ItemDelegateBuilder;
  onClicked(handler: () => void): ItemDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ItemDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): ItemDelegateBuilder;
  onContentItemChanged(handler: () => void): ItemDelegateBuilder;
  onDisplayChanged(handler: () => void): ItemDelegateBuilder;
  onDoubleClicked(handler: () => void): ItemDelegateBuilder;
  onDownChanged(handler: () => void): ItemDelegateBuilder;
  onEnabledChanged(handler: () => void): ItemDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ItemDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ItemDelegateBuilder;
  onFocusReasonChanged(handler: () => void): ItemDelegateBuilder;
  onFontChanged(handler: () => void): ItemDelegateBuilder;
  onHeightChanged(handler: () => void): ItemDelegateBuilder;
  onHighlightedChanged(handler: () => void): ItemDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): ItemDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): ItemDelegateBuilder;
  onHoveredChanged(handler: () => void): ItemDelegateBuilder;
  onIconChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): ItemDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): ItemDelegateBuilder;
  onIndicatorChanged(handler: () => void): ItemDelegateBuilder;
  onLeftInsetChanged(handler: () => void): ItemDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): ItemDelegateBuilder;
  onLocaleChanged(handler: () => void): ItemDelegateBuilder;
  onMirroredChanged(handler: () => void): ItemDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ItemDelegateBuilder;
  onOpacityChanged(handler: () => void): ItemDelegateBuilder;
  onPaddingChanged(handler: () => void): ItemDelegateBuilder;
  onPaletteChanged(handler: () => void): ItemDelegateBuilder;
  onPaletteCreated(handler: () => void): ItemDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ItemDelegateBuilder;
  onPressAndHold(handler: () => void): ItemDelegateBuilder;
  onPressXChanged(handler: () => void): ItemDelegateBuilder;
  onPressYChanged(handler: () => void): ItemDelegateBuilder;
  onPressed(handler: () => void): ItemDelegateBuilder;
  onPressedChanged(handler: () => void): ItemDelegateBuilder;
  onReleased(handler: () => void): ItemDelegateBuilder;
  onRightInsetChanged(handler: () => void): ItemDelegateBuilder;
  onRightPaddingChanged(handler: () => void): ItemDelegateBuilder;
  onRotationChanged(handler: () => void): ItemDelegateBuilder;
  onScaleChanged(handler: () => void): ItemDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ItemDelegateBuilder;
  onSpacingChanged(handler: () => void): ItemDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): ItemDelegateBuilder;
  onTextChanged(handler: () => void): ItemDelegateBuilder;
  onToggled(handler: () => void): ItemDelegateBuilder;
  onTopInsetChanged(handler: () => void): ItemDelegateBuilder;
  onTopPaddingChanged(handler: () => void): ItemDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ItemDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): ItemDelegateBuilder;
  onVisibleChanged(handler: () => void): ItemDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): ItemDelegateBuilder;
  onVisualFocusChanged(handler: () => void): ItemDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): ItemDelegateBuilder;
  onWidthChanged(handler: () => void): ItemDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ItemDelegateBuilder;
  onXChanged(handler: () => void): ItemDelegateBuilder;
  onYChanged(handler: () => void): ItemDelegateBuilder;
  onZChanged(handler: () => void): ItemDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ItemDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): ItemDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ItemDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ItemDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ItemDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ItemDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ItemDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ItemDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ItemDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ItemDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ItemDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ItemDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ItemDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ItemDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ItemDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ItemDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ItemDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ItemDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ItemDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ItemDelegateBuilder;
}

export function ItemDelegate(): ItemDelegateBuilder {
  return new DslBuilderImpl('ItemDelegate') as unknown as ItemDelegateBuilder;
}

export namespace ItemDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('ItemDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('ItemDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('ItemDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('ItemDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ItemDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ItemDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ItemDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ItemDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ItemDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ItemDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ItemDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ItemDelegate', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ItemDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ItemDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ItemDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ItemDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ItemDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ItemDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ItemDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ItemDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ItemDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ItemDelegate', 'TransformOrigin', 'BottomRight');
  }
}
