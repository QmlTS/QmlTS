import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(here, '..');

copyFileSync(join(pkgRoot, 'index.template.d.ts'), join(pkgRoot, 'index.d.ts'));
