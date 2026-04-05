// AUTO-GENERATED — DO NOT EDIT
// Type: HorizontalHeaderView
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemSelectionModelBuilder } from '../QtQml.Models/ItemSelectionModel.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TableViewBuilder } from '../QtQuick/TableView.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
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
export interface HorizontalHeaderViewBuilder {
  id(id: string): HorizontalHeaderViewBuilder;
  child(obj: QmlObjectBuilder): HorizontalHeaderViewBuilder;

  acceptedButtons(value: QmlValue): HorizontalHeaderViewBuilder;
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
  boundsBehavior(value: QmlValue): HorizontalHeaderViewBuilder;
  boundsBehaviorBind(expr: string): HorizontalHeaderViewBuilder;
  boundsMovement(value: QmlValue): HorizontalHeaderViewBuilder;
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
  delegateModelAccess(value: QmlValue): HorizontalHeaderViewBuilder;
  delegateModelAccessBind(expr: string): HorizontalHeaderViewBuilder;
  editTriggers(value: QmlValue): HorizontalHeaderViewBuilder;
  editTriggersBind(expr: string): HorizontalHeaderViewBuilder;
  enabled(value: boolean): HorizontalHeaderViewBuilder;
  enabledBind(expr: string): HorizontalHeaderViewBuilder;
  flickDeceleration(value: number): HorizontalHeaderViewBuilder;
  flickDecelerationBind(expr: string): HorizontalHeaderViewBuilder;
  flickableDirection(value: QmlValue): HorizontalHeaderViewBuilder;
  flickableDirectionBind(expr: string): HorizontalHeaderViewBuilder;
  focus(value: boolean): HorizontalHeaderViewBuilder;
  focusBind(expr: string): HorizontalHeaderViewBuilder;
  focusPolicy(value: QmlValue): HorizontalHeaderViewBuilder;
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
  selectionBehavior(value: QmlValue): HorizontalHeaderViewBuilder;
  selectionBehaviorBind(expr: string): HorizontalHeaderViewBuilder;
  selectionMode(value: QmlValue): HorizontalHeaderViewBuilder;
  selectionModeBind(expr: string): HorizontalHeaderViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): HorizontalHeaderViewBuilder;
  selectionModelBind(expr: string): HorizontalHeaderViewBuilder;
  smooth(value: boolean): HorizontalHeaderViewBuilder;
  smoothBind(expr: string): HorizontalHeaderViewBuilder;
  state(value: string): HorizontalHeaderViewBuilder;
  stateBind(expr: string): HorizontalHeaderViewBuilder;
  syncDirection(value: QmlValue): HorizontalHeaderViewBuilder;
  syncDirectionBind(expr: string): HorizontalHeaderViewBuilder;
  syncView(value: TableViewBuilder): HorizontalHeaderViewBuilder;
  syncViewBind(expr: string): HorizontalHeaderViewBuilder;
  synchronousDrag(value: boolean): HorizontalHeaderViewBuilder;
  synchronousDragBind(expr: string): HorizontalHeaderViewBuilder;
  textRole(value: string): HorizontalHeaderViewBuilder;
  textRoleBind(expr: string): HorizontalHeaderViewBuilder;
  topMargin(value: number): HorizontalHeaderViewBuilder;
  topMarginBind(expr: string): HorizontalHeaderViewBuilder;
  transformOrigin(value: QmlValue): HorizontalHeaderViewBuilder;
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
  onAcceptedButtonsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): HorizontalHeaderViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): HorizontalHeaderViewBuilder;
  onAlternatingRowsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onAnimateChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): HorizontalHeaderViewBuilder;
  onAtXBeginningChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onAtXEndChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onAtYBeginningChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onAtYEndChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): HorizontalHeaderViewBuilder;
  onBottomMarginChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onBottomRowChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onBoundsBehaviorChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onBoundsMovementChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onChildrenChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): HorizontalHeaderViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): HorizontalHeaderViewBuilder;
  onColumnMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): HorizontalHeaderViewBuilder;
  onColumnSpacingChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onColumnWidthProviderChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onColumnsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onContainmentMaskChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onContentHeightChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onContentWidthChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onContentXChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onContentYChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onCurrentColumnChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onCurrentRowChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onDelegateChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onDelegateModelAccessChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onDragEnded(handler: () => void): HorizontalHeaderViewBuilder;
  onDragStarted(handler: () => void): HorizontalHeaderViewBuilder;
  onDraggingChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onDraggingHorizontallyChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onDraggingVerticallyChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onEditTriggersChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onEnabledChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onFlickDecelerationChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onFlickEnded(handler: () => void): HorizontalHeaderViewBuilder;
  onFlickStarted(handler: () => void): HorizontalHeaderViewBuilder;
  onFlickableDirectionChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onFlickingChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onFlickingHorizontallyChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onFlickingVerticallyChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): HorizontalHeaderViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): HorizontalHeaderViewBuilder;
  onHeightChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onHorizontalOvershootChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onHorizontalVelocityChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onImplicitHeightChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onImplicitWidthChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onInteractiveChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onIsAtBoundaryChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onKeyNavigationEnabledChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onLayoutChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onLeftColumnChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onLeftMarginChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onModelChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onMovableColumnsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onMovementEnded(handler: () => void): HorizontalHeaderViewBuilder;
  onMovementStarted(handler: () => void): HorizontalHeaderViewBuilder;
  onMovingChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onMovingHorizontallyChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onMovingVerticallyChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): HorizontalHeaderViewBuilder;
  onOpacityChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onOriginXChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onOriginYChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onPaletteChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onPaletteCreated(handler: () => void): HorizontalHeaderViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): HorizontalHeaderViewBuilder;
  onPixelAlignedChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onPointerNavigationEnabledChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onPressDelayChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onReboundChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onResizableColumnsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onResizableRowsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onReuseItemsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onRightColumnChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onRightMarginChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onRotationChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onRowHeightProviderChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onRowMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): HorizontalHeaderViewBuilder;
  onRowSpacingChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onRowsChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onScaleChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onSelectionBehaviorChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onSelectionModeChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onSelectionModelChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): HorizontalHeaderViewBuilder;
  onStateChanged(handler: (arg0: string) => void): HorizontalHeaderViewBuilder;
  onSyncDirectionChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onSyncViewChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onSynchronousDragChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onTextRoleChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onTopMarginChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onTopRowChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): HorizontalHeaderViewBuilder;
  onVerticalOvershootChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onVerticalVelocityChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onVisibleChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onVisibleChildrenChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onWidthChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): HorizontalHeaderViewBuilder;
  onXChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onYChanged(handler: () => void): HorizontalHeaderViewBuilder;
  onZChanged(handler: () => void): HorizontalHeaderViewBuilder;
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

export function HorizontalHeaderView(): HorizontalHeaderViewBuilder {
  return new DslBuilderImpl('HorizontalHeaderView') as unknown as HorizontalHeaderViewBuilder;
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
