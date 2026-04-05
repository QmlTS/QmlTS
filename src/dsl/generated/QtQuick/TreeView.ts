// AUTO-GENERATED — DO NOT EDIT
// Type: TreeView
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemSelectionModelBuilder } from '../QtQml.Models/ItemSelectionModel.js';
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
import type { TableViewBuilder } from './TableView.js';
import type { TransitionBuilder } from './Transition.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface TreeViewBuilder {
  id(id: string): TreeViewBuilder;
  child(obj: QmlObjectBuilder): TreeViewBuilder;

  acceptedButtons(value: QmlValue): TreeViewBuilder;
  acceptedButtonsBind(expr: string): TreeViewBuilder;
  activeFocusOnTab(value: boolean): TreeViewBuilder;
  activeFocusOnTabBind(expr: string): TreeViewBuilder;
  alternatingRows(value: boolean): TreeViewBuilder;
  alternatingRowsBind(expr: string): TreeViewBuilder;
  animate(value: boolean): TreeViewBuilder;
  animateBind(expr: string): TreeViewBuilder;
  antialiasing(value: boolean): TreeViewBuilder;
  antialiasingBind(expr: string): TreeViewBuilder;
  baselineOffset(value: number): TreeViewBuilder;
  baselineOffsetBind(expr: string): TreeViewBuilder;
  bottomMargin(value: number): TreeViewBuilder;
  bottomMarginBind(expr: string): TreeViewBuilder;
  boundsBehavior(value: QmlValue): TreeViewBuilder;
  boundsBehaviorBind(expr: string): TreeViewBuilder;
  boundsMovement(value: QmlValue): TreeViewBuilder;
  boundsMovementBind(expr: string): TreeViewBuilder;
  clip(value: boolean): TreeViewBuilder;
  clipBind(expr: string): TreeViewBuilder;
  columnSpacing(value: number): TreeViewBuilder;
  columnSpacingBind(expr: string): TreeViewBuilder;
  columnWidthProvider(value: QmlValue): TreeViewBuilder;
  columnWidthProviderBind(expr: string): TreeViewBuilder;
  containmentMask(value: QtObjectBuilder): TreeViewBuilder;
  containmentMaskBind(expr: string): TreeViewBuilder;
  contentHeight(value: number): TreeViewBuilder;
  contentHeightBind(expr: string): TreeViewBuilder;
  contentWidth(value: number): TreeViewBuilder;
  contentWidthBind(expr: string): TreeViewBuilder;
  contentX(value: number): TreeViewBuilder;
  contentXBind(expr: string): TreeViewBuilder;
  contentY(value: number): TreeViewBuilder;
  contentYBind(expr: string): TreeViewBuilder;
  delegate(value: QmlComponent): TreeViewBuilder;
  delegateBind(expr: string): TreeViewBuilder;
  delegateModelAccess(value: QmlValue): TreeViewBuilder;
  delegateModelAccessBind(expr: string): TreeViewBuilder;
  editTriggers(value: QmlValue): TreeViewBuilder;
  editTriggersBind(expr: string): TreeViewBuilder;
  enabled(value: boolean): TreeViewBuilder;
  enabledBind(expr: string): TreeViewBuilder;
  flickDeceleration(value: number): TreeViewBuilder;
  flickDecelerationBind(expr: string): TreeViewBuilder;
  flickableDirection(value: QmlValue): TreeViewBuilder;
  flickableDirectionBind(expr: string): TreeViewBuilder;
  focus(value: boolean): TreeViewBuilder;
  focusBind(expr: string): TreeViewBuilder;
  focusPolicy(value: QmlValue): TreeViewBuilder;
  focusPolicyBind(expr: string): TreeViewBuilder;
  height(value: number): TreeViewBuilder;
  heightBind(expr: string): TreeViewBuilder;
  implicitHeight(value: number): TreeViewBuilder;
  implicitHeightBind(expr: string): TreeViewBuilder;
  implicitWidth(value: number): TreeViewBuilder;
  implicitWidthBind(expr: string): TreeViewBuilder;
  interactive(value: boolean): TreeViewBuilder;
  interactiveBind(expr: string): TreeViewBuilder;
  keyNavigationEnabled(value: boolean): TreeViewBuilder;
  keyNavigationEnabledBind(expr: string): TreeViewBuilder;
  leftMargin(value: number): TreeViewBuilder;
  leftMarginBind(expr: string): TreeViewBuilder;
  maximumFlickVelocity(value: number): TreeViewBuilder;
  maximumFlickVelocityBind(expr: string): TreeViewBuilder;
  model(value: QmlValue): TreeViewBuilder;
  modelBind(expr: string): TreeViewBuilder;
  objectName(value: string): TreeViewBuilder;
  objectNameBind(expr: string): TreeViewBuilder;
  opacity(value: number): TreeViewBuilder;
  opacityBind(expr: string): TreeViewBuilder;
  palette(value: PaletteBuilder): TreeViewBuilder;
  paletteBind(expr: string): TreeViewBuilder;
  parent(value: ItemBuilder): TreeViewBuilder;
  parentBind(expr: string): TreeViewBuilder;
  pixelAligned(value: boolean): TreeViewBuilder;
  pixelAlignedBind(expr: string): TreeViewBuilder;
  pointerNavigationEnabled(value: boolean): TreeViewBuilder;
  pointerNavigationEnabledBind(expr: string): TreeViewBuilder;
  pressDelay(value: number): TreeViewBuilder;
  pressDelayBind(expr: string): TreeViewBuilder;
  rebound(value: TransitionBuilder): TreeViewBuilder;
  reboundBind(expr: string): TreeViewBuilder;
  resizableColumns(value: boolean): TreeViewBuilder;
  resizableColumnsBind(expr: string): TreeViewBuilder;
  resizableRows(value: boolean): TreeViewBuilder;
  resizableRowsBind(expr: string): TreeViewBuilder;
  reuseItems(value: boolean): TreeViewBuilder;
  reuseItemsBind(expr: string): TreeViewBuilder;
  rightMargin(value: number): TreeViewBuilder;
  rightMarginBind(expr: string): TreeViewBuilder;
  rootIndex(value: QmlValue): TreeViewBuilder;
  rootIndexBind(expr: string): TreeViewBuilder;
  rotation(value: number): TreeViewBuilder;
  rotationBind(expr: string): TreeViewBuilder;
  rowHeightProvider(value: QmlValue): TreeViewBuilder;
  rowHeightProviderBind(expr: string): TreeViewBuilder;
  rowSpacing(value: number): TreeViewBuilder;
  rowSpacingBind(expr: string): TreeViewBuilder;
  scale(value: number): TreeViewBuilder;
  scaleBind(expr: string): TreeViewBuilder;
  selectionBehavior(value: QmlValue): TreeViewBuilder;
  selectionBehaviorBind(expr: string): TreeViewBuilder;
  selectionMode(value: QmlValue): TreeViewBuilder;
  selectionModeBind(expr: string): TreeViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): TreeViewBuilder;
  selectionModelBind(expr: string): TreeViewBuilder;
  smooth(value: boolean): TreeViewBuilder;
  smoothBind(expr: string): TreeViewBuilder;
  state(value: string): TreeViewBuilder;
  stateBind(expr: string): TreeViewBuilder;
  syncDirection(value: QmlValue): TreeViewBuilder;
  syncDirectionBind(expr: string): TreeViewBuilder;
  syncView(value: TableViewBuilder): TreeViewBuilder;
  syncViewBind(expr: string): TreeViewBuilder;
  synchronousDrag(value: boolean): TreeViewBuilder;
  synchronousDragBind(expr: string): TreeViewBuilder;
  topMargin(value: number): TreeViewBuilder;
  topMarginBind(expr: string): TreeViewBuilder;
  transformOrigin(value: QmlValue): TreeViewBuilder;
  transformOriginBind(expr: string): TreeViewBuilder;
  visible(value: boolean): TreeViewBuilder;
  visibleBind(expr: string): TreeViewBuilder;
  width(value: number): TreeViewBuilder;
  widthBind(expr: string): TreeViewBuilder;
  x(value: number): TreeViewBuilder;
  xBind(expr: string): TreeViewBuilder;
  y(value: number): TreeViewBuilder;
  yBind(expr: string): TreeViewBuilder;
  z(value: number): TreeViewBuilder;
  zBind(expr: string): TreeViewBuilder;
  onAcceptedButtonsChanged(handler: () => void): TreeViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TreeViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TreeViewBuilder;
  onAlternatingRowsChanged(handler: () => void): TreeViewBuilder;
  onAnimateChanged(handler: () => void): TreeViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TreeViewBuilder;
  onAtXBeginningChanged(handler: () => void): TreeViewBuilder;
  onAtXEndChanged(handler: () => void): TreeViewBuilder;
  onAtYBeginningChanged(handler: () => void): TreeViewBuilder;
  onAtYEndChanged(handler: () => void): TreeViewBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): TreeViewBuilder;
  onBottomMarginChanged(handler: () => void): TreeViewBuilder;
  onBottomRowChanged(handler: () => void): TreeViewBuilder;
  onBoundsBehaviorChanged(handler: () => void): TreeViewBuilder;
  onBoundsMovementChanged(handler: () => void): TreeViewBuilder;
  onChildrenChanged(handler: () => void): TreeViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TreeViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TreeViewBuilder;
  onCollapsed(handler: (row: number, recursively: boolean) => void): TreeViewBuilder;
  onColumnMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): TreeViewBuilder;
  onColumnSpacingChanged(handler: () => void): TreeViewBuilder;
  onColumnWidthProviderChanged(handler: () => void): TreeViewBuilder;
  onColumnsChanged(handler: () => void): TreeViewBuilder;
  onContainmentMaskChanged(handler: () => void): TreeViewBuilder;
  onContentHeightChanged(handler: () => void): TreeViewBuilder;
  onContentWidthChanged(handler: () => void): TreeViewBuilder;
  onContentXChanged(handler: () => void): TreeViewBuilder;
  onContentYChanged(handler: () => void): TreeViewBuilder;
  onCurrentColumnChanged(handler: () => void): TreeViewBuilder;
  onCurrentRowChanged(handler: () => void): TreeViewBuilder;
  onDelegateChanged(handler: () => void): TreeViewBuilder;
  onDelegateModelAccessChanged(handler: () => void): TreeViewBuilder;
  onDragEnded(handler: () => void): TreeViewBuilder;
  onDragStarted(handler: () => void): TreeViewBuilder;
  onDraggingChanged(handler: () => void): TreeViewBuilder;
  onDraggingHorizontallyChanged(handler: () => void): TreeViewBuilder;
  onDraggingVerticallyChanged(handler: () => void): TreeViewBuilder;
  onEditTriggersChanged(handler: () => void): TreeViewBuilder;
  onEnabledChanged(handler: () => void): TreeViewBuilder;
  onExpanded(handler: (row: number, depth: number) => void): TreeViewBuilder;
  onFlickDecelerationChanged(handler: () => void): TreeViewBuilder;
  onFlickEnded(handler: () => void): TreeViewBuilder;
  onFlickStarted(handler: () => void): TreeViewBuilder;
  onFlickableDirectionChanged(handler: () => void): TreeViewBuilder;
  onFlickingChanged(handler: () => void): TreeViewBuilder;
  onFlickingHorizontallyChanged(handler: () => void): TreeViewBuilder;
  onFlickingVerticallyChanged(handler: () => void): TreeViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TreeViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TreeViewBuilder;
  onHeightChanged(handler: () => void): TreeViewBuilder;
  onHorizontalOvershootChanged(handler: () => void): TreeViewBuilder;
  onHorizontalVelocityChanged(handler: () => void): TreeViewBuilder;
  onImplicitHeightChanged(handler: () => void): TreeViewBuilder;
  onImplicitWidthChanged(handler: () => void): TreeViewBuilder;
  onInteractiveChanged(handler: () => void): TreeViewBuilder;
  onIsAtBoundaryChanged(handler: () => void): TreeViewBuilder;
  onKeyNavigationEnabledChanged(handler: () => void): TreeViewBuilder;
  onLayoutChanged(handler: () => void): TreeViewBuilder;
  onLeftColumnChanged(handler: () => void): TreeViewBuilder;
  onLeftMarginChanged(handler: () => void): TreeViewBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): TreeViewBuilder;
  onModelChanged(handler: () => void): TreeViewBuilder;
  onMovementEnded(handler: () => void): TreeViewBuilder;
  onMovementStarted(handler: () => void): TreeViewBuilder;
  onMovingChanged(handler: () => void): TreeViewBuilder;
  onMovingHorizontallyChanged(handler: () => void): TreeViewBuilder;
  onMovingVerticallyChanged(handler: () => void): TreeViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TreeViewBuilder;
  onOpacityChanged(handler: () => void): TreeViewBuilder;
  onOriginXChanged(handler: () => void): TreeViewBuilder;
  onOriginYChanged(handler: () => void): TreeViewBuilder;
  onPaletteChanged(handler: () => void): TreeViewBuilder;
  onPaletteCreated(handler: () => void): TreeViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TreeViewBuilder;
  onPixelAlignedChanged(handler: () => void): TreeViewBuilder;
  onPointerNavigationEnabledChanged(handler: () => void): TreeViewBuilder;
  onPressDelayChanged(handler: () => void): TreeViewBuilder;
  onReboundChanged(handler: () => void): TreeViewBuilder;
  onResizableColumnsChanged(handler: () => void): TreeViewBuilder;
  onResizableRowsChanged(handler: () => void): TreeViewBuilder;
  onReuseItemsChanged(handler: () => void): TreeViewBuilder;
  onRightColumnChanged(handler: () => void): TreeViewBuilder;
  onRightMarginChanged(handler: () => void): TreeViewBuilder;
  onRootIndexChanged(handler: () => void): TreeViewBuilder;
  onRotationChanged(handler: () => void): TreeViewBuilder;
  onRowHeightProviderChanged(handler: () => void): TreeViewBuilder;
  onRowMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): TreeViewBuilder;
  onRowSpacingChanged(handler: () => void): TreeViewBuilder;
  onRowsChanged(handler: () => void): TreeViewBuilder;
  onScaleChanged(handler: () => void): TreeViewBuilder;
  onSelectionBehaviorChanged(handler: () => void): TreeViewBuilder;
  onSelectionModeChanged(handler: () => void): TreeViewBuilder;
  onSelectionModelChanged(handler: () => void): TreeViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TreeViewBuilder;
  onStateChanged(handler: (arg0: string) => void): TreeViewBuilder;
  onSyncDirectionChanged(handler: () => void): TreeViewBuilder;
  onSyncViewChanged(handler: () => void): TreeViewBuilder;
  onSynchronousDragChanged(handler: () => void): TreeViewBuilder;
  onTopMarginChanged(handler: () => void): TreeViewBuilder;
  onTopRowChanged(handler: () => void): TreeViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TreeViewBuilder;
  onVerticalOvershootChanged(handler: () => void): TreeViewBuilder;
  onVerticalVelocityChanged(handler: () => void): TreeViewBuilder;
  onVisibleChanged(handler: () => void): TreeViewBuilder;
  onVisibleChildrenChanged(handler: () => void): TreeViewBuilder;
  onWidthChanged(handler: () => void): TreeViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TreeViewBuilder;
  onXChanged(handler: () => void): TreeViewBuilder;
  onYChanged(handler: () => void): TreeViewBuilder;
  onZChanged(handler: () => void): TreeViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TreeViewBuilder;
  layer(setup: (b: LayerBuilder) => void): TreeViewBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TreeViewBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TreeViewBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TreeViewBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TreeViewBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TreeViewBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TreeViewBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TreeViewBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TreeViewBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TreeViewBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TreeViewBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TreeViewBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TreeViewBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TreeViewBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TreeViewBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TreeViewBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TreeViewBuilder;
}

