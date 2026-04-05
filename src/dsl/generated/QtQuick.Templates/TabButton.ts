// AUTO-GENERATED — DO NOT EDIT
// Type: TabButton
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
export interface TabButtonBuilder {
  id(id: string): TabButtonBuilder;
  child(obj: QmlObjectBuilder): TabButtonBuilder;

  action(value: ActionBuilder): TabButtonBuilder;
  actionBind(expr: string): TabButtonBuilder;
  activeFocusOnTab(value: boolean): TabButtonBuilder;
  activeFocusOnTabBind(expr: string): TabButtonBuilder;
  antialiasing(value: boolean): TabButtonBuilder;
  antialiasingBind(expr: string): TabButtonBuilder;
  autoExclusive(value: boolean): TabButtonBuilder;
  autoExclusiveBind(expr: string): TabButtonBuilder;
  autoRepeat(value: boolean): TabButtonBuilder;
  autoRepeatBind(expr: string): TabButtonBuilder;
  autoRepeatDelay(value: number): TabButtonBuilder;
  autoRepeatDelayBind(expr: string): TabButtonBuilder;
  autoRepeatInterval(value: number): TabButtonBuilder;
  autoRepeatIntervalBind(expr: string): TabButtonBuilder;
  background(value: ItemBuilder): TabButtonBuilder;
  backgroundBind(expr: string): TabButtonBuilder;
  baselineOffset(value: number): TabButtonBuilder;
  baselineOffsetBind(expr: string): TabButtonBuilder;
  bottomInset(value: number): TabButtonBuilder;
  bottomInsetBind(expr: string): TabButtonBuilder;
  bottomPadding(value: number): TabButtonBuilder;
  bottomPaddingBind(expr: string): TabButtonBuilder;
  checkable(value: boolean): TabButtonBuilder;
  checkableBind(expr: string): TabButtonBuilder;
  checked(value: boolean): TabButtonBuilder;
  checkedBind(expr: string): TabButtonBuilder;
  clip(value: boolean): TabButtonBuilder;
  clipBind(expr: string): TabButtonBuilder;
  containmentMask(value: QtObjectBuilder): TabButtonBuilder;
  containmentMaskBind(expr: string): TabButtonBuilder;
  contentItem(value: ItemBuilder): TabButtonBuilder;
  contentItemBind(expr: string): TabButtonBuilder;
  display(value: QmlValue): TabButtonBuilder;
  displayBind(expr: string): TabButtonBuilder;
  down(value: boolean): TabButtonBuilder;
  downBind(expr: string): TabButtonBuilder;
  enabled(value: boolean): TabButtonBuilder;
  enabledBind(expr: string): TabButtonBuilder;
  focus(value: boolean): TabButtonBuilder;
  focusBind(expr: string): TabButtonBuilder;
  focusPolicy(value: QmlValue): TabButtonBuilder;
  focusPolicyBind(expr: string): TabButtonBuilder;
  focusReason(value: QmlValue): TabButtonBuilder;
  focusReasonBind(expr: string): TabButtonBuilder;
  font(value: QmlFont): TabButtonBuilder;
  fontBind(expr: string): TabButtonBuilder;
  height(value: number): TabButtonBuilder;
  heightBind(expr: string): TabButtonBuilder;
  horizontalPadding(value: number): TabButtonBuilder;
  horizontalPaddingBind(expr: string): TabButtonBuilder;
  hoverEnabled(value: boolean): TabButtonBuilder;
  hoverEnabledBind(expr: string): TabButtonBuilder;
  icon(value: QmlValue): TabButtonBuilder;
  iconBind(expr: string): TabButtonBuilder;
  implicitHeight(value: number): TabButtonBuilder;
  implicitHeightBind(expr: string): TabButtonBuilder;
  implicitWidth(value: number): TabButtonBuilder;
  implicitWidthBind(expr: string): TabButtonBuilder;
  indicator(value: ItemBuilder): TabButtonBuilder;
  indicatorBind(expr: string): TabButtonBuilder;
  leftInset(value: number): TabButtonBuilder;
  leftInsetBind(expr: string): TabButtonBuilder;
  leftPadding(value: number): TabButtonBuilder;
  leftPaddingBind(expr: string): TabButtonBuilder;
  locale(value: QmlValue): TabButtonBuilder;
  localeBind(expr: string): TabButtonBuilder;
  objectName(value: string): TabButtonBuilder;
  objectNameBind(expr: string): TabButtonBuilder;
  opacity(value: number): TabButtonBuilder;
  opacityBind(expr: string): TabButtonBuilder;
  padding(value: number): TabButtonBuilder;
  paddingBind(expr: string): TabButtonBuilder;
  palette(value: PaletteBuilder): TabButtonBuilder;
  paletteBind(expr: string): TabButtonBuilder;
  parent(value: ItemBuilder): TabButtonBuilder;
  parentBind(expr: string): TabButtonBuilder;
  rightInset(value: number): TabButtonBuilder;
  rightInsetBind(expr: string): TabButtonBuilder;
  rightPadding(value: number): TabButtonBuilder;
  rightPaddingBind(expr: string): TabButtonBuilder;
  rotation(value: number): TabButtonBuilder;
  rotationBind(expr: string): TabButtonBuilder;
  scale(value: number): TabButtonBuilder;
  scaleBind(expr: string): TabButtonBuilder;
  smooth(value: boolean): TabButtonBuilder;
  smoothBind(expr: string): TabButtonBuilder;
  spacing(value: number): TabButtonBuilder;
  spacingBind(expr: string): TabButtonBuilder;
  state(value: string): TabButtonBuilder;
  stateBind(expr: string): TabButtonBuilder;
  text(value: string): TabButtonBuilder;
  textBind(expr: string): TabButtonBuilder;
  topInset(value: number): TabButtonBuilder;
  topInsetBind(expr: string): TabButtonBuilder;
  topPadding(value: number): TabButtonBuilder;
  topPaddingBind(expr: string): TabButtonBuilder;
  transformOrigin(value: QmlValue): TabButtonBuilder;
  transformOriginBind(expr: string): TabButtonBuilder;
  verticalPadding(value: number): TabButtonBuilder;
  verticalPaddingBind(expr: string): TabButtonBuilder;
  visible(value: boolean): TabButtonBuilder;
  visibleBind(expr: string): TabButtonBuilder;
  wheelEnabled(value: boolean): TabButtonBuilder;
  wheelEnabledBind(expr: string): TabButtonBuilder;
  width(value: number): TabButtonBuilder;
  widthBind(expr: string): TabButtonBuilder;
  x(value: number): TabButtonBuilder;
  xBind(expr: string): TabButtonBuilder;
  y(value: number): TabButtonBuilder;
  yBind(expr: string): TabButtonBuilder;
  z(value: number): TabButtonBuilder;
  zBind(expr: string): TabButtonBuilder;
  onActionChanged(handler: () => void): TabButtonBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TabButtonBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TabButtonBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TabButtonBuilder;
  onAutoExclusiveChanged(handler: () => void): TabButtonBuilder;
  onAutoRepeatChanged(handler: () => void): TabButtonBuilder;
  onAutoRepeatDelayChanged(handler: () => void): TabButtonBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): TabButtonBuilder;
  onAvailableHeightChanged(handler: () => void): TabButtonBuilder;
  onAvailableWidthChanged(handler: () => void): TabButtonBuilder;
  onBackgroundChanged(handler: () => void): TabButtonBuilder;
  onBaselineOffsetChanged(handler: () => void): TabButtonBuilder;
  onBottomInsetChanged(handler: () => void): TabButtonBuilder;
  onBottomPaddingChanged(handler: () => void): TabButtonBuilder;
  onCanceled(handler: () => void): TabButtonBuilder;
  onCheckableChanged(handler: () => void): TabButtonBuilder;
  onCheckedChanged(handler: () => void): TabButtonBuilder;
  onChildrenChanged(handler: () => void): TabButtonBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TabButtonBuilder;
  onClicked(handler: () => void): TabButtonBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TabButtonBuilder;
  onContainmentMaskChanged(handler: () => void): TabButtonBuilder;
  onContentItemChanged(handler: () => void): TabButtonBuilder;
  onDisplayChanged(handler: () => void): TabButtonBuilder;
  onDoubleClicked(handler: () => void): TabButtonBuilder;
  onDownChanged(handler: () => void): TabButtonBuilder;
  onEnabledChanged(handler: () => void): TabButtonBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TabButtonBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TabButtonBuilder;
  onFocusReasonChanged(handler: () => void): TabButtonBuilder;
  onFontChanged(handler: () => void): TabButtonBuilder;
  onHeightChanged(handler: () => void): TabButtonBuilder;
  onHorizontalPaddingChanged(handler: () => void): TabButtonBuilder;
  onHoverEnabledChanged(handler: () => void): TabButtonBuilder;
  onHoveredChanged(handler: () => void): TabButtonBuilder;
  onIconChanged(handler: () => void): TabButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): TabButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): TabButtonBuilder;
  onImplicitContentHeightChanged(handler: () => void): TabButtonBuilder;
  onImplicitContentWidthChanged(handler: () => void): TabButtonBuilder;
  onImplicitHeightChanged(handler: () => void): TabButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): TabButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): TabButtonBuilder;
  onImplicitWidthChanged(handler: () => void): TabButtonBuilder;
  onIndicatorChanged(handler: () => void): TabButtonBuilder;
  onLeftInsetChanged(handler: () => void): TabButtonBuilder;
  onLeftPaddingChanged(handler: () => void): TabButtonBuilder;
  onLocaleChanged(handler: () => void): TabButtonBuilder;
  onMirroredChanged(handler: () => void): TabButtonBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TabButtonBuilder;
  onOpacityChanged(handler: () => void): TabButtonBuilder;
  onPaddingChanged(handler: () => void): TabButtonBuilder;
  onPaletteChanged(handler: () => void): TabButtonBuilder;
  onPaletteCreated(handler: () => void): TabButtonBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TabButtonBuilder;
  onPressAndHold(handler: () => void): TabButtonBuilder;
  onPressXChanged(handler: () => void): TabButtonBuilder;
  onPressYChanged(handler: () => void): TabButtonBuilder;
  onPressed(handler: () => void): TabButtonBuilder;
  onPressedChanged(handler: () => void): TabButtonBuilder;
  onReleased(handler: () => void): TabButtonBuilder;
  onRightInsetChanged(handler: () => void): TabButtonBuilder;
  onRightPaddingChanged(handler: () => void): TabButtonBuilder;
  onRotationChanged(handler: () => void): TabButtonBuilder;
  onScaleChanged(handler: () => void): TabButtonBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TabButtonBuilder;
  onSpacingChanged(handler: () => void): TabButtonBuilder;
  onStateChanged(handler: (arg0: string) => void): TabButtonBuilder;
  onTextChanged(handler: () => void): TabButtonBuilder;
  onToggled(handler: () => void): TabButtonBuilder;
  onTopInsetChanged(handler: () => void): TabButtonBuilder;
  onTopPaddingChanged(handler: () => void): TabButtonBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TabButtonBuilder;
  onVerticalPaddingChanged(handler: () => void): TabButtonBuilder;
  onVisibleChanged(handler: () => void): TabButtonBuilder;
  onVisibleChildrenChanged(handler: () => void): TabButtonBuilder;
  onVisualFocusChanged(handler: () => void): TabButtonBuilder;
  onWheelEnabledChanged(handler: () => void): TabButtonBuilder;
  onWidthChanged(handler: () => void): TabButtonBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TabButtonBuilder;
  onXChanged(handler: () => void): TabButtonBuilder;
  onYChanged(handler: () => void): TabButtonBuilder;
  onZChanged(handler: () => void): TabButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TabButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): TabButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TabButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TabButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TabButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TabButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TabButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TabButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TabButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TabButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TabButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TabButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TabButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TabButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TabButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TabButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TabButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TabButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TabButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TabButtonBuilder;
}

export function TabButton(): TabButtonBuilder {
  return new DslBuilderImpl('TabButton') as unknown as TabButtonBuilder;
}

export namespace TabButton {
  export namespace Display {
    export const IconOnly = createEnumToken('TabButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('TabButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('TabButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('TabButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TabButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TabButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TabButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TabButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TabButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TabButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TabButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TabButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TabButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TabButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TabButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TabButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TabButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TabButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TabButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TabButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TabButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TabButton', 'TransformOrigin', 'BottomRight');
  }
}
