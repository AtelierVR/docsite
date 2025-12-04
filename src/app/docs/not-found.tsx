import Link from 'next/link';
import { source } from '@/lib/source';

export default function NotFound() {
    let first = source.pageTree.children.find(page => page.type === 'page');
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 min-h-screen">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">404</h1>
                    <p className="text-xl font-semibold">Page Not Found</p>
                    <p className="text-muted-foreground max-w-md">
                        The documentation page you're looking<br />
                        for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Link
                        href={first ? first.url : '/docs'}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Browse Documentation
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
