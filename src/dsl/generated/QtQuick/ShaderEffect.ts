// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderEffect
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlUrl, QmlValue } from '../../runtime/index.js';
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
export interface ShaderEffectBuilder {
  id(id: string): ShaderEffectBuilder;
  child(obj: QmlObjectBuilder): ShaderEffectBuilder;

  activeFocusOnTab(value: boolean): ShaderEffectBuilder;
  activeFocusOnTabBind(expr: string): ShaderEffectBuilder;
  antialiasing(value: boolean): ShaderEffectBuilder;
  antialiasingBind(expr: string): ShaderEffectBuilder;
  baselineOffset(value: number): ShaderEffectBuilder;
  baselineOffsetBind(expr: string): ShaderEffectBuilder;
  blending(value: boolean): ShaderEffectBuilder;
  blendingBind(expr: string): ShaderEffectBuilder;
  clip(value: boolean): ShaderEffectBuilder;
  clipBind(expr: string): ShaderEffectBuilder;
  containmentMask(value: QtObjectBuilder): ShaderEffectBuilder;
  containmentMaskBind(expr: string): ShaderEffectBuilder;
  cullMode(value: QmlValue): ShaderEffectBuilder;
  cullModeBind(expr: string): ShaderEffectBuilder;
  enabled(value: boolean): ShaderEffectBuilder;
  enabledBind(expr: string): ShaderEffectBuilder;
  focus(value: boolean): ShaderEffectBuilder;
  focusBind(expr: string): ShaderEffectBuilder;
  focusPolicy(value: QmlValue): ShaderEffectBuilder;
  focusPolicyBind(expr: string): ShaderEffectBuilder;
  fragmentShader(value: QmlUrl): ShaderEffectBuilder;
  fragmentShaderBind(expr: string): ShaderEffectBuilder;
  height(value: number): ShaderEffectBuilder;
  heightBind(expr: string): ShaderEffectBuilder;
  implicitHeight(value: number): ShaderEffectBuilder;
  implicitHeightBind(expr: string): ShaderEffectBuilder;
  implicitWidth(value: number): ShaderEffectBuilder;
  implicitWidthBind(expr: string): ShaderEffectBuilder;
  mesh(value: QmlValue): ShaderEffectBuilder;
  meshBind(expr: string): ShaderEffectBuilder;
  objectName(value: string): ShaderEffectBuilder;
  objectNameBind(expr: string): ShaderEffectBuilder;
  opacity(value: number): ShaderEffectBuilder;
  opacityBind(expr: string): ShaderEffectBuilder;
  palette(value: PaletteBuilder): ShaderEffectBuilder;
  paletteBind(expr: string): ShaderEffectBuilder;
  parent(value: ItemBuilder): ShaderEffectBuilder;
  parentBind(expr: string): ShaderEffectBuilder;
  rotation(value: number): ShaderEffectBuilder;
  rotationBind(expr: string): ShaderEffectBuilder;
  scale(value: number): ShaderEffectBuilder;
  scaleBind(expr: string): ShaderEffectBuilder;
  smooth(value: boolean): ShaderEffectBuilder;
  smoothBind(expr: string): ShaderEffectBuilder;
  state(value: string): ShaderEffectBuilder;
  stateBind(expr: string): ShaderEffectBuilder;
  supportsAtlasTextures(value: boolean): ShaderEffectBuilder;
  supportsAtlasTexturesBind(expr: string): ShaderEffectBuilder;
  transformOrigin(value: QmlValue): ShaderEffectBuilder;
  transformOriginBind(expr: string): ShaderEffectBuilder;
  vertexShader(value: QmlUrl): ShaderEffectBuilder;
  vertexShaderBind(expr: string): ShaderEffectBuilder;
  visible(value: boolean): ShaderEffectBuilder;
  visibleBind(expr: string): ShaderEffectBuilder;
  width(value: number): ShaderEffectBuilder;
  widthBind(expr: string): ShaderEffectBuilder;
  x(value: number): ShaderEffectBuilder;
  xBind(expr: string): ShaderEffectBuilder;
  y(value: number): ShaderEffectBuilder;
  yBind(expr: string): ShaderEffectBuilder;
  z(value: number): ShaderEffectBuilder;
  zBind(expr: string): ShaderEffectBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ShaderEffectBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ShaderEffectBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ShaderEffectBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): ShaderEffectBuilder;
  onBlendingChanged(handler: () => void): ShaderEffectBuilder;
  onChildrenChanged(handler: () => void): ShaderEffectBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ShaderEffectBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ShaderEffectBuilder;
  onContainmentMaskChanged(handler: () => void): ShaderEffectBuilder;
  onCullModeChanged(handler: () => void): ShaderEffectBuilder;
  onEnabledChanged(handler: () => void): ShaderEffectBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ShaderEffectBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ShaderEffectBuilder;
  onFragmentShaderChanged(handler: () => void): ShaderEffectBuilder;
  onHeightChanged(handler: () => void): ShaderEffectBuilder;
  onImplicitHeightChanged(handler: () => void): ShaderEffectBuilder;
  onImplicitWidthChanged(handler: () => void): ShaderEffectBuilder;
  onLogChanged(handler: () => void): ShaderEffectBuilder;
  onMeshChanged(handler: () => void): ShaderEffectBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ShaderEffectBuilder;
  onOpacityChanged(handler: () => void): ShaderEffectBuilder;
  onPaletteChanged(handler: () => void): ShaderEffectBuilder;
  onPaletteCreated(handler: () => void): ShaderEffectBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ShaderEffectBuilder;
  onRotationChanged(handler: () => void): ShaderEffectBuilder;
  onScaleChanged(handler: () => void): ShaderEffectBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ShaderEffectBuilder;
  onStateChanged(handler: (arg0: string) => void): ShaderEffectBuilder;
  onStatusChanged(handler: () => void): ShaderEffectBuilder;
  onSupportsAtlasTexturesChanged(handler: () => void): ShaderEffectBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ShaderEffectBuilder;
  onVertexShaderChanged(handler: () => void): ShaderEffectBuilder;
  onVisibleChanged(handler: () => void): ShaderEffectBuilder;
  onVisibleChildrenChanged(handler: () => void): ShaderEffectBuilder;
  onWidthChanged(handler: () => void): ShaderEffectBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ShaderEffectBuilder;
  onXChanged(handler: () => void): ShaderEffectBuilder;
  onYChanged(handler: () => void): ShaderEffectBuilder;
  onZChanged(handler: () => void): ShaderEffectBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ShaderEffectBuilder;
  layer(setup: (b: LayerBuilder) => void): ShaderEffectBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ShaderEffectBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ShaderEffectBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ShaderEffectBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ShaderEffectBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ShaderEffectBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ShaderEffectBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ShaderEffectBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ShaderEffectBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ShaderEffectBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ShaderEffectBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ShaderEffectBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ShaderEffectBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ShaderEffectBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ShaderEffectBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ShaderEffectBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ShaderEffectBuilder;
}

export function ShaderEffect(): ShaderEffectBuilder {
  return new DslBuilderImpl('ShaderEffect') as unknown as ShaderEffectBuilder;
}

export namespace ShaderEffect {
  export namespace CullMode {
    export const NoCulling = createEnumToken('ShaderEffect', 'CullMode', 'NoCulling');
    export const BackFaceCulling = createEnumToken('ShaderEffect', 'CullMode', 'BackFaceCulling');
    export const FrontFaceCulling = createEnumToken('ShaderEffect', 'CullMode', 'FrontFaceCulling');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ShaderEffect',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ShaderEffect',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ShaderEffect', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ShaderEffect', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ShaderEffect', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ShaderEffect', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ShaderEffect',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ShaderEffect', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ShaderEffect',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Status {
    export const Compiled = createEnumToken('ShaderEffect', 'Status', 'Compiled');
    export const Uncompiled = createEnumToken('ShaderEffect', 'Status', 'Uncompiled');
    export const Error = createEnumToken('ShaderEffect', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ShaderEffect', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ShaderEffect', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ShaderEffect', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ShaderEffect', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ShaderEffect', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ShaderEffect', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ShaderEffect', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ShaderEffect', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ShaderEffect', 'TransformOrigin', 'BottomRight');
  }
}
