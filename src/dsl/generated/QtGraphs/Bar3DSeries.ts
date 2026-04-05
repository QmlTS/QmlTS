// AUTO-GENERATED — DO NOT EDIT
// Type: Bar3DSeries
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlPoint, QmlQuaternion, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { GradientBuilder } from '../QtQuick/Gradient.js';
import type { Category3DAxisBuilder } from './Category3DAxis.js';
import type { Value3DAxisBuilder } from './Value3DAxis.js';
export interface Bar3DSeriesBuilder {
  id(id: string): Bar3DSeriesBuilder;
  child(obj: QmlObjectBuilder): Bar3DSeriesBuilder;

  baseColor(value: QmlColor): Bar3DSeriesBuilder;
  baseColorBind(expr: string): Bar3DSeriesBuilder;
  baseGradient(value: GradientBuilder): Bar3DSeriesBuilder;
  baseGradientBind(expr: string): Bar3DSeriesBuilder;
  colorStyle(value: QmlEnumToken): Bar3DSeriesBuilder;
  colorStyleBind(expr: string): Bar3DSeriesBuilder;
  columnAxis(value: Category3DAxisBuilder): Bar3DSeriesBuilder;
  columnAxisBind(expr: string): Bar3DSeriesBuilder;
  columnLabels(value: string[]): Bar3DSeriesBuilder;
  columnLabelsBind(expr: string): Bar3DSeriesBuilder;
  customColumnLabels(value: string[]): Bar3DSeriesBuilder;
  customColumnLabelsBind(expr: string): Bar3DSeriesBuilder;
  customRowLabels(value: string[]): Bar3DSeriesBuilder;
  customRowLabelsBind(expr: string): Bar3DSeriesBuilder;
  dataArray(value: QmlValue[]): Bar3DSeriesBuilder;
  dataArrayBind(expr: string): Bar3DSeriesBuilder;
  dataProxy(value: QmlValue): Bar3DSeriesBuilder;
  dataProxyBind(expr: string): Bar3DSeriesBuilder;
  itemLabelFormat(value: string): Bar3DSeriesBuilder;
  itemLabelFormatBind(expr: string): Bar3DSeriesBuilder;
  itemLabelVisible(value: boolean): Bar3DSeriesBuilder;
  itemLabelVisibleBind(expr: string): Bar3DSeriesBuilder;
  lightingMode(value: QmlEnumToken): Bar3DSeriesBuilder;
  lightingModeBind(expr: string): Bar3DSeriesBuilder;
  mesh(value: QmlEnumToken): Bar3DSeriesBuilder;
  meshBind(expr: string): Bar3DSeriesBuilder;
  meshAngle(value: number): Bar3DSeriesBuilder;
  meshAngleBind(expr: string): Bar3DSeriesBuilder;
  meshRotation(value: QmlQuaternion): Bar3DSeriesBuilder;
  meshRotationBind(expr: string): Bar3DSeriesBuilder;
  meshSmooth(value: boolean): Bar3DSeriesBuilder;
  meshSmoothBind(expr: string): Bar3DSeriesBuilder;
  multiHighlightColor(value: QmlColor): Bar3DSeriesBuilder;
  multiHighlightColorBind(expr: string): Bar3DSeriesBuilder;
  multiHighlightGradient(value: GradientBuilder): Bar3DSeriesBuilder;
  multiHighlightGradientBind(expr: string): Bar3DSeriesBuilder;
  name(value: string): Bar3DSeriesBuilder;
  nameBind(expr: string): Bar3DSeriesBuilder;
  objectName(value: string): Bar3DSeriesBuilder;
  objectNameBind(expr: string): Bar3DSeriesBuilder;
  rowAxis(value: Category3DAxisBuilder): Bar3DSeriesBuilder;
  rowAxisBind(expr: string): Bar3DSeriesBuilder;
  rowLabels(value: string[]): Bar3DSeriesBuilder;
  rowLabelsBind(expr: string): Bar3DSeriesBuilder;
  selectedBar(value: QmlPoint): Bar3DSeriesBuilder;
  selectedBarBind(expr: string): Bar3DSeriesBuilder;
  singleHighlightColor(value: QmlColor): Bar3DSeriesBuilder;
  singleHighlightColorBind(expr: string): Bar3DSeriesBuilder;
  singleHighlightGradient(value: GradientBuilder): Bar3DSeriesBuilder;
  singleHighlightGradientBind(expr: string): Bar3DSeriesBuilder;
  userDefinedMesh(value: string): Bar3DSeriesBuilder;
  userDefinedMeshBind(expr: string): Bar3DSeriesBuilder;
  valueAxis(value: Value3DAxisBuilder): Bar3DSeriesBuilder;
  valueAxisBind(expr: string): Bar3DSeriesBuilder;
  valueColoringEnabled(value: boolean): Bar3DSeriesBuilder;
  valueColoringEnabledBind(expr: string): Bar3DSeriesBuilder;
  visible(value: boolean): Bar3DSeriesBuilder;
  visibleBind(expr: string): Bar3DSeriesBuilder;
  onBaseColorChanged(body: string): Bar3DSeriesBuilder;
  onBaseGradientChanged(body: string): Bar3DSeriesBuilder;
  onColorStyleChanged(body: string): Bar3DSeriesBuilder;
  onColumnAxisChanged(body: string): Bar3DSeriesBuilder;
  onColumnLabelsChanged(body: string): Bar3DSeriesBuilder;
  onCustomColumnLabelsChanged(body: string): Bar3DSeriesBuilder;
  onCustomRowLabelsChanged(body: string): Bar3DSeriesBuilder;
  onDataArrayChanged(body: string): Bar3DSeriesBuilder;
  onDataProxyChanged(body: string): Bar3DSeriesBuilder;
  onItemLabelChanged(body: string): Bar3DSeriesBuilder;
  onItemLabelFormatChanged(body: string): Bar3DSeriesBuilder;
  onItemLabelVisibleChanged(body: string): Bar3DSeriesBuilder;
  onLightingModeChanged(body: string): Bar3DSeriesBuilder;
  onMeshAngleChanged(body: string): Bar3DSeriesBuilder;
  onMeshChanged(body: string): Bar3DSeriesBuilder;
  onMeshRotationChanged(body: string): Bar3DSeriesBuilder;
  onMeshSmoothChanged(body: string): Bar3DSeriesBuilder;
  onMultiHighlightColorChanged(body: string): Bar3DSeriesBuilder;
  onMultiHighlightGradientChanged(body: string): Bar3DSeriesBuilder;
  onNameChanged(body: string): Bar3DSeriesBuilder;
  onObjectNameChanged(body: string): Bar3DSeriesBuilder;
  onRowAxisChanged(body: string): Bar3DSeriesBuilder;
  onRowColorsChanged(body: string): Bar3DSeriesBuilder;
  onRowLabelsChanged(body: string): Bar3DSeriesBuilder;
  onSelectedBarChanged(body: string): Bar3DSeriesBuilder;
  onSingleHighlightColorChanged(body: string): Bar3DSeriesBuilder;
  onSingleHighlightGradientChanged(body: string): Bar3DSeriesBuilder;
  onUserDefinedMeshChanged(body: string): Bar3DSeriesBuilder;
  onValueAxisChanged(body: string): Bar3DSeriesBuilder;
  onValueColoringEnabledChanged(body: string): Bar3DSeriesBuilder;
  onVisibleChanged(body: string): Bar3DSeriesBuilder;
}

