// AUTO-GENERATED — DO NOT EDIT
// Type: Affector
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ParticleSystemBuilder } from './ParticleSystem.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface AffectorBuilder {
  id(id: string): AffectorBuilder;
  child(obj: QmlObjectBuilder): AffectorBuilder;

  acceleration(value: QmlValue): AffectorBuilder;
  accelerationBind(expr: string): AffectorBuilder;
  activeFocusOnTab(value: boolean): AffectorBuilder;
  activeFocusOnTabBind(expr: string): AffectorBuilder;
  antialiasing(value: boolean): AffectorBuilder;
  antialiasingBind(expr: string): AffectorBuilder;
  baselineOffset(value: number): AffectorBuilder;
  baselineOffsetBind(expr: string): AffectorBuilder;
  clip(value: boolean): AffectorBuilder;
  clipBind(expr: string): AffectorBuilder;
  containmentMask(value: QtObjectBuilder): AffectorBuilder;
  containmentMaskBind(expr: string): AffectorBuilder;
  enabled(value: boolean): AffectorBuilder;
  enabledBind(expr: string): AffectorBuilder;
  focus(value: boolean): AffectorBuilder;
  focusBind(expr: string): AffectorBuilder;
  focusPolicy(value: QmlEnumToken): AffectorBuilder;
  focusPolicyBind(expr: string): AffectorBuilder;
  groups(value: string[]): AffectorBuilder;
  groupsBind(expr: string): AffectorBuilder;
  height(value: number): AffectorBuilder;
  heightBind(expr: string): AffectorBuilder;
  implicitHeight(value: number): AffectorBuilder;
  implicitHeightBind(expr: string): AffectorBuilder;
  implicitWidth(value: number): AffectorBuilder;
  implicitWidthBind(expr: string): AffectorBuilder;
  objectName(value: string): AffectorBuilder;
  objectNameBind(expr: string): AffectorBuilder;
  once(value: boolean): AffectorBuilder;
  onceBind(expr: string): AffectorBuilder;
  opacity(value: number): AffectorBuilder;
  opacityBind(expr: string): AffectorBuilder;
  palette(value: PaletteBuilder): AffectorBuilder;
  paletteBind(expr: string): AffectorBuilder;
  parent(value: ItemBuilder): AffectorBuilder;
  parentBind(expr: string): AffectorBuilder;
  position(value: QmlValue): AffectorBuilder;
  positionBind(expr: string): AffectorBuilder;
  relative(value: boolean): AffectorBuilder;
  relativeBind(expr: string): AffectorBuilder;
  rotation(value: number): AffectorBuilder;
  rotationBind(expr: string): AffectorBuilder;
  scale(value: number): AffectorBuilder;
  scaleBind(expr: string): AffectorBuilder;
  shape(value: QmlValue): AffectorBuilder;
  shapeBind(expr: string): AffectorBuilder;
  smooth(value: boolean): AffectorBuilder;
  smoothBind(expr: string): AffectorBuilder;
  state(value: string): AffectorBuilder;
  stateBind(expr: string): AffectorBuilder;
  system(value: ParticleSystemBuilder): AffectorBuilder;
  systemBind(expr: string): AffectorBuilder;
  transformOrigin(value: QmlEnumToken): AffectorBuilder;
  transformOriginBind(expr: string): AffectorBuilder;
  velocity(value: QmlValue): AffectorBuilder;
  velocityBind(expr: string): AffectorBuilder;
  visible(value: boolean): AffectorBuilder;
  visibleBind(expr: string): AffectorBuilder;
  whenCollidingWith(value: string[]): AffectorBuilder;
  whenCollidingWithBind(expr: string): AffectorBuilder;
  width(value: number): AffectorBuilder;
  widthBind(expr: string): AffectorBuilder;
  x(value: number): AffectorBuilder;
  xBind(expr: string): AffectorBuilder;
  y(value: number): AffectorBuilder;
  yBind(expr: string): AffectorBuilder;
  z(value: number): AffectorBuilder;
  zBind(expr: string): AffectorBuilder;
  onAccelerationChanged(body: string): AffectorBuilder;
  onActiveFocusChanged(body: string): AffectorBuilder;
  onActiveFocusOnTabChanged(body: string): AffectorBuilder;
  onAffectParticles(body: string): AffectorBuilder;
  onAffected(body: string): AffectorBuilder;
  onAntialiasingChanged(body: string): AffectorBuilder;
  onBaselineOffsetChanged(body: string): AffectorBuilder;
  onChildrenChanged(body: string): AffectorBuilder;
  onChildrenRectChanged(body: string): AffectorBuilder;
  onClipChanged(body: string): AffectorBuilder;
  onContainmentMaskChanged(body: string): AffectorBuilder;
  onEnabledChanged(body: string): AffectorBuilder;
  onFocusChanged(body: string): AffectorBuilder;
  onFocusPolicyChanged(body: string): AffectorBuilder;
  onGroupsChanged(body: string): AffectorBuilder;
  onHeightChanged(body: string): AffectorBuilder;
  onImplicitHeightChanged(body: string): AffectorBuilder;
  onImplicitWidthChanged(body: string): AffectorBuilder;
  onObjectNameChanged(body: string): AffectorBuilder;
  onOnceChanged(body: string): AffectorBuilder;
  onOpacityChanged(body: string): AffectorBuilder;
  onPaletteChanged(body: string): AffectorBuilder;
  onPaletteCreated(body: string): AffectorBuilder;
  onParentChanged(body: string): AffectorBuilder;
  onPositionChanged(body: string): AffectorBuilder;
  onRelativeChanged(body: string): AffectorBuilder;
  onRotationChanged(body: string): AffectorBuilder;
  onScaleChanged(body: string): AffectorBuilder;
  onShapeChanged(body: string): AffectorBuilder;
  onSmoothChanged(body: string): AffectorBuilder;
  onStateChanged(body: string): AffectorBuilder;
  onSystemChanged(body: string): AffectorBuilder;
  onTransformOriginChanged(body: string): AffectorBuilder;
  onVelocityChanged(body: string): AffectorBuilder;
  onVisibleChanged(body: string): AffectorBuilder;
  onVisibleChildrenChanged(body: string): AffectorBuilder;
  onWhenCollidingWithChanged(body: string): AffectorBuilder;
  onWidthChanged(body: string): AffectorBuilder;
  onWindowChanged(body: string): AffectorBuilder;
  onXChanged(body: string): AffectorBuilder;
  onYChanged(body: string): AffectorBuilder;
  onZChanged(body: string): AffectorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AffectorBuilder;
  layer(setup: (b: LayerBuilder) => void): AffectorBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): AffectorBuilder;
}

const AFFECTOR_META: TypeMetadata = {
  typeName: 'Affector',
  properties: [
    { name: 'acceleration', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
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
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'relative', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'velocity', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'whenCollidingWith', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccelerationChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAffectParticles', paramCount: 2 },
    { handlerName: 'onAffected', paramCount: 2 },
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
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onRelativeChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShapeChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVelocityChanged', paramCount: 1 },
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function Affector(): AffectorBuilder {
  return createFluentBuilder('Affector', AFFECTOR_META) as unknown as AffectorBuilder;
}

export namespace Affector {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Affector',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Affector',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Affector', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Affector', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Affector', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Affector', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Affector',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Affector', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Affector',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Affector', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Affector', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Affector', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Affector', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Affector', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Affector', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Affector', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Affector', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Affector', 'TransformOrigin', 'BottomRight');
  }
}
