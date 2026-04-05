// AUTO-GENERATED — DO NOT EDIT
// Type: MenuBar
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlFont,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
} from '../../runtime/index.js';
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
export interface MenuBarBuilder {
  id(id: string): MenuBarBuilder;
  child(obj: QmlObjectBuilder): MenuBarBuilder;

  activeFocusOnTab(value: boolean): MenuBarBuilder;
  activeFocusOnTabBind(expr: string): MenuBarBuilder;
  antialiasing(value: boolean): MenuBarBuilder;
  antialiasingBind(expr: string): MenuBarBuilder;
  background(value: ItemBuilder): MenuBarBuilder;
  backgroundBind(expr: string): MenuBarBuilder;
  baselineOffset(value: number): MenuBarBuilder;
  baselineOffsetBind(expr: string): MenuBarBuilder;
  bottomInset(value: number): MenuBarBuilder;
  bottomInsetBind(expr: string): MenuBarBuilder;
  bottomPadding(value: number): MenuBarBuilder;
  bottomPaddingBind(expr: string): MenuBarBuilder;
  clip(value: boolean): MenuBarBuilder;
  clipBind(expr: string): MenuBarBuilder;
  containmentMask(value: QtObjectBuilder): MenuBarBuilder;
  containmentMaskBind(expr: string): MenuBarBuilder;
  contentHeight(value: number): MenuBarBuilder;
  contentHeightBind(expr: string): MenuBarBuilder;
  contentItem(value: ItemBuilder): MenuBarBuilder;
  contentItemBind(expr: string): MenuBarBuilder;
  contentWidth(value: number): MenuBarBuilder;
  contentWidthBind(expr: string): MenuBarBuilder;
  currentIndex(value: number): MenuBarBuilder;
  currentIndexBind(expr: string): MenuBarBuilder;
  delegate(value: QmlComponent): MenuBarBuilder;
  delegateBind(expr: string): MenuBarBuilder;
  enabled(value: boolean): MenuBarBuilder;
  enabledBind(expr: string): MenuBarBuilder;
  focus(value: boolean): MenuBarBuilder;
  focusBind(expr: string): MenuBarBuilder;
  focusPolicy(value: QmlValue): MenuBarBuilder;
  focusPolicyBind(expr: string): MenuBarBuilder;
  focusReason(value: QmlValue): MenuBarBuilder;
  focusReasonBind(expr: string): MenuBarBuilder;
  font(value: QmlFont): MenuBarBuilder;
  fontBind(expr: string): MenuBarBuilder;
  height(value: number): MenuBarBuilder;
  heightBind(expr: string): MenuBarBuilder;
  horizontalPadding(value: number): MenuBarBuilder;
  horizontalPaddingBind(expr: string): MenuBarBuilder;
  hoverEnabled(value: boolean): MenuBarBuilder;
  hoverEnabledBind(expr: string): MenuBarBuilder;
  implicitHeight(value: number): MenuBarBuilder;
  implicitHeightBind(expr: string): MenuBarBuilder;
  implicitWidth(value: number): MenuBarBuilder;
  implicitWidthBind(expr: string): MenuBarBuilder;
  leftInset(value: number): MenuBarBuilder;
  leftInsetBind(expr: string): MenuBarBuilder;
  leftPadding(value: number): MenuBarBuilder;
  leftPaddingBind(expr: string): MenuBarBuilder;
  locale(value: QmlValue): MenuBarBuilder;
  localeBind(expr: string): MenuBarBuilder;
  objectName(value: string): MenuBarBuilder;
  objectNameBind(expr: string): MenuBarBuilder;
  opacity(value: number): MenuBarBuilder;
  opacityBind(expr: string): MenuBarBuilder;
  padding(value: number): MenuBarBuilder;
  paddingBind(expr: string): MenuBarBuilder;
  palette(value: PaletteBuilder): MenuBarBuilder;
  paletteBind(expr: string): MenuBarBuilder;
  parent(value: ItemBuilder): MenuBarBuilder;
  parentBind(expr: string): MenuBarBuilder;
  rightInset(value: number): MenuBarBuilder;
  rightInsetBind(expr: string): MenuBarBuilder;
  rightPadding(value: number): MenuBarBuilder;
  rightPaddingBind(expr: string): MenuBarBuilder;
  rotation(value: number): MenuBarBuilder;
  rotationBind(expr: string): MenuBarBuilder;
  scale(value: number): MenuBarBuilder;
  scaleBind(expr: string): MenuBarBuilder;
  smooth(value: boolean): MenuBarBuilder;
  smoothBind(expr: string): MenuBarBuilder;
  spacing(value: number): MenuBarBuilder;
  spacingBind(expr: string): MenuBarBuilder;
  state(value: string): MenuBarBuilder;
  stateBind(expr: string): MenuBarBuilder;
  topInset(value: number): MenuBarBuilder;
  topInsetBind(expr: string): MenuBarBuilder;
  topPadding(value: number): MenuBarBuilder;
  topPaddingBind(expr: string): MenuBarBuilder;
  transformOrigin(value: QmlValue): MenuBarBuilder;
  transformOriginBind(expr: string): MenuBarBuilder;
  verticalPadding(value: number): MenuBarBuilder;
  verticalPaddingBind(expr: string): MenuBarBuilder;
  visible(value: boolean): MenuBarBuilder;
  visibleBind(expr: string): MenuBarBuilder;
  wheelEnabled(value: boolean): MenuBarBuilder;
  wheelEnabledBind(expr: string): MenuBarBuilder;
  width(value: number): MenuBarBuilder;
  widthBind(expr: string): MenuBarBuilder;
  x(value: number): MenuBarBuilder;
  xBind(expr: string): MenuBarBuilder;
  y(value: number): MenuBarBuilder;
  yBind(expr: string): MenuBarBuilder;
  z(value: number): MenuBarBuilder;
  zBind(expr: string): MenuBarBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): MenuBarBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): MenuBarBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): MenuBarBuilder;
  onAvailableHeightChanged(handler: () => void): MenuBarBuilder;
  onAvailableWidthChanged(handler: () => void): MenuBarBuilder;
  onBackgroundChanged(handler: () => void): MenuBarBuilder;
  onBaselineOffsetChanged(handler: () => void): MenuBarBuilder;
  onBottomInsetChanged(handler: () => void): MenuBarBuilder;
  onBottomPaddingChanged(handler: () => void): MenuBarBuilder;
  onChildrenChanged(handler: () => void): MenuBarBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): MenuBarBuilder;
  onClipChanged(handler: (arg0: boolean) => void): MenuBarBuilder;
  onContainmentMaskChanged(handler: () => void): MenuBarBuilder;
  onContentChildrenChanged(handler: () => void): MenuBarBuilder;
  onContentHeightChanged(handler: () => void): MenuBarBuilder;
  onContentItemChanged(handler: () => void): MenuBarBuilder;
  onContentWidthChanged(handler: () => void): MenuBarBuilder;
  onCountChanged(handler: () => void): MenuBarBuilder;
  onCurrentIndexChanged(handler: () => void): MenuBarBuilder;
  onCurrentItemChanged(handler: () => void): MenuBarBuilder;
  onDelegateChanged(handler: () => void): MenuBarBuilder;
  onEnabledChanged(handler: () => void): MenuBarBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): MenuBarBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): MenuBarBuilder;
  onFocusReasonChanged(handler: () => void): MenuBarBuilder;
  onFontChanged(handler: () => void): MenuBarBuilder;
  onHeightChanged(handler: () => void): MenuBarBuilder;
  onHorizontalPaddingChanged(handler: () => void): MenuBarBuilder;
  onHoverEnabledChanged(handler: () => void): MenuBarBuilder;
  onHoveredChanged(handler: () => void): MenuBarBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): MenuBarBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): MenuBarBuilder;
  onImplicitContentHeightChanged(handler: () => void): MenuBarBuilder;
  onImplicitContentWidthChanged(handler: () => void): MenuBarBuilder;
  onImplicitHeightChanged(handler: () => void): MenuBarBuilder;
  onImplicitWidthChanged(handler: () => void): MenuBarBuilder;
  onLeftInsetChanged(handler: () => void): MenuBarBuilder;
  onLeftPaddingChanged(handler: () => void): MenuBarBuilder;
  onLocaleChanged(handler: () => void): MenuBarBuilder;
  onMenusChanged(handler: () => void): MenuBarBuilder;
  onMirroredChanged(handler: () => void): MenuBarBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MenuBarBuilder;
  onOpacityChanged(handler: () => void): MenuBarBuilder;
  onPaddingChanged(handler: () => void): MenuBarBuilder;
  onPaletteChanged(handler: () => void): MenuBarBuilder;
  onPaletteCreated(handler: () => void): MenuBarBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): MenuBarBuilder;
  onRightInsetChanged(handler: () => void): MenuBarBuilder;
  onRightPaddingChanged(handler: () => void): MenuBarBuilder;
  onRotationChanged(handler: () => void): MenuBarBuilder;
  onScaleChanged(handler: () => void): MenuBarBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): MenuBarBuilder;
  onSpacingChanged(handler: () => void): MenuBarBuilder;
  onStateChanged(handler: (arg0: string) => void): MenuBarBuilder;
  onTopInsetChanged(handler: () => void): MenuBarBuilder;
  onTopPaddingChanged(handler: () => void): MenuBarBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): MenuBarBuilder;
  onVerticalPaddingChanged(handler: () => void): MenuBarBuilder;
  onVisibleChanged(handler: () => void): MenuBarBuilder;
  onVisibleChildrenChanged(handler: () => void): MenuBarBuilder;
  onVisualFocusChanged(handler: () => void): MenuBarBuilder;
  onWheelEnabledChanged(handler: () => void): MenuBarBuilder;
  onWidthChanged(handler: () => void): MenuBarBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): MenuBarBuilder;
  onXChanged(handler: () => void): MenuBarBuilder;
  onYChanged(handler: () => void): MenuBarBuilder;
  onZChanged(handler: () => void): MenuBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuBarBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuBarBuilder;
}

export function MenuBar(): MenuBarBuilder {
  return new DslBuilderImpl('MenuBar') as unknown as MenuBarBuilder;
}

export namespace MenuBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MenuBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MenuBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MenuBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MenuBar', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MenuBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MenuBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuBar', 'TransformOrigin', 'BottomRight');
  }
}
