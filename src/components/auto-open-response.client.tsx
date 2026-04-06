'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function AutoOpenFirstResponse({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = ref.current?.querySelector<HTMLButtonElement>(
      'button[data-state="closed"]',
    );
    trigger?.click();
  }, []);

  return <div ref={ref}>{children}</div>;
}
