// AUTO-GENERATED — DO NOT EDIT
// Type: GroupBox
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
export interface GroupBoxBuilder {
  id(id: string): GroupBoxBuilder;
  child(obj: QmlObjectBuilder): GroupBoxBuilder;
  children(...objs: QmlObjectBuilder[]): GroupBoxBuilder;

  activeFocusOnTab(value: boolean): GroupBoxBuilder;
  activeFocusOnTabBind(expr: string): GroupBoxBuilder;
  antialiasing(value: boolean): GroupBoxBuilder;
  antialiasingBind(expr: string): GroupBoxBuilder;
  baselineOffset(value: number): GroupBoxBuilder;
  baselineOffsetBind(expr: string): GroupBoxBuilder;
  clip(value: boolean): GroupBoxBuilder;
  clipBind(expr: string): GroupBoxBuilder;
  containmentMask(value: QtObjectBuilder): GroupBoxBuilder;
  containmentMaskBind(expr: string): GroupBoxBuilder;
  contentHeight(value: number): GroupBoxBuilder;
  contentHeightBind(expr: string): GroupBoxBuilder;
  contentWidth(value: number): GroupBoxBuilder;
  contentWidthBind(expr: string): GroupBoxBuilder;
  control(value: ItemBuilder): GroupBoxBuilder;
  controlBind(expr: string): GroupBoxBuilder;
  enabled(value: boolean): GroupBoxBuilder;
  enabledBind(expr: string): GroupBoxBuilder;
  focus(value: boolean): GroupBoxBuilder;
  focusBind(expr: string): GroupBoxBuilder;
  focusPolicy(value: QmlEnumToken): GroupBoxBuilder;
  focusPolicyBind(expr: string): GroupBoxBuilder;
  height(value: number): GroupBoxBuilder;
  heightBind(expr: string): GroupBoxBuilder;
  implicitHeight(value: number): GroupBoxBuilder;
  implicitHeightBind(expr: string): GroupBoxBuilder;
  implicitWidth(value: number): GroupBoxBuilder;
  implicitWidthBind(expr: string): GroupBoxBuilder;
  objectName(value: string): GroupBoxBuilder;
  objectNameBind(expr: string): GroupBoxBuilder;
  opacity(value: number): GroupBoxBuilder;
  opacityBind(expr: string): GroupBoxBuilder;
  overrideState(value: QmlEnumToken): GroupBoxBuilder;
  overrideStateBind(expr: string): GroupBoxBuilder;
  palette(value: PaletteBuilder): GroupBoxBuilder;
  paletteBind(expr: string): GroupBoxBuilder;
  parent(value: ItemBuilder): GroupBoxBuilder;
  parentBind(expr: string): GroupBoxBuilder;
  rotation(value: number): GroupBoxBuilder;
  rotationBind(expr: string): GroupBoxBuilder;
  scale(value: number): GroupBoxBuilder;
  scaleBind(expr: string): GroupBoxBuilder;
  smooth(value: boolean): GroupBoxBuilder;
  smoothBind(expr: string): GroupBoxBuilder;
  state(value: string): GroupBoxBuilder;
  stateBind(expr: string): GroupBoxBuilder;
  transformOrigin(value: QmlEnumToken): GroupBoxBuilder;
  transformOriginBind(expr: string): GroupBoxBuilder;
  transitionDuration(value: number): GroupBoxBuilder;
  transitionDurationBind(expr: string): GroupBoxBuilder;
  useNinePatchImage(value: boolean): GroupBoxBuilder;
  useNinePatchImageBind(expr: string): GroupBoxBuilder;
  visible(value: boolean): GroupBoxBuilder;
  visibleBind(expr: string): GroupBoxBuilder;
  width(value: number): GroupBoxBuilder;
  widthBind(expr: string): GroupBoxBuilder;
  x(value: number): GroupBoxBuilder;
  xBind(expr: string): GroupBoxBuilder;
  y(value: number): GroupBoxBuilder;
  yBind(expr: string): GroupBoxBuilder;
  z(value: number): GroupBoxBuilder;
  zBind(expr: string): GroupBoxBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onClipChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onControlChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onFontChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onGroupBoxPaddingChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onLabelPosChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onParentChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onStateChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onXChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onYChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  onZChanged(handler: DslSignalHandlerValue): GroupBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GroupBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): GroupBoxBuilder;
}

const GROUPBOX_META: TypeMetadata = {
  typeName: 'GroupBox',
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
    { handlerName: 'onGroupBoxPaddingChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLabelPosChanged', paramCount: 0 },
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

export function GroupBox(): GroupBoxBuilder {
  return createFluentBuilder('GroupBox', GROUPBOX_META) as unknown as GroupBoxBuilder;
}

export namespace GroupBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('GroupBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GroupBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GroupBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GroupBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('GroupBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('GroupBox', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('GroupBox', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('GroupBox', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('GroupBox', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('GroupBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('GroupBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('GroupBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('GroupBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('GroupBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('GroupBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('GroupBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('GroupBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('GroupBox', 'TransformOrigin', 'BottomRight');
  }
}
