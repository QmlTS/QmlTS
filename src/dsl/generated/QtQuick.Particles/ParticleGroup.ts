// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleGroup
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ParticleSystemBuilder } from './ParticleSystem.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface ParticleGroupBuilder {
  id(id: string): ParticleGroupBuilder;
  child(obj: QmlObjectBuilder): ParticleGroupBuilder;

  duration(value: number): ParticleGroupBuilder;
  durationBind(expr: string): ParticleGroupBuilder;
  durationVariation(value: number): ParticleGroupBuilder;
  durationVariationBind(expr: string): ParticleGroupBuilder;
  name(value: string): ParticleGroupBuilder;
  nameBind(expr: string): ParticleGroupBuilder;
  objectName(value: string): ParticleGroupBuilder;
  objectNameBind(expr: string): ParticleGroupBuilder;
  randomStart(value: boolean): ParticleGroupBuilder;
  randomStartBind(expr: string): ParticleGroupBuilder;
  system(value: ParticleSystemBuilder): ParticleGroupBuilder;
  systemBind(expr: string): ParticleGroupBuilder;
  to(value: QmlValue): ParticleGroupBuilder;
  toBind(expr: string): ParticleGroupBuilder;
  onDurationChanged(body: string): ParticleGroupBuilder;
  onDurationVariationChanged(body: string): ParticleGroupBuilder;
  onEntered(body: string): ParticleGroupBuilder;
  onNameChanged(body: string): ParticleGroupBuilder;
  onObjectNameChanged(body: string): ParticleGroupBuilder;
  onRandomStartChanged(body: string): ParticleGroupBuilder;
  onSystemChanged(body: string): ParticleGroupBuilder;
  onToChanged(body: string): ParticleGroupBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): ParticleGroupBuilder;
}

const PARTICLEGROUP_META: TypeMetadata = {
  typeName: 'ParticleGroup',
  properties: [
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'durationVariation', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'randomStart', hasValue: true, hasBinding: true },
    { name: 'system', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onDurationVariationChanged', paramCount: 1 },
    { handlerName: 'onEntered', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRandomStartChanged', paramCount: 1 },
    { handlerName: 'onSystemChanged', paramCount: 1 },
    { handlerName: 'onToChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [
    {
      methodName: 'itemParticle',
      attachedTypeName: 'ItemParticle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
  defaultProperty: 'particleChildren',
};

export function ParticleGroup(): ParticleGroupBuilder {
  return createFluentBuilder(
    'ParticleGroup',
    PARTICLEGROUP_META,
  ) as unknown as ParticleGroupBuilder;
}
