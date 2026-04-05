// AUTO-GENERATED — DO NOT EDIT
// Type: StyledItemBase
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface StyledItemBaseBuilder {
  id(id: string): StyledItemBaseBuilder;
  child(obj: QmlObjectBuilder): StyledItemBaseBuilder;

  activeFocusOnTab(value: boolean): StyledItemBaseBuilder;
  activeFocusOnTabBind(expr: string): StyledItemBaseBuilder;
  antialiasing(value: boolean): StyledItemBaseBuilder;
  antialiasingBind(expr: string): StyledItemBaseBuilder;
  baselineOffset(value: number): StyledItemBaseBuilder;
  baselineOffsetBind(expr: string): StyledItemBaseBuilder;
  clip(value: boolean): StyledItemBaseBuilder;
  clipBind(expr: string): StyledItemBaseBuilder;
  containmentMask(value: QtObjectBuilder): StyledItemBaseBuilder;
  containmentMaskBind(expr: string): StyledItemBaseBuilder;
  delegateStyle(value: QmlValue): StyledItemBaseBuilder;
  delegateStyleBind(expr: string): StyledItemBaseBuilder;
  enabled(value: boolean): StyledItemBaseBuilder;
  enabledBind(expr: string): StyledItemBaseBuilder;
  focus(value: boolean): StyledItemBaseBuilder;
  focusBind(expr: string): StyledItemBaseBuilder;
  focusPolicy(value: QmlEnumToken): StyledItemBaseBuilder;
  focusPolicyBind(expr: string): StyledItemBaseBuilder;
  height(value: number): StyledItemBaseBuilder;
  heightBind(expr: string): StyledItemBaseBuilder;
  objectName(value: string): StyledItemBaseBuilder;
  objectNameBind(expr: string): StyledItemBaseBuilder;
  opacity(value: number): StyledItemBaseBuilder;
  opacityBind(expr: string): StyledItemBaseBuilder;
  palette(value: PaletteBuilder): StyledItemBaseBuilder;
  paletteBind(expr: string): StyledItemBaseBuilder;
  parent(value: ItemBuilder): StyledItemBaseBuilder;
  parentBind(expr: string): StyledItemBaseBuilder;
  rotation(value: number): StyledItemBaseBuilder;
  rotationBind(expr: string): StyledItemBaseBuilder;
  scale(value: number): StyledItemBaseBuilder;
  scaleBind(expr: string): StyledItemBaseBuilder;
  smooth(value: boolean): StyledItemBaseBuilder;
  smoothBind(expr: string): StyledItemBaseBuilder;
  state(value: string): StyledItemBaseBuilder;
  stateBind(expr: string): StyledItemBaseBuilder;
  transformOrigin(value: QmlEnumToken): StyledItemBaseBuilder;
  transformOriginBind(expr: string): StyledItemBaseBuilder;
  visible(value: boolean): StyledItemBaseBuilder;
  visibleBind(expr: string): StyledItemBaseBuilder;
  width(value: number): StyledItemBaseBuilder;
  widthBind(expr: string): StyledItemBaseBuilder;
  x(value: number): StyledItemBaseBuilder;
  xBind(expr: string): StyledItemBaseBuilder;
  y(value: number): StyledItemBaseBuilder;
  yBind(expr: string): StyledItemBaseBuilder;
  z(value: number): StyledItemBaseBuilder;
  zBind(expr: string): StyledItemBaseBuilder;
  onActiveFocusChanged(body: string): StyledItemBaseBuilder;
  onActiveFocusOnTabChanged(body: string): StyledItemBaseBuilder;
  onAntialiasingChanged(body: string): StyledItemBaseBuilder;
  onBaselineOffsetChanged(body: string): StyledItemBaseBuilder;
  onChildrenChanged(body: string): StyledItemBaseBuilder;
  onChildrenRectChanged(body: string): StyledItemBaseBuilder;
  onClipChanged(body: string): StyledItemBaseBuilder;
  onContainmentMaskChanged(body: string): StyledItemBaseBuilder;
  onDelegateStyleChanged(body: string): StyledItemBaseBuilder;
  onEnabledChanged(body: string): StyledItemBaseBuilder;
  onFocusChanged(body: string): StyledItemBaseBuilder;
  onFocusPolicyChanged(body: string): StyledItemBaseBuilder;
  onHeightChanged(body: string): StyledItemBaseBuilder;
  onImplicitHeightChanged(body: string): StyledItemBaseBuilder;
  onImplicitWidthChanged(body: string): StyledItemBaseBuilder;
  onObjectNameChanged(body: string): StyledItemBaseBuilder;
  onOpacityChanged(body: string): StyledItemBaseBuilder;
  onPaletteChanged(body: string): StyledItemBaseBuilder;
  onPaletteCreated(body: string): StyledItemBaseBuilder;
  onParentChanged(body: string): StyledItemBaseBuilder;
  onRotationChanged(body: string): StyledItemBaseBuilder;
  onScaleChanged(body: string): StyledItemBaseBuilder;
  onSmoothChanged(body: string): StyledItemBaseBuilder;
  onStateChanged(body: string): StyledItemBaseBuilder;
  onTransformOriginChanged(body: string): StyledItemBaseBuilder;
  onVisibleChanged(body: string): StyledItemBaseBuilder;
  onVisibleChildrenChanged(body: string): StyledItemBaseBuilder;
  onWidthChanged(body: string): StyledItemBaseBuilder;
  onWindowChanged(body: string): StyledItemBaseBuilder;
  onXChanged(body: string): StyledItemBaseBuilder;
  onYChanged(body: string): StyledItemBaseBuilder;
  onZChanged(body: string): StyledItemBaseBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): StyledItemBaseBuilder;
  layer(setup: (b: LayerBuilder) => void): StyledItemBaseBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): StyledItemBaseBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): StyledItemBaseBuilder;
}

const STYLEDITEMBASE_META: TypeMetadata = {
  typeName: 'StyledItemBase',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'delegateStyle', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDelegateStyleChanged', paramCount: 0 },
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
    {
      methodName: 'styleKit',
      attachedTypeName: 'StyleKit',
      properties: [
        { name: 'style', hasValue: true, hasBinding: true },
        { name: 'styleUrl', hasValue: true, hasBinding: true },
        { name: 'transitionsEnabled', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onStyleChanged', paramCount: 0 },
        { handlerName: 'onStyleUrlChanged', paramCount: 0 },
        { handlerName: 'onTransitionsEnabledChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'styleVariation',
      attachedTypeName: 'StyleVariation',
      properties: [
        { name: 'controlType', hasValue: true, hasBinding: true },
        { name: 'variations', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlTypeChanged', paramCount: 0 },
        { handlerName: 'onVariationsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function StyledItemBase(): StyledItemBaseBuilder {
  return createFluentBuilder('StyledItemBase', STYLEDITEMBASE_META) as unknown as StyledItemBaseBuilder;
}

export namespace StyledItemBase {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('StyledItemBase', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('StyledItemBase', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('StyledItemBase', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('StyledItemBase', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('StyledItemBase', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('StyledItemBase', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('StyledItemBase', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('StyledItemBase', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('StyledItemBase', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('StyledItemBase', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('StyledItemBase', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('StyledItemBase', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('StyledItemBase', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('StyledItemBase', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('StyledItemBase', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('StyledItemBase', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('StyledItemBase', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('StyledItemBase', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('StyledItemBase', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('StyledItemBase', 'TransformOrigin', 'BottomRight');
  }
}
