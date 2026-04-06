// AUTO-GENERATED — DO NOT EDIT
// Type: TumblerView
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { PathBuilder } from '../QtQuick/Path.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface TumblerViewBuilder {
  id(id: string): TumblerViewBuilder;
  child(obj: QmlObjectBuilder): TumblerViewBuilder;
  children(...objs: QmlObjectBuilder[]): TumblerViewBuilder;

  activeFocusOnTab(value: boolean): TumblerViewBuilder;
  activeFocusOnTabBind(expr: string): TumblerViewBuilder;
  antialiasing(value: boolean): TumblerViewBuilder;
  antialiasingBind(expr: string): TumblerViewBuilder;
  baselineOffset(value: number): TumblerViewBuilder;
  baselineOffsetBind(expr: string): TumblerViewBuilder;
  clip(value: boolean): TumblerViewBuilder;
  clipBind(expr: string): TumblerViewBuilder;
  containmentMask(value: QtObjectBuilder): TumblerViewBuilder;
  containmentMaskBind(expr: string): TumblerViewBuilder;
  delegate(value: QmlComponent): TumblerViewBuilder;
  delegateBind(expr: string): TumblerViewBuilder;
  enabled(value: boolean): TumblerViewBuilder;
  enabledBind(expr: string): TumblerViewBuilder;
  focus(value: boolean): TumblerViewBuilder;
  focusBind(expr: string): TumblerViewBuilder;
  focusPolicy(value: QmlEnumToken): TumblerViewBuilder;
  focusPolicyBind(expr: string): TumblerViewBuilder;
  height(value: number): TumblerViewBuilder;
  heightBind(expr: string): TumblerViewBuilder;
  implicitHeight(value: number): TumblerViewBuilder;
  implicitHeightBind(expr: string): TumblerViewBuilder;
  implicitWidth(value: number): TumblerViewBuilder;
  implicitWidthBind(expr: string): TumblerViewBuilder;
  model(value: QmlValue): TumblerViewBuilder;
  modelBind(expr: string): TumblerViewBuilder;
  objectName(value: string): TumblerViewBuilder;
  objectNameBind(expr: string): TumblerViewBuilder;
  opacity(value: number): TumblerViewBuilder;
  opacityBind(expr: string): TumblerViewBuilder;
  palette(value: PaletteBuilder): TumblerViewBuilder;
  paletteBind(expr: string): TumblerViewBuilder;
  parent(value: ItemBuilder): TumblerViewBuilder;
  parentBind(expr: string): TumblerViewBuilder;
  path(value: PathBuilder): TumblerViewBuilder;
  pathBind(expr: string): TumblerViewBuilder;
  rotation(value: number): TumblerViewBuilder;
  rotationBind(expr: string): TumblerViewBuilder;
  scale(value: number): TumblerViewBuilder;
  scaleBind(expr: string): TumblerViewBuilder;
  smooth(value: boolean): TumblerViewBuilder;
  smoothBind(expr: string): TumblerViewBuilder;
  state(value: string): TumblerViewBuilder;
  stateBind(expr: string): TumblerViewBuilder;
  transformOrigin(value: QmlEnumToken): TumblerViewBuilder;
  transformOriginBind(expr: string): TumblerViewBuilder;
  visible(value: boolean): TumblerViewBuilder;
  visibleBind(expr: string): TumblerViewBuilder;
  width(value: number): TumblerViewBuilder;
  widthBind(expr: string): TumblerViewBuilder;
  x(value: number): TumblerViewBuilder;
  xBind(expr: string): TumblerViewBuilder;
  y(value: number): TumblerViewBuilder;
  yBind(expr: string): TumblerViewBuilder;
  z(value: number): TumblerViewBuilder;
  zBind(expr: string): TumblerViewBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onClipChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onModelChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onPathChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): TumblerViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TumblerViewBuilder;
  layer(setup: (b: LayerBuilder) => void): TumblerViewBuilder;
}

const TUMBLERVIEW_META: TypeMetadata = {
  typeName: 'TumblerView',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'path', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPathChanged', paramCount: 0 },
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
  attached: [],
  defaultProperty: 'data',
};

export function TumblerView(): TumblerViewBuilder {
  return createFluentBuilder('TumblerView', TUMBLERVIEW_META) as unknown as TumblerViewBuilder;
}

export namespace TumblerView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TumblerView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TumblerView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TumblerView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TumblerView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TumblerView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TumblerView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TumblerView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TumblerView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TumblerView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TumblerView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TumblerView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TumblerView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TumblerView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TumblerView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TumblerView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TumblerView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TumblerView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TumblerView', 'TransformOrigin', 'BottomRight');
  }
}
