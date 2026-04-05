// AUTO-GENERATED — DO NOT EDIT
// Type: RadioDelegate
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface RadioDelegateBuilder {
  id(id: string): RadioDelegateBuilder;
  child(obj: QmlObjectBuilder): RadioDelegateBuilder;

  activeFocusOnTab(value: boolean): RadioDelegateBuilder;
  activeFocusOnTabBind(expr: string): RadioDelegateBuilder;
  antialiasing(value: boolean): RadioDelegateBuilder;
  antialiasingBind(expr: string): RadioDelegateBuilder;
  baselineOffset(value: number): RadioDelegateBuilder;
  baselineOffsetBind(expr: string): RadioDelegateBuilder;
  clip(value: boolean): RadioDelegateBuilder;
  clipBind(expr: string): RadioDelegateBuilder;
  containmentMask(value: QtObjectBuilder): RadioDelegateBuilder;
  containmentMaskBind(expr: string): RadioDelegateBuilder;
  contentHeight(value: number): RadioDelegateBuilder;
  contentHeightBind(expr: string): RadioDelegateBuilder;
  contentWidth(value: number): RadioDelegateBuilder;
  contentWidthBind(expr: string): RadioDelegateBuilder;
  control(value: ItemBuilder): RadioDelegateBuilder;
  controlBind(expr: string): RadioDelegateBuilder;
  enabled(value: boolean): RadioDelegateBuilder;
  enabledBind(expr: string): RadioDelegateBuilder;
  focus(value: boolean): RadioDelegateBuilder;
  focusBind(expr: string): RadioDelegateBuilder;
  focusPolicy(value: QmlEnumToken): RadioDelegateBuilder;
  focusPolicyBind(expr: string): RadioDelegateBuilder;
  height(value: number): RadioDelegateBuilder;
  heightBind(expr: string): RadioDelegateBuilder;
  implicitHeight(value: number): RadioDelegateBuilder;
  implicitHeightBind(expr: string): RadioDelegateBuilder;
  implicitWidth(value: number): RadioDelegateBuilder;
  implicitWidthBind(expr: string): RadioDelegateBuilder;
  objectName(value: string): RadioDelegateBuilder;
  objectNameBind(expr: string): RadioDelegateBuilder;
  opacity(value: number): RadioDelegateBuilder;
  opacityBind(expr: string): RadioDelegateBuilder;
  overrideState(value: QmlEnumToken): RadioDelegateBuilder;
  overrideStateBind(expr: string): RadioDelegateBuilder;
  palette(value: PaletteBuilder): RadioDelegateBuilder;
  paletteBind(expr: string): RadioDelegateBuilder;
  parent(value: ItemBuilder): RadioDelegateBuilder;
  parentBind(expr: string): RadioDelegateBuilder;
  rotation(value: number): RadioDelegateBuilder;
  rotationBind(expr: string): RadioDelegateBuilder;
  scale(value: number): RadioDelegateBuilder;
  scaleBind(expr: string): RadioDelegateBuilder;
  smooth(value: boolean): RadioDelegateBuilder;
  smoothBind(expr: string): RadioDelegateBuilder;
  state(value: string): RadioDelegateBuilder;
  stateBind(expr: string): RadioDelegateBuilder;
  transformOrigin(value: QmlEnumToken): RadioDelegateBuilder;
  transformOriginBind(expr: string): RadioDelegateBuilder;
  transitionDuration(value: number): RadioDelegateBuilder;
  transitionDurationBind(expr: string): RadioDelegateBuilder;
  useNinePatchImage(value: boolean): RadioDelegateBuilder;
  useNinePatchImageBind(expr: string): RadioDelegateBuilder;
  visible(value: boolean): RadioDelegateBuilder;
  visibleBind(expr: string): RadioDelegateBuilder;
  width(value: number): RadioDelegateBuilder;
  widthBind(expr: string): RadioDelegateBuilder;
  x(value: number): RadioDelegateBuilder;
  xBind(expr: string): RadioDelegateBuilder;
  y(value: number): RadioDelegateBuilder;
  yBind(expr: string): RadioDelegateBuilder;
  z(value: number): RadioDelegateBuilder;
  zBind(expr: string): RadioDelegateBuilder;
  onActiveFocusChanged(body: string): RadioDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): RadioDelegateBuilder;
  onAntialiasingChanged(body: string): RadioDelegateBuilder;
  onBaselineOffsetChanged(body: string): RadioDelegateBuilder;
  onChildrenChanged(body: string): RadioDelegateBuilder;
  onChildrenRectChanged(body: string): RadioDelegateBuilder;
  onClipChanged(body: string): RadioDelegateBuilder;
  onContainmentMaskChanged(body: string): RadioDelegateBuilder;
  onContentPaddingChanged(body: string): RadioDelegateBuilder;
  onControlChanged(body: string): RadioDelegateBuilder;
  onEnabledChanged(body: string): RadioDelegateBuilder;
  onFocusChanged(body: string): RadioDelegateBuilder;
  onFocusPolicyChanged(body: string): RadioDelegateBuilder;
  onFontChanged(body: string): RadioDelegateBuilder;
  onHeightChanged(body: string): RadioDelegateBuilder;
  onImplicitHeightChanged(body: string): RadioDelegateBuilder;
  onImplicitWidthChanged(body: string): RadioDelegateBuilder;
  onLayoutMarginsChanged(body: string): RadioDelegateBuilder;
  onMinimumSizeChanged(body: string): RadioDelegateBuilder;
  onObjectNameChanged(body: string): RadioDelegateBuilder;
  onOpacityChanged(body: string): RadioDelegateBuilder;
  onPaletteChanged(body: string): RadioDelegateBuilder;
  onPaletteCreated(body: string): RadioDelegateBuilder;
  onParentChanged(body: string): RadioDelegateBuilder;
  onRotationChanged(body: string): RadioDelegateBuilder;
  onScaleChanged(body: string): RadioDelegateBuilder;
  onSmoothChanged(body: string): RadioDelegateBuilder;
  onStateChanged(body: string): RadioDelegateBuilder;
  onTransformOriginChanged(body: string): RadioDelegateBuilder;
  onVisibleChanged(body: string): RadioDelegateBuilder;
  onVisibleChildrenChanged(body: string): RadioDelegateBuilder;
  onWidthChanged(body: string): RadioDelegateBuilder;
  onWindowChanged(body: string): RadioDelegateBuilder;
  onXChanged(body: string): RadioDelegateBuilder;
  onYChanged(body: string): RadioDelegateBuilder;
  onZChanged(body: string): RadioDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RadioDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): RadioDelegateBuilder;
}

const RADIODELEGATE_META: TypeMetadata = {
  typeName: 'RadioDelegate',
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

export function RadioDelegate(): RadioDelegateBuilder {
  return createFluentBuilder('RadioDelegate', RADIODELEGATE_META) as unknown as RadioDelegateBuilder;
}

export namespace RadioDelegate {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('RadioDelegate', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('RadioDelegate', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('RadioDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RadioDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RadioDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RadioDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('RadioDelegate', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('RadioDelegate', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('RadioDelegate', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('RadioDelegate', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('RadioDelegate', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OverrideState {
    export const None = createEnumToken('RadioDelegate', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('RadioDelegate', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('RadioDelegate', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('RadioDelegate', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RadioDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RadioDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RadioDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RadioDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RadioDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RadioDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RadioDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RadioDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RadioDelegate', 'TransformOrigin', 'BottomRight');
  }
}
