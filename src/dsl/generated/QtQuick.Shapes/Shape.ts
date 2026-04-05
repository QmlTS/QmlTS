// AUTO-GENERATED — DO NOT EDIT
// Type: Shape
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface ShapeBuilder {
  id(id: string): ShapeBuilder;
  child(obj: QmlObjectBuilder): ShapeBuilder;

  activeFocusOnTab(value: boolean): ShapeBuilder;
  activeFocusOnTabBind(expr: string): ShapeBuilder;
  antialiasing(value: boolean): ShapeBuilder;
  antialiasingBind(expr: string): ShapeBuilder;
  asynchronous(value: boolean): ShapeBuilder;
  asynchronousBind(expr: string): ShapeBuilder;
  baselineOffset(value: number): ShapeBuilder;
  baselineOffsetBind(expr: string): ShapeBuilder;
  clip(value: boolean): ShapeBuilder;
  clipBind(expr: string): ShapeBuilder;
  containmentMask(value: QtObjectBuilder): ShapeBuilder;
  containmentMaskBind(expr: string): ShapeBuilder;
  containsMode(value: QmlEnumToken): ShapeBuilder;
  containsModeBind(expr: string): ShapeBuilder;
  enabled(value: boolean): ShapeBuilder;
  enabledBind(expr: string): ShapeBuilder;
  fillMode(value: QmlEnumToken): ShapeBuilder;
  fillModeBind(expr: string): ShapeBuilder;
  focus(value: boolean): ShapeBuilder;
  focusBind(expr: string): ShapeBuilder;
  focusPolicy(value: QmlEnumToken): ShapeBuilder;
  focusPolicyBind(expr: string): ShapeBuilder;
  height(value: number): ShapeBuilder;
  heightBind(expr: string): ShapeBuilder;
  horizontalAlignment(value: QmlEnumToken): ShapeBuilder;
  horizontalAlignmentBind(expr: string): ShapeBuilder;
  implicitHeight(value: number): ShapeBuilder;
  implicitHeightBind(expr: string): ShapeBuilder;
  implicitWidth(value: number): ShapeBuilder;
  implicitWidthBind(expr: string): ShapeBuilder;
  objectName(value: string): ShapeBuilder;
  objectNameBind(expr: string): ShapeBuilder;
  opacity(value: number): ShapeBuilder;
  opacityBind(expr: string): ShapeBuilder;
  palette(value: PaletteBuilder): ShapeBuilder;
  paletteBind(expr: string): ShapeBuilder;
  parent(value: ItemBuilder): ShapeBuilder;
  parentBind(expr: string): ShapeBuilder;
  preferredRendererType(value: QmlEnumToken): ShapeBuilder;
  preferredRendererTypeBind(expr: string): ShapeBuilder;
  rotation(value: number): ShapeBuilder;
  rotationBind(expr: string): ShapeBuilder;
  scale(value: number): ShapeBuilder;
  scaleBind(expr: string): ShapeBuilder;
  smooth(value: boolean): ShapeBuilder;
  smoothBind(expr: string): ShapeBuilder;
  state(value: string): ShapeBuilder;
  stateBind(expr: string): ShapeBuilder;
  transformOrigin(value: QmlEnumToken): ShapeBuilder;
  transformOriginBind(expr: string): ShapeBuilder;
  vendorExtensionsEnabled(value: boolean): ShapeBuilder;
  vendorExtensionsEnabledBind(expr: string): ShapeBuilder;
  verticalAlignment(value: QmlEnumToken): ShapeBuilder;
  verticalAlignmentBind(expr: string): ShapeBuilder;
  visible(value: boolean): ShapeBuilder;
  visibleBind(expr: string): ShapeBuilder;
  width(value: number): ShapeBuilder;
  widthBind(expr: string): ShapeBuilder;
  x(value: number): ShapeBuilder;
  xBind(expr: string): ShapeBuilder;
  y(value: number): ShapeBuilder;
  yBind(expr: string): ShapeBuilder;
  z(value: number): ShapeBuilder;
  zBind(expr: string): ShapeBuilder;
  onActiveFocusChanged(body: string): ShapeBuilder;
  onActiveFocusOnTabChanged(body: string): ShapeBuilder;
  onAntialiasingChanged(body: string): ShapeBuilder;
  onAsynchronousChanged(body: string): ShapeBuilder;
  onBaselineOffsetChanged(body: string): ShapeBuilder;
  onBoundingRectChanged(body: string): ShapeBuilder;
  onChildrenChanged(body: string): ShapeBuilder;
  onChildrenRectChanged(body: string): ShapeBuilder;
  onClipChanged(body: string): ShapeBuilder;
  onContainmentMaskChanged(body: string): ShapeBuilder;
  onContainsModeChanged(body: string): ShapeBuilder;
  onEnabledChanged(body: string): ShapeBuilder;
  onFillModeChanged(body: string): ShapeBuilder;
  onFocusChanged(body: string): ShapeBuilder;
  onFocusPolicyChanged(body: string): ShapeBuilder;
  onHeightChanged(body: string): ShapeBuilder;
  onHorizontalAlignmentChanged(body: string): ShapeBuilder;
  onImplicitHeightChanged(body: string): ShapeBuilder;
  onImplicitWidthChanged(body: string): ShapeBuilder;
  onObjectNameChanged(body: string): ShapeBuilder;
  onOpacityChanged(body: string): ShapeBuilder;
  onPaletteChanged(body: string): ShapeBuilder;
  onPaletteCreated(body: string): ShapeBuilder;
  onParentChanged(body: string): ShapeBuilder;
  onPreferredRendererTypeChanged(body: string): ShapeBuilder;
  onRendererChanged(body: string): ShapeBuilder;
  onRotationChanged(body: string): ShapeBuilder;
  onScaleChanged(body: string): ShapeBuilder;
  onSmoothChanged(body: string): ShapeBuilder;
  onStateChanged(body: string): ShapeBuilder;
  onStatusChanged(body: string): ShapeBuilder;
  onTransformOriginChanged(body: string): ShapeBuilder;
  onVendorExtensionsEnabledChanged(body: string): ShapeBuilder;
  onVerticalAlignmentChanged(body: string): ShapeBuilder;
  onVisibleChanged(body: string): ShapeBuilder;
  onVisibleChildrenChanged(body: string): ShapeBuilder;
  onWidthChanged(body: string): ShapeBuilder;
  onWindowChanged(body: string): ShapeBuilder;
  onXChanged(body: string): ShapeBuilder;
  onYChanged(body: string): ShapeBuilder;
  onZChanged(body: string): ShapeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ShapeBuilder;
  layer(setup: (b: LayerBuilder) => void): ShapeBuilder;
}

