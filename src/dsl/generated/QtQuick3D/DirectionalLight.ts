// AUTO-GENERATED — DO NOT EDIT
// Type: DirectionalLight
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { NodeBuilder } from './Node.js';
export interface DirectionalLightBuilder {
  id(id: string): DirectionalLightBuilder;
  child(obj: QmlObjectBuilder): DirectionalLightBuilder;

  ambientColor(value: QmlColor): DirectionalLightBuilder;
  ambientColorBind(expr: string): DirectionalLightBuilder;
  bakeMode(value: QmlEnumToken): DirectionalLightBuilder;
  bakeModeBind(expr: string): DirectionalLightBuilder;
  brightness(value: number): DirectionalLightBuilder;
  brightnessBind(expr: string): DirectionalLightBuilder;
  castsShadow(value: boolean): DirectionalLightBuilder;
  castsShadowBind(expr: string): DirectionalLightBuilder;
  color(value: QmlColor): DirectionalLightBuilder;
  colorBind(expr: string): DirectionalLightBuilder;
  csmBlendRatio(value: number): DirectionalLightBuilder;
  csmBlendRatioBind(expr: string): DirectionalLightBuilder;
  csmNumSplits(value: number): DirectionalLightBuilder;
  csmNumSplitsBind(expr: string): DirectionalLightBuilder;
  csmSplit1(value: number): DirectionalLightBuilder;
  csmSplit1Bind(expr: string): DirectionalLightBuilder;
  csmSplit2(value: number): DirectionalLightBuilder;
  csmSplit2Bind(expr: string): DirectionalLightBuilder;
  csmSplit3(value: number): DirectionalLightBuilder;
  csmSplit3Bind(expr: string): DirectionalLightBuilder;
  eulerRotation(value: QmlVector3d): DirectionalLightBuilder;
  eulerRotationBind(expr: string): DirectionalLightBuilder;
  layers(value: number): DirectionalLightBuilder;
  layersBind(expr: string): DirectionalLightBuilder;
  lockShadowmapTexels(value: boolean): DirectionalLightBuilder;
  lockShadowmapTexelsBind(expr: string): DirectionalLightBuilder;
  objectName(value: string): DirectionalLightBuilder;
  objectNameBind(expr: string): DirectionalLightBuilder;
  opacity(value: number): DirectionalLightBuilder;
  opacityBind(expr: string): DirectionalLightBuilder;
  parent(value: QmlValue): DirectionalLightBuilder;
  parentBind(expr: string): DirectionalLightBuilder;
  pcfFactor(value: number): DirectionalLightBuilder;
  pcfFactorBind(expr: string): DirectionalLightBuilder;
  pivot(value: QmlVector3d): DirectionalLightBuilder;
  pivotBind(expr: string): DirectionalLightBuilder;
  position(value: QmlVector3d): DirectionalLightBuilder;
  positionBind(expr: string): DirectionalLightBuilder;
  rotation(value: QmlQuaternion): DirectionalLightBuilder;
  rotationBind(expr: string): DirectionalLightBuilder;
  scale(value: QmlVector3d): DirectionalLightBuilder;
  scaleBind(expr: string): DirectionalLightBuilder;
  scope(value: NodeBuilder): DirectionalLightBuilder;
  scopeBind(expr: string): DirectionalLightBuilder;
  shadowBias(value: number): DirectionalLightBuilder;
  shadowBiasBind(expr: string): DirectionalLightBuilder;
  shadowFactor(value: number): DirectionalLightBuilder;
  shadowFactorBind(expr: string): DirectionalLightBuilder;
  shadowFilter(value: number): DirectionalLightBuilder;
  shadowFilterBind(expr: string): DirectionalLightBuilder;
  shadowMapFar(value: number): DirectionalLightBuilder;
  shadowMapFarBind(expr: string): DirectionalLightBuilder;
  shadowMapQuality(value: QmlEnumToken): DirectionalLightBuilder;
  shadowMapQualityBind(expr: string): DirectionalLightBuilder;
  softShadowQuality(value: QmlEnumToken): DirectionalLightBuilder;
  softShadowQualityBind(expr: string): DirectionalLightBuilder;
  state(value: string): DirectionalLightBuilder;
  stateBind(expr: string): DirectionalLightBuilder;
  staticFlags(value: number): DirectionalLightBuilder;
  staticFlagsBind(expr: string): DirectionalLightBuilder;
  use32BitShadowmap(value: boolean): DirectionalLightBuilder;
  use32BitShadowmapBind(expr: string): DirectionalLightBuilder;
  visible(value: boolean): DirectionalLightBuilder;
  visibleBind(expr: string): DirectionalLightBuilder;
  x(value: number): DirectionalLightBuilder;
  xBind(expr: string): DirectionalLightBuilder;
  y(value: number): DirectionalLightBuilder;
  yBind(expr: string): DirectionalLightBuilder;
  z(value: number): DirectionalLightBuilder;
  zBind(expr: string): DirectionalLightBuilder;
  onAmbientColorChanged(body: string): DirectionalLightBuilder;
  onBakeModeChanged(body: string): DirectionalLightBuilder;
  onBrightnessChanged(body: string): DirectionalLightBuilder;
  onCastsShadowChanged(body: string): DirectionalLightBuilder;
  onChildrenChanged(body: string): DirectionalLightBuilder;
  onColorChanged(body: string): DirectionalLightBuilder;
  onCsmBlendRatioChanged(body: string): DirectionalLightBuilder;
  onCsmNumSplitsChanged(body: string): DirectionalLightBuilder;
  onCsmSplit1Changed(body: string): DirectionalLightBuilder;
  onCsmSplit2Changed(body: string): DirectionalLightBuilder;
  onCsmSplit3Changed(body: string): DirectionalLightBuilder;
  onEulerRotationChanged(body: string): DirectionalLightBuilder;
  onForwardChanged(body: string): DirectionalLightBuilder;
  onLayersChanged(body: string): DirectionalLightBuilder;
  onLocalOpacityChanged(body: string): DirectionalLightBuilder;
  onLockShadowmapTexelsChanged(body: string): DirectionalLightBuilder;
  onObjectNameChanged(body: string): DirectionalLightBuilder;
  onParentChanged(body: string): DirectionalLightBuilder;
  onPcfFactorChanged(body: string): DirectionalLightBuilder;
  onPivotChanged(body: string): DirectionalLightBuilder;
  onPositionChanged(body: string): DirectionalLightBuilder;
  onRightChanged(body: string): DirectionalLightBuilder;
  onRotationChanged(body: string): DirectionalLightBuilder;
  onScaleChanged(body: string): DirectionalLightBuilder;
  onScenePositionChanged(body: string): DirectionalLightBuilder;
  onSceneRotationChanged(body: string): DirectionalLightBuilder;
  onSceneScaleChanged(body: string): DirectionalLightBuilder;
  onSceneTransformChanged(body: string): DirectionalLightBuilder;
  onScopeChanged(body: string): DirectionalLightBuilder;
  onShadowBiasChanged(body: string): DirectionalLightBuilder;
  onShadowFactorChanged(body: string): DirectionalLightBuilder;
  onShadowFilterChanged(body: string): DirectionalLightBuilder;
  onShadowMapFarChanged(body: string): DirectionalLightBuilder;
  onShadowMapQualityChanged(body: string): DirectionalLightBuilder;
  onSoftShadowQualityChanged(body: string): DirectionalLightBuilder;
  onStateChanged(body: string): DirectionalLightBuilder;
  onStaticFlagsChanged(body: string): DirectionalLightBuilder;
  onUpChanged(body: string): DirectionalLightBuilder;
  onUse32BitShadowmapChanged(body: string): DirectionalLightBuilder;
  onVisibleChanged(body: string): DirectionalLightBuilder;
  onXChanged(body: string): DirectionalLightBuilder;
  onYChanged(body: string): DirectionalLightBuilder;
  onZChanged(body: string): DirectionalLightBuilder;
}

