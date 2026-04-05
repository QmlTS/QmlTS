// AUTO-GENERATED — DO NOT EDIT
// Type: View3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { NodeBuilder } from './Node.js';
import type { SceneEnvironmentBuilder } from './SceneEnvironment.js';
export interface View3DBuilder {
  id(id: string): View3DBuilder;
  child(obj: QmlObjectBuilder): View3DBuilder;

  activeFocusOnTab(value: boolean): View3DBuilder;
  activeFocusOnTabBind(expr: string): View3DBuilder;
  antialiasing(value: boolean): View3DBuilder;
  antialiasingBind(expr: string): View3DBuilder;
  baselineOffset(value: number): View3DBuilder;
  baselineOffsetBind(expr: string): View3DBuilder;
  camera(value: QmlValue): View3DBuilder;
  cameraBind(expr: string): View3DBuilder;
  clip(value: boolean): View3DBuilder;
  clipBind(expr: string): View3DBuilder;
  containmentMask(value: QtObjectBuilder): View3DBuilder;
  containmentMaskBind(expr: string): View3DBuilder;
  enabled(value: boolean): View3DBuilder;
  enabledBind(expr: string): View3DBuilder;
  environment(value: SceneEnvironmentBuilder): View3DBuilder;
  environmentBind(expr: string): View3DBuilder;
  explicitTextureHeight(value: number): View3DBuilder;
  explicitTextureHeightBind(expr: string): View3DBuilder;
  explicitTextureWidth(value: number): View3DBuilder;
  explicitTextureWidthBind(expr: string): View3DBuilder;
  focus(value: boolean): View3DBuilder;
  focusBind(expr: string): View3DBuilder;
  focusPolicy(value: QmlEnumToken): View3DBuilder;
  focusPolicyBind(expr: string): View3DBuilder;
  height(value: number): View3DBuilder;
  heightBind(expr: string): View3DBuilder;
  implicitHeight(value: number): View3DBuilder;
  implicitHeightBind(expr: string): View3DBuilder;
  implicitWidth(value: number): View3DBuilder;
  implicitWidthBind(expr: string): View3DBuilder;
  importScene(value: NodeBuilder): View3DBuilder;
  importSceneBind(expr: string): View3DBuilder;
  objectName(value: string): View3DBuilder;
  objectNameBind(expr: string): View3DBuilder;
  opacity(value: number): View3DBuilder;
  opacityBind(expr: string): View3DBuilder;
  palette(value: PaletteBuilder): View3DBuilder;
  paletteBind(expr: string): View3DBuilder;
  parent(value: ItemBuilder): View3DBuilder;
  parentBind(expr: string): View3DBuilder;
  renderFormat(value: QmlEnumToken): View3DBuilder;
  renderFormatBind(expr: string): View3DBuilder;
  renderMode(value: QmlEnumToken): View3DBuilder;
  renderModeBind(expr: string): View3DBuilder;
  renderOverrides(value: QmlEnumToken): View3DBuilder;
  renderOverridesBind(expr: string): View3DBuilder;
  rotation(value: number): View3DBuilder;
  rotationBind(expr: string): View3DBuilder;
  scale(value: number): View3DBuilder;
  scaleBind(expr: string): View3DBuilder;
  smooth(value: boolean): View3DBuilder;
  smoothBind(expr: string): View3DBuilder;
  state(value: string): View3DBuilder;
  stateBind(expr: string): View3DBuilder;
  transformOrigin(value: QmlEnumToken): View3DBuilder;
  transformOriginBind(expr: string): View3DBuilder;
  visible(value: boolean): View3DBuilder;
  visibleBind(expr: string): View3DBuilder;
  width(value: number): View3DBuilder;
  widthBind(expr: string): View3DBuilder;
  x(value: number): View3DBuilder;
  xBind(expr: string): View3DBuilder;
  y(value: number): View3DBuilder;
  yBind(expr: string): View3DBuilder;
  z(value: number): View3DBuilder;
  zBind(expr: string): View3DBuilder;
  onActiveFocusChanged(body: string): View3DBuilder;
  onActiveFocusOnTabChanged(body: string): View3DBuilder;
  onAntialiasingChanged(body: string): View3DBuilder;
  onBaselineOffsetChanged(body: string): View3DBuilder;
  onCameraChanged(body: string): View3DBuilder;
  onChildrenChanged(body: string): View3DBuilder;
  onChildrenRectChanged(body: string): View3DBuilder;
  onClipChanged(body: string): View3DBuilder;
  onContainmentMaskChanged(body: string): View3DBuilder;
  onEffectiveTextureSizeChanged(body: string): View3DBuilder;
  onEnabledChanged(body: string): View3DBuilder;
  onEnvironmentChanged(body: string): View3DBuilder;
  onExplicitTextureHeightChanged(body: string): View3DBuilder;
  onExplicitTextureWidthChanged(body: string): View3DBuilder;
  onFocusChanged(body: string): View3DBuilder;
  onFocusPolicyChanged(body: string): View3DBuilder;
  onHeightChanged(body: string): View3DBuilder;
  onImplicitHeightChanged(body: string): View3DBuilder;
  onImplicitWidthChanged(body: string): View3DBuilder;
  onImportSceneChanged(body: string): View3DBuilder;
  onObjectNameChanged(body: string): View3DBuilder;
  onOpacityChanged(body: string): View3DBuilder;
  onPaletteChanged(body: string): View3DBuilder;
  onPaletteCreated(body: string): View3DBuilder;
  onParentChanged(body: string): View3DBuilder;
  onRenderFormatChanged(body: string): View3DBuilder;
  onRenderModeChanged(body: string): View3DBuilder;
  onRenderOverridesChanged(body: string): View3DBuilder;
  onRotationChanged(body: string): View3DBuilder;
  onScaleChanged(body: string): View3DBuilder;
  onSceneChanged(body: string): View3DBuilder;
  onSmoothChanged(body: string): View3DBuilder;
  onStateChanged(body: string): View3DBuilder;
  onTransformOriginChanged(body: string): View3DBuilder;
  onVisibleChanged(body: string): View3DBuilder;
  onVisibleChildrenChanged(body: string): View3DBuilder;
  onWidthChanged(body: string): View3DBuilder;
  onWindowChanged(body: string): View3DBuilder;
  onXChanged(body: string): View3DBuilder;
  onYChanged(body: string): View3DBuilder;
  onZChanged(body: string): View3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): View3DBuilder;
  layer(setup: (b: LayerBuilder) => void): View3DBuilder;
}

