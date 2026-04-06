// AUTO-GENERATED — DO NOT EDIT
// Type: FileInstancing
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface FileInstancingBuilder {
  id(id: string): FileInstancingBuilder;
  child(obj: QmlObjectBuilder): FileInstancingBuilder;
  children(...objs: QmlObjectBuilder[]): FileInstancingBuilder;

  depthSortingEnabled(value: boolean): FileInstancingBuilder;
  depthSortingEnabledBind(expr: string): FileInstancingBuilder;
  hasTransparency(value: boolean): FileInstancingBuilder;
  hasTransparencyBind(expr: string): FileInstancingBuilder;
  instanceCountOverride(value: number): FileInstancingBuilder;
  instanceCountOverrideBind(expr: string): FileInstancingBuilder;
  objectName(value: string): FileInstancingBuilder;
  objectNameBind(expr: string): FileInstancingBuilder;
  parent(value: QmlValue): FileInstancingBuilder;
  parentBind(expr: string): FileInstancingBuilder;
  shadowBoundsMaximum(value: QmlVector3d): FileInstancingBuilder;
  shadowBoundsMaximumBind(expr: string): FileInstancingBuilder;
  shadowBoundsMinimum(value: QmlVector3d): FileInstancingBuilder;
  shadowBoundsMinimumBind(expr: string): FileInstancingBuilder;
  source(value: QmlUrl): FileInstancingBuilder;
  sourceBind(expr: string): FileInstancingBuilder;
  state(value: string): FileInstancingBuilder;
  stateBind(expr: string): FileInstancingBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onDepthSortingEnabledChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onHasTransparencyChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onInstanceCountChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onInstanceCountOverrideChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onInstanceNodeDirty(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onInstanceTableChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onShadowBoundsMaximumChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onShadowBoundsMinimumChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
  onStateChanged(handler: DslSignalHandlerValue): FileInstancingBuilder;
}

const FILEINSTANCING_META: TypeMetadata = {
  typeName: 'FileInstancing',
  properties: [
    { name: 'depthSortingEnabled', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'instanceCountOverride', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shadowBoundsMaximum', hasValue: true, hasBinding: true },
    { name: 'shadowBoundsMinimum', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
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
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function FileInstancing(): FileInstancingBuilder {
  return createFluentBuilder(
    'FileInstancing',
    FILEINSTANCING_META,
  ) as unknown as FileInstancingBuilder;
}