const DIRECTIONALLIGHT_META: TypeMetadata = {
  typeName: 'DirectionalLight',
  properties: [
    { name: 'ambientColor', hasValue: true, hasBinding: true },
    { name: 'bakeMode', hasValue: true, hasBinding: true },
    { name: 'brightness', hasValue: true, hasBinding: true },
    { name: 'castsShadow', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'csmBlendRatio', hasValue: true, hasBinding: true },
    { name: 'csmNumSplits', hasValue: true, hasBinding: true },
    { name: 'csmSplit1', hasValue: true, hasBinding: true },
    { name: 'csmSplit2', hasValue: true, hasBinding: true },
    { name: 'csmSplit3', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'lockShadowmapTexels', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pcfFactor', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'scope', hasValue: true, hasBinding: true },
    { name: 'shadowBias', hasValue: true, hasBinding: true },
    { name: 'shadowFactor', hasValue: true, hasBinding: true },
    { name: 'shadowFilter', hasValue: true, hasBinding: true },
    { name: 'shadowMapFar', hasValue: true, hasBinding: true },
    { name: 'shadowMapQuality', hasValue: true, hasBinding: true },
    { name: 'softShadowQuality', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'use32BitShadowmap', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAmbientColorChanged', paramCount: 0 },
    { handlerName: 'onBakeModeChanged', paramCount: 0 },
    { handlerName: 'onBrightnessChanged', paramCount: 0 },
    { handlerName: 'onCastsShadowChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onCsmBlendRatioChanged', paramCount: 0 },
    { handlerName: 'onCsmNumSplitsChanged', paramCount: 0 },
    { handlerName: 'onCsmSplit1Changed', paramCount: 0 },
    { handlerName: 'onCsmSplit2Changed', paramCount: 0 },
    { handlerName: 'onCsmSplit3Changed', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onLockShadowmapTexelsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPcfFactorChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onScopeChanged', paramCount: 0 },
    { handlerName: 'onShadowBiasChanged', paramCount: 0 },
    { handlerName: 'onShadowFactorChanged', paramCount: 0 },
    { handlerName: 'onShadowFilterChanged', paramCount: 0 },
    { handlerName: 'onShadowMapFarChanged', paramCount: 0 },
    { handlerName: 'onShadowMapQualityChanged', paramCount: 0 },
    { handlerName: 'onSoftShadowQualityChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onUse32BitShadowmapChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function DirectionalLight(): DirectionalLightBuilder {
  return createFluentBuilder(
    'DirectionalLight',
    DIRECTIONALLIGHT_META,
  ) as unknown as DirectionalLightBuilder;
}

export namespace DirectionalLight {
  export namespace QSSGBakeMode {
    export const BakeModeDisabled = createEnumToken(
      'DirectionalLight',
      'QSSGBakeMode',
      'BakeModeDisabled',
    );
    export const BakeModeIndirect = createEnumToken(
      'DirectionalLight',
      'QSSGBakeMode',
      'BakeModeIndirect',
    );
    export const BakeModeAll = createEnumToken('DirectionalLight', 'QSSGBakeMode', 'BakeModeAll');
  }
  export namespace QSSGShadowMapQuality {
    export const ShadowMapQualityLow = createEnumToken(
      'DirectionalLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityLow',
    );
    export const ShadowMapQualityMedium = createEnumToken(
      'DirectionalLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityMedium',
    );
    export const ShadowMapQualityHigh = createEnumToken(
      'DirectionalLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityHigh',
    );
    export const ShadowMapQualityVeryHigh = createEnumToken(
      'DirectionalLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityVeryHigh',
    );
    export const ShadowMapQualityUltra = createEnumToken(
      'DirectionalLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityUltra',
    );
  }
  export namespace QSSGSoftShadowQuality {
    export const Hard = createEnumToken('DirectionalLight', 'QSSGSoftShadowQuality', 'Hard');
    export const PCF4 = createEnumToken('DirectionalLight', 'QSSGSoftShadowQuality', 'PCF4');
    export const PCF8 = createEnumToken('DirectionalLight', 'QSSGSoftShadowQuality', 'PCF8');
    export const PCF16 = createEnumToken('DirectionalLight', 'QSSGSoftShadowQuality', 'PCF16');
    export const PCF32 = createEnumToken('DirectionalLight', 'QSSGSoftShadowQuality', 'PCF32');
    export const PCF64 = createEnumToken('DirectionalLight', 'QSSGSoftShadowQuality', 'PCF64');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('DirectionalLight', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('DirectionalLight', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('DirectionalLight', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('DirectionalLight', 'TransformSpace', 'SceneSpace');
  }
}
