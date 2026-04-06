// AUTO-GENERATED — DO NOT EDIT
// Type: ModelBlendParticle3D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  QmlVector4d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
export interface ModelBlendParticle3DBuilder {
  id(id: string): ModelBlendParticle3DBuilder;
  child(obj: QmlObjectBuilder): ModelBlendParticle3DBuilder;
  children(...objs: QmlObjectBuilder[]): ModelBlendParticle3DBuilder;

  activationNode(value: NodeBuilder): ModelBlendParticle3DBuilder;
  activationNodeBind(expr: string): ModelBlendParticle3DBuilder;
  alignMode(value: QmlEnumToken): ModelBlendParticle3DBuilder;
  alignModeBind(expr: string): ModelBlendParticle3DBuilder;
  alignTargetPosition(value: QmlVector3d): ModelBlendParticle3DBuilder;
  alignTargetPositionBind(expr: string): ModelBlendParticle3DBuilder;
  color(value: QmlColor): ModelBlendParticle3DBuilder;
  colorBind(expr: string): ModelBlendParticle3DBuilder;
  colorVariation(value: QmlVector4d): ModelBlendParticle3DBuilder;
  colorVariationBind(expr: string): ModelBlendParticle3DBuilder;
  delegate(value: QmlComponent): ModelBlendParticle3DBuilder;
  delegateBind(expr: string): ModelBlendParticle3DBuilder;
  emitMode(value: QmlEnumToken): ModelBlendParticle3DBuilder;
  emitModeBind(expr: string): ModelBlendParticle3DBuilder;
  endNode(value: NodeBuilder): ModelBlendParticle3DBuilder;
  endNodeBind(expr: string): ModelBlendParticle3DBuilder;
  endTime(value: number): ModelBlendParticle3DBuilder;
  endTimeBind(expr: string): ModelBlendParticle3DBuilder;
  fadeInDuration(value: number): ModelBlendParticle3DBuilder;
  fadeInDurationBind(expr: string): ModelBlendParticle3DBuilder;
  fadeInEffect(value: QmlEnumToken): ModelBlendParticle3DBuilder;
  fadeInEffectBind(expr: string): ModelBlendParticle3DBuilder;
  fadeOutDuration(value: number): ModelBlendParticle3DBuilder;
  fadeOutDurationBind(expr: string): ModelBlendParticle3DBuilder;
  fadeOutEffect(value: QmlEnumToken): ModelBlendParticle3DBuilder;
  fadeOutEffectBind(expr: string): ModelBlendParticle3DBuilder;
  hasTransparency(value: boolean): ModelBlendParticle3DBuilder;
  hasTransparencyBind(expr: string): ModelBlendParticle3DBuilder;
  maxAmount(value: number): ModelBlendParticle3DBuilder;
  maxAmountBind(expr: string): ModelBlendParticle3DBuilder;
  modelBlendMode(value: QmlEnumToken): ModelBlendParticle3DBuilder;
  modelBlendModeBind(expr: string): ModelBlendParticle3DBuilder;
  objectName(value: string): ModelBlendParticle3DBuilder;
  objectNameBind(expr: string): ModelBlendParticle3DBuilder;
  parent(value: QmlValue): ModelBlendParticle3DBuilder;
  parentBind(expr: string): ModelBlendParticle3DBuilder;
  sortMode(value: QmlEnumToken): ModelBlendParticle3DBuilder;
  sortModeBind(expr: string): ModelBlendParticle3DBuilder;
  state(value: string): ModelBlendParticle3DBuilder;
  stateBind(expr: string): ModelBlendParticle3DBuilder;
  unifiedColorVariation(value: boolean): ModelBlendParticle3DBuilder;
  unifiedColorVariationBind(expr: string): ModelBlendParticle3DBuilder;
  onActivationNodeChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onAlignModeChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onAlignTargetPositionChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onBlendFactorChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onColorChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onColorVariationChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onEmitModeChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onEndNodeChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onEndTimeChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onFadeInDurationChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onFadeInEffectChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onFadeOutDurationChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onFadeOutEffectChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onHasTransparencyChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onMaxAmountChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onModelBlendModeChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onSortModeChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onSystemChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
  onUnifiedColorVariationChanged(handler: DslSignalHandlerValue): ModelBlendParticle3DBuilder;
}

