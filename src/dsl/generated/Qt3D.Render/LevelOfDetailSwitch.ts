// AUTO-GENERATED — DO NOT EDIT
// Type: LevelOfDetailSwitch
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { CameraBuilder } from './Camera.js';
export interface LevelOfDetailSwitchBuilder {
  id(id: string): LevelOfDetailSwitchBuilder;
  child(obj: QmlObjectBuilder): LevelOfDetailSwitchBuilder;

  camera(value: CameraBuilder): LevelOfDetailSwitchBuilder;
  cameraBind(expr: string): LevelOfDetailSwitchBuilder;
  currentIndex(value: number): LevelOfDetailSwitchBuilder;
  currentIndexBind(expr: string): LevelOfDetailSwitchBuilder;
  enabled(value: boolean): LevelOfDetailSwitchBuilder;
  enabledBind(expr: string): LevelOfDetailSwitchBuilder;
  isShareable(value: boolean): LevelOfDetailSwitchBuilder;
  isShareableBind(expr: string): LevelOfDetailSwitchBuilder;
  objectName(value: string): LevelOfDetailSwitchBuilder;
  objectNameBind(expr: string): LevelOfDetailSwitchBuilder;
  parent(value: QmlValue): LevelOfDetailSwitchBuilder;
  parentBind(expr: string): LevelOfDetailSwitchBuilder;
  thresholdType(value: QmlEnumToken): LevelOfDetailSwitchBuilder;
  thresholdTypeBind(expr: string): LevelOfDetailSwitchBuilder;
  thresholds(value: number): LevelOfDetailSwitchBuilder;
  thresholdsBind(expr: string): LevelOfDetailSwitchBuilder;
  volumeOverride(value: QmlValue): LevelOfDetailSwitchBuilder;
  volumeOverrideBind(expr: string): LevelOfDetailSwitchBuilder;
  onAddedToEntity(body: string): LevelOfDetailSwitchBuilder;
  onCameraChanged(body: string): LevelOfDetailSwitchBuilder;
  onCurrentIndexChanged(body: string): LevelOfDetailSwitchBuilder;
  onEnabledChanged(body: string): LevelOfDetailSwitchBuilder;
  onNodeDestroyed(body: string): LevelOfDetailSwitchBuilder;
  onObjectNameChanged(body: string): LevelOfDetailSwitchBuilder;
  onParentChanged(body: string): LevelOfDetailSwitchBuilder;
  onRemovedFromEntity(body: string): LevelOfDetailSwitchBuilder;
  onShareableChanged(body: string): LevelOfDetailSwitchBuilder;
  onThresholdTypeChanged(body: string): LevelOfDetailSwitchBuilder;
  onThresholdsChanged(body: string): LevelOfDetailSwitchBuilder;
  onVolumeOverrideChanged(body: string): LevelOfDetailSwitchBuilder;
}

const LEVELOFDETAILSWITCH_META: TypeMetadata = {
  typeName: 'LevelOfDetailSwitch',
  properties: [
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'thresholdType', hasValue: true, hasBinding: true },
    { name: 'thresholds', hasValue: true, hasBinding: true },
    { name: 'volumeOverride', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onCameraChanged', paramCount: 1 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onThresholdTypeChanged', paramCount: 1 },
    { handlerName: 'onThresholdsChanged', paramCount: 1 },
    { handlerName: 'onVolumeOverrideChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function LevelOfDetailSwitch(): LevelOfDetailSwitchBuilder {
  return createFluentBuilder('LevelOfDetailSwitch', LEVELOFDETAILSWITCH_META) as unknown as LevelOfDetailSwitchBuilder;
}

export namespace LevelOfDetailSwitch {
  export namespace ThresholdType {
    export const DistanceToCameraThreshold = createEnumToken('LevelOfDetailSwitch', 'ThresholdType', 'DistanceToCameraThreshold');
    export const ProjectedScreenPixelSizeThreshold = createEnumToken('LevelOfDetailSwitch', 'ThresholdType', 'ProjectedScreenPixelSizeThreshold');
  }
}
