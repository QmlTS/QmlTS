// AUTO-GENERATED — DO NOT EDIT
// Type: EllipseShape
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
export interface EllipseShapeBuilder {
  id(id: string): EllipseShapeBuilder;
  child(obj: QmlObjectBuilder): EllipseShapeBuilder;
  children(...objs: QmlObjectBuilder[]): EllipseShapeBuilder;

  activeFocusOnTab(value: boolean): EllipseShapeBuilder;
  activeFocusOnTabBind(expr: string): EllipseShapeBuilder;
  antialiasing(value: boolean): EllipseShapeBuilder;
  antialiasingBind(expr: string): EllipseShapeBuilder;
  asynchronous(value: boolean): EllipseShapeBuilder;
  asynchronousBind(expr: string): EllipseShapeBuilder;
  baselineOffset(value: number): EllipseShapeBuilder;
  baselineOffsetBind(expr: string): EllipseShapeBuilder;
  borderMode(value: QmlEnumToken): EllipseShapeBuilder;
  borderModeBind(expr: string): EllipseShapeBuilder;
  capStyle(value: QmlEnumToken): EllipseShapeBuilder;
  capStyleBind(expr: string): EllipseShapeBuilder;
  clip(value: boolean): EllipseShapeBuilder;
  clipBind(expr: string): EllipseShapeBuilder;
  containmentMask(value: QtObjectBuilder): EllipseShapeBuilder;
  containmentMaskBind(expr: string): EllipseShapeBuilder;
  containsMode(value: QmlEnumToken): EllipseShapeBuilder;
  containsModeBind(expr: string): EllipseShapeBuilder;
  cornerRadius(value: number): EllipseShapeBuilder;
  cornerRadiusBind(expr: string): EllipseShapeBuilder;
  dashOffset(value: number): EllipseShapeBuilder;
  dashOffsetBind(expr: string): EllipseShapeBuilder;
  dashPattern(value: number): EllipseShapeBuilder;
  dashPatternBind(expr: string): EllipseShapeBuilder;
  enabled(value: boolean): EllipseShapeBuilder;
  enabledBind(expr: string): EllipseShapeBuilder;
  fillColor(value: QmlColor): EllipseShapeBuilder;
  fillColorBind(expr: string): EllipseShapeBuilder;
  fillGradient(value: QmlValue): EllipseShapeBuilder;
  fillGradientBind(expr: string): EllipseShapeBuilder;
  fillMode(value: QmlEnumToken): EllipseShapeBuilder;
  fillModeBind(expr: string): EllipseShapeBuilder;
  fillRule(value: QmlEnumToken): EllipseShapeBuilder;
  fillRuleBind(expr: string): EllipseShapeBuilder;
  focus(value: boolean): EllipseShapeBuilder;
  focusBind(expr: string): EllipseShapeBuilder;
  focusPolicy(value: QmlEnumToken): EllipseShapeBuilder;
  focusPolicyBind(expr: string): EllipseShapeBuilder;
  height(value: number): EllipseShapeBuilder;
  heightBind(expr: string): EllipseShapeBuilder;
  horizontalAlignment(value: QmlEnumToken): EllipseShapeBuilder;
  horizontalAlignmentBind(expr: string): EllipseShapeBuilder;
  implicitHeight(value: number): EllipseShapeBuilder;
  implicitHeightBind(expr: string): EllipseShapeBuilder;
  implicitWidth(value: number): EllipseShapeBuilder;
  implicitWidthBind(expr: string): EllipseShapeBuilder;
  innerArcRatio(value: number): EllipseShapeBuilder;
  innerArcRatioBind(expr: string): EllipseShapeBuilder;
  joinStyle(value: QmlEnumToken): EllipseShapeBuilder;
  joinStyleBind(expr: string): EllipseShapeBuilder;
  objectName(value: string): EllipseShapeBuilder;
  objectNameBind(expr: string): EllipseShapeBuilder;
  opacity(value: number): EllipseShapeBuilder;
  opacityBind(expr: string): EllipseShapeBuilder;
  palette(value: PaletteBuilder): EllipseShapeBuilder;
  paletteBind(expr: string): EllipseShapeBuilder;
  parent(value: ItemBuilder): EllipseShapeBuilder;
  parentBind(expr: string): EllipseShapeBuilder;
  preferredRendererType(value: QmlEnumToken): EllipseShapeBuilder;
  preferredRendererTypeBind(expr: string): EllipseShapeBuilder;
  rotation(value: number): EllipseShapeBuilder;
  rotationBind(expr: string): EllipseShapeBuilder;
  scale(value: number): EllipseShapeBuilder;
  scaleBind(expr: string): EllipseShapeBuilder;
  smooth(value: boolean): EllipseShapeBuilder;
  smoothBind(expr: string): EllipseShapeBuilder;
  startAngle(value: number): EllipseShapeBuilder;
  startAngleBind(expr: string): EllipseShapeBuilder;
  state(value: string): EllipseShapeBuilder;
  stateBind(expr: string): EllipseShapeBuilder;
  strokeColor(value: QmlColor): EllipseShapeBuilder;
  strokeColorBind(expr: string): EllipseShapeBuilder;
  strokeStyle(value: QmlEnumToken): EllipseShapeBuilder;
  strokeStyleBind(expr: string): EllipseShapeBuilder;
  strokeWidth(value: number): EllipseShapeBuilder;
  strokeWidthBind(expr: string): EllipseShapeBuilder;
  sweepAngle(value: number): EllipseShapeBuilder;
  sweepAngleBind(expr: string): EllipseShapeBuilder;
  transformOrigin(value: QmlEnumToken): EllipseShapeBuilder;
  transformOriginBind(expr: string): EllipseShapeBuilder;
  vendorExtensionsEnabled(value: boolean): EllipseShapeBuilder;
  vendorExtensionsEnabledBind(expr: string): EllipseShapeBuilder;
  verticalAlignment(value: QmlEnumToken): EllipseShapeBuilder;
  verticalAlignmentBind(expr: string): EllipseShapeBuilder;
  visible(value: boolean): EllipseShapeBuilder;
  visibleBind(expr: string): EllipseShapeBuilder;
  width(value: number): EllipseShapeBuilder;
  widthBind(expr: string): EllipseShapeBuilder;
  x(value: number): EllipseShapeBuilder;
  xBind(expr: string): EllipseShapeBuilder;
  y(value: number): EllipseShapeBuilder;
  yBind(expr: string): EllipseShapeBuilder;
  z(value: number): EllipseShapeBuilder;
  zBind(expr: string): EllipseShapeBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onBorderModeChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onBoundingRectChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onCapStyleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onClipChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onContainsModeChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onCornerRadiusChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onDashOffsetChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onDashPatternChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onFillColorChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onFillModeChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onFillRuleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onGradientChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onHorizontalAlignmentChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onInnerArcRatioChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onJoinStyleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onPreferredRendererTypeChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onRendererChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onStartAngleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onStrokeColorChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onStrokeStyleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onStrokeWidthChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onSweepAngleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onVendorExtensionsEnabledChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onVerticalAlignmentChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onXChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onYChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  onZChanged(handler: DslSignalHandlerValue): EllipseShapeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): EllipseShapeBuilder;
  layer(setup: (b: LayerBuilder) => void): EllipseShapeBuilder;
}

