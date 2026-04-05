// AUTO-GENERATED — DO NOT EDIT
// Type: TableView
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
import type { TransitionBuilder } from './Transition.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface TableViewBuilder {
  id(id: string): TableViewBuilder;
  child(obj: QmlObjectBuilder): TableViewBuilder;

  acceptedButtons(value: QmlValue): TableViewBuilder;
  acceptedButtonsBind(expr: string): TableViewBuilder;
  activeFocusOnTab(value: boolean): TableViewBuilder;
  activeFocusOnTabBind(expr: string): TableViewBuilder;
  alternatingRows(value: boolean): TableViewBuilder;
  alternatingRowsBind(expr: string): TableViewBuilder;
  animate(value: boolean): TableViewBuilder;
  animateBind(expr: string): TableViewBuilder;
  antialiasing(value: boolean): TableViewBuilder;
  antialiasingBind(expr: string): TableViewBuilder;
  baselineOffset(value: number): TableViewBuilder;
  baselineOffsetBind(expr: string): TableViewBuilder;
  bottomMargin(value: number): TableViewBuilder;
  bottomMarginBind(expr: string): TableViewBuilder;
  boundsBehavior(value: QmlValue): TableViewBuilder;
  boundsBehaviorBind(expr: string): TableViewBuilder;
  boundsMovement(value: QmlValue): TableViewBuilder;
  boundsMovementBind(expr: string): TableViewBuilder;
  clip(value: boolean): TableViewBuilder;
  clipBind(expr: string): TableViewBuilder;
  columnSpacing(value: number): TableViewBuilder;
  columnSpacingBind(expr: string): TableViewBuilder;
  columnWidthProvider(value: QmlValue): TableViewBuilder;
  columnWidthProviderBind(expr: string): TableViewBuilder;
  containmentMask(value: QtObjectBuilder): TableViewBuilder;
  containmentMaskBind(expr: string): TableViewBuilder;
  contentHeight(value: number): TableViewBuilder;
  contentHeightBind(expr: string): TableViewBuilder;
  contentWidth(value: number): TableViewBuilder;
  contentWidthBind(expr: string): TableViewBuilder;
  contentX(value: number): TableViewBuilder;
  contentXBind(expr: string): TableViewBuilder;
  contentY(value: number): TableViewBuilder;
  contentYBind(expr: string): TableViewBuilder;
  delegate(value: QmlComponent): TableViewBuilder;
  delegateBind(expr: string): TableViewBuilder;
  delegateModelAccess(value: QmlValue): TableViewBuilder;
  delegateModelAccessBind(expr: string): TableViewBuilder;
  editTriggers(value: QmlValue): TableViewBuilder;
  editTriggersBind(expr: string): TableViewBuilder;
  enabled(value: boolean): TableViewBuilder;
  enabledBind(expr: string): TableViewBuilder;
  flickDeceleration(value: number): TableViewBuilder;
  flickDecelerationBind(expr: string): TableViewBuilder;
  flickableDirection(value: QmlValue): TableViewBuilder;
  flickableDirectionBind(expr: string): TableViewBuilder;
  focus(value: boolean): TableViewBuilder;
  focusBind(expr: string): TableViewBuilder;
  focusPolicy(value: QmlValue): TableViewBuilder;
  focusPolicyBind(expr: string): TableViewBuilder;
  height(value: number): TableViewBuilder;
  heightBind(expr: string): TableViewBuilder;
  implicitHeight(value: number): TableViewBuilder;
  implicitHeightBind(expr: string): TableViewBuilder;
  implicitWidth(value: number): TableViewBuilder;
  implicitWidthBind(expr: string): TableViewBuilder;
  interactive(value: boolean): TableViewBuilder;
  interactiveBind(expr: string): TableViewBuilder;
  keyNavigationEnabled(value: boolean): TableViewBuilder;
  keyNavigationEnabledBind(expr: string): TableViewBuilder;
  leftMargin(value: number): TableViewBuilder;
  leftMarginBind(expr: string): TableViewBuilder;
  maximumFlickVelocity(value: number): TableViewBuilder;
  maximumFlickVelocityBind(expr: string): TableViewBuilder;
  model(value: QmlValue): TableViewBuilder;
  modelBind(expr: string): TableViewBuilder;
  objectName(value: string): TableViewBuilder;
  objectNameBind(expr: string): TableViewBuilder;
  opacity(value: number): TableViewBuilder;
  opacityBind(expr: string): TableViewBuilder;
  palette(value: PaletteBuilder): TableViewBuilder;
  paletteBind(expr: string): TableViewBuilder;
  parent(value: ItemBuilder): TableViewBuilder;
  parentBind(expr: string): TableViewBuilder;
  pixelAligned(value: boolean): TableViewBuilder;
  pixelAlignedBind(expr: string): TableViewBuilder;
  pointerNavigationEnabled(value: boolean): TableViewBuilder;
  pointerNavigationEnabledBind(expr: string): TableViewBuilder;
  pressDelay(value: number): TableViewBuilder;
  pressDelayBind(expr: string): TableViewBuilder;
  rebound(value: TransitionBuilder): TableViewBuilder;
  reboundBind(expr: string): TableViewBuilder;
  resizableColumns(value: boolean): TableViewBuilder;
  resizableColumnsBind(expr: string): TableViewBuilder;
  resizableRows(value: boolean): TableViewBuilder;
  resizableRowsBind(expr: string): TableViewBuilder;
  reuseItems(value: boolean): TableViewBuilder;
  reuseItemsBind(expr: string): TableViewBuilder;
  rightMargin(value: number): TableViewBuilder;
  rightMarginBind(expr: string): TableViewBuilder;
  rotation(value: number): TableViewBuilder;
  rotationBind(expr: string): TableViewBuilder;
  rowHeightProvider(value: QmlValue): TableViewBuilder;
  rowHeightProviderBind(expr: string): TableViewBuilder;
  rowSpacing(value: number): TableViewBuilder;
  rowSpacingBind(expr: string): TableViewBuilder;
  scale(value: number): TableViewBuilder;
  scaleBind(expr: string): TableViewBuilder;
  selectionBehavior(value: QmlValue): TableViewBuilder;
  selectionBehaviorBind(expr: string): TableViewBuilder;
  selectionMode(value: QmlValue): TableViewBuilder;
  selectionModeBind(expr: string): TableViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): TableViewBuilder;
  selectionModelBind(expr: string): TableViewBuilder;
  smooth(value: boolean): TableViewBuilder;
  smoothBind(expr: string): TableViewBuilder;
  state(value: string): TableViewBuilder;
  stateBind(expr: string): TableViewBuilder;
  syncDirection(value: QmlValue): TableViewBuilder;
  syncDirectionBind(expr: string): TableViewBuilder;
  syncView(value: TableViewBuilder): TableViewBuilder;
  syncViewBind(expr: string): TableViewBuilder;
  synchronousDrag(value: boolean): TableViewBuilder;
  synchronousDragBind(expr: string): TableViewBuilder;
  topMargin(value: number): TableViewBuilder;
  topMarginBind(expr: string): TableViewBuilder;
  transformOrigin(value: QmlValue): TableViewBuilder;
  transformOriginBind(expr: string): TableViewBuilder;
  visible(value: boolean): TableViewBuilder;
  visibleBind(expr: string): TableViewBuilder;
  width(value: number): TableViewBuilder;
  widthBind(expr: string): TableViewBuilder;
  x(value: number): TableViewBuilder;
  xBind(expr: string): TableViewBuilder;
  y(value: number): TableViewBuilder;
  yBind(expr: string): TableViewBuilder;
  z(value: number): TableViewBuilder;
  zBind(expr: string): TableViewBuilder;
  onAcceptedButtonsChanged(handler: () => void): TableViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TableViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TableViewBuilder;
  onAlternatingRowsChanged(handler: () => void): TableViewBuilder;
  onAnimateChanged(handler: () => void): TableViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TableViewBuilder;
  onAtXBeginningChanged(handler: () => void): TableViewBuilder;
  onAtXEndChanged(handler: () => void): TableViewBuilder;
  onAtYBeginningChanged(handler: () => void): TableViewBuilder;
  onAtYEndChanged(handler: () => void): TableViewBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): TableViewBuilder;
  onBottomMarginChanged(handler: () => void): TableViewBuilder;
  onBottomRowChanged(handler: () => void): TableViewBuilder;
  onBoundsBehaviorChanged(handler: () => void): TableViewBuilder;
  onBoundsMovementChanged(handler: () => void): TableViewBuilder;
  onChildrenChanged(handler: () => void): TableViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TableViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TableViewBuilder;
  onColumnMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): TableViewBuilder;
  onColumnSpacingChanged(handler: () => void): TableViewBuilder;
  onColumnWidthProviderChanged(handler: () => void): TableViewBuilder;
  onColumnsChanged(handler: () => void): TableViewBuilder;
  onContainmentMaskChanged(handler: () => void): TableViewBuilder;
  onContentHeightChanged(handler: () => void): TableViewBuilder;
  onContentWidthChanged(handler: () => void): TableViewBuilder;
  onContentXChanged(handler: () => void): TableViewBuilder;
  onContentYChanged(handler: () => void): TableViewBuilder;
  onCurrentColumnChanged(handler: () => void): TableViewBuilder;
  onCurrentRowChanged(handler: () => void): TableViewBuilder;
  onDelegateChanged(handler: () => void): TableViewBuilder;
  onDelegateModelAccessChanged(handler: () => void): TableViewBuilder;
  onDragEnded(handler: () => void): TableViewBuilder;
  onDragStarted(handler: () => void): TableViewBuilder;
  onDraggingChanged(handler: () => void): TableViewBuilder;
  onDraggingHorizontallyChanged(handler: () => void): TableViewBuilder;
  onDraggingVerticallyChanged(handler: () => void): TableViewBuilder;
  onEditTriggersChanged(handler: () => void): TableViewBuilder;
  onEnabledChanged(handler: () => void): TableViewBuilder;
  onFlickDecelerationChanged(handler: () => void): TableViewBuilder;
  onFlickEnded(handler: () => void): TableViewBuilder;
  onFlickStarted(handler: () => void): TableViewBuilder;
  onFlickableDirectionChanged(handler: () => void): TableViewBuilder;
  onFlickingChanged(handler: () => void): TableViewBuilder;
  onFlickingHorizontallyChanged(handler: () => void): TableViewBuilder;
  onFlickingVerticallyChanged(handler: () => void): TableViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TableViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TableViewBuilder;
  onHeightChanged(handler: () => void): TableViewBuilder;
  onHorizontalOvershootChanged(handler: () => void): TableViewBuilder;
  onHorizontalVelocityChanged(handler: () => void): TableViewBuilder;
  onImplicitHeightChanged(handler: () => void): TableViewBuilder;
  onImplicitWidthChanged(handler: () => void): TableViewBuilder;
  onInteractiveChanged(handler: () => void): TableViewBuilder;
  onIsAtBoundaryChanged(handler: () => void): TableViewBuilder;
  onKeyNavigationEnabledChanged(handler: () => void): TableViewBuilder;
  onLayoutChanged(handler: () => void): TableViewBuilder;
  onLeftColumnChanged(handler: () => void): TableViewBuilder;
  onLeftMarginChanged(handler: () => void): TableViewBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): TableViewBuilder;
  onModelChanged(handler: () => void): TableViewBuilder;
  onMovementEnded(handler: () => void): TableViewBuilder;
  onMovementStarted(handler: () => void): TableViewBuilder;
  onMovingChanged(handler: () => void): TableViewBuilder;
  onMovingHorizontallyChanged(handler: () => void): TableViewBuilder;
  onMovingVerticallyChanged(handler: () => void): TableViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TableViewBuilder;
  onOpacityChanged(handler: () => void): TableViewBuilder;
  onOriginXChanged(handler: () => void): TableViewBuilder;
  onOriginYChanged(handler: () => void): TableViewBuilder;
  onPaletteChanged(handler: () => void): TableViewBuilder;
  onPaletteCreated(handler: () => void): TableViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TableViewBuilder;
  onPixelAlignedChanged(handler: () => void): TableViewBuilder;
  onPointerNavigationEnabledChanged(handler: () => void): TableViewBuilder;
  onPressDelayChanged(handler: () => void): TableViewBuilder;
  onReboundChanged(handler: () => void): TableViewBuilder;
  onResizableColumnsChanged(handler: () => void): TableViewBuilder;
  onResizableRowsChanged(handler: () => void): TableViewBuilder;
  onReuseItemsChanged(handler: () => void): TableViewBuilder;
  onRightColumnChanged(handler: () => void): TableViewBuilder;
  onRightMarginChanged(handler: () => void): TableViewBuilder;
  onRotationChanged(handler: () => void): TableViewBuilder;
  onRowHeightProviderChanged(handler: () => void): TableViewBuilder;
  onRowMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): TableViewBuilder;
  onRowSpacingChanged(handler: () => void): TableViewBuilder;
  onRowsChanged(handler: () => void): TableViewBuilder;
  onScaleChanged(handler: () => void): TableViewBuilder;
  onSelectionBehaviorChanged(handler: () => void): TableViewBuilder;
  onSelectionModeChanged(handler: () => void): TableViewBuilder;
  onSelectionModelChanged(handler: () => void): TableViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TableViewBuilder;
  onStateChanged(handler: (arg0: string) => void): TableViewBuilder;
  onSyncDirectionChanged(handler: () => void): TableViewBuilder;
  onSyncViewChanged(handler: () => void): TableViewBuilder;
  onSynchronousDragChanged(handler: () => void): TableViewBuilder;
  onTopMarginChanged(handler: () => void): TableViewBuilder;
  onTopRowChanged(handler: () => void): TableViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TableViewBuilder;
  onVerticalOvershootChanged(handler: () => void): TableViewBuilder;
  onVerticalVelocityChanged(handler: () => void): TableViewBuilder;
  onVisibleChanged(handler: () => void): TableViewBuilder;
  onVisibleChildrenChanged(handler: () => void): TableViewBuilder;
  onWidthChanged(handler: () => void): TableViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TableViewBuilder;
  onXChanged(handler: () => void): TableViewBuilder;
  onYChanged(handler: () => void): TableViewBuilder;
  onZChanged(handler: () => void): TableViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TableViewBuilder;
  layer(setup: (b: LayerBuilder) => void): TableViewBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TableViewBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TableViewBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TableViewBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TableViewBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TableViewBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TableViewBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TableViewBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TableViewBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TableViewBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TableViewBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TableViewBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TableViewBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TableViewBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TableViewBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TableViewBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TableViewBuilder;
}

