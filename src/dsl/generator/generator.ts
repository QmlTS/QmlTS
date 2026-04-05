import { readFileSync } from 'node:fs';
import { RegistryQuery } from '../../registry/registry-query.js';
import { RegistrySnapshot } from '../../registry/snapshot.js';
import { analyze } from './analyzer.js';
import { CodeEmitter } from './code-emitter.js';
import { IndexEmitter } from './index-emitter.js';
import { TypeMapper } from './type-mapper.js';
import type {
  GeneratedFile,
  GeneratorConfig,
  GeneratorDiagnostic,
  GeneratorResult,
  GeneratorStats,
} from './types.js';

/**
 * Run the full DSL generation pipeline:
 * registry snapshot → analyzer → type mapper → code emitter → index emitter
 *
 * Returns in-memory file contents. Caller is responsible for writing to disk.
 */
export function generate(config: GeneratorConfig): GeneratorResult {
  const diagnostics: GeneratorDiagnostic[] = [];
  const files: GeneratedFile[] = [];

  try {
    // 1. Load registry
    const json = readFileSync(config.registryPath, 'utf-8');
    const registry = new RegistrySnapshot().deserialize(json);
    const query = new RegistryQuery(registry);

    // 2. Analyze
    const analyzed = analyze(registry, query, config.moduleWhitelist);

    // 3. Create pipeline stages
    const mapper = new TypeMapper(analyzed);
    const codeEmitter = new CodeEmitter(analyzed, mapper);
    const indexEmitter = new IndexEmitter(analyzed);

    // 4. Emit per-type files
    let creatableCount = 0;
    let singletonCount = 0;
    let attachedCount = 0;
    let groupedCount = 0;
    let valueCount = 0;
    let enumNamespaces = 0;

    for (const mod of analyzed.modules) {
      for (const type of mod.types) {
        // Only emit files for types that have a user-facing API
        if (
          type.classification === 'internal' ||
          type.classification === 'non-creatable' ||
          type.classification === 'value-type'
        ) {
          if (type.classification === 'value-type') valueCount++;
          continue;
        }

        const code = codeEmitter.emitType(type);
        files.push({
          relativePath: `${mod.directoryName}/${type.qmlName}.ts`,
          content: code,
        });

        switch (type.classification) {
          case 'creatable-object':
            creatableCount++;
            break;
          case 'singleton':
            singletonCount++;
            break;
          case 'attached-type':
            attachedCount++;
            break;
          case 'grouped-surface':
            groupedCount++;
            break;
        }

        const allEnums = [...type.ownEnums, ...type.inheritedEnums];
        if (allEnums.length > 0) enumNamespaces++;
      }
    }

    // 5. Emit index files
    const indexFiles = indexEmitter.getGeneratedFiles();
    files.push(...indexFiles);

    // 6. Collect mapper diagnostics
    diagnostics.push(...mapper.getDiagnostics());

    // 7. Compute stats
    let totalLines = 0;
    for (const file of files) {
      totalLines += file.content.split('\n').length;
    }

    const stats: GeneratorStats = {
      modulesProcessed: analyzed.modules.length,
      typesProcessed: analyzed.allTypes.size,
      creatableTypes: creatableCount,
      singletonTypes: singletonCount,
      attachedTypes: attachedCount,
      groupedSurfaces: groupedCount,
      valueTypes: valueCount,
      enumNamespaces,
      filesGenerated: files.length,
      totalLines,
    };

    return {
      files,
      stats,
      diagnostics,
      success: true,
    };
  } catch (error) {
    diagnostics.push({
      level: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
    return {
      files,
      stats: emptyStats(),
      diagnostics,
      success: false,
    };
  }
}

function emptyStats(): GeneratorStats {
  return {
    modulesProcessed: 0,
    typesProcessed: 0,
    creatableTypes: 0,
    singletonTypes: 0,
    attachedTypes: 0,
    groupedSurfaces: 0,
    valueTypes: 0,
    enumNamespaces: 0,
    filesGenerated: 0,
    totalLines: 0,
  };
}
