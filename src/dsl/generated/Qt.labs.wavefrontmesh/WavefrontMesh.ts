// AUTO-GENERATED — DO NOT EDIT
// Type: WavefrontMesh
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface WavefrontMeshBuilder {
  id(id: string): WavefrontMeshBuilder;
  child(obj: QmlObjectBuilder): WavefrontMeshBuilder;

  objectName(value: string): WavefrontMeshBuilder;
  objectNameBind(expr: string): WavefrontMeshBuilder;
  projectionPlaneV(value: QmlVector3d): WavefrontMeshBuilder;
  projectionPlaneVBind(expr: string): WavefrontMeshBuilder;
  projectionPlaneW(value: QmlVector3d): WavefrontMeshBuilder;
  projectionPlaneWBind(expr: string): WavefrontMeshBuilder;
  source(value: QmlUrl): WavefrontMeshBuilder;
  sourceBind(expr: string): WavefrontMeshBuilder;
  onGeometryChanged(body: string): WavefrontMeshBuilder;
  onLastErrorChanged(body: string): WavefrontMeshBuilder;
  onObjectNameChanged(body: string): WavefrontMeshBuilder;
  onProjectionPlaneVChanged(body: string): WavefrontMeshBuilder;
  onProjectionPlaneWChanged(body: string): WavefrontMeshBuilder;
  onSourceChanged(body: string): WavefrontMeshBuilder;
}

const WAVEFRONTMESH_META: TypeMetadata = {
  typeName: 'WavefrontMesh',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'projectionPlaneV', hasValue: true, hasBinding: true },
    { name: 'projectionPlaneW', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onLastErrorChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onProjectionPlaneVChanged', paramCount: 0 },
    { handlerName: 'onProjectionPlaneWChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function WavefrontMesh(): WavefrontMeshBuilder {
  return createFluentBuilder(
    'WavefrontMesh',
    WAVEFRONTMESH_META,
  ) as unknown as WavefrontMeshBuilder;
}

export namespace WavefrontMesh {
  export namespace Error {
    export const NoError = createEnumToken('WavefrontMesh', 'Error', 'NoError');
    export const InvalidSourceError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'InvalidSourceError',
    );
    export const UnsupportedFaceShapeError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'UnsupportedFaceShapeError',
    );
    export const UnsupportedIndexSizeError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'UnsupportedIndexSizeError',
    );
    export const FileNotFoundError = createEnumToken('WavefrontMesh', 'Error', 'FileNotFoundError');
    export const NoAttributesError = createEnumToken('WavefrontMesh', 'Error', 'NoAttributesError');
    export const MissingPositionAttributeError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'MissingPositionAttributeError',
    );
    export const MissingTextureCoordinateAttributeError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'MissingTextureCoordinateAttributeError',
    );
    export const MissingPositionAndTextureCoordinateAttributesError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'MissingPositionAndTextureCoordinateAttributesError',
    );
    export const TooManyAttributesError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'TooManyAttributesError',
    );
    export const InvalidPlaneDefinitionError = createEnumToken(
      'WavefrontMesh',
      'Error',
      'InvalidPlaneDefinitionError',
    );
  }
}
