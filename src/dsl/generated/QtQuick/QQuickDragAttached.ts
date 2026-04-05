// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: Drag
// Generated from Qt 6.11.0

import type { QmlPoint, QmlSize, QmlUrl, QmlValue } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface DragAttachedBuilder {
  active(value: boolean): DragAttachedBuilder;
  activeBind(expr: string): DragAttachedBuilder;
  dragType(value: QmlValue): DragAttachedBuilder;
  dragTypeBind(expr: string): DragAttachedBuilder;
  hotSpot(value: QmlPoint): DragAttachedBuilder;
  hotSpotBind(expr: string): DragAttachedBuilder;
  imageSource(value: QmlUrl): DragAttachedBuilder;
  imageSourceBind(expr: string): DragAttachedBuilder;
  imageSourceSize(value: QmlSize): DragAttachedBuilder;
  imageSourceSizeBind(expr: string): DragAttachedBuilder;
  keys(value: string[]): DragAttachedBuilder;
  keysBind(expr: string): DragAttachedBuilder;
  mimeData(value: QmlValue): DragAttachedBuilder;
  mimeDataBind(expr: string): DragAttachedBuilder;
  proposedAction(value: QmlValue): DragAttachedBuilder;
  proposedActionBind(expr: string): DragAttachedBuilder;
  source(value: QtObjectBuilder): DragAttachedBuilder;
  sourceBind(expr: string): DragAttachedBuilder;
  supportedActions(value: QmlValue): DragAttachedBuilder;
  supportedActionsBind(expr: string): DragAttachedBuilder;
  objectName(value: string): DragAttachedBuilder;
  objectNameBind(expr: string): DragAttachedBuilder;
  onActiveChanged(handler: () => void): DragAttachedBuilder;
  onDragFinished(handler: (dropAction: QmlValue) => void): DragAttachedBuilder;
  onDragStarted(handler: () => void): DragAttachedBuilder;
  onDragTypeChanged(handler: () => void): DragAttachedBuilder;
  onHotSpotChanged(handler: () => void): DragAttachedBuilder;
  onImageSourceChanged(handler: () => void): DragAttachedBuilder;
  onImageSourceSizeChanged(handler: () => void): DragAttachedBuilder;
  onKeysChanged(handler: () => void): DragAttachedBuilder;
  onMimeDataChanged(handler: () => void): DragAttachedBuilder;
  onProposedActionChanged(handler: () => void): DragAttachedBuilder;
  onSourceChanged(handler: () => void): DragAttachedBuilder;
  onSupportedActionsChanged(handler: () => void): DragAttachedBuilder;
  onTargetChanged(handler: () => void): DragAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DragAttachedBuilder;
}
