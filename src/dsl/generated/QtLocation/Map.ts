// AUTO-GENERATED — DO NOT EDIT
// Type: Map
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { PluginBuilder } from './Plugin.js';
export interface MapBuilder {
  id(id: string): MapBuilder;
  child(obj: QmlObjectBuilder): MapBuilder;
  children(...objs: QmlObjectBuilder[]): MapBuilder;

  activeFocusOnTab(value: boolean): MapBuilder;
  activeFocusOnTabBind(expr: string): MapBuilder;
  activeMapType(value: QmlValue): MapBuilder;
  activeMapTypeBind(expr: string): MapBuilder;
  antialiasing(value: boolean): MapBuilder;
  antialiasingBind(expr: string): MapBuilder;
  baselineOffset(value: number): MapBuilder;
  baselineOffsetBind(expr: string): MapBuilder;
  bearing(value: number): MapBuilder;
  bearingBind(expr: string): MapBuilder;
  center(value: QmlValue): MapBuilder;
  centerBind(expr: string): MapBuilder;
  clip(value: boolean): MapBuilder;
  clipBind(expr: string): MapBuilder;
  color(value: QmlColor): MapBuilder;
  colorBind(expr: string): MapBuilder;
  containmentMask(value: QtObjectBuilder): MapBuilder;
  containmentMaskBind(expr: string): MapBuilder;
  copyrightsVisible(value: boolean): MapBuilder;
  copyrightsVisibleBind(expr: string): MapBuilder;
  enabled(value: boolean): MapBuilder;
  enabledBind(expr: string): MapBuilder;
  fieldOfView(value: number): MapBuilder;
  fieldOfViewBind(expr: string): MapBuilder;
  focus(value: boolean): MapBuilder;
  focusBind(expr: string): MapBuilder;
  focusPolicy(value: QmlEnumToken): MapBuilder;
  focusPolicyBind(expr: string): MapBuilder;
  height(value: number): MapBuilder;
  heightBind(expr: string): MapBuilder;
  implicitHeight(value: number): MapBuilder;
  implicitHeightBind(expr: string): MapBuilder;
  implicitWidth(value: number): MapBuilder;
  implicitWidthBind(expr: string): MapBuilder;
  maximumFieldOfView(value: number): MapBuilder;
  maximumFieldOfViewBind(expr: string): MapBuilder;
  maximumTilt(value: number): MapBuilder;
  maximumTiltBind(expr: string): MapBuilder;
  maximumZoomLevel(value: number): MapBuilder;
  maximumZoomLevelBind(expr: string): MapBuilder;
  minimumFieldOfView(value: number): MapBuilder;
  minimumFieldOfViewBind(expr: string): MapBuilder;
  minimumTilt(value: number): MapBuilder;
  minimumTiltBind(expr: string): MapBuilder;
  minimumZoomLevel(value: number): MapBuilder;
  minimumZoomLevelBind(expr: string): MapBuilder;
  objectName(value: string): MapBuilder;
  objectNameBind(expr: string): MapBuilder;
  opacity(value: number): MapBuilder;
  opacityBind(expr: string): MapBuilder;
  palette(value: PaletteBuilder): MapBuilder;
  paletteBind(expr: string): MapBuilder;
  parent(value: ItemBuilder): MapBuilder;
  parentBind(expr: string): MapBuilder;
  plugin(value: PluginBuilder): MapBuilder;
  pluginBind(expr: string): MapBuilder;
  rotation(value: number): MapBuilder;
  rotationBind(expr: string): MapBuilder;
  scale(value: number): MapBuilder;
  scaleBind(expr: string): MapBuilder;
  smooth(value: boolean): MapBuilder;
  smoothBind(expr: string): MapBuilder;
  state(value: string): MapBuilder;
  stateBind(expr: string): MapBuilder;
  tilt(value: number): MapBuilder;
  tiltBind(expr: string): MapBuilder;
  transformOrigin(value: QmlEnumToken): MapBuilder;
  transformOriginBind(expr: string): MapBuilder;
  visible(value: boolean): MapBuilder;
  visibleBind(expr: string): MapBuilder;
  visibleArea(value: QmlRect): MapBuilder;
  visibleAreaBind(expr: string): MapBuilder;
  visibleRegion(value: QmlValue): MapBuilder;
  visibleRegionBind(expr: string): MapBuilder;
  width(value: number): MapBuilder;
  widthBind(expr: string): MapBuilder;
  x(value: number): MapBuilder;
  xBind(expr: string): MapBuilder;
  y(value: number): MapBuilder;
  yBind(expr: string): MapBuilder;
  z(value: number): MapBuilder;
  zBind(expr: string): MapBuilder;
  zoomLevel(value: number): MapBuilder;
  zoomLevelBind(expr: string): MapBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): MapBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): MapBuilder;
  onActiveMapTypeChanged(handler: DslSignalHandlerValue): MapBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): MapBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): MapBuilder;
  onBearingChanged(handler: DslSignalHandlerValue): MapBuilder;
  onCenterChanged(handler: DslSignalHandlerValue): MapBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): MapBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): MapBuilder;
  onClipChanged(handler: DslSignalHandlerValue): MapBuilder;
  onColorChanged(handler: DslSignalHandlerValue): MapBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): MapBuilder;
  onCopyrightLinkActivated(handler: DslSignalHandlerValue): MapBuilder;
  onCopyrightsChanged(handler: DslSignalHandlerValue): MapBuilder;
  onCopyrightsImageChanged(handler: DslSignalHandlerValue): MapBuilder;
  onCopyrightsVisibleChanged(handler: DslSignalHandlerValue): MapBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MapBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): MapBuilder;
  onFieldOfViewChanged(handler: DslSignalHandlerValue): MapBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): MapBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): MapBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): MapBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): MapBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMapItemsChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMapReadyChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMaximumFieldOfViewChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMaximumTiltChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMaximumZoomLevelChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMinimumFieldOfViewChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMinimumTiltChanged(handler: DslSignalHandlerValue): MapBuilder;
  onMinimumZoomLevelChanged(handler: DslSignalHandlerValue): MapBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MapBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): MapBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): MapBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): MapBuilder;
  onParentChanged(handler: DslSignalHandlerValue): MapBuilder;
  onPluginChanged(handler: DslSignalHandlerValue): MapBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): MapBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): MapBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): MapBuilder;
  onStateChanged(handler: DslSignalHandlerValue): MapBuilder;
  onSupportedMapTypesChanged(handler: DslSignalHandlerValue): MapBuilder;
  onTiltChanged(handler: DslSignalHandlerValue): MapBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): MapBuilder;
  onVisibleAreaChanged(handler: DslSignalHandlerValue): MapBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): MapBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): MapBuilder;
  onVisibleRegionChanged(handler: DslSignalHandlerValue): MapBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): MapBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): MapBuilder;
  onXChanged(handler: DslSignalHandlerValue): MapBuilder;
  onYChanged(handler: DslSignalHandlerValue): MapBuilder;
  onZChanged(handler: DslSignalHandlerValue): MapBuilder;
  onZoomLevelChanged(handler: DslSignalHandlerValue): MapBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapBuilder;
  layer(setup: (b: LayerBuilder) => void): MapBuilder;
}

