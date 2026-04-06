// AUTO-GENERATED — DO NOT EDIT
// Type: ImageParticle
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
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
export interface ImageParticleBuilder {
  id(id: string): ImageParticleBuilder;
  child(obj: QmlObjectBuilder): ImageParticleBuilder;
  children(...objs: QmlObjectBuilder[]): ImageParticleBuilder;

  activeFocusOnTab(value: boolean): ImageParticleBuilder;
  activeFocusOnTabBind(expr: string): ImageParticleBuilder;
  alpha(value: number): ImageParticleBuilder;
  alphaBind(expr: string): ImageParticleBuilder;
  alphaVariation(value: number): ImageParticleBuilder;
  alphaVariationBind(expr: string): ImageParticleBuilder;
  antialiasing(value: boolean): ImageParticleBuilder;
  antialiasingBind(expr: string): ImageParticleBuilder;
  autoRotation(value: boolean): ImageParticleBuilder;
  autoRotationBind(expr: string): ImageParticleBuilder;
  baselineOffset(value: number): ImageParticleBuilder;
  baselineOffsetBind(expr: string): ImageParticleBuilder;
  blueVariation(value: number): ImageParticleBuilder;
  blueVariationBind(expr: string): ImageParticleBuilder;
  clip(value: boolean): ImageParticleBuilder;
  clipBind(expr: string): ImageParticleBuilder;
  color(value: QmlColor): ImageParticleBuilder;
  colorBind(expr: string): ImageParticleBuilder;
  colorTable(value: QmlUrl): ImageParticleBuilder;
  colorTableBind(expr: string): ImageParticleBuilder;
  colorVariation(value: number): ImageParticleBuilder;
  colorVariationBind(expr: string): ImageParticleBuilder;
  containmentMask(value: QtObjectBuilder): ImageParticleBuilder;
  containmentMaskBind(expr: string): ImageParticleBuilder;
  enabled(value: boolean): ImageParticleBuilder;
  enabledBind(expr: string): ImageParticleBuilder;
  entryEffect(value: QmlEnumToken): ImageParticleBuilder;
  entryEffectBind(expr: string): ImageParticleBuilder;
  focus(value: boolean): ImageParticleBuilder;
  focusBind(expr: string): ImageParticleBuilder;
  focusPolicy(value: QmlEnumToken): ImageParticleBuilder;
  focusPolicyBind(expr: string): ImageParticleBuilder;
  greenVariation(value: number): ImageParticleBuilder;
  greenVariationBind(expr: string): ImageParticleBuilder;
  groups(value: string[]): ImageParticleBuilder;
  groupsBind(expr: string): ImageParticleBuilder;
  height(value: number): ImageParticleBuilder;
  heightBind(expr: string): ImageParticleBuilder;
  implicitHeight(value: number): ImageParticleBuilder;
  implicitHeightBind(expr: string): ImageParticleBuilder;
  implicitWidth(value: number): ImageParticleBuilder;
  implicitWidthBind(expr: string): ImageParticleBuilder;
  objectName(value: string): ImageParticleBuilder;
  objectNameBind(expr: string): ImageParticleBuilder;
  opacity(value: number): ImageParticleBuilder;
  opacityBind(expr: string): ImageParticleBuilder;
  opacityTable(value: QmlUrl): ImageParticleBuilder;
  opacityTableBind(expr: string): ImageParticleBuilder;
  palette(value: PaletteBuilder): ImageParticleBuilder;
  paletteBind(expr: string): ImageParticleBuilder;
  parent(value: ItemBuilder): ImageParticleBuilder;
  parentBind(expr: string): ImageParticleBuilder;
  redVariation(value: number): ImageParticleBuilder;
  redVariationBind(expr: string): ImageParticleBuilder;
  rotation(value: number): ImageParticleBuilder;
  rotationBind(expr: string): ImageParticleBuilder;
  rotationVariation(value: number): ImageParticleBuilder;
  rotationVariationBind(expr: string): ImageParticleBuilder;
  rotationVelocity(value: number): ImageParticleBuilder;
  rotationVelocityBind(expr: string): ImageParticleBuilder;
  rotationVelocityVariation(value: number): ImageParticleBuilder;
  rotationVelocityVariationBind(expr: string): ImageParticleBuilder;
  scale(value: number): ImageParticleBuilder;
  scaleBind(expr: string): ImageParticleBuilder;
  sizeTable(value: QmlUrl): ImageParticleBuilder;
  sizeTableBind(expr: string): ImageParticleBuilder;
  smooth(value: boolean): ImageParticleBuilder;
  smoothBind(expr: string): ImageParticleBuilder;
  source(value: QmlUrl): ImageParticleBuilder;
  sourceBind(expr: string): ImageParticleBuilder;
  spritesInterpolate(value: boolean): ImageParticleBuilder;
  spritesInterpolateBind(expr: string): ImageParticleBuilder;
  state(value: string): ImageParticleBuilder;
  stateBind(expr: string): ImageParticleBuilder;
  system(value: ParticleSystemBuilder): ImageParticleBuilder;
  systemBind(expr: string): ImageParticleBuilder;
  transformOrigin(value: QmlEnumToken): ImageParticleBuilder;
  transformOriginBind(expr: string): ImageParticleBuilder;
  visible(value: boolean): ImageParticleBuilder;
  visibleBind(expr: string): ImageParticleBuilder;
  width(value: number): ImageParticleBuilder;
  widthBind(expr: string): ImageParticleBuilder;
  x(value: number): ImageParticleBuilder;
  xBind(expr: string): ImageParticleBuilder;
  xVector(value: QmlValue): ImageParticleBuilder;
  xVectorBind(expr: string): ImageParticleBuilder;
  y(value: number): ImageParticleBuilder;
  yBind(expr: string): ImageParticleBuilder;
  yVector(value: QmlValue): ImageParticleBuilder;
  yVectorBind(expr: string): ImageParticleBuilder;
  z(value: number): ImageParticleBuilder;
  zBind(expr: string): ImageParticleBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onAlphaChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onAlphaVariationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onAutoRotationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onBlueVariationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onBypassOptimizationsChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onClipChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onColorChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onColorVariationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onColortableChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onCountChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onEntryEffectChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onGreenVariationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onGroupsChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onImageChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onOpacitytableChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onRedVariationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onRotationVariationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onRotationVelocityChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onRotationVelocityVariationChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onSizetableChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onSpritesInterpolateChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onXChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onXVectorChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onYChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onYVectorChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  onZChanged(handler: DslSignalHandlerValue): ImageParticleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ImageParticleBuilder;
  layer(setup: (b: LayerBuilder) => void): ImageParticleBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): ImageParticleBuilder;
}

