// AUTO-GENERATED — DO NOT EDIT
// Type: Fog
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface FogBuilder {
  id(id: string): FogBuilder;
  child(obj: QmlObjectBuilder): FogBuilder;

  color(value: QmlColor): FogBuilder;
  colorBind(expr: string): FogBuilder;
  density(value: number): FogBuilder;
  densityBind(expr: string): FogBuilder;
  depthCurve(value: number): FogBuilder;
  depthCurveBind(expr: string): FogBuilder;
  depthEnabled(value: boolean): FogBuilder;
  depthEnabledBind(expr: string): FogBuilder;
  depthFar(value: number): FogBuilder;
  depthFarBind(expr: string): FogBuilder;
  depthNear(value: number): FogBuilder;
  depthNearBind(expr: string): FogBuilder;
  enabled(value: boolean): FogBuilder;
  enabledBind(expr: string): FogBuilder;
  heightCurve(value: number): FogBuilder;
  heightCurveBind(expr: string): FogBuilder;
  heightEnabled(value: boolean): FogBuilder;
  heightEnabledBind(expr: string): FogBuilder;
  leastIntenseY(value: number): FogBuilder;
  leastIntenseYBind(expr: string): FogBuilder;
  mostIntenseY(value: number): FogBuilder;
  mostIntenseYBind(expr: string): FogBuilder;
  objectName(value: string): FogBuilder;
  objectNameBind(expr: string): FogBuilder;
  transmitCurve(value: number): FogBuilder;
  transmitCurveBind(expr: string): FogBuilder;
  transmitEnabled(value: boolean): FogBuilder;
  transmitEnabledBind(expr: string): FogBuilder;
  onChanged(body: string): FogBuilder;
  onColorChanged(body: string): FogBuilder;
  onDensityChanged(body: string): FogBuilder;
  onDepthCurveChanged(body: string): FogBuilder;
  onDepthEnabledChanged(body: string): FogBuilder;
  onDepthFarChanged(body: string): FogBuilder;
  onDepthNearChanged(body: string): FogBuilder;
  onEnabledChanged(body: string): FogBuilder;
  onHeightCurveChanged(body: string): FogBuilder;
  onHeightEnabledChanged(body: string): FogBuilder;
  onLeastIntenseYChanged(body: string): FogBuilder;
  onMostIntenseYChanged(body: string): FogBuilder;
  onObjectNameChanged(body: string): FogBuilder;
  onTransmitCurveChanged(body: string): FogBuilder;
  onTransmitEnabledChanged(body: string): FogBuilder;
}

const FOG_META: TypeMetadata = {
  typeName: 'Fog',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'density', hasValue: true, hasBinding: true },
    { name: 'depthCurve', hasValue: true, hasBinding: true },
    { name: 'depthEnabled', hasValue: true, hasBinding: true },
    { name: 'depthFar', hasValue: true, hasBinding: true },
    { name: 'depthNear', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'heightCurve', hasValue: true, hasBinding: true },
    { name: 'heightEnabled', hasValue: true, hasBinding: true },
    { name: 'leastIntenseY', hasValue: true, hasBinding: true },
    { name: 'mostIntenseY', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'transmitCurve', hasValue: true, hasBinding: true },
    { name: 'transmitEnabled', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onDensityChanged', paramCount: 0 },
    { handlerName: 'onDepthCurveChanged', paramCount: 0 },
    { handlerName: 'onDepthEnabledChanged', paramCount: 0 },
    { handlerName: 'onDepthFarChanged', paramCount: 0 },
    { handlerName: 'onDepthNearChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onHeightCurveChanged', paramCount: 0 },
    { handlerName: 'onHeightEnabledChanged', paramCount: 0 },
    { handlerName: 'onLeastIntenseYChanged', paramCount: 0 },
    { handlerName: 'onMostIntenseYChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTransmitCurveChanged', paramCount: 0 },
    { handlerName: 'onTransmitEnabledChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Fog(): FogBuilder {
  return createFluentBuilder('Fog', FOG_META) as unknown as FogBuilder;
}
