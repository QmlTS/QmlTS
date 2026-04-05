// AUTO-GENERATED — DO NOT EDIT
// Type: GridView
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
import type { TransitionBuilder } from './Transition.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface GridViewBuilder {
  id(id: string): GridViewBuilder;
  child(obj: QmlObjectBuilder): GridViewBuilder;

  acceptedButtons(value: QmlValue): GridViewBuilder;
  acceptedButtonsBind(expr: string): GridViewBuilder;
  activeFocusOnTab(value: boolean): GridViewBuilder;
  activeFocusOnTabBind(expr: string): GridViewBuilder;
  add(value: TransitionBuilder): GridViewBuilder;
  addBind(expr: string): GridViewBuilder;
  addDisplaced(value: TransitionBuilder): GridViewBuilder;
  addDisplacedBind(expr: string): GridViewBuilder;
  antialiasing(value: boolean): GridViewBuilder;
  antialiasingBind(expr: string): GridViewBuilder;
  baselineOffset(value: number): GridViewBuilder;
  baselineOffsetBind(expr: string): GridViewBuilder;
  bottomMargin(value: number): GridViewBuilder;
  bottomMarginBind(expr: string): GridViewBuilder;
  boundsBehavior(value: QmlValue): GridViewBuilder;
  boundsBehaviorBind(expr: string): GridViewBuilder;
  boundsMovement(value: QmlValue): GridViewBuilder;
  boundsMovementBind(expr: string): GridViewBuilder;
  cacheBuffer(value: number): GridViewBuilder;
  cacheBufferBind(expr: string): GridViewBuilder;
  cellHeight(value: number): GridViewBuilder;
  cellHeightBind(expr: string): GridViewBuilder;
  cellWidth(value: number): GridViewBuilder;
  cellWidthBind(expr: string): GridViewBuilder;
  clip(value: boolean): GridViewBuilder;
  clipBind(expr: string): GridViewBuilder;
  containmentMask(value: QtObjectBuilder): GridViewBuilder;
  containmentMaskBind(expr: string): GridViewBuilder;
  contentHeight(value: number): GridViewBuilder;
  contentHeightBind(expr: string): GridViewBuilder;
  contentWidth(value: number): GridViewBuilder;
  contentWidthBind(expr: string): GridViewBuilder;
  contentX(value: number): GridViewBuilder;
  contentXBind(expr: string): GridViewBuilder;
  contentY(value: number): GridViewBuilder;
  contentYBind(expr: string): GridViewBuilder;
  currentIndex(value: number): GridViewBuilder;
  currentIndexBind(expr: string): GridViewBuilder;
  delegate(value: QmlComponent): GridViewBuilder;
  delegateBind(expr: string): GridViewBuilder;
  delegateModelAccess(value: QmlValue): GridViewBuilder;
  delegateModelAccessBind(expr: string): GridViewBuilder;
  displaced(value: TransitionBuilder): GridViewBuilder;
  displacedBind(expr: string): GridViewBuilder;
  displayMarginBeginning(value: number): GridViewBuilder;
  displayMarginBeginningBind(expr: string): GridViewBuilder;
  displayMarginEnd(value: number): GridViewBuilder;
  displayMarginEndBind(expr: string): GridViewBuilder;
  enabled(value: boolean): GridViewBuilder;
  enabledBind(expr: string): GridViewBuilder;
  flickDeceleration(value: number): GridViewBuilder;
  flickDecelerationBind(expr: string): GridViewBuilder;
  flickableDirection(value: QmlValue): GridViewBuilder;
  flickableDirectionBind(expr: string): GridViewBuilder;
  flow(value: QmlValue): GridViewBuilder;
  flowBind(expr: string): GridViewBuilder;
  focus(value: boolean): GridViewBuilder;
  focusBind(expr: string): GridViewBuilder;
  focusPolicy(value: QmlValue): GridViewBuilder;
  focusPolicyBind(expr: string): GridViewBuilder;
  footer(value: QmlComponent): GridViewBuilder;
  footerBind(expr: string): GridViewBuilder;
  header(value: QmlComponent): GridViewBuilder;
  headerBind(expr: string): GridViewBuilder;
  height(value: number): GridViewBuilder;
  heightBind(expr: string): GridViewBuilder;
  highlight(value: QmlComponent): GridViewBuilder;
  highlightBind(expr: string): GridViewBuilder;
  highlightFollowsCurrentItem(value: boolean): GridViewBuilder;
  highlightFollowsCurrentItemBind(expr: string): GridViewBuilder;
  highlightMoveDuration(value: number): GridViewBuilder;
  highlightMoveDurationBind(expr: string): GridViewBuilder;
  highlightRangeMode(value: QmlValue): GridViewBuilder;
  highlightRangeModeBind(expr: string): GridViewBuilder;
  implicitHeight(value: number): GridViewBuilder;
  implicitHeightBind(expr: string): GridViewBuilder;
  implicitWidth(value: number): GridViewBuilder;
  implicitWidthBind(expr: string): GridViewBuilder;
  interactive(value: boolean): GridViewBuilder;
  interactiveBind(expr: string): GridViewBuilder;
  keyNavigationEnabled(value: boolean): GridViewBuilder;
  keyNavigationEnabledBind(expr: string): GridViewBuilder;
  keyNavigationWraps(value: boolean): GridViewBuilder;
  keyNavigationWrapsBind(expr: string): GridViewBuilder;
  layoutDirection(value: QmlValue): GridViewBuilder;
  layoutDirectionBind(expr: string): GridViewBuilder;
  leftMargin(value: number): GridViewBuilder;
  leftMarginBind(expr: string): GridViewBuilder;
  maximumFlickVelocity(value: number): GridViewBuilder;
  maximumFlickVelocityBind(expr: string): GridViewBuilder;
  model(value: QmlValue): GridViewBuilder;
  modelBind(expr: string): GridViewBuilder;
  move(value: TransitionBuilder): GridViewBuilder;
  moveBind(expr: string): GridViewBuilder;
  moveDisplaced(value: TransitionBuilder): GridViewBuilder;
  moveDisplacedBind(expr: string): GridViewBuilder;
  objectName(value: string): GridViewBuilder;
  objectNameBind(expr: string): GridViewBuilder;
  opacity(value: number): GridViewBuilder;
  opacityBind(expr: string): GridViewBuilder;
  palette(value: PaletteBuilder): GridViewBuilder;
  paletteBind(expr: string): GridViewBuilder;
  parent(value: ItemBuilder): GridViewBuilder;
  parentBind(expr: string): GridViewBuilder;
  pixelAligned(value: boolean): GridViewBuilder;
  pixelAlignedBind(expr: string): GridViewBuilder;
  populate(value: TransitionBuilder): GridViewBuilder;
  populateBind(expr: string): GridViewBuilder;
  preferredHighlightBegin(value: number): GridViewBuilder;
  preferredHighlightBeginBind(expr: string): GridViewBuilder;
  preferredHighlightEnd(value: number): GridViewBuilder;
  preferredHighlightEndBind(expr: string): GridViewBuilder;
  pressDelay(value: number): GridViewBuilder;
  pressDelayBind(expr: string): GridViewBuilder;
  rebound(value: TransitionBuilder): GridViewBuilder;
  reboundBind(expr: string): GridViewBuilder;
  remove(value: TransitionBuilder): GridViewBuilder;
  removeBind(expr: string): GridViewBuilder;
  removeDisplaced(value: TransitionBuilder): GridViewBuilder;
  removeDisplacedBind(expr: string): GridViewBuilder;
  reuseItems(value: boolean): GridViewBuilder;
  reuseItemsBind(expr: string): GridViewBuilder;
  rightMargin(value: number): GridViewBuilder;
  rightMarginBind(expr: string): GridViewBuilder;
  rotation(value: number): GridViewBuilder;
  rotationBind(expr: string): GridViewBuilder;
  scale(value: number): GridViewBuilder;
  scaleBind(expr: string): GridViewBuilder;
  smooth(value: boolean): GridViewBuilder;
  smoothBind(expr: string): GridViewBuilder;
  snapMode(value: QmlValue): GridViewBuilder;
  snapModeBind(expr: string): GridViewBuilder;
  state(value: string): GridViewBuilder;
  stateBind(expr: string): GridViewBuilder;
  synchronousDrag(value: boolean): GridViewBuilder;
  synchronousDragBind(expr: string): GridViewBuilder;
  topMargin(value: number): GridViewBuilder;
  topMarginBind(expr: string): GridViewBuilder;
  transformOrigin(value: QmlValue): GridViewBuilder;
  transformOriginBind(expr: string): GridViewBuilder;
  verticalLayoutDirection(value: QmlValue): GridViewBuilder;
  verticalLayoutDirectionBind(expr: string): GridViewBuilder;
  visible(value: boolean): GridViewBuilder;
  visibleBind(expr: string): GridViewBuilder;
  width(value: number): GridViewBuilder;
  widthBind(expr: string): GridViewBuilder;
  x(value: number): GridViewBuilder;
  xBind(expr: string): GridViewBuilder;
  y(value: number): GridViewBuilder;
  yBind(expr: string): GridViewBuilder;
  z(value: number): GridViewBuilder;
  zBind(expr: string): GridViewBuilder;
  onAcceptedButtonsChanged(handler: () => void): GridViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): GridViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): GridViewBuilder;
  onAddDisplacedTransitionChanged(handler: () => void): GridViewBuilder;
  onAddTransitionChanged(handler: () => void): GridViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): GridViewBuilder;
  onAtXBeginningChanged(handler: () => void): GridViewBuilder;
  onAtXEndChanged(handler: () => void): GridViewBuilder;
  onAtYBeginningChanged(handler: () => void): GridViewBuilder;
  onAtYEndChanged(handler: () => void): GridViewBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): GridViewBuilder;
  onBottomMarginChanged(handler: () => void): GridViewBuilder;
  onBoundsBehaviorChanged(handler: () => void): GridViewBuilder;
  onBoundsMovementChanged(handler: () => void): GridViewBuilder;
  onCacheBufferChanged(handler: () => void): GridViewBuilder;
  onCellHeightChanged(handler: () => void): GridViewBuilder;
  onCellWidthChanged(handler: () => void): GridViewBuilder;
  onChildrenChanged(handler: () => void): GridViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): GridViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): GridViewBuilder;
  onContainmentMaskChanged(handler: () => void): GridViewBuilder;
  onContentHeightChanged(handler: () => void): GridViewBuilder;
  onContentWidthChanged(handler: () => void): GridViewBuilder;
  onContentXChanged(handler: () => void): GridViewBuilder;
  onContentYChanged(handler: () => void): GridViewBuilder;
  onCountChanged(handler: () => void): GridViewBuilder;
  onCurrentIndexChanged(handler: () => void): GridViewBuilder;
  onCurrentItemChanged(handler: () => void): GridViewBuilder;
  onDelegateChanged(handler: () => void): GridViewBuilder;
  onDelegateModelAccessChanged(handler: () => void): GridViewBuilder;
  onDisplacedTransitionChanged(handler: () => void): GridViewBuilder;
  onDisplayMarginBeginningChanged(handler: () => void): GridViewBuilder;
  onDisplayMarginEndChanged(handler: () => void): GridViewBuilder;
  onDragEnded(handler: () => void): GridViewBuilder;
  onDragStarted(handler: () => void): GridViewBuilder;
  onDraggingChanged(handler: () => void): GridViewBuilder;
  onDraggingHorizontallyChanged(handler: () => void): GridViewBuilder;
  onDraggingVerticallyChanged(handler: () => void): GridViewBuilder;
  onEffectiveLayoutDirectionChanged(handler: () => void): GridViewBuilder;
  onEnabledChanged(handler: () => void): GridViewBuilder;
  onFlickDecelerationChanged(handler: () => void): GridViewBuilder;
  onFlickEnded(handler: () => void): GridViewBuilder;
  onFlickStarted(handler: () => void): GridViewBuilder;
  onFlickableDirectionChanged(handler: () => void): GridViewBuilder;
  onFlickingChanged(handler: () => void): GridViewBuilder;
  onFlickingHorizontallyChanged(handler: () => void): GridViewBuilder;
  onFlickingVerticallyChanged(handler: () => void): GridViewBuilder;
  onFlowChanged(handler: () => void): GridViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): GridViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): GridViewBuilder;
  onFooterChanged(handler: () => void): GridViewBuilder;
  onFooterItemChanged(handler: () => void): GridViewBuilder;
  onHeaderChanged(handler: () => void): GridViewBuilder;
  onHeaderItemChanged(handler: () => void): GridViewBuilder;
  onHeightChanged(handler: () => void): GridViewBuilder;
  onHighlightChanged(handler: () => void): GridViewBuilder;
  onHighlightFollowsCurrentItemChanged(handler: () => void): GridViewBuilder;
  onHighlightItemChanged(handler: () => void): GridViewBuilder;
  onHighlightMoveDurationChanged(handler: () => void): GridViewBuilder;
  onHighlightRangeModeChanged(handler: () => void): GridViewBuilder;
  onHorizontalOvershootChanged(handler: () => void): GridViewBuilder;
  onHorizontalVelocityChanged(handler: () => void): GridViewBuilder;
  onImplicitHeightChanged(handler: () => void): GridViewBuilder;
  onImplicitWidthChanged(handler: () => void): GridViewBuilder;
  onInteractiveChanged(handler: () => void): GridViewBuilder;
  onIsAtBoundaryChanged(handler: () => void): GridViewBuilder;
  onKeyNavigationEnabledChanged(handler: () => void): GridViewBuilder;
  onKeyNavigationWrapsChanged(handler: () => void): GridViewBuilder;
  onLayoutDirectionChanged(handler: () => void): GridViewBuilder;
  onLeftMarginChanged(handler: () => void): GridViewBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): GridViewBuilder;
  onModelChanged(handler: () => void): GridViewBuilder;
  onMoveDisplacedTransitionChanged(handler: () => void): GridViewBuilder;
  onMoveTransitionChanged(handler: () => void): GridViewBuilder;
  onMovementEnded(handler: () => void): GridViewBuilder;
  onMovementStarted(handler: () => void): GridViewBuilder;
  onMovingChanged(handler: () => void): GridViewBuilder;
  onMovingHorizontallyChanged(handler: () => void): GridViewBuilder;
  onMovingVerticallyChanged(handler: () => void): GridViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GridViewBuilder;
  onOpacityChanged(handler: () => void): GridViewBuilder;
  onOriginXChanged(handler: () => void): GridViewBuilder;
  onOriginYChanged(handler: () => void): GridViewBuilder;
  onPaletteChanged(handler: () => void): GridViewBuilder;
  onPaletteCreated(handler: () => void): GridViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): GridViewBuilder;
  onPixelAlignedChanged(handler: () => void): GridViewBuilder;
  onPopulateTransitionChanged(handler: () => void): GridViewBuilder;
  onPreferredHighlightBeginChanged(handler: () => void): GridViewBuilder;
  onPreferredHighlightEndChanged(handler: () => void): GridViewBuilder;
  onPressDelayChanged(handler: () => void): GridViewBuilder;
  onReboundChanged(handler: () => void): GridViewBuilder;
  onRemoveDisplacedTransitionChanged(handler: () => void): GridViewBuilder;
  onRemoveTransitionChanged(handler: () => void): GridViewBuilder;
  onReuseItemsChanged(handler: () => void): GridViewBuilder;
  onRightMarginChanged(handler: () => void): GridViewBuilder;
  onRotationChanged(handler: () => void): GridViewBuilder;
  onScaleChanged(handler: () => void): GridViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): GridViewBuilder;
  onSnapModeChanged(handler: () => void): GridViewBuilder;
  onStateChanged(handler: (arg0: string) => void): GridViewBuilder;
  onSynchronousDragChanged(handler: () => void): GridViewBuilder;
  onTopMarginChanged(handler: () => void): GridViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): GridViewBuilder;
  onVerticalLayoutDirectionChanged(handler: () => void): GridViewBuilder;
  onVerticalOvershootChanged(handler: () => void): GridViewBuilder;
  onVerticalVelocityChanged(handler: () => void): GridViewBuilder;
  onVisibleChanged(handler: () => void): GridViewBuilder;
  onVisibleChildrenChanged(handler: () => void): GridViewBuilder;
  onWidthChanged(handler: () => void): GridViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): GridViewBuilder;
  onXChanged(handler: () => void): GridViewBuilder;
  onYChanged(handler: () => void): GridViewBuilder;
  onZChanged(handler: () => void): GridViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GridViewBuilder;
  layer(setup: (b: LayerBuilder) => void): GridViewBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): GridViewBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): GridViewBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): GridViewBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): GridViewBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): GridViewBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): GridViewBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): GridViewBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): GridViewBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): GridViewBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): GridViewBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): GridViewBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): GridViewBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): GridViewBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): GridViewBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): GridViewBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): GridViewBuilder;
}

