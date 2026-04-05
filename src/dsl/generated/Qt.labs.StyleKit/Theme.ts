// AUTO-GENERATED — DO NOT EDIT
// Type: Theme
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ControlStyleBuilder } from './ControlStyle.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface ThemeBuilder {
  id(id: string): ThemeBuilder;
  child(obj: QmlObjectBuilder): ThemeBuilder;

  abstractButton(value: ControlStyleBuilder): ThemeBuilder;
  abstractButtonBind(expr: string): ThemeBuilder;
  applicationWindow(value: ControlStyleBuilder): ThemeBuilder;
  applicationWindowBind(expr: string): ThemeBuilder;
  button(value: ControlStyleBuilder): ThemeBuilder;
  buttonBind(expr: string): ThemeBuilder;
  checkBox(value: ControlStyleBuilder): ThemeBuilder;
  checkBoxBind(expr: string): ThemeBuilder;
  comboBox(value: ControlStyleBuilder): ThemeBuilder;
  comboBoxBind(expr: string): ThemeBuilder;
  control(value: ControlStyleBuilder): ThemeBuilder;
  controlBind(expr: string): ThemeBuilder;
  flatButton(value: ControlStyleBuilder): ThemeBuilder;
  flatButtonBind(expr: string): ThemeBuilder;
  frame(value: ControlStyleBuilder): ThemeBuilder;
  frameBind(expr: string): ThemeBuilder;
  groupBox(value: ControlStyleBuilder): ThemeBuilder;
  groupBoxBind(expr: string): ThemeBuilder;
  itemDelegate(value: ControlStyleBuilder): ThemeBuilder;
  itemDelegateBind(expr: string): ThemeBuilder;
  label(value: ControlStyleBuilder): ThemeBuilder;
  labelBind(expr: string): ThemeBuilder;
  objectName(value: string): ThemeBuilder;
  objectNameBind(expr: string): ThemeBuilder;
  page(value: ControlStyleBuilder): ThemeBuilder;
  pageBind(expr: string): ThemeBuilder;
  pane(value: ControlStyleBuilder): ThemeBuilder;
  paneBind(expr: string): ThemeBuilder;
  popup(value: ControlStyleBuilder): ThemeBuilder;
  popupBind(expr: string): ThemeBuilder;
  progressBar(value: ControlStyleBuilder): ThemeBuilder;
  progressBarBind(expr: string): ThemeBuilder;
  radioButton(value: ControlStyleBuilder): ThemeBuilder;
  radioButtonBind(expr: string): ThemeBuilder;
  scrollBar(value: ControlStyleBuilder): ThemeBuilder;
  scrollBarBind(expr: string): ThemeBuilder;
  scrollIndicator(value: ControlStyleBuilder): ThemeBuilder;
  scrollIndicatorBind(expr: string): ThemeBuilder;
  scrollView(value: ControlStyleBuilder): ThemeBuilder;
  scrollViewBind(expr: string): ThemeBuilder;
  slider(value: ControlStyleBuilder): ThemeBuilder;
  sliderBind(expr: string): ThemeBuilder;
  spinBox(value: ControlStyleBuilder): ThemeBuilder;
  spinBoxBind(expr: string): ThemeBuilder;
  switchControl(value: ControlStyleBuilder): ThemeBuilder;
  switchControlBind(expr: string): ThemeBuilder;
  tabBar(value: ControlStyleBuilder): ThemeBuilder;
  tabBarBind(expr: string): ThemeBuilder;
  tabButton(value: ControlStyleBuilder): ThemeBuilder;
  tabButtonBind(expr: string): ThemeBuilder;
  textArea(value: ControlStyleBuilder): ThemeBuilder;
  textAreaBind(expr: string): ThemeBuilder;
  textField(value: ControlStyleBuilder): ThemeBuilder;
  textFieldBind(expr: string): ThemeBuilder;
  textInput(value: ControlStyleBuilder): ThemeBuilder;
  textInputBind(expr: string): ThemeBuilder;
  toolBar(value: ControlStyleBuilder): ThemeBuilder;
  toolBarBind(expr: string): ThemeBuilder;
  toolButton(value: ControlStyleBuilder): ThemeBuilder;
  toolButtonBind(expr: string): ThemeBuilder;
  toolSeparator(value: ControlStyleBuilder): ThemeBuilder;
  toolSeparatorBind(expr: string): ThemeBuilder;
  onAbstractButtonChanged(body: string): ThemeBuilder;
  onApplicationWindowChanged(body: string): ThemeBuilder;
  onButtonChanged(body: string): ThemeBuilder;
  onCheckBoxChanged(body: string): ThemeBuilder;
  onComboBoxChanged(body: string): ThemeBuilder;
  onControlChanged(body: string): ThemeBuilder;
  onDataChanged(body: string): ThemeBuilder;
  onFlatButtonChanged(body: string): ThemeBuilder;
  onFontsChanged(body: string): ThemeBuilder;
  onFrameChanged(body: string): ThemeBuilder;
  onGroupBoxChanged(body: string): ThemeBuilder;
  onItemDelegateChanged(body: string): ThemeBuilder;
  onLabelChanged(body: string): ThemeBuilder;
  onObjectNameChanged(body: string): ThemeBuilder;
  onPageChanged(body: string): ThemeBuilder;
  onPalettesChanged(body: string): ThemeBuilder;
  onPaneChanged(body: string): ThemeBuilder;
  onPopupChanged(body: string): ThemeBuilder;
  onProgressBarChanged(body: string): ThemeBuilder;
  onRadioButtonChanged(body: string): ThemeBuilder;
  onScrollBarChanged(body: string): ThemeBuilder;
  onScrollIndicatorChanged(body: string): ThemeBuilder;
  onScrollViewChanged(body: string): ThemeBuilder;
  onSliderChanged(body: string): ThemeBuilder;
  onSpinBoxChanged(body: string): ThemeBuilder;
  onSwitchControlChanged(body: string): ThemeBuilder;
  onTabBarChanged(body: string): ThemeBuilder;
  onTabButtonChanged(body: string): ThemeBuilder;
  onTextAreaChanged(body: string): ThemeBuilder;
  onTextFieldChanged(body: string): ThemeBuilder;
  onTextInputChanged(body: string): ThemeBuilder;
  onToolBarChanged(body: string): ThemeBuilder;
  onToolButtonChanged(body: string): ThemeBuilder;
  onToolSeparatorChanged(body: string): ThemeBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): ThemeBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): ThemeBuilder;
}

