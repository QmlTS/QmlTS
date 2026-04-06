// AUTO-GENERATED — DO NOT EDIT
// Type: CameraSelector
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EntityBuilder } from '../Qt3D.Core/Entity.js';
export interface CameraSelectorBuilder {
  id(id: string): CameraSelectorBuilder;
  child(obj: QmlObjectBuilder): CameraSelectorBuilder;
  children(...objs: QmlObjectBuilder[]): CameraSelectorBuilder;

  camera(value: EntityBuilder): CameraSelectorBuilder;
  cameraBind(expr: string): CameraSelectorBuilder;
  enabled(value: boolean): CameraSelectorBuilder;
  enabledBind(expr: string): CameraSelectorBuilder;
  objectName(value: string): CameraSelectorBuilder;
  objectNameBind(expr: string): CameraSelectorBuilder;
  parent(value: QmlValue): CameraSelectorBuilder;
  parentBind(expr: string): CameraSelectorBuilder;
  onCameraChanged(handler: DslSignalHandlerValue): CameraSelectorBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): CameraSelectorBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): CameraSelectorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CameraSelectorBuilder;
  onParentChanged(handler: DslSignalHandlerValue): CameraSelectorBuilder;
}

const CAMERASELECTOR_META: TypeMetadata = {
  typeName: 'CameraSelector',
  properties: [
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCameraChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function CameraSelector(): CameraSelectorBuilder {
  return createFluentBuilder(
    'CameraSelector',
    CAMERASELECTOR_META,
  ) as unknown as CameraSelectorBuilder;
}