const BAR3DSERIES_META: TypeMetadata = {
  typeName: 'Bar3DSeries',
  properties: [
    { name: 'baseColor', hasValue: true, hasBinding: true },
    { name: 'baseGradient', hasValue: true, hasBinding: true },
    { name: 'colorStyle', hasValue: true, hasBinding: true },
    { name: 'columnAxis', hasValue: true, hasBinding: true },
    { name: 'columnLabels', hasValue: true, hasBinding: true },
    { name: 'customColumnLabels', hasValue: true, hasBinding: true },
    { name: 'customRowLabels', hasValue: true, hasBinding: true },
    { name: 'dataArray', hasValue: true, hasBinding: true },
    { name: 'dataProxy', hasValue: true, hasBinding: true },
    { name: 'itemLabelFormat', hasValue: true, hasBinding: true },
    { name: 'itemLabelVisible', hasValue: true, hasBinding: true },
    { name: 'lightingMode', hasValue: true, hasBinding: true },
    { name: 'mesh', hasValue: true, hasBinding: true },
    { name: 'meshAngle', hasValue: true, hasBinding: true },
    { name: 'meshRotation', hasValue: true, hasBinding: true },
    { name: 'meshSmooth', hasValue: true, hasBinding: true },
    { name: 'multiHighlightColor', hasValue: true, hasBinding: true },
    { name: 'multiHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rowAxis', hasValue: true, hasBinding: true },
    { name: 'rowLabels', hasValue: true, hasBinding: true },
    { name: 'selectedBar', hasValue: true, hasBinding: true },
    { name: 'singleHighlightColor', hasValue: true, hasBinding: true },
    { name: 'singleHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'userDefinedMesh', hasValue: true, hasBinding: true },
    { name: 'valueAxis', hasValue: true, hasBinding: true },
    { name: 'valueColoringEnabled', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBaseColorChanged', paramCount: 1 },
    { handlerName: 'onBaseGradientChanged', paramCount: 1 },
    { handlerName: 'onColorStyleChanged', paramCount: 1 },
    { handlerName: 'onColumnAxisChanged', paramCount: 1 },
    { handlerName: 'onColumnLabelsChanged', paramCount: 0 },
    { handlerName: 'onCustomColumnLabelsChanged', paramCount: 1 },
    { handlerName: 'onCustomRowLabelsChanged', paramCount: 1 },
    { handlerName: 'onDataArrayChanged', paramCount: 1 },
    { handlerName: 'onDataProxyChanged', paramCount: 1 },
    { handlerName: 'onItemLabelChanged', paramCount: 1 },
    { handlerName: 'onItemLabelFormatChanged', paramCount: 1 },
    { handlerName: 'onItemLabelVisibleChanged', paramCount: 1 },
    { handlerName: 'onLightingModeChanged', paramCount: 1 },
    { handlerName: 'onMeshAngleChanged', paramCount: 1 },
    { handlerName: 'onMeshChanged', paramCount: 1 },
    { handlerName: 'onMeshRotationChanged', paramCount: 1 },
    { handlerName: 'onMeshSmoothChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowAxisChanged', paramCount: 1 },
    { handlerName: 'onRowColorsChanged', paramCount: 1 },
    { handlerName: 'onRowLabelsChanged', paramCount: 0 },
    { handlerName: 'onSelectedBarChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onUserDefinedMeshChanged', paramCount: 1 },
    { handlerName: 'onValueAxisChanged', paramCount: 1 },
    { handlerName: 'onValueColoringEnabledChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'seriesChildren',
};

export function Bar3DSeries(): Bar3DSeriesBuilder {
  return createFluentBuilder('Bar3DSeries', BAR3DSERIES_META) as unknown as Bar3DSeriesBuilder;
}

export namespace Bar3DSeries {
  export namespace LightingMode {
    export const Shaded = createEnumToken('Bar3DSeries', 'LightingMode', 'Shaded');
    export const Unshaded = createEnumToken('Bar3DSeries', 'LightingMode', 'Unshaded');
  }
  export namespace Mesh {
    export const UserDefined = createEnumToken('Bar3DSeries', 'Mesh', 'UserDefined');
    export const Bar = createEnumToken('Bar3DSeries', 'Mesh', 'Bar');
    export const Cube = createEnumToken('Bar3DSeries', 'Mesh', 'Cube');
    export const Pyramid = createEnumToken('Bar3DSeries', 'Mesh', 'Pyramid');
    export const Cone = createEnumToken('Bar3DSeries', 'Mesh', 'Cone');
    export const Cylinder = createEnumToken('Bar3DSeries', 'Mesh', 'Cylinder');
    export const BevelBar = createEnumToken('Bar3DSeries', 'Mesh', 'BevelBar');
    export const BevelCube = createEnumToken('Bar3DSeries', 'Mesh', 'BevelCube');
    export const Sphere = createEnumToken('Bar3DSeries', 'Mesh', 'Sphere');
    export const Minimal = createEnumToken('Bar3DSeries', 'Mesh', 'Minimal');
    export const Arrow = createEnumToken('Bar3DSeries', 'Mesh', 'Arrow');
    export const Point = createEnumToken('Bar3DSeries', 'Mesh', 'Point');
  }
  export namespace SeriesType {
    export const None = createEnumToken('Bar3DSeries', 'SeriesType', 'None');
    export const Bar = createEnumToken('Bar3DSeries', 'SeriesType', 'Bar');
    export const Scatter = createEnumToken('Bar3DSeries', 'SeriesType', 'Scatter');
    export const Surface = createEnumToken('Bar3DSeries', 'SeriesType', 'Surface');
  }
}
