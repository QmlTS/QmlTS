// AUTO-GENERATED — DO NOT EDIT
// Type: VirtualKeyboardSettings
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlUrl } from '../../runtime/index.js';
import type { WordCandidateListBuilder } from './QQuickWordCandidateListSettings.js';
export interface VirtualKeyboardSettingsInstance {
  activeLocales: string[];
  arrowKeyNavigationEnabled: boolean;
  readonly availableLocales: string[];
  closeOnReturn: boolean;
  defaultDictionaryDisabled: boolean;
  defaultInputMethodDisabled: boolean;
  fullScreenMode: boolean;
  handwritingModeDisabled: boolean;
  hwrTimeoutForAlphabetic: number;
  hwrTimeoutForCjk: number;
  inputMethodHints: QmlEnumToken;
  keySoundVolume: number;
  layoutPath: QmlUrl;
  locale: string;
  objectName: string;
  readonly style: QmlUrl;
  styleName: string;
  userDataPath: string;
  visibleFunctionKeys: QmlEnumToken;
  readonly wordCandidateList: WordCandidateListBuilder;
}

export const VirtualKeyboardSettings = {} as VirtualKeyboardSettingsInstance;
