// AUTO-GENERATED — DO NOT EDIT
// Type: ItemGroup
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface ItemGroupBuilder {
  id(id: string): ItemGroupBuilder;
  child(obj: QmlObjectBuilder): ItemGroupBuilder;

  activeFocusOnTab(value: boolean): ItemGroupBuilder;
  activeFocusOnTabBind(expr: string): ItemGroupBuilder;
  antialiasing(value: boolean): ItemGroupBuilder;
  antialiasingBind(expr: string): ItemGroupBuilder;
  baselineOffset(value: number): ItemGroupBuilder;
  baselineOffsetBind(expr: string): ItemGroupBuilder;
  clip(value: boolean): ItemGroupBuilder;
  clipBind(expr: string): ItemGroupBuilder;
  containmentMask(value: QtObjectBuilder): ItemGroupBuilder;
  containmentMaskBind(expr: string): ItemGroupBuilder;
  enabled(value: boolean): ItemGroupBuilder;
  enabledBind(expr: string): ItemGroupBuilder;
  focus(value: boolean): ItemGroupBuilder;
  focusBind(expr: string): ItemGroupBuilder;
  focusPolicy(value: QmlEnumToken): ItemGroupBuilder;
  focusPolicyBind(expr: string): ItemGroupBuilder;
  height(value: number): ItemGroupBuilder;
  heightBind(expr: string): ItemGroupBuilder;
  objectName(value: string): ItemGroupBuilder;
  objectNameBind(expr: string): ItemGroupBuilder;
  opacity(value: number): ItemGroupBuilder;
  opacityBind(expr: string): ItemGroupBuilder;
  palette(value: PaletteBuilder): ItemGroupBuilder;
  paletteBind(expr: string): ItemGroupBuilder;
  parent(value: ItemBuilder): ItemGroupBuilder;
  parentBind(expr: string): ItemGroupBuilder;
  rotation(value: number): ItemGroupBuilder;
  rotationBind(expr: string): ItemGroupBuilder;
  scale(value: number): ItemGroupBuilder;
  scaleBind(expr: string): ItemGroupBuilder;
  smooth(value: boolean): ItemGroupBuilder;
  smoothBind(expr: string): ItemGroupBuilder;
  state(value: string): ItemGroupBuilder;
  stateBind(expr: string): ItemGroupBuilder;
  transformOrigin(value: QmlEnumToken): ItemGroupBuilder;
  transformOriginBind(expr: string): ItemGroupBuilder;
  visible(value: boolean): ItemGroupBuilder;
  visibleBind(expr: string): ItemGroupBuilder;
  width(value: number): ItemGroupBuilder;
  widthBind(expr: string): ItemGroupBuilder;
  x(value: number): ItemGroupBuilder;
  xBind(expr: string): ItemGroupBuilder;
  y(value: number): ItemGroupBuilder;
  yBind(expr: string): ItemGroupBuilder;
  z(value: number): ItemGroupBuilder;
  zBind(expr: string): ItemGroupBuilder;
  onActiveFocusChanged(body: string): ItemGroupBuilder;
  onActiveFocusOnTabChanged(body: string): ItemGroupBuilder;
  onAntialiasingChanged(body: string): ItemGroupBuilder;
  onBaselineOffsetChanged(body: string): ItemGroupBuilder;
  onChildrenChanged(body: string): ItemGroupBuilder;
  onChildrenRectChanged(body: string): ItemGroupBuilder;
  onClipChanged(body: string): ItemGroupBuilder;
  onContainmentMaskChanged(body: string): ItemGroupBuilder;
  onEnabledChanged(body: string): ItemGroupBuilder;
  onFocusChanged(body: string): ItemGroupBuilder;
  onFocusPolicyChanged(body: string): ItemGroupBuilder;
  onHeightChanged(body: string): ItemGroupBuilder;
  onImplicitHeightChanged(body: string): ItemGroupBuilder;
  onImplicitWidthChanged(body: string): ItemGroupBuilder;
  onObjectNameChanged(body: string): ItemGroupBuilder;
  onOpacityChanged(body: string): ItemGroupBuilder;
  onPaletteChanged(body: string): ItemGroupBuilder;
  onPaletteCreated(body: string): ItemGroupBuilder;
  onParentChanged(body: string): ItemGroupBuilder;
  onRotationChanged(body: string): ItemGroupBuilder;
  onScaleChanged(body: string): ItemGroupBuilder;
  onSmoothChanged(body: string): ItemGroupBuilder;
  onStateChanged(body: string): ItemGroupBuilder;
  onTransformOriginChanged(body: string): ItemGroupBuilder;
  onVisibleChanged(body: string): ItemGroupBuilder;
  onVisibleChildrenChanged(body: string): ItemGroupBuilder;
  onWidthChanged(body: string): ItemGroupBuilder;
  onWindowChanged(body: string): ItemGroupBuilder;
  onXChanged(body: string): ItemGroupBuilder;
  onYChanged(body: string): ItemGroupBuilder;
  onZChanged(body: string): ItemGroupBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ItemGroupBuilder;
  layer(setup: (b: LayerBuilder) => void): ItemGroupBuilder;
}

const ITEMGROUP_META: TypeMetadata = {
  typeName: 'ItemGroup',
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

export function ItemGroup(): ItemGroupBuilder {
  return createFluentBuilder('ItemGroup', ITEMGROUP_META) as unknown as ItemGroupBuilder;
}

export namespace ItemGroup {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('ItemGroup', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('ItemGroup', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('ItemGroup', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ItemGroup', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ItemGroup', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ItemGroup', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('ItemGroup', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('ItemGroup', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('ItemGroup', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('ItemGroup', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('ItemGroup', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ItemGroup', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ItemGroup', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ItemGroup', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ItemGroup', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ItemGroup', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ItemGroup', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ItemGroup', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ItemGroup', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ItemGroup', 'TransformOrigin', 'BottomRight');
  }
}
