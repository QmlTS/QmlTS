// AUTO-GENERATED — DO NOT EDIT
// Type: RayCaster
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RayCasterBuilder {
  id(id: string): RayCasterBuilder;
  child(obj: QmlObjectBuilder): RayCasterBuilder;

  direction(value: QmlVector3d): RayCasterBuilder;
  directionBind(expr: string): RayCasterBuilder;
  enabled(value: boolean): RayCasterBuilder;
  enabledBind(expr: string): RayCasterBuilder;
  filterMode(value: QmlEnumToken): RayCasterBuilder;
  filterModeBind(expr: string): RayCasterBuilder;
  isShareable(value: boolean): RayCasterBuilder;
  isShareableBind(expr: string): RayCasterBuilder;
  length(value: number): RayCasterBuilder;
  lengthBind(expr: string): RayCasterBuilder;
  objectName(value: string): RayCasterBuilder;
  objectNameBind(expr: string): RayCasterBuilder;
  origin(value: QmlVector3d): RayCasterBuilder;
  originBind(expr: string): RayCasterBuilder;
  parent(value: QmlValue): RayCasterBuilder;
  parentBind(expr: string): RayCasterBuilder;
  runMode(value: QmlEnumToken): RayCasterBuilder;
  runModeBind(expr: string): RayCasterBuilder;
  onAddedToEntity(body: string): RayCasterBuilder;
  onDirectionChanged(body: string): RayCasterBuilder;
  onEnabledChanged(body: string): RayCasterBuilder;
  onFilterModeChanged(body: string): RayCasterBuilder;
  onHitsChanged(body: string): RayCasterBuilder;
  onLengthChanged(body: string): RayCasterBuilder;
  onNodeDestroyed(body: string): RayCasterBuilder;
  onObjectNameChanged(body: string): RayCasterBuilder;
  onOriginChanged(body: string): RayCasterBuilder;
  onParentChanged(body: string): RayCasterBuilder;
  onRemovedFromEntity(body: string): RayCasterBuilder;
  onRunModeChanged(body: string): RayCasterBuilder;
  onShareableChanged(body: string): RayCasterBuilder;
}

const RAYCASTER_META: TypeMetadata = {
  typeName: 'RayCaster',
  properties: [
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'filterMode', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'length', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'origin', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'runMode', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onDirectionChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFilterModeChanged', paramCount: 1 },
    { handlerName: 'onHitsChanged', paramCount: 1 },
    { handlerName: 'onLengthChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOriginChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRunModeChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function RayCaster(): RayCasterBuilder {
  return createFluentBuilder('RayCaster', RAYCASTER_META) as unknown as RayCasterBuilder;
}

export namespace RayCaster {
  export namespace FilterMode {
    export const AcceptAnyMatchingLayers = createEnumToken(
      'RayCaster',
      'FilterMode',
      'AcceptAnyMatchingLayers',
    );
    export const AcceptAllMatchingLayers = createEnumToken(
      'RayCaster',
      'FilterMode',
      'AcceptAllMatchingLayers',
    );
    export const DiscardAnyMatchingLayers = createEnumToken(
      'RayCaster',
      'FilterMode',
      'DiscardAnyMatchingLayers',
    );
    export const DiscardAllMatchingLayers = createEnumToken(
      'RayCaster',
      'FilterMode',
      'DiscardAllMatchingLayers',
    );
  }
  export namespace RunMode {
    export const Continuous = createEnumToken('RayCaster', 'RunMode', 'Continuous');
    export const SingleShot = createEnumToken('RayCaster', 'RunMode', 'SingleShot');
  }
}
