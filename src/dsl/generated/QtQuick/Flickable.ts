// AUTO-GENERATED — DO NOT EDIT
// Type: Flickable
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
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
export interface FlickableBuilder {
  id(id: string): FlickableBuilder;
  child(obj: QmlObjectBuilder): FlickableBuilder;

  acceptedButtons(value: QmlValue): FlickableBuilder;
  acceptedButtonsBind(expr: string): FlickableBuilder;
  activeFocusOnTab(value: boolean): FlickableBuilder;
  activeFocusOnTabBind(expr: string): FlickableBuilder;
  antialiasing(value: boolean): FlickableBuilder;
  antialiasingBind(expr: string): FlickableBuilder;
  baselineOffset(value: number): FlickableBuilder;
  baselineOffsetBind(expr: string): FlickableBuilder;
  bottomMargin(value: number): FlickableBuilder;
  bottomMarginBind(expr: string): FlickableBuilder;
  boundsBehavior(value: QmlValue): FlickableBuilder;
  boundsBehaviorBind(expr: string): FlickableBuilder;
  boundsMovement(value: QmlValue): FlickableBuilder;
  boundsMovementBind(expr: string): FlickableBuilder;
  clip(value: boolean): FlickableBuilder;
  clipBind(expr: string): FlickableBuilder;
  containmentMask(value: QtObjectBuilder): FlickableBuilder;
  containmentMaskBind(expr: string): FlickableBuilder;
  contentHeight(value: number): FlickableBuilder;
  contentHeightBind(expr: string): FlickableBuilder;
  contentWidth(value: number): FlickableBuilder;
  contentWidthBind(expr: string): FlickableBuilder;
  contentX(value: number): FlickableBuilder;
  contentXBind(expr: string): FlickableBuilder;
  contentY(value: number): FlickableBuilder;
  contentYBind(expr: string): FlickableBuilder;
  enabled(value: boolean): FlickableBuilder;
  enabledBind(expr: string): FlickableBuilder;
  flickDeceleration(value: number): FlickableBuilder;
  flickDecelerationBind(expr: string): FlickableBuilder;
  flickableDirection(value: QmlValue): FlickableBuilder;
  flickableDirectionBind(expr: string): FlickableBuilder;
  focus(value: boolean): FlickableBuilder;
  focusBind(expr: string): FlickableBuilder;
  focusPolicy(value: QmlValue): FlickableBuilder;
  focusPolicyBind(expr: string): FlickableBuilder;
  height(value: number): FlickableBuilder;
  heightBind(expr: string): FlickableBuilder;
  implicitHeight(value: number): FlickableBuilder;
  implicitHeightBind(expr: string): FlickableBuilder;
  implicitWidth(value: number): FlickableBuilder;
  implicitWidthBind(expr: string): FlickableBuilder;
  interactive(value: boolean): FlickableBuilder;
  interactiveBind(expr: string): FlickableBuilder;
  leftMargin(value: number): FlickableBuilder;
  leftMarginBind(expr: string): FlickableBuilder;
  maximumFlickVelocity(value: number): FlickableBuilder;
  maximumFlickVelocityBind(expr: string): FlickableBuilder;
  objectName(value: string): FlickableBuilder;
  objectNameBind(expr: string): FlickableBuilder;
  opacity(value: number): FlickableBuilder;
  opacityBind(expr: string): FlickableBuilder;
  palette(value: PaletteBuilder): FlickableBuilder;
  paletteBind(expr: string): FlickableBuilder;
  parent(value: ItemBuilder): FlickableBuilder;
  parentBind(expr: string): FlickableBuilder;
  pixelAligned(value: boolean): FlickableBuilder;
  pixelAlignedBind(expr: string): FlickableBuilder;
  pressDelay(value: number): FlickableBuilder;
  pressDelayBind(expr: string): FlickableBuilder;
  rebound(value: TransitionBuilder): FlickableBuilder;
  reboundBind(expr: string): FlickableBuilder;
  rightMargin(value: number): FlickableBuilder;
  rightMarginBind(expr: string): FlickableBuilder;
  rotation(value: number): FlickableBuilder;
  rotationBind(expr: string): FlickableBuilder;
  scale(value: number): FlickableBuilder;
  scaleBind(expr: string): FlickableBuilder;
  smooth(value: boolean): FlickableBuilder;
  smoothBind(expr: string): FlickableBuilder;
  state(value: string): FlickableBuilder;
  stateBind(expr: string): FlickableBuilder;
  synchronousDrag(value: boolean): FlickableBuilder;
  synchronousDragBind(expr: string): FlickableBuilder;
  topMargin(value: number): FlickableBuilder;
  topMarginBind(expr: string): FlickableBuilder;
  transformOrigin(value: QmlValue): FlickableBuilder;
  transformOriginBind(expr: string): FlickableBuilder;
  visible(value: boolean): FlickableBuilder;
  visibleBind(expr: string): FlickableBuilder;
  width(value: number): FlickableBuilder;
  widthBind(expr: string): FlickableBuilder;
  x(value: number): FlickableBuilder;
  xBind(expr: string): FlickableBuilder;
  y(value: number): FlickableBuilder;
  yBind(expr: string): FlickableBuilder;
  z(value: number): FlickableBuilder;
  zBind(expr: string): FlickableBuilder;
  onAcceptedButtonsChanged(handler: () => void): FlickableBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): FlickableBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): FlickableBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): FlickableBuilder;
  onAtXBeginningChanged(handler: () => void): FlickableBuilder;
  onAtXEndChanged(handler: () => void): FlickableBuilder;
  onAtYBeginningChanged(handler: () => void): FlickableBuilder;
  onAtYEndChanged(handler: () => void): FlickableBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): FlickableBuilder;
  onBottomMarginChanged(handler: () => void): FlickableBuilder;
  onBoundsBehaviorChanged(handler: () => void): FlickableBuilder;
  onBoundsMovementChanged(handler: () => void): FlickableBuilder;
  onChildrenChanged(handler: () => void): FlickableBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): FlickableBuilder;
  onClipChanged(handler: (arg0: boolean) => void): FlickableBuilder;
  onContainmentMaskChanged(handler: () => void): FlickableBuilder;
  onContentHeightChanged(handler: () => void): FlickableBuilder;
  onContentWidthChanged(handler: () => void): FlickableBuilder;
  onContentXChanged(handler: () => void): FlickableBuilder;
  onContentYChanged(handler: () => void): FlickableBuilder;
  onDragEnded(handler: () => void): FlickableBuilder;
  onDragStarted(handler: () => void): FlickableBuilder;
  onDraggingChanged(handler: () => void): FlickableBuilder;
  onDraggingHorizontallyChanged(handler: () => void): FlickableBuilder;
  onDraggingVerticallyChanged(handler: () => void): FlickableBuilder;
  onEnabledChanged(handler: () => void): FlickableBuilder;
  onFlickDecelerationChanged(handler: () => void): FlickableBuilder;
  onFlickEnded(handler: () => void): FlickableBuilder;
  onFlickStarted(handler: () => void): FlickableBuilder;
  onFlickableDirectionChanged(handler: () => void): FlickableBuilder;
  onFlickingChanged(handler: () => void): FlickableBuilder;
  onFlickingHorizontallyChanged(handler: () => void): FlickableBuilder;
  onFlickingVerticallyChanged(handler: () => void): FlickableBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): FlickableBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): FlickableBuilder;
  onHeightChanged(handler: () => void): FlickableBuilder;
  onHorizontalOvershootChanged(handler: () => void): FlickableBuilder;
  onHorizontalVelocityChanged(handler: () => void): FlickableBuilder;
  onImplicitHeightChanged(handler: () => void): FlickableBuilder;
  onImplicitWidthChanged(handler: () => void): FlickableBuilder;
  onInteractiveChanged(handler: () => void): FlickableBuilder;
  onIsAtBoundaryChanged(handler: () => void): FlickableBuilder;
  onLeftMarginChanged(handler: () => void): FlickableBuilder;
  onMaximumFlickVelocityChanged(handler: () => void): FlickableBuilder;
  onMovementEnded(handler: () => void): FlickableBuilder;
  onMovementStarted(handler: () => void): FlickableBuilder;
  onMovingChanged(handler: () => void): FlickableBuilder;
  onMovingHorizontallyChanged(handler: () => void): FlickableBuilder;
  onMovingVerticallyChanged(handler: () => void): FlickableBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FlickableBuilder;
  onOpacityChanged(handler: () => void): FlickableBuilder;
  onOriginXChanged(handler: () => void): FlickableBuilder;
  onOriginYChanged(handler: () => void): FlickableBuilder;
  onPaletteChanged(handler: () => void): FlickableBuilder;
  onPaletteCreated(handler: () => void): FlickableBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): FlickableBuilder;
  onPixelAlignedChanged(handler: () => void): FlickableBuilder;
  onPressDelayChanged(handler: () => void): FlickableBuilder;
  onReboundChanged(handler: () => void): FlickableBuilder;
  onRightMarginChanged(handler: () => void): FlickableBuilder;
  onRotationChanged(handler: () => void): FlickableBuilder;
  onScaleChanged(handler: () => void): FlickableBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): FlickableBuilder;
  onStateChanged(handler: (arg0: string) => void): FlickableBuilder;
  onSynchronousDragChanged(handler: () => void): FlickableBuilder;
  onTopMarginChanged(handler: () => void): FlickableBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): FlickableBuilder;
  onVerticalOvershootChanged(handler: () => void): FlickableBuilder;
  onVerticalVelocityChanged(handler: () => void): FlickableBuilder;
  onVisibleChanged(handler: () => void): FlickableBuilder;
  onVisibleChildrenChanged(handler: () => void): FlickableBuilder;
  onWidthChanged(handler: () => void): FlickableBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): FlickableBuilder;
  onXChanged(handler: () => void): FlickableBuilder;
  onYChanged(handler: () => void): FlickableBuilder;
  onZChanged(handler: () => void): FlickableBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FlickableBuilder;
  layer(setup: (b: LayerBuilder) => void): FlickableBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FlickableBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FlickableBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FlickableBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FlickableBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FlickableBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FlickableBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FlickableBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FlickableBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FlickableBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FlickableBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FlickableBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FlickableBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FlickableBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FlickableBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FlickableBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FlickableBuilder;
}

