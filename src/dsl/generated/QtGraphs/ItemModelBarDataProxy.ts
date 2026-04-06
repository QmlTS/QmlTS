// AUTO-GENERATED — DO NOT EDIT
// Type: ItemModelBarDataProxy
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ItemModelBarDataProxyBuilder {
  id(id: string): ItemModelBarDataProxyBuilder;
  child(obj: QmlObjectBuilder): ItemModelBarDataProxyBuilder;
  children(...objs: QmlObjectBuilder[]): ItemModelBarDataProxyBuilder;

  autoColumnCategories(value: boolean): ItemModelBarDataProxyBuilder;
  autoColumnCategoriesBind(expr: string): ItemModelBarDataProxyBuilder;
  autoRowCategories(value: boolean): ItemModelBarDataProxyBuilder;
  autoRowCategoriesBind(expr: string): ItemModelBarDataProxyBuilder;
  columnCategories(value: string[]): ItemModelBarDataProxyBuilder;
  columnCategoriesBind(expr: string): ItemModelBarDataProxyBuilder;
  columnRole(value: string): ItemModelBarDataProxyBuilder;
  columnRoleBind(expr: string): ItemModelBarDataProxyBuilder;
  columnRolePattern(value: QmlValue): ItemModelBarDataProxyBuilder;
  columnRolePatternBind(expr: string): ItemModelBarDataProxyBuilder;
  columnRoleReplace(value: string): ItemModelBarDataProxyBuilder;
  columnRoleReplaceBind(expr: string): ItemModelBarDataProxyBuilder;
  itemModel(value: QmlValue): ItemModelBarDataProxyBuilder;
  itemModelBind(expr: string): ItemModelBarDataProxyBuilder;
  multiMatchBehavior(value: QmlEnumToken): ItemModelBarDataProxyBuilder;
  multiMatchBehaviorBind(expr: string): ItemModelBarDataProxyBuilder;
  objectName(value: string): ItemModelBarDataProxyBuilder;
  objectNameBind(expr: string): ItemModelBarDataProxyBuilder;
  rotationRole(value: string): ItemModelBarDataProxyBuilder;
  rotationRoleBind(expr: string): ItemModelBarDataProxyBuilder;
  rotationRolePattern(value: QmlValue): ItemModelBarDataProxyBuilder;
  rotationRolePatternBind(expr: string): ItemModelBarDataProxyBuilder;
  rotationRoleReplace(value: string): ItemModelBarDataProxyBuilder;
  rotationRoleReplaceBind(expr: string): ItemModelBarDataProxyBuilder;
  rowCategories(value: string[]): ItemModelBarDataProxyBuilder;
  rowCategoriesBind(expr: string): ItemModelBarDataProxyBuilder;
  rowRole(value: string): ItemModelBarDataProxyBuilder;
  rowRoleBind(expr: string): ItemModelBarDataProxyBuilder;
  rowRolePattern(value: QmlValue): ItemModelBarDataProxyBuilder;
  rowRolePatternBind(expr: string): ItemModelBarDataProxyBuilder;
  rowRoleReplace(value: string): ItemModelBarDataProxyBuilder;
  rowRoleReplaceBind(expr: string): ItemModelBarDataProxyBuilder;
  useModelCategories(value: boolean): ItemModelBarDataProxyBuilder;
  useModelCategoriesBind(expr: string): ItemModelBarDataProxyBuilder;
  valueRole(value: string): ItemModelBarDataProxyBuilder;
  valueRoleBind(expr: string): ItemModelBarDataProxyBuilder;
  valueRolePattern(value: QmlValue): ItemModelBarDataProxyBuilder;
  valueRolePatternBind(expr: string): ItemModelBarDataProxyBuilder;
  valueRoleReplace(value: string): ItemModelBarDataProxyBuilder;
  valueRoleReplaceBind(expr: string): ItemModelBarDataProxyBuilder;
  onArrayReset(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onAutoColumnCategoriesChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onAutoRowCategoriesChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onColCountChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onColumnCategoriesChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onColumnRoleChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onColumnRolePatternChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onColumnRoleReplaceChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onItemChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onItemModelChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onMultiMatchBehaviorChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRotationRoleChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRotationRolePatternChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRotationRoleReplaceChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowCategoriesChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowCountChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowRoleChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowRolePatternChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowRoleReplaceChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowsAdded(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowsChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onUseModelCategoriesChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onValueRoleChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onValueRolePatternChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
  onValueRoleReplaceChanged(handler: DslSignalHandlerValue): ItemModelBarDataProxyBuilder;
}

const ITEMMODELBARDATAPROXY_META: TypeMetadata = {
  typeName: 'ItemModelBarDataProxy',
  properties: [
    { name: 'autoColumnCategories', hasValue: true, hasBinding: true },
    { name: 'autoRowCategories', hasValue: true, hasBinding: true },
    { name: 'columnCategories', hasValue: true, hasBinding: true },
    { name: 'columnRole', hasValue: true, hasBinding: true },
    { name: 'columnRolePattern', hasValue: true, hasBinding: true },
    { name: 'columnRoleReplace', hasValue: true, hasBinding: true },
    { name: 'itemModel', hasValue: true, hasBinding: true },
    { name: 'multiMatchBehavior', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rotationRole', hasValue: true, hasBinding: true },
    { name: 'rotationRolePattern', hasValue: true, hasBinding: true },
    { name: 'rotationRoleReplace', hasValue: true, hasBinding: true },
    { name: 'rowCategories', hasValue: true, hasBinding: true },
    { name: 'rowRole', hasValue: true, hasBinding: true },
    { name: 'rowRolePattern', hasValue: true, hasBinding: true },
    { name: 'rowRoleReplace', hasValue: true, hasBinding: true },
    { name: 'useModelCategories', hasValue: true, hasBinding: true },
    { name: 'valueRole', hasValue: true, hasBinding: true },
    { name: 'valueRolePattern', hasValue: true, hasBinding: true },
    { name: 'valueRoleReplace', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onArrayReset', paramCount: 0 },
    { handlerName: 'onAutoColumnCategoriesChanged', paramCount: 1 },
    { handlerName: 'onAutoRowCategoriesChanged', paramCount: 1 },
    { handlerName: 'onColCountChanged', paramCount: 1 },
    { handlerName: 'onColumnCategoriesChanged', paramCount: 0 },
    { handlerName: 'onColumnRoleChanged', paramCount: 1 },
    { handlerName: 'onColumnRolePatternChanged', paramCount: 1 },
    { handlerName: 'onColumnRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onItemChanged', paramCount: 2 },
    { handlerName: 'onItemModelChanged', paramCount: 1 },
    { handlerName: 'onMultiMatchBehaviorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRotationRoleChanged', paramCount: 1 },
    { handlerName: 'onRotationRolePatternChanged', paramCount: 1 },
    { handlerName: 'onRotationRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onRowCategoriesChanged', paramCount: 0 },
    { handlerName: 'onRowCountChanged', paramCount: 1 },
    { handlerName: 'onRowRoleChanged', paramCount: 1 },
    { handlerName: 'onRowRolePatternChanged', paramCount: 1 },
    { handlerName: 'onRowRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onRowsAdded', paramCount: 2 },
    { handlerName: 'onRowsChanged', paramCount: 2 },
    { handlerName: 'onRowsInserted', paramCount: 2 },
    { handlerName: 'onRowsRemoved', paramCount: 2 },
    { handlerName: 'onSeriesChanged', paramCount: 1 },
    { handlerName: 'onUseModelCategoriesChanged', paramCount: 1 },
    { handlerName: 'onValueRoleChanged', paramCount: 1 },
    { handlerName: 'onValueRolePatternChanged', paramCount: 1 },
    { handlerName: 'onValueRoleReplaceChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ItemModelBarDataProxy(): ItemModelBarDataProxyBuilder {
  return createFluentBuilder(
    'ItemModelBarDataProxy',
    ITEMMODELBARDATAPROXY_META,
  ) as unknown as ItemModelBarDataProxyBuilder;
}

export namespace ItemModelBarDataProxy {
  export namespace DataType {
    export const None = createEnumToken('ItemModelBarDataProxy', 'DataType', 'None');
    export const Bar = createEnumToken('ItemModelBarDataProxy', 'DataType', 'Bar');
    export const Scatter = createEnumToken('ItemModelBarDataProxy', 'DataType', 'Scatter');
    export const Surface = createEnumToken('ItemModelBarDataProxy', 'DataType', 'Surface');
  }
  export namespace MultiMatchBehavior {
    export const First = createEnumToken('ItemModelBarDataProxy', 'MultiMatchBehavior', 'First');
    export const Last = createEnumToken('ItemModelBarDataProxy', 'MultiMatchBehavior', 'Last');
    export const Average = createEnumToken(
      'ItemModelBarDataProxy',
      'MultiMatchBehavior',
      'Average',
    );
    export const Cumulative = createEnumToken(
      'ItemModelBarDataProxy',
      'MultiMatchBehavior',
      'Cumulative',
    );
  }
  export namespace RemoveLabels {
    export const No = createEnumToken('ItemModelBarDataProxy', 'RemoveLabels', 'No');
    export const Yes = createEnumToken('ItemModelBarDataProxy', 'RemoveLabels', 'Yes');
  }
}
