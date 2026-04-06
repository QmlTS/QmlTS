// AUTO-GENERATED — DO NOT EDIT
// Type: GraphsTheme
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GradientBuilder } from '../QtQuick/Gradient.js';
export interface GraphsThemeBuilder {
  id(id: string): GraphsThemeBuilder;
  child(obj: QmlObjectBuilder): GraphsThemeBuilder;
  children(...objs: QmlObjectBuilder[]): GraphsThemeBuilder;

  axisX(value: QmlValue): GraphsThemeBuilder;
  axisXBind(expr: string): GraphsThemeBuilder;
  axisXLabelFont(value: QmlFont): GraphsThemeBuilder;
  axisXLabelFontBind(expr: string): GraphsThemeBuilder;
  axisY(value: QmlValue): GraphsThemeBuilder;
  axisYBind(expr: string): GraphsThemeBuilder;
  axisYLabelFont(value: QmlFont): GraphsThemeBuilder;
  axisYLabelFontBind(expr: string): GraphsThemeBuilder;
  axisZ(value: QmlValue): GraphsThemeBuilder;
  axisZBind(expr: string): GraphsThemeBuilder;
  axisZLabelFont(value: QmlFont): GraphsThemeBuilder;
  axisZLabelFontBind(expr: string): GraphsThemeBuilder;
  backgroundColor(value: QmlColor): GraphsThemeBuilder;
  backgroundColorBind(expr: string): GraphsThemeBuilder;
  backgroundVisible(value: boolean): GraphsThemeBuilder;
  backgroundVisibleBind(expr: string): GraphsThemeBuilder;
  borderColors(value: QmlColor): GraphsThemeBuilder;
  borderColorsBind(expr: string): GraphsThemeBuilder;
  borderWidth(value: number): GraphsThemeBuilder;
  borderWidthBind(expr: string): GraphsThemeBuilder;
  colorScheme(value: QmlEnumToken): GraphsThemeBuilder;
  colorSchemeBind(expr: string): GraphsThemeBuilder;
  colorStyle(value: QmlEnumToken): GraphsThemeBuilder;
  colorStyleBind(expr: string): GraphsThemeBuilder;
  grid(value: QmlValue): GraphsThemeBuilder;
  gridBind(expr: string): GraphsThemeBuilder;
  gridVisible(value: boolean): GraphsThemeBuilder;
  gridVisibleBind(expr: string): GraphsThemeBuilder;
  labelBackgroundColor(value: QmlColor): GraphsThemeBuilder;
  labelBackgroundColorBind(expr: string): GraphsThemeBuilder;
  labelBackgroundVisible(value: boolean): GraphsThemeBuilder;
  labelBackgroundVisibleBind(expr: string): GraphsThemeBuilder;
  labelBorderVisible(value: boolean): GraphsThemeBuilder;
  labelBorderVisibleBind(expr: string): GraphsThemeBuilder;
  labelFont(value: QmlFont): GraphsThemeBuilder;
  labelFontBind(expr: string): GraphsThemeBuilder;
  labelTextColor(value: QmlColor): GraphsThemeBuilder;
  labelTextColorBind(expr: string): GraphsThemeBuilder;
  labelsVisible(value: boolean): GraphsThemeBuilder;
  labelsVisibleBind(expr: string): GraphsThemeBuilder;
  multiHighlightColor(value: QmlColor): GraphsThemeBuilder;
  multiHighlightColorBind(expr: string): GraphsThemeBuilder;
  multiHighlightGradient(value: GradientBuilder): GraphsThemeBuilder;
  multiHighlightGradientBind(expr: string): GraphsThemeBuilder;
  objectName(value: string): GraphsThemeBuilder;
  objectNameBind(expr: string): GraphsThemeBuilder;
  plotAreaBackgroundColor(value: QmlColor): GraphsThemeBuilder;
  plotAreaBackgroundColorBind(expr: string): GraphsThemeBuilder;
  plotAreaBackgroundVisible(value: boolean): GraphsThemeBuilder;
  plotAreaBackgroundVisibleBind(expr: string): GraphsThemeBuilder;
  seriesColors(value: QmlColor): GraphsThemeBuilder;
  seriesColorsBind(expr: string): GraphsThemeBuilder;
  singleHighlightColor(value: QmlColor): GraphsThemeBuilder;
  singleHighlightColorBind(expr: string): GraphsThemeBuilder;
  singleHighlightGradient(value: GradientBuilder): GraphsThemeBuilder;
  singleHighlightGradientBind(expr: string): GraphsThemeBuilder;
  theme(value: QmlEnumToken): GraphsThemeBuilder;
  themeBind(expr: string): GraphsThemeBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onAxisXLabelFontChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onAxisYLabelFontChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onAxisZChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onAxisZLabelFontChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onBackgroundColorChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onBackgroundVisibleChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onBorderColorsChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onBorderWidthChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onColorSchemeChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onColorStyleChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onGridChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onGridVisibleChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onLabelBackgroundColorChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onLabelBackgroundVisibleChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onLabelBorderVisibleChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onLabelFontChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onLabelTextColorChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onLabelsVisibleChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onMultiHighlightColorChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onMultiHighlightGradientChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onMultiHighlightGradientQMLChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onPlotAreaBackgroundColorChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onPlotAreaBackgroundVisibleChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onSeriesColorsChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onSeriesGradientsChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onSingleHighlightColorChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onSingleHighlightGradientChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onSingleHighlightGradientQMLChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onThemeChanged(handler: DslSignalHandlerValue): GraphsThemeBuilder;
  onUpdate(handler: DslSignalHandlerValue): GraphsThemeBuilder;
}

