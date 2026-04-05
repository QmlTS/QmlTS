// AUTO-GENERATED — DO NOT EDIT
// Type: ChartView
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface ChartViewBuilder {
  id(id: string): ChartViewBuilder;
  child(obj: QmlObjectBuilder): ChartViewBuilder;

  activeFocusOnTab(value: boolean): ChartViewBuilder;
  activeFocusOnTabBind(expr: string): ChartViewBuilder;
  animationDuration(value: number): ChartViewBuilder;
  animationDurationBind(expr: string): ChartViewBuilder;
  animationEasingCurve(value: QmlValue): ChartViewBuilder;
  animationEasingCurveBind(expr: string): ChartViewBuilder;
  animationOptions(value: QmlEnumToken): ChartViewBuilder;
  animationOptionsBind(expr: string): ChartViewBuilder;
  antialiasing(value: boolean): ChartViewBuilder;
  antialiasingBind(expr: string): ChartViewBuilder;
  backgroundColor(value: QmlColor): ChartViewBuilder;
  backgroundColorBind(expr: string): ChartViewBuilder;
  backgroundRoundness(value: number): ChartViewBuilder;
  backgroundRoundnessBind(expr: string): ChartViewBuilder;
  baselineOffset(value: number): ChartViewBuilder;
  baselineOffsetBind(expr: string): ChartViewBuilder;
  clip(value: boolean): ChartViewBuilder;
  clipBind(expr: string): ChartViewBuilder;
  containmentMask(value: QtObjectBuilder): ChartViewBuilder;
  containmentMaskBind(expr: string): ChartViewBuilder;
  dropShadowEnabled(value: boolean): ChartViewBuilder;
  dropShadowEnabledBind(expr: string): ChartViewBuilder;
  enabled(value: boolean): ChartViewBuilder;
  enabledBind(expr: string): ChartViewBuilder;
  focus(value: boolean): ChartViewBuilder;
  focusBind(expr: string): ChartViewBuilder;
  focusPolicy(value: QmlEnumToken): ChartViewBuilder;
  focusPolicyBind(expr: string): ChartViewBuilder;
  height(value: number): ChartViewBuilder;
  heightBind(expr: string): ChartViewBuilder;
  implicitHeight(value: number): ChartViewBuilder;
  implicitHeightBind(expr: string): ChartViewBuilder;
  implicitWidth(value: number): ChartViewBuilder;
  implicitWidthBind(expr: string): ChartViewBuilder;
  locale(value: string): ChartViewBuilder;
  localeBind(expr: string): ChartViewBuilder;
  localizeNumbers(value: boolean): ChartViewBuilder;
  localizeNumbersBind(expr: string): ChartViewBuilder;
  objectName(value: string): ChartViewBuilder;
  objectNameBind(expr: string): ChartViewBuilder;
  opacity(value: number): ChartViewBuilder;
  opacityBind(expr: string): ChartViewBuilder;
  palette(value: PaletteBuilder): ChartViewBuilder;
  paletteBind(expr: string): ChartViewBuilder;
  parent(value: ItemBuilder): ChartViewBuilder;
  parentBind(expr: string): ChartViewBuilder;
  plotArea(value: QmlRect): ChartViewBuilder;
  plotAreaBind(expr: string): ChartViewBuilder;
  plotAreaColor(value: QmlColor): ChartViewBuilder;
  plotAreaColorBind(expr: string): ChartViewBuilder;
  rotation(value: number): ChartViewBuilder;
  rotationBind(expr: string): ChartViewBuilder;
  scale(value: number): ChartViewBuilder;
  scaleBind(expr: string): ChartViewBuilder;
  smooth(value: boolean): ChartViewBuilder;
  smoothBind(expr: string): ChartViewBuilder;
  state(value: string): ChartViewBuilder;
  stateBind(expr: string): ChartViewBuilder;
  theme(value: QmlEnumToken): ChartViewBuilder;
  themeBind(expr: string): ChartViewBuilder;
  title(value: string): ChartViewBuilder;
  titleBind(expr: string): ChartViewBuilder;
  titleColor(value: QmlColor): ChartViewBuilder;
  titleColorBind(expr: string): ChartViewBuilder;
  titleFont(value: QmlFont): ChartViewBuilder;
  titleFontBind(expr: string): ChartViewBuilder;
  transformOrigin(value: QmlEnumToken): ChartViewBuilder;
  transformOriginBind(expr: string): ChartViewBuilder;
  visible(value: boolean): ChartViewBuilder;
  visibleBind(expr: string): ChartViewBuilder;
  width(value: number): ChartViewBuilder;
  widthBind(expr: string): ChartViewBuilder;
  x(value: number): ChartViewBuilder;
  xBind(expr: string): ChartViewBuilder;
  y(value: number): ChartViewBuilder;
  yBind(expr: string): ChartViewBuilder;
  z(value: number): ChartViewBuilder;
  zBind(expr: string): ChartViewBuilder;
  onActiveFocusChanged(body: string): ChartViewBuilder;
  onActiveFocusOnTabChanged(body: string): ChartViewBuilder;
  onAnimationDurationChanged(body: string): ChartViewBuilder;
  onAnimationEasingCurveChanged(body: string): ChartViewBuilder;
  onAntialiasingChanged(body: string): ChartViewBuilder;
  onAxisLabelsChanged(body: string): ChartViewBuilder;
  onBackgroundColorChanged(body: string): ChartViewBuilder;
  onBackgroundRoundnessChanged(body: string): ChartViewBuilder;
  onBaselineOffsetChanged(body: string): ChartViewBuilder;
  onChildrenChanged(body: string): ChartViewBuilder;
  onChildrenRectChanged(body: string): ChartViewBuilder;
  onClipChanged(body: string): ChartViewBuilder;
  onContainmentMaskChanged(body: string): ChartViewBuilder;
  onDropShadowEnabledChanged(body: string): ChartViewBuilder;
  onEnabledChanged(body: string): ChartViewBuilder;
  onFocusChanged(body: string): ChartViewBuilder;
  onFocusPolicyChanged(body: string): ChartViewBuilder;
  onHeightChanged(body: string): ChartViewBuilder;
  onImplicitHeightChanged(body: string): ChartViewBuilder;
  onImplicitWidthChanged(body: string): ChartViewBuilder;
  onLocaleChanged(body: string): ChartViewBuilder;
  onLocalizeNumbersChanged(body: string): ChartViewBuilder;
  onMarginsChanged(body: string): ChartViewBuilder;
  onNeedRender(body: string): ChartViewBuilder;
  onObjectNameChanged(body: string): ChartViewBuilder;
  onOpacityChanged(body: string): ChartViewBuilder;
  onPaletteChanged(body: string): ChartViewBuilder;
  onPaletteCreated(body: string): ChartViewBuilder;
  onParentChanged(body: string): ChartViewBuilder;
  onPendingRenderNodeMouseEventResponses(body: string): ChartViewBuilder;
  onPlotAreaChanged(body: string): ChartViewBuilder;
  onPlotAreaColorChanged(body: string): ChartViewBuilder;
  onRotationChanged(body: string): ChartViewBuilder;
  onScaleChanged(body: string): ChartViewBuilder;
  onSeriesAdded(body: string): ChartViewBuilder;
  onSeriesRemoved(body: string): ChartViewBuilder;
  onSmoothChanged(body: string): ChartViewBuilder;
  onStateChanged(body: string): ChartViewBuilder;
  onTitleColorChanged(body: string): ChartViewBuilder;
  onTransformOriginChanged(body: string): ChartViewBuilder;
  onVisibleChanged(body: string): ChartViewBuilder;
  onVisibleChildrenChanged(body: string): ChartViewBuilder;
  onWidthChanged(body: string): ChartViewBuilder;
  onWindowChanged(body: string): ChartViewBuilder;
  onXChanged(body: string): ChartViewBuilder;
  onYChanged(body: string): ChartViewBuilder;
  onZChanged(body: string): ChartViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ChartViewBuilder;
  layer(setup: (b: LayerBuilder) => void): ChartViewBuilder;
}

