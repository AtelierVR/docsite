import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const title = process.env.DOCS_TITLE || "Documentation";
export const description = process.env.DOCS_DESCRIPTION || "Documentation site";

export const metadata: Metadata = {
  title: {
    template: `%s • ${title}`,
    default: title,
  },
  applicationName: title,
  description: description,
  openGraph: {
    type: "website",
    siteName: title,
  }
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className + " transition-all"} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{
          options: {
            api: `/docs/api/search`,
          },
        }}>
          <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}