// AUTO-GENERATED — DO NOT EDIT
// Type: InstanceModel
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface InstanceModelBuilder {
  id(id: string): InstanceModelBuilder;
  child(obj: QmlObjectBuilder): InstanceModelBuilder;

  instancingTable(value: QmlValue): InstanceModelBuilder;
  instancingTableBind(expr: string): InstanceModelBuilder;
  objectName(value: string): InstanceModelBuilder;
  objectNameBind(expr: string): InstanceModelBuilder;
  onColumnsAboutToBeInserted(body: string): InstanceModelBuilder;
  onColumnsAboutToBeMoved(body: string): InstanceModelBuilder;
  onColumnsAboutToBeRemoved(body: string): InstanceModelBuilder;
  onColumnsInserted(body: string): InstanceModelBuilder;
  onColumnsMoved(body: string): InstanceModelBuilder;
  onColumnsRemoved(body: string): InstanceModelBuilder;
  onDataChanged(body: string): InstanceModelBuilder;
  onHeaderDataChanged(body: string): InstanceModelBuilder;
  onInstancingChanged(body: string): InstanceModelBuilder;
  onLayoutAboutToBeChanged(body: string): InstanceModelBuilder;
  onLayoutChanged(body: string): InstanceModelBuilder;
  onModelAboutToBeReset(body: string): InstanceModelBuilder;
  onModelReset(body: string): InstanceModelBuilder;
  onObjectNameChanged(body: string): InstanceModelBuilder;
  onRowsAboutToBeInserted(body: string): InstanceModelBuilder;
  onRowsAboutToBeMoved(body: string): InstanceModelBuilder;
  onRowsAboutToBeRemoved(body: string): InstanceModelBuilder;
  onRowsInserted(body: string): InstanceModelBuilder;
  onRowsMoved(body: string): InstanceModelBuilder;
  onRowsRemoved(body: string): InstanceModelBuilder;
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
  grouped: [
  ],
  attached: [
  ],
};

export function InstanceModel(): InstanceModelBuilder {
  return createFluentBuilder('InstanceModel', INSTANCEMODEL_META) as unknown as InstanceModelBuilder;
}

export namespace InstanceModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('InstanceModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('InstanceModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken('InstanceModel', 'CheckIndexOption', 'DoNotUseParent');
    export const ParentIsInvalid = createEnumToken('InstanceModel', 'CheckIndexOption', 'ParentIsInvalid');
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken('InstanceModel', 'LayoutChangeHint', 'NoLayoutChangeHint');
    export const VerticalSortHint = createEnumToken('InstanceModel', 'LayoutChangeHint', 'VerticalSortHint');
    export const HorizontalSortHint = createEnumToken('InstanceModel', 'LayoutChangeHint', 'HorizontalSortHint');
  }
}
