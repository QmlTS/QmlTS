// AUTO-GENERATED — DO NOT EDIT
// Type: RoundButton
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
export interface RoundButtonBuilder {
  id(id: string): RoundButtonBuilder;
  child(obj: QmlObjectBuilder): RoundButtonBuilder;

  action(value: ActionBuilder): RoundButtonBuilder;
  actionBind(expr: string): RoundButtonBuilder;
  activeFocusOnTab(value: boolean): RoundButtonBuilder;
  activeFocusOnTabBind(expr: string): RoundButtonBuilder;
  antialiasing(value: boolean): RoundButtonBuilder;
  antialiasingBind(expr: string): RoundButtonBuilder;
  autoExclusive(value: boolean): RoundButtonBuilder;
  autoExclusiveBind(expr: string): RoundButtonBuilder;
  autoRepeat(value: boolean): RoundButtonBuilder;
  autoRepeatBind(expr: string): RoundButtonBuilder;
  autoRepeatDelay(value: number): RoundButtonBuilder;
  autoRepeatDelayBind(expr: string): RoundButtonBuilder;
  autoRepeatInterval(value: number): RoundButtonBuilder;
  autoRepeatIntervalBind(expr: string): RoundButtonBuilder;
  background(value: ItemBuilder): RoundButtonBuilder;
  backgroundBind(expr: string): RoundButtonBuilder;
  baselineOffset(value: number): RoundButtonBuilder;
  baselineOffsetBind(expr: string): RoundButtonBuilder;
  bottomInset(value: number): RoundButtonBuilder;
  bottomInsetBind(expr: string): RoundButtonBuilder;
  bottomPadding(value: number): RoundButtonBuilder;
  bottomPaddingBind(expr: string): RoundButtonBuilder;
  checkable(value: boolean): RoundButtonBuilder;
  checkableBind(expr: string): RoundButtonBuilder;
  checked(value: boolean): RoundButtonBuilder;
  checkedBind(expr: string): RoundButtonBuilder;
  clip(value: boolean): RoundButtonBuilder;
  clipBind(expr: string): RoundButtonBuilder;
  containmentMask(value: QtObjectBuilder): RoundButtonBuilder;
  containmentMaskBind(expr: string): RoundButtonBuilder;
  contentItem(value: ItemBuilder): RoundButtonBuilder;
  contentItemBind(expr: string): RoundButtonBuilder;
  display(value: QmlValue): RoundButtonBuilder;
  displayBind(expr: string): RoundButtonBuilder;
  down(value: boolean): RoundButtonBuilder;
  downBind(expr: string): RoundButtonBuilder;
  enabled(value: boolean): RoundButtonBuilder;
  enabledBind(expr: string): RoundButtonBuilder;
  flat(value: boolean): RoundButtonBuilder;
  flatBind(expr: string): RoundButtonBuilder;
  focus(value: boolean): RoundButtonBuilder;
  focusBind(expr: string): RoundButtonBuilder;
  focusPolicy(value: QmlValue): RoundButtonBuilder;
  focusPolicyBind(expr: string): RoundButtonBuilder;
  focusReason(value: QmlValue): RoundButtonBuilder;
  focusReasonBind(expr: string): RoundButtonBuilder;
  font(value: QmlFont): RoundButtonBuilder;
  fontBind(expr: string): RoundButtonBuilder;
  height(value: number): RoundButtonBuilder;
  heightBind(expr: string): RoundButtonBuilder;
  highlighted(value: boolean): RoundButtonBuilder;
  highlightedBind(expr: string): RoundButtonBuilder;
  horizontalPadding(value: number): RoundButtonBuilder;
  horizontalPaddingBind(expr: string): RoundButtonBuilder;
  hoverEnabled(value: boolean): RoundButtonBuilder;
  hoverEnabledBind(expr: string): RoundButtonBuilder;
  icon(value: QmlValue): RoundButtonBuilder;
  iconBind(expr: string): RoundButtonBuilder;
  implicitHeight(value: number): RoundButtonBuilder;
  implicitHeightBind(expr: string): RoundButtonBuilder;
  implicitWidth(value: number): RoundButtonBuilder;
  implicitWidthBind(expr: string): RoundButtonBuilder;
  indicator(value: ItemBuilder): RoundButtonBuilder;
  indicatorBind(expr: string): RoundButtonBuilder;
  leftInset(value: number): RoundButtonBuilder;
  leftInsetBind(expr: string): RoundButtonBuilder;
  leftPadding(value: number): RoundButtonBuilder;
  leftPaddingBind(expr: string): RoundButtonBuilder;
  locale(value: QmlValue): RoundButtonBuilder;
  localeBind(expr: string): RoundButtonBuilder;
  objectName(value: string): RoundButtonBuilder;
  objectNameBind(expr: string): RoundButtonBuilder;
  opacity(value: number): RoundButtonBuilder;
  opacityBind(expr: string): RoundButtonBuilder;
  padding(value: number): RoundButtonBuilder;
  paddingBind(expr: string): RoundButtonBuilder;
  palette(value: PaletteBuilder): RoundButtonBuilder;
  paletteBind(expr: string): RoundButtonBuilder;
  parent(value: ItemBuilder): RoundButtonBuilder;
  parentBind(expr: string): RoundButtonBuilder;
  radius(value: number): RoundButtonBuilder;
  radiusBind(expr: string): RoundButtonBuilder;
  rightInset(value: number): RoundButtonBuilder;
  rightInsetBind(expr: string): RoundButtonBuilder;
  rightPadding(value: number): RoundButtonBuilder;
  rightPaddingBind(expr: string): RoundButtonBuilder;
  rotation(value: number): RoundButtonBuilder;
  rotationBind(expr: string): RoundButtonBuilder;
  scale(value: number): RoundButtonBuilder;
  scaleBind(expr: string): RoundButtonBuilder;
  smooth(value: boolean): RoundButtonBuilder;
  smoothBind(expr: string): RoundButtonBuilder;
  spacing(value: number): RoundButtonBuilder;
  spacingBind(expr: string): RoundButtonBuilder;
  state(value: string): RoundButtonBuilder;
  stateBind(expr: string): RoundButtonBuilder;
  text(value: string): RoundButtonBuilder;
  textBind(expr: string): RoundButtonBuilder;
  topInset(value: number): RoundButtonBuilder;
  topInsetBind(expr: string): RoundButtonBuilder;
  topPadding(value: number): RoundButtonBuilder;
  topPaddingBind(expr: string): RoundButtonBuilder;
  transformOrigin(value: QmlValue): RoundButtonBuilder;
  transformOriginBind(expr: string): RoundButtonBuilder;
  verticalPadding(value: number): RoundButtonBuilder;
  verticalPaddingBind(expr: string): RoundButtonBuilder;
  visible(value: boolean): RoundButtonBuilder;
  visibleBind(expr: string): RoundButtonBuilder;
  wheelEnabled(value: boolean): RoundButtonBuilder;
  wheelEnabledBind(expr: string): RoundButtonBuilder;
  width(value: number): RoundButtonBuilder;
  widthBind(expr: string): RoundButtonBuilder;
  x(value: number): RoundButtonBuilder;
  xBind(expr: string): RoundButtonBuilder;
  y(value: number): RoundButtonBuilder;
  yBind(expr: string): RoundButtonBuilder;
  z(value: number): RoundButtonBuilder;
  zBind(expr: string): RoundButtonBuilder;
  onActionChanged(handler: () => void): RoundButtonBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RoundButtonBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RoundButtonBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RoundButtonBuilder;
  onAutoExclusiveChanged(handler: () => void): RoundButtonBuilder;
  onAutoRepeatChanged(handler: () => void): RoundButtonBuilder;
  onAutoRepeatDelayChanged(handler: () => void): RoundButtonBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): RoundButtonBuilder;
  onAvailableHeightChanged(handler: () => void): RoundButtonBuilder;
  onAvailableWidthChanged(handler: () => void): RoundButtonBuilder;
  onBackgroundChanged(handler: () => void): RoundButtonBuilder;
  onBaselineOffsetChanged(handler: () => void): RoundButtonBuilder;
  onBottomInsetChanged(handler: () => void): RoundButtonBuilder;
  onBottomPaddingChanged(handler: () => void): RoundButtonBuilder;
  onCanceled(handler: () => void): RoundButtonBuilder;
  onCheckableChanged(handler: () => void): RoundButtonBuilder;
  onCheckedChanged(handler: () => void): RoundButtonBuilder;
  onChildrenChanged(handler: () => void): RoundButtonBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RoundButtonBuilder;
  onClicked(handler: () => void): RoundButtonBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RoundButtonBuilder;
  onContainmentMaskChanged(handler: () => void): RoundButtonBuilder;
  onContentItemChanged(handler: () => void): RoundButtonBuilder;
  onDisplayChanged(handler: () => void): RoundButtonBuilder;
  onDoubleClicked(handler: () => void): RoundButtonBuilder;
  onDownChanged(handler: () => void): RoundButtonBuilder;
  onEnabledChanged(handler: () => void): RoundButtonBuilder;
  onFlatChanged(handler: () => void): RoundButtonBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RoundButtonBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RoundButtonBuilder;
  onFocusReasonChanged(handler: () => void): RoundButtonBuilder;
  onFontChanged(handler: () => void): RoundButtonBuilder;
  onHeightChanged(handler: () => void): RoundButtonBuilder;
  onHighlightedChanged(handler: () => void): RoundButtonBuilder;
  onHorizontalPaddingChanged(handler: () => void): RoundButtonBuilder;
  onHoverEnabledChanged(handler: () => void): RoundButtonBuilder;
  onHoveredChanged(handler: () => void): RoundButtonBuilder;
  onIconChanged(handler: () => void): RoundButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): RoundButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): RoundButtonBuilder;
  onImplicitContentHeightChanged(handler: () => void): RoundButtonBuilder;
  onImplicitContentWidthChanged(handler: () => void): RoundButtonBuilder;
  onImplicitHeightChanged(handler: () => void): RoundButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): RoundButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): RoundButtonBuilder;
  onImplicitWidthChanged(handler: () => void): RoundButtonBuilder;
  onIndicatorChanged(handler: () => void): RoundButtonBuilder;
  onLeftInsetChanged(handler: () => void): RoundButtonBuilder;
  onLeftPaddingChanged(handler: () => void): RoundButtonBuilder;
  onLocaleChanged(handler: () => void): RoundButtonBuilder;
  onMirroredChanged(handler: () => void): RoundButtonBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RoundButtonBuilder;
  onOpacityChanged(handler: () => void): RoundButtonBuilder;
  onPaddingChanged(handler: () => void): RoundButtonBuilder;
  onPaletteChanged(handler: () => void): RoundButtonBuilder;
  onPaletteCreated(handler: () => void): RoundButtonBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RoundButtonBuilder;
  onPressAndHold(handler: () => void): RoundButtonBuilder;
  onPressXChanged(handler: () => void): RoundButtonBuilder;
  onPressYChanged(handler: () => void): RoundButtonBuilder;
  onPressed(handler: () => void): RoundButtonBuilder;
  onPressedChanged(handler: () => void): RoundButtonBuilder;
  onRadiusChanged(handler: () => void): RoundButtonBuilder;
  onReleased(handler: () => void): RoundButtonBuilder;
  onRightInsetChanged(handler: () => void): RoundButtonBuilder;
  onRightPaddingChanged(handler: () => void): RoundButtonBuilder;
  onRotationChanged(handler: () => void): RoundButtonBuilder;
  onScaleChanged(handler: () => void): RoundButtonBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RoundButtonBuilder;
  onSpacingChanged(handler: () => void): RoundButtonBuilder;
  onStateChanged(handler: (arg0: string) => void): RoundButtonBuilder;
  onTextChanged(handler: () => void): RoundButtonBuilder;
  onToggled(handler: () => void): RoundButtonBuilder;
  onTopInsetChanged(handler: () => void): RoundButtonBuilder;
  onTopPaddingChanged(handler: () => void): RoundButtonBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RoundButtonBuilder;
  onVerticalPaddingChanged(handler: () => void): RoundButtonBuilder;
  onVisibleChanged(handler: () => void): RoundButtonBuilder;
  onVisibleChildrenChanged(handler: () => void): RoundButtonBuilder;
  onVisualFocusChanged(handler: () => void): RoundButtonBuilder;
  onWheelEnabledChanged(handler: () => void): RoundButtonBuilder;
  onWidthChanged(handler: () => void): RoundButtonBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RoundButtonBuilder;
  onXChanged(handler: () => void): RoundButtonBuilder;
  onYChanged(handler: () => void): RoundButtonBuilder;
  onZChanged(handler: () => void): RoundButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RoundButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): RoundButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RoundButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RoundButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RoundButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RoundButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RoundButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RoundButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RoundButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RoundButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RoundButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RoundButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RoundButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RoundButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RoundButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RoundButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RoundButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RoundButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RoundButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RoundButtonBuilder;
}

export function RoundButton(): RoundButtonBuilder {
  return new DslBuilderImpl('RoundButton') as unknown as RoundButtonBuilder;
}

export namespace RoundButton {
  export namespace Display {
    export const IconOnly = createEnumToken('RoundButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('RoundButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('RoundButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('RoundButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RoundButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RoundButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RoundButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RoundButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RoundButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RoundButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RoundButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('RoundButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RoundButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RoundButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RoundButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RoundButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RoundButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RoundButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RoundButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RoundButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RoundButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RoundButton', 'TransformOrigin', 'BottomRight');
  }
}
