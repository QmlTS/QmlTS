// AUTO-GENERATED — DO NOT EDIT
// Type: FlexboxLayout
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
export interface FlexboxLayoutBuilder {
  id(id: string): FlexboxLayoutBuilder;
  child(obj: QmlObjectBuilder): FlexboxLayoutBuilder;

  activeFocusOnTab(value: boolean): FlexboxLayoutBuilder;
  activeFocusOnTabBind(expr: string): FlexboxLayoutBuilder;
  alignContent(value: QmlValue): FlexboxLayoutBuilder;
  alignContentBind(expr: string): FlexboxLayoutBuilder;
  alignItems(value: QmlValue): FlexboxLayoutBuilder;
  alignItemsBind(expr: string): FlexboxLayoutBuilder;
  antialiasing(value: boolean): FlexboxLayoutBuilder;
  antialiasingBind(expr: string): FlexboxLayoutBuilder;
  baselineOffset(value: number): FlexboxLayoutBuilder;
  baselineOffsetBind(expr: string): FlexboxLayoutBuilder;
  clip(value: boolean): FlexboxLayoutBuilder;
  clipBind(expr: string): FlexboxLayoutBuilder;
  columnGap(value: number): FlexboxLayoutBuilder;
  columnGapBind(expr: string): FlexboxLayoutBuilder;
  containmentMask(value: QtObjectBuilder): FlexboxLayoutBuilder;
  containmentMaskBind(expr: string): FlexboxLayoutBuilder;
  direction(value: QmlValue): FlexboxLayoutBuilder;
  directionBind(expr: string): FlexboxLayoutBuilder;
  enabled(value: boolean): FlexboxLayoutBuilder;
  enabledBind(expr: string): FlexboxLayoutBuilder;
  focus(value: boolean): FlexboxLayoutBuilder;
  focusBind(expr: string): FlexboxLayoutBuilder;
  focusPolicy(value: QmlValue): FlexboxLayoutBuilder;
  focusPolicyBind(expr: string): FlexboxLayoutBuilder;
  gap(value: number): FlexboxLayoutBuilder;
  gapBind(expr: string): FlexboxLayoutBuilder;
  height(value: number): FlexboxLayoutBuilder;
  heightBind(expr: string): FlexboxLayoutBuilder;
  implicitHeight(value: number): FlexboxLayoutBuilder;
  implicitHeightBind(expr: string): FlexboxLayoutBuilder;
  implicitWidth(value: number): FlexboxLayoutBuilder;
  implicitWidthBind(expr: string): FlexboxLayoutBuilder;
  justifyContent(value: QmlValue): FlexboxLayoutBuilder;
  justifyContentBind(expr: string): FlexboxLayoutBuilder;
  objectName(value: string): FlexboxLayoutBuilder;
  objectNameBind(expr: string): FlexboxLayoutBuilder;
  opacity(value: number): FlexboxLayoutBuilder;
  opacityBind(expr: string): FlexboxLayoutBuilder;
  palette(value: PaletteBuilder): FlexboxLayoutBuilder;
  paletteBind(expr: string): FlexboxLayoutBuilder;
  parent(value: ItemBuilder): FlexboxLayoutBuilder;
  parentBind(expr: string): FlexboxLayoutBuilder;
  rotation(value: number): FlexboxLayoutBuilder;
  rotationBind(expr: string): FlexboxLayoutBuilder;
  rowGap(value: number): FlexboxLayoutBuilder;
  rowGapBind(expr: string): FlexboxLayoutBuilder;
  scale(value: number): FlexboxLayoutBuilder;
  scaleBind(expr: string): FlexboxLayoutBuilder;
  smooth(value: boolean): FlexboxLayoutBuilder;
  smoothBind(expr: string): FlexboxLayoutBuilder;
  state(value: string): FlexboxLayoutBuilder;
  stateBind(expr: string): FlexboxLayoutBuilder;
  transformOrigin(value: QmlValue): FlexboxLayoutBuilder;
  transformOriginBind(expr: string): FlexboxLayoutBuilder;
  visible(value: boolean): FlexboxLayoutBuilder;
  visibleBind(expr: string): FlexboxLayoutBuilder;
  width(value: number): FlexboxLayoutBuilder;
  widthBind(expr: string): FlexboxLayoutBuilder;
  wrap(value: QmlValue): FlexboxLayoutBuilder;
  wrapBind(expr: string): FlexboxLayoutBuilder;
  x(value: number): FlexboxLayoutBuilder;
  xBind(expr: string): FlexboxLayoutBuilder;
  y(value: number): FlexboxLayoutBuilder;
  yBind(expr: string): FlexboxLayoutBuilder;
  z(value: number): FlexboxLayoutBuilder;
  zBind(expr: string): FlexboxLayoutBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): FlexboxLayoutBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): FlexboxLayoutBuilder;
  onAlignContentChanged(handler: () => void): FlexboxLayoutBuilder;
  onAlignItemsChanged(handler: () => void): FlexboxLayoutBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): FlexboxLayoutBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): FlexboxLayoutBuilder;
  onChildrenChanged(handler: () => void): FlexboxLayoutBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): FlexboxLayoutBuilder;
  onClipChanged(handler: (arg0: boolean) => void): FlexboxLayoutBuilder;
  onColumnGapChanged(handler: () => void): FlexboxLayoutBuilder;
  onContainmentMaskChanged(handler: () => void): FlexboxLayoutBuilder;
  onCountChanged(handler: () => void): FlexboxLayoutBuilder;
  onDirectionChanged(handler: () => void): FlexboxLayoutBuilder;
  onEnabledChanged(handler: () => void): FlexboxLayoutBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): FlexboxLayoutBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): FlexboxLayoutBuilder;
  onGapChanged(handler: () => void): FlexboxLayoutBuilder;
  onHeightChanged(handler: () => void): FlexboxLayoutBuilder;
  onImplicitHeightChanged(handler: () => void): FlexboxLayoutBuilder;
  onImplicitWidthChanged(handler: () => void): FlexboxLayoutBuilder;
  onJustifyContentChanged(handler: () => void): FlexboxLayoutBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FlexboxLayoutBuilder;
  onOpacityChanged(handler: () => void): FlexboxLayoutBuilder;
  onPaletteChanged(handler: () => void): FlexboxLayoutBuilder;
  onPaletteCreated(handler: () => void): FlexboxLayoutBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): FlexboxLayoutBuilder;
  onRotationChanged(handler: () => void): FlexboxLayoutBuilder;
  onRowGapChanged(handler: () => void): FlexboxLayoutBuilder;
  onScaleChanged(handler: () => void): FlexboxLayoutBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): FlexboxLayoutBuilder;
  onStateChanged(handler: (arg0: string) => void): FlexboxLayoutBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): FlexboxLayoutBuilder;
  onVisibleChanged(handler: () => void): FlexboxLayoutBuilder;
  onVisibleChildrenChanged(handler: () => void): FlexboxLayoutBuilder;
  onWidthChanged(handler: () => void): FlexboxLayoutBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): FlexboxLayoutBuilder;
  onWrapChanged(handler: () => void): FlexboxLayoutBuilder;
  onXChanged(handler: () => void): FlexboxLayoutBuilder;
  onYChanged(handler: () => void): FlexboxLayoutBuilder;
  onZChanged(handler: () => void): FlexboxLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FlexboxLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): FlexboxLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): FlexboxLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): FlexboxLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): FlexboxLayoutBuilder;
}

