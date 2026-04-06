// AUTO-GENERATED — DO NOT EDIT
// Type: VectorImage
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { AnimationsBuilder } from './QQuickVectorImageAnimations.js';
export interface VectorImageBuilder {
  id(id: string): VectorImageBuilder;
  child(obj: QmlObjectBuilder): VectorImageBuilder;
  children(...objs: QmlObjectBuilder[]): VectorImageBuilder;

  activeFocusOnTab(value: boolean): VectorImageBuilder;
  activeFocusOnTabBind(expr: string): VectorImageBuilder;
  antialiasing(value: boolean): VectorImageBuilder;
  antialiasingBind(expr: string): VectorImageBuilder;
  assumeTrustedSource(value: boolean): VectorImageBuilder;
  assumeTrustedSourceBind(expr: string): VectorImageBuilder;
  asynchronousShapes(value: boolean): VectorImageBuilder;
  asynchronousShapesBind(expr: string): VectorImageBuilder;
  baselineOffset(value: number): VectorImageBuilder;
  baselineOffsetBind(expr: string): VectorImageBuilder;
  clip(value: boolean): VectorImageBuilder;
  clipBind(expr: string): VectorImageBuilder;
  containmentMask(value: QtObjectBuilder): VectorImageBuilder;
  containmentMaskBind(expr: string): VectorImageBuilder;
  enabled(value: boolean): VectorImageBuilder;
  enabledBind(expr: string): VectorImageBuilder;
  fillMode(value: QmlEnumToken): VectorImageBuilder;
  fillModeBind(expr: string): VectorImageBuilder;
  focus(value: boolean): VectorImageBuilder;
  focusBind(expr: string): VectorImageBuilder;
  focusPolicy(value: QmlEnumToken): VectorImageBuilder;
  focusPolicyBind(expr: string): VectorImageBuilder;
  height(value: number): VectorImageBuilder;
  heightBind(expr: string): VectorImageBuilder;
  implicitHeight(value: number): VectorImageBuilder;
  implicitHeightBind(expr: string): VectorImageBuilder;
  implicitWidth(value: number): VectorImageBuilder;
  implicitWidthBind(expr: string): VectorImageBuilder;
  objectName(value: string): VectorImageBuilder;
  objectNameBind(expr: string): VectorImageBuilder;
  opacity(value: number): VectorImageBuilder;
  opacityBind(expr: string): VectorImageBuilder;
  palette(value: PaletteBuilder): VectorImageBuilder;
  paletteBind(expr: string): VectorImageBuilder;
  parent(value: ItemBuilder): VectorImageBuilder;
  parentBind(expr: string): VectorImageBuilder;
  preferredRendererType(value: QmlEnumToken): VectorImageBuilder;
  preferredRendererTypeBind(expr: string): VectorImageBuilder;
  rotation(value: number): VectorImageBuilder;
  rotationBind(expr: string): VectorImageBuilder;
  scale(value: number): VectorImageBuilder;
  scaleBind(expr: string): VectorImageBuilder;
  smooth(value: boolean): VectorImageBuilder;
  smoothBind(expr: string): VectorImageBuilder;
  source(value: QmlUrl): VectorImageBuilder;
  sourceBind(expr: string): VectorImageBuilder;
  state(value: string): VectorImageBuilder;
  stateBind(expr: string): VectorImageBuilder;
  transformOrigin(value: QmlEnumToken): VectorImageBuilder;
  transformOriginBind(expr: string): VectorImageBuilder;
  visible(value: boolean): VectorImageBuilder;
  visibleBind(expr: string): VectorImageBuilder;
  width(value: number): VectorImageBuilder;
  widthBind(expr: string): VectorImageBuilder;
  x(value: number): VectorImageBuilder;
  xBind(expr: string): VectorImageBuilder;
  y(value: number): VectorImageBuilder;
  yBind(expr: string): VectorImageBuilder;
  z(value: number): VectorImageBuilder;
  zBind(expr: string): VectorImageBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onAssumeTrustedSourceChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onAsynchronousShapesChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onClipChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onFillModeChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): VectorImageBuilder;
  onParentChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onPreferredRendererTypeChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onStateChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onXChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onYChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  onZChanged(handler: DslSignalHandlerValue): VectorImageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): VectorImageBuilder;
  animations(setup: (b: AnimationsBuilder) => void): VectorImageBuilder;
  layer(setup: (b: LayerBuilder) => void): VectorImageBuilder;
}

const VECTORIMAGE_META: TypeMetadata = {
  typeName: 'VectorImage',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'assumeTrustedSource', hasValue: true, hasBinding: true },
    { name: 'asynchronousShapes', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fillMode', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
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
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAssumeTrustedSourceChanged', paramCount: 0 },
    { handlerName: 'onAsynchronousShapesChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFillModeChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPreferredRendererTypeChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
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
      methodName: 'animations',
      groupName: 'animations',
      properties: [
        { name: 'loops', hasValue: true, hasBinding: true },
        { name: 'paused', hasValue: true, hasBinding: true },
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

export function VectorImage(): VectorImageBuilder {
  return createFluentBuilder('VectorImage', VECTORIMAGE_META) as unknown as VectorImageBuilder;
}

export namespace VectorImage {
  export namespace FillMode {
    export const NoResize = createEnumToken('VectorImage', 'FillMode', 'NoResize');
    export const PreserveAspectFit = createEnumToken(
      'VectorImage',
      'FillMode',
      'PreserveAspectFit',
    );
    export const PreserveAspectCrop = createEnumToken(
      'VectorImage',
      'FillMode',
      'PreserveAspectCrop',
    );
    export const Stretch = createEnumToken('VectorImage', 'FillMode', 'Stretch');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'VectorImage',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'VectorImage',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('VectorImage', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('VectorImage', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('VectorImage', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('VectorImage', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'VectorImage',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('VectorImage', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'VectorImage',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RendererType {
    export const GeometryRenderer = createEnumToken(
      'VectorImage',
      'RendererType',
      'GeometryRenderer',
    );
    export const CurveRenderer = createEnumToken('VectorImage', 'RendererType', 'CurveRenderer');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('VectorImage', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('VectorImage', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('VectorImage', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('VectorImage', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('VectorImage', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('VectorImage', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('VectorImage', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('VectorImage', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('VectorImage', 'TransformOrigin', 'BottomRight');
  }
}
