// AUTO-GENERATED — DO NOT EDIT
// Type: TreeView
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
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
export interface TreeViewBuilder {
  id(id: string): TreeViewBuilder;
  child(obj: QmlObjectBuilder): TreeViewBuilder;

  acceptedButtons(value: QmlEnumToken): TreeViewBuilder;
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
  boundsBehavior(value: QmlEnumToken): TreeViewBuilder;
  boundsBehaviorBind(expr: string): TreeViewBuilder;
  boundsMovement(value: QmlEnumToken): TreeViewBuilder;
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
  delegateModelAccess(value: QmlEnumToken): TreeViewBuilder;
  delegateModelAccessBind(expr: string): TreeViewBuilder;
  editTriggers(value: QmlEnumToken): TreeViewBuilder;
  editTriggersBind(expr: string): TreeViewBuilder;
  enabled(value: boolean): TreeViewBuilder;
  enabledBind(expr: string): TreeViewBuilder;
  flickDeceleration(value: number): TreeViewBuilder;
  flickDecelerationBind(expr: string): TreeViewBuilder;
  flickableDirection(value: QmlEnumToken): TreeViewBuilder;
  flickableDirectionBind(expr: string): TreeViewBuilder;
  focus(value: boolean): TreeViewBuilder;
  focusBind(expr: string): TreeViewBuilder;
  focusPolicy(value: QmlEnumToken): TreeViewBuilder;
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
  selectionBehavior(value: QmlEnumToken): TreeViewBuilder;
  selectionBehaviorBind(expr: string): TreeViewBuilder;
  selectionMode(value: QmlEnumToken): TreeViewBuilder;
  selectionModeBind(expr: string): TreeViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): TreeViewBuilder;
  selectionModelBind(expr: string): TreeViewBuilder;
  smooth(value: boolean): TreeViewBuilder;
  smoothBind(expr: string): TreeViewBuilder;
  state(value: string): TreeViewBuilder;
  stateBind(expr: string): TreeViewBuilder;
  syncDirection(value: QmlEnumToken): TreeViewBuilder;
  syncDirectionBind(expr: string): TreeViewBuilder;
  syncView(value: TableViewBuilder): TreeViewBuilder;
  syncViewBind(expr: string): TreeViewBuilder;
  synchronousDrag(value: boolean): TreeViewBuilder;
  synchronousDragBind(expr: string): TreeViewBuilder;
  topMargin(value: number): TreeViewBuilder;
  topMarginBind(expr: string): TreeViewBuilder;
  transformOrigin(value: QmlEnumToken): TreeViewBuilder;
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
  onAcceptedButtonsChanged(body: string): TreeViewBuilder;
  onActiveFocusChanged(body: string): TreeViewBuilder;
  onActiveFocusOnTabChanged(body: string): TreeViewBuilder;
  onAlternatingRowsChanged(body: string): TreeViewBuilder;
  onAnimateChanged(body: string): TreeViewBuilder;
  onAntialiasingChanged(body: string): TreeViewBuilder;
  onAtXBeginningChanged(body: string): TreeViewBuilder;
  onAtXEndChanged(body: string): TreeViewBuilder;
  onAtYBeginningChanged(body: string): TreeViewBuilder;
  onAtYEndChanged(body: string): TreeViewBuilder;
  onBaselineOffsetChanged(body: string): TreeViewBuilder;
  onBottomMarginChanged(body: string): TreeViewBuilder;
  onBottomRowChanged(body: string): TreeViewBuilder;
  onBoundsBehaviorChanged(body: string): TreeViewBuilder;
  onBoundsMovementChanged(body: string): TreeViewBuilder;
  onChildrenChanged(body: string): TreeViewBuilder;
  onChildrenRectChanged(body: string): TreeViewBuilder;
  onClipChanged(body: string): TreeViewBuilder;
  onCollapsed(body: string): TreeViewBuilder;
  onColumnMoved(body: string): TreeViewBuilder;
  onColumnSpacingChanged(body: string): TreeViewBuilder;
  onColumnWidthProviderChanged(body: string): TreeViewBuilder;
  onColumnsChanged(body: string): TreeViewBuilder;
  onContainmentMaskChanged(body: string): TreeViewBuilder;
  onContentHeightChanged(body: string): TreeViewBuilder;
  onContentWidthChanged(body: string): TreeViewBuilder;
  onContentXChanged(body: string): TreeViewBuilder;
  onContentYChanged(body: string): TreeViewBuilder;
  onCurrentColumnChanged(body: string): TreeViewBuilder;
  onCurrentRowChanged(body: string): TreeViewBuilder;
  onDelegateChanged(body: string): TreeViewBuilder;
  onDelegateModelAccessChanged(body: string): TreeViewBuilder;
  onDragEnded(body: string): TreeViewBuilder;
  onDragStarted(body: string): TreeViewBuilder;
  onDraggingChanged(body: string): TreeViewBuilder;
  onDraggingHorizontallyChanged(body: string): TreeViewBuilder;
  onDraggingVerticallyChanged(body: string): TreeViewBuilder;
  onEditTriggersChanged(body: string): TreeViewBuilder;
  onEnabledChanged(body: string): TreeViewBuilder;
  onExpanded(body: string): TreeViewBuilder;
  onFlickDecelerationChanged(body: string): TreeViewBuilder;
  onFlickEnded(body: string): TreeViewBuilder;
  onFlickStarted(body: string): TreeViewBuilder;
  onFlickableDirectionChanged(body: string): TreeViewBuilder;
  onFlickingChanged(body: string): TreeViewBuilder;
  onFlickingHorizontallyChanged(body: string): TreeViewBuilder;
  onFlickingVerticallyChanged(body: string): TreeViewBuilder;
  onFocusChanged(body: string): TreeViewBuilder;
  onFocusPolicyChanged(body: string): TreeViewBuilder;
  onHeightChanged(body: string): TreeViewBuilder;
  onHorizontalOvershootChanged(body: string): TreeViewBuilder;
  onHorizontalVelocityChanged(body: string): TreeViewBuilder;
  onImplicitHeightChanged(body: string): TreeViewBuilder;
  onImplicitWidthChanged(body: string): TreeViewBuilder;
  onInteractiveChanged(body: string): TreeViewBuilder;
  onIsAtBoundaryChanged(body: string): TreeViewBuilder;
  onKeyNavigationEnabledChanged(body: string): TreeViewBuilder;
  onLayoutChanged(body: string): TreeViewBuilder;
  onLeftColumnChanged(body: string): TreeViewBuilder;
  onLeftMarginChanged(body: string): TreeViewBuilder;
  onMaximumFlickVelocityChanged(body: string): TreeViewBuilder;
  onModelChanged(body: string): TreeViewBuilder;
  onMovementEnded(body: string): TreeViewBuilder;
  onMovementStarted(body: string): TreeViewBuilder;
  onMovingChanged(body: string): TreeViewBuilder;
  onMovingHorizontallyChanged(body: string): TreeViewBuilder;
  onMovingVerticallyChanged(body: string): TreeViewBuilder;
  onObjectNameChanged(body: string): TreeViewBuilder;
  onOpacityChanged(body: string): TreeViewBuilder;
  onOriginXChanged(body: string): TreeViewBuilder;
  onOriginYChanged(body: string): TreeViewBuilder;
  onPaletteChanged(body: string): TreeViewBuilder;
  onPaletteCreated(body: string): TreeViewBuilder;
  onParentChanged(body: string): TreeViewBuilder;
  onPixelAlignedChanged(body: string): TreeViewBuilder;
  onPointerNavigationEnabledChanged(body: string): TreeViewBuilder;
  onPressDelayChanged(body: string): TreeViewBuilder;
  onReboundChanged(body: string): TreeViewBuilder;
  onResizableColumnsChanged(body: string): TreeViewBuilder;
  onResizableRowsChanged(body: string): TreeViewBuilder;
  onReuseItemsChanged(body: string): TreeViewBuilder;
  onRightColumnChanged(body: string): TreeViewBuilder;
  onRightMarginChanged(body: string): TreeViewBuilder;
  onRootIndexChanged(body: string): TreeViewBuilder;
  onRotationChanged(body: string): TreeViewBuilder;
  onRowHeightProviderChanged(body: string): TreeViewBuilder;
  onRowMoved(body: string): TreeViewBuilder;
  onRowSpacingChanged(body: string): TreeViewBuilder;
  onRowsChanged(body: string): TreeViewBuilder;
  onScaleChanged(body: string): TreeViewBuilder;
  onSelectionBehaviorChanged(body: string): TreeViewBuilder;
  onSelectionModeChanged(body: string): TreeViewBuilder;
  onSelectionModelChanged(body: string): TreeViewBuilder;
  onSmoothChanged(body: string): TreeViewBuilder;
  onStateChanged(body: string): TreeViewBuilder;
  onSyncDirectionChanged(body: string): TreeViewBuilder;
  onSyncViewChanged(body: string): TreeViewBuilder;
  onSynchronousDragChanged(body: string): TreeViewBuilder;
  onTopMarginChanged(body: string): TreeViewBuilder;
  onTopRowChanged(body: string): TreeViewBuilder;
  onTransformOriginChanged(body: string): TreeViewBuilder;
  onVerticalOvershootChanged(body: string): TreeViewBuilder;
  onVerticalVelocityChanged(body: string): TreeViewBuilder;
  onVisibleChanged(body: string): TreeViewBuilder;
  onVisibleChildrenChanged(body: string): TreeViewBuilder;
  onWidthChanged(body: string): TreeViewBuilder;
  onWindowChanged(body: string): TreeViewBuilder;
  onXChanged(body: string): TreeViewBuilder;
  onYChanged(body: string): TreeViewBuilder;
  onZChanged(body: string): TreeViewBuilder;
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

