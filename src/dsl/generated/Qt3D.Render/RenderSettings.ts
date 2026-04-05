// AUTO-GENERATED — DO NOT EDIT
// Type: RenderSettings
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { FrameGraphNodeBuilder } from './FrameGraphNode.js';
export interface RenderSettingsBuilder {
  id(id: string): RenderSettingsBuilder;
  child(obj: QmlObjectBuilder): RenderSettingsBuilder;

  activeFrameGraph(value: FrameGraphNodeBuilder): RenderSettingsBuilder;
  activeFrameGraphBind(expr: string): RenderSettingsBuilder;
  enabled(value: boolean): RenderSettingsBuilder;
  enabledBind(expr: string): RenderSettingsBuilder;
  isShareable(value: boolean): RenderSettingsBuilder;
  isShareableBind(expr: string): RenderSettingsBuilder;
  objectName(value: string): RenderSettingsBuilder;
  objectNameBind(expr: string): RenderSettingsBuilder;
  parent(value: QmlValue): RenderSettingsBuilder;
  parentBind(expr: string): RenderSettingsBuilder;
  renderPolicy(value: QmlEnumToken): RenderSettingsBuilder;
  renderPolicyBind(expr: string): RenderSettingsBuilder;
  onActiveFrameGraphChanged(body: string): RenderSettingsBuilder;
  onAddedToEntity(body: string): RenderSettingsBuilder;
  onEnabledChanged(body: string): RenderSettingsBuilder;
  onNodeDestroyed(body: string): RenderSettingsBuilder;
  onObjectNameChanged(body: string): RenderSettingsBuilder;
  onParentChanged(body: string): RenderSettingsBuilder;
  onRemovedFromEntity(body: string): RenderSettingsBuilder;
  onRenderPolicyChanged(body: string): RenderSettingsBuilder;
  onShareableChanged(body: string): RenderSettingsBuilder;
}

const RENDERSETTINGS_META: TypeMetadata = {
  typeName: 'RenderSettings',
  properties: [
    { name: 'activeFrameGraph', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderPolicy', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFrameGraphChanged', paramCount: 1 },
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRenderPolicyChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'activeFrameGraph',
};

export function RenderSettings(): RenderSettingsBuilder {
  return createFluentBuilder('RenderSettings', RENDERSETTINGS_META) as unknown as RenderSettingsBuilder;
}

export namespace RenderSettings {
  export namespace RenderPolicy {
    export const OnDemand = createEnumToken('RenderSettings', 'RenderPolicy', 'OnDemand');
    export const Always = createEnumToken('RenderSettings', 'RenderPolicy', 'Always');
  }
}
