// AUTO-GENERATED — DO NOT EDIT
// Type: Entity
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface EntityBuilder {
  id(id: string): EntityBuilder;
  child(obj: QmlObjectBuilder): EntityBuilder;
  children(...objs: QmlObjectBuilder[]): EntityBuilder;

  enabled(value: boolean): EntityBuilder;
  enabledBind(expr: string): EntityBuilder;
  objectName(value: string): EntityBuilder;
  objectNameBind(expr: string): EntityBuilder;
  parent(value: QmlValue): EntityBuilder;
  parentBind(expr: string): EntityBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): EntityBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): EntityBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): EntityBuilder;
  onParentChanged(handler: DslSignalHandlerValue): EntityBuilder;
}

const ENTITY_META: TypeMetadata = {
  typeName: 'Entity',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Entity(): EntityBuilder {
  return createFluentBuilder('Entity', ENTITY_META) as unknown as EntityBuilder;
}
