// AUTO-GENERATED — DO NOT EDIT
// Type: SpotLight
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
import type { NodeBuilder } from './Node.js';
export interface SpotLightBuilder {
  id(id: string): SpotLightBuilder;
  child(obj: QmlObjectBuilder): SpotLightBuilder;
  children(...objs: QmlObjectBuilder[]): SpotLightBuilder;

  ambientColor(value: QmlColor): SpotLightBuilder;
  ambientColorBind(expr: string): SpotLightBuilder;
  bakeMode(value: QmlEnumToken): SpotLightBuilder;
  bakeModeBind(expr: string): SpotLightBuilder;
  brightness(value: number): SpotLightBuilder;
  brightnessBind(expr: string): SpotLightBuilder;
  castsShadow(value: boolean): SpotLightBuilder;
  castsShadowBind(expr: string): SpotLightBuilder;
  color(value: QmlColor): SpotLightBuilder;
  colorBind(expr: string): SpotLightBuilder;
  coneAngle(value: number): SpotLightBuilder;
  coneAngleBind(expr: string): SpotLightBuilder;
  constantFade(value: number): SpotLightBuilder;
  constantFadeBind(expr: string): SpotLightBuilder;
  eulerRotation(value: QmlVector3d): SpotLightBuilder;
  eulerRotationBind(expr: string): SpotLightBuilder;
  innerConeAngle(value: number): SpotLightBuilder;
  innerConeAngleBind(expr: string): SpotLightBuilder;
  layers(value: number): SpotLightBuilder;
  layersBind(expr: string): SpotLightBuilder;
  linearFade(value: number): SpotLightBuilder;
  linearFadeBind(expr: string): SpotLightBuilder;
  objectName(value: string): SpotLightBuilder;
  objectNameBind(expr: string): SpotLightBuilder;
  opacity(value: number): SpotLightBuilder;
  opacityBind(expr: string): SpotLightBuilder;
  parent(value: QmlValue): SpotLightBuilder;
  parentBind(expr: string): SpotLightBuilder;
  pcfFactor(value: number): SpotLightBuilder;
  pcfFactorBind(expr: string): SpotLightBuilder;
  pivot(value: QmlVector3d): SpotLightBuilder;
  pivotBind(expr: string): SpotLightBuilder;
  position(value: QmlVector3d): SpotLightBuilder;
  positionBind(expr: string): SpotLightBuilder;
  quadraticFade(value: number): SpotLightBuilder;
  quadraticFadeBind(expr: string): SpotLightBuilder;
  rotation(value: QmlQuaternion): SpotLightBuilder;
  rotationBind(expr: string): SpotLightBuilder;
  scale(value: QmlVector3d): SpotLightBuilder;
  scaleBind(expr: string): SpotLightBuilder;
  scope(value: NodeBuilder): SpotLightBuilder;
  scopeBind(expr: string): SpotLightBuilder;
  shadowBias(value: number): SpotLightBuilder;
  shadowBiasBind(expr: string): SpotLightBuilder;
  shadowFactor(value: number): SpotLightBuilder;
  shadowFactorBind(expr: string): SpotLightBuilder;
  shadowFilter(value: number): SpotLightBuilder;
  shadowFilterBind(expr: string): SpotLightBuilder;
  shadowMapFar(value: number): SpotLightBuilder;
  shadowMapFarBind(expr: string): SpotLightBuilder;
  shadowMapQuality(value: QmlEnumToken): SpotLightBuilder;
  shadowMapQualityBind(expr: string): SpotLightBuilder;
  softShadowQuality(value: QmlEnumToken): SpotLightBuilder;
  softShadowQualityBind(expr: string): SpotLightBuilder;
  state(value: string): SpotLightBuilder;
  stateBind(expr: string): SpotLightBuilder;
  staticFlags(value: number): SpotLightBuilder;
  staticFlagsBind(expr: string): SpotLightBuilder;
  use32BitShadowmap(value: boolean): SpotLightBuilder;
  use32BitShadowmapBind(expr: string): SpotLightBuilder;
  visible(value: boolean): SpotLightBuilder;
  visibleBind(expr: string): SpotLightBuilder;
  x(value: number): SpotLightBuilder;
  xBind(expr: string): SpotLightBuilder;
  y(value: number): SpotLightBuilder;
  yBind(expr: string): SpotLightBuilder;
  z(value: number): SpotLightBuilder;
  zBind(expr: string): SpotLightBuilder;
  onAmbientColorChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onBakeModeChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onBrightnessChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onCastsShadowChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onColorChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onConeAngleChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onConstantFadeChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onInnerConeAngleChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onLinearFadeChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onPcfFactorChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onQuadraticFadeChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onRightChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onScopeChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onShadowBiasChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onShadowFactorChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onShadowFilterChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onShadowMapFarChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onShadowMapQualityChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onSoftShadowQualityChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onUpChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onUse32BitShadowmapChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onXChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onYChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
  onZChanged(handler: DslSignalHandlerValue): SpotLightBuilder;
}

