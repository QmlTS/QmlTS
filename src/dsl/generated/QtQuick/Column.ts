// AUTO-GENERATED — DO NOT EDIT
// Type: Column
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
export interface ColumnBuilder {
  id(id: string): ColumnBuilder;
  child(obj: QmlObjectBuilder): ColumnBuilder;

  activeFocusOnTab(value: boolean): ColumnBuilder;
  activeFocusOnTabBind(expr: string): ColumnBuilder;
  add(value: TransitionBuilder): ColumnBuilder;
  addBind(expr: string): ColumnBuilder;
  antialiasing(value: boolean): ColumnBuilder;
  antialiasingBind(expr: string): ColumnBuilder;
  baselineOffset(value: number): ColumnBuilder;
  baselineOffsetBind(expr: string): ColumnBuilder;
  bottomPadding(value: number): ColumnBuilder;
  bottomPaddingBind(expr: string): ColumnBuilder;
  clip(value: boolean): ColumnBuilder;
  clipBind(expr: string): ColumnBuilder;
  containmentMask(value: QtObjectBuilder): ColumnBuilder;
  containmentMaskBind(expr: string): ColumnBuilder;
  enabled(value: boolean): ColumnBuilder;
  enabledBind(expr: string): ColumnBuilder;
  focus(value: boolean): ColumnBuilder;
  focusBind(expr: string): ColumnBuilder;
  focusPolicy(value: QmlValue): ColumnBuilder;
  focusPolicyBind(expr: string): ColumnBuilder;
  height(value: number): ColumnBuilder;
  heightBind(expr: string): ColumnBuilder;
  leftPadding(value: number): ColumnBuilder;
  leftPaddingBind(expr: string): ColumnBuilder;
  move(value: TransitionBuilder): ColumnBuilder;
  moveBind(expr: string): ColumnBuilder;
  objectName(value: string): ColumnBuilder;
  objectNameBind(expr: string): ColumnBuilder;
  opacity(value: number): ColumnBuilder;
  opacityBind(expr: string): ColumnBuilder;
  padding(value: number): ColumnBuilder;
  paddingBind(expr: string): ColumnBuilder;
  palette(value: PaletteBuilder): ColumnBuilder;
  paletteBind(expr: string): ColumnBuilder;
  parent(value: ItemBuilder): ColumnBuilder;
  parentBind(expr: string): ColumnBuilder;
  populate(value: TransitionBuilder): ColumnBuilder;
  populateBind(expr: string): ColumnBuilder;
  rightPadding(value: number): ColumnBuilder;
  rightPaddingBind(expr: string): ColumnBuilder;
  rotation(value: number): ColumnBuilder;
  rotationBind(expr: string): ColumnBuilder;
  scale(value: number): ColumnBuilder;
  scaleBind(expr: string): ColumnBuilder;
  smooth(value: boolean): ColumnBuilder;
  smoothBind(expr: string): ColumnBuilder;
  spacing(value: number): ColumnBuilder;
  spacingBind(expr: string): ColumnBuilder;
  state(value: string): ColumnBuilder;
  stateBind(expr: string): ColumnBuilder;
  topPadding(value: number): ColumnBuilder;
  topPaddingBind(expr: string): ColumnBuilder;
  transformOrigin(value: QmlValue): ColumnBuilder;
  transformOriginBind(expr: string): ColumnBuilder;
  visible(value: boolean): ColumnBuilder;
  visibleBind(expr: string): ColumnBuilder;
  width(value: number): ColumnBuilder;
  widthBind(expr: string): ColumnBuilder;
  x(value: number): ColumnBuilder;
  xBind(expr: string): ColumnBuilder;
  y(value: number): ColumnBuilder;
  yBind(expr: string): ColumnBuilder;
  z(value: number): ColumnBuilder;
  zBind(expr: string): ColumnBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ColumnBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ColumnBuilder;
  onAddChanged(handler: () => void): ColumnBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ColumnBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): ColumnBuilder;
  onBottomPaddingChanged(handler: () => void): ColumnBuilder;
  onChildrenChanged(handler: () => void): ColumnBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ColumnBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ColumnBuilder;
  onContainmentMaskChanged(handler: () => void): ColumnBuilder;
  onEnabledChanged(handler: () => void): ColumnBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ColumnBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ColumnBuilder;
  onHeightChanged(handler: () => void): ColumnBuilder;
  onImplicitHeightChanged(handler: () => void): ColumnBuilder;
  onImplicitWidthChanged(handler: () => void): ColumnBuilder;
  onLeftPaddingChanged(handler: () => void): ColumnBuilder;
  onMoveChanged(handler: () => void): ColumnBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ColumnBuilder;
  onOpacityChanged(handler: () => void): ColumnBuilder;
  onPaddingChanged(handler: () => void): ColumnBuilder;
  onPaletteChanged(handler: () => void): ColumnBuilder;
  onPaletteCreated(handler: () => void): ColumnBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ColumnBuilder;
  onPopulateChanged(handler: () => void): ColumnBuilder;
  onPositioningComplete(handler: () => void): ColumnBuilder;
  onRightPaddingChanged(handler: () => void): ColumnBuilder;
  onRotationChanged(handler: () => void): ColumnBuilder;
  onScaleChanged(handler: () => void): ColumnBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ColumnBuilder;
  onSpacingChanged(handler: () => void): ColumnBuilder;
  onStateChanged(handler: (arg0: string) => void): ColumnBuilder;
  onTopPaddingChanged(handler: () => void): ColumnBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ColumnBuilder;
  onVisibleChanged(handler: () => void): ColumnBuilder;
  onVisibleChildrenChanged(handler: () => void): ColumnBuilder;
  onWidthChanged(handler: () => void): ColumnBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ColumnBuilder;
  onXChanged(handler: () => void): ColumnBuilder;
  onYChanged(handler: () => void): ColumnBuilder;
  onZChanged(handler: () => void): ColumnBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ColumnBuilder;
  layer(setup: (b: LayerBuilder) => void): ColumnBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ColumnBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ColumnBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ColumnBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ColumnBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ColumnBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ColumnBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ColumnBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ColumnBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ColumnBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ColumnBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ColumnBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ColumnBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ColumnBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ColumnBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ColumnBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ColumnBuilder;
}

export function Column(): ColumnBuilder {
  return new DslBuilderImpl('Column') as unknown as ColumnBuilder;
}

export namespace Column {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Column',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Column',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Column', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Column', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Column', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Column', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Column', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Column',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Column',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Column', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Column',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Column', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Column', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Column', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Column', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Column', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Column', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Column', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Column', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Column', 'TransformOrigin', 'BottomRight');
  }
}
