// AUTO-GENERATED — DO NOT EDIT
// Type: ComputeCommand
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ComputeCommandBuilder {
  id(id: string): ComputeCommandBuilder;
  child(obj: QmlObjectBuilder): ComputeCommandBuilder;
  children(...objs: QmlObjectBuilder[]): ComputeCommandBuilder;

  enabled(value: boolean): ComputeCommandBuilder;
  enabledBind(expr: string): ComputeCommandBuilder;
  isShareable(value: boolean): ComputeCommandBuilder;
  isShareableBind(expr: string): ComputeCommandBuilder;
  objectName(value: string): ComputeCommandBuilder;
  objectNameBind(expr: string): ComputeCommandBuilder;
  parent(value: QmlValue): ComputeCommandBuilder;
  parentBind(expr: string): ComputeCommandBuilder;
  runType(value: QmlEnumToken): ComputeCommandBuilder;
  runTypeBind(expr: string): ComputeCommandBuilder;
  workGroupX(value: number): ComputeCommandBuilder;
  workGroupXBind(expr: string): ComputeCommandBuilder;
  workGroupY(value: number): ComputeCommandBuilder;
  workGroupYBind(expr: string): ComputeCommandBuilder;
  workGroupZ(value: number): ComputeCommandBuilder;
  workGroupZBind(expr: string): ComputeCommandBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onRunTypeChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onWorkGroupXChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onWorkGroupYChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
  onWorkGroupZChanged(handler: DslSignalHandlerValue): ComputeCommandBuilder;
}

const COMPUTECOMMAND_META: TypeMetadata = {
  typeName: 'ComputeCommand',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'runType', hasValue: true, hasBinding: true },
    { name: 'workGroupX', hasValue: true, hasBinding: true },
    { name: 'workGroupY', hasValue: true, hasBinding: true },
    { name: 'workGroupZ', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRunTypeChanged', paramCount: 0 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onWorkGroupXChanged', paramCount: 0 },
    { handlerName: 'onWorkGroupYChanged', paramCount: 0 },
    { handlerName: 'onWorkGroupZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ComputeCommand(): ComputeCommandBuilder {
  return createFluentBuilder(
    'ComputeCommand',
    COMPUTECOMMAND_META,
  ) as unknown as ComputeCommandBuilder;
}

export namespace ComputeCommand {
  export namespace RunType {
    export const Continuous = createEnumToken('ComputeCommand', 'RunType', 'Continuous');
    export const Manual = createEnumToken('ComputeCommand', 'RunType', 'Manual');
  }
}
