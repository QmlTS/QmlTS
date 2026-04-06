// AUTO-GENERATED — DO NOT EDIT
// Type: PickingProxy
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { GeometryViewBuilder } from '../Qt3D.Core/GeometryView.js';
export interface PickingProxyBuilder {
  id(id: string): PickingProxyBuilder;
  child(obj: QmlObjectBuilder): PickingProxyBuilder;
  children(...objs: QmlObjectBuilder[]): PickingProxyBuilder;

  enabled(value: boolean): PickingProxyBuilder;
  enabledBind(expr: string): PickingProxyBuilder;
  isShareable(value: boolean): PickingProxyBuilder;
  isShareableBind(expr: string): PickingProxyBuilder;
  maxPoint(value: QmlVector3d): PickingProxyBuilder;
  maxPointBind(expr: string): PickingProxyBuilder;
  minPoint(value: QmlVector3d): PickingProxyBuilder;
  minPointBind(expr: string): PickingProxyBuilder;
  objectName(value: string): PickingProxyBuilder;
  objectNameBind(expr: string): PickingProxyBuilder;
  parent(value: QmlValue): PickingProxyBuilder;
  parentBind(expr: string): PickingProxyBuilder;
  view(value: GeometryViewBuilder): PickingProxyBuilder;
  viewBind(expr: string): PickingProxyBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onImplicitMaxPointChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onImplicitMinPointChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onImplicitPointsValidChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onMaxPointChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onMinPointChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
  onViewChanged(handler: DslSignalHandlerValue): PickingProxyBuilder;
}

const PICKINGPROXY_META: TypeMetadata = {
  typeName: 'PickingProxy',
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

export function PickingProxy(): PickingProxyBuilder {
  return createFluentBuilder('PickingProxy', PICKINGPROXY_META) as unknown as PickingProxyBuilder;
}
