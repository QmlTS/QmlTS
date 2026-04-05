// AUTO-GENERATED — DO NOT EDIT
// Type: ListView
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
export interface ListViewBuilder {
  id(id: string): ListViewBuilder;
  child(obj: QmlObjectBuilder): ListViewBuilder;

  acceptedButtons(value: QmlEnumToken): ListViewBuilder;
  acceptedButtonsBind(expr: string): ListViewBuilder;
  activeFocusOnTab(value: boolean): ListViewBuilder;
  activeFocusOnTabBind(expr: string): ListViewBuilder;
  add(value: TransitionBuilder): ListViewBuilder;
  addBind(expr: string): ListViewBuilder;
  addDisplaced(value: TransitionBuilder): ListViewBuilder;
  addDisplacedBind(expr: string): ListViewBuilder;
  antialiasing(value: boolean): ListViewBuilder;
  antialiasingBind(expr: string): ListViewBuilder;
  baselineOffset(value: number): ListViewBuilder;
  baselineOffsetBind(expr: string): ListViewBuilder;
  bottomMargin(value: number): ListViewBuilder;
  bottomMarginBind(expr: string): ListViewBuilder;
  boundsBehavior(value: QmlEnumToken): ListViewBuilder;
  boundsBehaviorBind(expr: string): ListViewBuilder;
  boundsMovement(value: QmlEnumToken): ListViewBuilder;
  boundsMovementBind(expr: string): ListViewBuilder;
  cacheBuffer(value: number): ListViewBuilder;
  cacheBufferBind(expr: string): ListViewBuilder;
  clip(value: boolean): ListViewBuilder;
  clipBind(expr: string): ListViewBuilder;
  containmentMask(value: QtObjectBuilder): ListViewBuilder;
  containmentMaskBind(expr: string): ListViewBuilder;
  contentHeight(value: number): ListViewBuilder;
  contentHeightBind(expr: string): ListViewBuilder;
  contentWidth(value: number): ListViewBuilder;
  contentWidthBind(expr: string): ListViewBuilder;
  contentX(value: number): ListViewBuilder;
  contentXBind(expr: string): ListViewBuilder;
  contentY(value: number): ListViewBuilder;
  contentYBind(expr: string): ListViewBuilder;
  currentIndex(value: number): ListViewBuilder;
  currentIndexBind(expr: string): ListViewBuilder;
  delegate(value: QmlComponent): ListViewBuilder;
  delegateBind(expr: string): ListViewBuilder;
  delegateModelAccess(value: QmlEnumToken): ListViewBuilder;
  delegateModelAccessBind(expr: string): ListViewBuilder;
  displaced(value: TransitionBuilder): ListViewBuilder;
  displacedBind(expr: string): ListViewBuilder;
  displayMarginBeginning(value: number): ListViewBuilder;
  displayMarginBeginningBind(expr: string): ListViewBuilder;
  displayMarginEnd(value: number): ListViewBuilder;
  displayMarginEndBind(expr: string): ListViewBuilder;
  enabled(value: boolean): ListViewBuilder;
  enabledBind(expr: string): ListViewBuilder;
  flickDeceleration(value: number): ListViewBuilder;
  flickDecelerationBind(expr: string): ListViewBuilder;
  flickableDirection(value: QmlEnumToken): ListViewBuilder;
  flickableDirectionBind(expr: string): ListViewBuilder;
  focus(value: boolean): ListViewBuilder;
  focusBind(expr: string): ListViewBuilder;
  focusPolicy(value: QmlEnumToken): ListViewBuilder;
  focusPolicyBind(expr: string): ListViewBuilder;
  footer(value: QmlComponent): ListViewBuilder;
  footerBind(expr: string): ListViewBuilder;
  footerPositioning(value: QmlEnumToken): ListViewBuilder;
  footerPositioningBind(expr: string): ListViewBuilder;
  header(value: QmlComponent): ListViewBuilder;
  headerBind(expr: string): ListViewBuilder;
  headerPositioning(value: QmlEnumToken): ListViewBuilder;
  headerPositioningBind(expr: string): ListViewBuilder;
  height(value: number): ListViewBuilder;
  heightBind(expr: string): ListViewBuilder;
  highlight(value: QmlComponent): ListViewBuilder;
  highlightBind(expr: string): ListViewBuilder;
  highlightFollowsCurrentItem(value: boolean): ListViewBuilder;
  highlightFollowsCurrentItemBind(expr: string): ListViewBuilder;
  highlightMoveDuration(value: number): ListViewBuilder;
  highlightMoveDurationBind(expr: string): ListViewBuilder;
  highlightMoveVelocity(value: number): ListViewBuilder;
  highlightMoveVelocityBind(expr: string): ListViewBuilder;
  highlightRangeMode(value: QmlEnumToken): ListViewBuilder;
  highlightRangeModeBind(expr: string): ListViewBuilder;
  highlightResizeDuration(value: number): ListViewBuilder;
  highlightResizeDurationBind(expr: string): ListViewBuilder;
  highlightResizeVelocity(value: number): ListViewBuilder;
  highlightResizeVelocityBind(expr: string): ListViewBuilder;
  implicitHeight(value: number): ListViewBuilder;
  implicitHeightBind(expr: string): ListViewBuilder;
  implicitWidth(value: number): ListViewBuilder;
  implicitWidthBind(expr: string): ListViewBuilder;
  interactive(value: boolean): ListViewBuilder;
  interactiveBind(expr: string): ListViewBuilder;
  keyNavigationEnabled(value: boolean): ListViewBuilder;
  keyNavigationEnabledBind(expr: string): ListViewBuilder;
  keyNavigationWraps(value: boolean): ListViewBuilder;
  keyNavigationWrapsBind(expr: string): ListViewBuilder;
  layoutDirection(value: QmlEnumToken): ListViewBuilder;
  layoutDirectionBind(expr: string): ListViewBuilder;
  leftMargin(value: number): ListViewBuilder;
  leftMarginBind(expr: string): ListViewBuilder;
  maximumFlickVelocity(value: number): ListViewBuilder;
  maximumFlickVelocityBind(expr: string): ListViewBuilder;
  model(value: QmlValue): ListViewBuilder;
  modelBind(expr: string): ListViewBuilder;
  move(value: TransitionBuilder): ListViewBuilder;
  moveBind(expr: string): ListViewBuilder;
  moveDisplaced(value: TransitionBuilder): ListViewBuilder;
  moveDisplacedBind(expr: string): ListViewBuilder;
  objectName(value: string): ListViewBuilder;
  objectNameBind(expr: string): ListViewBuilder;
  opacity(value: number): ListViewBuilder;
  opacityBind(expr: string): ListViewBuilder;
  orientation(value: QmlEnumToken): ListViewBuilder;
  orientationBind(expr: string): ListViewBuilder;
  palette(value: PaletteBuilder): ListViewBuilder;
  paletteBind(expr: string): ListViewBuilder;
  parent(value: ItemBuilder): ListViewBuilder;
  parentBind(expr: string): ListViewBuilder;
  pixelAligned(value: boolean): ListViewBuilder;
  pixelAlignedBind(expr: string): ListViewBuilder;
  populate(value: TransitionBuilder): ListViewBuilder;
  populateBind(expr: string): ListViewBuilder;
  preferredHighlightBegin(value: number): ListViewBuilder;
  preferredHighlightBeginBind(expr: string): ListViewBuilder;
  preferredHighlightEnd(value: number): ListViewBuilder;
  preferredHighlightEndBind(expr: string): ListViewBuilder;
  pressDelay(value: number): ListViewBuilder;
  pressDelayBind(expr: string): ListViewBuilder;
  rebound(value: TransitionBuilder): ListViewBuilder;
  reboundBind(expr: string): ListViewBuilder;
  remove(value: TransitionBuilder): ListViewBuilder;
  removeBind(expr: string): ListViewBuilder;
  removeDisplaced(value: TransitionBuilder): ListViewBuilder;
  removeDisplacedBind(expr: string): ListViewBuilder;
  reuseItems(value: boolean): ListViewBuilder;
  reuseItemsBind(expr: string): ListViewBuilder;
  rightMargin(value: number): ListViewBuilder;
  rightMarginBind(expr: string): ListViewBuilder;
  rotation(value: number): ListViewBuilder;
  rotationBind(expr: string): ListViewBuilder;
  scale(value: number): ListViewBuilder;
  scaleBind(expr: string): ListViewBuilder;
  smooth(value: boolean): ListViewBuilder;
  smoothBind(expr: string): ListViewBuilder;
  snapMode(value: QmlEnumToken): ListViewBuilder;
  snapModeBind(expr: string): ListViewBuilder;
  spacing(value: number): ListViewBuilder;
  spacingBind(expr: string): ListViewBuilder;
  state(value: string): ListViewBuilder;
  stateBind(expr: string): ListViewBuilder;
  synchronousDrag(value: boolean): ListViewBuilder;
  synchronousDragBind(expr: string): ListViewBuilder;
  topMargin(value: number): ListViewBuilder;
  topMarginBind(expr: string): ListViewBuilder;
  transformOrigin(value: QmlEnumToken): ListViewBuilder;
  transformOriginBind(expr: string): ListViewBuilder;
  verticalLayoutDirection(value: QmlEnumToken): ListViewBuilder;
  verticalLayoutDirectionBind(expr: string): ListViewBuilder;
  visible(value: boolean): ListViewBuilder;
  visibleBind(expr: string): ListViewBuilder;
  width(value: number): ListViewBuilder;
  widthBind(expr: string): ListViewBuilder;
  x(value: number): ListViewBuilder;
  xBind(expr: string): ListViewBuilder;
  y(value: number): ListViewBuilder;
  yBind(expr: string): ListViewBuilder;
  z(value: number): ListViewBuilder;
  zBind(expr: string): ListViewBuilder;
  onAcceptedButtonsChanged(body: string): ListViewBuilder;
  onActiveFocusChanged(body: string): ListViewBuilder;
  onActiveFocusOnTabChanged(body: string): ListViewBuilder;
  onAddDisplacedTransitionChanged(body: string): ListViewBuilder;
  onAddTransitionChanged(body: string): ListViewBuilder;
  onAntialiasingChanged(body: string): ListViewBuilder;
  onAtXBeginningChanged(body: string): ListViewBuilder;
  onAtXEndChanged(body: string): ListViewBuilder;
  onAtYBeginningChanged(body: string): ListViewBuilder;
  onAtYEndChanged(body: string): ListViewBuilder;
  onBaselineOffsetChanged(body: string): ListViewBuilder;
  onBottomMarginChanged(body: string): ListViewBuilder;
  onBoundsBehaviorChanged(body: string): ListViewBuilder;
  onBoundsMovementChanged(body: string): ListViewBuilder;
  onCacheBufferChanged(body: string): ListViewBuilder;
  onChildrenChanged(body: string): ListViewBuilder;
  onChildrenRectChanged(body: string): ListViewBuilder;
  onClipChanged(body: string): ListViewBuilder;
  onContainmentMaskChanged(body: string): ListViewBuilder;
  onContentHeightChanged(body: string): ListViewBuilder;
  onContentWidthChanged(body: string): ListViewBuilder;
  onContentXChanged(body: string): ListViewBuilder;
  onContentYChanged(body: string): ListViewBuilder;
  onCountChanged(body: string): ListViewBuilder;
  onCurrentIndexChanged(body: string): ListViewBuilder;
  onCurrentItemChanged(body: string): ListViewBuilder;
  onCurrentSectionChanged(body: string): ListViewBuilder;
  onDelegateChanged(body: string): ListViewBuilder;
  onDelegateModelAccessChanged(body: string): ListViewBuilder;
  onDisplacedTransitionChanged(body: string): ListViewBuilder;
  onDisplayMarginBeginningChanged(body: string): ListViewBuilder;
  onDisplayMarginEndChanged(body: string): ListViewBuilder;
  onDragEnded(body: string): ListViewBuilder;
  onDragStarted(body: string): ListViewBuilder;
  onDraggingChanged(body: string): ListViewBuilder;
  onDraggingHorizontallyChanged(body: string): ListViewBuilder;
  onDraggingVerticallyChanged(body: string): ListViewBuilder;
  onEffectiveLayoutDirectionChanged(body: string): ListViewBuilder;
  onEnabledChanged(body: string): ListViewBuilder;
  onFlickDecelerationChanged(body: string): ListViewBuilder;
  onFlickEnded(body: string): ListViewBuilder;
  onFlickStarted(body: string): ListViewBuilder;
  onFlickableDirectionChanged(body: string): ListViewBuilder;
  onFlickingChanged(body: string): ListViewBuilder;
  onFlickingHorizontallyChanged(body: string): ListViewBuilder;
  onFlickingVerticallyChanged(body: string): ListViewBuilder;
  onFocusChanged(body: string): ListViewBuilder;
  onFocusPolicyChanged(body: string): ListViewBuilder;
  onFooterChanged(body: string): ListViewBuilder;
  onFooterItemChanged(body: string): ListViewBuilder;
  onFooterPositioningChanged(body: string): ListViewBuilder;
  onHeaderChanged(body: string): ListViewBuilder;
  onHeaderItemChanged(body: string): ListViewBuilder;
  onHeaderPositioningChanged(body: string): ListViewBuilder;
  onHeightChanged(body: string): ListViewBuilder;
  onHighlightChanged(body: string): ListViewBuilder;
  onHighlightFollowsCurrentItemChanged(body: string): ListViewBuilder;
  onHighlightItemChanged(body: string): ListViewBuilder;
  onHighlightMoveDurationChanged(body: string): ListViewBuilder;
  onHighlightMoveVelocityChanged(body: string): ListViewBuilder;
  onHighlightRangeModeChanged(body: string): ListViewBuilder;
  onHighlightResizeDurationChanged(body: string): ListViewBuilder;
  onHighlightResizeVelocityChanged(body: string): ListViewBuilder;
  onHorizontalOvershootChanged(body: string): ListViewBuilder;
  onHorizontalVelocityChanged(body: string): ListViewBuilder;
  onImplicitHeightChanged(body: string): ListViewBuilder;
  onImplicitWidthChanged(body: string): ListViewBuilder;
  onInteractiveChanged(body: string): ListViewBuilder;
  onIsAtBoundaryChanged(body: string): ListViewBuilder;
  onKeyNavigationEnabledChanged(body: string): ListViewBuilder;
  onKeyNavigationWrapsChanged(body: string): ListViewBuilder;
  onLayoutDirectionChanged(body: string): ListViewBuilder;
  onLeftMarginChanged(body: string): ListViewBuilder;
  onMaximumFlickVelocityChanged(body: string): ListViewBuilder;
  onModelChanged(body: string): ListViewBuilder;
  onMoveDisplacedTransitionChanged(body: string): ListViewBuilder;
  onMoveTransitionChanged(body: string): ListViewBuilder;
  onMovementEnded(body: string): ListViewBuilder;
  onMovementStarted(body: string): ListViewBuilder;
  onMovingChanged(body: string): ListViewBuilder;
  onMovingHorizontallyChanged(body: string): ListViewBuilder;
  onMovingVerticallyChanged(body: string): ListViewBuilder;
  onObjectNameChanged(body: string): ListViewBuilder;
  onOpacityChanged(body: string): ListViewBuilder;
  onOrientationChanged(body: string): ListViewBuilder;
  onOriginXChanged(body: string): ListViewBuilder;
  onOriginYChanged(body: string): ListViewBuilder;
  onPaletteChanged(body: string): ListViewBuilder;
  onPaletteCreated(body: string): ListViewBuilder;
  onParentChanged(body: string): ListViewBuilder;
  onPixelAlignedChanged(body: string): ListViewBuilder;
  onPopulateTransitionChanged(body: string): ListViewBuilder;
  onPreferredHighlightBeginChanged(body: string): ListViewBuilder;
  onPreferredHighlightEndChanged(body: string): ListViewBuilder;
  onPressDelayChanged(body: string): ListViewBuilder;
  onReboundChanged(body: string): ListViewBuilder;
  onRemoveDisplacedTransitionChanged(body: string): ListViewBuilder;
  onRemoveTransitionChanged(body: string): ListViewBuilder;
  onReuseItemsChanged(body: string): ListViewBuilder;
  onRightMarginChanged(body: string): ListViewBuilder;
  onRotationChanged(body: string): ListViewBuilder;
  onScaleChanged(body: string): ListViewBuilder;
  onSmoothChanged(body: string): ListViewBuilder;
  onSnapModeChanged(body: string): ListViewBuilder;
  onSpacingChanged(body: string): ListViewBuilder;
  onStateChanged(body: string): ListViewBuilder;
  onSynchronousDragChanged(body: string): ListViewBuilder;
  onTopMarginChanged(body: string): ListViewBuilder;
  onTransformOriginChanged(body: string): ListViewBuilder;
  onVerticalLayoutDirectionChanged(body: string): ListViewBuilder;
  onVerticalOvershootChanged(body: string): ListViewBuilder;
  onVerticalVelocityChanged(body: string): ListViewBuilder;
  onVisibleChanged(body: string): ListViewBuilder;
  onVisibleChildrenChanged(body: string): ListViewBuilder;
  onWidthChanged(body: string): ListViewBuilder;
  onWindowChanged(body: string): ListViewBuilder;
  onXChanged(body: string): ListViewBuilder;
  onYChanged(body: string): ListViewBuilder;
  onZChanged(body: string): ListViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ListViewBuilder;
  layer(setup: (b: LayerBuilder) => void): ListViewBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ListViewBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ListViewBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ListViewBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ListViewBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ListViewBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ListViewBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ListViewBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ListViewBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ListViewBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ListViewBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ListViewBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ListViewBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ListViewBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ListViewBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ListViewBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ListViewBuilder;
}

