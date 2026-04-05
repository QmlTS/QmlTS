// AUTO-GENERATED — DO NOT EDIT
// Type: GridLayout
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
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
  flow(value: QmlEnumToken): GridLayoutBuilder;
  flowBind(expr: string): GridLayoutBuilder;
  focus(value: boolean): GridLayoutBuilder;
  focusBind(expr: string): GridLayoutBuilder;
  focusPolicy(value: QmlEnumToken): GridLayoutBuilder;
  focusPolicyBind(expr: string): GridLayoutBuilder;
  height(value: number): GridLayoutBuilder;
  heightBind(expr: string): GridLayoutBuilder;
  implicitHeight(value: number): GridLayoutBuilder;
  implicitHeightBind(expr: string): GridLayoutBuilder;
  implicitWidth(value: number): GridLayoutBuilder;
  implicitWidthBind(expr: string): GridLayoutBuilder;
  layoutDirection(value: QmlEnumToken): GridLayoutBuilder;
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
  transformOrigin(value: QmlEnumToken): GridLayoutBuilder;
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
  onActiveFocusChanged(body: string): GridLayoutBuilder;
  onActiveFocusOnTabChanged(body: string): GridLayoutBuilder;
  onAntialiasingChanged(body: string): GridLayoutBuilder;
  onBaselineOffsetChanged(body: string): GridLayoutBuilder;
  onChildrenChanged(body: string): GridLayoutBuilder;
  onChildrenRectChanged(body: string): GridLayoutBuilder;
  onClipChanged(body: string): GridLayoutBuilder;
  onColumnSpacingChanged(body: string): GridLayoutBuilder;
  onColumnsChanged(body: string): GridLayoutBuilder;
  onContainmentMaskChanged(body: string): GridLayoutBuilder;
  onEnabledChanged(body: string): GridLayoutBuilder;
  onFlowChanged(body: string): GridLayoutBuilder;
  onFocusChanged(body: string): GridLayoutBuilder;
  onFocusPolicyChanged(body: string): GridLayoutBuilder;
  onHeightChanged(body: string): GridLayoutBuilder;
  onImplicitHeightChanged(body: string): GridLayoutBuilder;
  onImplicitWidthChanged(body: string): GridLayoutBuilder;
  onLayoutDirectionChanged(body: string): GridLayoutBuilder;
  onObjectNameChanged(body: string): GridLayoutBuilder;
  onOpacityChanged(body: string): GridLayoutBuilder;
  onPaletteChanged(body: string): GridLayoutBuilder;
  onPaletteCreated(body: string): GridLayoutBuilder;
  onParentChanged(body: string): GridLayoutBuilder;
  onRotationChanged(body: string): GridLayoutBuilder;
  onRowSpacingChanged(body: string): GridLayoutBuilder;
  onRowsChanged(body: string): GridLayoutBuilder;
  onScaleChanged(body: string): GridLayoutBuilder;
  onSmoothChanged(body: string): GridLayoutBuilder;
  onStateChanged(body: string): GridLayoutBuilder;
  onTransformOriginChanged(body: string): GridLayoutBuilder;
  onUniformCellHeightsChanged(body: string): GridLayoutBuilder;
  onUniformCellWidthsChanged(body: string): GridLayoutBuilder;
  onVisibleChanged(body: string): GridLayoutBuilder;
  onVisibleChildrenChanged(body: string): GridLayoutBuilder;
  onWidthChanged(body: string): GridLayoutBuilder;
  onWindowChanged(body: string): GridLayoutBuilder;
  onXChanged(body: string): GridLayoutBuilder;
  onYChanged(body: string): GridLayoutBuilder;
  onZChanged(body: string): GridLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GridLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): GridLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): GridLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): GridLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): GridLayoutBuilder;
}

const GRIDLAYOUT_META: TypeMetadata = {
  typeName: 'GridLayout',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'columnSpacing', hasValue: true, hasBinding: true },
    { name: 'columns', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'flow', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'layoutDirection', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rowSpacing', hasValue: true, hasBinding: true },
    { name: 'rows', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'uniformCellHeights', hasValue: true, hasBinding: true },
    { name: 'uniformCellWidths', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColumnSpacingChanged', paramCount: 0 },
    { handlerName: 'onColumnsChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFlowChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLayoutDirectionChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRowSpacingChanged', paramCount: 0 },
    { handlerName: 'onRowsChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onUniformCellHeightsChanged', paramCount: 0 },
    { handlerName: 'onUniformCellWidthsChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onLayoutChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function GridLayout(): GridLayoutBuilder {
  return createFluentBuilder('GridLayout', GRIDLAYOUT_META) as unknown as GridLayoutBuilder;
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
