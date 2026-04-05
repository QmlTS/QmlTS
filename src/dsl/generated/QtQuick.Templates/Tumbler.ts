// AUTO-GENERATED — DO NOT EDIT
// Type: Tumbler
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
export interface TumblerBuilder {
  id(id: string): TumblerBuilder;
  child(obj: QmlObjectBuilder): TumblerBuilder;

  activeFocusOnTab(value: boolean): TumblerBuilder;
  activeFocusOnTabBind(expr: string): TumblerBuilder;
  antialiasing(value: boolean): TumblerBuilder;
  antialiasingBind(expr: string): TumblerBuilder;
  background(value: ItemBuilder): TumblerBuilder;
  backgroundBind(expr: string): TumblerBuilder;
  baselineOffset(value: number): TumblerBuilder;
  baselineOffsetBind(expr: string): TumblerBuilder;
  bottomInset(value: number): TumblerBuilder;
  bottomInsetBind(expr: string): TumblerBuilder;
  bottomPadding(value: number): TumblerBuilder;
  bottomPaddingBind(expr: string): TumblerBuilder;
  clip(value: boolean): TumblerBuilder;
  clipBind(expr: string): TumblerBuilder;
  containmentMask(value: QtObjectBuilder): TumblerBuilder;
  containmentMaskBind(expr: string): TumblerBuilder;
  contentItem(value: ItemBuilder): TumblerBuilder;
  contentItemBind(expr: string): TumblerBuilder;
  currentIndex(value: number): TumblerBuilder;
  currentIndexBind(expr: string): TumblerBuilder;
  delegate(value: QmlComponent): TumblerBuilder;
  delegateBind(expr: string): TumblerBuilder;
  enabled(value: boolean): TumblerBuilder;
  enabledBind(expr: string): TumblerBuilder;
  flickDeceleration(value: number): TumblerBuilder;
  flickDecelerationBind(expr: string): TumblerBuilder;
  focus(value: boolean): TumblerBuilder;
  focusBind(expr: string): TumblerBuilder;
  focusPolicy(value: QmlValue): TumblerBuilder;
  focusPolicyBind(expr: string): TumblerBuilder;
  focusReason(value: QmlValue): TumblerBuilder;
  focusReasonBind(expr: string): TumblerBuilder;
  font(value: QmlFont): TumblerBuilder;
  fontBind(expr: string): TumblerBuilder;
  height(value: number): TumblerBuilder;
  heightBind(expr: string): TumblerBuilder;
  horizontalPadding(value: number): TumblerBuilder;
  horizontalPaddingBind(expr: string): TumblerBuilder;
  hoverEnabled(value: boolean): TumblerBuilder;
  hoverEnabledBind(expr: string): TumblerBuilder;
  implicitHeight(value: number): TumblerBuilder;
  implicitHeightBind(expr: string): TumblerBuilder;
  implicitWidth(value: number): TumblerBuilder;
  implicitWidthBind(expr: string): TumblerBuilder;
  leftInset(value: number): TumblerBuilder;
  leftInsetBind(expr: string): TumblerBuilder;
  leftPadding(value: number): TumblerBuilder;
  leftPaddingBind(expr: string): TumblerBuilder;
  locale(value: QmlValue): TumblerBuilder;
  localeBind(expr: string): TumblerBuilder;
  model(value: QmlValue): TumblerBuilder;
  modelBind(expr: string): TumblerBuilder;
  objectName(value: string): TumblerBuilder;
  objectNameBind(expr: string): TumblerBuilder;
  opacity(value: number): TumblerBuilder;
  opacityBind(expr: string): TumblerBuilder;
  padding(value: number): TumblerBuilder;
  paddingBind(expr: string): TumblerBuilder;
  palette(value: PaletteBuilder): TumblerBuilder;
  paletteBind(expr: string): TumblerBuilder;
  parent(value: ItemBuilder): TumblerBuilder;
  parentBind(expr: string): TumblerBuilder;
  rightInset(value: number): TumblerBuilder;
  rightInsetBind(expr: string): TumblerBuilder;
  rightPadding(value: number): TumblerBuilder;
  rightPaddingBind(expr: string): TumblerBuilder;
  rotation(value: number): TumblerBuilder;
  rotationBind(expr: string): TumblerBuilder;
  scale(value: number): TumblerBuilder;
  scaleBind(expr: string): TumblerBuilder;
  smooth(value: boolean): TumblerBuilder;
  smoothBind(expr: string): TumblerBuilder;
  spacing(value: number): TumblerBuilder;
  spacingBind(expr: string): TumblerBuilder;
  state(value: string): TumblerBuilder;
  stateBind(expr: string): TumblerBuilder;
  topInset(value: number): TumblerBuilder;
  topInsetBind(expr: string): TumblerBuilder;
  topPadding(value: number): TumblerBuilder;
  topPaddingBind(expr: string): TumblerBuilder;
  transformOrigin(value: QmlValue): TumblerBuilder;
  transformOriginBind(expr: string): TumblerBuilder;
  verticalPadding(value: number): TumblerBuilder;
  verticalPaddingBind(expr: string): TumblerBuilder;
  visible(value: boolean): TumblerBuilder;
  visibleBind(expr: string): TumblerBuilder;
  visibleItemCount(value: number): TumblerBuilder;
  visibleItemCountBind(expr: string): TumblerBuilder;
  wheelEnabled(value: boolean): TumblerBuilder;
  wheelEnabledBind(expr: string): TumblerBuilder;
  width(value: number): TumblerBuilder;
  widthBind(expr: string): TumblerBuilder;
  wrap(value: boolean): TumblerBuilder;
  wrapBind(expr: string): TumblerBuilder;
  x(value: number): TumblerBuilder;
  xBind(expr: string): TumblerBuilder;
  y(value: number): TumblerBuilder;
  yBind(expr: string): TumblerBuilder;
  z(value: number): TumblerBuilder;
  zBind(expr: string): TumblerBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TumblerBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TumblerBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TumblerBuilder;
  onAvailableHeightChanged(handler: () => void): TumblerBuilder;
  onAvailableWidthChanged(handler: () => void): TumblerBuilder;
  onBackgroundChanged(handler: () => void): TumblerBuilder;
  onBaselineOffsetChanged(handler: () => void): TumblerBuilder;
  onBottomInsetChanged(handler: () => void): TumblerBuilder;
  onBottomPaddingChanged(handler: () => void): TumblerBuilder;
  onChildrenChanged(handler: () => void): TumblerBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TumblerBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TumblerBuilder;
  onContainmentMaskChanged(handler: () => void): TumblerBuilder;
  onContentItemChanged(handler: () => void): TumblerBuilder;
  onCountChanged(handler: () => void): TumblerBuilder;
  onCurrentIndexChanged(handler: () => void): TumblerBuilder;
  onCurrentItemChanged(handler: () => void): TumblerBuilder;
  onDelegateChanged(handler: () => void): TumblerBuilder;
  onEnabledChanged(handler: () => void): TumblerBuilder;
  onFlickDecelerationChanged(handler: () => void): TumblerBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TumblerBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TumblerBuilder;
  onFocusReasonChanged(handler: () => void): TumblerBuilder;
  onFontChanged(handler: () => void): TumblerBuilder;
  onHeightChanged(handler: () => void): TumblerBuilder;
  onHorizontalPaddingChanged(handler: () => void): TumblerBuilder;
  onHoverEnabledChanged(handler: () => void): TumblerBuilder;
  onHoveredChanged(handler: () => void): TumblerBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): TumblerBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): TumblerBuilder;
  onImplicitContentHeightChanged(handler: () => void): TumblerBuilder;
  onImplicitContentWidthChanged(handler: () => void): TumblerBuilder;
  onImplicitHeightChanged(handler: () => void): TumblerBuilder;
  onImplicitWidthChanged(handler: () => void): TumblerBuilder;
  onLeftInsetChanged(handler: () => void): TumblerBuilder;
  onLeftPaddingChanged(handler: () => void): TumblerBuilder;
  onLocaleChanged(handler: () => void): TumblerBuilder;
  onMirroredChanged(handler: () => void): TumblerBuilder;
  onModelChanged(handler: () => void): TumblerBuilder;
  onMovingChanged(handler: () => void): TumblerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TumblerBuilder;
  onOpacityChanged(handler: () => void): TumblerBuilder;
  onPaddingChanged(handler: () => void): TumblerBuilder;
  onPaletteChanged(handler: () => void): TumblerBuilder;
  onPaletteCreated(handler: () => void): TumblerBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TumblerBuilder;
  onRightInsetChanged(handler: () => void): TumblerBuilder;
  onRightPaddingChanged(handler: () => void): TumblerBuilder;
  onRotationChanged(handler: () => void): TumblerBuilder;
  onScaleChanged(handler: () => void): TumblerBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TumblerBuilder;
  onSpacingChanged(handler: () => void): TumblerBuilder;
  onStateChanged(handler: (arg0: string) => void): TumblerBuilder;
  onTopInsetChanged(handler: () => void): TumblerBuilder;
  onTopPaddingChanged(handler: () => void): TumblerBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TumblerBuilder;
  onVerticalPaddingChanged(handler: () => void): TumblerBuilder;
  onVisibleChanged(handler: () => void): TumblerBuilder;
  onVisibleChildrenChanged(handler: () => void): TumblerBuilder;
  onVisibleItemCountChanged(handler: () => void): TumblerBuilder;
  onVisualFocusChanged(handler: () => void): TumblerBuilder;
  onWheelEnabledChanged(handler: () => void): TumblerBuilder;
  onWidthChanged(handler: () => void): TumblerBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TumblerBuilder;
  onWrapChanged(handler: () => void): TumblerBuilder;
  onXChanged(handler: () => void): TumblerBuilder;
  onYChanged(handler: () => void): TumblerBuilder;
  onZChanged(handler: () => void): TumblerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TumblerBuilder;
  layer(setup: (b: LayerBuilder) => void): TumblerBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TumblerBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TumblerBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TumblerBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TumblerBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TumblerBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TumblerBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TumblerBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TumblerBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TumblerBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TumblerBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TumblerBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TumblerBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TumblerBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TumblerBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TumblerBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TumblerBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TumblerBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TumblerBuilder;
}

export function Tumbler(): TumblerBuilder {
  return new DslBuilderImpl('Tumbler') as unknown as TumblerBuilder;
}

export namespace Tumbler {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Tumbler',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Tumbler',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Tumbler', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Tumbler', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Tumbler', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Tumbler', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Tumbler', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Tumbler', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Tumbler',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const Beginning = createEnumToken('Tumbler', 'PositionMode', 'Beginning');
    export const Center = createEnumToken('Tumbler', 'PositionMode', 'Center');
    export const End = createEnumToken('Tumbler', 'PositionMode', 'End');
    export const Visible = createEnumToken('Tumbler', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('Tumbler', 'PositionMode', 'Contain');
    export const SnapPosition = createEnumToken('Tumbler', 'PositionMode', 'SnapPosition');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Tumbler', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Tumbler', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Tumbler', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Tumbler', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Tumbler', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Tumbler', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Tumbler', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Tumbler', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Tumbler', 'TransformOrigin', 'BottomRight');
  }
}
