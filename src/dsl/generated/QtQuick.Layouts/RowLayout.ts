// AUTO-GENERATED — DO NOT EDIT
// Type: RowLayout
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
  focusPolicy(value: QmlEnumToken): RowLayoutBuilder;
  focusPolicyBind(expr: string): RowLayoutBuilder;
  height(value: number): RowLayoutBuilder;
  heightBind(expr: string): RowLayoutBuilder;
  implicitHeight(value: number): RowLayoutBuilder;
  implicitHeightBind(expr: string): RowLayoutBuilder;
  implicitWidth(value: number): RowLayoutBuilder;
  implicitWidthBind(expr: string): RowLayoutBuilder;
  layoutDirection(value: QmlEnumToken): RowLayoutBuilder;
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
  transformOrigin(value: QmlEnumToken): RowLayoutBuilder;
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
  onActiveFocusChanged(body: string): RowLayoutBuilder;
  onActiveFocusOnTabChanged(body: string): RowLayoutBuilder;
  onAntialiasingChanged(body: string): RowLayoutBuilder;
  onBaselineOffsetChanged(body: string): RowLayoutBuilder;
  onChildrenChanged(body: string): RowLayoutBuilder;
  onChildrenRectChanged(body: string): RowLayoutBuilder;
  onClipChanged(body: string): RowLayoutBuilder;
  onContainmentMaskChanged(body: string): RowLayoutBuilder;
  onEnabledChanged(body: string): RowLayoutBuilder;
  onFocusChanged(body: string): RowLayoutBuilder;
  onFocusPolicyChanged(body: string): RowLayoutBuilder;
  onHeightChanged(body: string): RowLayoutBuilder;
  onImplicitHeightChanged(body: string): RowLayoutBuilder;
  onImplicitWidthChanged(body: string): RowLayoutBuilder;
  onLayoutDirectionChanged(body: string): RowLayoutBuilder;
  onObjectNameChanged(body: string): RowLayoutBuilder;
  onOpacityChanged(body: string): RowLayoutBuilder;
  onPaletteChanged(body: string): RowLayoutBuilder;
  onPaletteCreated(body: string): RowLayoutBuilder;
  onParentChanged(body: string): RowLayoutBuilder;
  onRotationChanged(body: string): RowLayoutBuilder;
  onScaleChanged(body: string): RowLayoutBuilder;
  onSmoothChanged(body: string): RowLayoutBuilder;
  onSpacingChanged(body: string): RowLayoutBuilder;
  onStateChanged(body: string): RowLayoutBuilder;
  onTransformOriginChanged(body: string): RowLayoutBuilder;
  onUniformCellSizesChanged(body: string): RowLayoutBuilder;
  onVisibleChanged(body: string): RowLayoutBuilder;
  onVisibleChildrenChanged(body: string): RowLayoutBuilder;
  onWidthChanged(body: string): RowLayoutBuilder;
  onWindowChanged(body: string): RowLayoutBuilder;
  onXChanged(body: string): RowLayoutBuilder;
  onYChanged(body: string): RowLayoutBuilder;
  onZChanged(body: string): RowLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RowLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): RowLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): RowLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): RowLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): RowLayoutBuilder;
}

const ROWLAYOUT_META: TypeMetadata = {
  typeName: 'RowLayout',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
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
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'uniformCellSizes', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
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
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onUniformCellSizesChanged', paramCount: 0 },
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

export function RowLayout(): RowLayoutBuilder {
  return createFluentBuilder('RowLayout', ROWLAYOUT_META) as unknown as RowLayoutBuilder;
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
