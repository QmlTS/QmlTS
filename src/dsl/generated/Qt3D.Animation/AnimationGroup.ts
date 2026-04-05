// AUTO-GENERATED — DO NOT EDIT
// Type: AnimationGroup
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface AnimationGroupBuilder {
  id(id: string): AnimationGroupBuilder;
  child(obj: QmlObjectBuilder): AnimationGroupBuilder;

  name(value: string): AnimationGroupBuilder;
  nameBind(expr: string): AnimationGroupBuilder;
  objectName(value: string): AnimationGroupBuilder;
  objectNameBind(expr: string): AnimationGroupBuilder;
  position(value: number): AnimationGroupBuilder;
  positionBind(expr: string): AnimationGroupBuilder;
  onDurationChanged(body: string): AnimationGroupBuilder;
  onNameChanged(body: string): AnimationGroupBuilder;
  onObjectNameChanged(body: string): AnimationGroupBuilder;
  onPositionChanged(body: string): AnimationGroupBuilder;
}

const ANIMATIONGROUP_META: TypeMetadata = {
  typeName: 'AnimationGroup',
  properties: [
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function AnimationGroup(): AnimationGroupBuilder {
  return createFluentBuilder('AnimationGroup', ANIMATIONGROUP_META) as unknown as AnimationGroupBuilder;
}
