// AUTO-GENERATED — DO NOT EDIT
// Type: Wander
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ParticleSystemBuilder } from './ParticleSystem.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface WanderBuilder {
  id(id: string): WanderBuilder;
  child(obj: QmlObjectBuilder): WanderBuilder;

  activeFocusOnTab(value: boolean): WanderBuilder;
  activeFocusOnTabBind(expr: string): WanderBuilder;
  affectedParameter(value: QmlEnumToken): WanderBuilder;
  affectedParameterBind(expr: string): WanderBuilder;
  antialiasing(value: boolean): WanderBuilder;
  antialiasingBind(expr: string): WanderBuilder;
  baselineOffset(value: number): WanderBuilder;
  baselineOffsetBind(expr: string): WanderBuilder;
  clip(value: boolean): WanderBuilder;
  clipBind(expr: string): WanderBuilder;
  containmentMask(value: QtObjectBuilder): WanderBuilder;
  containmentMaskBind(expr: string): WanderBuilder;
  enabled(value: boolean): WanderBuilder;
  enabledBind(expr: string): WanderBuilder;
  focus(value: boolean): WanderBuilder;
  focusBind(expr: string): WanderBuilder;
  focusPolicy(value: QmlEnumToken): WanderBuilder;
  focusPolicyBind(expr: string): WanderBuilder;
  groups(value: string[]): WanderBuilder;
  groupsBind(expr: string): WanderBuilder;
  height(value: number): WanderBuilder;
  heightBind(expr: string): WanderBuilder;
  implicitHeight(value: number): WanderBuilder;
  implicitHeightBind(expr: string): WanderBuilder;
  implicitWidth(value: number): WanderBuilder;
  implicitWidthBind(expr: string): WanderBuilder;
  objectName(value: string): WanderBuilder;
  objectNameBind(expr: string): WanderBuilder;
  once(value: boolean): WanderBuilder;
  onceBind(expr: string): WanderBuilder;
  opacity(value: number): WanderBuilder;
  opacityBind(expr: string): WanderBuilder;
  pace(value: number): WanderBuilder;
  paceBind(expr: string): WanderBuilder;
  palette(value: PaletteBuilder): WanderBuilder;
  paletteBind(expr: string): WanderBuilder;
  parent(value: ItemBuilder): WanderBuilder;
  parentBind(expr: string): WanderBuilder;
  rotation(value: number): WanderBuilder;
  rotationBind(expr: string): WanderBuilder;
  scale(value: number): WanderBuilder;
  scaleBind(expr: string): WanderBuilder;
  shape(value: QmlValue): WanderBuilder;
  shapeBind(expr: string): WanderBuilder;
  smooth(value: boolean): WanderBuilder;
  smoothBind(expr: string): WanderBuilder;
  state(value: string): WanderBuilder;
  stateBind(expr: string): WanderBuilder;
  system(value: ParticleSystemBuilder): WanderBuilder;
  systemBind(expr: string): WanderBuilder;
  transformOrigin(value: QmlEnumToken): WanderBuilder;
  transformOriginBind(expr: string): WanderBuilder;
  visible(value: boolean): WanderBuilder;
  visibleBind(expr: string): WanderBuilder;
  whenCollidingWith(value: string[]): WanderBuilder;
  whenCollidingWithBind(expr: string): WanderBuilder;
  width(value: number): WanderBuilder;
  widthBind(expr: string): WanderBuilder;
  x(value: number): WanderBuilder;
  xBind(expr: string): WanderBuilder;
  xVariance(value: number): WanderBuilder;
  xVarianceBind(expr: string): WanderBuilder;
  y(value: number): WanderBuilder;
  yBind(expr: string): WanderBuilder;
  yVariance(value: number): WanderBuilder;
  yVarianceBind(expr: string): WanderBuilder;
  z(value: number): WanderBuilder;
  zBind(expr: string): WanderBuilder;
  onActiveFocusChanged(body: string): WanderBuilder;
  onActiveFocusOnTabChanged(body: string): WanderBuilder;
  onAffected(body: string): WanderBuilder;
  onAffectedParameterChanged(body: string): WanderBuilder;
  onAntialiasingChanged(body: string): WanderBuilder;
  onBaselineOffsetChanged(body: string): WanderBuilder;
  onChildrenChanged(body: string): WanderBuilder;
  onChildrenRectChanged(body: string): WanderBuilder;
  onClipChanged(body: string): WanderBuilder;
  onContainmentMaskChanged(body: string): WanderBuilder;
  onEnabledChanged(body: string): WanderBuilder;
  onFocusChanged(body: string): WanderBuilder;
  onFocusPolicyChanged(body: string): WanderBuilder;
  onGroupsChanged(body: string): WanderBuilder;
  onHeightChanged(body: string): WanderBuilder;
  onImplicitHeightChanged(body: string): WanderBuilder;
  onImplicitWidthChanged(body: string): WanderBuilder;
  onObjectNameChanged(body: string): WanderBuilder;
  onOnceChanged(body: string): WanderBuilder;
  onOpacityChanged(body: string): WanderBuilder;
  onPaceChanged(body: string): WanderBuilder;
  onPaletteChanged(body: string): WanderBuilder;
  onPaletteCreated(body: string): WanderBuilder;
  onParentChanged(body: string): WanderBuilder;
  onRotationChanged(body: string): WanderBuilder;
  onScaleChanged(body: string): WanderBuilder;
  onShapeChanged(body: string): WanderBuilder;
  onSmoothChanged(body: string): WanderBuilder;
  onStateChanged(body: string): WanderBuilder;
  onSystemChanged(body: string): WanderBuilder;
  onTransformOriginChanged(body: string): WanderBuilder;
  onVisibleChanged(body: string): WanderBuilder;
  onVisibleChildrenChanged(body: string): WanderBuilder;
  onWhenCollidingWithChanged(body: string): WanderBuilder;
  onWidthChanged(body: string): WanderBuilder;
  onWindowChanged(body: string): WanderBuilder;
  onXChanged(body: string): WanderBuilder;
  onXVarianceChanged(body: string): WanderBuilder;
  onYChanged(body: string): WanderBuilder;
  onYVarianceChanged(body: string): WanderBuilder;
  onZChanged(body: string): WanderBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): WanderBuilder;
  layer(setup: (b: LayerBuilder) => void): WanderBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): WanderBuilder;
}

