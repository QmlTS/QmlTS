// AUTO-GENERATED — DO NOT EDIT
// Type: Qt
// Generated from Qt 6.11.0

import { createEnumToken } from '../../runtime/index.js';
import type { QmlValue } from '../../runtime/index.js';
import type { ApplicationBuilder } from './QQmlApplication.js';
import type { QtObjectBuilder } from './QtObject.js';
export interface QtInstance {
  readonly application: ApplicationBuilder;
  readonly inputMethod: QtObjectBuilder;
  objectName: string;
  readonly platform: QmlValue;
  readonly styleHints: QtObjectBuilder;
  uiLanguage: string;
}

export function Qt(): QtInstance {
  return {} as QtInstance;
}

export namespace Qt {
  export namespace LoadingMode {
    export const Asynchronous = createEnumToken('Qt', 'LoadingMode', 'Asynchronous');
    export const Synchronous = createEnumToken('Qt', 'LoadingMode', 'Synchronous');
  }
}
