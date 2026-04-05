// AUTO-GENERATED — DO NOT EDIT
// Type: ScreenRayCaster
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlPoint, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ScreenRayCasterBuilder {
  id(id: string): ScreenRayCasterBuilder;
  child(obj: QmlObjectBuilder): ScreenRayCasterBuilder;

  enabled(value: boolean): ScreenRayCasterBuilder;
  enabledBind(expr: string): ScreenRayCasterBuilder;
  filterMode(value: QmlEnumToken): ScreenRayCasterBuilder;
  filterModeBind(expr: string): ScreenRayCasterBuilder;
  isShareable(value: boolean): ScreenRayCasterBuilder;
  isShareableBind(expr: string): ScreenRayCasterBuilder;
  objectName(value: string): ScreenRayCasterBuilder;
  objectNameBind(expr: string): ScreenRayCasterBuilder;
  parent(value: QmlValue): ScreenRayCasterBuilder;
  parentBind(expr: string): ScreenRayCasterBuilder;
  position(value: QmlPoint): ScreenRayCasterBuilder;
  positionBind(expr: string): ScreenRayCasterBuilder;
  runMode(value: QmlEnumToken): ScreenRayCasterBuilder;
  runModeBind(expr: string): ScreenRayCasterBuilder;
  onAddedToEntity(body: string): ScreenRayCasterBuilder;
  onEnabledChanged(body: string): ScreenRayCasterBuilder;
  onFilterModeChanged(body: string): ScreenRayCasterBuilder;
  onHitsChanged(body: string): ScreenRayCasterBuilder;
  onNodeDestroyed(body: string): ScreenRayCasterBuilder;
  onObjectNameChanged(body: string): ScreenRayCasterBuilder;
  onParentChanged(body: string): ScreenRayCasterBuilder;
  onPositionChanged(body: string): ScreenRayCasterBuilder;
  onRemovedFromEntity(body: string): ScreenRayCasterBuilder;
  onRunModeChanged(body: string): ScreenRayCasterBuilder;
  onShareableChanged(body: string): ScreenRayCasterBuilder;
}

const SCREENRAYCASTER_META: TypeMetadata = {
  typeName: 'ScreenRayCaster',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'filterMode', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'runMode', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFilterModeChanged', paramCount: 1 },
    { handlerName: 'onHitsChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRunModeChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ScreenRayCaster(): ScreenRayCasterBuilder {
  return createFluentBuilder('ScreenRayCaster', SCREENRAYCASTER_META) as unknown as ScreenRayCasterBuilder;
}

export namespace ScreenRayCaster {
  export namespace FilterMode {
    export const AcceptAnyMatchingLayers = createEnumToken('ScreenRayCaster', 'FilterMode', 'AcceptAnyMatchingLayers');
    export const AcceptAllMatchingLayers = createEnumToken('ScreenRayCaster', 'FilterMode', 'AcceptAllMatchingLayers');
    export const DiscardAnyMatchingLayers = createEnumToken('ScreenRayCaster', 'FilterMode', 'DiscardAnyMatchingLayers');
    export const DiscardAllMatchingLayers = createEnumToken('ScreenRayCaster', 'FilterMode', 'DiscardAllMatchingLayers');
  }
  export namespace RunMode {
    export const Continuous = createEnumToken('ScreenRayCaster', 'RunMode', 'Continuous');
    export const SingleShot = createEnumToken('ScreenRayCaster', 'RunMode', 'SingleShot');
  }
}
