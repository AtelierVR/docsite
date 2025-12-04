import { docs } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { openapiPlugin } from 'fumadocs-openapi/server';
import * as HeroIcon from '@heroicons/react/24/solid';
import { createElement } from "react";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon: getIcon,
  plugins: [lucideIconsPlugin(), openapiPlugin()],
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}
export function getIcon(icon?: string) {
  if (!icon) return;

  const iconName = Object.keys(HeroIcon).find((key) => key.toLowerCase() === (icon.replaceAll('-', '') + "icon").toLowerCase());
  if (iconName) return createElement(HeroIcon[iconName as keyof typeof HeroIcon]);

  console.warn(`Icon "${icon}" not found.`);
  return null;
}
