// AUTO-GENERATED — DO NOT EDIT
// Type: ProximityFilter
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EntityBuilder } from '../Qt3D.Core/Entity.js';
export interface ProximityFilterBuilder {
  id(id: string): ProximityFilterBuilder;
  child(obj: QmlObjectBuilder): ProximityFilterBuilder;
  children(...objs: QmlObjectBuilder[]): ProximityFilterBuilder;

  distanceThreshold(value: number): ProximityFilterBuilder;
  distanceThresholdBind(expr: string): ProximityFilterBuilder;
  enabled(value: boolean): ProximityFilterBuilder;
  enabledBind(expr: string): ProximityFilterBuilder;
  entity(value: EntityBuilder): ProximityFilterBuilder;
  entityBind(expr: string): ProximityFilterBuilder;
  objectName(value: string): ProximityFilterBuilder;
  objectNameBind(expr: string): ProximityFilterBuilder;
  parent(value: QmlValue): ProximityFilterBuilder;
  parentBind(expr: string): ProximityFilterBuilder;
  onDistanceThresholdChanged(handler: DslSignalHandlerValue): ProximityFilterBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ProximityFilterBuilder;
  onEntityChanged(handler: DslSignalHandlerValue): ProximityFilterBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ProximityFilterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ProximityFilterBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ProximityFilterBuilder;
}

const PROXIMITYFILTER_META: TypeMetadata = {
  typeName: 'ProximityFilter',
  properties: [
    { name: 'distanceThreshold', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'entity', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDistanceThresholdChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEntityChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ProximityFilter(): ProximityFilterBuilder {
  return createFluentBuilder(
    'ProximityFilter',
    PROXIMITYFILTER_META,
  ) as unknown as ProximityFilterBuilder;
}
