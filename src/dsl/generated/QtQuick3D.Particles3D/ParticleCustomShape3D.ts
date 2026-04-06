// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleCustomShape3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ParticleCustomShape3DBuilder {
  id(id: string): ParticleCustomShape3DBuilder;
  child(obj: QmlObjectBuilder): ParticleCustomShape3DBuilder;
  children(...objs: QmlObjectBuilder[]): ParticleCustomShape3DBuilder;

  objectName(value: string): ParticleCustomShape3DBuilder;
  objectNameBind(expr: string): ParticleCustomShape3DBuilder;
  randomizeData(value: boolean): ParticleCustomShape3DBuilder;
  randomizeDataBind(expr: string): ParticleCustomShape3DBuilder;
  source(value: QmlUrl): ParticleCustomShape3DBuilder;
  sourceBind(expr: string): ParticleCustomShape3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ParticleCustomShape3DBuilder;
  onRandomizeDataChanged(handler: DslSignalHandlerValue): ParticleCustomShape3DBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): ParticleCustomShape3DBuilder;
}

const PARTICLECUSTOMSHAPE3D_META: TypeMetadata = {
  typeName: 'ParticleCustomShape3D',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'randomizeData', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRandomizeDataChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ParticleCustomShape3D(): ParticleCustomShape3DBuilder {
  return createFluentBuilder(
    'ParticleCustomShape3D',
    PARTICLECUSTOMSHAPE3D_META,
  ) as unknown as ParticleCustomShape3DBuilder;
}