const ELLIPSESHAPE_META: TypeMetadata = {
  typeName: 'EllipseShape',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'borderMode', hasValue: true, hasBinding: true },
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
    { name: 'fillRule', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'innerArcRatio', hasValue: true, hasBinding: true },
    { name: 'joinStyle', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'preferredRendererType', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'startAngle', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'strokeColor', hasValue: true, hasBinding: true },
    { name: 'strokeStyle', hasValue: true, hasBinding: true },
    { name: 'strokeWidth', hasValue: true, hasBinding: true },
    { name: 'sweepAngle', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBorderModeChanged', paramCount: 0 },
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
    { handlerName: 'onFillRuleChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGradientChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInnerArcRatioChanged', paramCount: 0 },
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
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStartAngleChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onStrokeColorChanged', paramCount: 0 },
    { handlerName: 'onStrokeStyleChanged', paramCount: 0 },
    { handlerName: 'onStrokeWidthChanged', paramCount: 0 },
    { handlerName: 'onSweepAngleChanged', paramCount: 0 },
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

export function EllipseShape(): EllipseShapeBuilder {
  return createFluentBuilder('EllipseShape', ELLIPSESHAPE_META) as unknown as EllipseShapeBuilder;
}

export namespace EllipseShape {
  export namespace BorderMode {
    export const Inside = createEnumToken('EllipseShape', 'BorderMode', 'Inside');
    export const Middle = createEnumToken('EllipseShape', 'BorderMode', 'Middle');
    export const Outside = createEnumToken('EllipseShape', 'BorderMode', 'Outside');
  }
  export namespace ContainsMode {
    export const BoundingRectContains = createEnumToken(
      'EllipseShape',
      'ContainsMode',
      'BoundingRectContains',
    );
    export const FillContains = createEnumToken('EllipseShape', 'ContainsMode', 'FillContains');
  }
  export namespace FillMode {
    export const NoResize = createEnumToken('EllipseShape', 'FillMode', 'NoResize');
    export const PreserveAspectFit = createEnumToken(
      'EllipseShape',
      'FillMode',
      'PreserveAspectFit',
    );
    export const PreserveAspectCrop = createEnumToken(
      'EllipseShape',
      'FillMode',
      'PreserveAspectCrop',
    );
    export const Stretch = createEnumToken('EllipseShape', 'FillMode', 'Stretch');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'EllipseShape',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'EllipseShape',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('EllipseShape', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('EllipseShape', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('EllipseShape', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('EllipseShape', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'EllipseShape',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('EllipseShape', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('EllipseShape', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('EllipseShape', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('EllipseShape', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'EllipseShape',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RendererType {
    export const UnknownRenderer = createEnumToken(
      'EllipseShape',
      'RendererType',
      'UnknownRenderer',
    );
    export const GeometryRenderer = createEnumToken(
      'EllipseShape',
      'RendererType',
      'GeometryRenderer',
    );
    export const NvprRenderer = createEnumToken('EllipseShape', 'RendererType', 'NvprRenderer');
    export const SoftwareRenderer = createEnumToken(
      'EllipseShape',
      'RendererType',
      'SoftwareRenderer',
    );
    export const CurveRenderer = createEnumToken('EllipseShape', 'RendererType', 'CurveRenderer');
  }
  export namespace Status {
    export const Null = createEnumToken('EllipseShape', 'Status', 'Null');
    export const Ready = createEnumToken('EllipseShape', 'Status', 'Ready');
    export const Processing = createEnumToken('EllipseShape', 'Status', 'Processing');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('EllipseShape', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('EllipseShape', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('EllipseShape', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('EllipseShape', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('EllipseShape', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('EllipseShape', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('EllipseShape', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('EllipseShape', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('EllipseShape', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('EllipseShape', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('EllipseShape', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('EllipseShape', 'VAlignment', 'AlignVCenter');
  }
}
