// AUTO-GENERATED — DO NOT EDIT
// Type: ComboBox
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
export interface ComboBoxBuilder {
  id(id: string): ComboBoxBuilder;
  child(obj: QmlObjectBuilder): ComboBoxBuilder;
  children(...objs: QmlObjectBuilder[]): ComboBoxBuilder;

  activeFocusOnTab(value: boolean): ComboBoxBuilder;
  activeFocusOnTabBind(expr: string): ComboBoxBuilder;
  antialiasing(value: boolean): ComboBoxBuilder;
  antialiasingBind(expr: string): ComboBoxBuilder;
  baselineOffset(value: number): ComboBoxBuilder;
  baselineOffsetBind(expr: string): ComboBoxBuilder;
  clip(value: boolean): ComboBoxBuilder;
  clipBind(expr: string): ComboBoxBuilder;
  containmentMask(value: QtObjectBuilder): ComboBoxBuilder;
  containmentMaskBind(expr: string): ComboBoxBuilder;
  contentHeight(value: number): ComboBoxBuilder;
  contentHeightBind(expr: string): ComboBoxBuilder;
  contentWidth(value: number): ComboBoxBuilder;
  contentWidthBind(expr: string): ComboBoxBuilder;
  control(value: ItemBuilder): ComboBoxBuilder;
  controlBind(expr: string): ComboBoxBuilder;
  enabled(value: boolean): ComboBoxBuilder;
  enabledBind(expr: string): ComboBoxBuilder;
  focus(value: boolean): ComboBoxBuilder;
  focusBind(expr: string): ComboBoxBuilder;
  focusPolicy(value: QmlEnumToken): ComboBoxBuilder;
  focusPolicyBind(expr: string): ComboBoxBuilder;
  height(value: number): ComboBoxBuilder;
  heightBind(expr: string): ComboBoxBuilder;
  implicitHeight(value: number): ComboBoxBuilder;
  implicitHeightBind(expr: string): ComboBoxBuilder;
  implicitWidth(value: number): ComboBoxBuilder;
  implicitWidthBind(expr: string): ComboBoxBuilder;
  objectName(value: string): ComboBoxBuilder;
  objectNameBind(expr: string): ComboBoxBuilder;
  opacity(value: number): ComboBoxBuilder;
  opacityBind(expr: string): ComboBoxBuilder;
  overrideState(value: QmlEnumToken): ComboBoxBuilder;
  overrideStateBind(expr: string): ComboBoxBuilder;
  palette(value: PaletteBuilder): ComboBoxBuilder;
  paletteBind(expr: string): ComboBoxBuilder;
  parent(value: ItemBuilder): ComboBoxBuilder;
  parentBind(expr: string): ComboBoxBuilder;
  rotation(value: number): ComboBoxBuilder;
  rotationBind(expr: string): ComboBoxBuilder;
  scale(value: number): ComboBoxBuilder;
  scaleBind(expr: string): ComboBoxBuilder;
  smooth(value: boolean): ComboBoxBuilder;
  smoothBind(expr: string): ComboBoxBuilder;
  state(value: string): ComboBoxBuilder;
  stateBind(expr: string): ComboBoxBuilder;
  transformOrigin(value: QmlEnumToken): ComboBoxBuilder;
  transformOriginBind(expr: string): ComboBoxBuilder;
  transitionDuration(value: number): ComboBoxBuilder;
  transitionDurationBind(expr: string): ComboBoxBuilder;
  useNinePatchImage(value: boolean): ComboBoxBuilder;
  useNinePatchImageBind(expr: string): ComboBoxBuilder;
  visible(value: boolean): ComboBoxBuilder;
  visibleBind(expr: string): ComboBoxBuilder;
  width(value: number): ComboBoxBuilder;
  widthBind(expr: string): ComboBoxBuilder;
  x(value: number): ComboBoxBuilder;
  xBind(expr: string): ComboBoxBuilder;
  y(value: number): ComboBoxBuilder;
  yBind(expr: string): ComboBoxBuilder;
  z(value: number): ComboBoxBuilder;
  zBind(expr: string): ComboBoxBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onClipChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onControlChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onFontChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onXChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onYChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  onZChanged(handler: DslSignalHandlerValue): ComboBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ComboBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): ComboBoxBuilder;
}

const COMBOBOX_META: TypeMetadata = {
  typeName: 'ComboBox',
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

export function ComboBox(): ComboBoxBuilder {
  return createFluentBuilder('ComboBox', COMBOBOX_META) as unknown as ComboBoxBuilder;
}

export namespace ComboBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ComboBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ComboBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ComboBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ComboBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ComboBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ComboBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ComboBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ComboBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ComboBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('ComboBox', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('ComboBox', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('ComboBox', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('ComboBox', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ComboBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ComboBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ComboBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ComboBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ComboBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ComboBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ComboBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ComboBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ComboBox', 'TransformOrigin', 'BottomRight');
  }
}
