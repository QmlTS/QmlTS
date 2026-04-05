// AUTO-GENERATED — DO NOT EDIT
// Type: Position
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface PositionBuilder {
  id(id: string): PositionBuilder;
  child(obj: QmlObjectBuilder): PositionBuilder;

  objectName(value: string): PositionBuilder;
  objectNameBind(expr: string): PositionBuilder;
  onObjectNameChanged(body: string): PositionBuilder;
}

const POSITION_META: TypeMetadata = {
  typeName: 'Position',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Position(): PositionBuilder {
  return createFluentBuilder('Position', POSITION_META) as unknown as PositionBuilder;
}
