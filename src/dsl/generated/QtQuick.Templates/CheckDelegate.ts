// AUTO-GENERATED — DO NOT EDIT
// Type: CheckDelegate
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
export interface CheckDelegateBuilder {
  id(id: string): CheckDelegateBuilder;
  child(obj: QmlObjectBuilder): CheckDelegateBuilder;

  action(value: ActionBuilder): CheckDelegateBuilder;
  actionBind(expr: string): CheckDelegateBuilder;
  activeFocusOnTab(value: boolean): CheckDelegateBuilder;
  activeFocusOnTabBind(expr: string): CheckDelegateBuilder;
  antialiasing(value: boolean): CheckDelegateBuilder;
  antialiasingBind(expr: string): CheckDelegateBuilder;
  autoExclusive(value: boolean): CheckDelegateBuilder;
  autoExclusiveBind(expr: string): CheckDelegateBuilder;
  autoRepeat(value: boolean): CheckDelegateBuilder;
  autoRepeatBind(expr: string): CheckDelegateBuilder;
  autoRepeatDelay(value: number): CheckDelegateBuilder;
  autoRepeatDelayBind(expr: string): CheckDelegateBuilder;
  autoRepeatInterval(value: number): CheckDelegateBuilder;
  autoRepeatIntervalBind(expr: string): CheckDelegateBuilder;
  background(value: ItemBuilder): CheckDelegateBuilder;
  backgroundBind(expr: string): CheckDelegateBuilder;
  baselineOffset(value: number): CheckDelegateBuilder;
  baselineOffsetBind(expr: string): CheckDelegateBuilder;
  bottomInset(value: number): CheckDelegateBuilder;
  bottomInsetBind(expr: string): CheckDelegateBuilder;
  bottomPadding(value: number): CheckDelegateBuilder;
  bottomPaddingBind(expr: string): CheckDelegateBuilder;
  checkState(value: QmlValue): CheckDelegateBuilder;
  checkStateBind(expr: string): CheckDelegateBuilder;
  checkable(value: boolean): CheckDelegateBuilder;
  checkableBind(expr: string): CheckDelegateBuilder;
  checked(value: boolean): CheckDelegateBuilder;
  checkedBind(expr: string): CheckDelegateBuilder;
  clip(value: boolean): CheckDelegateBuilder;
  clipBind(expr: string): CheckDelegateBuilder;
  containmentMask(value: QtObjectBuilder): CheckDelegateBuilder;
  containmentMaskBind(expr: string): CheckDelegateBuilder;
  contentItem(value: ItemBuilder): CheckDelegateBuilder;
  contentItemBind(expr: string): CheckDelegateBuilder;
  display(value: QmlValue): CheckDelegateBuilder;
  displayBind(expr: string): CheckDelegateBuilder;
  down(value: boolean): CheckDelegateBuilder;
  downBind(expr: string): CheckDelegateBuilder;
  enabled(value: boolean): CheckDelegateBuilder;
  enabledBind(expr: string): CheckDelegateBuilder;
  focus(value: boolean): CheckDelegateBuilder;
  focusBind(expr: string): CheckDelegateBuilder;
  focusPolicy(value: QmlValue): CheckDelegateBuilder;
  focusPolicyBind(expr: string): CheckDelegateBuilder;
  focusReason(value: QmlValue): CheckDelegateBuilder;
  focusReasonBind(expr: string): CheckDelegateBuilder;
  font(value: QmlFont): CheckDelegateBuilder;
  fontBind(expr: string): CheckDelegateBuilder;
  height(value: number): CheckDelegateBuilder;
  heightBind(expr: string): CheckDelegateBuilder;
  highlighted(value: boolean): CheckDelegateBuilder;
  highlightedBind(expr: string): CheckDelegateBuilder;
  horizontalPadding(value: number): CheckDelegateBuilder;
  horizontalPaddingBind(expr: string): CheckDelegateBuilder;
  hoverEnabled(value: boolean): CheckDelegateBuilder;
  hoverEnabledBind(expr: string): CheckDelegateBuilder;
  icon(value: QmlValue): CheckDelegateBuilder;
  iconBind(expr: string): CheckDelegateBuilder;
  implicitHeight(value: number): CheckDelegateBuilder;
  implicitHeightBind(expr: string): CheckDelegateBuilder;
  implicitWidth(value: number): CheckDelegateBuilder;
  implicitWidthBind(expr: string): CheckDelegateBuilder;
  indicator(value: ItemBuilder): CheckDelegateBuilder;
  indicatorBind(expr: string): CheckDelegateBuilder;
  leftInset(value: number): CheckDelegateBuilder;
  leftInsetBind(expr: string): CheckDelegateBuilder;
  leftPadding(value: number): CheckDelegateBuilder;
  leftPaddingBind(expr: string): CheckDelegateBuilder;
  locale(value: QmlValue): CheckDelegateBuilder;
  localeBind(expr: string): CheckDelegateBuilder;
  nextCheckState(value: QmlValue): CheckDelegateBuilder;
  nextCheckStateBind(expr: string): CheckDelegateBuilder;
  objectName(value: string): CheckDelegateBuilder;
  objectNameBind(expr: string): CheckDelegateBuilder;
  opacity(value: number): CheckDelegateBuilder;
  opacityBind(expr: string): CheckDelegateBuilder;
  padding(value: number): CheckDelegateBuilder;
  paddingBind(expr: string): CheckDelegateBuilder;
  palette(value: PaletteBuilder): CheckDelegateBuilder;
  paletteBind(expr: string): CheckDelegateBuilder;
  parent(value: ItemBuilder): CheckDelegateBuilder;
  parentBind(expr: string): CheckDelegateBuilder;
  rightInset(value: number): CheckDelegateBuilder;
  rightInsetBind(expr: string): CheckDelegateBuilder;
  rightPadding(value: number): CheckDelegateBuilder;
  rightPaddingBind(expr: string): CheckDelegateBuilder;
  rotation(value: number): CheckDelegateBuilder;
  rotationBind(expr: string): CheckDelegateBuilder;
  scale(value: number): CheckDelegateBuilder;
  scaleBind(expr: string): CheckDelegateBuilder;
  smooth(value: boolean): CheckDelegateBuilder;
  smoothBind(expr: string): CheckDelegateBuilder;
  spacing(value: number): CheckDelegateBuilder;
  spacingBind(expr: string): CheckDelegateBuilder;
  state(value: string): CheckDelegateBuilder;
  stateBind(expr: string): CheckDelegateBuilder;
  text(value: string): CheckDelegateBuilder;
  textBind(expr: string): CheckDelegateBuilder;
  topInset(value: number): CheckDelegateBuilder;
  topInsetBind(expr: string): CheckDelegateBuilder;
  topPadding(value: number): CheckDelegateBuilder;
  topPaddingBind(expr: string): CheckDelegateBuilder;
  transformOrigin(value: QmlValue): CheckDelegateBuilder;
  transformOriginBind(expr: string): CheckDelegateBuilder;
  tristate(value: boolean): CheckDelegateBuilder;
  tristateBind(expr: string): CheckDelegateBuilder;
  verticalPadding(value: number): CheckDelegateBuilder;
  verticalPaddingBind(expr: string): CheckDelegateBuilder;
  visible(value: boolean): CheckDelegateBuilder;
  visibleBind(expr: string): CheckDelegateBuilder;
  wheelEnabled(value: boolean): CheckDelegateBuilder;
  wheelEnabledBind(expr: string): CheckDelegateBuilder;
  width(value: number): CheckDelegateBuilder;
  widthBind(expr: string): CheckDelegateBuilder;
  x(value: number): CheckDelegateBuilder;
  xBind(expr: string): CheckDelegateBuilder;
  y(value: number): CheckDelegateBuilder;
  yBind(expr: string): CheckDelegateBuilder;
  z(value: number): CheckDelegateBuilder;
  zBind(expr: string): CheckDelegateBuilder;
  onActionChanged(handler: () => void): CheckDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): CheckDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): CheckDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): CheckDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): CheckDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): CheckDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): CheckDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): CheckDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): CheckDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): CheckDelegateBuilder;
  onBackgroundChanged(handler: () => void): CheckDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): CheckDelegateBuilder;
  onBottomInsetChanged(handler: () => void): CheckDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): CheckDelegateBuilder;
  onCanceled(handler: () => void): CheckDelegateBuilder;
  onCheckStateChanged(handler: () => void): CheckDelegateBuilder;
  onCheckableChanged(handler: () => void): CheckDelegateBuilder;
  onCheckedChanged(handler: () => void): CheckDelegateBuilder;
  onChildrenChanged(handler: () => void): CheckDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): CheckDelegateBuilder;
  onClicked(handler: () => void): CheckDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): CheckDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): CheckDelegateBuilder;
  onContentItemChanged(handler: () => void): CheckDelegateBuilder;
  onDisplayChanged(handler: () => void): CheckDelegateBuilder;
  onDoubleClicked(handler: () => void): CheckDelegateBuilder;
  onDownChanged(handler: () => void): CheckDelegateBuilder;
  onEnabledChanged(handler: () => void): CheckDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): CheckDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): CheckDelegateBuilder;
  onFocusReasonChanged(handler: () => void): CheckDelegateBuilder;
  onFontChanged(handler: () => void): CheckDelegateBuilder;
  onHeightChanged(handler: () => void): CheckDelegateBuilder;
  onHighlightedChanged(handler: () => void): CheckDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): CheckDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): CheckDelegateBuilder;
  onHoveredChanged(handler: () => void): CheckDelegateBuilder;
  onIconChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): CheckDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): CheckDelegateBuilder;
  onIndicatorChanged(handler: () => void): CheckDelegateBuilder;
  onLeftInsetChanged(handler: () => void): CheckDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): CheckDelegateBuilder;
  onLocaleChanged(handler: () => void): CheckDelegateBuilder;
  onMirroredChanged(handler: () => void): CheckDelegateBuilder;
  onNextCheckStateChanged(handler: () => void): CheckDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): CheckDelegateBuilder;
  onOpacityChanged(handler: () => void): CheckDelegateBuilder;
  onPaddingChanged(handler: () => void): CheckDelegateBuilder;
  onPaletteChanged(handler: () => void): CheckDelegateBuilder;
  onPaletteCreated(handler: () => void): CheckDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): CheckDelegateBuilder;
  onPressAndHold(handler: () => void): CheckDelegateBuilder;
  onPressXChanged(handler: () => void): CheckDelegateBuilder;
  onPressYChanged(handler: () => void): CheckDelegateBuilder;
  onPressed(handler: () => void): CheckDelegateBuilder;
  onPressedChanged(handler: () => void): CheckDelegateBuilder;
  onReleased(handler: () => void): CheckDelegateBuilder;
  onRightInsetChanged(handler: () => void): CheckDelegateBuilder;
  onRightPaddingChanged(handler: () => void): CheckDelegateBuilder;
  onRotationChanged(handler: () => void): CheckDelegateBuilder;
  onScaleChanged(handler: () => void): CheckDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): CheckDelegateBuilder;
  onSpacingChanged(handler: () => void): CheckDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): CheckDelegateBuilder;
  onTextChanged(handler: () => void): CheckDelegateBuilder;
  onToggled(handler: () => void): CheckDelegateBuilder;
  onTopInsetChanged(handler: () => void): CheckDelegateBuilder;
  onTopPaddingChanged(handler: () => void): CheckDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): CheckDelegateBuilder;
  onTristateChanged(handler: () => void): CheckDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): CheckDelegateBuilder;
  onVisibleChanged(handler: () => void): CheckDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): CheckDelegateBuilder;
  onVisualFocusChanged(handler: () => void): CheckDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): CheckDelegateBuilder;
  onWidthChanged(handler: () => void): CheckDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): CheckDelegateBuilder;
  onXChanged(handler: () => void): CheckDelegateBuilder;
  onYChanged(handler: () => void): CheckDelegateBuilder;
  onZChanged(handler: () => void): CheckDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CheckDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): CheckDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): CheckDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): CheckDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): CheckDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): CheckDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): CheckDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): CheckDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): CheckDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): CheckDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): CheckDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): CheckDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): CheckDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): CheckDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): CheckDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): CheckDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): CheckDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): CheckDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): CheckDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): CheckDelegateBuilder;
}

export function CheckDelegate(): CheckDelegateBuilder {
  return new DslBuilderImpl('CheckDelegate') as unknown as CheckDelegateBuilder;
}

export namespace CheckDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('CheckDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('CheckDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('CheckDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('CheckDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'CheckDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'CheckDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('CheckDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('CheckDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('CheckDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('CheckDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'CheckDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'CheckDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('CheckDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('CheckDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('CheckDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('CheckDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('CheckDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('CheckDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('CheckDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('CheckDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('CheckDelegate', 'TransformOrigin', 'BottomRight');
  }
}
