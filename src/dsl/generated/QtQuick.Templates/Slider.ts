// AUTO-GENERATED — DO NOT EDIT
// Type: Slider
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
export interface SliderBuilder {
  id(id: string): SliderBuilder;
  child(obj: QmlObjectBuilder): SliderBuilder;

  activeFocusOnTab(value: boolean): SliderBuilder;
  activeFocusOnTabBind(expr: string): SliderBuilder;
  antialiasing(value: boolean): SliderBuilder;
  antialiasingBind(expr: string): SliderBuilder;
  background(value: ItemBuilder): SliderBuilder;
  backgroundBind(expr: string): SliderBuilder;
  baselineOffset(value: number): SliderBuilder;
  baselineOffsetBind(expr: string): SliderBuilder;
  bottomInset(value: number): SliderBuilder;
  bottomInsetBind(expr: string): SliderBuilder;
  bottomPadding(value: number): SliderBuilder;
  bottomPaddingBind(expr: string): SliderBuilder;
  clip(value: boolean): SliderBuilder;
  clipBind(expr: string): SliderBuilder;
  containmentMask(value: QtObjectBuilder): SliderBuilder;
  containmentMaskBind(expr: string): SliderBuilder;
  contentItem(value: ItemBuilder): SliderBuilder;
  contentItemBind(expr: string): SliderBuilder;
  enabled(value: boolean): SliderBuilder;
  enabledBind(expr: string): SliderBuilder;
  focus(value: boolean): SliderBuilder;
  focusBind(expr: string): SliderBuilder;
  focusPolicy(value: QmlValue): SliderBuilder;
  focusPolicyBind(expr: string): SliderBuilder;
  focusReason(value: QmlValue): SliderBuilder;
  focusReasonBind(expr: string): SliderBuilder;
  font(value: QmlFont): SliderBuilder;
  fontBind(expr: string): SliderBuilder;
  from(value: number): SliderBuilder;
  fromBind(expr: string): SliderBuilder;
  handle(value: ItemBuilder): SliderBuilder;
  handleBind(expr: string): SliderBuilder;
  height(value: number): SliderBuilder;
  heightBind(expr: string): SliderBuilder;
  horizontalPadding(value: number): SliderBuilder;
  horizontalPaddingBind(expr: string): SliderBuilder;
  hoverEnabled(value: boolean): SliderBuilder;
  hoverEnabledBind(expr: string): SliderBuilder;
  implicitHeight(value: number): SliderBuilder;
  implicitHeightBind(expr: string): SliderBuilder;
  implicitWidth(value: number): SliderBuilder;
  implicitWidthBind(expr: string): SliderBuilder;
  leftInset(value: number): SliderBuilder;
  leftInsetBind(expr: string): SliderBuilder;
  leftPadding(value: number): SliderBuilder;
  leftPaddingBind(expr: string): SliderBuilder;
  live(value: boolean): SliderBuilder;
  liveBind(expr: string): SliderBuilder;
  locale(value: QmlValue): SliderBuilder;
  localeBind(expr: string): SliderBuilder;
  objectName(value: string): SliderBuilder;
  objectNameBind(expr: string): SliderBuilder;
  opacity(value: number): SliderBuilder;
  opacityBind(expr: string): SliderBuilder;
  orientation(value: QmlValue): SliderBuilder;
  orientationBind(expr: string): SliderBuilder;
  padding(value: number): SliderBuilder;
  paddingBind(expr: string): SliderBuilder;
  palette(value: PaletteBuilder): SliderBuilder;
  paletteBind(expr: string): SliderBuilder;
  parent(value: ItemBuilder): SliderBuilder;
  parentBind(expr: string): SliderBuilder;
  pressed(value: boolean): SliderBuilder;
  pressedBind(expr: string): SliderBuilder;
  rightInset(value: number): SliderBuilder;
  rightInsetBind(expr: string): SliderBuilder;
  rightPadding(value: number): SliderBuilder;
  rightPaddingBind(expr: string): SliderBuilder;
  rotation(value: number): SliderBuilder;
  rotationBind(expr: string): SliderBuilder;
  scale(value: number): SliderBuilder;
  scaleBind(expr: string): SliderBuilder;
  smooth(value: boolean): SliderBuilder;
  smoothBind(expr: string): SliderBuilder;
  snapMode(value: QmlValue): SliderBuilder;
  snapModeBind(expr: string): SliderBuilder;
  spacing(value: number): SliderBuilder;
  spacingBind(expr: string): SliderBuilder;
  state(value: string): SliderBuilder;
  stateBind(expr: string): SliderBuilder;
  stepSize(value: number): SliderBuilder;
  stepSizeBind(expr: string): SliderBuilder;
  to(value: number): SliderBuilder;
  toBind(expr: string): SliderBuilder;
  topInset(value: number): SliderBuilder;
  topInsetBind(expr: string): SliderBuilder;
  topPadding(value: number): SliderBuilder;
  topPaddingBind(expr: string): SliderBuilder;
  touchDragThreshold(value: number): SliderBuilder;
  touchDragThresholdBind(expr: string): SliderBuilder;
  transformOrigin(value: QmlValue): SliderBuilder;
  transformOriginBind(expr: string): SliderBuilder;
  value(value: number): SliderBuilder;
  valueBind(expr: string): SliderBuilder;
  verticalPadding(value: number): SliderBuilder;
  verticalPaddingBind(expr: string): SliderBuilder;
  visible(value: boolean): SliderBuilder;
  visibleBind(expr: string): SliderBuilder;
  wheelEnabled(value: boolean): SliderBuilder;
  wheelEnabledBind(expr: string): SliderBuilder;
  width(value: number): SliderBuilder;
  widthBind(expr: string): SliderBuilder;
  x(value: number): SliderBuilder;
  xBind(expr: string): SliderBuilder;
  y(value: number): SliderBuilder;
  yBind(expr: string): SliderBuilder;
  z(value: number): SliderBuilder;
  zBind(expr: string): SliderBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SliderBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SliderBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SliderBuilder;
  onAvailableHeightChanged(handler: () => void): SliderBuilder;
  onAvailableWidthChanged(handler: () => void): SliderBuilder;
  onBackgroundChanged(handler: () => void): SliderBuilder;
  onBaselineOffsetChanged(handler: () => void): SliderBuilder;
  onBottomInsetChanged(handler: () => void): SliderBuilder;
  onBottomPaddingChanged(handler: () => void): SliderBuilder;
  onChildrenChanged(handler: () => void): SliderBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SliderBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SliderBuilder;
  onContainmentMaskChanged(handler: () => void): SliderBuilder;
  onContentItemChanged(handler: () => void): SliderBuilder;
  onEnabledChanged(handler: () => void): SliderBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SliderBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SliderBuilder;
  onFocusReasonChanged(handler: () => void): SliderBuilder;
  onFontChanged(handler: () => void): SliderBuilder;
  onFromChanged(handler: () => void): SliderBuilder;
  onHandleChanged(handler: () => void): SliderBuilder;
  onHeightChanged(handler: () => void): SliderBuilder;
  onHorizontalPaddingChanged(handler: () => void): SliderBuilder;
  onHoverEnabledChanged(handler: () => void): SliderBuilder;
  onHoveredChanged(handler: () => void): SliderBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SliderBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SliderBuilder;
  onImplicitContentHeightChanged(handler: () => void): SliderBuilder;
  onImplicitContentWidthChanged(handler: () => void): SliderBuilder;
  onImplicitHandleHeightChanged(handler: () => void): SliderBuilder;
  onImplicitHandleWidthChanged(handler: () => void): SliderBuilder;
  onImplicitHeightChanged(handler: () => void): SliderBuilder;
  onImplicitWidthChanged(handler: () => void): SliderBuilder;
  onLeftInsetChanged(handler: () => void): SliderBuilder;
  onLeftPaddingChanged(handler: () => void): SliderBuilder;
  onLiveChanged(handler: () => void): SliderBuilder;
  onLocaleChanged(handler: () => void): SliderBuilder;
  onMirroredChanged(handler: () => void): SliderBuilder;
  onMoved(handler: () => void): SliderBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SliderBuilder;
  onOpacityChanged(handler: () => void): SliderBuilder;
  onOrientationChanged(handler: () => void): SliderBuilder;
  onPaddingChanged(handler: () => void): SliderBuilder;
  onPaletteChanged(handler: () => void): SliderBuilder;
  onPaletteCreated(handler: () => void): SliderBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SliderBuilder;
  onPositionChanged(handler: () => void): SliderBuilder;
  onPressedChanged(handler: () => void): SliderBuilder;
  onRightInsetChanged(handler: () => void): SliderBuilder;
  onRightPaddingChanged(handler: () => void): SliderBuilder;
  onRotationChanged(handler: () => void): SliderBuilder;
  onScaleChanged(handler: () => void): SliderBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SliderBuilder;
  onSnapModeChanged(handler: () => void): SliderBuilder;
  onSpacingChanged(handler: () => void): SliderBuilder;
  onStateChanged(handler: (arg0: string) => void): SliderBuilder;
  onStepSizeChanged(handler: () => void): SliderBuilder;
  onToChanged(handler: () => void): SliderBuilder;
  onTopInsetChanged(handler: () => void): SliderBuilder;
  onTopPaddingChanged(handler: () => void): SliderBuilder;
  onTouchDragThresholdChanged(handler: () => void): SliderBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SliderBuilder;
  onValueChanged(handler: () => void): SliderBuilder;
  onVerticalPaddingChanged(handler: () => void): SliderBuilder;
  onVisibleChanged(handler: () => void): SliderBuilder;
  onVisibleChildrenChanged(handler: () => void): SliderBuilder;
  onVisualFocusChanged(handler: () => void): SliderBuilder;
  onVisualPositionChanged(handler: () => void): SliderBuilder;
  onWheelEnabledChanged(handler: () => void): SliderBuilder;
  onWidthChanged(handler: () => void): SliderBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SliderBuilder;
  onXChanged(handler: () => void): SliderBuilder;
  onYChanged(handler: () => void): SliderBuilder;
  onZChanged(handler: () => void): SliderBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SliderBuilder;
  layer(setup: (b: LayerBuilder) => void): SliderBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SliderBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SliderBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SliderBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SliderBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SliderBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SliderBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SliderBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SliderBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SliderBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SliderBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SliderBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SliderBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SliderBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SliderBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SliderBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SliderBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SliderBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SliderBuilder;
}

export function Slider(): SliderBuilder {
  return new DslBuilderImpl('Slider') as unknown as SliderBuilder;
}

export namespace Slider {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Slider',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Slider',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Slider', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Slider', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Slider', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Slider', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Slider', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Slider', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Slider',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('Slider', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('Slider', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('Slider', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Slider', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Slider', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Slider', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Slider', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Slider', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Slider', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Slider', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Slider', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Slider', 'TransformOrigin', 'BottomRight');
  }
}
