// AUTO-GENERATED — DO NOT EDIT
// Type: ScrollIndicator
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
export interface ScrollIndicatorBuilder {
  id(id: string): ScrollIndicatorBuilder;
  child(obj: QmlObjectBuilder): ScrollIndicatorBuilder;

  active(value: boolean): ScrollIndicatorBuilder;
  activeBind(expr: string): ScrollIndicatorBuilder;
  activeFocusOnTab(value: boolean): ScrollIndicatorBuilder;
  activeFocusOnTabBind(expr: string): ScrollIndicatorBuilder;
  antialiasing(value: boolean): ScrollIndicatorBuilder;
  antialiasingBind(expr: string): ScrollIndicatorBuilder;
  background(value: ItemBuilder): ScrollIndicatorBuilder;
  backgroundBind(expr: string): ScrollIndicatorBuilder;
  baselineOffset(value: number): ScrollIndicatorBuilder;
  baselineOffsetBind(expr: string): ScrollIndicatorBuilder;
  bottomInset(value: number): ScrollIndicatorBuilder;
  bottomInsetBind(expr: string): ScrollIndicatorBuilder;
  bottomPadding(value: number): ScrollIndicatorBuilder;
  bottomPaddingBind(expr: string): ScrollIndicatorBuilder;
  clip(value: boolean): ScrollIndicatorBuilder;
  clipBind(expr: string): ScrollIndicatorBuilder;
  containmentMask(value: QtObjectBuilder): ScrollIndicatorBuilder;
  containmentMaskBind(expr: string): ScrollIndicatorBuilder;
  contentItem(value: ItemBuilder): ScrollIndicatorBuilder;
  contentItemBind(expr: string): ScrollIndicatorBuilder;
  enabled(value: boolean): ScrollIndicatorBuilder;
  enabledBind(expr: string): ScrollIndicatorBuilder;
  focus(value: boolean): ScrollIndicatorBuilder;
  focusBind(expr: string): ScrollIndicatorBuilder;
  focusPolicy(value: QmlValue): ScrollIndicatorBuilder;
  focusPolicyBind(expr: string): ScrollIndicatorBuilder;
  focusReason(value: QmlValue): ScrollIndicatorBuilder;
  focusReasonBind(expr: string): ScrollIndicatorBuilder;
  font(value: QmlFont): ScrollIndicatorBuilder;
  fontBind(expr: string): ScrollIndicatorBuilder;
  height(value: number): ScrollIndicatorBuilder;
  heightBind(expr: string): ScrollIndicatorBuilder;
  horizontalPadding(value: number): ScrollIndicatorBuilder;
  horizontalPaddingBind(expr: string): ScrollIndicatorBuilder;
  hoverEnabled(value: boolean): ScrollIndicatorBuilder;
  hoverEnabledBind(expr: string): ScrollIndicatorBuilder;
  implicitHeight(value: number): ScrollIndicatorBuilder;
  implicitHeightBind(expr: string): ScrollIndicatorBuilder;
  implicitWidth(value: number): ScrollIndicatorBuilder;
  implicitWidthBind(expr: string): ScrollIndicatorBuilder;
  leftInset(value: number): ScrollIndicatorBuilder;
  leftInsetBind(expr: string): ScrollIndicatorBuilder;
  leftPadding(value: number): ScrollIndicatorBuilder;
  leftPaddingBind(expr: string): ScrollIndicatorBuilder;
  locale(value: QmlValue): ScrollIndicatorBuilder;
  localeBind(expr: string): ScrollIndicatorBuilder;
  minimumSize(value: number): ScrollIndicatorBuilder;
  minimumSizeBind(expr: string): ScrollIndicatorBuilder;
  objectName(value: string): ScrollIndicatorBuilder;
  objectNameBind(expr: string): ScrollIndicatorBuilder;
  opacity(value: number): ScrollIndicatorBuilder;
  opacityBind(expr: string): ScrollIndicatorBuilder;
  orientation(value: QmlValue): ScrollIndicatorBuilder;
  orientationBind(expr: string): ScrollIndicatorBuilder;
  padding(value: number): ScrollIndicatorBuilder;
  paddingBind(expr: string): ScrollIndicatorBuilder;
  palette(value: PaletteBuilder): ScrollIndicatorBuilder;
  paletteBind(expr: string): ScrollIndicatorBuilder;
  parent(value: ItemBuilder): ScrollIndicatorBuilder;
  parentBind(expr: string): ScrollIndicatorBuilder;
  position(value: number): ScrollIndicatorBuilder;
  positionBind(expr: string): ScrollIndicatorBuilder;
  rightInset(value: number): ScrollIndicatorBuilder;
  rightInsetBind(expr: string): ScrollIndicatorBuilder;
  rightPadding(value: number): ScrollIndicatorBuilder;
  rightPaddingBind(expr: string): ScrollIndicatorBuilder;
  rotation(value: number): ScrollIndicatorBuilder;
  rotationBind(expr: string): ScrollIndicatorBuilder;
  scale(value: number): ScrollIndicatorBuilder;
  scaleBind(expr: string): ScrollIndicatorBuilder;
  size(value: number): ScrollIndicatorBuilder;
  sizeBind(expr: string): ScrollIndicatorBuilder;
  smooth(value: boolean): ScrollIndicatorBuilder;
  smoothBind(expr: string): ScrollIndicatorBuilder;
  spacing(value: number): ScrollIndicatorBuilder;
  spacingBind(expr: string): ScrollIndicatorBuilder;
  state(value: string): ScrollIndicatorBuilder;
  stateBind(expr: string): ScrollIndicatorBuilder;
  topInset(value: number): ScrollIndicatorBuilder;
  topInsetBind(expr: string): ScrollIndicatorBuilder;
  topPadding(value: number): ScrollIndicatorBuilder;
  topPaddingBind(expr: string): ScrollIndicatorBuilder;
  transformOrigin(value: QmlValue): ScrollIndicatorBuilder;
  transformOriginBind(expr: string): ScrollIndicatorBuilder;
  verticalPadding(value: number): ScrollIndicatorBuilder;
  verticalPaddingBind(expr: string): ScrollIndicatorBuilder;
  visible(value: boolean): ScrollIndicatorBuilder;
  visibleBind(expr: string): ScrollIndicatorBuilder;
  wheelEnabled(value: boolean): ScrollIndicatorBuilder;
  wheelEnabledBind(expr: string): ScrollIndicatorBuilder;
  width(value: number): ScrollIndicatorBuilder;
  widthBind(expr: string): ScrollIndicatorBuilder;
  x(value: number): ScrollIndicatorBuilder;
  xBind(expr: string): ScrollIndicatorBuilder;
  y(value: number): ScrollIndicatorBuilder;
  yBind(expr: string): ScrollIndicatorBuilder;
  z(value: number): ScrollIndicatorBuilder;
  zBind(expr: string): ScrollIndicatorBuilder;
  onActiveChanged(handler: () => void): ScrollIndicatorBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ScrollIndicatorBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ScrollIndicatorBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ScrollIndicatorBuilder;
  onAvailableHeightChanged(handler: () => void): ScrollIndicatorBuilder;
  onAvailableWidthChanged(handler: () => void): ScrollIndicatorBuilder;
  onBackgroundChanged(handler: () => void): ScrollIndicatorBuilder;
  onBaselineOffsetChanged(handler: () => void): ScrollIndicatorBuilder;
  onBottomInsetChanged(handler: () => void): ScrollIndicatorBuilder;
  onBottomPaddingChanged(handler: () => void): ScrollIndicatorBuilder;
  onChildrenChanged(handler: () => void): ScrollIndicatorBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ScrollIndicatorBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ScrollIndicatorBuilder;
  onContainmentMaskChanged(handler: () => void): ScrollIndicatorBuilder;
  onContentItemChanged(handler: () => void): ScrollIndicatorBuilder;
  onEnabledChanged(handler: () => void): ScrollIndicatorBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ScrollIndicatorBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ScrollIndicatorBuilder;
  onFocusReasonChanged(handler: () => void): ScrollIndicatorBuilder;
  onFontChanged(handler: () => void): ScrollIndicatorBuilder;
  onHeightChanged(handler: () => void): ScrollIndicatorBuilder;
  onHorizontalPaddingChanged(handler: () => void): ScrollIndicatorBuilder;
  onHoverEnabledChanged(handler: () => void): ScrollIndicatorBuilder;
  onHoveredChanged(handler: () => void): ScrollIndicatorBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ScrollIndicatorBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ScrollIndicatorBuilder;
  onImplicitContentHeightChanged(handler: () => void): ScrollIndicatorBuilder;
  onImplicitContentWidthChanged(handler: () => void): ScrollIndicatorBuilder;
  onImplicitHeightChanged(handler: () => void): ScrollIndicatorBuilder;
  onImplicitWidthChanged(handler: () => void): ScrollIndicatorBuilder;
  onLeftInsetChanged(handler: () => void): ScrollIndicatorBuilder;
  onLeftPaddingChanged(handler: () => void): ScrollIndicatorBuilder;
  onLocaleChanged(handler: () => void): ScrollIndicatorBuilder;
  onMinimumSizeChanged(handler: () => void): ScrollIndicatorBuilder;
  onMirroredChanged(handler: () => void): ScrollIndicatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ScrollIndicatorBuilder;
  onOpacityChanged(handler: () => void): ScrollIndicatorBuilder;
  onOrientationChanged(handler: () => void): ScrollIndicatorBuilder;
  onPaddingChanged(handler: () => void): ScrollIndicatorBuilder;
  onPaletteChanged(handler: () => void): ScrollIndicatorBuilder;
  onPaletteCreated(handler: () => void): ScrollIndicatorBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ScrollIndicatorBuilder;
  onPositionChanged(handler: () => void): ScrollIndicatorBuilder;
  onRightInsetChanged(handler: () => void): ScrollIndicatorBuilder;
  onRightPaddingChanged(handler: () => void): ScrollIndicatorBuilder;
  onRotationChanged(handler: () => void): ScrollIndicatorBuilder;
  onScaleChanged(handler: () => void): ScrollIndicatorBuilder;
  onSizeChanged(handler: () => void): ScrollIndicatorBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ScrollIndicatorBuilder;
  onSpacingChanged(handler: () => void): ScrollIndicatorBuilder;
  onStateChanged(handler: (arg0: string) => void): ScrollIndicatorBuilder;
  onTopInsetChanged(handler: () => void): ScrollIndicatorBuilder;
  onTopPaddingChanged(handler: () => void): ScrollIndicatorBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ScrollIndicatorBuilder;
  onVerticalPaddingChanged(handler: () => void): ScrollIndicatorBuilder;
  onVisibleChanged(handler: () => void): ScrollIndicatorBuilder;
  onVisibleChildrenChanged(handler: () => void): ScrollIndicatorBuilder;
  onVisualFocusChanged(handler: () => void): ScrollIndicatorBuilder;
  onVisualPositionChanged(handler: () => void): ScrollIndicatorBuilder;
  onVisualSizeChanged(handler: () => void): ScrollIndicatorBuilder;
  onWheelEnabledChanged(handler: () => void): ScrollIndicatorBuilder;
  onWidthChanged(handler: () => void): ScrollIndicatorBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ScrollIndicatorBuilder;
  onXChanged(handler: () => void): ScrollIndicatorBuilder;
  onYChanged(handler: () => void): ScrollIndicatorBuilder;
  onZChanged(handler: () => void): ScrollIndicatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ScrollIndicatorBuilder;
  layer(setup: (b: LayerBuilder) => void): ScrollIndicatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ScrollIndicatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ScrollIndicatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ScrollIndicatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ScrollIndicatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ScrollIndicatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ScrollIndicatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ScrollIndicatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ScrollIndicatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ScrollIndicatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ScrollIndicatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ScrollIndicatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ScrollIndicatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ScrollIndicatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ScrollIndicatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ScrollIndicatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ScrollIndicatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ScrollIndicatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ScrollIndicatorBuilder;
}

export function ScrollIndicator(): ScrollIndicatorBuilder {
  return new DslBuilderImpl('ScrollIndicator') as unknown as ScrollIndicatorBuilder;
}

export namespace ScrollIndicator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ScrollIndicator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ScrollIndicator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ScrollIndicator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ScrollIndicator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ScrollIndicator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ScrollIndicator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ScrollIndicator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ScrollIndicator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ScrollIndicator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ScrollIndicator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ScrollIndicator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ScrollIndicator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ScrollIndicator', 'TransformOrigin', 'BottomRight');
  }
}
