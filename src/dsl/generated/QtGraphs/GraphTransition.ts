// AUTO-GENERATED — DO NOT EDIT
// Type: GraphTransition
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface GraphTransitionBuilder {
  id(id: string): GraphTransitionBuilder;
  child(obj: QmlObjectBuilder): GraphTransitionBuilder;

  objectName(value: string): GraphTransitionBuilder;
  objectNameBind(expr: string): GraphTransitionBuilder;
  onObjectNameChanged(body: string): GraphTransitionBuilder;
}

const GRAPHTRANSITION_META: TypeMetadata = {
  typeName: 'GraphTransition',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
  defaultProperty: 'animations',
};

export function GraphTransition(): GraphTransitionBuilder {
  return createFluentBuilder(
    'GraphTransition',
    GRAPHTRANSITION_META,
  ) as unknown as GraphTransitionBuilder;
}

export namespace GraphTransition {
  export namespace TransitionType {
    export const None = createEnumToken('GraphTransition', 'TransitionType', 'None');
    export const PointAdded = createEnumToken('GraphTransition', 'TransitionType', 'PointAdded');
    export const PointReplaced = createEnumToken(
      'GraphTransition',
      'TransitionType',
      'PointReplaced',
    );
    export const PointRemoved = createEnumToken(
      'GraphTransition',
      'TransitionType',
      'PointRemoved',
    );
  }
}
