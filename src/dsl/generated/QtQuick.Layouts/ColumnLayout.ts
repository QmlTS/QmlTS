// AUTO-GENERATED — DO NOT EDIT
// Type: ColumnLayout
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
  focusPolicy(value: QmlEnumToken): ColumnLayoutBuilder;
  focusPolicyBind(expr: string): ColumnLayoutBuilder;
  height(value: number): ColumnLayoutBuilder;
  heightBind(expr: string): ColumnLayoutBuilder;
  implicitHeight(value: number): ColumnLayoutBuilder;
  implicitHeightBind(expr: string): ColumnLayoutBuilder;
  implicitWidth(value: number): ColumnLayoutBuilder;
  implicitWidthBind(expr: string): ColumnLayoutBuilder;
  layoutDirection(value: QmlEnumToken): ColumnLayoutBuilder;
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
  transformOrigin(value: QmlEnumToken): ColumnLayoutBuilder;
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
  onActiveFocusChanged(body: string): ColumnLayoutBuilder;
  onActiveFocusOnTabChanged(body: string): ColumnLayoutBuilder;
  onAntialiasingChanged(body: string): ColumnLayoutBuilder;
  onBaselineOffsetChanged(body: string): ColumnLayoutBuilder;
  onChildrenChanged(body: string): ColumnLayoutBuilder;
  onChildrenRectChanged(body: string): ColumnLayoutBuilder;
  onClipChanged(body: string): ColumnLayoutBuilder;
  onContainmentMaskChanged(body: string): ColumnLayoutBuilder;
  onEnabledChanged(body: string): ColumnLayoutBuilder;
  onFocusChanged(body: string): ColumnLayoutBuilder;
  onFocusPolicyChanged(body: string): ColumnLayoutBuilder;
  onHeightChanged(body: string): ColumnLayoutBuilder;
  onImplicitHeightChanged(body: string): ColumnLayoutBuilder;
  onImplicitWidthChanged(body: string): ColumnLayoutBuilder;
  onLayoutDirectionChanged(body: string): ColumnLayoutBuilder;
  onObjectNameChanged(body: string): ColumnLayoutBuilder;
  onOpacityChanged(body: string): ColumnLayoutBuilder;
  onPaletteChanged(body: string): ColumnLayoutBuilder;
  onPaletteCreated(body: string): ColumnLayoutBuilder;
  onParentChanged(body: string): ColumnLayoutBuilder;
  onRotationChanged(body: string): ColumnLayoutBuilder;
  onScaleChanged(body: string): ColumnLayoutBuilder;
  onSmoothChanged(body: string): ColumnLayoutBuilder;
  onSpacingChanged(body: string): ColumnLayoutBuilder;
  onStateChanged(body: string): ColumnLayoutBuilder;
  onTransformOriginChanged(body: string): ColumnLayoutBuilder;
  onUniformCellSizesChanged(body: string): ColumnLayoutBuilder;
  onVisibleChanged(body: string): ColumnLayoutBuilder;
  onVisibleChildrenChanged(body: string): ColumnLayoutBuilder;
  onWidthChanged(body: string): ColumnLayoutBuilder;
  onWindowChanged(body: string): ColumnLayoutBuilder;
  onXChanged(body: string): ColumnLayoutBuilder;
  onYChanged(body: string): ColumnLayoutBuilder;
  onZChanged(body: string): ColumnLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ColumnLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): ColumnLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): ColumnLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): ColumnLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): ColumnLayoutBuilder;
}

const COLUMNLAYOUT_META: TypeMetadata = {
  typeName: 'ColumnLayout',
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

export function ColumnLayout(): ColumnLayoutBuilder {
  return createFluentBuilder('ColumnLayout', COLUMNLAYOUT_META) as unknown as ColumnLayoutBuilder;
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
