// AUTO-GENERATED — DO NOT EDIT
// Type: Application
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlFont, QmlValue } from '../../runtime/index.js';
import type { StyleHintsBuilder } from './QStyleHints.js';
export interface ApplicationInstance {
  readonly active: boolean;
  readonly arguments: string[];
  displayName: string;
  domain: string;
  readonly font: QmlFont;
  readonly layoutDirection: QmlEnumToken;
  name: string;
  objectName: string;
  organization: string;
  readonly screens: QmlValue;
  readonly state: QmlEnumToken;
  readonly styleHints: StyleHintsBuilder;
  readonly supportsMultipleWindows: boolean;
  version: string;
}

export const Application = {} as ApplicationInstance;
