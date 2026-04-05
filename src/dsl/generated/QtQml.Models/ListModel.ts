// AUTO-GENERATED — DO NOT EDIT
// Type: ListModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ListModelBuilder {
  id(id: string): ListModelBuilder;
  child(obj: QmlObjectBuilder): ListModelBuilder;

  dynamicRoles(value: boolean): ListModelBuilder;
  dynamicRolesBind(expr: string): ListModelBuilder;
  objectName(value: string): ListModelBuilder;
  objectNameBind(expr: string): ListModelBuilder;
  onColumnsAboutToBeInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onColumnsAboutToBeMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationColumn: number,
    ) => void,
  ): ListModelBuilder;
  onColumnsAboutToBeRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onColumnsInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onColumnsMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationColumn: number,
    ) => void,
  ): ListModelBuilder;
  onColumnsRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onCountChanged(handler: () => void): ListModelBuilder;
  onDataChanged(
    handler: (topLeft: QmlValue, bottomRight: QmlValue, roles: number) => void,
  ): ListModelBuilder;
  onHeaderDataChanged(
    handler: (orientation: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onLayoutAboutToBeChanged(handler: (parents: QmlValue, hint: QmlValue) => void): ListModelBuilder;
  onLayoutChanged(handler: (parents: QmlValue, hint: QmlValue) => void): ListModelBuilder;
  onModelAboutToBeReset(handler: () => void): ListModelBuilder;
  onModelReset(handler: () => void): ListModelBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ListModelBuilder;
  onRowsAboutToBeInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onRowsAboutToBeMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationRow: number,
    ) => void,
  ): ListModelBuilder;
  onRowsAboutToBeRemoved(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onRowsInserted(
    handler: (parent: QmlValue, first: number, last: number) => void,
  ): ListModelBuilder;
  onRowsMoved(
    handler: (
      sourceParent: QmlValue,
      sourceStart: number,
      sourceEnd: number,
      destinationParent: QmlValue,
      destinationRow: number,
    ) => void,
  ): ListModelBuilder;
  onRowsRemoved(handler: (parent: QmlValue, first: number, last: number) => void): ListModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ListModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ListModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ListModelBuilder;
}

export function ListModel(): ListModelBuilder {
  return new DslBuilderImpl('ListModel') as unknown as ListModelBuilder;
}

export namespace ListModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('ListModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('ListModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken(
      'ListModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'ListModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'ListModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'ListModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'ListModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
