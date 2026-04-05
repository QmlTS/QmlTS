// AUTO-GENERATED — DO NOT EDIT
// Type: SourceProxy
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, QmlRect, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface SourceProxyBuilder {
  id(id: string): SourceProxyBuilder;
  child(obj: QmlObjectBuilder): SourceProxyBuilder;

  activeFocusOnTab(value: boolean): SourceProxyBuilder;
  activeFocusOnTabBind(expr: string): SourceProxyBuilder;
  antialiasing(value: boolean): SourceProxyBuilder;
  antialiasingBind(expr: string): SourceProxyBuilder;
  baselineOffset(value: number): SourceProxyBuilder;
  baselineOffsetBind(expr: string): SourceProxyBuilder;
  clip(value: boolean): SourceProxyBuilder;
  clipBind(expr: string): SourceProxyBuilder;
  containmentMask(value: QtObjectBuilder): SourceProxyBuilder;
  containmentMaskBind(expr: string): SourceProxyBuilder;
  enabled(value: boolean): SourceProxyBuilder;
  enabledBind(expr: string): SourceProxyBuilder;
  focus(value: boolean): SourceProxyBuilder;
  focusBind(expr: string): SourceProxyBuilder;
  focusPolicy(value: QmlEnumToken): SourceProxyBuilder;
  focusPolicyBind(expr: string): SourceProxyBuilder;
  height(value: number): SourceProxyBuilder;
  heightBind(expr: string): SourceProxyBuilder;
  implicitHeight(value: number): SourceProxyBuilder;
  implicitHeightBind(expr: string): SourceProxyBuilder;
  implicitWidth(value: number): SourceProxyBuilder;
  implicitWidthBind(expr: string): SourceProxyBuilder;
  input(value: ItemBuilder): SourceProxyBuilder;
  inputBind(expr: string): SourceProxyBuilder;
  interpolation(value: QmlEnumToken): SourceProxyBuilder;
  interpolationBind(expr: string): SourceProxyBuilder;
  objectName(value: string): SourceProxyBuilder;
  objectNameBind(expr: string): SourceProxyBuilder;
  opacity(value: number): SourceProxyBuilder;
  opacityBind(expr: string): SourceProxyBuilder;
  palette(value: PaletteBuilder): SourceProxyBuilder;
  paletteBind(expr: string): SourceProxyBuilder;
  parent(value: ItemBuilder): SourceProxyBuilder;
  parentBind(expr: string): SourceProxyBuilder;
  rotation(value: number): SourceProxyBuilder;
  rotationBind(expr: string): SourceProxyBuilder;
  scale(value: number): SourceProxyBuilder;
  scaleBind(expr: string): SourceProxyBuilder;
  smooth(value: boolean): SourceProxyBuilder;
  smoothBind(expr: string): SourceProxyBuilder;
  sourceRect(value: QmlRect): SourceProxyBuilder;
  sourceRectBind(expr: string): SourceProxyBuilder;
  state(value: string): SourceProxyBuilder;
  stateBind(expr: string): SourceProxyBuilder;
  transformOrigin(value: QmlEnumToken): SourceProxyBuilder;
  transformOriginBind(expr: string): SourceProxyBuilder;
  visible(value: boolean): SourceProxyBuilder;
  visibleBind(expr: string): SourceProxyBuilder;
  width(value: number): SourceProxyBuilder;
  widthBind(expr: string): SourceProxyBuilder;
  x(value: number): SourceProxyBuilder;
  xBind(expr: string): SourceProxyBuilder;
  y(value: number): SourceProxyBuilder;
  yBind(expr: string): SourceProxyBuilder;
  z(value: number): SourceProxyBuilder;
  zBind(expr: string): SourceProxyBuilder;
  onActiveChanged(body: string): SourceProxyBuilder;
  onActiveFocusChanged(body: string): SourceProxyBuilder;
  onActiveFocusOnTabChanged(body: string): SourceProxyBuilder;
  onAntialiasingChanged(body: string): SourceProxyBuilder;
  onBaselineOffsetChanged(body: string): SourceProxyBuilder;
  onChildrenChanged(body: string): SourceProxyBuilder;
  onChildrenRectChanged(body: string): SourceProxyBuilder;
  onClipChanged(body: string): SourceProxyBuilder;
  onContainmentMaskChanged(body: string): SourceProxyBuilder;
  onEnabledChanged(body: string): SourceProxyBuilder;
  onFocusChanged(body: string): SourceProxyBuilder;
  onFocusPolicyChanged(body: string): SourceProxyBuilder;
  onHeightChanged(body: string): SourceProxyBuilder;
  onImplicitHeightChanged(body: string): SourceProxyBuilder;
  onImplicitWidthChanged(body: string): SourceProxyBuilder;
  onInputChanged(body: string): SourceProxyBuilder;
  onInterpolationChanged(body: string): SourceProxyBuilder;
  onObjectNameChanged(body: string): SourceProxyBuilder;
  onOpacityChanged(body: string): SourceProxyBuilder;
  onOutputChanged(body: string): SourceProxyBuilder;
  onPaletteChanged(body: string): SourceProxyBuilder;
  onPaletteCreated(body: string): SourceProxyBuilder;
  onParentChanged(body: string): SourceProxyBuilder;
  onRotationChanged(body: string): SourceProxyBuilder;
  onScaleChanged(body: string): SourceProxyBuilder;
  onSmoothChanged(body: string): SourceProxyBuilder;
  onSourceRectChanged(body: string): SourceProxyBuilder;
  onStateChanged(body: string): SourceProxyBuilder;
  onTransformOriginChanged(body: string): SourceProxyBuilder;
  onVisibleChanged(body: string): SourceProxyBuilder;
  onVisibleChildrenChanged(body: string): SourceProxyBuilder;
  onWidthChanged(body: string): SourceProxyBuilder;
  onWindowChanged(body: string): SourceProxyBuilder;
  onXChanged(body: string): SourceProxyBuilder;
  onYChanged(body: string): SourceProxyBuilder;
  onZChanged(body: string): SourceProxyBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SourceProxyBuilder;
  layer(setup: (b: LayerBuilder) => void): SourceProxyBuilder;
}

const SOURCEPROXY_META: TypeMetadata = {
  typeName: 'SourceProxy',
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
    { name: 'input', hasValue: true, hasBinding: true },
    { name: 'interpolation', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'sourceRect', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 0 },
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
    { handlerName: 'onInputChanged', paramCount: 0 },
    { handlerName: 'onInterpolationChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOutputChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceRectChanged', paramCount: 0 },
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
  attached: [],
  defaultProperty: 'data',
};

export function SourceProxy(): SourceProxyBuilder {
  return createFluentBuilder('SourceProxy', SOURCEPROXY_META) as unknown as SourceProxyBuilder;
}

export namespace SourceProxy {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SourceProxy',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SourceProxy',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SourceProxy', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SourceProxy', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SourceProxy', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SourceProxy', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SourceProxy',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace Interpolation {
    export const AnyInterpolation = createEnumToken(
      'SourceProxy',
      'Interpolation',
      'AnyInterpolation',
    );
    export const NearestInterpolation = createEnumToken(
      'SourceProxy',
      'Interpolation',
      'NearestInterpolation',
    );
    export const LinearInterpolation = createEnumToken(
      'SourceProxy',
      'Interpolation',
      'LinearInterpolation',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SourceProxy', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SourceProxy',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SourceProxy', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SourceProxy', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SourceProxy', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SourceProxy', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SourceProxy', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SourceProxy', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SourceProxy', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SourceProxy', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SourceProxy', 'TransformOrigin', 'BottomRight');
  }
}
