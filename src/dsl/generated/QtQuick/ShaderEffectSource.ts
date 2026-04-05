// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderEffectSource
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
export interface ShaderEffectSourceBuilder {
  id(id: string): ShaderEffectSourceBuilder;
  child(obj: QmlObjectBuilder): ShaderEffectSourceBuilder;

  activeFocusOnTab(value: boolean): ShaderEffectSourceBuilder;
  activeFocusOnTabBind(expr: string): ShaderEffectSourceBuilder;
  antialiasing(value: boolean): ShaderEffectSourceBuilder;
  antialiasingBind(expr: string): ShaderEffectSourceBuilder;
  baselineOffset(value: number): ShaderEffectSourceBuilder;
  baselineOffsetBind(expr: string): ShaderEffectSourceBuilder;
  clip(value: boolean): ShaderEffectSourceBuilder;
  clipBind(expr: string): ShaderEffectSourceBuilder;
  containmentMask(value: QtObjectBuilder): ShaderEffectSourceBuilder;
  containmentMaskBind(expr: string): ShaderEffectSourceBuilder;
  enabled(value: boolean): ShaderEffectSourceBuilder;
  enabledBind(expr: string): ShaderEffectSourceBuilder;
  focus(value: boolean): ShaderEffectSourceBuilder;
  focusBind(expr: string): ShaderEffectSourceBuilder;
  focusPolicy(value: QmlValue): ShaderEffectSourceBuilder;
  focusPolicyBind(expr: string): ShaderEffectSourceBuilder;
  format(value: QmlValue): ShaderEffectSourceBuilder;
  formatBind(expr: string): ShaderEffectSourceBuilder;
  height(value: number): ShaderEffectSourceBuilder;
  heightBind(expr: string): ShaderEffectSourceBuilder;
  hideSource(value: boolean): ShaderEffectSourceBuilder;
  hideSourceBind(expr: string): ShaderEffectSourceBuilder;
  implicitHeight(value: number): ShaderEffectSourceBuilder;
  implicitHeightBind(expr: string): ShaderEffectSourceBuilder;
  implicitWidth(value: number): ShaderEffectSourceBuilder;
  implicitWidthBind(expr: string): ShaderEffectSourceBuilder;
  live(value: boolean): ShaderEffectSourceBuilder;
  liveBind(expr: string): ShaderEffectSourceBuilder;
  mipmap(value: boolean): ShaderEffectSourceBuilder;
  mipmapBind(expr: string): ShaderEffectSourceBuilder;
  objectName(value: string): ShaderEffectSourceBuilder;
  objectNameBind(expr: string): ShaderEffectSourceBuilder;
  opacity(value: number): ShaderEffectSourceBuilder;
  opacityBind(expr: string): ShaderEffectSourceBuilder;
  palette(value: PaletteBuilder): ShaderEffectSourceBuilder;
  paletteBind(expr: string): ShaderEffectSourceBuilder;
  parent(value: ItemBuilder): ShaderEffectSourceBuilder;
  parentBind(expr: string): ShaderEffectSourceBuilder;
  recursive(value: boolean): ShaderEffectSourceBuilder;
  recursiveBind(expr: string): ShaderEffectSourceBuilder;
  rotation(value: number): ShaderEffectSourceBuilder;
  rotationBind(expr: string): ShaderEffectSourceBuilder;
  samples(value: number): ShaderEffectSourceBuilder;
  samplesBind(expr: string): ShaderEffectSourceBuilder;
  scale(value: number): ShaderEffectSourceBuilder;
  scaleBind(expr: string): ShaderEffectSourceBuilder;
  smooth(value: boolean): ShaderEffectSourceBuilder;
  smoothBind(expr: string): ShaderEffectSourceBuilder;
  sourceItem(value: ItemBuilder): ShaderEffectSourceBuilder;
  sourceItemBind(expr: string): ShaderEffectSourceBuilder;
  sourceRect(value: QmlRect): ShaderEffectSourceBuilder;
  sourceRectBind(expr: string): ShaderEffectSourceBuilder;
  state(value: string): ShaderEffectSourceBuilder;
  stateBind(expr: string): ShaderEffectSourceBuilder;
  textureMirroring(value: QmlValue): ShaderEffectSourceBuilder;
  textureMirroringBind(expr: string): ShaderEffectSourceBuilder;
  textureSize(value: QmlSize): ShaderEffectSourceBuilder;
  textureSizeBind(expr: string): ShaderEffectSourceBuilder;
  transformOrigin(value: QmlValue): ShaderEffectSourceBuilder;
  transformOriginBind(expr: string): ShaderEffectSourceBuilder;
  visible(value: boolean): ShaderEffectSourceBuilder;
  visibleBind(expr: string): ShaderEffectSourceBuilder;
  width(value: number): ShaderEffectSourceBuilder;
  widthBind(expr: string): ShaderEffectSourceBuilder;
  wrapMode(value: QmlValue): ShaderEffectSourceBuilder;
  wrapModeBind(expr: string): ShaderEffectSourceBuilder;
  x(value: number): ShaderEffectSourceBuilder;
  xBind(expr: string): ShaderEffectSourceBuilder;
  y(value: number): ShaderEffectSourceBuilder;
  yBind(expr: string): ShaderEffectSourceBuilder;
  z(value: number): ShaderEffectSourceBuilder;
  zBind(expr: string): ShaderEffectSourceBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ShaderEffectSourceBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ShaderEffectSourceBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ShaderEffectSourceBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): ShaderEffectSourceBuilder;
  onChildrenChanged(handler: () => void): ShaderEffectSourceBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ShaderEffectSourceBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ShaderEffectSourceBuilder;
  onContainmentMaskChanged(handler: () => void): ShaderEffectSourceBuilder;
  onEnabledChanged(handler: () => void): ShaderEffectSourceBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ShaderEffectSourceBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ShaderEffectSourceBuilder;
  onFormatChanged(handler: () => void): ShaderEffectSourceBuilder;
  onHeightChanged(handler: () => void): ShaderEffectSourceBuilder;
  onHideSourceChanged(handler: () => void): ShaderEffectSourceBuilder;
  onImplicitHeightChanged(handler: () => void): ShaderEffectSourceBuilder;
  onImplicitWidthChanged(handler: () => void): ShaderEffectSourceBuilder;
  onLiveChanged(handler: () => void): ShaderEffectSourceBuilder;
  onMipmapChanged(handler: () => void): ShaderEffectSourceBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ShaderEffectSourceBuilder;
  onOpacityChanged(handler: () => void): ShaderEffectSourceBuilder;
  onPaletteChanged(handler: () => void): ShaderEffectSourceBuilder;
  onPaletteCreated(handler: () => void): ShaderEffectSourceBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ShaderEffectSourceBuilder;
  onRecursiveChanged(handler: () => void): ShaderEffectSourceBuilder;
  onRotationChanged(handler: () => void): ShaderEffectSourceBuilder;
  onSamplesChanged(handler: () => void): ShaderEffectSourceBuilder;
  onScaleChanged(handler: () => void): ShaderEffectSourceBuilder;
  onScheduledUpdateCompleted(handler: () => void): ShaderEffectSourceBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ShaderEffectSourceBuilder;
  onSourceItemChanged(handler: () => void): ShaderEffectSourceBuilder;
  onSourceRectChanged(handler: () => void): ShaderEffectSourceBuilder;
  onStateChanged(handler: (arg0: string) => void): ShaderEffectSourceBuilder;
  onTextureMirroringChanged(handler: () => void): ShaderEffectSourceBuilder;
  onTextureSizeChanged(handler: () => void): ShaderEffectSourceBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ShaderEffectSourceBuilder;
  onVisibleChanged(handler: () => void): ShaderEffectSourceBuilder;
  onVisibleChildrenChanged(handler: () => void): ShaderEffectSourceBuilder;
  onWidthChanged(handler: () => void): ShaderEffectSourceBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ShaderEffectSourceBuilder;
  onWrapModeChanged(handler: () => void): ShaderEffectSourceBuilder;
  onXChanged(handler: () => void): ShaderEffectSourceBuilder;
  onYChanged(handler: () => void): ShaderEffectSourceBuilder;
  onZChanged(handler: () => void): ShaderEffectSourceBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ShaderEffectSourceBuilder;
  layer(setup: (b: LayerBuilder) => void): ShaderEffectSourceBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ShaderEffectSourceBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ShaderEffectSourceBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ShaderEffectSourceBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ShaderEffectSourceBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ShaderEffectSourceBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ShaderEffectSourceBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ShaderEffectSourceBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ShaderEffectSourceBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ShaderEffectSourceBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ShaderEffectSourceBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ShaderEffectSourceBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ShaderEffectSourceBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ShaderEffectSourceBuilder;
}

