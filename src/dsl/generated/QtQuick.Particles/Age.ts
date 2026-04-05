// AUTO-GENERATED — DO NOT EDIT
// Type: Age
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
export interface AgeBuilder {
  id(id: string): AgeBuilder;
  child(obj: QmlObjectBuilder): AgeBuilder;

  activeFocusOnTab(value: boolean): AgeBuilder;
  activeFocusOnTabBind(expr: string): AgeBuilder;
  advancePosition(value: boolean): AgeBuilder;
  advancePositionBind(expr: string): AgeBuilder;
  antialiasing(value: boolean): AgeBuilder;
  antialiasingBind(expr: string): AgeBuilder;
  baselineOffset(value: number): AgeBuilder;
  baselineOffsetBind(expr: string): AgeBuilder;
  clip(value: boolean): AgeBuilder;
  clipBind(expr: string): AgeBuilder;
  containmentMask(value: QtObjectBuilder): AgeBuilder;
  containmentMaskBind(expr: string): AgeBuilder;
  enabled(value: boolean): AgeBuilder;
  enabledBind(expr: string): AgeBuilder;
  focus(value: boolean): AgeBuilder;
  focusBind(expr: string): AgeBuilder;
  focusPolicy(value: QmlEnumToken): AgeBuilder;
  focusPolicyBind(expr: string): AgeBuilder;
  groups(value: string[]): AgeBuilder;
  groupsBind(expr: string): AgeBuilder;
  height(value: number): AgeBuilder;
  heightBind(expr: string): AgeBuilder;
  implicitHeight(value: number): AgeBuilder;
  implicitHeightBind(expr: string): AgeBuilder;
  implicitWidth(value: number): AgeBuilder;
  implicitWidthBind(expr: string): AgeBuilder;
  lifeLeft(value: number): AgeBuilder;
  lifeLeftBind(expr: string): AgeBuilder;
  objectName(value: string): AgeBuilder;
  objectNameBind(expr: string): AgeBuilder;
  once(value: boolean): AgeBuilder;
  onceBind(expr: string): AgeBuilder;
  opacity(value: number): AgeBuilder;
  opacityBind(expr: string): AgeBuilder;
  palette(value: PaletteBuilder): AgeBuilder;
  paletteBind(expr: string): AgeBuilder;
  parent(value: ItemBuilder): AgeBuilder;
  parentBind(expr: string): AgeBuilder;
  rotation(value: number): AgeBuilder;
  rotationBind(expr: string): AgeBuilder;
  scale(value: number): AgeBuilder;
  scaleBind(expr: string): AgeBuilder;
  shape(value: QmlValue): AgeBuilder;
  shapeBind(expr: string): AgeBuilder;
  smooth(value: boolean): AgeBuilder;
  smoothBind(expr: string): AgeBuilder;
  state(value: string): AgeBuilder;
  stateBind(expr: string): AgeBuilder;
  system(value: ParticleSystemBuilder): AgeBuilder;
  systemBind(expr: string): AgeBuilder;
  transformOrigin(value: QmlEnumToken): AgeBuilder;
  transformOriginBind(expr: string): AgeBuilder;
  visible(value: boolean): AgeBuilder;
  visibleBind(expr: string): AgeBuilder;
  whenCollidingWith(value: string[]): AgeBuilder;
  whenCollidingWithBind(expr: string): AgeBuilder;
  width(value: number): AgeBuilder;
  widthBind(expr: string): AgeBuilder;
  x(value: number): AgeBuilder;
  xBind(expr: string): AgeBuilder;
  y(value: number): AgeBuilder;
  yBind(expr: string): AgeBuilder;
  z(value: number): AgeBuilder;
  zBind(expr: string): AgeBuilder;
  onActiveFocusChanged(body: string): AgeBuilder;
  onActiveFocusOnTabChanged(body: string): AgeBuilder;
  onAdvancePositionChanged(body: string): AgeBuilder;
  onAffected(body: string): AgeBuilder;
  onAntialiasingChanged(body: string): AgeBuilder;
  onBaselineOffsetChanged(body: string): AgeBuilder;
  onChildrenChanged(body: string): AgeBuilder;
  onChildrenRectChanged(body: string): AgeBuilder;
  onClipChanged(body: string): AgeBuilder;
  onContainmentMaskChanged(body: string): AgeBuilder;
  onEnabledChanged(body: string): AgeBuilder;
  onFocusChanged(body: string): AgeBuilder;
  onFocusPolicyChanged(body: string): AgeBuilder;
  onGroupsChanged(body: string): AgeBuilder;
  onHeightChanged(body: string): AgeBuilder;
  onImplicitHeightChanged(body: string): AgeBuilder;
  onImplicitWidthChanged(body: string): AgeBuilder;
  onLifeLeftChanged(body: string): AgeBuilder;
  onObjectNameChanged(body: string): AgeBuilder;
  onOnceChanged(body: string): AgeBuilder;
  onOpacityChanged(body: string): AgeBuilder;
  onPaletteChanged(body: string): AgeBuilder;
  onPaletteCreated(body: string): AgeBuilder;
  onParentChanged(body: string): AgeBuilder;
  onRotationChanged(body: string): AgeBuilder;
  onScaleChanged(body: string): AgeBuilder;
  onShapeChanged(body: string): AgeBuilder;
  onSmoothChanged(body: string): AgeBuilder;
  onStateChanged(body: string): AgeBuilder;
  onSystemChanged(body: string): AgeBuilder;
  onTransformOriginChanged(body: string): AgeBuilder;
  onVisibleChanged(body: string): AgeBuilder;
  onVisibleChildrenChanged(body: string): AgeBuilder;
  onWhenCollidingWithChanged(body: string): AgeBuilder;
  onWidthChanged(body: string): AgeBuilder;
  onWindowChanged(body: string): AgeBuilder;
  onXChanged(body: string): AgeBuilder;
  onYChanged(body: string): AgeBuilder;
  onZChanged(body: string): AgeBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AgeBuilder;
  layer(setup: (b: LayerBuilder) => void): AgeBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): AgeBuilder;
}

const AGE_META: TypeMetadata = {
  typeName: 'Age',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'advancePosition', hasValue: true, hasBinding: true },
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
    { name: 'lifeLeft', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAdvancePositionChanged', paramCount: 1 },
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
    { handlerName: 'onLifeLeftChanged', paramCount: 1 },
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

export function Age(): AgeBuilder {
  return createFluentBuilder('Age', AGE_META) as unknown as AgeBuilder;
}

export namespace Age {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Age', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Age', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('Age', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Age', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Age', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Age', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Age', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('Age', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Age', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Age', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Age', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Age', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Age', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Age', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Age', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Age', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Age', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Age', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Age', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Age', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Age', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Age', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Age', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Age', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Age', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Age', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Age', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Age', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Age', 'TransformOrigin', 'BottomRight');
  }
}
