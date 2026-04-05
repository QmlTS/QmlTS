// AUTO-GENERATED — DO NOT EDIT
// Type: Lightmapper
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface LightmapperBuilder {
  id(id: string): LightmapperBuilder;
  child(obj: QmlObjectBuilder): LightmapperBuilder;

  adaptiveBiasEnabled(value: boolean): LightmapperBuilder;
  adaptiveBiasEnabledBind(expr: string): LightmapperBuilder;
  bias(value: number): LightmapperBuilder;
  biasBind(expr: string): LightmapperBuilder;
  bounces(value: number): LightmapperBuilder;
  bouncesBind(expr: string): LightmapperBuilder;
  denoiseSigma(value: number): LightmapperBuilder;
  denoiseSigmaBind(expr: string): LightmapperBuilder;
  indirectLightEnabled(value: boolean): LightmapperBuilder;
  indirectLightEnabledBind(expr: string): LightmapperBuilder;
  indirectLightFactor(value: number): LightmapperBuilder;
  indirectLightFactorBind(expr: string): LightmapperBuilder;
  indirectLightWorkgroupSize(value: number): LightmapperBuilder;
  indirectLightWorkgroupSizeBind(expr: string): LightmapperBuilder;
  objectName(value: string): LightmapperBuilder;
  objectNameBind(expr: string): LightmapperBuilder;
  opacityThreshold(value: number): LightmapperBuilder;
  opacityThresholdBind(expr: string): LightmapperBuilder;
  samples(value: number): LightmapperBuilder;
  samplesBind(expr: string): LightmapperBuilder;
  source(value: QmlUrl): LightmapperBuilder;
  sourceBind(expr: string): LightmapperBuilder;
  texelsPerUnit(value: number): LightmapperBuilder;
  texelsPerUnitBind(expr: string): LightmapperBuilder;
  onAdaptiveBiasEnabledChanged(body: string): LightmapperBuilder;
  onBiasChanged(body: string): LightmapperBuilder;
  onBouncesChanged(body: string): LightmapperBuilder;
  onChanged(body: string): LightmapperBuilder;
  onDenoiseSigmaChanged(body: string): LightmapperBuilder;
  onIndirectLightEnabledChanged(body: string): LightmapperBuilder;
  onIndirectLightFactorChanged(body: string): LightmapperBuilder;
  onIndirectLightWorkgroupSizeChanged(body: string): LightmapperBuilder;
  onObjectNameChanged(body: string): LightmapperBuilder;
  onOpacityThresholdChanged(body: string): LightmapperBuilder;
  onSamplesChanged(body: string): LightmapperBuilder;
  onSourceChanged(body: string): LightmapperBuilder;
  onTexelsPerUnitChanged(body: string): LightmapperBuilder;
}

const LIGHTMAPPER_META: TypeMetadata = {
  typeName: 'Lightmapper',
  properties: [
    { name: 'adaptiveBiasEnabled', hasValue: true, hasBinding: true },
    { name: 'bias', hasValue: true, hasBinding: true },
    { name: 'bounces', hasValue: true, hasBinding: true },
    { name: 'denoiseSigma', hasValue: true, hasBinding: true },
    { name: 'indirectLightEnabled', hasValue: true, hasBinding: true },
    { name: 'indirectLightFactor', hasValue: true, hasBinding: true },
    { name: 'indirectLightWorkgroupSize', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacityThreshold', hasValue: true, hasBinding: true },
    { name: 'samples', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'texelsPerUnit', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAdaptiveBiasEnabledChanged', paramCount: 0 },
    { handlerName: 'onBiasChanged', paramCount: 0 },
    { handlerName: 'onBouncesChanged', paramCount: 0 },
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onDenoiseSigmaChanged', paramCount: 0 },
    { handlerName: 'onIndirectLightEnabledChanged', paramCount: 0 },
    { handlerName: 'onIndirectLightFactorChanged', paramCount: 0 },
    { handlerName: 'onIndirectLightWorkgroupSizeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityThresholdChanged', paramCount: 0 },
    { handlerName: 'onSamplesChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onTexelsPerUnitChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Lightmapper(): LightmapperBuilder {
  return createFluentBuilder('Lightmapper', LIGHTMAPPER_META) as unknown as LightmapperBuilder;
}
