// AUTO-GENERATED — DO NOT EDIT
// Type: QtObject
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { ComponentAttachedBuilder } from './QQmlComponentAttached.js';
export interface QtObjectBuilder {
  id(id: string): QtObjectBuilder;
  child(obj: QmlObjectBuilder): QtObjectBuilder;

  objectName(value: string): QtObjectBuilder;
  objectNameBind(expr: string): QtObjectBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): QtObjectBuilder;
  component(setup: (b: ComponentAttachedBuilder) => void): QtObjectBuilder;
}

export function QtObject(): QtObjectBuilder {
  return new DslBuilderImpl('QtObject') as unknown as QtObjectBuilder;
}
