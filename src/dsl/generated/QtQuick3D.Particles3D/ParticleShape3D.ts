// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleShape3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ParticleShape3DBuilder {
  id(id: string): ParticleShape3DBuilder;
  child(obj: QmlObjectBuilder): ParticleShape3DBuilder;
  children(...objs: QmlObjectBuilder[]): ParticleShape3DBuilder;

  extents(value: QmlVector3d): ParticleShape3DBuilder;
  extentsBind(expr: string): ParticleShape3DBuilder;
  fill(value: boolean): ParticleShape3DBuilder;
  fillBind(expr: string): ParticleShape3DBuilder;
  objectName(value: string): ParticleShape3DBuilder;
  objectNameBind(expr: string): ParticleShape3DBuilder;
  type(value: QmlEnumToken): ParticleShape3DBuilder;
  typeBind(expr: string): ParticleShape3DBuilder;
  onExtentsChanged(handler: DslSignalHandlerValue): ParticleShape3DBuilder;
  onFillChanged(handler: DslSignalHandlerValue): ParticleShape3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ParticleShape3DBuilder;
  onTypeChanged(handler: DslSignalHandlerValue): ParticleShape3DBuilder;
}

const PARTICLESHAPE3D_META: TypeMetadata = {
  typeName: 'ParticleShape3D',
  properties: [
    { name: 'extents', hasValue: true, hasBinding: true },
    { name: 'fill', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'type', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onExtentsChanged', paramCount: 0 },
    { handlerName: 'onFillChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTypeChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ParticleShape3D(): ParticleShape3DBuilder {
  return createFluentBuilder(
    'ParticleShape3D',
    PARTICLESHAPE3D_META,
  ) as unknown as ParticleShape3DBuilder;
}

export namespace ParticleShape3D {
  export namespace ShapeType {
    export const Cube = createEnumToken('ParticleShape3D', 'ShapeType', 'Cube');
    export const Sphere = createEnumToken('ParticleShape3D', 'ShapeType', 'Sphere');
    export const Cylinder = createEnumToken('ParticleShape3D', 'ShapeType', 'Cylinder');
  }
}
