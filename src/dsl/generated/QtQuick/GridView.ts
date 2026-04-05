// AUTO-GENERATED — DO NOT EDIT
// Type: GridView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
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
export interface GridViewBuilder {
  id(id: string): GridViewBuilder;
  child(obj: QmlObjectBuilder): GridViewBuilder;

  acceptedButtons(value: QmlEnumToken): GridViewBuilder;
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
  boundsBehavior(value: QmlEnumToken): GridViewBuilder;
  boundsBehaviorBind(expr: string): GridViewBuilder;
  boundsMovement(value: QmlEnumToken): GridViewBuilder;
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
  delegateModelAccess(value: QmlEnumToken): GridViewBuilder;
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
  flickableDirection(value: QmlEnumToken): GridViewBuilder;
  flickableDirectionBind(expr: string): GridViewBuilder;
  flow(value: QmlEnumToken): GridViewBuilder;
  flowBind(expr: string): GridViewBuilder;
  focus(value: boolean): GridViewBuilder;
  focusBind(expr: string): GridViewBuilder;
  focusPolicy(value: QmlEnumToken): GridViewBuilder;
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
  highlightRangeMode(value: QmlEnumToken): GridViewBuilder;
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
  layoutDirection(value: QmlEnumToken): GridViewBuilder;
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
  snapMode(value: QmlEnumToken): GridViewBuilder;
  snapModeBind(expr: string): GridViewBuilder;
  state(value: string): GridViewBuilder;
  stateBind(expr: string): GridViewBuilder;
  synchronousDrag(value: boolean): GridViewBuilder;
  synchronousDragBind(expr: string): GridViewBuilder;
  topMargin(value: number): GridViewBuilder;
  topMarginBind(expr: string): GridViewBuilder;
  transformOrigin(value: QmlEnumToken): GridViewBuilder;
  transformOriginBind(expr: string): GridViewBuilder;
  verticalLayoutDirection(value: QmlEnumToken): GridViewBuilder;
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
  onAcceptedButtonsChanged(body: string): GridViewBuilder;
  onActiveFocusChanged(body: string): GridViewBuilder;
  onActiveFocusOnTabChanged(body: string): GridViewBuilder;
  onAddDisplacedTransitionChanged(body: string): GridViewBuilder;
  onAddTransitionChanged(body: string): GridViewBuilder;
  onAntialiasingChanged(body: string): GridViewBuilder;
  onAtXBeginningChanged(body: string): GridViewBuilder;
  onAtXEndChanged(body: string): GridViewBuilder;
  onAtYBeginningChanged(body: string): GridViewBuilder;
  onAtYEndChanged(body: string): GridViewBuilder;
  onBaselineOffsetChanged(body: string): GridViewBuilder;
  onBottomMarginChanged(body: string): GridViewBuilder;
  onBoundsBehaviorChanged(body: string): GridViewBuilder;
  onBoundsMovementChanged(body: string): GridViewBuilder;
  onCacheBufferChanged(body: string): GridViewBuilder;
  onCellHeightChanged(body: string): GridViewBuilder;
  onCellWidthChanged(body: string): GridViewBuilder;
  onChildrenChanged(body: string): GridViewBuilder;
  onChildrenRectChanged(body: string): GridViewBuilder;
  onClipChanged(body: string): GridViewBuilder;
  onContainmentMaskChanged(body: string): GridViewBuilder;
  onContentHeightChanged(body: string): GridViewBuilder;
  onContentWidthChanged(body: string): GridViewBuilder;
  onContentXChanged(body: string): GridViewBuilder;
  onContentYChanged(body: string): GridViewBuilder;
  onCountChanged(body: string): GridViewBuilder;
  onCurrentIndexChanged(body: string): GridViewBuilder;
  onCurrentItemChanged(body: string): GridViewBuilder;
  onDelegateChanged(body: string): GridViewBuilder;
  onDelegateModelAccessChanged(body: string): GridViewBuilder;
  onDisplacedTransitionChanged(body: string): GridViewBuilder;
  onDisplayMarginBeginningChanged(body: string): GridViewBuilder;
  onDisplayMarginEndChanged(body: string): GridViewBuilder;
  onDragEnded(body: string): GridViewBuilder;
  onDragStarted(body: string): GridViewBuilder;
  onDraggingChanged(body: string): GridViewBuilder;
  onDraggingHorizontallyChanged(body: string): GridViewBuilder;
  onDraggingVerticallyChanged(body: string): GridViewBuilder;
  onEffectiveLayoutDirectionChanged(body: string): GridViewBuilder;
  onEnabledChanged(body: string): GridViewBuilder;
  onFlickDecelerationChanged(body: string): GridViewBuilder;
  onFlickEnded(body: string): GridViewBuilder;
  onFlickStarted(body: string): GridViewBuilder;
  onFlickableDirectionChanged(body: string): GridViewBuilder;
  onFlickingChanged(body: string): GridViewBuilder;
  onFlickingHorizontallyChanged(body: string): GridViewBuilder;
  onFlickingVerticallyChanged(body: string): GridViewBuilder;
  onFlowChanged(body: string): GridViewBuilder;
  onFocusChanged(body: string): GridViewBuilder;
  onFocusPolicyChanged(body: string): GridViewBuilder;
  onFooterChanged(body: string): GridViewBuilder;
  onFooterItemChanged(body: string): GridViewBuilder;
  onHeaderChanged(body: string): GridViewBuilder;
  onHeaderItemChanged(body: string): GridViewBuilder;
  onHeightChanged(body: string): GridViewBuilder;
  onHighlightChanged(body: string): GridViewBuilder;
  onHighlightFollowsCurrentItemChanged(body: string): GridViewBuilder;
  onHighlightItemChanged(body: string): GridViewBuilder;
  onHighlightMoveDurationChanged(body: string): GridViewBuilder;
  onHighlightRangeModeChanged(body: string): GridViewBuilder;
  onHorizontalOvershootChanged(body: string): GridViewBuilder;
  onHorizontalVelocityChanged(body: string): GridViewBuilder;
  onImplicitHeightChanged(body: string): GridViewBuilder;
  onImplicitWidthChanged(body: string): GridViewBuilder;
  onInteractiveChanged(body: string): GridViewBuilder;
  onIsAtBoundaryChanged(body: string): GridViewBuilder;
  onKeyNavigationEnabledChanged(body: string): GridViewBuilder;
  onKeyNavigationWrapsChanged(body: string): GridViewBuilder;
  onLayoutDirectionChanged(body: string): GridViewBuilder;
  onLeftMarginChanged(body: string): GridViewBuilder;
  onMaximumFlickVelocityChanged(body: string): GridViewBuilder;
  onModelChanged(body: string): GridViewBuilder;
  onMoveDisplacedTransitionChanged(body: string): GridViewBuilder;
  onMoveTransitionChanged(body: string): GridViewBuilder;
  onMovementEnded(body: string): GridViewBuilder;
  onMovementStarted(body: string): GridViewBuilder;
  onMovingChanged(body: string): GridViewBuilder;
  onMovingHorizontallyChanged(body: string): GridViewBuilder;
  onMovingVerticallyChanged(body: string): GridViewBuilder;
  onObjectNameChanged(body: string): GridViewBuilder;
  onOpacityChanged(body: string): GridViewBuilder;
  onOriginXChanged(body: string): GridViewBuilder;
  onOriginYChanged(body: string): GridViewBuilder;
  onPaletteChanged(body: string): GridViewBuilder;
  onPaletteCreated(body: string): GridViewBuilder;
  onParentChanged(body: string): GridViewBuilder;
  onPixelAlignedChanged(body: string): GridViewBuilder;
  onPopulateTransitionChanged(body: string): GridViewBuilder;
  onPreferredHighlightBeginChanged(body: string): GridViewBuilder;
  onPreferredHighlightEndChanged(body: string): GridViewBuilder;
  onPressDelayChanged(body: string): GridViewBuilder;
  onReboundChanged(body: string): GridViewBuilder;
  onRemoveDisplacedTransitionChanged(body: string): GridViewBuilder;
  onRemoveTransitionChanged(body: string): GridViewBuilder;
  onReuseItemsChanged(body: string): GridViewBuilder;
  onRightMarginChanged(body: string): GridViewBuilder;
  onRotationChanged(body: string): GridViewBuilder;
  onScaleChanged(body: string): GridViewBuilder;
  onSmoothChanged(body: string): GridViewBuilder;
  onSnapModeChanged(body: string): GridViewBuilder;
  onStateChanged(body: string): GridViewBuilder;
  onSynchronousDragChanged(body: string): GridViewBuilder;
  onTopMarginChanged(body: string): GridViewBuilder;
  onTransformOriginChanged(body: string): GridViewBuilder;
  onVerticalLayoutDirectionChanged(body: string): GridViewBuilder;
  onVerticalOvershootChanged(body: string): GridViewBuilder;
  onVerticalVelocityChanged(body: string): GridViewBuilder;
  onVisibleChanged(body: string): GridViewBuilder;
  onVisibleChildrenChanged(body: string): GridViewBuilder;
  onWidthChanged(body: string): GridViewBuilder;
  onWindowChanged(body: string): GridViewBuilder;
  onXChanged(body: string): GridViewBuilder;
  onYChanged(body: string): GridViewBuilder;
  onZChanged(body: string): GridViewBuilder;
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

const GRIDVIEW_META: TypeMetadata = {
  typeName: 'GridView',
  properties: [
    { name: 'acceptedButtons', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'add', hasValue: true, hasBinding: true },
    { name: 'addDisplaced', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomMargin', hasValue: true, hasBinding: true },
    { name: 'boundsBehavior', hasValue: true, hasBinding: true },
    { name: 'boundsMovement', hasValue: true, hasBinding: true },
    { name: 'cacheBuffer', hasValue: true, hasBinding: true },
    { name: 'cellHeight', hasValue: true, hasBinding: true },
    { name: 'cellWidth', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'contentX', hasValue: true, hasBinding: true },
    { name: 'contentY', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'delegateModelAccess', hasValue: true, hasBinding: true },
    { name: 'displaced', hasValue: true, hasBinding: true },
    { name: 'displayMarginBeginning', hasValue: true, hasBinding: true },
    { name: 'displayMarginEnd', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'flickDeceleration', hasValue: true, hasBinding: true },
    { name: 'flickableDirection', hasValue: true, hasBinding: true },
    { name: 'flow', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'footer', hasValue: true, hasBinding: true },
    { name: 'header', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'highlight', hasValue: true, hasBinding: true },
    { name: 'highlightFollowsCurrentItem', hasValue: true, hasBinding: true },
    { name: 'highlightMoveDuration', hasValue: true, hasBinding: true },
    { name: 'highlightRangeMode', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'interactive', hasValue: true, hasBinding: true },
    { name: 'keyNavigationEnabled', hasValue: true, hasBinding: true },
    { name: 'keyNavigationWraps', hasValue: true, hasBinding: true },
    { name: 'layoutDirection', hasValue: true, hasBinding: true },
    { name: 'leftMargin', hasValue: true, hasBinding: true },
    { name: 'maximumFlickVelocity', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'move', hasValue: true, hasBinding: true },
    { name: 'moveDisplaced', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pixelAligned', hasValue: true, hasBinding: true },
    { name: 'populate', hasValue: true, hasBinding: true },
    { name: 'preferredHighlightBegin', hasValue: true, hasBinding: true },
    { name: 'preferredHighlightEnd', hasValue: true, hasBinding: true },
    { name: 'pressDelay', hasValue: true, hasBinding: true },
    { name: 'rebound', hasValue: true, hasBinding: true },
    { name: 'remove', hasValue: true, hasBinding: true },
    { name: 'removeDisplaced', hasValue: true, hasBinding: true },
    { name: 'reuseItems', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'snapMode', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'synchronousDrag', hasValue: true, hasBinding: true },
    { name: 'topMargin', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalLayoutDirection', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAddDisplacedTransitionChanged', paramCount: 0 },
    { handlerName: 'onAddTransitionChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAtXBeginningChanged', paramCount: 0 },
    { handlerName: 'onAtXEndChanged', paramCount: 0 },
    { handlerName: 'onAtYBeginningChanged', paramCount: 0 },
    { handlerName: 'onAtYEndChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomMarginChanged', paramCount: 0 },
    { handlerName: 'onBoundsBehaviorChanged', paramCount: 0 },
    { handlerName: 'onBoundsMovementChanged', paramCount: 0 },
    { handlerName: 'onCacheBufferChanged', paramCount: 0 },
    { handlerName: 'onCellHeightChanged', paramCount: 0 },
    { handlerName: 'onCellWidthChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 0 },
    { handlerName: 'onContentXChanged', paramCount: 0 },
    { handlerName: 'onContentYChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelAccessChanged', paramCount: 0 },
    { handlerName: 'onDisplacedTransitionChanged', paramCount: 0 },
    { handlerName: 'onDisplayMarginBeginningChanged', paramCount: 0 },
    { handlerName: 'onDisplayMarginEndChanged', paramCount: 0 },
    { handlerName: 'onDragEnded', paramCount: 0 },
    { handlerName: 'onDragStarted', paramCount: 0 },
    { handlerName: 'onDraggingChanged', paramCount: 0 },
    { handlerName: 'onDraggingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onDraggingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onEffectiveLayoutDirectionChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFlickDecelerationChanged', paramCount: 0 },
    { handlerName: 'onFlickEnded', paramCount: 0 },
    { handlerName: 'onFlickStarted', paramCount: 0 },
    { handlerName: 'onFlickableDirectionChanged', paramCount: 0 },
    { handlerName: 'onFlickingChanged', paramCount: 0 },
    { handlerName: 'onFlickingHorizontallyChanged', paramCount: 0 },
    { handlerName: 'onFlickingVerticallyChanged', paramCount: 0 },
    { handlerName: 'onFlowChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFooterChanged', paramCount: 0 },
    { handlerName: 'onFooterItemChanged', paramCount: 0 },
    { handlerName: 'onHeaderChanged', paramCount: 0 },
    { handlerName: 'onHeaderItemChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlightChanged', paramCount: 0 },
    { handlerName: 'onHighlightFollowsCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onHighlightItemChanged', paramCount: 0 },
    { handlerName: 'onHighlightMoveDurationChanged', paramCount: 0 },
    { handlerName: 'onHighlightRangeModeChanged', paramCount: 0 },
    { handlerName: 'onHorizontalOvershootChanged', paramCount: 0 },
    { handlerName: 'onHorizontalVelocityChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInteractiveChanged', paramCount: 0 },
    { handlerName: 'onIsAtBoundaryChanged', paramCount: 0 },
    { handlerName: 'onKeyNavigationEnabledChanged', paramCount: 0 },
    { handlerName: 'onKeyNavigationWrapsChanged', paramCount: 0 },
    { handlerName: 'onLayoutDirectionChanged', paramCount: 0 },
    { handlerName: 'onLeftMarginChanged', paramCount: 0 },
    { handlerName: 'onMaximumFlickVelocityChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onMoveDisplacedTransitionChanged', paramCount: 0 },
    { handlerName: 'onMoveTransitionChanged', paramCount: 0 },
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
    { handlerName: 'onPopulateTransitionChanged', paramCount: 0 },
    { handlerName: 'onPreferredHighlightBeginChanged', paramCount: 0 },
    { handlerName: 'onPreferredHighlightEndChanged', paramCount: 0 },
    { handlerName: 'onPressDelayChanged', paramCount: 0 },
    { handlerName: 'onReboundChanged', paramCount: 0 },
    { handlerName: 'onRemoveDisplacedTransitionChanged', paramCount: 0 },
    { handlerName: 'onRemoveTransitionChanged', paramCount: 0 },
    { handlerName: 'onReuseItemsChanged', paramCount: 0 },
    { handlerName: 'onRightMarginChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSnapModeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSynchronousDragChanged', paramCount: 0 },
    { handlerName: 'onTopMarginChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalLayoutDirectionChanged', paramCount: 0 },
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
  defaultProperty: 'data',
};

export function GridView(): GridViewBuilder {
  return createFluentBuilder('GridView', GRIDVIEW_META) as unknown as GridViewBuilder;
}

export namespace GridView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('GridView', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('GridView', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken('GridView', 'BoundsBehavior', 'OvershootBounds');
    export const DragAndOvershootBounds = createEnumToken('GridView', 'BoundsBehavior', 'DragAndOvershootBounds');
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken('GridView', 'BoundsMovement', 'FollowBoundsBehavior');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('GridView', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('GridView', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('GridView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GridView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GridView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GridView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('GridView', 'Flags', 'ItemObservesViewport');
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken('GridView', 'FlickableDirection', 'AutoFlickDirection');
    export const HorizontalFlick = createEnumToken('GridView', 'FlickableDirection', 'HorizontalFlick');
    export const VerticalFlick = createEnumToken('GridView', 'FlickableDirection', 'VerticalFlick');
    export const HorizontalAndVerticalFlick = createEnumToken('GridView', 'FlickableDirection', 'HorizontalAndVerticalFlick');
    export const AutoFlickIfNeeded = createEnumToken('GridView', 'FlickableDirection', 'AutoFlickIfNeeded');
  }
  export namespace Flow {
    export const FlowLeftToRight = createEnumToken('GridView', 'Flow', 'FlowLeftToRight');
    export const FlowTopToBottom = createEnumToken('GridView', 'Flow', 'FlowTopToBottom');
  }
  export namespace HighlightRangeMode {
    export const NoHighlightRange = createEnumToken('GridView', 'HighlightRangeMode', 'NoHighlightRange');
    export const ApplyRange = createEnumToken('GridView', 'HighlightRangeMode', 'ApplyRange');
    export const StrictlyEnforceRange = createEnumToken('GridView', 'HighlightRangeMode', 'StrictlyEnforceRange');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('GridView', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('GridView', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('GridView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('GridView', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace LayoutDirection {
    export const LeftToRight = createEnumToken('GridView', 'LayoutDirection', 'LeftToRight');
    export const RightToLeft = createEnumToken('GridView', 'LayoutDirection', 'RightToLeft');
    export const VerticalTopToBottom = createEnumToken('GridView', 'LayoutDirection', 'VerticalTopToBottom');
    export const VerticalBottomToTop = createEnumToken('GridView', 'LayoutDirection', 'VerticalBottomToTop');
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
    export const TopToBottom = createEnumToken('GridView', 'VerticalLayoutDirection', 'TopToBottom');
    export const BottomToTop = createEnumToken('GridView', 'VerticalLayoutDirection', 'BottomToTop');
  }
}
