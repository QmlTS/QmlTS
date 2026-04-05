// AUTO-GENERATED — DO NOT EDIT
// Type: Surface3DSeries
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlPoint, QmlQuaternion, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { Value3DAxisBuilder } from '../QtGraphs/Value3DAxis.js';
import type { ColorGradientBuilder } from './ColorGradient.js';
export interface Surface3DSeriesBuilder {
  id(id: string): Surface3DSeriesBuilder;
  child(obj: QmlObjectBuilder): Surface3DSeriesBuilder;

  axisX(value: Value3DAxisBuilder): Surface3DSeriesBuilder;
  axisXBind(expr: string): Surface3DSeriesBuilder;
  axisY(value: Value3DAxisBuilder): Surface3DSeriesBuilder;
  axisYBind(expr: string): Surface3DSeriesBuilder;
  axisZ(value: Value3DAxisBuilder): Surface3DSeriesBuilder;
  axisZBind(expr: string): Surface3DSeriesBuilder;
  baseColor(value: QmlColor): Surface3DSeriesBuilder;
  baseColorBind(expr: string): Surface3DSeriesBuilder;
  baseGradient(value: ColorGradientBuilder): Surface3DSeriesBuilder;
  baseGradientBind(expr: string): Surface3DSeriesBuilder;
  colorStyle(value: QmlEnumToken): Surface3DSeriesBuilder;
  colorStyleBind(expr: string): Surface3DSeriesBuilder;
  dataArray(value: QmlValue[]): Surface3DSeriesBuilder;
  dataArrayBind(expr: string): Surface3DSeriesBuilder;
  dataProxy(value: QmlValue): Surface3DSeriesBuilder;
  dataProxyBind(expr: string): Surface3DSeriesBuilder;
  drawMode(value: QmlEnumToken): Surface3DSeriesBuilder;
  drawModeBind(expr: string): Surface3DSeriesBuilder;
  itemLabelFormat(value: string): Surface3DSeriesBuilder;
  itemLabelFormatBind(expr: string): Surface3DSeriesBuilder;
  itemLabelVisible(value: boolean): Surface3DSeriesBuilder;
  itemLabelVisibleBind(expr: string): Surface3DSeriesBuilder;
  lightingMode(value: QmlEnumToken): Surface3DSeriesBuilder;
  lightingModeBind(expr: string): Surface3DSeriesBuilder;
  mesh(value: QmlEnumToken): Surface3DSeriesBuilder;
  meshBind(expr: string): Surface3DSeriesBuilder;
  meshRotation(value: QmlQuaternion): Surface3DSeriesBuilder;
  meshRotationBind(expr: string): Surface3DSeriesBuilder;
  meshSmooth(value: boolean): Surface3DSeriesBuilder;
  meshSmoothBind(expr: string): Surface3DSeriesBuilder;
  multiHighlightColor(value: QmlColor): Surface3DSeriesBuilder;
  multiHighlightColorBind(expr: string): Surface3DSeriesBuilder;
  multiHighlightGradient(value: ColorGradientBuilder): Surface3DSeriesBuilder;
  multiHighlightGradientBind(expr: string): Surface3DSeriesBuilder;
  name(value: string): Surface3DSeriesBuilder;
  nameBind(expr: string): Surface3DSeriesBuilder;
  objectName(value: string): Surface3DSeriesBuilder;
  objectNameBind(expr: string): Surface3DSeriesBuilder;
  rowsSanitized(value: boolean): Surface3DSeriesBuilder;
  rowsSanitizedBind(expr: string): Surface3DSeriesBuilder;
  selectedPoint(value: QmlPoint): Surface3DSeriesBuilder;
  selectedPointBind(expr: string): Surface3DSeriesBuilder;
  shading(value: QmlEnumToken): Surface3DSeriesBuilder;
  shadingBind(expr: string): Surface3DSeriesBuilder;
  singleHighlightColor(value: QmlColor): Surface3DSeriesBuilder;
  singleHighlightColorBind(expr: string): Surface3DSeriesBuilder;
  singleHighlightGradient(value: ColorGradientBuilder): Surface3DSeriesBuilder;
  singleHighlightGradientBind(expr: string): Surface3DSeriesBuilder;
  texture(value: QmlValue): Surface3DSeriesBuilder;
  textureBind(expr: string): Surface3DSeriesBuilder;
  textureFile(value: string): Surface3DSeriesBuilder;
  textureFileBind(expr: string): Surface3DSeriesBuilder;
  userDefinedMesh(value: string): Surface3DSeriesBuilder;
  userDefinedMeshBind(expr: string): Surface3DSeriesBuilder;
  visible(value: boolean): Surface3DSeriesBuilder;
  visibleBind(expr: string): Surface3DSeriesBuilder;
  wireframeColor(value: QmlColor): Surface3DSeriesBuilder;
  wireframeColorBind(expr: string): Surface3DSeriesBuilder;
  onAxisXChanged(body: string): Surface3DSeriesBuilder;
  onAxisYChanged(body: string): Surface3DSeriesBuilder;
  onAxisZChanged(body: string): Surface3DSeriesBuilder;
  onBaseColorChanged(body: string): Surface3DSeriesBuilder;
  onBaseGradientChanged(body: string): Surface3DSeriesBuilder;
  onColorStyleChanged(body: string): Surface3DSeriesBuilder;
  onDataArrayChanged(body: string): Surface3DSeriesBuilder;
  onDataProxyChanged(body: string): Surface3DSeriesBuilder;
  onDrawModeChanged(body: string): Surface3DSeriesBuilder;
  onFlatShadingSupportedChanged(body: string): Surface3DSeriesBuilder;
  onItemLabelChanged(body: string): Surface3DSeriesBuilder;
  onItemLabelFormatChanged(body: string): Surface3DSeriesBuilder;
  onItemLabelVisibleChanged(body: string): Surface3DSeriesBuilder;
  onLightingModeChanged(body: string): Surface3DSeriesBuilder;
  onMeshChanged(body: string): Surface3DSeriesBuilder;
  onMeshRotationChanged(body: string): Surface3DSeriesBuilder;
  onMeshSmoothChanged(body: string): Surface3DSeriesBuilder;
  onMultiHighlightColorChanged(body: string): Surface3DSeriesBuilder;
  onMultiHighlightGradientChanged(body: string): Surface3DSeriesBuilder;
  onNameChanged(body: string): Surface3DSeriesBuilder;
  onObjectNameChanged(body: string): Surface3DSeriesBuilder;
  onRowsSanitizedChanged(body: string): Surface3DSeriesBuilder;
  onSelectedPointChanged(body: string): Surface3DSeriesBuilder;
  onShadingChanged(body: string): Surface3DSeriesBuilder;
  onSingleHighlightColorChanged(body: string): Surface3DSeriesBuilder;
  onSingleHighlightGradientChanged(body: string): Surface3DSeriesBuilder;
  onTextureChanged(body: string): Surface3DSeriesBuilder;
  onTextureFileChanged(body: string): Surface3DSeriesBuilder;
  onUserDefinedMeshChanged(body: string): Surface3DSeriesBuilder;
  onVisibleChanged(body: string): Surface3DSeriesBuilder;
  onWireframeColorChanged(body: string): Surface3DSeriesBuilder;
}

