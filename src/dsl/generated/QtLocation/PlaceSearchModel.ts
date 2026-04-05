// AUTO-GENERATED — DO NOT EDIT
// Type: PlaceSearchModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
export interface PlaceSearchModelBuilder {
  id(id: string): PlaceSearchModelBuilder;
  child(obj: QmlObjectBuilder): PlaceSearchModelBuilder;

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
  onCategoriesChanged(body: string): PlaceSearchModelBuilder;
  onColumnsAboutToBeInserted(body: string): PlaceSearchModelBuilder;
  onColumnsAboutToBeMoved(body: string): PlaceSearchModelBuilder;
  onColumnsAboutToBeRemoved(body: string): PlaceSearchModelBuilder;
  onColumnsInserted(body: string): PlaceSearchModelBuilder;
  onColumnsMoved(body: string): PlaceSearchModelBuilder;
  onColumnsRemoved(body: string): PlaceSearchModelBuilder;
  onDataChanged(body: string): PlaceSearchModelBuilder;
  onFavoritesMatchParametersChanged(body: string): PlaceSearchModelBuilder;
  onFavoritesPluginChanged(body: string): PlaceSearchModelBuilder;
  onHeaderDataChanged(body: string): PlaceSearchModelBuilder;
  onIncrementalChanged(body: string): PlaceSearchModelBuilder;
  onLayoutAboutToBeChanged(body: string): PlaceSearchModelBuilder;
  onLayoutChanged(body: string): PlaceSearchModelBuilder;
  onLimitChanged(body: string): PlaceSearchModelBuilder;
  onModelAboutToBeReset(body: string): PlaceSearchModelBuilder;
  onModelReset(body: string): PlaceSearchModelBuilder;
  onNextPagesAvailableChanged(body: string): PlaceSearchModelBuilder;
  onObjectNameChanged(body: string): PlaceSearchModelBuilder;
  onPluginChanged(body: string): PlaceSearchModelBuilder;
  onPreviousPagesAvailableChanged(body: string): PlaceSearchModelBuilder;
  onRecommendationIdChanged(body: string): PlaceSearchModelBuilder;
  onRelevanceHintChanged(body: string): PlaceSearchModelBuilder;
  onRowCountChanged(body: string): PlaceSearchModelBuilder;
  onRowsAboutToBeInserted(body: string): PlaceSearchModelBuilder;
  onRowsAboutToBeMoved(body: string): PlaceSearchModelBuilder;
  onRowsAboutToBeRemoved(body: string): PlaceSearchModelBuilder;
  onRowsInserted(body: string): PlaceSearchModelBuilder;
  onRowsMoved(body: string): PlaceSearchModelBuilder;
  onRowsRemoved(body: string): PlaceSearchModelBuilder;
  onSearchAreaChanged(body: string): PlaceSearchModelBuilder;
  onSearchTermChanged(body: string): PlaceSearchModelBuilder;
  onStatusChanged(body: string): PlaceSearchModelBuilder;
  onVisibilityScopeChanged(body: string): PlaceSearchModelBuilder;
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
  grouped: [
  ],
  attached: [
  ],
};

export function PlaceSearchModel(): PlaceSearchModelBuilder {
  return createFluentBuilder('PlaceSearchModel', PLACESEARCHMODEL_META) as unknown as PlaceSearchModelBuilder;
}

export namespace PlaceSearchModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('PlaceSearchModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('PlaceSearchModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('PlaceSearchModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('PlaceSearchModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('PlaceSearchModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('PlaceSearchModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('PlaceSearchModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
  export namespace RelevanceHint {
    export const UnspecifiedHint = createEnumToken('PlaceSearchModel', 'RelevanceHint', 'UnspecifiedHint');
    export const DistanceHint = createEnumToken('PlaceSearchModel', 'RelevanceHint', 'DistanceHint');
    export const LexicalPlaceNameHint = createEnumToken('PlaceSearchModel', 'RelevanceHint', 'LexicalPlaceNameHint');
  }
  export namespace SearchResultType {
    export const UnknownSearchResult = createEnumToken('PlaceSearchModel', 'SearchResultType', 'UnknownSearchResult');
    export const PlaceResult = createEnumToken('PlaceSearchModel', 'SearchResultType', 'PlaceResult');
    export const ProposedSearchResult = createEnumToken('PlaceSearchModel', 'SearchResultType', 'ProposedSearchResult');
  }
  export namespace Status {
    export const Null = createEnumToken('PlaceSearchModel', 'Status', 'Null');
    export const Ready = createEnumToken('PlaceSearchModel', 'Status', 'Ready');
    export const Loading = createEnumToken('PlaceSearchModel', 'Status', 'Loading');
    export const Error = createEnumToken('PlaceSearchModel', 'Status', 'Error');
  }
}
