// AUTO-GENERATED — DO NOT EDIT
// Type: StackLayout
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
export interface StackLayoutBuilder {
  id(id: string): StackLayoutBuilder;
  child(obj: QmlObjectBuilder): StackLayoutBuilder;

  activeFocusOnTab(value: boolean): StackLayoutBuilder;
  activeFocusOnTabBind(expr: string): StackLayoutBuilder;
  antialiasing(value: boolean): StackLayoutBuilder;
  antialiasingBind(expr: string): StackLayoutBuilder;
  baselineOffset(value: number): StackLayoutBuilder;
  baselineOffsetBind(expr: string): StackLayoutBuilder;
  clip(value: boolean): StackLayoutBuilder;
  clipBind(expr: string): StackLayoutBuilder;
  containmentMask(value: QtObjectBuilder): StackLayoutBuilder;
  containmentMaskBind(expr: string): StackLayoutBuilder;
  currentIndex(value: number): StackLayoutBuilder;
  currentIndexBind(expr: string): StackLayoutBuilder;
  enabled(value: boolean): StackLayoutBuilder;
  enabledBind(expr: string): StackLayoutBuilder;
  focus(value: boolean): StackLayoutBuilder;
  focusBind(expr: string): StackLayoutBuilder;
  focusPolicy(value: QmlValue): StackLayoutBuilder;
  focusPolicyBind(expr: string): StackLayoutBuilder;
  height(value: number): StackLayoutBuilder;
  heightBind(expr: string): StackLayoutBuilder;
  implicitHeight(value: number): StackLayoutBuilder;
  implicitHeightBind(expr: string): StackLayoutBuilder;
  implicitWidth(value: number): StackLayoutBuilder;
  implicitWidthBind(expr: string): StackLayoutBuilder;
  objectName(value: string): StackLayoutBuilder;
  objectNameBind(expr: string): StackLayoutBuilder;
  opacity(value: number): StackLayoutBuilder;
  opacityBind(expr: string): StackLayoutBuilder;
  palette(value: PaletteBuilder): StackLayoutBuilder;
  paletteBind(expr: string): StackLayoutBuilder;
  parent(value: ItemBuilder): StackLayoutBuilder;
  parentBind(expr: string): StackLayoutBuilder;
  rotation(value: number): StackLayoutBuilder;
  rotationBind(expr: string): StackLayoutBuilder;
  scale(value: number): StackLayoutBuilder;
  scaleBind(expr: string): StackLayoutBuilder;
  smooth(value: boolean): StackLayoutBuilder;
  smoothBind(expr: string): StackLayoutBuilder;
  state(value: string): StackLayoutBuilder;
  stateBind(expr: string): StackLayoutBuilder;
  transformOrigin(value: QmlValue): StackLayoutBuilder;
  transformOriginBind(expr: string): StackLayoutBuilder;
  visible(value: boolean): StackLayoutBuilder;
  visibleBind(expr: string): StackLayoutBuilder;
  width(value: number): StackLayoutBuilder;
  widthBind(expr: string): StackLayoutBuilder;
  x(value: number): StackLayoutBuilder;
  xBind(expr: string): StackLayoutBuilder;
  y(value: number): StackLayoutBuilder;
  yBind(expr: string): StackLayoutBuilder;
  z(value: number): StackLayoutBuilder;
  zBind(expr: string): StackLayoutBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): StackLayoutBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): StackLayoutBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): StackLayoutBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): StackLayoutBuilder;
  onChildrenChanged(handler: () => void): StackLayoutBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): StackLayoutBuilder;
  onClipChanged(handler: (arg0: boolean) => void): StackLayoutBuilder;
  onContainmentMaskChanged(handler: () => void): StackLayoutBuilder;
  onCountChanged(handler: () => void): StackLayoutBuilder;
  onCurrentIndexChanged(handler: () => void): StackLayoutBuilder;
  onEnabledChanged(handler: () => void): StackLayoutBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): StackLayoutBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): StackLayoutBuilder;
  onHeightChanged(handler: () => void): StackLayoutBuilder;
  onImplicitHeightChanged(handler: () => void): StackLayoutBuilder;
  onImplicitWidthChanged(handler: () => void): StackLayoutBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): StackLayoutBuilder;
  onOpacityChanged(handler: () => void): StackLayoutBuilder;
  onPaletteChanged(handler: () => void): StackLayoutBuilder;
  onPaletteCreated(handler: () => void): StackLayoutBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): StackLayoutBuilder;
  onRotationChanged(handler: () => void): StackLayoutBuilder;
  onScaleChanged(handler: () => void): StackLayoutBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): StackLayoutBuilder;
  onStateChanged(handler: (arg0: string) => void): StackLayoutBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): StackLayoutBuilder;
  onVisibleChanged(handler: () => void): StackLayoutBuilder;
  onVisibleChildrenChanged(handler: () => void): StackLayoutBuilder;
  onWidthChanged(handler: () => void): StackLayoutBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): StackLayoutBuilder;
  onXChanged(handler: () => void): StackLayoutBuilder;
  onYChanged(handler: () => void): StackLayoutBuilder;
  onZChanged(handler: () => void): StackLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): StackLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): StackLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): StackLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): StackLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): StackLayoutBuilder;
}

export function StackLayout(): StackLayoutBuilder {
  return new DslBuilderImpl('StackLayout') as unknown as StackLayoutBuilder;
}

export namespace StackLayout {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'StackLayout',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'StackLayout',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('StackLayout', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('StackLayout', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('StackLayout', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('StackLayout', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'StackLayout',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('StackLayout', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'StackLayout',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SizePolicy {
    export const SizePolicyImplicit = createEnumToken(
      'StackLayout',
      'SizePolicy',
      'SizePolicyImplicit',
    );
    export const SizePolicyExplicit = createEnumToken(
      'StackLayout',
      'SizePolicy',
      'SizePolicyExplicit',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('StackLayout', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('StackLayout', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('StackLayout', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('StackLayout', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('StackLayout', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('StackLayout', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('StackLayout', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('StackLayout', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('StackLayout', 'TransformOrigin', 'BottomRight');
  }
}
