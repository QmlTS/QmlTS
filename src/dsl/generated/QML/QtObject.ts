// AUTO-GENERATED — DO NOT EDIT
// Type: QtObject
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { ComponentAttachedBuilder } from './QQmlComponentAttached.js';
export interface QtObjectBuilder {
  id(id: string): QtObjectBuilder;
  child(obj: QmlObjectBuilder): QtObjectBuilder;

  objectName(value: string): QtObjectBuilder;
  objectNameBind(expr: string): QtObjectBuilder;
  onObjectNameChanged(body: string): QtObjectBuilder;
  component(setup: (b: ComponentAttachedBuilder) => void): QtObjectBuilder;
}

const QTOBJECT_META: TypeMetadata = {
  typeName: 'QtObject',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
    {
      methodName: 'component',
      attachedTypeName: 'Component',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCompleted', paramCount: 0 },
        { handlerName: 'onDestruction', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function QtObject(): QtObjectBuilder {
  return createFluentBuilder('QtObject', QTOBJECT_META) as unknown as QtObjectBuilder;
}
