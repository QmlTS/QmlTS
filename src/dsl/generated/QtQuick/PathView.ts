// AUTO-GENERATED — DO NOT EDIT
// Type: PathView
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PaletteBuilder } from './Palette.js';
import type { PathBuilder } from './Path.js';
import type { AnchorsBuilder } from './QQuickAnchors.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { LayerBuilder } from './QQuickItemLayer.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface PathViewBuilder {
  id(id: string): PathViewBuilder;
  child(obj: QmlObjectBuilder): PathViewBuilder;

  activeFocusOnTab(value: boolean): PathViewBuilder;
  activeFocusOnTabBind(expr: string): PathViewBuilder;
  antialiasing(value: boolean): PathViewBuilder;
  antialiasingBind(expr: string): PathViewBuilder;
  baselineOffset(value: number): PathViewBuilder;
  baselineOffsetBind(expr: string): PathViewBuilder;
  cacheItemCount(value: number): PathViewBuilder;
  cacheItemCountBind(expr: string): PathViewBuilder;
  clip(value: boolean): PathViewBuilder;
  clipBind(expr: string): PathViewBuilder;
  containmentMask(value: QtObjectBuilder): PathViewBuilder;
  containmentMaskBind(expr: string): PathViewBuilder;
  currentIndex(value: number): PathViewBuilder;
  currentIndexBind(expr: string): PathViewBuilder;
  delegate(value: QmlComponent): PathViewBuilder;
  delegateBind(expr: string): PathViewBuilder;
  dragMargin(value: number): PathViewBuilder;
  dragMarginBind(expr: string): PathViewBuilder;
  enabled(value: boolean): PathViewBuilder;
  enabledBind(expr: string): PathViewBuilder;
  flickDeceleration(value: number): PathViewBuilder;
  flickDecelerationBind(expr: string): PathViewBuilder;
  focus(value: boolean): PathViewBuilder;
  focusBind(expr: string): PathViewBuilder;
  focusPolicy(value: QmlValue): PathViewBuilder;
  focusPolicyBind(expr: string): PathViewBuilder;
  height(value: number): PathViewBuilder;
  heightBind(expr: string): PathViewBuilder;
  highlight(value: QmlComponent): PathViewBuilder;
  highlightBind(expr: string): PathViewBuilder;
  highlightMoveDuration(value: number): PathViewBuilder;
  highlightMoveDurationBind(expr: string): PathViewBuilder;
  highlightRangeMode(value: QmlValue): PathViewBuilder;
  highlightRangeModeBind(expr: string): PathViewBuilder;
  implicitHeight(value: number): PathViewBuilder;
  implicitHeightBind(expr: string): PathViewBuilder;
  implicitWidth(value: number): PathViewBuilder;
  implicitWidthBind(expr: string): PathViewBuilder;
  interactive(value: boolean): PathViewBuilder;
  interactiveBind(expr: string): PathViewBuilder;
  maximumFlickVelocity(value: number): PathViewBuilder;
  maximumFlickVelocityBind(expr: string): PathViewBuilder;
  model(value: QmlValue): PathViewBuilder;
  modelBind(expr: string): PathViewBuilder;
  movementDirection(value: QmlValue): PathViewBuilder;
  movementDirectionBind(expr: string): PathViewBuilder;
  objectName(value: string): PathViewBuilder;
  objectNameBind(expr: string): PathViewBuilder;
  offset(value: number): PathViewBuilder;
  offsetBind(expr: string): PathViewBuilder;
  opacity(value: number): PathViewBuilder;
  opacityBind(expr: string): PathViewBuilder;
  palette(value: PaletteBuilder): PathViewBuilder;
  paletteBind(expr: string): PathViewBuilder;
  parent(value: ItemBuilder): PathViewBuilder;
  parentBind(expr: string): PathViewBuilder;
  path(value: PathBuilder): PathViewBuilder;
  pathBind(expr: string): PathViewBuilder;
  pathItemCount(value: number): PathViewBuilder;
  pathItemCountBind(expr: string): PathViewBuilder;
  preferredHighlightBegin(value: number): PathViewBuilder;
  preferredHighlightBeginBind(expr: string): PathViewBuilder;
  preferredHighlightEnd(value: number): PathViewBuilder;
  preferredHighlightEndBind(expr: string): PathViewBuilder;
  rotation(value: number): PathViewBuilder;
  rotationBind(expr: string): PathViewBuilder;
  scale(value: number): PathViewBuilder;
  scaleBind(expr: string): PathViewBuilder;
  smooth(value: boolean): PathViewBuilder;
  smoothBind(expr: string): PathViewBuilder;
  snapMode(value: QmlValue): PathViewBuilder;
  snapModeBind(expr: string): PathViewBuilder;
  state(value: string): PathViewBuilder;
  stateBind(expr: string): PathViewBuilder;
  transformOrigin(value: QmlValue): PathViewBuilder;
  transformOriginBind(expr: string): PathViewBuilder;
  visible(value: boolean): PathViewBuilder;
  visibleBind(expr: string): PathViewBuilder;
  width(value: number): PathViewBuilder;
  widthBind(expr: string): PathViewBuilder;
  x(value: number): PathViewBuilder;
  xBind(expr: string): PathViewBuilder;
  y(value: number): PathViewBuilder;
  yBind(expr: string): PathViewBuilder;
  z(value: number): PathViewBuilder;
  zBind(expr: string): PathViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): PathViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): PathViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): PathViewBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): PathViewBuilder;
  onCacheItemCountChanged(handler: () => void): PathViewBuilder;
  onChildrenChanged(handler: () => void): PathViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): PathViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): PathViewBuilder;
  onContainmentMaskChanged(handler: () => void): PathViewBuilder;
  onCountChanged(handler: () => void): PathViewBuilder;
  onCurrentIndexChanged(handler: () => void): PathViewBuilder;
  onCurrentItemChanged(handler: () => void): PathViewBuilder;
  onDelegateChanged(handler: () => void): PathViewBuilder;
  onDragEnded(handler: () => void): PathViewBuilder;
  onDragMarginChanged(handler: () => void): PathViewBuilder;
  onDragStarted(handler: () => void): PathViewBuilder;
  onDraggingChanged(handler: () => void): PathViewBuilder;
  onEnabledChanged(handler: () => void): PathViewBuilder;
  onFlickDecelerationChanged(handler: () => void): PathViewBuilder;
  onFlickEnded(handler: () => void): PathViewBuilder;
  onFlickStarted(handler: () => void): PathViewBuilder;
  onFlickingChanged(handler: () => void): PathViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): PathViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): PathViewBuilder;
  onHeightChanged(handler: () => void): PathViewBuilder;
  onHighlightChanged(handler: () => void): PathViewBuilder;
  onHighlightItemChanged(handler: () => void): PathViewBuilder;
  onHighlightMoveDurationChanged(handler: () => void): PathViewBuilder;
  onHighlightRangeModeChanged(handler: () => void): PathViewBuilder;
  onImplicitHeightChanged(handler: () => void): PathViewBuilder;
  onImplicitWidthChanged(handler: () => void): PathViewBuilder;
  onInteractiveChanged(handler: () => void): PathViewBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): PathViewBuilder;
  onModelChanged(handler: () => void): PathViewBuilder;
  onMovementDirectionChanged(handler: () => void): PathViewBuilder;
  onMovementEnded(handler: () => void): PathViewBuilder;
  onMovementStarted(handler: () => void): PathViewBuilder;
  onMovingChanged(handler: () => void): PathViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathViewBuilder;
  onOffsetChanged(handler: () => void): PathViewBuilder;
  onOpacityChanged(handler: () => void): PathViewBuilder;
  onPaletteChanged(handler: () => void): PathViewBuilder;
  onPaletteCreated(handler: () => void): PathViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): PathViewBuilder;
  onPathChanged(handler: () => void): PathViewBuilder;
  onPathItemCountChanged(handler: () => void): PathViewBuilder;
  onPreferredHighlightBeginChanged(handler: () => void): PathViewBuilder;
  onPreferredHighlightEndChanged(handler: () => void): PathViewBuilder;
  onRotationChanged(handler: () => void): PathViewBuilder;
  onScaleChanged(handler: () => void): PathViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): PathViewBuilder;
  onSnapModeChanged(handler: () => void): PathViewBuilder;
  onSnapPositionChanged(handler: () => void): PathViewBuilder;
  onStateChanged(handler: (arg0: string) => void): PathViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): PathViewBuilder;
  onVisibleChanged(handler: () => void): PathViewBuilder;
  onVisibleChildrenChanged(handler: () => void): PathViewBuilder;
  onWidthChanged(handler: () => void): PathViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): PathViewBuilder;
  onXChanged(handler: () => void): PathViewBuilder;
  onYChanged(handler: () => void): PathViewBuilder;
  onZChanged(handler: () => void): PathViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PathViewBuilder;
  layer(setup: (b: LayerBuilder) => void): PathViewBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathViewBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathViewBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathViewBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathViewBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathViewBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathViewBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathViewBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathViewBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathViewBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathViewBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathViewBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathViewBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathViewBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathViewBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathViewBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathViewBuilder;
}

