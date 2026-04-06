// AUTO-GENERATED — DO NOT EDIT
// Type: DelayButton
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
export interface DelayButtonBuilder {
  id(id: string): DelayButtonBuilder;
  child(obj: QmlObjectBuilder): DelayButtonBuilder;
  children(...objs: QmlObjectBuilder[]): DelayButtonBuilder;

  activeFocusOnTab(value: boolean): DelayButtonBuilder;
  activeFocusOnTabBind(expr: string): DelayButtonBuilder;
  antialiasing(value: boolean): DelayButtonBuilder;
  antialiasingBind(expr: string): DelayButtonBuilder;
  baselineOffset(value: number): DelayButtonBuilder;
  baselineOffsetBind(expr: string): DelayButtonBuilder;
  clip(value: boolean): DelayButtonBuilder;
  clipBind(expr: string): DelayButtonBuilder;
  containmentMask(value: QtObjectBuilder): DelayButtonBuilder;
  containmentMaskBind(expr: string): DelayButtonBuilder;
  contentHeight(value: number): DelayButtonBuilder;
  contentHeightBind(expr: string): DelayButtonBuilder;
  contentWidth(value: number): DelayButtonBuilder;
  contentWidthBind(expr: string): DelayButtonBuilder;
  control(value: ItemBuilder): DelayButtonBuilder;
  controlBind(expr: string): DelayButtonBuilder;
  enabled(value: boolean): DelayButtonBuilder;
  enabledBind(expr: string): DelayButtonBuilder;
  focus(value: boolean): DelayButtonBuilder;
  focusBind(expr: string): DelayButtonBuilder;
  focusPolicy(value: QmlEnumToken): DelayButtonBuilder;
  focusPolicyBind(expr: string): DelayButtonBuilder;
  height(value: number): DelayButtonBuilder;
  heightBind(expr: string): DelayButtonBuilder;
  implicitHeight(value: number): DelayButtonBuilder;
  implicitHeightBind(expr: string): DelayButtonBuilder;
  implicitWidth(value: number): DelayButtonBuilder;
  implicitWidthBind(expr: string): DelayButtonBuilder;
  objectName(value: string): DelayButtonBuilder;
  objectNameBind(expr: string): DelayButtonBuilder;
  opacity(value: number): DelayButtonBuilder;
  opacityBind(expr: string): DelayButtonBuilder;
  overrideState(value: QmlEnumToken): DelayButtonBuilder;
  overrideStateBind(expr: string): DelayButtonBuilder;
  palette(value: PaletteBuilder): DelayButtonBuilder;
  paletteBind(expr: string): DelayButtonBuilder;
  parent(value: ItemBuilder): DelayButtonBuilder;
  parentBind(expr: string): DelayButtonBuilder;
  rotation(value: number): DelayButtonBuilder;
  rotationBind(expr: string): DelayButtonBuilder;
  scale(value: number): DelayButtonBuilder;
  scaleBind(expr: string): DelayButtonBuilder;
  smooth(value: boolean): DelayButtonBuilder;
  smoothBind(expr: string): DelayButtonBuilder;
  state(value: string): DelayButtonBuilder;
  stateBind(expr: string): DelayButtonBuilder;
  transformOrigin(value: QmlEnumToken): DelayButtonBuilder;
  transformOriginBind(expr: string): DelayButtonBuilder;
  transitionDuration(value: number): DelayButtonBuilder;
  transitionDurationBind(expr: string): DelayButtonBuilder;
  useNinePatchImage(value: boolean): DelayButtonBuilder;
  useNinePatchImageBind(expr: string): DelayButtonBuilder;
  visible(value: boolean): DelayButtonBuilder;
  visibleBind(expr: string): DelayButtonBuilder;
  width(value: number): DelayButtonBuilder;
  widthBind(expr: string): DelayButtonBuilder;
  x(value: number): DelayButtonBuilder;
  xBind(expr: string): DelayButtonBuilder;
  y(value: number): DelayButtonBuilder;
  yBind(expr: string): DelayButtonBuilder;
  z(value: number): DelayButtonBuilder;
  zBind(expr: string): DelayButtonBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onClipChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onControlChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onFontChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onStateChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onXChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onYChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  onZChanged(handler: DslSignalHandlerValue): DelayButtonBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DelayButtonBuilder;
  layer(setup: (b: LayerBuilder) => void): DelayButtonBuilder;
}

const DELAYBUTTON_META: TypeMetadata = {
  typeName: 'DelayButton',
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

export function DelayButton(): DelayButtonBuilder {
  return createFluentBuilder('DelayButton', DELAYBUTTON_META) as unknown as DelayButtonBuilder;
}

export namespace DelayButton {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DelayButton', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DelayButton', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DelayButton', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DelayButton', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DelayButton',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('DelayButton', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DelayButton',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('DelayButton', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('DelayButton', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('DelayButton', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('DelayButton', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DelayButton', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DelayButton', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DelayButton', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DelayButton', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DelayButton', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DelayButton', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DelayButton', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DelayButton', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DelayButton', 'TransformOrigin', 'BottomRight');
  }
}
