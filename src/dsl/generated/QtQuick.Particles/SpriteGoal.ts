// AUTO-GENERATED — DO NOT EDIT
// Type: SpriteGoal
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
export interface SpriteGoalBuilder {
  id(id: string): SpriteGoalBuilder;
  child(obj: QmlObjectBuilder): SpriteGoalBuilder;

  activeFocusOnTab(value: boolean): SpriteGoalBuilder;
  activeFocusOnTabBind(expr: string): SpriteGoalBuilder;
  antialiasing(value: boolean): SpriteGoalBuilder;
  antialiasingBind(expr: string): SpriteGoalBuilder;
  baselineOffset(value: number): SpriteGoalBuilder;
  baselineOffsetBind(expr: string): SpriteGoalBuilder;
  clip(value: boolean): SpriteGoalBuilder;
  clipBind(expr: string): SpriteGoalBuilder;
  containmentMask(value: QtObjectBuilder): SpriteGoalBuilder;
  containmentMaskBind(expr: string): SpriteGoalBuilder;
  enabled(value: boolean): SpriteGoalBuilder;
  enabledBind(expr: string): SpriteGoalBuilder;
  focus(value: boolean): SpriteGoalBuilder;
  focusBind(expr: string): SpriteGoalBuilder;
  focusPolicy(value: QmlEnumToken): SpriteGoalBuilder;
  focusPolicyBind(expr: string): SpriteGoalBuilder;
  goalState(value: string): SpriteGoalBuilder;
  goalStateBind(expr: string): SpriteGoalBuilder;
  groups(value: string[]): SpriteGoalBuilder;
  groupsBind(expr: string): SpriteGoalBuilder;
  height(value: number): SpriteGoalBuilder;
  heightBind(expr: string): SpriteGoalBuilder;
  implicitHeight(value: number): SpriteGoalBuilder;
  implicitHeightBind(expr: string): SpriteGoalBuilder;
  implicitWidth(value: number): SpriteGoalBuilder;
  implicitWidthBind(expr: string): SpriteGoalBuilder;
  jump(value: boolean): SpriteGoalBuilder;
  jumpBind(expr: string): SpriteGoalBuilder;
  objectName(value: string): SpriteGoalBuilder;
  objectNameBind(expr: string): SpriteGoalBuilder;
  once(value: boolean): SpriteGoalBuilder;
  onceBind(expr: string): SpriteGoalBuilder;
  opacity(value: number): SpriteGoalBuilder;
  opacityBind(expr: string): SpriteGoalBuilder;
  palette(value: PaletteBuilder): SpriteGoalBuilder;
  paletteBind(expr: string): SpriteGoalBuilder;
  parent(value: ItemBuilder): SpriteGoalBuilder;
  parentBind(expr: string): SpriteGoalBuilder;
  rotation(value: number): SpriteGoalBuilder;
  rotationBind(expr: string): SpriteGoalBuilder;
  scale(value: number): SpriteGoalBuilder;
  scaleBind(expr: string): SpriteGoalBuilder;
  shape(value: QmlValue): SpriteGoalBuilder;
  shapeBind(expr: string): SpriteGoalBuilder;
  smooth(value: boolean): SpriteGoalBuilder;
  smoothBind(expr: string): SpriteGoalBuilder;
  state(value: string): SpriteGoalBuilder;
  stateBind(expr: string): SpriteGoalBuilder;
  system(value: ParticleSystemBuilder): SpriteGoalBuilder;
  systemBind(expr: string): SpriteGoalBuilder;
  systemStates(value: boolean): SpriteGoalBuilder;
  systemStatesBind(expr: string): SpriteGoalBuilder;
  transformOrigin(value: QmlEnumToken): SpriteGoalBuilder;
  transformOriginBind(expr: string): SpriteGoalBuilder;
  visible(value: boolean): SpriteGoalBuilder;
  visibleBind(expr: string): SpriteGoalBuilder;
  whenCollidingWith(value: string[]): SpriteGoalBuilder;
  whenCollidingWithBind(expr: string): SpriteGoalBuilder;
  width(value: number): SpriteGoalBuilder;
  widthBind(expr: string): SpriteGoalBuilder;
  x(value: number): SpriteGoalBuilder;
  xBind(expr: string): SpriteGoalBuilder;
  y(value: number): SpriteGoalBuilder;
  yBind(expr: string): SpriteGoalBuilder;
  z(value: number): SpriteGoalBuilder;
  zBind(expr: string): SpriteGoalBuilder;
  onActiveFocusChanged(body: string): SpriteGoalBuilder;
  onActiveFocusOnTabChanged(body: string): SpriteGoalBuilder;
  onAffected(body: string): SpriteGoalBuilder;
  onAntialiasingChanged(body: string): SpriteGoalBuilder;
  onBaselineOffsetChanged(body: string): SpriteGoalBuilder;
  onChildrenChanged(body: string): SpriteGoalBuilder;
  onChildrenRectChanged(body: string): SpriteGoalBuilder;
  onClipChanged(body: string): SpriteGoalBuilder;
  onContainmentMaskChanged(body: string): SpriteGoalBuilder;
  onEnabledChanged(body: string): SpriteGoalBuilder;
  onFocusChanged(body: string): SpriteGoalBuilder;
  onFocusPolicyChanged(body: string): SpriteGoalBuilder;
  onGoalStateChanged(body: string): SpriteGoalBuilder;
  onGroupsChanged(body: string): SpriteGoalBuilder;
  onHeightChanged(body: string): SpriteGoalBuilder;
  onImplicitHeightChanged(body: string): SpriteGoalBuilder;
  onImplicitWidthChanged(body: string): SpriteGoalBuilder;
  onJumpChanged(body: string): SpriteGoalBuilder;
  onObjectNameChanged(body: string): SpriteGoalBuilder;
  onOnceChanged(body: string): SpriteGoalBuilder;
  onOpacityChanged(body: string): SpriteGoalBuilder;
  onPaletteChanged(body: string): SpriteGoalBuilder;
  onPaletteCreated(body: string): SpriteGoalBuilder;
  onParentChanged(body: string): SpriteGoalBuilder;
  onRotationChanged(body: string): SpriteGoalBuilder;
  onScaleChanged(body: string): SpriteGoalBuilder;
  onShapeChanged(body: string): SpriteGoalBuilder;
  onSmoothChanged(body: string): SpriteGoalBuilder;
  onStateChanged(body: string): SpriteGoalBuilder;
  onSystemChanged(body: string): SpriteGoalBuilder;
  onSystemStatesChanged(body: string): SpriteGoalBuilder;
  onTransformOriginChanged(body: string): SpriteGoalBuilder;
  onVisibleChanged(body: string): SpriteGoalBuilder;
  onVisibleChildrenChanged(body: string): SpriteGoalBuilder;
  onWhenCollidingWithChanged(body: string): SpriteGoalBuilder;
  onWidthChanged(body: string): SpriteGoalBuilder;
  onWindowChanged(body: string): SpriteGoalBuilder;
  onXChanged(body: string): SpriteGoalBuilder;
  onYChanged(body: string): SpriteGoalBuilder;
  onZChanged(body: string): SpriteGoalBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SpriteGoalBuilder;
  layer(setup: (b: LayerBuilder) => void): SpriteGoalBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): SpriteGoalBuilder;
}

const SPRITEGOAL_META: TypeMetadata = {
  typeName: 'SpriteGoal',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'goalState', hasValue: true, hasBinding: true },
    { name: 'groups', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'jump', hasValue: true, hasBinding: true },
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
    { name: 'systemStates', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGoalStateChanged', paramCount: 1 },
    { handlerName: 'onGroupsChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onJumpChanged', paramCount: 1 },
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
    { handlerName: 'onSystemStatesChanged', paramCount: 1 },
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

export function SpriteGoal(): SpriteGoalBuilder {
  return createFluentBuilder('SpriteGoal', SPRITEGOAL_META) as unknown as SpriteGoalBuilder;
}

export namespace SpriteGoal {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('SpriteGoal', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('SpriteGoal', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('SpriteGoal', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SpriteGoal', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SpriteGoal', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SpriteGoal', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('SpriteGoal', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('SpriteGoal', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('SpriteGoal', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('SpriteGoal', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('SpriteGoal', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SpriteGoal', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SpriteGoal', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SpriteGoal', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SpriteGoal', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SpriteGoal', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SpriteGoal', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SpriteGoal', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SpriteGoal', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SpriteGoal', 'TransformOrigin', 'BottomRight');
  }
}
