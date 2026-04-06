// AUTO-GENERATED — DO NOT EDIT
// Type: FolderListModel
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface FolderListModelBuilder {
  id(id: string): FolderListModelBuilder;
  child(obj: QmlObjectBuilder): FolderListModelBuilder;
  children(...objs: QmlObjectBuilder[]): FolderListModelBuilder;

  caseSensitive(value: boolean): FolderListModelBuilder;
  caseSensitiveBind(expr: string): FolderListModelBuilder;
  folder(value: QmlUrl): FolderListModelBuilder;
  folderBind(expr: string): FolderListModelBuilder;
  nameFilters(value: string[]): FolderListModelBuilder;
  nameFiltersBind(expr: string): FolderListModelBuilder;
  objectName(value: string): FolderListModelBuilder;
  objectNameBind(expr: string): FolderListModelBuilder;
  rootFolder(value: QmlUrl): FolderListModelBuilder;
  rootFolderBind(expr: string): FolderListModelBuilder;
  showDirs(value: boolean): FolderListModelBuilder;
  showDirsBind(expr: string): FolderListModelBuilder;
  showDirsFirst(value: boolean): FolderListModelBuilder;
  showDirsFirstBind(expr: string): FolderListModelBuilder;
  showDotAndDotDot(value: boolean): FolderListModelBuilder;
  showDotAndDotDotBind(expr: string): FolderListModelBuilder;
  showFiles(value: boolean): FolderListModelBuilder;
  showFilesBind(expr: string): FolderListModelBuilder;
  showHidden(value: boolean): FolderListModelBuilder;
  showHiddenBind(expr: string): FolderListModelBuilder;
  showOnlyReadable(value: boolean): FolderListModelBuilder;
  showOnlyReadableBind(expr: string): FolderListModelBuilder;
  sortCaseSensitive(value: boolean): FolderListModelBuilder;
  sortCaseSensitiveBind(expr: string): FolderListModelBuilder;
  sortField(value: QmlEnumToken): FolderListModelBuilder;
  sortFieldBind(expr: string): FolderListModelBuilder;
  sortReversed(value: boolean): FolderListModelBuilder;
  sortReversedBind(expr: string): FolderListModelBuilder;
  onCaseSensitiveChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onColumnsAboutToBeInserted(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onColumnsAboutToBeMoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onColumnsAboutToBeRemoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onColumnsInserted(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onColumnsMoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onColumnsRemoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onCountChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onDataChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onFolderChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onHeaderDataChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onLayoutAboutToBeChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onModelAboutToBeReset(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onModelReset(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onNameFilterChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRootFolderChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRowCountChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRowsAboutToBeInserted(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRowsAboutToBeMoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRowsAboutToBeRemoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRowsInserted(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRowsMoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onRowsRemoved(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onShowDirsChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onShowDirsFirstChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onShowDotAndDotDotChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onShowFilesChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onShowHiddenChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onShowOnlyReadableChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onSortCaseSensitiveChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onSortFieldChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onSortReversedChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): FolderListModelBuilder;
}

const FOLDERLISTMODEL_META: TypeMetadata = {
  typeName: 'FolderListModel',
  properties: [
    { name: 'caseSensitive', hasValue: true, hasBinding: true },
    { name: 'folder', hasValue: true, hasBinding: true },
    { name: 'nameFilters', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rootFolder', hasValue: true, hasBinding: true },
    { name: 'showDirs', hasValue: true, hasBinding: true },
    { name: 'showDirsFirst', hasValue: true, hasBinding: true },
    { name: 'showDotAndDotDot', hasValue: true, hasBinding: true },
    { name: 'showFiles', hasValue: true, hasBinding: true },
    { name: 'showHidden', hasValue: true, hasBinding: true },
    { name: 'showOnlyReadable', hasValue: true, hasBinding: true },
    { name: 'sortCaseSensitive', hasValue: true, hasBinding: true },
    { name: 'sortField', hasValue: true, hasBinding: true },
    { name: 'sortReversed', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCaseSensitiveChanged', paramCount: 0 },
    { handlerName: 'onColumnsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onColumnsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onColumnsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onColumnsInserted', paramCount: 3 },
    { handlerName: 'onColumnsMoved', paramCount: 5 },
    { handlerName: 'onColumnsRemoved', paramCount: 3 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDataChanged', paramCount: 3 },
    { handlerName: 'onFolderChanged', paramCount: 0 },
    { handlerName: 'onHeaderDataChanged', paramCount: 3 },
    { handlerName: 'onLayoutAboutToBeChanged', paramCount: 2 },
    { handlerName: 'onLayoutChanged', paramCount: 2 },
    { handlerName: 'onModelAboutToBeReset', paramCount: 0 },
    { handlerName: 'onModelReset', paramCount: 0 },
    { handlerName: 'onNameFilterChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRootFolderChanged', paramCount: 0 },
    { handlerName: 'onRowCountChanged', paramCount: 0 },
    { handlerName: 'onRowsAboutToBeInserted', paramCount: 3 },
    { handlerName: 'onRowsAboutToBeMoved', paramCount: 5 },
    { handlerName: 'onRowsAboutToBeRemoved', paramCount: 3 },
    { handlerName: 'onRowsInserted', paramCount: 3 },
    { handlerName: 'onRowsMoved', paramCount: 5 },
    { handlerName: 'onRowsRemoved', paramCount: 3 },
    { handlerName: 'onShowDirsChanged', paramCount: 0 },
    { handlerName: 'onShowDirsFirstChanged', paramCount: 0 },
    { handlerName: 'onShowDotAndDotDotChanged', paramCount: 0 },
    { handlerName: 'onShowFilesChanged', paramCount: 0 },
    { handlerName: 'onShowHiddenChanged', paramCount: 0 },
    { handlerName: 'onShowOnlyReadableChanged', paramCount: 0 },
    { handlerName: 'onSortCaseSensitiveChanged', paramCount: 0 },
    { handlerName: 'onSortFieldChanged', paramCount: 0 },
    { handlerName: 'onSortReversedChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function FolderListModel(): FolderListModelBuilder {
  return createFluentBuilder(
    'FolderListModel',
    FOLDERLISTMODEL_META,
  ) as unknown as FolderListModelBuilder;
}

export namespace FolderListModel {
  export namespace CheckIndexOption {
    export const NoOption = createEnumToken('FolderListModel', 'CheckIndexOption', 'NoOption');
    export const IndexIsValid = createEnumToken(
      'FolderListModel',
      'CheckIndexOption',
      'IndexIsValid',
    );
    export const DoNotUseParent = createEnumToken(
      'FolderListModel',
      'CheckIndexOption',
      'DoNotUseParent',
    );
    export const ParentIsInvalid = createEnumToken(
      'FolderListModel',
      'CheckIndexOption',
      'ParentIsInvalid',
    );
  }
  export namespace LayoutChangeHint {
    export const NoLayoutChangeHint = createEnumToken(
      'FolderListModel',
      'LayoutChangeHint',
      'NoLayoutChangeHint',
    );
    export const VerticalSortHint = createEnumToken(
      'FolderListModel',
      'LayoutChangeHint',
      'VerticalSortHint',
    );
    export const HorizontalSortHint = createEnumToken(
      'FolderListModel',
      'LayoutChangeHint',
      'HorizontalSortHint',
    );
  }
  export namespace SortField {
    export const Unsorted = createEnumToken('FolderListModel', 'SortField', 'Unsorted');
    export const Name = createEnumToken('FolderListModel', 'SortField', 'Name');
    export const Time = createEnumToken('FolderListModel', 'SortField', 'Time');
    export const Size = createEnumToken('FolderListModel', 'SortField', 'Size');
    export const Type = createEnumToken('FolderListModel', 'SortField', 'Type');
  }
  export namespace Status {
    export const Null = createEnumToken('FolderListModel', 'Status', 'Null');
    export const Ready = createEnumToken('FolderListModel', 'Status', 'Ready');
    export const Loading = createEnumToken('FolderListModel', 'Status', 'Loading');
  }
}