const LISTVIEW_META: TypeMetadata = {
  typeName: 'ListView',
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
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'footer', hasValue: true, hasBinding: true },
    { name: 'footerPositioning', hasValue: true, hasBinding: true },
    { name: 'header', hasValue: true, hasBinding: true },
    { name: 'headerPositioning', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'highlight', hasValue: true, hasBinding: true },
    { name: 'highlightFollowsCurrentItem', hasValue: true, hasBinding: true },
    { name: 'highlightMoveDuration', hasValue: true, hasBinding: true },
    { name: 'highlightMoveVelocity', hasValue: true, hasBinding: true },
    { name: 'highlightRangeMode', hasValue: true, hasBinding: true },
    { name: 'highlightResizeDuration', hasValue: true, hasBinding: true },
    { name: 'highlightResizeVelocity', hasValue: true, hasBinding: true },
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
    { name: 'orientation', hasValue: true, hasBinding: true },
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
    { name: 'spacing', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCurrentSectionChanged', paramCount: 0 },
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
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFooterChanged', paramCount: 0 },
    { handlerName: 'onFooterItemChanged', paramCount: 0 },
    { handlerName: 'onFooterPositioningChanged', paramCount: 0 },
    { handlerName: 'onHeaderChanged', paramCount: 0 },
    { handlerName: 'onHeaderItemChanged', paramCount: 0 },
    { handlerName: 'onHeaderPositioningChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlightChanged', paramCount: 0 },
    { handlerName: 'onHighlightFollowsCurrentItemChanged', paramCount: 0 },
    { handlerName: 'onHighlightItemChanged', paramCount: 0 },
    { handlerName: 'onHighlightMoveDurationChanged', paramCount: 0 },
    { handlerName: 'onHighlightMoveVelocityChanged', paramCount: 0 },
    { handlerName: 'onHighlightRangeModeChanged', paramCount: 0 },
    { handlerName: 'onHighlightResizeDurationChanged', paramCount: 0 },
    { handlerName: 'onHighlightResizeVelocityChanged', paramCount: 0 },
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
    { handlerName: 'onOrientationChanged', paramCount: 0 },
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
    { handlerName: 'onSpacingChanged', paramCount: 0 },
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
  defaultProperty: 'data',
};

