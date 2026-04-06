// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: Universal
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlEnumToken, QmlValue } from '../../runtime/index.js';
export interface UniversalAttachedBuilder {
  accent(value: QmlValue): UniversalAttachedBuilder;
  accentBind(expr: string): UniversalAttachedBuilder;
  background(value: QmlValue): UniversalAttachedBuilder;
  backgroundBind(expr: string): UniversalAttachedBuilder;
  foreground(value: QmlValue): UniversalAttachedBuilder;
  foregroundBind(expr: string): UniversalAttachedBuilder;
  theme(value: QmlEnumToken): UniversalAttachedBuilder;
  themeBind(expr: string): UniversalAttachedBuilder;
  objectName(value: string): UniversalAttachedBuilder;
  objectNameBind(expr: string): UniversalAttachedBuilder;
  onAccentChanged(handler: DslSignalHandlerValue): UniversalAttachedBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): UniversalAttachedBuilder;
  onForegroundChanged(handler: DslSignalHandlerValue): UniversalAttachedBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): UniversalAttachedBuilder;
  onThemeChanged(handler: DslSignalHandlerValue): UniversalAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): UniversalAttachedBuilder;
}
