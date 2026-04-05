// AUTO-GENERATED — DO NOT EDIT
// Type: ItemModelScatterDataProxy
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ItemModelScatterDataProxyBuilder {
  id(id: string): ItemModelScatterDataProxyBuilder;
  child(obj: QmlObjectBuilder): ItemModelScatterDataProxyBuilder;

  itemModel(value: QmlValue): ItemModelScatterDataProxyBuilder;
  itemModelBind(expr: string): ItemModelScatterDataProxyBuilder;
  objectName(value: string): ItemModelScatterDataProxyBuilder;
  objectNameBind(expr: string): ItemModelScatterDataProxyBuilder;
  rotationRole(value: string): ItemModelScatterDataProxyBuilder;
  rotationRoleBind(expr: string): ItemModelScatterDataProxyBuilder;
  rotationRolePattern(value: QmlValue): ItemModelScatterDataProxyBuilder;
  rotationRolePatternBind(expr: string): ItemModelScatterDataProxyBuilder;
  rotationRoleReplace(value: string): ItemModelScatterDataProxyBuilder;
  rotationRoleReplaceBind(expr: string): ItemModelScatterDataProxyBuilder;
  scaleRole(value: string): ItemModelScatterDataProxyBuilder;
  scaleRoleBind(expr: string): ItemModelScatterDataProxyBuilder;
  scaleRolePattern(value: QmlValue): ItemModelScatterDataProxyBuilder;
  scaleRolePatternBind(expr: string): ItemModelScatterDataProxyBuilder;
  scaleRoleReplace(value: string): ItemModelScatterDataProxyBuilder;
  scaleRoleReplaceBind(expr: string): ItemModelScatterDataProxyBuilder;
  xPosRole(value: string): ItemModelScatterDataProxyBuilder;
  xPosRoleBind(expr: string): ItemModelScatterDataProxyBuilder;
  xPosRolePattern(value: QmlValue): ItemModelScatterDataProxyBuilder;
  xPosRolePatternBind(expr: string): ItemModelScatterDataProxyBuilder;
  xPosRoleReplace(value: string): ItemModelScatterDataProxyBuilder;
  xPosRoleReplaceBind(expr: string): ItemModelScatterDataProxyBuilder;
  yPosRole(value: string): ItemModelScatterDataProxyBuilder;
  yPosRoleBind(expr: string): ItemModelScatterDataProxyBuilder;
  yPosRolePattern(value: QmlValue): ItemModelScatterDataProxyBuilder;
  yPosRolePatternBind(expr: string): ItemModelScatterDataProxyBuilder;
  yPosRoleReplace(value: string): ItemModelScatterDataProxyBuilder;
  yPosRoleReplaceBind(expr: string): ItemModelScatterDataProxyBuilder;
  zPosRole(value: string): ItemModelScatterDataProxyBuilder;
  zPosRoleBind(expr: string): ItemModelScatterDataProxyBuilder;
  zPosRolePattern(value: QmlValue): ItemModelScatterDataProxyBuilder;
  zPosRolePatternBind(expr: string): ItemModelScatterDataProxyBuilder;
  zPosRoleReplace(value: string): ItemModelScatterDataProxyBuilder;
  zPosRoleReplaceBind(expr: string): ItemModelScatterDataProxyBuilder;
  onArrayReset(body: string): ItemModelScatterDataProxyBuilder;
  onItemCountChanged(body: string): ItemModelScatterDataProxyBuilder;
  onItemModelChanged(body: string): ItemModelScatterDataProxyBuilder;
  onItemsAdded(body: string): ItemModelScatterDataProxyBuilder;
  onItemsChanged(body: string): ItemModelScatterDataProxyBuilder;
  onItemsInserted(body: string): ItemModelScatterDataProxyBuilder;
  onItemsRemoved(body: string): ItemModelScatterDataProxyBuilder;
  onObjectNameChanged(body: string): ItemModelScatterDataProxyBuilder;
  onRotationRoleChanged(body: string): ItemModelScatterDataProxyBuilder;
  onRotationRolePatternChanged(body: string): ItemModelScatterDataProxyBuilder;
  onRotationRoleReplaceChanged(body: string): ItemModelScatterDataProxyBuilder;
  onScaleArrayReset(body: string): ItemModelScatterDataProxyBuilder;
  onScaleRoleChanged(body: string): ItemModelScatterDataProxyBuilder;
  onScaleRolePatternChanged(body: string): ItemModelScatterDataProxyBuilder;
  onScaleRoleReplaceChanged(body: string): ItemModelScatterDataProxyBuilder;
  onSeriesChanged(body: string): ItemModelScatterDataProxyBuilder;
  onXPosRoleChanged(body: string): ItemModelScatterDataProxyBuilder;
  onXPosRolePatternChanged(body: string): ItemModelScatterDataProxyBuilder;
  onXPosRoleReplaceChanged(body: string): ItemModelScatterDataProxyBuilder;
  onYPosRoleChanged(body: string): ItemModelScatterDataProxyBuilder;
  onYPosRolePatternChanged(body: string): ItemModelScatterDataProxyBuilder;
  onYPosRoleReplaceChanged(body: string): ItemModelScatterDataProxyBuilder;
  onZPosRoleChanged(body: string): ItemModelScatterDataProxyBuilder;
  onZPosRolePatternChanged(body: string): ItemModelScatterDataProxyBuilder;
  onZPosRoleReplaceChanged(body: string): ItemModelScatterDataProxyBuilder;
}

