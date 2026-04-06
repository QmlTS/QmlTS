// AUTO-GENERATED — DO NOT EDIT
// Type: Ripple
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
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
export interface RippleBuilder {
  id(id: string): RippleBuilder;
  child(obj: QmlObjectBuilder): RippleBuilder;
  children(...objs: QmlObjectBuilder[]): RippleBuilder;

  active(value: boolean): RippleBuilder;
  activeBind(expr: string): RippleBuilder;
  activeFocusOnTab(value: boolean): RippleBuilder;
  activeFocusOnTabBind(expr: string): RippleBuilder;
  anchor(value: ItemBuilder): RippleBuilder;
  anchorBind(expr: string): RippleBuilder;
  antialiasing(value: boolean): RippleBuilder;
  antialiasingBind(expr: string): RippleBuilder;
  baselineOffset(value: number): RippleBuilder;
  baselineOffsetBind(expr: string): RippleBuilder;
  clip(value: boolean): RippleBuilder;
  clipBind(expr: string): RippleBuilder;
  clipRadius(value: number): RippleBuilder;
  clipRadiusBind(expr: string): RippleBuilder;
  color(value: QmlColor): RippleBuilder;
  colorBind(expr: string): RippleBuilder;
  containmentMask(value: QtObjectBuilder): RippleBuilder;
  containmentMaskBind(expr: string): RippleBuilder;
  enabled(value: boolean): RippleBuilder;
  enabledBind(expr: string): RippleBuilder;
  focus(value: boolean): RippleBuilder;
  focusBind(expr: string): RippleBuilder;
  focusPolicy(value: QmlEnumToken): RippleBuilder;
  focusPolicyBind(expr: string): RippleBuilder;
  height(value: number): RippleBuilder;
  heightBind(expr: string): RippleBuilder;
  implicitHeight(value: number): RippleBuilder;
  implicitHeightBind(expr: string): RippleBuilder;
  implicitWidth(value: number): RippleBuilder;
  implicitWidthBind(expr: string): RippleBuilder;
  objectName(value: string): RippleBuilder;
  objectNameBind(expr: string): RippleBuilder;
  opacity(value: number): RippleBuilder;
  opacityBind(expr: string): RippleBuilder;
  palette(value: PaletteBuilder): RippleBuilder;
  paletteBind(expr: string): RippleBuilder;
  parent(value: ItemBuilder): RippleBuilder;
  parentBind(expr: string): RippleBuilder;
  pressed(value: boolean): RippleBuilder;
  pressedBind(expr: string): RippleBuilder;
  rotation(value: number): RippleBuilder;
  rotationBind(expr: string): RippleBuilder;
  scale(value: number): RippleBuilder;
  scaleBind(expr: string): RippleBuilder;
  smooth(value: boolean): RippleBuilder;
  smoothBind(expr: string): RippleBuilder;
  state(value: string): RippleBuilder;
  stateBind(expr: string): RippleBuilder;
  transformOrigin(value: QmlEnumToken): RippleBuilder;
  transformOriginBind(expr: string): RippleBuilder;
  trigger(value: QmlEnumToken): RippleBuilder;
  triggerBind(expr: string): RippleBuilder;
  visible(value: boolean): RippleBuilder;
  visibleBind(expr: string): RippleBuilder;
  width(value: number): RippleBuilder;
  widthBind(expr: string): RippleBuilder;
  x(value: number): RippleBuilder;
  xBind(expr: string): RippleBuilder;
  y(value: number): RippleBuilder;
  yBind(expr: string): RippleBuilder;
  z(value: number): RippleBuilder;
  zBind(expr: string): RippleBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onClipChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): RippleBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onStateChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onXChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onYChanged(handler: DslSignalHandlerValue): RippleBuilder;
  onZChanged(handler: DslSignalHandlerValue): RippleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): RippleBuilder;
  layer(setup: (b: LayerBuilder) => void): RippleBuilder;
}

const RIPPLE_META: TypeMetadata = {
  typeName: 'Ripple',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'anchor', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'clipRadius', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
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
    { name: 'pressed', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'trigger', hasValue: true, hasBinding: true },
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
  defaultProperty: 'data',
};

export function Ripple(): RippleBuilder {
  return createFluentBuilder('Ripple', RIPPLE_META) as unknown as RippleBuilder;
}

export namespace Ripple {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Ripple',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Ripple',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Ripple', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Ripple', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Ripple', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Ripple', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Ripple', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Ripple', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Ripple',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Ripple', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Ripple', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Ripple', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Ripple', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Ripple', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Ripple', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Ripple', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Ripple', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Ripple', 'TransformOrigin', 'BottomRight');
  }
  export namespace Trigger {
    export const Press = createEnumToken('Ripple', 'Trigger', 'Press');
    export const Release = createEnumToken('Ripple', 'Trigger', 'Release');
  }
}
