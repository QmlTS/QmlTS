// AUTO-GENERATED — DO NOT EDIT
// Type: VerticalHeaderView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemSelectionModelBuilder } from '../QtQml.Models/ItemSelectionModel.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TableViewBuilder } from '../QtQuick/TableView.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
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
export interface VerticalHeaderViewBuilder {
  id(id: string): VerticalHeaderViewBuilder;
  child(obj: QmlObjectBuilder): VerticalHeaderViewBuilder;

  acceptedButtons(value: QmlEnumToken): VerticalHeaderViewBuilder;
  acceptedButtonsBind(expr: string): VerticalHeaderViewBuilder;
  activeFocusOnTab(value: boolean): VerticalHeaderViewBuilder;
  activeFocusOnTabBind(expr: string): VerticalHeaderViewBuilder;
  alternatingRows(value: boolean): VerticalHeaderViewBuilder;
  alternatingRowsBind(expr: string): VerticalHeaderViewBuilder;
  animate(value: boolean): VerticalHeaderViewBuilder;
  animateBind(expr: string): VerticalHeaderViewBuilder;
  antialiasing(value: boolean): VerticalHeaderViewBuilder;
  antialiasingBind(expr: string): VerticalHeaderViewBuilder;
  baselineOffset(value: number): VerticalHeaderViewBuilder;
  baselineOffsetBind(expr: string): VerticalHeaderViewBuilder;
  bottomMargin(value: number): VerticalHeaderViewBuilder;
  bottomMarginBind(expr: string): VerticalHeaderViewBuilder;
  boundsBehavior(value: QmlEnumToken): VerticalHeaderViewBuilder;
  boundsBehaviorBind(expr: string): VerticalHeaderViewBuilder;
  boundsMovement(value: QmlEnumToken): VerticalHeaderViewBuilder;
  boundsMovementBind(expr: string): VerticalHeaderViewBuilder;
  clip(value: boolean): VerticalHeaderViewBuilder;
  clipBind(expr: string): VerticalHeaderViewBuilder;
  columnSpacing(value: number): VerticalHeaderViewBuilder;
  columnSpacingBind(expr: string): VerticalHeaderViewBuilder;
  columnWidthProvider(value: QmlValue): VerticalHeaderViewBuilder;
  columnWidthProviderBind(expr: string): VerticalHeaderViewBuilder;
  containmentMask(value: QtObjectBuilder): VerticalHeaderViewBuilder;
  containmentMaskBind(expr: string): VerticalHeaderViewBuilder;
  contentHeight(value: number): VerticalHeaderViewBuilder;
  contentHeightBind(expr: string): VerticalHeaderViewBuilder;
  contentWidth(value: number): VerticalHeaderViewBuilder;
  contentWidthBind(expr: string): VerticalHeaderViewBuilder;
  contentX(value: number): VerticalHeaderViewBuilder;
  contentXBind(expr: string): VerticalHeaderViewBuilder;
  contentY(value: number): VerticalHeaderViewBuilder;
  contentYBind(expr: string): VerticalHeaderViewBuilder;
  delegate(value: QmlComponent): VerticalHeaderViewBuilder;
  delegateBind(expr: string): VerticalHeaderViewBuilder;
  delegateModelAccess(value: QmlEnumToken): VerticalHeaderViewBuilder;
  delegateModelAccessBind(expr: string): VerticalHeaderViewBuilder;
  editTriggers(value: QmlEnumToken): VerticalHeaderViewBuilder;
  editTriggersBind(expr: string): VerticalHeaderViewBuilder;
  enabled(value: boolean): VerticalHeaderViewBuilder;
  enabledBind(expr: string): VerticalHeaderViewBuilder;
  flickDeceleration(value: number): VerticalHeaderViewBuilder;
  flickDecelerationBind(expr: string): VerticalHeaderViewBuilder;
  flickableDirection(value: QmlEnumToken): VerticalHeaderViewBuilder;
  flickableDirectionBind(expr: string): VerticalHeaderViewBuilder;
  focus(value: boolean): VerticalHeaderViewBuilder;
  focusBind(expr: string): VerticalHeaderViewBuilder;
  focusPolicy(value: QmlEnumToken): VerticalHeaderViewBuilder;
  focusPolicyBind(expr: string): VerticalHeaderViewBuilder;
  height(value: number): VerticalHeaderViewBuilder;
  heightBind(expr: string): VerticalHeaderViewBuilder;
  implicitHeight(value: number): VerticalHeaderViewBuilder;
  implicitHeightBind(expr: string): VerticalHeaderViewBuilder;
  implicitWidth(value: number): VerticalHeaderViewBuilder;
  implicitWidthBind(expr: string): VerticalHeaderViewBuilder;
  interactive(value: boolean): VerticalHeaderViewBuilder;
  interactiveBind(expr: string): VerticalHeaderViewBuilder;
  keyNavigationEnabled(value: boolean): VerticalHeaderViewBuilder;
  keyNavigationEnabledBind(expr: string): VerticalHeaderViewBuilder;
  leftMargin(value: number): VerticalHeaderViewBuilder;
  leftMarginBind(expr: string): VerticalHeaderViewBuilder;
  maximumFlickVelocity(value: number): VerticalHeaderViewBuilder;
  maximumFlickVelocityBind(expr: string): VerticalHeaderViewBuilder;
  model(value: QmlValue): VerticalHeaderViewBuilder;
  modelBind(expr: string): VerticalHeaderViewBuilder;
  movableRows(value: boolean): VerticalHeaderViewBuilder;
  movableRowsBind(expr: string): VerticalHeaderViewBuilder;
  objectName(value: string): VerticalHeaderViewBuilder;
  objectNameBind(expr: string): VerticalHeaderViewBuilder;
  opacity(value: number): VerticalHeaderViewBuilder;
  opacityBind(expr: string): VerticalHeaderViewBuilder;
  palette(value: PaletteBuilder): VerticalHeaderViewBuilder;
  paletteBind(expr: string): VerticalHeaderViewBuilder;
  parent(value: ItemBuilder): VerticalHeaderViewBuilder;
  parentBind(expr: string): VerticalHeaderViewBuilder;
  pixelAligned(value: boolean): VerticalHeaderViewBuilder;
  pixelAlignedBind(expr: string): VerticalHeaderViewBuilder;
  pointerNavigationEnabled(value: boolean): VerticalHeaderViewBuilder;
  pointerNavigationEnabledBind(expr: string): VerticalHeaderViewBuilder;
  pressDelay(value: number): VerticalHeaderViewBuilder;
  pressDelayBind(expr: string): VerticalHeaderViewBuilder;
  rebound(value: TransitionBuilder): VerticalHeaderViewBuilder;
  reboundBind(expr: string): VerticalHeaderViewBuilder;
  resizableColumns(value: boolean): VerticalHeaderViewBuilder;
  resizableColumnsBind(expr: string): VerticalHeaderViewBuilder;
  resizableRows(value: boolean): VerticalHeaderViewBuilder;
  resizableRowsBind(expr: string): VerticalHeaderViewBuilder;
  reuseItems(value: boolean): VerticalHeaderViewBuilder;
  reuseItemsBind(expr: string): VerticalHeaderViewBuilder;
  rightMargin(value: number): VerticalHeaderViewBuilder;
  rightMarginBind(expr: string): VerticalHeaderViewBuilder;
  rotation(value: number): VerticalHeaderViewBuilder;
  rotationBind(expr: string): VerticalHeaderViewBuilder;
  rowHeightProvider(value: QmlValue): VerticalHeaderViewBuilder;
  rowHeightProviderBind(expr: string): VerticalHeaderViewBuilder;
  rowSpacing(value: number): VerticalHeaderViewBuilder;
  rowSpacingBind(expr: string): VerticalHeaderViewBuilder;
  scale(value: number): VerticalHeaderViewBuilder;
  scaleBind(expr: string): VerticalHeaderViewBuilder;
  selectionBehavior(value: QmlEnumToken): VerticalHeaderViewBuilder;
  selectionBehaviorBind(expr: string): VerticalHeaderViewBuilder;
  selectionMode(value: QmlEnumToken): VerticalHeaderViewBuilder;
  selectionModeBind(expr: string): VerticalHeaderViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): VerticalHeaderViewBuilder;
  selectionModelBind(expr: string): VerticalHeaderViewBuilder;
  smooth(value: boolean): VerticalHeaderViewBuilder;
  smoothBind(expr: string): VerticalHeaderViewBuilder;
  state(value: string): VerticalHeaderViewBuilder;
  stateBind(expr: string): VerticalHeaderViewBuilder;
  syncDirection(value: QmlEnumToken): VerticalHeaderViewBuilder;
  syncDirectionBind(expr: string): VerticalHeaderViewBuilder;
  syncView(value: TableViewBuilder): VerticalHeaderViewBuilder;
  syncViewBind(expr: string): VerticalHeaderViewBuilder;
  synchronousDrag(value: boolean): VerticalHeaderViewBuilder;
  synchronousDragBind(expr: string): VerticalHeaderViewBuilder;
  textRole(value: string): VerticalHeaderViewBuilder;
  textRoleBind(expr: string): VerticalHeaderViewBuilder;
  topMargin(value: number): VerticalHeaderViewBuilder;
  topMarginBind(expr: string): VerticalHeaderViewBuilder;
  transformOrigin(value: QmlEnumToken): VerticalHeaderViewBuilder;
  transformOriginBind(expr: string): VerticalHeaderViewBuilder;
  visible(value: boolean): VerticalHeaderViewBuilder;
  visibleBind(expr: string): VerticalHeaderViewBuilder;
  width(value: number): VerticalHeaderViewBuilder;
  widthBind(expr: string): VerticalHeaderViewBuilder;
  x(value: number): VerticalHeaderViewBuilder;
  xBind(expr: string): VerticalHeaderViewBuilder;
  y(value: number): VerticalHeaderViewBuilder;
  yBind(expr: string): VerticalHeaderViewBuilder;
  z(value: number): VerticalHeaderViewBuilder;
  zBind(expr: string): VerticalHeaderViewBuilder;
  onAcceptedButtonsChanged(body: string): VerticalHeaderViewBuilder;
  onActiveFocusChanged(body: string): VerticalHeaderViewBuilder;
  onActiveFocusOnTabChanged(body: string): VerticalHeaderViewBuilder;
  onAlternatingRowsChanged(body: string): VerticalHeaderViewBuilder;
  onAnimateChanged(body: string): VerticalHeaderViewBuilder;
  onAntialiasingChanged(body: string): VerticalHeaderViewBuilder;
  onAtXBeginningChanged(body: string): VerticalHeaderViewBuilder;
  onAtXEndChanged(body: string): VerticalHeaderViewBuilder;
  onAtYBeginningChanged(body: string): VerticalHeaderViewBuilder;
  onAtYEndChanged(body: string): VerticalHeaderViewBuilder;
  onBaselineOffsetChanged(body: string): VerticalHeaderViewBuilder;
  onBottomMarginChanged(body: string): VerticalHeaderViewBuilder;
  onBottomRowChanged(body: string): VerticalHeaderViewBuilder;
  onBoundsBehaviorChanged(body: string): VerticalHeaderViewBuilder;
  onBoundsMovementChanged(body: string): VerticalHeaderViewBuilder;
  onChildrenChanged(body: string): VerticalHeaderViewBuilder;
  onChildrenRectChanged(body: string): VerticalHeaderViewBuilder;
  onClipChanged(body: string): VerticalHeaderViewBuilder;
  onColumnMoved(body: string): VerticalHeaderViewBuilder;
  onColumnSpacingChanged(body: string): VerticalHeaderViewBuilder;
  onColumnWidthProviderChanged(body: string): VerticalHeaderViewBuilder;
  onColumnsChanged(body: string): VerticalHeaderViewBuilder;
  onContainmentMaskChanged(body: string): VerticalHeaderViewBuilder;
  onContentHeightChanged(body: string): VerticalHeaderViewBuilder;
  onContentWidthChanged(body: string): VerticalHeaderViewBuilder;
  onContentXChanged(body: string): VerticalHeaderViewBuilder;
  onContentYChanged(body: string): VerticalHeaderViewBuilder;
  onCurrentColumnChanged(body: string): VerticalHeaderViewBuilder;
  onCurrentRowChanged(body: string): VerticalHeaderViewBuilder;
  onDelegateChanged(body: string): VerticalHeaderViewBuilder;
  onDelegateModelAccessChanged(body: string): VerticalHeaderViewBuilder;
  onDragEnded(body: string): VerticalHeaderViewBuilder;
  onDragStarted(body: string): VerticalHeaderViewBuilder;
  onDraggingChanged(body: string): VerticalHeaderViewBuilder;
  onDraggingHorizontallyChanged(body: string): VerticalHeaderViewBuilder;
  onDraggingVerticallyChanged(body: string): VerticalHeaderViewBuilder;
  onEditTriggersChanged(body: string): VerticalHeaderViewBuilder;
  onEnabledChanged(body: string): VerticalHeaderViewBuilder;
  onFlickDecelerationChanged(body: string): VerticalHeaderViewBuilder;
  onFlickEnded(body: string): VerticalHeaderViewBuilder;
  onFlickStarted(body: string): VerticalHeaderViewBuilder;
  onFlickableDirectionChanged(body: string): VerticalHeaderViewBuilder;
  onFlickingChanged(body: string): VerticalHeaderViewBuilder;
  onFlickingHorizontallyChanged(body: string): VerticalHeaderViewBuilder;
  onFlickingVerticallyChanged(body: string): VerticalHeaderViewBuilder;
  onFocusChanged(body: string): VerticalHeaderViewBuilder;
  onFocusPolicyChanged(body: string): VerticalHeaderViewBuilder;
  onHeightChanged(body: string): VerticalHeaderViewBuilder;
  onHorizontalOvershootChanged(body: string): VerticalHeaderViewBuilder;
  onHorizontalVelocityChanged(body: string): VerticalHeaderViewBuilder;
  onImplicitHeightChanged(body: string): VerticalHeaderViewBuilder;
  onImplicitWidthChanged(body: string): VerticalHeaderViewBuilder;
  onInteractiveChanged(body: string): VerticalHeaderViewBuilder;
  onIsAtBoundaryChanged(body: string): VerticalHeaderViewBuilder;
  onKeyNavigationEnabledChanged(body: string): VerticalHeaderViewBuilder;
  onLayoutChanged(body: string): VerticalHeaderViewBuilder;
  onLeftColumnChanged(body: string): VerticalHeaderViewBuilder;
  onLeftMarginChanged(body: string): VerticalHeaderViewBuilder;
  onMaximumFlickVelocityChanged(body: string): VerticalHeaderViewBuilder;
  onModelChanged(body: string): VerticalHeaderViewBuilder;
  onMovableRowsChanged(body: string): VerticalHeaderViewBuilder;
  onMovementEnded(body: string): VerticalHeaderViewBuilder;
  onMovementStarted(body: string): VerticalHeaderViewBuilder;
  onMovingChanged(body: string): VerticalHeaderViewBuilder;
  onMovingHorizontallyChanged(body: string): VerticalHeaderViewBuilder;
  onMovingVerticallyChanged(body: string): VerticalHeaderViewBuilder;
  onObjectNameChanged(body: string): VerticalHeaderViewBuilder;
  onOpacityChanged(body: string): VerticalHeaderViewBuilder;
  onOriginXChanged(body: string): VerticalHeaderViewBuilder;
  onOriginYChanged(body: string): VerticalHeaderViewBuilder;
  onPaletteChanged(body: string): VerticalHeaderViewBuilder;
  onPaletteCreated(body: string): VerticalHeaderViewBuilder;
  onParentChanged(body: string): VerticalHeaderViewBuilder;
  onPixelAlignedChanged(body: string): VerticalHeaderViewBuilder;
  onPointerNavigationEnabledChanged(body: string): VerticalHeaderViewBuilder;
  onPressDelayChanged(body: string): VerticalHeaderViewBuilder;
  onReboundChanged(body: string): VerticalHeaderViewBuilder;
  onResizableColumnsChanged(body: string): VerticalHeaderViewBuilder;
  onResizableRowsChanged(body: string): VerticalHeaderViewBuilder;
  onReuseItemsChanged(body: string): VerticalHeaderViewBuilder;
  onRightColumnChanged(body: string): VerticalHeaderViewBuilder;
  onRightMarginChanged(body: string): VerticalHeaderViewBuilder;
  onRotationChanged(body: string): VerticalHeaderViewBuilder;
  onRowHeightProviderChanged(body: string): VerticalHeaderViewBuilder;
  onRowMoved(body: string): VerticalHeaderViewBuilder;
  onRowSpacingChanged(body: string): VerticalHeaderViewBuilder;
  onRowsChanged(body: string): VerticalHeaderViewBuilder;
  onScaleChanged(body: string): VerticalHeaderViewBuilder;
  onSelectionBehaviorChanged(body: string): VerticalHeaderViewBuilder;
  onSelectionModeChanged(body: string): VerticalHeaderViewBuilder;
  onSelectionModelChanged(body: string): VerticalHeaderViewBuilder;
  onSmoothChanged(body: string): VerticalHeaderViewBuilder;
  onStateChanged(body: string): VerticalHeaderViewBuilder;
  onSyncDirectionChanged(body: string): VerticalHeaderViewBuilder;
  onSyncViewChanged(body: string): VerticalHeaderViewBuilder;
  onSynchronousDragChanged(body: string): VerticalHeaderViewBuilder;
  onTextRoleChanged(body: string): VerticalHeaderViewBuilder;
  onTopMarginChanged(body: string): VerticalHeaderViewBuilder;
  onTopRowChanged(body: string): VerticalHeaderViewBuilder;
  onTransformOriginChanged(body: string): VerticalHeaderViewBuilder;
  onVerticalOvershootChanged(body: string): VerticalHeaderViewBuilder;
  onVerticalVelocityChanged(body: string): VerticalHeaderViewBuilder;
  onVisibleChanged(body: string): VerticalHeaderViewBuilder;
  onVisibleChildrenChanged(body: string): VerticalHeaderViewBuilder;
  onWidthChanged(body: string): VerticalHeaderViewBuilder;
  onWindowChanged(body: string): VerticalHeaderViewBuilder;
  onXChanged(body: string): VerticalHeaderViewBuilder;
  onYChanged(body: string): VerticalHeaderViewBuilder;
  onZChanged(body: string): VerticalHeaderViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): VerticalHeaderViewBuilder;
  layer(setup: (b: LayerBuilder) => void): VerticalHeaderViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): VerticalHeaderViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): VerticalHeaderViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): VerticalHeaderViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): VerticalHeaderViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): VerticalHeaderViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): VerticalHeaderViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): VerticalHeaderViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): VerticalHeaderViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): VerticalHeaderViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): VerticalHeaderViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): VerticalHeaderViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): VerticalHeaderViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): VerticalHeaderViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): VerticalHeaderViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): VerticalHeaderViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): VerticalHeaderViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): VerticalHeaderViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): VerticalHeaderViewBuilder;
}

