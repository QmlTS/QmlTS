// AUTO-GENERATED — DO NOT EDIT
// Type: Spline3DSeries
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
import type { GradientBuilder } from '../QtQuick/Gradient.js';
import type { Value3DAxisBuilder } from './Value3DAxis.js';
export interface Spline3DSeriesBuilder {
  id(id: string): Spline3DSeriesBuilder;
  child(obj: QmlObjectBuilder): Spline3DSeriesBuilder;
  children(...objs: QmlObjectBuilder[]): Spline3DSeriesBuilder;

  axisX(value: Value3DAxisBuilder): Spline3DSeriesBuilder;
  axisXBind(expr: string): Spline3DSeriesBuilder;
  axisY(value: Value3DAxisBuilder): Spline3DSeriesBuilder;
  axisYBind(expr: string): Spline3DSeriesBuilder;
  axisZ(value: Value3DAxisBuilder): Spline3DSeriesBuilder;
  axisZBind(expr: string): Spline3DSeriesBuilder;
  baseColor(value: QmlColor): Spline3DSeriesBuilder;
  baseColorBind(expr: string): Spline3DSeriesBuilder;
  baseGradient(value: GradientBuilder): Spline3DSeriesBuilder;
  baseGradientBind(expr: string): Spline3DSeriesBuilder;
  colorStyle(value: QmlEnumToken): Spline3DSeriesBuilder;
  colorStyleBind(expr: string): Spline3DSeriesBuilder;
  dataArray(value: QmlValue[]): Spline3DSeriesBuilder;
  dataArrayBind(expr: string): Spline3DSeriesBuilder;
  dataProxy(value: QmlValue): Spline3DSeriesBuilder;
  dataProxyBind(expr: string): Spline3DSeriesBuilder;
  itemLabelFormat(value: string): Spline3DSeriesBuilder;
  itemLabelFormatBind(expr: string): Spline3DSeriesBuilder;
  itemLabelVisible(value: boolean): Spline3DSeriesBuilder;
  itemLabelVisibleBind(expr: string): Spline3DSeriesBuilder;
  itemSize(value: number): Spline3DSeriesBuilder;
  itemSizeBind(expr: string): Spline3DSeriesBuilder;
  lightingMode(value: QmlEnumToken): Spline3DSeriesBuilder;
  lightingModeBind(expr: string): Spline3DSeriesBuilder;
  mesh(value: QmlEnumToken): Spline3DSeriesBuilder;
  meshBind(expr: string): Spline3DSeriesBuilder;
  meshRotation(value: QmlQuaternion): Spline3DSeriesBuilder;
  meshRotationBind(expr: string): Spline3DSeriesBuilder;
  meshSmooth(value: boolean): Spline3DSeriesBuilder;
  meshSmoothBind(expr: string): Spline3DSeriesBuilder;
  multiHighlightColor(value: QmlColor): Spline3DSeriesBuilder;
  multiHighlightColorBind(expr: string): Spline3DSeriesBuilder;
  multiHighlightGradient(value: GradientBuilder): Spline3DSeriesBuilder;
  multiHighlightGradientBind(expr: string): Spline3DSeriesBuilder;
  name(value: string): Spline3DSeriesBuilder;
  nameBind(expr: string): Spline3DSeriesBuilder;
  objectName(value: string): Spline3DSeriesBuilder;
  objectNameBind(expr: string): Spline3DSeriesBuilder;
  scaleArray(value: QmlVector3d): Spline3DSeriesBuilder;
  scaleArrayBind(expr: string): Spline3DSeriesBuilder;
  selectedItem(value: number): Spline3DSeriesBuilder;
  selectedItemBind(expr: string): Spline3DSeriesBuilder;
  singleHighlightColor(value: QmlColor): Spline3DSeriesBuilder;
  singleHighlightColorBind(expr: string): Spline3DSeriesBuilder;
  singleHighlightGradient(value: GradientBuilder): Spline3DSeriesBuilder;
  singleHighlightGradientBind(expr: string): Spline3DSeriesBuilder;
  splineColor(value: QmlColor): Spline3DSeriesBuilder;
  splineColorBind(expr: string): Spline3DSeriesBuilder;
  splineKnotting(value: number): Spline3DSeriesBuilder;
  splineKnottingBind(expr: string): Spline3DSeriesBuilder;
  splineLooping(value: boolean): Spline3DSeriesBuilder;
  splineLoopingBind(expr: string): Spline3DSeriesBuilder;
  splineResolution(value: number): Spline3DSeriesBuilder;
  splineResolutionBind(expr: string): Spline3DSeriesBuilder;
  splineTension(value: number): Spline3DSeriesBuilder;
  splineTensionBind(expr: string): Spline3DSeriesBuilder;
  splineVisible(value: boolean): Spline3DSeriesBuilder;
  splineVisibleBind(expr: string): Spline3DSeriesBuilder;
  userDefinedMesh(value: string): Spline3DSeriesBuilder;
  userDefinedMeshBind(expr: string): Spline3DSeriesBuilder;
  visible(value: boolean): Spline3DSeriesBuilder;
  visibleBind(expr: string): Spline3DSeriesBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onAxisZChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onBaseColorChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onBaseGradientChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onColorStyleChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onDataArrayChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onDataProxyChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onItemLabelChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onItemLabelFormatChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onItemLabelVisibleChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onItemSizeChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onLightingModeChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onMeshChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onMeshRotationChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onMeshSmoothChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onMultiHighlightColorChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onMultiHighlightGradientChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onNameChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onScaleArrayChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSelectedItemChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSingleHighlightColorChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSingleHighlightGradientChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSplineColorChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSplineKnottingChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSplineLoopingChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSplineResolutionChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSplineTensionChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onSplineVisibilityChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onUserDefinedMeshChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): Spline3DSeriesBuilder;
}

