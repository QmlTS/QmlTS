// AUTO-GENERATED — DO NOT EDIT
// Type: CheckDelegate
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface CheckDelegateBuilder {
  id(id: string): CheckDelegateBuilder;
  child(obj: QmlObjectBuilder): CheckDelegateBuilder;

  activeFocusOnTab(value: boolean): CheckDelegateBuilder;
  activeFocusOnTabBind(expr: string): CheckDelegateBuilder;
  antialiasing(value: boolean): CheckDelegateBuilder;
  antialiasingBind(expr: string): CheckDelegateBuilder;
  baselineOffset(value: number): CheckDelegateBuilder;
  baselineOffsetBind(expr: string): CheckDelegateBuilder;
  clip(value: boolean): CheckDelegateBuilder;
  clipBind(expr: string): CheckDelegateBuilder;
  containmentMask(value: QtObjectBuilder): CheckDelegateBuilder;
  containmentMaskBind(expr: string): CheckDelegateBuilder;
  contentHeight(value: number): CheckDelegateBuilder;
  contentHeightBind(expr: string): CheckDelegateBuilder;
  contentWidth(value: number): CheckDelegateBuilder;
  contentWidthBind(expr: string): CheckDelegateBuilder;
  control(value: ItemBuilder): CheckDelegateBuilder;
  controlBind(expr: string): CheckDelegateBuilder;
  enabled(value: boolean): CheckDelegateBuilder;
  enabledBind(expr: string): CheckDelegateBuilder;
  focus(value: boolean): CheckDelegateBuilder;
  focusBind(expr: string): CheckDelegateBuilder;
  focusPolicy(value: QmlEnumToken): CheckDelegateBuilder;
  focusPolicyBind(expr: string): CheckDelegateBuilder;
  height(value: number): CheckDelegateBuilder;
  heightBind(expr: string): CheckDelegateBuilder;
  implicitHeight(value: number): CheckDelegateBuilder;
  implicitHeightBind(expr: string): CheckDelegateBuilder;
  implicitWidth(value: number): CheckDelegateBuilder;
  implicitWidthBind(expr: string): CheckDelegateBuilder;
  objectName(value: string): CheckDelegateBuilder;
  objectNameBind(expr: string): CheckDelegateBuilder;
  opacity(value: number): CheckDelegateBuilder;
  opacityBind(expr: string): CheckDelegateBuilder;
  overrideState(value: QmlEnumToken): CheckDelegateBuilder;
  overrideStateBind(expr: string): CheckDelegateBuilder;
  palette(value: PaletteBuilder): CheckDelegateBuilder;
  paletteBind(expr: string): CheckDelegateBuilder;
  parent(value: ItemBuilder): CheckDelegateBuilder;
  parentBind(expr: string): CheckDelegateBuilder;
  rotation(value: number): CheckDelegateBuilder;
  rotationBind(expr: string): CheckDelegateBuilder;
  scale(value: number): CheckDelegateBuilder;
  scaleBind(expr: string): CheckDelegateBuilder;
  smooth(value: boolean): CheckDelegateBuilder;
  smoothBind(expr: string): CheckDelegateBuilder;
  state(value: string): CheckDelegateBuilder;
  stateBind(expr: string): CheckDelegateBuilder;
  transformOrigin(value: QmlEnumToken): CheckDelegateBuilder;
  transformOriginBind(expr: string): CheckDelegateBuilder;
  transitionDuration(value: number): CheckDelegateBuilder;
  transitionDurationBind(expr: string): CheckDelegateBuilder;
  useNinePatchImage(value: boolean): CheckDelegateBuilder;
  useNinePatchImageBind(expr: string): CheckDelegateBuilder;
  visible(value: boolean): CheckDelegateBuilder;
  visibleBind(expr: string): CheckDelegateBuilder;
  width(value: number): CheckDelegateBuilder;
  widthBind(expr: string): CheckDelegateBuilder;
  x(value: number): CheckDelegateBuilder;
  xBind(expr: string): CheckDelegateBuilder;
  y(value: number): CheckDelegateBuilder;
  yBind(expr: string): CheckDelegateBuilder;
  z(value: number): CheckDelegateBuilder;
  zBind(expr: string): CheckDelegateBuilder;
  onActiveFocusChanged(body: string): CheckDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): CheckDelegateBuilder;
  onAntialiasingChanged(body: string): CheckDelegateBuilder;
  onBaselineOffsetChanged(body: string): CheckDelegateBuilder;
  onChildrenChanged(body: string): CheckDelegateBuilder;
  onChildrenRectChanged(body: string): CheckDelegateBuilder;
  onClipChanged(body: string): CheckDelegateBuilder;
  onContainmentMaskChanged(body: string): CheckDelegateBuilder;
  onContentPaddingChanged(body: string): CheckDelegateBuilder;
  onControlChanged(body: string): CheckDelegateBuilder;
  onEnabledChanged(body: string): CheckDelegateBuilder;
  onFocusChanged(body: string): CheckDelegateBuilder;
  onFocusPolicyChanged(body: string): CheckDelegateBuilder;
  onFontChanged(body: string): CheckDelegateBuilder;
  onHeightChanged(body: string): CheckDelegateBuilder;
  onImplicitHeightChanged(body: string): CheckDelegateBuilder;
  onImplicitWidthChanged(body: string): CheckDelegateBuilder;
  onLayoutMarginsChanged(body: string): CheckDelegateBuilder;
  onMinimumSizeChanged(body: string): CheckDelegateBuilder;
  onObjectNameChanged(body: string): CheckDelegateBuilder;
  onOpacityChanged(body: string): CheckDelegateBuilder;
  onPaletteChanged(body: string): CheckDelegateBuilder;
  onPaletteCreated(body: string): CheckDelegateBuilder;
  onParentChanged(body: string): CheckDelegateBuilder;
  onRotationChanged(body: string): CheckDelegateBuilder;
  onScaleChanged(body: string): CheckDelegateBuilder;
  onSmoothChanged(body: string): CheckDelegateBuilder;
  onStateChanged(body: string): CheckDelegateBuilder;
  onTransformOriginChanged(body: string): CheckDelegateBuilder;
  onVisibleChanged(body: string): CheckDelegateBuilder;
  onVisibleChildrenChanged(body: string): CheckDelegateBuilder;
  onWidthChanged(body: string): CheckDelegateBuilder;
  onWindowChanged(body: string): CheckDelegateBuilder;
  onXChanged(body: string): CheckDelegateBuilder;
  onYChanged(body: string): CheckDelegateBuilder;
  onZChanged(body: string): CheckDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CheckDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): CheckDelegateBuilder;
}

const CHECKDELEGATE_META: TypeMetadata = {
  typeName: 'CheckDelegate',
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

export function CheckDelegate(): CheckDelegateBuilder {
  return createFluentBuilder('CheckDelegate', CHECKDELEGATE_META) as unknown as CheckDelegateBuilder;
}

export namespace CheckDelegate {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('CheckDelegate', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('CheckDelegate', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('CheckDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('CheckDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('CheckDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('CheckDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('CheckDelegate', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('CheckDelegate', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('CheckDelegate', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('CheckDelegate', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('CheckDelegate', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace OverrideState {
    export const None = createEnumToken('CheckDelegate', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('CheckDelegate', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('CheckDelegate', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('CheckDelegate', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('CheckDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('CheckDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('CheckDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('CheckDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('CheckDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('CheckDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('CheckDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('CheckDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('CheckDelegate', 'TransformOrigin', 'BottomRight');
  }
}
