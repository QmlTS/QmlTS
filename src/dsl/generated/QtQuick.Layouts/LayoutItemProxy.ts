// AUTO-GENERATED — DO NOT EDIT
// Type: LayoutItemProxy
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { FlexboxLayoutAttachedBuilder } from './QQuickFlexboxLayoutAttached.js';
import type { LayoutAttachedBuilder } from './QQuickLayoutAttached.js';
import type { StackLayoutAttachedBuilder } from './QQuickStackLayoutAttached.js';
export interface LayoutItemProxyBuilder {
  id(id: string): LayoutItemProxyBuilder;
  child(obj: QmlObjectBuilder): LayoutItemProxyBuilder;

  activeFocusOnTab(value: boolean): LayoutItemProxyBuilder;
  activeFocusOnTabBind(expr: string): LayoutItemProxyBuilder;
  antialiasing(value: boolean): LayoutItemProxyBuilder;
  antialiasingBind(expr: string): LayoutItemProxyBuilder;
  baselineOffset(value: number): LayoutItemProxyBuilder;
  baselineOffsetBind(expr: string): LayoutItemProxyBuilder;
  clip(value: boolean): LayoutItemProxyBuilder;
  clipBind(expr: string): LayoutItemProxyBuilder;
  containmentMask(value: QtObjectBuilder): LayoutItemProxyBuilder;
  containmentMaskBind(expr: string): LayoutItemProxyBuilder;
  enabled(value: boolean): LayoutItemProxyBuilder;
  enabledBind(expr: string): LayoutItemProxyBuilder;
  focus(value: boolean): LayoutItemProxyBuilder;
  focusBind(expr: string): LayoutItemProxyBuilder;
  focusPolicy(value: QmlEnumToken): LayoutItemProxyBuilder;
  focusPolicyBind(expr: string): LayoutItemProxyBuilder;
  height(value: number): LayoutItemProxyBuilder;
  heightBind(expr: string): LayoutItemProxyBuilder;
  implicitHeight(value: number): LayoutItemProxyBuilder;
  implicitHeightBind(expr: string): LayoutItemProxyBuilder;
  implicitWidth(value: number): LayoutItemProxyBuilder;
  implicitWidthBind(expr: string): LayoutItemProxyBuilder;
  objectName(value: string): LayoutItemProxyBuilder;
  objectNameBind(expr: string): LayoutItemProxyBuilder;
  opacity(value: number): LayoutItemProxyBuilder;
  opacityBind(expr: string): LayoutItemProxyBuilder;
  palette(value: PaletteBuilder): LayoutItemProxyBuilder;
  paletteBind(expr: string): LayoutItemProxyBuilder;
  parent(value: ItemBuilder): LayoutItemProxyBuilder;
  parentBind(expr: string): LayoutItemProxyBuilder;
  rotation(value: number): LayoutItemProxyBuilder;
  rotationBind(expr: string): LayoutItemProxyBuilder;
  scale(value: number): LayoutItemProxyBuilder;
  scaleBind(expr: string): LayoutItemProxyBuilder;
  smooth(value: boolean): LayoutItemProxyBuilder;
  smoothBind(expr: string): LayoutItemProxyBuilder;
  state(value: string): LayoutItemProxyBuilder;
  stateBind(expr: string): LayoutItemProxyBuilder;
  target(value: ItemBuilder): LayoutItemProxyBuilder;
  targetBind(expr: string): LayoutItemProxyBuilder;
  transformOrigin(value: QmlEnumToken): LayoutItemProxyBuilder;
  transformOriginBind(expr: string): LayoutItemProxyBuilder;
  visible(value: boolean): LayoutItemProxyBuilder;
  visibleBind(expr: string): LayoutItemProxyBuilder;
  width(value: number): LayoutItemProxyBuilder;
  widthBind(expr: string): LayoutItemProxyBuilder;
  x(value: number): LayoutItemProxyBuilder;
  xBind(expr: string): LayoutItemProxyBuilder;
  y(value: number): LayoutItemProxyBuilder;
  yBind(expr: string): LayoutItemProxyBuilder;
  z(value: number): LayoutItemProxyBuilder;
  zBind(expr: string): LayoutItemProxyBuilder;
  onActiveFocusChanged(body: string): LayoutItemProxyBuilder;
  onActiveFocusOnTabChanged(body: string): LayoutItemProxyBuilder;
  onAntialiasingChanged(body: string): LayoutItemProxyBuilder;
  onBaselineOffsetChanged(body: string): LayoutItemProxyBuilder;
  onChildrenChanged(body: string): LayoutItemProxyBuilder;
  onChildrenRectChanged(body: string): LayoutItemProxyBuilder;
  onClipChanged(body: string): LayoutItemProxyBuilder;
  onContainmentMaskChanged(body: string): LayoutItemProxyBuilder;
  onEnabledChanged(body: string): LayoutItemProxyBuilder;
  onFocusChanged(body: string): LayoutItemProxyBuilder;
  onFocusPolicyChanged(body: string): LayoutItemProxyBuilder;
  onHeightChanged(body: string): LayoutItemProxyBuilder;
  onImplicitHeightChanged(body: string): LayoutItemProxyBuilder;
  onImplicitWidthChanged(body: string): LayoutItemProxyBuilder;
  onObjectNameChanged(body: string): LayoutItemProxyBuilder;
  onOpacityChanged(body: string): LayoutItemProxyBuilder;
  onPaletteChanged(body: string): LayoutItemProxyBuilder;
  onPaletteCreated(body: string): LayoutItemProxyBuilder;
  onParentChanged(body: string): LayoutItemProxyBuilder;
  onRotationChanged(body: string): LayoutItemProxyBuilder;
  onScaleChanged(body: string): LayoutItemProxyBuilder;
  onSmoothChanged(body: string): LayoutItemProxyBuilder;
  onStateChanged(body: string): LayoutItemProxyBuilder;
  onTargetChanged(body: string): LayoutItemProxyBuilder;
  onTransformOriginChanged(body: string): LayoutItemProxyBuilder;
  onVisibleChanged(body: string): LayoutItemProxyBuilder;
  onVisibleChildrenChanged(body: string): LayoutItemProxyBuilder;
  onWidthChanged(body: string): LayoutItemProxyBuilder;
  onWindowChanged(body: string): LayoutItemProxyBuilder;
  onXChanged(body: string): LayoutItemProxyBuilder;
  onYChanged(body: string): LayoutItemProxyBuilder;
  onZChanged(body: string): LayoutItemProxyBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): LayoutItemProxyBuilder;
  layer(setup: (b: LayerBuilder) => void): LayoutItemProxyBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): LayoutItemProxyBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): LayoutItemProxyBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): LayoutItemProxyBuilder;
}