export function FlexboxLayout(): FlexboxLayoutBuilder {
  return new DslBuilderImpl('FlexboxLayout') as unknown as FlexboxLayoutBuilder;
}

export namespace FlexboxLayout {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'FlexboxLayout',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'FlexboxLayout',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('FlexboxLayout', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('FlexboxLayout', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('FlexboxLayout', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('FlexboxLayout', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'FlexboxLayout',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace FlexboxAlignment {
    export const AlignAuto = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignAuto');
    export const AlignStart = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignStart');
    export const AlignCenter = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignCenter');
    export const AlignEnd = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignEnd');
    export const AlignStretch = createEnumToken(
      'FlexboxLayout',
      'FlexboxAlignment',
      'AlignStretch',
    );
    export const AlignBaseline = createEnumToken(
      'FlexboxLayout',
      'FlexboxAlignment',
      'AlignBaseline',
    );
    export const AlignSpaceBetween = createEnumToken(
      'FlexboxLayout',
      'FlexboxAlignment',
      'AlignSpaceBetween',
    );
    export const AlignSpaceAround = createEnumToken(
      'FlexboxLayout',
      'FlexboxAlignment',
      'AlignSpaceAround',
    );
    export const AlignSpaceEvenly = createEnumToken(
      'FlexboxLayout',
      'FlexboxAlignment',
      'AlignSpaceEvenly',
    );
  }
  export namespace FlexboxDirection {
    export const Column = createEnumToken('FlexboxLayout', 'FlexboxDirection', 'Column');
    export const ColumnReverse = createEnumToken(
      'FlexboxLayout',
      'FlexboxDirection',
      'ColumnReverse',
    );
    export const Row = createEnumToken('FlexboxLayout', 'FlexboxDirection', 'Row');
    export const RowReverse = createEnumToken('FlexboxLayout', 'FlexboxDirection', 'RowReverse');
  }
  export namespace FlexboxEdge {
    export const EdgeLeft = createEnumToken('FlexboxLayout', 'FlexboxEdge', 'EdgeLeft');
    export const EdgeRight = createEnumToken('FlexboxLayout', 'FlexboxEdge', 'EdgeRight');
    export const EdgeTop = createEnumToken('FlexboxLayout', 'FlexboxEdge', 'EdgeTop');
    export const EdgeBottom = createEnumToken('FlexboxLayout', 'FlexboxEdge', 'EdgeBottom');
    export const EdgeAll = createEnumToken('FlexboxLayout', 'FlexboxEdge', 'EdgeAll');
    export const EdgeMax = createEnumToken('FlexboxLayout', 'FlexboxEdge', 'EdgeMax');
  }
  export namespace FlexboxGap {
    export const GapRow = createEnumToken('FlexboxLayout', 'FlexboxGap', 'GapRow');
    export const GapColumn = createEnumToken('FlexboxLayout', 'FlexboxGap', 'GapColumn');
    export const GapAll = createEnumToken('FlexboxLayout', 'FlexboxGap', 'GapAll');
    export const GapMax = createEnumToken('FlexboxLayout', 'FlexboxGap', 'GapMax');
  }
  export namespace FlexboxJustify {
    export const JustifyStart = createEnumToken('FlexboxLayout', 'FlexboxJustify', 'JustifyStart');
    export const JustifyCenter = createEnumToken(
      'FlexboxLayout',
      'FlexboxJustify',
      'JustifyCenter',
    );
    export const JustifyEnd = createEnumToken('FlexboxLayout', 'FlexboxJustify', 'JustifyEnd');
    export const JustifySpaceBetween = createEnumToken(
      'FlexboxLayout',
      'FlexboxJustify',
      'JustifySpaceBetween',
    );
    export const JustifySpaceAround = createEnumToken(
      'FlexboxLayout',
      'FlexboxJustify',
      'JustifySpaceAround',
    );
    export const JustifySpaceEvenly = createEnumToken(
      'FlexboxLayout',
      'FlexboxJustify',
      'JustifySpaceEvenly',
    );
  }
  export namespace FlexboxWrap {
    export const NoWrap = createEnumToken('FlexboxLayout', 'FlexboxWrap', 'NoWrap');
    export const Wrap = createEnumToken('FlexboxLayout', 'FlexboxWrap', 'Wrap');
    export const WrapReverse = createEnumToken('FlexboxLayout', 'FlexboxWrap', 'WrapReverse');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'FlexboxLayout',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SizePolicy {
    export const SizePolicyImplicit = createEnumToken(
      'FlexboxLayout',
      'SizePolicy',
      'SizePolicyImplicit',
    );
    export const SizePolicyExplicit = createEnumToken(
      'FlexboxLayout',
      'SizePolicy',
      'SizePolicyExplicit',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('FlexboxLayout', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('FlexboxLayout', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('FlexboxLayout', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('FlexboxLayout', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('FlexboxLayout', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('FlexboxLayout', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('FlexboxLayout', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('FlexboxLayout', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('FlexboxLayout', 'TransformOrigin', 'BottomRight');
  }
}
