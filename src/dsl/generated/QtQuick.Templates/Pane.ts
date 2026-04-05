// AUTO-GENERATED — DO NOT EDIT
// Type: Pane
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
export interface PaneBuilder {
  id(id: string): PaneBuilder;
  child(obj: QmlObjectBuilder): PaneBuilder;

  activeFocusOnTab(value: boolean): PaneBuilder;
  activeFocusOnTabBind(expr: string): PaneBuilder;
  antialiasing(value: boolean): PaneBuilder;
  antialiasingBind(expr: string): PaneBuilder;
  background(value: ItemBuilder): PaneBuilder;
  backgroundBind(expr: string): PaneBuilder;
  baselineOffset(value: number): PaneBuilder;
  baselineOffsetBind(expr: string): PaneBuilder;
  bottomInset(value: number): PaneBuilder;
  bottomInsetBind(expr: string): PaneBuilder;
  bottomPadding(value: number): PaneBuilder;
  bottomPaddingBind(expr: string): PaneBuilder;
  clip(value: boolean): PaneBuilder;
  clipBind(expr: string): PaneBuilder;
  containmentMask(value: QtObjectBuilder): PaneBuilder;
  containmentMaskBind(expr: string): PaneBuilder;
  contentHeight(value: number): PaneBuilder;
  contentHeightBind(expr: string): PaneBuilder;
  contentItem(value: ItemBuilder): PaneBuilder;
  contentItemBind(expr: string): PaneBuilder;
  contentWidth(value: number): PaneBuilder;
  contentWidthBind(expr: string): PaneBuilder;
  enabled(value: boolean): PaneBuilder;
  enabledBind(expr: string): PaneBuilder;
  focus(value: boolean): PaneBuilder;
  focusBind(expr: string): PaneBuilder;
  focusPolicy(value: QmlValue): PaneBuilder;
  focusPolicyBind(expr: string): PaneBuilder;
  focusReason(value: QmlValue): PaneBuilder;
  focusReasonBind(expr: string): PaneBuilder;
  font(value: QmlFont): PaneBuilder;
  fontBind(expr: string): PaneBuilder;
  height(value: number): PaneBuilder;
  heightBind(expr: string): PaneBuilder;
  horizontalPadding(value: number): PaneBuilder;
  horizontalPaddingBind(expr: string): PaneBuilder;
  hoverEnabled(value: boolean): PaneBuilder;
  hoverEnabledBind(expr: string): PaneBuilder;
  implicitHeight(value: number): PaneBuilder;
  implicitHeightBind(expr: string): PaneBuilder;
  implicitWidth(value: number): PaneBuilder;
  implicitWidthBind(expr: string): PaneBuilder;
  leftInset(value: number): PaneBuilder;
  leftInsetBind(expr: string): PaneBuilder;
  leftPadding(value: number): PaneBuilder;
  leftPaddingBind(expr: string): PaneBuilder;
  locale(value: QmlValue): PaneBuilder;
  localeBind(expr: string): PaneBuilder;
  objectName(value: string): PaneBuilder;
  objectNameBind(expr: string): PaneBuilder;
  opacity(value: number): PaneBuilder;
  opacityBind(expr: string): PaneBuilder;
  padding(value: number): PaneBuilder;
  paddingBind(expr: string): PaneBuilder;
  palette(value: PaletteBuilder): PaneBuilder;
  paletteBind(expr: string): PaneBuilder;
  parent(value: ItemBuilder): PaneBuilder;
  parentBind(expr: string): PaneBuilder;
  rightInset(value: number): PaneBuilder;
  rightInsetBind(expr: string): PaneBuilder;
  rightPadding(value: number): PaneBuilder;
  rightPaddingBind(expr: string): PaneBuilder;
  rotation(value: number): PaneBuilder;
  rotationBind(expr: string): PaneBuilder;
  scale(value: number): PaneBuilder;
  scaleBind(expr: string): PaneBuilder;
  smooth(value: boolean): PaneBuilder;
  smoothBind(expr: string): PaneBuilder;
  spacing(value: number): PaneBuilder;
  spacingBind(expr: string): PaneBuilder;
  state(value: string): PaneBuilder;
  stateBind(expr: string): PaneBuilder;
  topInset(value: number): PaneBuilder;
  topInsetBind(expr: string): PaneBuilder;
  topPadding(value: number): PaneBuilder;
  topPaddingBind(expr: string): PaneBuilder;
  transformOrigin(value: QmlValue): PaneBuilder;
  transformOriginBind(expr: string): PaneBuilder;
  verticalPadding(value: number): PaneBuilder;
  verticalPaddingBind(expr: string): PaneBuilder;
  visible(value: boolean): PaneBuilder;
  visibleBind(expr: string): PaneBuilder;
  wheelEnabled(value: boolean): PaneBuilder;
  wheelEnabledBind(expr: string): PaneBuilder;
  width(value: number): PaneBuilder;
  widthBind(expr: string): PaneBuilder;
  x(value: number): PaneBuilder;
  xBind(expr: string): PaneBuilder;
  y(value: number): PaneBuilder;
  yBind(expr: string): PaneBuilder;
  z(value: number): PaneBuilder;
  zBind(expr: string): PaneBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): PaneBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): PaneBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): PaneBuilder;
  onAvailableHeightChanged(handler: () => void): PaneBuilder;
  onAvailableWidthChanged(handler: () => void): PaneBuilder;
  onBackgroundChanged(handler: () => void): PaneBuilder;
  onBaselineOffsetChanged(handler: () => void): PaneBuilder;
  onBottomInsetChanged(handler: () => void): PaneBuilder;
  onBottomPaddingChanged(handler: () => void): PaneBuilder;
  onChildrenChanged(handler: () => void): PaneBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): PaneBuilder;
  onClipChanged(handler: (arg0: boolean) => void): PaneBuilder;
  onContainmentMaskChanged(handler: () => void): PaneBuilder;
  onContentChildrenChanged(handler: () => void): PaneBuilder;
  onContentHeightChanged(handler: () => void): PaneBuilder;
  onContentItemChanged(handler: () => void): PaneBuilder;
  onContentWidthChanged(handler: () => void): PaneBuilder;
  onEnabledChanged(handler: () => void): PaneBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): PaneBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): PaneBuilder;
  onFocusReasonChanged(handler: () => void): PaneBuilder;
  onFontChanged(handler: () => void): PaneBuilder;
  onHeightChanged(handler: () => void): PaneBuilder;
  onHorizontalPaddingChanged(handler: () => void): PaneBuilder;
  onHoverEnabledChanged(handler: () => void): PaneBuilder;
  onHoveredChanged(handler: () => void): PaneBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): PaneBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): PaneBuilder;
  onImplicitContentHeightChanged(handler: () => void): PaneBuilder;
  onImplicitContentWidthChanged(handler: () => void): PaneBuilder;
  onImplicitHeightChanged(handler: () => void): PaneBuilder;
  onImplicitWidthChanged(handler: () => void): PaneBuilder;
  onLeftInsetChanged(handler: () => void): PaneBuilder;
  onLeftPaddingChanged(handler: () => void): PaneBuilder;
  onLocaleChanged(handler: () => void): PaneBuilder;
  onMirroredChanged(handler: () => void): PaneBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PaneBuilder;
  onOpacityChanged(handler: () => void): PaneBuilder;
  onPaddingChanged(handler: () => void): PaneBuilder;
  onPaletteChanged(handler: () => void): PaneBuilder;
  onPaletteCreated(handler: () => void): PaneBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): PaneBuilder;
  onRightInsetChanged(handler: () => void): PaneBuilder;
  onRightPaddingChanged(handler: () => void): PaneBuilder;
  onRotationChanged(handler: () => void): PaneBuilder;
  onScaleChanged(handler: () => void): PaneBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): PaneBuilder;
  onSpacingChanged(handler: () => void): PaneBuilder;
  onStateChanged(handler: (arg0: string) => void): PaneBuilder;
  onTopInsetChanged(handler: () => void): PaneBuilder;
  onTopPaddingChanged(handler: () => void): PaneBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): PaneBuilder;
  onVerticalPaddingChanged(handler: () => void): PaneBuilder;
  onVisibleChanged(handler: () => void): PaneBuilder;
  onVisibleChildrenChanged(handler: () => void): PaneBuilder;
  onVisualFocusChanged(handler: () => void): PaneBuilder;
  onWheelEnabledChanged(handler: () => void): PaneBuilder;
  onWidthChanged(handler: () => void): PaneBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): PaneBuilder;
  onXChanged(handler: () => void): PaneBuilder;
  onYChanged(handler: () => void): PaneBuilder;
  onZChanged(handler: () => void): PaneBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PaneBuilder;
  layer(setup: (b: LayerBuilder) => void): PaneBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): PaneBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): PaneBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): PaneBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): PaneBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): PaneBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): PaneBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): PaneBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): PaneBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): PaneBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): PaneBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): PaneBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): PaneBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): PaneBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): PaneBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): PaneBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): PaneBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): PaneBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): PaneBuilder;
}

export function Pane(): PaneBuilder {
  return new DslBuilderImpl('Pane') as unknown as PaneBuilder;
}

export namespace Pane {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Pane',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Pane',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Pane', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Pane', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Pane', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Pane', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Pane', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Pane', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Pane', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Pane',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Pane', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Pane', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Pane', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Pane', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Pane', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Pane', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Pane', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Pane', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Pane', 'TransformOrigin', 'BottomRight');
  }
}
