// AUTO-GENERATED — DO NOT EDIT
// Type: InstanceList
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface InstanceListBuilder {
  id(id: string): InstanceListBuilder;
  child(obj: QmlObjectBuilder): InstanceListBuilder;

  depthSortingEnabled(value: boolean): InstanceListBuilder;
  depthSortingEnabledBind(expr: string): InstanceListBuilder;
  hasTransparency(value: boolean): InstanceListBuilder;
  hasTransparencyBind(expr: string): InstanceListBuilder;
  instanceCountOverride(value: number): InstanceListBuilder;
  instanceCountOverrideBind(expr: string): InstanceListBuilder;
  objectName(value: string): InstanceListBuilder;
  objectNameBind(expr: string): InstanceListBuilder;
  parent(value: QmlValue): InstanceListBuilder;
  parentBind(expr: string): InstanceListBuilder;
  shadowBoundsMaximum(value: QmlVector3d): InstanceListBuilder;
  shadowBoundsMaximumBind(expr: string): InstanceListBuilder;
  shadowBoundsMinimum(value: QmlVector3d): InstanceListBuilder;
  shadowBoundsMinimumBind(expr: string): InstanceListBuilder;
  state(value: string): InstanceListBuilder;
  stateBind(expr: string): InstanceListBuilder;
  onChildrenChanged(body: string): InstanceListBuilder;
  onDepthSortingEnabledChanged(body: string): InstanceListBuilder;
  onHasTransparencyChanged(body: string): InstanceListBuilder;
  onInstanceCountChanged(body: string): InstanceListBuilder;
  onInstanceCountOverrideChanged(body: string): InstanceListBuilder;
  onInstanceNodeDirty(body: string): InstanceListBuilder;
  onInstanceTableChanged(body: string): InstanceListBuilder;
  onObjectNameChanged(body: string): InstanceListBuilder;
  onParentChanged(body: string): InstanceListBuilder;
  onShadowBoundsMaximumChanged(body: string): InstanceListBuilder;
  onShadowBoundsMinimumChanged(body: string): InstanceListBuilder;
  onStateChanged(body: string): InstanceListBuilder;
}

const INSTANCELIST_META: TypeMetadata = {
  typeName: 'InstanceList',
  properties: [
    { name: 'depthSortingEnabled', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'instanceCountOverride', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shadowBoundsMaximum', hasValue: true, hasBinding: true },
    { name: 'shadowBoundsMinimum', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDepthSortingEnabledChanged', paramCount: 0 },
    { handlerName: 'onHasTransparencyChanged', paramCount: 0 },
    { handlerName: 'onInstanceCountChanged', paramCount: 0 },
    { handlerName: 'onInstanceCountOverrideChanged', paramCount: 0 },
    { handlerName: 'onInstanceNodeDirty', paramCount: 0 },
    { handlerName: 'onInstanceTableChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onShadowBoundsMaximumChanged', paramCount: 0 },
    { handlerName: 'onShadowBoundsMinimumChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'instances',
};

export function InstanceList(): InstanceListBuilder {
  return createFluentBuilder('InstanceList', INSTANCELIST_META) as unknown as InstanceListBuilder;
}
