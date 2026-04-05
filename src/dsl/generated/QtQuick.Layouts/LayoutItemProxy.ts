// AUTO-GENERATED — DO NOT EDIT
// Type: LayoutItemProxy
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { WindowBuilder } from '../QtQuick/Window.js';
import type { FlexboxLayoutAttachedBuilder } from './QQuickFlexboxLayoutAttached.js';
import type { LayoutAttachedBuilder } from './QQuickLayoutAttached.js';
import type { StackLayoutAttachedBuilder } from './QQuickStackLayoutAttached.js';
export interface LayoutItemProxyBuilder {
  id(id: string): LayoutItemProxyBuilder;
  child(obj: QmlObjectBuilder): LayoutItemProxyBuilder;

  activeFocusOnTab(value: boolean): LayoutItemProxyBuilder;
  activeFocusOnTabBind(expr: string): LayoutItemProxyBuilder;
  antialiasing(value: boolean): LayoutItemProxyBuilder;
  antialiasingBind(expr: string): LayoutItemProxyBuilder;
  baselineOffset(value: number): LayoutItemProxyBuilder;
  baselineOffsetBind(expr: string): LayoutItemProxyBuilder;
  clip(value: boolean): LayoutItemProxyBuilder;
  clipBind(expr: string): LayoutItemProxyBuilder;
  containmentMask(value: QtObjectBuilder): LayoutItemProxyBuilder;
  containmentMaskBind(expr: string): LayoutItemProxyBuilder;
  enabled(value: boolean): LayoutItemProxyBuilder;
  enabledBind(expr: string): LayoutItemProxyBuilder;
  focus(value: boolean): LayoutItemProxyBuilder;
  focusBind(expr: string): LayoutItemProxyBuilder;
  focusPolicy(value: QmlValue): LayoutItemProxyBuilder;
  focusPolicyBind(expr: string): LayoutItemProxyBuilder;
  height(value: number): LayoutItemProxyBuilder;
  heightBind(expr: string): LayoutItemProxyBuilder;
  implicitHeight(value: number): LayoutItemProxyBuilder;
  implicitHeightBind(expr: string): LayoutItemProxyBuilder;
  implicitWidth(value: number): LayoutItemProxyBuilder;
  implicitWidthBind(expr: string): LayoutItemProxyBuilder;
  objectName(value: string): LayoutItemProxyBuilder;
  objectNameBind(expr: string): LayoutItemProxyBuilder;
  opacity(value: number): LayoutItemProxyBuilder;
  opacityBind(expr: string): LayoutItemProxyBuilder;
  palette(value: PaletteBuilder): LayoutItemProxyBuilder;
  paletteBind(expr: string): LayoutItemProxyBuilder;
  parent(value: ItemBuilder): LayoutItemProxyBuilder;
  parentBind(expr: string): LayoutItemProxyBuilder;
  rotation(value: number): LayoutItemProxyBuilder;
  rotationBind(expr: string): LayoutItemProxyBuilder;
  scale(value: number): LayoutItemProxyBuilder;
  scaleBind(expr: string): LayoutItemProxyBuilder;
  smooth(value: boolean): LayoutItemProxyBuilder;
  smoothBind(expr: string): LayoutItemProxyBuilder;
  state(value: string): LayoutItemProxyBuilder;
  stateBind(expr: string): LayoutItemProxyBuilder;
  target(value: ItemBuilder): LayoutItemProxyBuilder;
  targetBind(expr: string): LayoutItemProxyBuilder;
  transformOrigin(value: QmlValue): LayoutItemProxyBuilder;
  transformOriginBind(expr: string): LayoutItemProxyBuilder;
  visible(value: boolean): LayoutItemProxyBuilder;
  visibleBind(expr: string): LayoutItemProxyBuilder;
  width(value: number): LayoutItemProxyBuilder;
  widthBind(expr: string): LayoutItemProxyBuilder;
  x(value: number): LayoutItemProxyBuilder;
  xBind(expr: string): LayoutItemProxyBuilder;
  y(value: number): LayoutItemProxyBuilder;
  yBind(expr: string): LayoutItemProxyBuilder;
  z(value: number): LayoutItemProxyBuilder;
  zBind(expr: string): LayoutItemProxyBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): LayoutItemProxyBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): LayoutItemProxyBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): LayoutItemProxyBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): LayoutItemProxyBuilder;
  onChildrenChanged(handler: () => void): LayoutItemProxyBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): LayoutItemProxyBuilder;
  onClipChanged(handler: (arg0: boolean) => void): LayoutItemProxyBuilder;
  onContainmentMaskChanged(handler: () => void): LayoutItemProxyBuilder;
  onEnabledChanged(handler: () => void): LayoutItemProxyBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): LayoutItemProxyBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): LayoutItemProxyBuilder;
  onHeightChanged(handler: () => void): LayoutItemProxyBuilder;
  onImplicitHeightChanged(handler: () => void): LayoutItemProxyBuilder;
  onImplicitWidthChanged(handler: () => void): LayoutItemProxyBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): LayoutItemProxyBuilder;
  onOpacityChanged(handler: () => void): LayoutItemProxyBuilder;
  onPaletteChanged(handler: () => void): LayoutItemProxyBuilder;
  onPaletteCreated(handler: () => void): LayoutItemProxyBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): LayoutItemProxyBuilder;
  onRotationChanged(handler: () => void): LayoutItemProxyBuilder;
  onScaleChanged(handler: () => void): LayoutItemProxyBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): LayoutItemProxyBuilder;
  onStateChanged(handler: (arg0: string) => void): LayoutItemProxyBuilder;
  onTargetChanged(handler: () => void): LayoutItemProxyBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): LayoutItemProxyBuilder;
  onVisibleChanged(handler: () => void): LayoutItemProxyBuilder;
  onVisibleChildrenChanged(handler: () => void): LayoutItemProxyBuilder;
  onWidthChanged(handler: () => void): LayoutItemProxyBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): LayoutItemProxyBuilder;
  onXChanged(handler: () => void): LayoutItemProxyBuilder;
  onYChanged(handler: () => void): LayoutItemProxyBuilder;
  onZChanged(handler: () => void): LayoutItemProxyBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): LayoutItemProxyBuilder;
  layer(setup: (b: LayerBuilder) => void): LayoutItemProxyBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): LayoutItemProxyBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): LayoutItemProxyBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): LayoutItemProxyBuilder;
}

export function LayoutItemProxy(): LayoutItemProxyBuilder {
  return new DslBuilderImpl('LayoutItemProxy') as unknown as LayoutItemProxyBuilder;
}

export namespace LayoutItemProxy {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'LayoutItemProxy',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'LayoutItemProxy',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('LayoutItemProxy', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('LayoutItemProxy', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('LayoutItemProxy', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('LayoutItemProxy', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'LayoutItemProxy',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'LayoutItemProxy',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'BottomRight');
  }
}