export function GridView(): GridViewBuilder {
  return new DslBuilderImpl('GridView') as unknown as GridViewBuilder;
}

export namespace GridView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('GridView', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('GridView', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken('GridView', 'BoundsBehavior', 'OvershootBounds');
    export const DragAndOvershootBounds = createEnumToken(
      'GridView',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'GridView',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'GridView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'GridView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('GridView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GridView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GridView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GridView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'GridView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'GridView',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'GridView',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken('GridView', 'FlickableDirection', 'VerticalFlick');
    export const HorizontalAndVerticalFlick = createEnumToken(
      'GridView',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'GridView',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace Flow {
    export const FlowLeftToRight = createEnumToken('GridView', 'Flow', 'FlowLeftToRight');
    export const FlowTopToBottom = createEnumToken('GridView', 'Flow', 'FlowTopToBottom');
  }
  export namespace HighlightRangeMode {
    export const NoHighlightRange = createEnumToken(
      'GridView',
      'HighlightRangeMode',
      'NoHighlightRange',
    );
    export const ApplyRange = createEnumToken('GridView', 'HighlightRangeMode', 'ApplyRange');
    export const StrictlyEnforceRange = createEnumToken(
      'GridView',
      'HighlightRangeMode',
      'StrictlyEnforceRange',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('GridView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'GridView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LayoutDirection {
    export const LeftToRight = createEnumToken('GridView', 'LayoutDirection', 'LeftToRight');
    export const RightToLeft = createEnumToken('GridView', 'LayoutDirection', 'RightToLeft');
    export const VerticalTopToBottom = createEnumToken(
      'GridView',
      'LayoutDirection',
      'VerticalTopToBottom',
    );
    export const VerticalBottomToTop = createEnumToken(
      'GridView',
      'LayoutDirection',
      'VerticalBottomToTop',
    );
  }
  export namespace PositionMode {
    export const Beginning = createEnumToken('GridView', 'PositionMode', 'Beginning');
    export const Center = createEnumToken('GridView', 'PositionMode', 'Center');
    export const End = createEnumToken('GridView', 'PositionMode', 'End');
    export const Visible = createEnumToken('GridView', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('GridView', 'PositionMode', 'Contain');
    export const SnapPosition = createEnumToken('GridView', 'PositionMode', 'SnapPosition');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('GridView', 'SnapMode', 'NoSnap');
    export const SnapToRow = createEnumToken('GridView', 'SnapMode', 'SnapToRow');
    export const SnapOneRow = createEnumToken('GridView', 'SnapMode', 'SnapOneRow');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('GridView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('GridView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('GridView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('GridView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('GridView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('GridView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('GridView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('GridView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('GridView', 'TransformOrigin', 'BottomRight');
  }
  export namespace VerticalLayoutDirection {
    export const TopToBottom = createEnumToken(
      'GridView',
      'VerticalLayoutDirection',
      'TopToBottom',
    );
    export const BottomToTop = createEnumToken(
      'GridView',
      'VerticalLayoutDirection',
      'BottomToTop',
    );
  }
}
