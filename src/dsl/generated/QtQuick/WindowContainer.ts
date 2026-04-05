// AUTO-GENERATED — DO NOT EDIT
// Type: WindowContainer
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
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface WindowContainerBuilder {
  id(id: string): WindowContainerBuilder;
  child(obj: QmlObjectBuilder): WindowContainerBuilder;

  activeFocusOnTab(value: boolean): WindowContainerBuilder;
  activeFocusOnTabBind(expr: string): WindowContainerBuilder;
  antialiasing(value: boolean): WindowContainerBuilder;
  antialiasingBind(expr: string): WindowContainerBuilder;
  baselineOffset(value: number): WindowContainerBuilder;
  baselineOffsetBind(expr: string): WindowContainerBuilder;
  clip(value: boolean): WindowContainerBuilder;
  clipBind(expr: string): WindowContainerBuilder;
  containmentMask(value: QtObjectBuilder): WindowContainerBuilder;
  containmentMaskBind(expr: string): WindowContainerBuilder;
  enabled(value: boolean): WindowContainerBuilder;
  enabledBind(expr: string): WindowContainerBuilder;
  focus(value: boolean): WindowContainerBuilder;
  focusBind(expr: string): WindowContainerBuilder;
  focusPolicy(value: QmlValue): WindowContainerBuilder;
  focusPolicyBind(expr: string): WindowContainerBuilder;
  height(value: number): WindowContainerBuilder;
  heightBind(expr: string): WindowContainerBuilder;
  objectName(value: string): WindowContainerBuilder;
  objectNameBind(expr: string): WindowContainerBuilder;
  opacity(value: number): WindowContainerBuilder;
  opacityBind(expr: string): WindowContainerBuilder;
  palette(value: PaletteBuilder): WindowContainerBuilder;
  paletteBind(expr: string): WindowContainerBuilder;
  parent(value: ItemBuilder): WindowContainerBuilder;
  parentBind(expr: string): WindowContainerBuilder;
  rotation(value: number): WindowContainerBuilder;
  rotationBind(expr: string): WindowContainerBuilder;
  scale(value: number): WindowContainerBuilder;
  scaleBind(expr: string): WindowContainerBuilder;
  smooth(value: boolean): WindowContainerBuilder;
  smoothBind(expr: string): WindowContainerBuilder;
  state(value: string): WindowContainerBuilder;
  stateBind(expr: string): WindowContainerBuilder;
  transformOrigin(value: QmlValue): WindowContainerBuilder;
  transformOriginBind(expr: string): WindowContainerBuilder;
  visible(value: boolean): WindowContainerBuilder;
  visibleBind(expr: string): WindowContainerBuilder;
  width(value: number): WindowContainerBuilder;
  widthBind(expr: string): WindowContainerBuilder;
  window(value: QmlValue): WindowContainerBuilder;
  windowBind(expr: string): WindowContainerBuilder;
  x(value: number): WindowContainerBuilder;
  xBind(expr: string): WindowContainerBuilder;
  y(value: number): WindowContainerBuilder;
  yBind(expr: string): WindowContainerBuilder;
  z(value: number): WindowContainerBuilder;
  zBind(expr: string): WindowContainerBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): WindowContainerBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): WindowContainerBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): WindowContainerBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): WindowContainerBuilder;
  onChildrenChanged(handler: () => void): WindowContainerBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): WindowContainerBuilder;
  onClipChanged(handler: (arg0: boolean) => void): WindowContainerBuilder;
  onContainedWindowChanged(handler: (window: QmlValue) => void): WindowContainerBuilder;
  onContainmentMaskChanged(handler: () => void): WindowContainerBuilder;
  onEnabledChanged(handler: () => void): WindowContainerBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): WindowContainerBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): WindowContainerBuilder;
  onHeightChanged(handler: () => void): WindowContainerBuilder;
  onImplicitHeightChanged(handler: () => void): WindowContainerBuilder;
  onImplicitWidthChanged(handler: () => void): WindowContainerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): WindowContainerBuilder;
  onOpacityChanged(handler: () => void): WindowContainerBuilder;
  onPaletteChanged(handler: () => void): WindowContainerBuilder;
  onPaletteCreated(handler: () => void): WindowContainerBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): WindowContainerBuilder;
  onRotationChanged(handler: () => void): WindowContainerBuilder;
  onScaleChanged(handler: () => void): WindowContainerBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): WindowContainerBuilder;
  onStateChanged(handler: (arg0: string) => void): WindowContainerBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): WindowContainerBuilder;
  onVisibleChanged(handler: () => void): WindowContainerBuilder;
  onVisibleChildrenChanged(handler: () => void): WindowContainerBuilder;
  onWidthChanged(handler: () => void): WindowContainerBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): WindowContainerBuilder;
  onXChanged(handler: () => void): WindowContainerBuilder;
  onYChanged(handler: () => void): WindowContainerBuilder;
  onZChanged(handler: () => void): WindowContainerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): WindowContainerBuilder;
  layer(setup: (b: LayerBuilder) => void): WindowContainerBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): WindowContainerBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): WindowContainerBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): WindowContainerBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): WindowContainerBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): WindowContainerBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): WindowContainerBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): WindowContainerBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): WindowContainerBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): WindowContainerBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): WindowContainerBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): WindowContainerBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): WindowContainerBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): WindowContainerBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): WindowContainerBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): WindowContainerBuilder;
  windowAttached(setup: (b: WindowAttachedBuilder) => void): WindowContainerBuilder;
}

export function WindowContainer(): WindowContainerBuilder {
  return new DslBuilderImpl('WindowContainer') as unknown as WindowContainerBuilder;
}

export namespace WindowContainer {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'WindowContainer',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'WindowContainer',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('WindowContainer', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('WindowContainer', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('WindowContainer', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('WindowContainer', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'WindowContainer',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'WindowContainer',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('WindowContainer', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('WindowContainer', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('WindowContainer', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('WindowContainer', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('WindowContainer', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('WindowContainer', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('WindowContainer', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('WindowContainer', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('WindowContainer', 'TransformOrigin', 'BottomRight');
  }
}
