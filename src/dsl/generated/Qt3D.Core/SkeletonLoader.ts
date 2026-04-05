// AUTO-GENERATED — DO NOT EDIT
// Type: SkeletonLoader
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SkeletonLoaderBuilder {
  id(id: string): SkeletonLoaderBuilder;
  child(obj: QmlObjectBuilder): SkeletonLoaderBuilder;

  createJointsEnabled(value: boolean): SkeletonLoaderBuilder;
  createJointsEnabledBind(expr: string): SkeletonLoaderBuilder;
  enabled(value: boolean): SkeletonLoaderBuilder;
  enabledBind(expr: string): SkeletonLoaderBuilder;
  objectName(value: string): SkeletonLoaderBuilder;
  objectNameBind(expr: string): SkeletonLoaderBuilder;
  parent(value: QmlValue): SkeletonLoaderBuilder;
  parentBind(expr: string): SkeletonLoaderBuilder;
  source(value: QmlUrl): SkeletonLoaderBuilder;
  sourceBind(expr: string): SkeletonLoaderBuilder;
  onCreateJointsEnabledChanged(body: string): SkeletonLoaderBuilder;
  onEnabledChanged(body: string): SkeletonLoaderBuilder;
  onJointCountChanged(body: string): SkeletonLoaderBuilder;
  onNodeDestroyed(body: string): SkeletonLoaderBuilder;
  onObjectNameChanged(body: string): SkeletonLoaderBuilder;
  onParentChanged(body: string): SkeletonLoaderBuilder;
  onRootJointChanged(body: string): SkeletonLoaderBuilder;
  onSourceChanged(body: string): SkeletonLoaderBuilder;
  onStatusChanged(body: string): SkeletonLoaderBuilder;
}

const SKELETONLOADER_META: TypeMetadata = {
  typeName: 'SkeletonLoader',
  properties: [
    { name: 'createJointsEnabled', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCreateJointsEnabledChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onJointCountChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRootJointChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SkeletonLoader(): SkeletonLoaderBuilder {
  return createFluentBuilder(
    'SkeletonLoader',
    SKELETONLOADER_META,
  ) as unknown as SkeletonLoaderBuilder;
}

export namespace SkeletonLoader {
  export namespace Status {
    export const NotReady = createEnumToken('SkeletonLoader', 'Status', 'NotReady');
    export const Ready = createEnumToken('SkeletonLoader', 'Status', 'Ready');
    export const Error = createEnumToken('SkeletonLoader', 'Status', 'Error');
  }
}
