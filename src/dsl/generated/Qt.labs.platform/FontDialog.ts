// AUTO-GENERATED — DO NOT EDIT
// Type: FontDialog
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface FontDialogBuilder {
  id(id: string): FontDialogBuilder;
  child(obj: QmlObjectBuilder): FontDialogBuilder;

  currentFont(value: QmlFont): FontDialogBuilder;
  currentFontBind(expr: string): FontDialogBuilder;
  flags(value: QmlEnumToken): FontDialogBuilder;
  flagsBind(expr: string): FontDialogBuilder;
  font(value: QmlFont): FontDialogBuilder;
  fontBind(expr: string): FontDialogBuilder;
  modality(value: QmlEnumToken): FontDialogBuilder;
  modalityBind(expr: string): FontDialogBuilder;
  objectName(value: string): FontDialogBuilder;
  objectNameBind(expr: string): FontDialogBuilder;
  options(value: QmlEnumToken): FontDialogBuilder;
  optionsBind(expr: string): FontDialogBuilder;
  parentWindow(value: QmlValue): FontDialogBuilder;
  parentWindowBind(expr: string): FontDialogBuilder;
  result(value: number): FontDialogBuilder;
  resultBind(expr: string): FontDialogBuilder;
  title(value: string): FontDialogBuilder;
  titleBind(expr: string): FontDialogBuilder;
  visible(value: boolean): FontDialogBuilder;
  visibleBind(expr: string): FontDialogBuilder;
  onAccepted(body: string): FontDialogBuilder;
  onCurrentFontChanged(body: string): FontDialogBuilder;
  onFlagsChanged(body: string): FontDialogBuilder;
  onFontChanged(body: string): FontDialogBuilder;
  onModalityChanged(body: string): FontDialogBuilder;
  onObjectNameChanged(body: string): FontDialogBuilder;
  onOptionsChanged(body: string): FontDialogBuilder;
  onParentWindowChanged(body: string): FontDialogBuilder;
  onRejected(body: string): FontDialogBuilder;
  onResultChanged(body: string): FontDialogBuilder;
  onTitleChanged(body: string): FontDialogBuilder;
  onVisibleChanged(body: string): FontDialogBuilder;
}

const FONTDIALOG_META: TypeMetadata = {
  typeName: 'FontDialog',
  properties: [
    { name: 'currentFont', hasValue: true, hasBinding: true },
    { name: 'flags', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'modality', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'options', hasValue: true, hasBinding: true },
    { name: 'parentWindow', hasValue: true, hasBinding: true },
    { name: 'result', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onCurrentFontChanged', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onModalityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptionsChanged', paramCount: 0 },
    { handlerName: 'onParentWindowChanged', paramCount: 0 },
    { handlerName: 'onRejected', paramCount: 0 },
    { handlerName: 'onResultChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function FontDialog(): FontDialogBuilder {
  return createFluentBuilder('FontDialog', FONTDIALOG_META) as unknown as FontDialogBuilder;
}

export namespace FontDialog {
  export namespace StandardCode {
    export const Rejected = createEnumToken('FontDialog', 'StandardCode', 'Rejected');
    export const Accepted = createEnumToken('FontDialog', 'StandardCode', 'Accepted');
  }
}
