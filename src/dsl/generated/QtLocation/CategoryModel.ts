// AUTO-GENERATED — DO NOT EDIT
// Type: CategoryModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { PluginBuilder } from './Plugin.js';
export interface CategoryModelBuilder {
  id(id: string): CategoryModelBuilder;
  child(obj: QmlObjectBuilder): CategoryModelBuilder;

  hierarchical(value: boolean): CategoryModelBuilder;
  hierarchicalBind(expr: string): CategoryModelBuilder;
  objectName(value: string): CategoryModelBuilder;
  objectNameBind(expr: string): CategoryModelBuilder;
  plugin(value: PluginBuilder): CategoryModelBuilder;
  pluginBind(expr: string): CategoryModelBuilder;
  onColumnsAboutToBeInserted(body: string): CategoryModelBuilder;
  onColumnsAboutToBeMoved(body: string): CategoryModelBuilder;
  onColumnsAboutToBeRemoved(body: string): CategoryModelBuilder;
  onColumnsInserted(body: string): CategoryModelBuilder;
  onColumnsMoved(body: string): CategoryModelBuilder;
  onColumnsRemoved(body: string): CategoryModelBuilder;
  onDataChanged(body: string): CategoryModelBuilder;
  onHeaderDataChanged(body: string): CategoryModelBuilder;
  onHierarchicalChanged(body: string): CategoryModelBuilder;
  onLayoutAboutToBeChanged(body: string): CategoryModelBuilder;
  onLayoutChanged(body: string): CategoryModelBuilder;
  onModelAboutToBeReset(body: string): CategoryModelBuilder;
  onModelReset(body: string): CategoryModelBuilder;
  onObjectNameChanged(body: string): CategoryModelBuilder;
  onPluginChanged(body: string): CategoryModelBuilder;
  onRowsAboutToBeInserted(body: string): CategoryModelBuilder;
  onRowsAboutToBeMoved(body: string): CategoryModelBuilder;
  onRowsAboutToBeRemoved(body: string): CategoryModelBuilder;
  onRowsInserted(body: string): CategoryModelBuilder;
  onRowsMoved(body: string): CategoryModelBuilder;
  onRowsRemoved(body: string): CategoryModelBuilder;
  onStatusChanged(body: string): CategoryModelBuilder;
}

const CATEGORYMODEL_META: TypeMetadata = {
  typeName: 'CategoryModel',
  properties: [
    { name: 'hierarchical', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'plugin', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 0 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onHierarchicalChanged', paramCount: 0 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPluginChanged', paramCount: 0 },
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

export function CategoryModel(): CategoryModelBuilder {
  return createFluentBuilder('CategoryModel', CATEGORYMODEL_META) as unknown as CategoryModelBuilder;
}

export namespace CategoryModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('CategoryModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('CategoryModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('CategoryModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('CategoryModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('CategoryModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('CategoryModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('CategoryModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
  export namespace Roles {
    export const CategoryRole = createEnumToken('CategoryModel', 'Roles', 'CategoryRole');
    export const ParentCategoryRole = createEnumToken('CategoryModel', 'Roles', 'ParentCategoryRole');
  }
  export namespace Status {
    export const Null = createEnumToken('CategoryModel', 'Status', 'Null');
    export const Ready = createEnumToken('CategoryModel', 'Status', 'Ready');
    export const Loading = createEnumToken('CategoryModel', 'Status', 'Loading');
    export const Error = createEnumToken('CategoryModel', 'Status', 'Error');
  }
}
