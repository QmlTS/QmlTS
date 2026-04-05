// AUTO-GENERATED — DO NOT EDIT
// Type: InputContext
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlRect, QmlValue } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { KeyboardObserverBuilder } from './KeyboardObserver.js';
export interface InputContextInstance {
  readonly anchorPosition: number;
  readonly anchorRectIntersectsClipRect: boolean;
  readonly anchorRectangle: QmlRect;
  animating: boolean;
  readonly capsLock: boolean;
  readonly capsLockActive: boolean;
  readonly cursorPosition: number;
  readonly cursorRectIntersectsClipRect: boolean;
  readonly cursorRectangle: QmlRect;
  readonly inputEngine: QmlValue;
  readonly inputItem: QtObjectBuilder;
  readonly inputMethodHints: QmlEnumToken;
  readonly keyboardObserver: KeyboardObserverBuilder;
  readonly locale: string;
  objectName: string;
  preeditText: string;
  readonly priv: QmlValue;
  readonly selectedText: string;
  readonly selectionControlVisible: boolean;
  readonly shift: boolean;
  readonly shiftActive: boolean;
  readonly surroundingText: string;
  readonly uppercase: boolean;
}

export const InputContext = {} as InputContextInstance;
