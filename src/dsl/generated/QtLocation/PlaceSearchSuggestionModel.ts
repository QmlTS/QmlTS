// AUTO-GENERATED — DO NOT EDIT
// Type: PlaceSearchSuggestionModel
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
export interface PlaceSearchSuggestionModelBuilder {
  id(id: string): PlaceSearchSuggestionModelBuilder;
  child(obj: QmlObjectBuilder): PlaceSearchSuggestionModelBuilder;
  children(...objs: QmlObjectBuilder[]): PlaceSearchSuggestionModelBuilder;

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
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onLimitChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onNextPagesAvailableChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onPluginChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onPreviousPagesAvailableChanged(
    handler: DslSignalHandlerValue,
  ): PlaceSearchSuggestionModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onSearchAreaChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onSearchTermChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
  onSuggestionsChanged(handler: DslSignalHandlerValue): PlaceSearchSuggestionModelBuilder;
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
  grouped: [],
  attached: [],
};

export function PlaceSearchSuggestionModel(): PlaceSearchSuggestionModelBuilder {
  return createFluentBuilder(
    'PlaceSearchSuggestionModel',
    PLACESEARCHSUGGESTIONMODEL_META,
  ) as unknown as PlaceSearchSuggestionModelBuilder;
}

export namespace PlaceSearchSuggestionModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken(
      'PlaceSearchSuggestionModel',
      'CheckIndexOption',
      'NoOption',
    );
    export const IndexIsValid = createEnumToken(
      'PlaceSearchSuggestionModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'PlaceSearchSuggestionModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'PlaceSearchSuggestionModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'PlaceSearchSuggestionModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'PlaceSearchSuggestionModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'PlaceSearchSuggestionModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Null');
    export const Ready = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Ready');
    export const Loading = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Loading');
    export const Error = createEnumToken('PlaceSearchSuggestionModel', 'Status', 'Error');
  }
}