const MODELBLENDPARTICLE3D_META: TypeMetadata = {
  typeName: 'ModelBlendParticle3D',
  properties: [
    { name: 'activationNode', hasValue: true, hasBinding: true },
    { name: 'alignMode', hasValue: true, hasBinding: true },
    { name: 'alignTargetPosition', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'colorVariation', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'emitMode', hasValue: true, hasBinding: true },
    { name: 'endNode', hasValue: true, hasBinding: true },
    { name: 'endTime', hasValue: true, hasBinding: true },
    { name: 'fadeInDuration', hasValue: true, hasBinding: true },
    { name: 'fadeInEffect', hasValue: true, hasBinding: true },
    { name: 'fadeOutDuration', hasValue: true, hasBinding: true },
    { name: 'fadeOutEffect', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'maxAmount', hasValue: true, hasBinding: true },
    { name: 'modelBlendMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sortMode', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'unifiedColorVariation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActivationNodeChanged', paramCount: 0 },
    { handlerName: 'onAlignModeChanged', paramCount: 0 },
    { handlerName: 'onAlignTargetPositionChanged', paramCount: 0 },
    { handlerName: 'onBlendFactorChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onColorVariationChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onEmitModeChanged', paramCount: 0 },
    { handlerName: 'onEndNodeChanged', paramCount: 0 },
    { handlerName: 'onEndTimeChanged', paramCount: 0 },
    { handlerName: 'onFadeInDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeInEffectChanged', paramCount: 0 },
    { handlerName: 'onFadeOutDurationChanged', paramCount: 0 },
    { handlerName: 'onFadeOutEffectChanged', paramCount: 0 },
    { handlerName: 'onHasTransparencyChanged', paramCount: 0 },
    { handlerName: 'onMaxAmountChanged', paramCount: 0 },
    { handlerName: 'onModelBlendModeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onSortModeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onSystemChanged', paramCount: 0 },
    { handlerName: 'onUnifiedColorVariationChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ModelBlendParticle3D(): ModelBlendParticle3DBuilder {
  return createFluentBuilder(
    'ModelBlendParticle3D',
    MODELBLENDPARTICLE3D_META,
  ) as unknown as ModelBlendParticle3DBuilder;
}

export namespace ModelBlendParticle3D {
  export namespace AlignMode {
    export const AlignNone = createEnumToken('ModelBlendParticle3D', 'AlignMode', 'AlignNone');
    export const AlignTowardsTarget = createEnumToken(
      'ModelBlendParticle3D',
      'AlignMode',
      'AlignTowardsTarget',
    );
    export const AlignTowardsStartVelocity = createEnumToken(
      'ModelBlendParticle3D',
      'AlignMode',
      'AlignTowardsStartVelocity',
    );
  }
  export namespace FadeType {
    export const FadeNone = createEnumToken('ModelBlendParticle3D', 'FadeType', 'FadeNone');
    export const FadeOpacity = createEnumToken('ModelBlendParticle3D', 'FadeType', 'FadeOpacity');
    export const FadeScale = createEnumToken('ModelBlendParticle3D', 'FadeType', 'FadeScale');
  }
  export namespace ModelBlendEmitMode {
    export const Sequential = createEnumToken(
      'ModelBlendParticle3D',
      'ModelBlendEmitMode',
      'Sequential',
    );
    export const Random = createEnumToken('ModelBlendParticle3D', 'ModelBlendEmitMode', 'Random');
    export const Activation = createEnumToken(
      'ModelBlendParticle3D',
      'ModelBlendEmitMode',
      'Activation',
    );
  }
  export namespace ModelBlendMode {
    export const Explode = createEnumToken('ModelBlendParticle3D', 'ModelBlendMode', 'Explode');
    export const Construct = createEnumToken('ModelBlendParticle3D', 'ModelBlendMode', 'Construct');
    export const Transfer = createEnumToken('ModelBlendParticle3D', 'ModelBlendMode', 'Transfer');
  }
  export namespace SortMode {
    export const SortNone = createEnumToken('ModelBlendParticle3D', 'SortMode', 'SortNone');
    export const SortNewest = createEnumToken('ModelBlendParticle3D', 'SortMode', 'SortNewest');
    export const SortOldest = createEnumToken('ModelBlendParticle3D', 'SortMode', 'SortOldest');
    export const SortDistance = createEnumToken('ModelBlendParticle3D', 'SortMode', 'SortDistance');
  }
}
