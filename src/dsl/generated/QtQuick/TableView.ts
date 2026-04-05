// AUTO-GENERATED — DO NOT EDIT
// Type: TableView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
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
export interface TableViewBuilder {
  id(id: string): TableViewBuilder;
  child(obj: QmlObjectBuilder): TableViewBuilder;

  acceptedButtons(value: QmlEnumToken): TableViewBuilder;
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
  boundsBehavior(value: QmlEnumToken): TableViewBuilder;
  boundsBehaviorBind(expr: string): TableViewBuilder;
  boundsMovement(value: QmlEnumToken): TableViewBuilder;
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
  delegateModelAccess(value: QmlEnumToken): TableViewBuilder;
  delegateModelAccessBind(expr: string): TableViewBuilder;
  editTriggers(value: QmlEnumToken): TableViewBuilder;
  editTriggersBind(expr: string): TableViewBuilder;
  enabled(value: boolean): TableViewBuilder;
  enabledBind(expr: string): TableViewBuilder;
  flickDeceleration(value: number): TableViewBuilder;
  flickDecelerationBind(expr: string): TableViewBuilder;
  flickableDirection(value: QmlEnumToken): TableViewBuilder;
  flickableDirectionBind(expr: string): TableViewBuilder;
  focus(value: boolean): TableViewBuilder;
  focusBind(expr: string): TableViewBuilder;
  focusPolicy(value: QmlEnumToken): TableViewBuilder;
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
  selectionBehavior(value: QmlEnumToken): TableViewBuilder;
  selectionBehaviorBind(expr: string): TableViewBuilder;
  selectionMode(value: QmlEnumToken): TableViewBuilder;
  selectionModeBind(expr: string): TableViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): TableViewBuilder;
  selectionModelBind(expr: string): TableViewBuilder;
  smooth(value: boolean): TableViewBuilder;
  smoothBind(expr: string): TableViewBuilder;
  state(value: string): TableViewBuilder;
  stateBind(expr: string): TableViewBuilder;
  syncDirection(value: QmlEnumToken): TableViewBuilder;
  syncDirectionBind(expr: string): TableViewBuilder;
  syncView(value: TableViewBuilder): TableViewBuilder;
  syncViewBind(expr: string): TableViewBuilder;
  synchronousDrag(value: boolean): TableViewBuilder;
  synchronousDragBind(expr: string): TableViewBuilder;
  topMargin(value: number): TableViewBuilder;
  topMarginBind(expr: string): TableViewBuilder;
  transformOrigin(value: QmlEnumToken): TableViewBuilder;
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
  onAcceptedButtonsChanged(body: string): TableViewBuilder;
  onActiveFocusChanged(body: string): TableViewBuilder;
  onActiveFocusOnTabChanged(body: string): TableViewBuilder;
  onAlternatingRowsChanged(body: string): TableViewBuilder;
  onAnimateChanged(body: string): TableViewBuilder;
  onAntialiasingChanged(body: string): TableViewBuilder;
  onAtXBeginningChanged(body: string): TableViewBuilder;
  onAtXEndChanged(body: string): TableViewBuilder;
  onAtYBeginningChanged(body: string): TableViewBuilder;
  onAtYEndChanged(body: string): TableViewBuilder;
  onBaselineOffsetChanged(body: string): TableViewBuilder;
  onBottomMarginChanged(body: string): TableViewBuilder;
  onBottomRowChanged(body: string): TableViewBuilder;
  onBoundsBehaviorChanged(body: string): TableViewBuilder;
  onBoundsMovementChanged(body: string): TableViewBuilder;
  onChildrenChanged(body: string): TableViewBuilder;
  onChildrenRectChanged(body: string): TableViewBuilder;
  onClipChanged(body: string): TableViewBuilder;
  onColumnMoved(body: string): TableViewBuilder;
  onColumnSpacingChanged(body: string): TableViewBuilder;
  onColumnWidthProviderChanged(body: string): TableViewBuilder;
  onColumnsChanged(body: string): TableViewBuilder;
  onContainmentMaskChanged(body: string): TableViewBuilder;
  onContentHeightChanged(body: string): TableViewBuilder;
  onContentWidthChanged(body: string): TableViewBuilder;
  onContentXChanged(body: string): TableViewBuilder;
  onContentYChanged(body: string): TableViewBuilder;
  onCurrentColumnChanged(body: string): TableViewBuilder;
  onCurrentRowChanged(body: string): TableViewBuilder;
  onDelegateChanged(body: string): TableViewBuilder;
  onDelegateModelAccessChanged(body: string): TableViewBuilder;
  onDragEnded(body: string): TableViewBuilder;
  onDragStarted(body: string): TableViewBuilder;
  onDraggingChanged(body: string): TableViewBuilder;
  onDraggingHorizontallyChanged(body: string): TableViewBuilder;
  onDraggingVerticallyChanged(body: string): TableViewBuilder;
  onEditTriggersChanged(body: string): TableViewBuilder;
  onEnabledChanged(body: string): TableViewBuilder;
  onFlickDecelerationChanged(body: string): TableViewBuilder;
  onFlickEnded(body: string): TableViewBuilder;
  onFlickStarted(body: string): TableViewBuilder;
  onFlickableDirectionChanged(body: string): TableViewBuilder;
  onFlickingChanged(body: string): TableViewBuilder;
  onFlickingHorizontallyChanged(body: string): TableViewBuilder;
  onFlickingVerticallyChanged(body: string): TableViewBuilder;
  onFocusChanged(body: string): TableViewBuilder;
  onFocusPolicyChanged(body: string): TableViewBuilder;
  onHeightChanged(body: string): TableViewBuilder;
  onHorizontalOvershootChanged(body: string): TableViewBuilder;
  onHorizontalVelocityChanged(body: string): TableViewBuilder;
  onImplicitHeightChanged(body: string): TableViewBuilder;
  onImplicitWidthChanged(body: string): TableViewBuilder;
  onInteractiveChanged(body: string): TableViewBuilder;
  onIsAtBoundaryChanged(body: string): TableViewBuilder;
  onKeyNavigationEnabledChanged(body: string): TableViewBuilder;
  onLayoutChanged(body: string): TableViewBuilder;
  onLeftColumnChanged(body: string): TableViewBuilder;
  onLeftMarginChanged(body: string): TableViewBuilder;
  onMaximumFlickVelocityChanged(body: string): TableViewBuilder;
  onModelChanged(body: string): TableViewBuilder;
  onMovementEnded(body: string): TableViewBuilder;
  onMovementStarted(body: string): TableViewBuilder;
  onMovingChanged(body: string): TableViewBuilder;
  onMovingHorizontallyChanged(body: string): TableViewBuilder;
  onMovingVerticallyChanged(body: string): TableViewBuilder;
  onObjectNameChanged(body: string): TableViewBuilder;
  onOpacityChanged(body: string): TableViewBuilder;
  onOriginXChanged(body: string): TableViewBuilder;
  onOriginYChanged(body: string): TableViewBuilder;
  onPaletteChanged(body: string): TableViewBuilder;
  onPaletteCreated(body: string): TableViewBuilder;
  onParentChanged(body: string): TableViewBuilder;
  onPixelAlignedChanged(body: string): TableViewBuilder;
  onPointerNavigationEnabledChanged(body: string): TableViewBuilder;
  onPressDelayChanged(body: string): TableViewBuilder;
  onReboundChanged(body: string): TableViewBuilder;
  onResizableColumnsChanged(body: string): TableViewBuilder;
  onResizableRowsChanged(body: string): TableViewBuilder;
  onReuseItemsChanged(body: string): TableViewBuilder;
  onRightColumnChanged(body: string): TableViewBuilder;
  onRightMarginChanged(body: string): TableViewBuilder;
  onRotationChanged(body: string): TableViewBuilder;
  onRowHeightProviderChanged(body: string): TableViewBuilder;
  onRowMoved(body: string): TableViewBuilder;
  onRowSpacingChanged(body: string): TableViewBuilder;
  onRowsChanged(body: string): TableViewBuilder;
  onScaleChanged(body: string): TableViewBuilder;
  onSelectionBehaviorChanged(body: string): TableViewBuilder;
  onSelectionModeChanged(body: string): TableViewBuilder;
  onSelectionModelChanged(body: string): TableViewBuilder;
  onSmoothChanged(body: string): TableViewBuilder;
  onStateChanged(body: string): TableViewBuilder;
  onSyncDirectionChanged(body: string): TableViewBuilder;
  onSyncViewChanged(body: string): TableViewBuilder;
  onSynchronousDragChanged(body: string): TableViewBuilder;
  onTopMarginChanged(body: string): TableViewBuilder;
  onTopRowChanged(body: string): TableViewBuilder;
  onTransformOriginChanged(body: string): TableViewBuilder;
  onVerticalOvershootChanged(body: string): TableViewBuilder;
  onVerticalVelocityChanged(body: string): TableViewBuilder;
  onVisibleChanged(body: string): TableViewBuilder;
  onVisibleChildrenChanged(body: string): TableViewBuilder;
  onWidthChanged(body: string): TableViewBuilder;
  onWindowChanged(body: string): TableViewBuilder;
  onXChanged(body: string): TableViewBuilder;
  onYChanged(body: string): TableViewBuilder;
  onZChanged(body: string): TableViewBuilder;
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

