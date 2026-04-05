// AUTO-GENERATED — DO NOT EDIT
// Type: SwitchDelegate
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
export interface SwitchDelegateBuilder {
  id(id: string): SwitchDelegateBuilder;
  child(obj: QmlObjectBuilder): SwitchDelegateBuilder;

  action(value: ActionBuilder): SwitchDelegateBuilder;
  actionBind(expr: string): SwitchDelegateBuilder;
  activeFocusOnTab(value: boolean): SwitchDelegateBuilder;
  activeFocusOnTabBind(expr: string): SwitchDelegateBuilder;
  antialiasing(value: boolean): SwitchDelegateBuilder;
  antialiasingBind(expr: string): SwitchDelegateBuilder;
  autoExclusive(value: boolean): SwitchDelegateBuilder;
  autoExclusiveBind(expr: string): SwitchDelegateBuilder;
  autoRepeat(value: boolean): SwitchDelegateBuilder;
  autoRepeatBind(expr: string): SwitchDelegateBuilder;
  autoRepeatDelay(value: number): SwitchDelegateBuilder;
  autoRepeatDelayBind(expr: string): SwitchDelegateBuilder;
  autoRepeatInterval(value: number): SwitchDelegateBuilder;
  autoRepeatIntervalBind(expr: string): SwitchDelegateBuilder;
  background(value: ItemBuilder): SwitchDelegateBuilder;
  backgroundBind(expr: string): SwitchDelegateBuilder;
  baselineOffset(value: number): SwitchDelegateBuilder;
  baselineOffsetBind(expr: string): SwitchDelegateBuilder;
  bottomInset(value: number): SwitchDelegateBuilder;
  bottomInsetBind(expr: string): SwitchDelegateBuilder;
  bottomPadding(value: number): SwitchDelegateBuilder;
  bottomPaddingBind(expr: string): SwitchDelegateBuilder;
  checkable(value: boolean): SwitchDelegateBuilder;
  checkableBind(expr: string): SwitchDelegateBuilder;
  checked(value: boolean): SwitchDelegateBuilder;
  checkedBind(expr: string): SwitchDelegateBuilder;
  clip(value: boolean): SwitchDelegateBuilder;
  clipBind(expr: string): SwitchDelegateBuilder;
  containmentMask(value: QtObjectBuilder): SwitchDelegateBuilder;
  containmentMaskBind(expr: string): SwitchDelegateBuilder;
  contentItem(value: ItemBuilder): SwitchDelegateBuilder;
  contentItemBind(expr: string): SwitchDelegateBuilder;
  display(value: QmlValue): SwitchDelegateBuilder;
  displayBind(expr: string): SwitchDelegateBuilder;
  down(value: boolean): SwitchDelegateBuilder;
  downBind(expr: string): SwitchDelegateBuilder;
  enabled(value: boolean): SwitchDelegateBuilder;
  enabledBind(expr: string): SwitchDelegateBuilder;
  focus(value: boolean): SwitchDelegateBuilder;
  focusBind(expr: string): SwitchDelegateBuilder;
  focusPolicy(value: QmlValue): SwitchDelegateBuilder;
  focusPolicyBind(expr: string): SwitchDelegateBuilder;
  focusReason(value: QmlValue): SwitchDelegateBuilder;
  focusReasonBind(expr: string): SwitchDelegateBuilder;
  font(value: QmlFont): SwitchDelegateBuilder;
  fontBind(expr: string): SwitchDelegateBuilder;
  height(value: number): SwitchDelegateBuilder;
  heightBind(expr: string): SwitchDelegateBuilder;
  highlighted(value: boolean): SwitchDelegateBuilder;
  highlightedBind(expr: string): SwitchDelegateBuilder;
  horizontalPadding(value: number): SwitchDelegateBuilder;
  horizontalPaddingBind(expr: string): SwitchDelegateBuilder;
  hoverEnabled(value: boolean): SwitchDelegateBuilder;
  hoverEnabledBind(expr: string): SwitchDelegateBuilder;
  icon(value: QmlValue): SwitchDelegateBuilder;
  iconBind(expr: string): SwitchDelegateBuilder;
  implicitHeight(value: number): SwitchDelegateBuilder;
  implicitHeightBind(expr: string): SwitchDelegateBuilder;
  implicitWidth(value: number): SwitchDelegateBuilder;
  implicitWidthBind(expr: string): SwitchDelegateBuilder;
  indicator(value: ItemBuilder): SwitchDelegateBuilder;
  indicatorBind(expr: string): SwitchDelegateBuilder;
  leftInset(value: number): SwitchDelegateBuilder;
  leftInsetBind(expr: string): SwitchDelegateBuilder;
  leftPadding(value: number): SwitchDelegateBuilder;
  leftPaddingBind(expr: string): SwitchDelegateBuilder;
  locale(value: QmlValue): SwitchDelegateBuilder;
  localeBind(expr: string): SwitchDelegateBuilder;
  objectName(value: string): SwitchDelegateBuilder;
  objectNameBind(expr: string): SwitchDelegateBuilder;
  opacity(value: number): SwitchDelegateBuilder;
  opacityBind(expr: string): SwitchDelegateBuilder;
  padding(value: number): SwitchDelegateBuilder;
  paddingBind(expr: string): SwitchDelegateBuilder;
  palette(value: PaletteBuilder): SwitchDelegateBuilder;
  paletteBind(expr: string): SwitchDelegateBuilder;
  parent(value: ItemBuilder): SwitchDelegateBuilder;
  parentBind(expr: string): SwitchDelegateBuilder;
  position(value: number): SwitchDelegateBuilder;
  positionBind(expr: string): SwitchDelegateBuilder;
  rightInset(value: number): SwitchDelegateBuilder;
  rightInsetBind(expr: string): SwitchDelegateBuilder;
  rightPadding(value: number): SwitchDelegateBuilder;
  rightPaddingBind(expr: string): SwitchDelegateBuilder;
  rotation(value: number): SwitchDelegateBuilder;
  rotationBind(expr: string): SwitchDelegateBuilder;
  scale(value: number): SwitchDelegateBuilder;
  scaleBind(expr: string): SwitchDelegateBuilder;
  smooth(value: boolean): SwitchDelegateBuilder;
  smoothBind(expr: string): SwitchDelegateBuilder;
  spacing(value: number): SwitchDelegateBuilder;
  spacingBind(expr: string): SwitchDelegateBuilder;
  state(value: string): SwitchDelegateBuilder;
  stateBind(expr: string): SwitchDelegateBuilder;
  text(value: string): SwitchDelegateBuilder;
  textBind(expr: string): SwitchDelegateBuilder;
  topInset(value: number): SwitchDelegateBuilder;
  topInsetBind(expr: string): SwitchDelegateBuilder;
  topPadding(value: number): SwitchDelegateBuilder;
  topPaddingBind(expr: string): SwitchDelegateBuilder;
  transformOrigin(value: QmlValue): SwitchDelegateBuilder;
  transformOriginBind(expr: string): SwitchDelegateBuilder;
  verticalPadding(value: number): SwitchDelegateBuilder;
  verticalPaddingBind(expr: string): SwitchDelegateBuilder;
  visible(value: boolean): SwitchDelegateBuilder;
  visibleBind(expr: string): SwitchDelegateBuilder;
  wheelEnabled(value: boolean): SwitchDelegateBuilder;
  wheelEnabledBind(expr: string): SwitchDelegateBuilder;
  width(value: number): SwitchDelegateBuilder;
  widthBind(expr: string): SwitchDelegateBuilder;
  x(value: number): SwitchDelegateBuilder;
  xBind(expr: string): SwitchDelegateBuilder;
  y(value: number): SwitchDelegateBuilder;
  yBind(expr: string): SwitchDelegateBuilder;
  z(value: number): SwitchDelegateBuilder;
  zBind(expr: string): SwitchDelegateBuilder;
  onActionChanged(handler: () => void): SwitchDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SwitchDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SwitchDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SwitchDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): SwitchDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): SwitchDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): SwitchDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): SwitchDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): SwitchDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): SwitchDelegateBuilder;
  onBackgroundChanged(handler: () => void): SwitchDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): SwitchDelegateBuilder;
  onBottomInsetChanged(handler: () => void): SwitchDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): SwitchDelegateBuilder;
  onCanceled(handler: () => void): SwitchDelegateBuilder;
  onCheckableChanged(handler: () => void): SwitchDelegateBuilder;
  onCheckedChanged(handler: () => void): SwitchDelegateBuilder;
  onChildrenChanged(handler: () => void): SwitchDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SwitchDelegateBuilder;
  onClicked(handler: () => void): SwitchDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SwitchDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): SwitchDelegateBuilder;
  onContentItemChanged(handler: () => void): SwitchDelegateBuilder;
  onDisplayChanged(handler: () => void): SwitchDelegateBuilder;
  onDoubleClicked(handler: () => void): SwitchDelegateBuilder;
  onDownChanged(handler: () => void): SwitchDelegateBuilder;
  onEnabledChanged(handler: () => void): SwitchDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SwitchDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SwitchDelegateBuilder;
  onFocusReasonChanged(handler: () => void): SwitchDelegateBuilder;
  onFontChanged(handler: () => void): SwitchDelegateBuilder;
  onHeightChanged(handler: () => void): SwitchDelegateBuilder;
  onHighlightedChanged(handler: () => void): SwitchDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): SwitchDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): SwitchDelegateBuilder;
  onHoveredChanged(handler: () => void): SwitchDelegateBuilder;
  onIconChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): SwitchDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): SwitchDelegateBuilder;
  onIndicatorChanged(handler: () => void): SwitchDelegateBuilder;
  onLeftInsetChanged(handler: () => void): SwitchDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): SwitchDelegateBuilder;
  onLocaleChanged(handler: () => void): SwitchDelegateBuilder;
  onMirroredChanged(handler: () => void): SwitchDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SwitchDelegateBuilder;
  onOpacityChanged(handler: () => void): SwitchDelegateBuilder;
  onPaddingChanged(handler: () => void): SwitchDelegateBuilder;
  onPaletteChanged(handler: () => void): SwitchDelegateBuilder;
  onPaletteCreated(handler: () => void): SwitchDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SwitchDelegateBuilder;
  onPositionChanged(handler: () => void): SwitchDelegateBuilder;
  onPressAndHold(handler: () => void): SwitchDelegateBuilder;
  onPressXChanged(handler: () => void): SwitchDelegateBuilder;
  onPressYChanged(handler: () => void): SwitchDelegateBuilder;
  onPressed(handler: () => void): SwitchDelegateBuilder;
  onPressedChanged(handler: () => void): SwitchDelegateBuilder;
  onReleased(handler: () => void): SwitchDelegateBuilder;
  onRightInsetChanged(handler: () => void): SwitchDelegateBuilder;
  onRightPaddingChanged(handler: () => void): SwitchDelegateBuilder;
  onRotationChanged(handler: () => void): SwitchDelegateBuilder;
  onScaleChanged(handler: () => void): SwitchDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SwitchDelegateBuilder;
  onSpacingChanged(handler: () => void): SwitchDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): SwitchDelegateBuilder;
  onTextChanged(handler: () => void): SwitchDelegateBuilder;
  onToggled(handler: () => void): SwitchDelegateBuilder;
  onTopInsetChanged(handler: () => void): SwitchDelegateBuilder;
  onTopPaddingChanged(handler: () => void): SwitchDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SwitchDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): SwitchDelegateBuilder;
  onVisibleChanged(handler: () => void): SwitchDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): SwitchDelegateBuilder;
  onVisualFocusChanged(handler: () => void): SwitchDelegateBuilder;
  onVisualPositionChanged(handler: () => void): SwitchDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): SwitchDelegateBuilder;
  onWidthChanged(handler: () => void): SwitchDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SwitchDelegateBuilder;
  onXChanged(handler: () => void): SwitchDelegateBuilder;
  onYChanged(handler: () => void): SwitchDelegateBuilder;
  onZChanged(handler: () => void): SwitchDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwitchDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): SwitchDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwitchDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwitchDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwitchDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwitchDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwitchDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwitchDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwitchDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwitchDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwitchDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwitchDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwitchDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwitchDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwitchDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwitchDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwitchDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwitchDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwitchDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwitchDelegateBuilder;
}

export function SwitchDelegate(): SwitchDelegateBuilder {
  return new DslBuilderImpl('SwitchDelegate') as unknown as SwitchDelegateBuilder;
}

export namespace SwitchDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('SwitchDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('SwitchDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('SwitchDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('SwitchDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SwitchDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SwitchDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SwitchDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SwitchDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SwitchDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SwitchDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SwitchDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SwitchDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SwitchDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SwitchDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SwitchDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SwitchDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SwitchDelegate', 'TransformOrigin', 'BottomRight');
  }
}
