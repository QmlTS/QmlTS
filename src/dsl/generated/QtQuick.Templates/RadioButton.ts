// AUTO-GENERATED — DO NOT EDIT
// Type: RadioButton
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
export interface RadioButtonBuilder {
  id(id: string): RadioButtonBuilder;
  child(obj: QmlObjectBuilder): RadioButtonBuilder;

  action(value: ActionBuilder): RadioButtonBuilder;
  actionBind(expr: string): RadioButtonBuilder;
  activeFocusOnTab(value: boolean): RadioButtonBuilder;
  activeFocusOnTabBind(expr: string): RadioButtonBuilder;
  antialiasing(value: boolean): RadioButtonBuilder;
  antialiasingBind(expr: string): RadioButtonBuilder;
  autoExclusive(value: boolean): RadioButtonBuilder;
  autoExclusiveBind(expr: string): RadioButtonBuilder;
  autoRepeat(value: boolean): RadioButtonBuilder;
  autoRepeatBind(expr: string): RadioButtonBuilder;
  autoRepeatDelay(value: number): RadioButtonBuilder;
  autoRepeatDelayBind(expr: string): RadioButtonBuilder;
  autoRepeatInterval(value: number): RadioButtonBuilder;
  autoRepeatIntervalBind(expr: string): RadioButtonBuilder;
  background(value: ItemBuilder): RadioButtonBuilder;
  backgroundBind(expr: string): RadioButtonBuilder;
  baselineOffset(value: number): RadioButtonBuilder;
  baselineOffsetBind(expr: string): RadioButtonBuilder;
  bottomInset(value: number): RadioButtonBuilder;
  bottomInsetBind(expr: string): RadioButtonBuilder;
  bottomPadding(value: number): RadioButtonBuilder;
  bottomPaddingBind(expr: string): RadioButtonBuilder;
  checkable(value: boolean): RadioButtonBuilder;
  checkableBind(expr: string): RadioButtonBuilder;
  checked(value: boolean): RadioButtonBuilder;
  checkedBind(expr: string): RadioButtonBuilder;
  clip(value: boolean): RadioButtonBuilder;
  clipBind(expr: string): RadioButtonBuilder;
  containmentMask(value: QtObjectBuilder): RadioButtonBuilder;
  containmentMaskBind(expr: string): RadioButtonBuilder;
  contentItem(value: ItemBuilder): RadioButtonBuilder;
  contentItemBind(expr: string): RadioButtonBuilder;
  display(value: QmlValue): RadioButtonBuilder;
  displayBind(expr: string): RadioButtonBuilder;
  down(value: boolean): RadioButtonBuilder;
  downBind(expr: string): RadioButtonBuilder;
  enabled(value: boolean): RadioButtonBuilder;
  enabledBind(expr: string): RadioButtonBuilder;
  focus(value: boolean): RadioButtonBuilder;
  focusBind(expr: string): RadioButtonBuilder;
  focusPolicy(value: QmlValue): RadioButtonBuilder;
  focusPolicyBind(expr: string): RadioButtonBuilder;
  focusReason(value: QmlValue): RadioButtonBuilder;
  focusReasonBind(expr: string): RadioButtonBuilder;
  font(value: QmlFont): RadioButtonBuilder;
  fontBind(expr: string): RadioButtonBuilder;
  height(value: number): RadioButtonBuilder;
  heightBind(expr: string): RadioButtonBuilder;
  horizontalPadding(value: number): RadioButtonBuilder;
  horizontalPaddingBind(expr: string): RadioButtonBuilder;
  hoverEnabled(value: boolean): RadioButtonBuilder;
  hoverEnabledBind(expr: string): RadioButtonBuilder;
  icon(value: QmlValue): RadioButtonBuilder;
  iconBind(expr: string): RadioButtonBuilder;
  implicitHeight(value: number): RadioButtonBuilder;
  implicitHeightBind(expr: string): RadioButtonBuilder;
  implicitWidth(value: number): RadioButtonBuilder;
  implicitWidthBind(expr: string): RadioButtonBuilder;
  indicator(value: ItemBuilder): RadioButtonBuilder;
  indicatorBind(expr: string): RadioButtonBuilder;
  leftInset(value: number): RadioButtonBuilder;
  leftInsetBind(expr: string): RadioButtonBuilder;
  leftPadding(value: number): RadioButtonBuilder;
  leftPaddingBind(expr: string): RadioButtonBuilder;
  locale(value: QmlValue): RadioButtonBuilder;
  localeBind(expr: string): RadioButtonBuilder;
  objectName(value: string): RadioButtonBuilder;
  objectNameBind(expr: string): RadioButtonBuilder;
  opacity(value: number): RadioButtonBuilder;
  opacityBind(expr: string): RadioButtonBuilder;
  padding(value: number): RadioButtonBuilder;
  paddingBind(expr: string): RadioButtonBuilder;
  palette(value: PaletteBuilder): RadioButtonBuilder;
  paletteBind(expr: string): RadioButtonBuilder;
  parent(value: ItemBuilder): RadioButtonBuilder;
  parentBind(expr: string): RadioButtonBuilder;
  rightInset(value: number): RadioButtonBuilder;
  rightInsetBind(expr: string): RadioButtonBuilder;
  rightPadding(value: number): RadioButtonBuilder;
  rightPaddingBind(expr: string): RadioButtonBuilder;
  rotation(value: number): RadioButtonBuilder;
  rotationBind(expr: string): RadioButtonBuilder;
  scale(value: number): RadioButtonBuilder;
  scaleBind(expr: string): RadioButtonBuilder;
  smooth(value: boolean): RadioButtonBuilder;
  smoothBind(expr: string): RadioButtonBuilder;
  spacing(value: number): RadioButtonBuilder;
  spacingBind(expr: string): RadioButtonBuilder;
  state(value: string): RadioButtonBuilder;
  stateBind(expr: string): RadioButtonBuilder;
  text(value: string): RadioButtonBuilder;
  textBind(expr: string): RadioButtonBuilder;
  topInset(value: number): RadioButtonBuilder;
  topInsetBind(expr: string): RadioButtonBuilder;
  topPadding(value: number): RadioButtonBuilder;
  topPaddingBind(expr: string): RadioButtonBuilder;
  transformOrigin(value: QmlValue): RadioButtonBuilder;
  transformOriginBind(expr: string): RadioButtonBuilder;
  verticalPadding(value: number): RadioButtonBuilder;
  verticalPaddingBind(expr: string): RadioButtonBuilder;
  visible(value: boolean): RadioButtonBuilder;
  visibleBind(expr: string): RadioButtonBuilder;
  wheelEnabled(value: boolean): RadioButtonBuilder;
  wheelEnabledBind(expr: string): RadioButtonBuilder;
  width(value: number): RadioButtonBuilder;
  widthBind(expr: string): RadioButtonBuilder;
  x(value: number): RadioButtonBuilder;
  xBind(expr: string): RadioButtonBuilder;
  y(value: number): RadioButtonBuilder;
  yBind(expr: string): RadioButtonBuilder;
  z(value: number): RadioButtonBuilder;
  zBind(expr: string): RadioButtonBuilder;
  onActionChanged(handler: () => void): RadioButtonBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RadioButtonBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RadioButtonBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RadioButtonBuilder;
  onAutoExclusiveChanged(handler: () => void): RadioButtonBuilder;
  onAutoRepeatChanged(handler: () => void): RadioButtonBuilder;
  onAutoRepeatDelayChanged(handler: () => void): RadioButtonBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): RadioButtonBuilder;
  onAvailableHeightChanged(handler: () => void): RadioButtonBuilder;
  onAvailableWidthChanged(handler: () => void): RadioButtonBuilder;
  onBackgroundChanged(handler: () => void): RadioButtonBuilder;
  onBaselineOffsetChanged(handler: () => void): RadioButtonBuilder;
  onBottomInsetChanged(handler: () => void): RadioButtonBuilder;
  onBottomPaddingChanged(handler: () => void): RadioButtonBuilder;
  onCanceled(handler: () => void): RadioButtonBuilder;
  onCheckableChanged(handler: () => void): RadioButtonBuilder;
  onCheckedChanged(handler: () => void): RadioButtonBuilder;
  onChildrenChanged(handler: () => void): RadioButtonBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RadioButtonBuilder;
  onClicked(handler: () => void): RadioButtonBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RadioButtonBuilder;
  onContainmentMaskChanged(handler: () => void): RadioButtonBuilder;
  onContentItemChanged(handler: () => void): RadioButtonBuilder;
  onDisplayChanged(handler: () => void): RadioButtonBuilder;
  onDoubleClicked(handler: () => void): RadioButtonBuilder;
  onDownChanged(handler: () => void): RadioButtonBuilder;
  onEnabledChanged(handler: () => void): RadioButtonBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RadioButtonBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RadioButtonBuilder;
  onFocusReasonChanged(handler: () => void): RadioButtonBuilder;
  onFontChanged(handler: () => void): RadioButtonBuilder;
  onHeightChanged(handler: () => void): RadioButtonBuilder;
  onHorizontalPaddingChanged(handler: () => void): RadioButtonBuilder;
  onHoverEnabledChanged(handler: () => void): RadioButtonBuilder;
  onHoveredChanged(handler: () => void): RadioButtonBuilder;
  onIconChanged(handler: () => void): RadioButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): RadioButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): RadioButtonBuilder;
  onImplicitContentHeightChanged(handler: () => void): RadioButtonBuilder;
  onImplicitContentWidthChanged(handler: () => void): RadioButtonBuilder;
  onImplicitHeightChanged(handler: () => void): RadioButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): RadioButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): RadioButtonBuilder;
  onImplicitWidthChanged(handler: () => void): RadioButtonBuilder;
  onIndicatorChanged(handler: () => void): RadioButtonBuilder;
  onLeftInsetChanged(handler: () => void): RadioButtonBuilder;
  onLeftPaddingChanged(handler: () => void): RadioButtonBuilder;
  onLocaleChanged(handler: () => void): RadioButtonBuilder;
  onMirroredChanged(handler: () => void): RadioButtonBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RadioButtonBuilder;
  onOpacityChanged(handler: () => void): RadioButtonBuilder;
  onPaddingChanged(handler: () => void): RadioButtonBuilder;
  onPaletteChanged(handler: () => void): RadioButtonBuilder;
  onPaletteCreated(handler: () => void): RadioButtonBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RadioButtonBuilder;
  onPressAndHold(handler: () => void): RadioButtonBuilder;
  onPressXChanged(handler: () => void): RadioButtonBuilder;
  onPressYChanged(handler: () => void): RadioButtonBuilder;
  onPressed(handler: () => void): RadioButtonBuilder;
  onPressedChanged(handler: () => void): RadioButtonBuilder;
  onReleased(handler: () => void): RadioButtonBuilder;
  onRightInsetChanged(handler: () => void): RadioButtonBuilder;
  onRightPaddingChanged(handler: () => void): RadioButtonBuilder;
  onRotationChanged(handler: () => void): RadioButtonBuilder;
  onScaleChanged(handler: () => void): RadioButtonBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RadioButtonBuilder;
  onSpacingChanged(handler: () => void): RadioButtonBuilder;
  onStateChanged(handler: (arg0: string) => void): RadioButtonBuilder;
  onTextChanged(handler: () => void): RadioButtonBuilder;
  onToggled(handler: () => void): RadioButtonBuilder;
  onTopInsetChanged(handler: () => void): RadioButtonBuilder;
  onTopPaddingChanged(handler: () => void): RadioButtonBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RadioButtonBuilder;
  onVerticalPaddingChanged(handler: () => void): RadioButtonBuilder;
  onVisibleChanged(handler: () => void): RadioButtonBuilder;
  onVisibleChildrenChanged(handler: () => void): RadioButtonBuilder;
  onVisualFocusChanged(handler: () => void): RadioButtonBuilder;
  onWheelEnabledChanged(handler: () => void): RadioButtonBuilder;
  onWidthChanged(handler: () => void): RadioButtonBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RadioButtonBuilder;
  onXChanged(handler: () => void): RadioButtonBuilder;
  onYChanged(handler: () => void): RadioButtonBuilder;
  onZChanged(handler: () => void): RadioButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RadioButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): RadioButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RadioButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RadioButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RadioButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RadioButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RadioButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RadioButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RadioButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RadioButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RadioButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RadioButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RadioButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RadioButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RadioButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RadioButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RadioButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RadioButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RadioButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RadioButtonBuilder;
}

export function RadioButton(): RadioButtonBuilder {
  return new DslBuilderImpl('RadioButton') as unknown as RadioButtonBuilder;
}

export namespace RadioButton {
  export namespace Display {
    export const IconOnly = createEnumToken('RadioButton', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('RadioButton', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('RadioButton', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('RadioButton', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RadioButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RadioButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RadioButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RadioButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RadioButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RadioButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RadioButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('RadioButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RadioButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RadioButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RadioButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RadioButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RadioButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RadioButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RadioButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RadioButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RadioButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RadioButton', 'TransformOrigin', 'BottomRight');
  }
}
