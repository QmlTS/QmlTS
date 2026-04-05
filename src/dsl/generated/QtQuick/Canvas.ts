// AUTO-GENERATED — DO NOT EDIT
// Type: Canvas
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlSize, QmlValue } from '../../runtime/index.js';
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
export interface CanvasBuilder {
  id(id: string): CanvasBuilder;
  child(obj: QmlObjectBuilder): CanvasBuilder;

  activeFocusOnTab(value: boolean): CanvasBuilder;
  activeFocusOnTabBind(expr: string): CanvasBuilder;
  antialiasing(value: boolean): CanvasBuilder;
  antialiasingBind(expr: string): CanvasBuilder;
  baselineOffset(value: number): CanvasBuilder;
  baselineOffsetBind(expr: string): CanvasBuilder;
  canvasSize(value: QmlSize): CanvasBuilder;
  canvasSizeBind(expr: string): CanvasBuilder;
  canvasWindow(value: QmlRect): CanvasBuilder;
  canvasWindowBind(expr: string): CanvasBuilder;
  clip(value: boolean): CanvasBuilder;
  clipBind(expr: string): CanvasBuilder;
  containmentMask(value: QtObjectBuilder): CanvasBuilder;
  containmentMaskBind(expr: string): CanvasBuilder;
  contextType(value: string): CanvasBuilder;
  contextTypeBind(expr: string): CanvasBuilder;
  enabled(value: boolean): CanvasBuilder;
  enabledBind(expr: string): CanvasBuilder;
  focus(value: boolean): CanvasBuilder;
  focusBind(expr: string): CanvasBuilder;
  focusPolicy(value: QmlValue): CanvasBuilder;
  focusPolicyBind(expr: string): CanvasBuilder;
  height(value: number): CanvasBuilder;
  heightBind(expr: string): CanvasBuilder;
  implicitHeight(value: number): CanvasBuilder;
  implicitHeightBind(expr: string): CanvasBuilder;
  implicitWidth(value: number): CanvasBuilder;
  implicitWidthBind(expr: string): CanvasBuilder;
  objectName(value: string): CanvasBuilder;
  objectNameBind(expr: string): CanvasBuilder;
  opacity(value: number): CanvasBuilder;
  opacityBind(expr: string): CanvasBuilder;
  palette(value: PaletteBuilder): CanvasBuilder;
  paletteBind(expr: string): CanvasBuilder;
  parent(value: ItemBuilder): CanvasBuilder;
  parentBind(expr: string): CanvasBuilder;
  renderStrategy(value: QmlValue): CanvasBuilder;
  renderStrategyBind(expr: string): CanvasBuilder;
  renderTarget(value: QmlValue): CanvasBuilder;
  renderTargetBind(expr: string): CanvasBuilder;
  rotation(value: number): CanvasBuilder;
  rotationBind(expr: string): CanvasBuilder;
  scale(value: number): CanvasBuilder;
  scaleBind(expr: string): CanvasBuilder;
  smooth(value: boolean): CanvasBuilder;
  smoothBind(expr: string): CanvasBuilder;
  state(value: string): CanvasBuilder;
  stateBind(expr: string): CanvasBuilder;
  tileSize(value: QmlSize): CanvasBuilder;
  tileSizeBind(expr: string): CanvasBuilder;
  transformOrigin(value: QmlValue): CanvasBuilder;
  transformOriginBind(expr: string): CanvasBuilder;
  visible(value: boolean): CanvasBuilder;
  visibleBind(expr: string): CanvasBuilder;
  width(value: number): CanvasBuilder;
  widthBind(expr: string): CanvasBuilder;
  x(value: number): CanvasBuilder;
  xBind(expr: string): CanvasBuilder;
  y(value: number): CanvasBuilder;
  yBind(expr: string): CanvasBuilder;
  z(value: number): CanvasBuilder;
  zBind(expr: string): CanvasBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): CanvasBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): CanvasBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): CanvasBuilder;
  onAvailableChanged(handler: () => void): CanvasBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): CanvasBuilder;
  onCanvasSizeChanged(handler: () => void): CanvasBuilder;
  onCanvasWindowChanged(handler: () => void): CanvasBuilder;
  onChildrenChanged(handler: () => void): CanvasBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): CanvasBuilder;
  onClipChanged(handler: (arg0: boolean) => void): CanvasBuilder;
  onContainmentMaskChanged(handler: () => void): CanvasBuilder;
  onContextChanged(handler: () => void): CanvasBuilder;
  onContextTypeChanged(handler: () => void): CanvasBuilder;
  onEnabledChanged(handler: () => void): CanvasBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): CanvasBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): CanvasBuilder;
  onHeightChanged(handler: () => void): CanvasBuilder;
  onImageLoaded(handler: () => void): CanvasBuilder;
  onImplicitHeightChanged(handler: () => void): CanvasBuilder;
  onImplicitWidthChanged(handler: () => void): CanvasBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): CanvasBuilder;
  onOpacityChanged(handler: () => void): CanvasBuilder;
  onPaint(handler: (region: QmlRect) => void): CanvasBuilder;
  onPainted(handler: () => void): CanvasBuilder;
  onPaletteChanged(handler: () => void): CanvasBuilder;
  onPaletteCreated(handler: () => void): CanvasBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): CanvasBuilder;
  onRenderStrategyChanged(handler: () => void): CanvasBuilder;
  onRenderTargetChanged(handler: () => void): CanvasBuilder;
  onRotationChanged(handler: () => void): CanvasBuilder;
  onScaleChanged(handler: () => void): CanvasBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): CanvasBuilder;
  onStateChanged(handler: (arg0: string) => void): CanvasBuilder;
  onTileSizeChanged(handler: () => void): CanvasBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): CanvasBuilder;
  onVisibleChanged(handler: () => void): CanvasBuilder;
  onVisibleChildrenChanged(handler: () => void): CanvasBuilder;
  onWidthChanged(handler: () => void): CanvasBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): CanvasBuilder;
  onXChanged(handler: () => void): CanvasBuilder;
  onYChanged(handler: () => void): CanvasBuilder;
  onZChanged(handler: () => void): CanvasBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CanvasBuilder;
  layer(setup: (b: LayerBuilder) => void): CanvasBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): CanvasBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): CanvasBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): CanvasBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): CanvasBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): CanvasBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): CanvasBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): CanvasBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): CanvasBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): CanvasBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): CanvasBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): CanvasBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): CanvasBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): CanvasBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): CanvasBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): CanvasBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): CanvasBuilder;
}

export function Canvas(): CanvasBuilder {
  return new DslBuilderImpl('Canvas') as unknown as CanvasBuilder;
}

export namespace Canvas {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Canvas',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Canvas',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Canvas', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Canvas', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Canvas', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Canvas', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Canvas', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Canvas', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Canvas',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RenderStrategy {
    export const Immediate = createEnumToken('Canvas', 'RenderStrategy', 'Immediate');
    export const Threaded = createEnumToken('Canvas', 'RenderStrategy', 'Threaded');
    export const Cooperative = createEnumToken('Canvas', 'RenderStrategy', 'Cooperative');
  }
  export namespace RenderTarget {
    export const Image = createEnumToken('Canvas', 'RenderTarget', 'Image');
    export const FramebufferObject = createEnumToken('Canvas', 'RenderTarget', 'FramebufferObject');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Canvas', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Canvas', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Canvas', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Canvas', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Canvas', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Canvas', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Canvas', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Canvas', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Canvas', 'TransformOrigin', 'BottomRight');
  }
}
