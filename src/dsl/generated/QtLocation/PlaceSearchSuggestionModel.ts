// AUTO-GENERATED — DO NOT EDIT
// Type: PlaceSearchSuggestionModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
export interface PlaceSearchSuggestionModelBuilder {
  id(id: string): PlaceSearchSuggestionModelBuilder;
  child(obj: QmlObjectBuilder): PlaceSearchSuggestionModelBuilder;

  limit(value: number): PlaceSearchSuggestionModelBuilder;
  limitBind(expr: string): PlaceSearchSuggestionModelBuilder;
  objectName(value: string): PlaceSearchSuggestionModelBuilder;
  objectNameBind(expr: string): PlaceSearchSuggestionModelBuilder;
  plugin(value: PluginBuilder): PlaceSearchSuggestionModelBuilder;
  pluginBind(expr: string): PlaceSearchSuggestionModelBuilder;
  searchArea(value: QmlValue): PlaceSearchSuggestionModelBuilder;
  searchAreaBind(expr: string): PlaceSearchSuggestionModelBuilder;
  searchTerm(value: string): PlaceSearchSuggestionModelBuilder;
  searchTermBind(expr: string): PlaceSearchSuggestionModelBuilder;
  onColumnsAboutToBeInserted(body: string): PlaceSearchSuggestionModelBuilder;
  onColumnsAboutToBeMoved(body: string): PlaceSearchSuggestionModelBuilder;
  onColumnsAboutToBeRemoved(body: string): PlaceSearchSuggestionModelBuilder;
  onColumnsInserted(body: string): PlaceSearchSuggestionModelBuilder;
  onColumnsMoved(body: string): PlaceSearchSuggestionModelBuilder;
  onColumnsRemoved(body: string): PlaceSearchSuggestionModelBuilder;
  onDataChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onHeaderDataChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onLayoutAboutToBeChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onLayoutChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onLimitChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onModelAboutToBeReset(body: string): PlaceSearchSuggestionModelBuilder;
  onModelReset(body: string): PlaceSearchSuggestionModelBuilder;
  onNextPagesAvailableChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onObjectNameChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onPluginChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onPreviousPagesAvailableChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onRowsAboutToBeInserted(body: string): PlaceSearchSuggestionModelBuilder;
  onRowsAboutToBeMoved(body: string): PlaceSearchSuggestionModelBuilder;
  onRowsAboutToBeRemoved(body: string): PlaceSearchSuggestionModelBuilder;
  onRowsInserted(body: string): PlaceSearchSuggestionModelBuilder;
  onRowsMoved(body: string): PlaceSearchSuggestionModelBuilder;
  onRowsRemoved(body: string): PlaceSearchSuggestionModelBuilder;
  onSearchAreaChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onSearchTermChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onStatusChanged(body: string): PlaceSearchSuggestionModelBuilder;
  onSuggestionsChanged(body: string): PlaceSearchSuggestionModelBuilder;
}

const PLACESEARCHSUGGESTIONMODEL_META: TypeMetadata = {
  typeName: 'PlaceSearchSuggestionModel',
  properties: [
    { name: 'limit', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
    { name: 'searchArea', hasValue: true, hasBinding: true },
    { name: 'searchTerm', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onLimitChanged', paramCount: 0 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onNextPagesAvailableChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPluginChanged', paramCount: 0 },
    { handlerName: 'onPreviousPagesAvailableChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
    { handlerName: 'onSearchAreaChanged', paramCount: 0 },
    { handlerName: 'onSearchTermChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onSuggestionsChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PlaceSearchSuggestionModel(): PlaceSearchSuggestionModelBuilder {
  return createFluentBuilder('PlaceSearchSuggestionModel', PLACESEARCHSUGGESTIONMODEL_META) as unknown as PlaceSearchSuggestionModelBuilder;
}

export namespace PlaceSearchSuggestionModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('PlaceSearchSuggestionModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('PlaceSearchSuggestionModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('PlaceSearchSuggestionModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('PlaceSearchSuggestionModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('PlaceSearchSuggestionModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('PlaceSearchSuggestionModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('PlaceSearchSuggestionModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
  export namespace Status {
    export const Null = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Null');
    export const Ready = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Ready');
    export const Loading = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Loading');
    export const Error = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Error');
  }
}