const CHARTVIEW_META: TypeMetadata = {
  typeName: 'ChartView',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'animationDuration', hasValue: true, hasBinding: true },
    { name: 'animationEasingCurve', hasValue: true, hasBinding: true },
    { name: 'animationOptions', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'backgroundColor', hasValue: true, hasBinding: true },
    { name: 'backgroundRoundness', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'dropShadowEnabled', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'localizeNumbers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'plotArea', hasValue: true, hasBinding: true },
    { name: 'plotAreaColor', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'titleColor', hasValue: true, hasBinding: true },
    { name: 'titleFont', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAnimationDurationChanged', paramCount: 1 },
    { handlerName: 'onAnimationEasingCurveChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAxisLabelsChanged', paramCount: 0 },
    { handlerName: 'onBackgroundColorChanged', paramCount: 0 },
    { handlerName: 'onBackgroundRoundnessChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onDropShadowEnabledChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onLocalizeNumbersChanged', paramCount: 0 },
    { handlerName: 'onMarginsChanged', paramCount: 0 },
    { handlerName: 'onNeedRender', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPendingRenderNodeMouseEventResponses', paramCount: 0 },
    { handlerName: 'onPlotAreaChanged', paramCount: 1 },
    { handlerName: 'onPlotAreaColorChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSeriesAdded', paramCount: 1 },
    { handlerName: 'onSeriesRemoved', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTitleColorChanged', paramCount: 1 },
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

export function ChartView(): ChartViewBuilder {
  return createFluentBuilder('ChartView', CHARTVIEW_META) as unknown as ChartViewBuilder;
}

export namespace ChartView {
  export namespace Animation {
    export const NoAnimation = createEnumToken('ChartView', 'Animation', 'NoAnimation');
    export const GridAxisAnimations = createEnumToken(
      'ChartView',
      'Animation',
      'GridAxisAnimations',
    );
    export const SeriesAnimations = createEnumToken('ChartView', 'Animation', 'SeriesAnimations');
    export const AllAnimations = createEnumToken('ChartView', 'Animation', 'AllAnimations');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ChartView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ChartView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ChartView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ChartView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ChartView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ChartView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ChartView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ChartView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ChartView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SeriesType {
    export const SeriesTypeLine = createEnumToken('ChartView', 'SeriesType', 'SeriesTypeLine');
    export const SeriesTypeArea = createEnumToken('ChartView', 'SeriesType', 'SeriesTypeArea');
    export const SeriesTypeBar = createEnumToken('ChartView', 'SeriesType', 'SeriesTypeBar');
    export const SeriesTypeStackedBar = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypeStackedBar',
    );
    export const SeriesTypePercentBar = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypePercentBar',
    );
    export const SeriesTypePie = createEnumToken('ChartView', 'SeriesType', 'SeriesTypePie');
    export const SeriesTypeScatter = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypeScatter',
    );
    export const SeriesTypeSpline = createEnumToken('ChartView', 'SeriesType', 'SeriesTypeSpline');
    export const SeriesTypeHorizontalBar = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypeHorizontalBar',
    );
    export const SeriesTypeHorizontalStackedBar = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypeHorizontalStackedBar',
    );
    export const SeriesTypeHorizontalPercentBar = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypeHorizontalPercentBar',
    );
    export const SeriesTypeBoxPlot = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypeBoxPlot',
    );
    export const SeriesTypeCandlestick = createEnumToken(
      'ChartView',
      'SeriesType',
      'SeriesTypeCandlestick',
    );
  }
  export namespace Theme {
    export const ChartThemeLight = createEnumToken('ChartView', 'Theme', 'ChartThemeLight');
    export const ChartThemeBlueCerulean = createEnumToken(
      'ChartView',
      'Theme',
      'ChartThemeBlueCerulean',
    );
    export const ChartThemeDark = createEnumToken('ChartView', 'Theme', 'ChartThemeDark');
    export const ChartThemeBrownSand = createEnumToken('ChartView', 'Theme', 'ChartThemeBrownSand');
    export const ChartThemeBlueNcs = createEnumToken('ChartView', 'Theme', 'ChartThemeBlueNcs');
    export const ChartThemeHighContrast = createEnumToken(
      'ChartView',
      'Theme',
      'ChartThemeHighContrast',
    );
    export const ChartThemeBlueIcy = createEnumToken('ChartView', 'Theme', 'ChartThemeBlueIcy');
    export const ChartThemeQt = createEnumToken('ChartView', 'Theme', 'ChartThemeQt');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ChartView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ChartView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ChartView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ChartView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ChartView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ChartView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ChartView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ChartView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ChartView', 'TransformOrigin', 'BottomRight');
  }
}
