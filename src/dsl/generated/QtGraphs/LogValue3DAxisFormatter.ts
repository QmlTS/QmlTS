// AUTO-GENERATED — DO NOT EDIT
// Type: LogValue3DAxisFormatter
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface LogValue3DAxisFormatterBuilder {
  id(id: string): LogValue3DAxisFormatterBuilder;
  child(obj: QmlObjectBuilder): LogValue3DAxisFormatterBuilder;

  autoSubGrid(value: boolean): LogValue3DAxisFormatterBuilder;
  autoSubGridBind(expr: string): LogValue3DAxisFormatterBuilder;
  base(value: number): LogValue3DAxisFormatterBuilder;
  baseBind(expr: string): LogValue3DAxisFormatterBuilder;
  edgeLabelsVisible(value: boolean): LogValue3DAxisFormatterBuilder;
  edgeLabelsVisibleBind(expr: string): LogValue3DAxisFormatterBuilder;
  objectName(value: string): LogValue3DAxisFormatterBuilder;
  objectNameBind(expr: string): LogValue3DAxisFormatterBuilder;
  onAutoSubGridChanged(body: string): LogValue3DAxisFormatterBuilder;
  onBaseChanged(body: string): LogValue3DAxisFormatterBuilder;
  onEdgeLabelsVisibleChanged(body: string): LogValue3DAxisFormatterBuilder;
  onObjectNameChanged(body: string): LogValue3DAxisFormatterBuilder;
}

const LOGVALUE3DAXISFORMATTER_META: TypeMetadata = {
  typeName: 'LogValue3DAxisFormatter',
  properties: [
    { name: 'autoSubGrid', hasValue: true, hasBinding: true },
    { name: 'base', hasValue: true, hasBinding: true },
    { name: 'edgeLabelsVisible', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoSubGridChanged', paramCount: 1 },
    { handlerName: 'onBaseChanged', paramCount: 1 },
    { handlerName: 'onEdgeLabelsVisibleChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function LogValue3DAxisFormatter(): LogValue3DAxisFormatterBuilder {
  return createFluentBuilder(
    'LogValue3DAxisFormatter',
    LOGVALUE3DAXISFORMATTER_META,
  ) as unknown as LogValue3DAxisFormatterBuilder;
}
