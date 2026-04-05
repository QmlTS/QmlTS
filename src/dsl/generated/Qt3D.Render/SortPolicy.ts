// AUTO-GENERATED — DO NOT EDIT
// Type: SortPolicy
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface SortPolicyBuilder {
  id(id: string): SortPolicyBuilder;
  child(obj: QmlObjectBuilder): SortPolicyBuilder;

  enabled(value: boolean): SortPolicyBuilder;
  enabledBind(expr: string): SortPolicyBuilder;
  objectName(value: string): SortPolicyBuilder;
  objectNameBind(expr: string): SortPolicyBuilder;
  parent(value: QmlValue): SortPolicyBuilder;
  parentBind(expr: string): SortPolicyBuilder;
  sortTypes(value: number): SortPolicyBuilder;
  sortTypesBind(expr: string): SortPolicyBuilder;
  onEnabledChanged(body: string): SortPolicyBuilder;
  onNodeDestroyed(body: string): SortPolicyBuilder;
  onObjectNameChanged(body: string): SortPolicyBuilder;
  onParentChanged(body: string): SortPolicyBuilder;
  onSortTypesChanged(body: string): SortPolicyBuilder;
}

const SORTPOLICY_META: TypeMetadata = {
  typeName: 'SortPolicy',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sortTypes', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSortTypesChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function SortPolicy(): SortPolicyBuilder {
  return createFluentBuilder('SortPolicy', SORTPOLICY_META) as unknown as SortPolicyBuilder;
}

export namespace SortPolicy {
  export namespace SortType {
    export const StateChangeCost = createEnumToken('SortPolicy', 'SortType', 'StateChangeCost');
    export const BackToFront = createEnumToken('SortPolicy', 'SortType', 'BackToFront');
    export const Material = createEnumToken('SortPolicy', 'SortType', 'Material');
    export const FrontToBack = createEnumToken('SortPolicy', 'SortType', 'FrontToBack');
    export const Texture = createEnumToken('SortPolicy', 'SortType', 'Texture');
    export const Uniform = createEnumToken('SortPolicy', 'SortType', 'Uniform');
  }
}
