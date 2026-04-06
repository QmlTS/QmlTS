// AUTO-GENERATED — DO NOT EDIT
// Type: ClipPlane
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ClipPlaneBuilder {
  id(id: string): ClipPlaneBuilder;
  child(obj: QmlObjectBuilder): ClipPlaneBuilder;
  children(...objs: QmlObjectBuilder[]): ClipPlaneBuilder;

  distance(value: number): ClipPlaneBuilder;
  distanceBind(expr: string): ClipPlaneBuilder;
  enabled(value: boolean): ClipPlaneBuilder;
  enabledBind(expr: string): ClipPlaneBuilder;
  normal(value: QmlVector3d): ClipPlaneBuilder;
  normalBind(expr: string): ClipPlaneBuilder;
  objectName(value: string): ClipPlaneBuilder;
  objectNameBind(expr: string): ClipPlaneBuilder;
  parent(value: QmlValue): ClipPlaneBuilder;
  parentBind(expr: string): ClipPlaneBuilder;
  planeIndex(value: number): ClipPlaneBuilder;
  planeIndexBind(expr: string): ClipPlaneBuilder;
  onDistanceChanged(handler: DslSignalHandlerValue): ClipPlaneBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ClipPlaneBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ClipPlaneBuilder;
  onNormalChanged(handler: DslSignalHandlerValue): ClipPlaneBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ClipPlaneBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ClipPlaneBuilder;
  onPlaneIndexChanged(handler: DslSignalHandlerValue): ClipPlaneBuilder;
}

const CLIPPLANE_META: TypeMetadata = {
  typeName: 'ClipPlane',
  properties: [
    { name: 'distance', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'normal', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'planeIndex', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDistanceChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onNormalChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPlaneIndexChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ClipPlane(): ClipPlaneBuilder {
  return createFluentBuilder('ClipPlane', CLIPPLANE_META) as unknown as ClipPlaneBuilder;
}
