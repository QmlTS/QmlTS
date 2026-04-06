// AUTO-GENERATED — DO NOT EDIT
// Type: DelegateContainer
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface DelegateContainerBuilder {
  id(id: string): DelegateContainerBuilder;
  child(obj: QmlObjectBuilder): DelegateContainerBuilder;
  children(...objs: QmlObjectBuilder[]): DelegateContainerBuilder;

  activeFocusOnTab(value: boolean): DelegateContainerBuilder;
  activeFocusOnTabBind(expr: string): DelegateContainerBuilder;
  antialiasing(value: boolean): DelegateContainerBuilder;
  antialiasingBind(expr: string): DelegateContainerBuilder;
  baselineOffset(value: number): DelegateContainerBuilder;
  baselineOffsetBind(expr: string): DelegateContainerBuilder;
  clip(value: boolean): DelegateContainerBuilder;
  clipBind(expr: string): DelegateContainerBuilder;
  containmentMask(value: QtObjectBuilder): DelegateContainerBuilder;
  containmentMaskBind(expr: string): DelegateContainerBuilder;
  delegateStyle(value: QmlValue): DelegateContainerBuilder;
  delegateStyleBind(expr: string): DelegateContainerBuilder;
  enabled(value: boolean): DelegateContainerBuilder;
  enabledBind(expr: string): DelegateContainerBuilder;
  focus(value: boolean): DelegateContainerBuilder;
  focusBind(expr: string): DelegateContainerBuilder;
  focusPolicy(value: QmlEnumToken): DelegateContainerBuilder;
  focusPolicyBind(expr: string): DelegateContainerBuilder;
  height(value: number): DelegateContainerBuilder;
  heightBind(expr: string): DelegateContainerBuilder;
  implicitHeight(value: number): DelegateContainerBuilder;
  implicitHeightBind(expr: string): DelegateContainerBuilder;
  implicitWidth(value: number): DelegateContainerBuilder;
  implicitWidthBind(expr: string): DelegateContainerBuilder;
  objectName(value: string): DelegateContainerBuilder;
  objectNameBind(expr: string): DelegateContainerBuilder;
  opacity(value: number): DelegateContainerBuilder;
  opacityBind(expr: string): DelegateContainerBuilder;
  palette(value: PaletteBuilder): DelegateContainerBuilder;
  paletteBind(expr: string): DelegateContainerBuilder;
  parent(value: ItemBuilder): DelegateContainerBuilder;
  parentBind(expr: string): DelegateContainerBuilder;
  quickControl(value: QtObjectBuilder): DelegateContainerBuilder;
  quickControlBind(expr: string): DelegateContainerBuilder;
  rotation(value: number): DelegateContainerBuilder;
  rotationBind(expr: string): DelegateContainerBuilder;
  scale(value: number): DelegateContainerBuilder;
  scaleBind(expr: string): DelegateContainerBuilder;
  smooth(value: boolean): DelegateContainerBuilder;
  smoothBind(expr: string): DelegateContainerBuilder;
  state(value: string): DelegateContainerBuilder;
  stateBind(expr: string): DelegateContainerBuilder;
  transformOrigin(value: QmlEnumToken): DelegateContainerBuilder;
  transformOriginBind(expr: string): DelegateContainerBuilder;
  visible(value: boolean): DelegateContainerBuilder;
  visibleBind(expr: string): DelegateContainerBuilder;
  width(value: number): DelegateContainerBuilder;
  widthBind(expr: string): DelegateContainerBuilder;
  x(value: number): DelegateContainerBuilder;
  xBind(expr: string): DelegateContainerBuilder;
  y(value: number): DelegateContainerBuilder;
  yBind(expr: string): DelegateContainerBuilder;
  z(value: number): DelegateContainerBuilder;
  zBind(expr: string): DelegateContainerBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onClipChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onDelegateInstanceChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onDelegateStyleChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onQuickControlChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onStateChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onUsingDefaultDelegateChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onXChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onYChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  onZChanged(handler: DslSignalHandlerValue): DelegateContainerBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DelegateContainerBuilder;
  layer(setup: (b: LayerBuilder) => void): DelegateContainerBuilder;
}

const DELEGATECONTAINER_META: TypeMetadata = {
  typeName: 'DelegateContainer',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'delegateStyle', hasValue: true, hasBinding: true },
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
    { name: 'quickControl', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDelegateInstanceChanged', paramCount: 0 },
    { handlerName: 'onDelegateStyleChanged', paramCount: 0 },
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
    { handlerName: 'onQuickControlChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onUsingDefaultDelegateChanged', paramCount: 0 },
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
  defaultProperty: 'data',
};

export function DelegateContainer(): DelegateContainerBuilder {
  return createFluentBuilder(
    'DelegateContainer',
    DELEGATECONTAINER_META,
  ) as unknown as DelegateContainerBuilder;
}

export namespace DelegateContainer {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DelegateContainer',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DelegateContainer',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'DelegateContainer',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken('DelegateContainer', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken(
      'DelegateContainer',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('DelegateContainer', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DelegateContainer',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DelegateContainer',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DelegateContainer', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DelegateContainer', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DelegateContainer', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DelegateContainer', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DelegateContainer', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DelegateContainer', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DelegateContainer', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DelegateContainer', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'DelegateContainer',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
