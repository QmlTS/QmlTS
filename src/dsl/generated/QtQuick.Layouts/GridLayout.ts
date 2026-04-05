// AUTO-GENERATED — DO NOT EDIT
// Type: GridLayout
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
export interface GridLayoutBuilder {
  id(id: string): GridLayoutBuilder;
  child(obj: QmlObjectBuilder): GridLayoutBuilder;

  activeFocusOnTab(value: boolean): GridLayoutBuilder;
  activeFocusOnTabBind(expr: string): GridLayoutBuilder;
  antialiasing(value: boolean): GridLayoutBuilder;
  antialiasingBind(expr: string): GridLayoutBuilder;
  baselineOffset(value: number): GridLayoutBuilder;
  baselineOffsetBind(expr: string): GridLayoutBuilder;
  clip(value: boolean): GridLayoutBuilder;
  clipBind(expr: string): GridLayoutBuilder;
  columnSpacing(value: number): GridLayoutBuilder;
  columnSpacingBind(expr: string): GridLayoutBuilder;
  columns(value: number): GridLayoutBuilder;
  columnsBind(expr: string): GridLayoutBuilder;
  containmentMask(value: QtObjectBuilder): GridLayoutBuilder;
  containmentMaskBind(expr: string): GridLayoutBuilder;
  enabled(value: boolean): GridLayoutBuilder;
  enabledBind(expr: string): GridLayoutBuilder;
  flow(value: QmlValue): GridLayoutBuilder;
  flowBind(expr: string): GridLayoutBuilder;
  focus(value: boolean): GridLayoutBuilder;
  focusBind(expr: string): GridLayoutBuilder;
  focusPolicy(value: QmlValue): GridLayoutBuilder;
  focusPolicyBind(expr: string): GridLayoutBuilder;
  height(value: number): GridLayoutBuilder;
  heightBind(expr: string): GridLayoutBuilder;
  implicitHeight(value: number): GridLayoutBuilder;
  implicitHeightBind(expr: string): GridLayoutBuilder;
  implicitWidth(value: number): GridLayoutBuilder;
  implicitWidthBind(expr: string): GridLayoutBuilder;
  layoutDirection(value: QmlValue): GridLayoutBuilder;
  layoutDirectionBind(expr: string): GridLayoutBuilder;
  objectName(value: string): GridLayoutBuilder;
  objectNameBind(expr: string): GridLayoutBuilder;
  opacity(value: number): GridLayoutBuilder;
  opacityBind(expr: string): GridLayoutBuilder;
  palette(value: PaletteBuilder): GridLayoutBuilder;
  paletteBind(expr: string): GridLayoutBuilder;
  parent(value: ItemBuilder): GridLayoutBuilder;
  parentBind(expr: string): GridLayoutBuilder;
  rotation(value: number): GridLayoutBuilder;
  rotationBind(expr: string): GridLayoutBuilder;
  rowSpacing(value: number): GridLayoutBuilder;
  rowSpacingBind(expr: string): GridLayoutBuilder;
  rows(value: number): GridLayoutBuilder;
  rowsBind(expr: string): GridLayoutBuilder;
  scale(value: number): GridLayoutBuilder;
  scaleBind(expr: string): GridLayoutBuilder;
  smooth(value: boolean): GridLayoutBuilder;
  smoothBind(expr: string): GridLayoutBuilder;
  state(value: string): GridLayoutBuilder;
  stateBind(expr: string): GridLayoutBuilder;
  transformOrigin(value: QmlValue): GridLayoutBuilder;
  transformOriginBind(expr: string): GridLayoutBuilder;
  uniformCellHeights(value: boolean): GridLayoutBuilder;
  uniformCellHeightsBind(expr: string): GridLayoutBuilder;
  uniformCellWidths(value: boolean): GridLayoutBuilder;
  uniformCellWidthsBind(expr: string): GridLayoutBuilder;
  visible(value: boolean): GridLayoutBuilder;
  visibleBind(expr: string): GridLayoutBuilder;
  width(value: number): GridLayoutBuilder;
  widthBind(expr: string): GridLayoutBuilder;
  x(value: number): GridLayoutBuilder;
  xBind(expr: string): GridLayoutBuilder;
  y(value: number): GridLayoutBuilder;
  yBind(expr: string): GridLayoutBuilder;
  z(value: number): GridLayoutBuilder;
  zBind(expr: string): GridLayoutBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): GridLayoutBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): GridLayoutBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): GridLayoutBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): GridLayoutBuilder;
  onChildrenChanged(handler: () => void): GridLayoutBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): GridLayoutBuilder;
  onClipChanged(handler: (arg0: boolean) => void): GridLayoutBuilder;
  onColumnSpacingChanged(handler: () => void): GridLayoutBuilder;
  onColumnsChanged(handler: () => void): GridLayoutBuilder;
  onContainmentMaskChanged(handler: () => void): GridLayoutBuilder;
  onEnabledChanged(handler: () => void): GridLayoutBuilder;
  onFlowChanged(handler: () => void): GridLayoutBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): GridLayoutBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): GridLayoutBuilder;
  onHeightChanged(handler: () => void): GridLayoutBuilder;
  onImplicitHeightChanged(handler: () => void): GridLayoutBuilder;
  onImplicitWidthChanged(handler: () => void): GridLayoutBuilder;
  onLayoutDirectionChanged(handler: () => void): GridLayoutBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GridLayoutBuilder;
  onOpacityChanged(handler: () => void): GridLayoutBuilder;
  onPaletteChanged(handler: () => void): GridLayoutBuilder;
  onPaletteCreated(handler: () => void): GridLayoutBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): GridLayoutBuilder;
  onRotationChanged(handler: () => void): GridLayoutBuilder;
  onRowSpacingChanged(handler: () => void): GridLayoutBuilder;
  onRowsChanged(handler: () => void): GridLayoutBuilder;
  onScaleChanged(handler: () => void): GridLayoutBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): GridLayoutBuilder;
  onStateChanged(handler: (arg0: string) => void): GridLayoutBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): GridLayoutBuilder;
  onUniformCellHeightsChanged(handler: () => void): GridLayoutBuilder;
  onUniformCellWidthsChanged(handler: () => void): GridLayoutBuilder;
  onVisibleChanged(handler: () => void): GridLayoutBuilder;
  onVisibleChildrenChanged(handler: () => void): GridLayoutBuilder;
  onWidthChanged(handler: () => void): GridLayoutBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): GridLayoutBuilder;
  onXChanged(handler: () => void): GridLayoutBuilder;
  onYChanged(handler: () => void): GridLayoutBuilder;
  onZChanged(handler: () => void): GridLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GridLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): GridLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): GridLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): GridLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): GridLayoutBuilder;
}

export function GridLayout(): GridLayoutBuilder {
  return new DslBuilderImpl('GridLayout') as unknown as GridLayoutBuilder;
}

export namespace GridLayout {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'GridLayout',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'GridLayout',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('GridLayout', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GridLayout', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GridLayout', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GridLayout', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'GridLayout',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace Flow {
    export const LeftToRight = createEnumToken('GridLayout', 'Flow', 'LeftToRight');
    export const TopToBottom = createEnumToken('GridLayout', 'Flow', 'TopToBottom');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('GridLayout', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'GridLayout',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SizePolicy {
    export const SizePolicyImplicit = createEnumToken(
      'GridLayout',
      'SizePolicy',
      'SizePolicyImplicit',
    );
    export const SizePolicyExplicit = createEnumToken(
      'GridLayout',
      'SizePolicy',
      'SizePolicyExplicit',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('GridLayout', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('GridLayout', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('GridLayout', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('GridLayout', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('GridLayout', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('GridLayout', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('GridLayout', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('GridLayout', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('GridLayout', 'TransformOrigin', 'BottomRight');
  }
}
