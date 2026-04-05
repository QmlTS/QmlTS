// AUTO-GENERATED — DO NOT EDIT
// Type: ToolSeparator
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
export interface ToolSeparatorBuilder {
  id(id: string): ToolSeparatorBuilder;
  child(obj: QmlObjectBuilder): ToolSeparatorBuilder;

  activeFocusOnTab(value: boolean): ToolSeparatorBuilder;
  activeFocusOnTabBind(expr: string): ToolSeparatorBuilder;
  antialiasing(value: boolean): ToolSeparatorBuilder;
  antialiasingBind(expr: string): ToolSeparatorBuilder;
  background(value: ItemBuilder): ToolSeparatorBuilder;
  backgroundBind(expr: string): ToolSeparatorBuilder;
  baselineOffset(value: number): ToolSeparatorBuilder;
  baselineOffsetBind(expr: string): ToolSeparatorBuilder;
  bottomInset(value: number): ToolSeparatorBuilder;
  bottomInsetBind(expr: string): ToolSeparatorBuilder;
  bottomPadding(value: number): ToolSeparatorBuilder;
  bottomPaddingBind(expr: string): ToolSeparatorBuilder;
  clip(value: boolean): ToolSeparatorBuilder;
  clipBind(expr: string): ToolSeparatorBuilder;
  containmentMask(value: QtObjectBuilder): ToolSeparatorBuilder;
  containmentMaskBind(expr: string): ToolSeparatorBuilder;
  contentItem(value: ItemBuilder): ToolSeparatorBuilder;
  contentItemBind(expr: string): ToolSeparatorBuilder;
  enabled(value: boolean): ToolSeparatorBuilder;
  enabledBind(expr: string): ToolSeparatorBuilder;
  focus(value: boolean): ToolSeparatorBuilder;
  focusBind(expr: string): ToolSeparatorBuilder;
  focusPolicy(value: QmlValue): ToolSeparatorBuilder;
  focusPolicyBind(expr: string): ToolSeparatorBuilder;
  focusReason(value: QmlValue): ToolSeparatorBuilder;
  focusReasonBind(expr: string): ToolSeparatorBuilder;
  font(value: QmlFont): ToolSeparatorBuilder;
  fontBind(expr: string): ToolSeparatorBuilder;
  height(value: number): ToolSeparatorBuilder;
  heightBind(expr: string): ToolSeparatorBuilder;
  horizontalPadding(value: number): ToolSeparatorBuilder;
  horizontalPaddingBind(expr: string): ToolSeparatorBuilder;
  hoverEnabled(value: boolean): ToolSeparatorBuilder;
  hoverEnabledBind(expr: string): ToolSeparatorBuilder;
  implicitHeight(value: number): ToolSeparatorBuilder;
  implicitHeightBind(expr: string): ToolSeparatorBuilder;
  implicitWidth(value: number): ToolSeparatorBuilder;
  implicitWidthBind(expr: string): ToolSeparatorBuilder;
  leftInset(value: number): ToolSeparatorBuilder;
  leftInsetBind(expr: string): ToolSeparatorBuilder;
  leftPadding(value: number): ToolSeparatorBuilder;
  leftPaddingBind(expr: string): ToolSeparatorBuilder;
  locale(value: QmlValue): ToolSeparatorBuilder;
  localeBind(expr: string): ToolSeparatorBuilder;
  objectName(value: string): ToolSeparatorBuilder;
  objectNameBind(expr: string): ToolSeparatorBuilder;
  opacity(value: number): ToolSeparatorBuilder;
  opacityBind(expr: string): ToolSeparatorBuilder;
  orientation(value: QmlValue): ToolSeparatorBuilder;
  orientationBind(expr: string): ToolSeparatorBuilder;
  padding(value: number): ToolSeparatorBuilder;
  paddingBind(expr: string): ToolSeparatorBuilder;
  palette(value: PaletteBuilder): ToolSeparatorBuilder;
  paletteBind(expr: string): ToolSeparatorBuilder;
  parent(value: ItemBuilder): ToolSeparatorBuilder;
  parentBind(expr: string): ToolSeparatorBuilder;
  rightInset(value: number): ToolSeparatorBuilder;
  rightInsetBind(expr: string): ToolSeparatorBuilder;
  rightPadding(value: number): ToolSeparatorBuilder;
  rightPaddingBind(expr: string): ToolSeparatorBuilder;
  rotation(value: number): ToolSeparatorBuilder;
  rotationBind(expr: string): ToolSeparatorBuilder;
  scale(value: number): ToolSeparatorBuilder;
  scaleBind(expr: string): ToolSeparatorBuilder;
  smooth(value: boolean): ToolSeparatorBuilder;
  smoothBind(expr: string): ToolSeparatorBuilder;
  spacing(value: number): ToolSeparatorBuilder;
  spacingBind(expr: string): ToolSeparatorBuilder;
  state(value: string): ToolSeparatorBuilder;
  stateBind(expr: string): ToolSeparatorBuilder;
  topInset(value: number): ToolSeparatorBuilder;
  topInsetBind(expr: string): ToolSeparatorBuilder;
  topPadding(value: number): ToolSeparatorBuilder;
  topPaddingBind(expr: string): ToolSeparatorBuilder;
  transformOrigin(value: QmlValue): ToolSeparatorBuilder;
  transformOriginBind(expr: string): ToolSeparatorBuilder;
  verticalPadding(value: number): ToolSeparatorBuilder;
  verticalPaddingBind(expr: string): ToolSeparatorBuilder;
  visible(value: boolean): ToolSeparatorBuilder;
  visibleBind(expr: string): ToolSeparatorBuilder;
  wheelEnabled(value: boolean): ToolSeparatorBuilder;
  wheelEnabledBind(expr: string): ToolSeparatorBuilder;
  width(value: number): ToolSeparatorBuilder;
  widthBind(expr: string): ToolSeparatorBuilder;
  x(value: number): ToolSeparatorBuilder;
  xBind(expr: string): ToolSeparatorBuilder;
  y(value: number): ToolSeparatorBuilder;
  yBind(expr: string): ToolSeparatorBuilder;
  z(value: number): ToolSeparatorBuilder;
  zBind(expr: string): ToolSeparatorBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ToolSeparatorBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ToolSeparatorBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ToolSeparatorBuilder;
  onAvailableHeightChanged(handler: () => void): ToolSeparatorBuilder;
  onAvailableWidthChanged(handler: () => void): ToolSeparatorBuilder;
  onBackgroundChanged(handler: () => void): ToolSeparatorBuilder;
  onBaselineOffsetChanged(handler: () => void): ToolSeparatorBuilder;
  onBottomInsetChanged(handler: () => void): ToolSeparatorBuilder;
  onBottomPaddingChanged(handler: () => void): ToolSeparatorBuilder;
  onChildrenChanged(handler: () => void): ToolSeparatorBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ToolSeparatorBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ToolSeparatorBuilder;
  onContainmentMaskChanged(handler: () => void): ToolSeparatorBuilder;
  onContentItemChanged(handler: () => void): ToolSeparatorBuilder;
  onEnabledChanged(handler: () => void): ToolSeparatorBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ToolSeparatorBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ToolSeparatorBuilder;
  onFocusReasonChanged(handler: () => void): ToolSeparatorBuilder;
  onFontChanged(handler: () => void): ToolSeparatorBuilder;
  onHeightChanged(handler: () => void): ToolSeparatorBuilder;
  onHorizontalPaddingChanged(handler: () => void): ToolSeparatorBuilder;
  onHoverEnabledChanged(handler: () => void): ToolSeparatorBuilder;
  onHoveredChanged(handler: () => void): ToolSeparatorBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ToolSeparatorBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ToolSeparatorBuilder;
  onImplicitContentHeightChanged(handler: () => void): ToolSeparatorBuilder;
  onImplicitContentWidthChanged(handler: () => void): ToolSeparatorBuilder;
  onImplicitHeightChanged(handler: () => void): ToolSeparatorBuilder;
  onImplicitWidthChanged(handler: () => void): ToolSeparatorBuilder;
  onLeftInsetChanged(handler: () => void): ToolSeparatorBuilder;
  onLeftPaddingChanged(handler: () => void): ToolSeparatorBuilder;
  onLocaleChanged(handler: () => void): ToolSeparatorBuilder;
  onMirroredChanged(handler: () => void): ToolSeparatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ToolSeparatorBuilder;
  onOpacityChanged(handler: () => void): ToolSeparatorBuilder;
  onOrientationChanged(handler: () => void): ToolSeparatorBuilder;
  onPaddingChanged(handler: () => void): ToolSeparatorBuilder;
  onPaletteChanged(handler: () => void): ToolSeparatorBuilder;
  onPaletteCreated(handler: () => void): ToolSeparatorBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ToolSeparatorBuilder;
  onRightInsetChanged(handler: () => void): ToolSeparatorBuilder;
  onRightPaddingChanged(handler: () => void): ToolSeparatorBuilder;
  onRotationChanged(handler: () => void): ToolSeparatorBuilder;
  onScaleChanged(handler: () => void): ToolSeparatorBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ToolSeparatorBuilder;
  onSpacingChanged(handler: () => void): ToolSeparatorBuilder;
  onStateChanged(handler: (arg0: string) => void): ToolSeparatorBuilder;
  onTopInsetChanged(handler: () => void): ToolSeparatorBuilder;
  onTopPaddingChanged(handler: () => void): ToolSeparatorBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ToolSeparatorBuilder;
  onVerticalPaddingChanged(handler: () => void): ToolSeparatorBuilder;
  onVisibleChanged(handler: () => void): ToolSeparatorBuilder;
  onVisibleChildrenChanged(handler: () => void): ToolSeparatorBuilder;
  onVisualFocusChanged(handler: () => void): ToolSeparatorBuilder;
  onWheelEnabledChanged(handler: () => void): ToolSeparatorBuilder;
  onWidthChanged(handler: () => void): ToolSeparatorBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ToolSeparatorBuilder;
  onXChanged(handler: () => void): ToolSeparatorBuilder;
  onYChanged(handler: () => void): ToolSeparatorBuilder;
  onZChanged(handler: () => void): ToolSeparatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ToolSeparatorBuilder;
  layer(setup: (b: LayerBuilder) => void): ToolSeparatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ToolSeparatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ToolSeparatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ToolSeparatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ToolSeparatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ToolSeparatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ToolSeparatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ToolSeparatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ToolSeparatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ToolSeparatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ToolSeparatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ToolSeparatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ToolSeparatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ToolSeparatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ToolSeparatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ToolSeparatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ToolSeparatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ToolSeparatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ToolSeparatorBuilder;
}

export function ToolSeparator(): ToolSeparatorBuilder {
  return new DslBuilderImpl('ToolSeparator') as unknown as ToolSeparatorBuilder;
}

export namespace ToolSeparator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ToolSeparator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ToolSeparator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ToolSeparator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ToolSeparator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ToolSeparator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ToolSeparator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ToolSeparator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ToolSeparator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ToolSeparator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ToolSeparator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ToolSeparator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ToolSeparator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ToolSeparator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ToolSeparator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ToolSeparator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ToolSeparator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ToolSeparator', 'TransformOrigin', 'BottomRight');
  }
}
