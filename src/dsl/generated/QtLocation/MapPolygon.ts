// AUTO-GENERATED — DO NOT EDIT
// Type: MapPolygon
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
import type { BorderBuilder } from './QDeclarativeMapLineProperties.js';
export interface MapPolygonBuilder {
  id(id: string): MapPolygonBuilder;
  child(obj: QmlObjectBuilder): MapPolygonBuilder;
  children(...objs: QmlObjectBuilder[]): MapPolygonBuilder;

  activeFocusOnTab(value: boolean): MapPolygonBuilder;
  activeFocusOnTabBind(expr: string): MapPolygonBuilder;
  antialiasing(value: boolean): MapPolygonBuilder;
  antialiasingBind(expr: string): MapPolygonBuilder;
  autoFadeIn(value: boolean): MapPolygonBuilder;
  autoFadeInBind(expr: string): MapPolygonBuilder;
  baselineOffset(value: number): MapPolygonBuilder;
  baselineOffsetBind(expr: string): MapPolygonBuilder;
  clip(value: boolean): MapPolygonBuilder;
  clipBind(expr: string): MapPolygonBuilder;
  color(value: QmlColor): MapPolygonBuilder;
  colorBind(expr: string): MapPolygonBuilder;
  containmentMask(value: QtObjectBuilder): MapPolygonBuilder;
  containmentMaskBind(expr: string): MapPolygonBuilder;
  enabled(value: boolean): MapPolygonBuilder;
  enabledBind(expr: string): MapPolygonBuilder;
  focus(value: boolean): MapPolygonBuilder;
  focusBind(expr: string): MapPolygonBuilder;
  focusPolicy(value: QmlEnumToken): MapPolygonBuilder;
  focusPolicyBind(expr: string): MapPolygonBuilder;
  geoShape(value: QmlValue): MapPolygonBuilder;
  geoShapeBind(expr: string): MapPolygonBuilder;
  height(value: number): MapPolygonBuilder;
  heightBind(expr: string): MapPolygonBuilder;
  implicitHeight(value: number): MapPolygonBuilder;
  implicitHeightBind(expr: string): MapPolygonBuilder;
  implicitWidth(value: number): MapPolygonBuilder;
  implicitWidthBind(expr: string): MapPolygonBuilder;
  lodThreshold(value: number): MapPolygonBuilder;
  lodThresholdBind(expr: string): MapPolygonBuilder;
  objectName(value: string): MapPolygonBuilder;
  objectNameBind(expr: string): MapPolygonBuilder;
  opacity(value: number): MapPolygonBuilder;
  opacityBind(expr: string): MapPolygonBuilder;
  palette(value: PaletteBuilder): MapPolygonBuilder;
  paletteBind(expr: string): MapPolygonBuilder;
  parent(value: ItemBuilder): MapPolygonBuilder;
  parentBind(expr: string): MapPolygonBuilder;
  path(value: QmlValue): MapPolygonBuilder;
  pathBind(expr: string): MapPolygonBuilder;
  referenceSurface(value: QmlEnumToken): MapPolygonBuilder;
  referenceSurfaceBind(expr: string): MapPolygonBuilder;
  rotation(value: number): MapPolygonBuilder;
  rotationBind(expr: string): MapPolygonBuilder;
  scale(value: number): MapPolygonBuilder;
  scaleBind(expr: string): MapPolygonBuilder;
  smooth(value: boolean): MapPolygonBuilder;
  smoothBind(expr: string): MapPolygonBuilder;
  state(value: string): MapPolygonBuilder;
  stateBind(expr: string): MapPolygonBuilder;
  transformOrigin(value: QmlEnumToken): MapPolygonBuilder;
  transformOriginBind(expr: string): MapPolygonBuilder;
  visible(value: boolean): MapPolygonBuilder;
  visibleBind(expr: string): MapPolygonBuilder;
  width(value: number): MapPolygonBuilder;
  widthBind(expr: string): MapPolygonBuilder;
  x(value: number): MapPolygonBuilder;
  xBind(expr: string): MapPolygonBuilder;
  y(value: number): MapPolygonBuilder;
  yBind(expr: string): MapPolygonBuilder;
  z(value: number): MapPolygonBuilder;
  zBind(expr: string): MapPolygonBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onAddTransitionFinished(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onClipChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onColorChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onLodThresholdChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onMapItemOpacityChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onParentChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onPathChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onReferenceSurfaceChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onRemoveTransitionFinished(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onStateChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onXChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onYChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  onZChanged(handler: DslSignalHandlerValue): MapPolygonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapPolygonBuilder;
  border(setup: (b: BorderBuilder) => void): MapPolygonBuilder;
  layer(setup: (b: LayerBuilder) => void): MapPolygonBuilder;
}

const MAPPOLYGON_META: TypeMetadata = {
  typeName: 'MapPolygon',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoFadeIn', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
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
  attached: [],
};

export function MapPolygon(): MapPolygonBuilder {
  return createFluentBuilder('MapPolygon', MAPPOLYGON_META) as unknown as MapPolygonBuilder;
}

export namespace MapPolygon {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MapPolygon',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MapPolygon',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MapPolygon', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapPolygon', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapPolygon', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapPolygon', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MapPolygon',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MapPolygon', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MapPolygon',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapPolygon', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapPolygon', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapPolygon', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapPolygon', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapPolygon', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapPolygon', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapPolygon', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapPolygon', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapPolygon', 'TransformOrigin', 'BottomRight');
  }
}
