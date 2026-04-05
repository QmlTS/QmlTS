// AUTO-GENERATED — DO NOT EDIT
// Type: Custom3DVolume
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface Custom3DVolumeBuilder {
  id(id: string): Custom3DVolumeBuilder;
  child(obj: QmlObjectBuilder): Custom3DVolumeBuilder;

  alphaMultiplier(value: number): Custom3DVolumeBuilder;
  alphaMultiplierBind(expr: string): Custom3DVolumeBuilder;
  colorTable(value: number): Custom3DVolumeBuilder;
  colorTableBind(expr: string): Custom3DVolumeBuilder;
  drawSliceFrames(value: boolean): Custom3DVolumeBuilder;
  drawSliceFramesBind(expr: string): Custom3DVolumeBuilder;
  drawSlices(value: boolean): Custom3DVolumeBuilder;
  drawSlicesBind(expr: string): Custom3DVolumeBuilder;
  meshFile(value: string): Custom3DVolumeBuilder;
  meshFileBind(expr: string): Custom3DVolumeBuilder;
  objectName(value: string): Custom3DVolumeBuilder;
  objectNameBind(expr: string): Custom3DVolumeBuilder;
  position(value: QmlVector3d): Custom3DVolumeBuilder;
  positionBind(expr: string): Custom3DVolumeBuilder;
  positionAbsolute(value: boolean): Custom3DVolumeBuilder;
  positionAbsoluteBind(expr: string): Custom3DVolumeBuilder;
  preserveOpacity(value: boolean): Custom3DVolumeBuilder;
  preserveOpacityBind(expr: string): Custom3DVolumeBuilder;
  rotation(value: QmlQuaternion): Custom3DVolumeBuilder;
  rotationBind(expr: string): Custom3DVolumeBuilder;
  rotationAbsolute(value: boolean): Custom3DVolumeBuilder;
  rotationAbsoluteBind(expr: string): Custom3DVolumeBuilder;
  scaling(value: QmlVector3d): Custom3DVolumeBuilder;
  scalingBind(expr: string): Custom3DVolumeBuilder;
  scalingAbsolute(value: boolean): Custom3DVolumeBuilder;
  scalingAbsoluteBind(expr: string): Custom3DVolumeBuilder;
  shadowCasting(value: boolean): Custom3DVolumeBuilder;
  shadowCastingBind(expr: string): Custom3DVolumeBuilder;
  sliceFrameColor(value: QmlColor): Custom3DVolumeBuilder;
  sliceFrameColorBind(expr: string): Custom3DVolumeBuilder;
  sliceFrameGaps(value: QmlVector3d): Custom3DVolumeBuilder;
  sliceFrameGapsBind(expr: string): Custom3DVolumeBuilder;
  sliceFrameThicknesses(value: QmlVector3d): Custom3DVolumeBuilder;
  sliceFrameThicknessesBind(expr: string): Custom3DVolumeBuilder;
  sliceFrameWidths(value: QmlVector3d): Custom3DVolumeBuilder;
  sliceFrameWidthsBind(expr: string): Custom3DVolumeBuilder;
  sliceIndexX(value: number): Custom3DVolumeBuilder;
  sliceIndexXBind(expr: string): Custom3DVolumeBuilder;
  sliceIndexY(value: number): Custom3DVolumeBuilder;
  sliceIndexYBind(expr: string): Custom3DVolumeBuilder;
  sliceIndexZ(value: number): Custom3DVolumeBuilder;
  sliceIndexZBind(expr: string): Custom3DVolumeBuilder;
  textureData(value: number[]): Custom3DVolumeBuilder;
  textureDataBind(expr: string): Custom3DVolumeBuilder;
  textureDepth(value: number): Custom3DVolumeBuilder;
  textureDepthBind(expr: string): Custom3DVolumeBuilder;
  textureFile(value: string): Custom3DVolumeBuilder;
  textureFileBind(expr: string): Custom3DVolumeBuilder;
  textureHeight(value: number): Custom3DVolumeBuilder;
  textureHeightBind(expr: string): Custom3DVolumeBuilder;
  textureWidth(value: number): Custom3DVolumeBuilder;
  textureWidthBind(expr: string): Custom3DVolumeBuilder;
  useHighDefShader(value: boolean): Custom3DVolumeBuilder;
  useHighDefShaderBind(expr: string): Custom3DVolumeBuilder;
  visible(value: boolean): Custom3DVolumeBuilder;
  visibleBind(expr: string): Custom3DVolumeBuilder;
  onAlphaMultiplierChanged(body: string): Custom3DVolumeBuilder;
  onColorTableChanged(body: string): Custom3DVolumeBuilder;
  onDrawSliceFramesChanged(body: string): Custom3DVolumeBuilder;
  onDrawSlicesChanged(body: string): Custom3DVolumeBuilder;
  onMeshFileChanged(body: string): Custom3DVolumeBuilder;
  onNeedUpdate(body: string): Custom3DVolumeBuilder;
  onObjectNameChanged(body: string): Custom3DVolumeBuilder;
  onPositionAbsoluteChanged(body: string): Custom3DVolumeBuilder;
  onPositionChanged(body: string): Custom3DVolumeBuilder;
  onPreserveOpacityChanged(body: string): Custom3DVolumeBuilder;
  onRotationAbsoluteChanged(body: string): Custom3DVolumeBuilder;
  onRotationChanged(body: string): Custom3DVolumeBuilder;
  onScalingAbsoluteChanged(body: string): Custom3DVolumeBuilder;
  onScalingChanged(body: string): Custom3DVolumeBuilder;
  onShadowCastingChanged(body: string): Custom3DVolumeBuilder;
  onSliceFrameColorChanged(body: string): Custom3DVolumeBuilder;
  onSliceFrameGapsChanged(body: string): Custom3DVolumeBuilder;
  onSliceFrameThicknessesChanged(body: string): Custom3DVolumeBuilder;
  onSliceFrameWidthsChanged(body: string): Custom3DVolumeBuilder;
  onSliceIndexXChanged(body: string): Custom3DVolumeBuilder;
  onSliceIndexYChanged(body: string): Custom3DVolumeBuilder;
  onSliceIndexZChanged(body: string): Custom3DVolumeBuilder;
  onTextureDataChanged(body: string): Custom3DVolumeBuilder;
  onTextureDepthChanged(body: string): Custom3DVolumeBuilder;
  onTextureFileChanged(body: string): Custom3DVolumeBuilder;
  onTextureFormatChanged(body: string): Custom3DVolumeBuilder;
  onTextureHeightChanged(body: string): Custom3DVolumeBuilder;
  onTextureWidthChanged(body: string): Custom3DVolumeBuilder;
  onUseHighDefShaderChanged(body: string): Custom3DVolumeBuilder;
  onVisibleChanged(body: string): Custom3DVolumeBuilder;
}

