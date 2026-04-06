// AUTO-GENERATED — DO NOT EDIT
// Type: AnimationController
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EntityBuilder } from '../Qt3D.Core/Entity.js';
export interface AnimationControllerBuilder {
  id(id: string): AnimationControllerBuilder;
  child(obj: QmlObjectBuilder): AnimationControllerBuilder;
  children(...objs: QmlObjectBuilder[]): AnimationControllerBuilder;

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
  onActiveAnimationGroupChanged(handler: DslSignalHandlerValue): AnimationControllerBuilder;
  onEntityChanged(handler: DslSignalHandlerValue): AnimationControllerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AnimationControllerBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): AnimationControllerBuilder;
  onPositionOffsetChanged(handler: DslSignalHandlerValue): AnimationControllerBuilder;
  onPositionScaleChanged(handler: DslSignalHandlerValue): AnimationControllerBuilder;
  onRecursiveChanged(handler: DslSignalHandlerValue): AnimationControllerBuilder;
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
