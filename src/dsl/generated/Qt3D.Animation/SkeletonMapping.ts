// AUTO-GENERATED — DO NOT EDIT
// Type: SkeletonMapping
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface SkeletonMappingBuilder {
  id(id: string): SkeletonMappingBuilder;
  child(obj: QmlObjectBuilder): SkeletonMappingBuilder;
  children(...objs: QmlObjectBuilder[]): SkeletonMappingBuilder;

  enabled(value: boolean): SkeletonMappingBuilder;
  enabledBind(expr: string): SkeletonMappingBuilder;
  objectName(value: string): SkeletonMappingBuilder;
  objectNameBind(expr: string): SkeletonMappingBuilder;
  parent(value: QmlValue): SkeletonMappingBuilder;
  parentBind(expr: string): SkeletonMappingBuilder;
  skeleton(value: QmlValue): SkeletonMappingBuilder;
  skeletonBind(expr: string): SkeletonMappingBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SkeletonMappingBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): SkeletonMappingBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SkeletonMappingBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SkeletonMappingBuilder;
  onSkeletonChanged(handler: DslSignalHandlerValue): SkeletonMappingBuilder;
}

const SKELETONMAPPING_META: TypeMetadata = {
  typeName: 'SkeletonMapping',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'skeleton', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSkeletonChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SkeletonMapping(): SkeletonMappingBuilder {
  return createFluentBuilder(
    'SkeletonMapping',
    SKELETONMAPPING_META,
  ) as unknown as SkeletonMappingBuilder;
}