const ITEMMODELSCATTERDATAPROXY_META: TypeMetadata = {
  typeName: 'ItemModelScatterDataProxy',
  properties: [
    { name: 'itemModel', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rotationRole', hasValue: true, hasBinding: true },
    { name: 'rotationRolePattern', hasValue: true, hasBinding: true },
    { name: 'rotationRoleReplace', hasValue: true, hasBinding: true },
    { name: 'scaleRole', hasValue: true, hasBinding: true },
    { name: 'scaleRolePattern', hasValue: true, hasBinding: true },
    { name: 'scaleRoleReplace', hasValue: true, hasBinding: true },
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
    { handlerName: 'onItemCountChanged', paramCount: 1 },
    { handlerName: 'onItemModelChanged', paramCount: 1 },
    { handlerName: 'onItemsAdded', paramCount: 2 },
    { handlerName: 'onItemsChanged', paramCount: 2 },
    { handlerName: 'onItemsInserted', paramCount: 2 },
    { handlerName: 'onItemsRemoved', paramCount: 2 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRotationRoleChanged', paramCount: 1 },
    { handlerName: 'onRotationRolePatternChanged', paramCount: 1 },
    { handlerName: 'onRotationRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onScaleArrayReset', paramCount: 0 },
    { handlerName: 'onScaleRoleChanged', paramCount: 1 },
    { handlerName: 'onScaleRolePatternChanged', paramCount: 1 },
    { handlerName: 'onScaleRoleReplaceChanged', paramCount: 1 },
    { handlerName: 'onSeriesChanged', paramCount: 1 },
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
  grouped: [],
  attached: [],
};

export function ItemModelScatterDataProxy(): ItemModelScatterDataProxyBuilder {
  return createFluentBuilder(
    'ItemModelScatterDataProxy',
    ITEMMODELSCATTERDATAPROXY_META,
  ) as unknown as ItemModelScatterDataProxyBuilder;
}

export namespace ItemModelScatterDataProxy {
  export namespace DataType {
    export const None = createEnumToken('ItemModelScatterDataProxy', 'DataType', 'None');
    export const Bar = createEnumToken('ItemModelScatterDataProxy', 'DataType', 'Bar');
    export const Scatter = createEnumToken('ItemModelScatterDataProxy', 'DataType', 'Scatter');
    export const Surface = createEnumToken('ItemModelScatterDataProxy', 'DataType', 'Surface');
  }
}
