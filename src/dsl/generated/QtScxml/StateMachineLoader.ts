// AUTO-GENERATED — DO NOT EDIT
// Type: StateMachineLoader
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface StateMachineLoaderBuilder {
  id(id: string): StateMachineLoaderBuilder;
  child(obj: QmlObjectBuilder): StateMachineLoaderBuilder;

  dataModel(value: QmlValue): StateMachineLoaderBuilder;
  dataModelBind(expr: string): StateMachineLoaderBuilder;
  initialValues(value: QmlValue): StateMachineLoaderBuilder;
  initialValuesBind(expr: string): StateMachineLoaderBuilder;
  objectName(value: string): StateMachineLoaderBuilder;
  objectNameBind(expr: string): StateMachineLoaderBuilder;
  source(value: QmlUrl): StateMachineLoaderBuilder;
  sourceBind(expr: string): StateMachineLoaderBuilder;
  onDataModelChanged(body: string): StateMachineLoaderBuilder;
  onInitialValuesChanged(body: string): StateMachineLoaderBuilder;
  onObjectNameChanged(body: string): StateMachineLoaderBuilder;
  onSourceChanged(body: string): StateMachineLoaderBuilder;
  onStateMachineChanged(body: string): StateMachineLoaderBuilder;
}

const STATEMACHINELOADER_META: TypeMetadata = {
  typeName: 'StateMachineLoader',
  properties: [
    { name: 'dataModel', hasValue: true, hasBinding: true },
    { name: 'initialValues', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDataModelChanged', paramCount: 0 },
    { handlerName: 'onInitialValuesChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateMachineChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function StateMachineLoader(): StateMachineLoaderBuilder {
  return createFluentBuilder(
    'StateMachineLoader',
    STATEMACHINELOADER_META,
  ) as unknown as StateMachineLoaderBuilder;
}
