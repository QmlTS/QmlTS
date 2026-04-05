// AUTO-GENERATED — DO NOT EDIT
// Type: MapItemGroup
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface MapItemGroupBuilder {
  id(id: string): MapItemGroupBuilder;
  child(obj: QmlObjectBuilder): MapItemGroupBuilder;

  activeFocusOnTab(value: boolean): MapItemGroupBuilder;
  activeFocusOnTabBind(expr: string): MapItemGroupBuilder;
  antialiasing(value: boolean): MapItemGroupBuilder;
  antialiasingBind(expr: string): MapItemGroupBuilder;
  baselineOffset(value: number): MapItemGroupBuilder;
  baselineOffsetBind(expr: string): MapItemGroupBuilder;
  clip(value: boolean): MapItemGroupBuilder;
  clipBind(expr: string): MapItemGroupBuilder;
  containmentMask(value: QtObjectBuilder): MapItemGroupBuilder;
  containmentMaskBind(expr: string): MapItemGroupBuilder;
  enabled(value: boolean): MapItemGroupBuilder;
  enabledBind(expr: string): MapItemGroupBuilder;
  focus(value: boolean): MapItemGroupBuilder;
  focusBind(expr: string): MapItemGroupBuilder;
  focusPolicy(value: QmlEnumToken): MapItemGroupBuilder;
  focusPolicyBind(expr: string): MapItemGroupBuilder;
  height(value: number): MapItemGroupBuilder;
  heightBind(expr: string): MapItemGroupBuilder;
  implicitHeight(value: number): MapItemGroupBuilder;
  implicitHeightBind(expr: string): MapItemGroupBuilder;
  implicitWidth(value: number): MapItemGroupBuilder;
  implicitWidthBind(expr: string): MapItemGroupBuilder;
  objectName(value: string): MapItemGroupBuilder;
  objectNameBind(expr: string): MapItemGroupBuilder;
  opacity(value: number): MapItemGroupBuilder;
  opacityBind(expr: string): MapItemGroupBuilder;
  palette(value: PaletteBuilder): MapItemGroupBuilder;
  paletteBind(expr: string): MapItemGroupBuilder;
  parent(value: ItemBuilder): MapItemGroupBuilder;
  parentBind(expr: string): MapItemGroupBuilder;
  rotation(value: number): MapItemGroupBuilder;
  rotationBind(expr: string): MapItemGroupBuilder;
  scale(value: number): MapItemGroupBuilder;
  scaleBind(expr: string): MapItemGroupBuilder;
  smooth(value: boolean): MapItemGroupBuilder;
  smoothBind(expr: string): MapItemGroupBuilder;
  state(value: string): MapItemGroupBuilder;
  stateBind(expr: string): MapItemGroupBuilder;
  transformOrigin(value: QmlEnumToken): MapItemGroupBuilder;
  transformOriginBind(expr: string): MapItemGroupBuilder;
  visible(value: boolean): MapItemGroupBuilder;
  visibleBind(expr: string): MapItemGroupBuilder;
  width(value: number): MapItemGroupBuilder;
  widthBind(expr: string): MapItemGroupBuilder;
  x(value: number): MapItemGroupBuilder;
  xBind(expr: string): MapItemGroupBuilder;
  y(value: number): MapItemGroupBuilder;
  yBind(expr: string): MapItemGroupBuilder;
  z(value: number): MapItemGroupBuilder;
  zBind(expr: string): MapItemGroupBuilder;
  onActiveFocusChanged(body: string): MapItemGroupBuilder;
  onActiveFocusOnTabChanged(body: string): MapItemGroupBuilder;
  onAddTransitionFinished(body: string): MapItemGroupBuilder;
  onAntialiasingChanged(body: string): MapItemGroupBuilder;
  onBaselineOffsetChanged(body: string): MapItemGroupBuilder;
  onChildrenChanged(body: string): MapItemGroupBuilder;
  onChildrenRectChanged(body: string): MapItemGroupBuilder;
  onClipChanged(body: string): MapItemGroupBuilder;
  onContainmentMaskChanged(body: string): MapItemGroupBuilder;
  onEnabledChanged(body: string): MapItemGroupBuilder;
  onFocusChanged(body: string): MapItemGroupBuilder;
  onFocusPolicyChanged(body: string): MapItemGroupBuilder;
  onHeightChanged(body: string): MapItemGroupBuilder;
  onImplicitHeightChanged(body: string): MapItemGroupBuilder;
  onImplicitWidthChanged(body: string): MapItemGroupBuilder;
  onMapItemOpacityChanged(body: string): MapItemGroupBuilder;
  onObjectNameChanged(body: string): MapItemGroupBuilder;
  onOpacityChanged(body: string): MapItemGroupBuilder;
  onPaletteChanged(body: string): MapItemGroupBuilder;
  onPaletteCreated(body: string): MapItemGroupBuilder;
  onParentChanged(body: string): MapItemGroupBuilder;
  onRemoveTransitionFinished(body: string): MapItemGroupBuilder;
  onRotationChanged(body: string): MapItemGroupBuilder;
  onScaleChanged(body: string): MapItemGroupBuilder;
  onSmoothChanged(body: string): MapItemGroupBuilder;
  onStateChanged(body: string): MapItemGroupBuilder;
  onTransformOriginChanged(body: string): MapItemGroupBuilder;
  onVisibleChanged(body: string): MapItemGroupBuilder;
  onVisibleChildrenChanged(body: string): MapItemGroupBuilder;
  onWidthChanged(body: string): MapItemGroupBuilder;
  onWindowChanged(body: string): MapItemGroupBuilder;
  onXChanged(body: string): MapItemGroupBuilder;
  onYChanged(body: string): MapItemGroupBuilder;
  onZChanged(body: string): MapItemGroupBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapItemGroupBuilder;
  layer(setup: (b: LayerBuilder) => void): MapItemGroupBuilder;
}

const MAPITEMGROUP_META: TypeMetadata = {
  typeName: 'MapItemGroup',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
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
    { handlerName: 'onMapItemOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
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
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function MapItemGroup(): MapItemGroupBuilder {
  return createFluentBuilder('MapItemGroup', MAPITEMGROUP_META) as unknown as MapItemGroupBuilder;
}

export namespace MapItemGroup {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MapItemGroup', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MapItemGroup', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MapItemGroup', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapItemGroup', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapItemGroup', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapItemGroup', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MapItemGroup', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MapItemGroup', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MapItemGroup', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MapItemGroup', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MapItemGroup', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapItemGroup', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapItemGroup', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapItemGroup', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapItemGroup', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapItemGroup', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapItemGroup', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapItemGroup', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapItemGroup', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapItemGroup', 'TransformOrigin', 'BottomRight');
  }
}
