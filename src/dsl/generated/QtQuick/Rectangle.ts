// AUTO-GENERATED — DO NOT EDIT
// Type: Rectangle
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
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
import type { BorderBuilder } from './QQuickPen.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface RectangleBuilder {
  id(id: string): RectangleBuilder;
  child(obj: QmlObjectBuilder): RectangleBuilder;

  activeFocusOnTab(value: boolean): RectangleBuilder;
  activeFocusOnTabBind(expr: string): RectangleBuilder;
  antialiasing(value: boolean): RectangleBuilder;
  antialiasingBind(expr: string): RectangleBuilder;
  baselineOffset(value: number): RectangleBuilder;
  baselineOffsetBind(expr: string): RectangleBuilder;
  bottomLeftRadius(value: number): RectangleBuilder;
  bottomLeftRadiusBind(expr: string): RectangleBuilder;
  bottomRightRadius(value: number): RectangleBuilder;
  bottomRightRadiusBind(expr: string): RectangleBuilder;
  clip(value: boolean): RectangleBuilder;
  clipBind(expr: string): RectangleBuilder;
  color(value: QmlColor): RectangleBuilder;
  colorBind(expr: string): RectangleBuilder;
  containmentMask(value: QtObjectBuilder): RectangleBuilder;
  containmentMaskBind(expr: string): RectangleBuilder;
  enabled(value: boolean): RectangleBuilder;
  enabledBind(expr: string): RectangleBuilder;
  focus(value: boolean): RectangleBuilder;
  focusBind(expr: string): RectangleBuilder;
  focusPolicy(value: QmlValue): RectangleBuilder;
  focusPolicyBind(expr: string): RectangleBuilder;
  gradient(value: QmlValue): RectangleBuilder;
  gradientBind(expr: string): RectangleBuilder;
  height(value: number): RectangleBuilder;
  heightBind(expr: string): RectangleBuilder;
  implicitHeight(value: number): RectangleBuilder;
  implicitHeightBind(expr: string): RectangleBuilder;
  implicitWidth(value: number): RectangleBuilder;
  implicitWidthBind(expr: string): RectangleBuilder;
  objectName(value: string): RectangleBuilder;
  objectNameBind(expr: string): RectangleBuilder;
  opacity(value: number): RectangleBuilder;
  opacityBind(expr: string): RectangleBuilder;
  palette(value: PaletteBuilder): RectangleBuilder;
  paletteBind(expr: string): RectangleBuilder;
  parent(value: ItemBuilder): RectangleBuilder;
  parentBind(expr: string): RectangleBuilder;
  radius(value: number): RectangleBuilder;
  radiusBind(expr: string): RectangleBuilder;
  rotation(value: number): RectangleBuilder;
  rotationBind(expr: string): RectangleBuilder;
  scale(value: number): RectangleBuilder;
  scaleBind(expr: string): RectangleBuilder;
  smooth(value: boolean): RectangleBuilder;
  smoothBind(expr: string): RectangleBuilder;
  state(value: string): RectangleBuilder;
  stateBind(expr: string): RectangleBuilder;
  topLeftRadius(value: number): RectangleBuilder;
  topLeftRadiusBind(expr: string): RectangleBuilder;
  topRightRadius(value: number): RectangleBuilder;
  topRightRadiusBind(expr: string): RectangleBuilder;
  transformOrigin(value: QmlValue): RectangleBuilder;
  transformOriginBind(expr: string): RectangleBuilder;
  visible(value: boolean): RectangleBuilder;
  visibleBind(expr: string): RectangleBuilder;
  width(value: number): RectangleBuilder;
  widthBind(expr: string): RectangleBuilder;
  x(value: number): RectangleBuilder;
  xBind(expr: string): RectangleBuilder;
  y(value: number): RectangleBuilder;
  yBind(expr: string): RectangleBuilder;
  z(value: number): RectangleBuilder;
  zBind(expr: string): RectangleBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RectangleBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RectangleBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RectangleBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): RectangleBuilder;
  onBottomLeftRadiusChanged(handler: () => void): RectangleBuilder;
  onBottomRightRadiusChanged(handler: () => void): RectangleBuilder;
  onChildrenChanged(handler: () => void): RectangleBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RectangleBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RectangleBuilder;
  onColorChanged(handler: () => void): RectangleBuilder;
  onContainmentMaskChanged(handler: () => void): RectangleBuilder;
  onEnabledChanged(handler: () => void): RectangleBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RectangleBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RectangleBuilder;
  onHeightChanged(handler: () => void): RectangleBuilder;
  onImplicitHeightChanged(handler: () => void): RectangleBuilder;
  onImplicitWidthChanged(handler: () => void): RectangleBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RectangleBuilder;
  onOpacityChanged(handler: () => void): RectangleBuilder;
  onPaletteChanged(handler: () => void): RectangleBuilder;
  onPaletteCreated(handler: () => void): RectangleBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RectangleBuilder;
  onRadiusChanged(handler: () => void): RectangleBuilder;
  onRotationChanged(handler: () => void): RectangleBuilder;
  onScaleChanged(handler: () => void): RectangleBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RectangleBuilder;
  onStateChanged(handler: (arg0: string) => void): RectangleBuilder;
  onTopLeftRadiusChanged(handler: () => void): RectangleBuilder;
  onTopRightRadiusChanged(handler: () => void): RectangleBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RectangleBuilder;
  onVisibleChanged(handler: () => void): RectangleBuilder;
  onVisibleChildrenChanged(handler: () => void): RectangleBuilder;
  onWidthChanged(handler: () => void): RectangleBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RectangleBuilder;
  onXChanged(handler: () => void): RectangleBuilder;
  onYChanged(handler: () => void): RectangleBuilder;
  onZChanged(handler: () => void): RectangleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RectangleBuilder;
  border(setup: (b: BorderBuilder) => void): RectangleBuilder;
  layer(setup: (b: LayerBuilder) => void): RectangleBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): RectangleBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): RectangleBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): RectangleBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): RectangleBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): RectangleBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): RectangleBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): RectangleBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): RectangleBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): RectangleBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): RectangleBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): RectangleBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): RectangleBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): RectangleBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): RectangleBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): RectangleBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): RectangleBuilder;
}

export function Rectangle(): RectangleBuilder {
  return new DslBuilderImpl('Rectangle') as unknown as RectangleBuilder;
}

export namespace Rectangle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Rectangle',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Rectangle',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Rectangle', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Rectangle', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Rectangle', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Rectangle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Rectangle',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Rectangle', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Rectangle',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Rectangle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Rectangle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Rectangle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Rectangle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Rectangle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Rectangle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Rectangle', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Rectangle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Rectangle', 'TransformOrigin', 'BottomRight');
  }
}