export function Flickable(): FlickableBuilder {
  return new DslBuilderImpl('Flickable') as unknown as FlickableBuilder;
}

export namespace Flickable {
  export namespace BoundsBehavior {
    export const StopAtBounds = createEnumToken('Flickable', 'BoundsBehavior', 'StopAtBounds');
    export const DragOverBounds = createEnumToken('Flickable', 'BoundsBehavior', 'DragOverBounds');
    export const OvershootBounds = createEnumToken(
      'Flickable',
      'BoundsBehavior',
      'OvershootBounds',
    );
    export const DragAndOvershootBounds = createEnumToken(
      'Flickable',
      'BoundsBehavior',
      'DragAndOvershootBounds',
    );
  }
  export namespace BoundsMovement {
    export const FollowBoundsBehavior = createEnumToken(
      'Flickable',
      'BoundsMovement',
      'FollowBoundsBehavior',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Flickable',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Flickable',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Flickable', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Flickable', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Flickable', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Flickable', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Flickable',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlickableDirection {
    export const AutoFlickDirection = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'AutoFlickDirection',
    );
    export const HorizontalFlick = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'HorizontalFlick',
    );
    export const VerticalFlick = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'VerticalFlick',
    );
    export const HorizontalAndVerticalFlick = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'HorizontalAndVerticalFlick',
    );
    export const AutoFlickIfNeeded = createEnumToken(
      'Flickable',
      'FlickableDirection',
      'AutoFlickIfNeeded',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Flickable', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Flickable',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PositionMode {
    export const AlignLeft = createEnumToken('Flickable', 'PositionMode', 'AlignLeft');
    export const AlignRight = createEnumToken('Flickable', 'PositionMode', 'AlignRight');
    export const AlignHCenter = createEnumToken('Flickable', 'PositionMode', 'AlignHCenter');
    export const AlignTop = createEnumToken('Flickable', 'PositionMode', 'AlignTop');
    export const AlignBottom = createEnumToken('Flickable', 'PositionMode', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Flickable', 'PositionMode', 'AlignVCenter');
    export const AlignCenter = createEnumToken('Flickable', 'PositionMode', 'AlignCenter');
    export const Visible = createEnumToken('Flickable', 'PositionMode', 'Visible');
    export const Contain = createEnumToken('Flickable', 'PositionMode', 'Contain');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Flickable', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Flickable', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Flickable', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Flickable', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Flickable', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Flickable', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Flickable', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Flickable', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Flickable', 'TransformOrigin', 'BottomRight');
  }
}
