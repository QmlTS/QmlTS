// AUTO-GENERATED — DO NOT EDIT
// Type: ImageSelector
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ImageSelectorBuilder {
  id(id: string): ImageSelectorBuilder;
  child(obj: QmlObjectBuilder): ImageSelectorBuilder;
  children(...objs: QmlObjectBuilder[]): ImageSelectorBuilder;

  cache(value: boolean): ImageSelectorBuilder;
  cacheBind(expr: string): ImageSelectorBuilder;
  name(value: string): ImageSelectorBuilder;
  nameBind(expr: string): ImageSelectorBuilder;
  objectName(value: string): ImageSelectorBuilder;
  objectNameBind(expr: string): ImageSelectorBuilder;
  path(value: string): ImageSelectorBuilder;
  pathBind(expr: string): ImageSelectorBuilder;
  separator(value: string): ImageSelectorBuilder;
  separatorBind(expr: string): ImageSelectorBuilder;
  states(value: QmlValue[]): ImageSelectorBuilder;
  statesBind(expr: string): ImageSelectorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ImageSelectorBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): ImageSelectorBuilder;
}

const IMAGESELECTOR_META: TypeMetadata = {
  typeName: 'ImageSelector',
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

export function ImageSelector(): ImageSelectorBuilder {
  return createFluentBuilder(
    'ImageSelector',
    IMAGESELECTOR_META,
  ) as unknown as ImageSelectorBuilder;
}
