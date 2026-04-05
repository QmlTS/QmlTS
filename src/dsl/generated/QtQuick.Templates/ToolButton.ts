// AUTO-GENERATED — DO NOT EDIT
// Type: ToolButton
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
export interface ToolButtonBuilder {
  id(id: string): ToolButtonBuilder;
  child(obj: QmlObjectBuilder): ToolButtonBuilder;

  action(value: ActionBuilder): ToolButtonBuilder;
  actionBind(expr: string): ToolButtonBuilder;
  activeFocusOnTab(value: boolean): ToolButtonBuilder;
  activeFocusOnTabBind(expr: string): ToolButtonBuilder;
  antialiasing(value: boolean): ToolButtonBuilder;
  antialiasingBind(expr: string): ToolButtonBuilder;
  autoExclusive(value: boolean): ToolButtonBuilder;
  autoExclusiveBind(expr: string): ToolButtonBuilder;
  autoRepeat(value: boolean): ToolButtonBuilder;
  autoRepeatBind(expr: string): ToolButtonBuilder;
  autoRepeatDelay(value: number): ToolButtonBuilder;
  autoRepeatDelayBind(expr: string): ToolButtonBuilder;
  autoRepeatInterval(value: number): ToolButtonBuilder;
  autoRepeatIntervalBind(expr: string): ToolButtonBuilder;
  background(value: ItemBuilder): ToolButtonBuilder;
  backgroundBind(expr: string): ToolButtonBuilder;
  baselineOffset(value: number): ToolButtonBuilder;
  baselineOffsetBind(expr: string): ToolButtonBuilder;
  bottomInset(value: number): ToolButtonBuilder;
  bottomInsetBind(expr: string): ToolButtonBuilder;
  bottomPadding(value: number): ToolButtonBuilder;
  bottomPaddingBind(expr: string): ToolButtonBuilder;
  checkable(value: boolean): ToolButtonBuilder;
  checkableBind(expr: string): ToolButtonBuilder;
  checked(value: boolean): ToolButtonBuilder;
  checkedBind(expr: string): ToolButtonBuilder;
  clip(value: boolean): ToolButtonBuilder;
  clipBind(expr: string): ToolButtonBuilder;
  containmentMask(value: QtObjectBuilder): ToolButtonBuilder;
  containmentMaskBind(expr: string): ToolButtonBuilder;
  contentItem(value: ItemBuilder): ToolButtonBuilder;
  contentItemBind(expr: string): ToolButtonBuilder;
  display(value: QmlValue): ToolButtonBuilder;
  displayBind(expr: string): ToolButtonBuilder;
  down(value: boolean): ToolButtonBuilder;
  downBind(expr: string): ToolButtonBuilder;
  enabled(value: boolean): ToolButtonBuilder;
  enabledBind(expr: string): ToolButtonBuilder;
  flat(value: boolean): ToolButtonBuilder;
  flatBind(expr: string): ToolButtonBuilder;
  focus(value: boolean): ToolButtonBuilder;
  focusBind(expr: string): ToolButtonBuilder;
  focusPolicy(value: QmlValue): ToolButtonBuilder;
  focusPolicyBind(expr: string): ToolButtonBuilder;
  focusReason(value: QmlValue): ToolButtonBuilder;
  focusReasonBind(expr: string): ToolButtonBuilder;
  font(value: QmlFont): ToolButtonBuilder;
  fontBind(expr: string): ToolButtonBuilder;
  height(value: number): ToolButtonBuilder;
  heightBind(expr: string): ToolButtonBuilder;
  highlighted(value: boolean): ToolButtonBuilder;
  highlightedBind(expr: string): ToolButtonBuilder;
  horizontalPadding(value: number): ToolButtonBuilder;
  horizontalPaddingBind(expr: string): ToolButtonBuilder;
  hoverEnabled(value: boolean): ToolButtonBuilder;
  hoverEnabledBind(expr: string): ToolButtonBuilder;
  icon(value: QmlValue): ToolButtonBuilder;
  iconBind(expr: string): ToolButtonBuilder;
  implicitHeight(value: number): ToolButtonBuilder;
  implicitHeightBind(expr: string): ToolButtonBuilder;
  implicitWidth(value: number): ToolButtonBuilder;
  implicitWidthBind(expr: string): ToolButtonBuilder;
  indicator(value: ItemBuilder): ToolButtonBuilder;
  indicatorBind(expr: string): ToolButtonBuilder;
  leftInset(value: number): ToolButtonBuilder;
  leftInsetBind(expr: string): ToolButtonBuilder;
  leftPadding(value: number): ToolButtonBuilder;
  leftPaddingBind(expr: string): ToolButtonBuilder;
  locale(value: QmlValue): ToolButtonBuilder;
  localeBind(expr: string): ToolButtonBuilder;
  objectName(value: string): ToolButtonBuilder;
  objectNameBind(expr: string): ToolButtonBuilder;
  opacity(value: number): ToolButtonBuilder;
  opacityBind(expr: string): ToolButtonBuilder;
  padding(value: number): ToolButtonBuilder;
  paddingBind(expr: string): ToolButtonBuilder;
  palette(value: PaletteBuilder): ToolButtonBuilder;
  paletteBind(expr: string): ToolButtonBuilder;
  parent(value: ItemBuilder): ToolButtonBuilder;
  parentBind(expr: string): ToolButtonBuilder;
  rightInset(value: number): ToolButtonBuilder;
  rightInsetBind(expr: string): ToolButtonBuilder;
  rightPadding(value: number): ToolButtonBuilder;
  rightPaddingBind(expr: string): ToolButtonBuilder;
  rotation(value: number): ToolButtonBuilder;
  rotationBind(expr: string): ToolButtonBuilder;
  scale(value: number): ToolButtonBuilder;
  scaleBind(expr: string): ToolButtonBuilder;
  smooth(value: boolean): ToolButtonBuilder;
  smoothBind(expr: string): ToolButtonBuilder;
  spacing(value: number): ToolButtonBuilder;
  spacingBind(expr: string): ToolButtonBuilder;
  state(value: string): ToolButtonBuilder;
  stateBind(expr: string): ToolButtonBuilder;
  text(value: string): ToolButtonBuilder;
  textBind(expr: string): ToolButtonBuilder;
  topInset(value: number): ToolButtonBuilder;
  topInsetBind(expr: string): ToolButtonBuilder;
  topPadding(value: number): ToolButtonBuilder;
  topPaddingBind(expr: string): ToolButtonBuilder;
  transformOrigin(value: QmlValue): ToolButtonBuilder;
  transformOriginBind(expr: string): ToolButtonBuilder;
  verticalPadding(value: number): ToolButtonBuilder;
  verticalPaddingBind(expr: string): ToolButtonBuilder;
  visible(value: boolean): ToolButtonBuilder;
  visibleBind(expr: string): ToolButtonBuilder;
  wheelEnabled(value: boolean): ToolButtonBuilder;
  wheelEnabledBind(expr: string): ToolButtonBuilder;
  width(value: number): ToolButtonBuilder;
  widthBind(expr: string): ToolButtonBuilder;
  x(value: number): ToolButtonBuilder;
  xBind(expr: string): ToolButtonBuilder;
  y(value: number): ToolButtonBuilder;
  yBind(expr: string): ToolButtonBuilder;
  z(value: number): ToolButtonBuilder;
  zBind(expr: string): ToolButtonBuilder;
  onActionChanged(handler: () => void): ToolButtonBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ToolButtonBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ToolButtonBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ToolButtonBuilder;
  onAutoExclusiveChanged(handler: () => void): ToolButtonBuilder;
  onAutoRepeatChanged(handler: () => void): ToolButtonBuilder;
  onAutoRepeatDelayChanged(handler: () => void): ToolButtonBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): ToolButtonBuilder;
  onAvailableHeightChanged(handler: () => void): ToolButtonBuilder;
  onAvailableWidthChanged(handler: () => void): ToolButtonBuilder;
  onBackgroundChanged(handler: () => void): ToolButtonBuilder;
  onBaselineOffsetChanged(handler: () => void): ToolButtonBuilder;
  onBottomInsetChanged(handler: () => void): ToolButtonBuilder;
  onBottomPaddingChanged(handler: () => void): ToolButtonBuilder;
  onCanceled(handler: () => void): ToolButtonBuilder;
  onCheckableChanged(handler: () => void): ToolButtonBuilder;
  onCheckedChanged(handler: () => void): ToolButtonBuilder;
  onChildrenChanged(handler: () => void): ToolButtonBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ToolButtonBuilder;
  onClicked(handler: () => void): ToolButtonBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ToolButtonBuilder;
  onContainmentMaskChanged(handler: () => void): ToolButtonBuilder;
  onContentItemChanged(handler: () => void): ToolButtonBuilder;
  onDisplayChanged(handler: () => void): ToolButtonBuilder;
  onDoubleClicked(handler: () => void): ToolButtonBuilder;
  onDownChanged(handler: () => void): ToolButtonBuilder;
  onEnabledChanged(handler: () => void): ToolButtonBuilder;
  onFlatChanged(handler: () => void): ToolButtonBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ToolButtonBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ToolButtonBuilder;
  onFocusReasonChanged(handler: () => void): ToolButtonBuilder;
  onFontChanged(handler: () => void): ToolButtonBuilder;
  onHeightChanged(handler: () => void): ToolButtonBuilder;
  onHighlightedChanged(handler: () => void): ToolButtonBuilder;
  onHorizontalPaddingChanged(handler: () => void): ToolButtonBuilder;
  onHoverEnabledChanged(handler: () => void): ToolButtonBuilder;
  onHoveredChanged(handler: () => void): ToolButtonBuilder;
  onIconChanged(handler: () => void): ToolButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ToolButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ToolButtonBuilder;
  onImplicitContentHeightChanged(handler: () => void): ToolButtonBuilder;
  onImplicitContentWidthChanged(handler: () => void): ToolButtonBuilder;
  onImplicitHeightChanged(handler: () => void): ToolButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): ToolButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): ToolButtonBuilder;
  onImplicitWidthChanged(handler: () => void): ToolButtonBuilder;
  onIndicatorChanged(handler: () => void): ToolButtonBuilder;
  onLeftInsetChanged(handler: () => void): ToolButtonBuilder;
  onLeftPaddingChanged(handler: () => void): ToolButtonBuilder;
  onLocaleChanged(handler: () => void): ToolButtonBuilder;
  onMirroredChanged(handler: () => void): ToolButtonBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ToolButtonBuilder;
  onOpacityChanged(handler: () => void): ToolButtonBuilder;
  onPaddingChanged(handler: () => void): ToolButtonBuilder;
  onPaletteChanged(handler: () => void): ToolButtonBuilder;
  onPaletteCreated(handler: () => void): ToolButtonBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ToolButtonBuilder;
  onPressAndHold(handler: () => void): ToolButtonBuilder;
  onPressXChanged(handler: () => void): ToolButtonBuilder;
  onPressYChanged(handler: () => void): ToolButtonBuilder;
  onPressed(handler: () => void): ToolButtonBuilder;
  onPressedChanged(handler: () => void): ToolButtonBuilder;
  onReleased(handler: () => void): ToolButtonBuilder;
  onRightInsetChanged(handler: () => void): ToolButtonBuilder;
  onRightPaddingChanged(handler: () => void): ToolButtonBuilder;
  onRotationChanged(handler: () => void): ToolButtonBuilder;
  onScaleChanged(handler: () => void): ToolButtonBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ToolButtonBuilder;
  onSpacingChanged(handler: () => void): ToolButtonBuilder;
  onStateChanged(handler: (arg0: string) => void): ToolButtonBuilder;
  onTextChanged(handler: () => void): ToolButtonBuilder;
  onToggled(handler: () => void): ToolButtonBuilder;
  onTopInsetChanged(handler: () => void): ToolButtonBuilder;
  onTopPaddingChanged(handler: () => void): ToolButtonBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ToolButtonBuilder;
  onVerticalPaddingChanged(handler: () => void): ToolButtonBuilder;
  onVisibleChanged(handler: () => void): ToolButtonBuilder;
  onVisibleChildrenChanged(handler: () => void): ToolButtonBuilder;
  onVisualFocusChanged(handler: () => void): ToolButtonBuilder;
  onWheelEnabledChanged(handler: () => void): ToolButtonBuilder;
  onWidthChanged(handler: () => void): ToolButtonBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ToolButtonBuilder;
  onXChanged(handler: () => void): ToolButtonBuilder;
  onYChanged(handler: () => void): ToolButtonBuilder;
  onZChanged(handler: () => void): ToolButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ToolButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): ToolButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ToolButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ToolButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ToolButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ToolButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ToolButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ToolButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ToolButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ToolButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ToolButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ToolButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ToolButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ToolButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ToolButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ToolButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ToolButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ToolButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ToolButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ToolButtonBuilder;
}

export function ToolButton(): ToolButtonBuilder {
  return new DslBuilderImpl('ToolButton') as unknown as ToolButtonBuilder;
}

export namespace ToolButton {
  export namespace Display {
    export const IconOnly = createEnumToken('ToolButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('ToolButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('ToolButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('ToolButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ToolButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ToolButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ToolButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ToolButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ToolButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ToolButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ToolButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ToolButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ToolButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ToolButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ToolButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ToolButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ToolButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ToolButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ToolButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ToolButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ToolButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ToolButton', 'TransformOrigin', 'BottomRight');
  }
}