export function TableView(): TableViewBuilder {
  return new DslBuilderImpl('TableView') as unknown as TableViewBuilder;
}

export namespace TableView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('TableView', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('TableView', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken(
      'TableView',
      'BoundsBehavior',
      'OvershootBounds',
    );
    export const DragAndOvershootBounds = createEnumToken(
      'TableView',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'TableView',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace EditTriggers {
    export const NoEditTriggers = createEnumToken('TableView', 'EditTriggers', 'NoEditTriggers');
    export const SingleTapped = createEnumToken('TableView', 'EditTriggers', 'SingleTapped');
    export const DoubleTapped = createEnumToken('TableView', 'EditTriggers', 'DoubleTapped');
    export const SelectedTapped = createEnumToken('TableView', 'EditTriggers', 'SelectedTapped');
    export const EditKeyPressed = createEnumToken('TableView', 'EditTriggers', 'EditKeyPressed');
    export const AnyKeyPressed = createEnumToken('TableView', 'EditTriggers', 'AnyKeyPressed');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TableView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TableView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TableView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TableView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TableView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TableView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TableView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'TableView',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'TableView',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken(
      'TableView',
      'FlickableDirection',
      'VerticalFlick',
    );
    export const HorizontalAndVerticalFlick = createEnumToken(
      'TableView',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'TableView',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TableView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TableView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const AlignLeft = createEnumToken('TableView', 'PositionMode', 'AlignLeft');
    export const AlignRight = createEnumToken('TableView', 'PositionMode', 'AlignRight');
    export const AlignHCenter = createEnumToken('TableView', 'PositionMode', 'AlignHCenter');
    export const AlignTop = createEnumToken('TableView', 'PositionMode', 'AlignTop');
    export const AlignBottom = createEnumToken('TableView', 'PositionMode', 'AlignBottom');
    export const AlignVCenter = createEnumToken('TableView', 'PositionMode', 'AlignVCenter');
    export const AlignCenter = createEnumToken('TableView', 'PositionMode', 'AlignCenter');
    export const Visible = createEnumToken('TableView', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('TableView', 'PositionMode', 'Contain');
  }
  export namespace SelectionBehavior {
    export const SelectionDisabled = createEnumToken(
      'TableView',
      'SelectionBehavior',
      'SelectionDisabled',
    );
    export const SelectCells = createEnumToken('TableView', 'SelectionBehavior', 'SelectCells');
    export const SelectRows = createEnumToken('TableView', 'SelectionBehavior', 'SelectRows');
    export const SelectColumns = createEnumToken('TableView', 'SelectionBehavior', 'SelectColumns');
  }
  export namespace SelectionMode {
    export const SingleSelection = createEnumToken('TableView', 'SelectionMode', 'SingleSelection');
    export const ContiguousSelection = createEnumToken(
      'TableView',
      'SelectionMode',
      'ContiguousSelection',
    );
    export const ExtendedSelection = createEnumToken(
      'TableView',
      'SelectionMode',
      'ExtendedSelection',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TableView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TableView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TableView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TableView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TableView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TableView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TableView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TableView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TableView', 'TransformOrigin', 'BottomRight');
  }
}
