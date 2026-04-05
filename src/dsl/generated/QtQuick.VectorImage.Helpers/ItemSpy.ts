// AUTO-GENERATED — DO NOT EDIT
// Type: ItemSpy
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface ItemSpyBuilder {
  id(id: string): ItemSpyBuilder;
  child(obj: QmlObjectBuilder): ItemSpyBuilder;

  activeFocusOnTab(value: boolean): ItemSpyBuilder;
  activeFocusOnTabBind(expr: string): ItemSpyBuilder;
  antialiasing(value: boolean): ItemSpyBuilder;
  antialiasingBind(expr: string): ItemSpyBuilder;
  baselineOffset(value: number): ItemSpyBuilder;
  baselineOffsetBind(expr: string): ItemSpyBuilder;
  clip(value: boolean): ItemSpyBuilder;
  clipBind(expr: string): ItemSpyBuilder;
  containmentMask(value: QtObjectBuilder): ItemSpyBuilder;
  containmentMaskBind(expr: string): ItemSpyBuilder;
  enabled(value: boolean): ItemSpyBuilder;
  enabledBind(expr: string): ItemSpyBuilder;
  focus(value: boolean): ItemSpyBuilder;
  focusBind(expr: string): ItemSpyBuilder;
  focusPolicy(value: QmlEnumToken): ItemSpyBuilder;
  focusPolicyBind(expr: string): ItemSpyBuilder;
  height(value: number): ItemSpyBuilder;
  heightBind(expr: string): ItemSpyBuilder;
  implicitHeight(value: number): ItemSpyBuilder;
  implicitHeightBind(expr: string): ItemSpyBuilder;
  implicitWidth(value: number): ItemSpyBuilder;
  implicitWidthBind(expr: string): ItemSpyBuilder;
  objectName(value: string): ItemSpyBuilder;
  objectNameBind(expr: string): ItemSpyBuilder;
  opacity(value: number): ItemSpyBuilder;
  opacityBind(expr: string): ItemSpyBuilder;
  palette(value: PaletteBuilder): ItemSpyBuilder;
  paletteBind(expr: string): ItemSpyBuilder;
  parent(value: ItemBuilder): ItemSpyBuilder;
  parentBind(expr: string): ItemSpyBuilder;
  rotation(value: number): ItemSpyBuilder;
  rotationBind(expr: string): ItemSpyBuilder;
  scale(value: number): ItemSpyBuilder;
  scaleBind(expr: string): ItemSpyBuilder;
  smooth(value: boolean): ItemSpyBuilder;
  smoothBind(expr: string): ItemSpyBuilder;
  state(value: string): ItemSpyBuilder;
  stateBind(expr: string): ItemSpyBuilder;
  transformOrigin(value: QmlEnumToken): ItemSpyBuilder;
  transformOriginBind(expr: string): ItemSpyBuilder;
  visible(value: boolean): ItemSpyBuilder;
  visibleBind(expr: string): ItemSpyBuilder;
  width(value: number): ItemSpyBuilder;
  widthBind(expr: string): ItemSpyBuilder;
  x(value: number): ItemSpyBuilder;
  xBind(expr: string): ItemSpyBuilder;
  y(value: number): ItemSpyBuilder;
  yBind(expr: string): ItemSpyBuilder;
  z(value: number): ItemSpyBuilder;
  zBind(expr: string): ItemSpyBuilder;
  onActiveFocusChanged(body: string): ItemSpyBuilder;
  onActiveFocusOnTabChanged(body: string): ItemSpyBuilder;
  onAntialiasingChanged(body: string): ItemSpyBuilder;
  onBaselineOffsetChanged(body: string): ItemSpyBuilder;
  onChildrenChanged(body: string): ItemSpyBuilder;
  onChildrenRectChanged(body: string): ItemSpyBuilder;
  onClipChanged(body: string): ItemSpyBuilder;
  onContainmentMaskChanged(body: string): ItemSpyBuilder;
  onEnabledChanged(body: string): ItemSpyBuilder;
  onFocusChanged(body: string): ItemSpyBuilder;
  onFocusPolicyChanged(body: string): ItemSpyBuilder;
  onHeightChanged(body: string): ItemSpyBuilder;
  onImplicitHeightChanged(body: string): ItemSpyBuilder;
  onImplicitWidthChanged(body: string): ItemSpyBuilder;
  onObjectNameChanged(body: string): ItemSpyBuilder;
  onOpacityChanged(body: string): ItemSpyBuilder;
  onPaletteChanged(body: string): ItemSpyBuilder;
  onPaletteCreated(body: string): ItemSpyBuilder;
  onParentChanged(body: string): ItemSpyBuilder;
  onRequiredTextureSizeChanged(body: string): ItemSpyBuilder;
  onRotationChanged(body: string): ItemSpyBuilder;
  onScaleChanged(body: string): ItemSpyBuilder;
  onSmoothChanged(body: string): ItemSpyBuilder;
  onStateChanged(body: string): ItemSpyBuilder;
  onTransformOriginChanged(body: string): ItemSpyBuilder;
  onVisibleChanged(body: string): ItemSpyBuilder;
  onVisibleChildrenChanged(body: string): ItemSpyBuilder;
  onWidthChanged(body: string): ItemSpyBuilder;
  onWindowChanged(body: string): ItemSpyBuilder;
  onXChanged(body: string): ItemSpyBuilder;
  onYChanged(body: string): ItemSpyBuilder;
  onZChanged(body: string): ItemSpyBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ItemSpyBuilder;
  layer(setup: (b: LayerBuilder) => void): ItemSpyBuilder;
}

const ITEMSPY_META: TypeMetadata = {
  typeName: 'ItemSpy',
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
    { handlerName: 'onRequiredTextureSizeChanged', paramCount: 0 },
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

export function ItemSpy(): ItemSpyBuilder {
  return createFluentBuilder('ItemSpy', ITEMSPY_META) as unknown as ItemSpyBuilder;
}

export namespace ItemSpy {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('ItemSpy', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('ItemSpy', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('ItemSpy', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ItemSpy', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ItemSpy', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ItemSpy', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('ItemSpy', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('ItemSpy', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('ItemSpy', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('ItemSpy', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('ItemSpy', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ItemSpy', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ItemSpy', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ItemSpy', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ItemSpy', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ItemSpy', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ItemSpy', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ItemSpy', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ItemSpy', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ItemSpy', 'TransformOrigin', 'BottomRight');
  }
}