const THEME_META: TypeMetadata = {
  typeName: 'Theme',
  properties: [
    { name: 'abstractButton', hasValue: true, hasBinding: true },
    { name: 'applicationWindow', hasValue: true, hasBinding: true },
    { name: 'button', hasValue: true, hasBinding: true },
    { name: 'checkBox', hasValue: true, hasBinding: true },
    { name: 'comboBox', hasValue: true, hasBinding: true },
    { name: 'control', hasValue: true, hasBinding: true },
    { name: 'flatButton', hasValue: true, hasBinding: true },
    { name: 'frame', hasValue: true, hasBinding: true },
    { name: 'groupBox', hasValue: true, hasBinding: true },
    { name: 'itemDelegate', hasValue: true, hasBinding: true },
    { name: 'label', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDataChanged', paramCount: 0 },
    { handlerName: 'onFlatButtonChanged', paramCount: 0 },
    { handlerName: 'onFontsChanged', paramCount: 0 },
    { handlerName: 'onFrameChanged', paramCount: 0 },
    { handlerName: 'onGroupBoxChanged', paramCount: 0 },
    { handlerName: 'onItemDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPageChanged', paramCount: 0 },
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

export function Theme(): ThemeBuilder {
  return createFluentBuilder('Theme', THEME_META) as unknown as ThemeBuilder;
}
