'use client';

import { DocsBody, DocsPage, DocsTitle, DocsDescription } from 'fumadocs-ui/layouts/docs/page';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Documentation error:', error);
  }, [error]);

  return (
    <DocsPage>
      <DocsTitle>Une erreur est survenue</DocsTitle>
      <DocsDescription>
        Une erreur s&apos;est produite lors du chargement de cette page.
      </DocsDescription>
      <DocsBody>
        {process.env.NODE_ENV === 'development' && error.message && (
          <pre className="mb-4 rounded-lg border border-fd-border bg-fd-muted p-4 text-xs font-mono text-fd-destructive break-all whitespace-pre-wrap">
            {error.message}
            {error.digest && `\n\nError ID: ${error.digest}`}
          </pre>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-fd-primary text-fd-primary-foreground hover:opacity-90 transition-opacity"
          >
            Réessayer
          </button>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-fd-border bg-fd-background hover:bg-fd-accent transition-colors"
          >
            Retour à la documentation
          </Link>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
