// AUTO-GENERATED — DO NOT EDIT
// Type: GroupGoal
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
export interface GroupGoalBuilder {
  id(id: string): GroupGoalBuilder;
  child(obj: QmlObjectBuilder): GroupGoalBuilder;
  children(...objs: QmlObjectBuilder[]): GroupGoalBuilder;

  activeFocusOnTab(value: boolean): GroupGoalBuilder;
  activeFocusOnTabBind(expr: string): GroupGoalBuilder;
  antialiasing(value: boolean): GroupGoalBuilder;
  antialiasingBind(expr: string): GroupGoalBuilder;
  baselineOffset(value: number): GroupGoalBuilder;
  baselineOffsetBind(expr: string): GroupGoalBuilder;
  clip(value: boolean): GroupGoalBuilder;
  clipBind(expr: string): GroupGoalBuilder;
  containmentMask(value: QtObjectBuilder): GroupGoalBuilder;
  containmentMaskBind(expr: string): GroupGoalBuilder;
  enabled(value: boolean): GroupGoalBuilder;
  enabledBind(expr: string): GroupGoalBuilder;
  focus(value: boolean): GroupGoalBuilder;
  focusBind(expr: string): GroupGoalBuilder;
  focusPolicy(value: QmlEnumToken): GroupGoalBuilder;
  focusPolicyBind(expr: string): GroupGoalBuilder;
  goalState(value: string): GroupGoalBuilder;
  goalStateBind(expr: string): GroupGoalBuilder;
  groups(value: string[]): GroupGoalBuilder;
  groupsBind(expr: string): GroupGoalBuilder;
  height(value: number): GroupGoalBuilder;
  heightBind(expr: string): GroupGoalBuilder;
  implicitHeight(value: number): GroupGoalBuilder;
  implicitHeightBind(expr: string): GroupGoalBuilder;
  implicitWidth(value: number): GroupGoalBuilder;
  implicitWidthBind(expr: string): GroupGoalBuilder;
  jump(value: boolean): GroupGoalBuilder;
  jumpBind(expr: string): GroupGoalBuilder;
  objectName(value: string): GroupGoalBuilder;
  objectNameBind(expr: string): GroupGoalBuilder;
  once(value: boolean): GroupGoalBuilder;
  onceBind(expr: string): GroupGoalBuilder;
  opacity(value: number): GroupGoalBuilder;
  opacityBind(expr: string): GroupGoalBuilder;
  palette(value: PaletteBuilder): GroupGoalBuilder;
  paletteBind(expr: string): GroupGoalBuilder;
  parent(value: ItemBuilder): GroupGoalBuilder;
  parentBind(expr: string): GroupGoalBuilder;
  rotation(value: number): GroupGoalBuilder;
  rotationBind(expr: string): GroupGoalBuilder;
  scale(value: number): GroupGoalBuilder;
  scaleBind(expr: string): GroupGoalBuilder;
  shape(value: QmlValue): GroupGoalBuilder;
  shapeBind(expr: string): GroupGoalBuilder;
  smooth(value: boolean): GroupGoalBuilder;
  smoothBind(expr: string): GroupGoalBuilder;
  state(value: string): GroupGoalBuilder;
  stateBind(expr: string): GroupGoalBuilder;
  system(value: ParticleSystemBuilder): GroupGoalBuilder;
  systemBind(expr: string): GroupGoalBuilder;
  transformOrigin(value: QmlEnumToken): GroupGoalBuilder;
  transformOriginBind(expr: string): GroupGoalBuilder;
  visible(value: boolean): GroupGoalBuilder;
  visibleBind(expr: string): GroupGoalBuilder;
  whenCollidingWith(value: string[]): GroupGoalBuilder;
  whenCollidingWithBind(expr: string): GroupGoalBuilder;
  width(value: number): GroupGoalBuilder;
  widthBind(expr: string): GroupGoalBuilder;
  x(value: number): GroupGoalBuilder;
  xBind(expr: string): GroupGoalBuilder;
  y(value: number): GroupGoalBuilder;
  yBind(expr: string): GroupGoalBuilder;
  z(value: number): GroupGoalBuilder;
  zBind(expr: string): GroupGoalBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onAffected(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onClipChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onGoalStateChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onGroupsChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onJumpChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onOnceChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onParentChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onShapeChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onStateChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onWhenCollidingWithChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onXChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onYChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  onZChanged(handler: DslSignalHandlerValue): GroupGoalBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GroupGoalBuilder;
  layer(setup: (b: LayerBuilder) => void): GroupGoalBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): GroupGoalBuilder;
}

const GROUPGOAL_META: TypeMetadata = {
  typeName: 'GroupGoal',
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

export function GroupGoal(): GroupGoalBuilder {
  return createFluentBuilder('GroupGoal', GROUPGOAL_META) as unknown as GroupGoalBuilder;
}

export namespace GroupGoal {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'GroupGoal',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'GroupGoal',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('GroupGoal', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GroupGoal', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GroupGoal', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GroupGoal', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'GroupGoal',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('GroupGoal', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'GroupGoal',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('GroupGoal', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('GroupGoal', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('GroupGoal', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('GroupGoal', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('GroupGoal', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('GroupGoal', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('GroupGoal', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('GroupGoal', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('GroupGoal', 'TransformOrigin', 'BottomRight');
  }
}
