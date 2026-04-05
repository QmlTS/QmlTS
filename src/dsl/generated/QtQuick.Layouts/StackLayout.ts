// AUTO-GENERATED — DO NOT EDIT
// Type: StackLayout
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
export interface StackLayoutBuilder {
  id(id: string): StackLayoutBuilder;
  child(obj: QmlObjectBuilder): StackLayoutBuilder;

  activeFocusOnTab(value: boolean): StackLayoutBuilder;
  activeFocusOnTabBind(expr: string): StackLayoutBuilder;
  antialiasing(value: boolean): StackLayoutBuilder;
  antialiasingBind(expr: string): StackLayoutBuilder;
  baselineOffset(value: number): StackLayoutBuilder;
  baselineOffsetBind(expr: string): StackLayoutBuilder;
  clip(value: boolean): StackLayoutBuilder;
  clipBind(expr: string): StackLayoutBuilder;
  containmentMask(value: QtObjectBuilder): StackLayoutBuilder;
  containmentMaskBind(expr: string): StackLayoutBuilder;
  currentIndex(value: number): StackLayoutBuilder;
  currentIndexBind(expr: string): StackLayoutBuilder;
  enabled(value: boolean): StackLayoutBuilder;
  enabledBind(expr: string): StackLayoutBuilder;
  focus(value: boolean): StackLayoutBuilder;
  focusBind(expr: string): StackLayoutBuilder;
  focusPolicy(value: QmlEnumToken): StackLayoutBuilder;
  focusPolicyBind(expr: string): StackLayoutBuilder;
  height(value: number): StackLayoutBuilder;
  heightBind(expr: string): StackLayoutBuilder;
  implicitHeight(value: number): StackLayoutBuilder;
  implicitHeightBind(expr: string): StackLayoutBuilder;
  implicitWidth(value: number): StackLayoutBuilder;
  implicitWidthBind(expr: string): StackLayoutBuilder;
  objectName(value: string): StackLayoutBuilder;
  objectNameBind(expr: string): StackLayoutBuilder;
  opacity(value: number): StackLayoutBuilder;
  opacityBind(expr: string): StackLayoutBuilder;
  palette(value: PaletteBuilder): StackLayoutBuilder;
  paletteBind(expr: string): StackLayoutBuilder;
  parent(value: ItemBuilder): StackLayoutBuilder;
  parentBind(expr: string): StackLayoutBuilder;
  rotation(value: number): StackLayoutBuilder;
  rotationBind(expr: string): StackLayoutBuilder;
  scale(value: number): StackLayoutBuilder;
  scaleBind(expr: string): StackLayoutBuilder;
  smooth(value: boolean): StackLayoutBuilder;
  smoothBind(expr: string): StackLayoutBuilder;
  state(value: string): StackLayoutBuilder;
  stateBind(expr: string): StackLayoutBuilder;
  transformOrigin(value: QmlEnumToken): StackLayoutBuilder;
  transformOriginBind(expr: string): StackLayoutBuilder;
  visible(value: boolean): StackLayoutBuilder;
  visibleBind(expr: string): StackLayoutBuilder;
  width(value: number): StackLayoutBuilder;
  widthBind(expr: string): StackLayoutBuilder;
  x(value: number): StackLayoutBuilder;
  xBind(expr: string): StackLayoutBuilder;
  y(value: number): StackLayoutBuilder;
  yBind(expr: string): StackLayoutBuilder;
  z(value: number): StackLayoutBuilder;
  zBind(expr: string): StackLayoutBuilder;
  onActiveFocusChanged(body: string): StackLayoutBuilder;
  onActiveFocusOnTabChanged(body: string): StackLayoutBuilder;
  onAntialiasingChanged(body: string): StackLayoutBuilder;
  onBaselineOffsetChanged(body: string): StackLayoutBuilder;
  onChildrenChanged(body: string): StackLayoutBuilder;
  onChildrenRectChanged(body: string): StackLayoutBuilder;
  onClipChanged(body: string): StackLayoutBuilder;
  onContainmentMaskChanged(body: string): StackLayoutBuilder;
  onCountChanged(body: string): StackLayoutBuilder;
  onCurrentIndexChanged(body: string): StackLayoutBuilder;
  onEnabledChanged(body: string): StackLayoutBuilder;
  onFocusChanged(body: string): StackLayoutBuilder;
  onFocusPolicyChanged(body: string): StackLayoutBuilder;
  onHeightChanged(body: string): StackLayoutBuilder;
  onImplicitHeightChanged(body: string): StackLayoutBuilder;
  onImplicitWidthChanged(body: string): StackLayoutBuilder;
  onObjectNameChanged(body: string): StackLayoutBuilder;
  onOpacityChanged(body: string): StackLayoutBuilder;
  onPaletteChanged(body: string): StackLayoutBuilder;
  onPaletteCreated(body: string): StackLayoutBuilder;
  onParentChanged(body: string): StackLayoutBuilder;
  onRotationChanged(body: string): StackLayoutBuilder;
  onScaleChanged(body: string): StackLayoutBuilder;
  onSmoothChanged(body: string): StackLayoutBuilder;
  onStateChanged(body: string): StackLayoutBuilder;
  onTransformOriginChanged(body: string): StackLayoutBuilder;
  onVisibleChanged(body: string): StackLayoutBuilder;
  onVisibleChildrenChanged(body: string): StackLayoutBuilder;
  onWidthChanged(body: string): StackLayoutBuilder;
  onWindowChanged(body: string): StackLayoutBuilder;
  onXChanged(body: string): StackLayoutBuilder;
  onYChanged(body: string): StackLayoutBuilder;
  onZChanged(body: string): StackLayoutBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): StackLayoutBuilder;
  layer(setup: (b: LayerBuilder) => void): StackLayoutBuilder;
  flexboxLayout(setup: (b: FlexboxLayoutAttachedBuilder) => void): StackLayoutBuilder;
  layout(setup: (b: LayoutAttachedBuilder) => void): StackLayoutBuilder;
  stackLayout(setup: (b: StackLayoutAttachedBuilder) => void): StackLayoutBuilder;
}

const STACKLAYOUT_META: TypeMetadata = {
  typeName: 'StackLayout',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
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
};

export function StackLayout(): StackLayoutBuilder {
  return createFluentBuilder('StackLayout', STACKLAYOUT_META) as unknown as StackLayoutBuilder;
}

export namespace StackLayout {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('StackLayout', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('StackLayout', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('StackLayout', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('StackLayout', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('StackLayout', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('StackLayout', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('StackLayout', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('StackLayout', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('StackLayout', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('StackLayout', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('StackLayout', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace SizePolicy {
    export const SizePolicyImplicit = createEnumToken('StackLayout', 'SizePolicy', 'SizePolicyImplicit');
    export const SizePolicyExplicit = createEnumToken('StackLayout', 'SizePolicy', 'SizePolicyExplicit');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('StackLayout', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('StackLayout', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('StackLayout', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('StackLayout', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('StackLayout', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('StackLayout', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('StackLayout', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('StackLayout', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('StackLayout', 'TransformOrigin', 'BottomRight');
  }
}
