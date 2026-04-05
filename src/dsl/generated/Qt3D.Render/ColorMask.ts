// AUTO-GENERATED — DO NOT EDIT
// Type: ColorMask
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ColorMaskBuilder {
  id(id: string): ColorMaskBuilder;
  child(obj: QmlObjectBuilder): ColorMaskBuilder;

  alphaMasked(value: boolean): ColorMaskBuilder;
  alphaMaskedBind(expr: string): ColorMaskBuilder;
  blueMasked(value: boolean): ColorMaskBuilder;
  blueMaskedBind(expr: string): ColorMaskBuilder;
  enabled(value: boolean): ColorMaskBuilder;
  enabledBind(expr: string): ColorMaskBuilder;
  greenMasked(value: boolean): ColorMaskBuilder;
  greenMaskedBind(expr: string): ColorMaskBuilder;
  objectName(value: string): ColorMaskBuilder;
  objectNameBind(expr: string): ColorMaskBuilder;
  parent(value: QmlValue): ColorMaskBuilder;
  parentBind(expr: string): ColorMaskBuilder;
  redMasked(value: boolean): ColorMaskBuilder;
  redMaskedBind(expr: string): ColorMaskBuilder;
  onAlphaMaskedChanged(body: string): ColorMaskBuilder;
  onBlueMaskedChanged(body: string): ColorMaskBuilder;
  onEnabledChanged(body: string): ColorMaskBuilder;
  onGreenMaskedChanged(body: string): ColorMaskBuilder;
  onNodeDestroyed(body: string): ColorMaskBuilder;
  onObjectNameChanged(body: string): ColorMaskBuilder;
  onParentChanged(body: string): ColorMaskBuilder;
  onRedMaskedChanged(body: string): ColorMaskBuilder;
}

const COLORMASK_META: TypeMetadata = {
  typeName: 'ColorMask',
  properties: [
    { name: 'alphaMasked', hasValue: true, hasBinding: true },
    { name: 'blueMasked', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'greenMasked', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'redMasked', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlphaMaskedChanged', paramCount: 1 },
    { handlerName: 'onBlueMaskedChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onGreenMaskedChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRedMaskedChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ColorMask(): ColorMaskBuilder {
  return createFluentBuilder('ColorMask', COLORMASK_META) as unknown as ColorMaskBuilder;
}
