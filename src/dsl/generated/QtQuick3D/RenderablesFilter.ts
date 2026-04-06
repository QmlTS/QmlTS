// AUTO-GENERATED — DO NOT EDIT
// Type: RenderablesFilter
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RenderablesFilterBuilder {
  id(id: string): RenderablesFilterBuilder;
  child(obj: QmlObjectBuilder): RenderablesFilterBuilder;
  children(...objs: QmlObjectBuilder[]): RenderablesFilterBuilder;

  layerMask(value: number): RenderablesFilterBuilder;
  layerMaskBind(expr: string): RenderablesFilterBuilder;
  objectName(value: string): RenderablesFilterBuilder;
  objectNameBind(expr: string): RenderablesFilterBuilder;
  parent(value: QmlValue): RenderablesFilterBuilder;
  parentBind(expr: string): RenderablesFilterBuilder;
  renderableTypes(value: QmlEnumToken): RenderablesFilterBuilder;
  renderableTypesBind(expr: string): RenderablesFilterBuilder;
  state(value: string): RenderablesFilterBuilder;
  stateBind(expr: string): RenderablesFilterBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): RenderablesFilterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderablesFilterBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RenderablesFilterBuilder;
  onStateChanged(handler: DslSignalHandlerValue): RenderablesFilterBuilder;
}

const RENDERABLESFILTER_META: TypeMetadata = {
  typeName: 'RenderablesFilter',
  properties: [
    { name: 'layerMask', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderableTypes', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function RenderablesFilter(): RenderablesFilterBuilder {
  return createFluentBuilder(
    'RenderablesFilter',
    RENDERABLESFILTER_META,
  ) as unknown as RenderablesFilterBuilder;
}

export namespace RenderablesFilter {
  export namespace RenderableTypes {
    export const None = createEnumToken('RenderablesFilter', 'RenderableTypes', 'None');
    export const Opaque = createEnumToken('RenderablesFilter', 'RenderableTypes', 'Opaque');
    export const Transparent = createEnumToken(
      'RenderablesFilter',
      'RenderableTypes',
      'Transparent',
    );
  }
}
