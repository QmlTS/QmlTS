// AUTO-GENERATED — DO NOT EDIT
// Type: RegularPolygonShape
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface RegularPolygonShapeBuilder {
  id(id: string): RegularPolygonShapeBuilder;
  child(obj: QmlObjectBuilder): RegularPolygonShapeBuilder;

  activeFocusOnTab(value: boolean): RegularPolygonShapeBuilder;
  activeFocusOnTabBind(expr: string): RegularPolygonShapeBuilder;
  antialiasing(value: boolean): RegularPolygonShapeBuilder;
  antialiasingBind(expr: string): RegularPolygonShapeBuilder;
  asynchronous(value: boolean): RegularPolygonShapeBuilder;
  asynchronousBind(expr: string): RegularPolygonShapeBuilder;
  baselineOffset(value: number): RegularPolygonShapeBuilder;
  baselineOffsetBind(expr: string): RegularPolygonShapeBuilder;
  capStyle(value: QmlEnumToken): RegularPolygonShapeBuilder;
  capStyleBind(expr: string): RegularPolygonShapeBuilder;
  clip(value: boolean): RegularPolygonShapeBuilder;
  clipBind(expr: string): RegularPolygonShapeBuilder;
  containmentMask(value: QtObjectBuilder): RegularPolygonShapeBuilder;
  containmentMaskBind(expr: string): RegularPolygonShapeBuilder;
  containsMode(value: QmlEnumToken): RegularPolygonShapeBuilder;
  containsModeBind(expr: string): RegularPolygonShapeBuilder;
  cornerRadius(value: number): RegularPolygonShapeBuilder;
  cornerRadiusBind(expr: string): RegularPolygonShapeBuilder;
  dashOffset(value: number): RegularPolygonShapeBuilder;
  dashOffsetBind(expr: string): RegularPolygonShapeBuilder;
  dashPattern(value: number): RegularPolygonShapeBuilder;
  dashPatternBind(expr: string): RegularPolygonShapeBuilder;
  enabled(value: boolean): RegularPolygonShapeBuilder;
  enabledBind(expr: string): RegularPolygonShapeBuilder;
  fillColor(value: QmlColor): RegularPolygonShapeBuilder;
  fillColorBind(expr: string): RegularPolygonShapeBuilder;
  fillGradient(value: QmlValue): RegularPolygonShapeBuilder;
  fillGradientBind(expr: string): RegularPolygonShapeBuilder;
  fillMode(value: QmlEnumToken): RegularPolygonShapeBuilder;
  fillModeBind(expr: string): RegularPolygonShapeBuilder;
  focus(value: boolean): RegularPolygonShapeBuilder;
  focusBind(expr: string): RegularPolygonShapeBuilder;
  focusPolicy(value: QmlEnumToken): RegularPolygonShapeBuilder;
  focusPolicyBind(expr: string): RegularPolygonShapeBuilder;
  height(value: number): RegularPolygonShapeBuilder;
  heightBind(expr: string): RegularPolygonShapeBuilder;
  horizontalAlignment(value: QmlEnumToken): RegularPolygonShapeBuilder;
  horizontalAlignmentBind(expr: string): RegularPolygonShapeBuilder;
  implicitHeight(value: number): RegularPolygonShapeBuilder;
  implicitHeightBind(expr: string): RegularPolygonShapeBuilder;
  implicitWidth(value: number): RegularPolygonShapeBuilder;
  implicitWidthBind(expr: string): RegularPolygonShapeBuilder;
  joinStyle(value: QmlEnumToken): RegularPolygonShapeBuilder;
  joinStyleBind(expr: string): RegularPolygonShapeBuilder;
  objectName(value: string): RegularPolygonShapeBuilder;
  objectNameBind(expr: string): RegularPolygonShapeBuilder;
  opacity(value: number): RegularPolygonShapeBuilder;
  opacityBind(expr: string): RegularPolygonShapeBuilder;
  palette(value: PaletteBuilder): RegularPolygonShapeBuilder;
  paletteBind(expr: string): RegularPolygonShapeBuilder;
  parent(value: ItemBuilder): RegularPolygonShapeBuilder;
  parentBind(expr: string): RegularPolygonShapeBuilder;
  preferredRendererType(value: QmlEnumToken): RegularPolygonShapeBuilder;
  preferredRendererTypeBind(expr: string): RegularPolygonShapeBuilder;
  rotation(value: number): RegularPolygonShapeBuilder;
  rotationBind(expr: string): RegularPolygonShapeBuilder;
  scale(value: number): RegularPolygonShapeBuilder;
  scaleBind(expr: string): RegularPolygonShapeBuilder;
  sideCount(value: number): RegularPolygonShapeBuilder;
  sideCountBind(expr: string): RegularPolygonShapeBuilder;
  smooth(value: boolean): RegularPolygonShapeBuilder;
  smoothBind(expr: string): RegularPolygonShapeBuilder;
  state(value: string): RegularPolygonShapeBuilder;
  stateBind(expr: string): RegularPolygonShapeBuilder;
  strokeColor(value: QmlColor): RegularPolygonShapeBuilder;
  strokeColorBind(expr: string): RegularPolygonShapeBuilder;
  strokeStyle(value: QmlEnumToken): RegularPolygonShapeBuilder;
  strokeStyleBind(expr: string): RegularPolygonShapeBuilder;
  strokeWidth(value: number): RegularPolygonShapeBuilder;
  strokeWidthBind(expr: string): RegularPolygonShapeBuilder;
  transformOrigin(value: QmlEnumToken): RegularPolygonShapeBuilder;
  transformOriginBind(expr: string): RegularPolygonShapeBuilder;
  vendorExtensionsEnabled(value: boolean): RegularPolygonShapeBuilder;
  vendorExtensionsEnabledBind(expr: string): RegularPolygonShapeBuilder;
  verticalAlignment(value: QmlEnumToken): RegularPolygonShapeBuilder;
  verticalAlignmentBind(expr: string): RegularPolygonShapeBuilder;
  visible(value: boolean): RegularPolygonShapeBuilder;
  visibleBind(expr: string): RegularPolygonShapeBuilder;
  width(value: number): RegularPolygonShapeBuilder;
  widthBind(expr: string): RegularPolygonShapeBuilder;
  x(value: number): RegularPolygonShapeBuilder;
  xBind(expr: string): RegularPolygonShapeBuilder;
  y(value: number): RegularPolygonShapeBuilder;
  yBind(expr: string): RegularPolygonShapeBuilder;
  z(value: number): RegularPolygonShapeBuilder;
  zBind(expr: string): RegularPolygonShapeBuilder;
  onActiveFocusChanged(body: string): RegularPolygonShapeBuilder;
  onActiveFocusOnTabChanged(body: string): RegularPolygonShapeBuilder;
  onAntialiasingChanged(body: string): RegularPolygonShapeBuilder;
  onAsynchronousChanged(body: string): RegularPolygonShapeBuilder;
  onBaselineOffsetChanged(body: string): RegularPolygonShapeBuilder;
  onBoundingRectChanged(body: string): RegularPolygonShapeBuilder;
  onCapStyleChanged(body: string): RegularPolygonShapeBuilder;
  onChildrenChanged(body: string): RegularPolygonShapeBuilder;
  onChildrenRectChanged(body: string): RegularPolygonShapeBuilder;
  onClipChanged(body: string): RegularPolygonShapeBuilder;
  onContainmentMaskChanged(body: string): RegularPolygonShapeBuilder;
  onContainsModeChanged(body: string): RegularPolygonShapeBuilder;
  onCornerRadiusChanged(body: string): RegularPolygonShapeBuilder;
  onDashOffsetChanged(body: string): RegularPolygonShapeBuilder;
  onDashPatternChanged(body: string): RegularPolygonShapeBuilder;
  onEnabledChanged(body: string): RegularPolygonShapeBuilder;
  onFillColorChanged(body: string): RegularPolygonShapeBuilder;
  onFillModeChanged(body: string): RegularPolygonShapeBuilder;
  onFocusChanged(body: string): RegularPolygonShapeBuilder;
  onFocusPolicyChanged(body: string): RegularPolygonShapeBuilder;
  onGradientChanged(body: string): RegularPolygonShapeBuilder;
  onHeightChanged(body: string): RegularPolygonShapeBuilder;
  onHorizontalAlignmentChanged(body: string): RegularPolygonShapeBuilder;
  onImplicitHeightChanged(body: string): RegularPolygonShapeBuilder;
  onImplicitWidthChanged(body: string): RegularPolygonShapeBuilder;
  onJoinStyleChanged(body: string): RegularPolygonShapeBuilder;
  onObjectNameChanged(body: string): RegularPolygonShapeBuilder;
  onOpacityChanged(body: string): RegularPolygonShapeBuilder;
  onPaletteChanged(body: string): RegularPolygonShapeBuilder;
  onPaletteCreated(body: string): RegularPolygonShapeBuilder;
  onParentChanged(body: string): RegularPolygonShapeBuilder;
  onPreferredRendererTypeChanged(body: string): RegularPolygonShapeBuilder;
  onRendererChanged(body: string): RegularPolygonShapeBuilder;
  onRotationChanged(body: string): RegularPolygonShapeBuilder;
  onScaleChanged(body: string): RegularPolygonShapeBuilder;
  onSideCountChanged(body: string): RegularPolygonShapeBuilder;
  onSmoothChanged(body: string): RegularPolygonShapeBuilder;
  onStateChanged(body: string): RegularPolygonShapeBuilder;
  onStatusChanged(body: string): RegularPolygonShapeBuilder;
  onStrokeColorChanged(body: string): RegularPolygonShapeBuilder;
  onStrokeStyleChanged(body: string): RegularPolygonShapeBuilder;
  onStrokeWidthChanged(body: string): RegularPolygonShapeBuilder;
  onTransformOriginChanged(body: string): RegularPolygonShapeBuilder;
  onVendorExtensionsEnabledChanged(body: string): RegularPolygonShapeBuilder;
  onVerticalAlignmentChanged(body: string): RegularPolygonShapeBuilder;
  onVisibleChanged(body: string): RegularPolygonShapeBuilder;
  onVisibleChildrenChanged(body: string): RegularPolygonShapeBuilder;
  onWidthChanged(body: string): RegularPolygonShapeBuilder;
  onWindowChanged(body: string): RegularPolygonShapeBuilder;
  onXChanged(body: string): RegularPolygonShapeBuilder;
  onYChanged(body: string): RegularPolygonShapeBuilder;
  onZChanged(body: string): RegularPolygonShapeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RegularPolygonShapeBuilder;
  layer(setup: (b: LayerBuilder) => void): RegularPolygonShapeBuilder;
}

