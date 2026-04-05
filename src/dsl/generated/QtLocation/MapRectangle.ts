// AUTO-GENERATED — DO NOT EDIT
// Type: MapRectangle
// Generated from Qt 6.11.0

import type {
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
export interface MapRectangleBuilder {
  id(id: string): MapRectangleBuilder;
  child(obj: QmlObjectBuilder): MapRectangleBuilder;

  activeFocusOnTab(value: boolean): MapRectangleBuilder;
  activeFocusOnTabBind(expr: string): MapRectangleBuilder;
  antialiasing(value: boolean): MapRectangleBuilder;
  antialiasingBind(expr: string): MapRectangleBuilder;
  autoFadeIn(value: boolean): MapRectangleBuilder;
  autoFadeInBind(expr: string): MapRectangleBuilder;
  baselineOffset(value: number): MapRectangleBuilder;
  baselineOffsetBind(expr: string): MapRectangleBuilder;
  bottomRight(value: QmlValue): MapRectangleBuilder;
  bottomRightBind(expr: string): MapRectangleBuilder;
  clip(value: boolean): MapRectangleBuilder;
  clipBind(expr: string): MapRectangleBuilder;
  color(value: QmlColor): MapRectangleBuilder;
  colorBind(expr: string): MapRectangleBuilder;
  containmentMask(value: QtObjectBuilder): MapRectangleBuilder;
  containmentMaskBind(expr: string): MapRectangleBuilder;
  enabled(value: boolean): MapRectangleBuilder;
  enabledBind(expr: string): MapRectangleBuilder;
  focus(value: boolean): MapRectangleBuilder;
  focusBind(expr: string): MapRectangleBuilder;
  focusPolicy(value: QmlEnumToken): MapRectangleBuilder;
  focusPolicyBind(expr: string): MapRectangleBuilder;
  geoShape(value: QmlValue): MapRectangleBuilder;
  geoShapeBind(expr: string): MapRectangleBuilder;
  height(value: number): MapRectangleBuilder;
  heightBind(expr: string): MapRectangleBuilder;
  implicitHeight(value: number): MapRectangleBuilder;
  implicitHeightBind(expr: string): MapRectangleBuilder;
  implicitWidth(value: number): MapRectangleBuilder;
  implicitWidthBind(expr: string): MapRectangleBuilder;
  lodThreshold(value: number): MapRectangleBuilder;
  lodThresholdBind(expr: string): MapRectangleBuilder;
  objectName(value: string): MapRectangleBuilder;
  objectNameBind(expr: string): MapRectangleBuilder;
  opacity(value: number): MapRectangleBuilder;
  opacityBind(expr: string): MapRectangleBuilder;
  palette(value: PaletteBuilder): MapRectangleBuilder;
  paletteBind(expr: string): MapRectangleBuilder;
  parent(value: ItemBuilder): MapRectangleBuilder;
  parentBind(expr: string): MapRectangleBuilder;
  referenceSurface(value: QmlEnumToken): MapRectangleBuilder;
  referenceSurfaceBind(expr: string): MapRectangleBuilder;
  rotation(value: number): MapRectangleBuilder;
  rotationBind(expr: string): MapRectangleBuilder;
  scale(value: number): MapRectangleBuilder;
  scaleBind(expr: string): MapRectangleBuilder;
  smooth(value: boolean): MapRectangleBuilder;
  smoothBind(expr: string): MapRectangleBuilder;
  state(value: string): MapRectangleBuilder;
  stateBind(expr: string): MapRectangleBuilder;
  topLeft(value: QmlValue): MapRectangleBuilder;
  topLeftBind(expr: string): MapRectangleBuilder;
  transformOrigin(value: QmlEnumToken): MapRectangleBuilder;
  transformOriginBind(expr: string): MapRectangleBuilder;
  visible(value: boolean): MapRectangleBuilder;
  visibleBind(expr: string): MapRectangleBuilder;
  width(value: number): MapRectangleBuilder;
  widthBind(expr: string): MapRectangleBuilder;
  x(value: number): MapRectangleBuilder;
  xBind(expr: string): MapRectangleBuilder;
  y(value: number): MapRectangleBuilder;
  yBind(expr: string): MapRectangleBuilder;
  z(value: number): MapRectangleBuilder;
  zBind(expr: string): MapRectangleBuilder;
  onActiveFocusChanged(body: string): MapRectangleBuilder;
  onActiveFocusOnTabChanged(body: string): MapRectangleBuilder;
  onAddTransitionFinished(body: string): MapRectangleBuilder;
  onAntialiasingChanged(body: string): MapRectangleBuilder;
  onBaselineOffsetChanged(body: string): MapRectangleBuilder;
  onBottomRightChanged(body: string): MapRectangleBuilder;
  onChildrenChanged(body: string): MapRectangleBuilder;
  onChildrenRectChanged(body: string): MapRectangleBuilder;
  onClipChanged(body: string): MapRectangleBuilder;
  onColorChanged(body: string): MapRectangleBuilder;
  onContainmentMaskChanged(body: string): MapRectangleBuilder;
  onEnabledChanged(body: string): MapRectangleBuilder;
  onFocusChanged(body: string): MapRectangleBuilder;
  onFocusPolicyChanged(body: string): MapRectangleBuilder;
  onHeightChanged(body: string): MapRectangleBuilder;
  onImplicitHeightChanged(body: string): MapRectangleBuilder;
  onImplicitWidthChanged(body: string): MapRectangleBuilder;
  onLodThresholdChanged(body: string): MapRectangleBuilder;
  onMapItemOpacityChanged(body: string): MapRectangleBuilder;
  onObjectNameChanged(body: string): MapRectangleBuilder;
  onOpacityChanged(body: string): MapRectangleBuilder;
  onPaletteChanged(body: string): MapRectangleBuilder;
  onPaletteCreated(body: string): MapRectangleBuilder;
  onParentChanged(body: string): MapRectangleBuilder;
  onReferenceSurfaceChanged(body: string): MapRectangleBuilder;
  onRemoveTransitionFinished(body: string): MapRectangleBuilder;
  onRotationChanged(body: string): MapRectangleBuilder;
  onScaleChanged(body: string): MapRectangleBuilder;
  onSmoothChanged(body: string): MapRectangleBuilder;
  onStateChanged(body: string): MapRectangleBuilder;
  onTopLeftChanged(body: string): MapRectangleBuilder;
  onTransformOriginChanged(body: string): MapRectangleBuilder;
  onVisibleChanged(body: string): MapRectangleBuilder;
  onVisibleChildrenChanged(body: string): MapRectangleBuilder;
  onWidthChanged(body: string): MapRectangleBuilder;
  onWindowChanged(body: string): MapRectangleBuilder;
  onXChanged(body: string): MapRectangleBuilder;
  onYChanged(body: string): MapRectangleBuilder;
  onZChanged(body: string): MapRectangleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapRectangleBuilder;
  border(setup: (b: BorderBuilder) => void): MapRectangleBuilder;
  layer(setup: (b: LayerBuilder) => void): MapRectangleBuilder;
}

const MAPRECTANGLE_META: TypeMetadata = {
  typeName: 'MapRectangle',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoFadeIn', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomRight', hasValue: true, hasBinding: true },
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
    { name: 'referenceSurface', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topLeft', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBottomRightChanged', paramCount: 1 },
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
    { handlerName: 'onReferenceSurfaceChanged', paramCount: 0 },
    { handlerName: 'onRemoveTransitionFinished', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTopLeftChanged', paramCount: 1 },
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

export function MapRectangle(): MapRectangleBuilder {
  return createFluentBuilder('MapRectangle', MAPRECTANGLE_META) as unknown as MapRectangleBuilder;
}

export namespace MapRectangle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'MapRectangle',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'MapRectangle',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('MapRectangle', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapRectangle', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapRectangle', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapRectangle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'MapRectangle',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('MapRectangle', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'MapRectangle',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapRectangle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapRectangle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapRectangle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapRectangle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapRectangle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapRectangle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapRectangle', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapRectangle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapRectangle', 'TransformOrigin', 'BottomRight');
  }
}
