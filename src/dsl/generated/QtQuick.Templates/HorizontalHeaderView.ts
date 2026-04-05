// AUTO-GENERATED — DO NOT EDIT
// Type: HorizontalHeaderView
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
export interface HorizontalHeaderViewBuilder {
  id(id: string): HorizontalHeaderViewBuilder;
  child(obj: QmlObjectBuilder): HorizontalHeaderViewBuilder;

  acceptedButtons(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  acceptedButtonsBind(expr: string): HorizontalHeaderViewBuilder;
  activeFocusOnTab(value: boolean): HorizontalHeaderViewBuilder;
  activeFocusOnTabBind(expr: string): HorizontalHeaderViewBuilder;
  alternatingRows(value: boolean): HorizontalHeaderViewBuilder;
  alternatingRowsBind(expr: string): HorizontalHeaderViewBuilder;
  animate(value: boolean): HorizontalHeaderViewBuilder;
  animateBind(expr: string): HorizontalHeaderViewBuilder;
  antialiasing(value: boolean): HorizontalHeaderViewBuilder;
  antialiasingBind(expr: string): HorizontalHeaderViewBuilder;
  baselineOffset(value: number): HorizontalHeaderViewBuilder;
  baselineOffsetBind(expr: string): HorizontalHeaderViewBuilder;
  bottomMargin(value: number): HorizontalHeaderViewBuilder;
  bottomMarginBind(expr: string): HorizontalHeaderViewBuilder;
  boundsBehavior(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  boundsBehaviorBind(expr: string): HorizontalHeaderViewBuilder;
  boundsMovement(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  boundsMovementBind(expr: string): HorizontalHeaderViewBuilder;
  clip(value: boolean): HorizontalHeaderViewBuilder;
  clipBind(expr: string): HorizontalHeaderViewBuilder;
  columnSpacing(value: number): HorizontalHeaderViewBuilder;
  columnSpacingBind(expr: string): HorizontalHeaderViewBuilder;
  columnWidthProvider(value: QmlValue): HorizontalHeaderViewBuilder;
  columnWidthProviderBind(expr: string): HorizontalHeaderViewBuilder;
  containmentMask(value: QtObjectBuilder): HorizontalHeaderViewBuilder;
  containmentMaskBind(expr: string): HorizontalHeaderViewBuilder;
  contentHeight(value: number): HorizontalHeaderViewBuilder;
  contentHeightBind(expr: string): HorizontalHeaderViewBuilder;
  contentWidth(value: number): HorizontalHeaderViewBuilder;
  contentWidthBind(expr: string): HorizontalHeaderViewBuilder;
  contentX(value: number): HorizontalHeaderViewBuilder;
  contentXBind(expr: string): HorizontalHeaderViewBuilder;
  contentY(value: number): HorizontalHeaderViewBuilder;
  contentYBind(expr: string): HorizontalHeaderViewBuilder;
  delegate(value: QmlComponent): HorizontalHeaderViewBuilder;
  delegateBind(expr: string): HorizontalHeaderViewBuilder;
  delegateModelAccess(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  delegateModelAccessBind(expr: string): HorizontalHeaderViewBuilder;
  editTriggers(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  editTriggersBind(expr: string): HorizontalHeaderViewBuilder;
  enabled(value: boolean): HorizontalHeaderViewBuilder;
  enabledBind(expr: string): HorizontalHeaderViewBuilder;
  flickDeceleration(value: number): HorizontalHeaderViewBuilder;
  flickDecelerationBind(expr: string): HorizontalHeaderViewBuilder;
  flickableDirection(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  flickableDirectionBind(expr: string): HorizontalHeaderViewBuilder;
  focus(value: boolean): HorizontalHeaderViewBuilder;
  focusBind(expr: string): HorizontalHeaderViewBuilder;
  focusPolicy(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  focusPolicyBind(expr: string): HorizontalHeaderViewBuilder;
  height(value: number): HorizontalHeaderViewBuilder;
  heightBind(expr: string): HorizontalHeaderViewBuilder;
  implicitHeight(value: number): HorizontalHeaderViewBuilder;
  implicitHeightBind(expr: string): HorizontalHeaderViewBuilder;
  implicitWidth(value: number): HorizontalHeaderViewBuilder;
  implicitWidthBind(expr: string): HorizontalHeaderViewBuilder;
  interactive(value: boolean): HorizontalHeaderViewBuilder;
  interactiveBind(expr: string): HorizontalHeaderViewBuilder;
  keyNavigationEnabled(value: boolean): HorizontalHeaderViewBuilder;
  keyNavigationEnabledBind(expr: string): HorizontalHeaderViewBuilder;
  leftMargin(value: number): HorizontalHeaderViewBuilder;
  leftMarginBind(expr: string): HorizontalHeaderViewBuilder;
  maximumFlickVelocity(value: number): HorizontalHeaderViewBuilder;
  maximumFlickVelocityBind(expr: string): HorizontalHeaderViewBuilder;
  model(value: QmlValue): HorizontalHeaderViewBuilder;
  modelBind(expr: string): HorizontalHeaderViewBuilder;
  movableColumns(value: boolean): HorizontalHeaderViewBuilder;
  movableColumnsBind(expr: string): HorizontalHeaderViewBuilder;
  objectName(value: string): HorizontalHeaderViewBuilder;
  objectNameBind(expr: string): HorizontalHeaderViewBuilder;
  opacity(value: number): HorizontalHeaderViewBuilder;
  opacityBind(expr: string): HorizontalHeaderViewBuilder;
  palette(value: PaletteBuilder): HorizontalHeaderViewBuilder;
  paletteBind(expr: string): HorizontalHeaderViewBuilder;
  parent(value: ItemBuilder): HorizontalHeaderViewBuilder;
  parentBind(expr: string): HorizontalHeaderViewBuilder;
  pixelAligned(value: boolean): HorizontalHeaderViewBuilder;
  pixelAlignedBind(expr: string): HorizontalHeaderViewBuilder;
  pointerNavigationEnabled(value: boolean): HorizontalHeaderViewBuilder;
  pointerNavigationEnabledBind(expr: string): HorizontalHeaderViewBuilder;
  pressDelay(value: number): HorizontalHeaderViewBuilder;
  pressDelayBind(expr: string): HorizontalHeaderViewBuilder;
  rebound(value: TransitionBuilder): HorizontalHeaderViewBuilder;
  reboundBind(expr: string): HorizontalHeaderViewBuilder;
  resizableColumns(value: boolean): HorizontalHeaderViewBuilder;
  resizableColumnsBind(expr: string): HorizontalHeaderViewBuilder;
  resizableRows(value: boolean): HorizontalHeaderViewBuilder;
  resizableRowsBind(expr: string): HorizontalHeaderViewBuilder;
  reuseItems(value: boolean): HorizontalHeaderViewBuilder;
  reuseItemsBind(expr: string): HorizontalHeaderViewBuilder;
  rightMargin(value: number): HorizontalHeaderViewBuilder;
  rightMarginBind(expr: string): HorizontalHeaderViewBuilder;
  rotation(value: number): HorizontalHeaderViewBuilder;
  rotationBind(expr: string): HorizontalHeaderViewBuilder;
  rowHeightProvider(value: QmlValue): HorizontalHeaderViewBuilder;
  rowHeightProviderBind(expr: string): HorizontalHeaderViewBuilder;
  rowSpacing(value: number): HorizontalHeaderViewBuilder;
  rowSpacingBind(expr: string): HorizontalHeaderViewBuilder;
  scale(value: number): HorizontalHeaderViewBuilder;
  scaleBind(expr: string): HorizontalHeaderViewBuilder;
  selectionBehavior(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  selectionBehaviorBind(expr: string): HorizontalHeaderViewBuilder;
  selectionMode(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  selectionModeBind(expr: string): HorizontalHeaderViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): HorizontalHeaderViewBuilder;
  selectionModelBind(expr: string): HorizontalHeaderViewBuilder;
  smooth(value: boolean): HorizontalHeaderViewBuilder;
  smoothBind(expr: string): HorizontalHeaderViewBuilder;
  state(value: string): HorizontalHeaderViewBuilder;
  stateBind(expr: string): HorizontalHeaderViewBuilder;
  syncDirection(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  syncDirectionBind(expr: string): HorizontalHeaderViewBuilder;
  syncView(value: TableViewBuilder): HorizontalHeaderViewBuilder;
  syncViewBind(expr: string): HorizontalHeaderViewBuilder;
  synchronousDrag(value: boolean): HorizontalHeaderViewBuilder;
  synchronousDragBind(expr: string): HorizontalHeaderViewBuilder;
  textRole(value: string): HorizontalHeaderViewBuilder;
  textRoleBind(expr: string): HorizontalHeaderViewBuilder;
  topMargin(value: number): HorizontalHeaderViewBuilder;
  topMarginBind(expr: string): HorizontalHeaderViewBuilder;
  transformOrigin(value: QmlEnumToken): HorizontalHeaderViewBuilder;
  transformOriginBind(expr: string): HorizontalHeaderViewBuilder;
  visible(value: boolean): HorizontalHeaderViewBuilder;
  visibleBind(expr: string): HorizontalHeaderViewBuilder;
  width(value: number): HorizontalHeaderViewBuilder;
  widthBind(expr: string): HorizontalHeaderViewBuilder;
  x(value: number): HorizontalHeaderViewBuilder;
  xBind(expr: string): HorizontalHeaderViewBuilder;
  y(value: number): HorizontalHeaderViewBuilder;
  yBind(expr: string): HorizontalHeaderViewBuilder;
  z(value: number): HorizontalHeaderViewBuilder;
  zBind(expr: string): HorizontalHeaderViewBuilder;
  onAcceptedButtonsChanged(body: string): HorizontalHeaderViewBuilder;
  onActiveFocusChanged(body: string): HorizontalHeaderViewBuilder;
  onActiveFocusOnTabChanged(body: string): HorizontalHeaderViewBuilder;
  onAlternatingRowsChanged(body: string): HorizontalHeaderViewBuilder;
  onAnimateChanged(body: string): HorizontalHeaderViewBuilder;
  onAntialiasingChanged(body: string): HorizontalHeaderViewBuilder;
  onAtXBeginningChanged(body: string): HorizontalHeaderViewBuilder;
  onAtXEndChanged(body: string): HorizontalHeaderViewBuilder;
  onAtYBeginningChanged(body: string): HorizontalHeaderViewBuilder;
  onAtYEndChanged(body: string): HorizontalHeaderViewBuilder;
  onBaselineOffsetChanged(body: string): HorizontalHeaderViewBuilder;
  onBottomMarginChanged(body: string): HorizontalHeaderViewBuilder;
  onBottomRowChanged(body: string): HorizontalHeaderViewBuilder;
  onBoundsBehaviorChanged(body: string): HorizontalHeaderViewBuilder;
  onBoundsMovementChanged(body: string): HorizontalHeaderViewBuilder;
  onChildrenChanged(body: string): HorizontalHeaderViewBuilder;
  onChildrenRectChanged(body: string): HorizontalHeaderViewBuilder;
  onClipChanged(body: string): HorizontalHeaderViewBuilder;
  onColumnMoved(body: string): HorizontalHeaderViewBuilder;
  onColumnSpacingChanged(body: string): HorizontalHeaderViewBuilder;
  onColumnWidthProviderChanged(body: string): HorizontalHeaderViewBuilder;
  onColumnsChanged(body: string): HorizontalHeaderViewBuilder;
  onContainmentMaskChanged(body: string): HorizontalHeaderViewBuilder;
  onContentHeightChanged(body: string): HorizontalHeaderViewBuilder;
  onContentWidthChanged(body: string): HorizontalHeaderViewBuilder;
  onContentXChanged(body: string): HorizontalHeaderViewBuilder;
  onContentYChanged(body: string): HorizontalHeaderViewBuilder;
  onCurrentColumnChanged(body: string): HorizontalHeaderViewBuilder;
  onCurrentRowChanged(body: string): HorizontalHeaderViewBuilder;
  onDelegateChanged(body: string): HorizontalHeaderViewBuilder;
  onDelegateModelAccessChanged(body: string): HorizontalHeaderViewBuilder;
  onDragEnded(body: string): HorizontalHeaderViewBuilder;
  onDragStarted(body: string): HorizontalHeaderViewBuilder;
  onDraggingChanged(body: string): HorizontalHeaderViewBuilder;
  onDraggingHorizontallyChanged(body: string): HorizontalHeaderViewBuilder;
  onDraggingVerticallyChanged(body: string): HorizontalHeaderViewBuilder;
  onEditTriggersChanged(body: string): HorizontalHeaderViewBuilder;
  onEnabledChanged(body: string): HorizontalHeaderViewBuilder;
  onFlickDecelerationChanged(body: string): HorizontalHeaderViewBuilder;
  onFlickEnded(body: string): HorizontalHeaderViewBuilder;
  onFlickStarted(body: string): HorizontalHeaderViewBuilder;
  onFlickableDirectionChanged(body: string): HorizontalHeaderViewBuilder;
  onFlickingChanged(body: string): HorizontalHeaderViewBuilder;
  onFlickingHorizontallyChanged(body: string): HorizontalHeaderViewBuilder;
  onFlickingVerticallyChanged(body: string): HorizontalHeaderViewBuilder;
  onFocusChanged(body: string): HorizontalHeaderViewBuilder;
  onFocusPolicyChanged(body: string): HorizontalHeaderViewBuilder;
  onHeightChanged(body: string): HorizontalHeaderViewBuilder;
  onHorizontalOvershootChanged(body: string): HorizontalHeaderViewBuilder;
  onHorizontalVelocityChanged(body: string): HorizontalHeaderViewBuilder;
  onImplicitHeightChanged(body: string): HorizontalHeaderViewBuilder;
  onImplicitWidthChanged(body: string): HorizontalHeaderViewBuilder;
  onInteractiveChanged(body: string): HorizontalHeaderViewBuilder;
  onIsAtBoundaryChanged(body: string): HorizontalHeaderViewBuilder;
  onKeyNavigationEnabledChanged(body: string): HorizontalHeaderViewBuilder;
  onLayoutChanged(body: string): HorizontalHeaderViewBuilder;
  onLeftColumnChanged(body: string): HorizontalHeaderViewBuilder;
  onLeftMarginChanged(body: string): HorizontalHeaderViewBuilder;
  onMaximumFlickVelocityChanged(body: string): HorizontalHeaderViewBuilder;
  onModelChanged(body: string): HorizontalHeaderViewBuilder;
  onMovableColumnsChanged(body: string): HorizontalHeaderViewBuilder;
  onMovementEnded(body: string): HorizontalHeaderViewBuilder;
  onMovementStarted(body: string): HorizontalHeaderViewBuilder;
  onMovingChanged(body: string): HorizontalHeaderViewBuilder;
  onMovingHorizontallyChanged(body: string): HorizontalHeaderViewBuilder;
  onMovingVerticallyChanged(body: string): HorizontalHeaderViewBuilder;
  onObjectNameChanged(body: string): HorizontalHeaderViewBuilder;
  onOpacityChanged(body: string): HorizontalHeaderViewBuilder;
  onOriginXChanged(body: string): HorizontalHeaderViewBuilder;
  onOriginYChanged(body: string): HorizontalHeaderViewBuilder;
  onPaletteChanged(body: string): HorizontalHeaderViewBuilder;
  onPaletteCreated(body: string): HorizontalHeaderViewBuilder;
  onParentChanged(body: string): HorizontalHeaderViewBuilder;
  onPixelAlignedChanged(body: string): HorizontalHeaderViewBuilder;
  onPointerNavigationEnabledChanged(body: string): HorizontalHeaderViewBuilder;
  onPressDelayChanged(body: string): HorizontalHeaderViewBuilder;
  onReboundChanged(body: string): HorizontalHeaderViewBuilder;
  onResizableColumnsChanged(body: string): HorizontalHeaderViewBuilder;
  onResizableRowsChanged(body: string): HorizontalHeaderViewBuilder;
  onReuseItemsChanged(body: string): HorizontalHeaderViewBuilder;
  onRightColumnChanged(body: string): HorizontalHeaderViewBuilder;
  onRightMarginChanged(body: string): HorizontalHeaderViewBuilder;
  onRotationChanged(body: string): HorizontalHeaderViewBuilder;
  onRowHeightProviderChanged(body: string): HorizontalHeaderViewBuilder;
  onRowMoved(body: string): HorizontalHeaderViewBuilder;
  onRowSpacingChanged(body: string): HorizontalHeaderViewBuilder;
  onRowsChanged(body: string): HorizontalHeaderViewBuilder;
  onScaleChanged(body: string): HorizontalHeaderViewBuilder;
  onSelectionBehaviorChanged(body: string): HorizontalHeaderViewBuilder;
  onSelectionModeChanged(body: string): HorizontalHeaderViewBuilder;
  onSelectionModelChanged(body: string): HorizontalHeaderViewBuilder;
  onSmoothChanged(body: string): HorizontalHeaderViewBuilder;
  onStateChanged(body: string): HorizontalHeaderViewBuilder;
  onSyncDirectionChanged(body: string): HorizontalHeaderViewBuilder;
  onSyncViewChanged(body: string): HorizontalHeaderViewBuilder;
  onSynchronousDragChanged(body: string): HorizontalHeaderViewBuilder;
  onTextRoleChanged(body: string): HorizontalHeaderViewBuilder;
  onTopMarginChanged(body: string): HorizontalHeaderViewBuilder;
  onTopRowChanged(body: string): HorizontalHeaderViewBuilder;
  onTransformOriginChanged(body: string): HorizontalHeaderViewBuilder;
  onVerticalOvershootChanged(body: string): HorizontalHeaderViewBuilder;
  onVerticalVelocityChanged(body: string): HorizontalHeaderViewBuilder;
  onVisibleChanged(body: string): HorizontalHeaderViewBuilder;
  onVisibleChildrenChanged(body: string): HorizontalHeaderViewBuilder;
  onWidthChanged(body: string): HorizontalHeaderViewBuilder;
  onWindowChanged(body: string): HorizontalHeaderViewBuilder;
  onXChanged(body: string): HorizontalHeaderViewBuilder;
  onYChanged(body: string): HorizontalHeaderViewBuilder;
  onZChanged(body: string): HorizontalHeaderViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): HorizontalHeaderViewBuilder;
  layer(setup: (b: LayerBuilder) => void): HorizontalHeaderViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): HorizontalHeaderViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): HorizontalHeaderViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): HorizontalHeaderViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): HorizontalHeaderViewBuilder;
}

const HORIZONTALHEADERVIEW_META: TypeMetadata = {
  typeName: 'HorizontalHeaderView',
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
    { name: 'movableColumns', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMovableColumnsChanged', paramCount: 0 },
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function HorizontalHeaderView(): HorizontalHeaderViewBuilder {
  return createFluentBuilder(
    'HorizontalHeaderView',
    HORIZONTALHEADERVIEW_META,
  ) as unknown as HorizontalHeaderViewBuilder;
}

export namespace HorizontalHeaderView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken(
      'HorizontalHeaderView',
      'BoundsBehavior',
      'StopAtBounds',
    );
    export const DragOverBounds = createEnumToken(
      'HorizontalHeaderView',
      'BoundsBehavior',
      'DragOverBounds',
    );
    export const OvershootBounds = createEnumToken(
      'HorizontalHeaderView',
      'BoundsBehavior',
      'OvershootBounds',
    );
    export const DragAndOvershootBounds = createEnumToken(
      'HorizontalHeaderView',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'HorizontalHeaderView',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace EditTriggers {
    export const NoEditTriggers = createEnumToken(
      'HorizontalHeaderView',
      'EditTriggers',
      'NoEditTriggers',
    );
    export const SingleTapped = createEnumToken(
      'HorizontalHeaderView',
      'EditTriggers',
      'SingleTapped',
    );
    export const DoubleTapped = createEnumToken(
      'HorizontalHeaderView',
      'EditTriggers',
      'DoubleTapped',
    );
    export const SelectedTapped = createEnumToken(
      'HorizontalHeaderView',
      'EditTriggers',
      'SelectedTapped',
    );
    export const EditKeyPressed = createEnumToken(
      'HorizontalHeaderView',
      'EditTriggers',
      'EditKeyPressed',
    );
    export const AnyKeyPressed = createEnumToken(
      'HorizontalHeaderView',
      'EditTriggers',
      'AnyKeyPressed',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'HorizontalHeaderView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'HorizontalHeaderView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'HorizontalHeaderView',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'HorizontalHeaderView',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'HorizontalHeaderView',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken(
      'HorizontalHeaderView',
      'Flags',
      'ItemIsViewport',
    );
    export const ItemObservesViewport = createEnumToken(
      'HorizontalHeaderView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'HorizontalHeaderView',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'HorizontalHeaderView',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken(
      'HorizontalHeaderView',
      'FlickableDirection',
      'VerticalFlick',
    );
    export const HorizontalAndVerticalFlick = createEnumToken(
      'HorizontalHeaderView',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'HorizontalHeaderView',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'HorizontalHeaderView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const AlignLeft = createEnumToken('HorizontalHeaderView', 'PositionMode', 'AlignLeft');
    export const AlignRight = createEnumToken('HorizontalHeaderView', 'PositionMode', 'AlignRight');
    export const AlignHCenter = createEnumToken(
      'HorizontalHeaderView',
      'PositionMode',
      'AlignHCenter',
    );
    export const AlignTop = createEnumToken('HorizontalHeaderView', 'PositionMode', 'AlignTop');
    export const AlignBottom = createEnumToken(
      'HorizontalHeaderView',
      'PositionMode',
      'AlignBottom',
    );
    export const AlignVCenter = createEnumToken(
      'HorizontalHeaderView',
      'PositionMode',
      'AlignVCenter',
    );
    export const AlignCenter = createEnumToken(
      'HorizontalHeaderView',
      'PositionMode',
      'AlignCenter',
    );
    export const Visible = createEnumToken('HorizontalHeaderView', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('HorizontalHeaderView', 'PositionMode', 'Contain');
  }
  export namespace SelectionBehavior {
    export const SelectionDisabled = createEnumToken(
      'HorizontalHeaderView',
      'SelectionBehavior',
      'SelectionDisabled',
    );
    export const SelectCells = createEnumToken(
      'HorizontalHeaderView',
      'SelectionBehavior',
      'SelectCells',
    );
    export const SelectRows = createEnumToken(
      'HorizontalHeaderView',
      'SelectionBehavior',
      'SelectRows',
    );
    export const SelectColumns = createEnumToken(
      'HorizontalHeaderView',
      'SelectionBehavior',
      'SelectColumns',
    );
  }
  export namespace SelectionMode {
    export const SingleSelection = createEnumToken(
      'HorizontalHeaderView',
      'SelectionMode',
      'SingleSelection',
    );
    export const ContiguousSelection = createEnumToken(
      'HorizontalHeaderView',
      'SelectionMode',
      'ContiguousSelection',
    );
    export const ExtendedSelection = createEnumToken(
      'HorizontalHeaderView',
      'SelectionMode',
      'ExtendedSelection',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('HorizontalHeaderView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('HorizontalHeaderView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('HorizontalHeaderView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('HorizontalHeaderView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('HorizontalHeaderView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('HorizontalHeaderView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'HorizontalHeaderView',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('HorizontalHeaderView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'HorizontalHeaderView',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
