// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleSystem
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface ParticleSystemBuilder {
  id(id: string): ParticleSystemBuilder;
  child(obj: QmlObjectBuilder): ParticleSystemBuilder;
  children(...objs: QmlObjectBuilder[]): ParticleSystemBuilder;

  activeFocusOnTab(value: boolean): ParticleSystemBuilder;
  activeFocusOnTabBind(expr: string): ParticleSystemBuilder;
  antialiasing(value: boolean): ParticleSystemBuilder;
  antialiasingBind(expr: string): ParticleSystemBuilder;
  baselineOffset(value: number): ParticleSystemBuilder;
  baselineOffsetBind(expr: string): ParticleSystemBuilder;
  clip(value: boolean): ParticleSystemBuilder;
  clipBind(expr: string): ParticleSystemBuilder;
  containmentMask(value: QtObjectBuilder): ParticleSystemBuilder;
  containmentMaskBind(expr: string): ParticleSystemBuilder;
  enabled(value: boolean): ParticleSystemBuilder;
  enabledBind(expr: string): ParticleSystemBuilder;
  focus(value: boolean): ParticleSystemBuilder;
  focusBind(expr: string): ParticleSystemBuilder;
  focusPolicy(value: QmlEnumToken): ParticleSystemBuilder;
  focusPolicyBind(expr: string): ParticleSystemBuilder;
  height(value: number): ParticleSystemBuilder;
  heightBind(expr: string): ParticleSystemBuilder;
  implicitHeight(value: number): ParticleSystemBuilder;
  implicitHeightBind(expr: string): ParticleSystemBuilder;
  implicitWidth(value: number): ParticleSystemBuilder;
  implicitWidthBind(expr: string): ParticleSystemBuilder;
  objectName(value: string): ParticleSystemBuilder;
  objectNameBind(expr: string): ParticleSystemBuilder;
  opacity(value: number): ParticleSystemBuilder;
  opacityBind(expr: string): ParticleSystemBuilder;
  palette(value: PaletteBuilder): ParticleSystemBuilder;
  paletteBind(expr: string): ParticleSystemBuilder;
  parent(value: ItemBuilder): ParticleSystemBuilder;
  parentBind(expr: string): ParticleSystemBuilder;
  paused(value: boolean): ParticleSystemBuilder;
  pausedBind(expr: string): ParticleSystemBuilder;
  rotation(value: number): ParticleSystemBuilder;
  rotationBind(expr: string): ParticleSystemBuilder;
  running(value: boolean): ParticleSystemBuilder;
  runningBind(expr: string): ParticleSystemBuilder;
  scale(value: number): ParticleSystemBuilder;
  scaleBind(expr: string): ParticleSystemBuilder;
  smooth(value: boolean): ParticleSystemBuilder;
  smoothBind(expr: string): ParticleSystemBuilder;
  state(value: string): ParticleSystemBuilder;
  stateBind(expr: string): ParticleSystemBuilder;
  transformOrigin(value: QmlEnumToken): ParticleSystemBuilder;
  transformOriginBind(expr: string): ParticleSystemBuilder;
  visible(value: boolean): ParticleSystemBuilder;
  visibleBind(expr: string): ParticleSystemBuilder;
  width(value: number): ParticleSystemBuilder;
  widthBind(expr: string): ParticleSystemBuilder;
  x(value: number): ParticleSystemBuilder;
  xBind(expr: string): ParticleSystemBuilder;
  y(value: number): ParticleSystemBuilder;
  yBind(expr: string): ParticleSystemBuilder;
  z(value: number): ParticleSystemBuilder;
  zBind(expr: string): ParticleSystemBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onClipChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onEmptyChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onPausedChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onRunningChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onSystemInitialized(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onXChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onYChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  onZChanged(handler: DslSignalHandlerValue): ParticleSystemBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ParticleSystemBuilder;
  layer(setup: (b: LayerBuilder) => void): ParticleSystemBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): ParticleSystemBuilder;
}

const PARTICLESYSTEM_META: TypeMetadata = {
  typeName: 'ParticleSystem',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'paused', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
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
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEmptyChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPausedChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSystemInitialized', paramCount: 0 },
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
  defaultProperty: 'data',
};

export function ParticleSystem(): ParticleSystemBuilder {
  return createFluentBuilder(
    'ParticleSystem',
    PARTICLESYSTEM_META,
  ) as unknown as ParticleSystemBuilder;
}

export namespace ParticleSystem {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ParticleSystem',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ParticleSystem',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ParticleSystem', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ParticleSystem', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ParticleSystem', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ParticleSystem', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ParticleSystem',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ParticleSystem',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ParticleSystem', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ParticleSystem', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ParticleSystem', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ParticleSystem', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ParticleSystem', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ParticleSystem', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ParticleSystem', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ParticleSystem', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ParticleSystem', 'TransformOrigin', 'BottomRight');
  }
}
