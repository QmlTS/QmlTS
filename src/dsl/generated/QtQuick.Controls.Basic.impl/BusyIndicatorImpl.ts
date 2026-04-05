// AUTO-GENERATED — DO NOT EDIT
// Type: BusyIndicatorImpl
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface BusyIndicatorImplBuilder {
  id(id: string): BusyIndicatorImplBuilder;
  child(obj: QmlObjectBuilder): BusyIndicatorImplBuilder;

  activeFocusOnTab(value: boolean): BusyIndicatorImplBuilder;
  activeFocusOnTabBind(expr: string): BusyIndicatorImplBuilder;
  antialiasing(value: boolean): BusyIndicatorImplBuilder;
  antialiasingBind(expr: string): BusyIndicatorImplBuilder;
  baselineOffset(value: number): BusyIndicatorImplBuilder;
  baselineOffsetBind(expr: string): BusyIndicatorImplBuilder;
  clip(value: boolean): BusyIndicatorImplBuilder;
  clipBind(expr: string): BusyIndicatorImplBuilder;
  containmentMask(value: QtObjectBuilder): BusyIndicatorImplBuilder;
  containmentMaskBind(expr: string): BusyIndicatorImplBuilder;
  enabled(value: boolean): BusyIndicatorImplBuilder;
  enabledBind(expr: string): BusyIndicatorImplBuilder;
  fill(value: QmlColor): BusyIndicatorImplBuilder;
  fillBind(expr: string): BusyIndicatorImplBuilder;
  focus(value: boolean): BusyIndicatorImplBuilder;
  focusBind(expr: string): BusyIndicatorImplBuilder;
  focusPolicy(value: QmlEnumToken): BusyIndicatorImplBuilder;
  focusPolicyBind(expr: string): BusyIndicatorImplBuilder;
  height(value: number): BusyIndicatorImplBuilder;
  heightBind(expr: string): BusyIndicatorImplBuilder;
  implicitHeight(value: number): BusyIndicatorImplBuilder;
  implicitHeightBind(expr: string): BusyIndicatorImplBuilder;
  implicitWidth(value: number): BusyIndicatorImplBuilder;
  implicitWidthBind(expr: string): BusyIndicatorImplBuilder;
  objectName(value: string): BusyIndicatorImplBuilder;
  objectNameBind(expr: string): BusyIndicatorImplBuilder;
  opacity(value: number): BusyIndicatorImplBuilder;
  opacityBind(expr: string): BusyIndicatorImplBuilder;
  palette(value: PaletteBuilder): BusyIndicatorImplBuilder;
  paletteBind(expr: string): BusyIndicatorImplBuilder;
  parent(value: ItemBuilder): BusyIndicatorImplBuilder;
  parentBind(expr: string): BusyIndicatorImplBuilder;
  pen(value: QmlColor): BusyIndicatorImplBuilder;
  penBind(expr: string): BusyIndicatorImplBuilder;
  rotation(value: number): BusyIndicatorImplBuilder;
  rotationBind(expr: string): BusyIndicatorImplBuilder;
  running(value: boolean): BusyIndicatorImplBuilder;
  runningBind(expr: string): BusyIndicatorImplBuilder;
  scale(value: number): BusyIndicatorImplBuilder;
  scaleBind(expr: string): BusyIndicatorImplBuilder;
  smooth(value: boolean): BusyIndicatorImplBuilder;
  smoothBind(expr: string): BusyIndicatorImplBuilder;
  state(value: string): BusyIndicatorImplBuilder;
  stateBind(expr: string): BusyIndicatorImplBuilder;
  transformOrigin(value: QmlEnumToken): BusyIndicatorImplBuilder;
  transformOriginBind(expr: string): BusyIndicatorImplBuilder;
  visible(value: boolean): BusyIndicatorImplBuilder;
  visibleBind(expr: string): BusyIndicatorImplBuilder;
  width(value: number): BusyIndicatorImplBuilder;
  widthBind(expr: string): BusyIndicatorImplBuilder;
  x(value: number): BusyIndicatorImplBuilder;
  xBind(expr: string): BusyIndicatorImplBuilder;
  y(value: number): BusyIndicatorImplBuilder;
  yBind(expr: string): BusyIndicatorImplBuilder;
  z(value: number): BusyIndicatorImplBuilder;
  zBind(expr: string): BusyIndicatorImplBuilder;
  onActiveFocusChanged(body: string): BusyIndicatorImplBuilder;
  onActiveFocusOnTabChanged(body: string): BusyIndicatorImplBuilder;
  onAntialiasingChanged(body: string): BusyIndicatorImplBuilder;
  onBaselineOffsetChanged(body: string): BusyIndicatorImplBuilder;
  onChildrenChanged(body: string): BusyIndicatorImplBuilder;
  onChildrenRectChanged(body: string): BusyIndicatorImplBuilder;
  onClipChanged(body: string): BusyIndicatorImplBuilder;
  onContainmentMaskChanged(body: string): BusyIndicatorImplBuilder;
  onEnabledChanged(body: string): BusyIndicatorImplBuilder;
  onFocusChanged(body: string): BusyIndicatorImplBuilder;
  onFocusPolicyChanged(body: string): BusyIndicatorImplBuilder;
  onHeightChanged(body: string): BusyIndicatorImplBuilder;
  onImplicitHeightChanged(body: string): BusyIndicatorImplBuilder;
  onImplicitWidthChanged(body: string): BusyIndicatorImplBuilder;
  onObjectNameChanged(body: string): BusyIndicatorImplBuilder;
  onOpacityChanged(body: string): BusyIndicatorImplBuilder;
  onPaletteChanged(body: string): BusyIndicatorImplBuilder;
  onPaletteCreated(body: string): BusyIndicatorImplBuilder;
  onParentChanged(body: string): BusyIndicatorImplBuilder;
  onRotationChanged(body: string): BusyIndicatorImplBuilder;
  onScaleChanged(body: string): BusyIndicatorImplBuilder;
  onSmoothChanged(body: string): BusyIndicatorImplBuilder;
  onStateChanged(body: string): BusyIndicatorImplBuilder;
  onTransformOriginChanged(body: string): BusyIndicatorImplBuilder;
  onVisibleChanged(body: string): BusyIndicatorImplBuilder;
  onVisibleChildrenChanged(body: string): BusyIndicatorImplBuilder;
  onWidthChanged(body: string): BusyIndicatorImplBuilder;
  onWindowChanged(body: string): BusyIndicatorImplBuilder;
  onXChanged(body: string): BusyIndicatorImplBuilder;
  onYChanged(body: string): BusyIndicatorImplBuilder;
  onZChanged(body: string): BusyIndicatorImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): BusyIndicatorImplBuilder;
  layer(setup: (b: LayerBuilder) => void): BusyIndicatorImplBuilder;
}

const BUSYINDICATORIMPL_META: TypeMetadata = {
  typeName: 'BusyIndicatorImpl',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fill', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pen', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
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
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
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

export function BusyIndicatorImpl(): BusyIndicatorImplBuilder {
  return createFluentBuilder('BusyIndicatorImpl', BUSYINDICATORIMPL_META) as unknown as BusyIndicatorImplBuilder;
}

export namespace BusyIndicatorImpl {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('BusyIndicatorImpl', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('BusyIndicatorImpl', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('BusyIndicatorImpl', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('BusyIndicatorImpl', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('BusyIndicatorImpl', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('BusyIndicatorImpl', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('BusyIndicatorImpl', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('BusyIndicatorImpl', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('BusyIndicatorImpl', 'TransformOrigin', 'BottomRight');
  }
}
