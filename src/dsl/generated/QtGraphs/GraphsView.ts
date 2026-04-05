// AUTO-GENERATED — DO NOT EDIT
// Type: GraphsView
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlComponent,
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
import type { GraphsThemeBuilder } from './GraphsTheme.js';
export interface GraphsViewBuilder {
  id(id: string): GraphsViewBuilder;
  child(obj: QmlObjectBuilder): GraphsViewBuilder;

  activeFocusOnTab(value: boolean): GraphsViewBuilder;
  activeFocusOnTabBind(expr: string): GraphsViewBuilder;
  antialiasing(value: boolean): GraphsViewBuilder;
  antialiasingBind(expr: string): GraphsViewBuilder;
  axisX(value: QmlValue): GraphsViewBuilder;
  axisXBind(expr: string): GraphsViewBuilder;
  axisXSmoothing(value: number): GraphsViewBuilder;
  axisXSmoothingBind(expr: string): GraphsViewBuilder;
  axisY(value: QmlValue): GraphsViewBuilder;
  axisYBind(expr: string): GraphsViewBuilder;
  axisYSmoothing(value: number): GraphsViewBuilder;
  axisYSmoothingBind(expr: string): GraphsViewBuilder;
  baselineOffset(value: number): GraphsViewBuilder;
  baselineOffsetBind(expr: string): GraphsViewBuilder;
  clip(value: boolean): GraphsViewBuilder;
  clipBind(expr: string): GraphsViewBuilder;
  clipPlotArea(value: boolean): GraphsViewBuilder;
  clipPlotAreaBind(expr: string): GraphsViewBuilder;
  containmentMask(value: QtObjectBuilder): GraphsViewBuilder;
  containmentMaskBind(expr: string): GraphsViewBuilder;
  enabled(value: boolean): GraphsViewBuilder;
  enabledBind(expr: string): GraphsViewBuilder;
  focus(value: boolean): GraphsViewBuilder;
  focusBind(expr: string): GraphsViewBuilder;
  focusPolicy(value: QmlEnumToken): GraphsViewBuilder;
  focusPolicyBind(expr: string): GraphsViewBuilder;
  gridSmoothing(value: number): GraphsViewBuilder;
  gridSmoothingBind(expr: string): GraphsViewBuilder;
  height(value: number): GraphsViewBuilder;
  heightBind(expr: string): GraphsViewBuilder;
  implicitHeight(value: number): GraphsViewBuilder;
  implicitHeightBind(expr: string): GraphsViewBuilder;
  implicitWidth(value: number): GraphsViewBuilder;
  implicitWidthBind(expr: string): GraphsViewBuilder;
  marginBottom(value: number): GraphsViewBuilder;
  marginBottomBind(expr: string): GraphsViewBuilder;
  marginLeft(value: number): GraphsViewBuilder;
  marginLeftBind(expr: string): GraphsViewBuilder;
  marginRight(value: number): GraphsViewBuilder;
  marginRightBind(expr: string): GraphsViewBuilder;
  marginTop(value: number): GraphsViewBuilder;
  marginTopBind(expr: string): GraphsViewBuilder;
  objectName(value: string): GraphsViewBuilder;
  objectNameBind(expr: string): GraphsViewBuilder;
  opacity(value: number): GraphsViewBuilder;
  opacityBind(expr: string): GraphsViewBuilder;
  orientation(value: QmlEnumToken): GraphsViewBuilder;
  orientationBind(expr: string): GraphsViewBuilder;
  palette(value: PaletteBuilder): GraphsViewBuilder;
  paletteBind(expr: string): GraphsViewBuilder;
  panStyle(value: QmlEnumToken): GraphsViewBuilder;
  panStyleBind(expr: string): GraphsViewBuilder;
  parent(value: ItemBuilder): GraphsViewBuilder;
  parentBind(expr: string): GraphsViewBuilder;
  rotation(value: number): GraphsViewBuilder;
  rotationBind(expr: string): GraphsViewBuilder;
  scale(value: number): GraphsViewBuilder;
  scaleBind(expr: string): GraphsViewBuilder;
  shadowBarWidth(value: number): GraphsViewBuilder;
  shadowBarWidthBind(expr: string): GraphsViewBuilder;
  shadowColor(value: QmlColor): GraphsViewBuilder;
  shadowColorBind(expr: string): GraphsViewBuilder;
  shadowSmoothing(value: number): GraphsViewBuilder;
  shadowSmoothingBind(expr: string): GraphsViewBuilder;
  shadowVisible(value: boolean): GraphsViewBuilder;
  shadowVisibleBind(expr: string): GraphsViewBuilder;
  shadowXOffset(value: number): GraphsViewBuilder;
  shadowXOffsetBind(expr: string): GraphsViewBuilder;
  shadowYOffset(value: number): GraphsViewBuilder;
  shadowYOffsetBind(expr: string): GraphsViewBuilder;
  smooth(value: boolean): GraphsViewBuilder;
  smoothBind(expr: string): GraphsViewBuilder;
  state(value: string): GraphsViewBuilder;
  stateBind(expr: string): GraphsViewBuilder;
  theme(value: GraphsThemeBuilder): GraphsViewBuilder;
  themeBind(expr: string): GraphsViewBuilder;
  transformOrigin(value: QmlEnumToken): GraphsViewBuilder;
  transformOriginBind(expr: string): GraphsViewBuilder;
  visible(value: boolean): GraphsViewBuilder;
  visibleBind(expr: string): GraphsViewBuilder;
  width(value: number): GraphsViewBuilder;
  widthBind(expr: string): GraphsViewBuilder;
  x(value: number): GraphsViewBuilder;
  xBind(expr: string): GraphsViewBuilder;
  y(value: number): GraphsViewBuilder;
  yBind(expr: string): GraphsViewBuilder;
  z(value: number): GraphsViewBuilder;
  zBind(expr: string): GraphsViewBuilder;
  zoomAreaDelegate(value: QmlComponent): GraphsViewBuilder;
  zoomAreaDelegateBind(expr: string): GraphsViewBuilder;
  zoomAreaEnabled(value: boolean): GraphsViewBuilder;
  zoomAreaEnabledBind(expr: string): GraphsViewBuilder;
  zoomSensitivity(value: number): GraphsViewBuilder;
  zoomSensitivityBind(expr: string): GraphsViewBuilder;
  zoomStyle(value: QmlEnumToken): GraphsViewBuilder;
  zoomStyleBind(expr: string): GraphsViewBuilder;
  onActiveFocusChanged(body: string): GraphsViewBuilder;
  onActiveFocusOnTabChanged(body: string): GraphsViewBuilder;
  onAntialiasingChanged(body: string): GraphsViewBuilder;
  onAxisXChanged(body: string): GraphsViewBuilder;
  onAxisXSmoothingChanged(body: string): GraphsViewBuilder;
  onAxisYChanged(body: string): GraphsViewBuilder;
  onAxisYSmoothingChanged(body: string): GraphsViewBuilder;
  onBaselineOffsetChanged(body: string): GraphsViewBuilder;
  onChildrenChanged(body: string): GraphsViewBuilder;
  onChildrenRectChanged(body: string): GraphsViewBuilder;
  onClipChanged(body: string): GraphsViewBuilder;
  onClipPlotAreaChanged(body: string): GraphsViewBuilder;
  onContainmentMaskChanged(body: string): GraphsViewBuilder;
  onEnabledChanged(body: string): GraphsViewBuilder;
  onFocusChanged(body: string): GraphsViewBuilder;
  onFocusPolicyChanged(body: string): GraphsViewBuilder;
  onGridSmoothingChanged(body: string): GraphsViewBuilder;
  onHeightChanged(body: string): GraphsViewBuilder;
  onHover(body: string): GraphsViewBuilder;
  onHoverEnter(body: string): GraphsViewBuilder;
  onHoverExit(body: string): GraphsViewBuilder;
  onImplicitHeightChanged(body: string): GraphsViewBuilder;
  onImplicitWidthChanged(body: string): GraphsViewBuilder;
  onMarginBottomChanged(body: string): GraphsViewBuilder;
  onMarginLeftChanged(body: string): GraphsViewBuilder;
  onMarginRightChanged(body: string): GraphsViewBuilder;
  onMarginTopChanged(body: string): GraphsViewBuilder;
  onObjectNameChanged(body: string): GraphsViewBuilder;
  onOpacityChanged(body: string): GraphsViewBuilder;
  onOrientationChanged(body: string): GraphsViewBuilder;
  onPaletteChanged(body: string): GraphsViewBuilder;
  onPaletteCreated(body: string): GraphsViewBuilder;
  onPanStyleChanged(body: string): GraphsViewBuilder;
  onParentChanged(body: string): GraphsViewBuilder;
  onPlotAreaChanged(body: string): GraphsViewBuilder;
  onRotationChanged(body: string): GraphsViewBuilder;
  onScaleChanged(body: string): GraphsViewBuilder;
  onShadowBarWidthChanged(body: string): GraphsViewBuilder;
  onShadowColorChanged(body: string): GraphsViewBuilder;
  onShadowSmoothingChanged(body: string): GraphsViewBuilder;
  onShadowVisibleChanged(body: string): GraphsViewBuilder;
  onShadowXOffsetChanged(body: string): GraphsViewBuilder;
  onShadowYOffsetChanged(body: string): GraphsViewBuilder;
  onSmoothChanged(body: string): GraphsViewBuilder;
  onStateChanged(body: string): GraphsViewBuilder;
  onThemeChanged(body: string): GraphsViewBuilder;
  onTransformOriginChanged(body: string): GraphsViewBuilder;
  onVisibleChanged(body: string): GraphsViewBuilder;
  onVisibleChildrenChanged(body: string): GraphsViewBuilder;
  onWidthChanged(body: string): GraphsViewBuilder;
  onWindowChanged(body: string): GraphsViewBuilder;
  onXChanged(body: string): GraphsViewBuilder;
  onYChanged(body: string): GraphsViewBuilder;
  onZChanged(body: string): GraphsViewBuilder;
  onZoomAreaDelegateChanged(body: string): GraphsViewBuilder;
  onZoomAreaEnabledChanged(body: string): GraphsViewBuilder;
  onZoomSensitivityChanged(body: string): GraphsViewBuilder;
  onZoomStyleChanged(body: string): GraphsViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GraphsViewBuilder;
  layer(setup: (b: LayerBuilder) => void): GraphsViewBuilder;
}

