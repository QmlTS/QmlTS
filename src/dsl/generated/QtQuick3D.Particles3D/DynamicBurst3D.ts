// AUTO-GENERATED — DO NOT EDIT
// Type: DynamicBurst3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface DynamicBurst3DBuilder {
  id(id: string): DynamicBurst3DBuilder;
  child(obj: QmlObjectBuilder): DynamicBurst3DBuilder;
  children(...objs: QmlObjectBuilder[]): DynamicBurst3DBuilder;

  amount(value: number): DynamicBurst3DBuilder;
  amountBind(expr: string): DynamicBurst3DBuilder;
  amountVariation(value: number): DynamicBurst3DBuilder;
  amountVariationBind(expr: string): DynamicBurst3DBuilder;
  duration(value: number): DynamicBurst3DBuilder;
  durationBind(expr: string): DynamicBurst3DBuilder;
  enabled(value: boolean): DynamicBurst3DBuilder;
  enabledBind(expr: string): DynamicBurst3DBuilder;
  objectName(value: string): DynamicBurst3DBuilder;
  objectNameBind(expr: string): DynamicBurst3DBuilder;
  time(value: number): DynamicBurst3DBuilder;
  timeBind(expr: string): DynamicBurst3DBuilder;
  triggerMode(value: QmlEnumToken): DynamicBurst3DBuilder;
  triggerModeBind(expr: string): DynamicBurst3DBuilder;
  onAmountChanged(handler: DslSignalHandlerValue): DynamicBurst3DBuilder;
  onAmountVariationChanged(handler: DslSignalHandlerValue): DynamicBurst3DBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): DynamicBurst3DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DynamicBurst3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DynamicBurst3DBuilder;
  onTimeChanged(handler: DslSignalHandlerValue): DynamicBurst3DBuilder;
  onTriggerModeChanged(handler: DslSignalHandlerValue): DynamicBurst3DBuilder;
}

const DYNAMICBURST3D_META: TypeMetadata = {
  typeName: 'DynamicBurst3D',
  properties: [
    { name: 'amount', hasValue: true, hasBinding: true },
    { name: 'amountVariation', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'time', hasValue: true, hasBinding: true },
    { name: 'triggerMode', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAmountChanged', paramCount: 0 },
    { handlerName: 'onAmountVariationChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTimeChanged', paramCount: 0 },
    { handlerName: 'onTriggerModeChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function DynamicBurst3D(): DynamicBurst3DBuilder {
  return createFluentBuilder(
    'DynamicBurst3D',
    DYNAMICBURST3D_META,
  ) as unknown as DynamicBurst3DBuilder;
}

export namespace DynamicBurst3D {
  export namespace TriggerMode {
    export const TriggerTime = createEnumToken('DynamicBurst3D', 'TriggerMode', 'TriggerTime');
    export const TriggerStart = createEnumToken('DynamicBurst3D', 'TriggerMode', 'TriggerStart');
    export const TriggerEnd = createEnumToken('DynamicBurst3D', 'TriggerMode', 'TriggerEnd');
  }
}
