// AUTO-GENERATED — DO NOT EDIT
// Type: Loader
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlObjectBuilder,
  QmlRect,
  QmlUrl,
  QmlValue,
} from '../../runtime/index.js';
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
export interface LoaderBuilder {
  id(id: string): LoaderBuilder;
  child(obj: QmlObjectBuilder): LoaderBuilder;

  active(value: boolean): LoaderBuilder;
  activeBind(expr: string): LoaderBuilder;
  activeFocusOnTab(value: boolean): LoaderBuilder;
  activeFocusOnTabBind(expr: string): LoaderBuilder;
  antialiasing(value: boolean): LoaderBuilder;
  antialiasingBind(expr: string): LoaderBuilder;
  asynchronous(value: boolean): LoaderBuilder;
  asynchronousBind(expr: string): LoaderBuilder;
  baselineOffset(value: number): LoaderBuilder;
  baselineOffsetBind(expr: string): LoaderBuilder;
  clip(value: boolean): LoaderBuilder;
  clipBind(expr: string): LoaderBuilder;
  containmentMask(value: QtObjectBuilder): LoaderBuilder;
  containmentMaskBind(expr: string): LoaderBuilder;
  enabled(value: boolean): LoaderBuilder;
  enabledBind(expr: string): LoaderBuilder;
  focus(value: boolean): LoaderBuilder;
  focusBind(expr: string): LoaderBuilder;
  focusPolicy(value: QmlValue): LoaderBuilder;
  focusPolicyBind(expr: string): LoaderBuilder;
  height(value: number): LoaderBuilder;
  heightBind(expr: string): LoaderBuilder;
  objectName(value: string): LoaderBuilder;
  objectNameBind(expr: string): LoaderBuilder;
  opacity(value: number): LoaderBuilder;
  opacityBind(expr: string): LoaderBuilder;
  palette(value: PaletteBuilder): LoaderBuilder;
  paletteBind(expr: string): LoaderBuilder;
  parent(value: ItemBuilder): LoaderBuilder;
  parentBind(expr: string): LoaderBuilder;
  rotation(value: number): LoaderBuilder;
  rotationBind(expr: string): LoaderBuilder;
  scale(value: number): LoaderBuilder;
  scaleBind(expr: string): LoaderBuilder;
  smooth(value: boolean): LoaderBuilder;
  smoothBind(expr: string): LoaderBuilder;
  source(value: QmlUrl): LoaderBuilder;
  sourceBind(expr: string): LoaderBuilder;
  sourceComponent(value: QmlComponent): LoaderBuilder;
  sourceComponentBind(expr: string): LoaderBuilder;
  state(value: string): LoaderBuilder;
  stateBind(expr: string): LoaderBuilder;
  transformOrigin(value: QmlValue): LoaderBuilder;
  transformOriginBind(expr: string): LoaderBuilder;
  visible(value: boolean): LoaderBuilder;
  visibleBind(expr: string): LoaderBuilder;
  width(value: number): LoaderBuilder;
  widthBind(expr: string): LoaderBuilder;
  x(value: number): LoaderBuilder;
  xBind(expr: string): LoaderBuilder;
  y(value: number): LoaderBuilder;
  yBind(expr: string): LoaderBuilder;
  z(value: number): LoaderBuilder;
  zBind(expr: string): LoaderBuilder;
  onActiveChanged(handler: () => void): LoaderBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): LoaderBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): LoaderBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): LoaderBuilder;
  onAsynchronousChanged(handler: () => void): LoaderBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): LoaderBuilder;
  onChildrenChanged(handler: () => void): LoaderBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): LoaderBuilder;
  onClipChanged(handler: (arg0: boolean) => void): LoaderBuilder;
  onContainmentMaskChanged(handler: () => void): LoaderBuilder;
  onEnabledChanged(handler: () => void): LoaderBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): LoaderBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): LoaderBuilder;
  onHeightChanged(handler: () => void): LoaderBuilder;
  onImplicitHeightChanged(handler: () => void): LoaderBuilder;
  onImplicitWidthChanged(handler: () => void): LoaderBuilder;
  onItemChanged(handler: () => void): LoaderBuilder;
  onLoaded(handler: () => void): LoaderBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): LoaderBuilder;
  onOpacityChanged(handler: () => void): LoaderBuilder;
  onPaletteChanged(handler: () => void): LoaderBuilder;
  onPaletteCreated(handler: () => void): LoaderBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): LoaderBuilder;
  onProgressChanged(handler: () => void): LoaderBuilder;
  onRotationChanged(handler: () => void): LoaderBuilder;
  onScaleChanged(handler: () => void): LoaderBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): LoaderBuilder;
  onSourceChanged(handler: () => void): LoaderBuilder;
  onSourceComponentChanged(handler: () => void): LoaderBuilder;
  onStateChanged(handler: (arg0: string) => void): LoaderBuilder;
  onStatusChanged(handler: () => void): LoaderBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): LoaderBuilder;
  onVisibleChanged(handler: () => void): LoaderBuilder;
  onVisibleChildrenChanged(handler: () => void): LoaderBuilder;
  onWidthChanged(handler: () => void): LoaderBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): LoaderBuilder;
  onXChanged(handler: () => void): LoaderBuilder;
  onYChanged(handler: () => void): LoaderBuilder;
  onZChanged(handler: () => void): LoaderBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): LoaderBuilder;
  layer(setup: (b: LayerBuilder) => void): LoaderBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): LoaderBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): LoaderBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): LoaderBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): LoaderBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): LoaderBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): LoaderBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): LoaderBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): LoaderBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): LoaderBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): LoaderBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): LoaderBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): LoaderBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): LoaderBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): LoaderBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): LoaderBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): LoaderBuilder;
}

export function Loader(): LoaderBuilder {
  return new DslBuilderImpl('Loader') as unknown as LoaderBuilder;
}

export namespace Loader {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Loader',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Loader',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Loader', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Loader', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Loader', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Loader', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Loader', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Loader', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Loader',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('Loader', 'Status', 'Null');
    export const Ready = createEnumToken('Loader', 'Status', 'Ready');
    export const Loading = createEnumToken('Loader', 'Status', 'Loading');
    export const Error = createEnumToken('Loader', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Loader', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Loader', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Loader', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Loader', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Loader', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Loader', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Loader', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Loader', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Loader', 'TransformOrigin', 'BottomRight');
  }
}
