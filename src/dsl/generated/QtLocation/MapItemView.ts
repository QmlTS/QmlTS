// AUTO-GENERATED — DO NOT EDIT
// Type: MapItemView
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
export interface MapItemViewBuilder {
  id(id: string): MapItemViewBuilder;
  child(obj: QmlObjectBuilder): MapItemViewBuilder;

  activeFocusOnTab(value: boolean): MapItemViewBuilder;
  activeFocusOnTabBind(expr: string): MapItemViewBuilder;
  add(value: TransitionBuilder): MapItemViewBuilder;
  addBind(expr: string): MapItemViewBuilder;
  antialiasing(value: boolean): MapItemViewBuilder;
  antialiasingBind(expr: string): MapItemViewBuilder;
  autoFitViewport(value: boolean): MapItemViewBuilder;
  autoFitViewportBind(expr: string): MapItemViewBuilder;
  baselineOffset(value: number): MapItemViewBuilder;
  baselineOffsetBind(expr: string): MapItemViewBuilder;
  clip(value: boolean): MapItemViewBuilder;
  clipBind(expr: string): MapItemViewBuilder;
  containmentMask(value: QtObjectBuilder): MapItemViewBuilder;
  containmentMaskBind(expr: string): MapItemViewBuilder;
  delegate(value: QmlComponent): MapItemViewBuilder;
  delegateBind(expr: string): MapItemViewBuilder;
  delegateModelAccess(value: QmlEnumToken): MapItemViewBuilder;
  delegateModelAccessBind(expr: string): MapItemViewBuilder;
  enabled(value: boolean): MapItemViewBuilder;
  enabledBind(expr: string): MapItemViewBuilder;
  focus(value: boolean): MapItemViewBuilder;
  focusBind(expr: string): MapItemViewBuilder;
  focusPolicy(value: QmlEnumToken): MapItemViewBuilder;
  focusPolicyBind(expr: string): MapItemViewBuilder;
  height(value: number): MapItemViewBuilder;
  heightBind(expr: string): MapItemViewBuilder;
  implicitHeight(value: number): MapItemViewBuilder;
  implicitHeightBind(expr: string): MapItemViewBuilder;
  implicitWidth(value: number): MapItemViewBuilder;
  implicitWidthBind(expr: string): MapItemViewBuilder;
  incubateDelegates(value: boolean): MapItemViewBuilder;
  incubateDelegatesBind(expr: string): MapItemViewBuilder;
  model(value: QmlValue): MapItemViewBuilder;
  modelBind(expr: string): MapItemViewBuilder;
  objectName(value: string): MapItemViewBuilder;
  objectNameBind(expr: string): MapItemViewBuilder;
  opacity(value: number): MapItemViewBuilder;
  opacityBind(expr: string): MapItemViewBuilder;
  palette(value: PaletteBuilder): MapItemViewBuilder;
  paletteBind(expr: string): MapItemViewBuilder;
  parent(value: ItemBuilder): MapItemViewBuilder;
  parentBind(expr: string): MapItemViewBuilder;
  remove(value: TransitionBuilder): MapItemViewBuilder;
  removeBind(expr: string): MapItemViewBuilder;
  rotation(value: number): MapItemViewBuilder;
  rotationBind(expr: string): MapItemViewBuilder;
  scale(value: number): MapItemViewBuilder;
  scaleBind(expr: string): MapItemViewBuilder;
  smooth(value: boolean): MapItemViewBuilder;
  smoothBind(expr: string): MapItemViewBuilder;
  state(value: string): MapItemViewBuilder;
  stateBind(expr: string): MapItemViewBuilder;
  transformOrigin(value: QmlEnumToken): MapItemViewBuilder;
  transformOriginBind(expr: string): MapItemViewBuilder;
  visible(value: boolean): MapItemViewBuilder;
  visibleBind(expr: string): MapItemViewBuilder;
  width(value: number): MapItemViewBuilder;
  widthBind(expr: string): MapItemViewBuilder;
  x(value: number): MapItemViewBuilder;
  xBind(expr: string): MapItemViewBuilder;
  y(value: number): MapItemViewBuilder;
  yBind(expr: string): MapItemViewBuilder;
  z(value: number): MapItemViewBuilder;
  zBind(expr: string): MapItemViewBuilder;
  onActiveFocusChanged(body: string): MapItemViewBuilder;
  onActiveFocusOnTabChanged(body: string): MapItemViewBuilder;
  onAddTransitionFinished(body: string): MapItemViewBuilder;
  onAntialiasingChanged(body: string): MapItemViewBuilder;
  onAutoFitViewportChanged(body: string): MapItemViewBuilder;
  onBaselineOffsetChanged(body: string): MapItemViewBuilder;
  onChildrenChanged(body: string): MapItemViewBuilder;
  onChildrenRectChanged(body: string): MapItemViewBuilder;
  onClipChanged(body: string): MapItemViewBuilder;
  onContainmentMaskChanged(body: string): MapItemViewBuilder;
  onDelegateChanged(body: string): MapItemViewBuilder;
  onDelegateModelAccessChanged(body: string): MapItemViewBuilder;
  onEnabledChanged(body: string): MapItemViewBuilder;
  onFocusChanged(body: string): MapItemViewBuilder;
  onFocusPolicyChanged(body: string): MapItemViewBuilder;
  onHeightChanged(body: string): MapItemViewBuilder;
  onImplicitHeightChanged(body: string): MapItemViewBuilder;
  onImplicitWidthChanged(body: string): MapItemViewBuilder;
  onIncubateDelegatesChanged(body: string): MapItemViewBuilder;
  onMapItemOpacityChanged(body: string): MapItemViewBuilder;
  onModelChanged(body: string): MapItemViewBuilder;
  onObjectNameChanged(body: string): MapItemViewBuilder;
  onOpacityChanged(body: string): MapItemViewBuilder;
  onPaletteChanged(body: string): MapItemViewBuilder;
  onPaletteCreated(body: string): MapItemViewBuilder;
  onParentChanged(body: string): MapItemViewBuilder;
  onRemoveTransitionFinished(body: string): MapItemViewBuilder;
  onRotationChanged(body: string): MapItemViewBuilder;
  onScaleChanged(body: string): MapItemViewBuilder;
  onSmoothChanged(body: string): MapItemViewBuilder;
  onStateChanged(body: string): MapItemViewBuilder;
  onTransformOriginChanged(body: string): MapItemViewBuilder;
  onVisibleChanged(body: string): MapItemViewBuilder;
  onVisibleChildrenChanged(body: string): MapItemViewBuilder;
  onWidthChanged(body: string): MapItemViewBuilder;
  onWindowChanged(body: string): MapItemViewBuilder;
  onXChanged(body: string): MapItemViewBuilder;
  onYChanged(body: string): MapItemViewBuilder;
  onZChanged(body: string): MapItemViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): MapItemViewBuilder;
  layer(setup: (b: LayerBuilder) => void): MapItemViewBuilder;
}

const MAPITEMVIEW_META: TypeMetadata = {
  typeName: 'MapItemView',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'add', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoFitViewport', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'delegateModelAccess', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'incubateDelegates', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'remove', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAutoFitViewportChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelAccessChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onIncubateDelegatesChanged', paramCount: 0 },
    { handlerName: 'onMapItemOpacityChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
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
};

export function MapItemView(): MapItemViewBuilder {
  return createFluentBuilder('MapItemView', MAPITEMVIEW_META) as unknown as MapItemViewBuilder;
}

export namespace MapItemView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('MapItemView', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('MapItemView', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('MapItemView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('MapItemView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('MapItemView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('MapItemView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('MapItemView', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('MapItemView', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('MapItemView', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('MapItemView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('MapItemView', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('MapItemView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('MapItemView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('MapItemView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('MapItemView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('MapItemView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('MapItemView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('MapItemView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('MapItemView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('MapItemView', 'TransformOrigin', 'BottomRight');
  }
}
