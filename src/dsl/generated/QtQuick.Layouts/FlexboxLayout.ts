// AUTO-GENERATED — DO NOT EDIT
// Type: FlexboxLayout
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { FlexboxLayoutAttachedBuilder } from './QQuickFlexboxLayoutAttached.js';
import type { LayoutAttachedBuilder } from './QQuickLayoutAttached.js';
import type { StackLayoutAttachedBuilder } from './QQuickStackLayoutAttached.js';
export interface FlexboxLayoutBuilder {
  id(id: string): FlexboxLayoutBuilder;
  child(obj: QmlObjectBuilder): FlexboxLayoutBuilder;

  activeFocusOnTab(value: boolean): FlexboxLayoutBuilder;
  activeFocusOnTabBind(expr: string): FlexboxLayoutBuilder;
  alignContent(value: QmlEnumToken): FlexboxLayoutBuilder;
  alignContentBind(expr: string): FlexboxLayoutBuilder;
  alignItems(value: QmlEnumToken): FlexboxLayoutBuilder;
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
  direction(value: QmlEnumToken): FlexboxLayoutBuilder;
  directionBind(expr: string): FlexboxLayoutBuilder;
  enabled(value: boolean): FlexboxLayoutBuilder;
  enabledBind(expr: string): FlexboxLayoutBuilder;
  focus(value: boolean): FlexboxLayoutBuilder;
  focusBind(expr: string): FlexboxLayoutBuilder;
  focusPolicy(value: QmlEnumToken): FlexboxLayoutBuilder;
  focusPolicyBind(expr: string): FlexboxLayoutBuilder;
  gap(value: number): FlexboxLayoutBuilder;
  gapBind(expr: string): FlexboxLayoutBuilder;
  height(value: number): FlexboxLayoutBuilder;
  heightBind(expr: string): FlexboxLayoutBuilder;
  implicitHeight(value: number): FlexboxLayoutBuilder;
  implicitHeightBind(expr: string): FlexboxLayoutBuilder;
  implicitWidth(value: number): FlexboxLayoutBuilder;
  implicitWidthBind(expr: string): FlexboxLayoutBuilder;
  justifyContent(value: QmlEnumToken): FlexboxLayoutBuilder;
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
  transformOrigin(value: QmlEnumToken): FlexboxLayoutBuilder;
  transformOriginBind(expr: string): FlexboxLayoutBuilder;
  visible(value: boolean): FlexboxLayoutBuilder;
  visibleBind(expr: string): FlexboxLayoutBuilder;
  width(value: number): FlexboxLayoutBuilder;
  widthBind(expr: string): FlexboxLayoutBuilder;
  wrap(value: QmlEnumToken): FlexboxLayoutBuilder;
  wrapBind(expr: string): FlexboxLayoutBuilder;
  x(value: number): FlexboxLayoutBuilder;
  xBind(expr: string): FlexboxLayoutBuilder;
  y(value: number): FlexboxLayoutBuilder;
  yBind(expr: string): FlexboxLayoutBuilder;
  z(value: number): FlexboxLayoutBuilder;
  zBind(expr: string): FlexboxLayoutBuilder;
  onActiveFocusChanged(body: string): FlexboxLayoutBuilder;
  onActiveFocusOnTabChanged(body: string): FlexboxLayoutBuilder;
  onAlignContentChanged(body: string): FlexboxLayoutBuilder;
  onAlignItemsChanged(body: string): FlexboxLayoutBuilder;
  onAntialiasingChanged(body: string): FlexboxLayoutBuilder;
  onBaselineOffsetChanged(body: string): FlexboxLayoutBuilder;
  onChildrenChanged(body: string): FlexboxLayoutBuilder;
  onChildrenRectChanged(body: string): FlexboxLayoutBuilder;
  onClipChanged(body: string): FlexboxLayoutBuilder;
  onColumnGapChanged(body: string): FlexboxLayoutBuilder;
  onContainmentMaskChanged(body: string): FlexboxLayoutBuilder;
  onCountChanged(body: string): FlexboxLayoutBuilder;
  onDirectionChanged(body: string): FlexboxLayoutBuilder;
  onEnabledChanged(body: string): FlexboxLayoutBuilder;
  onFocusChanged(body: string): FlexboxLayoutBuilder;
  onFocusPolicyChanged(body: string): FlexboxLayoutBuilder;
  onGapChanged(body: string): FlexboxLayoutBuilder;
  onHeightChanged(body: string): FlexboxLayoutBuilder;
  onImplicitHeightChanged(body: string): FlexboxLayoutBuilder;
  onImplicitWidthChanged(body: string): FlexboxLayoutBuilder;
  onJustifyContentChanged(body: string): FlexboxLayoutBuilder;
  onObjectNameChanged(body: string): FlexboxLayoutBuilder;
  onOpacityChanged(body: string): FlexboxLayoutBuilder;
  onPaletteChanged(body: string): FlexboxLayoutBuilder;
  onPaletteCreated(body: string): FlexboxLayoutBuilder;
  onParentChanged(body: string): FlexboxLayoutBuilder;
  onRotationChanged(body: string): FlexboxLayoutBuilder;
  onRowGapChanged(body: string): FlexboxLayoutBuilder;
  onScaleChanged(body: string): FlexboxLayoutBuilder;
  onSmoothChanged(body: string): FlexboxLayoutBuilder;
  onStateChanged(body: string): FlexboxLayoutBuilder;
  onTransformOriginChanged(body: string): FlexboxLayoutBuilder;
  onVisibleChanged(body: string): FlexboxLayoutBuilder;
  onVisibleChildrenChanged(body: string): FlexboxLayoutBuilder;
  onWidthChanged(body: string): FlexboxLayoutBuilder;
  onWindowChanged(body: string): FlexboxLayoutBuilder;
  onWrapChanged(body: string): FlexboxLayoutBuilder;
  onXChanged(body: string): FlexboxLayoutBuilder;
  onYChanged(body: string): FlexboxLayoutBuilder;
  onZChanged(body: string): FlexboxLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FlexboxLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): FlexboxLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): FlexboxLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): FlexboxLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): FlexboxLayoutBuilder;
}

