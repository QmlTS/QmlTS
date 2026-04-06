// AUTO-GENERATED — DO NOT EDIT
// Type: StyleVariation
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ControlStyleBuilder } from './ControlStyle.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface StyleVariationBuilder {
  id(id: string): StyleVariationBuilder;
  child(obj: QmlObjectBuilder): StyleVariationBuilder;
  children(...objs: QmlObjectBuilder[]): StyleVariationBuilder;

  abstractButton(value: ControlStyleBuilder): StyleVariationBuilder;
  abstractButtonBind(expr: string): StyleVariationBuilder;
  applicationWindow(value: ControlStyleBuilder): StyleVariationBuilder;
  applicationWindowBind(expr: string): StyleVariationBuilder;
  button(value: ControlStyleBuilder): StyleVariationBuilder;
  buttonBind(expr: string): StyleVariationBuilder;
  checkBox(value: ControlStyleBuilder): StyleVariationBuilder;
  checkBoxBind(expr: string): StyleVariationBuilder;
  comboBox(value: ControlStyleBuilder): StyleVariationBuilder;
  comboBoxBind(expr: string): StyleVariationBuilder;
  control(value: ControlStyleBuilder): StyleVariationBuilder;
  controlBind(expr: string): StyleVariationBuilder;
  flatButton(value: ControlStyleBuilder): StyleVariationBuilder;
  flatButtonBind(expr: string): StyleVariationBuilder;
  frame(value: ControlStyleBuilder): StyleVariationBuilder;
  frameBind(expr: string): StyleVariationBuilder;
  groupBox(value: ControlStyleBuilder): StyleVariationBuilder;
  groupBoxBind(expr: string): StyleVariationBuilder;
  itemDelegate(value: ControlStyleBuilder): StyleVariationBuilder;
  itemDelegateBind(expr: string): StyleVariationBuilder;
  label(value: ControlStyleBuilder): StyleVariationBuilder;
  labelBind(expr: string): StyleVariationBuilder;
  name(value: string): StyleVariationBuilder;
  nameBind(expr: string): StyleVariationBuilder;
  objectName(value: string): StyleVariationBuilder;
  objectNameBind(expr: string): StyleVariationBuilder;
  page(value: ControlStyleBuilder): StyleVariationBuilder;
  pageBind(expr: string): StyleVariationBuilder;
  pane(value: ControlStyleBuilder): StyleVariationBuilder;
  paneBind(expr: string): StyleVariationBuilder;
  popup(value: ControlStyleBuilder): StyleVariationBuilder;
  popupBind(expr: string): StyleVariationBuilder;
  progressBar(value: ControlStyleBuilder): StyleVariationBuilder;
  progressBarBind(expr: string): StyleVariationBuilder;
  radioButton(value: ControlStyleBuilder): StyleVariationBuilder;
  radioButtonBind(expr: string): StyleVariationBuilder;
  scrollBar(value: ControlStyleBuilder): StyleVariationBuilder;
  scrollBarBind(expr: string): StyleVariationBuilder;
  scrollIndicator(value: ControlStyleBuilder): StyleVariationBuilder;
  scrollIndicatorBind(expr: string): StyleVariationBuilder;
  scrollView(value: ControlStyleBuilder): StyleVariationBuilder;
  scrollViewBind(expr: string): StyleVariationBuilder;
  slider(value: ControlStyleBuilder): StyleVariationBuilder;
  sliderBind(expr: string): StyleVariationBuilder;
  spinBox(value: ControlStyleBuilder): StyleVariationBuilder;
  spinBoxBind(expr: string): StyleVariationBuilder;
  switchControl(value: ControlStyleBuilder): StyleVariationBuilder;
  switchControlBind(expr: string): StyleVariationBuilder;
  tabBar(value: ControlStyleBuilder): StyleVariationBuilder;
  tabBarBind(expr: string): StyleVariationBuilder;
  tabButton(value: ControlStyleBuilder): StyleVariationBuilder;
  tabButtonBind(expr: string): StyleVariationBuilder;
  textArea(value: ControlStyleBuilder): StyleVariationBuilder;
  textAreaBind(expr: string): StyleVariationBuilder;
  textField(value: ControlStyleBuilder): StyleVariationBuilder;
  textFieldBind(expr: string): StyleVariationBuilder;
  textInput(value: ControlStyleBuilder): StyleVariationBuilder;
  textInputBind(expr: string): StyleVariationBuilder;
  toolBar(value: ControlStyleBuilder): StyleVariationBuilder;
  toolBarBind(expr: string): StyleVariationBuilder;
  toolButton(value: ControlStyleBuilder): StyleVariationBuilder;
  toolButtonBind(expr: string): StyleVariationBuilder;
  toolSeparator(value: ControlStyleBuilder): StyleVariationBuilder;
  toolSeparatorBind(expr: string): StyleVariationBuilder;
  onAbstractButtonChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onApplicationWindowChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onButtonChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onCheckBoxChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onComboBoxChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onControlChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onDataChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onFlatButtonChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onFrameChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onGroupBoxChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onItemDelegateChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onLabelChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onNameChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onPageChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onPaneChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onPopupChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onProgressBarChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onRadioButtonChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onScrollBarChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onScrollIndicatorChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onScrollViewChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onSliderChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onSpinBoxChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onSwitchControlChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onTabBarChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onTabButtonChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onTextAreaChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onTextFieldChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onTextInputChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onToolBarChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onToolButtonChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  onToolSeparatorChanged(handler: DslSignalHandlerValue): StyleVariationBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): StyleVariationBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): StyleVariationBuilder;
}

const STYLEVARIATION_META: TypeMetadata = {
  typeName: 'StyleVariation',
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
    { name: 'name', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFrameChanged', paramCount: 0 },
    { handlerName: 'onGroupBoxChanged', paramCount: 0 },
    { handlerName: 'onItemDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPageChanged', paramCount: 0 },
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
  defaultProperty: 'data',
};

export function StyleVariation(): StyleVariationBuilder {
  return createFluentBuilder(
    'StyleVariation',
    STYLEVARIATION_META,
  ) as unknown as StyleVariationBuilder;
}
