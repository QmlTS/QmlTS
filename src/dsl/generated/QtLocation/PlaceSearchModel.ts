// AUTO-GENERATED — DO NOT EDIT
// Type: PlaceSearchModel
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
export interface PlaceSearchModelBuilder {
  id(id: string): PlaceSearchModelBuilder;
  child(obj: QmlObjectBuilder): PlaceSearchModelBuilder;
  children(...objs: QmlObjectBuilder[]): PlaceSearchModelBuilder;

  favoritesMatchParameters(value: QmlValue): PlaceSearchModelBuilder;
  favoritesMatchParametersBind(expr: string): PlaceSearchModelBuilder;
  favoritesPlugin(value: PluginBuilder): PlaceSearchModelBuilder;
  favoritesPluginBind(expr: string): PlaceSearchModelBuilder;
  incremental(value: boolean): PlaceSearchModelBuilder;
  incrementalBind(expr: string): PlaceSearchModelBuilder;
  limit(value: number): PlaceSearchModelBuilder;
  limitBind(expr: string): PlaceSearchModelBuilder;
  objectName(value: string): PlaceSearchModelBuilder;
  objectNameBind(expr: string): PlaceSearchModelBuilder;
  plugin(value: PluginBuilder): PlaceSearchModelBuilder;
  pluginBind(expr: string): PlaceSearchModelBuilder;
  recommendationId(value: string): PlaceSearchModelBuilder;
  recommendationIdBind(expr: string): PlaceSearchModelBuilder;
  relevanceHint(value: QmlEnumToken): PlaceSearchModelBuilder;
  relevanceHintBind(expr: string): PlaceSearchModelBuilder;
  searchArea(value: QmlValue): PlaceSearchModelBuilder;
  searchAreaBind(expr: string): PlaceSearchModelBuilder;
  searchTerm(value: string): PlaceSearchModelBuilder;
  searchTermBind(expr: string): PlaceSearchModelBuilder;
  visibilityScope(value: QmlEnumToken): PlaceSearchModelBuilder;
  visibilityScopeBind(expr: string): PlaceSearchModelBuilder;
  onCategoriesChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onFavoritesMatchParametersChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onFavoritesPluginChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onIncrementalChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onLimitChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onNextPagesAvailableChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onPluginChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onPreviousPagesAvailableChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRecommendationIdChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRelevanceHintChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRowCountChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onSearchAreaChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onSearchTermChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
  onVisibilityScopeChanged(handler: DslSignalHandlerValue): PlaceSearchModelBuilder;
}

const PLACESEARCHMODEL_META: TypeMetadata = {
  typeName: 'PlaceSearchModel',
  properties: [
    { name: 'favoritesMatchParameters', hasValue: true, hasBinding: true },
    { name: 'favoritesPlugin', hasValue: true, hasBinding: true },
    { name: 'incremental', hasValue: true, hasBinding: true },
    { name: 'limit', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
    { name: 'recommendationId', hasValue: true, hasBinding: true },
    { name: 'relevanceHint', hasValue: true, hasBinding: true },
    { name: 'searchArea', hasValue: true, hasBinding: true },
    { name: 'searchTerm', hasValue: true, hasBinding: true },
    { name: 'visibilityScope', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCategoriesChanged', paramCount: 0 },
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 0 },
    { handlerName: 'onFavoritesMatchParametersChanged', paramCount: 0 },
    { handlerName: 'onFavoritesPluginChanged', paramCount: 0 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onIncrementalChanged', paramCount: 0 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onLimitChanged', paramCount: 0 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onNextPagesAvailableChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPluginChanged', paramCount: 0 },
    { handlerName: 'onPreviousPagesAvailableChanged', paramCount: 0 },
    { handlerName: 'onRecommendationIdChanged', paramCount: 0 },
    { handlerName: 'onRelevanceHintChanged', paramCount: 0 },
    { handlerName: 'onRowCountChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
    { handlerName: 'onSearchAreaChanged', paramCount: 0 },
    { handlerName: 'onSearchTermChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onVisibilityScopeChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function PlaceSearchModel(): PlaceSearchModelBuilder {
  return createFluentBuilder(
    'PlaceSearchModel',
    PLACESEARCHMODEL_META,
  ) as unknown as PlaceSearchModelBuilder;
}

export namespace PlaceSearchModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('PlaceSearchModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken(
      'PlaceSearchModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'PlaceSearchModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'PlaceSearchModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'PlaceSearchModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'PlaceSearchModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'PlaceSearchModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
  export namespace RelevanceHint {
    export const UnspecifiedHint = createEnumToken(
      'PlaceSearchModel',
      'RelevanceHint',
      'UnspecifiedHint',
    );
    export const DistanceHint = createEnumToken(
      'PlaceSearchModel',
      'RelevanceHint',
      'DistanceHint',
    );
    export const LexicalPlaceNameHint = createEnumToken(
      'PlaceSearchModel',
      'RelevanceHint',
      'LexicalPlaceNameHint',
    );
  }
  export namespace SearchResultType {
    export const UnknownSearchResult = createEnumToken(
      'PlaceSearchModel',
      'SearchResultType',
      'UnknownSearchResult',
    );
    export const PlaceResult = createEnumToken(
      'PlaceSearchModel',
      'SearchResultType',
      'PlaceResult',
    );
    export const ProposedSearchResult = createEnumToken(
      'PlaceSearchModel',
      'SearchResultType',
      'ProposedSearchResult',
    );
  }
  export namespace Status {
    export const Null = createEnumToken('PlaceSearchModel', 'Status', 'Null');
    export const Ready = createEnumToken('PlaceSearchModel', 'Status', 'Ready');
    export const Loading = createEnumToken('PlaceSearchModel', 'Status', 'Loading');
    export const Error = createEnumToken('PlaceSearchModel', 'Status', 'Error');
  }
}
