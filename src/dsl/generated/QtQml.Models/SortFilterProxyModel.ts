// AUTO-GENERATED — DO NOT EDIT
// Type: SortFilterProxyModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface SortFilterProxyModelBuilder {
  id(id: string): SortFilterProxyModelBuilder;
  child(obj: QmlObjectBuilder): SortFilterProxyModelBuilder;

  autoAcceptChildRows(value: boolean): SortFilterProxyModelBuilder;
  autoAcceptChildRowsBind(expr: string): SortFilterProxyModelBuilder;
  dynamicSortFilter(value: boolean): SortFilterProxyModelBuilder;
  dynamicSortFilterBind(expr: string): SortFilterProxyModelBuilder;
  model(value: QmlValue): SortFilterProxyModelBuilder;
  modelBind(expr: string): SortFilterProxyModelBuilder;
  objectName(value: string): SortFilterProxyModelBuilder;
  objectNameBind(expr: string): SortFilterProxyModelBuilder;
  recursiveFiltering(value: boolean): SortFilterProxyModelBuilder;
  recursiveFilteringBind(expr: string): SortFilterProxyModelBuilder;
  sourceModel(value: QmlValue): SortFilterProxyModelBuilder;
  sourceModelBind(expr: string): SortFilterProxyModelBuilder;
  onAutoAcceptChildRowsChanged(body: string): SortFilterProxyModelBuilder;
  onColumnsAboutToBeInserted(body: string): SortFilterProxyModelBuilder;
  onColumnsAboutToBeMoved(body: string): SortFilterProxyModelBuilder;
  onColumnsAboutToBeRemoved(body: string): SortFilterProxyModelBuilder;
  onColumnsInserted(body: string): SortFilterProxyModelBuilder;
  onColumnsMoved(body: string): SortFilterProxyModelBuilder;
  onColumnsRemoved(body: string): SortFilterProxyModelBuilder;
  onDataChanged(body: string): SortFilterProxyModelBuilder;
  onDynamicSortFilterChanged(body: string): SortFilterProxyModelBuilder;
  onFiltersChanged(body: string): SortFilterProxyModelBuilder;
  onHeaderDataChanged(body: string): SortFilterProxyModelBuilder;
  onLayoutAboutToBeChanged(body: string): SortFilterProxyModelBuilder;
  onLayoutChanged(body: string): SortFilterProxyModelBuilder;
  onModelAboutToBeReset(body: string): SortFilterProxyModelBuilder;
  onModelChanged(body: string): SortFilterProxyModelBuilder;
  onModelReset(body: string): SortFilterProxyModelBuilder;
  onObjectNameChanged(body: string): SortFilterProxyModelBuilder;
  onPrimarySorterChanged(body: string): SortFilterProxyModelBuilder;
  onRecursiveFilteringChanged(body: string): SortFilterProxyModelBuilder;
  onRowsAboutToBeInserted(body: string): SortFilterProxyModelBuilder;
  onRowsAboutToBeMoved(body: string): SortFilterProxyModelBuilder;
  onRowsAboutToBeRemoved(body: string): SortFilterProxyModelBuilder;
  onRowsInserted(body: string): SortFilterProxyModelBuilder;
  onRowsMoved(body: string): SortFilterProxyModelBuilder;
  onRowsRemoved(body: string): SortFilterProxyModelBuilder;
  onSortersChanged(body: string): SortFilterProxyModelBuilder;
  onSourceModelChanged(body: string): SortFilterProxyModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): SortFilterProxyModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): SortFilterProxyModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): SortFilterProxyModelBuilder;
}

const SORTFILTERPROXYMODEL_META: TypeMetadata = {
  typeName: 'SortFilterProxyModel',
  properties: [
    { name: 'autoAcceptChildRows', hasValue: true, hasBinding: true },
    { name: 'dynamicSortFilter', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'recursiveFiltering', hasValue: true, hasBinding: true },
    { name: 'sourceModel', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoAcceptChildRowsChanged', paramCount: 0 },
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onDynamicSortFilterChanged', paramCount: 0 },
    { handlerName: 'onFiltersChanged', paramCount: 0 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPrimarySorterChanged', paramCount: 0 },
    { handlerName: 'onRecursiveFilteringChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
    { handlerName: 'onSortersChanged', paramCount: 0 },
    { handlerName: 'onSourceModelChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [
    {
      methodName: 'delegateModel',
      attachedTypeName: 'DelegateModel',
      properties: [
        { name: 'groups', hasValue: true, hasBinding: true },
        { name: 'inItems', hasValue: true, hasBinding: true },
        { name: 'inPersistedItems', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupsChanged', paramCount: 0 },
        { handlerName: 'onUnresolvedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'objectModel',
      attachedTypeName: 'ObjectModel',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'package',
      attachedTypeName: 'Package',
      properties: [
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
    },
  ],
};

export function SortFilterProxyModel(): SortFilterProxyModelBuilder {
  return createFluentBuilder(
    'SortFilterProxyModel',
    SORTFILTERPROXYMODEL_META,
  ) as unknown as SortFilterProxyModelBuilder;
}

export namespace SortFilterProxyModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('SortFilterProxyModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken(
      'SortFilterProxyModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'SortFilterProxyModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'SortFilterProxyModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'SortFilterProxyModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'SortFilterProxyModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'SortFilterProxyModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
