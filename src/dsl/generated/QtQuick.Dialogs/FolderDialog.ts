// AUTO-GENERATED — DO NOT EDIT
// Type: FolderDialog
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface FolderDialogBuilder {
  id(id: string): FolderDialogBuilder;
  child(obj: QmlObjectBuilder): FolderDialogBuilder;

  acceptLabel(value: string): FolderDialogBuilder;
  acceptLabelBind(expr: string): FolderDialogBuilder;
  currentFolder(value: QmlUrl): FolderDialogBuilder;
  currentFolderBind(expr: string): FolderDialogBuilder;
  flags(value: QmlEnumToken): FolderDialogBuilder;
  flagsBind(expr: string): FolderDialogBuilder;
  modality(value: QmlEnumToken): FolderDialogBuilder;
  modalityBind(expr: string): FolderDialogBuilder;
  objectName(value: string): FolderDialogBuilder;
  objectNameBind(expr: string): FolderDialogBuilder;
  options(value: QmlEnumToken): FolderDialogBuilder;
  optionsBind(expr: string): FolderDialogBuilder;
  parentWindow(value: QmlValue): FolderDialogBuilder;
  parentWindowBind(expr: string): FolderDialogBuilder;
  popupType(value: QmlEnumToken): FolderDialogBuilder;
  popupTypeBind(expr: string): FolderDialogBuilder;
  rejectLabel(value: string): FolderDialogBuilder;
  rejectLabelBind(expr: string): FolderDialogBuilder;
  result(value: number): FolderDialogBuilder;
  resultBind(expr: string): FolderDialogBuilder;
  selectedFolder(value: QmlUrl): FolderDialogBuilder;
  selectedFolderBind(expr: string): FolderDialogBuilder;
  title(value: string): FolderDialogBuilder;
  titleBind(expr: string): FolderDialogBuilder;
  visible(value: boolean): FolderDialogBuilder;
  visibleBind(expr: string): FolderDialogBuilder;
  onAcceptLabelChanged(body: string): FolderDialogBuilder;
  onAccepted(body: string): FolderDialogBuilder;
  onCurrentFolderChanged(body: string): FolderDialogBuilder;
  onFlagsChanged(body: string): FolderDialogBuilder;
  onModalityChanged(body: string): FolderDialogBuilder;
  onObjectNameChanged(body: string): FolderDialogBuilder;
  onOptionsChanged(body: string): FolderDialogBuilder;
  onParentWindowChanged(body: string): FolderDialogBuilder;
  onPopupTypeChanged(body: string): FolderDialogBuilder;
  onRejectLabelChanged(body: string): FolderDialogBuilder;
  onRejected(body: string): FolderDialogBuilder;
  onResultChanged(body: string): FolderDialogBuilder;
  onSelectedFolderChanged(body: string): FolderDialogBuilder;
  onTitleChanged(body: string): FolderDialogBuilder;
  onVisibleChanged(body: string): FolderDialogBuilder;
}

const FOLDERDIALOG_META: TypeMetadata = {
  typeName: 'FolderDialog',
  properties: [
    { name: 'acceptLabel', hasValue: true, hasBinding: true },
    { name: 'currentFolder', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'options', hasValue: true, hasBinding: true },
    { name: 'parentWindow', hasValue: true, hasBinding: true },
    { name: 'popupType', hasValue: true, hasBinding: true },
    { name: 'rejectLabel', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'selectedFolder', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptLabelChanged', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onCurrentFolderChanged', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onModalityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptionsChanged', paramCount: 0 },
    { handlerName: 'onParentWindowChanged', paramCount: 0 },
    { handlerName: 'onPopupTypeChanged', paramCount: 0 },
    { handlerName: 'onRejectLabelChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onSelectedFolderChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function FolderDialog(): FolderDialogBuilder {
  return createFluentBuilder('FolderDialog', FOLDERDIALOG_META) as unknown as FolderDialogBuilder;
}

export namespace FolderDialog {
  export namespace StandardCode {
    export const Rejected = createEnumToken('FolderDialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('FolderDialog', 'StandardCode', 'Accepted');
  }
}