const GRAPHSTHEME_META: TypeMetadata = {
  typeName: 'GraphsTheme',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisXLabelFont', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisYLabelFont', hasValue: true, hasBinding: true },
    { name: 'axisZ', hasValue: true, hasBinding: true },
    { name: 'axisZLabelFont', hasValue: true, hasBinding: true },
    { name: 'backgroundColor', hasValue: true, hasBinding: true },
    { name: 'backgroundVisible', hasValue: true, hasBinding: true },
    { name: 'borderColors', hasValue: true, hasBinding: true },
    { name: 'borderWidth', hasValue: true, hasBinding: true },
    { name: 'colorScheme', hasValue: true, hasBinding: true },
    { name: 'colorStyle', hasValue: true, hasBinding: true },
    { name: 'grid', hasValue: true, hasBinding: true },
    { name: 'gridVisible', hasValue: true, hasBinding: true },
    { name: 'labelBackgroundColor', hasValue: true, hasBinding: true },
    { name: 'labelBackgroundVisible', hasValue: true, hasBinding: true },
    { name: 'labelBorderVisible', hasValue: true, hasBinding: true },
    { name: 'labelFont', hasValue: true, hasBinding: true },
    { name: 'labelTextColor', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'multiHighlightColor', hasValue: true, hasBinding: true },
    { name: 'multiHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'plotAreaBackgroundColor', hasValue: true, hasBinding: true },
    { name: 'plotAreaBackgroundVisible', hasValue: true, hasBinding: true },
    { name: 'seriesColors', hasValue: true, hasBinding: true },
    { name: 'singleHighlightColor', hasValue: true, hasBinding: true },
    { name: 'singleHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisXChanged', paramCount: 0 },
    { handlerName: 'onAxisXLabelFontChanged', paramCount: 0 },
    { handlerName: 'onAxisYChanged', paramCount: 0 },
    { handlerName: 'onAxisYLabelFontChanged', paramCount: 0 },
    { handlerName: 'onAxisZChanged', paramCount: 0 },
    { handlerName: 'onAxisZLabelFontChanged', paramCount: 0 },
    { handlerName: 'onBackgroundColorChanged', paramCount: 0 },
    { handlerName: 'onBackgroundVisibleChanged', paramCount: 0 },
    { handlerName: 'onBorderColorsChanged', paramCount: 0 },
    { handlerName: 'onBorderWidthChanged', paramCount: 0 },
    { handlerName: 'onColorSchemeChanged', paramCount: 0 },
    { handlerName: 'onColorStyleChanged', paramCount: 1 },
    { handlerName: 'onGridChanged', paramCount: 0 },
    { handlerName: 'onGridVisibleChanged', paramCount: 0 },
    { handlerName: 'onLabelBackgroundColorChanged', paramCount: 0 },
    { handlerName: 'onLabelBackgroundVisibleChanged', paramCount: 0 },
    { handlerName: 'onLabelBorderVisibleChanged', paramCount: 0 },
    { handlerName: 'onLabelFontChanged', paramCount: 0 },
    { handlerName: 'onLabelTextColorChanged', paramCount: 0 },
    { handlerName: 'onLabelsVisibleChanged', paramCount: 0 },
    { handlerName: 'onMultiHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightGradientQMLChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPlotAreaBackgroundColorChanged', paramCount: 0 },
    { handlerName: 'onPlotAreaBackgroundVisibleChanged', paramCount: 0 },
    { handlerName: 'onSeriesColorsChanged', paramCount: 1 },
    { handlerName: 'onSeriesGradientsChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightGradientQMLChanged', paramCount: 0 },
    { handlerName: 'onThemeChanged', paramCount: 1 },
    { handlerName: 'onUpdate', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'themeChildren',
};

export function GraphsTheme(): GraphsThemeBuilder {
  return createFluentBuilder('GraphsTheme', GRAPHSTHEME_META) as unknown as GraphsThemeBuilder;
}

export namespace GraphsTheme {
  export namespace ColorScheme {
    export const Automatic = createEnumToken('GraphsTheme', 'ColorScheme', 'Automatic');
    export const Light = createEnumToken('GraphsTheme', 'ColorScheme', 'Light');
    export const Dark = createEnumToken('GraphsTheme', 'ColorScheme', 'Dark');
  }
  export namespace ColorStyle {
    export const Uniform = createEnumToken('GraphsTheme', 'ColorStyle', 'Uniform');
    export const ObjectGradient = createEnumToken('GraphsTheme', 'ColorStyle', 'ObjectGradient');
    export const RangeGradient = createEnumToken('GraphsTheme', 'ColorStyle', 'RangeGradient');
  }
  export namespace ForceTheme {
    export const No = createEnumToken('GraphsTheme', 'ForceTheme', 'No');
    export const Yes = createEnumToken('GraphsTheme', 'ForceTheme', 'Yes');
  }
  export namespace Theme {
    export const QtGreen = createEnumToken('GraphsTheme', 'Theme', 'QtGreen');
    export const QtGreenNeon = createEnumToken('GraphsTheme', 'Theme', 'QtGreenNeon');
    export const MixSeries = createEnumToken('GraphsTheme', 'Theme', 'MixSeries');
    export const OrangeSeries = createEnumToken('GraphsTheme', 'Theme', 'OrangeSeries');
    export const YellowSeries = createEnumToken('GraphsTheme', 'Theme', 'YellowSeries');
    export const BlueSeries = createEnumToken('GraphsTheme', 'Theme', 'BlueSeries');
    export const PurpleSeries = createEnumToken('GraphsTheme', 'Theme', 'PurpleSeries');
    export const GreySeries = createEnumToken('GraphsTheme', 'Theme', 'GreySeries');
    export const UserDefined = createEnumToken('GraphsTheme', 'Theme', 'UserDefined');
  }
}
