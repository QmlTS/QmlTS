// AUTO-GENERATED — DO NOT EDIT
// Type: FocusScope
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
export interface FocusScopeBuilder {
  id(id: string): FocusScopeBuilder;
  child(obj: QmlObjectBuilder): FocusScopeBuilder;

  activeFocusOnTab(value: boolean): FocusScopeBuilder;
  activeFocusOnTabBind(expr: string): FocusScopeBuilder;
  antialiasing(value: boolean): FocusScopeBuilder;
  antialiasingBind(expr: string): FocusScopeBuilder;
  baselineOffset(value: number): FocusScopeBuilder;
  baselineOffsetBind(expr: string): FocusScopeBuilder;
  clip(value: boolean): FocusScopeBuilder;
  clipBind(expr: string): FocusScopeBuilder;
  containmentMask(value: QtObjectBuilder): FocusScopeBuilder;
  containmentMaskBind(expr: string): FocusScopeBuilder;
  enabled(value: boolean): FocusScopeBuilder;
  enabledBind(expr: string): FocusScopeBuilder;
  focus(value: boolean): FocusScopeBuilder;
  focusBind(expr: string): FocusScopeBuilder;
  focusPolicy(value: QmlValue): FocusScopeBuilder;
  focusPolicyBind(expr: string): FocusScopeBuilder;
  height(value: number): FocusScopeBuilder;
  heightBind(expr: string): FocusScopeBuilder;
  implicitHeight(value: number): FocusScopeBuilder;
  implicitHeightBind(expr: string): FocusScopeBuilder;
  implicitWidth(value: number): FocusScopeBuilder;
  implicitWidthBind(expr: string): FocusScopeBuilder;
  objectName(value: string): FocusScopeBuilder;
  objectNameBind(expr: string): FocusScopeBuilder;
  opacity(value: number): FocusScopeBuilder;
  opacityBind(expr: string): FocusScopeBuilder;
  palette(value: PaletteBuilder): FocusScopeBuilder;
  paletteBind(expr: string): FocusScopeBuilder;
  parent(value: ItemBuilder): FocusScopeBuilder;
  parentBind(expr: string): FocusScopeBuilder;
  rotation(value: number): FocusScopeBuilder;
  rotationBind(expr: string): FocusScopeBuilder;
  scale(value: number): FocusScopeBuilder;
  scaleBind(expr: string): FocusScopeBuilder;
  smooth(value: boolean): FocusScopeBuilder;
  smoothBind(expr: string): FocusScopeBuilder;
  state(value: string): FocusScopeBuilder;
  stateBind(expr: string): FocusScopeBuilder;
  transformOrigin(value: QmlValue): FocusScopeBuilder;
  transformOriginBind(expr: string): FocusScopeBuilder;
  visible(value: boolean): FocusScopeBuilder;
  visibleBind(expr: string): FocusScopeBuilder;
  width(value: number): FocusScopeBuilder;
  widthBind(expr: string): FocusScopeBuilder;
  x(value: number): FocusScopeBuilder;
  xBind(expr: string): FocusScopeBuilder;
  y(value: number): FocusScopeBuilder;
  yBind(expr: string): FocusScopeBuilder;
  z(value: number): FocusScopeBuilder;
  zBind(expr: string): FocusScopeBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): FocusScopeBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): FocusScopeBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): FocusScopeBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): FocusScopeBuilder;
  onChildrenChanged(handler: () => void): FocusScopeBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): FocusScopeBuilder;
  onClipChanged(handler: (arg0: boolean) => void): FocusScopeBuilder;
  onContainmentMaskChanged(handler: () => void): FocusScopeBuilder;
  onEnabledChanged(handler: () => void): FocusScopeBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): FocusScopeBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): FocusScopeBuilder;
  onHeightChanged(handler: () => void): FocusScopeBuilder;
  onImplicitHeightChanged(handler: () => void): FocusScopeBuilder;
  onImplicitWidthChanged(handler: () => void): FocusScopeBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FocusScopeBuilder;
  onOpacityChanged(handler: () => void): FocusScopeBuilder;
  onPaletteChanged(handler: () => void): FocusScopeBuilder;
  onPaletteCreated(handler: () => void): FocusScopeBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): FocusScopeBuilder;
  onRotationChanged(handler: () => void): FocusScopeBuilder;
  onScaleChanged(handler: () => void): FocusScopeBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): FocusScopeBuilder;
  onStateChanged(handler: (arg0: string) => void): FocusScopeBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): FocusScopeBuilder;
  onVisibleChanged(handler: () => void): FocusScopeBuilder;
  onVisibleChildrenChanged(handler: () => void): FocusScopeBuilder;
  onWidthChanged(handler: () => void): FocusScopeBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): FocusScopeBuilder;
  onXChanged(handler: () => void): FocusScopeBuilder;
  onYChanged(handler: () => void): FocusScopeBuilder;
  onZChanged(handler: () => void): FocusScopeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FocusScopeBuilder;
  layer(setup: (b: LayerBuilder) => void): FocusScopeBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FocusScopeBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FocusScopeBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FocusScopeBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FocusScopeBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FocusScopeBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FocusScopeBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FocusScopeBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FocusScopeBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FocusScopeBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FocusScopeBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FocusScopeBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FocusScopeBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FocusScopeBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FocusScopeBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FocusScopeBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FocusScopeBuilder;
}

export function FocusScope(): FocusScopeBuilder {
  return new DslBuilderImpl('FocusScope') as unknown as FocusScopeBuilder;
}

export namespace FocusScope {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'FocusScope',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'FocusScope',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('FocusScope', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('FocusScope', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('FocusScope', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('FocusScope', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'FocusScope',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('FocusScope', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'FocusScope',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FocusScope', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FocusScope', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FocusScope', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FocusScope', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FocusScope', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FocusScope', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('FocusScope', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('FocusScope', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('FocusScope', 'TransformOrigin', 'BottomRight');
  }
}
