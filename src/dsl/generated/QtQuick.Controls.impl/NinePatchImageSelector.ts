// AUTO-GENERATED — DO NOT EDIT
// Type: NinePatchImageSelector
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface NinePatchImageSelectorBuilder {
  id(id: string): NinePatchImageSelectorBuilder;
  child(obj: QmlObjectBuilder): NinePatchImageSelectorBuilder;
  children(...objs: QmlObjectBuilder[]): NinePatchImageSelectorBuilder;

  cache(value: boolean): NinePatchImageSelectorBuilder;
  cacheBind(expr: string): NinePatchImageSelectorBuilder;
  name(value: string): NinePatchImageSelectorBuilder;
  nameBind(expr: string): NinePatchImageSelectorBuilder;
  objectName(value: string): NinePatchImageSelectorBuilder;
  objectNameBind(expr: string): NinePatchImageSelectorBuilder;
  path(value: string): NinePatchImageSelectorBuilder;
  pathBind(expr: string): NinePatchImageSelectorBuilder;
  separator(value: string): NinePatchImageSelectorBuilder;
  separatorBind(expr: string): NinePatchImageSelectorBuilder;
  states(value: QmlValue[]): NinePatchImageSelectorBuilder;
  statesBind(expr: string): NinePatchImageSelectorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): NinePatchImageSelectorBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): NinePatchImageSelectorBuilder;
}

const NINEPATCHIMAGESELECTOR_META: TypeMetadata = {
  typeName: 'NinePatchImageSelector',
  properties: [
    { name: 'cache', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'path', hasValue: true, hasBinding: true },
    { name: 'separator', hasValue: true, hasBinding: true },
    { name: 'states', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function NinePatchImageSelector(): NinePatchImageSelectorBuilder {
  return createFluentBuilder(
    'NinePatchImageSelector',
    NINEPATCHIMAGESELECTOR_META,
  ) as unknown as NinePatchImageSelectorBuilder;
}
