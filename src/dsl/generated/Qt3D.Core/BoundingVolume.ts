// AUTO-GENERATED — DO NOT EDIT
// Type: BoundingVolume
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { GeometryViewBuilder } from './GeometryView.js';
export interface BoundingVolumeBuilder {
  id(id: string): BoundingVolumeBuilder;
  child(obj: QmlObjectBuilder): BoundingVolumeBuilder;

  enabled(value: boolean): BoundingVolumeBuilder;
  enabledBind(expr: string): BoundingVolumeBuilder;
  isShareable(value: boolean): BoundingVolumeBuilder;
  isShareableBind(expr: string): BoundingVolumeBuilder;
  maxPoint(value: QmlVector3d): BoundingVolumeBuilder;
  maxPointBind(expr: string): BoundingVolumeBuilder;
  minPoint(value: QmlVector3d): BoundingVolumeBuilder;
  minPointBind(expr: string): BoundingVolumeBuilder;
  objectName(value: string): BoundingVolumeBuilder;
  objectNameBind(expr: string): BoundingVolumeBuilder;
  parent(value: QmlValue): BoundingVolumeBuilder;
  parentBind(expr: string): BoundingVolumeBuilder;
  view(value: GeometryViewBuilder): BoundingVolumeBuilder;
  viewBind(expr: string): BoundingVolumeBuilder;
  onAddedToEntity(body: string): BoundingVolumeBuilder;
  onEnabledChanged(body: string): BoundingVolumeBuilder;
  onImplicitMaxPointChanged(body: string): BoundingVolumeBuilder;
  onImplicitMinPointChanged(body: string): BoundingVolumeBuilder;
  onImplicitPointsValidChanged(body: string): BoundingVolumeBuilder;
  onMaxPointChanged(body: string): BoundingVolumeBuilder;
  onMinPointChanged(body: string): BoundingVolumeBuilder;
  onNodeDestroyed(body: string): BoundingVolumeBuilder;
  onObjectNameChanged(body: string): BoundingVolumeBuilder;
  onParentChanged(body: string): BoundingVolumeBuilder;
  onRemovedFromEntity(body: string): BoundingVolumeBuilder;
  onShareableChanged(body: string): BoundingVolumeBuilder;
  onViewChanged(body: string): BoundingVolumeBuilder;
}

const BOUNDINGVOLUME_META: TypeMetadata = {
  typeName: 'BoundingVolume',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'maxPoint', hasValue: true, hasBinding: true },
    { name: 'minPoint', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'view', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onImplicitMaxPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitMinPointChanged', paramCount: 1 },
    { handlerName: 'onImplicitPointsValidChanged', paramCount: 1 },
    { handlerName: 'onMaxPointChanged', paramCount: 1 },
    { handlerName: 'onMinPointChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onViewChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function BoundingVolume(): BoundingVolumeBuilder {
  return createFluentBuilder(
    'BoundingVolume',
    BOUNDINGVOLUME_META,
  ) as unknown as BoundingVolumeBuilder;
}
