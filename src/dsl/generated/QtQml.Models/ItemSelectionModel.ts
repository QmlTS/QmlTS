// AUTO-GENERATED — DO NOT EDIT
// Type: ItemSelectionModel
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ItemSelectionModelBuilder {
  id(id: string): ItemSelectionModelBuilder;
  child(obj: QmlObjectBuilder): ItemSelectionModelBuilder;
  children(...objs: QmlObjectBuilder[]): ItemSelectionModelBuilder;

  model(value: QmlValue): ItemSelectionModelBuilder;
  modelBind(expr: string): ItemSelectionModelBuilder;
  objectName(value: string): ItemSelectionModelBuilder;
  objectNameBind(expr: string): ItemSelectionModelBuilder;
  onCurrentChanged(handler: DslSignalHandlerValue): ItemSelectionModelBuilder;
  onCurrentColumnChanged(handler: DslSignalHandlerValue): ItemSelectionModelBuilder;
  onCurrentRowChanged(handler: DslSignalHandlerValue): ItemSelectionModelBuilder;
  onModelChanged(handler: DslSignalHandlerValue): ItemSelectionModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ItemSelectionModelBuilder;
  onSelectionChanged(handler: DslSignalHandlerValue): ItemSelectionModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ItemSelectionModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ItemSelectionModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ItemSelectionModelBuilder;
}

const ITEMSELECTIONMODEL_META: TypeMetadata = {
  typeName: 'ItemSelectionModel',
  properties: [
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCurrentChanged', paramCount: 2 },
    { handlerName: 'onCurrentColumnChanged', paramCount: 2 },
    { handlerName: 'onCurrentRowChanged', paramCount: 2 },
    { handlerName: 'onModelChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSelectionChanged', paramCount: 2 },
  ],
  grouped: [],
  attached: [
    {
      methodName: 'delegateModel',
      attachedTypeName: 'DelegateModel',
      properties: [
        { name: 'groups', hasValue: true, hasBinding: true },
        { name: 'inItems', hasValue: true, hasBinding: true },
        { name: 'inPersistedItems', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupsChanged', paramCount: 0 },
        { handlerName: 'onUnresolvedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'objectModel',
      attachedTypeName: 'ObjectModel',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'package',
      attachedTypeName: 'Package',
      properties: [
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
    },
  ],
};

export function ItemSelectionModel(): ItemSelectionModelBuilder {
  return createFluentBuilder(
    'ItemSelectionModel',
    ITEMSELECTIONMODEL_META,
  ) as unknown as ItemSelectionModelBuilder;
}

export namespace ItemSelectionModel {
  export namespace SelectionFlags {
    export const NoUpdate = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'NoUpdate');
    export const Clear = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'Clear');
    export const Select = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'Select');
    export const Deselect = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'Deselect');
    export const Toggle = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'Toggle');
    export const Current = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'Current');
    export const Rows = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'Rows');
    export const Columns = createEnumToken('ItemSelectionModel', 'SelectionFlags', 'Columns');
    export const SelectCurrent = createEnumToken(
      'ItemSelectionModel',
      'SelectionFlags',
      'SelectCurrent',
    );
    export const ToggleCurrent = createEnumToken(
      'ItemSelectionModel',
      'SelectionFlags',
      'ToggleCurrent',
    );
    export const ClearAndSelect = createEnumToken(
      'ItemSelectionModel',
      'SelectionFlags',
      'ClearAndSelect',
    );
  }
}
