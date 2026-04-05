// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: Universal
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlValue } from '../../runtime/index.js';
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
  onAccentChanged(body: string): UniversalAttachedBuilder;
  onBackgroundChanged(body: string): UniversalAttachedBuilder;
  onForegroundChanged(body: string): UniversalAttachedBuilder;
  onPaletteChanged(body: string): UniversalAttachedBuilder;
  onThemeChanged(body: string): UniversalAttachedBuilder;
  onObjectNameChanged(body: string): UniversalAttachedBuilder;
}
