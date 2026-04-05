// AUTO-GENERATED — DO NOT EDIT
// Type: Frame
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
export interface FrameBuilder {
  id(id: string): FrameBuilder;
  child(obj: QmlObjectBuilder): FrameBuilder;

  activeFocusOnTab(value: boolean): FrameBuilder;
  activeFocusOnTabBind(expr: string): FrameBuilder;
  antialiasing(value: boolean): FrameBuilder;
  antialiasingBind(expr: string): FrameBuilder;
  background(value: ItemBuilder): FrameBuilder;
  backgroundBind(expr: string): FrameBuilder;
  baselineOffset(value: number): FrameBuilder;
  baselineOffsetBind(expr: string): FrameBuilder;
  bottomInset(value: number): FrameBuilder;
  bottomInsetBind(expr: string): FrameBuilder;
  bottomPadding(value: number): FrameBuilder;
  bottomPaddingBind(expr: string): FrameBuilder;
  clip(value: boolean): FrameBuilder;
  clipBind(expr: string): FrameBuilder;
  containmentMask(value: QtObjectBuilder): FrameBuilder;
  containmentMaskBind(expr: string): FrameBuilder;
  contentHeight(value: number): FrameBuilder;
  contentHeightBind(expr: string): FrameBuilder;
  contentItem(value: ItemBuilder): FrameBuilder;
  contentItemBind(expr: string): FrameBuilder;
  contentWidth(value: number): FrameBuilder;
  contentWidthBind(expr: string): FrameBuilder;
  enabled(value: boolean): FrameBuilder;
  enabledBind(expr: string): FrameBuilder;
  focus(value: boolean): FrameBuilder;
  focusBind(expr: string): FrameBuilder;
  focusPolicy(value: QmlValue): FrameBuilder;
  focusPolicyBind(expr: string): FrameBuilder;
  focusReason(value: QmlValue): FrameBuilder;
  focusReasonBind(expr: string): FrameBuilder;
  font(value: QmlFont): FrameBuilder;
  fontBind(expr: string): FrameBuilder;
  height(value: number): FrameBuilder;
  heightBind(expr: string): FrameBuilder;
  horizontalPadding(value: number): FrameBuilder;
  horizontalPaddingBind(expr: string): FrameBuilder;
  hoverEnabled(value: boolean): FrameBuilder;
  hoverEnabledBind(expr: string): FrameBuilder;
  implicitHeight(value: number): FrameBuilder;
  implicitHeightBind(expr: string): FrameBuilder;
  implicitWidth(value: number): FrameBuilder;
  implicitWidthBind(expr: string): FrameBuilder;
  leftInset(value: number): FrameBuilder;
  leftInsetBind(expr: string): FrameBuilder;
  leftPadding(value: number): FrameBuilder;
  leftPaddingBind(expr: string): FrameBuilder;
  locale(value: QmlValue): FrameBuilder;
  localeBind(expr: string): FrameBuilder;
  objectName(value: string): FrameBuilder;
  objectNameBind(expr: string): FrameBuilder;
  opacity(value: number): FrameBuilder;
  opacityBind(expr: string): FrameBuilder;
  padding(value: number): FrameBuilder;
  paddingBind(expr: string): FrameBuilder;
  palette(value: PaletteBuilder): FrameBuilder;
  paletteBind(expr: string): FrameBuilder;
  parent(value: ItemBuilder): FrameBuilder;
  parentBind(expr: string): FrameBuilder;
  rightInset(value: number): FrameBuilder;
  rightInsetBind(expr: string): FrameBuilder;
  rightPadding(value: number): FrameBuilder;
  rightPaddingBind(expr: string): FrameBuilder;
  rotation(value: number): FrameBuilder;
  rotationBind(expr: string): FrameBuilder;
  scale(value: number): FrameBuilder;
  scaleBind(expr: string): FrameBuilder;
  smooth(value: boolean): FrameBuilder;
  smoothBind(expr: string): FrameBuilder;
  spacing(value: number): FrameBuilder;
  spacingBind(expr: string): FrameBuilder;
  state(value: string): FrameBuilder;
  stateBind(expr: string): FrameBuilder;
  topInset(value: number): FrameBuilder;
  topInsetBind(expr: string): FrameBuilder;
  topPadding(value: number): FrameBuilder;
  topPaddingBind(expr: string): FrameBuilder;
  transformOrigin(value: QmlValue): FrameBuilder;
  transformOriginBind(expr: string): FrameBuilder;
  verticalPadding(value: number): FrameBuilder;
  verticalPaddingBind(expr: string): FrameBuilder;
  visible(value: boolean): FrameBuilder;
  visibleBind(expr: string): FrameBuilder;
  wheelEnabled(value: boolean): FrameBuilder;
  wheelEnabledBind(expr: string): FrameBuilder;
  width(value: number): FrameBuilder;
  widthBind(expr: string): FrameBuilder;
  x(value: number): FrameBuilder;
  xBind(expr: string): FrameBuilder;
  y(value: number): FrameBuilder;
  yBind(expr: string): FrameBuilder;
  z(value: number): FrameBuilder;
  zBind(expr: string): FrameBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): FrameBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): FrameBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): FrameBuilder;
  onAvailableHeightChanged(handler: () => void): FrameBuilder;
  onAvailableWidthChanged(handler: () => void): FrameBuilder;
  onBackgroundChanged(handler: () => void): FrameBuilder;
  onBaselineOffsetChanged(handler: () => void): FrameBuilder;
  onBottomInsetChanged(handler: () => void): FrameBuilder;
  onBottomPaddingChanged(handler: () => void): FrameBuilder;
  onChildrenChanged(handler: () => void): FrameBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): FrameBuilder;
  onClipChanged(handler: (arg0: boolean) => void): FrameBuilder;
  onContainmentMaskChanged(handler: () => void): FrameBuilder;
  onContentChildrenChanged(handler: () => void): FrameBuilder;
  onContentHeightChanged(handler: () => void): FrameBuilder;
  onContentItemChanged(handler: () => void): FrameBuilder;
  onContentWidthChanged(handler: () => void): FrameBuilder;
  onEnabledChanged(handler: () => void): FrameBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): FrameBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): FrameBuilder;
  onFocusReasonChanged(handler: () => void): FrameBuilder;
  onFontChanged(handler: () => void): FrameBuilder;
  onHeightChanged(handler: () => void): FrameBuilder;
  onHorizontalPaddingChanged(handler: () => void): FrameBuilder;
  onHoverEnabledChanged(handler: () => void): FrameBuilder;
  onHoveredChanged(handler: () => void): FrameBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): FrameBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): FrameBuilder;
  onImplicitContentHeightChanged(handler: () => void): FrameBuilder;
  onImplicitContentWidthChanged(handler: () => void): FrameBuilder;
  onImplicitHeightChanged(handler: () => void): FrameBuilder;
  onImplicitWidthChanged(handler: () => void): FrameBuilder;
  onLeftInsetChanged(handler: () => void): FrameBuilder;
  onLeftPaddingChanged(handler: () => void): FrameBuilder;
  onLocaleChanged(handler: () => void): FrameBuilder;
  onMirroredChanged(handler: () => void): FrameBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FrameBuilder;
  onOpacityChanged(handler: () => void): FrameBuilder;
  onPaddingChanged(handler: () => void): FrameBuilder;
  onPaletteChanged(handler: () => void): FrameBuilder;
  onPaletteCreated(handler: () => void): FrameBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): FrameBuilder;
  onRightInsetChanged(handler: () => void): FrameBuilder;
  onRightPaddingChanged(handler: () => void): FrameBuilder;
  onRotationChanged(handler: () => void): FrameBuilder;
  onScaleChanged(handler: () => void): FrameBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): FrameBuilder;
  onSpacingChanged(handler: () => void): FrameBuilder;
  onStateChanged(handler: (arg0: string) => void): FrameBuilder;
  onTopInsetChanged(handler: () => void): FrameBuilder;
  onTopPaddingChanged(handler: () => void): FrameBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): FrameBuilder;
  onVerticalPaddingChanged(handler: () => void): FrameBuilder;
  onVisibleChanged(handler: () => void): FrameBuilder;
  onVisibleChildrenChanged(handler: () => void): FrameBuilder;
  onVisualFocusChanged(handler: () => void): FrameBuilder;
  onWheelEnabledChanged(handler: () => void): FrameBuilder;
  onWidthChanged(handler: () => void): FrameBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): FrameBuilder;
  onXChanged(handler: () => void): FrameBuilder;
  onYChanged(handler: () => void): FrameBuilder;
  onZChanged(handler: () => void): FrameBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FrameBuilder;
  layer(setup: (b: LayerBuilder) => void): FrameBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): FrameBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): FrameBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): FrameBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): FrameBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): FrameBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): FrameBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): FrameBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): FrameBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): FrameBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): FrameBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): FrameBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): FrameBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): FrameBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): FrameBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): FrameBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): FrameBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): FrameBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): FrameBuilder;
}

export function Frame(): FrameBuilder {
  return new DslBuilderImpl('Frame') as unknown as FrameBuilder;
}

export namespace Frame {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Frame',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Frame',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Frame', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Frame', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Frame', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Frame', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Frame', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Frame', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Frame', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Frame', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Frame', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Frame', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Frame', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Frame', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Frame', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Frame', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Frame', 'TransformOrigin', 'BottomRight');
  }
}
