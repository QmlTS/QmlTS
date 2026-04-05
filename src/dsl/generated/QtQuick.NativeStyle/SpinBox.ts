// AUTO-GENERATED — DO NOT EDIT
// Type: SpinBox
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface SpinBoxBuilder {
  id(id: string): SpinBoxBuilder;
  child(obj: QmlObjectBuilder): SpinBoxBuilder;

  activeFocusOnTab(value: boolean): SpinBoxBuilder;
  activeFocusOnTabBind(expr: string): SpinBoxBuilder;
  antialiasing(value: boolean): SpinBoxBuilder;
  antialiasingBind(expr: string): SpinBoxBuilder;
  baselineOffset(value: number): SpinBoxBuilder;
  baselineOffsetBind(expr: string): SpinBoxBuilder;
  clip(value: boolean): SpinBoxBuilder;
  clipBind(expr: string): SpinBoxBuilder;
  containmentMask(value: QtObjectBuilder): SpinBoxBuilder;
  containmentMaskBind(expr: string): SpinBoxBuilder;
  contentHeight(value: number): SpinBoxBuilder;
  contentHeightBind(expr: string): SpinBoxBuilder;
  contentWidth(value: number): SpinBoxBuilder;
  contentWidthBind(expr: string): SpinBoxBuilder;
  control(value: ItemBuilder): SpinBoxBuilder;
  controlBind(expr: string): SpinBoxBuilder;
  enabled(value: boolean): SpinBoxBuilder;
  enabledBind(expr: string): SpinBoxBuilder;
  focus(value: boolean): SpinBoxBuilder;
  focusBind(expr: string): SpinBoxBuilder;
  focusPolicy(value: QmlEnumToken): SpinBoxBuilder;
  focusPolicyBind(expr: string): SpinBoxBuilder;
  height(value: number): SpinBoxBuilder;
  heightBind(expr: string): SpinBoxBuilder;
  implicitHeight(value: number): SpinBoxBuilder;
  implicitHeightBind(expr: string): SpinBoxBuilder;
  implicitWidth(value: number): SpinBoxBuilder;
  implicitWidthBind(expr: string): SpinBoxBuilder;
  objectName(value: string): SpinBoxBuilder;
  objectNameBind(expr: string): SpinBoxBuilder;
  opacity(value: number): SpinBoxBuilder;
  opacityBind(expr: string): SpinBoxBuilder;
  overrideState(value: QmlEnumToken): SpinBoxBuilder;
  overrideStateBind(expr: string): SpinBoxBuilder;
  palette(value: PaletteBuilder): SpinBoxBuilder;
  paletteBind(expr: string): SpinBoxBuilder;
  parent(value: ItemBuilder): SpinBoxBuilder;
  parentBind(expr: string): SpinBoxBuilder;
  rotation(value: number): SpinBoxBuilder;
  rotationBind(expr: string): SpinBoxBuilder;
  scale(value: number): SpinBoxBuilder;
  scaleBind(expr: string): SpinBoxBuilder;
  smooth(value: boolean): SpinBoxBuilder;
  smoothBind(expr: string): SpinBoxBuilder;
  state(value: string): SpinBoxBuilder;
  stateBind(expr: string): SpinBoxBuilder;
  subControl(value: QmlEnumToken): SpinBoxBuilder;
  subControlBind(expr: string): SpinBoxBuilder;
  transformOrigin(value: QmlEnumToken): SpinBoxBuilder;
  transformOriginBind(expr: string): SpinBoxBuilder;
  transitionDuration(value: number): SpinBoxBuilder;
  transitionDurationBind(expr: string): SpinBoxBuilder;
  useNinePatchImage(value: boolean): SpinBoxBuilder;
  useNinePatchImageBind(expr: string): SpinBoxBuilder;
  visible(value: boolean): SpinBoxBuilder;
  visibleBind(expr: string): SpinBoxBuilder;
  width(value: number): SpinBoxBuilder;
  widthBind(expr: string): SpinBoxBuilder;
  x(value: number): SpinBoxBuilder;
  xBind(expr: string): SpinBoxBuilder;
  y(value: number): SpinBoxBuilder;
  yBind(expr: string): SpinBoxBuilder;
  z(value: number): SpinBoxBuilder;
  zBind(expr: string): SpinBoxBuilder;
  onActiveFocusChanged(body: string): SpinBoxBuilder;
  onActiveFocusOnTabChanged(body: string): SpinBoxBuilder;
  onAntialiasingChanged(body: string): SpinBoxBuilder;
  onBaselineOffsetChanged(body: string): SpinBoxBuilder;
  onChildrenChanged(body: string): SpinBoxBuilder;
  onChildrenRectChanged(body: string): SpinBoxBuilder;
  onClipChanged(body: string): SpinBoxBuilder;
  onContainmentMaskChanged(body: string): SpinBoxBuilder;
  onContentPaddingChanged(body: string): SpinBoxBuilder;
  onControlChanged(body: string): SpinBoxBuilder;
  onEnabledChanged(body: string): SpinBoxBuilder;
  onFocusChanged(body: string): SpinBoxBuilder;
  onFocusPolicyChanged(body: string): SpinBoxBuilder;
  onFontChanged(body: string): SpinBoxBuilder;
  onHeightChanged(body: string): SpinBoxBuilder;
  onImplicitHeightChanged(body: string): SpinBoxBuilder;
  onImplicitWidthChanged(body: string): SpinBoxBuilder;
  onLayoutMarginsChanged(body: string): SpinBoxBuilder;
  onMinimumSizeChanged(body: string): SpinBoxBuilder;
  onObjectNameChanged(body: string): SpinBoxBuilder;
  onOpacityChanged(body: string): SpinBoxBuilder;
  onPaletteChanged(body: string): SpinBoxBuilder;
  onPaletteCreated(body: string): SpinBoxBuilder;
  onParentChanged(body: string): SpinBoxBuilder;
  onRotationChanged(body: string): SpinBoxBuilder;
  onScaleChanged(body: string): SpinBoxBuilder;
  onSmoothChanged(body: string): SpinBoxBuilder;
  onStateChanged(body: string): SpinBoxBuilder;
  onTransformOriginChanged(body: string): SpinBoxBuilder;
  onVisibleChanged(body: string): SpinBoxBuilder;
  onVisibleChildrenChanged(body: string): SpinBoxBuilder;
  onWidthChanged(body: string): SpinBoxBuilder;
  onWindowChanged(body: string): SpinBoxBuilder;
  onXChanged(body: string): SpinBoxBuilder;
  onYChanged(body: string): SpinBoxBuilder;
  onZChanged(body: string): SpinBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SpinBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): SpinBoxBuilder;
}

const SPINBOX_META: TypeMetadata = {
  typeName: 'SpinBox',
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

export function SpinBox(): SpinBoxBuilder {
  return createFluentBuilder('SpinBox', SPINBOX_META) as unknown as SpinBoxBuilder;
}

export namespace SpinBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('SpinBox', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('SpinBox', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('SpinBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SpinBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SpinBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SpinBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('SpinBox', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('SpinBox', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('SpinBox', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('SpinBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('SpinBox', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OverrideState {
    export const None = createEnumToken('SpinBox', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('SpinBox', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('SpinBox', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('SpinBox', 'OverrideState', 'AlwaysSunken');
  }
  export namespace SubControl {
    export const Frame = createEnumToken('SpinBox', 'SubControl', 'Frame');
    export const Up = createEnumToken('SpinBox', 'SubControl', 'Up');
    export const Down = createEnumToken('SpinBox', 'SubControl', 'Down');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SpinBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SpinBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SpinBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SpinBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SpinBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SpinBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SpinBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SpinBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SpinBox', 'TransformOrigin', 'BottomRight');
  }
}
