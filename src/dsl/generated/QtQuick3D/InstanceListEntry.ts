// AUTO-GENERATED — DO NOT EDIT
// Type: InstanceListEntry
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  QmlVector4d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface InstanceListEntryBuilder {
  id(id: string): InstanceListEntryBuilder;
  child(obj: QmlObjectBuilder): InstanceListEntryBuilder;

  color(value: QmlColor): InstanceListEntryBuilder;
  colorBind(expr: string): InstanceListEntryBuilder;
  customData(value: QmlVector4d): InstanceListEntryBuilder;
  customDataBind(expr: string): InstanceListEntryBuilder;
  eulerRotation(value: QmlVector3d): InstanceListEntryBuilder;
  eulerRotationBind(expr: string): InstanceListEntryBuilder;
  objectName(value: string): InstanceListEntryBuilder;
  objectNameBind(expr: string): InstanceListEntryBuilder;
  parent(value: QmlValue): InstanceListEntryBuilder;
  parentBind(expr: string): InstanceListEntryBuilder;
  position(value: QmlVector3d): InstanceListEntryBuilder;
  positionBind(expr: string): InstanceListEntryBuilder;
  rotation(value: QmlQuaternion): InstanceListEntryBuilder;
  rotationBind(expr: string): InstanceListEntryBuilder;
  scale(value: QmlVector3d): InstanceListEntryBuilder;
  scaleBind(expr: string): InstanceListEntryBuilder;
  state(value: string): InstanceListEntryBuilder;
  stateBind(expr: string): InstanceListEntryBuilder;
  onChanged(body: string): InstanceListEntryBuilder;
  onChildrenChanged(body: string): InstanceListEntryBuilder;
  onColorChanged(body: string): InstanceListEntryBuilder;
  onCustomDataChanged(body: string): InstanceListEntryBuilder;
  onEulerRotationChanged(body: string): InstanceListEntryBuilder;
  onObjectNameChanged(body: string): InstanceListEntryBuilder;
  onParentChanged(body: string): InstanceListEntryBuilder;
  onPositionChanged(body: string): InstanceListEntryBuilder;
  onRotationChanged(body: string): InstanceListEntryBuilder;
  onScaleChanged(body: string): InstanceListEntryBuilder;
  onStateChanged(body: string): InstanceListEntryBuilder;
}

const INSTANCELISTENTRY_META: TypeMetadata = {
  typeName: 'InstanceListEntry',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'customData', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onCustomDataChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function InstanceListEntry(): InstanceListEntryBuilder {
  return createFluentBuilder(
    'InstanceListEntry',
    INSTANCELISTENTRY_META,
  ) as unknown as InstanceListEntryBuilder;
}
