import { DocsBody, DocsPage, DocsTitle, DocsDescription } from 'fumadocs-ui/layouts/docs/page';
import Link from 'next/link';

export default function NotFound() {
  return (
    <DocsPage>
      <DocsTitle>404 — Page introuvable</DocsTitle>
      <DocsDescription>
        Cette page de documentation n&apos;existe pas ou a été déplacée.
      </DocsDescription>
      <DocsBody>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-fd-primary text-fd-primary-foreground hover:opacity-90 transition-opacity"
          >
            Parcourir la documentation
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-fd-border bg-fd-background hover:bg-fd-accent transition-colors"
          >
            Accueil
          </Link>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