export function TreeView(): TreeViewBuilder {
  return new DslBuilderImpl('TreeView') as unknown as TreeViewBuilder;
}

export namespace TreeView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('TreeView', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('TreeView', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken('TreeView', 'BoundsBehavior', 'OvershootBounds');
    export const DragAndOvershootBounds = createEnumToken(
      'TreeView',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'TreeView',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace EditTriggers {
    export const NoEditTriggers = createEnumToken('TreeView', 'EditTriggers', 'NoEditTriggers');
    export const SingleTapped = createEnumToken('TreeView', 'EditTriggers', 'SingleTapped');
    export const DoubleTapped = createEnumToken('TreeView', 'EditTriggers', 'DoubleTapped');
    export const SelectedTapped = createEnumToken('TreeView', 'EditTriggers', 'SelectedTapped');
    export const EditKeyPressed = createEnumToken('TreeView', 'EditTriggers', 'EditKeyPressed');
    export const AnyKeyPressed = createEnumToken('TreeView', 'EditTriggers', 'AnyKeyPressed');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TreeView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TreeView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TreeView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TreeView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TreeView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TreeView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TreeView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'TreeView',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'TreeView',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken('TreeView', 'FlickableDirection', 'VerticalFlick');
    export const HorizontalAndVerticalFlick = createEnumToken(
      'TreeView',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'TreeView',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TreeView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TreeView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const AlignLeft = createEnumToken('TreeView', 'PositionMode', 'AlignLeft');
    export const AlignRight = createEnumToken('TreeView', 'PositionMode', 'AlignRight');
    export const AlignHCenter = createEnumToken('TreeView', 'PositionMode', 'AlignHCenter');
    export const AlignTop = createEnumToken('TreeView', 'PositionMode', 'AlignTop');
    export const AlignBottom = createEnumToken('TreeView', 'PositionMode', 'AlignBottom');
    export const AlignVCenter = createEnumToken('TreeView', 'PositionMode', 'AlignVCenter');
    export const AlignCenter = createEnumToken('TreeView', 'PositionMode', 'AlignCenter');
    export const Visible = createEnumToken('TreeView', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('TreeView', 'PositionMode', 'Contain');
  }
  export namespace SelectionBehavior {
    export const SelectionDisabled = createEnumToken(
      'TreeView',
      'SelectionBehavior',
      'SelectionDisabled',
    );
    export const SelectCells = createEnumToken('TreeView', 'SelectionBehavior', 'SelectCells');
    export const SelectRows = createEnumToken('TreeView', 'SelectionBehavior', 'SelectRows');
    export const SelectColumns = createEnumToken('TreeView', 'SelectionBehavior', 'SelectColumns');
  }
  export namespace SelectionMode {
    export const SingleSelection = createEnumToken('TreeView', 'SelectionMode', 'SingleSelection');
    export const ContiguousSelection = createEnumToken(
      'TreeView',
      'SelectionMode',
      'ContiguousSelection',
    );
    export const ExtendedSelection = createEnumToken(
      'TreeView',
      'SelectionMode',
      'ExtendedSelection',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TreeView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TreeView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TreeView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TreeView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TreeView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TreeView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TreeView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TreeView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TreeView', 'TransformOrigin', 'BottomRight');
  }
}
