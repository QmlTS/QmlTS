// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: StyleKit
// Generated from Qt 6.11.0

import type { BaseStyleBuilder } from './BaseStyle.js';
export interface StyleKitAttachedBuilder {
  style(value: BaseStyleBuilder): StyleKitAttachedBuilder;
  styleBind(expr: string): StyleKitAttachedBuilder;
  styleUrl(value: string): StyleKitAttachedBuilder;
  styleUrlBind(expr: string): StyleKitAttachedBuilder;
  transitionsEnabled(value: boolean): StyleKitAttachedBuilder;
  transitionsEnabledBind(expr: string): StyleKitAttachedBuilder;
  objectName(value: string): StyleKitAttachedBuilder;
  objectNameBind(expr: string): StyleKitAttachedBuilder;
  onStyleChanged(body: string): StyleKitAttachedBuilder;
  onStyleUrlChanged(body: string): StyleKitAttachedBuilder;
  onTransitionsEnabledChanged(body: string): StyleKitAttachedBuilder;
  onObjectNameChanged(body: string): StyleKitAttachedBuilder;
}
