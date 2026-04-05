// AUTO-GENERATED — DO NOT EDIT
// Type: PhysicsMaterial
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface PhysicsMaterialBuilder {
  id(id: string): PhysicsMaterialBuilder;
  child(obj: QmlObjectBuilder): PhysicsMaterialBuilder;

  dynamicFriction(value: number): PhysicsMaterialBuilder;
  dynamicFrictionBind(expr: string): PhysicsMaterialBuilder;
  objectName(value: string): PhysicsMaterialBuilder;
  objectNameBind(expr: string): PhysicsMaterialBuilder;
  restitution(value: number): PhysicsMaterialBuilder;
  restitutionBind(expr: string): PhysicsMaterialBuilder;
  staticFriction(value: number): PhysicsMaterialBuilder;
  staticFrictionBind(expr: string): PhysicsMaterialBuilder;
  onDynamicFrictionChanged(body: string): PhysicsMaterialBuilder;
  onObjectNameChanged(body: string): PhysicsMaterialBuilder;
  onRestitutionChanged(body: string): PhysicsMaterialBuilder;
  onStaticFrictionChanged(body: string): PhysicsMaterialBuilder;
}

const PHYSICSMATERIAL_META: TypeMetadata = {
  typeName: 'PhysicsMaterial',
  properties: [
    { name: 'dynamicFriction', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'restitution', hasValue: true, hasBinding: true },
    { name: 'staticFriction', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDynamicFrictionChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRestitutionChanged', paramCount: 0 },
    { handlerName: 'onStaticFrictionChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PhysicsMaterial(): PhysicsMaterialBuilder {
  return createFluentBuilder('PhysicsMaterial', PHYSICSMATERIAL_META) as unknown as PhysicsMaterialBuilder;
}
