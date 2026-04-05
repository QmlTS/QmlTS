// AUTO-GENERATED — DO NOT EDIT
// Type: BusyIndicator
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
export interface BusyIndicatorBuilder {
  id(id: string): BusyIndicatorBuilder;
  child(obj: QmlObjectBuilder): BusyIndicatorBuilder;

  activeFocusOnTab(value: boolean): BusyIndicatorBuilder;
  activeFocusOnTabBind(expr: string): BusyIndicatorBuilder;
  antialiasing(value: boolean): BusyIndicatorBuilder;
  antialiasingBind(expr: string): BusyIndicatorBuilder;
  background(value: ItemBuilder): BusyIndicatorBuilder;
  backgroundBind(expr: string): BusyIndicatorBuilder;
  baselineOffset(value: number): BusyIndicatorBuilder;
  baselineOffsetBind(expr: string): BusyIndicatorBuilder;
  bottomInset(value: number): BusyIndicatorBuilder;
  bottomInsetBind(expr: string): BusyIndicatorBuilder;
  bottomPadding(value: number): BusyIndicatorBuilder;
  bottomPaddingBind(expr: string): BusyIndicatorBuilder;
  clip(value: boolean): BusyIndicatorBuilder;
  clipBind(expr: string): BusyIndicatorBuilder;
  containmentMask(value: QtObjectBuilder): BusyIndicatorBuilder;
  containmentMaskBind(expr: string): BusyIndicatorBuilder;
  contentItem(value: ItemBuilder): BusyIndicatorBuilder;
  contentItemBind(expr: string): BusyIndicatorBuilder;
  enabled(value: boolean): BusyIndicatorBuilder;
  enabledBind(expr: string): BusyIndicatorBuilder;
  focus(value: boolean): BusyIndicatorBuilder;
  focusBind(expr: string): BusyIndicatorBuilder;
  focusPolicy(value: QmlValue): BusyIndicatorBuilder;
  focusPolicyBind(expr: string): BusyIndicatorBuilder;
  focusReason(value: QmlValue): BusyIndicatorBuilder;
  focusReasonBind(expr: string): BusyIndicatorBuilder;
  font(value: QmlFont): BusyIndicatorBuilder;
  fontBind(expr: string): BusyIndicatorBuilder;
  height(value: number): BusyIndicatorBuilder;
  heightBind(expr: string): BusyIndicatorBuilder;
  horizontalPadding(value: number): BusyIndicatorBuilder;
  horizontalPaddingBind(expr: string): BusyIndicatorBuilder;
  hoverEnabled(value: boolean): BusyIndicatorBuilder;
  hoverEnabledBind(expr: string): BusyIndicatorBuilder;
  implicitHeight(value: number): BusyIndicatorBuilder;
  implicitHeightBind(expr: string): BusyIndicatorBuilder;
  implicitWidth(value: number): BusyIndicatorBuilder;
  implicitWidthBind(expr: string): BusyIndicatorBuilder;
  leftInset(value: number): BusyIndicatorBuilder;
  leftInsetBind(expr: string): BusyIndicatorBuilder;
  leftPadding(value: number): BusyIndicatorBuilder;
  leftPaddingBind(expr: string): BusyIndicatorBuilder;
  locale(value: QmlValue): BusyIndicatorBuilder;
  localeBind(expr: string): BusyIndicatorBuilder;
  objectName(value: string): BusyIndicatorBuilder;
  objectNameBind(expr: string): BusyIndicatorBuilder;
  opacity(value: number): BusyIndicatorBuilder;
  opacityBind(expr: string): BusyIndicatorBuilder;
  padding(value: number): BusyIndicatorBuilder;
  paddingBind(expr: string): BusyIndicatorBuilder;
  palette(value: PaletteBuilder): BusyIndicatorBuilder;
  paletteBind(expr: string): BusyIndicatorBuilder;
  parent(value: ItemBuilder): BusyIndicatorBuilder;
  parentBind(expr: string): BusyIndicatorBuilder;
  rightInset(value: number): BusyIndicatorBuilder;
  rightInsetBind(expr: string): BusyIndicatorBuilder;
  rightPadding(value: number): BusyIndicatorBuilder;
  rightPaddingBind(expr: string): BusyIndicatorBuilder;
  rotation(value: number): BusyIndicatorBuilder;
  rotationBind(expr: string): BusyIndicatorBuilder;
  running(value: boolean): BusyIndicatorBuilder;
  runningBind(expr: string): BusyIndicatorBuilder;
  scale(value: number): BusyIndicatorBuilder;
  scaleBind(expr: string): BusyIndicatorBuilder;
  smooth(value: boolean): BusyIndicatorBuilder;
  smoothBind(expr: string): BusyIndicatorBuilder;
  spacing(value: number): BusyIndicatorBuilder;
  spacingBind(expr: string): BusyIndicatorBuilder;
  state(value: string): BusyIndicatorBuilder;
  stateBind(expr: string): BusyIndicatorBuilder;
  topInset(value: number): BusyIndicatorBuilder;
  topInsetBind(expr: string): BusyIndicatorBuilder;
  topPadding(value: number): BusyIndicatorBuilder;
  topPaddingBind(expr: string): BusyIndicatorBuilder;
  transformOrigin(value: QmlValue): BusyIndicatorBuilder;
  transformOriginBind(expr: string): BusyIndicatorBuilder;
  verticalPadding(value: number): BusyIndicatorBuilder;
  verticalPaddingBind(expr: string): BusyIndicatorBuilder;
  visible(value: boolean): BusyIndicatorBuilder;
  visibleBind(expr: string): BusyIndicatorBuilder;
  wheelEnabled(value: boolean): BusyIndicatorBuilder;
  wheelEnabledBind(expr: string): BusyIndicatorBuilder;
  width(value: number): BusyIndicatorBuilder;
  widthBind(expr: string): BusyIndicatorBuilder;
  x(value: number): BusyIndicatorBuilder;
  xBind(expr: string): BusyIndicatorBuilder;
  y(value: number): BusyIndicatorBuilder;
  yBind(expr: string): BusyIndicatorBuilder;
  z(value: number): BusyIndicatorBuilder;
  zBind(expr: string): BusyIndicatorBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): BusyIndicatorBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): BusyIndicatorBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): BusyIndicatorBuilder;
  onAvailableHeightChanged(handler: () => void): BusyIndicatorBuilder;
  onAvailableWidthChanged(handler: () => void): BusyIndicatorBuilder;
  onBackgroundChanged(handler: () => void): BusyIndicatorBuilder;
  onBaselineOffsetChanged(handler: () => void): BusyIndicatorBuilder;
  onBottomInsetChanged(handler: () => void): BusyIndicatorBuilder;
  onBottomPaddingChanged(handler: () => void): BusyIndicatorBuilder;
  onChildrenChanged(handler: () => void): BusyIndicatorBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): BusyIndicatorBuilder;
  onClipChanged(handler: (arg0: boolean) => void): BusyIndicatorBuilder;
  onContainmentMaskChanged(handler: () => void): BusyIndicatorBuilder;
  onContentItemChanged(handler: () => void): BusyIndicatorBuilder;
  onEnabledChanged(handler: () => void): BusyIndicatorBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): BusyIndicatorBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): BusyIndicatorBuilder;
  onFocusReasonChanged(handler: () => void): BusyIndicatorBuilder;
  onFontChanged(handler: () => void): BusyIndicatorBuilder;
  onHeightChanged(handler: () => void): BusyIndicatorBuilder;
  onHorizontalPaddingChanged(handler: () => void): BusyIndicatorBuilder;
  onHoverEnabledChanged(handler: () => void): BusyIndicatorBuilder;
  onHoveredChanged(handler: () => void): BusyIndicatorBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): BusyIndicatorBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): BusyIndicatorBuilder;
  onImplicitContentHeightChanged(handler: () => void): BusyIndicatorBuilder;
  onImplicitContentWidthChanged(handler: () => void): BusyIndicatorBuilder;
  onImplicitHeightChanged(handler: () => void): BusyIndicatorBuilder;
  onImplicitWidthChanged(handler: () => void): BusyIndicatorBuilder;
  onLeftInsetChanged(handler: () => void): BusyIndicatorBuilder;
  onLeftPaddingChanged(handler: () => void): BusyIndicatorBuilder;
  onLocaleChanged(handler: () => void): BusyIndicatorBuilder;
  onMirroredChanged(handler: () => void): BusyIndicatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): BusyIndicatorBuilder;
  onOpacityChanged(handler: () => void): BusyIndicatorBuilder;
  onPaddingChanged(handler: () => void): BusyIndicatorBuilder;
  onPaletteChanged(handler: () => void): BusyIndicatorBuilder;
  onPaletteCreated(handler: () => void): BusyIndicatorBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): BusyIndicatorBuilder;
  onRightInsetChanged(handler: () => void): BusyIndicatorBuilder;
  onRightPaddingChanged(handler: () => void): BusyIndicatorBuilder;
  onRotationChanged(handler: () => void): BusyIndicatorBuilder;
  onRunningChanged(handler: () => void): BusyIndicatorBuilder;
  onScaleChanged(handler: () => void): BusyIndicatorBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): BusyIndicatorBuilder;
  onSpacingChanged(handler: () => void): BusyIndicatorBuilder;
  onStateChanged(handler: (arg0: string) => void): BusyIndicatorBuilder;
  onTopInsetChanged(handler: () => void): BusyIndicatorBuilder;
  onTopPaddingChanged(handler: () => void): BusyIndicatorBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): BusyIndicatorBuilder;
  onVerticalPaddingChanged(handler: () => void): BusyIndicatorBuilder;
  onVisibleChanged(handler: () => void): BusyIndicatorBuilder;
  onVisibleChildrenChanged(handler: () => void): BusyIndicatorBuilder;
  onVisualFocusChanged(handler: () => void): BusyIndicatorBuilder;
  onWheelEnabledChanged(handler: () => void): BusyIndicatorBuilder;
  onWidthChanged(handler: () => void): BusyIndicatorBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): BusyIndicatorBuilder;
  onXChanged(handler: () => void): BusyIndicatorBuilder;
  onYChanged(handler: () => void): BusyIndicatorBuilder;
  onZChanged(handler: () => void): BusyIndicatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): BusyIndicatorBuilder;
  layer(setup: (b: LayerBuilder) => void): BusyIndicatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): BusyIndicatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): BusyIndicatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): BusyIndicatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): BusyIndicatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): BusyIndicatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): BusyIndicatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): BusyIndicatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): BusyIndicatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): BusyIndicatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): BusyIndicatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): BusyIndicatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): BusyIndicatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): BusyIndicatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): BusyIndicatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): BusyIndicatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): BusyIndicatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): BusyIndicatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): BusyIndicatorBuilder;
}

export function BusyIndicator(): BusyIndicatorBuilder {
  return new DslBuilderImpl('BusyIndicator') as unknown as BusyIndicatorBuilder;
}

export namespace BusyIndicator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'BusyIndicator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'BusyIndicator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('BusyIndicator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('BusyIndicator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('BusyIndicator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('BusyIndicator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'BusyIndicator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'BusyIndicator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('BusyIndicator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('BusyIndicator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('BusyIndicator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('BusyIndicator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('BusyIndicator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('BusyIndicator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('BusyIndicator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('BusyIndicator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('BusyIndicator', 'TransformOrigin', 'BottomRight');
  }
}