const GRAPHSVIEW_META: TypeMetadata = {
  typeName: 'GraphsView',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisXSmoothing', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisYSmoothing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'clipPlotArea', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'gridSmoothing', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'marginBottom', hasValue: true, hasBinding: true },
    { name: 'marginLeft', hasValue: true, hasBinding: true },
    { name: 'marginRight', hasValue: true, hasBinding: true },
    { name: 'marginTop', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'panStyle', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shadowBarWidth', hasValue: true, hasBinding: true },
    { name: 'shadowColor', hasValue: true, hasBinding: true },
    { name: 'shadowSmoothing', hasValue: true, hasBinding: true },
    { name: 'shadowVisible', hasValue: true, hasBinding: true },
    { name: 'shadowXOffset', hasValue: true, hasBinding: true },
    { name: 'shadowYOffset', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
    { name: 'zoomAreaDelegate', hasValue: true, hasBinding: true },
    { name: 'zoomAreaEnabled', hasValue: true, hasBinding: true },
    { name: 'zoomSensitivity', hasValue: true, hasBinding: true },
    { name: 'zoomStyle', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAxisXChanged', paramCount: 0 },
    { handlerName: 'onAxisXSmoothingChanged', paramCount: 0 },
    { handlerName: 'onAxisYChanged', paramCount: 0 },
    { handlerName: 'onAxisYSmoothingChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onClipPlotAreaChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onGridSmoothingChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onMarginBottomChanged', paramCount: 0 },
    { handlerName: 'onMarginLeftChanged', paramCount: 0 },
    { handlerName: 'onMarginRightChanged', paramCount: 0 },
    { handlerName: 'onMarginTopChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onPanStyleChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPlotAreaChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShadowBarWidthChanged', paramCount: 0 },
    { handlerName: 'onShadowColorChanged', paramCount: 0 },
    { handlerName: 'onShadowSmoothingChanged', paramCount: 0 },
    { handlerName: 'onShadowVisibleChanged', paramCount: 0 },
    { handlerName: 'onShadowXOffsetChanged', paramCount: 0 },
    { handlerName: 'onShadowYOffsetChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onThemeChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
    { handlerName: 'onZoomAreaDelegateChanged', paramCount: 0 },
    { handlerName: 'onZoomAreaEnabledChanged', paramCount: 0 },
    { handlerName: 'onZoomSensitivityChanged', paramCount: 0 },
    { handlerName: 'onZoomStyleChanged', paramCount: 0 },
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
  defaultProperty: 'seriesList',
};

export function GraphsView(): GraphsViewBuilder {
  return createFluentBuilder('GraphsView', GRAPHSVIEW_META) as unknown as GraphsViewBuilder;
}

export namespace GraphsView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'GraphsView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'GraphsView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('GraphsView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GraphsView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GraphsView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GraphsView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'GraphsView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('GraphsView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'GraphsView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace PanStyle {
    export const None = createEnumToken('GraphsView', 'PanStyle', 'None');
    export const Drag = createEnumToken('GraphsView', 'PanStyle', 'Drag');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('GraphsView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('GraphsView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('GraphsView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('GraphsView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('GraphsView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('GraphsView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('GraphsView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('GraphsView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('GraphsView', 'TransformOrigin', 'BottomRight');
  }
  export namespace ZoomStyle {
    export const None = createEnumToken('GraphsView', 'ZoomStyle', 'None');
    export const Center = createEnumToken('GraphsView', 'ZoomStyle', 'Center');
  }
}
