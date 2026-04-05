// AUTO-GENERATED — DO NOT EDIT
// Type: Frame
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface FrameBuilder {
  id(id: string): FrameBuilder;
  child(obj: QmlObjectBuilder): FrameBuilder;

  activeFocusOnTab(value: boolean): FrameBuilder;
  activeFocusOnTabBind(expr: string): FrameBuilder;
  antialiasing(value: boolean): FrameBuilder;
  antialiasingBind(expr: string): FrameBuilder;
  baselineOffset(value: number): FrameBuilder;
  baselineOffsetBind(expr: string): FrameBuilder;
  clip(value: boolean): FrameBuilder;
  clipBind(expr: string): FrameBuilder;
  containmentMask(value: QtObjectBuilder): FrameBuilder;
  containmentMaskBind(expr: string): FrameBuilder;
  contentHeight(value: number): FrameBuilder;
  contentHeightBind(expr: string): FrameBuilder;
  contentWidth(value: number): FrameBuilder;
  contentWidthBind(expr: string): FrameBuilder;
  control(value: ItemBuilder): FrameBuilder;
  controlBind(expr: string): FrameBuilder;
  enabled(value: boolean): FrameBuilder;
  enabledBind(expr: string): FrameBuilder;
  focus(value: boolean): FrameBuilder;
  focusBind(expr: string): FrameBuilder;
  focusPolicy(value: QmlEnumToken): FrameBuilder;
  focusPolicyBind(expr: string): FrameBuilder;
  height(value: number): FrameBuilder;
  heightBind(expr: string): FrameBuilder;
  implicitHeight(value: number): FrameBuilder;
  implicitHeightBind(expr: string): FrameBuilder;
  implicitWidth(value: number): FrameBuilder;
  implicitWidthBind(expr: string): FrameBuilder;
  objectName(value: string): FrameBuilder;
  objectNameBind(expr: string): FrameBuilder;
  opacity(value: number): FrameBuilder;
  opacityBind(expr: string): FrameBuilder;
  overrideState(value: QmlEnumToken): FrameBuilder;
  overrideStateBind(expr: string): FrameBuilder;
  palette(value: PaletteBuilder): FrameBuilder;
  paletteBind(expr: string): FrameBuilder;
  parent(value: ItemBuilder): FrameBuilder;
  parentBind(expr: string): FrameBuilder;
  rotation(value: number): FrameBuilder;
  rotationBind(expr: string): FrameBuilder;
  scale(value: number): FrameBuilder;
  scaleBind(expr: string): FrameBuilder;
  smooth(value: boolean): FrameBuilder;
  smoothBind(expr: string): FrameBuilder;
  state(value: string): FrameBuilder;
  stateBind(expr: string): FrameBuilder;
  transformOrigin(value: QmlEnumToken): FrameBuilder;
  transformOriginBind(expr: string): FrameBuilder;
  transitionDuration(value: number): FrameBuilder;
  transitionDurationBind(expr: string): FrameBuilder;
  useNinePatchImage(value: boolean): FrameBuilder;
  useNinePatchImageBind(expr: string): FrameBuilder;
  visible(value: boolean): FrameBuilder;
  visibleBind(expr: string): FrameBuilder;
  width(value: number): FrameBuilder;
  widthBind(expr: string): FrameBuilder;
  x(value: number): FrameBuilder;
  xBind(expr: string): FrameBuilder;
  y(value: number): FrameBuilder;
  yBind(expr: string): FrameBuilder;
  z(value: number): FrameBuilder;
  zBind(expr: string): FrameBuilder;
  onActiveFocusChanged(body: string): FrameBuilder;
  onActiveFocusOnTabChanged(body: string): FrameBuilder;
  onAntialiasingChanged(body: string): FrameBuilder;
  onBaselineOffsetChanged(body: string): FrameBuilder;
  onChildrenChanged(body: string): FrameBuilder;
  onChildrenRectChanged(body: string): FrameBuilder;
  onClipChanged(body: string): FrameBuilder;
  onContainmentMaskChanged(body: string): FrameBuilder;
  onContentPaddingChanged(body: string): FrameBuilder;
  onControlChanged(body: string): FrameBuilder;
  onEnabledChanged(body: string): FrameBuilder;
  onFocusChanged(body: string): FrameBuilder;
  onFocusPolicyChanged(body: string): FrameBuilder;
  onFontChanged(body: string): FrameBuilder;
  onHeightChanged(body: string): FrameBuilder;
  onImplicitHeightChanged(body: string): FrameBuilder;
  onImplicitWidthChanged(body: string): FrameBuilder;
  onLayoutMarginsChanged(body: string): FrameBuilder;
  onMinimumSizeChanged(body: string): FrameBuilder;
  onObjectNameChanged(body: string): FrameBuilder;
  onOpacityChanged(body: string): FrameBuilder;
  onPaletteChanged(body: string): FrameBuilder;
  onPaletteCreated(body: string): FrameBuilder;
  onParentChanged(body: string): FrameBuilder;
  onRotationChanged(body: string): FrameBuilder;
  onScaleChanged(body: string): FrameBuilder;
  onSmoothChanged(body: string): FrameBuilder;
  onStateChanged(body: string): FrameBuilder;
  onTransformOriginChanged(body: string): FrameBuilder;
  onVisibleChanged(body: string): FrameBuilder;
  onVisibleChildrenChanged(body: string): FrameBuilder;
  onWidthChanged(body: string): FrameBuilder;
  onWindowChanged(body: string): FrameBuilder;
  onXChanged(body: string): FrameBuilder;
  onYChanged(body: string): FrameBuilder;
  onZChanged(body: string): FrameBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FrameBuilder;
  layer(setup: (b: LayerBuilder) => void): FrameBuilder;
}

const FRAME_META: TypeMetadata = {
  typeName: 'Frame',
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
  attached: [],
};

export function Frame(): FrameBuilder {
  return createFluentBuilder('Frame', FRAME_META) as unknown as FrameBuilder;
}

export namespace Frame {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Frame',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Frame',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Frame', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Frame', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Frame', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Frame', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Frame', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Frame', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Frame',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('Frame', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('Frame', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('Frame', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('Frame', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Frame', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Frame', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Frame', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Frame', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Frame', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Frame', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Frame', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Frame', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Frame', 'TransformOrigin', 'BottomRight');
  }
}
