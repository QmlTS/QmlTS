// AUTO-GENERATED — DO NOT EDIT
// Type: Flipable
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
export interface FlipableBuilder {
  id(id: string): FlipableBuilder;
  child(obj: QmlObjectBuilder): FlipableBuilder;

  activeFocusOnTab(value: boolean): FlipableBuilder;
  activeFocusOnTabBind(expr: string): FlipableBuilder;
  antialiasing(value: boolean): FlipableBuilder;
  antialiasingBind(expr: string): FlipableBuilder;
  back(value: ItemBuilder): FlipableBuilder;
  backBind(expr: string): FlipableBuilder;
  baselineOffset(value: number): FlipableBuilder;
  baselineOffsetBind(expr: string): FlipableBuilder;
  clip(value: boolean): FlipableBuilder;
  clipBind(expr: string): FlipableBuilder;
  containmentMask(value: QtObjectBuilder): FlipableBuilder;
  containmentMaskBind(expr: string): FlipableBuilder;
  enabled(value: boolean): FlipableBuilder;
  enabledBind(expr: string): FlipableBuilder;
  focus(value: boolean): FlipableBuilder;
  focusBind(expr: string): FlipableBuilder;
  focusPolicy(value: QmlValue): FlipableBuilder;
  focusPolicyBind(expr: string): FlipableBuilder;
  front(value: ItemBuilder): FlipableBuilder;
  frontBind(expr: string): FlipableBuilder;
  height(value: number): FlipableBuilder;
  heightBind(expr: string): FlipableBuilder;
  implicitHeight(value: number): FlipableBuilder;
  implicitHeightBind(expr: string): FlipableBuilder;
  implicitWidth(value: number): FlipableBuilder;
  implicitWidthBind(expr: string): FlipableBuilder;
  objectName(value: string): FlipableBuilder;
  objectNameBind(expr: string): FlipableBuilder;
  opacity(value: number): FlipableBuilder;
  opacityBind(expr: string): FlipableBuilder;
  palette(value: PaletteBuilder): FlipableBuilder;
  paletteBind(expr: string): FlipableBuilder;
  parent(value: ItemBuilder): FlipableBuilder;
  parentBind(expr: string): FlipableBuilder;
  rotation(value: number): FlipableBuilder;
  rotationBind(expr: string): FlipableBuilder;
  scale(value: number): FlipableBuilder;
  scaleBind(expr: string): FlipableBuilder;
  smooth(value: boolean): FlipableBuilder;
  smoothBind(expr: string): FlipableBuilder;
  state(value: string): FlipableBuilder;
  stateBind(expr: string): FlipableBuilder;
  transformOrigin(value: QmlValue): FlipableBuilder;
  transformOriginBind(expr: string): FlipableBuilder;
  visible(value: boolean): FlipableBuilder;
  visibleBind(expr: string): FlipableBuilder;
  width(value: number): FlipableBuilder;
  widthBind(expr: string): FlipableBuilder;
  x(value: number): FlipableBuilder;
  xBind(expr: string): FlipableBuilder;
  y(value: number): FlipableBuilder;
  yBind(expr: string): FlipableBuilder;
  z(value: number): FlipableBuilder;
  zBind(expr: string): FlipableBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): FlipableBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): FlipableBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): FlipableBuilder;
  onBackChanged(handler: () => void): FlipableBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): FlipableBuilder;
  onChildrenChanged(handler: () => void): FlipableBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): FlipableBuilder;
  onClipChanged(handler: (arg0: boolean) => void): FlipableBuilder;
  onContainmentMaskChanged(handler: () => void): FlipableBuilder;
  onEnabledChanged(handler: () => void): FlipableBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): FlipableBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): FlipableBuilder;
  onFrontChanged(handler: () => void): FlipableBuilder;
  onHeightChanged(handler: () => void): FlipableBuilder;
  onImplicitHeightChanged(handler: () => void): FlipableBuilder;
  onImplicitWidthChanged(handler: () => void): FlipableBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FlipableBuilder;
  onOpacityChanged(handler: () => void): FlipableBuilder;
  onPaletteChanged(handler: () => void): FlipableBuilder;
  onPaletteCreated(handler: () => void): FlipableBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): FlipableBuilder;
  onRotationChanged(handler: () => void): FlipableBuilder;
  onScaleChanged(handler: () => void): FlipableBuilder;
  onSideChanged(handler: () => void): FlipableBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): FlipableBuilder;
  onStateChanged(handler: (arg0: string) => void): FlipableBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): FlipableBuilder;
  onVisibleChanged(handler: () => void): FlipableBuilder;
  onVisibleChildrenChanged(handler: () => void): FlipableBuilder;
  onWidthChanged(handler: () => void): FlipableBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): FlipableBuilder;
  onXChanged(handler: () => void): FlipableBuilder;
  onYChanged(handler: () => void): FlipableBuilder;
  onZChanged(handler: () => void): FlipableBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FlipableBuilder;
  layer(setup: (b: LayerBuilder) => void): FlipableBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FlipableBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FlipableBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FlipableBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FlipableBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FlipableBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FlipableBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FlipableBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FlipableBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FlipableBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FlipableBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FlipableBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FlipableBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FlipableBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FlipableBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FlipableBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FlipableBuilder;
}

export function Flipable(): FlipableBuilder {
  return new DslBuilderImpl('Flipable') as unknown as FlipableBuilder;
}

export namespace Flipable {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Flipable',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Flipable',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Flipable', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Flipable', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Flipable', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Flipable', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Flipable',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Flipable', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Flipable',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Side {
    export const Front = createEnumToken('Flipable', 'Side', 'Front');
    export const Back = createEnumToken('Flipable', 'Side', 'Back');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Flipable', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Flipable', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Flipable', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Flipable', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Flipable', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Flipable', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Flipable', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Flipable', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Flipable', 'TransformOrigin', 'BottomRight');
  }
}
