// AUTO-GENERATED — DO NOT EDIT
// Type: Scene3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { EntityBuilder } from '../Qt3D.Core/Entity.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface Scene3DBuilder {
  id(id: string): Scene3DBuilder;
  child(obj: QmlObjectBuilder): Scene3DBuilder;

  activeFocusOnTab(value: boolean): Scene3DBuilder;
  activeFocusOnTabBind(expr: string): Scene3DBuilder;
  antialiasing(value: boolean): Scene3DBuilder;
  antialiasingBind(expr: string): Scene3DBuilder;
  aspects(value: string[]): Scene3DBuilder;
  aspectsBind(expr: string): Scene3DBuilder;
  baselineOffset(value: number): Scene3DBuilder;
  baselineOffsetBind(expr: string): Scene3DBuilder;
  cameraAspectRatioMode(value: QmlEnumToken): Scene3DBuilder;
  cameraAspectRatioModeBind(expr: string): Scene3DBuilder;
  clip(value: boolean): Scene3DBuilder;
  clipBind(expr: string): Scene3DBuilder;
  compositingMode(value: QmlEnumToken): Scene3DBuilder;
  compositingModeBind(expr: string): Scene3DBuilder;
  containmentMask(value: QtObjectBuilder): Scene3DBuilder;
  containmentMaskBind(expr: string): Scene3DBuilder;
  enabled(value: boolean): Scene3DBuilder;
  enabledBind(expr: string): Scene3DBuilder;
  entity(value: EntityBuilder): Scene3DBuilder;
  entityBind(expr: string): Scene3DBuilder;
  focus(value: boolean): Scene3DBuilder;
  focusBind(expr: string): Scene3DBuilder;
  focusPolicy(value: QmlEnumToken): Scene3DBuilder;
  focusPolicyBind(expr: string): Scene3DBuilder;
  height(value: number): Scene3DBuilder;
  heightBind(expr: string): Scene3DBuilder;
  hoverEnabled(value: boolean): Scene3DBuilder;
  hoverEnabledBind(expr: string): Scene3DBuilder;
  implicitHeight(value: number): Scene3DBuilder;
  implicitHeightBind(expr: string): Scene3DBuilder;
  implicitWidth(value: number): Scene3DBuilder;
  implicitWidthBind(expr: string): Scene3DBuilder;
  multisample(value: boolean): Scene3DBuilder;
  multisampleBind(expr: string): Scene3DBuilder;
  objectName(value: string): Scene3DBuilder;
  objectNameBind(expr: string): Scene3DBuilder;
  opacity(value: number): Scene3DBuilder;
  opacityBind(expr: string): Scene3DBuilder;
  palette(value: PaletteBuilder): Scene3DBuilder;
  paletteBind(expr: string): Scene3DBuilder;
  parent(value: ItemBuilder): Scene3DBuilder;
  parentBind(expr: string): Scene3DBuilder;
  rotation(value: number): Scene3DBuilder;
  rotationBind(expr: string): Scene3DBuilder;
  scale(value: number): Scene3DBuilder;
  scaleBind(expr: string): Scene3DBuilder;
  smooth(value: boolean): Scene3DBuilder;
  smoothBind(expr: string): Scene3DBuilder;
  state(value: string): Scene3DBuilder;
  stateBind(expr: string): Scene3DBuilder;
  transformOrigin(value: QmlEnumToken): Scene3DBuilder;
  transformOriginBind(expr: string): Scene3DBuilder;
  visible(value: boolean): Scene3DBuilder;
  visibleBind(expr: string): Scene3DBuilder;
  width(value: number): Scene3DBuilder;
  widthBind(expr: string): Scene3DBuilder;
  x(value: number): Scene3DBuilder;
  xBind(expr: string): Scene3DBuilder;
  y(value: number): Scene3DBuilder;
  yBind(expr: string): Scene3DBuilder;
  z(value: number): Scene3DBuilder;
  zBind(expr: string): Scene3DBuilder;
  onActiveFocusChanged(body: string): Scene3DBuilder;
  onActiveFocusOnTabChanged(body: string): Scene3DBuilder;
  onAntialiasingChanged(body: string): Scene3DBuilder;
  onAspectsChanged(body: string): Scene3DBuilder;
  onBaselineOffsetChanged(body: string): Scene3DBuilder;
  onCameraAspectRatioModeChanged(body: string): Scene3DBuilder;
  onChildrenChanged(body: string): Scene3DBuilder;
  onChildrenRectChanged(body: string): Scene3DBuilder;
  onClipChanged(body: string): Scene3DBuilder;
  onCompositingModeChanged(body: string): Scene3DBuilder;
  onContainmentMaskChanged(body: string): Scene3DBuilder;
  onEnabledChanged(body: string): Scene3DBuilder;
  onEntityChanged(body: string): Scene3DBuilder;
  onFocusChanged(body: string): Scene3DBuilder;
  onFocusPolicyChanged(body: string): Scene3DBuilder;
  onHeightChanged(body: string): Scene3DBuilder;
  onHoverEnabledChanged(body: string): Scene3DBuilder;
  onImplicitHeightChanged(body: string): Scene3DBuilder;
  onImplicitWidthChanged(body: string): Scene3DBuilder;
  onMultisampleChanged(body: string): Scene3DBuilder;
  onObjectNameChanged(body: string): Scene3DBuilder;
  onOpacityChanged(body: string): Scene3DBuilder;
  onPaletteChanged(body: string): Scene3DBuilder;
  onPaletteCreated(body: string): Scene3DBuilder;
  onParentChanged(body: string): Scene3DBuilder;
  onRotationChanged(body: string): Scene3DBuilder;
  onScaleChanged(body: string): Scene3DBuilder;
  onSmoothChanged(body: string): Scene3DBuilder;
  onStateChanged(body: string): Scene3DBuilder;
  onTransformOriginChanged(body: string): Scene3DBuilder;
  onVisibleChanged(body: string): Scene3DBuilder;
  onVisibleChildrenChanged(body: string): Scene3DBuilder;
  onWidthChanged(body: string): Scene3DBuilder;
  onWindowChanged(body: string): Scene3DBuilder;
  onXChanged(body: string): Scene3DBuilder;
  onYChanged(body: string): Scene3DBuilder;
  onZChanged(body: string): Scene3DBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): Scene3DBuilder;
  layer(setup: (b: LayerBuilder) => void): Scene3DBuilder;
}

