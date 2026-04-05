import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { analyze } from '../../../src/dsl/generator/analyzer.js';
import { CodeEmitter } from '../../../src/dsl/generator/code-emitter.js';
import { TypeMapper } from '../../../src/dsl/generator/type-mapper.js';
import { RegistryQuery } from '../../../src/registry/registry-query.js';
import { RegistrySnapshot } from '../../../src/registry/snapshot.js';
import type { QmlRegistry } from '../../../src/registry/types.js';

const SNAPSHOT_PATH = join(
  import.meta.dir,
  '..',
  '..',
  '..',
  'data',
  'qt-6.11.0-registry.snapshot.json',
);
const registry: QmlRegistry = new RegistrySnapshot().deserialize(
  readFileSync(SNAPSHOT_PATH, 'utf-8'),
);
const query = new RegistryQuery(registry);
const analyzed = analyze(registry, query);
const mapper = new TypeMapper(analyzed);
const emitter = new CodeEmitter(analyzed, mapper);

describe('CodeEmitter', () => {
  describe('creatable types', () => {
    test('CE-01: Rectangle emits builder interface + factory', () => {
      const t = analyzed.allTypes.get('QQuickRectangle')!;
      const code = emitter.emitType(t);
      expect(code).toContain('export interface RectangleBuilder');
      expect(code).toContain('export function Rectangle(): RectangleBuilder');
      expect(code).toContain('color(value:');
      expect(code).toContain('colorBind(expr: string): RectangleBuilder');
      expect(code).toContain('radius(value: number): RectangleBuilder');
      expect(code).toContain('radiusBind(expr: string): RectangleBuilder');
    });

    test('CE-02: Rectangle inherits width/height from Item', () => {
      const t = analyzed.allTypes.get('QQuickRectangle')!;
      const code = emitter.emitType(t);
      expect(code).toContain('width(value: number): RectangleBuilder');
      expect(code).toContain('widthBind(expr: string): RectangleBuilder');
      expect(code).toContain('height(value: number): RectangleBuilder');
    });

    test('CE-04: Item emits grouped property methods', () => {
      const t = analyzed.allTypes.get('QQuickItem')!;
      const code = emitter.emitType(t);
      expect(code).toContain('anchors(setup:');
    });
  });

  describe('enum types', () => {
    test('CE-10: Text emits enum namespace with HAlignment', () => {
      const t = analyzed.allTypes.get('QQuickText')!;
      const code = emitter.emitType(t);
      expect(code).toContain('export namespace Text');
      expect(code).toContain("createEnumToken('Text', 'HAlignment', 'AlignLeft')");
      expect(code).toContain("createEnumToken('Text', 'HAlignment', 'AlignRight')");
    });

    test('CE-11: Item emits TransformOrigin enum', () => {
      const t = analyzed.allTypes.get('QQuickItem')!;
      const code = emitter.emitType(t);
      expect(code).toContain('export namespace Item');
      expect(code).toContain('TransformOrigin');
    });

    test('CE-12: enum token uses correct owner name (qmlName)', () => {
      const t = analyzed.allTypes.get('QQuickText')!;
      const code = emitter.emitType(t);
      expect(code).toContain("'Text'");
      expect(code).not.toContain("'QQuickText'");
    });
  });

  describe('readonly properties', () => {
    test('CE-20: readonly properties do not get setters', () => {
      const t = analyzed.allTypes.get('QQuickItem')!;
      const code = emitter.emitType(t);
      // activeFocus is readonly on Item
      expect(code).not.toMatch(/activeFocus\(value:/);
      expect(code).not.toMatch(/activeFocusBind\(/);
    });
  });

  describe('signal handlers', () => {
    test('CE-30: signal handlers use on+capitalize pattern', () => {
      const t = analyzed.allTypes.get('QQuickRectangle')!;
      const code = emitter.emitType(t);
      expect(code).toContain('onColorChanged(');
    });
  });

  describe('grouped properties', () => {
    test('CE-40: grouped property emits callback builder', () => {
      const t = analyzed.allTypes.get('QQuickRectangle')!;
      const code = emitter.emitType(t);
      expect(code).toContain('border(setup:');
    });
  });

  describe('file header', () => {
    test('CE-50: generated file has auto-generated header', () => {
      const t = analyzed.allTypes.get('QQuickRectangle')!;
      const code = emitter.emitType(t);
      expect(code).toContain('AUTO-GENERATED');
      expect(code).toContain('DO NOT EDIT');
    });
  });

  describe('imports', () => {
    test('CE-60: imports runtime types used', () => {
      const t = analyzed.allTypes.get('QQuickRectangle')!;
      const code = emitter.emitType(t);
      expect(code).toContain("from '../../runtime/");
    });

    test('CE-61: imports createEnumToken only when namespace is emitted', () => {
      const text = analyzed.allTypes.get('QQuickText')!;
      const textCode = emitter.emitType(text);
      expect(textCode).toContain('createEnumToken');

      const rect = analyzed.allTypes.get('QQuickRectangle')!;
      const rectCode = emitter.emitType(rect);
      // Rectangle has no own enums, check if inherited enums are empty
      const allEnums = [...rect.ownEnums, ...rect.inheritedEnums];
      if (allEnums.length === 0) {
        expect(rectCode).not.toContain('createEnumToken');
      }
    });
  });

  describe('singleton types', () => {
    test('CE-70: singleton emits typed const, not factory function', () => {
      const appType = [...analyzed.allTypes.values()].find(
        (t) => t.classification === 'singleton' && t.moduleUri === 'QtQuick',
      );
      if (appType) {
        const code = emitter.emitType(appType);
        expect(code).toContain('export const');
      }
    });
  });

  describe('determinism', () => {
    test('CE-80: same type produces identical output on re-emit', () => {
      const t = analyzed.allTypes.get('QQuickRectangle')!;
      const a = emitter.emitType(t);
      const b = emitter.emitType(t);
      expect(a).toBe(b);
    });
  });
});
