// AUTO-GENERATED — DO NOT EDIT
// Type: StyleKitDebug
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { StyleKitAttachedBuilder } from './QQStyleKitAttached.js';
import type { StyleVariationAttachedBuilder } from './QQStyleKitVariationAttached.js';
export interface StyleKitDebugBuilder {
  id(id: string): StyleKitDebugBuilder;
  child(obj: QmlObjectBuilder): StyleKitDebugBuilder;

  control(value: ItemBuilder): StyleKitDebugBuilder;
  controlBind(expr: string): StyleKitDebugBuilder;
  filter(value: string): StyleKitDebugBuilder;
  filterBind(expr: string): StyleKitDebugBuilder;
  objectName(value: string): StyleKitDebugBuilder;
  objectNameBind(expr: string): StyleKitDebugBuilder;
  onControlChanged(body: string): StyleKitDebugBuilder;
  onFilterChanged(body: string): StyleKitDebugBuilder;
  onObjectNameChanged(body: string): StyleKitDebugBuilder;
  styleKit(setup: (b: StyleKitAttachedBuilder) => void): StyleKitDebugBuilder;
  styleVariation(setup: (b: StyleVariationAttachedBuilder) => void): StyleKitDebugBuilder;
}

const STYLEKITDEBUG_META: TypeMetadata = {
  typeName: 'StyleKitDebug',
  properties: [
    { name: 'control', hasValue: true, hasBinding: true },
    { name: 'filter', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onControlChanged', paramCount: 0 },
    { handlerName: 'onFilterChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
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

export function StyleKitDebug(): StyleKitDebugBuilder {
  return createFluentBuilder(
    'StyleKitDebug',
    STYLEKITDEBUG_META,
  ) as unknown as StyleKitDebugBuilder;
}
