// AUTO-GENERATED — DO NOT EDIT
// Type: LayerFilter
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface LayerFilterBuilder {
  id(id: string): LayerFilterBuilder;
  child(obj: QmlObjectBuilder): LayerFilterBuilder;

  enabled(value: boolean): LayerFilterBuilder;
  enabledBind(expr: string): LayerFilterBuilder;
  filterMode(value: QmlEnumToken): LayerFilterBuilder;
  filterModeBind(expr: string): LayerFilterBuilder;
  objectName(value: string): LayerFilterBuilder;
  objectNameBind(expr: string): LayerFilterBuilder;
  parent(value: QmlValue): LayerFilterBuilder;
  parentBind(expr: string): LayerFilterBuilder;
  onEnabledChanged(body: string): LayerFilterBuilder;
  onFilterModeChanged(body: string): LayerFilterBuilder;
  onNodeDestroyed(body: string): LayerFilterBuilder;
  onObjectNameChanged(body: string): LayerFilterBuilder;
  onParentChanged(body: string): LayerFilterBuilder;
}

const LAYERFILTER_META: TypeMetadata = {
  typeName: 'LayerFilter',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'filterMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFilterModeChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function LayerFilter(): LayerFilterBuilder {
  return createFluentBuilder('LayerFilter', LAYERFILTER_META) as unknown as LayerFilterBuilder;
}

export namespace LayerFilter {
  export namespace FilterMode {
    export const AcceptAnyMatchingLayers = createEnumToken(
      'LayerFilter',
      'FilterMode',
      'AcceptAnyMatchingLayers',
    );
    export const AcceptAllMatchingLayers = createEnumToken(
      'LayerFilter',
      'FilterMode',
      'AcceptAllMatchingLayers',
    );
    export const DiscardAnyMatchingLayers = createEnumToken(
      'LayerFilter',
      'FilterMode',
      'DiscardAnyMatchingLayers',
    );
    export const DiscardAllMatchingLayers = createEnumToken(
      'LayerFilter',
      'FilterMode',
      'DiscardAllMatchingLayers',
    );
  }
}
