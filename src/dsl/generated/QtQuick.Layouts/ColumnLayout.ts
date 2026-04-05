// AUTO-GENERATED — DO NOT EDIT
// Type: ColumnLayout
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
export interface ColumnLayoutBuilder {
  id(id: string): ColumnLayoutBuilder;
  child(obj: QmlObjectBuilder): ColumnLayoutBuilder;

  activeFocusOnTab(value: boolean): ColumnLayoutBuilder;
  activeFocusOnTabBind(expr: string): ColumnLayoutBuilder;
  antialiasing(value: boolean): ColumnLayoutBuilder;
  antialiasingBind(expr: string): ColumnLayoutBuilder;
  baselineOffset(value: number): ColumnLayoutBuilder;
  baselineOffsetBind(expr: string): ColumnLayoutBuilder;
  clip(value: boolean): ColumnLayoutBuilder;
  clipBind(expr: string): ColumnLayoutBuilder;
  containmentMask(value: QtObjectBuilder): ColumnLayoutBuilder;
  containmentMaskBind(expr: string): ColumnLayoutBuilder;
  enabled(value: boolean): ColumnLayoutBuilder;
  enabledBind(expr: string): ColumnLayoutBuilder;
  focus(value: boolean): ColumnLayoutBuilder;
  focusBind(expr: string): ColumnLayoutBuilder;
  focusPolicy(value: QmlValue): ColumnLayoutBuilder;
  focusPolicyBind(expr: string): ColumnLayoutBuilder;
  height(value: number): ColumnLayoutBuilder;
  heightBind(expr: string): ColumnLayoutBuilder;
  implicitHeight(value: number): ColumnLayoutBuilder;
  implicitHeightBind(expr: string): ColumnLayoutBuilder;
  implicitWidth(value: number): ColumnLayoutBuilder;
  implicitWidthBind(expr: string): ColumnLayoutBuilder;
  layoutDirection(value: QmlValue): ColumnLayoutBuilder;
  layoutDirectionBind(expr: string): ColumnLayoutBuilder;
  objectName(value: string): ColumnLayoutBuilder;
  objectNameBind(expr: string): ColumnLayoutBuilder;
  opacity(value: number): ColumnLayoutBuilder;
  opacityBind(expr: string): ColumnLayoutBuilder;
  palette(value: PaletteBuilder): ColumnLayoutBuilder;
  paletteBind(expr: string): ColumnLayoutBuilder;
  parent(value: ItemBuilder): ColumnLayoutBuilder;
  parentBind(expr: string): ColumnLayoutBuilder;
  rotation(value: number): ColumnLayoutBuilder;
  rotationBind(expr: string): ColumnLayoutBuilder;
  scale(value: number): ColumnLayoutBuilder;
  scaleBind(expr: string): ColumnLayoutBuilder;
  smooth(value: boolean): ColumnLayoutBuilder;
  smoothBind(expr: string): ColumnLayoutBuilder;
  spacing(value: number): ColumnLayoutBuilder;
  spacingBind(expr: string): ColumnLayoutBuilder;
  state(value: string): ColumnLayoutBuilder;
  stateBind(expr: string): ColumnLayoutBuilder;
  transformOrigin(value: QmlValue): ColumnLayoutBuilder;
  transformOriginBind(expr: string): ColumnLayoutBuilder;
  uniformCellSizes(value: boolean): ColumnLayoutBuilder;
  uniformCellSizesBind(expr: string): ColumnLayoutBuilder;
  visible(value: boolean): ColumnLayoutBuilder;
  visibleBind(expr: string): ColumnLayoutBuilder;
  width(value: number): ColumnLayoutBuilder;
  widthBind(expr: string): ColumnLayoutBuilder;
  x(value: number): ColumnLayoutBuilder;
  xBind(expr: string): ColumnLayoutBuilder;
  y(value: number): ColumnLayoutBuilder;
  yBind(expr: string): ColumnLayoutBuilder;
  z(value: number): ColumnLayoutBuilder;
  zBind(expr: string): ColumnLayoutBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ColumnLayoutBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ColumnLayoutBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ColumnLayoutBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): ColumnLayoutBuilder;
  onChildrenChanged(handler: () => void): ColumnLayoutBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ColumnLayoutBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ColumnLayoutBuilder;
  onContainmentMaskChanged(handler: () => void): ColumnLayoutBuilder;
  onEnabledChanged(handler: () => void): ColumnLayoutBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ColumnLayoutBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ColumnLayoutBuilder;
  onHeightChanged(handler: () => void): ColumnLayoutBuilder;
  onImplicitHeightChanged(handler: () => void): ColumnLayoutBuilder;
  onImplicitWidthChanged(handler: () => void): ColumnLayoutBuilder;
  onLayoutDirectionChanged(handler: () => void): ColumnLayoutBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ColumnLayoutBuilder;
  onOpacityChanged(handler: () => void): ColumnLayoutBuilder;
  onPaletteChanged(handler: () => void): ColumnLayoutBuilder;
  onPaletteCreated(handler: () => void): ColumnLayoutBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ColumnLayoutBuilder;
  onRotationChanged(handler: () => void): ColumnLayoutBuilder;
  onScaleChanged(handler: () => void): ColumnLayoutBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ColumnLayoutBuilder;
  onSpacingChanged(handler: () => void): ColumnLayoutBuilder;
  onStateChanged(handler: (arg0: string) => void): ColumnLayoutBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ColumnLayoutBuilder;
  onUniformCellSizesChanged(handler: () => void): ColumnLayoutBuilder;
  onVisibleChanged(handler: () => void): ColumnLayoutBuilder;
  onVisibleChildrenChanged(handler: () => void): ColumnLayoutBuilder;
  onWidthChanged(handler: () => void): ColumnLayoutBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ColumnLayoutBuilder;
  onXChanged(handler: () => void): ColumnLayoutBuilder;
  onYChanged(handler: () => void): ColumnLayoutBuilder;
  onZChanged(handler: () => void): ColumnLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ColumnLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): ColumnLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): ColumnLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): ColumnLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): ColumnLayoutBuilder;
}

export function ColumnLayout(): ColumnLayoutBuilder {
  return new DslBuilderImpl('ColumnLayout') as unknown as ColumnLayoutBuilder;
}

export namespace ColumnLayout {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ColumnLayout',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ColumnLayout',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ColumnLayout', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ColumnLayout', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ColumnLayout', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ColumnLayout', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ColumnLayout',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ColumnLayout', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ColumnLayout',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SizePolicy {
    export const SizePolicyImplicit = createEnumToken(
      'ColumnLayout',
      'SizePolicy',
      'SizePolicyImplicit',
    );
    export const SizePolicyExplicit = createEnumToken(
      'ColumnLayout',
      'SizePolicy',
      'SizePolicyExplicit',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ColumnLayout', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ColumnLayout', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ColumnLayout', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ColumnLayout', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ColumnLayout', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ColumnLayout', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ColumnLayout', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ColumnLayout', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ColumnLayout', 'TransformOrigin', 'BottomRight');
  }
}
