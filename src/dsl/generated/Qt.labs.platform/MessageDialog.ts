// AUTO-GENERATED — DO NOT EDIT
// Type: MessageDialog
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface MessageDialogBuilder {
  id(id: string): MessageDialogBuilder;
  child(obj: QmlObjectBuilder): MessageDialogBuilder;

  buttons(value: QmlEnumToken): MessageDialogBuilder;
  buttonsBind(expr: string): MessageDialogBuilder;
  detailedText(value: string): MessageDialogBuilder;
  detailedTextBind(expr: string): MessageDialogBuilder;
  flags(value: QmlEnumToken): MessageDialogBuilder;
  flagsBind(expr: string): MessageDialogBuilder;
  informativeText(value: string): MessageDialogBuilder;
  informativeTextBind(expr: string): MessageDialogBuilder;
  modality(value: QmlEnumToken): MessageDialogBuilder;
  modalityBind(expr: string): MessageDialogBuilder;
  objectName(value: string): MessageDialogBuilder;
  objectNameBind(expr: string): MessageDialogBuilder;
  parentWindow(value: QmlValue): MessageDialogBuilder;
  parentWindowBind(expr: string): MessageDialogBuilder;
  result(value: number): MessageDialogBuilder;
  resultBind(expr: string): MessageDialogBuilder;
  text(value: string): MessageDialogBuilder;
  textBind(expr: string): MessageDialogBuilder;
  title(value: string): MessageDialogBuilder;
  titleBind(expr: string): MessageDialogBuilder;
  visible(value: boolean): MessageDialogBuilder;
  visibleBind(expr: string): MessageDialogBuilder;
  onAbortClicked(body: string): MessageDialogBuilder;
  onAccepted(body: string): MessageDialogBuilder;
  onApplyClicked(body: string): MessageDialogBuilder;
  onButtonsChanged(body: string): MessageDialogBuilder;
  onCancelClicked(body: string): MessageDialogBuilder;
  onClicked(body: string): MessageDialogBuilder;
  onCloseClicked(body: string): MessageDialogBuilder;
  onDetailedTextChanged(body: string): MessageDialogBuilder;
  onDiscardClicked(body: string): MessageDialogBuilder;
  onFlagsChanged(body: string): MessageDialogBuilder;
  onHelpClicked(body: string): MessageDialogBuilder;
  onIgnoreClicked(body: string): MessageDialogBuilder;
  onInformativeTextChanged(body: string): MessageDialogBuilder;
  onModalityChanged(body: string): MessageDialogBuilder;
  onNoClicked(body: string): MessageDialogBuilder;
  onNoToAllClicked(body: string): MessageDialogBuilder;
  onObjectNameChanged(body: string): MessageDialogBuilder;
  onOkClicked(body: string): MessageDialogBuilder;
  onOpenClicked(body: string): MessageDialogBuilder;
  onParentWindowChanged(body: string): MessageDialogBuilder;
  onRejected(body: string): MessageDialogBuilder;
  onResetClicked(body: string): MessageDialogBuilder;
  onRestoreDefaultsClicked(body: string): MessageDialogBuilder;
  onResultChanged(body: string): MessageDialogBuilder;
  onRetryClicked(body: string): MessageDialogBuilder;
  onSaveAllClicked(body: string): MessageDialogBuilder;
  onSaveClicked(body: string): MessageDialogBuilder;
  onTextChanged(body: string): MessageDialogBuilder;
  onTitleChanged(body: string): MessageDialogBuilder;
  onVisibleChanged(body: string): MessageDialogBuilder;
  onYesClicked(body: string): MessageDialogBuilder;
  onYesToAllClicked(body: string): MessageDialogBuilder;
}

const MESSAGEDIALOG_META: TypeMetadata = {
  typeName: 'MessageDialog',
  properties: [
    { name: 'buttons', hasValue: true, hasBinding: true },
    { name: 'detailedText', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'informativeText', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parentWindow', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAbortClicked', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onApplyClicked', paramCount: 0 },
    { handlerName: 'onButtonsChanged', paramCount: 0 },
    { handlerName: 'onCancelClicked', paramCount: 0 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onCloseClicked', paramCount: 0 },
    { handlerName: 'onDetailedTextChanged', paramCount: 0 },
    { handlerName: 'onDiscardClicked', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onHelpClicked', paramCount: 0 },
    { handlerName: 'onIgnoreClicked', paramCount: 0 },
    { handlerName: 'onInformativeTextChanged', paramCount: 0 },
    { handlerName: 'onModalityChanged', paramCount: 0 },
    { handlerName: 'onNoClicked', paramCount: 0 },
    { handlerName: 'onNoToAllClicked', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOkClicked', paramCount: 0 },
    { handlerName: 'onOpenClicked', paramCount: 0 },
    { handlerName: 'onParentWindowChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onResetClicked', paramCount: 0 },
    { handlerName: 'onRestoreDefaultsClicked', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onRetryClicked', paramCount: 0 },
    { handlerName: 'onSaveAllClicked', paramCount: 0 },
    { handlerName: 'onSaveClicked', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onYesClicked', paramCount: 0 },
    { handlerName: 'onYesToAllClicked', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function MessageDialog(): MessageDialogBuilder {
  return createFluentBuilder(
    'MessageDialog',
    MESSAGEDIALOG_META,
  ) as unknown as MessageDialogBuilder;
}

export namespace MessageDialog {
  export namespace StandardCode {
    export const Rejected = createEnumToken('MessageDialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('MessageDialog', 'StandardCode', 'Accepted');
  }
}
