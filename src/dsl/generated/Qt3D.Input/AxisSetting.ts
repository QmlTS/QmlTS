// AUTO-GENERATED — DO NOT EDIT
// Type: AxisSetting
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AxisSettingBuilder {
  id(id: string): AxisSettingBuilder;
  child(obj: QmlObjectBuilder): AxisSettingBuilder;

  axes(value: number): AxisSettingBuilder;
  axesBind(expr: string): AxisSettingBuilder;
  deadZoneRadius(value: number): AxisSettingBuilder;
  deadZoneRadiusBind(expr: string): AxisSettingBuilder;
  enabled(value: boolean): AxisSettingBuilder;
  enabledBind(expr: string): AxisSettingBuilder;
  objectName(value: string): AxisSettingBuilder;
  objectNameBind(expr: string): AxisSettingBuilder;
  parent(value: QmlValue): AxisSettingBuilder;
  parentBind(expr: string): AxisSettingBuilder;
  smooth(value: boolean): AxisSettingBuilder;
  smoothBind(expr: string): AxisSettingBuilder;
  onAxesChanged(body: string): AxisSettingBuilder;
  onDeadZoneRadiusChanged(body: string): AxisSettingBuilder;
  onEnabledChanged(body: string): AxisSettingBuilder;
  onNodeDestroyed(body: string): AxisSettingBuilder;
  onObjectNameChanged(body: string): AxisSettingBuilder;
  onParentChanged(body: string): AxisSettingBuilder;
  onSmoothChanged(body: string): AxisSettingBuilder;
}

const AXISSETTING_META: TypeMetadata = {
  typeName: 'AxisSetting',
  properties: [
    { name: 'axes', hasValue: true, hasBinding: true },
    { name: 'deadZoneRadius', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxesChanged', paramCount: 1 },
    { handlerName: 'onDeadZoneRadiusChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AxisSetting(): AxisSettingBuilder {
  return createFluentBuilder('AxisSetting', AXISSETTING_META) as unknown as AxisSettingBuilder;
}
