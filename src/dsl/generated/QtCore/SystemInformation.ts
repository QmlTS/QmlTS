// AUTO-GENERATED — DO NOT EDIT
// Type: SystemInformation
// Generated from Qt 6.11.0

import { createEnumToken } from '../../runtime/index.js';
import type { QmlEnumToken } from '../../runtime/index.js';
export interface SystemInformationInstance {
  readonly bootUniqueId: string;
  readonly buildAbi: string;
  readonly buildCpuArchitecture: string;
  readonly byteOrder: QmlEnumToken;
  readonly currentCpuArchitecture: string;
  readonly kernelType: string;
  readonly kernelVersion: string;
  readonly machineHostName: string;
  readonly machineUniqueId: string;
  objectName: string;
  readonly prettyProductName: string;
  readonly productType: string;
  readonly productVersion: string;
  readonly wordSize: number;
}

export function SystemInformation(): SystemInformationInstance {
  return {} as SystemInformationInstance;
}

export namespace SystemInformation {
  export namespace Endian {
    export const Big = createEnumToken('SystemInformation', 'Endian', 'Big');
    export const Little = createEnumToken('SystemInformation', 'Endian', 'Little');
  }
}
