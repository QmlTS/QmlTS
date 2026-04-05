// AUTO-GENERATED — DO NOT EDIT
// Type: MapPolyline
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { BorderBuilder } from './QDeclarativeMapLineProperties.js';
export interface MapPolylineBuilder {
  id(id: string): MapPolylineBuilder;
  child(obj: QmlObjectBuilder): MapPolylineBuilder;

  activeFocusOnTab(value: boolean): MapPolylineBuilder;
  activeFocusOnTabBind(expr: string): MapPolylineBuilder;
  antialiasing(value: boolean): MapPolylineBuilder;
  antialiasingBind(expr: string): MapPolylineBuilder;
  autoFadeIn(value: boolean): MapPolylineBuilder;
  autoFadeInBind(expr: string): MapPolylineBuilder;
  baselineOffset(value: number): MapPolylineBuilder;
  baselineOffsetBind(expr: string): MapPolylineBuilder;
  clip(value: boolean): MapPolylineBuilder;
  clipBind(expr: string): MapPolylineBuilder;
  containmentMask(value: QtObjectBuilder): MapPolylineBuilder;
  containmentMaskBind(expr: string): MapPolylineBuilder;
  enabled(value: boolean): MapPolylineBuilder;
  enabledBind(expr: string): MapPolylineBuilder;
  focus(value: boolean): MapPolylineBuilder;
  focusBind(expr: string): MapPolylineBuilder;
  focusPolicy(value: QmlEnumToken): MapPolylineBuilder;
  focusPolicyBind(expr: string): MapPolylineBuilder;
  geoShape(value: QmlValue): MapPolylineBuilder;
  geoShapeBind(expr: string): MapPolylineBuilder;
  height(value: number): MapPolylineBuilder;
  heightBind(expr: string): MapPolylineBuilder;
  implicitHeight(value: number): MapPolylineBuilder;
  implicitHeightBind(expr: string): MapPolylineBuilder;
  implicitWidth(value: number): MapPolylineBuilder;
  implicitWidthBind(expr: string): MapPolylineBuilder;
  lodThreshold(value: number): MapPolylineBuilder;
  lodThresholdBind(expr: string): MapPolylineBuilder;
  objectName(value: string): MapPolylineBuilder;
  objectNameBind(expr: string): MapPolylineBuilder;
  opacity(value: number): MapPolylineBuilder;
  opacityBind(expr: string): MapPolylineBuilder;
  palette(value: PaletteBuilder): MapPolylineBuilder;
  paletteBind(expr: string): MapPolylineBuilder;
  parent(value: ItemBuilder): MapPolylineBuilder;
  parentBind(expr: string): MapPolylineBuilder;
  path(value: QmlValue): MapPolylineBuilder;
  pathBind(expr: string): MapPolylineBuilder;
  referenceSurface(value: QmlEnumToken): MapPolylineBuilder;
  referenceSurfaceBind(expr: string): MapPolylineBuilder;
  rotation(value: number): MapPolylineBuilder;
  rotationBind(expr: string): MapPolylineBuilder;
  scale(value: number): MapPolylineBuilder;
  scaleBind(expr: string): MapPolylineBuilder;
  smooth(value: boolean): MapPolylineBuilder;
  smoothBind(expr: string): MapPolylineBuilder;
  state(value: string): MapPolylineBuilder;
  stateBind(expr: string): MapPolylineBuilder;
  transformOrigin(value: QmlEnumToken): MapPolylineBuilder;
  transformOriginBind(expr: string): MapPolylineBuilder;
  visible(value: boolean): MapPolylineBuilder;
  visibleBind(expr: string): MapPolylineBuilder;
  width(value: number): MapPolylineBuilder;
  widthBind(expr: string): MapPolylineBuilder;
  x(value: number): MapPolylineBuilder;
  xBind(expr: string): MapPolylineBuilder;
  y(value: number): MapPolylineBuilder;
  yBind(expr: string): MapPolylineBuilder;
  z(value: number): MapPolylineBuilder;
  zBind(expr: string): MapPolylineBuilder;
  onActiveFocusChanged(body: string): MapPolylineBuilder;
  onActiveFocusOnTabChanged(body: string): MapPolylineBuilder;
  onAddTransitionFinished(body: string): MapPolylineBuilder;
  onAntialiasingChanged(body: string): MapPolylineBuilder;
  onBaselineOffsetChanged(body: string): MapPolylineBuilder;
  onChildrenChanged(body: string): MapPolylineBuilder;
  onChildrenRectChanged(body: string): MapPolylineBuilder;
  onClipChanged(body: string): MapPolylineBuilder;
  onContainmentMaskChanged(body: string): MapPolylineBuilder;
  onEnabledChanged(body: string): MapPolylineBuilder;
  onFocusChanged(body: string): MapPolylineBuilder;
  onFocusPolicyChanged(body: string): MapPolylineBuilder;
  onHeightChanged(body: string): MapPolylineBuilder;
  onImplicitHeightChanged(body: string): MapPolylineBuilder;
  onImplicitWidthChanged(body: string): MapPolylineBuilder;
  onLodThresholdChanged(body: string): MapPolylineBuilder;
  onMapItemOpacityChanged(body: string): MapPolylineBuilder;
  onObjectNameChanged(body: string): MapPolylineBuilder;
  onOpacityChanged(body: string): MapPolylineBuilder;
  onPaletteChanged(body: string): MapPolylineBuilder;
  onPaletteCreated(body: string): MapPolylineBuilder;
  onParentChanged(body: string): MapPolylineBuilder;
  onPathChanged(body: string): MapPolylineBuilder;
  onReferenceSurfaceChanged(body: string): MapPolylineBuilder;
  onRemoveTransitionFinished(body: string): MapPolylineBuilder;
  onRotationChanged(body: string): MapPolylineBuilder;
  onScaleChanged(body: string): MapPolylineBuilder;
  onSmoothChanged(body: string): MapPolylineBuilder;
  onStateChanged(body: string): MapPolylineBuilder;
  onTransformOriginChanged(body: string): MapPolylineBuilder;
  onVisibleChanged(body: string): MapPolylineBuilder;
  onVisibleChildrenChanged(body: string): MapPolylineBuilder;
  onWidthChanged(body: string): MapPolylineBuilder;
  onWindowChanged(body: string): MapPolylineBuilder;
  onXChanged(body: string): MapPolylineBuilder;
  onYChanged(body: string): MapPolylineBuilder;
  onZChanged(body: string): MapPolylineBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapPolylineBuilder;
  layer(setup: (b: LayerBuilder) => void): MapPolylineBuilder;
  line(setup: (b: BorderBuilder) => void): MapPolylineBuilder;
}

