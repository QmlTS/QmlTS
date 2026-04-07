export type DiagnosticSeverity = 'error' | 'warning' | 'info' | 'hint';

export interface Diagnostic {
  readonly severity: DiagnosticSeverity;
  readonly code: DiagnosticCode;
  readonly message: string;
  readonly file?: string;
  readonly line?: number;
  readonly column?: number;
  readonly endLine?: number;
  readonly endColumn?: number;
  readonly relatedInformation?: readonly RelatedDiagnostic[];
  readonly fix?: DiagnosticFix;
}

export interface RelatedDiagnostic {
  readonly message: string;
  readonly file: string;
  readonly line: number;
  readonly column: number;
}

export interface DiagnosticFix {
  readonly description: string;
  readonly replacement?: string;
}

export type DiagnosticCode =
  // Analysis (A)
  | 'QMLTS-A001'
  | 'QMLTS-A002'
  | 'QMLTS-A003'
  | 'QMLTS-A004'
  | 'QMLTS-A005'
  | 'QMLTS-A006'
  | 'QMLTS-A007'
  | 'QMLTS-A008'
  | 'QMLTS-A009'
  | 'QMLTS-A010'
  | 'QMLTS-A011'
  // Transform (T)
  | 'QMLTS-T001'
  | 'QMLTS-T002'
  | 'QMLTS-T003'
  | 'QMLTS-T004'
  | 'QMLTS-T005'
  | 'QMLTS-T006'
  | 'QMLTS-T007'
  | 'QMLTS-T008'
  | 'QMLTS-T009'
  | 'QMLTS-T010'
  | 'QMLTS-T011'
  // PostProcess (P)
  | 'QMLTS-P001'
  | 'QMLTS-P002'
  | 'QMLTS-P003'
  | 'QMLTS-P004'
  // Codegen (C)
  | 'QMLTS-C001'
  | 'QMLTS-C002'
  | 'QMLTS-C003'
  // General (G)
  | 'QMLTS-G001'
  | 'QMLTS-G002'
  | 'QMLTS-G003'
  // Qt Validation (Q)
  | 'QMLTS-Q001'
  | 'QMLTS-Q002'
  | 'QMLTS-Q003'
  // Incremental (I)
  | 'QMLTS-I001';
