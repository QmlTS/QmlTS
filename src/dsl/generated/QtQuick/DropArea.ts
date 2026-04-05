// AUTO-GENERATED — DO NOT EDIT
// Type: DropArea
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
export interface DropAreaBuilder {
  id(id: string): DropAreaBuilder;
  child(obj: QmlObjectBuilder): DropAreaBuilder;

  activeFocusOnTab(value: boolean): DropAreaBuilder;
  activeFocusOnTabBind(expr: string): DropAreaBuilder;
  antialiasing(value: boolean): DropAreaBuilder;
  antialiasingBind(expr: string): DropAreaBuilder;
  baselineOffset(value: number): DropAreaBuilder;
  baselineOffsetBind(expr: string): DropAreaBuilder;
  clip(value: boolean): DropAreaBuilder;
  clipBind(expr: string): DropAreaBuilder;
  containmentMask(value: QtObjectBuilder): DropAreaBuilder;
  containmentMaskBind(expr: string): DropAreaBuilder;
  enabled(value: boolean): DropAreaBuilder;
  enabledBind(expr: string): DropAreaBuilder;
  focus(value: boolean): DropAreaBuilder;
  focusBind(expr: string): DropAreaBuilder;
  focusPolicy(value: QmlValue): DropAreaBuilder;
  focusPolicyBind(expr: string): DropAreaBuilder;
  height(value: number): DropAreaBuilder;
  heightBind(expr: string): DropAreaBuilder;
  implicitHeight(value: number): DropAreaBuilder;
  implicitHeightBind(expr: string): DropAreaBuilder;
  implicitWidth(value: number): DropAreaBuilder;
  implicitWidthBind(expr: string): DropAreaBuilder;
  keys(value: string[]): DropAreaBuilder;
  keysBind(expr: string): DropAreaBuilder;
  objectName(value: string): DropAreaBuilder;
  objectNameBind(expr: string): DropAreaBuilder;
  opacity(value: number): DropAreaBuilder;
  opacityBind(expr: string): DropAreaBuilder;
  palette(value: PaletteBuilder): DropAreaBuilder;
  paletteBind(expr: string): DropAreaBuilder;
  parent(value: ItemBuilder): DropAreaBuilder;
  parentBind(expr: string): DropAreaBuilder;
  rotation(value: number): DropAreaBuilder;
  rotationBind(expr: string): DropAreaBuilder;
  scale(value: number): DropAreaBuilder;
  scaleBind(expr: string): DropAreaBuilder;
  smooth(value: boolean): DropAreaBuilder;
  smoothBind(expr: string): DropAreaBuilder;
  state(value: string): DropAreaBuilder;
  stateBind(expr: string): DropAreaBuilder;
  transformOrigin(value: QmlValue): DropAreaBuilder;
  transformOriginBind(expr: string): DropAreaBuilder;
  visible(value: boolean): DropAreaBuilder;
  visibleBind(expr: string): DropAreaBuilder;
  width(value: number): DropAreaBuilder;
  widthBind(expr: string): DropAreaBuilder;
  x(value: number): DropAreaBuilder;
  xBind(expr: string): DropAreaBuilder;
  y(value: number): DropAreaBuilder;
  yBind(expr: string): DropAreaBuilder;
  z(value: number): DropAreaBuilder;
  zBind(expr: string): DropAreaBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): DropAreaBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): DropAreaBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): DropAreaBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): DropAreaBuilder;
  onChildrenChanged(handler: () => void): DropAreaBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): DropAreaBuilder;
  onClipChanged(handler: (arg0: boolean) => void): DropAreaBuilder;
  onContainmentMaskChanged(handler: () => void): DropAreaBuilder;
  onContainsDragChanged(handler: () => void): DropAreaBuilder;
  onDropped(handler: (drop: QmlValue) => void): DropAreaBuilder;
  onEnabledChanged(handler: () => void): DropAreaBuilder;
  onEntered(handler: (drag: QmlValue) => void): DropAreaBuilder;
  onExited(handler: () => void): DropAreaBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): DropAreaBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): DropAreaBuilder;
  onHeightChanged(handler: () => void): DropAreaBuilder;
  onImplicitHeightChanged(handler: () => void): DropAreaBuilder;
  onImplicitWidthChanged(handler: () => void): DropAreaBuilder;
  onKeysChanged(handler: () => void): DropAreaBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DropAreaBuilder;
  onOpacityChanged(handler: () => void): DropAreaBuilder;
  onPaletteChanged(handler: () => void): DropAreaBuilder;
  onPaletteCreated(handler: () => void): DropAreaBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): DropAreaBuilder;
  onPositionChanged(handler: (drag: QmlValue) => void): DropAreaBuilder;
  onRotationChanged(handler: () => void): DropAreaBuilder;
  onScaleChanged(handler: () => void): DropAreaBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): DropAreaBuilder;
  onSourceChanged(handler: () => void): DropAreaBuilder;
  onStateChanged(handler: (arg0: string) => void): DropAreaBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): DropAreaBuilder;
  onVisibleChanged(handler: () => void): DropAreaBuilder;
  onVisibleChildrenChanged(handler: () => void): DropAreaBuilder;
  onWidthChanged(handler: () => void): DropAreaBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): DropAreaBuilder;
  onXChanged(handler: () => void): DropAreaBuilder;
  onYChanged(handler: () => void): DropAreaBuilder;
  onZChanged(handler: () => void): DropAreaBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DropAreaBuilder;
  layer(setup: (b: LayerBuilder) => void): DropAreaBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): DropAreaBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): DropAreaBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): DropAreaBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): DropAreaBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): DropAreaBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): DropAreaBuilder;
  keysAttached(setup: (b: KeysAttachedBuilder) => void): DropAreaBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): DropAreaBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): DropAreaBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): DropAreaBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): DropAreaBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): DropAreaBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): DropAreaBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): DropAreaBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): DropAreaBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): DropAreaBuilder;
}

export function DropArea(): DropAreaBuilder {
  return new DslBuilderImpl('DropArea') as unknown as DropAreaBuilder;
}

export namespace DropArea {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DropArea',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DropArea',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DropArea', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DropArea', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DropArea', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DropArea', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DropArea',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('DropArea', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DropArea',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DropArea', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DropArea', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DropArea', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DropArea', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DropArea', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DropArea', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DropArea', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DropArea', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DropArea', 'TransformOrigin', 'BottomRight');
  }
}
