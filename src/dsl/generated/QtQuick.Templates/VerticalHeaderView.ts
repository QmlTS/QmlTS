// AUTO-GENERATED — DO NOT EDIT
// Type: VerticalHeaderView
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
export interface VerticalHeaderViewBuilder {
  id(id: string): VerticalHeaderViewBuilder;
  child(obj: QmlObjectBuilder): VerticalHeaderViewBuilder;

  acceptedButtons(value: QmlValue): VerticalHeaderViewBuilder;
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
  boundsBehavior(value: QmlValue): VerticalHeaderViewBuilder;
  boundsBehaviorBind(expr: string): VerticalHeaderViewBuilder;
  boundsMovement(value: QmlValue): VerticalHeaderViewBuilder;
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
  delegateModelAccess(value: QmlValue): VerticalHeaderViewBuilder;
  delegateModelAccessBind(expr: string): VerticalHeaderViewBuilder;
  editTriggers(value: QmlValue): VerticalHeaderViewBuilder;
  editTriggersBind(expr: string): VerticalHeaderViewBuilder;
  enabled(value: boolean): VerticalHeaderViewBuilder;
  enabledBind(expr: string): VerticalHeaderViewBuilder;
  flickDeceleration(value: number): VerticalHeaderViewBuilder;
  flickDecelerationBind(expr: string): VerticalHeaderViewBuilder;
  flickableDirection(value: QmlValue): VerticalHeaderViewBuilder;
  flickableDirectionBind(expr: string): VerticalHeaderViewBuilder;
  focus(value: boolean): VerticalHeaderViewBuilder;
  focusBind(expr: string): VerticalHeaderViewBuilder;
  focusPolicy(value: QmlValue): VerticalHeaderViewBuilder;
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
  selectionBehavior(value: QmlValue): VerticalHeaderViewBuilder;
  selectionBehaviorBind(expr: string): VerticalHeaderViewBuilder;
  selectionMode(value: QmlValue): VerticalHeaderViewBuilder;
  selectionModeBind(expr: string): VerticalHeaderViewBuilder;
  selectionModel(value: ItemSelectionModelBuilder): VerticalHeaderViewBuilder;
  selectionModelBind(expr: string): VerticalHeaderViewBuilder;
  smooth(value: boolean): VerticalHeaderViewBuilder;
  smoothBind(expr: string): VerticalHeaderViewBuilder;
  state(value: string): VerticalHeaderViewBuilder;
  stateBind(expr: string): VerticalHeaderViewBuilder;
  syncDirection(value: QmlValue): VerticalHeaderViewBuilder;
  syncDirectionBind(expr: string): VerticalHeaderViewBuilder;
  syncView(value: TableViewBuilder): VerticalHeaderViewBuilder;
  syncViewBind(expr: string): VerticalHeaderViewBuilder;
  synchronousDrag(value: boolean): VerticalHeaderViewBuilder;
  synchronousDragBind(expr: string): VerticalHeaderViewBuilder;
  textRole(value: string): VerticalHeaderViewBuilder;
  textRoleBind(expr: string): VerticalHeaderViewBuilder;
  topMargin(value: number): VerticalHeaderViewBuilder;
  topMarginBind(expr: string): VerticalHeaderViewBuilder;
  transformOrigin(value: QmlValue): VerticalHeaderViewBuilder;
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
  onAcceptedButtonsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): VerticalHeaderViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): VerticalHeaderViewBuilder;
  onAlternatingRowsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onAnimateChanged(handler: () => void): VerticalHeaderViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): VerticalHeaderViewBuilder;
  onAtXBeginningChanged(handler: () => void): VerticalHeaderViewBuilder;
  onAtXEndChanged(handler: () => void): VerticalHeaderViewBuilder;
  onAtYBeginningChanged(handler: () => void): VerticalHeaderViewBuilder;
  onAtYEndChanged(handler: () => void): VerticalHeaderViewBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): VerticalHeaderViewBuilder;
  onBottomMarginChanged(handler: () => void): VerticalHeaderViewBuilder;
  onBottomRowChanged(handler: () => void): VerticalHeaderViewBuilder;
  onBoundsBehaviorChanged(handler: () => void): VerticalHeaderViewBuilder;
  onBoundsMovementChanged(handler: () => void): VerticalHeaderViewBuilder;
  onChildrenChanged(handler: () => void): VerticalHeaderViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): VerticalHeaderViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): VerticalHeaderViewBuilder;
  onColumnMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): VerticalHeaderViewBuilder;
  onColumnSpacingChanged(handler: () => void): VerticalHeaderViewBuilder;
  onColumnWidthProviderChanged(handler: () => void): VerticalHeaderViewBuilder;
  onColumnsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onContainmentMaskChanged(handler: () => void): VerticalHeaderViewBuilder;
  onContentHeightChanged(handler: () => void): VerticalHeaderViewBuilder;
  onContentWidthChanged(handler: () => void): VerticalHeaderViewBuilder;
  onContentXChanged(handler: () => void): VerticalHeaderViewBuilder;
  onContentYChanged(handler: () => void): VerticalHeaderViewBuilder;
  onCurrentColumnChanged(handler: () => void): VerticalHeaderViewBuilder;
  onCurrentRowChanged(handler: () => void): VerticalHeaderViewBuilder;
  onDelegateChanged(handler: () => void): VerticalHeaderViewBuilder;
  onDelegateModelAccessChanged(handler: () => void): VerticalHeaderViewBuilder;
  onDragEnded(handler: () => void): VerticalHeaderViewBuilder;
  onDragStarted(handler: () => void): VerticalHeaderViewBuilder;
  onDraggingChanged(handler: () => void): VerticalHeaderViewBuilder;
  onDraggingHorizontallyChanged(handler: () => void): VerticalHeaderViewBuilder;
  onDraggingVerticallyChanged(handler: () => void): VerticalHeaderViewBuilder;
  onEditTriggersChanged(handler: () => void): VerticalHeaderViewBuilder;
  onEnabledChanged(handler: () => void): VerticalHeaderViewBuilder;
  onFlickDecelerationChanged(handler: () => void): VerticalHeaderViewBuilder;
  onFlickEnded(handler: () => void): VerticalHeaderViewBuilder;
  onFlickStarted(handler: () => void): VerticalHeaderViewBuilder;
  onFlickableDirectionChanged(handler: () => void): VerticalHeaderViewBuilder;
  onFlickingChanged(handler: () => void): VerticalHeaderViewBuilder;
  onFlickingHorizontallyChanged(handler: () => void): VerticalHeaderViewBuilder;
  onFlickingVerticallyChanged(handler: () => void): VerticalHeaderViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): VerticalHeaderViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): VerticalHeaderViewBuilder;
  onHeightChanged(handler: () => void): VerticalHeaderViewBuilder;
  onHorizontalOvershootChanged(handler: () => void): VerticalHeaderViewBuilder;
  onHorizontalVelocityChanged(handler: () => void): VerticalHeaderViewBuilder;
  onImplicitHeightChanged(handler: () => void): VerticalHeaderViewBuilder;
  onImplicitWidthChanged(handler: () => void): VerticalHeaderViewBuilder;
  onInteractiveChanged(handler: () => void): VerticalHeaderViewBuilder;
  onIsAtBoundaryChanged(handler: () => void): VerticalHeaderViewBuilder;
  onKeyNavigationEnabledChanged(handler: () => void): VerticalHeaderViewBuilder;
  onLayoutChanged(handler: () => void): VerticalHeaderViewBuilder;
  onLeftColumnChanged(handler: () => void): VerticalHeaderViewBuilder;
  onLeftMarginChanged(handler: () => void): VerticalHeaderViewBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): VerticalHeaderViewBuilder;
  onModelChanged(handler: () => void): VerticalHeaderViewBuilder;
  onMovableRowsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onMovementEnded(handler: () => void): VerticalHeaderViewBuilder;
  onMovementStarted(handler: () => void): VerticalHeaderViewBuilder;
  onMovingChanged(handler: () => void): VerticalHeaderViewBuilder;
  onMovingHorizontallyChanged(handler: () => void): VerticalHeaderViewBuilder;
  onMovingVerticallyChanged(handler: () => void): VerticalHeaderViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): VerticalHeaderViewBuilder;
  onOpacityChanged(handler: () => void): VerticalHeaderViewBuilder;
  onOriginXChanged(handler: () => void): VerticalHeaderViewBuilder;
  onOriginYChanged(handler: () => void): VerticalHeaderViewBuilder;
  onPaletteChanged(handler: () => void): VerticalHeaderViewBuilder;
  onPaletteCreated(handler: () => void): VerticalHeaderViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): VerticalHeaderViewBuilder;
  onPixelAlignedChanged(handler: () => void): VerticalHeaderViewBuilder;
  onPointerNavigationEnabledChanged(handler: () => void): VerticalHeaderViewBuilder;
  onPressDelayChanged(handler: () => void): VerticalHeaderViewBuilder;
  onReboundChanged(handler: () => void): VerticalHeaderViewBuilder;
  onResizableColumnsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onResizableRowsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onReuseItemsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onRightColumnChanged(handler: () => void): VerticalHeaderViewBuilder;
  onRightMarginChanged(handler: () => void): VerticalHeaderViewBuilder;
  onRotationChanged(handler: () => void): VerticalHeaderViewBuilder;
  onRowHeightProviderChanged(handler: () => void): VerticalHeaderViewBuilder;
  onRowMoved(
    handler: (logicalIndex: number, oldVisualIndex: number, newVisualIndex: number) => void,
  ): VerticalHeaderViewBuilder;
  onRowSpacingChanged(handler: () => void): VerticalHeaderViewBuilder;
  onRowsChanged(handler: () => void): VerticalHeaderViewBuilder;
  onScaleChanged(handler: () => void): VerticalHeaderViewBuilder;
  onSelectionBehaviorChanged(handler: () => void): VerticalHeaderViewBuilder;
  onSelectionModeChanged(handler: () => void): VerticalHeaderViewBuilder;
  onSelectionModelChanged(handler: () => void): VerticalHeaderViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): VerticalHeaderViewBuilder;
  onStateChanged(handler: (arg0: string) => void): VerticalHeaderViewBuilder;
  onSyncDirectionChanged(handler: () => void): VerticalHeaderViewBuilder;
  onSyncViewChanged(handler: () => void): VerticalHeaderViewBuilder;
  onSynchronousDragChanged(handler: () => void): VerticalHeaderViewBuilder;
  onTextRoleChanged(handler: () => void): VerticalHeaderViewBuilder;
  onTopMarginChanged(handler: () => void): VerticalHeaderViewBuilder;
  onTopRowChanged(handler: () => void): VerticalHeaderViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): VerticalHeaderViewBuilder;
  onVerticalOvershootChanged(handler: () => void): VerticalHeaderViewBuilder;
  onVerticalVelocityChanged(handler: () => void): VerticalHeaderViewBuilder;
  onVisibleChanged(handler: () => void): VerticalHeaderViewBuilder;
  onVisibleChildrenChanged(handler: () => void): VerticalHeaderViewBuilder;
  onWidthChanged(handler: () => void): VerticalHeaderViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): VerticalHeaderViewBuilder;
  onXChanged(handler: () => void): VerticalHeaderViewBuilder;
  onYChanged(handler: () => void): VerticalHeaderViewBuilder;
  onZChanged(handler: () => void): VerticalHeaderViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): VerticalHeaderViewBuilder;
  layer(setup: (b: LayerBuilder) => void): VerticalHeaderViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): VerticalHeaderViewBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): VerticalHeaderViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): VerticalHeaderViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): VerticalHeaderViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): VerticalHeaderViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): VerticalHeaderViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): VerticalHeaderViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): VerticalHeaderViewBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): VerticalHeaderViewBuilder;
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

