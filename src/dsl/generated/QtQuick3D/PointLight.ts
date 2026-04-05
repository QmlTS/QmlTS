// AUTO-GENERATED — DO NOT EDIT
// Type: PointLight
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
export interface PointLightBuilder {
  id(id: string): PointLightBuilder;
  child(obj: QmlObjectBuilder): PointLightBuilder;

  ambientColor(value: QmlColor): PointLightBuilder;
  ambientColorBind(expr: string): PointLightBuilder;
  bakeMode(value: QmlEnumToken): PointLightBuilder;
  bakeModeBind(expr: string): PointLightBuilder;
  brightness(value: number): PointLightBuilder;
  brightnessBind(expr: string): PointLightBuilder;
  castsShadow(value: boolean): PointLightBuilder;
  castsShadowBind(expr: string): PointLightBuilder;
  color(value: QmlColor): PointLightBuilder;
  colorBind(expr: string): PointLightBuilder;
  constantFade(value: number): PointLightBuilder;
  constantFadeBind(expr: string): PointLightBuilder;
  eulerRotation(value: QmlVector3d): PointLightBuilder;
  eulerRotationBind(expr: string): PointLightBuilder;
  layers(value: number): PointLightBuilder;
  layersBind(expr: string): PointLightBuilder;
  linearFade(value: number): PointLightBuilder;
  linearFadeBind(expr: string): PointLightBuilder;
  objectName(value: string): PointLightBuilder;
  objectNameBind(expr: string): PointLightBuilder;
  opacity(value: number): PointLightBuilder;
  opacityBind(expr: string): PointLightBuilder;
  parent(value: QmlValue): PointLightBuilder;
  parentBind(expr: string): PointLightBuilder;
  pcfFactor(value: number): PointLightBuilder;
  pcfFactorBind(expr: string): PointLightBuilder;
  pivot(value: QmlVector3d): PointLightBuilder;
  pivotBind(expr: string): PointLightBuilder;
  position(value: QmlVector3d): PointLightBuilder;
  positionBind(expr: string): PointLightBuilder;
  quadraticFade(value: number): PointLightBuilder;
  quadraticFadeBind(expr: string): PointLightBuilder;
  rotation(value: QmlQuaternion): PointLightBuilder;
  rotationBind(expr: string): PointLightBuilder;
  scale(value: QmlVector3d): PointLightBuilder;
  scaleBind(expr: string): PointLightBuilder;
  scope(value: NodeBuilder): PointLightBuilder;
  scopeBind(expr: string): PointLightBuilder;
  shadowBias(value: number): PointLightBuilder;
  shadowBiasBind(expr: string): PointLightBuilder;
  shadowFactor(value: number): PointLightBuilder;
  shadowFactorBind(expr: string): PointLightBuilder;
  shadowFilter(value: number): PointLightBuilder;
  shadowFilterBind(expr: string): PointLightBuilder;
  shadowMapFar(value: number): PointLightBuilder;
  shadowMapFarBind(expr: string): PointLightBuilder;
  shadowMapQuality(value: QmlEnumToken): PointLightBuilder;
  shadowMapQualityBind(expr: string): PointLightBuilder;
  softShadowQuality(value: QmlEnumToken): PointLightBuilder;
  softShadowQualityBind(expr: string): PointLightBuilder;
  state(value: string): PointLightBuilder;
  stateBind(expr: string): PointLightBuilder;
  staticFlags(value: number): PointLightBuilder;
  staticFlagsBind(expr: string): PointLightBuilder;
  use32BitShadowmap(value: boolean): PointLightBuilder;
  use32BitShadowmapBind(expr: string): PointLightBuilder;
  visible(value: boolean): PointLightBuilder;
  visibleBind(expr: string): PointLightBuilder;
  x(value: number): PointLightBuilder;
  xBind(expr: string): PointLightBuilder;
  y(value: number): PointLightBuilder;
  yBind(expr: string): PointLightBuilder;
  z(value: number): PointLightBuilder;
  zBind(expr: string): PointLightBuilder;
  onAmbientColorChanged(body: string): PointLightBuilder;
  onBakeModeChanged(body: string): PointLightBuilder;
  onBrightnessChanged(body: string): PointLightBuilder;
  onCastsShadowChanged(body: string): PointLightBuilder;
  onChildrenChanged(body: string): PointLightBuilder;
  onColorChanged(body: string): PointLightBuilder;
  onConstantFadeChanged(body: string): PointLightBuilder;
  onEulerRotationChanged(body: string): PointLightBuilder;
  onForwardChanged(body: string): PointLightBuilder;
  onLayersChanged(body: string): PointLightBuilder;
  onLinearFadeChanged(body: string): PointLightBuilder;
  onLocalOpacityChanged(body: string): PointLightBuilder;
  onObjectNameChanged(body: string): PointLightBuilder;
  onParentChanged(body: string): PointLightBuilder;
  onPcfFactorChanged(body: string): PointLightBuilder;
  onPivotChanged(body: string): PointLightBuilder;
  onPositionChanged(body: string): PointLightBuilder;
  onQuadraticFadeChanged(body: string): PointLightBuilder;
  onRightChanged(body: string): PointLightBuilder;
  onRotationChanged(body: string): PointLightBuilder;
  onScaleChanged(body: string): PointLightBuilder;
  onScenePositionChanged(body: string): PointLightBuilder;
  onSceneRotationChanged(body: string): PointLightBuilder;
  onSceneScaleChanged(body: string): PointLightBuilder;
  onSceneTransformChanged(body: string): PointLightBuilder;
  onScopeChanged(body: string): PointLightBuilder;
  onShadowBiasChanged(body: string): PointLightBuilder;
  onShadowFactorChanged(body: string): PointLightBuilder;
  onShadowFilterChanged(body: string): PointLightBuilder;
  onShadowMapFarChanged(body: string): PointLightBuilder;
  onShadowMapQualityChanged(body: string): PointLightBuilder;
  onSoftShadowQualityChanged(body: string): PointLightBuilder;
  onStateChanged(body: string): PointLightBuilder;
  onStaticFlagsChanged(body: string): PointLightBuilder;
  onUpChanged(body: string): PointLightBuilder;
  onUse32BitShadowmapChanged(body: string): PointLightBuilder;
  onVisibleChanged(body: string): PointLightBuilder;
  onXChanged(body: string): PointLightBuilder;
  onYChanged(body: string): PointLightBuilder;
  onZChanged(body: string): PointLightBuilder;
}

