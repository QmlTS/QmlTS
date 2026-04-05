// AUTO-GENERATED — DO NOT EDIT
// Type: AlphaCoverage
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AlphaCoverageBuilder {
  id(id: string): AlphaCoverageBuilder;
  child(obj: QmlObjectBuilder): AlphaCoverageBuilder;

  enabled(value: boolean): AlphaCoverageBuilder;
  enabledBind(expr: string): AlphaCoverageBuilder;
  objectName(value: string): AlphaCoverageBuilder;
  objectNameBind(expr: string): AlphaCoverageBuilder;
  parent(value: QmlValue): AlphaCoverageBuilder;
  parentBind(expr: string): AlphaCoverageBuilder;
  onEnabledChanged(body: string): AlphaCoverageBuilder;
  onNodeDestroyed(body: string): AlphaCoverageBuilder;
  onObjectNameChanged(body: string): AlphaCoverageBuilder;
  onParentChanged(body: string): AlphaCoverageBuilder;
}

const ALPHACOVERAGE_META: TypeMetadata = {
  typeName: 'AlphaCoverage',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AlphaCoverage(): AlphaCoverageBuilder {
  return createFluentBuilder(
    'AlphaCoverage',
    ALPHACOVERAGE_META,
  ) as unknown as AlphaCoverageBuilder;
}
