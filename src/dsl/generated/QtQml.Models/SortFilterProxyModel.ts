// AUTO-GENERATED — DO NOT EDIT
// Type: SortFilterProxyModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
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
  onAutoAcceptChildRowsChanged(handler: () => void): SortFilterProxyModelBuilder;
  onColumnsAboutToBeInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onColumnsAboutToBeMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationColumn: number,
    ) => void,
  ): SortFilterProxyModelBuilder;
  onColumnsAboutToBeRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onColumnsInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onColumnsMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationColumn: number,
    ) => void,
  ): SortFilterProxyModelBuilder;
  onColumnsRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onDataChanged(
    handler: (topLeft: QmlValue, bottomRight: QmlValue, roles: number) => void,
  ): SortFilterProxyModelBuilder;
  onDynamicSortFilterChanged(handler: () => void): SortFilterProxyModelBuilder;
  onFiltersChanged(handler: () => void): SortFilterProxyModelBuilder;
  onHeaderDataChanged(
    handler: (orientation: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onLayoutAboutToBeChanged(
    handler: (parents: QmlValue, hint: QmlValue) => void,
  ): SortFilterProxyModelBuilder;
  onLayoutChanged(
    handler: (parents: QmlValue, hint: QmlValue) => void,
  ): SortFilterProxyModelBuilder;
  onModelAboutToBeReset(handler: () => void): SortFilterProxyModelBuilder;
  onModelChanged(handler: () => void): SortFilterProxyModelBuilder;
  onModelReset(handler: () => void): SortFilterProxyModelBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SortFilterProxyModelBuilder;
  onPrimarySorterChanged(handler: () => void): SortFilterProxyModelBuilder;
  onRecursiveFilteringChanged(handler: () => void): SortFilterProxyModelBuilder;
  onRowsAboutToBeInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onRowsAboutToBeMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationRow: number,
    ) => void,
  ): SortFilterProxyModelBuilder;
  onRowsAboutToBeRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onRowsInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onRowsMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationRow: number,
    ) => void,
  ): SortFilterProxyModelBuilder;
  onRowsRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): SortFilterProxyModelBuilder;
  onSortersChanged(handler: () => void): SortFilterProxyModelBuilder;
  onSourceModelChanged(handler: () => void): SortFilterProxyModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): SortFilterProxyModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): SortFilterProxyModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): SortFilterProxyModelBuilder;
}

export function SortFilterProxyModel(): SortFilterProxyModelBuilder {
  return new DslBuilderImpl('SortFilterProxyModel') as unknown as SortFilterProxyModelBuilder;
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
