// AUTO-GENERATED — DO NOT EDIT
// Type: ProceduralMeshSubset
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ProceduralMeshSubsetBuilder {
  id(id: string): ProceduralMeshSubsetBuilder;
  child(obj: QmlObjectBuilder): ProceduralMeshSubsetBuilder;

  count(value: number): ProceduralMeshSubsetBuilder;
  countBind(expr: string): ProceduralMeshSubsetBuilder;
  name(value: string): ProceduralMeshSubsetBuilder;
  nameBind(expr: string): ProceduralMeshSubsetBuilder;
  objectName(value: string): ProceduralMeshSubsetBuilder;
  objectNameBind(expr: string): ProceduralMeshSubsetBuilder;
  offset(value: number): ProceduralMeshSubsetBuilder;
  offsetBind(expr: string): ProceduralMeshSubsetBuilder;
  onCountChanged(body: string): ProceduralMeshSubsetBuilder;
  onIsDirty(body: string): ProceduralMeshSubsetBuilder;
  onNameChanged(body: string): ProceduralMeshSubsetBuilder;
  onObjectNameChanged(body: string): ProceduralMeshSubsetBuilder;
  onOffsetChanged(body: string): ProceduralMeshSubsetBuilder;
}

const PROCEDURALMESHSUBSET_META: TypeMetadata = {
  typeName: 'ProceduralMeshSubset',
  properties: [
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offset', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onIsDirty', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOffsetChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ProceduralMeshSubset(): ProceduralMeshSubsetBuilder {
  return createFluentBuilder(
    'ProceduralMeshSubset',
    PROCEDURALMESHSUBSET_META,
  ) as unknown as ProceduralMeshSubsetBuilder;
}
