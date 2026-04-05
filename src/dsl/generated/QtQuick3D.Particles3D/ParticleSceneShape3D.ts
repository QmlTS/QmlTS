// AUTO-GENERATED — DO NOT EDIT
// Type: ParticleSceneShape3D
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
export interface ParticleSceneShape3DBuilder {
  id(id: string): ParticleSceneShape3DBuilder;
  child(obj: QmlObjectBuilder): ParticleSceneShape3DBuilder;

  excludedNodes(value: NodeBuilder[]): ParticleSceneShape3DBuilder;
  excludedNodesBind(expr: string): ParticleSceneShape3DBuilder;
  objectName(value: string): ParticleSceneShape3DBuilder;
  objectNameBind(expr: string): ParticleSceneShape3DBuilder;
  scene(value: NodeBuilder): ParticleSceneShape3DBuilder;
  sceneBind(expr: string): ParticleSceneShape3DBuilder;
  sceneCenter(value: QmlVector3d): ParticleSceneShape3DBuilder;
  sceneCenterBind(expr: string): ParticleSceneShape3DBuilder;
  sceneExtents(value: QmlVector3d): ParticleSceneShape3DBuilder;
  sceneExtentsBind(expr: string): ParticleSceneShape3DBuilder;
  shapeResolution(value: number): ParticleSceneShape3DBuilder;
  shapeResolutionBind(expr: string): ParticleSceneShape3DBuilder;
  onExcludedNodesChanged(body: string): ParticleSceneShape3DBuilder;
  onGeometryChanged(body: string): ParticleSceneShape3DBuilder;
  onObjectNameChanged(body: string): ParticleSceneShape3DBuilder;
  onSceneCenterChanged(body: string): ParticleSceneShape3DBuilder;
  onSceneChanged(body: string): ParticleSceneShape3DBuilder;
  onSceneExtentsChanged(body: string): ParticleSceneShape3DBuilder;
  onShapeResolutionChanged(body: string): ParticleSceneShape3DBuilder;
}

const PARTICLESCENESHAPE3D_META: TypeMetadata = {
  typeName: 'ParticleSceneShape3D',
  properties: [
    { name: 'excludedNodes', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'scene', hasValue: true, hasBinding: true },
    { name: 'sceneCenter', hasValue: true, hasBinding: true },
    { name: 'sceneExtents', hasValue: true, hasBinding: true },
    { name: 'shapeResolution', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onExcludedNodesChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSceneCenterChanged', paramCount: 0 },
    { handlerName: 'onSceneChanged', paramCount: 0 },
    { handlerName: 'onSceneExtentsChanged', paramCount: 0 },
    { handlerName: 'onShapeResolutionChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ParticleSceneShape3D(): ParticleSceneShape3DBuilder {
  return createFluentBuilder('ParticleSceneShape3D', PARTICLESCENESHAPE3D_META) as unknown as ParticleSceneShape3DBuilder;
}
