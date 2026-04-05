// AUTO-GENERATED — DO NOT EDIT
// Type: NetworkInformation
// Generated from Qt 6.11.0

import { createEnumToken } from '../../runtime/index.js';
import type { QmlEnumToken } from '../../runtime/index.js';
export interface NetworkInformationInstance {
  readonly isBehindCaptivePortal: boolean;
  readonly isMetered: boolean;
  objectName: string;
  readonly reachability: QmlEnumToken;
  readonly transportMedium: QmlEnumToken;
}

export function NetworkInformation(): NetworkInformationInstance {
  return {} as NetworkInformationInstance;
}

export namespace NetworkInformation {
  export namespace Features {
    export const Reachability = createEnumToken('NetworkInformation', 'Features', 'Reachability');
    export const CaptivePortal = createEnumToken('NetworkInformation', 'Features', 'CaptivePortal');
    export const TransportMedium = createEnumToken('NetworkInformation', 'Features', 'TransportMedium');
    export const Metered = createEnumToken('NetworkInformation', 'Features', 'Metered');
  }
  export namespace Reachability {
    export const Unknown = createEnumToken('NetworkInformation', 'Reachability', 'Unknown');
    export const Disconnected = createEnumToken('NetworkInformation', 'Reachability', 'Disconnected');
    export const Local = createEnumToken('NetworkInformation', 'Reachability', 'Local');
    export const Site = createEnumToken('NetworkInformation', 'Reachability', 'Site');
    export const Online = createEnumToken('NetworkInformation', 'Reachability', 'Online');
  }
  export namespace TransportMedium {
    export const Unknown = createEnumToken('NetworkInformation', 'TransportMedium', 'Unknown');
    export const Ethernet = createEnumToken('NetworkInformation', 'TransportMedium', 'Ethernet');
    export const Cellular = createEnumToken('NetworkInformation', 'TransportMedium', 'Cellular');
    export const WiFi = createEnumToken('NetworkInformation', 'TransportMedium', 'WiFi');
    export const Bluetooth = createEnumToken('NetworkInformation', 'TransportMedium', 'Bluetooth');
  }
}