export function PathView(): PathViewBuilder {
  return new DslBuilderImpl('PathView') as unknown as PathViewBuilder;
}

export namespace PathView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PathView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PathView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PathView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PathView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PathView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PathView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PathView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HighlightRangeMode {
    export const NoHighlightRange = createEnumToken(
      'PathView',
      'HighlightRangeMode',
      'NoHighlightRange',
    );
    export const ApplyRange = createEnumToken('PathView', 'HighlightRangeMode', 'ApplyRange');
    export const StrictlyEnforceRange = createEnumToken(
      'PathView',
      'HighlightRangeMode',
      'StrictlyEnforceRange',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('PathView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PathView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace MovementDirection {
    export const Shortest = createEnumToken('PathView', 'MovementDirection', 'Shortest');
    export const Negative = createEnumToken('PathView', 'MovementDirection', 'Negative');
    export const Positive = createEnumToken('PathView', 'MovementDirection', 'Positive');
  }
  export namespace PositionMode {
    export const Beginning = createEnumToken('PathView', 'PositionMode', 'Beginning');
    export const Center = createEnumToken('PathView', 'PositionMode', 'Center');
    export const End = createEnumToken('PathView', 'PositionMode', 'End');
    export const Contain = createEnumToken('PathView', 'PositionMode', 'Contain');
    export const SnapPosition = createEnumToken('PathView', 'PositionMode', 'SnapPosition');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('PathView', 'SnapMode', 'NoSnap');
    export const SnapToItem = createEnumToken('PathView', 'SnapMode', 'SnapToItem');
    export const SnapOneItem = createEnumToken('PathView', 'SnapMode', 'SnapOneItem');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PathView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PathView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PathView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PathView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PathView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PathView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PathView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PathView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PathView', 'TransformOrigin', 'BottomRight');
  }
}
