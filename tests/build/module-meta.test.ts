import { describe, expect, test } from 'bun:test';
import type { ViewModelSchemaJson } from '../../src/build/build-types.js';
import {
  deriveModuleMeta,
  deriveModuleRelDir,
  deriveModuleUri,
  deriveQmltypesFilename,
  validateSchemaConsistency,
} from '../../src/build/module-meta.js';

describe('deriveModuleUri', () => {
  // MM-01
  test('MM-01: appends .ViewModels to prefix', () => {
    expect(deriveModuleUri('TestApp')).toBe('TestApp.ViewModels');
    expect(deriveModuleUri('My.Company')).toBe('My.Company.ViewModels');
  });
});

describe('deriveModuleRelDir', () => {
  // MM-02
  test('MM-02: replaces all dots with path separators', () => {
    expect(deriveModuleRelDir('TestApp.ViewModels')).toBe('TestApp/ViewModels');
    expect(deriveModuleRelDir('Company.App.ViewModels')).toBe('Company/App/ViewModels');
  });
});

describe('deriveQmltypesFilename', () => {
  // MM-03
  test('MM-03: lowercases and replaces all dots with underscores', () => {
    expect(deriveQmltypesFilename('TestApp.ViewModels')).toBe(
      'testapp_viewmodels.qmltypes',
    );
  });

  // MM-04
  test('MM-04: handles multi-segment URIs', () => {
    expect(deriveQmltypesFilename('Company.App.ViewModels')).toBe(
      'company_app_viewmodels.qmltypes',
    );
  });
});

describe('deriveModuleMeta', () => {
  const moduleConfig = { prefix: 'TestApp', version: { major: 1, minor: 0 } };

  // MM-05
  test('MM-05: returns undefined when no schemas provided', () => {
    expect(deriveModuleMeta(moduleConfig, [])).toBeUndefined();
  });

  // MM-06
  test('MM-06: deduplicates and sorts typeNames', () => {
    const schemas = [
      { className: 'ZooViewModel' },
      { className: 'AlphaViewModel' },
      { className: 'ZooViewModel' },
    ];
    const meta = deriveModuleMeta(moduleConfig, schemas);
    expect(meta).toBeDefined();
    expect(meta!.typeNames).toEqual(['AlphaViewModel', 'ZooViewModel']);
  });

  // MM-07
  test('MM-07: derives all fields correctly from single schema', () => {
    const meta = deriveModuleMeta(moduleConfig, [{ className: 'CounterViewModel' }]);
    expect(meta).toBeDefined();
    expect(meta!.moduleUri).toBe('TestApp.ViewModels');
    expect(meta!.versionMajor).toBe(1);
    expect(meta!.versionMinor).toBe(0);
    expect(meta!.versionString).toBe('1.0');
    expect(meta!.moduleRelDir).toBe('TestApp/ViewModels');
    expect(meta!.qmltypesFilename).toBe('testapp_viewmodels.qmltypes');
    expect(meta!.typeNames).toEqual(['CounterViewModel']);
  });
});

// ─── Schema consistency validation ──────────────────────────

function makeFullSchema(overrides: Partial<ViewModelSchemaJson> = {}): ViewModelSchemaJson {
  return {
    className: 'TestViewModel',
    version: 2,
    states: [],
    commands: [],
    effects: [],
    lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
    ...overrides,
  };
}

describe('validateSchemaConsistency', () => {
  test('no diagnostics for unique classNames', () => {
    const diags = validateSchemaConsistency([
      makeFullSchema({ className: 'A' }),
      makeFullSchema({ className: 'B' }),
    ]);
    expect(diags).toHaveLength(0);
  });

  test('no diagnostics for duplicate classNames with identical content', () => {
    const diags = validateSchemaConsistency([
      makeFullSchema({ className: 'A' }),
      makeFullSchema({ className: 'A' }),
    ]);
    expect(diags).toHaveLength(0);
  });

  test('QMLTS-B002 for duplicate classNames with different content', () => {
    const diags = validateSchemaConsistency([
      makeFullSchema({ className: 'A', states: [] }),
      makeFullSchema({
        className: 'A',
        states: [
          {
            name: 'x',
            qmlName: 'x',
            qmlType: 'int',
            memberId: 0,
            readonly: false,
            deferred: false,
          },
        ],
      }),
    ]);
    expect(diags).toHaveLength(1);
    expect(diags[0]!.code).toBe('QMLTS-B002');
    expect(diags[0]!.message).toContain('A');
  });
});
