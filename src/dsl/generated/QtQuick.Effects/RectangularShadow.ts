// AUTO-GENERATED — DO NOT EDIT
// Type: RectangularShadow
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlVector2d, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface RectangularShadowBuilder {
  id(id: string): RectangularShadowBuilder;
  child(obj: QmlObjectBuilder): RectangularShadowBuilder;

  activeFocusOnTab(value: boolean): RectangularShadowBuilder;
  activeFocusOnTabBind(expr: string): RectangularShadowBuilder;
  antialiasing(value: boolean): RectangularShadowBuilder;
  antialiasingBind(expr: string): RectangularShadowBuilder;
  baselineOffset(value: number): RectangularShadowBuilder;
  baselineOffsetBind(expr: string): RectangularShadowBuilder;
  blur(value: number): RectangularShadowBuilder;
  blurBind(expr: string): RectangularShadowBuilder;
  bottomLeftRadius(value: number): RectangularShadowBuilder;
  bottomLeftRadiusBind(expr: string): RectangularShadowBuilder;
  bottomRightRadius(value: number): RectangularShadowBuilder;
  bottomRightRadiusBind(expr: string): RectangularShadowBuilder;
  cached(value: boolean): RectangularShadowBuilder;
  cachedBind(expr: string): RectangularShadowBuilder;
  clip(value: boolean): RectangularShadowBuilder;
  clipBind(expr: string): RectangularShadowBuilder;
  color(value: QmlColor): RectangularShadowBuilder;
  colorBind(expr: string): RectangularShadowBuilder;
  containmentMask(value: QtObjectBuilder): RectangularShadowBuilder;
  containmentMaskBind(expr: string): RectangularShadowBuilder;
  enabled(value: boolean): RectangularShadowBuilder;
  enabledBind(expr: string): RectangularShadowBuilder;
  focus(value: boolean): RectangularShadowBuilder;
  focusBind(expr: string): RectangularShadowBuilder;
  focusPolicy(value: QmlEnumToken): RectangularShadowBuilder;
  focusPolicyBind(expr: string): RectangularShadowBuilder;
  height(value: number): RectangularShadowBuilder;
  heightBind(expr: string): RectangularShadowBuilder;
  implicitHeight(value: number): RectangularShadowBuilder;
  implicitHeightBind(expr: string): RectangularShadowBuilder;
  implicitWidth(value: number): RectangularShadowBuilder;
  implicitWidthBind(expr: string): RectangularShadowBuilder;
  material(value: ItemBuilder): RectangularShadowBuilder;
  materialBind(expr: string): RectangularShadowBuilder;
  objectName(value: string): RectangularShadowBuilder;
  objectNameBind(expr: string): RectangularShadowBuilder;
  offset(value: QmlVector2d): RectangularShadowBuilder;
  offsetBind(expr: string): RectangularShadowBuilder;
  opacity(value: number): RectangularShadowBuilder;
  opacityBind(expr: string): RectangularShadowBuilder;
  palette(value: PaletteBuilder): RectangularShadowBuilder;
  paletteBind(expr: string): RectangularShadowBuilder;
  parent(value: ItemBuilder): RectangularShadowBuilder;
  parentBind(expr: string): RectangularShadowBuilder;
  radius(value: number): RectangularShadowBuilder;
  radiusBind(expr: string): RectangularShadowBuilder;
  rotation(value: number): RectangularShadowBuilder;
  rotationBind(expr: string): RectangularShadowBuilder;
  scale(value: number): RectangularShadowBuilder;
  scaleBind(expr: string): RectangularShadowBuilder;
  smooth(value: boolean): RectangularShadowBuilder;
  smoothBind(expr: string): RectangularShadowBuilder;
  spread(value: number): RectangularShadowBuilder;
  spreadBind(expr: string): RectangularShadowBuilder;
  state(value: string): RectangularShadowBuilder;
  stateBind(expr: string): RectangularShadowBuilder;
  topLeftRadius(value: number): RectangularShadowBuilder;
  topLeftRadiusBind(expr: string): RectangularShadowBuilder;
  topRightRadius(value: number): RectangularShadowBuilder;
  topRightRadiusBind(expr: string): RectangularShadowBuilder;
  transformOrigin(value: QmlEnumToken): RectangularShadowBuilder;
  transformOriginBind(expr: string): RectangularShadowBuilder;
  visible(value: boolean): RectangularShadowBuilder;
  visibleBind(expr: string): RectangularShadowBuilder;
  width(value: number): RectangularShadowBuilder;
  widthBind(expr: string): RectangularShadowBuilder;
  x(value: number): RectangularShadowBuilder;
  xBind(expr: string): RectangularShadowBuilder;
  y(value: number): RectangularShadowBuilder;
  yBind(expr: string): RectangularShadowBuilder;
  z(value: number): RectangularShadowBuilder;
  zBind(expr: string): RectangularShadowBuilder;
  onActiveFocusChanged(body: string): RectangularShadowBuilder;
  onActiveFocusOnTabChanged(body: string): RectangularShadowBuilder;
  onAntialiasingChanged(body: string): RectangularShadowBuilder;
  onBaselineOffsetChanged(body: string): RectangularShadowBuilder;
  onBlurChanged(body: string): RectangularShadowBuilder;
  onBottomLeftRadiusChanged(body: string): RectangularShadowBuilder;
  onBottomRightRadiusChanged(body: string): RectangularShadowBuilder;
  onCachedChanged(body: string): RectangularShadowBuilder;
  onChildrenChanged(body: string): RectangularShadowBuilder;
  onChildrenRectChanged(body: string): RectangularShadowBuilder;
  onClipChanged(body: string): RectangularShadowBuilder;
  onColorChanged(body: string): RectangularShadowBuilder;
  onContainmentMaskChanged(body: string): RectangularShadowBuilder;
  onEnabledChanged(body: string): RectangularShadowBuilder;
  onFocusChanged(body: string): RectangularShadowBuilder;
  onFocusPolicyChanged(body: string): RectangularShadowBuilder;
  onHeightChanged(body: string): RectangularShadowBuilder;
  onImplicitHeightChanged(body: string): RectangularShadowBuilder;
  onImplicitWidthChanged(body: string): RectangularShadowBuilder;
  onMaterialChanged(body: string): RectangularShadowBuilder;
  onObjectNameChanged(body: string): RectangularShadowBuilder;
  onOffsetChanged(body: string): RectangularShadowBuilder;
  onOpacityChanged(body: string): RectangularShadowBuilder;
  onPaletteChanged(body: string): RectangularShadowBuilder;
  onPaletteCreated(body: string): RectangularShadowBuilder;
  onParentChanged(body: string): RectangularShadowBuilder;
  onRadiusChanged(body: string): RectangularShadowBuilder;
  onRotationChanged(body: string): RectangularShadowBuilder;
  onScaleChanged(body: string): RectangularShadowBuilder;
  onSmoothChanged(body: string): RectangularShadowBuilder;
  onSpreadChanged(body: string): RectangularShadowBuilder;
  onStateChanged(body: string): RectangularShadowBuilder;
  onTopLeftRadiusChanged(body: string): RectangularShadowBuilder;
  onTopRightRadiusChanged(body: string): RectangularShadowBuilder;
  onTransformOriginChanged(body: string): RectangularShadowBuilder;
  onVisibleChanged(body: string): RectangularShadowBuilder;
  onVisibleChildrenChanged(body: string): RectangularShadowBuilder;
  onWidthChanged(body: string): RectangularShadowBuilder;
  onWindowChanged(body: string): RectangularShadowBuilder;
  onXChanged(body: string): RectangularShadowBuilder;
  onYChanged(body: string): RectangularShadowBuilder;
  onZChanged(body: string): RectangularShadowBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RectangularShadowBuilder;
  layer(setup: (b: LayerBuilder) => void): RectangularShadowBuilder;
}