const MAPPOLYLINE_META: TypeMetadata = {
  typeName: 'MapPolyline',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoFadeIn', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'geoShape', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'lodThreshold', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'path', hasValue: true, hasBinding: true },
    { name: 'referenceSurface', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAddTransitionFinished', paramCount: 0 },
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
    { handlerName: 'onLodThresholdChanged', paramCount: 0 },
    { handlerName: 'onMapItemOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPathChanged', paramCount: 0 },
    { handlerName: 'onReferenceSurfaceChanged', paramCount: 0 },
    { handlerName: 'onRemoveTransitionFinished', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
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
    {
      methodName: 'line',
      groupName: 'line',
      properties: [
        { name: 'color', hasValue: true, hasBinding: true },
        { name: 'width', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
  ],
};

export function MapPolyline(): MapPolylineBuilder {
  return createFluentBuilder('MapPolyline', MAPPOLYLINE_META) as unknown as MapPolylineBuilder;
}

export namespace MapPolyline {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MapPolyline', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MapPolyline', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MapPolyline', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapPolyline', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapPolyline', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapPolyline', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MapPolyline', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MapPolyline', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MapPolyline', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MapPolyline', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MapPolyline', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapPolyline', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapPolyline', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapPolyline', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapPolyline', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapPolyline', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapPolyline', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapPolyline', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapPolyline', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapPolyline', 'TransformOrigin', 'BottomRight');
  }
}
