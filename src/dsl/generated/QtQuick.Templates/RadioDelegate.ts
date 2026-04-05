// AUTO-GENERATED — DO NOT EDIT
// Type: RadioDelegate
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
export interface RadioDelegateBuilder {
  id(id: string): RadioDelegateBuilder;
  child(obj: QmlObjectBuilder): RadioDelegateBuilder;

  action(value: ActionBuilder): RadioDelegateBuilder;
  actionBind(expr: string): RadioDelegateBuilder;
  activeFocusOnTab(value: boolean): RadioDelegateBuilder;
  activeFocusOnTabBind(expr: string): RadioDelegateBuilder;
  antialiasing(value: boolean): RadioDelegateBuilder;
  antialiasingBind(expr: string): RadioDelegateBuilder;
  autoExclusive(value: boolean): RadioDelegateBuilder;
  autoExclusiveBind(expr: string): RadioDelegateBuilder;
  autoRepeat(value: boolean): RadioDelegateBuilder;
  autoRepeatBind(expr: string): RadioDelegateBuilder;
  autoRepeatDelay(value: number): RadioDelegateBuilder;
  autoRepeatDelayBind(expr: string): RadioDelegateBuilder;
  autoRepeatInterval(value: number): RadioDelegateBuilder;
  autoRepeatIntervalBind(expr: string): RadioDelegateBuilder;
  background(value: ItemBuilder): RadioDelegateBuilder;
  backgroundBind(expr: string): RadioDelegateBuilder;
  baselineOffset(value: number): RadioDelegateBuilder;
  baselineOffsetBind(expr: string): RadioDelegateBuilder;
  bottomInset(value: number): RadioDelegateBuilder;
  bottomInsetBind(expr: string): RadioDelegateBuilder;
  bottomPadding(value: number): RadioDelegateBuilder;
  bottomPaddingBind(expr: string): RadioDelegateBuilder;
  checkable(value: boolean): RadioDelegateBuilder;
  checkableBind(expr: string): RadioDelegateBuilder;
  checked(value: boolean): RadioDelegateBuilder;
  checkedBind(expr: string): RadioDelegateBuilder;
  clip(value: boolean): RadioDelegateBuilder;
  clipBind(expr: string): RadioDelegateBuilder;
  containmentMask(value: QtObjectBuilder): RadioDelegateBuilder;
  containmentMaskBind(expr: string): RadioDelegateBuilder;
  contentItem(value: ItemBuilder): RadioDelegateBuilder;
  contentItemBind(expr: string): RadioDelegateBuilder;
  display(value: QmlValue): RadioDelegateBuilder;
  displayBind(expr: string): RadioDelegateBuilder;
  down(value: boolean): RadioDelegateBuilder;
  downBind(expr: string): RadioDelegateBuilder;
  enabled(value: boolean): RadioDelegateBuilder;
  enabledBind(expr: string): RadioDelegateBuilder;
  focus(value: boolean): RadioDelegateBuilder;
  focusBind(expr: string): RadioDelegateBuilder;
  focusPolicy(value: QmlValue): RadioDelegateBuilder;
  focusPolicyBind(expr: string): RadioDelegateBuilder;
  focusReason(value: QmlValue): RadioDelegateBuilder;
  focusReasonBind(expr: string): RadioDelegateBuilder;
  font(value: QmlFont): RadioDelegateBuilder;
  fontBind(expr: string): RadioDelegateBuilder;
  height(value: number): RadioDelegateBuilder;
  heightBind(expr: string): RadioDelegateBuilder;
  highlighted(value: boolean): RadioDelegateBuilder;
  highlightedBind(expr: string): RadioDelegateBuilder;
  horizontalPadding(value: number): RadioDelegateBuilder;
  horizontalPaddingBind(expr: string): RadioDelegateBuilder;
  hoverEnabled(value: boolean): RadioDelegateBuilder;
  hoverEnabledBind(expr: string): RadioDelegateBuilder;
  icon(value: QmlValue): RadioDelegateBuilder;
  iconBind(expr: string): RadioDelegateBuilder;
  implicitHeight(value: number): RadioDelegateBuilder;
  implicitHeightBind(expr: string): RadioDelegateBuilder;
  implicitWidth(value: number): RadioDelegateBuilder;
  implicitWidthBind(expr: string): RadioDelegateBuilder;
  indicator(value: ItemBuilder): RadioDelegateBuilder;
  indicatorBind(expr: string): RadioDelegateBuilder;
  leftInset(value: number): RadioDelegateBuilder;
  leftInsetBind(expr: string): RadioDelegateBuilder;
  leftPadding(value: number): RadioDelegateBuilder;
  leftPaddingBind(expr: string): RadioDelegateBuilder;
  locale(value: QmlValue): RadioDelegateBuilder;
  localeBind(expr: string): RadioDelegateBuilder;
  objectName(value: string): RadioDelegateBuilder;
  objectNameBind(expr: string): RadioDelegateBuilder;
  opacity(value: number): RadioDelegateBuilder;
  opacityBind(expr: string): RadioDelegateBuilder;
  padding(value: number): RadioDelegateBuilder;
  paddingBind(expr: string): RadioDelegateBuilder;
  palette(value: PaletteBuilder): RadioDelegateBuilder;
  paletteBind(expr: string): RadioDelegateBuilder;
  parent(value: ItemBuilder): RadioDelegateBuilder;
  parentBind(expr: string): RadioDelegateBuilder;
  rightInset(value: number): RadioDelegateBuilder;
  rightInsetBind(expr: string): RadioDelegateBuilder;
  rightPadding(value: number): RadioDelegateBuilder;
  rightPaddingBind(expr: string): RadioDelegateBuilder;
  rotation(value: number): RadioDelegateBuilder;
  rotationBind(expr: string): RadioDelegateBuilder;
  scale(value: number): RadioDelegateBuilder;
  scaleBind(expr: string): RadioDelegateBuilder;
  smooth(value: boolean): RadioDelegateBuilder;
  smoothBind(expr: string): RadioDelegateBuilder;
  spacing(value: number): RadioDelegateBuilder;
  spacingBind(expr: string): RadioDelegateBuilder;
  state(value: string): RadioDelegateBuilder;
  stateBind(expr: string): RadioDelegateBuilder;
  text(value: string): RadioDelegateBuilder;
  textBind(expr: string): RadioDelegateBuilder;
  topInset(value: number): RadioDelegateBuilder;
  topInsetBind(expr: string): RadioDelegateBuilder;
  topPadding(value: number): RadioDelegateBuilder;
  topPaddingBind(expr: string): RadioDelegateBuilder;
  transformOrigin(value: QmlValue): RadioDelegateBuilder;
  transformOriginBind(expr: string): RadioDelegateBuilder;
  verticalPadding(value: number): RadioDelegateBuilder;
  verticalPaddingBind(expr: string): RadioDelegateBuilder;
  visible(value: boolean): RadioDelegateBuilder;
  visibleBind(expr: string): RadioDelegateBuilder;
  wheelEnabled(value: boolean): RadioDelegateBuilder;
  wheelEnabledBind(expr: string): RadioDelegateBuilder;
  width(value: number): RadioDelegateBuilder;
  widthBind(expr: string): RadioDelegateBuilder;
  x(value: number): RadioDelegateBuilder;
  xBind(expr: string): RadioDelegateBuilder;
  y(value: number): RadioDelegateBuilder;
  yBind(expr: string): RadioDelegateBuilder;
  z(value: number): RadioDelegateBuilder;
  zBind(expr: string): RadioDelegateBuilder;
  onActionChanged(handler: () => void): RadioDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RadioDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RadioDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RadioDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): RadioDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): RadioDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): RadioDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): RadioDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): RadioDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): RadioDelegateBuilder;
  onBackgroundChanged(handler: () => void): RadioDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): RadioDelegateBuilder;
  onBottomInsetChanged(handler: () => void): RadioDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): RadioDelegateBuilder;
  onCanceled(handler: () => void): RadioDelegateBuilder;
  onCheckableChanged(handler: () => void): RadioDelegateBuilder;
  onCheckedChanged(handler: () => void): RadioDelegateBuilder;
  onChildrenChanged(handler: () => void): RadioDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RadioDelegateBuilder;
  onClicked(handler: () => void): RadioDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RadioDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): RadioDelegateBuilder;
  onContentItemChanged(handler: () => void): RadioDelegateBuilder;
  onDisplayChanged(handler: () => void): RadioDelegateBuilder;
  onDoubleClicked(handler: () => void): RadioDelegateBuilder;
  onDownChanged(handler: () => void): RadioDelegateBuilder;
  onEnabledChanged(handler: () => void): RadioDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RadioDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RadioDelegateBuilder;
  onFocusReasonChanged(handler: () => void): RadioDelegateBuilder;
  onFontChanged(handler: () => void): RadioDelegateBuilder;
  onHeightChanged(handler: () => void): RadioDelegateBuilder;
  onHighlightedChanged(handler: () => void): RadioDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): RadioDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): RadioDelegateBuilder;
  onHoveredChanged(handler: () => void): RadioDelegateBuilder;
  onIconChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): RadioDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): RadioDelegateBuilder;
  onIndicatorChanged(handler: () => void): RadioDelegateBuilder;
  onLeftInsetChanged(handler: () => void): RadioDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): RadioDelegateBuilder;
  onLocaleChanged(handler: () => void): RadioDelegateBuilder;
  onMirroredChanged(handler: () => void): RadioDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RadioDelegateBuilder;
  onOpacityChanged(handler: () => void): RadioDelegateBuilder;
  onPaddingChanged(handler: () => void): RadioDelegateBuilder;
  onPaletteChanged(handler: () => void): RadioDelegateBuilder;
  onPaletteCreated(handler: () => void): RadioDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RadioDelegateBuilder;
  onPressAndHold(handler: () => void): RadioDelegateBuilder;
  onPressXChanged(handler: () => void): RadioDelegateBuilder;
  onPressYChanged(handler: () => void): RadioDelegateBuilder;
  onPressed(handler: () => void): RadioDelegateBuilder;
  onPressedChanged(handler: () => void): RadioDelegateBuilder;
  onReleased(handler: () => void): RadioDelegateBuilder;
  onRightInsetChanged(handler: () => void): RadioDelegateBuilder;
  onRightPaddingChanged(handler: () => void): RadioDelegateBuilder;
  onRotationChanged(handler: () => void): RadioDelegateBuilder;
  onScaleChanged(handler: () => void): RadioDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RadioDelegateBuilder;
  onSpacingChanged(handler: () => void): RadioDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): RadioDelegateBuilder;
  onTextChanged(handler: () => void): RadioDelegateBuilder;
  onToggled(handler: () => void): RadioDelegateBuilder;
  onTopInsetChanged(handler: () => void): RadioDelegateBuilder;
  onTopPaddingChanged(handler: () => void): RadioDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RadioDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): RadioDelegateBuilder;
  onVisibleChanged(handler: () => void): RadioDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): RadioDelegateBuilder;
  onVisualFocusChanged(handler: () => void): RadioDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): RadioDelegateBuilder;
  onWidthChanged(handler: () => void): RadioDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RadioDelegateBuilder;
  onXChanged(handler: () => void): RadioDelegateBuilder;
  onYChanged(handler: () => void): RadioDelegateBuilder;
  onZChanged(handler: () => void): RadioDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RadioDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): RadioDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RadioDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RadioDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RadioDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RadioDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RadioDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RadioDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RadioDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RadioDelegateBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RadioDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RadioDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RadioDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RadioDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RadioDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RadioDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RadioDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RadioDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RadioDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RadioDelegateBuilder;
}

export function RadioDelegate(): RadioDelegateBuilder {
  return new DslBuilderImpl('RadioDelegate') as unknown as RadioDelegateBuilder;
}

export namespace RadioDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('RadioDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('RadioDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('RadioDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('RadioDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RadioDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RadioDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RadioDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RadioDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RadioDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RadioDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RadioDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RadioDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RadioDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RadioDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RadioDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RadioDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RadioDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RadioDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RadioDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RadioDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RadioDelegate', 'TransformOrigin', 'BottomRight');
  }
}
