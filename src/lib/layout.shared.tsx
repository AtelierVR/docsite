import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import { title } from '@/app/layout';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/favicon.svg"
            id="logo"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span>{title}</span>
        </div>
      ),
      transparentMode: 'top',
    },
    githubUrl: process.env.DOCS_GITHUB_URL ||
      `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
