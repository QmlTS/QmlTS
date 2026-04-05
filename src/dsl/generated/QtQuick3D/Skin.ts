// AUTO-GENERATED — DO NOT EDIT
// Type: Skin
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlMatrix4x4, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface SkinBuilder {
  id(id: string): SkinBuilder;
  child(obj: QmlObjectBuilder): SkinBuilder;

  inverseBindPoses(value: QmlMatrix4x4): SkinBuilder;
  inverseBindPosesBind(expr: string): SkinBuilder;
  objectName(value: string): SkinBuilder;
  objectNameBind(expr: string): SkinBuilder;
  parent(value: QmlValue): SkinBuilder;
  parentBind(expr: string): SkinBuilder;
  state(value: string): SkinBuilder;
  stateBind(expr: string): SkinBuilder;
  onChildrenChanged(body: string): SkinBuilder;
  onInverseBindPosesChanged(body: string): SkinBuilder;
  onObjectNameChanged(body: string): SkinBuilder;
  onParentChanged(body: string): SkinBuilder;
  onStateChanged(body: string): SkinBuilder;
}

const SKIN_META: TypeMetadata = {
  typeName: 'Skin',
  properties: [
    { name: 'inverseBindPoses', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onInverseBindPosesChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function Skin(): SkinBuilder {
  return createFluentBuilder('Skin', SKIN_META) as unknown as SkinBuilder;
}
