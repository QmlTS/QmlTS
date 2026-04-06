// AUTO-GENERATED — DO NOT EDIT
// Type: Theme3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ColorGradientBuilder } from './ColorGradient.js';
export interface Theme3DBuilder {
  id(id: string): Theme3DBuilder;
  child(obj: QmlObjectBuilder): Theme3DBuilder;
  children(...objs: QmlObjectBuilder[]): Theme3DBuilder;

  ambientLightStrength(value: number): Theme3DBuilder;
  ambientLightStrengthBind(expr: string): Theme3DBuilder;
  backgroundColor(value: QmlColor): Theme3DBuilder;
  backgroundColorBind(expr: string): Theme3DBuilder;
  backgroundEnabled(value: boolean): Theme3DBuilder;
  backgroundEnabledBind(expr: string): Theme3DBuilder;
  colorStyle(value: QmlEnumToken): Theme3DBuilder;
  colorStyleBind(expr: string): Theme3DBuilder;
  font(value: QmlFont): Theme3DBuilder;
  fontBind(expr: string): Theme3DBuilder;
  gridEnabled(value: boolean): Theme3DBuilder;
  gridEnabledBind(expr: string): Theme3DBuilder;
  gridLineColor(value: QmlColor): Theme3DBuilder;
  gridLineColorBind(expr: string): Theme3DBuilder;
  highlightLightStrength(value: number): Theme3DBuilder;
  highlightLightStrengthBind(expr: string): Theme3DBuilder;
  labelBackgroundColor(value: QmlColor): Theme3DBuilder;
  labelBackgroundColorBind(expr: string): Theme3DBuilder;
  labelBackgroundEnabled(value: boolean): Theme3DBuilder;
  labelBackgroundEnabledBind(expr: string): Theme3DBuilder;
  labelBorderEnabled(value: boolean): Theme3DBuilder;
  labelBorderEnabledBind(expr: string): Theme3DBuilder;
  labelTextColor(value: QmlColor): Theme3DBuilder;
  labelTextColorBind(expr: string): Theme3DBuilder;
  lightColor(value: QmlColor): Theme3DBuilder;
  lightColorBind(expr: string): Theme3DBuilder;
  lightStrength(value: number): Theme3DBuilder;
  lightStrengthBind(expr: string): Theme3DBuilder;
  multiHighlightColor(value: QmlColor): Theme3DBuilder;
  multiHighlightColorBind(expr: string): Theme3DBuilder;
  multiHighlightGradient(value: ColorGradientBuilder): Theme3DBuilder;
  multiHighlightGradientBind(expr: string): Theme3DBuilder;
  objectName(value: string): Theme3DBuilder;
  objectNameBind(expr: string): Theme3DBuilder;
  singleHighlightColor(value: QmlColor): Theme3DBuilder;
  singleHighlightColorBind(expr: string): Theme3DBuilder;
  singleHighlightGradient(value: ColorGradientBuilder): Theme3DBuilder;
  singleHighlightGradientBind(expr: string): Theme3DBuilder;
  type(value: QmlEnumToken): Theme3DBuilder;
  typeBind(expr: string): Theme3DBuilder;
  windowColor(value: QmlColor): Theme3DBuilder;
  windowColorBind(expr: string): Theme3DBuilder;
  onAmbientLightStrengthChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onBackgroundColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onBackgroundEnabledChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onBaseColorsChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onBaseGradientsChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onColorStyleChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onFontChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onGridEnabledChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onGridLineColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onHighlightLightStrengthChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onLabelBackgroundColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onLabelBackgroundEnabledChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onLabelBorderEnabledChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onLabelTextColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onLightColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onLightStrengthChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onMultiHighlightColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onMultiHighlightGradientChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onSingleHighlightColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onSingleHighlightGradientChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onTypeChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
  onWindowColorChanged(handler: DslSignalHandlerValue): Theme3DBuilder;
}

