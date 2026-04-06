// AUTO-GENERATED — DO NOT EDIT
// Type: WorkerScript
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface WorkerScriptBuilder {
  id(id: string): WorkerScriptBuilder;
  child(obj: QmlObjectBuilder): WorkerScriptBuilder;
  children(...objs: QmlObjectBuilder[]): WorkerScriptBuilder;

  objectName(value: string): WorkerScriptBuilder;
  objectNameBind(expr: string): WorkerScriptBuilder;
  source(value: QmlUrl): WorkerScriptBuilder;
  sourceBind(expr: string): WorkerScriptBuilder;
  onMessage(handler: DslSignalHandlerValue): WorkerScriptBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): WorkerScriptBuilder;
  onReadyChanged(handler: DslSignalHandlerValue): WorkerScriptBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): WorkerScriptBuilder;
}

const WORKERSCRIPT_META: TypeMetadata = {
  typeName: 'WorkerScript',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onMessage', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onReadyChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function WorkerScript(): WorkerScriptBuilder {
  return createFluentBuilder('WorkerScript', WORKERSCRIPT_META) as unknown as WorkerScriptBuilder;
}