const TREEVIEW_META: TypeMetadata = {
  typeName: 'TreeView',
  properties: [
    { name: 'acceptedButtons', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'alternatingRows', hasValue: true, hasBinding: true },
    { name: 'animate', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomMargin', hasValue: true, hasBinding: true },
    { name: 'boundsBehavior', hasValue: true, hasBinding: true },
    { name: 'boundsMovement', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'columnSpacing', hasValue: true, hasBinding: true },
    { name: 'columnWidthProvider', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'contentX', hasValue: true, hasBinding: true },
    { name: 'contentY', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'delegateModelAccess', hasValue: true, hasBinding: true },
    { name: 'editTriggers', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'flickDeceleration', hasValue: true, hasBinding: true },
    { name: 'flickableDirection', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interactive', hasValue: true, hasBinding: true },
    { name: 'keyNavigationEnabled', hasValue: true, hasBinding: true },
    { name: 'leftMargin', hasValue: true, hasBinding: true },
    { name: 'maximumFlickVelocity', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pixelAligned', hasValue: true, hasBinding: true },
    { name: 'pointerNavigationEnabled', hasValue: true, hasBinding: true },
    { name: 'pressDelay', hasValue: true, hasBinding: true },
    { name: 'rebound', hasValue: true, hasBinding: true },
    { name: 'resizableColumns', hasValue: true, hasBinding: true },
    { name: 'resizableRows', hasValue: true, hasBinding: true },
    { name: 'reuseItems', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rootIndex', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rowHeightProvider', hasValue: true, hasBinding: true },
    { name: 'rowSpacing', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectionBehavior', hasValue: true, hasBinding: true },
    { name: 'selectionMode', hasValue: true, hasBinding: true },
    { name: 'selectionModel', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'syncDirection', hasValue: true, hasBinding: true },
    { name: 'syncView', hasValue: true, hasBinding: true },
    { name: 'synchronousDrag', hasValue: true, hasBinding: true },
    { name: 'topMargin', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptedButtonsChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAlternatingRowsChanged', paramCount: 0 },
    { handlerName: 'onAnimateChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAtXBeginningChanged', paramCount: 0 },
    { handlerName: 'onAtXEndChanged', paramCount: 0 },
    { handlerName: 'onAtYBeginningChanged', paramCount: 0 },
    { handlerName: 'onAtYEndChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomMarginChanged', paramCount: 0 },
    { handlerName: 'onBottomRowChanged', paramCount: 0 },
    { handlerName: 'onBoundsBehaviorChanged', paramCount: 0 },
    { handlerName: 'onBoundsMovementChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onCollapsed', paramCount: 2 },
    { handlerName: 'onColumnMoved', paramCount: 3 },
    { handlerName: 'onColumnSpacingChanged', paramCount: 0 },
    { handlerName: 'onColumnWidthProviderChanged', paramCount: 0 },
    { handlerName: 'onColumnsChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onContentXChanged', paramCount: 0 },
    { handlerName: 'onContentYChanged', paramCount: 0 },
    { handlerName: 'onCurrentColumnChanged', paramCount: 0 },
    { handlerName: 'onCurrentRowChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelAccessChanged', paramCount: 0 },
    { handlerName: 'onDragEnded', paramCount: 0 },
    { handlerName: 'onDragStarted', paramCount: 0 },
    { handlerName: 'onDraggingChanged', paramCount: 0 },
    { handlerName: 'onDraggingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onDraggingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onEditTriggersChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onExpanded', paramCount: 2 },
    { handlerName: 'onFlickDecelerationChanged', paramCount: 0 },
    { handlerName: 'onFlickEnded', paramCount: 0 },
    { handlerName: 'onFlickStarted', paramCount: 0 },
    { handlerName: 'onFlickableDirectionChanged', paramCount: 0 },
    { handlerName: 'onFlickingChanged', paramCount: 0 },
    { handlerName: 'onFlickingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onFlickingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalOvershootChanged', paramCount: 0 },
    { handlerName: 'onHorizontalVelocityChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
    { handlerName: 'onIsAtBoundaryChanged', paramCount: 0 },
    { handlerName: 'onKeyNavigationEnabledChanged', paramCount: 0 },
    { handlerName: 'onLayoutChanged', paramCount: 0 },
    { handlerName: 'onLeftColumnChanged', paramCount: 0 },
    { handlerName: 'onLeftMarginChanged', paramCount: 0 },
    { handlerName: 'onMaximumFlickVelocityChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onMovementEnded', paramCount: 0 },
    { handlerName: 'onMovementStarted', paramCount: 0 },
    { handlerName: 'onMovingChanged', paramCount: 0 },
    { handlerName: 'onMovingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onMovingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOriginXChanged', paramCount: 0 },
    { handlerName: 'onOriginYChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPixelAlignedChanged', paramCount: 0 },
    { handlerName: 'onPointerNavigationEnabledChanged', paramCount: 0 },
    { handlerName: 'onPressDelayChanged', paramCount: 0 },
    { handlerName: 'onReboundChanged', paramCount: 0 },
    { handlerName: 'onResizableColumnsChanged', paramCount: 0 },
    { handlerName: 'onResizableRowsChanged', paramCount: 0 },
    { handlerName: 'onReuseItemsChanged', paramCount: 0 },
    { handlerName: 'onRightColumnChanged', paramCount: 0 },
    { handlerName: 'onRightMarginChanged', paramCount: 0 },
    { handlerName: 'onRootIndexChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRowHeightProviderChanged', paramCount: 0 },
    { handlerName: 'onRowMoved', paramCount: 3 },
    { handlerName: 'onRowSpacingChanged', paramCount: 0 },
    { handlerName: 'onRowsChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectionBehaviorChanged', paramCount: 0 },
    { handlerName: 'onSelectionModeChanged', paramCount: 0 },
    { handlerName: 'onSelectionModelChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSyncDirectionChanged', paramCount: 0 },
    { handlerName: 'onSyncViewChanged', paramCount: 0 },
    { handlerName: 'onSynchronousDragChanged', paramCount: 0 },
    { handlerName: 'onTopMarginChanged', paramCount: 0 },
    { handlerName: 'onTopRowChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalOvershootChanged', paramCount: 0 },
    { handlerName: 'onVerticalVelocityChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'anchors',
      groupName: 'anchors',
      properties: [
        { name: 'alignWhenCentered', hasValue: true, hasBinding: true },
        { name: 'baseline', hasValue: true, hasBinding: true },
        { name: 'baselineOffset', hasValue: true, hasBinding: true },
        { name: 'bottom', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'centerIn', hasValue: true, hasBinding: true },
        { name: 'fill', hasValue: true, hasBinding: true },
        { name: 'horizontalCenter', hasValue: true, hasBinding: true },
        { name: 'horizontalCenterOffset', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'top', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'verticalCenter', hasValue: true, hasBinding: true },
        { name: 'verticalCenterOffset', hasValue: true, hasBinding: true },
      ],
    },
    {
      methodName: 'layer',
      groupName: 'layer',
      properties: [
        { name: 'effect', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'format', hasValue: true, hasBinding: true },
        { name: 'live', hasValue: true, hasBinding: true },
        { name: 'mipmap', hasValue: true, hasBinding: true },
        { name: 'samplerName', hasValue: true, hasBinding: true },
        { name: 'samples', hasValue: true, hasBinding: true },
        { name: 'smooth', hasValue: true, hasBinding: true },
        { name: 'sourceRect', hasValue: true, hasBinding: true },
        { name: 'textureMirroring', hasValue: true, hasBinding: true },
        { name: 'textureSize', hasValue: true, hasBinding: true },
        { name: 'wrapMode', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
    {
      methodName: 'accessible',
      attachedTypeName: 'Accessible',
      properties: [
        { name: 'checkStateMixed', hasValue: true, hasBinding: true },
        { name: 'checkable', hasValue: true, hasBinding: true },
        { name: 'checked', hasValue: true, hasBinding: true },
        { name: 'defaultButton', hasValue: true, hasBinding: true },
        { name: 'description', hasValue: true, hasBinding: true },
        { name: 'editable', hasValue: true, hasBinding: true },
        { name: 'focusable', hasValue: true, hasBinding: true },
        { name: 'focused', hasValue: true, hasBinding: true },
        { name: 'id', hasValue: true, hasBinding: true },
        { name: 'ignored', hasValue: true, hasBinding: true },
        { name: 'labelFor', hasValue: true, hasBinding: true },
        { name: 'labelledBy', hasValue: true, hasBinding: true },
        { name: 'multiLine', hasValue: true, hasBinding: true },
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'passwordEdit', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
        { name: 'readOnly', hasValue: true, hasBinding: true },
        { name: 'role', hasValue: true, hasBinding: true },
        { name: 'searchEdit', hasValue: true, hasBinding: true },
        { name: 'selectable', hasValue: true, hasBinding: true },
        { name: 'selectableText', hasValue: true, hasBinding: true },
        { name: 'selected', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCheckStateMixedChanged', paramCount: 1 },
        { handlerName: 'onCheckableChanged', paramCount: 1 },
        { handlerName: 'onCheckedChanged', paramCount: 1 },
        { handlerName: 'onDecreaseAction', paramCount: 0 },
        { handlerName: 'onDefaultButtonChanged', paramCount: 1 },
        { handlerName: 'onDescriptionChanged', paramCount: 0 },
        { handlerName: 'onEditableChanged', paramCount: 1 },
        { handlerName: 'onFocusableChanged', paramCount: 1 },
        { handlerName: 'onFocusedChanged', paramCount: 1 },
        { handlerName: 'onIdChanged', paramCount: 0 },
        { handlerName: 'onIgnoredChanged', paramCount: 0 },
        { handlerName: 'onIncreaseAction', paramCount: 0 },
        { handlerName: 'onLabelForChanged', paramCount: 0 },
        { handlerName: 'onLabelledByChanged', paramCount: 0 },
        { handlerName: 'onMultiLineChanged', paramCount: 1 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onNextPageAction', paramCount: 0 },
        { handlerName: 'onPasswordEditChanged', paramCount: 1 },
        { handlerName: 'onPressAction', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 1 },
        { handlerName: 'onPreviousPageAction', paramCount: 0 },
        { handlerName: 'onReadOnlyChanged', paramCount: 1 },
        { handlerName: 'onRoleChanged', paramCount: 0 },
        { handlerName: 'onScrollDownAction', paramCount: 0 },
        { handlerName: 'onScrollLeftAction', paramCount: 0 },
        { handlerName: 'onScrollRightAction', paramCount: 0 },
        { handlerName: 'onScrollUpAction', paramCount: 0 },
        { handlerName: 'onSearchEditChanged', paramCount: 1 },
        { handlerName: 'onSelectableChanged', paramCount: 1 },
        { handlerName: 'onSelectableTextChanged', paramCount: 1 },
        { handlerName: 'onSelectedChanged', paramCount: 1 },
        { handlerName: 'onToggleAction', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'drag',
      attachedTypeName: 'Drag',
      properties: [
        { name: 'active', hasValue: true, hasBinding: true },
        { name: 'dragType', hasValue: true, hasBinding: true },
        { name: 'hotSpot', hasValue: true, hasBinding: true },
        { name: 'imageSource', hasValue: true, hasBinding: true },
        { name: 'imageSourceSize', hasValue: true, hasBinding: true },
        { name: 'keys', hasValue: true, hasBinding: true },
        { name: 'mimeData', hasValue: true, hasBinding: true },
        { name: 'proposedAction', hasValue: true, hasBinding: true },
        { name: 'source', hasValue: true, hasBinding: true },
        { name: 'supportedActions', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onDragFinished', paramCount: 1 },
        { handlerName: 'onDragStarted', paramCount: 0 },
        { handlerName: 'onDragTypeChanged', paramCount: 0 },
        { handlerName: 'onHotSpotChanged', paramCount: 0 },
        { handlerName: 'onImageSourceChanged', paramCount: 0 },
        { handlerName: 'onImageSourceSizeChanged', paramCount: 0 },
        { handlerName: 'onKeysChanged', paramCount: 0 },
        { handlerName: 'onMimeDataChanged', paramCount: 0 },
        { handlerName: 'onProposedActionChanged', paramCount: 0 },
        { handlerName: 'onSourceChanged', paramCount: 0 },
        { handlerName: 'onSupportedActionsChanged', paramCount: 0 },
        { handlerName: 'onTargetChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'enterKey',
      attachedTypeName: 'EnterKey',
      properties: [
        { name: 'type', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'graphicsInfo',
      attachedTypeName: 'GraphicsInfo',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onApiChanged', paramCount: 0 },
        { handlerName: 'onMajorVersionChanged', paramCount: 0 },
        { handlerName: 'onMinorVersionChanged', paramCount: 0 },
        { handlerName: 'onProfileChanged', paramCount: 0 },
        { handlerName: 'onRenderableTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderCompilationTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderSourceTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'gridView',
      attachedTypeName: 'GridView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'keyNavigation',
      attachedTypeName: 'KeyNavigation',
      properties: [
        { name: 'backtab', hasValue: true, hasBinding: true },
        { name: 'down', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'tab', hasValue: true, hasBinding: true },
        { name: 'up', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onBacktabChanged', paramCount: 0 },
        { handlerName: 'onDownChanged', paramCount: 0 },
        { handlerName: 'onLeftChanged', paramCount: 0 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onRightChanged', paramCount: 0 },
        { handlerName: 'onTabChanged', paramCount: 0 },
        { handlerName: 'onUpChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAsteriskPressed', paramCount: 1 },
        { handlerName: 'onBackPressed', paramCount: 1 },
        { handlerName: 'onBacktabPressed', paramCount: 1 },
        { handlerName: 'onCallPressed', paramCount: 1 },
        { handlerName: 'onCancelPressed', paramCount: 1 },
        { handlerName: 'onContext1Pressed', paramCount: 1 },
        { handlerName: 'onContext2Pressed', paramCount: 1 },
        { handlerName: 'onContext3Pressed', paramCount: 1 },
        { handlerName: 'onContext4Pressed', paramCount: 1 },
        { handlerName: 'onDeletePressed', paramCount: 1 },
        { handlerName: 'onDigit0Pressed', paramCount: 1 },
        { handlerName: 'onDigit1Pressed', paramCount: 1 },
        { handlerName: 'onDigit2Pressed', paramCount: 1 },
        { handlerName: 'onDigit3Pressed', paramCount: 1 },
        { handlerName: 'onDigit4Pressed', paramCount: 1 },
        { handlerName: 'onDigit5Pressed', paramCount: 1 },
        { handlerName: 'onDigit6Pressed', paramCount: 1 },
        { handlerName: 'onDigit7Pressed', paramCount: 1 },
        { handlerName: 'onDigit8Pressed', paramCount: 1 },
        { handlerName: 'onDigit9Pressed', paramCount: 1 },
        { handlerName: 'onDownPressed', paramCount: 1 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onEnterPressed', paramCount: 1 },
        { handlerName: 'onEscapePressed', paramCount: 1 },
        { handlerName: 'onFlipPressed', paramCount: 1 },
        { handlerName: 'onHangupPressed', paramCount: 1 },
        { handlerName: 'onLeftPressed', paramCount: 1 },
        { handlerName: 'onMenuPressed', paramCount: 1 },
        { handlerName: 'onNoPressed', paramCount: 1 },
        { handlerName: 'onNumberSignPressed', paramCount: 1 },
        { handlerName: 'onPressed', paramCount: 1 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 1 },
        { handlerName: 'onReturnPressed', paramCount: 1 },
        { handlerName: 'onRightPressed', paramCount: 1 },
        { handlerName: 'onSelectPressed', paramCount: 1 },
        { handlerName: 'onShortcutOverride', paramCount: 1 },
        { handlerName: 'onSpacePressed', paramCount: 1 },
        { handlerName: 'onTabPressed', paramCount: 1 },
        { handlerName: 'onUpPressed', paramCount: 1 },
        { handlerName: 'onVolumeDownPressed', paramCount: 1 },
        { handlerName: 'onVolumeUpPressed', paramCount: 1 },
        { handlerName: 'onYesPressed', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'layoutMirroring',
      attachedTypeName: 'LayoutMirroring',
      properties: [
        { name: 'childrenInherit', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onChildrenInheritChanged', paramCount: 0 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'listView',
      attachedTypeName: 'ListView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'pathView',
      attachedTypeName: 'PathView',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onPathChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'positioner',
      attachedTypeName: 'Positioner',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsFirstItemChanged', paramCount: 0 },
        { handlerName: 'onIsLastItemChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'safeArea',
      attachedTypeName: 'SafeArea',
      properties: [
        { name: 'additionalMargins', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdditionalMarginsChanged', paramCount: 0 },
        { handlerName: 'onMarginsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'screen',
      attachedTypeName: 'Screen',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDesktopGeometryChanged', paramCount: 0 },
        { handlerName: 'onDevicePixelRatioChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onLogicalPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onManufacturerChanged', paramCount: 0 },
        { handlerName: 'onModelChanged', paramCount: 0 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onOrientationChanged', paramCount: 0 },
        { handlerName: 'onPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onPrimaryOrientationChanged', paramCount: 0 },
        { handlerName: 'onSerialNumberChanged', paramCount: 0 },
        { handlerName: 'onVirtualXChanged', paramCount: 0 },
        { handlerName: 'onVirtualYChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'tableView',
      attachedTypeName: 'TableView',
      properties: [
        { name: 'editDelegate', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCommit', paramCount: 0 },
        { handlerName: 'onEditDelegateChanged', paramCount: 0 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'viewTransition',
      attachedTypeName: 'ViewTransition',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDestinationChanged', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onItemChanged', paramCount: 0 },
        { handlerName: 'onTargetIndexesChanged', paramCount: 0 },
        { handlerName: 'onTargetItemsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'window',
      attachedTypeName: 'Window',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onActiveFocusItemChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onVisibilityChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function TreeView(): TreeViewBuilder {
  return createFluentBuilder('TreeView', TREEVIEW_META) as unknown as TreeViewBuilder;
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
