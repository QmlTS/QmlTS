// AUTO-GENERATED — DO NOT EDIT
// Type: GeocodeModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
export interface GeocodeModelBuilder {
  id(id: string): GeocodeModelBuilder;
  child(obj: QmlObjectBuilder): GeocodeModelBuilder;

  autoUpdate(value: boolean): GeocodeModelBuilder;
  autoUpdateBind(expr: string): GeocodeModelBuilder;
  bounds(value: QmlValue): GeocodeModelBuilder;
  boundsBind(expr: string): GeocodeModelBuilder;
  limit(value: number): GeocodeModelBuilder;
  limitBind(expr: string): GeocodeModelBuilder;
  objectName(value: string): GeocodeModelBuilder;
  objectNameBind(expr: string): GeocodeModelBuilder;
  offset(value: number): GeocodeModelBuilder;
  offsetBind(expr: string): GeocodeModelBuilder;
  plugin(value: PluginBuilder): GeocodeModelBuilder;
  pluginBind(expr: string): GeocodeModelBuilder;
  query(value: QmlValue): GeocodeModelBuilder;
  queryBind(expr: string): GeocodeModelBuilder;
  onAutoUpdateChanged(body: string): GeocodeModelBuilder;
  onBoundsChanged(body: string): GeocodeModelBuilder;
  onColumnsAboutToBeInserted(body: string): GeocodeModelBuilder;
  onColumnsAboutToBeMoved(body: string): GeocodeModelBuilder;
  onColumnsAboutToBeRemoved(body: string): GeocodeModelBuilder;
  onColumnsInserted(body: string): GeocodeModelBuilder;
  onColumnsMoved(body: string): GeocodeModelBuilder;
  onColumnsRemoved(body: string): GeocodeModelBuilder;
  onCountChanged(body: string): GeocodeModelBuilder;
  onDataChanged(body: string): GeocodeModelBuilder;
  onErrorChanged(body: string): GeocodeModelBuilder;
  onHeaderDataChanged(body: string): GeocodeModelBuilder;
  onLayoutAboutToBeChanged(body: string): GeocodeModelBuilder;
  onLayoutChanged(body: string): GeocodeModelBuilder;
  onLimitChanged(body: string): GeocodeModelBuilder;
  onLocationsChanged(body: string): GeocodeModelBuilder;
  onModelAboutToBeReset(body: string): GeocodeModelBuilder;
  onModelReset(body: string): GeocodeModelBuilder;
  onObjectNameChanged(body: string): GeocodeModelBuilder;
  onOffsetChanged(body: string): GeocodeModelBuilder;
  onPluginChanged(body: string): GeocodeModelBuilder;
  onQueryChanged(body: string): GeocodeModelBuilder;
  onRowsAboutToBeInserted(body: string): GeocodeModelBuilder;
  onRowsAboutToBeMoved(body: string): GeocodeModelBuilder;
  onRowsAboutToBeRemoved(body: string): GeocodeModelBuilder;
  onRowsInserted(body: string): GeocodeModelBuilder;
  onRowsMoved(body: string): GeocodeModelBuilder;
  onRowsRemoved(body: string): GeocodeModelBuilder;
  onStatusChanged(body: string): GeocodeModelBuilder;
}

const GEOCODEMODEL_META: TypeMetadata = {
  typeName: 'GeocodeModel',
  properties: [
    { name: 'autoUpdate', hasValue: true, hasBinding: true },
    { name: 'bounds', hasValue: true, hasBinding: true },
    { name: 'limit', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offset', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
    { name: 'query', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoUpdateChanged', paramCount: 0 },
    { handlerName: 'onBoundsChanged', paramCount: 0 },
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
    { handlerName: 'onLimitChanged', paramCount: 0 },
    { handlerName: 'onLocationsChanged', paramCount: 0 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOffsetChanged', paramCount: 0 },
    { handlerName: 'onPluginChanged', paramCount: 0 },
    { handlerName: 'onQueryChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function GeocodeModel(): GeocodeModelBuilder {
  return createFluentBuilder('GeocodeModel', GEOCODEMODEL_META) as unknown as GeocodeModelBuilder;
}

export namespace GeocodeModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('GeocodeModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('GeocodeModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken(
      'GeocodeModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'GeocodeModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace GeocodeError {
    export const NoError = createEnumToken('GeocodeModel', 'GeocodeError', 'NoError');
    export const EngineNotSetError = createEnumToken(
      'GeocodeModel',
      'GeocodeError',
      'EngineNotSetError',
    );
    export const CommunicationError = createEnumToken(
      'GeocodeModel',
      'GeocodeError',
      'CommunicationError',
    );
    export const ParseError = createEnumToken('GeocodeModel', 'GeocodeError', 'ParseError');
    export const UnsupportedOptionError = createEnumToken(
      'GeocodeModel',
      'GeocodeError',
      'UnsupportedOptionError',
    );
    export const CombinationError = createEnumToken(
      'GeocodeModel',
      'GeocodeError',
      'CombinationError',
    );
    export const UnknownError = createEnumToken('GeocodeModel', 'GeocodeError', 'UnknownError');
    export const UnknownParameterError = createEnumToken(
      'GeocodeModel',
      'GeocodeError',
      'UnknownParameterError',
    );
    export const MissingRequiredParameterError = createEnumToken(
      'GeocodeModel',
      'GeocodeError',
      'MissingRequiredParameterError',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'GeocodeModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'GeocodeModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'GeocodeModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('GeocodeModel', 'Status', 'Null');
    export const Ready = createEnumToken('GeocodeModel', 'Status', 'Ready');
    export const Loading = createEnumToken('GeocodeModel', 'Status', 'Loading');
    export const Error = createEnumToken('GeocodeModel', 'Status', 'Error');
  }
}