const CUSTOM3DVOLUME_META: TypeMetadata = {
  typeName: 'Custom3DVolume',
  properties: [
    { name: 'alphaMultiplier', hasValue: true, hasBinding: true },
    { name: 'colorTable', hasValue: true, hasBinding: true },
    { name: 'drawSliceFrames', hasValue: true, hasBinding: true },
    { name: 'drawSlices', hasValue: true, hasBinding: true },
    { name: 'meshFile', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'positionAbsolute', hasValue: true, hasBinding: true },
    { name: 'preserveOpacity', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rotationAbsolute', hasValue: true, hasBinding: true },
    { name: 'scaling', hasValue: true, hasBinding: true },
    { name: 'scalingAbsolute', hasValue: true, hasBinding: true },
    { name: 'shadowCasting', hasValue: true, hasBinding: true },
    { name: 'sliceFrameColor', hasValue: true, hasBinding: true },
    { name: 'sliceFrameGaps', hasValue: true, hasBinding: true },
    { name: 'sliceFrameThicknesses', hasValue: true, hasBinding: true },
    { name: 'sliceFrameWidths', hasValue: true, hasBinding: true },
    { name: 'sliceIndexX', hasValue: true, hasBinding: true },
    { name: 'sliceIndexY', hasValue: true, hasBinding: true },
    { name: 'sliceIndexZ', hasValue: true, hasBinding: true },
    { name: 'textureData', hasValue: true, hasBinding: true },
    { name: 'textureDepth', hasValue: true, hasBinding: true },
    { name: 'textureFile', hasValue: true, hasBinding: true },
    { name: 'textureHeight', hasValue: true, hasBinding: true },
    { name: 'textureWidth', hasValue: true, hasBinding: true },
    { name: 'useHighDefShader', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlphaMultiplierChanged', paramCount: 1 },
    { handlerName: 'onColorTableChanged', paramCount: 0 },
    { handlerName: 'onDrawSliceFramesChanged', paramCount: 1 },
    { handlerName: 'onDrawSlicesChanged', paramCount: 1 },
    { handlerName: 'onMeshFileChanged', paramCount: 1 },
    { handlerName: 'onNeedUpdate', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionAbsoluteChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onPreserveOpacityChanged', paramCount: 1 },
    { handlerName: 'onRotationAbsoluteChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 1 },
    { handlerName: 'onScalingAbsoluteChanged', paramCount: 1 },
    { handlerName: 'onScalingChanged', paramCount: 1 },
    { handlerName: 'onShadowCastingChanged', paramCount: 1 },
    { handlerName: 'onSliceFrameColorChanged', paramCount: 1 },
    { handlerName: 'onSliceFrameGapsChanged', paramCount: 1 },
    { handlerName: 'onSliceFrameThicknessesChanged', paramCount: 1 },
    { handlerName: 'onSliceFrameWidthsChanged', paramCount: 1 },
    { handlerName: 'onSliceIndexXChanged', paramCount: 1 },
    { handlerName: 'onSliceIndexYChanged', paramCount: 1 },
    { handlerName: 'onSliceIndexZChanged', paramCount: 1 },
    { handlerName: 'onTextureDataChanged', paramCount: 1 },
    { handlerName: 'onTextureDepthChanged', paramCount: 1 },
    { handlerName: 'onTextureFileChanged', paramCount: 1 },
    { handlerName: 'onTextureFormatChanged', paramCount: 1 },
    { handlerName: 'onTextureHeightChanged', paramCount: 1 },
    { handlerName: 'onTextureWidthChanged', paramCount: 1 },
    { handlerName: 'onUseHighDefShaderChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Custom3DVolume(): Custom3DVolumeBuilder {
  return createFluentBuilder(
    'Custom3DVolume',
    CUSTOM3DVOLUME_META,
  ) as unknown as Custom3DVolumeBuilder;
}
