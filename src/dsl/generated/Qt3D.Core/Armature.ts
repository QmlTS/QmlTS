// AUTO-GENERATED — DO NOT EDIT
// Type: Armature
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ArmatureBuilder {
  id(id: string): ArmatureBuilder;
  child(obj: QmlObjectBuilder): ArmatureBuilder;

  enabled(value: boolean): ArmatureBuilder;
  enabledBind(expr: string): ArmatureBuilder;
  isShareable(value: boolean): ArmatureBuilder;
  isShareableBind(expr: string): ArmatureBuilder;
  objectName(value: string): ArmatureBuilder;
  objectNameBind(expr: string): ArmatureBuilder;
  parent(value: QmlValue): ArmatureBuilder;
  parentBind(expr: string): ArmatureBuilder;
  skeleton(value: QmlValue): ArmatureBuilder;
  skeletonBind(expr: string): ArmatureBuilder;
  onAddedToEntity(body: string): ArmatureBuilder;
  onEnabledChanged(body: string): ArmatureBuilder;
  onNodeDestroyed(body: string): ArmatureBuilder;
  onObjectNameChanged(body: string): ArmatureBuilder;
  onParentChanged(body: string): ArmatureBuilder;
  onRemovedFromEntity(body: string): ArmatureBuilder;
  onShareableChanged(body: string): ArmatureBuilder;
  onSkeletonChanged(body: string): ArmatureBuilder;
}

const ARMATURE_META: TypeMetadata = {
  typeName: 'Armature',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'skeleton', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSkeletonChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Armature(): ArmatureBuilder {
  return createFluentBuilder('Armature', ARMATURE_META) as unknown as ArmatureBuilder;
}
