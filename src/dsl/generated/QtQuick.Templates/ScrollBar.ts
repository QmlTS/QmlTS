// AUTO-GENERATED — DO NOT EDIT
// Type: ScrollBar
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
export interface ScrollBarBuilder {
  id(id: string): ScrollBarBuilder;
  child(obj: QmlObjectBuilder): ScrollBarBuilder;

  active(value: boolean): ScrollBarBuilder;
  activeBind(expr: string): ScrollBarBuilder;
  activeFocusOnTab(value: boolean): ScrollBarBuilder;
  activeFocusOnTabBind(expr: string): ScrollBarBuilder;
  antialiasing(value: boolean): ScrollBarBuilder;
  antialiasingBind(expr: string): ScrollBarBuilder;
  background(value: ItemBuilder): ScrollBarBuilder;
  backgroundBind(expr: string): ScrollBarBuilder;
  baselineOffset(value: number): ScrollBarBuilder;
  baselineOffsetBind(expr: string): ScrollBarBuilder;
  bottomInset(value: number): ScrollBarBuilder;
  bottomInsetBind(expr: string): ScrollBarBuilder;
  bottomPadding(value: number): ScrollBarBuilder;
  bottomPaddingBind(expr: string): ScrollBarBuilder;
  clip(value: boolean): ScrollBarBuilder;
  clipBind(expr: string): ScrollBarBuilder;
  containmentMask(value: QtObjectBuilder): ScrollBarBuilder;
  containmentMaskBind(expr: string): ScrollBarBuilder;
  contentItem(value: ItemBuilder): ScrollBarBuilder;
  contentItemBind(expr: string): ScrollBarBuilder;
  enabled(value: boolean): ScrollBarBuilder;
  enabledBind(expr: string): ScrollBarBuilder;
  focus(value: boolean): ScrollBarBuilder;
  focusBind(expr: string): ScrollBarBuilder;
  focusPolicy(value: QmlValue): ScrollBarBuilder;
  focusPolicyBind(expr: string): ScrollBarBuilder;
  focusReason(value: QmlValue): ScrollBarBuilder;
  focusReasonBind(expr: string): ScrollBarBuilder;
  font(value: QmlFont): ScrollBarBuilder;
  fontBind(expr: string): ScrollBarBuilder;
  height(value: number): ScrollBarBuilder;
  heightBind(expr: string): ScrollBarBuilder;
  horizontalPadding(value: number): ScrollBarBuilder;
  horizontalPaddingBind(expr: string): ScrollBarBuilder;
  hoverEnabled(value: boolean): ScrollBarBuilder;
  hoverEnabledBind(expr: string): ScrollBarBuilder;
  implicitHeight(value: number): ScrollBarBuilder;
  implicitHeightBind(expr: string): ScrollBarBuilder;
  implicitWidth(value: number): ScrollBarBuilder;
  implicitWidthBind(expr: string): ScrollBarBuilder;
  interactive(value: boolean): ScrollBarBuilder;
  interactiveBind(expr: string): ScrollBarBuilder;
  leftInset(value: number): ScrollBarBuilder;
  leftInsetBind(expr: string): ScrollBarBuilder;
  leftPadding(value: number): ScrollBarBuilder;
  leftPaddingBind(expr: string): ScrollBarBuilder;
  locale(value: QmlValue): ScrollBarBuilder;
  localeBind(expr: string): ScrollBarBuilder;
  minimumSize(value: number): ScrollBarBuilder;
  minimumSizeBind(expr: string): ScrollBarBuilder;
  objectName(value: string): ScrollBarBuilder;
  objectNameBind(expr: string): ScrollBarBuilder;
  opacity(value: number): ScrollBarBuilder;
  opacityBind(expr: string): ScrollBarBuilder;
  orientation(value: QmlValue): ScrollBarBuilder;
  orientationBind(expr: string): ScrollBarBuilder;
  padding(value: number): ScrollBarBuilder;
  paddingBind(expr: string): ScrollBarBuilder;
  palette(value: PaletteBuilder): ScrollBarBuilder;
  paletteBind(expr: string): ScrollBarBuilder;
  parent(value: ItemBuilder): ScrollBarBuilder;
  parentBind(expr: string): ScrollBarBuilder;
  policy(value: QmlValue): ScrollBarBuilder;
  policyBind(expr: string): ScrollBarBuilder;
  position(value: number): ScrollBarBuilder;
  positionBind(expr: string): ScrollBarBuilder;
  pressed(value: boolean): ScrollBarBuilder;
  pressedBind(expr: string): ScrollBarBuilder;
  rightInset(value: number): ScrollBarBuilder;
  rightInsetBind(expr: string): ScrollBarBuilder;
  rightPadding(value: number): ScrollBarBuilder;
  rightPaddingBind(expr: string): ScrollBarBuilder;
  rotation(value: number): ScrollBarBuilder;
  rotationBind(expr: string): ScrollBarBuilder;
  scale(value: number): ScrollBarBuilder;
  scaleBind(expr: string): ScrollBarBuilder;
  size(value: number): ScrollBarBuilder;
  sizeBind(expr: string): ScrollBarBuilder;
  smooth(value: boolean): ScrollBarBuilder;
  smoothBind(expr: string): ScrollBarBuilder;
  snapMode(value: QmlValue): ScrollBarBuilder;
  snapModeBind(expr: string): ScrollBarBuilder;
  spacing(value: number): ScrollBarBuilder;
  spacingBind(expr: string): ScrollBarBuilder;
  state(value: string): ScrollBarBuilder;
  stateBind(expr: string): ScrollBarBuilder;
  stepSize(value: number): ScrollBarBuilder;
  stepSizeBind(expr: string): ScrollBarBuilder;
  topInset(value: number): ScrollBarBuilder;
  topInsetBind(expr: string): ScrollBarBuilder;
  topPadding(value: number): ScrollBarBuilder;
  topPaddingBind(expr: string): ScrollBarBuilder;
  transformOrigin(value: QmlValue): ScrollBarBuilder;
  transformOriginBind(expr: string): ScrollBarBuilder;
  verticalPadding(value: number): ScrollBarBuilder;
  verticalPaddingBind(expr: string): ScrollBarBuilder;
  visible(value: boolean): ScrollBarBuilder;
  visibleBind(expr: string): ScrollBarBuilder;
  wheelEnabled(value: boolean): ScrollBarBuilder;
  wheelEnabledBind(expr: string): ScrollBarBuilder;
  width(value: number): ScrollBarBuilder;
  widthBind(expr: string): ScrollBarBuilder;
  x(value: number): ScrollBarBuilder;
  xBind(expr: string): ScrollBarBuilder;
  y(value: number): ScrollBarBuilder;
  yBind(expr: string): ScrollBarBuilder;
  z(value: number): ScrollBarBuilder;
  zBind(expr: string): ScrollBarBuilder;
  onActiveChanged(handler: () => void): ScrollBarBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ScrollBarBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ScrollBarBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ScrollBarBuilder;
  onAvailableHeightChanged(handler: () => void): ScrollBarBuilder;
  onAvailableWidthChanged(handler: () => void): ScrollBarBuilder;
  onBackgroundChanged(handler: () => void): ScrollBarBuilder;
  onBaselineOffsetChanged(handler: () => void): ScrollBarBuilder;
  onBottomInsetChanged(handler: () => void): ScrollBarBuilder;
  onBottomPaddingChanged(handler: () => void): ScrollBarBuilder;
  onChildrenChanged(handler: () => void): ScrollBarBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ScrollBarBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ScrollBarBuilder;
  onContainmentMaskChanged(handler: () => void): ScrollBarBuilder;
  onContentItemChanged(handler: () => void): ScrollBarBuilder;
  onEnabledChanged(handler: () => void): ScrollBarBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ScrollBarBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ScrollBarBuilder;
  onFocusReasonChanged(handler: () => void): ScrollBarBuilder;
  onFontChanged(handler: () => void): ScrollBarBuilder;
  onHeightChanged(handler: () => void): ScrollBarBuilder;
  onHorizontalPaddingChanged(handler: () => void): ScrollBarBuilder;
  onHoverEnabledChanged(handler: () => void): ScrollBarBuilder;
  onHoveredChanged(handler: () => void): ScrollBarBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ScrollBarBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ScrollBarBuilder;
  onImplicitContentHeightChanged(handler: () => void): ScrollBarBuilder;
  onImplicitContentWidthChanged(handler: () => void): ScrollBarBuilder;
  onImplicitHeightChanged(handler: () => void): ScrollBarBuilder;
  onImplicitWidthChanged(handler: () => void): ScrollBarBuilder;
  onInteractiveChanged(handler: () => void): ScrollBarBuilder;
  onLeftInsetChanged(handler: () => void): ScrollBarBuilder;
  onLeftPaddingChanged(handler: () => void): ScrollBarBuilder;
  onLocaleChanged(handler: () => void): ScrollBarBuilder;
  onMinimumSizeChanged(handler: () => void): ScrollBarBuilder;
  onMirroredChanged(handler: () => void): ScrollBarBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ScrollBarBuilder;
  onOpacityChanged(handler: () => void): ScrollBarBuilder;
  onOrientationChanged(handler: () => void): ScrollBarBuilder;
  onPaddingChanged(handler: () => void): ScrollBarBuilder;
  onPaletteChanged(handler: () => void): ScrollBarBuilder;
  onPaletteCreated(handler: () => void): ScrollBarBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ScrollBarBuilder;
  onPolicyChanged(handler: () => void): ScrollBarBuilder;
  onPositionChanged(handler: () => void): ScrollBarBuilder;
  onPressedChanged(handler: () => void): ScrollBarBuilder;
  onRightInsetChanged(handler: () => void): ScrollBarBuilder;
  onRightPaddingChanged(handler: () => void): ScrollBarBuilder;
  onRotationChanged(handler: () => void): ScrollBarBuilder;
  onScaleChanged(handler: () => void): ScrollBarBuilder;
  onSizeChanged(handler: () => void): ScrollBarBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ScrollBarBuilder;
  onSnapModeChanged(handler: () => void): ScrollBarBuilder;
  onSpacingChanged(handler: () => void): ScrollBarBuilder;
  onStateChanged(handler: (arg0: string) => void): ScrollBarBuilder;
  onStepSizeChanged(handler: () => void): ScrollBarBuilder;
  onTopInsetChanged(handler: () => void): ScrollBarBuilder;
  onTopPaddingChanged(handler: () => void): ScrollBarBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ScrollBarBuilder;
  onVerticalPaddingChanged(handler: () => void): ScrollBarBuilder;
  onVisibleChanged(handler: () => void): ScrollBarBuilder;
  onVisibleChildrenChanged(handler: () => void): ScrollBarBuilder;
  onVisualFocusChanged(handler: () => void): ScrollBarBuilder;
  onVisualPositionChanged(handler: () => void): ScrollBarBuilder;
  onVisualSizeChanged(handler: () => void): ScrollBarBuilder;
  onWheelEnabledChanged(handler: () => void): ScrollBarBuilder;
  onWidthChanged(handler: () => void): ScrollBarBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ScrollBarBuilder;
  onXChanged(handler: () => void): ScrollBarBuilder;
  onYChanged(handler: () => void): ScrollBarBuilder;
  onZChanged(handler: () => void): ScrollBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ScrollBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ScrollBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ScrollBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ScrollBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ScrollBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ScrollBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ScrollBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ScrollBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ScrollBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ScrollBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ScrollBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ScrollBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ScrollBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ScrollBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ScrollBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ScrollBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ScrollBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ScrollBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ScrollBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ScrollBarBuilder;
}

export function ScrollBar(): ScrollBarBuilder {
  return new DslBuilderImpl('ScrollBar') as unknown as ScrollBarBuilder;
}

export namespace ScrollBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ScrollBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ScrollBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ScrollBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ScrollBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ScrollBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Policy {
    export const AsNeeded = createEnumToken('ScrollBar', 'Policy', 'AsNeeded');
    export const AlwaysOff = createEnumToken('ScrollBar', 'Policy', 'AlwaysOff');
    export const AlwaysOn = createEnumToken('ScrollBar', 'Policy', 'AlwaysOn');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('ScrollBar', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('ScrollBar', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('ScrollBar', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ScrollBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ScrollBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ScrollBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ScrollBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ScrollBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ScrollBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ScrollBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ScrollBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ScrollBar', 'TransformOrigin', 'BottomRight');
  }
}
