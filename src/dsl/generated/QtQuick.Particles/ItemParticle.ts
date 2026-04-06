// AUTO-GENERATED — DO NOT EDIT
// Type: ItemParticle
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
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
import type { ParticleSystemBuilder } from './ParticleSystem.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface ItemParticleBuilder {
  id(id: string): ItemParticleBuilder;
  child(obj: QmlObjectBuilder): ItemParticleBuilder;
  children(...objs: QmlObjectBuilder[]): ItemParticleBuilder;

  activeFocusOnTab(value: boolean): ItemParticleBuilder;
  activeFocusOnTabBind(expr: string): ItemParticleBuilder;
  antialiasing(value: boolean): ItemParticleBuilder;
  antialiasingBind(expr: string): ItemParticleBuilder;
  baselineOffset(value: number): ItemParticleBuilder;
  baselineOffsetBind(expr: string): ItemParticleBuilder;
  clip(value: boolean): ItemParticleBuilder;
  clipBind(expr: string): ItemParticleBuilder;
  containmentMask(value: QtObjectBuilder): ItemParticleBuilder;
  containmentMaskBind(expr: string): ItemParticleBuilder;
  delegate(value: QmlComponent): ItemParticleBuilder;
  delegateBind(expr: string): ItemParticleBuilder;
  enabled(value: boolean): ItemParticleBuilder;
  enabledBind(expr: string): ItemParticleBuilder;
  fade(value: boolean): ItemParticleBuilder;
  fadeBind(expr: string): ItemParticleBuilder;
  focus(value: boolean): ItemParticleBuilder;
  focusBind(expr: string): ItemParticleBuilder;
  focusPolicy(value: QmlEnumToken): ItemParticleBuilder;
  focusPolicyBind(expr: string): ItemParticleBuilder;
  groups(value: string[]): ItemParticleBuilder;
  groupsBind(expr: string): ItemParticleBuilder;
  height(value: number): ItemParticleBuilder;
  heightBind(expr: string): ItemParticleBuilder;
  implicitHeight(value: number): ItemParticleBuilder;
  implicitHeightBind(expr: string): ItemParticleBuilder;
  implicitWidth(value: number): ItemParticleBuilder;
  implicitWidthBind(expr: string): ItemParticleBuilder;
  objectName(value: string): ItemParticleBuilder;
  objectNameBind(expr: string): ItemParticleBuilder;
  opacity(value: number): ItemParticleBuilder;
  opacityBind(expr: string): ItemParticleBuilder;
  palette(value: PaletteBuilder): ItemParticleBuilder;
  paletteBind(expr: string): ItemParticleBuilder;
  parent(value: ItemBuilder): ItemParticleBuilder;
  parentBind(expr: string): ItemParticleBuilder;
  rotation(value: number): ItemParticleBuilder;
  rotationBind(expr: string): ItemParticleBuilder;
  scale(value: number): ItemParticleBuilder;
  scaleBind(expr: string): ItemParticleBuilder;
  smooth(value: boolean): ItemParticleBuilder;
  smoothBind(expr: string): ItemParticleBuilder;
  state(value: string): ItemParticleBuilder;
  stateBind(expr: string): ItemParticleBuilder;
  system(value: ParticleSystemBuilder): ItemParticleBuilder;
  systemBind(expr: string): ItemParticleBuilder;
  transformOrigin(value: QmlEnumToken): ItemParticleBuilder;
  transformOriginBind(expr: string): ItemParticleBuilder;
  visible(value: boolean): ItemParticleBuilder;
  visibleBind(expr: string): ItemParticleBuilder;
  width(value: number): ItemParticleBuilder;
  widthBind(expr: string): ItemParticleBuilder;
  x(value: number): ItemParticleBuilder;
  xBind(expr: string): ItemParticleBuilder;
  y(value: number): ItemParticleBuilder;
  yBind(expr: string): ItemParticleBuilder;
  z(value: number): ItemParticleBuilder;
  zBind(expr: string): ItemParticleBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onClipChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onCountChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onFadeChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onGroupsChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onXChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onYChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  onZChanged(handler: DslSignalHandlerValue): ItemParticleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ItemParticleBuilder;
  layer(setup: (b: LayerBuilder) => void): ItemParticleBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): ItemParticleBuilder;
}

const ITEMPARTICLE_META: TypeMetadata = {
  typeName: 'ItemParticle',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'fade', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'groups', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFadeChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGroupsChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
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
};

export function ItemParticle(): ItemParticleBuilder {
  return createFluentBuilder('ItemParticle', ITEMPARTICLE_META) as unknown as ItemParticleBuilder;
}

export namespace ItemParticle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ItemParticle',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ItemParticle',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ItemParticle', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ItemParticle', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ItemParticle', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ItemParticle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ItemParticle',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ItemParticle', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ItemParticle',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ItemParticle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ItemParticle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ItemParticle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ItemParticle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ItemParticle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ItemParticle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ItemParticle', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ItemParticle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ItemParticle', 'TransformOrigin', 'BottomRight');
  }
}
