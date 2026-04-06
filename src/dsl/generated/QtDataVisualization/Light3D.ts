// AUTO-GENERATED — DO NOT EDIT
// Type: Light3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface Light3DBuilder {
  id(id: string): Light3DBuilder;
  child(obj: QmlObjectBuilder): Light3DBuilder;
  children(...objs: QmlObjectBuilder[]): Light3DBuilder;

  autoPosition(value: boolean): Light3DBuilder;
  autoPositionBind(expr: string): Light3DBuilder;
  objectName(value: string): Light3DBuilder;
  objectNameBind(expr: string): Light3DBuilder;
  position(value: QmlVector3d): Light3DBuilder;
  positionBind(expr: string): Light3DBuilder;
  onAutoPositionChanged(handler: DslSignalHandlerValue): Light3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Light3DBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): Light3DBuilder;
}

const LIGHT3D_META: TypeMetadata = {
  typeName: 'Light3D',
  properties: [
    { name: 'autoPosition', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoPositionChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Light3D(): Light3DBuilder {
  return createFluentBuilder('Light3D', LIGHT3D_META) as unknown as Light3DBuilder;
}