const IMAGEPARTICLE_META: TypeMetadata = {
  typeName: 'ImageParticle',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'alpha', hasValue: true, hasBinding: true },
    { name: 'alphaVariation', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoRotation', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'blueVariation', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'colorTable', hasValue: true, hasBinding: true },
    { name: 'colorVariation', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'entryEffect', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'greenVariation', hasValue: true, hasBinding: true },
    { name: 'groups', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'opacityTable', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'redVariation', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationVariation', hasValue: true, hasBinding: true },
    { name: 'rotationVelocity', hasValue: true, hasBinding: true },
    { name: 'rotationVelocityVariation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'sizeTable', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'spritesInterpolate', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'xVector', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'yVector', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAlphaChanged', paramCount: 1 },
    { handlerName: 'onAlphaVariationChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAutoRotationChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBlueVariationChanged', paramCount: 1 },
    { handlerName: 'onBypassOptimizationsChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onColorVariationChanged', paramCount: 0 },
    { handlerName: 'onColortableChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEntryEffectChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGreenVariationChanged', paramCount: 1 },
    { handlerName: 'onGroupsChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImageChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOpacitytableChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRedVariationChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 1 },
    { handlerName: 'onRotationVariationChanged', paramCount: 1 },
    { handlerName: 'onRotationVelocityChanged', paramCount: 1 },
    { handlerName: 'onRotationVelocityVariationChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSizetableChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpritesInterpolateChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onXVectorChanged', paramCount: 1 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onYVectorChanged', paramCount: 1 },
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

export function ImageParticle(): ImageParticleBuilder {
  return createFluentBuilder(
    'ImageParticle',
    IMAGEPARTICLE_META,
  ) as unknown as ImageParticleBuilder;
}

export namespace ImageParticle {
  export namespace EntryEffect {
    export const None = createEnumToken('ImageParticle', 'EntryEffect', 'None');
    export const Fade = createEnumToken('ImageParticle', 'EntryEffect', 'Fade');
    export const Scale = createEnumToken('ImageParticle', 'EntryEffect', 'Scale');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ImageParticle',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ImageParticle',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ImageParticle', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ImageParticle', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ImageParticle', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ImageParticle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ImageParticle',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ImageParticle',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('ImageParticle', 'Status', 'Null');
    export const Ready = createEnumToken('ImageParticle', 'Status', 'Ready');
    export const Loading = createEnumToken('ImageParticle', 'Status', 'Loading');
    export const Error = createEnumToken('ImageParticle', 'Status', 'Error');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ImageParticle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ImageParticle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ImageParticle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ImageParticle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ImageParticle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ImageParticle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ImageParticle', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ImageParticle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ImageParticle', 'TransformOrigin', 'BottomRight');
  }
}
