// AUTO-GENERATED — DO NOT EDIT
// Type: StylePalette
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface StylePaletteBuilder {
  id(id: string): StylePaletteBuilder;
  child(obj: QmlObjectBuilder): StylePaletteBuilder;
  children(...objs: QmlObjectBuilder[]): StylePaletteBuilder;

  objectName(value: string): StylePaletteBuilder;
  objectNameBind(expr: string): StylePaletteBuilder;
  onButtonChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onCheckBoxChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onComboBoxChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onFallbackPaletteChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onGroupBoxChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onItemDelegateChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onLabelChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onRadioButtonChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onSpinBoxChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onSwitchControlChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onTabBarChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onTextAreaChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onTextFieldChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  onToolBarChanged(handler: DslSignalHandlerValue): StylePaletteBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): StylePaletteBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): StylePaletteBuilder;
}

const STYLEPALETTE_META: TypeMetadata = {
  typeName: 'StylePalette',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onButtonChanged', paramCount: 0 },
    { handlerName: 'onCheckBoxChanged', paramCount: 0 },
    { handlerName: 'onComboBoxChanged', paramCount: 0 },
    { handlerName: 'onFallbackPaletteChanged', paramCount: 0 },
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

export function StylePalette(): StylePaletteBuilder {
  return createFluentBuilder('StylePalette', STYLEPALETTE_META) as unknown as StylePaletteBuilder;
}