const RECTANGULARSHADOW_META: TypeMetadata = {
  typeName: 'RectangularShadow',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'blur', hasValue: true, hasBinding: true },
    { name: 'bottomLeftRadius', hasValue: true, hasBinding: true },
    { name: 'bottomRightRadius', hasValue: true, hasBinding: true },
    { name: 'cached', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'material', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offset', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'radius', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spread', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'topLeftRadius', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBlurChanged', paramCount: 0 },
    { handlerName: 'onBottomLeftRadiusChanged', paramCount: 0 },
    { handlerName: 'onBottomRightRadiusChanged', paramCount: 0 },
    { handlerName: 'onCachedChanged', paramCount: 0 },
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
    { handlerName: 'onMaterialChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOffsetChanged', paramCount: 0 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRadiusChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpreadChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTopLeftRadiusChanged', paramCount: 0 },
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

export function RectangularShadow(): RectangularShadowBuilder {
  return createFluentBuilder('RectangularShadow', RECTANGULARSHADOW_META) as unknown as RectangularShadowBuilder;
}

export namespace RectangularShadow {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('RectangularShadow', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('RectangularShadow', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('RectangularShadow', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RectangularShadow', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RectangularShadow', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RectangularShadow', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('RectangularShadow', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('RectangularShadow', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('RectangularShadow', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('RectangularShadow', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('RectangularShadow', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RectangularShadow', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RectangularShadow', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RectangularShadow', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RectangularShadow', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RectangularShadow', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RectangularShadow', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RectangularShadow', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RectangularShadow', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RectangularShadow', 'TransformOrigin', 'BottomRight');
  }
}