const FLEXBOXLAYOUT_META: TypeMetadata = {
  typeName: 'FlexboxLayout',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'alignContent', hasValue: true, hasBinding: true },
    { name: 'alignItems', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'columnGap', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'gap', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'justifyContent', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rowGap', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrap', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAlignContentChanged', paramCount: 0 },
    { handlerName: 'onAlignItemsChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColumnGapChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDirectionChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGapChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onJustifyContentChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRowGapChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'anchors',
      groupName: 'anchors',
      properties: [
        { name: 'alignWhenCentered', hasValue: true, hasBinding: true },
        { name: 'baseline', hasValue: true, hasBinding: true },
        { name: 'baselineOffset', hasValue: true, hasBinding: true },
        { name: 'bottom', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'centerIn', hasValue: true, hasBinding: true },
        { name: 'fill', hasValue: true, hasBinding: true },
        { name: 'horizontalCenter', hasValue: true, hasBinding: true },
        { name: 'horizontalCenterOffset', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'top', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'verticalCenter', hasValue: true, hasBinding: true },
        { name: 'verticalCenterOffset', hasValue: true, hasBinding: true },
      ],
    },
    {
      methodName: 'layer',
      groupName: 'layer',
      properties: [
        { name: 'effect', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'format', hasValue: true, hasBinding: true },
        { name: 'live', hasValue: true, hasBinding: true },
        { name: 'mipmap', hasValue: true, hasBinding: true },
        { name: 'samplerName', hasValue: true, hasBinding: true },
        { name: 'samples', hasValue: true, hasBinding: true },
        { name: 'smooth', hasValue: true, hasBinding: true },
        { name: 'sourceRect', hasValue: true, hasBinding: true },
        { name: 'textureMirroring', hasValue: true, hasBinding: true },
        { name: 'textureSize', hasValue: true, hasBinding: true },
        { name: 'wrapMode', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
    {
      methodName: 'flexboxLayout',
      attachedTypeName: 'FlexboxLayout',
      properties: [
        { name: 'alignSelf', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAlignSelfChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'layout',
      attachedTypeName: 'Layout',
      properties: [
        { name: 'alignment', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'column', hasValue: true, hasBinding: true },
        { name: 'columnSpan', hasValue: true, hasBinding: true },
        { name: 'fillHeight', hasValue: true, hasBinding: true },
        { name: 'fillWidth', hasValue: true, hasBinding: true },
        { name: 'horizontalStretchFactor', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'maximumHeight', hasValue: true, hasBinding: true },
        { name: 'maximumWidth', hasValue: true, hasBinding: true },
        { name: 'minimumHeight', hasValue: true, hasBinding: true },
        { name: 'minimumWidth', hasValue: true, hasBinding: true },
        { name: 'preferredHeight', hasValue: true, hasBinding: true },
        { name: 'preferredWidth', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'row', hasValue: true, hasBinding: true },
        { name: 'rowSpan', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'useDefaultSizePolicy', hasValue: true, hasBinding: true },
        { name: 'verticalStretchFactor', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAlignmentChanged', paramCount: 0 },
        { handlerName: 'onBottomMarginChanged', paramCount: 0 },
        { handlerName: 'onColumnChanged', paramCount: 0 },
        { handlerName: 'onColumnSpanChanged', paramCount: 0 },
        { handlerName: 'onFillHeightChanged', paramCount: 0 },
        { handlerName: 'onFillWidthChanged', paramCount: 0 },
        { handlerName: 'onHorizontalStretchFactorChanged', paramCount: 0 },
        { handlerName: 'onLeftMarginChanged', paramCount: 0 },
        { handlerName: 'onMarginsChanged', paramCount: 0 },
        { handlerName: 'onMaximumHeightChanged', paramCount: 0 },
        { handlerName: 'onMaximumWidthChanged', paramCount: 0 },
        { handlerName: 'onMinimumHeightChanged', paramCount: 0 },
        { handlerName: 'onMinimumWidthChanged', paramCount: 0 },
        { handlerName: 'onPreferredHeightChanged', paramCount: 0 },
        { handlerName: 'onPreferredWidthChanged', paramCount: 0 },
        { handlerName: 'onRightMarginChanged', paramCount: 0 },
        { handlerName: 'onRowChanged', paramCount: 0 },
        { handlerName: 'onRowSpanChanged', paramCount: 0 },
        { handlerName: 'onTopMarginChanged', paramCount: 0 },
        { handlerName: 'onUseDefaultSizePolicyChanged', paramCount: 0 },
        { handlerName: 'onVerticalStretchFactorChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'stackLayout',
      attachedTypeName: 'StackLayout',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onLayoutChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function FlexboxLayout(): FlexboxLayoutBuilder {
  return createFluentBuilder('FlexboxLayout', FLEXBOXLAYOUT_META) as unknown as FlexboxLayoutBuilder;
}

export namespace FlexboxLayout {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('FlexboxLayout', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('FlexboxLayout', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('FlexboxLayout', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('FlexboxLayout', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('FlexboxLayout', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('FlexboxLayout', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('FlexboxLayout', 'Flags', 'ItemObservesViewport');
  }
  export namespace FlexboxAlignment {
    export const AlignAuto = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignAuto');
    export const AlignStart = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignStart');
    export const AlignCenter = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignCenter');
    export const AlignEnd = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignEnd');
    export const AlignStretch = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignStretch');
    export const AlignBaseline = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignBaseline');
    export const AlignSpaceBetween = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignSpaceBetween');
    export const AlignSpaceAround = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignSpaceAround');
    export const AlignSpaceEvenly = createEnumToken('FlexboxLayout', 'FlexboxAlignment', 'AlignSpaceEvenly');
  }
  export namespace FlexboxDirection {
    export const Column = createEnumToken('FlexboxLayout', 'FlexboxDirection', 'Column');
    export const ColumnReverse = createEnumToken('FlexboxLayout', 'FlexboxDirection', 'ColumnReverse');
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
    export const JustifyCenter = createEnumToken('FlexboxLayout', 'FlexboxJustify', 'JustifyCenter');
    export const JustifyEnd = createEnumToken('FlexboxLayout', 'FlexboxJustify', 'JustifyEnd');
    export const JustifySpaceBetween = createEnumToken('FlexboxLayout', 'FlexboxJustify', 'JustifySpaceBetween');
    export const JustifySpaceAround = createEnumToken('FlexboxLayout', 'FlexboxJustify', 'JustifySpaceAround');
    export const JustifySpaceEvenly = createEnumToken('FlexboxLayout', 'FlexboxJustify', 'JustifySpaceEvenly');
  }
  export namespace FlexboxWrap {
    export const NoWrap = createEnumToken('FlexboxLayout', 'FlexboxWrap', 'NoWrap');
    export const Wrap = createEnumToken('FlexboxLayout', 'FlexboxWrap', 'Wrap');
    export const WrapReverse = createEnumToken('FlexboxLayout', 'FlexboxWrap', 'WrapReverse');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('FlexboxLayout', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace SizePolicy {
    export const SizePolicyImplicit = createEnumToken('FlexboxLayout', 'SizePolicy', 'SizePolicyImplicit');
    export const SizePolicyExplicit = createEnumToken('FlexboxLayout', 'SizePolicy', 'SizePolicyExplicit');
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
