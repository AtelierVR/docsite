import { createOpenAPI } from 'fumadocs-openapi/server';

export const options = {
  input: ['./public/openapi.yaml'],
  output: './content/api/(generated)',
};

export const openapi = createOpenAPI({
  ...options,
});