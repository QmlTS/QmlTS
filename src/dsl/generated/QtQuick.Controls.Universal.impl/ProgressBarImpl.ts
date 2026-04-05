// AUTO-GENERATED — DO NOT EDIT
// Type: ProgressBarImpl
// Generated from Qt 6.11.0

import type {
  QmlColor,
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
export interface ProgressBarImplBuilder {
  id(id: string): ProgressBarImplBuilder;
  child(obj: QmlObjectBuilder): ProgressBarImplBuilder;

  activeFocusOnTab(value: boolean): ProgressBarImplBuilder;
  activeFocusOnTabBind(expr: string): ProgressBarImplBuilder;
  antialiasing(value: boolean): ProgressBarImplBuilder;
  antialiasingBind(expr: string): ProgressBarImplBuilder;
  baselineOffset(value: number): ProgressBarImplBuilder;
  baselineOffsetBind(expr: string): ProgressBarImplBuilder;
  clip(value: boolean): ProgressBarImplBuilder;
  clipBind(expr: string): ProgressBarImplBuilder;
  color(value: QmlColor): ProgressBarImplBuilder;
  colorBind(expr: string): ProgressBarImplBuilder;
  containmentMask(value: QtObjectBuilder): ProgressBarImplBuilder;
  containmentMaskBind(expr: string): ProgressBarImplBuilder;
  enabled(value: boolean): ProgressBarImplBuilder;
  enabledBind(expr: string): ProgressBarImplBuilder;
  focus(value: boolean): ProgressBarImplBuilder;
  focusBind(expr: string): ProgressBarImplBuilder;
  focusPolicy(value: QmlEnumToken): ProgressBarImplBuilder;
  focusPolicyBind(expr: string): ProgressBarImplBuilder;
  height(value: number): ProgressBarImplBuilder;
  heightBind(expr: string): ProgressBarImplBuilder;
  implicitHeight(value: number): ProgressBarImplBuilder;
  implicitHeightBind(expr: string): ProgressBarImplBuilder;
  implicitWidth(value: number): ProgressBarImplBuilder;
  implicitWidthBind(expr: string): ProgressBarImplBuilder;
  indeterminate(value: boolean): ProgressBarImplBuilder;
  indeterminateBind(expr: string): ProgressBarImplBuilder;
  objectName(value: string): ProgressBarImplBuilder;
  objectNameBind(expr: string): ProgressBarImplBuilder;
  opacity(value: number): ProgressBarImplBuilder;
  opacityBind(expr: string): ProgressBarImplBuilder;
  palette(value: PaletteBuilder): ProgressBarImplBuilder;
  paletteBind(expr: string): ProgressBarImplBuilder;
  parent(value: ItemBuilder): ProgressBarImplBuilder;
  parentBind(expr: string): ProgressBarImplBuilder;
  progress(value: number): ProgressBarImplBuilder;
  progressBind(expr: string): ProgressBarImplBuilder;
  rotation(value: number): ProgressBarImplBuilder;
  rotationBind(expr: string): ProgressBarImplBuilder;
  scale(value: number): ProgressBarImplBuilder;
  scaleBind(expr: string): ProgressBarImplBuilder;
  smooth(value: boolean): ProgressBarImplBuilder;
  smoothBind(expr: string): ProgressBarImplBuilder;
  state(value: string): ProgressBarImplBuilder;
  stateBind(expr: string): ProgressBarImplBuilder;
  transformOrigin(value: QmlEnumToken): ProgressBarImplBuilder;
  transformOriginBind(expr: string): ProgressBarImplBuilder;
  visible(value: boolean): ProgressBarImplBuilder;
  visibleBind(expr: string): ProgressBarImplBuilder;
  width(value: number): ProgressBarImplBuilder;
  widthBind(expr: string): ProgressBarImplBuilder;
  x(value: number): ProgressBarImplBuilder;
  xBind(expr: string): ProgressBarImplBuilder;
  y(value: number): ProgressBarImplBuilder;
  yBind(expr: string): ProgressBarImplBuilder;
  z(value: number): ProgressBarImplBuilder;
  zBind(expr: string): ProgressBarImplBuilder;
  onActiveFocusChanged(body: string): ProgressBarImplBuilder;
  onActiveFocusOnTabChanged(body: string): ProgressBarImplBuilder;
  onAntialiasingChanged(body: string): ProgressBarImplBuilder;
  onBaselineOffsetChanged(body: string): ProgressBarImplBuilder;
  onChildrenChanged(body: string): ProgressBarImplBuilder;
  onChildrenRectChanged(body: string): ProgressBarImplBuilder;
  onClipChanged(body: string): ProgressBarImplBuilder;
  onContainmentMaskChanged(body: string): ProgressBarImplBuilder;
  onEnabledChanged(body: string): ProgressBarImplBuilder;
  onFocusChanged(body: string): ProgressBarImplBuilder;
  onFocusPolicyChanged(body: string): ProgressBarImplBuilder;
  onHeightChanged(body: string): ProgressBarImplBuilder;
  onImplicitHeightChanged(body: string): ProgressBarImplBuilder;
  onImplicitWidthChanged(body: string): ProgressBarImplBuilder;
  onObjectNameChanged(body: string): ProgressBarImplBuilder;
  onOpacityChanged(body: string): ProgressBarImplBuilder;
  onPaletteChanged(body: string): ProgressBarImplBuilder;
  onPaletteCreated(body: string): ProgressBarImplBuilder;
  onParentChanged(body: string): ProgressBarImplBuilder;
  onRotationChanged(body: string): ProgressBarImplBuilder;
  onScaleChanged(body: string): ProgressBarImplBuilder;
  onSmoothChanged(body: string): ProgressBarImplBuilder;
  onStateChanged(body: string): ProgressBarImplBuilder;
  onTransformOriginChanged(body: string): ProgressBarImplBuilder;
  onVisibleChanged(body: string): ProgressBarImplBuilder;
  onVisibleChildrenChanged(body: string): ProgressBarImplBuilder;
  onWidthChanged(body: string): ProgressBarImplBuilder;
  onWindowChanged(body: string): ProgressBarImplBuilder;
  onXChanged(body: string): ProgressBarImplBuilder;
  onYChanged(body: string): ProgressBarImplBuilder;
  onZChanged(body: string): ProgressBarImplBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ProgressBarImplBuilder;
  layer(setup: (b: LayerBuilder) => void): ProgressBarImplBuilder;
}

const PROGRESSBARIMPL_META: TypeMetadata = {
  typeName: 'ProgressBarImpl',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'indeterminate', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'progress', hasValue: true, hasBinding: true },
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
  attached: [],
  defaultProperty: 'data',
};

export function ProgressBarImpl(): ProgressBarImplBuilder {
  return createFluentBuilder(
    'ProgressBarImpl',
    PROGRESSBARIMPL_META,
  ) as unknown as ProgressBarImplBuilder;
}

export namespace ProgressBarImpl {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ProgressBarImpl',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ProgressBarImpl',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ProgressBarImpl', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ProgressBarImpl', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ProgressBarImpl', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ProgressBarImpl', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ProgressBarImpl',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ProgressBarImpl',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ProgressBarImpl', 'TransformOrigin', 'BottomRight');
  }
}
