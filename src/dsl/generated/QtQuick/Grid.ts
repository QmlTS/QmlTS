// AUTO-GENERATED — DO NOT EDIT
// Type: Grid
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
export interface GridBuilder {
  id(id: string): GridBuilder;
  child(obj: QmlObjectBuilder): GridBuilder;

  activeFocusOnTab(value: boolean): GridBuilder;
  activeFocusOnTabBind(expr: string): GridBuilder;
  add(value: TransitionBuilder): GridBuilder;
  addBind(expr: string): GridBuilder;
  antialiasing(value: boolean): GridBuilder;
  antialiasingBind(expr: string): GridBuilder;
  baselineOffset(value: number): GridBuilder;
  baselineOffsetBind(expr: string): GridBuilder;
  bottomPadding(value: number): GridBuilder;
  bottomPaddingBind(expr: string): GridBuilder;
  clip(value: boolean): GridBuilder;
  clipBind(expr: string): GridBuilder;
  columnSpacing(value: number): GridBuilder;
  columnSpacingBind(expr: string): GridBuilder;
  columns(value: number): GridBuilder;
  columnsBind(expr: string): GridBuilder;
  containmentMask(value: QtObjectBuilder): GridBuilder;
  containmentMaskBind(expr: string): GridBuilder;
  enabled(value: boolean): GridBuilder;
  enabledBind(expr: string): GridBuilder;
  flow(value: QmlValue): GridBuilder;
  flowBind(expr: string): GridBuilder;
  focus(value: boolean): GridBuilder;
  focusBind(expr: string): GridBuilder;
  focusPolicy(value: QmlValue): GridBuilder;
  focusPolicyBind(expr: string): GridBuilder;
  height(value: number): GridBuilder;
  heightBind(expr: string): GridBuilder;
  horizontalItemAlignment(value: QmlValue): GridBuilder;
  horizontalItemAlignmentBind(expr: string): GridBuilder;
  layoutDirection(value: QmlValue): GridBuilder;
  layoutDirectionBind(expr: string): GridBuilder;
  leftPadding(value: number): GridBuilder;
  leftPaddingBind(expr: string): GridBuilder;
  move(value: TransitionBuilder): GridBuilder;
  moveBind(expr: string): GridBuilder;
  objectName(value: string): GridBuilder;
  objectNameBind(expr: string): GridBuilder;
  opacity(value: number): GridBuilder;
  opacityBind(expr: string): GridBuilder;
  padding(value: number): GridBuilder;
  paddingBind(expr: string): GridBuilder;
  palette(value: PaletteBuilder): GridBuilder;
  paletteBind(expr: string): GridBuilder;
  parent(value: ItemBuilder): GridBuilder;
  parentBind(expr: string): GridBuilder;
  populate(value: TransitionBuilder): GridBuilder;
  populateBind(expr: string): GridBuilder;
  rightPadding(value: number): GridBuilder;
  rightPaddingBind(expr: string): GridBuilder;
  rotation(value: number): GridBuilder;
  rotationBind(expr: string): GridBuilder;
  rowSpacing(value: number): GridBuilder;
  rowSpacingBind(expr: string): GridBuilder;
  rows(value: number): GridBuilder;
  rowsBind(expr: string): GridBuilder;
  scale(value: number): GridBuilder;
  scaleBind(expr: string): GridBuilder;
  smooth(value: boolean): GridBuilder;
  smoothBind(expr: string): GridBuilder;
  spacing(value: number): GridBuilder;
  spacingBind(expr: string): GridBuilder;
  state(value: string): GridBuilder;
  stateBind(expr: string): GridBuilder;
  topPadding(value: number): GridBuilder;
  topPaddingBind(expr: string): GridBuilder;
  transformOrigin(value: QmlValue): GridBuilder;
  transformOriginBind(expr: string): GridBuilder;
  verticalItemAlignment(value: QmlValue): GridBuilder;
  verticalItemAlignmentBind(expr: string): GridBuilder;
  visible(value: boolean): GridBuilder;
  visibleBind(expr: string): GridBuilder;
  width(value: number): GridBuilder;
  widthBind(expr: string): GridBuilder;
  x(value: number): GridBuilder;
  xBind(expr: string): GridBuilder;
  y(value: number): GridBuilder;
  yBind(expr: string): GridBuilder;
  z(value: number): GridBuilder;
  zBind(expr: string): GridBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): GridBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): GridBuilder;
  onAddChanged(handler: () => void): GridBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): GridBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): GridBuilder;
  onBottomPaddingChanged(handler: () => void): GridBuilder;
  onChildrenChanged(handler: () => void): GridBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): GridBuilder;
  onClipChanged(handler: (arg0: boolean) => void): GridBuilder;
  onColumnSpacingChanged(handler: () => void): GridBuilder;
  onColumnsChanged(handler: () => void): GridBuilder;
  onContainmentMaskChanged(handler: () => void): GridBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): GridBuilder;
  onEffectiveLayoutDirectionChanged(handler: () => void): GridBuilder;
  onEnabledChanged(handler: () => void): GridBuilder;
  onFlowChanged(handler: () => void): GridBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): GridBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): GridBuilder;
  onHeightChanged(handler: () => void): GridBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): GridBuilder;
  onImplicitHeightChanged(handler: () => void): GridBuilder;
  onImplicitWidthChanged(handler: () => void): GridBuilder;
  onLayoutDirectionChanged(handler: () => void): GridBuilder;
  onLeftPaddingChanged(handler: () => void): GridBuilder;
  onMoveChanged(handler: () => void): GridBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GridBuilder;
  onOpacityChanged(handler: () => void): GridBuilder;
  onPaddingChanged(handler: () => void): GridBuilder;
  onPaletteChanged(handler: () => void): GridBuilder;
  onPaletteCreated(handler: () => void): GridBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): GridBuilder;
  onPopulateChanged(handler: () => void): GridBuilder;
  onPositioningComplete(handler: () => void): GridBuilder;
  onRightPaddingChanged(handler: () => void): GridBuilder;
  onRotationChanged(handler: () => void): GridBuilder;
  onRowSpacingChanged(handler: () => void): GridBuilder;
  onRowsChanged(handler: () => void): GridBuilder;
  onScaleChanged(handler: () => void): GridBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): GridBuilder;
  onSpacingChanged(handler: () => void): GridBuilder;
  onStateChanged(handler: (arg0: string) => void): GridBuilder;
  onTopPaddingChanged(handler: () => void): GridBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): GridBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): GridBuilder;
  onVisibleChanged(handler: () => void): GridBuilder;
  onVisibleChildrenChanged(handler: () => void): GridBuilder;
  onWidthChanged(handler: () => void): GridBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): GridBuilder;
  onXChanged(handler: () => void): GridBuilder;
  onYChanged(handler: () => void): GridBuilder;
  onZChanged(handler: () => void): GridBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GridBuilder;
  layer(setup: (b: LayerBuilder) => void): GridBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): GridBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): GridBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): GridBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): GridBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): GridBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): GridBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): GridBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): GridBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): GridBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): GridBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): GridBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): GridBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): GridBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): GridBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): GridBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): GridBuilder;
}

export function Grid(): GridBuilder {
  return new DslBuilderImpl('Grid') as unknown as GridBuilder;
}

export namespace Grid {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Grid',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Grid',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Grid', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Grid', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Grid', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Grid', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Grid', 'Flags', 'ItemObservesViewport');
  }
  export namespace Flow {
    export const LeftToRight = createEnumToken('Grid', 'Flow', 'LeftToRight');
    export const TopToBottom = createEnumToken('Grid', 'Flow', 'TopToBottom');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('Grid', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('Grid', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('Grid', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Grid', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Grid', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Grid',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Grid', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Grid', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Grid', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Grid', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Grid', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Grid', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Grid', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Grid', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Grid', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('Grid', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('Grid', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Grid', 'VAlignment', 'AlignVCenter');
  }
}
