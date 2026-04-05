// AUTO-GENERATED — DO NOT EDIT
// Type: Row
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
export interface RowBuilder {
  id(id: string): RowBuilder;
  child(obj: QmlObjectBuilder): RowBuilder;

  activeFocusOnTab(value: boolean): RowBuilder;
  activeFocusOnTabBind(expr: string): RowBuilder;
  add(value: TransitionBuilder): RowBuilder;
  addBind(expr: string): RowBuilder;
  antialiasing(value: boolean): RowBuilder;
  antialiasingBind(expr: string): RowBuilder;
  baselineOffset(value: number): RowBuilder;
  baselineOffsetBind(expr: string): RowBuilder;
  bottomPadding(value: number): RowBuilder;
  bottomPaddingBind(expr: string): RowBuilder;
  clip(value: boolean): RowBuilder;
  clipBind(expr: string): RowBuilder;
  containmentMask(value: QtObjectBuilder): RowBuilder;
  containmentMaskBind(expr: string): RowBuilder;
  enabled(value: boolean): RowBuilder;
  enabledBind(expr: string): RowBuilder;
  focus(value: boolean): RowBuilder;
  focusBind(expr: string): RowBuilder;
  focusPolicy(value: QmlValue): RowBuilder;
  focusPolicyBind(expr: string): RowBuilder;
  height(value: number): RowBuilder;
  heightBind(expr: string): RowBuilder;
  layoutDirection(value: QmlValue): RowBuilder;
  layoutDirectionBind(expr: string): RowBuilder;
  leftPadding(value: number): RowBuilder;
  leftPaddingBind(expr: string): RowBuilder;
  move(value: TransitionBuilder): RowBuilder;
  moveBind(expr: string): RowBuilder;
  objectName(value: string): RowBuilder;
  objectNameBind(expr: string): RowBuilder;
  opacity(value: number): RowBuilder;
  opacityBind(expr: string): RowBuilder;
  padding(value: number): RowBuilder;
  paddingBind(expr: string): RowBuilder;
  palette(value: PaletteBuilder): RowBuilder;
  paletteBind(expr: string): RowBuilder;
  parent(value: ItemBuilder): RowBuilder;
  parentBind(expr: string): RowBuilder;
  populate(value: TransitionBuilder): RowBuilder;
  populateBind(expr: string): RowBuilder;
  rightPadding(value: number): RowBuilder;
  rightPaddingBind(expr: string): RowBuilder;
  rotation(value: number): RowBuilder;
  rotationBind(expr: string): RowBuilder;
  scale(value: number): RowBuilder;
  scaleBind(expr: string): RowBuilder;
  smooth(value: boolean): RowBuilder;
  smoothBind(expr: string): RowBuilder;
  spacing(value: number): RowBuilder;
  spacingBind(expr: string): RowBuilder;
  state(value: string): RowBuilder;
  stateBind(expr: string): RowBuilder;
  topPadding(value: number): RowBuilder;
  topPaddingBind(expr: string): RowBuilder;
  transformOrigin(value: QmlValue): RowBuilder;
  transformOriginBind(expr: string): RowBuilder;
  visible(value: boolean): RowBuilder;
  visibleBind(expr: string): RowBuilder;
  width(value: number): RowBuilder;
  widthBind(expr: string): RowBuilder;
  x(value: number): RowBuilder;
  xBind(expr: string): RowBuilder;
  y(value: number): RowBuilder;
  yBind(expr: string): RowBuilder;
  z(value: number): RowBuilder;
  zBind(expr: string): RowBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RowBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RowBuilder;
  onAddChanged(handler: () => void): RowBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RowBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): RowBuilder;
  onBottomPaddingChanged(handler: () => void): RowBuilder;
  onChildrenChanged(handler: () => void): RowBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RowBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RowBuilder;
  onContainmentMaskChanged(handler: () => void): RowBuilder;
  onEffectiveLayoutDirectionChanged(handler: () => void): RowBuilder;
  onEnabledChanged(handler: () => void): RowBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RowBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RowBuilder;
  onHeightChanged(handler: () => void): RowBuilder;
  onImplicitHeightChanged(handler: () => void): RowBuilder;
  onImplicitWidthChanged(handler: () => void): RowBuilder;
  onLayoutDirectionChanged(handler: () => void): RowBuilder;
  onLeftPaddingChanged(handler: () => void): RowBuilder;
  onMoveChanged(handler: () => void): RowBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RowBuilder;
  onOpacityChanged(handler: () => void): RowBuilder;
  onPaddingChanged(handler: () => void): RowBuilder;
  onPaletteChanged(handler: () => void): RowBuilder;
  onPaletteCreated(handler: () => void): RowBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RowBuilder;
  onPopulateChanged(handler: () => void): RowBuilder;
  onPositioningComplete(handler: () => void): RowBuilder;
  onRightPaddingChanged(handler: () => void): RowBuilder;
  onRotationChanged(handler: () => void): RowBuilder;
  onScaleChanged(handler: () => void): RowBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RowBuilder;
  onSpacingChanged(handler: () => void): RowBuilder;
  onStateChanged(handler: (arg0: string) => void): RowBuilder;
  onTopPaddingChanged(handler: () => void): RowBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RowBuilder;
  onVisibleChanged(handler: () => void): RowBuilder;
  onVisibleChildrenChanged(handler: () => void): RowBuilder;
  onWidthChanged(handler: () => void): RowBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RowBuilder;
  onXChanged(handler: () => void): RowBuilder;
  onYChanged(handler: () => void): RowBuilder;
  onZChanged(handler: () => void): RowBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RowBuilder;
  layer(setup: (b: LayerBuilder) => void): RowBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): RowBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): RowBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): RowBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): RowBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): RowBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): RowBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): RowBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): RowBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): RowBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): RowBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): RowBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): RowBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): RowBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): RowBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): RowBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): RowBuilder;
}

export function Row(): RowBuilder {
  return new DslBuilderImpl('Row') as unknown as RowBuilder;
}

export namespace Row {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Row',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken('Row', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Row', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Row', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Row', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Row', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Row', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Row',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Row',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Row', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Row', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Row',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Row', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Row', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Row', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Row', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Row', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Row', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Row', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Row', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Row', 'TransformOrigin', 'BottomRight');
  }
}
