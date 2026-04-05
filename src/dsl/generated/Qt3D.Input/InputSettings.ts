// AUTO-GENERATED — DO NOT EDIT
// Type: InputSettings
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface InputSettingsBuilder {
  id(id: string): InputSettingsBuilder;
  child(obj: QmlObjectBuilder): InputSettingsBuilder;

  enabled(value: boolean): InputSettingsBuilder;
  enabledBind(expr: string): InputSettingsBuilder;
  eventSource(value: QtObjectBuilder): InputSettingsBuilder;
  eventSourceBind(expr: string): InputSettingsBuilder;
  isShareable(value: boolean): InputSettingsBuilder;
  isShareableBind(expr: string): InputSettingsBuilder;
  objectName(value: string): InputSettingsBuilder;
  objectNameBind(expr: string): InputSettingsBuilder;
  parent(value: QmlValue): InputSettingsBuilder;
  parentBind(expr: string): InputSettingsBuilder;
  onAddedToEntity(body: string): InputSettingsBuilder;
  onEnabledChanged(body: string): InputSettingsBuilder;
  onEventSourceChanged(body: string): InputSettingsBuilder;
  onNodeDestroyed(body: string): InputSettingsBuilder;
  onObjectNameChanged(body: string): InputSettingsBuilder;
  onParentChanged(body: string): InputSettingsBuilder;
  onRemovedFromEntity(body: string): InputSettingsBuilder;
  onShareableChanged(body: string): InputSettingsBuilder;
}

const INPUTSETTINGS_META: TypeMetadata = {
  typeName: 'InputSettings',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'eventSource', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEventSourceChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function InputSettings(): InputSettingsBuilder {
  return createFluentBuilder(
    'InputSettings',
    INPUTSETTINGS_META,
  ) as unknown as InputSettingsBuilder;
}
