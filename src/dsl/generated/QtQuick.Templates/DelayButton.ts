// AUTO-GENERATED — DO NOT EDIT
// Type: DelayButton
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
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
export interface DelayButtonBuilder {
  id(id: string): DelayButtonBuilder;
  child(obj: QmlObjectBuilder): DelayButtonBuilder;

  action(value: ActionBuilder): DelayButtonBuilder;
  actionBind(expr: string): DelayButtonBuilder;
  activeFocusOnTab(value: boolean): DelayButtonBuilder;
  activeFocusOnTabBind(expr: string): DelayButtonBuilder;
  antialiasing(value: boolean): DelayButtonBuilder;
  antialiasingBind(expr: string): DelayButtonBuilder;
  autoExclusive(value: boolean): DelayButtonBuilder;
  autoExclusiveBind(expr: string): DelayButtonBuilder;
  autoRepeat(value: boolean): DelayButtonBuilder;
  autoRepeatBind(expr: string): DelayButtonBuilder;
  autoRepeatDelay(value: number): DelayButtonBuilder;
  autoRepeatDelayBind(expr: string): DelayButtonBuilder;
  autoRepeatInterval(value: number): DelayButtonBuilder;
  autoRepeatIntervalBind(expr: string): DelayButtonBuilder;
  background(value: ItemBuilder): DelayButtonBuilder;
  backgroundBind(expr: string): DelayButtonBuilder;
  baselineOffset(value: number): DelayButtonBuilder;
  baselineOffsetBind(expr: string): DelayButtonBuilder;
  bottomInset(value: number): DelayButtonBuilder;
  bottomInsetBind(expr: string): DelayButtonBuilder;
  bottomPadding(value: number): DelayButtonBuilder;
  bottomPaddingBind(expr: string): DelayButtonBuilder;
  checkable(value: boolean): DelayButtonBuilder;
  checkableBind(expr: string): DelayButtonBuilder;
  checked(value: boolean): DelayButtonBuilder;
  checkedBind(expr: string): DelayButtonBuilder;
  clip(value: boolean): DelayButtonBuilder;
  clipBind(expr: string): DelayButtonBuilder;
  containmentMask(value: QtObjectBuilder): DelayButtonBuilder;
  containmentMaskBind(expr: string): DelayButtonBuilder;
  contentItem(value: ItemBuilder): DelayButtonBuilder;
  contentItemBind(expr: string): DelayButtonBuilder;
  delay(value: number): DelayButtonBuilder;
  delayBind(expr: string): DelayButtonBuilder;
  display(value: QmlValue): DelayButtonBuilder;
  displayBind(expr: string): DelayButtonBuilder;
  down(value: boolean): DelayButtonBuilder;
  downBind(expr: string): DelayButtonBuilder;
  enabled(value: boolean): DelayButtonBuilder;
  enabledBind(expr: string): DelayButtonBuilder;
  focus(value: boolean): DelayButtonBuilder;
  focusBind(expr: string): DelayButtonBuilder;
  focusPolicy(value: QmlValue): DelayButtonBuilder;
  focusPolicyBind(expr: string): DelayButtonBuilder;
  focusReason(value: QmlValue): DelayButtonBuilder;
  focusReasonBind(expr: string): DelayButtonBuilder;
  font(value: QmlFont): DelayButtonBuilder;
  fontBind(expr: string): DelayButtonBuilder;
  height(value: number): DelayButtonBuilder;
  heightBind(expr: string): DelayButtonBuilder;
  horizontalPadding(value: number): DelayButtonBuilder;
  horizontalPaddingBind(expr: string): DelayButtonBuilder;
  hoverEnabled(value: boolean): DelayButtonBuilder;
  hoverEnabledBind(expr: string): DelayButtonBuilder;
  icon(value: QmlValue): DelayButtonBuilder;
  iconBind(expr: string): DelayButtonBuilder;
  implicitHeight(value: number): DelayButtonBuilder;
  implicitHeightBind(expr: string): DelayButtonBuilder;
  implicitWidth(value: number): DelayButtonBuilder;
  implicitWidthBind(expr: string): DelayButtonBuilder;
  indicator(value: ItemBuilder): DelayButtonBuilder;
  indicatorBind(expr: string): DelayButtonBuilder;
  leftInset(value: number): DelayButtonBuilder;
  leftInsetBind(expr: string): DelayButtonBuilder;
  leftPadding(value: number): DelayButtonBuilder;
  leftPaddingBind(expr: string): DelayButtonBuilder;
  locale(value: QmlValue): DelayButtonBuilder;
  localeBind(expr: string): DelayButtonBuilder;
  objectName(value: string): DelayButtonBuilder;
  objectNameBind(expr: string): DelayButtonBuilder;
  opacity(value: number): DelayButtonBuilder;
  opacityBind(expr: string): DelayButtonBuilder;
  padding(value: number): DelayButtonBuilder;
  paddingBind(expr: string): DelayButtonBuilder;
  palette(value: PaletteBuilder): DelayButtonBuilder;
  paletteBind(expr: string): DelayButtonBuilder;
  parent(value: ItemBuilder): DelayButtonBuilder;
  parentBind(expr: string): DelayButtonBuilder;
  progress(value: number): DelayButtonBuilder;
  progressBind(expr: string): DelayButtonBuilder;
  rightInset(value: number): DelayButtonBuilder;
  rightInsetBind(expr: string): DelayButtonBuilder;
  rightPadding(value: number): DelayButtonBuilder;
  rightPaddingBind(expr: string): DelayButtonBuilder;
  rotation(value: number): DelayButtonBuilder;
  rotationBind(expr: string): DelayButtonBuilder;
  scale(value: number): DelayButtonBuilder;
  scaleBind(expr: string): DelayButtonBuilder;
  smooth(value: boolean): DelayButtonBuilder;
  smoothBind(expr: string): DelayButtonBuilder;
  spacing(value: number): DelayButtonBuilder;
  spacingBind(expr: string): DelayButtonBuilder;
  state(value: string): DelayButtonBuilder;
  stateBind(expr: string): DelayButtonBuilder;
  text(value: string): DelayButtonBuilder;
  textBind(expr: string): DelayButtonBuilder;
  topInset(value: number): DelayButtonBuilder;
  topInsetBind(expr: string): DelayButtonBuilder;
  topPadding(value: number): DelayButtonBuilder;
  topPaddingBind(expr: string): DelayButtonBuilder;
  transformOrigin(value: QmlValue): DelayButtonBuilder;
  transformOriginBind(expr: string): DelayButtonBuilder;
  transition(value: TransitionBuilder): DelayButtonBuilder;
  transitionBind(expr: string): DelayButtonBuilder;
  verticalPadding(value: number): DelayButtonBuilder;
  verticalPaddingBind(expr: string): DelayButtonBuilder;
  visible(value: boolean): DelayButtonBuilder;
  visibleBind(expr: string): DelayButtonBuilder;
  wheelEnabled(value: boolean): DelayButtonBuilder;
  wheelEnabledBind(expr: string): DelayButtonBuilder;
  width(value: number): DelayButtonBuilder;
  widthBind(expr: string): DelayButtonBuilder;
  x(value: number): DelayButtonBuilder;
  xBind(expr: string): DelayButtonBuilder;
  y(value: number): DelayButtonBuilder;
  yBind(expr: string): DelayButtonBuilder;
  z(value: number): DelayButtonBuilder;
  zBind(expr: string): DelayButtonBuilder;
  onActionChanged(handler: () => void): DelayButtonBuilder;
  onActivated(handler: () => void): DelayButtonBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): DelayButtonBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): DelayButtonBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): DelayButtonBuilder;
  onAutoExclusiveChanged(handler: () => void): DelayButtonBuilder;
  onAutoRepeatChanged(handler: () => void): DelayButtonBuilder;
  onAutoRepeatDelayChanged(handler: () => void): DelayButtonBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): DelayButtonBuilder;
  onAvailableHeightChanged(handler: () => void): DelayButtonBuilder;
  onAvailableWidthChanged(handler: () => void): DelayButtonBuilder;
  onBackgroundChanged(handler: () => void): DelayButtonBuilder;
  onBaselineOffsetChanged(handler: () => void): DelayButtonBuilder;
  onBottomInsetChanged(handler: () => void): DelayButtonBuilder;
  onBottomPaddingChanged(handler: () => void): DelayButtonBuilder;
  onCanceled(handler: () => void): DelayButtonBuilder;
  onCheckableChanged(handler: () => void): DelayButtonBuilder;
  onCheckedChanged(handler: () => void): DelayButtonBuilder;
  onChildrenChanged(handler: () => void): DelayButtonBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): DelayButtonBuilder;
  onClicked(handler: () => void): DelayButtonBuilder;
  onClipChanged(handler: (arg0: boolean) => void): DelayButtonBuilder;
  onContainmentMaskChanged(handler: () => void): DelayButtonBuilder;
  onContentItemChanged(handler: () => void): DelayButtonBuilder;
  onDelayChanged(handler: () => void): DelayButtonBuilder;
  onDisplayChanged(handler: () => void): DelayButtonBuilder;
  onDoubleClicked(handler: () => void): DelayButtonBuilder;
  onDownChanged(handler: () => void): DelayButtonBuilder;
  onEnabledChanged(handler: () => void): DelayButtonBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): DelayButtonBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): DelayButtonBuilder;
  onFocusReasonChanged(handler: () => void): DelayButtonBuilder;
  onFontChanged(handler: () => void): DelayButtonBuilder;
  onHeightChanged(handler: () => void): DelayButtonBuilder;
  onHorizontalPaddingChanged(handler: () => void): DelayButtonBuilder;
  onHoverEnabledChanged(handler: () => void): DelayButtonBuilder;
  onHoveredChanged(handler: () => void): DelayButtonBuilder;
  onIconChanged(handler: () => void): DelayButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): DelayButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): DelayButtonBuilder;
  onImplicitContentHeightChanged(handler: () => void): DelayButtonBuilder;
  onImplicitContentWidthChanged(handler: () => void): DelayButtonBuilder;
  onImplicitHeightChanged(handler: () => void): DelayButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): DelayButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): DelayButtonBuilder;
  onImplicitWidthChanged(handler: () => void): DelayButtonBuilder;
  onIndicatorChanged(handler: () => void): DelayButtonBuilder;
  onLeftInsetChanged(handler: () => void): DelayButtonBuilder;
  onLeftPaddingChanged(handler: () => void): DelayButtonBuilder;
  onLocaleChanged(handler: () => void): DelayButtonBuilder;
  onMirroredChanged(handler: () => void): DelayButtonBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DelayButtonBuilder;
  onOpacityChanged(handler: () => void): DelayButtonBuilder;
  onPaddingChanged(handler: () => void): DelayButtonBuilder;
  onPaletteChanged(handler: () => void): DelayButtonBuilder;
  onPaletteCreated(handler: () => void): DelayButtonBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): DelayButtonBuilder;
  onPressAndHold(handler: () => void): DelayButtonBuilder;
  onPressXChanged(handler: () => void): DelayButtonBuilder;
  onPressYChanged(handler: () => void): DelayButtonBuilder;
  onPressed(handler: () => void): DelayButtonBuilder;
  onPressedChanged(handler: () => void): DelayButtonBuilder;
  onProgressChanged(handler: () => void): DelayButtonBuilder;
  onReleased(handler: () => void): DelayButtonBuilder;
  onRightInsetChanged(handler: () => void): DelayButtonBuilder;
  onRightPaddingChanged(handler: () => void): DelayButtonBuilder;
  onRotationChanged(handler: () => void): DelayButtonBuilder;
  onScaleChanged(handler: () => void): DelayButtonBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): DelayButtonBuilder;
  onSpacingChanged(handler: () => void): DelayButtonBuilder;
  onStateChanged(handler: (arg0: string) => void): DelayButtonBuilder;
  onTextChanged(handler: () => void): DelayButtonBuilder;
  onToggled(handler: () => void): DelayButtonBuilder;
  onTopInsetChanged(handler: () => void): DelayButtonBuilder;
  onTopPaddingChanged(handler: () => void): DelayButtonBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): DelayButtonBuilder;
  onTransitionChanged(handler: () => void): DelayButtonBuilder;
  onVerticalPaddingChanged(handler: () => void): DelayButtonBuilder;
  onVisibleChanged(handler: () => void): DelayButtonBuilder;
  onVisibleChildrenChanged(handler: () => void): DelayButtonBuilder;
  onVisualFocusChanged(handler: () => void): DelayButtonBuilder;
  onWheelEnabledChanged(handler: () => void): DelayButtonBuilder;
  onWidthChanged(handler: () => void): DelayButtonBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): DelayButtonBuilder;
  onXChanged(handler: () => void): DelayButtonBuilder;
  onYChanged(handler: () => void): DelayButtonBuilder;
  onZChanged(handler: () => void): DelayButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DelayButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): DelayButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DelayButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DelayButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DelayButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DelayButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DelayButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DelayButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DelayButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DelayButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DelayButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DelayButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DelayButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DelayButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DelayButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DelayButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DelayButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DelayButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DelayButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DelayButtonBuilder;
}

export function DelayButton(): DelayButtonBuilder {
  return new DslBuilderImpl('DelayButton') as unknown as DelayButtonBuilder;
}

export namespace DelayButton {
  export namespace Display {
    export const IconOnly = createEnumToken('DelayButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('DelayButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('DelayButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('DelayButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DelayButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DelayButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DelayButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DelayButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('DelayButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DelayButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DelayButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DelayButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DelayButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DelayButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DelayButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DelayButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DelayButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DelayButton', 'TransformOrigin', 'BottomRight');
  }
}
