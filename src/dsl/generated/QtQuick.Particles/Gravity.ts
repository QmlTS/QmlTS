// AUTO-GENERATED — DO NOT EDIT
// Type: Gravity
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
export interface GravityBuilder {
  id(id: string): GravityBuilder;
  child(obj: QmlObjectBuilder): GravityBuilder;
  children(...objs: QmlObjectBuilder[]): GravityBuilder;

  acceleration(value: number): GravityBuilder;
  accelerationBind(expr: string): GravityBuilder;
  activeFocusOnTab(value: boolean): GravityBuilder;
  activeFocusOnTabBind(expr: string): GravityBuilder;
  angle(value: number): GravityBuilder;
  angleBind(expr: string): GravityBuilder;
  antialiasing(value: boolean): GravityBuilder;
  antialiasingBind(expr: string): GravityBuilder;
  baselineOffset(value: number): GravityBuilder;
  baselineOffsetBind(expr: string): GravityBuilder;
  clip(value: boolean): GravityBuilder;
  clipBind(expr: string): GravityBuilder;
  containmentMask(value: QtObjectBuilder): GravityBuilder;
  containmentMaskBind(expr: string): GravityBuilder;
  enabled(value: boolean): GravityBuilder;
  enabledBind(expr: string): GravityBuilder;
  focus(value: boolean): GravityBuilder;
  focusBind(expr: string): GravityBuilder;
  focusPolicy(value: QmlEnumToken): GravityBuilder;
  focusPolicyBind(expr: string): GravityBuilder;
  groups(value: string[]): GravityBuilder;
  groupsBind(expr: string): GravityBuilder;
  height(value: number): GravityBuilder;
  heightBind(expr: string): GravityBuilder;
  implicitHeight(value: number): GravityBuilder;
  implicitHeightBind(expr: string): GravityBuilder;
  implicitWidth(value: number): GravityBuilder;
  implicitWidthBind(expr: string): GravityBuilder;
  magnitude(value: number): GravityBuilder;
  magnitudeBind(expr: string): GravityBuilder;
  objectName(value: string): GravityBuilder;
  objectNameBind(expr: string): GravityBuilder;
  once(value: boolean): GravityBuilder;
  onceBind(expr: string): GravityBuilder;
  opacity(value: number): GravityBuilder;
  opacityBind(expr: string): GravityBuilder;
  palette(value: PaletteBuilder): GravityBuilder;
  paletteBind(expr: string): GravityBuilder;
  parent(value: ItemBuilder): GravityBuilder;
  parentBind(expr: string): GravityBuilder;
  rotation(value: number): GravityBuilder;
  rotationBind(expr: string): GravityBuilder;
  scale(value: number): GravityBuilder;
  scaleBind(expr: string): GravityBuilder;
  shape(value: QmlValue): GravityBuilder;
  shapeBind(expr: string): GravityBuilder;
  smooth(value: boolean): GravityBuilder;
  smoothBind(expr: string): GravityBuilder;
  state(value: string): GravityBuilder;
  stateBind(expr: string): GravityBuilder;
  system(value: ParticleSystemBuilder): GravityBuilder;
  systemBind(expr: string): GravityBuilder;
  transformOrigin(value: QmlEnumToken): GravityBuilder;
  transformOriginBind(expr: string): GravityBuilder;
  visible(value: boolean): GravityBuilder;
  visibleBind(expr: string): GravityBuilder;
  whenCollidingWith(value: string[]): GravityBuilder;
  whenCollidingWithBind(expr: string): GravityBuilder;
  width(value: number): GravityBuilder;
  widthBind(expr: string): GravityBuilder;
  x(value: number): GravityBuilder;
  xBind(expr: string): GravityBuilder;
  y(value: number): GravityBuilder;
  yBind(expr: string): GravityBuilder;
  z(value: number): GravityBuilder;
  zBind(expr: string): GravityBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onAffected(handler: DslSignalHandlerValue): GravityBuilder;
  onAngleChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onClipChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onGroupsChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onMagnitudeChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onOnceChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): GravityBuilder;
  onParentChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onShapeChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onStateChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onWhenCollidingWithChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onXChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onYChanged(handler: DslSignalHandlerValue): GravityBuilder;
  onZChanged(handler: DslSignalHandlerValue): GravityBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GravityBuilder;
  layer(setup: (b: LayerBuilder) => void): GravityBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): GravityBuilder;
}

const GRAVITY_META: TypeMetadata = {
  typeName: 'Gravity',
  properties: [
    { name: 'acceleration', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'angle', hasValue: true, hasBinding: true },
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
    { name: 'magnitude', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAngleChanged', paramCount: 1 },
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
    { handlerName: 'onMagnitudeChanged', paramCount: 1 },
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function Gravity(): GravityBuilder {
  return createFluentBuilder('Gravity', GRAVITY_META) as unknown as GravityBuilder;
}

export namespace Gravity {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Gravity',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Gravity',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Gravity', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Gravity', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Gravity', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Gravity', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Gravity', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Gravity', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Gravity',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Gravity', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Gravity', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Gravity', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Gravity', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Gravity', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Gravity', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Gravity', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Gravity', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Gravity', 'TransformOrigin', 'BottomRight');
  }
}
