// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractButton
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
export interface AbstractButtonBuilder {
  id(id: string): AbstractButtonBuilder;
  child(obj: QmlObjectBuilder): AbstractButtonBuilder;

  action(value: ActionBuilder): AbstractButtonBuilder;
  actionBind(expr: string): AbstractButtonBuilder;
  activeFocusOnTab(value: boolean): AbstractButtonBuilder;
  activeFocusOnTabBind(expr: string): AbstractButtonBuilder;
  antialiasing(value: boolean): AbstractButtonBuilder;
  antialiasingBind(expr: string): AbstractButtonBuilder;
  autoExclusive(value: boolean): AbstractButtonBuilder;
  autoExclusiveBind(expr: string): AbstractButtonBuilder;
  autoRepeat(value: boolean): AbstractButtonBuilder;
  autoRepeatBind(expr: string): AbstractButtonBuilder;
  autoRepeatDelay(value: number): AbstractButtonBuilder;
  autoRepeatDelayBind(expr: string): AbstractButtonBuilder;
  autoRepeatInterval(value: number): AbstractButtonBuilder;
  autoRepeatIntervalBind(expr: string): AbstractButtonBuilder;
  background(value: ItemBuilder): AbstractButtonBuilder;
  backgroundBind(expr: string): AbstractButtonBuilder;
  baselineOffset(value: number): AbstractButtonBuilder;
  baselineOffsetBind(expr: string): AbstractButtonBuilder;
  bottomInset(value: number): AbstractButtonBuilder;
  bottomInsetBind(expr: string): AbstractButtonBuilder;
  bottomPadding(value: number): AbstractButtonBuilder;
  bottomPaddingBind(expr: string): AbstractButtonBuilder;
  checkable(value: boolean): AbstractButtonBuilder;
  checkableBind(expr: string): AbstractButtonBuilder;
  checked(value: boolean): AbstractButtonBuilder;
  checkedBind(expr: string): AbstractButtonBuilder;
  clip(value: boolean): AbstractButtonBuilder;
  clipBind(expr: string): AbstractButtonBuilder;
  containmentMask(value: QtObjectBuilder): AbstractButtonBuilder;
  containmentMaskBind(expr: string): AbstractButtonBuilder;
  contentItem(value: ItemBuilder): AbstractButtonBuilder;
  contentItemBind(expr: string): AbstractButtonBuilder;
  display(value: QmlValue): AbstractButtonBuilder;
  displayBind(expr: string): AbstractButtonBuilder;
  down(value: boolean): AbstractButtonBuilder;
  downBind(expr: string): AbstractButtonBuilder;
  enabled(value: boolean): AbstractButtonBuilder;
  enabledBind(expr: string): AbstractButtonBuilder;
  focus(value: boolean): AbstractButtonBuilder;
  focusBind(expr: string): AbstractButtonBuilder;
  focusPolicy(value: QmlValue): AbstractButtonBuilder;
  focusPolicyBind(expr: string): AbstractButtonBuilder;
  focusReason(value: QmlValue): AbstractButtonBuilder;
  focusReasonBind(expr: string): AbstractButtonBuilder;
  font(value: QmlFont): AbstractButtonBuilder;
  fontBind(expr: string): AbstractButtonBuilder;
  height(value: number): AbstractButtonBuilder;
  heightBind(expr: string): AbstractButtonBuilder;
  horizontalPadding(value: number): AbstractButtonBuilder;
  horizontalPaddingBind(expr: string): AbstractButtonBuilder;
  hoverEnabled(value: boolean): AbstractButtonBuilder;
  hoverEnabledBind(expr: string): AbstractButtonBuilder;
  icon(value: QmlValue): AbstractButtonBuilder;
  iconBind(expr: string): AbstractButtonBuilder;
  implicitHeight(value: number): AbstractButtonBuilder;
  implicitHeightBind(expr: string): AbstractButtonBuilder;
  implicitWidth(value: number): AbstractButtonBuilder;
  implicitWidthBind(expr: string): AbstractButtonBuilder;
  indicator(value: ItemBuilder): AbstractButtonBuilder;
  indicatorBind(expr: string): AbstractButtonBuilder;
  leftInset(value: number): AbstractButtonBuilder;
  leftInsetBind(expr: string): AbstractButtonBuilder;
  leftPadding(value: number): AbstractButtonBuilder;
  leftPaddingBind(expr: string): AbstractButtonBuilder;
  locale(value: QmlValue): AbstractButtonBuilder;
  localeBind(expr: string): AbstractButtonBuilder;
  objectName(value: string): AbstractButtonBuilder;
  objectNameBind(expr: string): AbstractButtonBuilder;
  opacity(value: number): AbstractButtonBuilder;
  opacityBind(expr: string): AbstractButtonBuilder;
  padding(value: number): AbstractButtonBuilder;
  paddingBind(expr: string): AbstractButtonBuilder;
  palette(value: PaletteBuilder): AbstractButtonBuilder;
  paletteBind(expr: string): AbstractButtonBuilder;
  parent(value: ItemBuilder): AbstractButtonBuilder;
  parentBind(expr: string): AbstractButtonBuilder;
  rightInset(value: number): AbstractButtonBuilder;
  rightInsetBind(expr: string): AbstractButtonBuilder;
  rightPadding(value: number): AbstractButtonBuilder;
  rightPaddingBind(expr: string): AbstractButtonBuilder;
  rotation(value: number): AbstractButtonBuilder;
  rotationBind(expr: string): AbstractButtonBuilder;
  scale(value: number): AbstractButtonBuilder;
  scaleBind(expr: string): AbstractButtonBuilder;
  smooth(value: boolean): AbstractButtonBuilder;
  smoothBind(expr: string): AbstractButtonBuilder;
  spacing(value: number): AbstractButtonBuilder;
  spacingBind(expr: string): AbstractButtonBuilder;
  state(value: string): AbstractButtonBuilder;
  stateBind(expr: string): AbstractButtonBuilder;
  text(value: string): AbstractButtonBuilder;
  textBind(expr: string): AbstractButtonBuilder;
  topInset(value: number): AbstractButtonBuilder;
  topInsetBind(expr: string): AbstractButtonBuilder;
  topPadding(value: number): AbstractButtonBuilder;
  topPaddingBind(expr: string): AbstractButtonBuilder;
  transformOrigin(value: QmlValue): AbstractButtonBuilder;
  transformOriginBind(expr: string): AbstractButtonBuilder;
  verticalPadding(value: number): AbstractButtonBuilder;
  verticalPaddingBind(expr: string): AbstractButtonBuilder;
  visible(value: boolean): AbstractButtonBuilder;
  visibleBind(expr: string): AbstractButtonBuilder;
  wheelEnabled(value: boolean): AbstractButtonBuilder;
  wheelEnabledBind(expr: string): AbstractButtonBuilder;
  width(value: number): AbstractButtonBuilder;
  widthBind(expr: string): AbstractButtonBuilder;
  x(value: number): AbstractButtonBuilder;
  xBind(expr: string): AbstractButtonBuilder;
  y(value: number): AbstractButtonBuilder;
  yBind(expr: string): AbstractButtonBuilder;
  z(value: number): AbstractButtonBuilder;
  zBind(expr: string): AbstractButtonBuilder;
  onActionChanged(handler: () => void): AbstractButtonBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): AbstractButtonBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): AbstractButtonBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): AbstractButtonBuilder;
  onAutoExclusiveChanged(handler: () => void): AbstractButtonBuilder;
  onAutoRepeatChanged(handler: () => void): AbstractButtonBuilder;
  onAutoRepeatDelayChanged(handler: () => void): AbstractButtonBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): AbstractButtonBuilder;
  onAvailableHeightChanged(handler: () => void): AbstractButtonBuilder;
  onAvailableWidthChanged(handler: () => void): AbstractButtonBuilder;
  onBackgroundChanged(handler: () => void): AbstractButtonBuilder;
  onBaselineOffsetChanged(handler: () => void): AbstractButtonBuilder;
  onBottomInsetChanged(handler: () => void): AbstractButtonBuilder;
  onBottomPaddingChanged(handler: () => void): AbstractButtonBuilder;
  onCanceled(handler: () => void): AbstractButtonBuilder;
  onCheckableChanged(handler: () => void): AbstractButtonBuilder;
  onCheckedChanged(handler: () => void): AbstractButtonBuilder;
  onChildrenChanged(handler: () => void): AbstractButtonBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): AbstractButtonBuilder;
  onClicked(handler: () => void): AbstractButtonBuilder;
  onClipChanged(handler: (arg0: boolean) => void): AbstractButtonBuilder;
  onContainmentMaskChanged(handler: () => void): AbstractButtonBuilder;
  onContentItemChanged(handler: () => void): AbstractButtonBuilder;
  onDisplayChanged(handler: () => void): AbstractButtonBuilder;
  onDoubleClicked(handler: () => void): AbstractButtonBuilder;
  onDownChanged(handler: () => void): AbstractButtonBuilder;
  onEnabledChanged(handler: () => void): AbstractButtonBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): AbstractButtonBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): AbstractButtonBuilder;
  onFocusReasonChanged(handler: () => void): AbstractButtonBuilder;
  onFontChanged(handler: () => void): AbstractButtonBuilder;
  onHeightChanged(handler: () => void): AbstractButtonBuilder;
  onHorizontalPaddingChanged(handler: () => void): AbstractButtonBuilder;
  onHoverEnabledChanged(handler: () => void): AbstractButtonBuilder;
  onHoveredChanged(handler: () => void): AbstractButtonBuilder;
  onIconChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitContentHeightChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitContentWidthChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitHeightChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): AbstractButtonBuilder;
  onImplicitWidthChanged(handler: () => void): AbstractButtonBuilder;
  onIndicatorChanged(handler: () => void): AbstractButtonBuilder;
  onLeftInsetChanged(handler: () => void): AbstractButtonBuilder;
  onLeftPaddingChanged(handler: () => void): AbstractButtonBuilder;
  onLocaleChanged(handler: () => void): AbstractButtonBuilder;
  onMirroredChanged(handler: () => void): AbstractButtonBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AbstractButtonBuilder;
  onOpacityChanged(handler: () => void): AbstractButtonBuilder;
  onPaddingChanged(handler: () => void): AbstractButtonBuilder;
  onPaletteChanged(handler: () => void): AbstractButtonBuilder;
  onPaletteCreated(handler: () => void): AbstractButtonBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): AbstractButtonBuilder;
  onPressAndHold(handler: () => void): AbstractButtonBuilder;
  onPressXChanged(handler: () => void): AbstractButtonBuilder;
  onPressYChanged(handler: () => void): AbstractButtonBuilder;
  onPressed(handler: () => void): AbstractButtonBuilder;
  onPressedChanged(handler: () => void): AbstractButtonBuilder;
  onReleased(handler: () => void): AbstractButtonBuilder;
  onRightInsetChanged(handler: () => void): AbstractButtonBuilder;
  onRightPaddingChanged(handler: () => void): AbstractButtonBuilder;
  onRotationChanged(handler: () => void): AbstractButtonBuilder;
  onScaleChanged(handler: () => void): AbstractButtonBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): AbstractButtonBuilder;
  onSpacingChanged(handler: () => void): AbstractButtonBuilder;
  onStateChanged(handler: (arg0: string) => void): AbstractButtonBuilder;
  onTextChanged(handler: () => void): AbstractButtonBuilder;
  onToggled(handler: () => void): AbstractButtonBuilder;
  onTopInsetChanged(handler: () => void): AbstractButtonBuilder;
  onTopPaddingChanged(handler: () => void): AbstractButtonBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): AbstractButtonBuilder;
  onVerticalPaddingChanged(handler: () => void): AbstractButtonBuilder;
  onVisibleChanged(handler: () => void): AbstractButtonBuilder;
  onVisibleChildrenChanged(handler: () => void): AbstractButtonBuilder;
  onVisualFocusChanged(handler: () => void): AbstractButtonBuilder;
  onWheelEnabledChanged(handler: () => void): AbstractButtonBuilder;
  onWidthChanged(handler: () => void): AbstractButtonBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): AbstractButtonBuilder;
  onXChanged(handler: () => void): AbstractButtonBuilder;
  onYChanged(handler: () => void): AbstractButtonBuilder;
  onZChanged(handler: () => void): AbstractButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): AbstractButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): AbstractButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): AbstractButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): AbstractButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractButtonBuilder;
}

export function AbstractButton(): AbstractButtonBuilder {
  return new DslBuilderImpl('AbstractButton') as unknown as AbstractButtonBuilder;
}

export namespace AbstractButton {
  export namespace Display {
    export const IconOnly = createEnumToken('AbstractButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('AbstractButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('AbstractButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('AbstractButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AbstractButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AbstractButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('AbstractButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AbstractButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AbstractButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AbstractButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'AbstractButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AbstractButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AbstractButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AbstractButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AbstractButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AbstractButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AbstractButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AbstractButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AbstractButton', 'TransformOrigin', 'BottomRight');
  }
}
