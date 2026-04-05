// AUTO-GENERATED — DO NOT EDIT
// Type: RadioButton
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface RadioButtonBuilder {
  id(id: string): RadioButtonBuilder;
  child(obj: QmlObjectBuilder): RadioButtonBuilder;

  activeFocusOnTab(value: boolean): RadioButtonBuilder;
  activeFocusOnTabBind(expr: string): RadioButtonBuilder;
  antialiasing(value: boolean): RadioButtonBuilder;
  antialiasingBind(expr: string): RadioButtonBuilder;
  baselineOffset(value: number): RadioButtonBuilder;
  baselineOffsetBind(expr: string): RadioButtonBuilder;
  clip(value: boolean): RadioButtonBuilder;
  clipBind(expr: string): RadioButtonBuilder;
  containmentMask(value: QtObjectBuilder): RadioButtonBuilder;
  containmentMaskBind(expr: string): RadioButtonBuilder;
  contentHeight(value: number): RadioButtonBuilder;
  contentHeightBind(expr: string): RadioButtonBuilder;
  contentWidth(value: number): RadioButtonBuilder;
  contentWidthBind(expr: string): RadioButtonBuilder;
  control(value: ItemBuilder): RadioButtonBuilder;
  controlBind(expr: string): RadioButtonBuilder;
  enabled(value: boolean): RadioButtonBuilder;
  enabledBind(expr: string): RadioButtonBuilder;
  focus(value: boolean): RadioButtonBuilder;
  focusBind(expr: string): RadioButtonBuilder;
  focusPolicy(value: QmlEnumToken): RadioButtonBuilder;
  focusPolicyBind(expr: string): RadioButtonBuilder;
  height(value: number): RadioButtonBuilder;
  heightBind(expr: string): RadioButtonBuilder;
  implicitHeight(value: number): RadioButtonBuilder;
  implicitHeightBind(expr: string): RadioButtonBuilder;
  implicitWidth(value: number): RadioButtonBuilder;
  implicitWidthBind(expr: string): RadioButtonBuilder;
  objectName(value: string): RadioButtonBuilder;
  objectNameBind(expr: string): RadioButtonBuilder;
  opacity(value: number): RadioButtonBuilder;
  opacityBind(expr: string): RadioButtonBuilder;
  overrideState(value: QmlEnumToken): RadioButtonBuilder;
  overrideStateBind(expr: string): RadioButtonBuilder;
  palette(value: PaletteBuilder): RadioButtonBuilder;
  paletteBind(expr: string): RadioButtonBuilder;
  parent(value: ItemBuilder): RadioButtonBuilder;
  parentBind(expr: string): RadioButtonBuilder;
  rotation(value: number): RadioButtonBuilder;
  rotationBind(expr: string): RadioButtonBuilder;
  scale(value: number): RadioButtonBuilder;
  scaleBind(expr: string): RadioButtonBuilder;
  smooth(value: boolean): RadioButtonBuilder;
  smoothBind(expr: string): RadioButtonBuilder;
  state(value: string): RadioButtonBuilder;
  stateBind(expr: string): RadioButtonBuilder;
  transformOrigin(value: QmlEnumToken): RadioButtonBuilder;
  transformOriginBind(expr: string): RadioButtonBuilder;
  transitionDuration(value: number): RadioButtonBuilder;
  transitionDurationBind(expr: string): RadioButtonBuilder;
  useNinePatchImage(value: boolean): RadioButtonBuilder;
  useNinePatchImageBind(expr: string): RadioButtonBuilder;
  visible(value: boolean): RadioButtonBuilder;
  visibleBind(expr: string): RadioButtonBuilder;
  width(value: number): RadioButtonBuilder;
  widthBind(expr: string): RadioButtonBuilder;
  x(value: number): RadioButtonBuilder;
  xBind(expr: string): RadioButtonBuilder;
  y(value: number): RadioButtonBuilder;
  yBind(expr: string): RadioButtonBuilder;
  z(value: number): RadioButtonBuilder;
  zBind(expr: string): RadioButtonBuilder;
  onActiveFocusChanged(body: string): RadioButtonBuilder;
  onActiveFocusOnTabChanged(body: string): RadioButtonBuilder;
  onAntialiasingChanged(body: string): RadioButtonBuilder;
  onBaselineOffsetChanged(body: string): RadioButtonBuilder;
  onChildrenChanged(body: string): RadioButtonBuilder;
  onChildrenRectChanged(body: string): RadioButtonBuilder;
  onClipChanged(body: string): RadioButtonBuilder;
  onContainmentMaskChanged(body: string): RadioButtonBuilder;
  onContentPaddingChanged(body: string): RadioButtonBuilder;
  onControlChanged(body: string): RadioButtonBuilder;
  onEnabledChanged(body: string): RadioButtonBuilder;
  onFocusChanged(body: string): RadioButtonBuilder;
  onFocusPolicyChanged(body: string): RadioButtonBuilder;
  onFontChanged(body: string): RadioButtonBuilder;
  onHeightChanged(body: string): RadioButtonBuilder;
  onImplicitHeightChanged(body: string): RadioButtonBuilder;
  onImplicitWidthChanged(body: string): RadioButtonBuilder;
  onLayoutMarginsChanged(body: string): RadioButtonBuilder;
  onMinimumSizeChanged(body: string): RadioButtonBuilder;
  onObjectNameChanged(body: string): RadioButtonBuilder;
  onOpacityChanged(body: string): RadioButtonBuilder;
  onPaletteChanged(body: string): RadioButtonBuilder;
  onPaletteCreated(body: string): RadioButtonBuilder;
  onParentChanged(body: string): RadioButtonBuilder;
  onRotationChanged(body: string): RadioButtonBuilder;
  onScaleChanged(body: string): RadioButtonBuilder;
  onSmoothChanged(body: string): RadioButtonBuilder;
  onStateChanged(body: string): RadioButtonBuilder;
  onTransformOriginChanged(body: string): RadioButtonBuilder;
  onVisibleChanged(body: string): RadioButtonBuilder;
  onVisibleChildrenChanged(body: string): RadioButtonBuilder;
  onWidthChanged(body: string): RadioButtonBuilder;
  onWindowChanged(body: string): RadioButtonBuilder;
  onXChanged(body: string): RadioButtonBuilder;
  onYChanged(body: string): RadioButtonBuilder;
  onZChanged(body: string): RadioButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RadioButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): RadioButtonBuilder;
}

const RADIOBUTTON_META: TypeMetadata = {
  typeName: 'RadioButton',
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

export function RadioButton(): RadioButtonBuilder {
  return createFluentBuilder('RadioButton', RADIOBUTTON_META) as unknown as RadioButtonBuilder;
}

export namespace RadioButton {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('RadioButton', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('RadioButton', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('RadioButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('RadioButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('RadioButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('RadioButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('RadioButton', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('RadioButton', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('RadioButton', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('RadioButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('RadioButton', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OverrideState {
    export const None = createEnumToken('RadioButton', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('RadioButton', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('RadioButton', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('RadioButton', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('RadioButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('RadioButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('RadioButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('RadioButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('RadioButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('RadioButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('RadioButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('RadioButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('RadioButton', 'TransformOrigin', 'BottomRight');
  }
}