const MAP_META: TypeMetadata = {
  typeName: 'Map',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'activeMapType', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bearing', hasValue: true, hasBinding: true },
    { name: 'center', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'copyrightsVisible', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fieldOfView', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'maximumFieldOfView', hasValue: true, hasBinding: true },
    { name: 'maximumTilt', hasValue: true, hasBinding: true },
    { name: 'maximumZoomLevel', hasValue: true, hasBinding: true },
    { name: 'minimumFieldOfView', hasValue: true, hasBinding: true },
    { name: 'minimumTilt', hasValue: true, hasBinding: true },
    { name: 'minimumZoomLevel', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'tilt', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'visibleArea', hasValue: true, hasBinding: true },
    { name: 'visibleRegion', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
    { name: 'zoomLevel', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onActiveMapTypeChanged', paramCount: 0 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBearingChanged', paramCount: 1 },
    { handlerName: 'onCenterChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCopyrightLinkActivated', paramCount: 1 },
    { handlerName: 'onCopyrightsChanged', paramCount: 1 },
    { handlerName: 'onCopyrightsImageChanged', paramCount: 1 },
    { handlerName: 'onCopyrightsVisibleChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onFieldOfViewChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onMapItemsChanged', paramCount: 0 },
    { handlerName: 'onMapReadyChanged', paramCount: 1 },
    { handlerName: 'onMaximumFieldOfViewChanged', paramCount: 1 },
    { handlerName: 'onMaximumTiltChanged', paramCount: 1 },
    { handlerName: 'onMaximumZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onMinimumFieldOfViewChanged', paramCount: 1 },
    { handlerName: 'onMinimumTiltChanged', paramCount: 1 },
    { handlerName: 'onMinimumZoomLevelChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPluginChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSupportedMapTypesChanged', paramCount: 0 },
    { handlerName: 'onTiltChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleAreaChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisibleRegionChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
    { handlerName: 'onZoomLevelChanged', paramCount: 1 },
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

export function Map(): MapBuilder {
  return createFluentBuilder('Map', MAP_META) as unknown as MapBuilder;
}

export namespace Map {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Map',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken('Map', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Map', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Map', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Map', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Map', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Map', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Map',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Map',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Map', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Map', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Map',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Map', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Map', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Map', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Map', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Map', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Map', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Map', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Map', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Map', 'TransformOrigin', 'BottomRight');
  }
}
