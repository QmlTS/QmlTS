// AUTO-GENERATED — DO NOT EDIT
// Type: Scatter3DSeries
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { Value3DAxisBuilder } from '../QtGraphs/Value3DAxis.js';
import type { ColorGradientBuilder } from './ColorGradient.js';
export interface Scatter3DSeriesBuilder {
  id(id: string): Scatter3DSeriesBuilder;
  child(obj: QmlObjectBuilder): Scatter3DSeriesBuilder;
  children(...objs: QmlObjectBuilder[]): Scatter3DSeriesBuilder;

  axisX(value: Value3DAxisBuilder): Scatter3DSeriesBuilder;
  axisXBind(expr: string): Scatter3DSeriesBuilder;
  axisY(value: Value3DAxisBuilder): Scatter3DSeriesBuilder;
  axisYBind(expr: string): Scatter3DSeriesBuilder;
  axisZ(value: Value3DAxisBuilder): Scatter3DSeriesBuilder;
  axisZBind(expr: string): Scatter3DSeriesBuilder;
  baseColor(value: QmlColor): Scatter3DSeriesBuilder;
  baseColorBind(expr: string): Scatter3DSeriesBuilder;
  baseGradient(value: ColorGradientBuilder): Scatter3DSeriesBuilder;
  baseGradientBind(expr: string): Scatter3DSeriesBuilder;
  colorStyle(value: QmlEnumToken): Scatter3DSeriesBuilder;
  colorStyleBind(expr: string): Scatter3DSeriesBuilder;
  dataArray(value: QmlValue[]): Scatter3DSeriesBuilder;
  dataArrayBind(expr: string): Scatter3DSeriesBuilder;
  dataProxy(value: QmlValue): Scatter3DSeriesBuilder;
  dataProxyBind(expr: string): Scatter3DSeriesBuilder;
  itemLabelFormat(value: string): Scatter3DSeriesBuilder;
  itemLabelFormatBind(expr: string): Scatter3DSeriesBuilder;
  itemLabelVisible(value: boolean): Scatter3DSeriesBuilder;
  itemLabelVisibleBind(expr: string): Scatter3DSeriesBuilder;
  itemSize(value: number): Scatter3DSeriesBuilder;
  itemSizeBind(expr: string): Scatter3DSeriesBuilder;
  lightingMode(value: QmlEnumToken): Scatter3DSeriesBuilder;
  lightingModeBind(expr: string): Scatter3DSeriesBuilder;
  mesh(value: QmlEnumToken): Scatter3DSeriesBuilder;
  meshBind(expr: string): Scatter3DSeriesBuilder;
  meshRotation(value: QmlQuaternion): Scatter3DSeriesBuilder;
  meshRotationBind(expr: string): Scatter3DSeriesBuilder;
  meshSmooth(value: boolean): Scatter3DSeriesBuilder;
  meshSmoothBind(expr: string): Scatter3DSeriesBuilder;
  multiHighlightColor(value: QmlColor): Scatter3DSeriesBuilder;
  multiHighlightColorBind(expr: string): Scatter3DSeriesBuilder;
  multiHighlightGradient(value: ColorGradientBuilder): Scatter3DSeriesBuilder;
  multiHighlightGradientBind(expr: string): Scatter3DSeriesBuilder;
  name(value: string): Scatter3DSeriesBuilder;
  nameBind(expr: string): Scatter3DSeriesBuilder;
  objectName(value: string): Scatter3DSeriesBuilder;
  objectNameBind(expr: string): Scatter3DSeriesBuilder;
  scaleArray(value: QmlVector3d): Scatter3DSeriesBuilder;
  scaleArrayBind(expr: string): Scatter3DSeriesBuilder;
  selectedItem(value: number): Scatter3DSeriesBuilder;
  selectedItemBind(expr: string): Scatter3DSeriesBuilder;
  singleHighlightColor(value: QmlColor): Scatter3DSeriesBuilder;
  singleHighlightColorBind(expr: string): Scatter3DSeriesBuilder;
  singleHighlightGradient(value: ColorGradientBuilder): Scatter3DSeriesBuilder;
  singleHighlightGradientBind(expr: string): Scatter3DSeriesBuilder;
  userDefinedMesh(value: string): Scatter3DSeriesBuilder;
  userDefinedMeshBind(expr: string): Scatter3DSeriesBuilder;
  visible(value: boolean): Scatter3DSeriesBuilder;
  visibleBind(expr: string): Scatter3DSeriesBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onAxisZChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onBaseColorChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onBaseGradientChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onColorStyleChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onDataArrayChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onDataProxyChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onItemLabelChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onItemLabelFormatChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onItemLabelVisibleChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onItemSizeChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onLightingModeChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onMeshChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onMeshRotationChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onMeshSmoothChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onMultiHighlightColorChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onMultiHighlightGradientChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onNameChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onScaleArrayChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onSelectedItemChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onSingleHighlightColorChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onSingleHighlightGradientChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onUserDefinedMeshChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): Scatter3DSeriesBuilder;
}

