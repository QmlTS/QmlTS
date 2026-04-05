// AUTO-GENERATED — DO NOT EDIT
// Type: ListView
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
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
import type { WindowBuilder } from './Window.js';
export interface ListViewBuilder {
  id(id: string): ListViewBuilder;
  child(obj: QmlObjectBuilder): ListViewBuilder;

  acceptedButtons(value: QmlValue): ListViewBuilder;
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
  boundsBehavior(value: QmlValue): ListViewBuilder;
  boundsBehaviorBind(expr: string): ListViewBuilder;
  boundsMovement(value: QmlValue): ListViewBuilder;
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
  delegateModelAccess(value: QmlValue): ListViewBuilder;
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
  flickableDirection(value: QmlValue): ListViewBuilder;
  flickableDirectionBind(expr: string): ListViewBuilder;
  focus(value: boolean): ListViewBuilder;
  focusBind(expr: string): ListViewBuilder;
  focusPolicy(value: QmlValue): ListViewBuilder;
  focusPolicyBind(expr: string): ListViewBuilder;
  footer(value: QmlComponent): ListViewBuilder;
  footerBind(expr: string): ListViewBuilder;
  footerPositioning(value: QmlValue): ListViewBuilder;
  footerPositioningBind(expr: string): ListViewBuilder;
  header(value: QmlComponent): ListViewBuilder;
  headerBind(expr: string): ListViewBuilder;
  headerPositioning(value: QmlValue): ListViewBuilder;
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
  highlightRangeMode(value: QmlValue): ListViewBuilder;
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
  layoutDirection(value: QmlValue): ListViewBuilder;
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
  orientation(value: QmlValue): ListViewBuilder;
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
  snapMode(value: QmlValue): ListViewBuilder;
  snapModeBind(expr: string): ListViewBuilder;
  spacing(value: number): ListViewBuilder;
  spacingBind(expr: string): ListViewBuilder;
  state(value: string): ListViewBuilder;
  stateBind(expr: string): ListViewBuilder;
  synchronousDrag(value: boolean): ListViewBuilder;
  synchronousDragBind(expr: string): ListViewBuilder;
  topMargin(value: number): ListViewBuilder;
  topMarginBind(expr: string): ListViewBuilder;
  transformOrigin(value: QmlValue): ListViewBuilder;
  transformOriginBind(expr: string): ListViewBuilder;
  verticalLayoutDirection(value: QmlValue): ListViewBuilder;
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
  onAcceptedButtonsChanged(handler: () => void): ListViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ListViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ListViewBuilder;
  onAddDisplacedTransitionChanged(handler: () => void): ListViewBuilder;
  onAddTransitionChanged(handler: () => void): ListViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ListViewBuilder;
  onAtXBeginningChanged(handler: () => void): ListViewBuilder;
  onAtXEndChanged(handler: () => void): ListViewBuilder;
  onAtYBeginningChanged(handler: () => void): ListViewBuilder;
  onAtYEndChanged(handler: () => void): ListViewBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): ListViewBuilder;
  onBottomMarginChanged(handler: () => void): ListViewBuilder;
  onBoundsBehaviorChanged(handler: () => void): ListViewBuilder;
  onBoundsMovementChanged(handler: () => void): ListViewBuilder;
  onCacheBufferChanged(handler: () => void): ListViewBuilder;
  onChildrenChanged(handler: () => void): ListViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ListViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ListViewBuilder;
  onContainmentMaskChanged(handler: () => void): ListViewBuilder;
  onContentHeightChanged(handler: () => void): ListViewBuilder;
  onContentWidthChanged(handler: () => void): ListViewBuilder;
  onContentXChanged(handler: () => void): ListViewBuilder;
  onContentYChanged(handler: () => void): ListViewBuilder;
  onCountChanged(handler: () => void): ListViewBuilder;
  onCurrentIndexChanged(handler: () => void): ListViewBuilder;
  onCurrentItemChanged(handler: () => void): ListViewBuilder;
  onCurrentSectionChanged(handler: () => void): ListViewBuilder;
  onDelegateChanged(handler: () => void): ListViewBuilder;
  onDelegateModelAccessChanged(handler: () => void): ListViewBuilder;
  onDisplacedTransitionChanged(handler: () => void): ListViewBuilder;
  onDisplayMarginBeginningChanged(handler: () => void): ListViewBuilder;
  onDisplayMarginEndChanged(handler: () => void): ListViewBuilder;
  onDragEnded(handler: () => void): ListViewBuilder;
  onDragStarted(handler: () => void): ListViewBuilder;
  onDraggingChanged(handler: () => void): ListViewBuilder;
  onDraggingHorizontallyChanged(handler: () => void): ListViewBuilder;
  onDraggingVerticallyChanged(handler: () => void): ListViewBuilder;
  onEffectiveLayoutDirectionChanged(handler: () => void): ListViewBuilder;
  onEnabledChanged(handler: () => void): ListViewBuilder;
  onFlickDecelerationChanged(handler: () => void): ListViewBuilder;
  onFlickEnded(handler: () => void): ListViewBuilder;
  onFlickStarted(handler: () => void): ListViewBuilder;
  onFlickableDirectionChanged(handler: () => void): ListViewBuilder;
  onFlickingChanged(handler: () => void): ListViewBuilder;
  onFlickingHorizontallyChanged(handler: () => void): ListViewBuilder;
  onFlickingVerticallyChanged(handler: () => void): ListViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ListViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ListViewBuilder;
  onFooterChanged(handler: () => void): ListViewBuilder;
  onFooterItemChanged(handler: () => void): ListViewBuilder;
  onFooterPositioningChanged(handler: () => void): ListViewBuilder;
  onHeaderChanged(handler: () => void): ListViewBuilder;
  onHeaderItemChanged(handler: () => void): ListViewBuilder;
  onHeaderPositioningChanged(handler: () => void): ListViewBuilder;
  onHeightChanged(handler: () => void): ListViewBuilder;
  onHighlightChanged(handler: () => void): ListViewBuilder;
  onHighlightFollowsCurrentItemChanged(handler: () => void): ListViewBuilder;
  onHighlightItemChanged(handler: () => void): ListViewBuilder;
  onHighlightMoveDurationChanged(handler: () => void): ListViewBuilder;
  onHighlightMoveVelocityChanged(handler: () => void): ListViewBuilder;
  onHighlightRangeModeChanged(handler: () => void): ListViewBuilder;
  onHighlightResizeDurationChanged(handler: () => void): ListViewBuilder;
  onHighlightResizeVelocityChanged(handler: () => void): ListViewBuilder;
  onHorizontalOvershootChanged(handler: () => void): ListViewBuilder;
  onHorizontalVelocityChanged(handler: () => void): ListViewBuilder;
  onImplicitHeightChanged(handler: () => void): ListViewBuilder;
  onImplicitWidthChanged(handler: () => void): ListViewBuilder;
  onInteractiveChanged(handler: () => void): ListViewBuilder;
  onIsAtBoundaryChanged(handler: () => void): ListViewBuilder;
  onKeyNavigationEnabledChanged(handler: () => void): ListViewBuilder;
  onKeyNavigationWrapsChanged(handler: () => void): ListViewBuilder;
  onLayoutDirectionChanged(handler: () => void): ListViewBuilder;
  onLeftMarginChanged(handler: () => void): ListViewBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): ListViewBuilder;
  onModelChanged(handler: () => void): ListViewBuilder;
  onMoveDisplacedTransitionChanged(handler: () => void): ListViewBuilder;
  onMoveTransitionChanged(handler: () => void): ListViewBuilder;
  onMovementEnded(handler: () => void): ListViewBuilder;
  onMovementStarted(handler: () => void): ListViewBuilder;
  onMovingChanged(handler: () => void): ListViewBuilder;
  onMovingHorizontallyChanged(handler: () => void): ListViewBuilder;
  onMovingVerticallyChanged(handler: () => void): ListViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ListViewBuilder;
  onOpacityChanged(handler: () => void): ListViewBuilder;
  onOrientationChanged(handler: () => void): ListViewBuilder;
  onOriginXChanged(handler: () => void): ListViewBuilder;
  onOriginYChanged(handler: () => void): ListViewBuilder;
  onPaletteChanged(handler: () => void): ListViewBuilder;
  onPaletteCreated(handler: () => void): ListViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ListViewBuilder;
  onPixelAlignedChanged(handler: () => void): ListViewBuilder;
  onPopulateTransitionChanged(handler: () => void): ListViewBuilder;
  onPreferredHighlightBeginChanged(handler: () => void): ListViewBuilder;
  onPreferredHighlightEndChanged(handler: () => void): ListViewBuilder;
  onPressDelayChanged(handler: () => void): ListViewBuilder;
  onReboundChanged(handler: () => void): ListViewBuilder;
  onRemoveDisplacedTransitionChanged(handler: () => void): ListViewBuilder;
  onRemoveTransitionChanged(handler: () => void): ListViewBuilder;
  onReuseItemsChanged(handler: () => void): ListViewBuilder;
  onRightMarginChanged(handler: () => void): ListViewBuilder;
  onRotationChanged(handler: () => void): ListViewBuilder;
  onScaleChanged(handler: () => void): ListViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ListViewBuilder;
  onSnapModeChanged(handler: () => void): ListViewBuilder;
  onSpacingChanged(handler: () => void): ListViewBuilder;
  onStateChanged(handler: (arg0: string) => void): ListViewBuilder;
  onSynchronousDragChanged(handler: () => void): ListViewBuilder;
  onTopMarginChanged(handler: () => void): ListViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ListViewBuilder;
  onVerticalLayoutDirectionChanged(handler: () => void): ListViewBuilder;
  onVerticalOvershootChanged(handler: () => void): ListViewBuilder;
  onVerticalVelocityChanged(handler: () => void): ListViewBuilder;
  onVisibleChanged(handler: () => void): ListViewBuilder;
  onVisibleChildrenChanged(handler: () => void): ListViewBuilder;
  onWidthChanged(handler: () => void): ListViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ListViewBuilder;
  onXChanged(handler: () => void): ListViewBuilder;
  onYChanged(handler: () => void): ListViewBuilder;
  onZChanged(handler: () => void): ListViewBuilder;
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

export function ListView(): ListViewBuilder {
  return new DslBuilderImpl('ListView') as unknown as ListViewBuilder;
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
