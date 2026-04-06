// AUTO-GENERATED — DO NOT EDIT
// Type: BaseStyle
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ControlStyleBuilder } from './ControlStyle.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface BaseStyleBuilder {
  id(id: string): BaseStyleBuilder;
  child(obj: QmlObjectBuilder): BaseStyleBuilder;
  children(...objs: QmlObjectBuilder[]): BaseStyleBuilder;

  abstractButton(value: ControlStyleBuilder): BaseStyleBuilder;
  abstractButtonBind(expr: string): BaseStyleBuilder;
  applicationWindow(value: ControlStyleBuilder): BaseStyleBuilder;
  applicationWindowBind(expr: string): BaseStyleBuilder;
  button(value: ControlStyleBuilder): BaseStyleBuilder;
  buttonBind(expr: string): BaseStyleBuilder;
  checkBox(value: ControlStyleBuilder): BaseStyleBuilder;
  checkBoxBind(expr: string): BaseStyleBuilder;
  comboBox(value: ControlStyleBuilder): BaseStyleBuilder;
  comboBoxBind(expr: string): BaseStyleBuilder;
  control(value: ControlStyleBuilder): BaseStyleBuilder;
  controlBind(expr: string): BaseStyleBuilder;
  dark(value: QmlComponent): BaseStyleBuilder;
  darkBind(expr: string): BaseStyleBuilder;
  fallbackStyle(value: BaseStyleBuilder): BaseStyleBuilder;
  fallbackStyleBind(expr: string): BaseStyleBuilder;
  flatButton(value: ControlStyleBuilder): BaseStyleBuilder;
  flatButtonBind(expr: string): BaseStyleBuilder;
  frame(value: ControlStyleBuilder): BaseStyleBuilder;
  frameBind(expr: string): BaseStyleBuilder;
  groupBox(value: ControlStyleBuilder): BaseStyleBuilder;
  groupBoxBind(expr: string): BaseStyleBuilder;
  itemDelegate(value: ControlStyleBuilder): BaseStyleBuilder;
  itemDelegateBind(expr: string): BaseStyleBuilder;
  label(value: ControlStyleBuilder): BaseStyleBuilder;
  labelBind(expr: string): BaseStyleBuilder;
  light(value: QmlComponent): BaseStyleBuilder;
  lightBind(expr: string): BaseStyleBuilder;
  objectName(value: string): BaseStyleBuilder;
  objectNameBind(expr: string): BaseStyleBuilder;
  page(value: ControlStyleBuilder): BaseStyleBuilder;
  pageBind(expr: string): BaseStyleBuilder;
  pane(value: ControlStyleBuilder): BaseStyleBuilder;
  paneBind(expr: string): BaseStyleBuilder;
  popup(value: ControlStyleBuilder): BaseStyleBuilder;
  popupBind(expr: string): BaseStyleBuilder;
  progressBar(value: ControlStyleBuilder): BaseStyleBuilder;
  progressBarBind(expr: string): BaseStyleBuilder;
  radioButton(value: ControlStyleBuilder): BaseStyleBuilder;
  radioButtonBind(expr: string): BaseStyleBuilder;
  scrollBar(value: ControlStyleBuilder): BaseStyleBuilder;
  scrollBarBind(expr: string): BaseStyleBuilder;
  scrollIndicator(value: ControlStyleBuilder): BaseStyleBuilder;
  scrollIndicatorBind(expr: string): BaseStyleBuilder;
  scrollView(value: ControlStyleBuilder): BaseStyleBuilder;
  scrollViewBind(expr: string): BaseStyleBuilder;
  slider(value: ControlStyleBuilder): BaseStyleBuilder;
  sliderBind(expr: string): BaseStyleBuilder;
  spinBox(value: ControlStyleBuilder): BaseStyleBuilder;
  spinBoxBind(expr: string): BaseStyleBuilder;
  switchControl(value: ControlStyleBuilder): BaseStyleBuilder;
  switchControlBind(expr: string): BaseStyleBuilder;
  tabBar(value: ControlStyleBuilder): BaseStyleBuilder;
  tabBarBind(expr: string): BaseStyleBuilder;
  tabButton(value: ControlStyleBuilder): BaseStyleBuilder;
  tabButtonBind(expr: string): BaseStyleBuilder;
  textArea(value: ControlStyleBuilder): BaseStyleBuilder;
  textAreaBind(expr: string): BaseStyleBuilder;
  textField(value: ControlStyleBuilder): BaseStyleBuilder;
  textFieldBind(expr: string): BaseStyleBuilder;
  textInput(value: ControlStyleBuilder): BaseStyleBuilder;
  textInputBind(expr: string): BaseStyleBuilder;
  themeName(value: string): BaseStyleBuilder;
  themeNameBind(expr: string): BaseStyleBuilder;
  toolBar(value: ControlStyleBuilder): BaseStyleBuilder;
  toolBarBind(expr: string): BaseStyleBuilder;
  toolButton(value: ControlStyleBuilder): BaseStyleBuilder;
  toolButtonBind(expr: string): BaseStyleBuilder;
  toolSeparator(value: ControlStyleBuilder): BaseStyleBuilder;
  toolSeparatorBind(expr: string): BaseStyleBuilder;
  onAbstractButtonChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onApplicationWindowChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onButtonChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onCheckBoxChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onComboBoxChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onControlChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onCustomThemeNamesChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onDarkChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onDataChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onFallbackStyleChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onFlatButtonChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onFontsChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onFrameChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onGroupBoxChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onItemDelegateChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onLabelChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onLightChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onPageChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onPalettesChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onPaneChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onPopupChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onProgressBarChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onRadioButtonChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onScrollBarChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onScrollIndicatorChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onScrollViewChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onSliderChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onSpinBoxChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onSwitchControlChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onTabBarChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onTabButtonChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onTextAreaChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onTextFieldChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onTextInputChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onThemeChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onThemeNameChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onThemeNamesChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onToolBarChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onToolButtonChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  onToolSeparatorChanged(handler: DslSignalHandlerValue): BaseStyleBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): BaseStyleBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): BaseStyleBuilder;
}