const THEME3D_META: TypeMetadata = {
  typeName: 'Theme3D',
  properties: [
    { name: 'ambientLightStrength', hasValue: true, hasBinding: true },
    { name: 'backgroundColor', hasValue: true, hasBinding: true },
    { name: 'backgroundEnabled', hasValue: true, hasBinding: true },
    { name: 'colorStyle', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'gridEnabled', hasValue: true, hasBinding: true },
    { name: 'gridLineColor', hasValue: true, hasBinding: true },
    { name: 'highlightLightStrength', hasValue: true, hasBinding: true },
    { name: 'labelBackgroundColor', hasValue: true, hasBinding: true },
    { name: 'labelBackgroundEnabled', hasValue: true, hasBinding: true },
    { name: 'labelBorderEnabled', hasValue: true, hasBinding: true },
    { name: 'labelTextColor', hasValue: true, hasBinding: true },
    { name: 'lightColor', hasValue: true, hasBinding: true },
    { name: 'lightStrength', hasValue: true, hasBinding: true },
    { name: 'multiHighlightColor', hasValue: true, hasBinding: true },
    { name: 'multiHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'singleHighlightColor', hasValue: true, hasBinding: true },
    { name: 'singleHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'type', hasValue: true, hasBinding: true },
    { name: 'windowColor', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAmbientLightStrengthChanged', paramCount: 1 },
    { handlerName: 'onBackgroundColorChanged', paramCount: 1 },
    { handlerName: 'onBackgroundEnabledChanged', paramCount: 1 },
    { handlerName: 'onBaseColorsChanged', paramCount: 1 },
    { handlerName: 'onBaseGradientsChanged', paramCount: 1 },
    { handlerName: 'onColorStyleChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 1 },
    { handlerName: 'onGridEnabledChanged', paramCount: 1 },
    { handlerName: 'onGridLineColorChanged', paramCount: 1 },
    { handlerName: 'onHighlightLightStrengthChanged', paramCount: 1 },
    { handlerName: 'onLabelBackgroundColorChanged', paramCount: 1 },
    { handlerName: 'onLabelBackgroundEnabledChanged', paramCount: 1 },
    { handlerName: 'onLabelBorderEnabledChanged', paramCount: 1 },
    { handlerName: 'onLabelTextColorChanged', paramCount: 1 },
    { handlerName: 'onLightColorChanged', paramCount: 1 },
    { handlerName: 'onLightStrengthChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onTypeChanged', paramCount: 1 },
    { handlerName: 'onWindowColorChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'themeChildren',
};

export function Theme3D(): Theme3DBuilder {
  return createFluentBuilder('Theme3D', THEME3D_META) as unknown as Theme3DBuilder;
}

export namespace Theme3D {
  export namespace ColorStyle {
    export const ColorStyleUniform = createEnumToken('Theme3D', 'ColorStyle', 'ColorStyleUniform');
    export const ColorStyleObjectGradient = createEnumToken(
      'Theme3D',
      'ColorStyle',
      'ColorStyleObjectGradient',
    );
    export const ColorStyleRangeGradient = createEnumToken(
      'Theme3D',
      'ColorStyle',
      'ColorStyleRangeGradient',
    );
  }
  export namespace Theme {
    export const ThemeQt = createEnumToken('Theme3D', 'Theme', 'ThemeQt');
    export const ThemePrimaryColors = createEnumToken('Theme3D', 'Theme', 'ThemePrimaryColors');
    export const ThemeDigia = createEnumToken('Theme3D', 'Theme', 'ThemeDigia');
    export const ThemeStoneMoss = createEnumToken('Theme3D', 'Theme', 'ThemeStoneMoss');
    export const ThemeArmyBlue = createEnumToken('Theme3D', 'Theme', 'ThemeArmyBlue');
    export const ThemeRetro = createEnumToken('Theme3D', 'Theme', 'ThemeRetro');
    export const ThemeEbony = createEnumToken('Theme3D', 'Theme', 'ThemeEbony');
    export const ThemeIsabelle = createEnumToken('Theme3D', 'Theme', 'ThemeIsabelle');
    export const ThemeUserDefined = createEnumToken('Theme3D', 'Theme', 'ThemeUserDefined');
  }
}
