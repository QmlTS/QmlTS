// AUTO-GENERATED — DO NOT EDIT
// Type: Switch
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
export interface SwitchBuilder {
  id(id: string): SwitchBuilder;
  child(obj: QmlObjectBuilder): SwitchBuilder;

  action(value: ActionBuilder): SwitchBuilder;
  actionBind(expr: string): SwitchBuilder;
  activeFocusOnTab(value: boolean): SwitchBuilder;
  activeFocusOnTabBind(expr: string): SwitchBuilder;
  antialiasing(value: boolean): SwitchBuilder;
  antialiasingBind(expr: string): SwitchBuilder;
  autoExclusive(value: boolean): SwitchBuilder;
  autoExclusiveBind(expr: string): SwitchBuilder;
  autoRepeat(value: boolean): SwitchBuilder;
  autoRepeatBind(expr: string): SwitchBuilder;
  autoRepeatDelay(value: number): SwitchBuilder;
  autoRepeatDelayBind(expr: string): SwitchBuilder;
  autoRepeatInterval(value: number): SwitchBuilder;
  autoRepeatIntervalBind(expr: string): SwitchBuilder;
  background(value: ItemBuilder): SwitchBuilder;
  backgroundBind(expr: string): SwitchBuilder;
  baselineOffset(value: number): SwitchBuilder;
  baselineOffsetBind(expr: string): SwitchBuilder;
  bottomInset(value: number): SwitchBuilder;
  bottomInsetBind(expr: string): SwitchBuilder;
  bottomPadding(value: number): SwitchBuilder;
  bottomPaddingBind(expr: string): SwitchBuilder;
  checkable(value: boolean): SwitchBuilder;
  checkableBind(expr: string): SwitchBuilder;
  checked(value: boolean): SwitchBuilder;
  checkedBind(expr: string): SwitchBuilder;
  clip(value: boolean): SwitchBuilder;
  clipBind(expr: string): SwitchBuilder;
  containmentMask(value: QtObjectBuilder): SwitchBuilder;
  containmentMaskBind(expr: string): SwitchBuilder;
  contentItem(value: ItemBuilder): SwitchBuilder;
  contentItemBind(expr: string): SwitchBuilder;
  display(value: QmlValue): SwitchBuilder;
  displayBind(expr: string): SwitchBuilder;
  down(value: boolean): SwitchBuilder;
  downBind(expr: string): SwitchBuilder;
  enabled(value: boolean): SwitchBuilder;
  enabledBind(expr: string): SwitchBuilder;
  focus(value: boolean): SwitchBuilder;
  focusBind(expr: string): SwitchBuilder;
  focusPolicy(value: QmlValue): SwitchBuilder;
  focusPolicyBind(expr: string): SwitchBuilder;
  focusReason(value: QmlValue): SwitchBuilder;
  focusReasonBind(expr: string): SwitchBuilder;
  font(value: QmlFont): SwitchBuilder;
  fontBind(expr: string): SwitchBuilder;
  height(value: number): SwitchBuilder;
  heightBind(expr: string): SwitchBuilder;
  horizontalPadding(value: number): SwitchBuilder;
  horizontalPaddingBind(expr: string): SwitchBuilder;
  hoverEnabled(value: boolean): SwitchBuilder;
  hoverEnabledBind(expr: string): SwitchBuilder;
  icon(value: QmlValue): SwitchBuilder;
  iconBind(expr: string): SwitchBuilder;
  implicitHeight(value: number): SwitchBuilder;
  implicitHeightBind(expr: string): SwitchBuilder;
  implicitWidth(value: number): SwitchBuilder;
  implicitWidthBind(expr: string): SwitchBuilder;
  indicator(value: ItemBuilder): SwitchBuilder;
  indicatorBind(expr: string): SwitchBuilder;
  leftInset(value: number): SwitchBuilder;
  leftInsetBind(expr: string): SwitchBuilder;
  leftPadding(value: number): SwitchBuilder;
  leftPaddingBind(expr: string): SwitchBuilder;
  locale(value: QmlValue): SwitchBuilder;
  localeBind(expr: string): SwitchBuilder;
  objectName(value: string): SwitchBuilder;
  objectNameBind(expr: string): SwitchBuilder;
  opacity(value: number): SwitchBuilder;
  opacityBind(expr: string): SwitchBuilder;
  padding(value: number): SwitchBuilder;
  paddingBind(expr: string): SwitchBuilder;
  palette(value: PaletteBuilder): SwitchBuilder;
  paletteBind(expr: string): SwitchBuilder;
  parent(value: ItemBuilder): SwitchBuilder;
  parentBind(expr: string): SwitchBuilder;
  position(value: number): SwitchBuilder;
  positionBind(expr: string): SwitchBuilder;
  rightInset(value: number): SwitchBuilder;
  rightInsetBind(expr: string): SwitchBuilder;
  rightPadding(value: number): SwitchBuilder;
  rightPaddingBind(expr: string): SwitchBuilder;
  rotation(value: number): SwitchBuilder;
  rotationBind(expr: string): SwitchBuilder;
  scale(value: number): SwitchBuilder;
  scaleBind(expr: string): SwitchBuilder;
  smooth(value: boolean): SwitchBuilder;
  smoothBind(expr: string): SwitchBuilder;
  spacing(value: number): SwitchBuilder;
  spacingBind(expr: string): SwitchBuilder;
  state(value: string): SwitchBuilder;
  stateBind(expr: string): SwitchBuilder;
  text(value: string): SwitchBuilder;
  textBind(expr: string): SwitchBuilder;
  topInset(value: number): SwitchBuilder;
  topInsetBind(expr: string): SwitchBuilder;
  topPadding(value: number): SwitchBuilder;
  topPaddingBind(expr: string): SwitchBuilder;
  transformOrigin(value: QmlValue): SwitchBuilder;
  transformOriginBind(expr: string): SwitchBuilder;
  verticalPadding(value: number): SwitchBuilder;
  verticalPaddingBind(expr: string): SwitchBuilder;
  visible(value: boolean): SwitchBuilder;
  visibleBind(expr: string): SwitchBuilder;
  wheelEnabled(value: boolean): SwitchBuilder;
  wheelEnabledBind(expr: string): SwitchBuilder;
  width(value: number): SwitchBuilder;
  widthBind(expr: string): SwitchBuilder;
  x(value: number): SwitchBuilder;
  xBind(expr: string): SwitchBuilder;
  y(value: number): SwitchBuilder;
  yBind(expr: string): SwitchBuilder;
  z(value: number): SwitchBuilder;
  zBind(expr: string): SwitchBuilder;
  onActionChanged(handler: () => void): SwitchBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SwitchBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SwitchBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SwitchBuilder;
  onAutoExclusiveChanged(handler: () => void): SwitchBuilder;
  onAutoRepeatChanged(handler: () => void): SwitchBuilder;
  onAutoRepeatDelayChanged(handler: () => void): SwitchBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): SwitchBuilder;
  onAvailableHeightChanged(handler: () => void): SwitchBuilder;
  onAvailableWidthChanged(handler: () => void): SwitchBuilder;
  onBackgroundChanged(handler: () => void): SwitchBuilder;
  onBaselineOffsetChanged(handler: () => void): SwitchBuilder;
  onBottomInsetChanged(handler: () => void): SwitchBuilder;
  onBottomPaddingChanged(handler: () => void): SwitchBuilder;
  onCanceled(handler: () => void): SwitchBuilder;
  onCheckableChanged(handler: () => void): SwitchBuilder;
  onCheckedChanged(handler: () => void): SwitchBuilder;
  onChildrenChanged(handler: () => void): SwitchBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SwitchBuilder;
  onClicked(handler: () => void): SwitchBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SwitchBuilder;
  onContainmentMaskChanged(handler: () => void): SwitchBuilder;
  onContentItemChanged(handler: () => void): SwitchBuilder;
  onDisplayChanged(handler: () => void): SwitchBuilder;
  onDoubleClicked(handler: () => void): SwitchBuilder;
  onDownChanged(handler: () => void): SwitchBuilder;
  onEnabledChanged(handler: () => void): SwitchBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SwitchBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SwitchBuilder;
  onFocusReasonChanged(handler: () => void): SwitchBuilder;
  onFontChanged(handler: () => void): SwitchBuilder;
  onHeightChanged(handler: () => void): SwitchBuilder;
  onHorizontalPaddingChanged(handler: () => void): SwitchBuilder;
  onHoverEnabledChanged(handler: () => void): SwitchBuilder;
  onHoveredChanged(handler: () => void): SwitchBuilder;
  onIconChanged(handler: () => void): SwitchBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SwitchBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SwitchBuilder;
  onImplicitContentHeightChanged(handler: () => void): SwitchBuilder;
  onImplicitContentWidthChanged(handler: () => void): SwitchBuilder;
  onImplicitHeightChanged(handler: () => void): SwitchBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): SwitchBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): SwitchBuilder;
  onImplicitWidthChanged(handler: () => void): SwitchBuilder;
  onIndicatorChanged(handler: () => void): SwitchBuilder;
  onLeftInsetChanged(handler: () => void): SwitchBuilder;
  onLeftPaddingChanged(handler: () => void): SwitchBuilder;
  onLocaleChanged(handler: () => void): SwitchBuilder;
  onMirroredChanged(handler: () => void): SwitchBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SwitchBuilder;
  onOpacityChanged(handler: () => void): SwitchBuilder;
  onPaddingChanged(handler: () => void): SwitchBuilder;
  onPaletteChanged(handler: () => void): SwitchBuilder;
  onPaletteCreated(handler: () => void): SwitchBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SwitchBuilder;
  onPositionChanged(handler: () => void): SwitchBuilder;
  onPressAndHold(handler: () => void): SwitchBuilder;
  onPressXChanged(handler: () => void): SwitchBuilder;
  onPressYChanged(handler: () => void): SwitchBuilder;
  onPressed(handler: () => void): SwitchBuilder;
  onPressedChanged(handler: () => void): SwitchBuilder;
  onReleased(handler: () => void): SwitchBuilder;
  onRightInsetChanged(handler: () => void): SwitchBuilder;
  onRightPaddingChanged(handler: () => void): SwitchBuilder;
  onRotationChanged(handler: () => void): SwitchBuilder;
  onScaleChanged(handler: () => void): SwitchBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SwitchBuilder;
  onSpacingChanged(handler: () => void): SwitchBuilder;
  onStateChanged(handler: (arg0: string) => void): SwitchBuilder;
  onTextChanged(handler: () => void): SwitchBuilder;
  onToggled(handler: () => void): SwitchBuilder;
  onTopInsetChanged(handler: () => void): SwitchBuilder;
  onTopPaddingChanged(handler: () => void): SwitchBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SwitchBuilder;
  onVerticalPaddingChanged(handler: () => void): SwitchBuilder;
  onVisibleChanged(handler: () => void): SwitchBuilder;
  onVisibleChildrenChanged(handler: () => void): SwitchBuilder;
  onVisualFocusChanged(handler: () => void): SwitchBuilder;
  onVisualPositionChanged(handler: () => void): SwitchBuilder;
  onWheelEnabledChanged(handler: () => void): SwitchBuilder;
  onWidthChanged(handler: () => void): SwitchBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SwitchBuilder;
  onXChanged(handler: () => void): SwitchBuilder;
  onYChanged(handler: () => void): SwitchBuilder;
  onZChanged(handler: () => void): SwitchBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwitchBuilder;
  layer(setup: (b: LayerBuilder) => void): SwitchBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwitchBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwitchBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwitchBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwitchBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwitchBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwitchBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwitchBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwitchBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwitchBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwitchBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwitchBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwitchBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwitchBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwitchBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwitchBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwitchBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwitchBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwitchBuilder;
}

export function Switch(): SwitchBuilder {
  return new DslBuilderImpl('Switch') as unknown as SwitchBuilder;
}

export namespace Switch {
  export namespace Display {
    export const IconOnly = createEnumToken('Switch', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('Switch', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('Switch', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('Switch', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Switch',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Switch',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Switch', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Switch', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Switch', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Switch', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Switch', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Switch', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Switch',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Switch', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Switch', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Switch', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Switch', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Switch', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Switch', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Switch', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Switch', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Switch', 'TransformOrigin', 'BottomRight');
  }
}
