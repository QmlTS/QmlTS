// AUTO-GENERATED — DO NOT EDIT
// Type: ModelParticle3D
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlComponent, QmlEnumToken, QmlObjectBuilder, QmlValue, QmlVector3d, QmlVector4d, TypeMetadata } from '../../runtime/index.js';
export interface ModelParticle3DBuilder {
  id(id: string): ModelParticle3DBuilder;
  child(obj: QmlObjectBuilder): ModelParticle3DBuilder;

  alignMode(value: QmlEnumToken): ModelParticle3DBuilder;
  alignModeBind(expr: string): ModelParticle3DBuilder;
  alignTargetPosition(value: QmlVector3d): ModelParticle3DBuilder;
  alignTargetPositionBind(expr: string): ModelParticle3DBuilder;
  color(value: QmlColor): ModelParticle3DBuilder;
  colorBind(expr: string): ModelParticle3DBuilder;
  colorVariation(value: QmlVector4d): ModelParticle3DBuilder;
  colorVariationBind(expr: string): ModelParticle3DBuilder;
  delegate(value: QmlComponent): ModelParticle3DBuilder;
  delegateBind(expr: string): ModelParticle3DBuilder;
  fadeInDuration(value: number): ModelParticle3DBuilder;
  fadeInDurationBind(expr: string): ModelParticle3DBuilder;
  fadeInEffect(value: QmlEnumToken): ModelParticle3DBuilder;
  fadeInEffectBind(expr: string): ModelParticle3DBuilder;
  fadeOutDuration(value: number): ModelParticle3DBuilder;
  fadeOutDurationBind(expr: string): ModelParticle3DBuilder;
  fadeOutEffect(value: QmlEnumToken): ModelParticle3DBuilder;
  fadeOutEffectBind(expr: string): ModelParticle3DBuilder;
  hasTransparency(value: boolean): ModelParticle3DBuilder;
  hasTransparencyBind(expr: string): ModelParticle3DBuilder;
  maxAmount(value: number): ModelParticle3DBuilder;
  maxAmountBind(expr: string): ModelParticle3DBuilder;
  objectName(value: string): ModelParticle3DBuilder;
  objectNameBind(expr: string): ModelParticle3DBuilder;
  parent(value: QmlValue): ModelParticle3DBuilder;
  parentBind(expr: string): ModelParticle3DBuilder;
  sortMode(value: QmlEnumToken): ModelParticle3DBuilder;
  sortModeBind(expr: string): ModelParticle3DBuilder;
  state(value: string): ModelParticle3DBuilder;
  stateBind(expr: string): ModelParticle3DBuilder;
  unifiedColorVariation(value: boolean): ModelParticle3DBuilder;
  unifiedColorVariationBind(expr: string): ModelParticle3DBuilder;
  onAlignModeChanged(body: string): ModelParticle3DBuilder;
  onAlignTargetPositionChanged(body: string): ModelParticle3DBuilder;
  onChildrenChanged(body: string): ModelParticle3DBuilder;
  onColorChanged(body: string): ModelParticle3DBuilder;
  onColorVariationChanged(body: string): ModelParticle3DBuilder;
  onDelegateChanged(body: string): ModelParticle3DBuilder;
  onFadeInDurationChanged(body: string): ModelParticle3DBuilder;
  onFadeInEffectChanged(body: string): ModelParticle3DBuilder;
  onFadeOutDurationChanged(body: string): ModelParticle3DBuilder;
  onFadeOutEffectChanged(body: string): ModelParticle3DBuilder;
  onHasTransparencyChanged(body: string): ModelParticle3DBuilder;
  onInstanceTableChanged(body: string): ModelParticle3DBuilder;
  onMaxAmountChanged(body: string): ModelParticle3DBuilder;
  onObjectNameChanged(body: string): ModelParticle3DBuilder;
  onParentChanged(body: string): ModelParticle3DBuilder;
  onSortModeChanged(body: string): ModelParticle3DBuilder;
  onStateChanged(body: string): ModelParticle3DBuilder;
  onSystemChanged(body: string): ModelParticle3DBuilder;
  onUnifiedColorVariationChanged(body: string): ModelParticle3DBuilder;
}

const MODELPARTICLE3D_META: TypeMetadata = {
  typeName: 'ModelParticle3D',
  properties: [
    { name: 'alignMode', hasValue: true, hasBinding: true },
    { name: 'alignTargetPosition', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'colorVariation', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'fadeInDuration', hasValue: true, hasBinding: true },
    { name: 'fadeInEffect', hasValue: true, hasBinding: true },
    { name: 'fadeOutDuration', hasValue: true, hasBinding: true },
    { name: 'fadeOutEffect', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'maxAmount', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sortMode', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'unifiedColorVariation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlignModeChanged', paramCount: 0 },
    { handlerName: 'onAlignTargetPositionChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onColorVariationChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onFadeInDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeInEffectChanged', paramCount: 0 },
    { handlerName: 'onFadeOutDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeOutEffectChanged', paramCount: 0 },
    { handlerName: 'onHasTransparencyChanged', paramCount: 0 },
    { handlerName: 'onInstanceTableChanged', paramCount: 0 },
    { handlerName: 'onMaxAmountChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onSortModeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onUnifiedColorVariationChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'delegate',
};

export function ModelParticle3D(): ModelParticle3DBuilder {
  return createFluentBuilder('ModelParticle3D', MODELPARTICLE3D_META) as unknown as ModelParticle3DBuilder;
}

export namespace ModelParticle3D {
  export namespace AlignMode {
    export const AlignNone = createEnumToken('ModelParticle3D', 'AlignMode', 'AlignNone');
    export const AlignTowardsTarget = createEnumToken('ModelParticle3D', 'AlignMode', 'AlignTowardsTarget');
    export const AlignTowardsStartVelocity = createEnumToken('ModelParticle3D', 'AlignMode', 'AlignTowardsStartVelocity');
  }
  export namespace FadeType {
    export const FadeNone = createEnumToken('ModelParticle3D', 'FadeType', 'FadeNone');
    export const FadeOpacity = createEnumToken('ModelParticle3D', 'FadeType', 'FadeOpacity');
    export const FadeScale = createEnumToken('ModelParticle3D', 'FadeType', 'FadeScale');
  }
  export namespace SortMode {
    export const SortNone = createEnumToken('ModelParticle3D', 'SortMode', 'SortNone');
    export const SortNewest = createEnumToken('ModelParticle3D', 'SortMode', 'SortNewest');
    export const SortOldest = createEnumToken('ModelParticle3D', 'SortMode', 'SortOldest');
    export const SortDistance = createEnumToken('ModelParticle3D', 'SortMode', 'SortDistance');
  }
}
