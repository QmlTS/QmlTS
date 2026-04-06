// AUTO-GENERATED — DO NOT EDIT
// Type: HeightMapSurfaceDataProxy
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface HeightMapSurfaceDataProxyBuilder {
  id(id: string): HeightMapSurfaceDataProxyBuilder;
  child(obj: QmlObjectBuilder): HeightMapSurfaceDataProxyBuilder;
  children(...objs: QmlObjectBuilder[]): HeightMapSurfaceDataProxyBuilder;

  autoScaleY(value: boolean): HeightMapSurfaceDataProxyBuilder;
  autoScaleYBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  heightMap(value: QmlValue): HeightMapSurfaceDataProxyBuilder;
  heightMapBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  heightMapFile(value: string): HeightMapSurfaceDataProxyBuilder;
  heightMapFileBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  maxXValue(value: number): HeightMapSurfaceDataProxyBuilder;
  maxXValueBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  maxYValue(value: number): HeightMapSurfaceDataProxyBuilder;
  maxYValueBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  maxZValue(value: number): HeightMapSurfaceDataProxyBuilder;
  maxZValueBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  minXValue(value: number): HeightMapSurfaceDataProxyBuilder;
  minXValueBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  minYValue(value: number): HeightMapSurfaceDataProxyBuilder;
  minYValueBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  minZValue(value: number): HeightMapSurfaceDataProxyBuilder;
  minZValueBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  objectName(value: string): HeightMapSurfaceDataProxyBuilder;
  objectNameBind(expr: string): HeightMapSurfaceDataProxyBuilder;
  onArrayReset(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onAutoScaleYChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onColumnCountChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onHeightMapChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onHeightMapFileChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onItemChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onMaxXValueChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onMaxYValueChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onMaxZValueChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onMinXValueChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onMinYValueChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onMinZValueChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onRowCountChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onRowsAdded(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onRowsChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): HeightMapSurfaceDataProxyBuilder;
}

const HEIGHTMAPSURFACEDATAPROXY_META: TypeMetadata = {
  typeName: 'HeightMapSurfaceDataProxy',
  properties: [
    { name: 'autoScaleY', hasValue: true, hasBinding: true },
    { name: 'heightMap', hasValue: true, hasBinding: true },
    { name: 'heightMapFile', hasValue: true, hasBinding: true },
    { name: 'maxXValue', hasValue: true, hasBinding: true },
    { name: 'maxYValue', hasValue: true, hasBinding: true },
    { name: 'maxZValue', hasValue: true, hasBinding: true },
    { name: 'minXValue', hasValue: true, hasBinding: true },
    { name: 'minYValue', hasValue: true, hasBinding: true },
    { name: 'minZValue', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onArrayReset', paramCount: 0 },
    { handlerName: 'onAutoScaleYChanged', paramCount: 1 },
    { handlerName: 'onColumnCountChanged', paramCount: 1 },
    { handlerName: 'onHeightMapChanged', paramCount: 1 },
    { handlerName: 'onHeightMapFileChanged', paramCount: 1 },
    { handlerName: 'onItemChanged', paramCount: 2 },
    { handlerName: 'onMaxXValueChanged', paramCount: 1 },
    { handlerName: 'onMaxYValueChanged', paramCount: 1 },
    { handlerName: 'onMaxZValueChanged', paramCount: 1 },
    { handlerName: 'onMinXValueChanged', paramCount: 1 },
    { handlerName: 'onMinYValueChanged', paramCount: 1 },
    { handlerName: 'onMinZValueChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowCountChanged', paramCount: 1 },
    { handlerName: 'onRowsAdded', paramCount: 2 },
    { handlerName: 'onRowsChanged', paramCount: 2 },
    { handlerName: 'onRowsInserted', paramCount: 2 },
    { handlerName: 'onRowsRemoved', paramCount: 2 },
    { handlerName: 'onSeriesChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function HeightMapSurfaceDataProxy(): HeightMapSurfaceDataProxyBuilder {
  return createFluentBuilder(
    'HeightMapSurfaceDataProxy',
    HEIGHTMAPSURFACEDATAPROXY_META,
  ) as unknown as HeightMapSurfaceDataProxyBuilder;
}

export namespace HeightMapSurfaceDataProxy {
  export namespace DataType {
    export const None = createEnumToken('HeightMapSurfaceDataProxy', 'DataType', 'None');
    export const Bar = createEnumToken('HeightMapSurfaceDataProxy', 'DataType', 'Bar');
    export const Scatter = createEnumToken('HeightMapSurfaceDataProxy', 'DataType', 'Scatter');
    export const Surface = createEnumToken('HeightMapSurfaceDataProxy', 'DataType', 'Surface');
  }
}
