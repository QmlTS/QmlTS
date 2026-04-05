// AUTO-GENERATED — DO NOT EDIT
// Type: RowLayout
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
export interface RowLayoutBuilder {
  id(id: string): RowLayoutBuilder;
  child(obj: QmlObjectBuilder): RowLayoutBuilder;

  activeFocusOnTab(value: boolean): RowLayoutBuilder;
  activeFocusOnTabBind(expr: string): RowLayoutBuilder;
  antialiasing(value: boolean): RowLayoutBuilder;
  antialiasingBind(expr: string): RowLayoutBuilder;
  baselineOffset(value: number): RowLayoutBuilder;
  baselineOffsetBind(expr: string): RowLayoutBuilder;
  clip(value: boolean): RowLayoutBuilder;
  clipBind(expr: string): RowLayoutBuilder;
  containmentMask(value: QtObjectBuilder): RowLayoutBuilder;
  containmentMaskBind(expr: string): RowLayoutBuilder;
  enabled(value: boolean): RowLayoutBuilder;
  enabledBind(expr: string): RowLayoutBuilder;
  focus(value: boolean): RowLayoutBuilder;
  focusBind(expr: string): RowLayoutBuilder;
  focusPolicy(value: QmlValue): RowLayoutBuilder;
  focusPolicyBind(expr: string): RowLayoutBuilder;
  height(value: number): RowLayoutBuilder;
  heightBind(expr: string): RowLayoutBuilder;
  implicitHeight(value: number): RowLayoutBuilder;
  implicitHeightBind(expr: string): RowLayoutBuilder;
  implicitWidth(value: number): RowLayoutBuilder;
  implicitWidthBind(expr: string): RowLayoutBuilder;
  layoutDirection(value: QmlValue): RowLayoutBuilder;
  layoutDirectionBind(expr: string): RowLayoutBuilder;
  objectName(value: string): RowLayoutBuilder;
  objectNameBind(expr: string): RowLayoutBuilder;
  opacity(value: number): RowLayoutBuilder;
  opacityBind(expr: string): RowLayoutBuilder;
  palette(value: PaletteBuilder): RowLayoutBuilder;
  paletteBind(expr: string): RowLayoutBuilder;
  parent(value: ItemBuilder): RowLayoutBuilder;
  parentBind(expr: string): RowLayoutBuilder;
  rotation(value: number): RowLayoutBuilder;
  rotationBind(expr: string): RowLayoutBuilder;
  scale(value: number): RowLayoutBuilder;
  scaleBind(expr: string): RowLayoutBuilder;
  smooth(value: boolean): RowLayoutBuilder;
  smoothBind(expr: string): RowLayoutBuilder;
  spacing(value: number): RowLayoutBuilder;
  spacingBind(expr: string): RowLayoutBuilder;
  state(value: string): RowLayoutBuilder;
  stateBind(expr: string): RowLayoutBuilder;
  transformOrigin(value: QmlValue): RowLayoutBuilder;
  transformOriginBind(expr: string): RowLayoutBuilder;
  uniformCellSizes(value: boolean): RowLayoutBuilder;
  uniformCellSizesBind(expr: string): RowLayoutBuilder;
  visible(value: boolean): RowLayoutBuilder;
  visibleBind(expr: string): RowLayoutBuilder;
  width(value: number): RowLayoutBuilder;
  widthBind(expr: string): RowLayoutBuilder;
  x(value: number): RowLayoutBuilder;
  xBind(expr: string): RowLayoutBuilder;
  y(value: number): RowLayoutBuilder;
  yBind(expr: string): RowLayoutBuilder;
  z(value: number): RowLayoutBuilder;
  zBind(expr: string): RowLayoutBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): RowLayoutBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): RowLayoutBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): RowLayoutBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): RowLayoutBuilder;
  onChildrenChanged(handler: () => void): RowLayoutBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): RowLayoutBuilder;
  onClipChanged(handler: (arg0: boolean) => void): RowLayoutBuilder;
  onContainmentMaskChanged(handler: () => void): RowLayoutBuilder;
  onEnabledChanged(handler: () => void): RowLayoutBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): RowLayoutBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): RowLayoutBuilder;
  onHeightChanged(handler: () => void): RowLayoutBuilder;
  onImplicitHeightChanged(handler: () => void): RowLayoutBuilder;
  onImplicitWidthChanged(handler: () => void): RowLayoutBuilder;
  onLayoutDirectionChanged(handler: () => void): RowLayoutBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RowLayoutBuilder;
  onOpacityChanged(handler: () => void): RowLayoutBuilder;
  onPaletteChanged(handler: () => void): RowLayoutBuilder;
  onPaletteCreated(handler: () => void): RowLayoutBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): RowLayoutBuilder;
  onRotationChanged(handler: () => void): RowLayoutBuilder;
  onScaleChanged(handler: () => void): RowLayoutBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): RowLayoutBuilder;
  onSpacingChanged(handler: () => void): RowLayoutBuilder;
  onStateChanged(handler: (arg0: string) => void): RowLayoutBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): RowLayoutBuilder;
  onUniformCellSizesChanged(handler: () => void): RowLayoutBuilder;
  onVisibleChanged(handler: () => void): RowLayoutBuilder;
  onVisibleChildrenChanged(handler: () => void): RowLayoutBuilder;
  onWidthChanged(handler: () => void): RowLayoutBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): RowLayoutBuilder;
  onXChanged(handler: () => void): RowLayoutBuilder;
  onYChanged(handler: () => void): RowLayoutBuilder;
  onZChanged(handler: () => void): RowLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RowLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): RowLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): RowLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): RowLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): RowLayoutBuilder;
}

export function RowLayout(): RowLayoutBuilder {
  return new DslBuilderImpl('RowLayout') as unknown as RowLayoutBuilder;
}

export namespace RowLayout {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'RowLayout',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'RowLayout',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('RowLayout', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RowLayout', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RowLayout', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RowLayout', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'RowLayout',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('RowLayout', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'RowLayout',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SizePolicy {
    export const SizePolicyImplicit = createEnumToken(
      'RowLayout',
      'SizePolicy',
      'SizePolicyImplicit',
    );
    export const SizePolicyExplicit = createEnumToken(
      'RowLayout',
      'SizePolicy',
      'SizePolicyExplicit',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RowLayout', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RowLayout', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RowLayout', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RowLayout', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RowLayout', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RowLayout', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RowLayout', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RowLayout', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RowLayout', 'TransformOrigin', 'BottomRight');
  }
}
