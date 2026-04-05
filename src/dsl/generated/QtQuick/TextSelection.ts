// AUTO-GENERATED — DO NOT EDIT
// Type: TextSelection
// Generated from Qt 6.11.0

import type { QmlColor, QmlFont, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface TextSelectionBuilder {
  id(id: string): TextSelectionBuilder;
  child(obj: QmlObjectBuilder): TextSelectionBuilder;

  alignment(value: QmlValue): TextSelectionBuilder;
  alignmentBind(expr: string): TextSelectionBuilder;
  color(value: QmlColor): TextSelectionBuilder;
  colorBind(expr: string): TextSelectionBuilder;
  document(value: QmlValue): TextSelectionBuilder;
  documentBind(expr: string): TextSelectionBuilder;
  font(value: QmlFont): TextSelectionBuilder;
  fontBind(expr: string): TextSelectionBuilder;
  objectName(value: string): TextSelectionBuilder;
  objectNameBind(expr: string): TextSelectionBuilder;
  selectionEnd(value: number): TextSelectionBuilder;
  selectionEndBind(expr: string): TextSelectionBuilder;
  selectionStart(value: number): TextSelectionBuilder;
  selectionStartBind(expr: string): TextSelectionBuilder;
  text(value: string): TextSelectionBuilder;
  textBind(expr: string): TextSelectionBuilder;
  onAlignmentChanged(handler: () => void): TextSelectionBuilder;
  onColorChanged(handler: () => void): TextSelectionBuilder;
  onDocumentChanged(handler: () => void): TextSelectionBuilder;
  onFontChanged(handler: () => void): TextSelectionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextSelectionBuilder;
  onSelectionEndChanged(handler: () => void): TextSelectionBuilder;
  onSelectionStartChanged(handler: () => void): TextSelectionBuilder;
  onTextChanged(handler: () => void): TextSelectionBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TextSelectionBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TextSelectionBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TextSelectionBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TextSelectionBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TextSelectionBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TextSelectionBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TextSelectionBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TextSelectionBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TextSelectionBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TextSelectionBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TextSelectionBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TextSelectionBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TextSelectionBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TextSelectionBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TextSelectionBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TextSelectionBuilder;
}

export function TextSelection(): TextSelectionBuilder {
  return new DslBuilderImpl('TextSelection') as unknown as TextSelectionBuilder;
}

export namespace TextSelection {
  export namespace MoveOperation {
    export const NoMove = createEnumToken('TextSelection', 'MoveOperation', 'NoMove');
    export const Start = createEnumToken('TextSelection', 'MoveOperation', 'Start');
    export const Up = createEnumToken('TextSelection', 'MoveOperation', 'Up');
    export const StartOfLine = createEnumToken('TextSelection', 'MoveOperation', 'StartOfLine');
    export const StartOfBlock = createEnumToken('TextSelection', 'MoveOperation', 'StartOfBlock');
    export const StartOfWord = createEnumToken('TextSelection', 'MoveOperation', 'StartOfWord');
    export const PreviousBlock = createEnumToken('TextSelection', 'MoveOperation', 'PreviousBlock');
    export const PreviousCharacter = createEnumToken(
      'TextSelection',
      'MoveOperation',
      'PreviousCharacter',
    );
    export const PreviousWord = createEnumToken('TextSelection', 'MoveOperation', 'PreviousWord');
    export const Left = createEnumToken('TextSelection', 'MoveOperation', 'Left');
    export const WordLeft = createEnumToken('TextSelection', 'MoveOperation', 'WordLeft');
    export const End = createEnumToken('TextSelection', 'MoveOperation', 'End');
    export const Down = createEnumToken('TextSelection', 'MoveOperation', 'Down');
    export const EndOfLine = createEnumToken('TextSelection', 'MoveOperation', 'EndOfLine');
    export const EndOfWord = createEnumToken('TextSelection', 'MoveOperation', 'EndOfWord');
    export const EndOfBlock = createEnumToken('TextSelection', 'MoveOperation', 'EndOfBlock');
    export const NextBlock = createEnumToken('TextSelection', 'MoveOperation', 'NextBlock');
    export const NextCharacter = createEnumToken('TextSelection', 'MoveOperation', 'NextCharacter');
    export const NextWord = createEnumToken('TextSelection', 'MoveOperation', 'NextWord');
    export const Right = createEnumToken('TextSelection', 'MoveOperation', 'Right');
    export const WordRight = createEnumToken('TextSelection', 'MoveOperation', 'WordRight');
    export const NextCell = createEnumToken('TextSelection', 'MoveOperation', 'NextCell');
    export const PreviousCell = createEnumToken('TextSelection', 'MoveOperation', 'PreviousCell');
    export const NextRow = createEnumToken('TextSelection', 'MoveOperation', 'NextRow');
    export const PreviousRow = createEnumToken('TextSelection', 'MoveOperation', 'PreviousRow');
  }
}
