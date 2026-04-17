import { describe, expect, test } from 'bun:test';
import { createQmldirGenerator } from '../../src/build/qmldir-generator.js';

describe('QmldirGenerator', () => {
  const generator = createQmldirGenerator();

  // QD-01
  test('QD-01: generates valid module declaration', () => {
    const content = generator.generate({
      moduleUri: 'TestApp.ViewModels',
      qmltypesFilename: 'testapp_viewmodels.qmltypes',
    });
    expect(content).toContain('module TestApp.ViewModels');
  });

  // QD-02
  test('QD-02: includes typeinfo directive with correct filename', () => {
    const content = generator.generate({
      moduleUri: 'TestApp.ViewModels',
      qmltypesFilename: 'testapp_viewmodels.qmltypes',
    });
    expect(content).toContain('typeinfo testapp_viewmodels.qmltypes');
  });

  // QD-03
  test('QD-03: output ends with a newline', () => {
    const content = generator.generate({
      moduleUri: 'TestApp.ViewModels',
      qmltypesFilename: 'testapp_viewmodels.qmltypes',
    });
    expect(content.endsWith('\n')).toBe(true);
  });

  // QD-04
  test('QD-04: full output matches expected format', () => {
    const content = generator.generate({
      moduleUri: 'Company.App.ViewModels',
      qmltypesFilename: 'company_app_viewmodels.qmltypes',
    });
    expect(content).toBe(
      'module Company.App.ViewModels\ntypeinfo company_app_viewmodels.qmltypes\n',
    );
  });
});
