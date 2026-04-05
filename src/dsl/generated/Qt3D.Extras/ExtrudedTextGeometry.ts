// AUTO-GENERATED — DO NOT EDIT
// Type: ExtrudedTextGeometry
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { AttributeBuilder } from '../Qt3D.Core/Attribute.js';
export interface ExtrudedTextGeometryBuilder {
  id(id: string): ExtrudedTextGeometryBuilder;
  child(obj: QmlObjectBuilder): ExtrudedTextGeometryBuilder;

  boundingVolumePositionAttribute(value: AttributeBuilder): ExtrudedTextGeometryBuilder;
  boundingVolumePositionAttributeBind(expr: string): ExtrudedTextGeometryBuilder;
  enabled(value: boolean): ExtrudedTextGeometryBuilder;
  enabledBind(expr: string): ExtrudedTextGeometryBuilder;
  extrusionLength(value: number): ExtrudedTextGeometryBuilder;
  extrusionLengthBind(expr: string): ExtrudedTextGeometryBuilder;
  font(value: QmlFont): ExtrudedTextGeometryBuilder;
  fontBind(expr: string): ExtrudedTextGeometryBuilder;
  objectName(value: string): ExtrudedTextGeometryBuilder;
  objectNameBind(expr: string): ExtrudedTextGeometryBuilder;
  parent(value: QmlValue): ExtrudedTextGeometryBuilder;
  parentBind(expr: string): ExtrudedTextGeometryBuilder;
  text(value: string): ExtrudedTextGeometryBuilder;
  textBind(expr: string): ExtrudedTextGeometryBuilder;
  onBoundingVolumePositionAttributeChanged(body: string): ExtrudedTextGeometryBuilder;
  onDepthChanged(body: string): ExtrudedTextGeometryBuilder;
  onEnabledChanged(body: string): ExtrudedTextGeometryBuilder;
  onFontChanged(body: string): ExtrudedTextGeometryBuilder;
  onMaxExtentChanged(body: string): ExtrudedTextGeometryBuilder;
  onMinExtentChanged(body: string): ExtrudedTextGeometryBuilder;
  onNodeDestroyed(body: string): ExtrudedTextGeometryBuilder;
  onObjectNameChanged(body: string): ExtrudedTextGeometryBuilder;
  onParentChanged(body: string): ExtrudedTextGeometryBuilder;
  onTextChanged(body: string): ExtrudedTextGeometryBuilder;
}

const EXTRUDEDTEXTGEOMETRY_META: TypeMetadata = {
  typeName: 'ExtrudedTextGeometry',
  properties: [
    { name: 'boundingVolumePositionAttribute', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'extrusionLength', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoundingVolumePositionAttributeChanged', paramCount: 1 },
    { handlerName: 'onDepthChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 1 },
    { handlerName: 'onMaxExtentChanged', paramCount: 1 },
    { handlerName: 'onMinExtentChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ExtrudedTextGeometry(): ExtrudedTextGeometryBuilder {
  return createFluentBuilder(
    'ExtrudedTextGeometry',
    EXTRUDEDTEXTGEOMETRY_META,
  ) as unknown as ExtrudedTextGeometryBuilder;
}
