// AUTO-GENERATED — DO NOT EDIT
// Type: MapQuickItem
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlPoint, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface MapQuickItemBuilder {
  id(id: string): MapQuickItemBuilder;
  child(obj: QmlObjectBuilder): MapQuickItemBuilder;

  activeFocusOnTab(value: boolean): MapQuickItemBuilder;
  activeFocusOnTabBind(expr: string): MapQuickItemBuilder;
  anchorPoint(value: QmlPoint): MapQuickItemBuilder;
  anchorPointBind(expr: string): MapQuickItemBuilder;
  antialiasing(value: boolean): MapQuickItemBuilder;
  antialiasingBind(expr: string): MapQuickItemBuilder;
  autoFadeIn(value: boolean): MapQuickItemBuilder;
  autoFadeInBind(expr: string): MapQuickItemBuilder;
  baselineOffset(value: number): MapQuickItemBuilder;
  baselineOffsetBind(expr: string): MapQuickItemBuilder;
  clip(value: boolean): MapQuickItemBuilder;
  clipBind(expr: string): MapQuickItemBuilder;
  containmentMask(value: QtObjectBuilder): MapQuickItemBuilder;
  containmentMaskBind(expr: string): MapQuickItemBuilder;
  coordinate(value: QmlValue): MapQuickItemBuilder;
  coordinateBind(expr: string): MapQuickItemBuilder;
  enabled(value: boolean): MapQuickItemBuilder;
  enabledBind(expr: string): MapQuickItemBuilder;
  focus(value: boolean): MapQuickItemBuilder;
  focusBind(expr: string): MapQuickItemBuilder;
  focusPolicy(value: QmlEnumToken): MapQuickItemBuilder;
  focusPolicyBind(expr: string): MapQuickItemBuilder;
  geoShape(value: QmlValue): MapQuickItemBuilder;
  geoShapeBind(expr: string): MapQuickItemBuilder;
  height(value: number): MapQuickItemBuilder;
  heightBind(expr: string): MapQuickItemBuilder;
  implicitHeight(value: number): MapQuickItemBuilder;
  implicitHeightBind(expr: string): MapQuickItemBuilder;
  implicitWidth(value: number): MapQuickItemBuilder;
  implicitWidthBind(expr: string): MapQuickItemBuilder;
  lodThreshold(value: number): MapQuickItemBuilder;
  lodThresholdBind(expr: string): MapQuickItemBuilder;
  objectName(value: string): MapQuickItemBuilder;
  objectNameBind(expr: string): MapQuickItemBuilder;
  opacity(value: number): MapQuickItemBuilder;
  opacityBind(expr: string): MapQuickItemBuilder;
  palette(value: PaletteBuilder): MapQuickItemBuilder;
  paletteBind(expr: string): MapQuickItemBuilder;
  parent(value: ItemBuilder): MapQuickItemBuilder;
  parentBind(expr: string): MapQuickItemBuilder;
  referenceSurface(value: QmlEnumToken): MapQuickItemBuilder;
  referenceSurfaceBind(expr: string): MapQuickItemBuilder;
  rotation(value: number): MapQuickItemBuilder;
  rotationBind(expr: string): MapQuickItemBuilder;
  scale(value: number): MapQuickItemBuilder;
  scaleBind(expr: string): MapQuickItemBuilder;
  smooth(value: boolean): MapQuickItemBuilder;
  smoothBind(expr: string): MapQuickItemBuilder;
  sourceItem(value: ItemBuilder): MapQuickItemBuilder;
  sourceItemBind(expr: string): MapQuickItemBuilder;
  state(value: string): MapQuickItemBuilder;
  stateBind(expr: string): MapQuickItemBuilder;
  transformOrigin(value: QmlEnumToken): MapQuickItemBuilder;
  transformOriginBind(expr: string): MapQuickItemBuilder;
  visible(value: boolean): MapQuickItemBuilder;
  visibleBind(expr: string): MapQuickItemBuilder;
  width(value: number): MapQuickItemBuilder;
  widthBind(expr: string): MapQuickItemBuilder;
  x(value: number): MapQuickItemBuilder;
  xBind(expr: string): MapQuickItemBuilder;
  y(value: number): MapQuickItemBuilder;
  yBind(expr: string): MapQuickItemBuilder;
  z(value: number): MapQuickItemBuilder;
  zBind(expr: string): MapQuickItemBuilder;
  zoomLevel(value: number): MapQuickItemBuilder;
  zoomLevelBind(expr: string): MapQuickItemBuilder;
  onActiveFocusChanged(body: string): MapQuickItemBuilder;
  onActiveFocusOnTabChanged(body: string): MapQuickItemBuilder;
  onAddTransitionFinished(body: string): MapQuickItemBuilder;
  onAnchorPointChanged(body: string): MapQuickItemBuilder;
  onAntialiasingChanged(body: string): MapQuickItemBuilder;
  onBaselineOffsetChanged(body: string): MapQuickItemBuilder;
  onChildrenChanged(body: string): MapQuickItemBuilder;
  onChildrenRectChanged(body: string): MapQuickItemBuilder;
  onClipChanged(body: string): MapQuickItemBuilder;
  onContainmentMaskChanged(body: string): MapQuickItemBuilder;
  onCoordinateChanged(body: string): MapQuickItemBuilder;
  onEnabledChanged(body: string): MapQuickItemBuilder;
  onFocusChanged(body: string): MapQuickItemBuilder;
  onFocusPolicyChanged(body: string): MapQuickItemBuilder;
  onHeightChanged(body: string): MapQuickItemBuilder;
  onImplicitHeightChanged(body: string): MapQuickItemBuilder;
  onImplicitWidthChanged(body: string): MapQuickItemBuilder;
  onLodThresholdChanged(body: string): MapQuickItemBuilder;
  onMapItemOpacityChanged(body: string): MapQuickItemBuilder;
  onObjectNameChanged(body: string): MapQuickItemBuilder;
  onOpacityChanged(body: string): MapQuickItemBuilder;
  onPaletteChanged(body: string): MapQuickItemBuilder;
  onPaletteCreated(body: string): MapQuickItemBuilder;
  onParentChanged(body: string): MapQuickItemBuilder;
  onReferenceSurfaceChanged(body: string): MapQuickItemBuilder;
  onRemoveTransitionFinished(body: string): MapQuickItemBuilder;
  onRotationChanged(body: string): MapQuickItemBuilder;
  onScaleChanged(body: string): MapQuickItemBuilder;
  onSmoothChanged(body: string): MapQuickItemBuilder;
  onSourceItemChanged(body: string): MapQuickItemBuilder;
  onStateChanged(body: string): MapQuickItemBuilder;
  onTransformOriginChanged(body: string): MapQuickItemBuilder;
  onVisibleChanged(body: string): MapQuickItemBuilder;
  onVisibleChildrenChanged(body: string): MapQuickItemBuilder;
  onWidthChanged(body: string): MapQuickItemBuilder;
  onWindowChanged(body: string): MapQuickItemBuilder;
  onXChanged(body: string): MapQuickItemBuilder;
  onYChanged(body: string): MapQuickItemBuilder;
  onZChanged(body: string): MapQuickItemBuilder;
  onZoomLevelChanged(body: string): MapQuickItemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapQuickItemBuilder;
  layer(setup: (b: LayerBuilder) => void): MapQuickItemBuilder;
}