const SPLINE3DSERIES_META: TypeMetadata = {
  typeName: 'Spline3DSeries',
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
    { name: 'splineColor', hasValue: true, hasBinding: true },
    { name: 'splineKnotting', hasValue: true, hasBinding: true },
    { name: 'splineLooping', hasValue: true, hasBinding: true },
    { name: 'splineResolution', hasValue: true, hasBinding: true },
    { name: 'splineTension', hasValue: true, hasBinding: true },
    { name: 'splineVisible', hasValue: true, hasBinding: true },
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
    { handlerName: 'onSplineColorChanged', paramCount: 1 },
    { handlerName: 'onSplineKnottingChanged', paramCount: 1 },
    { handlerName: 'onSplineLoopingChanged', paramCount: 1 },
    { handlerName: 'onSplineResolutionChanged', paramCount: 1 },
    { handlerName: 'onSplineTensionChanged', paramCount: 1 },
    { handlerName: 'onSplineVisibilityChanged', paramCount: 1 },
    { handlerName: 'onUserDefinedMeshChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'seriesChildren',
};

export function Spline3DSeries(): Spline3DSeriesBuilder {
  return createFluentBuilder(
    'Spline3DSeries',
    SPLINE3DSERIES_META,
  ) as unknown as Spline3DSeriesBuilder;
}

export namespace Spline3DSeries {
  export namespace LightingMode {
    export const Shaded = createEnumToken('Spline3DSeries', 'LightingMode', 'Shaded');
    export const Unshaded = createEnumToken('Spline3DSeries', 'LightingMode', 'Unshaded');
  }
  export namespace Mesh {
    export const UserDefined = createEnumToken('Spline3DSeries', 'Mesh', 'UserDefined');
    export const Bar = createEnumToken('Spline3DSeries', 'Mesh', 'Bar');
    export const Cube = createEnumToken('Spline3DSeries', 'Mesh', 'Cube');
    export const Pyramid = createEnumToken('Spline3DSeries', 'Mesh', 'Pyramid');
    export const Cone = createEnumToken('Spline3DSeries', 'Mesh', 'Cone');
    export const Cylinder = createEnumToken('Spline3DSeries', 'Mesh', 'Cylinder');
    export const BevelBar = createEnumToken('Spline3DSeries', 'Mesh', 'BevelBar');
    export const BevelCube = createEnumToken('Spline3DSeries', 'Mesh', 'BevelCube');
    export const Sphere = createEnumToken('Spline3DSeries', 'Mesh', 'Sphere');
    export const Minimal = createEnumToken('Spline3DSeries', 'Mesh', 'Minimal');
    export const Arrow = createEnumToken('Spline3DSeries', 'Mesh', 'Arrow');
    export const Point = createEnumToken('Spline3DSeries', 'Mesh', 'Point');
  }
  export namespace SeriesType {
    export const None = createEnumToken('Spline3DSeries', 'SeriesType', 'None');
    export const Bar = createEnumToken('Spline3DSeries', 'SeriesType', 'Bar');
    export const Scatter = createEnumToken('Spline3DSeries', 'SeriesType', 'Scatter');
    export const Surface = createEnumToken('Spline3DSeries', 'SeriesType', 'Surface');
  }
}