const SURFACE3DSERIES_META: TypeMetadata = {
  typeName: 'Surface3DSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisZ', hasValue: true, hasBinding: true },
    { name: 'baseColor', hasValue: true, hasBinding: true },
    { name: 'baseGradient', hasValue: true, hasBinding: true },
    { name: 'colorStyle', hasValue: true, hasBinding: true },
    { name: 'dataArray', hasValue: true, hasBinding: true },
    { name: 'dataProxy', hasValue: true, hasBinding: true },
    { name: 'drawMode', hasValue: true, hasBinding: true },
    { name: 'itemLabelFormat', hasValue: true, hasBinding: true },
    { name: 'itemLabelVisible', hasValue: true, hasBinding: true },
    { name: 'lightingMode', hasValue: true, hasBinding: true },
    { name: 'mesh', hasValue: true, hasBinding: true },
    { name: 'meshRotation', hasValue: true, hasBinding: true },
    { name: 'meshSmooth', hasValue: true, hasBinding: true },
    { name: 'multiHighlightColor', hasValue: true, hasBinding: true },
    { name: 'multiHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rowsSanitized', hasValue: true, hasBinding: true },
    { name: 'selectedPoint', hasValue: true, hasBinding: true },
    { name: 'shading', hasValue: true, hasBinding: true },
    { name: 'singleHighlightColor', hasValue: true, hasBinding: true },
    { name: 'singleHighlightGradient', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
    { name: 'textureFile', hasValue: true, hasBinding: true },
    { name: 'userDefinedMesh', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wireframeColor', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDrawModeChanged', paramCount: 1 },
    { handlerName: 'onFlatShadingSupportedChanged', paramCount: 1 },
    { handlerName: 'onItemLabelChanged', paramCount: 1 },
    { handlerName: 'onItemLabelFormatChanged', paramCount: 1 },
    { handlerName: 'onItemLabelVisibleChanged', paramCount: 1 },
    { handlerName: 'onLightingModeChanged', paramCount: 1 },
    { handlerName: 'onMeshChanged', paramCount: 1 },
    { handlerName: 'onMeshRotationChanged', paramCount: 1 },
    { handlerName: 'onMeshSmoothChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onMultiHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowsSanitizedChanged', paramCount: 1 },
    { handlerName: 'onSelectedPointChanged', paramCount: 1 },
    { handlerName: 'onShadingChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightColorChanged', paramCount: 1 },
    { handlerName: 'onSingleHighlightGradientChanged', paramCount: 1 },
    { handlerName: 'onTextureChanged', paramCount: 1 },
    { handlerName: 'onTextureFileChanged', paramCount: 1 },
    { handlerName: 'onUserDefinedMeshChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
    { handlerName: 'onWireframeColorChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'seriesChildren',
};

export function Surface3DSeries(): Surface3DSeriesBuilder {
  return createFluentBuilder('Surface3DSeries', SURFACE3DSERIES_META) as unknown as Surface3DSeriesBuilder;
}

export namespace Surface3DSeries {
  export namespace DrawFlag {
    export const DrawWireframe = createEnumToken('Surface3DSeries', 'DrawFlag', 'DrawWireframe');
    export const DrawSurface = createEnumToken('Surface3DSeries', 'DrawFlag', 'DrawSurface');
    export const DrawSurfaceAndWireframe = createEnumToken('Surface3DSeries', 'DrawFlag', 'DrawSurfaceAndWireframe');
    export const DrawFilledSurface = createEnumToken('Surface3DSeries', 'DrawFlag', 'DrawFilledSurface');
  }
  export namespace LightingMode {
    export const Shaded = createEnumToken('Surface3DSeries', 'LightingMode', 'Shaded');
    export const Unshaded = createEnumToken('Surface3DSeries', 'LightingMode', 'Unshaded');
  }
  export namespace Mesh {
    export const UserDefined = createEnumToken('Surface3DSeries', 'Mesh', 'UserDefined');
    export const Bar = createEnumToken('Surface3DSeries', 'Mesh', 'Bar');
    export const Cube = createEnumToken('Surface3DSeries', 'Mesh', 'Cube');
    export const Pyramid = createEnumToken('Surface3DSeries', 'Mesh', 'Pyramid');
    export const Cone = createEnumToken('Surface3DSeries', 'Mesh', 'Cone');
    export const Cylinder = createEnumToken('Surface3DSeries', 'Mesh', 'Cylinder');
    export const BevelBar = createEnumToken('Surface3DSeries', 'Mesh', 'BevelBar');
    export const BevelCube = createEnumToken('Surface3DSeries', 'Mesh', 'BevelCube');
    export const Sphere = createEnumToken('Surface3DSeries', 'Mesh', 'Sphere');
    export const Minimal = createEnumToken('Surface3DSeries', 'Mesh', 'Minimal');
    export const Arrow = createEnumToken('Surface3DSeries', 'Mesh', 'Arrow');
    export const Point = createEnumToken('Surface3DSeries', 'Mesh', 'Point');
  }
  export namespace SeriesType {
    export const None = createEnumToken('Surface3DSeries', 'SeriesType', 'None');
    export const Bar = createEnumToken('Surface3DSeries', 'SeriesType', 'Bar');
    export const Scatter = createEnumToken('Surface3DSeries', 'SeriesType', 'Scatter');
    export const Surface = createEnumToken('Surface3DSeries', 'SeriesType', 'Surface');
  }
  export namespace Shading {
    export const Smooth = createEnumToken('Surface3DSeries', 'Shading', 'Smooth');
    export const Flat = createEnumToken('Surface3DSeries', 'Shading', 'Flat');
  }
}
