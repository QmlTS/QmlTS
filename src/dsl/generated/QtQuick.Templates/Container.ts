// AUTO-GENERATED — DO NOT EDIT
// Type: Container
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
export interface ContainerBuilder {
  id(id: string): ContainerBuilder;
  child(obj: QmlObjectBuilder): ContainerBuilder;

  activeFocusOnTab(value: boolean): ContainerBuilder;
  activeFocusOnTabBind(expr: string): ContainerBuilder;
  antialiasing(value: boolean): ContainerBuilder;
  antialiasingBind(expr: string): ContainerBuilder;
  background(value: ItemBuilder): ContainerBuilder;
  backgroundBind(expr: string): ContainerBuilder;
  baselineOffset(value: number): ContainerBuilder;
  baselineOffsetBind(expr: string): ContainerBuilder;
  bottomInset(value: number): ContainerBuilder;
  bottomInsetBind(expr: string): ContainerBuilder;
  bottomPadding(value: number): ContainerBuilder;
  bottomPaddingBind(expr: string): ContainerBuilder;
  clip(value: boolean): ContainerBuilder;
  clipBind(expr: string): ContainerBuilder;
  containmentMask(value: QtObjectBuilder): ContainerBuilder;
  containmentMaskBind(expr: string): ContainerBuilder;
  contentHeight(value: number): ContainerBuilder;
  contentHeightBind(expr: string): ContainerBuilder;
  contentItem(value: ItemBuilder): ContainerBuilder;
  contentItemBind(expr: string): ContainerBuilder;
  contentWidth(value: number): ContainerBuilder;
  contentWidthBind(expr: string): ContainerBuilder;
  currentIndex(value: number): ContainerBuilder;
  currentIndexBind(expr: string): ContainerBuilder;
  enabled(value: boolean): ContainerBuilder;
  enabledBind(expr: string): ContainerBuilder;
  focus(value: boolean): ContainerBuilder;
  focusBind(expr: string): ContainerBuilder;
  focusPolicy(value: QmlValue): ContainerBuilder;
  focusPolicyBind(expr: string): ContainerBuilder;
  focusReason(value: QmlValue): ContainerBuilder;
  focusReasonBind(expr: string): ContainerBuilder;
  font(value: QmlFont): ContainerBuilder;
  fontBind(expr: string): ContainerBuilder;
  height(value: number): ContainerBuilder;
  heightBind(expr: string): ContainerBuilder;
  horizontalPadding(value: number): ContainerBuilder;
  horizontalPaddingBind(expr: string): ContainerBuilder;
  hoverEnabled(value: boolean): ContainerBuilder;
  hoverEnabledBind(expr: string): ContainerBuilder;
  implicitHeight(value: number): ContainerBuilder;
  implicitHeightBind(expr: string): ContainerBuilder;
  implicitWidth(value: number): ContainerBuilder;
  implicitWidthBind(expr: string): ContainerBuilder;
  leftInset(value: number): ContainerBuilder;
  leftInsetBind(expr: string): ContainerBuilder;
  leftPadding(value: number): ContainerBuilder;
  leftPaddingBind(expr: string): ContainerBuilder;
  locale(value: QmlValue): ContainerBuilder;
  localeBind(expr: string): ContainerBuilder;
  objectName(value: string): ContainerBuilder;
  objectNameBind(expr: string): ContainerBuilder;
  opacity(value: number): ContainerBuilder;
  opacityBind(expr: string): ContainerBuilder;
  padding(value: number): ContainerBuilder;
  paddingBind(expr: string): ContainerBuilder;
  palette(value: PaletteBuilder): ContainerBuilder;
  paletteBind(expr: string): ContainerBuilder;
  parent(value: ItemBuilder): ContainerBuilder;
  parentBind(expr: string): ContainerBuilder;
  rightInset(value: number): ContainerBuilder;
  rightInsetBind(expr: string): ContainerBuilder;
  rightPadding(value: number): ContainerBuilder;
  rightPaddingBind(expr: string): ContainerBuilder;
  rotation(value: number): ContainerBuilder;
  rotationBind(expr: string): ContainerBuilder;
  scale(value: number): ContainerBuilder;
  scaleBind(expr: string): ContainerBuilder;
  smooth(value: boolean): ContainerBuilder;
  smoothBind(expr: string): ContainerBuilder;
  spacing(value: number): ContainerBuilder;
  spacingBind(expr: string): ContainerBuilder;
  state(value: string): ContainerBuilder;
  stateBind(expr: string): ContainerBuilder;
  topInset(value: number): ContainerBuilder;
  topInsetBind(expr: string): ContainerBuilder;
  topPadding(value: number): ContainerBuilder;
  topPaddingBind(expr: string): ContainerBuilder;
  transformOrigin(value: QmlValue): ContainerBuilder;
  transformOriginBind(expr: string): ContainerBuilder;
  verticalPadding(value: number): ContainerBuilder;
  verticalPaddingBind(expr: string): ContainerBuilder;
  visible(value: boolean): ContainerBuilder;
  visibleBind(expr: string): ContainerBuilder;
  wheelEnabled(value: boolean): ContainerBuilder;
  wheelEnabledBind(expr: string): ContainerBuilder;
  width(value: number): ContainerBuilder;
  widthBind(expr: string): ContainerBuilder;
  x(value: number): ContainerBuilder;
  xBind(expr: string): ContainerBuilder;
  y(value: number): ContainerBuilder;
  yBind(expr: string): ContainerBuilder;
  z(value: number): ContainerBuilder;
  zBind(expr: string): ContainerBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ContainerBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ContainerBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ContainerBuilder;
  onAvailableHeightChanged(handler: () => void): ContainerBuilder;
  onAvailableWidthChanged(handler: () => void): ContainerBuilder;
  onBackgroundChanged(handler: () => void): ContainerBuilder;
  onBaselineOffsetChanged(handler: () => void): ContainerBuilder;
  onBottomInsetChanged(handler: () => void): ContainerBuilder;
  onBottomPaddingChanged(handler: () => void): ContainerBuilder;
  onChildrenChanged(handler: () => void): ContainerBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ContainerBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ContainerBuilder;
  onContainmentMaskChanged(handler: () => void): ContainerBuilder;
  onContentChildrenChanged(handler: () => void): ContainerBuilder;
  onContentHeightChanged(handler: () => void): ContainerBuilder;
  onContentItemChanged(handler: () => void): ContainerBuilder;
  onContentWidthChanged(handler: () => void): ContainerBuilder;
  onCountChanged(handler: () => void): ContainerBuilder;
  onCurrentIndexChanged(handler: () => void): ContainerBuilder;
  onCurrentItemChanged(handler: () => void): ContainerBuilder;
  onEnabledChanged(handler: () => void): ContainerBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ContainerBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ContainerBuilder;
  onFocusReasonChanged(handler: () => void): ContainerBuilder;
  onFontChanged(handler: () => void): ContainerBuilder;
  onHeightChanged(handler: () => void): ContainerBuilder;
  onHorizontalPaddingChanged(handler: () => void): ContainerBuilder;
  onHoverEnabledChanged(handler: () => void): ContainerBuilder;
  onHoveredChanged(handler: () => void): ContainerBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ContainerBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ContainerBuilder;
  onImplicitContentHeightChanged(handler: () => void): ContainerBuilder;
  onImplicitContentWidthChanged(handler: () => void): ContainerBuilder;
  onImplicitHeightChanged(handler: () => void): ContainerBuilder;
  onImplicitWidthChanged(handler: () => void): ContainerBuilder;
  onLeftInsetChanged(handler: () => void): ContainerBuilder;
  onLeftPaddingChanged(handler: () => void): ContainerBuilder;
  onLocaleChanged(handler: () => void): ContainerBuilder;
  onMirroredChanged(handler: () => void): ContainerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ContainerBuilder;
  onOpacityChanged(handler: () => void): ContainerBuilder;
  onPaddingChanged(handler: () => void): ContainerBuilder;
  onPaletteChanged(handler: () => void): ContainerBuilder;
  onPaletteCreated(handler: () => void): ContainerBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ContainerBuilder;
  onRightInsetChanged(handler: () => void): ContainerBuilder;
  onRightPaddingChanged(handler: () => void): ContainerBuilder;
  onRotationChanged(handler: () => void): ContainerBuilder;
  onScaleChanged(handler: () => void): ContainerBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ContainerBuilder;
  onSpacingChanged(handler: () => void): ContainerBuilder;
  onStateChanged(handler: (arg0: string) => void): ContainerBuilder;
  onTopInsetChanged(handler: () => void): ContainerBuilder;
  onTopPaddingChanged(handler: () => void): ContainerBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ContainerBuilder;
  onVerticalPaddingChanged(handler: () => void): ContainerBuilder;
  onVisibleChanged(handler: () => void): ContainerBuilder;
  onVisibleChildrenChanged(handler: () => void): ContainerBuilder;
  onVisualFocusChanged(handler: () => void): ContainerBuilder;
  onWheelEnabledChanged(handler: () => void): ContainerBuilder;
  onWidthChanged(handler: () => void): ContainerBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ContainerBuilder;
  onXChanged(handler: () => void): ContainerBuilder;
  onYChanged(handler: () => void): ContainerBuilder;
  onZChanged(handler: () => void): ContainerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ContainerBuilder;
  layer(setup: (b: LayerBuilder) => void): ContainerBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ContainerBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ContainerBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ContainerBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ContainerBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ContainerBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ContainerBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ContainerBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ContainerBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ContainerBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ContainerBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ContainerBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ContainerBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ContainerBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ContainerBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ContainerBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ContainerBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ContainerBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ContainerBuilder;
}

export function Container(): ContainerBuilder {
  return new DslBuilderImpl('Container') as unknown as ContainerBuilder;
}

export namespace Container {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Container',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Container',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Container', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Container', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Container', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Container', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Container',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Container',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Container',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Container', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Container',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Container', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Container', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Container', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Container', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Container', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Container', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Container', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Container', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Container', 'TransformOrigin', 'BottomRight');
  }
}
