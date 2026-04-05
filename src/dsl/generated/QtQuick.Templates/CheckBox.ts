// AUTO-GENERATED — DO NOT EDIT
// Type: CheckBox
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
export interface CheckBoxBuilder {
  id(id: string): CheckBoxBuilder;
  child(obj: QmlObjectBuilder): CheckBoxBuilder;

  action(value: ActionBuilder): CheckBoxBuilder;
  actionBind(expr: string): CheckBoxBuilder;
  activeFocusOnTab(value: boolean): CheckBoxBuilder;
  activeFocusOnTabBind(expr: string): CheckBoxBuilder;
  antialiasing(value: boolean): CheckBoxBuilder;
  antialiasingBind(expr: string): CheckBoxBuilder;
  autoExclusive(value: boolean): CheckBoxBuilder;
  autoExclusiveBind(expr: string): CheckBoxBuilder;
  autoRepeat(value: boolean): CheckBoxBuilder;
  autoRepeatBind(expr: string): CheckBoxBuilder;
  autoRepeatDelay(value: number): CheckBoxBuilder;
  autoRepeatDelayBind(expr: string): CheckBoxBuilder;
  autoRepeatInterval(value: number): CheckBoxBuilder;
  autoRepeatIntervalBind(expr: string): CheckBoxBuilder;
  background(value: ItemBuilder): CheckBoxBuilder;
  backgroundBind(expr: string): CheckBoxBuilder;
  baselineOffset(value: number): CheckBoxBuilder;
  baselineOffsetBind(expr: string): CheckBoxBuilder;
  bottomInset(value: number): CheckBoxBuilder;
  bottomInsetBind(expr: string): CheckBoxBuilder;
  bottomPadding(value: number): CheckBoxBuilder;
  bottomPaddingBind(expr: string): CheckBoxBuilder;
  checkState(value: QmlValue): CheckBoxBuilder;
  checkStateBind(expr: string): CheckBoxBuilder;
  checkable(value: boolean): CheckBoxBuilder;
  checkableBind(expr: string): CheckBoxBuilder;
  checked(value: boolean): CheckBoxBuilder;
  checkedBind(expr: string): CheckBoxBuilder;
  clip(value: boolean): CheckBoxBuilder;
  clipBind(expr: string): CheckBoxBuilder;
  containmentMask(value: QtObjectBuilder): CheckBoxBuilder;
  containmentMaskBind(expr: string): CheckBoxBuilder;
  contentItem(value: ItemBuilder): CheckBoxBuilder;
  contentItemBind(expr: string): CheckBoxBuilder;
  display(value: QmlValue): CheckBoxBuilder;
  displayBind(expr: string): CheckBoxBuilder;
  down(value: boolean): CheckBoxBuilder;
  downBind(expr: string): CheckBoxBuilder;
  enabled(value: boolean): CheckBoxBuilder;
  enabledBind(expr: string): CheckBoxBuilder;
  focus(value: boolean): CheckBoxBuilder;
  focusBind(expr: string): CheckBoxBuilder;
  focusPolicy(value: QmlValue): CheckBoxBuilder;
  focusPolicyBind(expr: string): CheckBoxBuilder;
  focusReason(value: QmlValue): CheckBoxBuilder;
  focusReasonBind(expr: string): CheckBoxBuilder;
  font(value: QmlFont): CheckBoxBuilder;
  fontBind(expr: string): CheckBoxBuilder;
  height(value: number): CheckBoxBuilder;
  heightBind(expr: string): CheckBoxBuilder;
  horizontalPadding(value: number): CheckBoxBuilder;
  horizontalPaddingBind(expr: string): CheckBoxBuilder;
  hoverEnabled(value: boolean): CheckBoxBuilder;
  hoverEnabledBind(expr: string): CheckBoxBuilder;
  icon(value: QmlValue): CheckBoxBuilder;
  iconBind(expr: string): CheckBoxBuilder;
  implicitHeight(value: number): CheckBoxBuilder;
  implicitHeightBind(expr: string): CheckBoxBuilder;
  implicitWidth(value: number): CheckBoxBuilder;
  implicitWidthBind(expr: string): CheckBoxBuilder;
  indicator(value: ItemBuilder): CheckBoxBuilder;
  indicatorBind(expr: string): CheckBoxBuilder;
  leftInset(value: number): CheckBoxBuilder;
  leftInsetBind(expr: string): CheckBoxBuilder;
  leftPadding(value: number): CheckBoxBuilder;
  leftPaddingBind(expr: string): CheckBoxBuilder;
  locale(value: QmlValue): CheckBoxBuilder;
  localeBind(expr: string): CheckBoxBuilder;
  nextCheckState(value: QmlValue): CheckBoxBuilder;
  nextCheckStateBind(expr: string): CheckBoxBuilder;
  objectName(value: string): CheckBoxBuilder;
  objectNameBind(expr: string): CheckBoxBuilder;
  opacity(value: number): CheckBoxBuilder;
  opacityBind(expr: string): CheckBoxBuilder;
  padding(value: number): CheckBoxBuilder;
  paddingBind(expr: string): CheckBoxBuilder;
  palette(value: PaletteBuilder): CheckBoxBuilder;
  paletteBind(expr: string): CheckBoxBuilder;
  parent(value: ItemBuilder): CheckBoxBuilder;
  parentBind(expr: string): CheckBoxBuilder;
  rightInset(value: number): CheckBoxBuilder;
  rightInsetBind(expr: string): CheckBoxBuilder;
  rightPadding(value: number): CheckBoxBuilder;
  rightPaddingBind(expr: string): CheckBoxBuilder;
  rotation(value: number): CheckBoxBuilder;
  rotationBind(expr: string): CheckBoxBuilder;
  scale(value: number): CheckBoxBuilder;
  scaleBind(expr: string): CheckBoxBuilder;
  smooth(value: boolean): CheckBoxBuilder;
  smoothBind(expr: string): CheckBoxBuilder;
  spacing(value: number): CheckBoxBuilder;
  spacingBind(expr: string): CheckBoxBuilder;
  state(value: string): CheckBoxBuilder;
  stateBind(expr: string): CheckBoxBuilder;
  text(value: string): CheckBoxBuilder;
  textBind(expr: string): CheckBoxBuilder;
  topInset(value: number): CheckBoxBuilder;
  topInsetBind(expr: string): CheckBoxBuilder;
  topPadding(value: number): CheckBoxBuilder;
  topPaddingBind(expr: string): CheckBoxBuilder;
  transformOrigin(value: QmlValue): CheckBoxBuilder;
  transformOriginBind(expr: string): CheckBoxBuilder;
  tristate(value: boolean): CheckBoxBuilder;
  tristateBind(expr: string): CheckBoxBuilder;
  verticalPadding(value: number): CheckBoxBuilder;
  verticalPaddingBind(expr: string): CheckBoxBuilder;
  visible(value: boolean): CheckBoxBuilder;
  visibleBind(expr: string): CheckBoxBuilder;
  wheelEnabled(value: boolean): CheckBoxBuilder;
  wheelEnabledBind(expr: string): CheckBoxBuilder;
  width(value: number): CheckBoxBuilder;
  widthBind(expr: string): CheckBoxBuilder;
  x(value: number): CheckBoxBuilder;
  xBind(expr: string): CheckBoxBuilder;
  y(value: number): CheckBoxBuilder;
  yBind(expr: string): CheckBoxBuilder;
  z(value: number): CheckBoxBuilder;
  zBind(expr: string): CheckBoxBuilder;
  onActionChanged(handler: () => void): CheckBoxBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): CheckBoxBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): CheckBoxBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): CheckBoxBuilder;
  onAutoExclusiveChanged(handler: () => void): CheckBoxBuilder;
  onAutoRepeatChanged(handler: () => void): CheckBoxBuilder;
  onAutoRepeatDelayChanged(handler: () => void): CheckBoxBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): CheckBoxBuilder;
  onAvailableHeightChanged(handler: () => void): CheckBoxBuilder;
  onAvailableWidthChanged(handler: () => void): CheckBoxBuilder;
  onBackgroundChanged(handler: () => void): CheckBoxBuilder;
  onBaselineOffsetChanged(handler: () => void): CheckBoxBuilder;
  onBottomInsetChanged(handler: () => void): CheckBoxBuilder;
  onBottomPaddingChanged(handler: () => void): CheckBoxBuilder;
  onCanceled(handler: () => void): CheckBoxBuilder;
  onCheckStateChanged(handler: () => void): CheckBoxBuilder;
  onCheckableChanged(handler: () => void): CheckBoxBuilder;
  onCheckedChanged(handler: () => void): CheckBoxBuilder;
  onChildrenChanged(handler: () => void): CheckBoxBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): CheckBoxBuilder;
  onClicked(handler: () => void): CheckBoxBuilder;
  onClipChanged(handler: (arg0: boolean) => void): CheckBoxBuilder;
  onContainmentMaskChanged(handler: () => void): CheckBoxBuilder;
  onContentItemChanged(handler: () => void): CheckBoxBuilder;
  onDisplayChanged(handler: () => void): CheckBoxBuilder;
  onDoubleClicked(handler: () => void): CheckBoxBuilder;
  onDownChanged(handler: () => void): CheckBoxBuilder;
  onEnabledChanged(handler: () => void): CheckBoxBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): CheckBoxBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): CheckBoxBuilder;
  onFocusReasonChanged(handler: () => void): CheckBoxBuilder;
  onFontChanged(handler: () => void): CheckBoxBuilder;
  onHeightChanged(handler: () => void): CheckBoxBuilder;
  onHorizontalPaddingChanged(handler: () => void): CheckBoxBuilder;
  onHoverEnabledChanged(handler: () => void): CheckBoxBuilder;
  onHoveredChanged(handler: () => void): CheckBoxBuilder;
  onIconChanged(handler: () => void): CheckBoxBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): CheckBoxBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): CheckBoxBuilder;
  onImplicitContentHeightChanged(handler: () => void): CheckBoxBuilder;
  onImplicitContentWidthChanged(handler: () => void): CheckBoxBuilder;
  onImplicitHeightChanged(handler: () => void): CheckBoxBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): CheckBoxBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): CheckBoxBuilder;
  onImplicitWidthChanged(handler: () => void): CheckBoxBuilder;
  onIndicatorChanged(handler: () => void): CheckBoxBuilder;
  onLeftInsetChanged(handler: () => void): CheckBoxBuilder;
  onLeftPaddingChanged(handler: () => void): CheckBoxBuilder;
  onLocaleChanged(handler: () => void): CheckBoxBuilder;
  onMirroredChanged(handler: () => void): CheckBoxBuilder;
  onNextCheckStateChanged(handler: () => void): CheckBoxBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): CheckBoxBuilder;
  onOpacityChanged(handler: () => void): CheckBoxBuilder;
  onPaddingChanged(handler: () => void): CheckBoxBuilder;
  onPaletteChanged(handler: () => void): CheckBoxBuilder;
  onPaletteCreated(handler: () => void): CheckBoxBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): CheckBoxBuilder;
  onPressAndHold(handler: () => void): CheckBoxBuilder;
  onPressXChanged(handler: () => void): CheckBoxBuilder;
  onPressYChanged(handler: () => void): CheckBoxBuilder;
  onPressed(handler: () => void): CheckBoxBuilder;
  onPressedChanged(handler: () => void): CheckBoxBuilder;
  onReleased(handler: () => void): CheckBoxBuilder;
  onRightInsetChanged(handler: () => void): CheckBoxBuilder;
  onRightPaddingChanged(handler: () => void): CheckBoxBuilder;
  onRotationChanged(handler: () => void): CheckBoxBuilder;
  onScaleChanged(handler: () => void): CheckBoxBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): CheckBoxBuilder;
  onSpacingChanged(handler: () => void): CheckBoxBuilder;
  onStateChanged(handler: (arg0: string) => void): CheckBoxBuilder;
  onTextChanged(handler: () => void): CheckBoxBuilder;
  onToggled(handler: () => void): CheckBoxBuilder;
  onTopInsetChanged(handler: () => void): CheckBoxBuilder;
  onTopPaddingChanged(handler: () => void): CheckBoxBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): CheckBoxBuilder;
  onTristateChanged(handler: () => void): CheckBoxBuilder;
  onVerticalPaddingChanged(handler: () => void): CheckBoxBuilder;
  onVisibleChanged(handler: () => void): CheckBoxBuilder;
  onVisibleChildrenChanged(handler: () => void): CheckBoxBuilder;
  onVisualFocusChanged(handler: () => void): CheckBoxBuilder;
  onWheelEnabledChanged(handler: () => void): CheckBoxBuilder;
  onWidthChanged(handler: () => void): CheckBoxBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): CheckBoxBuilder;
  onXChanged(handler: () => void): CheckBoxBuilder;
  onYChanged(handler: () => void): CheckBoxBuilder;
  onZChanged(handler: () => void): CheckBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CheckBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): CheckBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): CheckBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): CheckBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): CheckBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): CheckBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): CheckBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): CheckBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): CheckBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): CheckBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): CheckBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): CheckBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): CheckBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): CheckBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): CheckBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): CheckBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): CheckBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): CheckBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): CheckBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): CheckBoxBuilder;
}

export function CheckBox(): CheckBoxBuilder {
  return new DslBuilderImpl('CheckBox') as unknown as CheckBoxBuilder;
}

export namespace CheckBox {
  export namespace Display {
    export const IconOnly = createEnumToken('CheckBox', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('CheckBox', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('CheckBox', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('CheckBox', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'CheckBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'CheckBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('CheckBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('CheckBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('CheckBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('CheckBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'CheckBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('CheckBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('CheckBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('CheckBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('CheckBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('CheckBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('CheckBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('CheckBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('CheckBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('CheckBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('CheckBox', 'TransformOrigin', 'BottomRight');
  }
}
