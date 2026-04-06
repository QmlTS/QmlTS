// AUTO-GENERATED — DO NOT EDIT
// Type: PolarChartView
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
export interface PolarChartViewBuilder {
  id(id: string): PolarChartViewBuilder;
  child(obj: QmlObjectBuilder): PolarChartViewBuilder;
  children(...objs: QmlObjectBuilder[]): PolarChartViewBuilder;

  activeFocusOnTab(value: boolean): PolarChartViewBuilder;
  activeFocusOnTabBind(expr: string): PolarChartViewBuilder;
  animationDuration(value: number): PolarChartViewBuilder;
  animationDurationBind(expr: string): PolarChartViewBuilder;
  animationEasingCurve(value: QmlValue): PolarChartViewBuilder;
  animationEasingCurveBind(expr: string): PolarChartViewBuilder;
  animationOptions(value: QmlEnumToken): PolarChartViewBuilder;
  animationOptionsBind(expr: string): PolarChartViewBuilder;
  antialiasing(value: boolean): PolarChartViewBuilder;
  antialiasingBind(expr: string): PolarChartViewBuilder;
  backgroundColor(value: QmlColor): PolarChartViewBuilder;
  backgroundColorBind(expr: string): PolarChartViewBuilder;
  backgroundRoundness(value: number): PolarChartViewBuilder;
  backgroundRoundnessBind(expr: string): PolarChartViewBuilder;
  baselineOffset(value: number): PolarChartViewBuilder;
  baselineOffsetBind(expr: string): PolarChartViewBuilder;
  clip(value: boolean): PolarChartViewBuilder;
  clipBind(expr: string): PolarChartViewBuilder;
  containmentMask(value: QtObjectBuilder): PolarChartViewBuilder;
  containmentMaskBind(expr: string): PolarChartViewBuilder;
  dropShadowEnabled(value: boolean): PolarChartViewBuilder;
  dropShadowEnabledBind(expr: string): PolarChartViewBuilder;
  enabled(value: boolean): PolarChartViewBuilder;
  enabledBind(expr: string): PolarChartViewBuilder;
  focus(value: boolean): PolarChartViewBuilder;
  focusBind(expr: string): PolarChartViewBuilder;
  focusPolicy(value: QmlEnumToken): PolarChartViewBuilder;
  focusPolicyBind(expr: string): PolarChartViewBuilder;
  height(value: number): PolarChartViewBuilder;
  heightBind(expr: string): PolarChartViewBuilder;
  implicitHeight(value: number): PolarChartViewBuilder;
  implicitHeightBind(expr: string): PolarChartViewBuilder;
  implicitWidth(value: number): PolarChartViewBuilder;
  implicitWidthBind(expr: string): PolarChartViewBuilder;
  locale(value: string): PolarChartViewBuilder;
  localeBind(expr: string): PolarChartViewBuilder;
  localizeNumbers(value: boolean): PolarChartViewBuilder;
  localizeNumbersBind(expr: string): PolarChartViewBuilder;
  objectName(value: string): PolarChartViewBuilder;
  objectNameBind(expr: string): PolarChartViewBuilder;
  opacity(value: number): PolarChartViewBuilder;
  opacityBind(expr: string): PolarChartViewBuilder;
  palette(value: PaletteBuilder): PolarChartViewBuilder;
  paletteBind(expr: string): PolarChartViewBuilder;
  parent(value: ItemBuilder): PolarChartViewBuilder;
  parentBind(expr: string): PolarChartViewBuilder;
  plotArea(value: QmlRect): PolarChartViewBuilder;
  plotAreaBind(expr: string): PolarChartViewBuilder;
  plotAreaColor(value: QmlColor): PolarChartViewBuilder;
  plotAreaColorBind(expr: string): PolarChartViewBuilder;
  rotation(value: number): PolarChartViewBuilder;
  rotationBind(expr: string): PolarChartViewBuilder;
  scale(value: number): PolarChartViewBuilder;
  scaleBind(expr: string): PolarChartViewBuilder;
  smooth(value: boolean): PolarChartViewBuilder;
  smoothBind(expr: string): PolarChartViewBuilder;
  state(value: string): PolarChartViewBuilder;
  stateBind(expr: string): PolarChartViewBuilder;
  theme(value: QmlEnumToken): PolarChartViewBuilder;
  themeBind(expr: string): PolarChartViewBuilder;
  title(value: string): PolarChartViewBuilder;
  titleBind(expr: string): PolarChartViewBuilder;
  titleColor(value: QmlColor): PolarChartViewBuilder;
  titleColorBind(expr: string): PolarChartViewBuilder;
  titleFont(value: QmlFont): PolarChartViewBuilder;
  titleFontBind(expr: string): PolarChartViewBuilder;
  transformOrigin(value: QmlEnumToken): PolarChartViewBuilder;
  transformOriginBind(expr: string): PolarChartViewBuilder;
  visible(value: boolean): PolarChartViewBuilder;
  visibleBind(expr: string): PolarChartViewBuilder;
  width(value: number): PolarChartViewBuilder;
  widthBind(expr: string): PolarChartViewBuilder;
  x(value: number): PolarChartViewBuilder;
  xBind(expr: string): PolarChartViewBuilder;
  y(value: number): PolarChartViewBuilder;
  yBind(expr: string): PolarChartViewBuilder;
  z(value: number): PolarChartViewBuilder;
  zBind(expr: string): PolarChartViewBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onAnimationDurationChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onAnimationEasingCurveChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onAxisLabelsChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onBackgroundColorChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onBackgroundRoundnessChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onClipChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onDropShadowEnabledChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onLocalizeNumbersChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onMarginsChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onNeedRender(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onPendingRenderNodeMouseEventResponses(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onPlotAreaChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onPlotAreaColorChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onSeriesAdded(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onSeriesRemoved(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onStateChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onTitleColorChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onXChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onYChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  onZChanged(handler: DslSignalHandlerValue): PolarChartViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PolarChartViewBuilder;
  layer(setup: (b: LayerBuilder) => void): PolarChartViewBuilder;
}

const POLARCHARTVIEW_META: TypeMetadata = {
  typeName: 'PolarChartView',
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
};

export function PolarChartView(): PolarChartViewBuilder {
  return createFluentBuilder(
    'PolarChartView',
    POLARCHARTVIEW_META,
  ) as unknown as PolarChartViewBuilder;
}

export namespace PolarChartView {
  export namespace Animation {
    export const NoAnimation = createEnumToken('PolarChartView', 'Animation', 'NoAnimation');
    export const GridAxisAnimations = createEnumToken(
      'PolarChartView',
      'Animation',
      'GridAxisAnimations',
    );
    export const SeriesAnimations = createEnumToken(
      'PolarChartView',
      'Animation',
      'SeriesAnimations',
    );
    export const AllAnimations = createEnumToken('PolarChartView', 'Animation', 'AllAnimations');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PolarChartView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PolarChartView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PolarChartView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PolarChartView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PolarChartView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PolarChartView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PolarChartView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PolarChartView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SeriesType {
    export const SeriesTypeLine = createEnumToken('PolarChartView', 'SeriesType', 'SeriesTypeLine');
    export const SeriesTypeArea = createEnumToken('PolarChartView', 'SeriesType', 'SeriesTypeArea');
    export const SeriesTypeBar = createEnumToken('PolarChartView', 'SeriesType', 'SeriesTypeBar');
    export const SeriesTypeStackedBar = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeStackedBar',
    );
    export const SeriesTypePercentBar = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypePercentBar',
    );
    export const SeriesTypePie = createEnumToken('PolarChartView', 'SeriesType', 'SeriesTypePie');
    export const SeriesTypeScatter = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeScatter',
    );
    export const SeriesTypeSpline = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeSpline',
    );
    export const SeriesTypeHorizontalBar = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeHorizontalBar',
    );
    export const SeriesTypeHorizontalStackedBar = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeHorizontalStackedBar',
    );
    export const SeriesTypeHorizontalPercentBar = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeHorizontalPercentBar',
    );
    export const SeriesTypeBoxPlot = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeBoxPlot',
    );
    export const SeriesTypeCandlestick = createEnumToken(
      'PolarChartView',
      'SeriesType',
      'SeriesTypeCandlestick',
    );
  }
  export namespace Theme {
    export const ChartThemeLight = createEnumToken('PolarChartView', 'Theme', 'ChartThemeLight');
    export const ChartThemeBlueCerulean = createEnumToken(
      'PolarChartView',
      'Theme',
      'ChartThemeBlueCerulean',
    );
    export const ChartThemeDark = createEnumToken('PolarChartView', 'Theme', 'ChartThemeDark');
    export const ChartThemeBrownSand = createEnumToken(
      'PolarChartView',
      'Theme',
      'ChartThemeBrownSand',
    );
    export const ChartThemeBlueNcs = createEnumToken(
      'PolarChartView',
      'Theme',
      'ChartThemeBlueNcs',
    );
    export const ChartThemeHighContrast = createEnumToken(
      'PolarChartView',
      'Theme',
      'ChartThemeHighContrast',
    );
    export const ChartThemeBlueIcy = createEnumToken(
      'PolarChartView',
      'Theme',
      'ChartThemeBlueIcy',
    );
    export const ChartThemeQt = createEnumToken('PolarChartView', 'Theme', 'ChartThemeQt');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PolarChartView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PolarChartView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PolarChartView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PolarChartView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PolarChartView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PolarChartView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PolarChartView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PolarChartView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PolarChartView', 'TransformOrigin', 'BottomRight');
  }
}
