import { createOpenAPI } from 'fumadocs-openapi/server';

export const options = {
  input: ['./public/openapi.yaml'],
  output: './content/docs/api/(generated)',
};

export const openapi = createOpenAPI({
  ...options,
});