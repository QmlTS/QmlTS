// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: Drag
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlPoint,
  QmlSize,
  QmlUrl,
  QmlValue,
} from '../../runtime/index.js';
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
  onActiveChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onDragFinished(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onDragStarted(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onDragTypeChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onHotSpotChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onImageSourceChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onImageSourceSizeChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onKeysChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onMimeDataChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onProposedActionChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onSupportedActionsChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onTargetChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DragAttachedBuilder;
}