const MAPQUICKITEM_META: TypeMetadata = {
  typeName: 'MapQuickItem',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'anchorPoint', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoFadeIn', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'coordinate', hasValue: true, hasBinding: true },
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
    { name: 'referenceSurface', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'sourceItem', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
    { name: 'zoomLevel', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAddTransitionFinished', paramCount: 0 },
    { handlerName: 'onAnchorPointChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCoordinateChanged', paramCount: 0 },
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
    { handlerName: 'onReferenceSurfaceChanged', paramCount: 0 },
    { handlerName: 'onRemoveTransitionFinished', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceItemChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
    { handlerName: 'onZoomLevelChanged', paramCount: 0 },
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
};

export function MapQuickItem(): MapQuickItemBuilder {
  return createFluentBuilder('MapQuickItem', MAPQUICKITEM_META) as unknown as MapQuickItemBuilder;
}

export namespace MapQuickItem {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MapQuickItem', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MapQuickItem', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MapQuickItem', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapQuickItem', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapQuickItem', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapQuickItem', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MapQuickItem', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MapQuickItem', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MapQuickItem', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MapQuickItem', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MapQuickItem', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapQuickItem', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapQuickItem', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapQuickItem', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapQuickItem', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapQuickItem', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapQuickItem', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapQuickItem', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapQuickItem', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapQuickItem', 'TransformOrigin', 'BottomRight');
  }
}
