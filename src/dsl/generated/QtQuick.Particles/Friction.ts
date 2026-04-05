// AUTO-GENERATED — DO NOT EDIT
// Type: Friction
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
export interface FrictionBuilder {
  id(id: string): FrictionBuilder;
  child(obj: QmlObjectBuilder): FrictionBuilder;

  activeFocusOnTab(value: boolean): FrictionBuilder;
  activeFocusOnTabBind(expr: string): FrictionBuilder;
  antialiasing(value: boolean): FrictionBuilder;
  antialiasingBind(expr: string): FrictionBuilder;
  baselineOffset(value: number): FrictionBuilder;
  baselineOffsetBind(expr: string): FrictionBuilder;
  clip(value: boolean): FrictionBuilder;
  clipBind(expr: string): FrictionBuilder;
  containmentMask(value: QtObjectBuilder): FrictionBuilder;
  containmentMaskBind(expr: string): FrictionBuilder;
  enabled(value: boolean): FrictionBuilder;
  enabledBind(expr: string): FrictionBuilder;
  factor(value: number): FrictionBuilder;
  factorBind(expr: string): FrictionBuilder;
  focus(value: boolean): FrictionBuilder;
  focusBind(expr: string): FrictionBuilder;
  focusPolicy(value: QmlEnumToken): FrictionBuilder;
  focusPolicyBind(expr: string): FrictionBuilder;
  groups(value: string[]): FrictionBuilder;
  groupsBind(expr: string): FrictionBuilder;
  height(value: number): FrictionBuilder;
  heightBind(expr: string): FrictionBuilder;
  implicitHeight(value: number): FrictionBuilder;
  implicitHeightBind(expr: string): FrictionBuilder;
  implicitWidth(value: number): FrictionBuilder;
  implicitWidthBind(expr: string): FrictionBuilder;
  objectName(value: string): FrictionBuilder;
  objectNameBind(expr: string): FrictionBuilder;
  once(value: boolean): FrictionBuilder;
  onceBind(expr: string): FrictionBuilder;
  opacity(value: number): FrictionBuilder;
  opacityBind(expr: string): FrictionBuilder;
  palette(value: PaletteBuilder): FrictionBuilder;
  paletteBind(expr: string): FrictionBuilder;
  parent(value: ItemBuilder): FrictionBuilder;
  parentBind(expr: string): FrictionBuilder;
  rotation(value: number): FrictionBuilder;
  rotationBind(expr: string): FrictionBuilder;
  scale(value: number): FrictionBuilder;
  scaleBind(expr: string): FrictionBuilder;
  shape(value: QmlValue): FrictionBuilder;
  shapeBind(expr: string): FrictionBuilder;
  smooth(value: boolean): FrictionBuilder;
  smoothBind(expr: string): FrictionBuilder;
  state(value: string): FrictionBuilder;
  stateBind(expr: string): FrictionBuilder;
  system(value: ParticleSystemBuilder): FrictionBuilder;
  systemBind(expr: string): FrictionBuilder;
  threshold(value: number): FrictionBuilder;
  thresholdBind(expr: string): FrictionBuilder;
  transformOrigin(value: QmlEnumToken): FrictionBuilder;
  transformOriginBind(expr: string): FrictionBuilder;
  visible(value: boolean): FrictionBuilder;
  visibleBind(expr: string): FrictionBuilder;
  whenCollidingWith(value: string[]): FrictionBuilder;
  whenCollidingWithBind(expr: string): FrictionBuilder;
  width(value: number): FrictionBuilder;
  widthBind(expr: string): FrictionBuilder;
  x(value: number): FrictionBuilder;
  xBind(expr: string): FrictionBuilder;
  y(value: number): FrictionBuilder;
  yBind(expr: string): FrictionBuilder;
  z(value: number): FrictionBuilder;
  zBind(expr: string): FrictionBuilder;
  onActiveFocusChanged(body: string): FrictionBuilder;
  onActiveFocusOnTabChanged(body: string): FrictionBuilder;
  onAffected(body: string): FrictionBuilder;
  onAntialiasingChanged(body: string): FrictionBuilder;
  onBaselineOffsetChanged(body: string): FrictionBuilder;
  onChildrenChanged(body: string): FrictionBuilder;
  onChildrenRectChanged(body: string): FrictionBuilder;
  onClipChanged(body: string): FrictionBuilder;
  onContainmentMaskChanged(body: string): FrictionBuilder;
  onEnabledChanged(body: string): FrictionBuilder;
  onFactorChanged(body: string): FrictionBuilder;
  onFocusChanged(body: string): FrictionBuilder;
  onFocusPolicyChanged(body: string): FrictionBuilder;
  onGroupsChanged(body: string): FrictionBuilder;
  onHeightChanged(body: string): FrictionBuilder;
  onImplicitHeightChanged(body: string): FrictionBuilder;
  onImplicitWidthChanged(body: string): FrictionBuilder;
  onObjectNameChanged(body: string): FrictionBuilder;
  onOnceChanged(body: string): FrictionBuilder;
  onOpacityChanged(body: string): FrictionBuilder;
  onPaletteChanged(body: string): FrictionBuilder;
  onPaletteCreated(body: string): FrictionBuilder;
  onParentChanged(body: string): FrictionBuilder;
  onRotationChanged(body: string): FrictionBuilder;
  onScaleChanged(body: string): FrictionBuilder;
  onShapeChanged(body: string): FrictionBuilder;
  onSmoothChanged(body: string): FrictionBuilder;
  onStateChanged(body: string): FrictionBuilder;
  onSystemChanged(body: string): FrictionBuilder;
  onThresholdChanged(body: string): FrictionBuilder;
  onTransformOriginChanged(body: string): FrictionBuilder;
  onVisibleChanged(body: string): FrictionBuilder;
  onVisibleChildrenChanged(body: string): FrictionBuilder;
  onWhenCollidingWithChanged(body: string): FrictionBuilder;
  onWidthChanged(body: string): FrictionBuilder;
  onWindowChanged(body: string): FrictionBuilder;
  onXChanged(body: string): FrictionBuilder;
  onYChanged(body: string): FrictionBuilder;
  onZChanged(body: string): FrictionBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FrictionBuilder;
  layer(setup: (b: LayerBuilder) => void): FrictionBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): FrictionBuilder;
}

const FRICTION_META: TypeMetadata = {
  typeName: 'Friction',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'factor', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'groups', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'once', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'threshold', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'whenCollidingWith', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAffected', paramCount: 2 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFactorChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGroupsChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOnceChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShapeChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
    { handlerName: 'onThresholdChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWhenCollidingWithChanged', paramCount: 1 },
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

export function Friction(): FrictionBuilder {
  return createFluentBuilder('Friction', FRICTION_META) as unknown as FrictionBuilder;
}

export namespace Friction {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Friction', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Friction', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Friction', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Friction', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Friction', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Friction', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Friction', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Friction', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Friction', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Friction', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Friction', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Friction', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Friction', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Friction', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Friction', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Friction', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Friction', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Friction', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Friction', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Friction', 'TransformOrigin', 'BottomRight');
  }
}
