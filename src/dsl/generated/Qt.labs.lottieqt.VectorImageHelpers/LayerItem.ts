// AUTO-GENERATED — DO NOT EDIT
// Type: LayerItem
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface LayerItemBuilder {
  id(id: string): LayerItemBuilder;
  child(obj: QmlObjectBuilder): LayerItemBuilder;
  children(...objs: QmlObjectBuilder[]): LayerItemBuilder;

  activeFocusOnTab(value: boolean): LayerItemBuilder;
  activeFocusOnTabBind(expr: string): LayerItemBuilder;
  antialiasing(value: boolean): LayerItemBuilder;
  antialiasingBind(expr: string): LayerItemBuilder;
  baselineOffset(value: number): LayerItemBuilder;
  baselineOffsetBind(expr: string): LayerItemBuilder;
  clip(value: boolean): LayerItemBuilder;
  clipBind(expr: string): LayerItemBuilder;
  containmentMask(value: QtObjectBuilder): LayerItemBuilder;
  containmentMaskBind(expr: string): LayerItemBuilder;
  enabled(value: boolean): LayerItemBuilder;
  enabledBind(expr: string): LayerItemBuilder;
  focus(value: boolean): LayerItemBuilder;
  focusBind(expr: string): LayerItemBuilder;
  focusPolicy(value: QmlEnumToken): LayerItemBuilder;
  focusPolicyBind(expr: string): LayerItemBuilder;
  height(value: number): LayerItemBuilder;
  heightBind(expr: string): LayerItemBuilder;
  implicitHeight(value: number): LayerItemBuilder;
  implicitHeightBind(expr: string): LayerItemBuilder;
  implicitWidth(value: number): LayerItemBuilder;
  implicitWidthBind(expr: string): LayerItemBuilder;
  objectName(value: string): LayerItemBuilder;
  objectNameBind(expr: string): LayerItemBuilder;
  opacity(value: number): LayerItemBuilder;
  opacityBind(expr: string): LayerItemBuilder;
  palette(value: PaletteBuilder): LayerItemBuilder;
  paletteBind(expr: string): LayerItemBuilder;
  parent(value: ItemBuilder): LayerItemBuilder;
  parentBind(expr: string): LayerItemBuilder;
  rotation(value: number): LayerItemBuilder;
  rotationBind(expr: string): LayerItemBuilder;
  scale(value: number): LayerItemBuilder;
  scaleBind(expr: string): LayerItemBuilder;
  smooth(value: boolean): LayerItemBuilder;
  smoothBind(expr: string): LayerItemBuilder;
  state(value: string): LayerItemBuilder;
  stateBind(expr: string): LayerItemBuilder;
  transformOrigin(value: QmlEnumToken): LayerItemBuilder;
  transformOriginBind(expr: string): LayerItemBuilder;
  visible(value: boolean): LayerItemBuilder;
  visibleBind(expr: string): LayerItemBuilder;
  width(value: number): LayerItemBuilder;
  widthBind(expr: string): LayerItemBuilder;
  x(value: number): LayerItemBuilder;
  xBind(expr: string): LayerItemBuilder;
  y(value: number): LayerItemBuilder;
  yBind(expr: string): LayerItemBuilder;
  z(value: number): LayerItemBuilder;
  zBind(expr: string): LayerItemBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onClipChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): LayerItemBuilder;
  onParentChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onStateChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onTransformMatrixChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onXChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onYChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  onZChanged(handler: DslSignalHandlerValue): LayerItemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): LayerItemBuilder;
  layer(setup: (b: LayerBuilder) => void): LayerItemBuilder;
}

const LAYERITEM_META: TypeMetadata = {
  typeName: 'LayerItem',
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
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformMatrixChanged', paramCount: 0 },
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

export function LayerItem(): LayerItemBuilder {
  return createFluentBuilder('LayerItem', LAYERITEM_META) as unknown as LayerItemBuilder;
}

export namespace LayerItem {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'LayerItem',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'LayerItem',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('LayerItem', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('LayerItem', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('LayerItem', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('LayerItem', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'LayerItem',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('LayerItem', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'LayerItem',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('LayerItem', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('LayerItem', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('LayerItem', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('LayerItem', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('LayerItem', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('LayerItem', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('LayerItem', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('LayerItem', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('LayerItem', 'TransformOrigin', 'BottomRight');
  }
}
