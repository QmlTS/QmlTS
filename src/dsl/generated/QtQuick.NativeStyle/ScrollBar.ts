// AUTO-GENERATED — DO NOT EDIT
// Type: ScrollBar
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface ScrollBarBuilder {
  id(id: string): ScrollBarBuilder;
  child(obj: QmlObjectBuilder): ScrollBarBuilder;

  activeFocusOnTab(value: boolean): ScrollBarBuilder;
  activeFocusOnTabBind(expr: string): ScrollBarBuilder;
  antialiasing(value: boolean): ScrollBarBuilder;
  antialiasingBind(expr: string): ScrollBarBuilder;
  baselineOffset(value: number): ScrollBarBuilder;
  baselineOffsetBind(expr: string): ScrollBarBuilder;
  clip(value: boolean): ScrollBarBuilder;
  clipBind(expr: string): ScrollBarBuilder;
  containmentMask(value: QtObjectBuilder): ScrollBarBuilder;
  containmentMaskBind(expr: string): ScrollBarBuilder;
  contentHeight(value: number): ScrollBarBuilder;
  contentHeightBind(expr: string): ScrollBarBuilder;
  contentWidth(value: number): ScrollBarBuilder;
  contentWidthBind(expr: string): ScrollBarBuilder;
  control(value: ItemBuilder): ScrollBarBuilder;
  controlBind(expr: string): ScrollBarBuilder;
  enabled(value: boolean): ScrollBarBuilder;
  enabledBind(expr: string): ScrollBarBuilder;
  focus(value: boolean): ScrollBarBuilder;
  focusBind(expr: string): ScrollBarBuilder;
  focusPolicy(value: QmlEnumToken): ScrollBarBuilder;
  focusPolicyBind(expr: string): ScrollBarBuilder;
  height(value: number): ScrollBarBuilder;
  heightBind(expr: string): ScrollBarBuilder;
  implicitHeight(value: number): ScrollBarBuilder;
  implicitHeightBind(expr: string): ScrollBarBuilder;
  implicitWidth(value: number): ScrollBarBuilder;
  implicitWidthBind(expr: string): ScrollBarBuilder;
  objectName(value: string): ScrollBarBuilder;
  objectNameBind(expr: string): ScrollBarBuilder;
  opacity(value: number): ScrollBarBuilder;
  opacityBind(expr: string): ScrollBarBuilder;
  overrideState(value: QmlEnumToken): ScrollBarBuilder;
  overrideStateBind(expr: string): ScrollBarBuilder;
  palette(value: PaletteBuilder): ScrollBarBuilder;
  paletteBind(expr: string): ScrollBarBuilder;
  parent(value: ItemBuilder): ScrollBarBuilder;
  parentBind(expr: string): ScrollBarBuilder;
  rotation(value: number): ScrollBarBuilder;
  rotationBind(expr: string): ScrollBarBuilder;
  scale(value: number): ScrollBarBuilder;
  scaleBind(expr: string): ScrollBarBuilder;
  smooth(value: boolean): ScrollBarBuilder;
  smoothBind(expr: string): ScrollBarBuilder;
  state(value: string): ScrollBarBuilder;
  stateBind(expr: string): ScrollBarBuilder;
  subControl(value: QmlEnumToken): ScrollBarBuilder;
  subControlBind(expr: string): ScrollBarBuilder;
  transformOrigin(value: QmlEnumToken): ScrollBarBuilder;
  transformOriginBind(expr: string): ScrollBarBuilder;
  transitionDuration(value: number): ScrollBarBuilder;
  transitionDurationBind(expr: string): ScrollBarBuilder;
  useNinePatchImage(value: boolean): ScrollBarBuilder;
  useNinePatchImageBind(expr: string): ScrollBarBuilder;
  visible(value: boolean): ScrollBarBuilder;
  visibleBind(expr: string): ScrollBarBuilder;
  width(value: number): ScrollBarBuilder;
  widthBind(expr: string): ScrollBarBuilder;
  x(value: number): ScrollBarBuilder;
  xBind(expr: string): ScrollBarBuilder;
  y(value: number): ScrollBarBuilder;
  yBind(expr: string): ScrollBarBuilder;
  z(value: number): ScrollBarBuilder;
  zBind(expr: string): ScrollBarBuilder;
  onActiveFocusChanged(body: string): ScrollBarBuilder;
  onActiveFocusOnTabChanged(body: string): ScrollBarBuilder;
  onAntialiasingChanged(body: string): ScrollBarBuilder;
  onBaselineOffsetChanged(body: string): ScrollBarBuilder;
  onChildrenChanged(body: string): ScrollBarBuilder;
  onChildrenRectChanged(body: string): ScrollBarBuilder;
  onClipChanged(body: string): ScrollBarBuilder;
  onContainmentMaskChanged(body: string): ScrollBarBuilder;
  onContentPaddingChanged(body: string): ScrollBarBuilder;
  onControlChanged(body: string): ScrollBarBuilder;
  onEnabledChanged(body: string): ScrollBarBuilder;
  onFocusChanged(body: string): ScrollBarBuilder;
  onFocusPolicyChanged(body: string): ScrollBarBuilder;
  onFontChanged(body: string): ScrollBarBuilder;
  onHeightChanged(body: string): ScrollBarBuilder;
  onImplicitHeightChanged(body: string): ScrollBarBuilder;
  onImplicitWidthChanged(body: string): ScrollBarBuilder;
  onLayoutMarginsChanged(body: string): ScrollBarBuilder;
  onMinimumSizeChanged(body: string): ScrollBarBuilder;
  onObjectNameChanged(body: string): ScrollBarBuilder;
  onOpacityChanged(body: string): ScrollBarBuilder;
  onPaletteChanged(body: string): ScrollBarBuilder;
  onPaletteCreated(body: string): ScrollBarBuilder;
  onParentChanged(body: string): ScrollBarBuilder;
  onRotationChanged(body: string): ScrollBarBuilder;
  onScaleChanged(body: string): ScrollBarBuilder;
  onSmoothChanged(body: string): ScrollBarBuilder;
  onStateChanged(body: string): ScrollBarBuilder;
  onTransformOriginChanged(body: string): ScrollBarBuilder;
  onVisibleChanged(body: string): ScrollBarBuilder;
  onVisibleChildrenChanged(body: string): ScrollBarBuilder;
  onWidthChanged(body: string): ScrollBarBuilder;
  onWindowChanged(body: string): ScrollBarBuilder;
  onXChanged(body: string): ScrollBarBuilder;
  onYChanged(body: string): ScrollBarBuilder;
  onZChanged(body: string): ScrollBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ScrollBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ScrollBarBuilder;
}

const SCROLLBAR_META: TypeMetadata = {
  typeName: 'ScrollBar',
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

export function ScrollBar(): ScrollBarBuilder {
  return createFluentBuilder('ScrollBar', SCROLLBAR_META) as unknown as ScrollBarBuilder;
}

export namespace ScrollBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ScrollBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ScrollBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ScrollBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ScrollBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ScrollBar',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ScrollBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ScrollBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('ScrollBar', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('ScrollBar', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('ScrollBar', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('ScrollBar', 'OverrideState', 'AlwaysSunken');
  }
  export namespace SubControl {
    export const Groove = createEnumToken('ScrollBar', 'SubControl', 'Groove');
    export const Handle = createEnumToken('ScrollBar', 'SubControl', 'Handle');
    export const AddLine = createEnumToken('ScrollBar', 'SubControl', 'AddLine');
    export const SubLine = createEnumToken('ScrollBar', 'SubControl', 'SubLine');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ScrollBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ScrollBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ScrollBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ScrollBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ScrollBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ScrollBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ScrollBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ScrollBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ScrollBar', 'TransformOrigin', 'BottomRight');
  }
}
