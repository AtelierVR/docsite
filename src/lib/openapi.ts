import { createOpenAPI } from 'fumadocs-openapi/server';
import { readdirSync } from 'fs';
import { join } from 'path';

const publicDir = join(process.cwd(), 'public');
const yamlFiles = readdirSync(publicDir)
  .filter((f) => f.match(/^openapi(-.*)?\.yaml$/))
  .map((f) => `./public/${f}`);

export const options = {
  input: yamlFiles,
  output: './content/api/(generated)',
};

export const openapi = createOpenAPI({
  ...options,
});
