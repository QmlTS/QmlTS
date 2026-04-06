// AUTO-GENERATED — DO NOT EDIT
// Type: TextField
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
export interface TextFieldBuilder {
  id(id: string): TextFieldBuilder;
  child(obj: QmlObjectBuilder): TextFieldBuilder;
  children(...objs: QmlObjectBuilder[]): TextFieldBuilder;

  activeFocusOnTab(value: boolean): TextFieldBuilder;
  activeFocusOnTabBind(expr: string): TextFieldBuilder;
  antialiasing(value: boolean): TextFieldBuilder;
  antialiasingBind(expr: string): TextFieldBuilder;
  baselineOffset(value: number): TextFieldBuilder;
  baselineOffsetBind(expr: string): TextFieldBuilder;
  clip(value: boolean): TextFieldBuilder;
  clipBind(expr: string): TextFieldBuilder;
  containmentMask(value: QtObjectBuilder): TextFieldBuilder;
  containmentMaskBind(expr: string): TextFieldBuilder;
  contentHeight(value: number): TextFieldBuilder;
  contentHeightBind(expr: string): TextFieldBuilder;
  contentWidth(value: number): TextFieldBuilder;
  contentWidthBind(expr: string): TextFieldBuilder;
  control(value: ItemBuilder): TextFieldBuilder;
  controlBind(expr: string): TextFieldBuilder;
  enabled(value: boolean): TextFieldBuilder;
  enabledBind(expr: string): TextFieldBuilder;
  focus(value: boolean): TextFieldBuilder;
  focusBind(expr: string): TextFieldBuilder;
  focusPolicy(value: QmlEnumToken): TextFieldBuilder;
  focusPolicyBind(expr: string): TextFieldBuilder;
  height(value: number): TextFieldBuilder;
  heightBind(expr: string): TextFieldBuilder;
  implicitHeight(value: number): TextFieldBuilder;
  implicitHeightBind(expr: string): TextFieldBuilder;
  implicitWidth(value: number): TextFieldBuilder;
  implicitWidthBind(expr: string): TextFieldBuilder;
  objectName(value: string): TextFieldBuilder;
  objectNameBind(expr: string): TextFieldBuilder;
  opacity(value: number): TextFieldBuilder;
  opacityBind(expr: string): TextFieldBuilder;
  overrideState(value: QmlEnumToken): TextFieldBuilder;
  overrideStateBind(expr: string): TextFieldBuilder;
  palette(value: PaletteBuilder): TextFieldBuilder;
  paletteBind(expr: string): TextFieldBuilder;
  parent(value: ItemBuilder): TextFieldBuilder;
  parentBind(expr: string): TextFieldBuilder;
  rotation(value: number): TextFieldBuilder;
  rotationBind(expr: string): TextFieldBuilder;
  scale(value: number): TextFieldBuilder;
  scaleBind(expr: string): TextFieldBuilder;
  smooth(value: boolean): TextFieldBuilder;
  smoothBind(expr: string): TextFieldBuilder;
  state(value: string): TextFieldBuilder;
  stateBind(expr: string): TextFieldBuilder;
  transformOrigin(value: QmlEnumToken): TextFieldBuilder;
  transformOriginBind(expr: string): TextFieldBuilder;
  transitionDuration(value: number): TextFieldBuilder;
  transitionDurationBind(expr: string): TextFieldBuilder;
  useNinePatchImage(value: boolean): TextFieldBuilder;
  useNinePatchImageBind(expr: string): TextFieldBuilder;
  visible(value: boolean): TextFieldBuilder;
  visibleBind(expr: string): TextFieldBuilder;
  width(value: number): TextFieldBuilder;
  widthBind(expr: string): TextFieldBuilder;
  x(value: number): TextFieldBuilder;
  xBind(expr: string): TextFieldBuilder;
  y(value: number): TextFieldBuilder;
  yBind(expr: string): TextFieldBuilder;
  z(value: number): TextFieldBuilder;
  zBind(expr: string): TextFieldBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onClipChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onControlChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onFontChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): TextFieldBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onXChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onYChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  onZChanged(handler: DslSignalHandlerValue): TextFieldBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TextFieldBuilder;
  layer(setup: (b: LayerBuilder) => void): TextFieldBuilder;
}

const TEXTFIELD_META: TypeMetadata = {
  typeName: 'TextField',
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

export function TextField(): TextFieldBuilder {
  return createFluentBuilder('TextField', TEXTFIELD_META) as unknown as TextFieldBuilder;
}

export namespace TextField {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TextField',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TextField',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TextField', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TextField', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TextField', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TextField', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TextField',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TextField', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('TextField', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('TextField', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('TextField', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('TextField', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TextField', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TextField', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TextField', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TextField', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TextField', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TextField', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TextField', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TextField', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TextField', 'TransformOrigin', 'BottomRight');
  }
}
