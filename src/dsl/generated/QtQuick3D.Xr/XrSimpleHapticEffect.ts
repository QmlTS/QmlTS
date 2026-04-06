// AUTO-GENERATED — DO NOT EDIT
// Type: XrSimpleHapticEffect
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface XrSimpleHapticEffectBuilder {
  id(id: string): XrSimpleHapticEffectBuilder;
  child(obj: QmlObjectBuilder): XrSimpleHapticEffectBuilder;
  children(...objs: QmlObjectBuilder[]): XrSimpleHapticEffectBuilder;

  amplitude(value: number): XrSimpleHapticEffectBuilder;
  amplitudeBind(expr: string): XrSimpleHapticEffectBuilder;
  duration(value: number): XrSimpleHapticEffectBuilder;
  durationBind(expr: string): XrSimpleHapticEffectBuilder;
  frequency(value: number): XrSimpleHapticEffectBuilder;
  frequencyBind(expr: string): XrSimpleHapticEffectBuilder;
  objectName(value: string): XrSimpleHapticEffectBuilder;
  objectNameBind(expr: string): XrSimpleHapticEffectBuilder;
  onAmplitudeChanged(handler: DslSignalHandlerValue): XrSimpleHapticEffectBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): XrSimpleHapticEffectBuilder;
  onFrequencyChanged(handler: DslSignalHandlerValue): XrSimpleHapticEffectBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): XrSimpleHapticEffectBuilder;
}

const XRSIMPLEHAPTICEFFECT_META: TypeMetadata = {
  typeName: 'XrSimpleHapticEffect',
  properties: [
    { name: 'amplitude', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'frequency', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAmplitudeChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 0 },
    { handlerName: 'onFrequencyChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function XrSimpleHapticEffect(): XrSimpleHapticEffectBuilder {
  return createFluentBuilder(
    'XrSimpleHapticEffect',
    XRSIMPLEHAPTICEFFECT_META,
  ) as unknown as XrSimpleHapticEffectBuilder;
}