const VIEW3D_META: TypeMetadata = {
  typeName: 'View3D',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'environment', hasValue: true, hasBinding: true },
    { name: 'explicitTextureHeight', hasValue: true, hasBinding: true },
    { name: 'explicitTextureWidth', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'importScene', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderFormat', hasValue: true, hasBinding: true },
    { name: 'renderMode', hasValue: true, hasBinding: true },
    { name: 'renderOverrides', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCameraChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEffectiveTextureSizeChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnvironmentChanged', paramCount: 0 },
    { handlerName: 'onExplicitTextureHeightChanged', paramCount: 0 },
    { handlerName: 'onExplicitTextureWidthChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onImportSceneChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRenderFormatChanged', paramCount: 0 },
    { handlerName: 'onRenderModeChanged', paramCount: 0 },
    { handlerName: 'onRenderOverridesChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneChanged', paramCount: 0 },
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
  defaultProperty: 'data',
};

export function View3D(): View3DBuilder {
  return createFluentBuilder('View3D', VIEW3D_META) as unknown as View3DBuilder;
}

export namespace View3D {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('View3D', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('View3D', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('View3D', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('View3D', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('View3D', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('View3D', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('View3D', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('View3D', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('View3D', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('View3D', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('View3D', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace RenderMode {
    export const Offscreen = createEnumToken('View3D', 'RenderMode', 'Offscreen');
    export const Underlay = createEnumToken('View3D', 'RenderMode', 'Underlay');
    export const Overlay = createEnumToken('View3D', 'RenderMode', 'Overlay');
    export const Inline = createEnumToken('View3D', 'RenderMode', 'Inline');
  }
  export namespace RenderOverride {
    export const None = createEnumToken('View3D', 'RenderOverride', 'None');
    export const DisableInternalPasses = createEnumToken('View3D', 'RenderOverride', 'DisableInternalPasses');
  }
  export namespace RenderOverrides {
    export const None = createEnumToken('View3D', 'RenderOverrides', 'None');
    export const DisableInternalPasses = createEnumToken('View3D', 'RenderOverrides', 'DisableInternalPasses');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('View3D', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('View3D', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('View3D', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('View3D', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('View3D', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('View3D', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('View3D', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('View3D', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('View3D', 'TransformOrigin', 'BottomRight');
  }
}
