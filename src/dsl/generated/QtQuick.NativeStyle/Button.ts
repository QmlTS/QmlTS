// AUTO-GENERATED — DO NOT EDIT
// Type: Button
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface ButtonBuilder {
  id(id: string): ButtonBuilder;
  child(obj: QmlObjectBuilder): ButtonBuilder;

  activeFocusOnTab(value: boolean): ButtonBuilder;
  activeFocusOnTabBind(expr: string): ButtonBuilder;
  antialiasing(value: boolean): ButtonBuilder;
  antialiasingBind(expr: string): ButtonBuilder;
  baselineOffset(value: number): ButtonBuilder;
  baselineOffsetBind(expr: string): ButtonBuilder;
  clip(value: boolean): ButtonBuilder;
  clipBind(expr: string): ButtonBuilder;
  containmentMask(value: QtObjectBuilder): ButtonBuilder;
  containmentMaskBind(expr: string): ButtonBuilder;
  contentHeight(value: number): ButtonBuilder;
  contentHeightBind(expr: string): ButtonBuilder;
  contentWidth(value: number): ButtonBuilder;
  contentWidthBind(expr: string): ButtonBuilder;
  control(value: ItemBuilder): ButtonBuilder;
  controlBind(expr: string): ButtonBuilder;
  enabled(value: boolean): ButtonBuilder;
  enabledBind(expr: string): ButtonBuilder;
  focus(value: boolean): ButtonBuilder;
  focusBind(expr: string): ButtonBuilder;
  focusPolicy(value: QmlEnumToken): ButtonBuilder;
  focusPolicyBind(expr: string): ButtonBuilder;
  height(value: number): ButtonBuilder;
  heightBind(expr: string): ButtonBuilder;
  implicitHeight(value: number): ButtonBuilder;
  implicitHeightBind(expr: string): ButtonBuilder;
  implicitWidth(value: number): ButtonBuilder;
  implicitWidthBind(expr: string): ButtonBuilder;
  objectName(value: string): ButtonBuilder;
  objectNameBind(expr: string): ButtonBuilder;
  opacity(value: number): ButtonBuilder;
  opacityBind(expr: string): ButtonBuilder;
  overrideState(value: QmlEnumToken): ButtonBuilder;
  overrideStateBind(expr: string): ButtonBuilder;
  palette(value: PaletteBuilder): ButtonBuilder;
  paletteBind(expr: string): ButtonBuilder;
  parent(value: ItemBuilder): ButtonBuilder;
  parentBind(expr: string): ButtonBuilder;
  rotation(value: number): ButtonBuilder;
  rotationBind(expr: string): ButtonBuilder;
  scale(value: number): ButtonBuilder;
  scaleBind(expr: string): ButtonBuilder;
  smooth(value: boolean): ButtonBuilder;
  smoothBind(expr: string): ButtonBuilder;
  state(value: string): ButtonBuilder;
  stateBind(expr: string): ButtonBuilder;
  transformOrigin(value: QmlEnumToken): ButtonBuilder;
  transformOriginBind(expr: string): ButtonBuilder;
  transitionDuration(value: number): ButtonBuilder;
  transitionDurationBind(expr: string): ButtonBuilder;
  useNinePatchImage(value: boolean): ButtonBuilder;
  useNinePatchImageBind(expr: string): ButtonBuilder;
  visible(value: boolean): ButtonBuilder;
  visibleBind(expr: string): ButtonBuilder;
  width(value: number): ButtonBuilder;
  widthBind(expr: string): ButtonBuilder;
  x(value: number): ButtonBuilder;
  xBind(expr: string): ButtonBuilder;
  y(value: number): ButtonBuilder;
  yBind(expr: string): ButtonBuilder;
  z(value: number): ButtonBuilder;
  zBind(expr: string): ButtonBuilder;
  onActiveFocusChanged(body: string): ButtonBuilder;
  onActiveFocusOnTabChanged(body: string): ButtonBuilder;
  onAntialiasingChanged(body: string): ButtonBuilder;
  onBaselineOffsetChanged(body: string): ButtonBuilder;
  onChildrenChanged(body: string): ButtonBuilder;
  onChildrenRectChanged(body: string): ButtonBuilder;
  onClipChanged(body: string): ButtonBuilder;
  onContainmentMaskChanged(body: string): ButtonBuilder;
  onContentPaddingChanged(body: string): ButtonBuilder;
  onControlChanged(body: string): ButtonBuilder;
  onEnabledChanged(body: string): ButtonBuilder;
  onFocusChanged(body: string): ButtonBuilder;
  onFocusPolicyChanged(body: string): ButtonBuilder;
  onFontChanged(body: string): ButtonBuilder;
  onHeightChanged(body: string): ButtonBuilder;
  onImplicitHeightChanged(body: string): ButtonBuilder;
  onImplicitWidthChanged(body: string): ButtonBuilder;
  onLayoutMarginsChanged(body: string): ButtonBuilder;
  onMinimumSizeChanged(body: string): ButtonBuilder;
  onObjectNameChanged(body: string): ButtonBuilder;
  onOpacityChanged(body: string): ButtonBuilder;
  onPaletteChanged(body: string): ButtonBuilder;
  onPaletteCreated(body: string): ButtonBuilder;
  onParentChanged(body: string): ButtonBuilder;
  onRotationChanged(body: string): ButtonBuilder;
  onScaleChanged(body: string): ButtonBuilder;
  onSmoothChanged(body: string): ButtonBuilder;
  onStateChanged(body: string): ButtonBuilder;
  onTransformOriginChanged(body: string): ButtonBuilder;
  onVisibleChanged(body: string): ButtonBuilder;
  onVisibleChildrenChanged(body: string): ButtonBuilder;
  onWidthChanged(body: string): ButtonBuilder;
  onWindowChanged(body: string): ButtonBuilder;
  onXChanged(body: string): ButtonBuilder;
  onYChanged(body: string): ButtonBuilder;
  onZChanged(body: string): ButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): ButtonBuilder;
}

const BUTTON_META: TypeMetadata = {
  typeName: 'Button',
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

export function Button(): ButtonBuilder {
  return createFluentBuilder('Button', BUTTON_META) as unknown as ButtonBuilder;
}

export namespace Button {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Button', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Button', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Button', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Button', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Button', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Button', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Button', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Button', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Button', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Button', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Button', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Button', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Button', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Button', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Button', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Button', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Button', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Button', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Button', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Button', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OverrideState {
    export const None = createEnumToken('Button', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('Button', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('Button', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('Button', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Button', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Button', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Button', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Button', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Button', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Button', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Button', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Button', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Button', 'TransformOrigin', 'BottomRight');
  }
}