const SCENE3D_META: TypeMetadata = {
  typeName: 'Scene3D',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'aspects', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'cameraAspectRatioMode', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'compositingMode', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'entity', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'multisample', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAspectsChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onCameraAspectRatioModeChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onCompositingModeChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEntityChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onMultisampleChanged', paramCount: 0 },
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
  defaultProperty: 'entity',
};

export function Scene3D(): Scene3DBuilder {
  return createFluentBuilder('Scene3D', SCENE3D_META) as unknown as Scene3DBuilder;
}

export namespace Scene3D {
  export namespace CameraAspectRatioMode {
    export const AutomaticAspectRatio = createEnumToken('Scene3D', 'CameraAspectRatioMode', 'AutomaticAspectRatio');
    export const UserAspectRatio = createEnumToken('Scene3D', 'CameraAspectRatioMode', 'UserAspectRatio');
  }
  export namespace CompositingMode {
    export const FBO = createEnumToken('Scene3D', 'CompositingMode', 'FBO');
    export const Underlay = createEnumToken('Scene3D', 'CompositingMode', 'Underlay');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Scene3D', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Scene3D', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Scene3D', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Scene3D', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Scene3D', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Scene3D', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Scene3D', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Scene3D', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Scene3D', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Scene3D', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Scene3D', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Scene3D', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Scene3D', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Scene3D', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Scene3D', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Scene3D', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Scene3D', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Scene3D', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Scene3D', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Scene3D', 'TransformOrigin', 'BottomRight');
  }
}