const LAYOUTITEMPROXY_META: TypeMetadata = {
  typeName: 'LayoutItemProxy',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
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
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 0 },
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
  attached: [
    {
      methodName: 'flexboxLayout',
      attachedTypeName: 'FlexboxLayout',
      properties: [
        { name: 'alignSelf', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAlignSelfChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'layout',
      attachedTypeName: 'Layout',
      properties: [
        { name: 'alignment', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'column', hasValue: true, hasBinding: true },
        { name: 'columnSpan', hasValue: true, hasBinding: true },
        { name: 'fillHeight', hasValue: true, hasBinding: true },
        { name: 'fillWidth', hasValue: true, hasBinding: true },
        { name: 'horizontalStretchFactor', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'maximumHeight', hasValue: true, hasBinding: true },
        { name: 'maximumWidth', hasValue: true, hasBinding: true },
        { name: 'minimumHeight', hasValue: true, hasBinding: true },
        { name: 'minimumWidth', hasValue: true, hasBinding: true },
        { name: 'preferredHeight', hasValue: true, hasBinding: true },
        { name: 'preferredWidth', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'row', hasValue: true, hasBinding: true },
        { name: 'rowSpan', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'useDefaultSizePolicy', hasValue: true, hasBinding: true },
        { name: 'verticalStretchFactor', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAlignmentChanged', paramCount: 0 },
        { handlerName: 'onBottomMarginChanged', paramCount: 0 },
        { handlerName: 'onColumnChanged', paramCount: 0 },
        { handlerName: 'onColumnSpanChanged', paramCount: 0 },
        { handlerName: 'onFillHeightChanged', paramCount: 0 },
        { handlerName: 'onFillWidthChanged', paramCount: 0 },
        { handlerName: 'onHorizontalStretchFactorChanged', paramCount: 0 },
        { handlerName: 'onLeftMarginChanged', paramCount: 0 },
        { handlerName: 'onMarginsChanged', paramCount: 0 },
        { handlerName: 'onMaximumHeightChanged', paramCount: 0 },
        { handlerName: 'onMaximumWidthChanged', paramCount: 0 },
        { handlerName: 'onMinimumHeightChanged', paramCount: 0 },
        { handlerName: 'onMinimumWidthChanged', paramCount: 0 },
        { handlerName: 'onPreferredHeightChanged', paramCount: 0 },
        { handlerName: 'onPreferredWidthChanged', paramCount: 0 },
        { handlerName: 'onRightMarginChanged', paramCount: 0 },
        { handlerName: 'onRowChanged', paramCount: 0 },
        { handlerName: 'onRowSpanChanged', paramCount: 0 },
        { handlerName: 'onTopMarginChanged', paramCount: 0 },
        { handlerName: 'onUseDefaultSizePolicyChanged', paramCount: 0 },
        { handlerName: 'onVerticalStretchFactorChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'stackLayout',
      attachedTypeName: 'StackLayout',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onLayoutChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
  defaultProperty: 'data',
};

export function LayoutItemProxy(): LayoutItemProxyBuilder {
  return createFluentBuilder('LayoutItemProxy', LAYOUTITEMPROXY_META) as unknown as LayoutItemProxyBuilder;
}

export namespace LayoutItemProxy {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('LayoutItemProxy', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('LayoutItemProxy', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('LayoutItemProxy', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('LayoutItemProxy', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('LayoutItemProxy', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('LayoutItemProxy', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('LayoutItemProxy', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('LayoutItemProxy', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('LayoutItemProxy', 'TransformOrigin', 'BottomRight');
  }
}
