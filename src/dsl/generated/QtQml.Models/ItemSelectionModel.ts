// AUTO-GENERATED — DO NOT EDIT
// Type: ItemSelectionModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { DelegateModelAttachedBuilder } from './QQmlDelegateModelAttached.js';
import type { ObjectModelAttachedBuilder } from './QQmlObjectModelAttached.js';
import type { PackageAttachedBuilder } from './QQuickPackageAttached.js';
export interface ItemSelectionModelBuilder {
  id(id: string): ItemSelectionModelBuilder;
  child(obj: QmlObjectBuilder): ItemSelectionModelBuilder;

  model(value: QmlValue): ItemSelectionModelBuilder;
  modelBind(expr: string): ItemSelectionModelBuilder;
  objectName(value: string): ItemSelectionModelBuilder;
  objectNameBind(expr: string): ItemSelectionModelBuilder;
  onCurrentChanged(
    handler: (current: QmlValue, previous: QmlValue) => void,
  ): ItemSelectionModelBuilder;
  onCurrentColumnChanged(
    handler: (current: QmlValue, previous: QmlValue) => void,
  ): ItemSelectionModelBuilder;
  onCurrentRowChanged(
    handler: (current: QmlValue, previous: QmlValue) => void,
  ): ItemSelectionModelBuilder;
  onModelChanged(handler: (model: QmlValue) => void): ItemSelectionModelBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ItemSelectionModelBuilder;
  onSelectionChanged(
    handler: (selected: QmlValue, deselected: QmlValue) => void,
  ): ItemSelectionModelBuilder;
  delegateModel(setup: (b: DelegateModelAttachedBuilder) => void): ItemSelectionModelBuilder;
  objectModel(setup: (b: ObjectModelAttachedBuilder) => void): ItemSelectionModelBuilder;
  package(setup: (b: PackageAttachedBuilder) => void): ItemSelectionModelBuilder;
}

export function ItemSelectionModel(): ItemSelectionModelBuilder {
  return new DslBuilderImpl('ItemSelectionModel') as unknown as ItemSelectionModelBuilder;
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
