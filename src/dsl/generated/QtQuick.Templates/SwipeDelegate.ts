// AUTO-GENERATED — DO NOT EDIT
// Type: SwipeDelegate
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
import type { SwipeBuilder } from './QQuickSwipe.js';
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface SwipeDelegateBuilder {
  id(id: string): SwipeDelegateBuilder;
  child(obj: QmlObjectBuilder): SwipeDelegateBuilder;

  action(value: ActionBuilder): SwipeDelegateBuilder;
  actionBind(expr: string): SwipeDelegateBuilder;
  activeFocusOnTab(value: boolean): SwipeDelegateBuilder;
  activeFocusOnTabBind(expr: string): SwipeDelegateBuilder;
  antialiasing(value: boolean): SwipeDelegateBuilder;
  antialiasingBind(expr: string): SwipeDelegateBuilder;
  autoExclusive(value: boolean): SwipeDelegateBuilder;
  autoExclusiveBind(expr: string): SwipeDelegateBuilder;
  autoRepeat(value: boolean): SwipeDelegateBuilder;
  autoRepeatBind(expr: string): SwipeDelegateBuilder;
  autoRepeatDelay(value: number): SwipeDelegateBuilder;
  autoRepeatDelayBind(expr: string): SwipeDelegateBuilder;
  autoRepeatInterval(value: number): SwipeDelegateBuilder;
  autoRepeatIntervalBind(expr: string): SwipeDelegateBuilder;
  background(value: ItemBuilder): SwipeDelegateBuilder;
  backgroundBind(expr: string): SwipeDelegateBuilder;
  baselineOffset(value: number): SwipeDelegateBuilder;
  baselineOffsetBind(expr: string): SwipeDelegateBuilder;
  bottomInset(value: number): SwipeDelegateBuilder;
  bottomInsetBind(expr: string): SwipeDelegateBuilder;
  bottomPadding(value: number): SwipeDelegateBuilder;
  bottomPaddingBind(expr: string): SwipeDelegateBuilder;
  checkable(value: boolean): SwipeDelegateBuilder;
  checkableBind(expr: string): SwipeDelegateBuilder;
  checked(value: boolean): SwipeDelegateBuilder;
  checkedBind(expr: string): SwipeDelegateBuilder;
  clip(value: boolean): SwipeDelegateBuilder;
  clipBind(expr: string): SwipeDelegateBuilder;
  containmentMask(value: QtObjectBuilder): SwipeDelegateBuilder;
  containmentMaskBind(expr: string): SwipeDelegateBuilder;
  contentItem(value: ItemBuilder): SwipeDelegateBuilder;
  contentItemBind(expr: string): SwipeDelegateBuilder;
  display(value: QmlValue): SwipeDelegateBuilder;
  displayBind(expr: string): SwipeDelegateBuilder;
  down(value: boolean): SwipeDelegateBuilder;
  downBind(expr: string): SwipeDelegateBuilder;
  enabled(value: boolean): SwipeDelegateBuilder;
  enabledBind(expr: string): SwipeDelegateBuilder;
  focus(value: boolean): SwipeDelegateBuilder;
  focusBind(expr: string): SwipeDelegateBuilder;
  focusPolicy(value: QmlValue): SwipeDelegateBuilder;
  focusPolicyBind(expr: string): SwipeDelegateBuilder;
  focusReason(value: QmlValue): SwipeDelegateBuilder;
  focusReasonBind(expr: string): SwipeDelegateBuilder;
  font(value: QmlFont): SwipeDelegateBuilder;
  fontBind(expr: string): SwipeDelegateBuilder;
  height(value: number): SwipeDelegateBuilder;
  heightBind(expr: string): SwipeDelegateBuilder;
  highlighted(value: boolean): SwipeDelegateBuilder;
  highlightedBind(expr: string): SwipeDelegateBuilder;
  horizontalPadding(value: number): SwipeDelegateBuilder;
  horizontalPaddingBind(expr: string): SwipeDelegateBuilder;
  hoverEnabled(value: boolean): SwipeDelegateBuilder;
  hoverEnabledBind(expr: string): SwipeDelegateBuilder;
  icon(value: QmlValue): SwipeDelegateBuilder;
  iconBind(expr: string): SwipeDelegateBuilder;
  implicitHeight(value: number): SwipeDelegateBuilder;
  implicitHeightBind(expr: string): SwipeDelegateBuilder;
  implicitWidth(value: number): SwipeDelegateBuilder;
  implicitWidthBind(expr: string): SwipeDelegateBuilder;
  indicator(value: ItemBuilder): SwipeDelegateBuilder;
  indicatorBind(expr: string): SwipeDelegateBuilder;
  leftInset(value: number): SwipeDelegateBuilder;
  leftInsetBind(expr: string): SwipeDelegateBuilder;
  leftPadding(value: number): SwipeDelegateBuilder;
  leftPaddingBind(expr: string): SwipeDelegateBuilder;
  locale(value: QmlValue): SwipeDelegateBuilder;
  localeBind(expr: string): SwipeDelegateBuilder;
  objectName(value: string): SwipeDelegateBuilder;
  objectNameBind(expr: string): SwipeDelegateBuilder;
  opacity(value: number): SwipeDelegateBuilder;
  opacityBind(expr: string): SwipeDelegateBuilder;
  padding(value: number): SwipeDelegateBuilder;
  paddingBind(expr: string): SwipeDelegateBuilder;
  palette(value: PaletteBuilder): SwipeDelegateBuilder;
  paletteBind(expr: string): SwipeDelegateBuilder;
  parent(value: ItemBuilder): SwipeDelegateBuilder;
  parentBind(expr: string): SwipeDelegateBuilder;
  rightInset(value: number): SwipeDelegateBuilder;
  rightInsetBind(expr: string): SwipeDelegateBuilder;
  rightPadding(value: number): SwipeDelegateBuilder;
  rightPaddingBind(expr: string): SwipeDelegateBuilder;
  rotation(value: number): SwipeDelegateBuilder;
  rotationBind(expr: string): SwipeDelegateBuilder;
  scale(value: number): SwipeDelegateBuilder;
  scaleBind(expr: string): SwipeDelegateBuilder;
  smooth(value: boolean): SwipeDelegateBuilder;
  smoothBind(expr: string): SwipeDelegateBuilder;
  spacing(value: number): SwipeDelegateBuilder;
  spacingBind(expr: string): SwipeDelegateBuilder;
  state(value: string): SwipeDelegateBuilder;
  stateBind(expr: string): SwipeDelegateBuilder;
  text(value: string): SwipeDelegateBuilder;
  textBind(expr: string): SwipeDelegateBuilder;
  topInset(value: number): SwipeDelegateBuilder;
  topInsetBind(expr: string): SwipeDelegateBuilder;
  topPadding(value: number): SwipeDelegateBuilder;
  topPaddingBind(expr: string): SwipeDelegateBuilder;
  transformOrigin(value: QmlValue): SwipeDelegateBuilder;
  transformOriginBind(expr: string): SwipeDelegateBuilder;
  verticalPadding(value: number): SwipeDelegateBuilder;
  verticalPaddingBind(expr: string): SwipeDelegateBuilder;
  visible(value: boolean): SwipeDelegateBuilder;
  visibleBind(expr: string): SwipeDelegateBuilder;
  wheelEnabled(value: boolean): SwipeDelegateBuilder;
  wheelEnabledBind(expr: string): SwipeDelegateBuilder;
  width(value: number): SwipeDelegateBuilder;
  widthBind(expr: string): SwipeDelegateBuilder;
  x(value: number): SwipeDelegateBuilder;
  xBind(expr: string): SwipeDelegateBuilder;
  y(value: number): SwipeDelegateBuilder;
  yBind(expr: string): SwipeDelegateBuilder;
  z(value: number): SwipeDelegateBuilder;
  zBind(expr: string): SwipeDelegateBuilder;
  onActionChanged(handler: () => void): SwipeDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SwipeDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SwipeDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SwipeDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): SwipeDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): SwipeDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): SwipeDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): SwipeDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): SwipeDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): SwipeDelegateBuilder;
  onBackgroundChanged(handler: () => void): SwipeDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): SwipeDelegateBuilder;
  onBottomInsetChanged(handler: () => void): SwipeDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): SwipeDelegateBuilder;
  onCanceled(handler: () => void): SwipeDelegateBuilder;
  onCheckableChanged(handler: () => void): SwipeDelegateBuilder;
  onCheckedChanged(handler: () => void): SwipeDelegateBuilder;
  onChildrenChanged(handler: () => void): SwipeDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SwipeDelegateBuilder;
  onClicked(handler: () => void): SwipeDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SwipeDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): SwipeDelegateBuilder;
  onContentItemChanged(handler: () => void): SwipeDelegateBuilder;
  onDisplayChanged(handler: () => void): SwipeDelegateBuilder;
  onDoubleClicked(handler: () => void): SwipeDelegateBuilder;
  onDownChanged(handler: () => void): SwipeDelegateBuilder;
  onEnabledChanged(handler: () => void): SwipeDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SwipeDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SwipeDelegateBuilder;
  onFocusReasonChanged(handler: () => void): SwipeDelegateBuilder;
  onFontChanged(handler: () => void): SwipeDelegateBuilder;
  onHeightChanged(handler: () => void): SwipeDelegateBuilder;
  onHighlightedChanged(handler: () => void): SwipeDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): SwipeDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): SwipeDelegateBuilder;
  onHoveredChanged(handler: () => void): SwipeDelegateBuilder;
  onIconChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): SwipeDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): SwipeDelegateBuilder;
  onIndicatorChanged(handler: () => void): SwipeDelegateBuilder;
  onLeftInsetChanged(handler: () => void): SwipeDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): SwipeDelegateBuilder;
  onLocaleChanged(handler: () => void): SwipeDelegateBuilder;
  onMirroredChanged(handler: () => void): SwipeDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SwipeDelegateBuilder;
  onOpacityChanged(handler: () => void): SwipeDelegateBuilder;
  onPaddingChanged(handler: () => void): SwipeDelegateBuilder;
  onPaletteChanged(handler: () => void): SwipeDelegateBuilder;
  onPaletteCreated(handler: () => void): SwipeDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SwipeDelegateBuilder;
  onPressAndHold(handler: () => void): SwipeDelegateBuilder;
  onPressXChanged(handler: () => void): SwipeDelegateBuilder;
  onPressYChanged(handler: () => void): SwipeDelegateBuilder;
  onPressed(handler: () => void): SwipeDelegateBuilder;
  onPressedChanged(handler: () => void): SwipeDelegateBuilder;
  onReleased(handler: () => void): SwipeDelegateBuilder;
  onRightInsetChanged(handler: () => void): SwipeDelegateBuilder;
  onRightPaddingChanged(handler: () => void): SwipeDelegateBuilder;
  onRotationChanged(handler: () => void): SwipeDelegateBuilder;
  onScaleChanged(handler: () => void): SwipeDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SwipeDelegateBuilder;
  onSpacingChanged(handler: () => void): SwipeDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): SwipeDelegateBuilder;
  onTextChanged(handler: () => void): SwipeDelegateBuilder;
  onToggled(handler: () => void): SwipeDelegateBuilder;
  onTopInsetChanged(handler: () => void): SwipeDelegateBuilder;
  onTopPaddingChanged(handler: () => void): SwipeDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SwipeDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): SwipeDelegateBuilder;
  onVisibleChanged(handler: () => void): SwipeDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): SwipeDelegateBuilder;
  onVisualFocusChanged(handler: () => void): SwipeDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): SwipeDelegateBuilder;
  onWidthChanged(handler: () => void): SwipeDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SwipeDelegateBuilder;
  onXChanged(handler: () => void): SwipeDelegateBuilder;
  onYChanged(handler: () => void): SwipeDelegateBuilder;
  onZChanged(handler: () => void): SwipeDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwipeDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): SwipeDelegateBuilder;
  swipe(setup: (b: SwipeBuilder) => void): SwipeDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwipeDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwipeDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwipeDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwipeDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwipeDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwipeDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwipeDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwipeDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwipeDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwipeDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwipeDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwipeDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwipeDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwipeDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwipeDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwipeDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwipeDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwipeDelegateBuilder;
}

export function SwipeDelegate(): SwipeDelegateBuilder {
  return new DslBuilderImpl('SwipeDelegate') as unknown as SwipeDelegateBuilder;
}

export namespace SwipeDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('SwipeDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('SwipeDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('SwipeDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('SwipeDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SwipeDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SwipeDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SwipeDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SwipeDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SwipeDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SwipeDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SwipeDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SwipeDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Side {
    export const Left = createEnumToken('SwipeDelegate', 'Side', 'Left');
    export const Right = createEnumToken('SwipeDelegate', 'Side', 'Right');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SwipeDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SwipeDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SwipeDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SwipeDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SwipeDelegate', 'TransformOrigin', 'BottomRight');
  }
}