const POINTLIGHT_META: TypeMetadata = {
  typeName: 'PointLight',
  properties: [
    { name: 'ambientColor', hasValue: true, hasBinding: true },
    { name: 'bakeMode', hasValue: true, hasBinding: true },
    { name: 'brightness', hasValue: true, hasBinding: true },
    { name: 'castsShadow', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'constantFade', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'linearFade', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pcfFactor', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'quadraticFade', hasValue: true, hasBinding: true },
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
    { handlerName: 'onConstantFadeChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLinearFadeChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPcfFactorChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onQuadraticFadeChanged', paramCount: 0 },
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

export function PointLight(): PointLightBuilder {
  return createFluentBuilder('PointLight', POINTLIGHT_META) as unknown as PointLightBuilder;
}

export namespace PointLight {
  export namespace QSSGBakeMode {
    export const BakeModeDisabled = createEnumToken(
      'PointLight',
      'QSSGBakeMode',
      'BakeModeDisabled',
    );
    export const BakeModeIndirect = createEnumToken(
      'PointLight',
      'QSSGBakeMode',
      'BakeModeIndirect',
    );
    export const BakeModeAll = createEnumToken('PointLight', 'QSSGBakeMode', 'BakeModeAll');
  }
  export namespace QSSGShadowMapQuality {
    export const ShadowMapQualityLow = createEnumToken(
      'PointLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityLow',
    );
    export const ShadowMapQualityMedium = createEnumToken(
      'PointLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityMedium',
    );
    export const ShadowMapQualityHigh = createEnumToken(
      'PointLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityHigh',
    );
    export const ShadowMapQualityVeryHigh = createEnumToken(
      'PointLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityVeryHigh',
    );
    export const ShadowMapQualityUltra = createEnumToken(
      'PointLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityUltra',
    );
  }
  export namespace QSSGSoftShadowQuality {
    export const Hard = createEnumToken('PointLight', 'QSSGSoftShadowQuality', 'Hard');
    export const PCF4 = createEnumToken('PointLight', 'QSSGSoftShadowQuality', 'PCF4');
    export const PCF8 = createEnumToken('PointLight', 'QSSGSoftShadowQuality', 'PCF8');
    export const PCF16 = createEnumToken('PointLight', 'QSSGSoftShadowQuality', 'PCF16');
    export const PCF32 = createEnumToken('PointLight', 'QSSGSoftShadowQuality', 'PCF32');
    export const PCF64 = createEnumToken('PointLight', 'QSSGSoftShadowQuality', 'PCF64');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('PointLight', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('PointLight', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('PointLight', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('PointLight', 'TransformSpace', 'SceneSpace');
  }
}
