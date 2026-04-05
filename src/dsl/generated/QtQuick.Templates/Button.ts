// AUTO-GENERATED — DO NOT EDIT
// Type: Button
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
export interface ButtonBuilder {
  id(id: string): ButtonBuilder;
  child(obj: QmlObjectBuilder): ButtonBuilder;

  action(value: ActionBuilder): ButtonBuilder;
  actionBind(expr: string): ButtonBuilder;
  activeFocusOnTab(value: boolean): ButtonBuilder;
  activeFocusOnTabBind(expr: string): ButtonBuilder;
  antialiasing(value: boolean): ButtonBuilder;
  antialiasingBind(expr: string): ButtonBuilder;
  autoExclusive(value: boolean): ButtonBuilder;
  autoExclusiveBind(expr: string): ButtonBuilder;
  autoRepeat(value: boolean): ButtonBuilder;
  autoRepeatBind(expr: string): ButtonBuilder;
  autoRepeatDelay(value: number): ButtonBuilder;
  autoRepeatDelayBind(expr: string): ButtonBuilder;
  autoRepeatInterval(value: number): ButtonBuilder;
  autoRepeatIntervalBind(expr: string): ButtonBuilder;
  background(value: ItemBuilder): ButtonBuilder;
  backgroundBind(expr: string): ButtonBuilder;
  baselineOffset(value: number): ButtonBuilder;
  baselineOffsetBind(expr: string): ButtonBuilder;
  bottomInset(value: number): ButtonBuilder;
  bottomInsetBind(expr: string): ButtonBuilder;
  bottomPadding(value: number): ButtonBuilder;
  bottomPaddingBind(expr: string): ButtonBuilder;
  checkable(value: boolean): ButtonBuilder;
  checkableBind(expr: string): ButtonBuilder;
  checked(value: boolean): ButtonBuilder;
  checkedBind(expr: string): ButtonBuilder;
  clip(value: boolean): ButtonBuilder;
  clipBind(expr: string): ButtonBuilder;
  containmentMask(value: QtObjectBuilder): ButtonBuilder;
  containmentMaskBind(expr: string): ButtonBuilder;
  contentItem(value: ItemBuilder): ButtonBuilder;
  contentItemBind(expr: string): ButtonBuilder;
  display(value: QmlValue): ButtonBuilder;
  displayBind(expr: string): ButtonBuilder;
  down(value: boolean): ButtonBuilder;
  downBind(expr: string): ButtonBuilder;
  enabled(value: boolean): ButtonBuilder;
  enabledBind(expr: string): ButtonBuilder;
  flat(value: boolean): ButtonBuilder;
  flatBind(expr: string): ButtonBuilder;
  focus(value: boolean): ButtonBuilder;
  focusBind(expr: string): ButtonBuilder;
  focusPolicy(value: QmlValue): ButtonBuilder;
  focusPolicyBind(expr: string): ButtonBuilder;
  focusReason(value: QmlValue): ButtonBuilder;
  focusReasonBind(expr: string): ButtonBuilder;
  font(value: QmlFont): ButtonBuilder;
  fontBind(expr: string): ButtonBuilder;
  height(value: number): ButtonBuilder;
  heightBind(expr: string): ButtonBuilder;
  highlighted(value: boolean): ButtonBuilder;
  highlightedBind(expr: string): ButtonBuilder;
  horizontalPadding(value: number): ButtonBuilder;
  horizontalPaddingBind(expr: string): ButtonBuilder;
  hoverEnabled(value: boolean): ButtonBuilder;
  hoverEnabledBind(expr: string): ButtonBuilder;
  icon(value: QmlValue): ButtonBuilder;
  iconBind(expr: string): ButtonBuilder;
  implicitHeight(value: number): ButtonBuilder;
  implicitHeightBind(expr: string): ButtonBuilder;
  implicitWidth(value: number): ButtonBuilder;
  implicitWidthBind(expr: string): ButtonBuilder;
  indicator(value: ItemBuilder): ButtonBuilder;
  indicatorBind(expr: string): ButtonBuilder;
  leftInset(value: number): ButtonBuilder;
  leftInsetBind(expr: string): ButtonBuilder;
  leftPadding(value: number): ButtonBuilder;
  leftPaddingBind(expr: string): ButtonBuilder;
  locale(value: QmlValue): ButtonBuilder;
  localeBind(expr: string): ButtonBuilder;
  objectName(value: string): ButtonBuilder;
  objectNameBind(expr: string): ButtonBuilder;
  opacity(value: number): ButtonBuilder;
  opacityBind(expr: string): ButtonBuilder;
  padding(value: number): ButtonBuilder;
  paddingBind(expr: string): ButtonBuilder;
  palette(value: PaletteBuilder): ButtonBuilder;
  paletteBind(expr: string): ButtonBuilder;
  parent(value: ItemBuilder): ButtonBuilder;
  parentBind(expr: string): ButtonBuilder;
  rightInset(value: number): ButtonBuilder;
  rightInsetBind(expr: string): ButtonBuilder;
  rightPadding(value: number): ButtonBuilder;
  rightPaddingBind(expr: string): ButtonBuilder;
  rotation(value: number): ButtonBuilder;
  rotationBind(expr: string): ButtonBuilder;
  scale(value: number): ButtonBuilder;
  scaleBind(expr: string): ButtonBuilder;
  smooth(value: boolean): ButtonBuilder;
  smoothBind(expr: string): ButtonBuilder;
  spacing(value: number): ButtonBuilder;
  spacingBind(expr: string): ButtonBuilder;
  state(value: string): ButtonBuilder;
  stateBind(expr: string): ButtonBuilder;
  text(value: string): ButtonBuilder;
  textBind(expr: string): ButtonBuilder;
  topInset(value: number): ButtonBuilder;
  topInsetBind(expr: string): ButtonBuilder;
  topPadding(value: number): ButtonBuilder;
  topPaddingBind(expr: string): ButtonBuilder;
  transformOrigin(value: QmlValue): ButtonBuilder;
  transformOriginBind(expr: string): ButtonBuilder;
  verticalPadding(value: number): ButtonBuilder;
  verticalPaddingBind(expr: string): ButtonBuilder;
  visible(value: boolean): ButtonBuilder;
  visibleBind(expr: string): ButtonBuilder;
  wheelEnabled(value: boolean): ButtonBuilder;
  wheelEnabledBind(expr: string): ButtonBuilder;
  width(value: number): ButtonBuilder;
  widthBind(expr: string): ButtonBuilder;
  x(value: number): ButtonBuilder;
  xBind(expr: string): ButtonBuilder;
  y(value: number): ButtonBuilder;
  yBind(expr: string): ButtonBuilder;
  z(value: number): ButtonBuilder;
  zBind(expr: string): ButtonBuilder;
  onActionChanged(handler: () => void): ButtonBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ButtonBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ButtonBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ButtonBuilder;
  onAutoExclusiveChanged(handler: () => void): ButtonBuilder;
  onAutoRepeatChanged(handler: () => void): ButtonBuilder;
  onAutoRepeatDelayChanged(handler: () => void): ButtonBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): ButtonBuilder;
  onAvailableHeightChanged(handler: () => void): ButtonBuilder;
  onAvailableWidthChanged(handler: () => void): ButtonBuilder;
  onBackgroundChanged(handler: () => void): ButtonBuilder;
  onBaselineOffsetChanged(handler: () => void): ButtonBuilder;
  onBottomInsetChanged(handler: () => void): ButtonBuilder;
  onBottomPaddingChanged(handler: () => void): ButtonBuilder;
  onCanceled(handler: () => void): ButtonBuilder;
  onCheckableChanged(handler: () => void): ButtonBuilder;
  onCheckedChanged(handler: () => void): ButtonBuilder;
  onChildrenChanged(handler: () => void): ButtonBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ButtonBuilder;
  onClicked(handler: () => void): ButtonBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ButtonBuilder;
  onContainmentMaskChanged(handler: () => void): ButtonBuilder;
  onContentItemChanged(handler: () => void): ButtonBuilder;
  onDisplayChanged(handler: () => void): ButtonBuilder;
  onDoubleClicked(handler: () => void): ButtonBuilder;
  onDownChanged(handler: () => void): ButtonBuilder;
  onEnabledChanged(handler: () => void): ButtonBuilder;
  onFlatChanged(handler: () => void): ButtonBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ButtonBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ButtonBuilder;
  onFocusReasonChanged(handler: () => void): ButtonBuilder;
  onFontChanged(handler: () => void): ButtonBuilder;
  onHeightChanged(handler: () => void): ButtonBuilder;
  onHighlightedChanged(handler: () => void): ButtonBuilder;
  onHorizontalPaddingChanged(handler: () => void): ButtonBuilder;
  onHoverEnabledChanged(handler: () => void): ButtonBuilder;
  onHoveredChanged(handler: () => void): ButtonBuilder;
  onIconChanged(handler: () => void): ButtonBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ButtonBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ButtonBuilder;
  onImplicitContentHeightChanged(handler: () => void): ButtonBuilder;
  onImplicitContentWidthChanged(handler: () => void): ButtonBuilder;
  onImplicitHeightChanged(handler: () => void): ButtonBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): ButtonBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): ButtonBuilder;
  onImplicitWidthChanged(handler: () => void): ButtonBuilder;
  onIndicatorChanged(handler: () => void): ButtonBuilder;
  onLeftInsetChanged(handler: () => void): ButtonBuilder;
  onLeftPaddingChanged(handler: () => void): ButtonBuilder;
  onLocaleChanged(handler: () => void): ButtonBuilder;
  onMirroredChanged(handler: () => void): ButtonBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ButtonBuilder;
  onOpacityChanged(handler: () => void): ButtonBuilder;
  onPaddingChanged(handler: () => void): ButtonBuilder;
  onPaletteChanged(handler: () => void): ButtonBuilder;
  onPaletteCreated(handler: () => void): ButtonBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ButtonBuilder;
  onPressAndHold(handler: () => void): ButtonBuilder;
  onPressXChanged(handler: () => void): ButtonBuilder;
  onPressYChanged(handler: () => void): ButtonBuilder;
  onPressed(handler: () => void): ButtonBuilder;
  onPressedChanged(handler: () => void): ButtonBuilder;
  onReleased(handler: () => void): ButtonBuilder;
  onRightInsetChanged(handler: () => void): ButtonBuilder;
  onRightPaddingChanged(handler: () => void): ButtonBuilder;
  onRotationChanged(handler: () => void): ButtonBuilder;
  onScaleChanged(handler: () => void): ButtonBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ButtonBuilder;
  onSpacingChanged(handler: () => void): ButtonBuilder;
  onStateChanged(handler: (arg0: string) => void): ButtonBuilder;
  onTextChanged(handler: () => void): ButtonBuilder;
  onToggled(handler: () => void): ButtonBuilder;
  onTopInsetChanged(handler: () => void): ButtonBuilder;
  onTopPaddingChanged(handler: () => void): ButtonBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ButtonBuilder;
  onVerticalPaddingChanged(handler: () => void): ButtonBuilder;
  onVisibleChanged(handler: () => void): ButtonBuilder;
  onVisibleChildrenChanged(handler: () => void): ButtonBuilder;
  onVisualFocusChanged(handler: () => void): ButtonBuilder;
  onWheelEnabledChanged(handler: () => void): ButtonBuilder;
  onWidthChanged(handler: () => void): ButtonBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ButtonBuilder;
  onXChanged(handler: () => void): ButtonBuilder;
  onYChanged(handler: () => void): ButtonBuilder;
  onZChanged(handler: () => void): ButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): ButtonBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ButtonBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ButtonBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ButtonBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ButtonBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ButtonBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ButtonBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ButtonBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ButtonBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ButtonBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ButtonBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ButtonBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ButtonBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ButtonBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ButtonBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ButtonBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ButtonBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ButtonBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ButtonBuilder;
}

export function Button(): ButtonBuilder {
  return new DslBuilderImpl('Button') as unknown as ButtonBuilder;
}

export namespace Button {
  export namespace Display {
    export const IconOnly = createEnumToken('Button', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('Button', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('Button', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('Button', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Button',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Button',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Button', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Button', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Button', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Button', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Button', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Button',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Button',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Button', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Button',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Button', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Button', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Button', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Button', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Button', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Button', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Button', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Button', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Button', 'TransformOrigin', 'BottomRight');
  }
}
