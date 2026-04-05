// AUTO-GENERATED — DO NOT EDIT
// Type: FileDialog
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { SelectedNameFilterBuilder } from './QQuickLabsPlatformFileNameFilter.js';
export interface FileDialogBuilder {
  id(id: string): FileDialogBuilder;
  child(obj: QmlObjectBuilder): FileDialogBuilder;

  acceptLabel(value: string): FileDialogBuilder;
  acceptLabelBind(expr: string): FileDialogBuilder;
  currentFile(value: QmlUrl): FileDialogBuilder;
  currentFileBind(expr: string): FileDialogBuilder;
  currentFiles(value: QmlUrl): FileDialogBuilder;
  currentFilesBind(expr: string): FileDialogBuilder;
  defaultSuffix(value: string): FileDialogBuilder;
  defaultSuffixBind(expr: string): FileDialogBuilder;
  file(value: QmlUrl): FileDialogBuilder;
  fileBind(expr: string): FileDialogBuilder;
  fileMode(value: QmlEnumToken): FileDialogBuilder;
  fileModeBind(expr: string): FileDialogBuilder;
  files(value: QmlUrl): FileDialogBuilder;
  filesBind(expr: string): FileDialogBuilder;
  flags(value: QmlEnumToken): FileDialogBuilder;
  flagsBind(expr: string): FileDialogBuilder;
  folder(value: QmlUrl): FileDialogBuilder;
  folderBind(expr: string): FileDialogBuilder;
  modality(value: QmlEnumToken): FileDialogBuilder;
  modalityBind(expr: string): FileDialogBuilder;
  nameFilters(value: string[]): FileDialogBuilder;
  nameFiltersBind(expr: string): FileDialogBuilder;
  objectName(value: string): FileDialogBuilder;
  objectNameBind(expr: string): FileDialogBuilder;
  options(value: QmlEnumToken): FileDialogBuilder;
  optionsBind(expr: string): FileDialogBuilder;
  parentWindow(value: QmlValue): FileDialogBuilder;
  parentWindowBind(expr: string): FileDialogBuilder;
  rejectLabel(value: string): FileDialogBuilder;
  rejectLabelBind(expr: string): FileDialogBuilder;
  result(value: number): FileDialogBuilder;
  resultBind(expr: string): FileDialogBuilder;
  title(value: string): FileDialogBuilder;
  titleBind(expr: string): FileDialogBuilder;
  visible(value: boolean): FileDialogBuilder;
  visibleBind(expr: string): FileDialogBuilder;
  onAcceptLabelChanged(body: string): FileDialogBuilder;
  onAccepted(body: string): FileDialogBuilder;
  onCurrentFileChanged(body: string): FileDialogBuilder;
  onCurrentFilesChanged(body: string): FileDialogBuilder;
  onDefaultSuffixChanged(body: string): FileDialogBuilder;
  onFileChanged(body: string): FileDialogBuilder;
  onFileModeChanged(body: string): FileDialogBuilder;
  onFilesChanged(body: string): FileDialogBuilder;
  onFlagsChanged(body: string): FileDialogBuilder;
  onFolderChanged(body: string): FileDialogBuilder;
  onModalityChanged(body: string): FileDialogBuilder;
  onNameFiltersChanged(body: string): FileDialogBuilder;
  onObjectNameChanged(body: string): FileDialogBuilder;
  onOptionsChanged(body: string): FileDialogBuilder;
  onParentWindowChanged(body: string): FileDialogBuilder;
  onRejectLabelChanged(body: string): FileDialogBuilder;
  onRejected(body: string): FileDialogBuilder;
  onResultChanged(body: string): FileDialogBuilder;
  onTitleChanged(body: string): FileDialogBuilder;
  onVisibleChanged(body: string): FileDialogBuilder;
  selectedNameFilter(setup: (b: SelectedNameFilterBuilder) => void): FileDialogBuilder;
}

const FILEDIALOG_META: TypeMetadata = {
  typeName: 'FileDialog',
  properties: [
    { name: 'acceptLabel', hasValue: true, hasBinding: true },
    { name: 'currentFile', hasValue: true, hasBinding: true },
    { name: 'currentFiles', hasValue: true, hasBinding: true },
    { name: 'defaultSuffix', hasValue: true, hasBinding: true },
    { name: 'file', hasValue: true, hasBinding: true },
    { name: 'fileMode', hasValue: true, hasBinding: true },
    { name: 'files', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'folder', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'nameFilters', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'options', hasValue: true, hasBinding: true },
    { name: 'parentWindow', hasValue: true, hasBinding: true },
    { name: 'rejectLabel', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptLabelChanged', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onCurrentFileChanged', paramCount: 0 },
    { handlerName: 'onCurrentFilesChanged', paramCount: 0 },
    { handlerName: 'onDefaultSuffixChanged', paramCount: 0 },
    { handlerName: 'onFileChanged', paramCount: 0 },
    { handlerName: 'onFileModeChanged', paramCount: 0 },
    { handlerName: 'onFilesChanged', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onFolderChanged', paramCount: 0 },
    { handlerName: 'onModalityChanged', paramCount: 0 },
    { handlerName: 'onNameFiltersChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptionsChanged', paramCount: 0 },
    { handlerName: 'onParentWindowChanged', paramCount: 0 },
    { handlerName: 'onRejectLabelChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'selectedNameFilter',
      groupName: 'selectedNameFilter',
      properties: [
        { name: 'index', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function FileDialog(): FileDialogBuilder {
  return createFluentBuilder('FileDialog', FILEDIALOG_META) as unknown as FileDialogBuilder;
}

export namespace FileDialog {
  export namespace FileMode {
    export const OpenFile = createEnumToken('FileDialog', 'FileMode', 'OpenFile');
    export const OpenFiles = createEnumToken('FileDialog', 'FileMode', 'OpenFiles');
    export const SaveFile = createEnumToken('FileDialog', 'FileMode', 'SaveFile');
  }
  export namespace StandardCode {
    export const Rejected = createEnumToken('FileDialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('FileDialog', 'StandardCode', 'Accepted');
  }
}
