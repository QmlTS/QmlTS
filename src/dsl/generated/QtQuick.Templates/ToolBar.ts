// AUTO-GENERATED — DO NOT EDIT
// Type: ToolBar
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
export interface ToolBarBuilder {
  id(id: string): ToolBarBuilder;
  child(obj: QmlObjectBuilder): ToolBarBuilder;

  activeFocusOnTab(value: boolean): ToolBarBuilder;
  activeFocusOnTabBind(expr: string): ToolBarBuilder;
  antialiasing(value: boolean): ToolBarBuilder;
  antialiasingBind(expr: string): ToolBarBuilder;
  background(value: ItemBuilder): ToolBarBuilder;
  backgroundBind(expr: string): ToolBarBuilder;
  baselineOffset(value: number): ToolBarBuilder;
  baselineOffsetBind(expr: string): ToolBarBuilder;
  bottomInset(value: number): ToolBarBuilder;
  bottomInsetBind(expr: string): ToolBarBuilder;
  bottomPadding(value: number): ToolBarBuilder;
  bottomPaddingBind(expr: string): ToolBarBuilder;
  clip(value: boolean): ToolBarBuilder;
  clipBind(expr: string): ToolBarBuilder;
  containmentMask(value: QtObjectBuilder): ToolBarBuilder;
  containmentMaskBind(expr: string): ToolBarBuilder;
  contentHeight(value: number): ToolBarBuilder;
  contentHeightBind(expr: string): ToolBarBuilder;
  contentItem(value: ItemBuilder): ToolBarBuilder;
  contentItemBind(expr: string): ToolBarBuilder;
  contentWidth(value: number): ToolBarBuilder;
  contentWidthBind(expr: string): ToolBarBuilder;
  enabled(value: boolean): ToolBarBuilder;
  enabledBind(expr: string): ToolBarBuilder;
  focus(value: boolean): ToolBarBuilder;
  focusBind(expr: string): ToolBarBuilder;
  focusPolicy(value: QmlValue): ToolBarBuilder;
  focusPolicyBind(expr: string): ToolBarBuilder;
  focusReason(value: QmlValue): ToolBarBuilder;
  focusReasonBind(expr: string): ToolBarBuilder;
  font(value: QmlFont): ToolBarBuilder;
  fontBind(expr: string): ToolBarBuilder;
  height(value: number): ToolBarBuilder;
  heightBind(expr: string): ToolBarBuilder;
  horizontalPadding(value: number): ToolBarBuilder;
  horizontalPaddingBind(expr: string): ToolBarBuilder;
  hoverEnabled(value: boolean): ToolBarBuilder;
  hoverEnabledBind(expr: string): ToolBarBuilder;
  implicitHeight(value: number): ToolBarBuilder;
  implicitHeightBind(expr: string): ToolBarBuilder;
  implicitWidth(value: number): ToolBarBuilder;
  implicitWidthBind(expr: string): ToolBarBuilder;
  leftInset(value: number): ToolBarBuilder;
  leftInsetBind(expr: string): ToolBarBuilder;
  leftPadding(value: number): ToolBarBuilder;
  leftPaddingBind(expr: string): ToolBarBuilder;
  locale(value: QmlValue): ToolBarBuilder;
  localeBind(expr: string): ToolBarBuilder;
  objectName(value: string): ToolBarBuilder;
  objectNameBind(expr: string): ToolBarBuilder;
  opacity(value: number): ToolBarBuilder;
  opacityBind(expr: string): ToolBarBuilder;
  padding(value: number): ToolBarBuilder;
  paddingBind(expr: string): ToolBarBuilder;
  palette(value: PaletteBuilder): ToolBarBuilder;
  paletteBind(expr: string): ToolBarBuilder;
  parent(value: ItemBuilder): ToolBarBuilder;
  parentBind(expr: string): ToolBarBuilder;
  position(value: QmlValue): ToolBarBuilder;
  positionBind(expr: string): ToolBarBuilder;
  rightInset(value: number): ToolBarBuilder;
  rightInsetBind(expr: string): ToolBarBuilder;
  rightPadding(value: number): ToolBarBuilder;
  rightPaddingBind(expr: string): ToolBarBuilder;
  rotation(value: number): ToolBarBuilder;
  rotationBind(expr: string): ToolBarBuilder;
  scale(value: number): ToolBarBuilder;
  scaleBind(expr: string): ToolBarBuilder;
  smooth(value: boolean): ToolBarBuilder;
  smoothBind(expr: string): ToolBarBuilder;
  spacing(value: number): ToolBarBuilder;
  spacingBind(expr: string): ToolBarBuilder;
  state(value: string): ToolBarBuilder;
  stateBind(expr: string): ToolBarBuilder;
  topInset(value: number): ToolBarBuilder;
  topInsetBind(expr: string): ToolBarBuilder;
  topPadding(value: number): ToolBarBuilder;
  topPaddingBind(expr: string): ToolBarBuilder;
  transformOrigin(value: QmlValue): ToolBarBuilder;
  transformOriginBind(expr: string): ToolBarBuilder;
  verticalPadding(value: number): ToolBarBuilder;
  verticalPaddingBind(expr: string): ToolBarBuilder;
  visible(value: boolean): ToolBarBuilder;
  visibleBind(expr: string): ToolBarBuilder;
  wheelEnabled(value: boolean): ToolBarBuilder;
  wheelEnabledBind(expr: string): ToolBarBuilder;
  width(value: number): ToolBarBuilder;
  widthBind(expr: string): ToolBarBuilder;
  x(value: number): ToolBarBuilder;
  xBind(expr: string): ToolBarBuilder;
  y(value: number): ToolBarBuilder;
  yBind(expr: string): ToolBarBuilder;
  z(value: number): ToolBarBuilder;
  zBind(expr: string): ToolBarBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ToolBarBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ToolBarBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ToolBarBuilder;
  onAvailableHeightChanged(handler: () => void): ToolBarBuilder;
  onAvailableWidthChanged(handler: () => void): ToolBarBuilder;
  onBackgroundChanged(handler: () => void): ToolBarBuilder;
  onBaselineOffsetChanged(handler: () => void): ToolBarBuilder;
  onBottomInsetChanged(handler: () => void): ToolBarBuilder;
  onBottomPaddingChanged(handler: () => void): ToolBarBuilder;
  onChildrenChanged(handler: () => void): ToolBarBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ToolBarBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ToolBarBuilder;
  onContainmentMaskChanged(handler: () => void): ToolBarBuilder;
  onContentChildrenChanged(handler: () => void): ToolBarBuilder;
  onContentHeightChanged(handler: () => void): ToolBarBuilder;
  onContentItemChanged(handler: () => void): ToolBarBuilder;
  onContentWidthChanged(handler: () => void): ToolBarBuilder;
  onEnabledChanged(handler: () => void): ToolBarBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ToolBarBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ToolBarBuilder;
  onFocusReasonChanged(handler: () => void): ToolBarBuilder;
  onFontChanged(handler: () => void): ToolBarBuilder;
  onHeightChanged(handler: () => void): ToolBarBuilder;
  onHorizontalPaddingChanged(handler: () => void): ToolBarBuilder;
  onHoverEnabledChanged(handler: () => void): ToolBarBuilder;
  onHoveredChanged(handler: () => void): ToolBarBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ToolBarBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ToolBarBuilder;
  onImplicitContentHeightChanged(handler: () => void): ToolBarBuilder;
  onImplicitContentWidthChanged(handler: () => void): ToolBarBuilder;
  onImplicitHeightChanged(handler: () => void): ToolBarBuilder;
  onImplicitWidthChanged(handler: () => void): ToolBarBuilder;
  onLeftInsetChanged(handler: () => void): ToolBarBuilder;
  onLeftPaddingChanged(handler: () => void): ToolBarBuilder;
  onLocaleChanged(handler: () => void): ToolBarBuilder;
  onMirroredChanged(handler: () => void): ToolBarBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ToolBarBuilder;
  onOpacityChanged(handler: () => void): ToolBarBuilder;
  onPaddingChanged(handler: () => void): ToolBarBuilder;
  onPaletteChanged(handler: () => void): ToolBarBuilder;
  onPaletteCreated(handler: () => void): ToolBarBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ToolBarBuilder;
  onPositionChanged(handler: () => void): ToolBarBuilder;
  onRightInsetChanged(handler: () => void): ToolBarBuilder;
  onRightPaddingChanged(handler: () => void): ToolBarBuilder;
  onRotationChanged(handler: () => void): ToolBarBuilder;
  onScaleChanged(handler: () => void): ToolBarBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ToolBarBuilder;
  onSpacingChanged(handler: () => void): ToolBarBuilder;
  onStateChanged(handler: (arg0: string) => void): ToolBarBuilder;
  onTopInsetChanged(handler: () => void): ToolBarBuilder;
  onTopPaddingChanged(handler: () => void): ToolBarBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ToolBarBuilder;
  onVerticalPaddingChanged(handler: () => void): ToolBarBuilder;
  onVisibleChanged(handler: () => void): ToolBarBuilder;
  onVisibleChildrenChanged(handler: () => void): ToolBarBuilder;
  onVisualFocusChanged(handler: () => void): ToolBarBuilder;
  onWheelEnabledChanged(handler: () => void): ToolBarBuilder;
  onWidthChanged(handler: () => void): ToolBarBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ToolBarBuilder;
  onXChanged(handler: () => void): ToolBarBuilder;
  onYChanged(handler: () => void): ToolBarBuilder;
  onZChanged(handler: () => void): ToolBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ToolBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ToolBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ToolBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ToolBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ToolBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ToolBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ToolBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ToolBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ToolBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ToolBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ToolBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ToolBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ToolBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ToolBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ToolBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ToolBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ToolBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ToolBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ToolBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ToolBarBuilder;
}

export function ToolBar(): ToolBarBuilder {
  return new DslBuilderImpl('ToolBar') as unknown as ToolBarBuilder;
}

export namespace ToolBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ToolBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ToolBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ToolBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ToolBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ToolBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ToolBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('ToolBar', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ToolBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ToolBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Position {
    export const Header = createEnumToken('ToolBar', 'Position', 'Header');
    export const Footer = createEnumToken('ToolBar', 'Position', 'Footer');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ToolBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ToolBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ToolBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ToolBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ToolBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ToolBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ToolBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ToolBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ToolBar', 'TransformOrigin', 'BottomRight');
  }
}
