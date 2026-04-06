// AUTO-GENERATED — DO NOT EDIT
// Type: StyleFont
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface StyleFontBuilder {
  id(id: string): StyleFontBuilder;
  child(obj: QmlObjectBuilder): StyleFontBuilder;
  children(...objs: QmlObjectBuilder[]): StyleFontBuilder;

  button(value: QmlFont): StyleFontBuilder;
  buttonBind(expr: string): StyleFontBuilder;
  checkBox(value: QmlFont): StyleFontBuilder;
  checkBoxBind(expr: string): StyleFontBuilder;
  comboBox(value: QmlFont): StyleFontBuilder;
  comboBoxBind(expr: string): StyleFontBuilder;
  groupBox(value: QmlFont): StyleFontBuilder;
  groupBoxBind(expr: string): StyleFontBuilder;
  itemDelegate(value: QmlFont): StyleFontBuilder;
  itemDelegateBind(expr: string): StyleFontBuilder;
  label(value: QmlFont): StyleFontBuilder;
  labelBind(expr: string): StyleFontBuilder;
  objectName(value: string): StyleFontBuilder;
  objectNameBind(expr: string): StyleFontBuilder;
  radioButton(value: QmlFont): StyleFontBuilder;
  radioButtonBind(expr: string): StyleFontBuilder;
  spinBox(value: QmlFont): StyleFontBuilder;
  spinBoxBind(expr: string): StyleFontBuilder;
  switchControl(value: QmlFont): StyleFontBuilder;
  switchControlBind(expr: string): StyleFontBuilder;
  system(value: QmlFont): StyleFontBuilder;
  systemBind(expr: string): StyleFontBuilder;
  tabBar(value: QmlFont): StyleFontBuilder;
  tabBarBind(expr: string): StyleFontBuilder;
  textArea(value: QmlFont): StyleFontBuilder;
  textAreaBind(expr: string): StyleFontBuilder;
  textField(value: QmlFont): StyleFontBuilder;
  textFieldBind(expr: string): StyleFontBuilder;
  toolBar(value: QmlFont): StyleFontBuilder;
  toolBarBind(expr: string): StyleFontBuilder;
  onButtonChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onCheckBoxChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onComboBoxChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onFallbackFontChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onGroupBoxChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onItemDelegateChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onLabelChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onRadioButtonChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onSpinBoxChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onSwitchControlChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onTabBarChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onTextAreaChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onTextFieldChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  onToolBarChanged(handler: DslSignalHandlerValue): StyleFontBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): StyleFontBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): StyleFontBuilder;
}

const STYLEFONT_META: TypeMetadata = {
  typeName: 'StyleFont',
  properties: [
    { name: 'button', hasValue: true, hasBinding: true },
    { name: 'checkBox', hasValue: true, hasBinding: true },
    { name: 'comboBox', hasValue: true, hasBinding: true },
    { name: 'groupBox', hasValue: true, hasBinding: true },
    { name: 'itemDelegate', hasValue: true, hasBinding: true },
    { name: 'label', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'radioButton', hasValue: true, hasBinding: true },
    { name: 'spinBox', hasValue: true, hasBinding: true },
    { name: 'switchControl', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'tabBar', hasValue: true, hasBinding: true },
    { name: 'textArea', hasValue: true, hasBinding: true },
    { name: 'textField', hasValue: true, hasBinding: true },
    { name: 'toolBar', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onButtonChanged', paramCount: 0 },
    { handlerName: 'onCheckBoxChanged', paramCount: 0 },
    { handlerName: 'onComboBoxChanged', paramCount: 0 },
    { handlerName: 'onFallbackFontChanged', paramCount: 0 },
    { handlerName: 'onGroupBoxChanged', paramCount: 0 },
    { handlerName: 'onItemDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRadioButtonChanged', paramCount: 0 },
    { handlerName: 'onSpinBoxChanged', paramCount: 0 },
    { handlerName: 'onSwitchControlChanged', paramCount: 0 },
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onTabBarChanged', paramCount: 0 },
    { handlerName: 'onTextAreaChanged', paramCount: 0 },
    { handlerName: 'onTextFieldChanged', paramCount: 0 },
    { handlerName: 'onToolBarChanged', paramCount: 0 },
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

export function StyleFont(): StyleFontBuilder {
  return createFluentBuilder('StyleFont', STYLEFONT_META) as unknown as StyleFontBuilder;
}
