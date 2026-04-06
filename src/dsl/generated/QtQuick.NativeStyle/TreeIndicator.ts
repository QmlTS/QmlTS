// AUTO-GENERATED — DO NOT EDIT
// Type: TreeIndicator
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
export interface TreeIndicatorBuilder {
  id(id: string): TreeIndicatorBuilder;
  child(obj: QmlObjectBuilder): TreeIndicatorBuilder;
  children(...objs: QmlObjectBuilder[]): TreeIndicatorBuilder;

  activeFocusOnTab(value: boolean): TreeIndicatorBuilder;
  activeFocusOnTabBind(expr: string): TreeIndicatorBuilder;
  antialiasing(value: boolean): TreeIndicatorBuilder;
  antialiasingBind(expr: string): TreeIndicatorBuilder;
  baselineOffset(value: number): TreeIndicatorBuilder;
  baselineOffsetBind(expr: string): TreeIndicatorBuilder;
  clip(value: boolean): TreeIndicatorBuilder;
  clipBind(expr: string): TreeIndicatorBuilder;
  containmentMask(value: QtObjectBuilder): TreeIndicatorBuilder;
  containmentMaskBind(expr: string): TreeIndicatorBuilder;
  contentHeight(value: number): TreeIndicatorBuilder;
  contentHeightBind(expr: string): TreeIndicatorBuilder;
  contentWidth(value: number): TreeIndicatorBuilder;
  contentWidthBind(expr: string): TreeIndicatorBuilder;
  control(value: ItemBuilder): TreeIndicatorBuilder;
  controlBind(expr: string): TreeIndicatorBuilder;
  enabled(value: boolean): TreeIndicatorBuilder;
  enabledBind(expr: string): TreeIndicatorBuilder;
  focus(value: boolean): TreeIndicatorBuilder;
  focusBind(expr: string): TreeIndicatorBuilder;
  focusPolicy(value: QmlEnumToken): TreeIndicatorBuilder;
  focusPolicyBind(expr: string): TreeIndicatorBuilder;
  height(value: number): TreeIndicatorBuilder;
  heightBind(expr: string): TreeIndicatorBuilder;
  implicitHeight(value: number): TreeIndicatorBuilder;
  implicitHeightBind(expr: string): TreeIndicatorBuilder;
  implicitWidth(value: number): TreeIndicatorBuilder;
  implicitWidthBind(expr: string): TreeIndicatorBuilder;
  objectName(value: string): TreeIndicatorBuilder;
  objectNameBind(expr: string): TreeIndicatorBuilder;
  opacity(value: number): TreeIndicatorBuilder;
  opacityBind(expr: string): TreeIndicatorBuilder;
  overrideState(value: QmlEnumToken): TreeIndicatorBuilder;
  overrideStateBind(expr: string): TreeIndicatorBuilder;
  palette(value: PaletteBuilder): TreeIndicatorBuilder;
  paletteBind(expr: string): TreeIndicatorBuilder;
  parent(value: ItemBuilder): TreeIndicatorBuilder;
  parentBind(expr: string): TreeIndicatorBuilder;
  rotation(value: number): TreeIndicatorBuilder;
  rotationBind(expr: string): TreeIndicatorBuilder;
  scale(value: number): TreeIndicatorBuilder;
  scaleBind(expr: string): TreeIndicatorBuilder;
  smooth(value: boolean): TreeIndicatorBuilder;
  smoothBind(expr: string): TreeIndicatorBuilder;
  state(value: string): TreeIndicatorBuilder;
  stateBind(expr: string): TreeIndicatorBuilder;
  transformOrigin(value: QmlEnumToken): TreeIndicatorBuilder;
  transformOriginBind(expr: string): TreeIndicatorBuilder;
  transitionDuration(value: number): TreeIndicatorBuilder;
  transitionDurationBind(expr: string): TreeIndicatorBuilder;
  useNinePatchImage(value: boolean): TreeIndicatorBuilder;
  useNinePatchImageBind(expr: string): TreeIndicatorBuilder;
  visible(value: boolean): TreeIndicatorBuilder;
  visibleBind(expr: string): TreeIndicatorBuilder;
  width(value: number): TreeIndicatorBuilder;
  widthBind(expr: string): TreeIndicatorBuilder;
  x(value: number): TreeIndicatorBuilder;
  xBind(expr: string): TreeIndicatorBuilder;
  y(value: number): TreeIndicatorBuilder;
  yBind(expr: string): TreeIndicatorBuilder;
  z(value: number): TreeIndicatorBuilder;
  zBind(expr: string): TreeIndicatorBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onClipChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onControlChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onFontChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onXChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onYChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  onZChanged(handler: DslSignalHandlerValue): TreeIndicatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TreeIndicatorBuilder;
  layer(setup: (b: LayerBuilder) => void): TreeIndicatorBuilder;
}

const TREEINDICATOR_META: TypeMetadata = {
  typeName: 'TreeIndicator',
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

export function TreeIndicator(): TreeIndicatorBuilder {
  return createFluentBuilder(
    'TreeIndicator',
    TREEINDICATOR_META,
  ) as unknown as TreeIndicatorBuilder;
}

export namespace TreeIndicator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TreeIndicator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TreeIndicator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TreeIndicator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TreeIndicator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TreeIndicator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TreeIndicator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TreeIndicator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TreeIndicator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('TreeIndicator', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('TreeIndicator', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('TreeIndicator', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('TreeIndicator', 'OverrideState', 'AlwaysSunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TreeIndicator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TreeIndicator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TreeIndicator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TreeIndicator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TreeIndicator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TreeIndicator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TreeIndicator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TreeIndicator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TreeIndicator', 'TransformOrigin', 'BottomRight');
  }
}
