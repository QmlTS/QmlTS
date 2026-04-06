// AUTO-GENERATED — DO NOT EDIT
// Type: RandomInstancing
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { InstanceRangeBuilder } from './InstanceRange.js';
export interface RandomInstancingBuilder {
  id(id: string): RandomInstancingBuilder;
  child(obj: QmlObjectBuilder): RandomInstancingBuilder;
  children(...objs: QmlObjectBuilder[]): RandomInstancingBuilder;

  color(value: InstanceRangeBuilder): RandomInstancingBuilder;
  colorBind(expr: string): RandomInstancingBuilder;
  colorModel(value: QmlEnumToken): RandomInstancingBuilder;
  colorModelBind(expr: string): RandomInstancingBuilder;
  customData(value: InstanceRangeBuilder): RandomInstancingBuilder;
  customDataBind(expr: string): RandomInstancingBuilder;
  depthSortingEnabled(value: boolean): RandomInstancingBuilder;
  depthSortingEnabledBind(expr: string): RandomInstancingBuilder;
  gridSpacing(value: QmlVector3d): RandomInstancingBuilder;
  gridSpacingBind(expr: string): RandomInstancingBuilder;
  hasTransparency(value: boolean): RandomInstancingBuilder;
  hasTransparencyBind(expr: string): RandomInstancingBuilder;
  instanceCount(value: number): RandomInstancingBuilder;
  instanceCountBind(expr: string): RandomInstancingBuilder;
  instanceCountOverride(value: number): RandomInstancingBuilder;
  instanceCountOverrideBind(expr: string): RandomInstancingBuilder;
  objectName(value: string): RandomInstancingBuilder;
  objectNameBind(expr: string): RandomInstancingBuilder;
  parent(value: QmlValue): RandomInstancingBuilder;
  parentBind(expr: string): RandomInstancingBuilder;
  position(value: InstanceRangeBuilder): RandomInstancingBuilder;
  positionBind(expr: string): RandomInstancingBuilder;
  randomSeed(value: number): RandomInstancingBuilder;
  randomSeedBind(expr: string): RandomInstancingBuilder;
  rotation(value: InstanceRangeBuilder): RandomInstancingBuilder;
  rotationBind(expr: string): RandomInstancingBuilder;
  scale(value: InstanceRangeBuilder): RandomInstancingBuilder;
  scaleBind(expr: string): RandomInstancingBuilder;
  shadowBoundsMaximum(value: QmlVector3d): RandomInstancingBuilder;
  shadowBoundsMaximumBind(expr: string): RandomInstancingBuilder;
  shadowBoundsMinimum(value: QmlVector3d): RandomInstancingBuilder;
  shadowBoundsMinimumBind(expr: string): RandomInstancingBuilder;
  state(value: string): RandomInstancingBuilder;
  stateBind(expr: string): RandomInstancingBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onColorChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onColorModelChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onCustomDataChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onDepthSortingEnabledChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onGridSpacingChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onHasTransparencyChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onInstanceCountChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onInstanceCountOverrideChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onInstanceNodeDirty(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onInstanceTableChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onRandomSeedChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onShadowBoundsMaximumChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onShadowBoundsMinimumChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
  onStateChanged(handler: DslSignalHandlerValue): RandomInstancingBuilder;
}

const RANDOMINSTANCING_META: TypeMetadata = {
  typeName: 'RandomInstancing',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'colorModel', hasValue: true, hasBinding: true },
    { name: 'customData', hasValue: true, hasBinding: true },
    { name: 'depthSortingEnabled', hasValue: true, hasBinding: true },
    { name: 'gridSpacing', hasValue: true, hasBinding: true },
    { name: 'hasTransparency', hasValue: true, hasBinding: true },
    { name: 'instanceCount', hasValue: true, hasBinding: true },
    { name: 'instanceCountOverride', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'randomSeed', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'shadowBoundsMaximum', hasValue: true, hasBinding: true },
    { name: 'shadowBoundsMinimum', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onColorModelChanged', paramCount: 0 },
    { handlerName: 'onCustomDataChanged', paramCount: 0 },
    { handlerName: 'onDepthSortingEnabledChanged', paramCount: 0 },
    { handlerName: 'onGridSpacingChanged', paramCount: 0 },
    { handlerName: 'onHasTransparencyChanged', paramCount: 0 },
    { handlerName: 'onInstanceCountChanged', paramCount: 0 },
    { handlerName: 'onInstanceCountOverrideChanged', paramCount: 0 },
    { handlerName: 'onInstanceNodeDirty', paramCount: 0 },
    { handlerName: 'onInstanceTableChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRandomSeedChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShadowBoundsMaximumChanged', paramCount: 0 },
    { handlerName: 'onShadowBoundsMinimumChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function RandomInstancing(): RandomInstancingBuilder {
  return createFluentBuilder(
    'RandomInstancing',
    RANDOMINSTANCING_META,
  ) as unknown as RandomInstancingBuilder;
}

export namespace RandomInstancing {
  export namespace ColorModel {
    export const RGB = createEnumToken('RandomInstancing', 'ColorModel', 'RGB');
    export const HSV = createEnumToken('RandomInstancing', 'ColorModel', 'HSV');
    export const HSL = createEnumToken('RandomInstancing', 'ColorModel', 'HSL');
  }
}
