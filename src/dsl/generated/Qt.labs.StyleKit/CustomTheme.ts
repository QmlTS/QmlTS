// AUTO-GENERATED — DO NOT EDIT
// Type: CustomTheme
// Generated from Qt 6.11.0

import type { QmlComponent, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface CustomThemeBuilder {
  id(id: string): CustomThemeBuilder;
  child(obj: QmlObjectBuilder): CustomThemeBuilder;

  name(value: string): CustomThemeBuilder;
  nameBind(expr: string): CustomThemeBuilder;
  objectName(value: string): CustomThemeBuilder;
  objectNameBind(expr: string): CustomThemeBuilder;
  theme(value: QmlComponent): CustomThemeBuilder;
  themeBind(expr: string): CustomThemeBuilder;
  onNameChanged(body: string): CustomThemeBuilder;
  onObjectNameChanged(body: string): CustomThemeBuilder;
  onThemeChanged(body: string): CustomThemeBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): CustomThemeBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): CustomThemeBuilder;
}

const CUSTOMTHEME_META: TypeMetadata = {
  typeName: 'CustomTheme',
  properties: [
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onThemeChanged', paramCount: 0 },
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

export function CustomTheme(): CustomThemeBuilder {
  return createFluentBuilder('CustomTheme', CUSTOMTHEME_META) as unknown as CustomThemeBuilder;
}
