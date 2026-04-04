import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export async function withTempQmlFile<T>(
  content: string,
  fn: (filePath: string) => Promise<T>,
): Promise<T> {
  const dir = await mkdtemp(join(tmpdir(), 'qmlts-'));
  const filePath = join(dir, 'input.qml');
  try {
    await writeFile(filePath, content.replace(/\r\n/g, '\n'), 'utf-8');
    return await fn(filePath);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}