const SHAPE_META: TypeMetadata = {
  typeName: 'Shape',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'containsMode', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillMode', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'preferredRendererType', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'vendorExtensionsEnabled', hasValue: true, hasBinding: true },
    { name: 'verticalAlignment', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBoundingRectChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContainsModeChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillModeChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPreferredRendererTypeChanged', paramCount: 0 },
    { handlerName: 'onRendererChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVendorExtensionsEnabledChanged', paramCount: 0 },
    { handlerName: 'onVerticalAlignmentChanged', paramCount: 0 },
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
  ],
  defaultProperty: 'data',
};

export function Shape(): ShapeBuilder {
  return createFluentBuilder('Shape', SHAPE_META) as unknown as ShapeBuilder;
}

export namespace Shape {
  export namespace ContainsMode {
    export const BoundingRectContains = createEnumToken('Shape', 'ContainsMode', 'BoundingRectContains');
    export const FillContains = createEnumToken('Shape', 'ContainsMode', 'FillContains');
  }
  export namespace FillMode {
    export const NoResize = createEnumToken('Shape', 'FillMode', 'NoResize');
    export const PreserveAspectFit = createEnumToken('Shape', 'FillMode', 'PreserveAspectFit');
    export const PreserveAspectCrop = createEnumToken('Shape', 'FillMode', 'PreserveAspectCrop');
    export const Stretch = createEnumToken('Shape', 'FillMode', 'Stretch');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Shape', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Shape', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Shape', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Shape', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Shape', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Shape', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Shape', 'Flags', 'ItemObservesViewport');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('Shape', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('Shape', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('Shape', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Shape', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Shape', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Shape', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Shape', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace RendererType {
    export const UnknownRenderer = createEnumToken('Shape', 'RendererType', 'UnknownRenderer');
    export const GeometryRenderer = createEnumToken('Shape', 'RendererType', 'GeometryRenderer');
    export const NvprRenderer = createEnumToken('Shape', 'RendererType', 'NvprRenderer');
    export const SoftwareRenderer = createEnumToken('Shape', 'RendererType', 'SoftwareRenderer');
    export const CurveRenderer = createEnumToken('Shape', 'RendererType', 'CurveRenderer');
  }
  export namespace Status {
    export const Null = createEnumToken('Shape', 'Status', 'Null');
    export const Ready = createEnumToken('Shape', 'Status', 'Ready');
    export const Processing = createEnumToken('Shape', 'Status', 'Processing');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Shape', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Shape', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Shape', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Shape', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Shape', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Shape', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Shape', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Shape', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Shape', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('Shape', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('Shape', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Shape', 'VAlignment', 'AlignVCenter');
  }
}
