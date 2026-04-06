// AUTO-GENERATED — DO NOT EDIT
// Type: InstanceModel
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface InstanceModelBuilder {
  id(id: string): InstanceModelBuilder;
  child(obj: QmlObjectBuilder): InstanceModelBuilder;
  children(...objs: QmlObjectBuilder[]): InstanceModelBuilder;

  instancingTable(value: QmlValue): InstanceModelBuilder;
  instancingTableBind(expr: string): InstanceModelBuilder;
  objectName(value: string): InstanceModelBuilder;
  objectNameBind(expr: string): InstanceModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onInstancingChanged(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): InstanceModelBuilder;
}

const INSTANCEMODEL_META: TypeMetadata = {
  typeName: 'InstanceModel',
  properties: [
    { name: 'instancingTable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onInstancingChanged', paramCount: 0 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
  ],
  grouped: [],
  attached: [],
};

export function InstanceModel(): InstanceModelBuilder {
  return createFluentBuilder(
    'InstanceModel',
    INSTANCEMODEL_META,
  ) as unknown as InstanceModelBuilder;
}

export namespace InstanceModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('InstanceModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken(
      'InstanceModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'InstanceModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'InstanceModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'InstanceModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'InstanceModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'InstanceModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
