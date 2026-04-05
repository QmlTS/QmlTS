// AUTO-GENERATED — DO NOT EDIT
// Type: XrSpatialAnchorListModel
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface XrSpatialAnchorListModelBuilder {
  id(id: string): XrSpatialAnchorListModelBuilder;
  child(obj: QmlObjectBuilder): XrSpatialAnchorListModelBuilder;

  classificationFilter(value: QmlEnumToken): XrSpatialAnchorListModelBuilder;
  classificationFilterBind(expr: string): XrSpatialAnchorListModelBuilder;
  classificationStringFilter(value: string[]): XrSpatialAnchorListModelBuilder;
  classificationStringFilterBind(expr: string): XrSpatialAnchorListModelBuilder;
  filterMode(value: QmlEnumToken): XrSpatialAnchorListModelBuilder;
  filterModeBind(expr: string): XrSpatialAnchorListModelBuilder;
  identifierFilter(value: string[]): XrSpatialAnchorListModelBuilder;
  identifierFilterBind(expr: string): XrSpatialAnchorListModelBuilder;
  objectName(value: string): XrSpatialAnchorListModelBuilder;
  objectNameBind(expr: string): XrSpatialAnchorListModelBuilder;
  onClassificationFilterChanged(body: string): XrSpatialAnchorListModelBuilder;
  onClassificationStringFilterChanged(body: string): XrSpatialAnchorListModelBuilder;
  onColumnsAboutToBeInserted(body: string): XrSpatialAnchorListModelBuilder;
  onColumnsAboutToBeMoved(body: string): XrSpatialAnchorListModelBuilder;
  onColumnsAboutToBeRemoved(body: string): XrSpatialAnchorListModelBuilder;
  onColumnsInserted(body: string): XrSpatialAnchorListModelBuilder;
  onColumnsMoved(body: string): XrSpatialAnchorListModelBuilder;
  onColumnsRemoved(body: string): XrSpatialAnchorListModelBuilder;
  onDataChanged(body: string): XrSpatialAnchorListModelBuilder;
  onFilterModeChanged(body: string): XrSpatialAnchorListModelBuilder;
  onHeaderDataChanged(body: string): XrSpatialAnchorListModelBuilder;
  onIdentifierFilterChanged(body: string): XrSpatialAnchorListModelBuilder;
  onLayoutAboutToBeChanged(body: string): XrSpatialAnchorListModelBuilder;
  onLayoutChanged(body: string): XrSpatialAnchorListModelBuilder;
  onModelAboutToBeReset(body: string): XrSpatialAnchorListModelBuilder;
  onModelReset(body: string): XrSpatialAnchorListModelBuilder;
  onObjectNameChanged(body: string): XrSpatialAnchorListModelBuilder;
  onRowsAboutToBeInserted(body: string): XrSpatialAnchorListModelBuilder;
  onRowsAboutToBeMoved(body: string): XrSpatialAnchorListModelBuilder;
  onRowsAboutToBeRemoved(body: string): XrSpatialAnchorListModelBuilder;
  onRowsInserted(body: string): XrSpatialAnchorListModelBuilder;
  onRowsMoved(body: string): XrSpatialAnchorListModelBuilder;
  onRowsRemoved(body: string): XrSpatialAnchorListModelBuilder;
}

const XRSPATIALANCHORLISTMODEL_META: TypeMetadata = {
  typeName: 'XrSpatialAnchorListModel',
  properties: [
    { name: 'classificationFilter', hasValue: true, hasBinding: true },
    { name: 'classificationStringFilter', hasValue: true, hasBinding: true },
    { name: 'filterMode', hasValue: true, hasBinding: true },
    { name: 'identifierFilter', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onClassificationFilterChanged', paramCount: 0 },
    { handlerName: 'onClassificationStringFilterChanged', paramCount: 0 },
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onFilterModeChanged', paramCount: 0 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onIdentifierFilterChanged', paramCount: 0 },
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

export function XrSpatialAnchorListModel(): XrSpatialAnchorListModelBuilder {
  return createFluentBuilder(
    'XrSpatialAnchorListModel',
    XRSPATIALANCHORLISTMODEL_META,
  ) as unknown as XrSpatialAnchorListModelBuilder;
}

export namespace XrSpatialAnchorListModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken(
      'XrSpatialAnchorListModel',
      'CheckIndexOption',
      'NoOption',
    );
    export const IndexIsValid = createEnumToken(
      'XrSpatialAnchorListModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'XrSpatialAnchorListModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'XrSpatialAnchorListModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace ClassificationFlag {
    export const Wall = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlag', 'Wall');
    export const Ceiling = createEnumToken(
      'XrSpatialAnchorListModel',
      'ClassificationFlag',
      'Ceiling',
    );
    export const Floor = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlag', 'Floor');
    export const Table = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlag', 'Table');
    export const Seat = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlag', 'Seat');
    export const Window = createEnumToken(
      'XrSpatialAnchorListModel',
      'ClassificationFlag',
      'Window',
    );
    export const Door = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlag', 'Door');
    export const Other = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlag', 'Other');
  }
  export namespace ClassificationFlags {
    export const Wall = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlags', 'Wall');
    export const Ceiling = createEnumToken(
      'XrSpatialAnchorListModel',
      'ClassificationFlags',
      'Ceiling',
    );
    export const Floor = createEnumToken(
      'XrSpatialAnchorListModel',
      'ClassificationFlags',
      'Floor',
    );
    export const Table = createEnumToken(
      'XrSpatialAnchorListModel',
      'ClassificationFlags',
      'Table',
    );
    export const Seat = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlags', 'Seat');
    export const Window = createEnumToken(
      'XrSpatialAnchorListModel',
      'ClassificationFlags',
      'Window',
    );
    export const Door = createEnumToken('XrSpatialAnchorListModel', 'ClassificationFlags', 'Door');
    export const Other = createEnumToken(
      'XrSpatialAnchorListModel',
      'ClassificationFlags',
      'Other',
    );
  }
  export namespace FilterMode {
    export const All = createEnumToken('XrSpatialAnchorListModel', 'FilterMode', 'All');
    export const Classification = createEnumToken(
      'XrSpatialAnchorListModel',
      'FilterMode',
      'Classification',
    );
    export const Identifier = createEnumToken(
      'XrSpatialAnchorListModel',
      'FilterMode',
      'Identifier',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'XrSpatialAnchorListModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'XrSpatialAnchorListModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'XrSpatialAnchorListModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
}
