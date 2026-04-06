// AUTO-GENERATED — DO NOT EDIT
// Type: VideoOutput
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
import type { VideoSinkBuilder } from './QVideoSink.js';
export interface VideoOutputBuilder {
  id(id: string): VideoOutputBuilder;
  child(obj: QmlObjectBuilder): VideoOutputBuilder;
  children(...objs: QmlObjectBuilder[]): VideoOutputBuilder;

  activeFocusOnTab(value: boolean): VideoOutputBuilder;
  activeFocusOnTabBind(expr: string): VideoOutputBuilder;
  antialiasing(value: boolean): VideoOutputBuilder;
  antialiasingBind(expr: string): VideoOutputBuilder;
  baselineOffset(value: number): VideoOutputBuilder;
  baselineOffsetBind(expr: string): VideoOutputBuilder;
  clip(value: boolean): VideoOutputBuilder;
  clipBind(expr: string): VideoOutputBuilder;
  containmentMask(value: QtObjectBuilder): VideoOutputBuilder;
  containmentMaskBind(expr: string): VideoOutputBuilder;
  enabled(value: boolean): VideoOutputBuilder;
  enabledBind(expr: string): VideoOutputBuilder;
  endOfStreamPolicy(value: QmlEnumToken): VideoOutputBuilder;
  endOfStreamPolicyBind(expr: string): VideoOutputBuilder;
  fillMode(value: QmlEnumToken): VideoOutputBuilder;
  fillModeBind(expr: string): VideoOutputBuilder;
  focus(value: boolean): VideoOutputBuilder;
  focusBind(expr: string): VideoOutputBuilder;
  focusPolicy(value: QmlEnumToken): VideoOutputBuilder;
  focusPolicyBind(expr: string): VideoOutputBuilder;
  height(value: number): VideoOutputBuilder;
  heightBind(expr: string): VideoOutputBuilder;
  implicitHeight(value: number): VideoOutputBuilder;
  implicitHeightBind(expr: string): VideoOutputBuilder;
  implicitWidth(value: number): VideoOutputBuilder;
  implicitWidthBind(expr: string): VideoOutputBuilder;
  mirrored(value: boolean): VideoOutputBuilder;
  mirroredBind(expr: string): VideoOutputBuilder;
  objectName(value: string): VideoOutputBuilder;
  objectNameBind(expr: string): VideoOutputBuilder;
  opacity(value: number): VideoOutputBuilder;
  opacityBind(expr: string): VideoOutputBuilder;
  orientation(value: number): VideoOutputBuilder;
  orientationBind(expr: string): VideoOutputBuilder;
  palette(value: PaletteBuilder): VideoOutputBuilder;
  paletteBind(expr: string): VideoOutputBuilder;
  parent(value: ItemBuilder): VideoOutputBuilder;
  parentBind(expr: string): VideoOutputBuilder;
  rotation(value: number): VideoOutputBuilder;
  rotationBind(expr: string): VideoOutputBuilder;
  scale(value: number): VideoOutputBuilder;
  scaleBind(expr: string): VideoOutputBuilder;
  smooth(value: boolean): VideoOutputBuilder;
  smoothBind(expr: string): VideoOutputBuilder;
  state(value: string): VideoOutputBuilder;
  stateBind(expr: string): VideoOutputBuilder;
  transformOrigin(value: QmlEnumToken): VideoOutputBuilder;
  transformOriginBind(expr: string): VideoOutputBuilder;
  visible(value: boolean): VideoOutputBuilder;
  visibleBind(expr: string): VideoOutputBuilder;
  width(value: number): VideoOutputBuilder;
  widthBind(expr: string): VideoOutputBuilder;
  x(value: number): VideoOutputBuilder;
  xBind(expr: string): VideoOutputBuilder;
  y(value: number): VideoOutputBuilder;
  yBind(expr: string): VideoOutputBuilder;
  z(value: number): VideoOutputBuilder;
  zBind(expr: string): VideoOutputBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onClipChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onContentRectChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onEndOfStreamPolicyChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onFillModeChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onParentChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onSourceRectChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onStateChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onXChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onYChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  onZChanged(handler: DslSignalHandlerValue): VideoOutputBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): VideoOutputBuilder;
  layer(setup: (b: LayerBuilder) => void): VideoOutputBuilder;
  videoSink(setup: (b: VideoSinkBuilder) => void): VideoOutputBuilder;
}

const VIDEOOUTPUT_META: TypeMetadata = {
  typeName: 'VideoOutput',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'endOfStreamPolicy', hasValue: true, hasBinding: true },
    { name: 'fillMode', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
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
    { handlerName: 'onContentRectChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEndOfStreamPolicyChanged', paramCount: 1 },
    { handlerName: 'onFillModeChanged', paramCount: 1 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSourceRectChanged', paramCount: 0 },
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
    {
      methodName: 'videoSink',
      groupName: 'videoSink',
      properties: [{ name: 'subtitleText', hasValue: true, hasBinding: true }],
    },
  ],
  attached: [],
  defaultProperty: 'data',
};

export function VideoOutput(): VideoOutputBuilder {
  return createFluentBuilder('VideoOutput', VIDEOOUTPUT_META) as unknown as VideoOutputBuilder;
}

export namespace VideoOutput {
  export namespace EndOfStreamPolicy {
    export const ClearOutput = createEnumToken('VideoOutput', 'EndOfStreamPolicy', 'ClearOutput');
    export const KeepLastFrame = createEnumToken(
      'VideoOutput',
      'EndOfStreamPolicy',
      'KeepLastFrame',
    );
  }
  export namespace FillMode {
    export const Stretch = createEnumToken('VideoOutput', 'FillMode', 'Stretch');
    export const PreserveAspectFit = createEnumToken(
      'VideoOutput',
      'FillMode',
      'PreserveAspectFit',
    );
    export const PreserveAspectCrop = createEnumToken(
      'VideoOutput',
      'FillMode',
      'PreserveAspectCrop',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'VideoOutput',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'VideoOutput',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('VideoOutput', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('VideoOutput', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('VideoOutput', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('VideoOutput', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'VideoOutput',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('VideoOutput', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'VideoOutput',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('VideoOutput', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('VideoOutput', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('VideoOutput', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('VideoOutput', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('VideoOutput', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('VideoOutput', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('VideoOutput', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('VideoOutput', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('VideoOutput', 'TransformOrigin', 'BottomRight');
  }
}
