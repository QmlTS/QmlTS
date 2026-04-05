// AUTO-GENERATED — DO NOT EDIT
// Type: Attribute
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface AttributeBuilder {
  id(id: string): AttributeBuilder;
  child(obj: QmlObjectBuilder): AttributeBuilder;

  attributeType(value: QmlEnumToken): AttributeBuilder;
  attributeTypeBind(expr: string): AttributeBuilder;
  buffer(value: QmlValue): AttributeBuilder;
  bufferBind(expr: string): AttributeBuilder;
  byteOffset(value: number): AttributeBuilder;
  byteOffsetBind(expr: string): AttributeBuilder;
  byteStride(value: number): AttributeBuilder;
  byteStrideBind(expr: string): AttributeBuilder;
  count(value: number): AttributeBuilder;
  countBind(expr: string): AttributeBuilder;
  divisor(value: number): AttributeBuilder;
  divisorBind(expr: string): AttributeBuilder;
  enabled(value: boolean): AttributeBuilder;
  enabledBind(expr: string): AttributeBuilder;
  name(value: string): AttributeBuilder;
  nameBind(expr: string): AttributeBuilder;
  objectName(value: string): AttributeBuilder;
  objectNameBind(expr: string): AttributeBuilder;
  parent(value: QmlValue): AttributeBuilder;
  parentBind(expr: string): AttributeBuilder;
  vertexBaseType(value: QmlEnumToken): AttributeBuilder;
  vertexBaseTypeBind(expr: string): AttributeBuilder;
  vertexSize(value: number): AttributeBuilder;
  vertexSizeBind(expr: string): AttributeBuilder;
  onAttributeTypeChanged(body: string): AttributeBuilder;
  onBufferChanged(body: string): AttributeBuilder;
  onByteOffsetChanged(body: string): AttributeBuilder;
  onByteStrideChanged(body: string): AttributeBuilder;
  onCountChanged(body: string): AttributeBuilder;
  onDataSizeChanged(body: string): AttributeBuilder;
  onDataTypeChanged(body: string): AttributeBuilder;
  onDivisorChanged(body: string): AttributeBuilder;
  onEnabledChanged(body: string): AttributeBuilder;
  onNameChanged(body: string): AttributeBuilder;
  onNodeDestroyed(body: string): AttributeBuilder;
  onObjectNameChanged(body: string): AttributeBuilder;
  onParentChanged(body: string): AttributeBuilder;
  onVertexBaseTypeChanged(body: string): AttributeBuilder;
  onVertexSizeChanged(body: string): AttributeBuilder;
}

const ATTRIBUTE_META: TypeMetadata = {
  typeName: 'Attribute',
  properties: [
    { name: 'attributeType', hasValue: true, hasBinding: true },
    { name: 'buffer', hasValue: true, hasBinding: true },
    { name: 'byteOffset', hasValue: true, hasBinding: true },
    { name: 'byteStride', hasValue: true, hasBinding: true },
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'divisor', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'vertexBaseType', hasValue: true, hasBinding: true },
    { name: 'vertexSize', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAttributeTypeChanged', paramCount: 1 },
    { handlerName: 'onBufferChanged', paramCount: 1 },
    { handlerName: 'onByteOffsetChanged', paramCount: 1 },
    { handlerName: 'onByteStrideChanged', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 1 },
    { handlerName: 'onDataSizeChanged', paramCount: 1 },
    { handlerName: 'onDataTypeChanged', paramCount: 1 },
    { handlerName: 'onDivisorChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onVertexBaseTypeChanged', paramCount: 1 },
    { handlerName: 'onVertexSizeChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Attribute(): AttributeBuilder {
  return createFluentBuilder('Attribute', ATTRIBUTE_META) as unknown as AttributeBuilder;
}

export namespace Attribute {
  export namespace AttributeType {
    export const VertexAttribute = createEnumToken('Attribute', 'AttributeType', 'VertexAttribute');
    export const IndexAttribute = createEnumToken('Attribute', 'AttributeType', 'IndexAttribute');
    export const DrawIndirectAttribute = createEnumToken('Attribute', 'AttributeType', 'DrawIndirectAttribute');
  }
  export namespace VertexBaseType {
    export const Byte = createEnumToken('Attribute', 'VertexBaseType', 'Byte');
    export const UnsignedByte = createEnumToken('Attribute', 'VertexBaseType', 'UnsignedByte');
    export const Short = createEnumToken('Attribute', 'VertexBaseType', 'Short');
    export const UnsignedShort = createEnumToken('Attribute', 'VertexBaseType', 'UnsignedShort');
    export const Int = createEnumToken('Attribute', 'VertexBaseType', 'Int');
    export const UnsignedInt = createEnumToken('Attribute', 'VertexBaseType', 'UnsignedInt');
    export const HalfFloat = createEnumToken('Attribute', 'VertexBaseType', 'HalfFloat');
    export const Float = createEnumToken('Attribute', 'VertexBaseType', 'Float');
    export const Double = createEnumToken('Attribute', 'VertexBaseType', 'Double');
  }
}
