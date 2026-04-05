// AUTO-GENERATED — DO NOT EDIT
// Type: AnimationController
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EntityBuilder } from '../Qt3D.Core/Entity.js';
export interface AnimationControllerBuilder {
  id(id: string): AnimationControllerBuilder;
  child(obj: QmlObjectBuilder): AnimationControllerBuilder;

  activeAnimationGroup(value: number): AnimationControllerBuilder;
  activeAnimationGroupBind(expr: string): AnimationControllerBuilder;
  entity(value: EntityBuilder): AnimationControllerBuilder;
  entityBind(expr: string): AnimationControllerBuilder;
  objectName(value: string): AnimationControllerBuilder;
  objectNameBind(expr: string): AnimationControllerBuilder;
  position(value: number): AnimationControllerBuilder;
  positionBind(expr: string): AnimationControllerBuilder;
  positionOffset(value: number): AnimationControllerBuilder;
  positionOffsetBind(expr: string): AnimationControllerBuilder;
  positionScale(value: number): AnimationControllerBuilder;
  positionScaleBind(expr: string): AnimationControllerBuilder;
  recursive(value: boolean): AnimationControllerBuilder;
  recursiveBind(expr: string): AnimationControllerBuilder;
  onActiveAnimationGroupChanged(body: string): AnimationControllerBuilder;
  onEntityChanged(body: string): AnimationControllerBuilder;
  onObjectNameChanged(body: string): AnimationControllerBuilder;
  onPositionChanged(body: string): AnimationControllerBuilder;
  onPositionOffsetChanged(body: string): AnimationControllerBuilder;
  onPositionScaleChanged(body: string): AnimationControllerBuilder;
  onRecursiveChanged(body: string): AnimationControllerBuilder;
}

const ANIMATIONCONTROLLER_META: TypeMetadata = {
  typeName: 'AnimationController',
  properties: [
    { name: 'activeAnimationGroup', hasValue: true, hasBinding: true },
    { name: 'entity', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'positionOffset', hasValue: true, hasBinding: true },
    { name: 'positionScale', hasValue: true, hasBinding: true },
    { name: 'recursive', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveAnimationGroupChanged', paramCount: 1 },
    { handlerName: 'onEntityChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onPositionOffsetChanged', paramCount: 1 },
    { handlerName: 'onPositionScaleChanged', paramCount: 1 },
    { handlerName: 'onRecursiveChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AnimationController(): AnimationControllerBuilder {
  return createFluentBuilder(
    'AnimationController',
    ANIMATIONCONTROLLER_META,
  ) as unknown as AnimationControllerBuilder;
}
