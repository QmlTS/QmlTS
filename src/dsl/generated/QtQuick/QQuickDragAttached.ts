// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: Drag
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlPoint, QmlSize, QmlUrl, QmlValue } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface DragAttachedBuilder {
  active(value: boolean): DragAttachedBuilder;
  activeBind(expr: string): DragAttachedBuilder;
  dragType(value: QmlEnumToken): DragAttachedBuilder;
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
  proposedAction(value: QmlEnumToken): DragAttachedBuilder;
  proposedActionBind(expr: string): DragAttachedBuilder;
  source(value: QtObjectBuilder): DragAttachedBuilder;
  sourceBind(expr: string): DragAttachedBuilder;
  supportedActions(value: QmlEnumToken): DragAttachedBuilder;
  supportedActionsBind(expr: string): DragAttachedBuilder;
  objectName(value: string): DragAttachedBuilder;
  objectNameBind(expr: string): DragAttachedBuilder;
  onActiveChanged(body: string): DragAttachedBuilder;
  onDragFinished(body: string): DragAttachedBuilder;
  onDragStarted(body: string): DragAttachedBuilder;
  onDragTypeChanged(body: string): DragAttachedBuilder;
  onHotSpotChanged(body: string): DragAttachedBuilder;
  onImageSourceChanged(body: string): DragAttachedBuilder;
  onImageSourceSizeChanged(body: string): DragAttachedBuilder;
  onKeysChanged(body: string): DragAttachedBuilder;
  onMimeDataChanged(body: string): DragAttachedBuilder;
  onProposedActionChanged(body: string): DragAttachedBuilder;
  onSourceChanged(body: string): DragAttachedBuilder;
  onSupportedActionsChanged(body: string): DragAttachedBuilder;
  onTargetChanged(body: string): DragAttachedBuilder;
  onObjectNameChanged(body: string): DragAttachedBuilder;
}