const SPOTLIGHT_META: TypeMetadata = {
  typeName: 'SpotLight',
  properties: [
    { name: 'ambientColor', hasValue: true, hasBinding: true },
    { name: 'bakeMode', hasValue: true, hasBinding: true },
    { name: 'brightness', hasValue: true, hasBinding: true },
    { name: 'castsShadow', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'coneAngle', hasValue: true, hasBinding: true },
    { name: 'constantFade', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'innerConeAngle', hasValue: true, hasBinding: true },
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
    { handlerName: 'onConeAngleChanged', paramCount: 0 },
    { handlerName: 'onConstantFadeChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onInnerConeAngleChanged', paramCount: 0 },
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

export function SpotLight(): SpotLightBuilder {
  return createFluentBuilder('SpotLight', SPOTLIGHT_META) as unknown as SpotLightBuilder;
}

export namespace SpotLight {
  export namespace QSSGBakeMode {
    export const BakeModeDisabled = createEnumToken(
      'SpotLight',
      'QSSGBakeMode',
      'BakeModeDisabled',
    );
    export const BakeModeIndirect = createEnumToken(
      'SpotLight',
      'QSSGBakeMode',
      'BakeModeIndirect',
    );
    export const BakeModeAll = createEnumToken('SpotLight', 'QSSGBakeMode', 'BakeModeAll');
  }
  export namespace QSSGShadowMapQuality {
    export const ShadowMapQualityLow = createEnumToken(
      'SpotLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityLow',
    );
    export const ShadowMapQualityMedium = createEnumToken(
      'SpotLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityMedium',
    );
    export const ShadowMapQualityHigh = createEnumToken(
      'SpotLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityHigh',
    );
    export const ShadowMapQualityVeryHigh = createEnumToken(
      'SpotLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityVeryHigh',
    );
    export const ShadowMapQualityUltra = createEnumToken(
      'SpotLight',
      'QSSGShadowMapQuality',
      'ShadowMapQualityUltra',
    );
  }
  export namespace QSSGSoftShadowQuality {
    export const Hard = createEnumToken('SpotLight', 'QSSGSoftShadowQuality', 'Hard');
    export const PCF4 = createEnumToken('SpotLight', 'QSSGSoftShadowQuality', 'PCF4');
    export const PCF8 = createEnumToken('SpotLight', 'QSSGSoftShadowQuality', 'PCF8');
    export const PCF16 = createEnumToken('SpotLight', 'QSSGSoftShadowQuality', 'PCF16');
    export const PCF32 = createEnumToken('SpotLight', 'QSSGSoftShadowQuality', 'PCF32');
    export const PCF64 = createEnumToken('SpotLight', 'QSSGSoftShadowQuality', 'PCF64');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('SpotLight', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('SpotLight', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('SpotLight', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('SpotLight', 'TransformSpace', 'SceneSpace');
  }
}
