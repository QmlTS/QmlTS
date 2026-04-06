// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleModelShape3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ParticleModelShape3DBuilder {
  id(id: string): ParticleModelShape3DBuilder;
  child(obj: QmlObjectBuilder): ParticleModelShape3DBuilder;
  children(...objs: QmlObjectBuilder[]): ParticleModelShape3DBuilder;

  delegate(value: QmlComponent): ParticleModelShape3DBuilder;
  delegateBind(expr: string): ParticleModelShape3DBuilder;
  fill(value: boolean): ParticleModelShape3DBuilder;
  fillBind(expr: string): ParticleModelShape3DBuilder;
  objectName(value: string): ParticleModelShape3DBuilder;
  objectNameBind(expr: string): ParticleModelShape3DBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): ParticleModelShape3DBuilder;
  onFillChanged(handler: DslSignalHandlerValue): ParticleModelShape3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ParticleModelShape3DBuilder;
}

const PARTICLEMODELSHAPE3D_META: TypeMetadata = {
  typeName: 'ParticleModelShape3D',
  properties: [
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'fill', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onFillChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ParticleModelShape3D(): ParticleModelShape3DBuilder {
  return createFluentBuilder(
    'ParticleModelShape3D',
    PARTICLEMODELSHAPE3D_META,
  ) as unknown as ParticleModelShape3DBuilder;
}
