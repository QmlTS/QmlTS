// AUTO-GENERATED — DO NOT EDIT
// Type: TabBar
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
export interface TabBarBuilder {
  id(id: string): TabBarBuilder;
  child(obj: QmlObjectBuilder): TabBarBuilder;

  activeFocusOnTab(value: boolean): TabBarBuilder;
  activeFocusOnTabBind(expr: string): TabBarBuilder;
  antialiasing(value: boolean): TabBarBuilder;
  antialiasingBind(expr: string): TabBarBuilder;
  background(value: ItemBuilder): TabBarBuilder;
  backgroundBind(expr: string): TabBarBuilder;
  baselineOffset(value: number): TabBarBuilder;
  baselineOffsetBind(expr: string): TabBarBuilder;
  bottomInset(value: number): TabBarBuilder;
  bottomInsetBind(expr: string): TabBarBuilder;
  bottomPadding(value: number): TabBarBuilder;
  bottomPaddingBind(expr: string): TabBarBuilder;
  clip(value: boolean): TabBarBuilder;
  clipBind(expr: string): TabBarBuilder;
  containmentMask(value: QtObjectBuilder): TabBarBuilder;
  containmentMaskBind(expr: string): TabBarBuilder;
  contentHeight(value: number): TabBarBuilder;
  contentHeightBind(expr: string): TabBarBuilder;
  contentItem(value: ItemBuilder): TabBarBuilder;
  contentItemBind(expr: string): TabBarBuilder;
  contentWidth(value: number): TabBarBuilder;
  contentWidthBind(expr: string): TabBarBuilder;
  currentIndex(value: number): TabBarBuilder;
  currentIndexBind(expr: string): TabBarBuilder;
  enabled(value: boolean): TabBarBuilder;
  enabledBind(expr: string): TabBarBuilder;
  focus(value: boolean): TabBarBuilder;
  focusBind(expr: string): TabBarBuilder;
  focusPolicy(value: QmlValue): TabBarBuilder;
  focusPolicyBind(expr: string): TabBarBuilder;
  focusReason(value: QmlValue): TabBarBuilder;
  focusReasonBind(expr: string): TabBarBuilder;
  font(value: QmlFont): TabBarBuilder;
  fontBind(expr: string): TabBarBuilder;
  height(value: number): TabBarBuilder;
  heightBind(expr: string): TabBarBuilder;
  horizontalPadding(value: number): TabBarBuilder;
  horizontalPaddingBind(expr: string): TabBarBuilder;
  hoverEnabled(value: boolean): TabBarBuilder;
  hoverEnabledBind(expr: string): TabBarBuilder;
  implicitHeight(value: number): TabBarBuilder;
  implicitHeightBind(expr: string): TabBarBuilder;
  implicitWidth(value: number): TabBarBuilder;
  implicitWidthBind(expr: string): TabBarBuilder;
  leftInset(value: number): TabBarBuilder;
  leftInsetBind(expr: string): TabBarBuilder;
  leftPadding(value: number): TabBarBuilder;
  leftPaddingBind(expr: string): TabBarBuilder;
  locale(value: QmlValue): TabBarBuilder;
  localeBind(expr: string): TabBarBuilder;
  objectName(value: string): TabBarBuilder;
  objectNameBind(expr: string): TabBarBuilder;
  opacity(value: number): TabBarBuilder;
  opacityBind(expr: string): TabBarBuilder;
  padding(value: number): TabBarBuilder;
  paddingBind(expr: string): TabBarBuilder;
  palette(value: PaletteBuilder): TabBarBuilder;
  paletteBind(expr: string): TabBarBuilder;
  parent(value: ItemBuilder): TabBarBuilder;
  parentBind(expr: string): TabBarBuilder;
  position(value: QmlValue): TabBarBuilder;
  positionBind(expr: string): TabBarBuilder;
  rightInset(value: number): TabBarBuilder;
  rightInsetBind(expr: string): TabBarBuilder;
  rightPadding(value: number): TabBarBuilder;
  rightPaddingBind(expr: string): TabBarBuilder;
  rotation(value: number): TabBarBuilder;
  rotationBind(expr: string): TabBarBuilder;
  scale(value: number): TabBarBuilder;
  scaleBind(expr: string): TabBarBuilder;
  smooth(value: boolean): TabBarBuilder;
  smoothBind(expr: string): TabBarBuilder;
  spacing(value: number): TabBarBuilder;
  spacingBind(expr: string): TabBarBuilder;
  state(value: string): TabBarBuilder;
  stateBind(expr: string): TabBarBuilder;
  topInset(value: number): TabBarBuilder;
  topInsetBind(expr: string): TabBarBuilder;
  topPadding(value: number): TabBarBuilder;
  topPaddingBind(expr: string): TabBarBuilder;
  transformOrigin(value: QmlValue): TabBarBuilder;
  transformOriginBind(expr: string): TabBarBuilder;
  verticalPadding(value: number): TabBarBuilder;
  verticalPaddingBind(expr: string): TabBarBuilder;
  visible(value: boolean): TabBarBuilder;
  visibleBind(expr: string): TabBarBuilder;
  wheelEnabled(value: boolean): TabBarBuilder;
  wheelEnabledBind(expr: string): TabBarBuilder;
  width(value: number): TabBarBuilder;
  widthBind(expr: string): TabBarBuilder;
  x(value: number): TabBarBuilder;
  xBind(expr: string): TabBarBuilder;
  y(value: number): TabBarBuilder;
  yBind(expr: string): TabBarBuilder;
  z(value: number): TabBarBuilder;
  zBind(expr: string): TabBarBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TabBarBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TabBarBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TabBarBuilder;
  onAvailableHeightChanged(handler: () => void): TabBarBuilder;
  onAvailableWidthChanged(handler: () => void): TabBarBuilder;
  onBackgroundChanged(handler: () => void): TabBarBuilder;
  onBaselineOffsetChanged(handler: () => void): TabBarBuilder;
  onBottomInsetChanged(handler: () => void): TabBarBuilder;
  onBottomPaddingChanged(handler: () => void): TabBarBuilder;
  onChildrenChanged(handler: () => void): TabBarBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TabBarBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TabBarBuilder;
  onContainmentMaskChanged(handler: () => void): TabBarBuilder;
  onContentChildrenChanged(handler: () => void): TabBarBuilder;
  onContentHeightChanged(handler: () => void): TabBarBuilder;
  onContentItemChanged(handler: () => void): TabBarBuilder;
  onContentWidthChanged(handler: () => void): TabBarBuilder;
  onCountChanged(handler: () => void): TabBarBuilder;
  onCurrentIndexChanged(handler: () => void): TabBarBuilder;
  onCurrentItemChanged(handler: () => void): TabBarBuilder;
  onEnabledChanged(handler: () => void): TabBarBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TabBarBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TabBarBuilder;
  onFocusReasonChanged(handler: () => void): TabBarBuilder;
  onFontChanged(handler: () => void): TabBarBuilder;
  onHeightChanged(handler: () => void): TabBarBuilder;
  onHorizontalPaddingChanged(handler: () => void): TabBarBuilder;
  onHoverEnabledChanged(handler: () => void): TabBarBuilder;
  onHoveredChanged(handler: () => void): TabBarBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): TabBarBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): TabBarBuilder;
  onImplicitContentHeightChanged(handler: () => void): TabBarBuilder;
  onImplicitContentWidthChanged(handler: () => void): TabBarBuilder;
  onImplicitHeightChanged(handler: () => void): TabBarBuilder;
  onImplicitWidthChanged(handler: () => void): TabBarBuilder;
  onLeftInsetChanged(handler: () => void): TabBarBuilder;
  onLeftPaddingChanged(handler: () => void): TabBarBuilder;
  onLocaleChanged(handler: () => void): TabBarBuilder;
  onMirroredChanged(handler: () => void): TabBarBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TabBarBuilder;
  onOpacityChanged(handler: () => void): TabBarBuilder;
  onPaddingChanged(handler: () => void): TabBarBuilder;
  onPaletteChanged(handler: () => void): TabBarBuilder;
  onPaletteCreated(handler: () => void): TabBarBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TabBarBuilder;
  onPositionChanged(handler: () => void): TabBarBuilder;
  onRightInsetChanged(handler: () => void): TabBarBuilder;
  onRightPaddingChanged(handler: () => void): TabBarBuilder;
  onRotationChanged(handler: () => void): TabBarBuilder;
  onScaleChanged(handler: () => void): TabBarBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TabBarBuilder;
  onSpacingChanged(handler: () => void): TabBarBuilder;
  onStateChanged(handler: (arg0: string) => void): TabBarBuilder;
  onTopInsetChanged(handler: () => void): TabBarBuilder;
  onTopPaddingChanged(handler: () => void): TabBarBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TabBarBuilder;
  onVerticalPaddingChanged(handler: () => void): TabBarBuilder;
  onVisibleChanged(handler: () => void): TabBarBuilder;
  onVisibleChildrenChanged(handler: () => void): TabBarBuilder;
  onVisualFocusChanged(handler: () => void): TabBarBuilder;
  onWheelEnabledChanged(handler: () => void): TabBarBuilder;
  onWidthChanged(handler: () => void): TabBarBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TabBarBuilder;
  onXChanged(handler: () => void): TabBarBuilder;
  onYChanged(handler: () => void): TabBarBuilder;
  onZChanged(handler: () => void): TabBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TabBarBuilder;
  layer(setup: (b: LayerBuilder) => void): TabBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TabBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TabBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TabBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TabBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TabBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TabBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TabBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TabBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TabBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TabBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TabBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TabBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TabBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TabBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TabBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TabBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TabBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TabBarBuilder;
}

export function TabBar(): TabBarBuilder {
  return new DslBuilderImpl('TabBar') as unknown as TabBarBuilder;
}

export namespace TabBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TabBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TabBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TabBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TabBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TabBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TabBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('TabBar', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TabBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TabBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Position {
    export const Header = createEnumToken('TabBar', 'Position', 'Header');
    export const Footer = createEnumToken('TabBar', 'Position', 'Footer');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TabBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TabBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TabBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TabBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TabBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TabBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TabBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TabBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TabBar', 'TransformOrigin', 'BottomRight');
  }
}
