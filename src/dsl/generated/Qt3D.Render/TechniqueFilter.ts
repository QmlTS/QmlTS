// AUTO-GENERATED — DO NOT EDIT
// Type: TechniqueFilter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TechniqueFilterBuilder {
  id(id: string): TechniqueFilterBuilder;
  child(obj: QmlObjectBuilder): TechniqueFilterBuilder;

  enabled(value: boolean): TechniqueFilterBuilder;
  enabledBind(expr: string): TechniqueFilterBuilder;
  objectName(value: string): TechniqueFilterBuilder;
  objectNameBind(expr: string): TechniqueFilterBuilder;
  parent(value: QmlValue): TechniqueFilterBuilder;
  parentBind(expr: string): TechniqueFilterBuilder;
  onEnabledChanged(body: string): TechniqueFilterBuilder;
  onNodeDestroyed(body: string): TechniqueFilterBuilder;
  onObjectNameChanged(body: string): TechniqueFilterBuilder;
  onParentChanged(body: string): TechniqueFilterBuilder;
}

const TECHNIQUEFILTER_META: TypeMetadata = {
  typeName: 'TechniqueFilter',
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

export function TechniqueFilter(): TechniqueFilterBuilder {
  return createFluentBuilder(
    'TechniqueFilter',
    TECHNIQUEFILTER_META,
  ) as unknown as TechniqueFilterBuilder;
}
