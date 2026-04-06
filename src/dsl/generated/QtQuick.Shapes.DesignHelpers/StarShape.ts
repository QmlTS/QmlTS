// AUTO-GENERATED — DO NOT EDIT
// Type: StarShape
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface StarShapeBuilder {
  id(id: string): StarShapeBuilder;
  child(obj: QmlObjectBuilder): StarShapeBuilder;
  children(...objs: QmlObjectBuilder[]): StarShapeBuilder;

  activeFocusOnTab(value: boolean): StarShapeBuilder;
  activeFocusOnTabBind(expr: string): StarShapeBuilder;
  antialiasing(value: boolean): StarShapeBuilder;
  antialiasingBind(expr: string): StarShapeBuilder;
  asynchronous(value: boolean): StarShapeBuilder;
  asynchronousBind(expr: string): StarShapeBuilder;
  baselineOffset(value: number): StarShapeBuilder;
  baselineOffsetBind(expr: string): StarShapeBuilder;
  capStyle(value: QmlEnumToken): StarShapeBuilder;
  capStyleBind(expr: string): StarShapeBuilder;
  clip(value: boolean): StarShapeBuilder;
  clipBind(expr: string): StarShapeBuilder;
  containmentMask(value: QtObjectBuilder): StarShapeBuilder;
  containmentMaskBind(expr: string): StarShapeBuilder;
  containsMode(value: QmlEnumToken): StarShapeBuilder;
  containsModeBind(expr: string): StarShapeBuilder;
  cornerRadius(value: number): StarShapeBuilder;
  cornerRadiusBind(expr: string): StarShapeBuilder;
  dashOffset(value: number): StarShapeBuilder;
  dashOffsetBind(expr: string): StarShapeBuilder;
  dashPattern(value: number): StarShapeBuilder;
  dashPatternBind(expr: string): StarShapeBuilder;
  enabled(value: boolean): StarShapeBuilder;
  enabledBind(expr: string): StarShapeBuilder;
  fillColor(value: QmlColor): StarShapeBuilder;
  fillColorBind(expr: string): StarShapeBuilder;
  fillGradient(value: QmlValue): StarShapeBuilder;
  fillGradientBind(expr: string): StarShapeBuilder;
  fillMode(value: QmlEnumToken): StarShapeBuilder;
  fillModeBind(expr: string): StarShapeBuilder;
  focus(value: boolean): StarShapeBuilder;
  focusBind(expr: string): StarShapeBuilder;
  focusPolicy(value: QmlEnumToken): StarShapeBuilder;
  focusPolicyBind(expr: string): StarShapeBuilder;
  height(value: number): StarShapeBuilder;
  heightBind(expr: string): StarShapeBuilder;
  horizontalAlignment(value: QmlEnumToken): StarShapeBuilder;
  horizontalAlignmentBind(expr: string): StarShapeBuilder;
  implicitHeight(value: number): StarShapeBuilder;
  implicitHeightBind(expr: string): StarShapeBuilder;
  implicitWidth(value: number): StarShapeBuilder;
  implicitWidthBind(expr: string): StarShapeBuilder;
  joinStyle(value: QmlEnumToken): StarShapeBuilder;
  joinStyleBind(expr: string): StarShapeBuilder;
  objectName(value: string): StarShapeBuilder;
  objectNameBind(expr: string): StarShapeBuilder;
  opacity(value: number): StarShapeBuilder;
  opacityBind(expr: string): StarShapeBuilder;
  palette(value: PaletteBuilder): StarShapeBuilder;
  paletteBind(expr: string): StarShapeBuilder;
  parent(value: ItemBuilder): StarShapeBuilder;
  parentBind(expr: string): StarShapeBuilder;
  pointCount(value: number): StarShapeBuilder;
  pointCountBind(expr: string): StarShapeBuilder;
  preferredRendererType(value: QmlEnumToken): StarShapeBuilder;
  preferredRendererTypeBind(expr: string): StarShapeBuilder;
  ratio(value: number): StarShapeBuilder;
  ratioBind(expr: string): StarShapeBuilder;
  rotation(value: number): StarShapeBuilder;
  rotationBind(expr: string): StarShapeBuilder;
  scale(value: number): StarShapeBuilder;
  scaleBind(expr: string): StarShapeBuilder;
  smooth(value: boolean): StarShapeBuilder;
  smoothBind(expr: string): StarShapeBuilder;
  state(value: string): StarShapeBuilder;
  stateBind(expr: string): StarShapeBuilder;
  strokeColor(value: QmlColor): StarShapeBuilder;
  strokeColorBind(expr: string): StarShapeBuilder;
  strokeStyle(value: QmlEnumToken): StarShapeBuilder;
  strokeStyleBind(expr: string): StarShapeBuilder;
  strokeWidth(value: number): StarShapeBuilder;
  strokeWidthBind(expr: string): StarShapeBuilder;
  transformOrigin(value: QmlEnumToken): StarShapeBuilder;
  transformOriginBind(expr: string): StarShapeBuilder;
  vendorExtensionsEnabled(value: boolean): StarShapeBuilder;
  vendorExtensionsEnabledBind(expr: string): StarShapeBuilder;
  verticalAlignment(value: QmlEnumToken): StarShapeBuilder;
  verticalAlignmentBind(expr: string): StarShapeBuilder;
  visible(value: boolean): StarShapeBuilder;
  visibleBind(expr: string): StarShapeBuilder;
  width(value: number): StarShapeBuilder;
  widthBind(expr: string): StarShapeBuilder;
  x(value: number): StarShapeBuilder;
  xBind(expr: string): StarShapeBuilder;
  y(value: number): StarShapeBuilder;
  yBind(expr: string): StarShapeBuilder;
  z(value: number): StarShapeBuilder;
  zBind(expr: string): StarShapeBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onBoundingRectChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onCapStyleChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onClipChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onContainsModeChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onCornerRadiusChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onDashOffsetChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onDashPatternChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onFillColorChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onFillModeChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onGradientChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onHorizontalAlignmentChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onJoinStyleChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): StarShapeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onPointCountChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onPreferredRendererTypeChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onRatioChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onRendererChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onStrokeColorChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onStrokeStyleChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onStrokeWidthChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onVendorExtensionsEnabledChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onVerticalAlignmentChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onXChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onYChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  onZChanged(handler: DslSignalHandlerValue): StarShapeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): StarShapeBuilder;
  layer(setup: (b: LayerBuilder) => void): StarShapeBuilder;
}

