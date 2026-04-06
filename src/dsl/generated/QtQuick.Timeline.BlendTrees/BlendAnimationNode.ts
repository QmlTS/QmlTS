// AUTO-GENERATED — DO NOT EDIT
// Type: BlendAnimationNode
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface BlendAnimationNodeBuilder {
  id(id: string): BlendAnimationNodeBuilder;
  child(obj: QmlObjectBuilder): BlendAnimationNodeBuilder;
  children(...objs: QmlObjectBuilder[]): BlendAnimationNodeBuilder;

  objectName(value: string): BlendAnimationNodeBuilder;
  objectNameBind(expr: string): BlendAnimationNodeBuilder;
  outputEnabled(value: boolean): BlendAnimationNodeBuilder;
  outputEnabledBind(expr: string): BlendAnimationNodeBuilder;
  source1(value: QmlValue): BlendAnimationNodeBuilder;
  source1Bind(expr: string): BlendAnimationNodeBuilder;
  source2(value: QmlValue): BlendAnimationNodeBuilder;
  source2Bind(expr: string): BlendAnimationNodeBuilder;
  weight(value: number): BlendAnimationNodeBuilder;
  weightBind(expr: string): BlendAnimationNodeBuilder;
  onFrameDataChanged(handler: DslSignalHandlerValue): BlendAnimationNodeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): BlendAnimationNodeBuilder;
  onOutputEnabledChanged(handler: DslSignalHandlerValue): BlendAnimationNodeBuilder;
  onSource1Changed(handler: DslSignalHandlerValue): BlendAnimationNodeBuilder;
  onSource2Changed(handler: DslSignalHandlerValue): BlendAnimationNodeBuilder;
  onWeightChanged(handler: DslSignalHandlerValue): BlendAnimationNodeBuilder;
}

const BLENDANIMATIONNODE_META: TypeMetadata = {
  typeName: 'BlendAnimationNode',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'outputEnabled', hasValue: true, hasBinding: true },
    { name: 'source1', hasValue: true, hasBinding: true },
    { name: 'source2', hasValue: true, hasBinding: true },
    { name: 'weight', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onFrameDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOutputEnabledChanged', paramCount: 0 },
    { handlerName: 'onSource1Changed', paramCount: 0 },
    { handlerName: 'onSource2Changed', paramCount: 0 },
    { handlerName: 'onWeightChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function BlendAnimationNode(): BlendAnimationNodeBuilder {
  return createFluentBuilder(
    'BlendAnimationNode',
    BLENDANIMATIONNODE_META,
  ) as unknown as BlendAnimationNodeBuilder;
}
