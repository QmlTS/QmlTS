import type { PerfCategory, PerfProfiler, PerfRecord, PerfSpan, PerfSummary } from './dev-types.js';

interface MutableRecord {
  name: string;
  category: PerfCategory;
  startMs: number;
  durationMs: number;
  metadata: Record<string, string | number | boolean>;
  ended: boolean;
}

/**
 * Create a performance profiler for development-time span tracking.
 *
 * Records compile, hot-reload, capture, restore, and other dev-loop spans.
 * Supports summary aggregation and Chrome Trace export.
 */
export function createPerfProfiler(): PerfProfiler {
  const records: MutableRecord[] = [];

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
      };
    },

    getRecords(): readonly PerfRecord[] {
      return records.map((r) => {
        const result: PerfRecord = {
          name: r.name,
          category: r.category,
          startMs: r.startMs,
          durationMs: r.durationMs,
        };
        if (Object.keys(r.metadata).length > 0) {
          return { ...result, metadata: { ...r.metadata } };
        }
        return result;
      });
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
      const events = records.map((r) => ({
        name: r.name,
        cat: r.category,
        ph: 'X',
        ts: Math.round(r.startMs * 1000),
        dur: Math.round(r.durationMs * 1000),
        pid: 1,
        tid: 1,
        args: Object.keys(r.metadata).length > 0 ? { ...r.metadata } : undefined,
      }));

      return JSON.stringify({ traceEvents: events }, null, 2);
    },
  };
}