const SCATTER3DSERIES_META: TypeMetadata = {
  typeName: 'Scatter3DSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisZ', hasValue: true, hasBinding: true },
    { name: 'baseColor', hasValue: true, hasBinding: true },
    { name: 'baseGradient', hasValue: true, hasBinding: true },
    { name: 'colorStyle', hasValue: true, hasBinding: true },
    { name: 'dataArray', hasValue: true, hasBinding: true },
    { name: 'dataProxy', hasValue: true, hasBinding: true },
    { name: 'itemLabelFormat', hasValue: true, hasBinding: true },
    { name: 'itemLabelVisible', hasValue: true, hasBinding: true },
    { name: 'itemSize', hasValue: true, hasBinding: true },
    { name: 'lightingMode', hasValue: true, hasBinding: true },
    { name: 'mesh', hasValue: true, hasBinding: true },
    { name: 'meshRotation', hasValue: true, hasBinding: true },
    { name: 'meshSmooth', hasValue: true, hasBinding: true },
    { name: 'multiHighlightColor', hasValue: true, hasBinding: true },
    { name: 'multiHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'scaleArray', hasValue: true, hasBinding: true },
    { name: 'selectedItem', hasValue: true, hasBinding: true },
    { name: 'singleHighlightColor', hasValue: true, hasBinding: true },
    { name: 'singleHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'userDefinedMesh', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onAxisZChanged', paramCount: 1 },
    { handlerName: 'onBaseColorChanged', paramCount: 1 },
    { handlerName: 'onBaseGradientChanged', paramCount: 1 },
    { handlerName: 'onColorStyleChanged', paramCount: 1 },
    { handlerName: 'onDataArrayChanged', paramCount: 1 },
    { handlerName: 'onDataProxyChanged', paramCount: 1 },
    { handlerName: 'onItemLabelChanged', paramCount: 1 },
    { handlerName: 'onItemLabelFormatChanged', paramCount: 1 },
    { handlerName: 'onItemLabelVisibleChanged', paramCount: 1 },
    { handlerName: 'onItemSizeChanged', paramCount: 1 },
    { handlerName: 'onLightingModeChanged', paramCount: 1 },
    { handlerName: 'onMeshChanged', paramCount: 1 },
    { handlerName: 'onMeshRotationChanged', paramCount: 1 },
    { handlerName: 'onMeshSmoothChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onScaleArrayChanged', paramCount: 1 },
    { handlerName: 'onSelectedItemChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onUserDefinedMeshChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'seriesChildren',
};

export function Scatter3DSeries(): Scatter3DSeriesBuilder {
  return createFluentBuilder(
    'Scatter3DSeries',
    SCATTER3DSERIES_META,
  ) as unknown as Scatter3DSeriesBuilder;
}

export namespace Scatter3DSeries {
  export namespace LightingMode {
    export const Shaded = createEnumToken('Scatter3DSeries', 'LightingMode', 'Shaded');
    export const Unshaded = createEnumToken('Scatter3DSeries', 'LightingMode', 'Unshaded');
  }
  export namespace Mesh {
    export const UserDefined = createEnumToken('Scatter3DSeries', 'Mesh', 'UserDefined');
    export const Bar = createEnumToken('Scatter3DSeries', 'Mesh', 'Bar');
    export const Cube = createEnumToken('Scatter3DSeries', 'Mesh', 'Cube');
    export const Pyramid = createEnumToken('Scatter3DSeries', 'Mesh', 'Pyramid');
    export const Cone = createEnumToken('Scatter3DSeries', 'Mesh', 'Cone');
    export const Cylinder = createEnumToken('Scatter3DSeries', 'Mesh', 'Cylinder');
    export const BevelBar = createEnumToken('Scatter3DSeries', 'Mesh', 'BevelBar');
    export const BevelCube = createEnumToken('Scatter3DSeries', 'Mesh', 'BevelCube');
    export const Sphere = createEnumToken('Scatter3DSeries', 'Mesh', 'Sphere');
    export const Minimal = createEnumToken('Scatter3DSeries', 'Mesh', 'Minimal');
    export const Arrow = createEnumToken('Scatter3DSeries', 'Mesh', 'Arrow');
    export const Point = createEnumToken('Scatter3DSeries', 'Mesh', 'Point');
  }
  export namespace SeriesType {
    export const None = createEnumToken('Scatter3DSeries', 'SeriesType', 'None');
    export const Bar = createEnumToken('Scatter3DSeries', 'SeriesType', 'Bar');
    export const Scatter = createEnumToken('Scatter3DSeries', 'SeriesType', 'Scatter');
    export const Surface = createEnumToken('Scatter3DSeries', 'SeriesType', 'Surface');
  }
}
