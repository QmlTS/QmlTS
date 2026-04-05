// AUTO-GENERATED — DO NOT EDIT
// Type: PaddedRectangle
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { BorderBuilder } from '../QtQuick/QQuickPen.js';
export interface PaddedRectangleBuilder {
  id(id: string): PaddedRectangleBuilder;
  child(obj: QmlObjectBuilder): PaddedRectangleBuilder;

  activeFocusOnTab(value: boolean): PaddedRectangleBuilder;
  activeFocusOnTabBind(expr: string): PaddedRectangleBuilder;
  antialiasing(value: boolean): PaddedRectangleBuilder;
  antialiasingBind(expr: string): PaddedRectangleBuilder;
  baselineOffset(value: number): PaddedRectangleBuilder;
  baselineOffsetBind(expr: string): PaddedRectangleBuilder;
  bottomLeftRadius(value: number): PaddedRectangleBuilder;
  bottomLeftRadiusBind(expr: string): PaddedRectangleBuilder;
  bottomPadding(value: number): PaddedRectangleBuilder;
  bottomPaddingBind(expr: string): PaddedRectangleBuilder;
  bottomRightRadius(value: number): PaddedRectangleBuilder;
  bottomRightRadiusBind(expr: string): PaddedRectangleBuilder;
  clip(value: boolean): PaddedRectangleBuilder;
  clipBind(expr: string): PaddedRectangleBuilder;
  color(value: QmlColor): PaddedRectangleBuilder;
  colorBind(expr: string): PaddedRectangleBuilder;
  containmentMask(value: QtObjectBuilder): PaddedRectangleBuilder;
  containmentMaskBind(expr: string): PaddedRectangleBuilder;
  enabled(value: boolean): PaddedRectangleBuilder;
  enabledBind(expr: string): PaddedRectangleBuilder;
  focus(value: boolean): PaddedRectangleBuilder;
  focusBind(expr: string): PaddedRectangleBuilder;
  focusPolicy(value: QmlEnumToken): PaddedRectangleBuilder;
  focusPolicyBind(expr: string): PaddedRectangleBuilder;
  gradient(value: QmlValue): PaddedRectangleBuilder;
  gradientBind(expr: string): PaddedRectangleBuilder;
  height(value: number): PaddedRectangleBuilder;
  heightBind(expr: string): PaddedRectangleBuilder;
  implicitHeight(value: number): PaddedRectangleBuilder;
  implicitHeightBind(expr: string): PaddedRectangleBuilder;
  implicitWidth(value: number): PaddedRectangleBuilder;
  implicitWidthBind(expr: string): PaddedRectangleBuilder;
  leftPadding(value: number): PaddedRectangleBuilder;
  leftPaddingBind(expr: string): PaddedRectangleBuilder;
  objectName(value: string): PaddedRectangleBuilder;
  objectNameBind(expr: string): PaddedRectangleBuilder;
  opacity(value: number): PaddedRectangleBuilder;
  opacityBind(expr: string): PaddedRectangleBuilder;
  padding(value: number): PaddedRectangleBuilder;
  paddingBind(expr: string): PaddedRectangleBuilder;
  palette(value: PaletteBuilder): PaddedRectangleBuilder;
  paletteBind(expr: string): PaddedRectangleBuilder;
  parent(value: ItemBuilder): PaddedRectangleBuilder;
  parentBind(expr: string): PaddedRectangleBuilder;
  radius(value: number): PaddedRectangleBuilder;
  radiusBind(expr: string): PaddedRectangleBuilder;
  rightPadding(value: number): PaddedRectangleBuilder;
  rightPaddingBind(expr: string): PaddedRectangleBuilder;
  rotation(value: number): PaddedRectangleBuilder;
  rotationBind(expr: string): PaddedRectangleBuilder;
  scale(value: number): PaddedRectangleBuilder;
  scaleBind(expr: string): PaddedRectangleBuilder;
  smooth(value: boolean): PaddedRectangleBuilder;
  smoothBind(expr: string): PaddedRectangleBuilder;
  state(value: string): PaddedRectangleBuilder;
  stateBind(expr: string): PaddedRectangleBuilder;
  topLeftRadius(value: number): PaddedRectangleBuilder;
  topLeftRadiusBind(expr: string): PaddedRectangleBuilder;
  topPadding(value: number): PaddedRectangleBuilder;
  topPaddingBind(expr: string): PaddedRectangleBuilder;
  topRightRadius(value: number): PaddedRectangleBuilder;
  topRightRadiusBind(expr: string): PaddedRectangleBuilder;
  transformOrigin(value: QmlEnumToken): PaddedRectangleBuilder;
  transformOriginBind(expr: string): PaddedRectangleBuilder;
  visible(value: boolean): PaddedRectangleBuilder;
  visibleBind(expr: string): PaddedRectangleBuilder;
  width(value: number): PaddedRectangleBuilder;
  widthBind(expr: string): PaddedRectangleBuilder;
  x(value: number): PaddedRectangleBuilder;
  xBind(expr: string): PaddedRectangleBuilder;
  y(value: number): PaddedRectangleBuilder;
  yBind(expr: string): PaddedRectangleBuilder;
  z(value: number): PaddedRectangleBuilder;
  zBind(expr: string): PaddedRectangleBuilder;
  onActiveFocusChanged(body: string): PaddedRectangleBuilder;
  onActiveFocusOnTabChanged(body: string): PaddedRectangleBuilder;
  onAntialiasingChanged(body: string): PaddedRectangleBuilder;
  onBaselineOffsetChanged(body: string): PaddedRectangleBuilder;
  onBottomLeftRadiusChanged(body: string): PaddedRectangleBuilder;
  onBottomPaddingChanged(body: string): PaddedRectangleBuilder;
  onBottomRightRadiusChanged(body: string): PaddedRectangleBuilder;
  onChildrenChanged(body: string): PaddedRectangleBuilder;
  onChildrenRectChanged(body: string): PaddedRectangleBuilder;
  onClipChanged(body: string): PaddedRectangleBuilder;
  onColorChanged(body: string): PaddedRectangleBuilder;
  onContainmentMaskChanged(body: string): PaddedRectangleBuilder;
  onEnabledChanged(body: string): PaddedRectangleBuilder;
  onFocusChanged(body: string): PaddedRectangleBuilder;
  onFocusPolicyChanged(body: string): PaddedRectangleBuilder;
  onHeightChanged(body: string): PaddedRectangleBuilder;
  onImplicitHeightChanged(body: string): PaddedRectangleBuilder;
  onImplicitWidthChanged(body: string): PaddedRectangleBuilder;
  onLeftPaddingChanged(body: string): PaddedRectangleBuilder;
  onObjectNameChanged(body: string): PaddedRectangleBuilder;
  onOpacityChanged(body: string): PaddedRectangleBuilder;
  onPaddingChanged(body: string): PaddedRectangleBuilder;
  onPaletteChanged(body: string): PaddedRectangleBuilder;
  onPaletteCreated(body: string): PaddedRectangleBuilder;
  onParentChanged(body: string): PaddedRectangleBuilder;
  onRadiusChanged(body: string): PaddedRectangleBuilder;
  onRightPaddingChanged(body: string): PaddedRectangleBuilder;
  onRotationChanged(body: string): PaddedRectangleBuilder;
  onScaleChanged(body: string): PaddedRectangleBuilder;
  onSmoothChanged(body: string): PaddedRectangleBuilder;
  onStateChanged(body: string): PaddedRectangleBuilder;
  onTopLeftRadiusChanged(body: string): PaddedRectangleBuilder;
  onTopPaddingChanged(body: string): PaddedRectangleBuilder;
  onTopRightRadiusChanged(body: string): PaddedRectangleBuilder;
  onTransformOriginChanged(body: string): PaddedRectangleBuilder;
  onVisibleChanged(body: string): PaddedRectangleBuilder;
  onVisibleChildrenChanged(body: string): PaddedRectangleBuilder;
  onWidthChanged(body: string): PaddedRectangleBuilder;
  onWindowChanged(body: string): PaddedRectangleBuilder;
  onXChanged(body: string): PaddedRectangleBuilder;
  onYChanged(body: string): PaddedRectangleBuilder;
  onZChanged(body: string): PaddedRectangleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PaddedRectangleBuilder;
  border(setup: (b: BorderBuilder) => void): PaddedRectangleBuilder;
  layer(setup: (b: LayerBuilder) => void): PaddedRectangleBuilder;
}

const PADDEDRECTANGLE_META: TypeMetadata = {
  typeName: 'PaddedRectangle',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomLeftRadius', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'bottomRightRadius', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'gradient', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topLeftRadius', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'topRightRadius', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBottomLeftRadiusChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onBottomRightRadiusChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRadiusChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTopLeftRadiusChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTopRightRadiusChanged', paramCount: 0 },
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
        { name: 'pixelAligned', hasValue: true, hasBinding: true },
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

export function PaddedRectangle(): PaddedRectangleBuilder {
  return createFluentBuilder('PaddedRectangle', PADDEDRECTANGLE_META) as unknown as PaddedRectangleBuilder;
}

export namespace PaddedRectangle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('PaddedRectangle', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('PaddedRectangle', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('PaddedRectangle', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PaddedRectangle', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PaddedRectangle', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PaddedRectangle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('PaddedRectangle', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('PaddedRectangle', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PaddedRectangle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PaddedRectangle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PaddedRectangle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PaddedRectangle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PaddedRectangle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PaddedRectangle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PaddedRectangle', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PaddedRectangle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PaddedRectangle', 'TransformOrigin', 'BottomRight');
  }
}