const STARSHAPE_META: TypeMetadata = {
  typeName: 'StarShape',
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
    { name: 'pointCount', hasValue: true, hasBinding: true },
    { name: 'preferredRendererType', hasValue: true, hasBinding: true },
    { name: 'ratio', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
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
    { handlerName: 'onPointCountChanged', paramCount: 0 },
    { handlerName: 'onPreferredRendererTypeChanged', paramCount: 0 },
    { handlerName: 'onRatioChanged', paramCount: 0 },
    { handlerName: 'onRendererChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
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
  attached: [],
  defaultProperty: 'data',
};

export function StarShape(): StarShapeBuilder {
  return createFluentBuilder('StarShape', STARSHAPE_META) as unknown as StarShapeBuilder;
}

export namespace StarShape {
  export namespace ContainsMode {
    export const BoundingRectContains = createEnumToken(
      'StarShape',
      'ContainsMode',
      'BoundingRectContains',
    );
    export const FillContains = createEnumToken('StarShape', 'ContainsMode', 'FillContains');
  }
  export namespace FillMode {
    export const NoResize = createEnumToken('StarShape', 'FillMode', 'NoResize');
    export const PreserveAspectFit = createEnumToken('StarShape', 'FillMode', 'PreserveAspectFit');
    export const PreserveAspectCrop = createEnumToken(
      'StarShape',
      'FillMode',
      'PreserveAspectCrop',
    );
    export const Stretch = createEnumToken('StarShape', 'FillMode', 'Stretch');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'StarShape',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'StarShape',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('StarShape', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('StarShape', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('StarShape', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('StarShape', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'StarShape',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('StarShape', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('StarShape', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('StarShape', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('StarShape', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'StarShape',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RendererType {
    export const UnknownRenderer = createEnumToken('StarShape', 'RendererType', 'UnknownRenderer');
    export const GeometryRenderer = createEnumToken(
      'StarShape',
      'RendererType',
      'GeometryRenderer',
    );
    export const NvprRenderer = createEnumToken('StarShape', 'RendererType', 'NvprRenderer');
    export const SoftwareRenderer = createEnumToken(
      'StarShape',
      'RendererType',
      'SoftwareRenderer',
    );
    export const CurveRenderer = createEnumToken('StarShape', 'RendererType', 'CurveRenderer');
  }
  export namespace Status {
    export const Null = createEnumToken('StarShape', 'Status', 'Null');
    export const Ready = createEnumToken('StarShape', 'Status', 'Ready');
    export const Processing = createEnumToken('StarShape', 'Status', 'Processing');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('StarShape', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('StarShape', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('StarShape', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('StarShape', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('StarShape', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('StarShape', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('StarShape', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('StarShape', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('StarShape', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('StarShape', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('StarShape', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('StarShape', 'VAlignment', 'AlignVCenter');
  }
}
