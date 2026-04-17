import { describe, expect, it } from 'bun:test';
import { createObject } from '../../../src/ast/builder.js';
import { createPostProcessor } from '../../../src/compiler/postprocess/post-processor.js';
import { createImportResolver } from '../../../src/compiler/transform/import-resolver.js';
import {
  createMockCommand,
  createMockEffect,
  createMockState,
  createMockViewModel,
  createPostProcessorRegistry,
  createTransformResultBuilder,
  findAttachedBinding,
  findBinding,
  findChildByType,
  findFunctionDeclaration,
  findIdAssignment,
  findImport,
  findSignalHandler,
} from './helpers.js';

const registry = createPostProcessorRegistry();
const importResolver = createImportResolver();

describe('PostProcessor', () => {
  describe('Import Injection', () => {
    // PP-01: Import injection
    it('PP-01: resolves requiredImports into document ImportNodes', () => {
      const pp = createPostProcessor(importResolver, registry);
      const tr = createTransformResultBuilder()
        .withImports(
          { moduleUri: 'QtQuick', version: '6.11', injected: false },
          { moduleUri: 'QtQuick.Controls', version: '6.11', injected: false },
        )
        .build();

      const result = pp.process(tr);

      expect(result.document.imports).toHaveLength(2);
      expect(findImport(result.document.imports, 'QtQuick')).toBeDefined();
      expect(findImport(result.document.imports, 'QtQuick.Controls')).toBeDefined();
      expect(result.document.imports[0]!.kind).toBe('Import');
      expect(result.document.imports[0]!.importKind).toBe('module');
    });

    // PP-14: Import deduplication
    it('PP-14: deduplicates imports via ImportResolver', () => {
      const pp = createPostProcessor(importResolver, registry);
      const tr = createTransformResultBuilder()
        .withImports(
          { moduleUri: 'QtQuick', version: '6.5', injected: false },
          { moduleUri: 'QtQuick', version: '6.11', injected: false },
          { moduleUri: 'QtQuick', version: '6.8', injected: true },
        )
        .build();

      const result = pp.process(tr);

      expect(result.document.imports).toHaveLength(1);
      const qtQuick = findImport(result.document.imports, 'QtQuick')!;
      expect(qtQuick.version).toBe('6.11');
    });

    // PP-15: Framework import auto-injection
    it('PP-15: auto-injects canonical module import for Connections', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        effects: [
          createMockEffect('showError', {
            parameters: [{ name: 'msg', tsType: 'string' }],
          }),
        ],
      });
      const tr = createTransformResultBuilder()
        .withImports({ moduleUri: 'QtQuick', version: '6.11', injected: false })
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
          handlerCode: 'console.log(msg)',
          handlerParameters: ['msg'],
        })
        .build();

      const result = pp.process(tr, vm);

      expect(findImport(result.document.imports, 'QtQml')).toBeDefined();
      expect(findImport(result.document.imports, 'QtQuick')).toBeDefined();
      expect(findImport(result.document.imports, 'QtQml')?.version).toBe('6.11');
    });
  });

  describe('Connections Injection', () => {
    // PP-02: Connections injection for effects
    it('PP-02: injects Connections block with effect handlers', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        effects: [
          createMockEffect('showError', {
            parameters: [{ name: 'msg', tsType: 'string' }],
          }),
        ],
      });
      const tr = createTransformResultBuilder()
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
          handlerCode: 'errorLabel.text = msg',
          handlerParameters: ['msg'],
        })
        .build();

      const result = pp.process(tr, vm);

      const conn = findChildByType(result.document.rootObject, 'Connections');
      expect(conn).toBeDefined();

      const target = findBinding(conn!.members, 'target');
      expect(target).toBeDefined();
      expect(target!.value).toEqual({ kind: 'expression', code: '__qmlts' });

      const handler = findFunctionDeclaration(conn!.members, 'onShowError');
      expect(handler).toBeDefined();
      expect(handler!.parameters).toEqual([{ name: 'msg' }]);
      expect(handler!.body).toBe('errorLabel.text = msg');
    });

    // PP-10: effectListeners without ViewModel — silently skipped
    it('PP-10: skips Connections when no ViewModel provided', () => {
      const pp = createPostProcessor(importResolver, registry);
      const tr = createTransformResultBuilder()
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
        })
        .build();

      const result = pp.process(tr);

      const conn = findChildByType(result.document.rootObject, 'Connections');
      expect(conn).toBeUndefined();
      expect(result.diagnostics).toHaveLength(0);
      expect(result.injected.connections).toBe(0);
    });
  });

  describe('Lifecycle Injection', () => {
    // PP-05: Component.onCompleted injection
    it('PP-05: injects Component.onCompleted for onMounted', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        lifecycle: { hasOnMounted: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onCompleted = findBinding(comp!.bindings, 'onCompleted');
      expect(onCompleted).toBeDefined();
      expect(onCompleted!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts.onMounted()',
      });
    });

    // PP-06: Component.onDestruction injection
    it('PP-06: injects Component.onDestruction for onUnmounting', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        lifecycle: { hasOnUnmounting: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onDestruction = findBinding(comp!.bindings, 'onDestruction');
      expect(onDestruction).toBeDefined();
      expect(onDestruction!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts.onUnmounting()',
      });
    });

    // PP-13: Multiple lifecycle hooks
    it('PP-13: injects both onCompleted and onDestruction in same Component block', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        lifecycle: { hasOnMounted: true, hasOnUnmounting: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      expect(comp!.bindings).toHaveLength(2);
      expect(findBinding(comp!.bindings, 'onCompleted')).toBeDefined();
      expect(findBinding(comp!.bindings, 'onDestruction')).toBeDefined();
      expect(result.injected.lifecycleHandlers).toBe(2);
    });
  });

  describe('Validation', () => {
    // PP-07: Duplicate ID detection
    it('PP-07: emits QMLTS-P001 for duplicate object ids', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .id('myId')
        .child(createObject('Text').id('myId'))
        .build();
      const tr = createTransformResultBuilder().withRootObject(root).build();

      const result = pp.process(tr);

      const p001 = result.diagnostics.filter((d) => d.code === 'QMLTS-P001');
      expect(p001).toHaveLength(1);
      expect(p001[0]!.severity).toBe('error');
      expect(p001[0]!.message).toContain('myId');
    });

    // PP-11: P003 — command parameter mismatch
    it('PP-11: emits QMLTS-P003 when command has required params', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        commands: [
          createMockCommand('login', {
            id: 42,
            parameters: [
              {
                name: 'username',
                tsType: 'string',
                qmlType: 'string',
                optional: false,
              },
              {
                name: 'password',
                tsType: 'string',
                qmlType: 'string',
                optional: false,
              },
            ],
          }),
        ],
      });
      const tr = createTransformResultBuilder()
        .withCommandBindings({
          signalName: 'onClicked',
          vmName: 'vm',
          methodName: 'login',
          commandId: 42,
          objectTypeName: 'Button',
        })
        .build();

      const result = pp.process(tr, vm);

      const p003 = result.diagnostics.filter((d) => d.code === 'QMLTS-P003');
      expect(p003).toHaveLength(1);
      expect(p003[0]!.severity).toBe('error');
      expect(p003[0]!.message).toContain('login');
      expect(p003[0]!.message).toContain('username');
    });

    // PP-12: P004 — invalid state binding
    it('PP-12: emits QMLTS-P004 for invalid state binding path', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        states: [createMockState('count')],
      });
      const tr = createTransformResultBuilder()
        .withStateBindings({
          property: 'text',
          vmName: 'vm',
          vmProperty: 'nonExistent',
          objectTypeName: 'Text',
        })
        .build();

      const result = pp.process(tr, vm);

      const p004 = result.diagnostics.filter((d) => d.code === 'QMLTS-P004');
      expect(p004).toHaveLength(1);
      expect(p004[0]!.severity).toBe('warning');
      expect(p004[0]!.message).toContain('nonExistent');
      expect(p004[0]!.message).toContain('vm.nonExistent');
    });
  });

  describe('Transformer Output Validation', () => {
    // PP-03: command invoke already lowered — PostProcessor validates
    it('PP-03: validates command invoke matches ViewModel', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        commands: [createMockCommand('doAction', { id: 7 })],
      });
      const root = createObject('Rectangle')
        .handler('onClicked', { kind: 'expression', code: '__qmlts.invoke(7)' })
        .build();
      const tr = createTransformResultBuilder()
        .withRootObject(root)
        .withCommandBindings({
          signalName: 'onClicked',
          vmName: 'vm',
          methodName: 'doAction',
          commandId: 7,
          objectTypeName: 'Rectangle',
        })
        .build();

      const result = pp.process(tr, vm);

      expect(result.diagnostics.filter((d) => d.code === 'QMLTS-P003')).toHaveLength(0);
      expect(result.injected.bindings).toBe(0);
    });

    // PP-04: state binding already lowered — PostProcessor validates
    it('PP-04: validates state binding exists in ViewModel', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        states: [createMockState('userName')],
      });
      const root = createObject('Text')
        .bind('text', { kind: 'expression', code: 'vm.userName' })
        .build();
      const tr = createTransformResultBuilder()
        .withRootObject(root)
        .withStateBindings({
          property: 'text',
          vmName: 'vm',
          vmProperty: 'userName',
          objectTypeName: 'Text',
        })
        .build();

      const result = pp.process(tr, vm);

      expect(result.diagnostics.filter((d) => d.code === 'QMLTS-P004')).toHaveLength(0);
      expect(result.injected.bindings).toBe(1);
    });
  });

  describe('No ViewModel', () => {
    // PP-08: no ViewModel — skip all VM-dependent work
    it('PP-08: skips all VM injection and diagnostics without ViewModel', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .bind('width', 100)
        .child(createObject('Text').bind('text', 'hello'))
        .build();
      const tr = createTransformResultBuilder()
        .withRootObject(root)
        .withImports({ moduleUri: 'QtQuick', version: '6.11', injected: false })
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
        })
        .withCommandBindings({
          signalName: 'onClicked',
          vmName: 'vm',
          methodName: 'doAction',
          commandId: 1,
          objectTypeName: 'Rectangle',
        })
        .withStateBindings({
          property: 'text',
          vmName: 'vm',
          vmProperty: 'nonExistent',
          objectTypeName: 'Text',
        })
        .build();

      const result = pp.process(tr);

      expect(findChildByType(result.document.rootObject, 'Connections')).toBeUndefined();
      expect(findAttachedBinding(result.document.rootObject, 'Component')).toBeUndefined();
      expect(result.diagnostics).toHaveLength(0);
      expect(result.injected.connections).toBe(0);
      expect(result.injected.lifecycleHandlers).toBe(0);
    });
  });

  describe('Injection Statistics', () => {
    it('preserves transformer diagnostics in the postprocess result', () => {
      const pp = createPostProcessor(importResolver, registry);
      const tr = createTransformResultBuilder()
        .withDiagnostics({
          severity: 'warning',
          code: 'QMLTS-T006',
          message: 'Required property missing',
        })
        .build();

      const result = pp.process(tr);

      expect(result.diagnostics.some((d) => d.code === 'QMLTS-T006')).toBe(true);
    });

    // PP-09: full statistics
    it('PP-09: returns correct injection statistics', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        effects: [
          createMockEffect('showError', {
            parameters: [{ name: 'msg', tsType: 'string' }],
          }),
          createMockEffect('showSuccess'),
        ],
        lifecycle: { hasOnMounted: true, hasOnUnmounting: true },
        states: [createMockState('count')],
      });
      const tr = createTransformResultBuilder()
        .withImports(
          { moduleUri: 'QtQuick', version: '6.11', injected: false },
          { moduleUri: 'QtQuick.Controls', version: '6.11', injected: false },
        )
        .withEffectListeners(
          {
            signalName: 'showError',
            effectName: 'showError',
            objectTypeName: 'Rectangle',
            handlerCode: 'console.log(msg)',
            handlerParameters: ['msg'],
          },
          {
            signalName: 'showSuccess',
            effectName: 'showSuccess',
            objectTypeName: 'Rectangle',
          },
        )
        .withStateBindings({
          property: 'text',
          vmName: 'vm',
          vmProperty: 'count',
          objectTypeName: 'Text',
        })
        .build();

      const result = pp.process(tr, vm);

      // 2 user imports + 1 auto-injected QtQml (for Connections+Component)
      expect(result.injected.imports).toBe(3);
      expect(result.injected.connections).toBe(2);
      expect(result.injected.bindings).toBe(1);
      expect(result.injected.lifecycleHandlers).toBe(2);
    });
  });

  describe('V2 mode', () => {
    const v2BaseOptions: import('../../../src/compiler/postprocess/postprocess-types.js').V2PostProcessOptions =
      {
        moduleImport: { moduleUri: 'MyApp.ViewModels', version: '1.0' },
        viewModelType: 'LoginViewModel',
        qmlId: '__qmlts_vm0',
        effects: [{ handlerName: 'onLoginCompleted', parameters: ['success'] }],
        lifecycle: { hasMounted: true, hasUnmounting: false },
      };

    it('PP-V2-01: injects ViewModel instance block as first child', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        className: 'LoginViewModel',
        effects: [
          createMockEffect('onLoginCompleted', {
            parameters: [{ name: 'success', tsType: 'boolean' }],
          }),
        ],
        lifecycle: { hasOnMounted: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const firstChild = result.document.rootObject.members[0]!;
      expect(firstChild.kind).toBe('ObjectDefinition');
      if (firstChild.kind === 'ObjectDefinition') {
        expect(firstChild.typeName).toBe('LoginViewModel');
        const idNode = findIdAssignment(firstChild.members, '__qmlts_vm0');
        expect(idNode).toBeDefined();
      }
    });

    it('PP-V2-02: ViewModel block contains effect signal handler bindings', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ className: 'LoginViewModel' });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const vmBlock = findChildByType(result.document.rootObject, 'LoginViewModel')!;
      expect(vmBlock).toBeDefined();
      const handler = findSignalHandler(vmBlock.members, 'onLoginCompleted');
      expect(handler).toBeDefined();
      expect(handler!.body.form).toBe('expression');
      expect(handler!.body.code).toBe('function(success) { }');
    });

    it('PP-V2-03: injects module import for ViewModel type', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ className: 'LoginViewModel' });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const moduleImport = findImport(result.document.imports, 'MyApp.ViewModels');
      expect(moduleImport).toBeDefined();
      expect(moduleImport!.version).toBe('1.0');
    });

    it('PP-V2-04: V2 does not inject Connections block', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        className: 'LoginViewModel',
        effects: [createMockEffect('onLoginCompleted')],
      });
      const tr = createTransformResultBuilder()
        .withEffectListeners({
          signalName: 'onLoginCompleted',
          effectName: 'onLoginCompleted',
          objectTypeName: 'Rectangle',
        })
        .build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const conn = findChildByType(result.document.rootObject, 'Connections');
      expect(conn).toBeUndefined();
      expect(result.injected.connections).toBe(0);
    });

    it('PP-V2-05: V2 lifecycle emits qmlId.onMounted()', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ lifecycle: { hasOnMounted: true } });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onCompleted = findBinding(comp!.bindings, 'onCompleted');
      expect(onCompleted).toBeDefined();
      expect(onCompleted!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts_vm0.onMounted()',
      });
    });

    it('PP-V2-06: V2 lifecycle emits qmlId.onUnmounting()', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ lifecycle: { hasOnUnmounting: true } });
      const tr = createTransformResultBuilder().build();
      const opts = { ...v2BaseOptions, lifecycle: { hasMounted: false, hasUnmounting: true } };

      const result = pp.process(tr, vm, opts);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onDestruction = findBinding(comp!.bindings, 'onDestruction');
      expect(onDestruction).toBeDefined();
      expect(onDestruction!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts_vm0.onUnmounting()',
      });
    });

    it('PP-V2-07: V2 idempotency — no duplicate ViewModel block injection', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .child(createObject('LoginViewModel').id('__qmlts_vm0'))
        .build();
      const tr = createTransformResultBuilder().withRootObject(root).build();

      const result = pp.process(tr, undefined, v2BaseOptions);

      const vmBlocks = result.document.rootObject.members.filter(
        (m) => m.kind === 'ObjectDefinition' && m.typeName === 'LoginViewModel',
      );
      expect(vmBlocks).toHaveLength(1);
    });

    it('PP-V2-08: V2 collision — diagnostic on same type with different id', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .child(createObject('LoginViewModel').id('someOtherId'))
        .build();
      const tr = createTransformResultBuilder().withRootObject(root).build();

      const result = pp.process(tr, undefined, v2BaseOptions);

      const v008 = result.diagnostics.filter((d) => d.code === 'QMLTS-V008');
      expect(v008).toHaveLength(1);
      expect(v008[0]!.severity).toBe('error');
      expect(v008[0]!.message).toContain('someOtherId');
    });

    it('PP-V2-09: effects with no parameters produce empty function()', () => {
      const pp = createPostProcessor(importResolver, registry);
      const opts = {
        ...v2BaseOptions,
        effects: [{ handlerName: 'onCountChanged', parameters: [] as string[] }],
      };
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, undefined, opts);

      const vmBlock = findChildByType(result.document.rootObject, 'LoginViewModel')!;
      const handler = findSignalHandler(vmBlock.members, 'onCountChanged');
      expect(handler).toBeDefined();
      expect(handler!.body.code).toBe('function() { }');
    });

    it('PP-V2-10: V2 mode with no lifecycle produces no Component block', () => {
      const pp = createPostProcessor(importResolver, registry);
      const opts = { ...v2BaseOptions, lifecycle: { hasMounted: false, hasUnmounting: false } };
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, undefined, opts);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeUndefined();
    });
  });
});
