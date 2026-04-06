// AUTO-GENERATED — DO NOT EDIT
// Type: CheckBox
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
export interface CheckBoxBuilder {
  id(id: string): CheckBoxBuilder;
  child(obj: QmlObjectBuilder): CheckBoxBuilder;
  children(...objs: QmlObjectBuilder[]): CheckBoxBuilder;

  activeFocusOnTab(value: boolean): CheckBoxBuilder;
  activeFocusOnTabBind(expr: string): CheckBoxBuilder;
  antialiasing(value: boolean): CheckBoxBuilder;
  antialiasingBind(expr: string): CheckBoxBuilder;
  baselineOffset(value: number): CheckBoxBuilder;
  baselineOffsetBind(expr: string): CheckBoxBuilder;
  clip(value: boolean): CheckBoxBuilder;
  clipBind(expr: string): CheckBoxBuilder;
  containmentMask(value: QtObjectBuilder): CheckBoxBuilder;
  containmentMaskBind(expr: string): CheckBoxBuilder;
  contentHeight(value: number): CheckBoxBuilder;
  contentHeightBind(expr: string): CheckBoxBuilder;
  contentWidth(value: number): CheckBoxBuilder;
  contentWidthBind(expr: string): CheckBoxBuilder;
  control(value: ItemBuilder): CheckBoxBuilder;
  controlBind(expr: string): CheckBoxBuilder;
  enabled(value: boolean): CheckBoxBuilder;
  enabledBind(expr: string): CheckBoxBuilder;
  focus(value: boolean): CheckBoxBuilder;
  focusBind(expr: string): CheckBoxBuilder;
  focusPolicy(value: QmlEnumToken): CheckBoxBuilder;
  focusPolicyBind(expr: string): CheckBoxBuilder;
  height(value: number): CheckBoxBuilder;
  heightBind(expr: string): CheckBoxBuilder;
  implicitHeight(value: number): CheckBoxBuilder;
  implicitHeightBind(expr: string): CheckBoxBuilder;
  implicitWidth(value: number): CheckBoxBuilder;
  implicitWidthBind(expr: string): CheckBoxBuilder;
  objectName(value: string): CheckBoxBuilder;
  objectNameBind(expr: string): CheckBoxBuilder;
  opacity(value: number): CheckBoxBuilder;
  opacityBind(expr: string): CheckBoxBuilder;
  overrideState(value: QmlEnumToken): CheckBoxBuilder;
  overrideStateBind(expr: string): CheckBoxBuilder;
  palette(value: PaletteBuilder): CheckBoxBuilder;
  paletteBind(expr: string): CheckBoxBuilder;
  parent(value: ItemBuilder): CheckBoxBuilder;
  parentBind(expr: string): CheckBoxBuilder;
  rotation(value: number): CheckBoxBuilder;
  rotationBind(expr: string): CheckBoxBuilder;
  scale(value: number): CheckBoxBuilder;
  scaleBind(expr: string): CheckBoxBuilder;
  smooth(value: boolean): CheckBoxBuilder;
  smoothBind(expr: string): CheckBoxBuilder;
  state(value: string): CheckBoxBuilder;
  stateBind(expr: string): CheckBoxBuilder;
  transformOrigin(value: QmlEnumToken): CheckBoxBuilder;
  transformOriginBind(expr: string): CheckBoxBuilder;
  transitionDuration(value: number): CheckBoxBuilder;
  transitionDurationBind(expr: string): CheckBoxBuilder;
  useNinePatchImage(value: boolean): CheckBoxBuilder;
  useNinePatchImageBind(expr: string): CheckBoxBuilder;
  visible(value: boolean): CheckBoxBuilder;
  visibleBind(expr: string): CheckBoxBuilder;
  width(value: number): CheckBoxBuilder;
  widthBind(expr: string): CheckBoxBuilder;
  x(value: number): CheckBoxBuilder;
  xBind(expr: string): CheckBoxBuilder;
  y(value: number): CheckBoxBuilder;
  yBind(expr: string): CheckBoxBuilder;
  z(value: number): CheckBoxBuilder;
  zBind(expr: string): CheckBoxBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onClipChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onControlChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onFontChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onParentChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onStateChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onXChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onYChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  onZChanged(handler: DslSignalHandlerValue): CheckBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): CheckBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): CheckBoxBuilder;
}

const CHECKBOX_META: TypeMetadata = {
  typeName: 'CheckBox',
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

export function CheckBox(): CheckBoxBuilder {
  return createFluentBuilder('CheckBox', CHECKBOX_META) as unknown as CheckBoxBuilder;
}

export namespace CheckBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'CheckBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'CheckBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('CheckBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('CheckBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('CheckBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('CheckBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'CheckBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('CheckBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'CheckBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('CheckBox', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('CheckBox', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('CheckBox', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('CheckBox', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('CheckBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('CheckBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('CheckBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('CheckBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('CheckBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('CheckBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('CheckBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('CheckBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('CheckBox', 'TransformOrigin', 'BottomRight');
  }
}
