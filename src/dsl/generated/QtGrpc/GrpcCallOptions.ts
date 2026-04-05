// AUTO-GENERATED — DO NOT EDIT
// Type: GrpcCallOptions
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { GrpcMetadataBuilder } from './GrpcMetadata.js';
export interface GrpcCallOptionsBuilder {
  id(id: string): GrpcCallOptionsBuilder;
  child(obj: QmlObjectBuilder): GrpcCallOptionsBuilder;

  deadlineTimeout(value: number): GrpcCallOptionsBuilder;
  deadlineTimeoutBind(expr: string): GrpcCallOptionsBuilder;
  metadata(value: GrpcMetadataBuilder): GrpcCallOptionsBuilder;
  metadataBind(expr: string): GrpcCallOptionsBuilder;
  objectName(value: string): GrpcCallOptionsBuilder;
  objectNameBind(expr: string): GrpcCallOptionsBuilder;
  onDeadlineTimeoutChanged(body: string): GrpcCallOptionsBuilder;
  onMetadataChanged(body: string): GrpcCallOptionsBuilder;
  onObjectNameChanged(body: string): GrpcCallOptionsBuilder;
}

const GRPCCALLOPTIONS_META: TypeMetadata = {
  typeName: 'GrpcCallOptions',
  properties: [
    { name: 'deadlineTimeout', hasValue: true, hasBinding: true },
    { name: 'metadata', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDeadlineTimeoutChanged', paramCount: 0 },
    { handlerName: 'onMetadataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function GrpcCallOptions(): GrpcCallOptionsBuilder {
  return createFluentBuilder('GrpcCallOptions', GRPCCALLOPTIONS_META) as unknown as GrpcCallOptionsBuilder;
}