const WANDER_META: TypeMetadata = {
  typeName: 'Wander',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'affectedParameter', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'groups', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'once', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'pace', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'whenCollidingWith', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'xVariance', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'yVariance', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAffected', paramCount: 2 },
    { handlerName: 'onAffectedParameterChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGroupsChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOnceChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaceChanged', paramCount: 1 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShapeChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWhenCollidingWithChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onXVarianceChanged', paramCount: 1 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onYVarianceChanged', paramCount: 1 },
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
    {
      methodName: 'itemParticle',
      attachedTypeName: 'ItemParticle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function Wander(): WanderBuilder {
  return createFluentBuilder('Wander', WANDER_META) as unknown as WanderBuilder;
}

export namespace Wander {
  export namespace AffectableParameters {
    export const Position = createEnumToken('Wander', 'AffectableParameters', 'Position');
    export const Velocity = createEnumToken('Wander', 'AffectableParameters', 'Velocity');
    export const Acceleration = createEnumToken('Wander', 'AffectableParameters', 'Acceleration');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Wander', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Wander', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Wander', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Wander', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Wander', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Wander', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Wander', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Wander', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Wander', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Wander', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Wander', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Wander', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Wander', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Wander', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Wander', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Wander', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Wander', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Wander', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Wander', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Wander', 'TransformOrigin', 'BottomRight');
  }
}
