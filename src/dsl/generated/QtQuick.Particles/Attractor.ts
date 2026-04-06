// AUTO-GENERATED — DO NOT EDIT
// Type: Attractor
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
export interface AttractorBuilder {
  id(id: string): AttractorBuilder;
  child(obj: QmlObjectBuilder): AttractorBuilder;
  children(...objs: QmlObjectBuilder[]): AttractorBuilder;

  activeFocusOnTab(value: boolean): AttractorBuilder;
  activeFocusOnTabBind(expr: string): AttractorBuilder;
  affectedParameter(value: QmlEnumToken): AttractorBuilder;
  affectedParameterBind(expr: string): AttractorBuilder;
  antialiasing(value: boolean): AttractorBuilder;
  antialiasingBind(expr: string): AttractorBuilder;
  baselineOffset(value: number): AttractorBuilder;
  baselineOffsetBind(expr: string): AttractorBuilder;
  clip(value: boolean): AttractorBuilder;
  clipBind(expr: string): AttractorBuilder;
  containmentMask(value: QtObjectBuilder): AttractorBuilder;
  containmentMaskBind(expr: string): AttractorBuilder;
  enabled(value: boolean): AttractorBuilder;
  enabledBind(expr: string): AttractorBuilder;
  focus(value: boolean): AttractorBuilder;
  focusBind(expr: string): AttractorBuilder;
  focusPolicy(value: QmlEnumToken): AttractorBuilder;
  focusPolicyBind(expr: string): AttractorBuilder;
  groups(value: string[]): AttractorBuilder;
  groupsBind(expr: string): AttractorBuilder;
  height(value: number): AttractorBuilder;
  heightBind(expr: string): AttractorBuilder;
  implicitHeight(value: number): AttractorBuilder;
  implicitHeightBind(expr: string): AttractorBuilder;
  implicitWidth(value: number): AttractorBuilder;
  implicitWidthBind(expr: string): AttractorBuilder;
  objectName(value: string): AttractorBuilder;
  objectNameBind(expr: string): AttractorBuilder;
  once(value: boolean): AttractorBuilder;
  onceBind(expr: string): AttractorBuilder;
  opacity(value: number): AttractorBuilder;
  opacityBind(expr: string): AttractorBuilder;
  palette(value: PaletteBuilder): AttractorBuilder;
  paletteBind(expr: string): AttractorBuilder;
  parent(value: ItemBuilder): AttractorBuilder;
  parentBind(expr: string): AttractorBuilder;
  pointX(value: number): AttractorBuilder;
  pointXBind(expr: string): AttractorBuilder;
  pointY(value: number): AttractorBuilder;
  pointYBind(expr: string): AttractorBuilder;
  proportionalToDistance(value: QmlEnumToken): AttractorBuilder;
  proportionalToDistanceBind(expr: string): AttractorBuilder;
  rotation(value: number): AttractorBuilder;
  rotationBind(expr: string): AttractorBuilder;
  scale(value: number): AttractorBuilder;
  scaleBind(expr: string): AttractorBuilder;
  shape(value: QmlValue): AttractorBuilder;
  shapeBind(expr: string): AttractorBuilder;
  smooth(value: boolean): AttractorBuilder;
  smoothBind(expr: string): AttractorBuilder;
  state(value: string): AttractorBuilder;
  stateBind(expr: string): AttractorBuilder;
  strength(value: number): AttractorBuilder;
  strengthBind(expr: string): AttractorBuilder;
  system(value: ParticleSystemBuilder): AttractorBuilder;
  systemBind(expr: string): AttractorBuilder;
  transformOrigin(value: QmlEnumToken): AttractorBuilder;
  transformOriginBind(expr: string): AttractorBuilder;
  visible(value: boolean): AttractorBuilder;
  visibleBind(expr: string): AttractorBuilder;
  whenCollidingWith(value: string[]): AttractorBuilder;
  whenCollidingWithBind(expr: string): AttractorBuilder;
  width(value: number): AttractorBuilder;
  widthBind(expr: string): AttractorBuilder;
  x(value: number): AttractorBuilder;
  xBind(expr: string): AttractorBuilder;
  y(value: number): AttractorBuilder;
  yBind(expr: string): AttractorBuilder;
  z(value: number): AttractorBuilder;
  zBind(expr: string): AttractorBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onAffected(handler: DslSignalHandlerValue): AttractorBuilder;
  onAffectedParameterChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onClipChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onGroupsChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onOnceChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): AttractorBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onPointXChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onPointYChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onProportionalToDistanceChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onShapeChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onStateChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onStrengthChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onWhenCollidingWithChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onXChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onYChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  onZChanged(handler: DslSignalHandlerValue): AttractorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AttractorBuilder;
  layer(setup: (b: LayerBuilder) => void): AttractorBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): AttractorBuilder;
}

const ATTRACTOR_META: TypeMetadata = {
  typeName: 'Attractor',
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
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pointX', hasValue: true, hasBinding: true },
    { name: 'pointY', hasValue: true, hasBinding: true },
    { name: 'proportionalToDistance', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shape', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'strength', hasValue: true, hasBinding: true },
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
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPointXChanged', paramCount: 1 },
    { handlerName: 'onPointYChanged', paramCount: 1 },
    { handlerName: 'onProportionalToDistanceChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShapeChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStrengthChanged', paramCount: 1 },
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

export function Attractor(): AttractorBuilder {
  return createFluentBuilder('Attractor', ATTRACTOR_META) as unknown as AttractorBuilder;
}

export namespace Attractor {
  export namespace AffectableParameters {
    export const Position = createEnumToken('Attractor', 'AffectableParameters', 'Position');
    export const Velocity = createEnumToken('Attractor', 'AffectableParameters', 'Velocity');
    export const Acceleration = createEnumToken(
      'Attractor',
      'AffectableParameters',
      'Acceleration',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Attractor',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Attractor',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Attractor', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Attractor', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Attractor', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Attractor', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'Attractor',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Attractor', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Attractor',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Proportion {
    export const Constant = createEnumToken('Attractor', 'Proportion', 'Constant');
    export const Linear = createEnumToken('Attractor', 'Proportion', 'Linear');
    export const Quadratic = createEnumToken('Attractor', 'Proportion', 'Quadratic');
    export const InverseLinear = createEnumToken('Attractor', 'Proportion', 'InverseLinear');
    export const InverseQuadratic = createEnumToken('Attractor', 'Proportion', 'InverseQuadratic');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Attractor', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Attractor', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Attractor', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Attractor', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Attractor', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Attractor', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Attractor', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Attractor', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Attractor', 'TransformOrigin', 'BottomRight');
  }
}