export function ListView(): ListViewBuilder {
  return createFluentBuilder('ListView', LISTVIEW_META) as unknown as ListViewBuilder;
}

export namespace ListView {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('ListView', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('ListView', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken('ListView', 'BoundsBehavior', 'OvershootBounds');
    export const DragAndOvershootBounds = createEnumToken(
      'ListView',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'ListView',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ListView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ListView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ListView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ListView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ListView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ListView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ListView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'ListView',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'ListView',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken('ListView', 'FlickableDirection', 'VerticalFlick');
    export const HorizontalAndVerticalFlick = createEnumToken(
      'ListView',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'ListView',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace FooterPositioning {
    export const InlineFooter = createEnumToken('ListView', 'FooterPositioning', 'InlineFooter');
    export const OverlayFooter = createEnumToken('ListView', 'FooterPositioning', 'OverlayFooter');
    export const PullBackFooter = createEnumToken(
      'ListView',
      'FooterPositioning',
      'PullBackFooter',
    );
  }
  export namespace HeaderPositioning {
    export const InlineHeader = createEnumToken('ListView', 'HeaderPositioning', 'InlineHeader');
    export const OverlayHeader = createEnumToken('ListView', 'HeaderPositioning', 'OverlayHeader');
    export const PullBackHeader = createEnumToken(
      'ListView',
      'HeaderPositioning',
      'PullBackHeader',
    );
  }
  export namespace HighlightRangeMode {
    export const NoHighlightRange = createEnumToken(
      'ListView',
      'HighlightRangeMode',
      'NoHighlightRange',
    );
    export const ApplyRange = createEnumToken('ListView', 'HighlightRangeMode', 'ApplyRange');
    export const StrictlyEnforceRange = createEnumToken(
      'ListView',
      'HighlightRangeMode',
      'StrictlyEnforceRange',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ListView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ListView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LayoutDirection {
    export const LeftToRight = createEnumToken('ListView', 'LayoutDirection', 'LeftToRight');
    export const RightToLeft = createEnumToken('ListView', 'LayoutDirection', 'RightToLeft');
    export const VerticalTopToBottom = createEnumToken(
      'ListView',
      'LayoutDirection',
      'VerticalTopToBottom',
    );
    export const VerticalBottomToTop = createEnumToken(
      'ListView',
      'LayoutDirection',
      'VerticalBottomToTop',
    );
  }
  export namespace Orientation {
    export const Horizontal = createEnumToken('ListView', 'Orientation', 'Horizontal');
    export const Vertical = createEnumToken('ListView', 'Orientation', 'Vertical');
  }
  export namespace PositionMode {
    export const Beginning = createEnumToken('ListView', 'PositionMode', 'Beginning');
    export const Center = createEnumToken('ListView', 'PositionMode', 'Center');
    export const End = createEnumToken('ListView', 'PositionMode', 'End');
    export const Visible = createEnumToken('ListView', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('ListView', 'PositionMode', 'Contain');
    export const SnapPosition = createEnumToken('ListView', 'PositionMode', 'SnapPosition');
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('ListView', 'SnapMode', 'NoSnap');
    export const SnapToItem = createEnumToken('ListView', 'SnapMode', 'SnapToItem');
    export const SnapOneItem = createEnumToken('ListView', 'SnapMode', 'SnapOneItem');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ListView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ListView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ListView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ListView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ListView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ListView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ListView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ListView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ListView', 'TransformOrigin', 'BottomRight');
  }
  export namespace VerticalLayoutDirection {
    export const TopToBottom = createEnumToken(
      'ListView',
      'VerticalLayoutDirection',
      'TopToBottom',
    );
    export const BottomToTop = createEnumToken(
      'ListView',
      'VerticalLayoutDirection',
      'BottomToTop',
    );
  }
}
