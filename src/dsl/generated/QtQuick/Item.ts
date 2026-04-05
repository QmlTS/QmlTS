// AUTO-GENERATED — DO NOT EDIT
// Type: Item
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
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
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface ItemBuilder {
  id(id: string): ItemBuilder;
  child(obj: QmlObjectBuilder): ItemBuilder;

  activeFocusOnTab(value: boolean): ItemBuilder;
  activeFocusOnTabBind(expr: string): ItemBuilder;
  antialiasing(value: boolean): ItemBuilder;
  antialiasingBind(expr: string): ItemBuilder;
  baselineOffset(value: number): ItemBuilder;
  baselineOffsetBind(expr: string): ItemBuilder;
  clip(value: boolean): ItemBuilder;
  clipBind(expr: string): ItemBuilder;
  containmentMask(value: QtObjectBuilder): ItemBuilder;
  containmentMaskBind(expr: string): ItemBuilder;
  enabled(value: boolean): ItemBuilder;
  enabledBind(expr: string): ItemBuilder;
  focus(value: boolean): ItemBuilder;
  focusBind(expr: string): ItemBuilder;
  focusPolicy(value: QmlValue): ItemBuilder;
  focusPolicyBind(expr: string): ItemBuilder;
  height(value: number): ItemBuilder;
  heightBind(expr: string): ItemBuilder;
  implicitHeight(value: number): ItemBuilder;
  implicitHeightBind(expr: string): ItemBuilder;
  implicitWidth(value: number): ItemBuilder;
  implicitWidthBind(expr: string): ItemBuilder;
  objectName(value: string): ItemBuilder;
  objectNameBind(expr: string): ItemBuilder;
  opacity(value: number): ItemBuilder;
  opacityBind(expr: string): ItemBuilder;
  palette(value: PaletteBuilder): ItemBuilder;
  paletteBind(expr: string): ItemBuilder;
  parent(value: ItemBuilder): ItemBuilder;
  parentBind(expr: string): ItemBuilder;
  rotation(value: number): ItemBuilder;
  rotationBind(expr: string): ItemBuilder;
  scale(value: number): ItemBuilder;
  scaleBind(expr: string): ItemBuilder;
  smooth(value: boolean): ItemBuilder;
  smoothBind(expr: string): ItemBuilder;
  state(value: string): ItemBuilder;
  stateBind(expr: string): ItemBuilder;
  transformOrigin(value: QmlValue): ItemBuilder;
  transformOriginBind(expr: string): ItemBuilder;
  visible(value: boolean): ItemBuilder;
  visibleBind(expr: string): ItemBuilder;
  width(value: number): ItemBuilder;
  widthBind(expr: string): ItemBuilder;
  x(value: number): ItemBuilder;
  xBind(expr: string): ItemBuilder;
  y(value: number): ItemBuilder;
  yBind(expr: string): ItemBuilder;
  z(value: number): ItemBuilder;
  zBind(expr: string): ItemBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ItemBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ItemBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ItemBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): ItemBuilder;
  onChildrenChanged(handler: () => void): ItemBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ItemBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ItemBuilder;
  onContainmentMaskChanged(handler: () => void): ItemBuilder;
  onEnabledChanged(handler: () => void): ItemBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ItemBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ItemBuilder;
  onHeightChanged(handler: () => void): ItemBuilder;
  onImplicitHeightChanged(handler: () => void): ItemBuilder;
  onImplicitWidthChanged(handler: () => void): ItemBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ItemBuilder;
  onOpacityChanged(handler: () => void): ItemBuilder;
  onPaletteChanged(handler: () => void): ItemBuilder;
  onPaletteCreated(handler: () => void): ItemBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ItemBuilder;
  onRotationChanged(handler: () => void): ItemBuilder;
  onScaleChanged(handler: () => void): ItemBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ItemBuilder;
  onStateChanged(handler: (arg0: string) => void): ItemBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ItemBuilder;
  onVisibleChanged(handler: () => void): ItemBuilder;
  onVisibleChildrenChanged(handler: () => void): ItemBuilder;
  onWidthChanged(handler: () => void): ItemBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ItemBuilder;
  onXChanged(handler: () => void): ItemBuilder;
  onYChanged(handler: () => void): ItemBuilder;
  onZChanged(handler: () => void): ItemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ItemBuilder;
  layer(setup: (b: LayerBuilder) => void): ItemBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ItemBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ItemBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ItemBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ItemBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ItemBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ItemBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ItemBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ItemBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ItemBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ItemBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ItemBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ItemBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ItemBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ItemBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ItemBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ItemBuilder;
}

export function Item(): ItemBuilder {
  return new DslBuilderImpl('Item') as unknown as ItemBuilder;
}

export namespace Item {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Item',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Item',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Item', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Item', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Item', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Item', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Item', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Item',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Item',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Item', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Item', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Item',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Item', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Item', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Item', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Item', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Item', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Item', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Item', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Item', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Item', 'TransformOrigin', 'BottomRight');
  }
}
