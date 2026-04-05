// AUTO-GENERATED — DO NOT EDIT
// Type: Repeater
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
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
export interface RepeaterBuilder {
  id(id: string): RepeaterBuilder;
  child(obj: QmlObjectBuilder): RepeaterBuilder;

  activeFocusOnTab(value: boolean): RepeaterBuilder;
  activeFocusOnTabBind(expr: string): RepeaterBuilder;
  antialiasing(value: boolean): RepeaterBuilder;
  antialiasingBind(expr: string): RepeaterBuilder;
  baselineOffset(value: number): RepeaterBuilder;
  baselineOffsetBind(expr: string): RepeaterBuilder;
  clip(value: boolean): RepeaterBuilder;
  clipBind(expr: string): RepeaterBuilder;
  containmentMask(value: QtObjectBuilder): RepeaterBuilder;
  containmentMaskBind(expr: string): RepeaterBuilder;
  delegate(value: QmlComponent): RepeaterBuilder;
  delegateBind(expr: string): RepeaterBuilder;
  delegateModelAccess(value: QmlValue): RepeaterBuilder;
  delegateModelAccessBind(expr: string): RepeaterBuilder;
  enabled(value: boolean): RepeaterBuilder;
  enabledBind(expr: string): RepeaterBuilder;
  focus(value: boolean): RepeaterBuilder;
  focusBind(expr: string): RepeaterBuilder;
  focusPolicy(value: QmlValue): RepeaterBuilder;
  focusPolicyBind(expr: string): RepeaterBuilder;
  height(value: number): RepeaterBuilder;
  heightBind(expr: string): RepeaterBuilder;
  implicitHeight(value: number): RepeaterBuilder;
  implicitHeightBind(expr: string): RepeaterBuilder;
  implicitWidth(value: number): RepeaterBuilder;
  implicitWidthBind(expr: string): RepeaterBuilder;
  model(value: QmlValue): RepeaterBuilder;
  modelBind(expr: string): RepeaterBuilder;
  objectName(value: string): RepeaterBuilder;
  objectNameBind(expr: string): RepeaterBuilder;
  opacity(value: number): RepeaterBuilder;
  opacityBind(expr: string): RepeaterBuilder;
  palette(value: PaletteBuilder): RepeaterBuilder;
  paletteBind(expr: string): RepeaterBuilder;
  parent(value: ItemBuilder): RepeaterBuilder;
  parentBind(expr: string): RepeaterBuilder;
  rotation(value: number): RepeaterBuilder;
  rotationBind(expr: string): RepeaterBuilder;
  scale(value: number): RepeaterBuilder;
  scaleBind(expr: string): RepeaterBuilder;
  smooth(value: boolean): RepeaterBuilder;
  smoothBind(expr: string): RepeaterBuilder;
  state(value: string): RepeaterBuilder;
  stateBind(expr: string): RepeaterBuilder;
  transformOrigin(value: QmlValue): RepeaterBuilder;
  transformOriginBind(expr: string): RepeaterBuilder;
  visible(value: boolean): RepeaterBuilder;
  visibleBind(expr: string): RepeaterBuilder;
  width(value: number): RepeaterBuilder;
  widthBind(expr: string): RepeaterBuilder;
  x(value: number): RepeaterBuilder;
  xBind(expr: string): RepeaterBuilder;
  y(value: number): RepeaterBuilder;
  yBind(expr: string): RepeaterBuilder;
  z(value: number): RepeaterBuilder;
  zBind(expr: string): RepeaterBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RepeaterBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RepeaterBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RepeaterBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): RepeaterBuilder;
  onChildrenChanged(handler: () => void): RepeaterBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RepeaterBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RepeaterBuilder;
  onContainmentMaskChanged(handler: () => void): RepeaterBuilder;
  onCountChanged(handler: () => void): RepeaterBuilder;
  onDelegateChanged(handler: () => void): RepeaterBuilder;
  onDelegateModelAccessChanged(handler: () => void): RepeaterBuilder;
  onEnabledChanged(handler: () => void): RepeaterBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RepeaterBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RepeaterBuilder;
  onHeightChanged(handler: () => void): RepeaterBuilder;
  onImplicitHeightChanged(handler: () => void): RepeaterBuilder;
  onImplicitWidthChanged(handler: () => void): RepeaterBuilder;
  onItemAdded(handler: (index: number, item: ItemBuilder) => void): RepeaterBuilder;
  onItemRemoved(handler: (index: number, item: ItemBuilder) => void): RepeaterBuilder;
  onModelChanged(handler: () => void): RepeaterBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RepeaterBuilder;
  onOpacityChanged(handler: () => void): RepeaterBuilder;
  onPaletteChanged(handler: () => void): RepeaterBuilder;
  onPaletteCreated(handler: () => void): RepeaterBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RepeaterBuilder;
  onRotationChanged(handler: () => void): RepeaterBuilder;
  onScaleChanged(handler: () => void): RepeaterBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RepeaterBuilder;
  onStateChanged(handler: (arg0: string) => void): RepeaterBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RepeaterBuilder;
  onVisibleChanged(handler: () => void): RepeaterBuilder;
  onVisibleChildrenChanged(handler: () => void): RepeaterBuilder;
  onWidthChanged(handler: () => void): RepeaterBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RepeaterBuilder;
  onXChanged(handler: () => void): RepeaterBuilder;
  onYChanged(handler: () => void): RepeaterBuilder;
  onZChanged(handler: () => void): RepeaterBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RepeaterBuilder;
  layer(setup: (b: LayerBuilder) => void): RepeaterBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): RepeaterBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): RepeaterBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): RepeaterBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): RepeaterBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): RepeaterBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): RepeaterBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): RepeaterBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): RepeaterBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): RepeaterBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): RepeaterBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): RepeaterBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): RepeaterBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): RepeaterBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): RepeaterBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): RepeaterBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): RepeaterBuilder;
}

export function Repeater(): RepeaterBuilder {
  return new DslBuilderImpl('Repeater') as unknown as RepeaterBuilder;
}

export namespace Repeater {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Repeater',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Repeater',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Repeater', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Repeater', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Repeater', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Repeater', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Repeater',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Repeater', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Repeater',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Repeater', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Repeater', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Repeater', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Repeater', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Repeater', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Repeater', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Repeater', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Repeater', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Repeater', 'TransformOrigin', 'BottomRight');
  }
}
