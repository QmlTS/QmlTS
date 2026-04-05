// AUTO-GENERATED — DO NOT EDIT
// Type: DoubleSpinBox
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface DoubleSpinBoxBuilder {
  id(id: string): DoubleSpinBoxBuilder;
  child(obj: QmlObjectBuilder): DoubleSpinBoxBuilder;

  activeFocusOnTab(value: boolean): DoubleSpinBoxBuilder;
  activeFocusOnTabBind(expr: string): DoubleSpinBoxBuilder;
  antialiasing(value: boolean): DoubleSpinBoxBuilder;
  antialiasingBind(expr: string): DoubleSpinBoxBuilder;
  baselineOffset(value: number): DoubleSpinBoxBuilder;
  baselineOffsetBind(expr: string): DoubleSpinBoxBuilder;
  clip(value: boolean): DoubleSpinBoxBuilder;
  clipBind(expr: string): DoubleSpinBoxBuilder;
  containmentMask(value: QtObjectBuilder): DoubleSpinBoxBuilder;
  containmentMaskBind(expr: string): DoubleSpinBoxBuilder;
  contentHeight(value: number): DoubleSpinBoxBuilder;
  contentHeightBind(expr: string): DoubleSpinBoxBuilder;
  contentWidth(value: number): DoubleSpinBoxBuilder;
  contentWidthBind(expr: string): DoubleSpinBoxBuilder;
  control(value: ItemBuilder): DoubleSpinBoxBuilder;
  controlBind(expr: string): DoubleSpinBoxBuilder;
  enabled(value: boolean): DoubleSpinBoxBuilder;
  enabledBind(expr: string): DoubleSpinBoxBuilder;
  focus(value: boolean): DoubleSpinBoxBuilder;
  focusBind(expr: string): DoubleSpinBoxBuilder;
  focusPolicy(value: QmlEnumToken): DoubleSpinBoxBuilder;
  focusPolicyBind(expr: string): DoubleSpinBoxBuilder;
  height(value: number): DoubleSpinBoxBuilder;
  heightBind(expr: string): DoubleSpinBoxBuilder;
  implicitHeight(value: number): DoubleSpinBoxBuilder;
  implicitHeightBind(expr: string): DoubleSpinBoxBuilder;
  implicitWidth(value: number): DoubleSpinBoxBuilder;
  implicitWidthBind(expr: string): DoubleSpinBoxBuilder;
  objectName(value: string): DoubleSpinBoxBuilder;
  objectNameBind(expr: string): DoubleSpinBoxBuilder;
  opacity(value: number): DoubleSpinBoxBuilder;
  opacityBind(expr: string): DoubleSpinBoxBuilder;
  overrideState(value: QmlEnumToken): DoubleSpinBoxBuilder;
  overrideStateBind(expr: string): DoubleSpinBoxBuilder;
  palette(value: PaletteBuilder): DoubleSpinBoxBuilder;
  paletteBind(expr: string): DoubleSpinBoxBuilder;
  parent(value: ItemBuilder): DoubleSpinBoxBuilder;
  parentBind(expr: string): DoubleSpinBoxBuilder;
  rotation(value: number): DoubleSpinBoxBuilder;
  rotationBind(expr: string): DoubleSpinBoxBuilder;
  scale(value: number): DoubleSpinBoxBuilder;
  scaleBind(expr: string): DoubleSpinBoxBuilder;
  smooth(value: boolean): DoubleSpinBoxBuilder;
  smoothBind(expr: string): DoubleSpinBoxBuilder;
  state(value: string): DoubleSpinBoxBuilder;
  stateBind(expr: string): DoubleSpinBoxBuilder;
  subControl(value: QmlEnumToken): DoubleSpinBoxBuilder;
  subControlBind(expr: string): DoubleSpinBoxBuilder;
  transformOrigin(value: QmlEnumToken): DoubleSpinBoxBuilder;
  transformOriginBind(expr: string): DoubleSpinBoxBuilder;
  transitionDuration(value: number): DoubleSpinBoxBuilder;
  transitionDurationBind(expr: string): DoubleSpinBoxBuilder;
  useNinePatchImage(value: boolean): DoubleSpinBoxBuilder;
  useNinePatchImageBind(expr: string): DoubleSpinBoxBuilder;
  visible(value: boolean): DoubleSpinBoxBuilder;
  visibleBind(expr: string): DoubleSpinBoxBuilder;
  width(value: number): DoubleSpinBoxBuilder;
  widthBind(expr: string): DoubleSpinBoxBuilder;
  x(value: number): DoubleSpinBoxBuilder;
  xBind(expr: string): DoubleSpinBoxBuilder;
  y(value: number): DoubleSpinBoxBuilder;
  yBind(expr: string): DoubleSpinBoxBuilder;
  z(value: number): DoubleSpinBoxBuilder;
  zBind(expr: string): DoubleSpinBoxBuilder;
  onActiveFocusChanged(body: string): DoubleSpinBoxBuilder;
  onActiveFocusOnTabChanged(body: string): DoubleSpinBoxBuilder;
  onAntialiasingChanged(body: string): DoubleSpinBoxBuilder;
  onBaselineOffsetChanged(body: string): DoubleSpinBoxBuilder;
  onChildrenChanged(body: string): DoubleSpinBoxBuilder;
  onChildrenRectChanged(body: string): DoubleSpinBoxBuilder;
  onClipChanged(body: string): DoubleSpinBoxBuilder;
  onContainmentMaskChanged(body: string): DoubleSpinBoxBuilder;
  onContentPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onControlChanged(body: string): DoubleSpinBoxBuilder;
  onEnabledChanged(body: string): DoubleSpinBoxBuilder;
  onFocusChanged(body: string): DoubleSpinBoxBuilder;
  onFocusPolicyChanged(body: string): DoubleSpinBoxBuilder;
  onFontChanged(body: string): DoubleSpinBoxBuilder;
  onHeightChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitHeightChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitWidthChanged(body: string): DoubleSpinBoxBuilder;
  onLayoutMarginsChanged(body: string): DoubleSpinBoxBuilder;
  onMinimumSizeChanged(body: string): DoubleSpinBoxBuilder;
  onObjectNameChanged(body: string): DoubleSpinBoxBuilder;
  onOpacityChanged(body: string): DoubleSpinBoxBuilder;
  onPaletteChanged(body: string): DoubleSpinBoxBuilder;
  onPaletteCreated(body: string): DoubleSpinBoxBuilder;
  onParentChanged(body: string): DoubleSpinBoxBuilder;
  onRotationChanged(body: string): DoubleSpinBoxBuilder;
  onScaleChanged(body: string): DoubleSpinBoxBuilder;
  onSmoothChanged(body: string): DoubleSpinBoxBuilder;
  onStateChanged(body: string): DoubleSpinBoxBuilder;
  onTransformOriginChanged(body: string): DoubleSpinBoxBuilder;
  onVisibleChanged(body: string): DoubleSpinBoxBuilder;
  onVisibleChildrenChanged(body: string): DoubleSpinBoxBuilder;
  onWidthChanged(body: string): DoubleSpinBoxBuilder;
  onWindowChanged(body: string): DoubleSpinBoxBuilder;
  onXChanged(body: string): DoubleSpinBoxBuilder;
  onYChanged(body: string): DoubleSpinBoxBuilder;
  onZChanged(body: string): DoubleSpinBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DoubleSpinBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): DoubleSpinBoxBuilder;
}

const DOUBLESPINBOX_META: TypeMetadata = {
  typeName: 'DoubleSpinBox',
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
    { name: 'subControl', hasValue: true, hasBinding: true },
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

export function DoubleSpinBox(): DoubleSpinBoxBuilder {
  return createFluentBuilder(
    'DoubleSpinBox',
    DOUBLESPINBOX_META,
  ) as unknown as DoubleSpinBoxBuilder;
}

export namespace DoubleSpinBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DoubleSpinBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DoubleSpinBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DoubleSpinBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DoubleSpinBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DoubleSpinBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DoubleSpinBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DoubleSpinBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('DoubleSpinBox', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('DoubleSpinBox', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('DoubleSpinBox', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('DoubleSpinBox', 'OverrideState', 'AlwaysSunken');
  }
  export namespace SubControl {
    export const Frame = createEnumToken('DoubleSpinBox', 'SubControl', 'Frame');
    export const Up = createEnumToken('DoubleSpinBox', 'SubControl', 'Up');
    export const Down = createEnumToken('DoubleSpinBox', 'SubControl', 'Down');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'BottomRight');
  }
}
