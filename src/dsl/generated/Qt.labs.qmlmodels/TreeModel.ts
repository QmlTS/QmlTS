// AUTO-GENERATED — DO NOT EDIT
// Type: TreeModel
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TreeModelBuilder {
  id(id: string): TreeModelBuilder;
  child(obj: QmlObjectBuilder): TreeModelBuilder;

  objectName(value: string): TreeModelBuilder;
  objectNameBind(expr: string): TreeModelBuilder;
  rows(value: QmlValue): TreeModelBuilder;
  rowsBind(expr: string): TreeModelBuilder;
  onColumnCountChanged(body: string): TreeModelBuilder;
  onColumnsAboutToBeInserted(body: string): TreeModelBuilder;
  onColumnsAboutToBeMoved(body: string): TreeModelBuilder;
  onColumnsAboutToBeRemoved(body: string): TreeModelBuilder;
  onColumnsInserted(body: string): TreeModelBuilder;
  onColumnsMoved(body: string): TreeModelBuilder;
  onColumnsRemoved(body: string): TreeModelBuilder;
  onDataChanged(body: string): TreeModelBuilder;
  onHeaderDataChanged(body: string): TreeModelBuilder;
  onLayoutAboutToBeChanged(body: string): TreeModelBuilder;
  onLayoutChanged(body: string): TreeModelBuilder;
  onModelAboutToBeReset(body: string): TreeModelBuilder;
  onModelReset(body: string): TreeModelBuilder;
  onObjectNameChanged(body: string): TreeModelBuilder;
  onRowsAboutToBeInserted(body: string): TreeModelBuilder;
  onRowsAboutToBeMoved(body: string): TreeModelBuilder;
  onRowsAboutToBeRemoved(body: string): TreeModelBuilder;
  onRowsChanged(body: string): TreeModelBuilder;
  onRowsInserted(body: string): TreeModelBuilder;
  onRowsMoved(body: string): TreeModelBuilder;
  onRowsRemoved(body: string): TreeModelBuilder;
}

const TREEMODEL_META: TypeMetadata = {
  typeName: 'TreeModel',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rows', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnCountChanged', paramCount: 0 },
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsChanged', paramCount: 0 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'columns',
};

export function TreeModel(): TreeModelBuilder {
  return createFluentBuilder('TreeModel', TREEMODEL_META) as unknown as TreeModelBuilder;
}

export namespace TreeModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('TreeModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken('TreeModel', 'CheckIndexOption', 'IndexIsValid');
    export const DoNotUseParent = createEnumToken(
      'TreeModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'TreeModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'TreeModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'TreeModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'TreeModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
