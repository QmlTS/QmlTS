// AUTO-GENERATED — DO NOT EDIT
// Type: Technique
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TechniqueBuilder {
  id(id: string): TechniqueBuilder;
  child(obj: QmlObjectBuilder): TechniqueBuilder;
  children(...objs: QmlObjectBuilder[]): TechniqueBuilder;

  enabled(value: boolean): TechniqueBuilder;
  enabledBind(expr: string): TechniqueBuilder;
  objectName(value: string): TechniqueBuilder;
  objectNameBind(expr: string): TechniqueBuilder;
  parent(value: QmlValue): TechniqueBuilder;
  parentBind(expr: string): TechniqueBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TechniqueBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): TechniqueBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TechniqueBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TechniqueBuilder;
}

const TECHNIQUE_META: TypeMetadata = {
  typeName: 'Technique',
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

export function Technique(): TechniqueBuilder {
  return createFluentBuilder('Technique', TECHNIQUE_META) as unknown as TechniqueBuilder;
}