export function VerticalHeaderView(): VerticalHeaderViewBuilder {
  return new DslBuilderImpl('VerticalHeaderView') as unknown as VerticalHeaderViewBuilder;
}

export namespace VerticalHeaderView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken(
      'VerticalHeaderView',
      'BoundsBehavior',
      'StopAtBounds',
    );
    export const DragOverBounds = createEnumToken(
      'VerticalHeaderView',
      'BoundsBehavior',
      'DragOverBounds',
    );
    export const OvershootBounds = createEnumToken(
      'VerticalHeaderView',
      'BoundsBehavior',
      'OvershootBounds',
    );
    export const DragAndOvershootBounds = createEnumToken(
      'VerticalHeaderView',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'VerticalHeaderView',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace EditTriggers {
    export const NoEditTriggers = createEnumToken(
      'VerticalHeaderView',
      'EditTriggers',
      'NoEditTriggers',
    );
    export const SingleTapped = createEnumToken(
      'VerticalHeaderView',
      'EditTriggers',
      'SingleTapped',
    );
    export const DoubleTapped = createEnumToken(
      'VerticalHeaderView',
      'EditTriggers',
      'DoubleTapped',
    );
    export const SelectedTapped = createEnumToken(
      'VerticalHeaderView',
      'EditTriggers',
      'SelectedTapped',
    );
    export const EditKeyPressed = createEnumToken(
      'VerticalHeaderView',
      'EditTriggers',
      'EditKeyPressed',
    );
    export const AnyKeyPressed = createEnumToken(
      'VerticalHeaderView',
      'EditTriggers',
      'AnyKeyPressed',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'VerticalHeaderView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'VerticalHeaderView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'VerticalHeaderView',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'VerticalHeaderView',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'VerticalHeaderView',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('VerticalHeaderView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'VerticalHeaderView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'VerticalHeaderView',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'VerticalHeaderView',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken(
      'VerticalHeaderView',
      'FlickableDirection',
      'VerticalFlick',
    );
    export const HorizontalAndVerticalFlick = createEnumToken(
      'VerticalHeaderView',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'VerticalHeaderView',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'VerticalHeaderView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const AlignLeft = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignLeft');
    export const AlignRight = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignRight');
    export const AlignHCenter = createEnumToken(
      'VerticalHeaderView',
      'PositionMode',
      'AlignHCenter',
    );
    export const AlignTop = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignTop');
    export const AlignBottom = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignBottom');
    export const AlignVCenter = createEnumToken(
      'VerticalHeaderView',
      'PositionMode',
      'AlignVCenter',
    );
    export const AlignCenter = createEnumToken('VerticalHeaderView', 'PositionMode', 'AlignCenter');
    export const Visible = createEnumToken('VerticalHeaderView', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('VerticalHeaderView', 'PositionMode', 'Contain');
  }
  export namespace SelectionBehavior {
    export const SelectionDisabled = createEnumToken(
      'VerticalHeaderView',
      'SelectionBehavior',
      'SelectionDisabled',
    );
    export const SelectCells = createEnumToken(
      'VerticalHeaderView',
      'SelectionBehavior',
      'SelectCells',
    );
    export const SelectRows = createEnumToken(
      'VerticalHeaderView',
      'SelectionBehavior',
      'SelectRows',
    );
    export const SelectColumns = createEnumToken(
      'VerticalHeaderView',
      'SelectionBehavior',
      'SelectColumns',
    );
  }
  export namespace SelectionMode {
    export const SingleSelection = createEnumToken(
      'VerticalHeaderView',
      'SelectionMode',
      'SingleSelection',
    );
    export const ContiguousSelection = createEnumToken(
      'VerticalHeaderView',
      'SelectionMode',
      'ContiguousSelection',
    );
    export const ExtendedSelection = createEnumToken(
      'VerticalHeaderView',
      'SelectionMode',
      'ExtendedSelection',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'VerticalHeaderView',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('VerticalHeaderView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'VerticalHeaderView',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
