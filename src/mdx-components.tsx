import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import * as Twoslash from "fumadocs-twoslash/ui";
import type { MDXComponents } from 'mdx/types';
import { APIPage } from '@/components/api-page';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage,
    img: (props) => <img
      {...props}
      src={props.src.src}
      className="rounded-md border bg-fd-card shadow-md mx-auto"
    />,
    ...Twoslash,
    Tab,
    Tabs,
    ...components,
  };
}
