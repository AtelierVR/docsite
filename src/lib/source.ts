import { docs } from 'collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { openapiPlugin } from 'fumadocs-openapi/server';
import * as HeroIcon from '@heroicons/react/24/solid';
import { createElement } from 'react';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  icon: getIcon,
  plugins: [openapiPlugin()],
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}

export function getIcon(icon?: string) {
  if (!icon) return;

  const iconName = Object.keys(HeroIcon).find(
    (key) => key.toLowerCase() === (icon.replaceAll('-', '') + 'icon').toLowerCase(),
  );
  if (iconName) return createElement(HeroIcon[iconName as keyof typeof HeroIcon]);

  console.warn(`Icon "${icon}" not found.`);
  return null;
}
