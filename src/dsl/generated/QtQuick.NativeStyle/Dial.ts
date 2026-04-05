// AUTO-GENERATED — DO NOT EDIT
// Type: Dial
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface DialBuilder {
  id(id: string): DialBuilder;
  child(obj: QmlObjectBuilder): DialBuilder;

  activeFocusOnTab(value: boolean): DialBuilder;
  activeFocusOnTabBind(expr: string): DialBuilder;
  antialiasing(value: boolean): DialBuilder;
  antialiasingBind(expr: string): DialBuilder;
  baselineOffset(value: number): DialBuilder;
  baselineOffsetBind(expr: string): DialBuilder;
  clip(value: boolean): DialBuilder;
  clipBind(expr: string): DialBuilder;
  containmentMask(value: QtObjectBuilder): DialBuilder;
  containmentMaskBind(expr: string): DialBuilder;
  contentHeight(value: number): DialBuilder;
  contentHeightBind(expr: string): DialBuilder;
  contentWidth(value: number): DialBuilder;
  contentWidthBind(expr: string): DialBuilder;
  control(value: ItemBuilder): DialBuilder;
  controlBind(expr: string): DialBuilder;
  enabled(value: boolean): DialBuilder;
  enabledBind(expr: string): DialBuilder;
  focus(value: boolean): DialBuilder;
  focusBind(expr: string): DialBuilder;
  focusPolicy(value: QmlEnumToken): DialBuilder;
  focusPolicyBind(expr: string): DialBuilder;
  height(value: number): DialBuilder;
  heightBind(expr: string): DialBuilder;
  implicitHeight(value: number): DialBuilder;
  implicitHeightBind(expr: string): DialBuilder;
  implicitWidth(value: number): DialBuilder;
  implicitWidthBind(expr: string): DialBuilder;
  objectName(value: string): DialBuilder;
  objectNameBind(expr: string): DialBuilder;
  opacity(value: number): DialBuilder;
  opacityBind(expr: string): DialBuilder;
  overrideState(value: QmlEnumToken): DialBuilder;
  overrideStateBind(expr: string): DialBuilder;
  palette(value: PaletteBuilder): DialBuilder;
  paletteBind(expr: string): DialBuilder;
  parent(value: ItemBuilder): DialBuilder;
  parentBind(expr: string): DialBuilder;
  rotation(value: number): DialBuilder;
  rotationBind(expr: string): DialBuilder;
  scale(value: number): DialBuilder;
  scaleBind(expr: string): DialBuilder;
  smooth(value: boolean): DialBuilder;
  smoothBind(expr: string): DialBuilder;
  state(value: string): DialBuilder;
  stateBind(expr: string): DialBuilder;
  transformOrigin(value: QmlEnumToken): DialBuilder;
  transformOriginBind(expr: string): DialBuilder;
  transitionDuration(value: number): DialBuilder;
  transitionDurationBind(expr: string): DialBuilder;
  useNinePatchImage(value: boolean): DialBuilder;
  useNinePatchImageBind(expr: string): DialBuilder;
  visible(value: boolean): DialBuilder;
  visibleBind(expr: string): DialBuilder;
  width(value: number): DialBuilder;
  widthBind(expr: string): DialBuilder;
  x(value: number): DialBuilder;
  xBind(expr: string): DialBuilder;
  y(value: number): DialBuilder;
  yBind(expr: string): DialBuilder;
  z(value: number): DialBuilder;
  zBind(expr: string): DialBuilder;
  onActiveFocusChanged(body: string): DialBuilder;
  onActiveFocusOnTabChanged(body: string): DialBuilder;
  onAntialiasingChanged(body: string): DialBuilder;
  onBaselineOffsetChanged(body: string): DialBuilder;
  onChildrenChanged(body: string): DialBuilder;
  onChildrenRectChanged(body: string): DialBuilder;
  onClipChanged(body: string): DialBuilder;
  onContainmentMaskChanged(body: string): DialBuilder;
  onContentPaddingChanged(body: string): DialBuilder;
  onControlChanged(body: string): DialBuilder;
  onEnabledChanged(body: string): DialBuilder;
  onFocusChanged(body: string): DialBuilder;
  onFocusPolicyChanged(body: string): DialBuilder;
  onFontChanged(body: string): DialBuilder;
  onHeightChanged(body: string): DialBuilder;
  onImplicitHeightChanged(body: string): DialBuilder;
  onImplicitWidthChanged(body: string): DialBuilder;
  onLayoutMarginsChanged(body: string): DialBuilder;
  onMinimumSizeChanged(body: string): DialBuilder;
  onObjectNameChanged(body: string): DialBuilder;
  onOpacityChanged(body: string): DialBuilder;
  onPaletteChanged(body: string): DialBuilder;
  onPaletteCreated(body: string): DialBuilder;
  onParentChanged(body: string): DialBuilder;
  onRotationChanged(body: string): DialBuilder;
  onScaleChanged(body: string): DialBuilder;
  onSmoothChanged(body: string): DialBuilder;
  onStateChanged(body: string): DialBuilder;
  onTransformOriginChanged(body: string): DialBuilder;
  onVisibleChanged(body: string): DialBuilder;
  onVisibleChildrenChanged(body: string): DialBuilder;
  onWidthChanged(body: string): DialBuilder;
  onWindowChanged(body: string): DialBuilder;
  onXChanged(body: string): DialBuilder;
  onYChanged(body: string): DialBuilder;
  onZChanged(body: string): DialBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DialBuilder;
  layer(setup: (b: LayerBuilder) => void): DialBuilder;
}

const DIAL_META: TypeMetadata = {
  typeName: 'Dial',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'control', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'overrideState', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'transitionDuration', hasValue: true, hasBinding: true },
    { name: 'useNinePatchImage', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContentPaddingChanged', paramCount: 0 },
    { handlerName: 'onControlChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLayoutMarginsChanged', paramCount: 0 },
    { handlerName: 'onMinimumSizeChanged', paramCount: 0 },
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

export function Dial(): DialBuilder {
  return createFluentBuilder('Dial', DIAL_META) as unknown as DialBuilder;
}

export namespace Dial {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Dial', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Dial', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Dial', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Dial', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Dial', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Dial', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Dial', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Dial', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Dial', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Dial', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OverrideState {
    export const None = createEnumToken('Dial', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('Dial', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('Dial', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('Dial', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Dial', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Dial', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Dial', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Dial', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Dial', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Dial', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Dial', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Dial', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Dial', 'TransformOrigin', 'BottomRight');
  }
}
