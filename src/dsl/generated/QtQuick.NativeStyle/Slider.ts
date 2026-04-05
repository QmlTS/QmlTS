// AUTO-GENERATED — DO NOT EDIT
// Type: Slider
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface SliderBuilder {
  id(id: string): SliderBuilder;
  child(obj: QmlObjectBuilder): SliderBuilder;

  activeFocusOnTab(value: boolean): SliderBuilder;
  activeFocusOnTabBind(expr: string): SliderBuilder;
  antialiasing(value: boolean): SliderBuilder;
  antialiasingBind(expr: string): SliderBuilder;
  baselineOffset(value: number): SliderBuilder;
  baselineOffsetBind(expr: string): SliderBuilder;
  clip(value: boolean): SliderBuilder;
  clipBind(expr: string): SliderBuilder;
  containmentMask(value: QtObjectBuilder): SliderBuilder;
  containmentMaskBind(expr: string): SliderBuilder;
  contentHeight(value: number): SliderBuilder;
  contentHeightBind(expr: string): SliderBuilder;
  contentWidth(value: number): SliderBuilder;
  contentWidthBind(expr: string): SliderBuilder;
  control(value: ItemBuilder): SliderBuilder;
  controlBind(expr: string): SliderBuilder;
  enabled(value: boolean): SliderBuilder;
  enabledBind(expr: string): SliderBuilder;
  focus(value: boolean): SliderBuilder;
  focusBind(expr: string): SliderBuilder;
  focusPolicy(value: QmlEnumToken): SliderBuilder;
  focusPolicyBind(expr: string): SliderBuilder;
  height(value: number): SliderBuilder;
  heightBind(expr: string): SliderBuilder;
  implicitHeight(value: number): SliderBuilder;
  implicitHeightBind(expr: string): SliderBuilder;
  implicitWidth(value: number): SliderBuilder;
  implicitWidthBind(expr: string): SliderBuilder;
  objectName(value: string): SliderBuilder;
  objectNameBind(expr: string): SliderBuilder;
  opacity(value: number): SliderBuilder;
  opacityBind(expr: string): SliderBuilder;
  overrideState(value: QmlEnumToken): SliderBuilder;
  overrideStateBind(expr: string): SliderBuilder;
  palette(value: PaletteBuilder): SliderBuilder;
  paletteBind(expr: string): SliderBuilder;
  parent(value: ItemBuilder): SliderBuilder;
  parentBind(expr: string): SliderBuilder;
  rotation(value: number): SliderBuilder;
  rotationBind(expr: string): SliderBuilder;
  scale(value: number): SliderBuilder;
  scaleBind(expr: string): SliderBuilder;
  smooth(value: boolean): SliderBuilder;
  smoothBind(expr: string): SliderBuilder;
  state(value: string): SliderBuilder;
  stateBind(expr: string): SliderBuilder;
  subControl(value: QmlEnumToken): SliderBuilder;
  subControlBind(expr: string): SliderBuilder;
  transformOrigin(value: QmlEnumToken): SliderBuilder;
  transformOriginBind(expr: string): SliderBuilder;
  transitionDuration(value: number): SliderBuilder;
  transitionDurationBind(expr: string): SliderBuilder;
  useNinePatchImage(value: boolean): SliderBuilder;
  useNinePatchImageBind(expr: string): SliderBuilder;
  visible(value: boolean): SliderBuilder;
  visibleBind(expr: string): SliderBuilder;
  width(value: number): SliderBuilder;
  widthBind(expr: string): SliderBuilder;
  x(value: number): SliderBuilder;
  xBind(expr: string): SliderBuilder;
  y(value: number): SliderBuilder;
  yBind(expr: string): SliderBuilder;
  z(value: number): SliderBuilder;
  zBind(expr: string): SliderBuilder;
  onActiveFocusChanged(body: string): SliderBuilder;
  onActiveFocusOnTabChanged(body: string): SliderBuilder;
  onAntialiasingChanged(body: string): SliderBuilder;
  onBaselineOffsetChanged(body: string): SliderBuilder;
  onChildrenChanged(body: string): SliderBuilder;
  onChildrenRectChanged(body: string): SliderBuilder;
  onClipChanged(body: string): SliderBuilder;
  onContainmentMaskChanged(body: string): SliderBuilder;
  onContentPaddingChanged(body: string): SliderBuilder;
  onControlChanged(body: string): SliderBuilder;
  onEnabledChanged(body: string): SliderBuilder;
  onFocusChanged(body: string): SliderBuilder;
  onFocusPolicyChanged(body: string): SliderBuilder;
  onFontChanged(body: string): SliderBuilder;
  onHeightChanged(body: string): SliderBuilder;
  onImplicitHeightChanged(body: string): SliderBuilder;
  onImplicitWidthChanged(body: string): SliderBuilder;
  onLayoutMarginsChanged(body: string): SliderBuilder;
  onMinimumSizeChanged(body: string): SliderBuilder;
  onObjectNameChanged(body: string): SliderBuilder;
  onOpacityChanged(body: string): SliderBuilder;
  onPaletteChanged(body: string): SliderBuilder;
  onPaletteCreated(body: string): SliderBuilder;
  onParentChanged(body: string): SliderBuilder;
  onRotationChanged(body: string): SliderBuilder;
  onScaleChanged(body: string): SliderBuilder;
  onSmoothChanged(body: string): SliderBuilder;
  onStateChanged(body: string): SliderBuilder;
  onTransformOriginChanged(body: string): SliderBuilder;
  onVisibleChanged(body: string): SliderBuilder;
  onVisibleChildrenChanged(body: string): SliderBuilder;
  onWidthChanged(body: string): SliderBuilder;
  onWindowChanged(body: string): SliderBuilder;
  onXChanged(body: string): SliderBuilder;
  onYChanged(body: string): SliderBuilder;
  onZChanged(body: string): SliderBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SliderBuilder;
  layer(setup: (b: LayerBuilder) => void): SliderBuilder;
}

const SLIDER_META: TypeMetadata = {
  typeName: 'Slider',
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
    { name: 'subControl', hasValue: true, hasBinding: true },
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

export function Slider(): SliderBuilder {
  return createFluentBuilder('Slider', SLIDER_META) as unknown as SliderBuilder;
}

export namespace Slider {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Slider', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Slider', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Slider', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Slider', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Slider', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Slider', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Slider', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Slider', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Slider', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Slider', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Slider', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OverrideState {
    export const None = createEnumToken('Slider', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('Slider', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('Slider', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('Slider', 'OverrideState', 'AlwaysSunken');
  }
  export namespace SubControl {
    export const Groove = createEnumToken('Slider', 'SubControl', 'Groove');
    export const Handle = createEnumToken('Slider', 'SubControl', 'Handle');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Slider', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Slider', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Slider', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Slider', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Slider', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Slider', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Slider', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Slider', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Slider', 'TransformOrigin', 'BottomRight');
  }
}
