// AUTO-GENERATED — DO NOT EDIT
// Type: EmitBurst3D
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface EmitBurst3DBuilder {
  id(id: string): EmitBurst3DBuilder;
  child(obj: QmlObjectBuilder): EmitBurst3DBuilder;
  children(...objs: QmlObjectBuilder[]): EmitBurst3DBuilder;

  amount(value: number): EmitBurst3DBuilder;
  amountBind(expr: string): EmitBurst3DBuilder;
  duration(value: number): EmitBurst3DBuilder;
  durationBind(expr: string): EmitBurst3DBuilder;
  objectName(value: string): EmitBurst3DBuilder;
  objectNameBind(expr: string): EmitBurst3DBuilder;
  time(value: number): EmitBurst3DBuilder;
  timeBind(expr: string): EmitBurst3DBuilder;
  onAmountChanged(handler: DslSignalHandlerValue): EmitBurst3DBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): EmitBurst3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): EmitBurst3DBuilder;
  onTimeChanged(handler: DslSignalHandlerValue): EmitBurst3DBuilder;
}

const EMITBURST3D_META: TypeMetadata = {
  typeName: 'EmitBurst3D',
  properties: [
    { name: 'amount', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'time', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAmountChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTimeChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function EmitBurst3D(): EmitBurst3DBuilder {
  return createFluentBuilder('EmitBurst3D', EMITBURST3D_META) as unknown as EmitBurst3DBuilder;
}
