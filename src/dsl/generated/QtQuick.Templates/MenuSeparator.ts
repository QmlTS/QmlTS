// AUTO-GENERATED — DO NOT EDIT
// Type: MenuSeparator
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
export interface MenuSeparatorBuilder {
  id(id: string): MenuSeparatorBuilder;
  child(obj: QmlObjectBuilder): MenuSeparatorBuilder;

  activeFocusOnTab(value: boolean): MenuSeparatorBuilder;
  activeFocusOnTabBind(expr: string): MenuSeparatorBuilder;
  antialiasing(value: boolean): MenuSeparatorBuilder;
  antialiasingBind(expr: string): MenuSeparatorBuilder;
  background(value: ItemBuilder): MenuSeparatorBuilder;
  backgroundBind(expr: string): MenuSeparatorBuilder;
  baselineOffset(value: number): MenuSeparatorBuilder;
  baselineOffsetBind(expr: string): MenuSeparatorBuilder;
  bottomInset(value: number): MenuSeparatorBuilder;
  bottomInsetBind(expr: string): MenuSeparatorBuilder;
  bottomPadding(value: number): MenuSeparatorBuilder;
  bottomPaddingBind(expr: string): MenuSeparatorBuilder;
  clip(value: boolean): MenuSeparatorBuilder;
  clipBind(expr: string): MenuSeparatorBuilder;
  containmentMask(value: QtObjectBuilder): MenuSeparatorBuilder;
  containmentMaskBind(expr: string): MenuSeparatorBuilder;
  contentItem(value: ItemBuilder): MenuSeparatorBuilder;
  contentItemBind(expr: string): MenuSeparatorBuilder;
  enabled(value: boolean): MenuSeparatorBuilder;
  enabledBind(expr: string): MenuSeparatorBuilder;
  focus(value: boolean): MenuSeparatorBuilder;
  focusBind(expr: string): MenuSeparatorBuilder;
  focusPolicy(value: QmlValue): MenuSeparatorBuilder;
  focusPolicyBind(expr: string): MenuSeparatorBuilder;
  focusReason(value: QmlValue): MenuSeparatorBuilder;
  focusReasonBind(expr: string): MenuSeparatorBuilder;
  font(value: QmlFont): MenuSeparatorBuilder;
  fontBind(expr: string): MenuSeparatorBuilder;
  height(value: number): MenuSeparatorBuilder;
  heightBind(expr: string): MenuSeparatorBuilder;
  horizontalPadding(value: number): MenuSeparatorBuilder;
  horizontalPaddingBind(expr: string): MenuSeparatorBuilder;
  hoverEnabled(value: boolean): MenuSeparatorBuilder;
  hoverEnabledBind(expr: string): MenuSeparatorBuilder;
  implicitHeight(value: number): MenuSeparatorBuilder;
  implicitHeightBind(expr: string): MenuSeparatorBuilder;
  implicitWidth(value: number): MenuSeparatorBuilder;
  implicitWidthBind(expr: string): MenuSeparatorBuilder;
  leftInset(value: number): MenuSeparatorBuilder;
  leftInsetBind(expr: string): MenuSeparatorBuilder;
  leftPadding(value: number): MenuSeparatorBuilder;
  leftPaddingBind(expr: string): MenuSeparatorBuilder;
  locale(value: QmlValue): MenuSeparatorBuilder;
  localeBind(expr: string): MenuSeparatorBuilder;
  objectName(value: string): MenuSeparatorBuilder;
  objectNameBind(expr: string): MenuSeparatorBuilder;
  opacity(value: number): MenuSeparatorBuilder;
  opacityBind(expr: string): MenuSeparatorBuilder;
  padding(value: number): MenuSeparatorBuilder;
  paddingBind(expr: string): MenuSeparatorBuilder;
  palette(value: PaletteBuilder): MenuSeparatorBuilder;
  paletteBind(expr: string): MenuSeparatorBuilder;
  parent(value: ItemBuilder): MenuSeparatorBuilder;
  parentBind(expr: string): MenuSeparatorBuilder;
  rightInset(value: number): MenuSeparatorBuilder;
  rightInsetBind(expr: string): MenuSeparatorBuilder;
  rightPadding(value: number): MenuSeparatorBuilder;
  rightPaddingBind(expr: string): MenuSeparatorBuilder;
  rotation(value: number): MenuSeparatorBuilder;
  rotationBind(expr: string): MenuSeparatorBuilder;
  scale(value: number): MenuSeparatorBuilder;
  scaleBind(expr: string): MenuSeparatorBuilder;
  smooth(value: boolean): MenuSeparatorBuilder;
  smoothBind(expr: string): MenuSeparatorBuilder;
  spacing(value: number): MenuSeparatorBuilder;
  spacingBind(expr: string): MenuSeparatorBuilder;
  state(value: string): MenuSeparatorBuilder;
  stateBind(expr: string): MenuSeparatorBuilder;
  topInset(value: number): MenuSeparatorBuilder;
  topInsetBind(expr: string): MenuSeparatorBuilder;
  topPadding(value: number): MenuSeparatorBuilder;
  topPaddingBind(expr: string): MenuSeparatorBuilder;
  transformOrigin(value: QmlValue): MenuSeparatorBuilder;
  transformOriginBind(expr: string): MenuSeparatorBuilder;
  verticalPadding(value: number): MenuSeparatorBuilder;
  verticalPaddingBind(expr: string): MenuSeparatorBuilder;
  visible(value: boolean): MenuSeparatorBuilder;
  visibleBind(expr: string): MenuSeparatorBuilder;
  wheelEnabled(value: boolean): MenuSeparatorBuilder;
  wheelEnabledBind(expr: string): MenuSeparatorBuilder;
  width(value: number): MenuSeparatorBuilder;
  widthBind(expr: string): MenuSeparatorBuilder;
  x(value: number): MenuSeparatorBuilder;
  xBind(expr: string): MenuSeparatorBuilder;
  y(value: number): MenuSeparatorBuilder;
  yBind(expr: string): MenuSeparatorBuilder;
  z(value: number): MenuSeparatorBuilder;
  zBind(expr: string): MenuSeparatorBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): MenuSeparatorBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): MenuSeparatorBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): MenuSeparatorBuilder;
  onAvailableHeightChanged(handler: () => void): MenuSeparatorBuilder;
  onAvailableWidthChanged(handler: () => void): MenuSeparatorBuilder;
  onBackgroundChanged(handler: () => void): MenuSeparatorBuilder;
  onBaselineOffsetChanged(handler: () => void): MenuSeparatorBuilder;
  onBottomInsetChanged(handler: () => void): MenuSeparatorBuilder;
  onBottomPaddingChanged(handler: () => void): MenuSeparatorBuilder;
  onChildrenChanged(handler: () => void): MenuSeparatorBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): MenuSeparatorBuilder;
  onClipChanged(handler: (arg0: boolean) => void): MenuSeparatorBuilder;
  onContainmentMaskChanged(handler: () => void): MenuSeparatorBuilder;
  onContentItemChanged(handler: () => void): MenuSeparatorBuilder;
  onEnabledChanged(handler: () => void): MenuSeparatorBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): MenuSeparatorBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): MenuSeparatorBuilder;
  onFocusReasonChanged(handler: () => void): MenuSeparatorBuilder;
  onFontChanged(handler: () => void): MenuSeparatorBuilder;
  onHeightChanged(handler: () => void): MenuSeparatorBuilder;
  onHorizontalPaddingChanged(handler: () => void): MenuSeparatorBuilder;
  onHoverEnabledChanged(handler: () => void): MenuSeparatorBuilder;
  onHoveredChanged(handler: () => void): MenuSeparatorBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): MenuSeparatorBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): MenuSeparatorBuilder;
  onImplicitContentHeightChanged(handler: () => void): MenuSeparatorBuilder;
  onImplicitContentWidthChanged(handler: () => void): MenuSeparatorBuilder;
  onImplicitHeightChanged(handler: () => void): MenuSeparatorBuilder;
  onImplicitWidthChanged(handler: () => void): MenuSeparatorBuilder;
  onLeftInsetChanged(handler: () => void): MenuSeparatorBuilder;
  onLeftPaddingChanged(handler: () => void): MenuSeparatorBuilder;
  onLocaleChanged(handler: () => void): MenuSeparatorBuilder;
  onMirroredChanged(handler: () => void): MenuSeparatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MenuSeparatorBuilder;
  onOpacityChanged(handler: () => void): MenuSeparatorBuilder;
  onPaddingChanged(handler: () => void): MenuSeparatorBuilder;
  onPaletteChanged(handler: () => void): MenuSeparatorBuilder;
  onPaletteCreated(handler: () => void): MenuSeparatorBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): MenuSeparatorBuilder;
  onRightInsetChanged(handler: () => void): MenuSeparatorBuilder;
  onRightPaddingChanged(handler: () => void): MenuSeparatorBuilder;
  onRotationChanged(handler: () => void): MenuSeparatorBuilder;
  onScaleChanged(handler: () => void): MenuSeparatorBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): MenuSeparatorBuilder;
  onSpacingChanged(handler: () => void): MenuSeparatorBuilder;
  onStateChanged(handler: (arg0: string) => void): MenuSeparatorBuilder;
  onTopInsetChanged(handler: () => void): MenuSeparatorBuilder;
  onTopPaddingChanged(handler: () => void): MenuSeparatorBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): MenuSeparatorBuilder;
  onVerticalPaddingChanged(handler: () => void): MenuSeparatorBuilder;
  onVisibleChanged(handler: () => void): MenuSeparatorBuilder;
  onVisibleChildrenChanged(handler: () => void): MenuSeparatorBuilder;
  onVisualFocusChanged(handler: () => void): MenuSeparatorBuilder;
  onWheelEnabledChanged(handler: () => void): MenuSeparatorBuilder;
  onWidthChanged(handler: () => void): MenuSeparatorBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): MenuSeparatorBuilder;
  onXChanged(handler: () => void): MenuSeparatorBuilder;
  onYChanged(handler: () => void): MenuSeparatorBuilder;
  onZChanged(handler: () => void): MenuSeparatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MenuSeparatorBuilder;
  layer(setup: (b: LayerBuilder) => void): MenuSeparatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): MenuSeparatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): MenuSeparatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): MenuSeparatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): MenuSeparatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): MenuSeparatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): MenuSeparatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): MenuSeparatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): MenuSeparatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): MenuSeparatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): MenuSeparatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): MenuSeparatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): MenuSeparatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): MenuSeparatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): MenuSeparatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): MenuSeparatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): MenuSeparatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): MenuSeparatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): MenuSeparatorBuilder;
}

export function MenuSeparator(): MenuSeparatorBuilder {
  return new DslBuilderImpl('MenuSeparator') as unknown as MenuSeparatorBuilder;
}

export namespace MenuSeparator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MenuSeparator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MenuSeparator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MenuSeparator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MenuSeparator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MenuSeparator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MenuSeparator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MenuSeparator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MenuSeparator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MenuSeparator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MenuSeparator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MenuSeparator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MenuSeparator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MenuSeparator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MenuSeparator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MenuSeparator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MenuSeparator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MenuSeparator', 'TransformOrigin', 'BottomRight');
  }
}
