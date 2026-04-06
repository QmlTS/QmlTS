// AUTO-GENERATED — DO NOT EDIT
// Type: GrpcMetadata
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface GrpcMetadataBuilder {
  id(id: string): GrpcMetadataBuilder;
  child(obj: QmlObjectBuilder): GrpcMetadataBuilder;
  children(...objs: QmlObjectBuilder[]): GrpcMetadataBuilder;

  data(value: QmlValue): GrpcMetadataBuilder;
  dataBind(expr: string): GrpcMetadataBuilder;
  objectName(value: string): GrpcMetadataBuilder;
  objectNameBind(expr: string): GrpcMetadataBuilder;
  onDataChanged(handler: DslSignalHandlerValue): GrpcMetadataBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GrpcMetadataBuilder;
}

const GRPCMETADATA_META: TypeMetadata = {
  typeName: 'GrpcMetadata',
  properties: [
    { name: 'data', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function GrpcMetadata(): GrpcMetadataBuilder {
  return createFluentBuilder('GrpcMetadata', GRPCMETADATA_META) as unknown as GrpcMetadataBuilder;
}
