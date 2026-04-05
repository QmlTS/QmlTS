// AUTO-GENERATED — DO NOT EDIT
// Type: RangeSlider
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { WindowBuilder } from '../QtQuick/Window.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
import type { FirstBuilder } from './QQuickRangeSliderNode.js';
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
export interface RangeSliderBuilder {
  id(id: string): RangeSliderBuilder;
  child(obj: QmlObjectBuilder): RangeSliderBuilder;

  activeFocusOnTab(value: boolean): RangeSliderBuilder;
  activeFocusOnTabBind(expr: string): RangeSliderBuilder;
  antialiasing(value: boolean): RangeSliderBuilder;
  antialiasingBind(expr: string): RangeSliderBuilder;
  background(value: ItemBuilder): RangeSliderBuilder;
  backgroundBind(expr: string): RangeSliderBuilder;
  baselineOffset(value: number): RangeSliderBuilder;
  baselineOffsetBind(expr: string): RangeSliderBuilder;
  bottomInset(value: number): RangeSliderBuilder;
  bottomInsetBind(expr: string): RangeSliderBuilder;
  bottomPadding(value: number): RangeSliderBuilder;
  bottomPaddingBind(expr: string): RangeSliderBuilder;
  clip(value: boolean): RangeSliderBuilder;
  clipBind(expr: string): RangeSliderBuilder;
  containmentMask(value: QtObjectBuilder): RangeSliderBuilder;
  containmentMaskBind(expr: string): RangeSliderBuilder;
  contentItem(value: ItemBuilder): RangeSliderBuilder;
  contentItemBind(expr: string): RangeSliderBuilder;
  enabled(value: boolean): RangeSliderBuilder;
  enabledBind(expr: string): RangeSliderBuilder;
  focus(value: boolean): RangeSliderBuilder;
  focusBind(expr: string): RangeSliderBuilder;
  focusPolicy(value: QmlValue): RangeSliderBuilder;
  focusPolicyBind(expr: string): RangeSliderBuilder;
  focusReason(value: QmlValue): RangeSliderBuilder;
  focusReasonBind(expr: string): RangeSliderBuilder;
  font(value: QmlFont): RangeSliderBuilder;
  fontBind(expr: string): RangeSliderBuilder;
  from(value: number): RangeSliderBuilder;
  fromBind(expr: string): RangeSliderBuilder;
  height(value: number): RangeSliderBuilder;
  heightBind(expr: string): RangeSliderBuilder;
  horizontalPadding(value: number): RangeSliderBuilder;
  horizontalPaddingBind(expr: string): RangeSliderBuilder;
  hoverEnabled(value: boolean): RangeSliderBuilder;
  hoverEnabledBind(expr: string): RangeSliderBuilder;
  implicitHeight(value: number): RangeSliderBuilder;
  implicitHeightBind(expr: string): RangeSliderBuilder;
  implicitWidth(value: number): RangeSliderBuilder;
  implicitWidthBind(expr: string): RangeSliderBuilder;
  leftInset(value: number): RangeSliderBuilder;
  leftInsetBind(expr: string): RangeSliderBuilder;
  leftPadding(value: number): RangeSliderBuilder;
  leftPaddingBind(expr: string): RangeSliderBuilder;
  live(value: boolean): RangeSliderBuilder;
  liveBind(expr: string): RangeSliderBuilder;
  locale(value: QmlValue): RangeSliderBuilder;
  localeBind(expr: string): RangeSliderBuilder;
  objectName(value: string): RangeSliderBuilder;
  objectNameBind(expr: string): RangeSliderBuilder;
  opacity(value: number): RangeSliderBuilder;
  opacityBind(expr: string): RangeSliderBuilder;
  orientation(value: QmlValue): RangeSliderBuilder;
  orientationBind(expr: string): RangeSliderBuilder;
  padding(value: number): RangeSliderBuilder;
  paddingBind(expr: string): RangeSliderBuilder;
  palette(value: PaletteBuilder): RangeSliderBuilder;
  paletteBind(expr: string): RangeSliderBuilder;
  parent(value: ItemBuilder): RangeSliderBuilder;
  parentBind(expr: string): RangeSliderBuilder;
  rightInset(value: number): RangeSliderBuilder;
  rightInsetBind(expr: string): RangeSliderBuilder;
  rightPadding(value: number): RangeSliderBuilder;
  rightPaddingBind(expr: string): RangeSliderBuilder;
  rotation(value: number): RangeSliderBuilder;
  rotationBind(expr: string): RangeSliderBuilder;
  scale(value: number): RangeSliderBuilder;
  scaleBind(expr: string): RangeSliderBuilder;
  smooth(value: boolean): RangeSliderBuilder;
  smoothBind(expr: string): RangeSliderBuilder;
  snapMode(value: QmlValue): RangeSliderBuilder;
  snapModeBind(expr: string): RangeSliderBuilder;
  spacing(value: number): RangeSliderBuilder;
  spacingBind(expr: string): RangeSliderBuilder;
  state(value: string): RangeSliderBuilder;
  stateBind(expr: string): RangeSliderBuilder;
  stepSize(value: number): RangeSliderBuilder;
  stepSizeBind(expr: string): RangeSliderBuilder;
  to(value: number): RangeSliderBuilder;
  toBind(expr: string): RangeSliderBuilder;
  topInset(value: number): RangeSliderBuilder;
  topInsetBind(expr: string): RangeSliderBuilder;
  topPadding(value: number): RangeSliderBuilder;
  topPaddingBind(expr: string): RangeSliderBuilder;
  touchDragThreshold(value: number): RangeSliderBuilder;
  touchDragThresholdBind(expr: string): RangeSliderBuilder;
  transformOrigin(value: QmlValue): RangeSliderBuilder;
  transformOriginBind(expr: string): RangeSliderBuilder;
  verticalPadding(value: number): RangeSliderBuilder;
  verticalPaddingBind(expr: string): RangeSliderBuilder;
  visible(value: boolean): RangeSliderBuilder;
  visibleBind(expr: string): RangeSliderBuilder;
  wheelEnabled(value: boolean): RangeSliderBuilder;
  wheelEnabledBind(expr: string): RangeSliderBuilder;
  width(value: number): RangeSliderBuilder;
  widthBind(expr: string): RangeSliderBuilder;
  x(value: number): RangeSliderBuilder;
  xBind(expr: string): RangeSliderBuilder;
  y(value: number): RangeSliderBuilder;
  yBind(expr: string): RangeSliderBuilder;
  z(value: number): RangeSliderBuilder;
  zBind(expr: string): RangeSliderBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RangeSliderBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RangeSliderBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RangeSliderBuilder;
  onAvailableHeightChanged(handler: () => void): RangeSliderBuilder;
  onAvailableWidthChanged(handler: () => void): RangeSliderBuilder;
  onBackgroundChanged(handler: () => void): RangeSliderBuilder;
  onBaselineOffsetChanged(handler: () => void): RangeSliderBuilder;
  onBottomInsetChanged(handler: () => void): RangeSliderBuilder;
  onBottomPaddingChanged(handler: () => void): RangeSliderBuilder;
  onChildrenChanged(handler: () => void): RangeSliderBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RangeSliderBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RangeSliderBuilder;
  onContainmentMaskChanged(handler: () => void): RangeSliderBuilder;
  onContentItemChanged(handler: () => void): RangeSliderBuilder;
  onEnabledChanged(handler: () => void): RangeSliderBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RangeSliderBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RangeSliderBuilder;
  onFocusReasonChanged(handler: () => void): RangeSliderBuilder;
  onFontChanged(handler: () => void): RangeSliderBuilder;
  onFromChanged(handler: () => void): RangeSliderBuilder;
  onHeightChanged(handler: () => void): RangeSliderBuilder;
  onHorizontalPaddingChanged(handler: () => void): RangeSliderBuilder;
  onHoverEnabledChanged(handler: () => void): RangeSliderBuilder;
  onHoveredChanged(handler: () => void): RangeSliderBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): RangeSliderBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): RangeSliderBuilder;
  onImplicitContentHeightChanged(handler: () => void): RangeSliderBuilder;
  onImplicitContentWidthChanged(handler: () => void): RangeSliderBuilder;
  onImplicitHeightChanged(handler: () => void): RangeSliderBuilder;
  onImplicitWidthChanged(handler: () => void): RangeSliderBuilder;
  onLeftInsetChanged(handler: () => void): RangeSliderBuilder;
  onLeftPaddingChanged(handler: () => void): RangeSliderBuilder;
  onLiveChanged(handler: () => void): RangeSliderBuilder;
  onLocaleChanged(handler: () => void): RangeSliderBuilder;
  onMirroredChanged(handler: () => void): RangeSliderBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RangeSliderBuilder;
  onOpacityChanged(handler: () => void): RangeSliderBuilder;
  onOrientationChanged(handler: () => void): RangeSliderBuilder;
  onPaddingChanged(handler: () => void): RangeSliderBuilder;
  onPaletteChanged(handler: () => void): RangeSliderBuilder;
  onPaletteCreated(handler: () => void): RangeSliderBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RangeSliderBuilder;
  onRightInsetChanged(handler: () => void): RangeSliderBuilder;
  onRightPaddingChanged(handler: () => void): RangeSliderBuilder;
  onRotationChanged(handler: () => void): RangeSliderBuilder;
  onScaleChanged(handler: () => void): RangeSliderBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RangeSliderBuilder;
  onSnapModeChanged(handler: () => void): RangeSliderBuilder;
  onSpacingChanged(handler: () => void): RangeSliderBuilder;
  onStateChanged(handler: (arg0: string) => void): RangeSliderBuilder;
  onStepSizeChanged(handler: () => void): RangeSliderBuilder;
  onToChanged(handler: () => void): RangeSliderBuilder;
  onTopInsetChanged(handler: () => void): RangeSliderBuilder;
  onTopPaddingChanged(handler: () => void): RangeSliderBuilder;
  onTouchDragThresholdChanged(handler: () => void): RangeSliderBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RangeSliderBuilder;
  onVerticalPaddingChanged(handler: () => void): RangeSliderBuilder;
  onVisibleChanged(handler: () => void): RangeSliderBuilder;
  onVisibleChildrenChanged(handler: () => void): RangeSliderBuilder;
  onVisualFocusChanged(handler: () => void): RangeSliderBuilder;
  onWheelEnabledChanged(handler: () => void): RangeSliderBuilder;
  onWidthChanged(handler: () => void): RangeSliderBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RangeSliderBuilder;
  onXChanged(handler: () => void): RangeSliderBuilder;
  onYChanged(handler: () => void): RangeSliderBuilder;
  onZChanged(handler: () => void): RangeSliderBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RangeSliderBuilder;
  first(setup: (b: FirstBuilder) => void): RangeSliderBuilder;
  layer(setup: (b: LayerBuilder) => void): RangeSliderBuilder;
  second(setup: (b: FirstBuilder) => void): RangeSliderBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): RangeSliderBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): RangeSliderBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): RangeSliderBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): RangeSliderBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): RangeSliderBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): RangeSliderBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): RangeSliderBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): RangeSliderBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): RangeSliderBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): RangeSliderBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): RangeSliderBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): RangeSliderBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): RangeSliderBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): RangeSliderBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): RangeSliderBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): RangeSliderBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): RangeSliderBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): RangeSliderBuilder;
}

export function RangeSlider(): RangeSliderBuilder {
  return new DslBuilderImpl('RangeSlider') as unknown as RangeSliderBuilder;
}

export namespace RangeSlider {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RangeSlider',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RangeSlider',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RangeSlider', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RangeSlider', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RangeSlider', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RangeSlider', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RangeSlider',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('RangeSlider', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RangeSlider',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('RangeSlider', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('RangeSlider', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('RangeSlider', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RangeSlider', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RangeSlider', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RangeSlider', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RangeSlider', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RangeSlider', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RangeSlider', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RangeSlider', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RangeSlider', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RangeSlider', 'TransformOrigin', 'BottomRight');
  }
}
