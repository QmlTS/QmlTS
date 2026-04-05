// AUTO-GENERATED — DO NOT EDIT
// Type: RouteModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
import type { RouteQueryBuilder } from './RouteQuery.js';
export interface RouteModelBuilder {
  id(id: string): RouteModelBuilder;
  child(obj: QmlObjectBuilder): RouteModelBuilder;

  autoUpdate(value: boolean): RouteModelBuilder;
  autoUpdateBind(expr: string): RouteModelBuilder;
  measurementSystem(value: QmlEnumToken): RouteModelBuilder;
  measurementSystemBind(expr: string): RouteModelBuilder;
  objectName(value: string): RouteModelBuilder;
  objectNameBind(expr: string): RouteModelBuilder;
  plugin(value: PluginBuilder): RouteModelBuilder;
  pluginBind(expr: string): RouteModelBuilder;
  query(value: RouteQueryBuilder): RouteModelBuilder;
  queryBind(expr: string): RouteModelBuilder;
  onAbortRequested(body: string): RouteModelBuilder;
  onAutoUpdateChanged(body: string): RouteModelBuilder;
  onColumnsAboutToBeInserted(body: string): RouteModelBuilder;
  onColumnsAboutToBeMoved(body: string): RouteModelBuilder;
  onColumnsAboutToBeRemoved(body: string): RouteModelBuilder;
  onColumnsInserted(body: string): RouteModelBuilder;
  onColumnsMoved(body: string): RouteModelBuilder;
  onColumnsRemoved(body: string): RouteModelBuilder;
  onCountChanged(body: string): RouteModelBuilder;
  onDataChanged(body: string): RouteModelBuilder;
  onErrorChanged(body: string): RouteModelBuilder;
  onHeaderDataChanged(body: string): RouteModelBuilder;
  onLayoutAboutToBeChanged(body: string): RouteModelBuilder;
  onLayoutChanged(body: string): RouteModelBuilder;
  onMeasurementSystemChanged(body: string): RouteModelBuilder;
  onModelAboutToBeReset(body: string): RouteModelBuilder;
  onModelReset(body: string): RouteModelBuilder;
  onObjectNameChanged(body: string): RouteModelBuilder;
  onPluginChanged(body: string): RouteModelBuilder;
  onQueryChanged(body: string): RouteModelBuilder;
  onRoutesChanged(body: string): RouteModelBuilder;
  onRowsAboutToBeInserted(body: string): RouteModelBuilder;
  onRowsAboutToBeMoved(body: string): RouteModelBuilder;
  onRowsAboutToBeRemoved(body: string): RouteModelBuilder;
  onRowsInserted(body: string): RouteModelBuilder;
  onRowsMoved(body: string): RouteModelBuilder;
  onRowsRemoved(body: string): RouteModelBuilder;
  onStatusChanged(body: string): RouteModelBuilder;
}

const ROUTEMODEL_META: TypeMetadata = {
  typeName: 'RouteModel',
  properties: [
    { name: 'autoUpdate', hasValue: true, hasBinding: true },
    { name: 'measurementSystem', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
    { name: 'query', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAbortRequested', paramCount: 0 },
    { handlerName: 'onAutoUpdateChanged', paramCount: 0 },
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onMeasurementSystemChanged', paramCount: 0 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPluginChanged', paramCount: 0 },
    { handlerName: 'onQueryChanged', paramCount: 0 },
    { handlerName: 'onRoutesChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function RouteModel(): RouteModelBuilder {
  return createFluentBuilder('RouteModel', ROUTEMODEL_META) as unknown as RouteModelBuilder;
}

export namespace RouteModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('RouteModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('RouteModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('RouteModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('RouteModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('RouteModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('RouteModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('RouteModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
  export namespace RouteError {
    export const NoError = createEnumToken('RouteModel', 'RouteError', 'NoError');
    export const EngineNotSetError = createEnumToken('RouteModel', 'RouteError', 'EngineNotSetError');
    export const CommunicationError = createEnumToken('RouteModel', 'RouteError', 'CommunicationError');
    export const ParseError = createEnumToken('RouteModel', 'RouteError', 'ParseError');
    export const UnsupportedOptionError = createEnumToken('RouteModel', 'RouteError', 'UnsupportedOptionError');
    export const UnknownError = createEnumToken('RouteModel', 'RouteError', 'UnknownError');
    export const UnknownParameterError = createEnumToken('RouteModel', 'RouteError', 'UnknownParameterError');
    export const MissingRequiredParameterError = createEnumToken('RouteModel', 'RouteError', 'MissingRequiredParameterError');
  }
  export namespace Status {
    export const Null = createEnumToken('RouteModel', 'Status', 'Null');
    export const Ready = createEnumToken('RouteModel', 'Status', 'Ready');
    export const Loading = createEnumToken('RouteModel', 'Status', 'Loading');
    export const Error = createEnumToken('RouteModel', 'Status', 'Error');
  }
}
