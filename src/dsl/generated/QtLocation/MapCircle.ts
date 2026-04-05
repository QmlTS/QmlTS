// AUTO-GENERATED — DO NOT EDIT
// Type: MapCircle
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { BorderBuilder } from './QDeclarativeMapLineProperties.js';
export interface MapCircleBuilder {
  id(id: string): MapCircleBuilder;
  child(obj: QmlObjectBuilder): MapCircleBuilder;

  activeFocusOnTab(value: boolean): MapCircleBuilder;
  activeFocusOnTabBind(expr: string): MapCircleBuilder;
  antialiasing(value: boolean): MapCircleBuilder;
  antialiasingBind(expr: string): MapCircleBuilder;
  autoFadeIn(value: boolean): MapCircleBuilder;
  autoFadeInBind(expr: string): MapCircleBuilder;
  baselineOffset(value: number): MapCircleBuilder;
  baselineOffsetBind(expr: string): MapCircleBuilder;
  center(value: QmlValue): MapCircleBuilder;
  centerBind(expr: string): MapCircleBuilder;
  clip(value: boolean): MapCircleBuilder;
  clipBind(expr: string): MapCircleBuilder;
  color(value: QmlColor): MapCircleBuilder;
  colorBind(expr: string): MapCircleBuilder;
  containmentMask(value: QtObjectBuilder): MapCircleBuilder;
  containmentMaskBind(expr: string): MapCircleBuilder;
  enabled(value: boolean): MapCircleBuilder;
  enabledBind(expr: string): MapCircleBuilder;
  focus(value: boolean): MapCircleBuilder;
  focusBind(expr: string): MapCircleBuilder;
  focusPolicy(value: QmlEnumToken): MapCircleBuilder;
  focusPolicyBind(expr: string): MapCircleBuilder;
  geoShape(value: QmlValue): MapCircleBuilder;
  geoShapeBind(expr: string): MapCircleBuilder;
  height(value: number): MapCircleBuilder;
  heightBind(expr: string): MapCircleBuilder;
  implicitHeight(value: number): MapCircleBuilder;
  implicitHeightBind(expr: string): MapCircleBuilder;
  implicitWidth(value: number): MapCircleBuilder;
  implicitWidthBind(expr: string): MapCircleBuilder;
  lodThreshold(value: number): MapCircleBuilder;
  lodThresholdBind(expr: string): MapCircleBuilder;
  objectName(value: string): MapCircleBuilder;
  objectNameBind(expr: string): MapCircleBuilder;
  opacity(value: number): MapCircleBuilder;
  opacityBind(expr: string): MapCircleBuilder;
  palette(value: PaletteBuilder): MapCircleBuilder;
  paletteBind(expr: string): MapCircleBuilder;
  parent(value: ItemBuilder): MapCircleBuilder;
  parentBind(expr: string): MapCircleBuilder;
  radius(value: number): MapCircleBuilder;
  radiusBind(expr: string): MapCircleBuilder;
  referenceSurface(value: QmlEnumToken): MapCircleBuilder;
  referenceSurfaceBind(expr: string): MapCircleBuilder;
  rotation(value: number): MapCircleBuilder;
  rotationBind(expr: string): MapCircleBuilder;
  scale(value: number): MapCircleBuilder;
  scaleBind(expr: string): MapCircleBuilder;
  smooth(value: boolean): MapCircleBuilder;
  smoothBind(expr: string): MapCircleBuilder;
  state(value: string): MapCircleBuilder;
  stateBind(expr: string): MapCircleBuilder;
  transformOrigin(value: QmlEnumToken): MapCircleBuilder;
  transformOriginBind(expr: string): MapCircleBuilder;
  visible(value: boolean): MapCircleBuilder;
  visibleBind(expr: string): MapCircleBuilder;
  width(value: number): MapCircleBuilder;
  widthBind(expr: string): MapCircleBuilder;
  x(value: number): MapCircleBuilder;
  xBind(expr: string): MapCircleBuilder;
  y(value: number): MapCircleBuilder;
  yBind(expr: string): MapCircleBuilder;
  z(value: number): MapCircleBuilder;
  zBind(expr: string): MapCircleBuilder;
  onActiveFocusChanged(body: string): MapCircleBuilder;
  onActiveFocusOnTabChanged(body: string): MapCircleBuilder;
  onAddTransitionFinished(body: string): MapCircleBuilder;
  onAntialiasingChanged(body: string): MapCircleBuilder;
  onBaselineOffsetChanged(body: string): MapCircleBuilder;
  onCenterChanged(body: string): MapCircleBuilder;
  onChildrenChanged(body: string): MapCircleBuilder;
  onChildrenRectChanged(body: string): MapCircleBuilder;
  onClipChanged(body: string): MapCircleBuilder;
  onColorChanged(body: string): MapCircleBuilder;
  onContainmentMaskChanged(body: string): MapCircleBuilder;
  onEnabledChanged(body: string): MapCircleBuilder;
  onFocusChanged(body: string): MapCircleBuilder;
  onFocusPolicyChanged(body: string): MapCircleBuilder;
  onHeightChanged(body: string): MapCircleBuilder;
  onImplicitHeightChanged(body: string): MapCircleBuilder;
  onImplicitWidthChanged(body: string): MapCircleBuilder;
  onLodThresholdChanged(body: string): MapCircleBuilder;
  onMapItemOpacityChanged(body: string): MapCircleBuilder;
  onObjectNameChanged(body: string): MapCircleBuilder;
  onOpacityChanged(body: string): MapCircleBuilder;
  onPaletteChanged(body: string): MapCircleBuilder;
  onPaletteCreated(body: string): MapCircleBuilder;
  onParentChanged(body: string): MapCircleBuilder;
  onRadiusChanged(body: string): MapCircleBuilder;
  onReferenceSurfaceChanged(body: string): MapCircleBuilder;
  onRemoveTransitionFinished(body: string): MapCircleBuilder;
  onRotationChanged(body: string): MapCircleBuilder;
  onScaleChanged(body: string): MapCircleBuilder;
  onSmoothChanged(body: string): MapCircleBuilder;
  onStateChanged(body: string): MapCircleBuilder;
  onTransformOriginChanged(body: string): MapCircleBuilder;
  onVisibleChanged(body: string): MapCircleBuilder;
  onVisibleChildrenChanged(body: string): MapCircleBuilder;
  onWidthChanged(body: string): MapCircleBuilder;
  onWindowChanged(body: string): MapCircleBuilder;
  onXChanged(body: string): MapCircleBuilder;
  onYChanged(body: string): MapCircleBuilder;
  onZChanged(body: string): MapCircleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapCircleBuilder;
  border(setup: (b: BorderBuilder) => void): MapCircleBuilder;
  layer(setup: (b: LayerBuilder) => void): MapCircleBuilder;
}

const MAPCIRCLE_META: TypeMetadata = {
  typeName: 'MapCircle',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoFadeIn', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'center', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
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
    { name: 'radius', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCenterChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
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
    { handlerName: 'onRadiusChanged', paramCount: 1 },
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
      methodName: 'border',
      groupName: 'border',
      properties: [
        { name: 'color', hasValue: true, hasBinding: true },
        { name: 'width', hasValue: true, hasBinding: true },
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

export function MapCircle(): MapCircleBuilder {
  return createFluentBuilder('MapCircle', MAPCIRCLE_META) as unknown as MapCircleBuilder;
}

export namespace MapCircle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MapCircle', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MapCircle', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MapCircle', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapCircle', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapCircle', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapCircle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MapCircle', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MapCircle', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MapCircle', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MapCircle', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MapCircle', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapCircle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapCircle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapCircle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapCircle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapCircle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapCircle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapCircle', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapCircle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapCircle', 'TransformOrigin', 'BottomRight');
  }
}