export function ShaderEffectSource(): ShaderEffectSourceBuilder {
  return new DslBuilderImpl('ShaderEffectSource') as unknown as ShaderEffectSourceBuilder;
}

export namespace ShaderEffectSource {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('ShaderEffectSource', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ShaderEffectSource',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace Format {
    export const RGBA8 = createEnumToken('ShaderEffectSource', 'Format', 'RGBA8');
    export const RGBA16F = createEnumToken('ShaderEffectSource', 'Format', 'RGBA16F');
    export const RGBA32F = createEnumToken('ShaderEffectSource', 'Format', 'RGBA32F');
    export const Alpha = createEnumToken('ShaderEffectSource', 'Format', 'Alpha');
    export const RGB = createEnumToken('ShaderEffectSource', 'Format', 'RGB');
    export const RGBA = createEnumToken('ShaderEffectSource', 'Format', 'RGBA');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ShaderEffectSource',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TextureMirroring {
    export const NoMirroring = createEnumToken(
      'ShaderEffectSource',
      'TextureMirroring',
      'NoMirroring',
    );
    export const MirrorHorizontally = createEnumToken(
      'ShaderEffectSource',
      'TextureMirroring',
      'MirrorHorizontally',
    );
    export const MirrorVertically = createEnumToken(
      'ShaderEffectSource',
      'TextureMirroring',
      'MirrorVertically',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'ShaderEffectSource',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('ShaderEffectSource', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'ShaderEffectSource',
      'TransformOrigin',
      'BottomRight',
    );
  }
  export namespace WrapMode {
    export const ClampToEdge = createEnumToken('ShaderEffectSource', 'WrapMode', 'ClampToEdge');
    export const RepeatHorizontally = createEnumToken(
      'ShaderEffectSource',
      'WrapMode',
      'RepeatHorizontally',
    );
    export const RepeatVertically = createEnumToken(
      'ShaderEffectSource',
      'WrapMode',
      'RepeatVertically',
    );
    export const Repeat = createEnumToken('ShaderEffectSource', 'WrapMode', 'Repeat');
  }
}