const REGULARPOLYGONSHAPE_META: TypeMetadata = {
  typeName: 'RegularPolygonShape',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'capStyle', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'containsMode', hasValue: true, hasBinding: true },
    { name: 'cornerRadius', hasValue: true, hasBinding: true },
    { name: 'dashOffset', hasValue: true, hasBinding: true },
    { name: 'dashPattern', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillColor', hasValue: true, hasBinding: true },
    { name: 'fillGradient', hasValue: true, hasBinding: true },
    { name: 'fillMode', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'joinStyle', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'preferredRendererType', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'sideCount', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'strokeColor', hasValue: true, hasBinding: true },
    { name: 'strokeStyle', hasValue: true, hasBinding: true },
    { name: 'strokeWidth', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCapStyleChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContainsModeChanged', paramCount: 0 },
    { handlerName: 'onCornerRadiusChanged', paramCount: 0 },
    { handlerName: 'onDashOffsetChanged', paramCount: 0 },
    { handlerName: 'onDashPatternChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillColorChanged', paramCount: 0 },
    { handlerName: 'onFillModeChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGradientChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onJoinStyleChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPreferredRendererTypeChanged', paramCount: 0 },
    { handlerName: 'onRendererChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSideCountChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onStrokeColorChanged', paramCount: 0 },
    { handlerName: 'onStrokeStyleChanged', paramCount: 0 },
    { handlerName: 'onStrokeWidthChanged', paramCount: 0 },
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

export function RegularPolygonShape(): RegularPolygonShapeBuilder {
  return createFluentBuilder('RegularPolygonShape', REGULARPOLYGONSHAPE_META) as unknown as RegularPolygonShapeBuilder;
}

export namespace RegularPolygonShape {
  export namespace ContainsMode {
    export const BoundingRectContains = createEnumToken('RegularPolygonShape', 'ContainsMode', 'BoundingRectContains');
    export const FillContains = createEnumToken('RegularPolygonShape', 'ContainsMode', 'FillContains');
  }
  export namespace FillMode {
    export const NoResize = createEnumToken('RegularPolygonShape', 'FillMode', 'NoResize');
    export const PreserveAspectFit = createEnumToken('RegularPolygonShape', 'FillMode', 'PreserveAspectFit');
    export const PreserveAspectCrop = createEnumToken('RegularPolygonShape', 'FillMode', 'PreserveAspectCrop');
    export const Stretch = createEnumToken('RegularPolygonShape', 'FillMode', 'Stretch');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('RegularPolygonShape', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('RegularPolygonShape', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('RegularPolygonShape', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RegularPolygonShape', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RegularPolygonShape', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RegularPolygonShape', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('RegularPolygonShape', 'Flags', 'ItemObservesViewport');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('RegularPolygonShape', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('RegularPolygonShape', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('RegularPolygonShape', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('RegularPolygonShape', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace RendererType {
    export const UnknownRenderer = createEnumToken('RegularPolygonShape', 'RendererType', 'UnknownRenderer');
    export const GeometryRenderer = createEnumToken('RegularPolygonShape', 'RendererType', 'GeometryRenderer');
    export const NvprRenderer = createEnumToken('RegularPolygonShape', 'RendererType', 'NvprRenderer');
    export const SoftwareRenderer = createEnumToken('RegularPolygonShape', 'RendererType', 'SoftwareRenderer');
    export const CurveRenderer = createEnumToken('RegularPolygonShape', 'RendererType', 'CurveRenderer');
  }
  export namespace Status {
    export const Null = createEnumToken('RegularPolygonShape', 'Status', 'Null');
    export const Ready = createEnumToken('RegularPolygonShape', 'Status', 'Ready');
    export const Processing = createEnumToken('RegularPolygonShape', 'Status', 'Processing');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RegularPolygonShape', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('RegularPolygonShape', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('RegularPolygonShape', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('RegularPolygonShape', 'VAlignment', 'AlignVCenter');
  }
}
