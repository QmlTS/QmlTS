import type { PerfCategory, PerfProfiler, PerfRecord, PerfSpan, PerfSummary } from './dev-types.js';

interface MutableRecord {
  name: string;
  category: PerfCategory;
  startMs: number;
  durationMs: number;
  metadata: Record<string, string | number | boolean>;
  ended: boolean;
  instanceId?: number;
  className?: string;
  compilerSlotKey?: string;
}

/**
 * Create a performance profiler for development-time span tracking.
 *
 * Records compile, hot-reload, capture, restore, and other dev-loop spans.
 * Supports summary aggregation and Chrome Trace export.
 */
export function createPerfProfiler(): PerfProfiler {
  const records: MutableRecord[] = [];

  function toRecord(r: MutableRecord): PerfRecord {
    return {
      name: r.name,
      category: r.category,
      startMs: r.startMs,
      durationMs: r.durationMs,
      ...(Object.keys(r.metadata).length > 0 && { metadata: { ...r.metadata } }),
      ...(r.instanceId !== undefined && { instanceId: r.instanceId }),
      ...(r.className !== undefined && { className: r.className }),
      ...(r.compilerSlotKey !== undefined && { compilerSlotKey: r.compilerSlotKey }),
    };
  }

  return {
    startSpan(name: string, category: PerfCategory): PerfSpan {
      const record: MutableRecord = {
        name,
        category,
        startMs: performance.now(),
        durationMs: 0,
        metadata: {},
        ended: false,
      };

      return {
        end(): void {
          if (record.ended) return;
          record.ended = true;
          record.durationMs = performance.now() - record.startMs;
          records.push(record);
        },

        addMetadata(key: string, value: string | number | boolean): void {
          if (record.ended) return;
          record.metadata[key] = value;
        },

        setInstanceContext(instanceId: number, className: string, compilerSlotKey?: string): void {
          if (record.ended) return;
          record.instanceId = instanceId;
          record.className = className;
          record.compilerSlotKey = compilerSlotKey;
        },
      };
    },

    getRecords(): readonly PerfRecord[] {
      return records.map(toRecord);
    },

    getSummary(): PerfSummary {
      const totals: Partial<Record<PerfCategory, number>> = {};
      const counts: Partial<Record<PerfCategory, number>> = {};

      for (const r of records) {
        totals[r.category] = (totals[r.category] ?? 0) + r.durationMs;
        counts[r.category] = (counts[r.category] ?? 0) + 1;
      }

      const averages: Partial<Record<PerfCategory, number>> = {};
      for (const cat of Object.keys(counts) as PerfCategory[]) {
        averages[cat] = totals[cat]! / counts[cat]!;
      }

      return {
        averageByCategory: averages,
        totalByCategory: totals,
        countByCategory: counts,
        totalRecords: records.length,
      };
    },

    clear(): void {
      records.length = 0;
    },

    exportChromeTrace(): string {
      const events = records.map((r) => {
        const args: Record<string, string | number | boolean> = {};
        if (Object.keys(r.metadata).length > 0) {
          Object.assign(args, r.metadata);
        }
        if (r.instanceId !== undefined) args.instanceId = r.instanceId;
        if (r.className !== undefined) args.className = r.className;
        if (r.compilerSlotKey !== undefined) args.compilerSlotKey = r.compilerSlotKey;

        return {
          name: r.name,
          cat: r.category,
          ph: 'X',
          ts: Math.round(r.startMs * 1000),
          dur: Math.round(r.durationMs * 1000),
          pid: 1,
          tid: 1,
          args: Object.keys(args).length > 0 ? args : undefined,
        };
      });

      return JSON.stringify({ traceEvents: events }, null, 2);
    },

    getRecordsByInstance(instanceId: number): readonly PerfRecord[] {
      return records.filter((r) => r.instanceId === instanceId).map(toRecord);
    },

    getRecordsByClass(className: string): readonly PerfRecord[] {
      return records.filter((r) => r.className === className).map(toRecord);
    },

    getRecordsBySlotKey(slotKey: string): readonly PerfRecord[] {
      return records.filter((r) => r.compilerSlotKey === slotKey).map(toRecord);
    },
  };
}
