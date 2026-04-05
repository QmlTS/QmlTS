// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: Overlay
// Generated from Qt 6.11.0

import type { QmlComponent } from '../../runtime/index.js';
export interface OverlayAttachedBuilder {
  modal(value: QmlComponent): OverlayAttachedBuilder;
  modalBind(expr: string): OverlayAttachedBuilder;
  modeless(value: QmlComponent): OverlayAttachedBuilder;
  modelessBind(expr: string): OverlayAttachedBuilder;
  objectName(value: string): OverlayAttachedBuilder;
  objectNameBind(expr: string): OverlayAttachedBuilder;
  onModalChanged(handler: () => void): OverlayAttachedBuilder;
  onModelessChanged(handler: () => void): OverlayAttachedBuilder;
  onOverlayChanged(handler: () => void): OverlayAttachedBuilder;
  onPressed(handler: () => void): OverlayAttachedBuilder;
  onReleased(handler: () => void): OverlayAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): OverlayAttachedBuilder;
}
