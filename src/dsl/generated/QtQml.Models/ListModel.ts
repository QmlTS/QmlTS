// AUTO-GENERATED — DO NOT EDIT
// Type: ListModel
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ListModelBuilder {
  id(id: string): ListModelBuilder;
  child(obj: QmlObjectBuilder): ListModelBuilder;
  children(...objs: QmlObjectBuilder[]): ListModelBuilder;

  dynamicRoles(value: boolean): ListModelBuilder;
  dynamicRolesBind(expr: string): ListModelBuilder;
  objectName(value: string): ListModelBuilder;
  objectNameBind(expr: string): ListModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): ListModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): ListModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): ListModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): ListModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): ListModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): ListModelBuilder;
  onCountChanged(handler: DslSignalHandlerValue): ListModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): ListModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): ListModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): ListModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): ListModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): ListModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): ListModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ListModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): ListModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): ListModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): ListModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): ListModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): ListModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): ListModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ListModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ListModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ListModelBuilder;
}

const LISTMODEL_META: TypeMetadata = {
  typeName: 'ListModel',
  properties: [
    { name: 'dynamicRoles', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
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

export function ListModel(): ListModelBuilder {
  return createFluentBuilder('ListModel', LISTMODEL_META) as unknown as ListModelBuilder;
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