const VERTICALHEADERVIEW_META: TypeMetadata = {
  typeName: 'VerticalHeaderView',
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
    { name: 'movableRows', hasValue: true, hasBinding: true },
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
    { name: 'textRole', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMovableRowsChanged', paramCount: 0 },
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
    { handlerName: 'onTextRoleChanged', paramCount: 0 },
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
      methodName: 'actionGroup',
      attachedTypeName: 'ActionGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'applicationWindow',
      attachedTypeName: 'ApplicationWindow',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveFocusControlChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onFooterChanged', paramCount: 0 },
        { handlerName: 'onHeaderChanged', paramCount: 0 },
        { handlerName: 'onMenuBarChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'buttonGroup',
      attachedTypeName: 'ButtonGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'contextMenu',
      attachedTypeName: 'ContextMenu',
      properties: [
        { name: 'menu', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onMenuChanged', paramCount: 0 },
        { handlerName: 'onRequested', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'dialogButtonBox',
      attachedTypeName: 'DialogButtonBox',
      properties: [
        { name: 'buttonRole', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onButtonRoleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'overlay',
      attachedTypeName: 'Overlay',
      properties: [
        { name: 'modal', hasValue: true, hasBinding: true },
        { name: 'modeless', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onModalChanged', paramCount: 0 },
        { handlerName: 'onModelessChanged', paramCount: 0 },
        { handlerName: 'onOverlayChanged', paramCount: 0 },
        { handlerName: 'onPressed', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollBar',
      attachedTypeName: 'ScrollBar',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollIndicator',
      attachedTypeName: 'ScrollIndicator',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'selectionRectangle',
      attachedTypeName: 'SelectionRectangle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHoveredChanged', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitView',
      attachedTypeName: 'SplitView',
      properties: [
        { name: 'fillHeight', hasValue: true, hasBinding: true },
        { name: 'fillWidth', hasValue: true, hasBinding: true },
        { name: 'maximumHeight', hasValue: true, hasBinding: true },
        { name: 'maximumWidth', hasValue: true, hasBinding: true },
        { name: 'minimumHeight', hasValue: true, hasBinding: true },
        { name: 'minimumWidth', hasValue: true, hasBinding: true },
        { name: 'preferredHeight', hasValue: true, hasBinding: true },
        { name: 'preferredWidth', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFillHeightChanged', paramCount: 0 },
        { handlerName: 'onFillWidthChanged', paramCount: 0 },
        { handlerName: 'onMaximumHeightChanged', paramCount: 0 },
        { handlerName: 'onMaximumWidthChanged', paramCount: 0 },
        { handlerName: 'onMinimumHeightChanged', paramCount: 0 },
        { handlerName: 'onMinimumWidthChanged', paramCount: 0 },
        { handlerName: 'onPreferredHeightChanged', paramCount: 0 },
        { handlerName: 'onPreferredWidthChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'stackView',
      attachedTypeName: 'StackView',
      properties: [
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActivated', paramCount: 0 },
        { handlerName: 'onActivating', paramCount: 0 },
        { handlerName: 'onDeactivated', paramCount: 0 },
        { handlerName: 'onDeactivating', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onRemoved', paramCount: 0 },
        { handlerName: 'onStatusChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeDelegate',
      attachedTypeName: 'SwipeDelegate',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onIsNextItemChanged', paramCount: 0 },
        { handlerName: 'onIsPreviousItemChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tabBar',
      attachedTypeName: 'TabBar',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onPositionChanged', paramCount: 0 },
        { handlerName: 'onTabBarChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'textArea',
      attachedTypeName: 'TextArea',
      properties: [
        { name: 'flickable', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFlickableChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'toolTip',
      attachedTypeName: 'ToolTip',
      properties: [
        { name: 'delay', hasValue: true, hasBinding: true },
        { name: 'text', hasValue: true, hasBinding: true },
        { name: 'timeout', hasValue: true, hasBinding: true },
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDelayChanged', paramCount: 0 },
        { handlerName: 'onTextChanged', paramCount: 0 },
        { handlerName: 'onTimeoutChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tumbler',
      attachedTypeName: 'Tumbler',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function VerticalHeaderView(): VerticalHeaderViewBuilder {
  return createFluentBuilder('VerticalHeaderView', VERTICALHEADERVIEW_META) as unknown as VerticalHeaderViewBuilder;
}

export namespace VerticalHeaderView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('VerticalHeaderView', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('VerticalHeaderView', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken('VerticalHeaderView', 'BoundsBehavior', 'OvershootBounds');
    export const DragAndOvershootBounds = createEnumToken('VerticalHeaderView', 'BoundsBehavior', 'DragAndOvershootBounds');
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken('VerticalHeaderView', 'BoundsMovement', 'FollowBoundsBehavior');
  }
  export namespace EditTriggers {
    export const NoEditTriggers = createEnumToken('VerticalHeaderView', 'EditTriggers', 'NoEditTriggers');
    export const SingleTapped = createEnumToken('VerticalHeaderView', 'EditTriggers', 'SingleTapped');
    export const DoubleTapped = createEnumToken('VerticalHeaderView', 'EditTriggers', 'DoubleTapped');
    export const SelectedTapped = createEnumToken('VerticalHeaderView', 'EditTriggers', 'SelectedTapped');
    export const EditKeyPressed = createEnumToken('VerticalHeaderView', 'EditTriggers', 'EditKeyPressed');
    export const AnyKeyPressed = createEnumToken('VerticalHeaderView', 'EditTriggers', 'AnyKeyPressed');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('VerticalHeaderView', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('VerticalHeaderView', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('VerticalHeaderView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('VerticalHeaderView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('VerticalHeaderView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('VerticalHeaderView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('VerticalHeaderView', 'Flags', 'ItemObservesViewport');
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken('VerticalHeaderView', 'FlickableDirection', 'AutoFlickDirection');
    export const HorizontalFlick = createEnumToken('VerticalHeaderView', 'FlickableDirection', 'HorizontalFlick');
    export const VerticalFlick = createEnumToken('VerticalHeaderView', 'FlickableDirection', 'VerticalFlick');
    export const HorizontalAndVerticalFlick = createEnumToken('VerticalHeaderView', 'FlickableDirection', 'HorizontalAndVerticalFlick');
    export const AutoFlickIfNeeded = createEnumToken('VerticalHeaderView', 'FlickableDirection', 'AutoFlickIfNeeded');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('VerticalHeaderView', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace PositionMode {
    export const AlignLeft = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignLeft');
    export const AlignRight = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignRight');
    export const AlignHCenter = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignHCenter');
    export const AlignTop = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignTop');
    export const AlignBottom = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignBottom');
    export const AlignVCenter = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignVCenter');
    export const AlignCenter = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignCenter');
    export const Visible = createEnumToken('VerticalHeaderView', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('VerticalHeaderView', 'PositionMode', 'Contain');
  }
  export namespace SelectionBehavior {
    export const SelectionDisabled = createEnumToken('VerticalHeaderView', 'SelectionBehavior', 'SelectionDisabled');
    export const SelectCells = createEnumToken('VerticalHeaderView', 'SelectionBehavior', 'SelectCells');
    export const SelectRows = createEnumToken('VerticalHeaderView', 'SelectionBehavior', 'SelectRows');
    export const SelectColumns = createEnumToken('VerticalHeaderView', 'SelectionBehavior', 'SelectColumns');
  }
  export namespace SelectionMode {
    export const SingleSelection = createEnumToken('VerticalHeaderView', 'SelectionMode', 'SingleSelection');
    export const ContiguousSelection = createEnumToken('VerticalHeaderView', 'SelectionMode', 'ContiguousSelection');
    export const ExtendedSelection = createEnumToken('VerticalHeaderView', 'SelectionMode', 'ExtendedSelection');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'BottomRight');
  }
}
