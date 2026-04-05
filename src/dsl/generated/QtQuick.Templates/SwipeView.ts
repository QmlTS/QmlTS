// AUTO-GENERATED — DO NOT EDIT
// Type: SwipeView
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
export interface SwipeViewBuilder {
  id(id: string): SwipeViewBuilder;
  child(obj: QmlObjectBuilder): SwipeViewBuilder;

  activeFocusOnTab(value: boolean): SwipeViewBuilder;
  activeFocusOnTabBind(expr: string): SwipeViewBuilder;
  antialiasing(value: boolean): SwipeViewBuilder;
  antialiasingBind(expr: string): SwipeViewBuilder;
  background(value: ItemBuilder): SwipeViewBuilder;
  backgroundBind(expr: string): SwipeViewBuilder;
  baselineOffset(value: number): SwipeViewBuilder;
  baselineOffsetBind(expr: string): SwipeViewBuilder;
  bottomInset(value: number): SwipeViewBuilder;
  bottomInsetBind(expr: string): SwipeViewBuilder;
  bottomPadding(value: number): SwipeViewBuilder;
  bottomPaddingBind(expr: string): SwipeViewBuilder;
  clip(value: boolean): SwipeViewBuilder;
  clipBind(expr: string): SwipeViewBuilder;
  containmentMask(value: QtObjectBuilder): SwipeViewBuilder;
  containmentMaskBind(expr: string): SwipeViewBuilder;
  contentHeight(value: number): SwipeViewBuilder;
  contentHeightBind(expr: string): SwipeViewBuilder;
  contentItem(value: ItemBuilder): SwipeViewBuilder;
  contentItemBind(expr: string): SwipeViewBuilder;
  contentWidth(value: number): SwipeViewBuilder;
  contentWidthBind(expr: string): SwipeViewBuilder;
  currentIndex(value: number): SwipeViewBuilder;
  currentIndexBind(expr: string): SwipeViewBuilder;
  enabled(value: boolean): SwipeViewBuilder;
  enabledBind(expr: string): SwipeViewBuilder;
  focus(value: boolean): SwipeViewBuilder;
  focusBind(expr: string): SwipeViewBuilder;
  focusPolicy(value: QmlValue): SwipeViewBuilder;
  focusPolicyBind(expr: string): SwipeViewBuilder;
  focusReason(value: QmlValue): SwipeViewBuilder;
  focusReasonBind(expr: string): SwipeViewBuilder;
  font(value: QmlFont): SwipeViewBuilder;
  fontBind(expr: string): SwipeViewBuilder;
  height(value: number): SwipeViewBuilder;
  heightBind(expr: string): SwipeViewBuilder;
  horizontalPadding(value: number): SwipeViewBuilder;
  horizontalPaddingBind(expr: string): SwipeViewBuilder;
  hoverEnabled(value: boolean): SwipeViewBuilder;
  hoverEnabledBind(expr: string): SwipeViewBuilder;
  implicitHeight(value: number): SwipeViewBuilder;
  implicitHeightBind(expr: string): SwipeViewBuilder;
  implicitWidth(value: number): SwipeViewBuilder;
  implicitWidthBind(expr: string): SwipeViewBuilder;
  interactive(value: boolean): SwipeViewBuilder;
  interactiveBind(expr: string): SwipeViewBuilder;
  leftInset(value: number): SwipeViewBuilder;
  leftInsetBind(expr: string): SwipeViewBuilder;
  leftPadding(value: number): SwipeViewBuilder;
  leftPaddingBind(expr: string): SwipeViewBuilder;
  locale(value: QmlValue): SwipeViewBuilder;
  localeBind(expr: string): SwipeViewBuilder;
  objectName(value: string): SwipeViewBuilder;
  objectNameBind(expr: string): SwipeViewBuilder;
  opacity(value: number): SwipeViewBuilder;
  opacityBind(expr: string): SwipeViewBuilder;
  orientation(value: QmlValue): SwipeViewBuilder;
  orientationBind(expr: string): SwipeViewBuilder;
  padding(value: number): SwipeViewBuilder;
  paddingBind(expr: string): SwipeViewBuilder;
  palette(value: PaletteBuilder): SwipeViewBuilder;
  paletteBind(expr: string): SwipeViewBuilder;
  parent(value: ItemBuilder): SwipeViewBuilder;
  parentBind(expr: string): SwipeViewBuilder;
  rightInset(value: number): SwipeViewBuilder;
  rightInsetBind(expr: string): SwipeViewBuilder;
  rightPadding(value: number): SwipeViewBuilder;
  rightPaddingBind(expr: string): SwipeViewBuilder;
  rotation(value: number): SwipeViewBuilder;
  rotationBind(expr: string): SwipeViewBuilder;
  scale(value: number): SwipeViewBuilder;
  scaleBind(expr: string): SwipeViewBuilder;
  smooth(value: boolean): SwipeViewBuilder;
  smoothBind(expr: string): SwipeViewBuilder;
  spacing(value: number): SwipeViewBuilder;
  spacingBind(expr: string): SwipeViewBuilder;
  state(value: string): SwipeViewBuilder;
  stateBind(expr: string): SwipeViewBuilder;
  topInset(value: number): SwipeViewBuilder;
  topInsetBind(expr: string): SwipeViewBuilder;
  topPadding(value: number): SwipeViewBuilder;
  topPaddingBind(expr: string): SwipeViewBuilder;
  transformOrigin(value: QmlValue): SwipeViewBuilder;
  transformOriginBind(expr: string): SwipeViewBuilder;
  verticalPadding(value: number): SwipeViewBuilder;
  verticalPaddingBind(expr: string): SwipeViewBuilder;
  visible(value: boolean): SwipeViewBuilder;
  visibleBind(expr: string): SwipeViewBuilder;
  wheelEnabled(value: boolean): SwipeViewBuilder;
  wheelEnabledBind(expr: string): SwipeViewBuilder;
  width(value: number): SwipeViewBuilder;
  widthBind(expr: string): SwipeViewBuilder;
  x(value: number): SwipeViewBuilder;
  xBind(expr: string): SwipeViewBuilder;
  y(value: number): SwipeViewBuilder;
  yBind(expr: string): SwipeViewBuilder;
  z(value: number): SwipeViewBuilder;
  zBind(expr: string): SwipeViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SwipeViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SwipeViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SwipeViewBuilder;
  onAvailableHeightChanged(handler: () => void): SwipeViewBuilder;
  onAvailableWidthChanged(handler: () => void): SwipeViewBuilder;
  onBackgroundChanged(handler: () => void): SwipeViewBuilder;
  onBaselineOffsetChanged(handler: () => void): SwipeViewBuilder;
  onBottomInsetChanged(handler: () => void): SwipeViewBuilder;
  onBottomPaddingChanged(handler: () => void): SwipeViewBuilder;
  onChildrenChanged(handler: () => void): SwipeViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SwipeViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SwipeViewBuilder;
  onContainmentMaskChanged(handler: () => void): SwipeViewBuilder;
  onContentChildrenChanged(handler: () => void): SwipeViewBuilder;
  onContentHeightChanged(handler: () => void): SwipeViewBuilder;
  onContentItemChanged(handler: () => void): SwipeViewBuilder;
  onContentWidthChanged(handler: () => void): SwipeViewBuilder;
  onCountChanged(handler: () => void): SwipeViewBuilder;
  onCurrentIndexChanged(handler: () => void): SwipeViewBuilder;
  onCurrentItemChanged(handler: () => void): SwipeViewBuilder;
  onEnabledChanged(handler: () => void): SwipeViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SwipeViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SwipeViewBuilder;
  onFocusReasonChanged(handler: () => void): SwipeViewBuilder;
  onFontChanged(handler: () => void): SwipeViewBuilder;
  onHeightChanged(handler: () => void): SwipeViewBuilder;
  onHorizontalPaddingChanged(handler: () => void): SwipeViewBuilder;
  onHoverEnabledChanged(handler: () => void): SwipeViewBuilder;
  onHoveredChanged(handler: () => void): SwipeViewBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SwipeViewBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SwipeViewBuilder;
  onImplicitContentHeightChanged(handler: () => void): SwipeViewBuilder;
  onImplicitContentWidthChanged(handler: () => void): SwipeViewBuilder;
  onImplicitHeightChanged(handler: () => void): SwipeViewBuilder;
  onImplicitWidthChanged(handler: () => void): SwipeViewBuilder;
  onInteractiveChanged(handler: () => void): SwipeViewBuilder;
  onLeftInsetChanged(handler: () => void): SwipeViewBuilder;
  onLeftPaddingChanged(handler: () => void): SwipeViewBuilder;
  onLocaleChanged(handler: () => void): SwipeViewBuilder;
  onMirroredChanged(handler: () => void): SwipeViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SwipeViewBuilder;
  onOpacityChanged(handler: () => void): SwipeViewBuilder;
  onOrientationChanged(handler: () => void): SwipeViewBuilder;
  onPaddingChanged(handler: () => void): SwipeViewBuilder;
  onPaletteChanged(handler: () => void): SwipeViewBuilder;
  onPaletteCreated(handler: () => void): SwipeViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SwipeViewBuilder;
  onRightInsetChanged(handler: () => void): SwipeViewBuilder;
  onRightPaddingChanged(handler: () => void): SwipeViewBuilder;
  onRotationChanged(handler: () => void): SwipeViewBuilder;
  onScaleChanged(handler: () => void): SwipeViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SwipeViewBuilder;
  onSpacingChanged(handler: () => void): SwipeViewBuilder;
  onStateChanged(handler: (arg0: string) => void): SwipeViewBuilder;
  onTopInsetChanged(handler: () => void): SwipeViewBuilder;
  onTopPaddingChanged(handler: () => void): SwipeViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SwipeViewBuilder;
  onVerticalPaddingChanged(handler: () => void): SwipeViewBuilder;
  onVisibleChanged(handler: () => void): SwipeViewBuilder;
  onVisibleChildrenChanged(handler: () => void): SwipeViewBuilder;
  onVisualFocusChanged(handler: () => void): SwipeViewBuilder;
  onWheelEnabledChanged(handler: () => void): SwipeViewBuilder;
  onWidthChanged(handler: () => void): SwipeViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SwipeViewBuilder;
  onXChanged(handler: () => void): SwipeViewBuilder;
  onYChanged(handler: () => void): SwipeViewBuilder;
  onZChanged(handler: () => void): SwipeViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SwipeViewBuilder;
  layer(setup: (b: LayerBuilder) => void): SwipeViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SwipeViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SwipeViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SwipeViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SwipeViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SwipeViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SwipeViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SwipeViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SwipeViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SwipeViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SwipeViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SwipeViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SwipeViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SwipeViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SwipeViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SwipeViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SwipeViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SwipeViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SwipeViewBuilder;
}

export function SwipeView(): SwipeViewBuilder {
  return new DslBuilderImpl('SwipeView') as unknown as SwipeViewBuilder;
}

export namespace SwipeView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SwipeView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SwipeView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SwipeView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SwipeView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SwipeView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SwipeView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SwipeView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SwipeView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SwipeView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SwipeView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SwipeView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SwipeView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SwipeView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SwipeView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SwipeView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SwipeView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SwipeView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SwipeView', 'TransformOrigin', 'BottomRight');
  }
}
