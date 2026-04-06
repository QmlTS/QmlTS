// AUTO-GENERATED — DO NOT EDIT
// Type: ProgressBar
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
export interface ProgressBarBuilder {
  id(id: string): ProgressBarBuilder;
  child(obj: QmlObjectBuilder): ProgressBarBuilder;
  children(...objs: QmlObjectBuilder[]): ProgressBarBuilder;

  activeFocusOnTab(value: boolean): ProgressBarBuilder;
  activeFocusOnTabBind(expr: string): ProgressBarBuilder;
  antialiasing(value: boolean): ProgressBarBuilder;
  antialiasingBind(expr: string): ProgressBarBuilder;
  baselineOffset(value: number): ProgressBarBuilder;
  baselineOffsetBind(expr: string): ProgressBarBuilder;
  clip(value: boolean): ProgressBarBuilder;
  clipBind(expr: string): ProgressBarBuilder;
  containmentMask(value: QtObjectBuilder): ProgressBarBuilder;
  containmentMaskBind(expr: string): ProgressBarBuilder;
  contentHeight(value: number): ProgressBarBuilder;
  contentHeightBind(expr: string): ProgressBarBuilder;
  contentWidth(value: number): ProgressBarBuilder;
  contentWidthBind(expr: string): ProgressBarBuilder;
  control(value: ItemBuilder): ProgressBarBuilder;
  controlBind(expr: string): ProgressBarBuilder;
  enabled(value: boolean): ProgressBarBuilder;
  enabledBind(expr: string): ProgressBarBuilder;
  focus(value: boolean): ProgressBarBuilder;
  focusBind(expr: string): ProgressBarBuilder;
  focusPolicy(value: QmlEnumToken): ProgressBarBuilder;
  focusPolicyBind(expr: string): ProgressBarBuilder;
  height(value: number): ProgressBarBuilder;
  heightBind(expr: string): ProgressBarBuilder;
  implicitHeight(value: number): ProgressBarBuilder;
  implicitHeightBind(expr: string): ProgressBarBuilder;
  implicitWidth(value: number): ProgressBarBuilder;
  implicitWidthBind(expr: string): ProgressBarBuilder;
  objectName(value: string): ProgressBarBuilder;
  objectNameBind(expr: string): ProgressBarBuilder;
  opacity(value: number): ProgressBarBuilder;
  opacityBind(expr: string): ProgressBarBuilder;
  overrideState(value: QmlEnumToken): ProgressBarBuilder;
  overrideStateBind(expr: string): ProgressBarBuilder;
  palette(value: PaletteBuilder): ProgressBarBuilder;
  paletteBind(expr: string): ProgressBarBuilder;
  parent(value: ItemBuilder): ProgressBarBuilder;
  parentBind(expr: string): ProgressBarBuilder;
  rotation(value: number): ProgressBarBuilder;
  rotationBind(expr: string): ProgressBarBuilder;
  scale(value: number): ProgressBarBuilder;
  scaleBind(expr: string): ProgressBarBuilder;
  smooth(value: boolean): ProgressBarBuilder;
  smoothBind(expr: string): ProgressBarBuilder;
  state(value: string): ProgressBarBuilder;
  stateBind(expr: string): ProgressBarBuilder;
  transformOrigin(value: QmlEnumToken): ProgressBarBuilder;
  transformOriginBind(expr: string): ProgressBarBuilder;
  transitionDuration(value: number): ProgressBarBuilder;
  transitionDurationBind(expr: string): ProgressBarBuilder;
  useNinePatchImage(value: boolean): ProgressBarBuilder;
  useNinePatchImageBind(expr: string): ProgressBarBuilder;
  visible(value: boolean): ProgressBarBuilder;
  visibleBind(expr: string): ProgressBarBuilder;
  width(value: number): ProgressBarBuilder;
  widthBind(expr: string): ProgressBarBuilder;
  x(value: number): ProgressBarBuilder;
  xBind(expr: string): ProgressBarBuilder;
  y(value: number): ProgressBarBuilder;
  yBind(expr: string): ProgressBarBuilder;
  z(value: number): ProgressBarBuilder;
  zBind(expr: string): ProgressBarBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onClipChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onControlChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onFontChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onXChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onYChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  onZChanged(handler: DslSignalHandlerValue): ProgressBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ProgressBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ProgressBarBuilder;
}

const PROGRESSBAR_META: TypeMetadata = {
  typeName: 'ProgressBar',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentHeight', hasValue: true, hasBinding: true },
    { name: 'contentWidth', hasValue: true, hasBinding: true },
    { name: 'control', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'overrideState', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'transitionDuration', hasValue: true, hasBinding: true },
    { name: 'useNinePatchImage', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContentPaddingChanged', paramCount: 0 },
    { handlerName: 'onControlChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLayoutMarginsChanged', paramCount: 0 },
    { handlerName: 'onMinimumSizeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
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
  attached: [],
};

export function ProgressBar(): ProgressBarBuilder {
  return createFluentBuilder('ProgressBar', PROGRESSBAR_META) as unknown as ProgressBarBuilder;
}

export namespace ProgressBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ProgressBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ProgressBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ProgressBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ProgressBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ProgressBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('ProgressBar', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('ProgressBar', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('ProgressBar', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('ProgressBar', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ProgressBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ProgressBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ProgressBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ProgressBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ProgressBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ProgressBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ProgressBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ProgressBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ProgressBar', 'TransformOrigin', 'BottomRight');
  }
}