const TABLEVIEW_META: TypeMetadata = {
  typeName: 'TableView',
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onPathChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'positioner',
      attachedTypeName: 'Positioner',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
  defaultProperty: 'flickableData',
};

export function TableView(): TableViewBuilder {
  return createFluentBuilder('TableView', TABLEVIEW_META) as unknown as TableViewBuilder;
}

export namespace TableView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('TableView', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('TableView', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken('TableView', 'BoundsBehavior', 'OvershootBounds');
    export const DragAndOvershootBounds = createEnumToken('TableView', 'BoundsBehavior', 'DragAndOvershootBounds');
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken('TableView', 'BoundsMovement', 'FollowBoundsBehavior');
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
    export const ItemClipsChildrenToShape = createEnumToken('TableView', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('TableView', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('TableView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TableView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TableView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TableView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('TableView', 'Flags', 'ItemObservesViewport');
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken('TableView', 'FlickableDirection', 'AutoFlickDirection');
    export const HorizontalFlick = createEnumToken('TableView', 'FlickableDirection', 'HorizontalFlick');
    export const VerticalFlick = createEnumToken('TableView', 'FlickableDirection', 'VerticalFlick');
    export const HorizontalAndVerticalFlick = createEnumToken('TableView', 'FlickableDirection', 'HorizontalAndVerticalFlick');
    export const AutoFlickIfNeeded = createEnumToken('TableView', 'FlickableDirection', 'AutoFlickIfNeeded');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('TableView', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('TableView', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('TableView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('TableView', 'ItemChange', 'ItemTransformHasChanged');
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
    export const SelectionDisabled = createEnumToken('TableView', 'SelectionBehavior', 'SelectionDisabled');
    export const SelectCells = createEnumToken('TableView', 'SelectionBehavior', 'SelectCells');
    export const SelectRows = createEnumToken('TableView', 'SelectionBehavior', 'SelectRows');
    export const SelectColumns = createEnumToken('TableView', 'SelectionBehavior', 'SelectColumns');
  }
  export namespace SelectionMode {
    export const SingleSelection = createEnumToken('TableView', 'SelectionMode', 'SingleSelection');
    export const ContiguousSelection = createEnumToken('TableView', 'SelectionMode', 'ContiguousSelection');
    export const ExtendedSelection = createEnumToken('TableView', 'SelectionMode', 'ExtendedSelection');
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
