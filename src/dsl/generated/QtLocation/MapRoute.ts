// AUTO-GENERATED — DO NOT EDIT
// Type: MapRoute
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { BorderBuilder } from './QDeclarativeMapLineProperties.js';
export interface MapRouteBuilder {
  id(id: string): MapRouteBuilder;
  child(obj: QmlObjectBuilder): MapRouteBuilder;

  activeFocusOnTab(value: boolean): MapRouteBuilder;
  activeFocusOnTabBind(expr: string): MapRouteBuilder;
  antialiasing(value: boolean): MapRouteBuilder;
  antialiasingBind(expr: string): MapRouteBuilder;
  autoFadeIn(value: boolean): MapRouteBuilder;
  autoFadeInBind(expr: string): MapRouteBuilder;
  baselineOffset(value: number): MapRouteBuilder;
  baselineOffsetBind(expr: string): MapRouteBuilder;
  clip(value: boolean): MapRouteBuilder;
  clipBind(expr: string): MapRouteBuilder;
  containmentMask(value: QtObjectBuilder): MapRouteBuilder;
  containmentMaskBind(expr: string): MapRouteBuilder;
  enabled(value: boolean): MapRouteBuilder;
  enabledBind(expr: string): MapRouteBuilder;
  focus(value: boolean): MapRouteBuilder;
  focusBind(expr: string): MapRouteBuilder;
  focusPolicy(value: QmlEnumToken): MapRouteBuilder;
  focusPolicyBind(expr: string): MapRouteBuilder;
  geoShape(value: QmlValue): MapRouteBuilder;
  geoShapeBind(expr: string): MapRouteBuilder;
  height(value: number): MapRouteBuilder;
  heightBind(expr: string): MapRouteBuilder;
  implicitHeight(value: number): MapRouteBuilder;
  implicitHeightBind(expr: string): MapRouteBuilder;
  implicitWidth(value: number): MapRouteBuilder;
  implicitWidthBind(expr: string): MapRouteBuilder;
  lodThreshold(value: number): MapRouteBuilder;
  lodThresholdBind(expr: string): MapRouteBuilder;
  objectName(value: string): MapRouteBuilder;
  objectNameBind(expr: string): MapRouteBuilder;
  opacity(value: number): MapRouteBuilder;
  opacityBind(expr: string): MapRouteBuilder;
  palette(value: PaletteBuilder): MapRouteBuilder;
  paletteBind(expr: string): MapRouteBuilder;
  parent(value: ItemBuilder): MapRouteBuilder;
  parentBind(expr: string): MapRouteBuilder;
  path(value: QmlValue): MapRouteBuilder;
  pathBind(expr: string): MapRouteBuilder;
  referenceSurface(value: QmlEnumToken): MapRouteBuilder;
  referenceSurfaceBind(expr: string): MapRouteBuilder;
  rotation(value: number): MapRouteBuilder;
  rotationBind(expr: string): MapRouteBuilder;
  route(value: QmlValue): MapRouteBuilder;
  routeBind(expr: string): MapRouteBuilder;
  scale(value: number): MapRouteBuilder;
  scaleBind(expr: string): MapRouteBuilder;
  smooth(value: boolean): MapRouteBuilder;
  smoothBind(expr: string): MapRouteBuilder;
  state(value: string): MapRouteBuilder;
  stateBind(expr: string): MapRouteBuilder;
  transformOrigin(value: QmlEnumToken): MapRouteBuilder;
  transformOriginBind(expr: string): MapRouteBuilder;
  visible(value: boolean): MapRouteBuilder;
  visibleBind(expr: string): MapRouteBuilder;
  width(value: number): MapRouteBuilder;
  widthBind(expr: string): MapRouteBuilder;
  x(value: number): MapRouteBuilder;
  xBind(expr: string): MapRouteBuilder;
  y(value: number): MapRouteBuilder;
  yBind(expr: string): MapRouteBuilder;
  z(value: number): MapRouteBuilder;
  zBind(expr: string): MapRouteBuilder;
  onActiveFocusChanged(body: string): MapRouteBuilder;
  onActiveFocusOnTabChanged(body: string): MapRouteBuilder;
  onAddTransitionFinished(body: string): MapRouteBuilder;
  onAntialiasingChanged(body: string): MapRouteBuilder;
  onBaselineOffsetChanged(body: string): MapRouteBuilder;
  onChildrenChanged(body: string): MapRouteBuilder;
  onChildrenRectChanged(body: string): MapRouteBuilder;
  onClipChanged(body: string): MapRouteBuilder;
  onContainmentMaskChanged(body: string): MapRouteBuilder;
  onEnabledChanged(body: string): MapRouteBuilder;
  onFocusChanged(body: string): MapRouteBuilder;
  onFocusPolicyChanged(body: string): MapRouteBuilder;
  onHeightChanged(body: string): MapRouteBuilder;
  onImplicitHeightChanged(body: string): MapRouteBuilder;
  onImplicitWidthChanged(body: string): MapRouteBuilder;
  onLodThresholdChanged(body: string): MapRouteBuilder;
  onMapItemOpacityChanged(body: string): MapRouteBuilder;
  onObjectNameChanged(body: string): MapRouteBuilder;
  onOpacityChanged(body: string): MapRouteBuilder;
  onPaletteChanged(body: string): MapRouteBuilder;
  onPaletteCreated(body: string): MapRouteBuilder;
  onParentChanged(body: string): MapRouteBuilder;
  onPathChanged(body: string): MapRouteBuilder;
  onReferenceSurfaceChanged(body: string): MapRouteBuilder;
  onRemoveTransitionFinished(body: string): MapRouteBuilder;
  onRotationChanged(body: string): MapRouteBuilder;
  onRouteChanged(body: string): MapRouteBuilder;
  onScaleChanged(body: string): MapRouteBuilder;
  onSmoothChanged(body: string): MapRouteBuilder;
  onStateChanged(body: string): MapRouteBuilder;
  onTransformOriginChanged(body: string): MapRouteBuilder;
  onVisibleChanged(body: string): MapRouteBuilder;
  onVisibleChildrenChanged(body: string): MapRouteBuilder;
  onWidthChanged(body: string): MapRouteBuilder;
  onWindowChanged(body: string): MapRouteBuilder;
  onXChanged(body: string): MapRouteBuilder;
  onYChanged(body: string): MapRouteBuilder;
  onZChanged(body: string): MapRouteBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapRouteBuilder;
  layer(setup: (b: LayerBuilder) => void): MapRouteBuilder;
  line(setup: (b: BorderBuilder) => void): MapRouteBuilder;
}

const MAPROUTE_META: TypeMetadata = {
  typeName: 'MapRoute',
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
    { name: 'route', hasValue: true, hasBinding: true },
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
    { handlerName: 'onRouteChanged', paramCount: 1 },
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

export function MapRoute(): MapRouteBuilder {
  return createFluentBuilder('MapRoute', MAPROUTE_META) as unknown as MapRouteBuilder;
}

export namespace MapRoute {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MapRoute', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MapRoute', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MapRoute', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapRoute', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapRoute', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapRoute', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MapRoute', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MapRoute', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MapRoute', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MapRoute', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MapRoute', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapRoute', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapRoute', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapRoute', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapRoute', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapRoute', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapRoute', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapRoute', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapRoute', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapRoute', 'TransformOrigin', 'BottomRight');
  }
}