const BASESTYLE_META: TypeMetadata = {
  typeName: 'BaseStyle',
  properties: [
    { name: 'abstractButton', hasValue: true, hasBinding: true },
    { name: 'applicationWindow', hasValue: true, hasBinding: true },
    { name: 'button', hasValue: true, hasBinding: true },
    { name: 'checkBox', hasValue: true, hasBinding: true },
    { name: 'comboBox', hasValue: true, hasBinding: true },
    { name: 'control', hasValue: true, hasBinding: true },
    { name: 'dark', hasValue: true, hasBinding: true },
    { name: 'fallbackStyle', hasValue: true, hasBinding: true },
    { name: 'flatButton', hasValue: true, hasBinding: true },
    { name: 'frame', hasValue: true, hasBinding: true },
    { name: 'groupBox', hasValue: true, hasBinding: true },
    { name: 'itemDelegate', hasValue: true, hasBinding: true },
    { name: 'label', hasValue: true, hasBinding: true },
    { name: 'light', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'page', hasValue: true, hasBinding: true },
    { name: 'pane', hasValue: true, hasBinding: true },
    { name: 'popup', hasValue: true, hasBinding: true },
    { name: 'progressBar', hasValue: true, hasBinding: true },
    { name: 'radioButton', hasValue: true, hasBinding: true },
    { name: 'scrollBar', hasValue: true, hasBinding: true },
    { name: 'scrollIndicator', hasValue: true, hasBinding: true },
    { name: 'scrollView', hasValue: true, hasBinding: true },
    { name: 'slider', hasValue: true, hasBinding: true },
    { name: 'spinBox', hasValue: true, hasBinding: true },
    { name: 'switchControl', hasValue: true, hasBinding: true },
    { name: 'tabBar', hasValue: true, hasBinding: true },
    { name: 'tabButton', hasValue: true, hasBinding: true },
    { name: 'textArea', hasValue: true, hasBinding: true },
    { name: 'textField', hasValue: true, hasBinding: true },
    { name: 'textInput', hasValue: true, hasBinding: true },
    { name: 'themeName', hasValue: true, hasBinding: true },
    { name: 'toolBar', hasValue: true, hasBinding: true },
    { name: 'toolButton', hasValue: true, hasBinding: true },
    { name: 'toolSeparator', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAbstractButtonChanged', paramCount: 0 },
    { handlerName: 'onApplicationWindowChanged', paramCount: 0 },
    { handlerName: 'onButtonChanged', paramCount: 0 },
    { handlerName: 'onCheckBoxChanged', paramCount: 0 },
    { handlerName: 'onComboBoxChanged', paramCount: 0 },
    { handlerName: 'onControlChanged', paramCount: 0 },
    { handlerName: 'onCustomThemeNamesChanged', paramCount: 0 },
    { handlerName: 'onDarkChanged', paramCount: 0 },
    { handlerName: 'onDataChanged', paramCount: 0 },
    { handlerName: 'onFallbackStyleChanged', paramCount: 0 },
    { handlerName: 'onFlatButtonChanged', paramCount: 0 },
    { handlerName: 'onFontsChanged', paramCount: 0 },
    { handlerName: 'onFrameChanged', paramCount: 0 },
    { handlerName: 'onGroupBoxChanged', paramCount: 0 },
    { handlerName: 'onItemDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelChanged', paramCount: 0 },
    { handlerName: 'onLightChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPageChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPalettesChanged', paramCount: 0 },
    { handlerName: 'onPaneChanged', paramCount: 0 },
    { handlerName: 'onPopupChanged', paramCount: 0 },
    { handlerName: 'onProgressBarChanged', paramCount: 0 },
    { handlerName: 'onRadioButtonChanged', paramCount: 0 },
    { handlerName: 'onScrollBarChanged', paramCount: 0 },
    { handlerName: 'onScrollIndicatorChanged', paramCount: 0 },
    { handlerName: 'onScrollViewChanged', paramCount: 0 },
    { handlerName: 'onSliderChanged', paramCount: 0 },
    { handlerName: 'onSpinBoxChanged', paramCount: 0 },
    { handlerName: 'onSwitchControlChanged', paramCount: 0 },
    { handlerName: 'onTabBarChanged', paramCount: 0 },
    { handlerName: 'onTabButtonChanged', paramCount: 0 },
    { handlerName: 'onTextAreaChanged', paramCount: 0 },
    { handlerName: 'onTextFieldChanged', paramCount: 0 },
    { handlerName: 'onTextInputChanged', paramCount: 0 },
    { handlerName: 'onThemeChanged', paramCount: 0 },
    { handlerName: 'onThemeNameChanged', paramCount: 0 },
    { handlerName: 'onThemeNamesChanged', paramCount: 0 },
    { handlerName: 'onToolBarChanged', paramCount: 0 },
    { handlerName: 'onToolButtonChanged', paramCount: 0 },
    { handlerName: 'onToolSeparatorChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [
    {
      methodName: 'styleKit',
      attachedTypeName: 'StyleKit',
      properties: [
        { name: 'style', hasValue: true, hasBinding: true },
        { name: 'styleUrl', hasValue: true, hasBinding: true },
        { name: 'transitionsEnabled', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onStyleChanged', paramCount: 0 },
        { handlerName: 'onStyleUrlChanged', paramCount: 0 },
        { handlerName: 'onTransitionsEnabledChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'styleVariation',
      attachedTypeName: 'StyleVariation',
      properties: [
        { name: 'controlType', hasValue: true, hasBinding: true },
        { name: 'variations', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlTypeChanged', paramCount: 0 },
        { handlerName: 'onVariationsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function BaseStyle(): BaseStyleBuilder {
  return createFluentBuilder('BaseStyle', BASESTYLE_META) as unknown as BaseStyleBuilder;
}

export namespace BaseStyle {
  export namespace Constants {
    export const Stretch = createEnumToken('BaseStyle', 'Constants', 'Stretch');
  }
}
