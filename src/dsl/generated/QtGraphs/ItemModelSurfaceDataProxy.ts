// AUTO-GENERATED — DO NOT EDIT
// Type: ItemModelSurfaceDataProxy
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ItemModelSurfaceDataProxyBuilder {
  id(id: string): ItemModelSurfaceDataProxyBuilder;
  child(obj: QmlObjectBuilder): ItemModelSurfaceDataProxyBuilder;

  autoColumnCategories(value: boolean): ItemModelSurfaceDataProxyBuilder;
  autoColumnCategoriesBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  autoRowCategories(value: boolean): ItemModelSurfaceDataProxyBuilder;
  autoRowCategoriesBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  columnCategories(value: string[]): ItemModelSurfaceDataProxyBuilder;
  columnCategoriesBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  columnRole(value: string): ItemModelSurfaceDataProxyBuilder;
  columnRoleBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  columnRolePattern(value: QmlValue): ItemModelSurfaceDataProxyBuilder;
  columnRolePatternBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  columnRoleReplace(value: string): ItemModelSurfaceDataProxyBuilder;
  columnRoleReplaceBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  itemModel(value: QmlValue): ItemModelSurfaceDataProxyBuilder;
  itemModelBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  multiMatchBehavior(value: QmlEnumToken): ItemModelSurfaceDataProxyBuilder;
  multiMatchBehaviorBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  objectName(value: string): ItemModelSurfaceDataProxyBuilder;
  objectNameBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  rowCategories(value: string[]): ItemModelSurfaceDataProxyBuilder;
  rowCategoriesBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  rowRole(value: string): ItemModelSurfaceDataProxyBuilder;
  rowRoleBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  rowRolePattern(value: QmlValue): ItemModelSurfaceDataProxyBuilder;
  rowRolePatternBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  rowRoleReplace(value: string): ItemModelSurfaceDataProxyBuilder;
  rowRoleReplaceBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  useModelCategories(value: boolean): ItemModelSurfaceDataProxyBuilder;
  useModelCategoriesBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  xPosRole(value: string): ItemModelSurfaceDataProxyBuilder;
  xPosRoleBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  xPosRolePattern(value: QmlValue): ItemModelSurfaceDataProxyBuilder;
  xPosRolePatternBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  xPosRoleReplace(value: string): ItemModelSurfaceDataProxyBuilder;
  xPosRoleReplaceBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  yPosRole(value: string): ItemModelSurfaceDataProxyBuilder;
  yPosRoleBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  yPosRolePattern(value: QmlValue): ItemModelSurfaceDataProxyBuilder;
  yPosRolePatternBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  yPosRoleReplace(value: string): ItemModelSurfaceDataProxyBuilder;
  yPosRoleReplaceBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  zPosRole(value: string): ItemModelSurfaceDataProxyBuilder;
  zPosRoleBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  zPosRolePattern(value: QmlValue): ItemModelSurfaceDataProxyBuilder;
  zPosRolePatternBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  zPosRoleReplace(value: string): ItemModelSurfaceDataProxyBuilder;
  zPosRoleReplaceBind(expr: string): ItemModelSurfaceDataProxyBuilder;
  onArrayReset(body: string): ItemModelSurfaceDataProxyBuilder;
  onAutoColumnCategoriesChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onAutoRowCategoriesChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onColumnCategoriesChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onColumnCountChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onColumnRoleChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onColumnRolePatternChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onColumnRoleReplaceChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onItemChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onItemModelChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onMultiMatchBehaviorChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onObjectNameChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowCategoriesChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowCountChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowRoleChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowRolePatternChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowRoleReplaceChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowsAdded(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowsChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowsInserted(body: string): ItemModelSurfaceDataProxyBuilder;
  onRowsRemoved(body: string): ItemModelSurfaceDataProxyBuilder;
  onSeriesChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onUseModelCategoriesChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onXPosRoleChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onXPosRolePatternChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onXPosRoleReplaceChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onYPosRoleChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onYPosRolePatternChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onYPosRoleReplaceChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onZPosRoleChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onZPosRolePatternChanged(body: string): ItemModelSurfaceDataProxyBuilder;
  onZPosRoleReplaceChanged(body: string): ItemModelSurfaceDataProxyBuilder;
}

const ITEMMODELSURFACEDATAPROXY_META: TypeMetadata = {
  typeName: 'ItemModelSurfaceDataProxy',
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
    { name: 'rowCategories', hasValue: true, hasBinding: true },
    { name: 'rowRole', hasValue: true, hasBinding: true },
    { name: 'rowRolePattern', hasValue: true, hasBinding: true },
    { name: 'rowRoleReplace', hasValue: true, hasBinding: true },
    { name: 'useModelCategories', hasValue: true, hasBinding: true },
    { name: 'xPosRole', hasValue: true, hasBinding: true },
    { name: 'xPosRolePattern', hasValue: true, hasBinding: true },
    { name: 'xPosRoleReplace', hasValue: true, hasBinding: true },
    { name: 'yPosRole', hasValue: true, hasBinding: true },
    { name: 'yPosRolePattern', hasValue: true, hasBinding: true },
    { name: 'yPosRoleReplace', hasValue: true, hasBinding: true },
    { name: 'zPosRole', hasValue: true, hasBinding: true },
    { name: 'zPosRolePattern', hasValue: true, hasBinding: true },
    { name: 'zPosRoleReplace', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onArrayReset', paramCount: 0 },
    { handlerName: 'onAutoColumnCategoriesChanged', paramCount: 1 },
    { handlerName: 'onAutoRowCategoriesChanged', paramCount: 1 },
    { handlerName: 'onColumnCategoriesChanged', paramCount: 0 },
    { handlerName: 'onColumnCountChanged', paramCount: 1 },
    { handlerName: 'onColumnRoleChanged', paramCount: 1 },
    { handlerName: 'onColumnRolePatternChanged', paramCount: 1 },
    { handlerName: 'onColumnRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onItemChanged', paramCount: 2 },
    { handlerName: 'onItemModelChanged', paramCount: 1 },
    { handlerName: 'onMultiMatchBehaviorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
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
    { handlerName: 'onXPosRoleChanged', paramCount: 1 },
    { handlerName: 'onXPosRolePatternChanged', paramCount: 1 },
    { handlerName: 'onXPosRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onYPosRoleChanged', paramCount: 1 },
    { handlerName: 'onYPosRolePatternChanged', paramCount: 1 },
    { handlerName: 'onYPosRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onZPosRoleChanged', paramCount: 1 },
    { handlerName: 'onZPosRolePatternChanged', paramCount: 1 },
    { handlerName: 'onZPosRoleReplaceChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ItemModelSurfaceDataProxy(): ItemModelSurfaceDataProxyBuilder {
  return createFluentBuilder('ItemModelSurfaceDataProxy', ITEMMODELSURFACEDATAPROXY_META) as unknown as ItemModelSurfaceDataProxyBuilder;
}

export namespace ItemModelSurfaceDataProxy {
  export namespace DataType {
    export const None = createEnumToken('ItemModelSurfaceDataProxy', 'DataType', 'None');
    export const Bar = createEnumToken('ItemModelSurfaceDataProxy', 'DataType', 'Bar');
    export const Scatter = createEnumToken('ItemModelSurfaceDataProxy', 'DataType', 'Scatter');
    export const Surface = createEnumToken('ItemModelSurfaceDataProxy', 'DataType', 'Surface');
  }
  export namespace MultiMatchBehavior {
    export const First = createEnumToken('ItemModelSurfaceDataProxy', 'MultiMatchBehavior', 'First');
    export const Last = createEnumToken('ItemModelSurfaceDataProxy', 'MultiMatchBehavior', 'Last');
    export const Average = createEnumToken('ItemModelSurfaceDataProxy', 'MultiMatchBehavior', 'Average');
    export const CumulativeY = createEnumToken('ItemModelSurfaceDataProxy', 'MultiMatchBehavior', 'CumulativeY');
  }
}
