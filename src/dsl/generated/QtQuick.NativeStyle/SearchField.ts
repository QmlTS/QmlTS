// AUTO-GENERATED — DO NOT EDIT
// Type: SearchField
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
export interface SearchFieldBuilder {
  id(id: string): SearchFieldBuilder;
  child(obj: QmlObjectBuilder): SearchFieldBuilder;
  children(...objs: QmlObjectBuilder[]): SearchFieldBuilder;

  activeFocusOnTab(value: boolean): SearchFieldBuilder;
  activeFocusOnTabBind(expr: string): SearchFieldBuilder;
  antialiasing(value: boolean): SearchFieldBuilder;
  antialiasingBind(expr: string): SearchFieldBuilder;
  baselineOffset(value: number): SearchFieldBuilder;
  baselineOffsetBind(expr: string): SearchFieldBuilder;
  clip(value: boolean): SearchFieldBuilder;
  clipBind(expr: string): SearchFieldBuilder;
  containmentMask(value: QtObjectBuilder): SearchFieldBuilder;
  containmentMaskBind(expr: string): SearchFieldBuilder;
  contentHeight(value: number): SearchFieldBuilder;
  contentHeightBind(expr: string): SearchFieldBuilder;
  contentWidth(value: number): SearchFieldBuilder;
  contentWidthBind(expr: string): SearchFieldBuilder;
  control(value: ItemBuilder): SearchFieldBuilder;
  controlBind(expr: string): SearchFieldBuilder;
  enabled(value: boolean): SearchFieldBuilder;
  enabledBind(expr: string): SearchFieldBuilder;
  focus(value: boolean): SearchFieldBuilder;
  focusBind(expr: string): SearchFieldBuilder;
  focusPolicy(value: QmlEnumToken): SearchFieldBuilder;
  focusPolicyBind(expr: string): SearchFieldBuilder;
  height(value: number): SearchFieldBuilder;
  heightBind(expr: string): SearchFieldBuilder;
  implicitHeight(value: number): SearchFieldBuilder;
  implicitHeightBind(expr: string): SearchFieldBuilder;
  implicitWidth(value: number): SearchFieldBuilder;
  implicitWidthBind(expr: string): SearchFieldBuilder;
  objectName(value: string): SearchFieldBuilder;
  objectNameBind(expr: string): SearchFieldBuilder;
  opacity(value: number): SearchFieldBuilder;
  opacityBind(expr: string): SearchFieldBuilder;
  overrideState(value: QmlEnumToken): SearchFieldBuilder;
  overrideStateBind(expr: string): SearchFieldBuilder;
  palette(value: PaletteBuilder): SearchFieldBuilder;
  paletteBind(expr: string): SearchFieldBuilder;
  parent(value: ItemBuilder): SearchFieldBuilder;
  parentBind(expr: string): SearchFieldBuilder;
  rotation(value: number): SearchFieldBuilder;
  rotationBind(expr: string): SearchFieldBuilder;
  scale(value: number): SearchFieldBuilder;
  scaleBind(expr: string): SearchFieldBuilder;
  smooth(value: boolean): SearchFieldBuilder;
  smoothBind(expr: string): SearchFieldBuilder;
  state(value: string): SearchFieldBuilder;
  stateBind(expr: string): SearchFieldBuilder;
  subControl(value: QmlEnumToken): SearchFieldBuilder;
  subControlBind(expr: string): SearchFieldBuilder;
  transformOrigin(value: QmlEnumToken): SearchFieldBuilder;
  transformOriginBind(expr: string): SearchFieldBuilder;
  transitionDuration(value: number): SearchFieldBuilder;
  transitionDurationBind(expr: string): SearchFieldBuilder;
  useNinePatchImage(value: boolean): SearchFieldBuilder;
  useNinePatchImageBind(expr: string): SearchFieldBuilder;
  visible(value: boolean): SearchFieldBuilder;
  visibleBind(expr: string): SearchFieldBuilder;
  width(value: number): SearchFieldBuilder;
  widthBind(expr: string): SearchFieldBuilder;
  x(value: number): SearchFieldBuilder;
  xBind(expr: string): SearchFieldBuilder;
  y(value: number): SearchFieldBuilder;
  yBind(expr: string): SearchFieldBuilder;
  z(value: number): SearchFieldBuilder;
  zBind(expr: string): SearchFieldBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onClipChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onContentPaddingChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onControlChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onFontChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onLayoutMarginsChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onMinimumSizeChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onXChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onYChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  onZChanged(handler: DslSignalHandlerValue): SearchFieldBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SearchFieldBuilder;
  layer(setup: (b: LayerBuilder) => void): SearchFieldBuilder;
}

const SEARCHFIELD_META: TypeMetadata = {
  typeName: 'SearchField',
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

export function SearchField(): SearchFieldBuilder {
  return createFluentBuilder('SearchField', SEARCHFIELD_META) as unknown as SearchFieldBuilder;
}

export namespace SearchField {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SearchField',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SearchField',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SearchField', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SearchField', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SearchField', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SearchField', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SearchField',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SearchField', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SearchField',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace OverrideState {
    export const None = createEnumToken('SearchField', 'OverrideState', 'None');
    export const AlwaysHovered = createEnumToken('SearchField', 'OverrideState', 'AlwaysHovered');
    export const NeverHovered = createEnumToken('SearchField', 'OverrideState', 'NeverHovered');
    export const AlwaysSunken = createEnumToken('SearchField', 'OverrideState', 'AlwaysSunken');
  }
  export namespace SubControl {
    export const Frame = createEnumToken('SearchField', 'SubControl', 'Frame');
    export const Search = createEnumToken('SearchField', 'SubControl', 'Search');
    export const Clear = createEnumToken('SearchField', 'SubControl', 'Clear');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SearchField', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SearchField', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SearchField', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SearchField', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SearchField', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SearchField', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SearchField', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SearchField', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SearchField', 'TransformOrigin', 'BottomRight');
  }
}
