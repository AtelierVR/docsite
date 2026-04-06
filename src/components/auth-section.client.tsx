'use client';

import { useState } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types (serialisable props only — no fumadocs ctx objects)
// ---------------------------------------------------------------------------

export type AnyScheme = {
  type?: string;
  scheme?: string;
  bearerFormat?: string;
  name?: string;
  in?: string;
  description?: string;
  [key: string]: unknown;
};

export interface AuthSectionClientProps {
  securities: Record<string, string[]>[];
  allSchemes: Record<string, AnyScheme>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function schemeDisplay(scheme: AnyScheme): { name: string; type: string; location: string } {
  const xAuthScheme = scheme['x-auth-scheme'] as string | undefined;
  const xTokenFormat = scheme['x-token-format'] as string | undefined;

  if (scheme.type === 'http') {
    const s = xAuthScheme ?? scheme.scheme ?? 'bearer';
    const f = xTokenFormat ?? scheme.bearerFormat ?? 'token';
    return { name: 'Authorization', type: `${s} <${f}>`, location: 'header' };
  }
  if (scheme.type === 'apiKey') {
    const t = xAuthScheme
      ? `${xAuthScheme} ${xTokenFormat ?? 'token'}`
      : (xTokenFormat ?? '<token>');
    return { name: String(scheme.name ?? 'Authorization'), type: t, location: String(scheme.in ?? 'header') };
  }
  return { name: 'Authorization', type: '<token>', location: 'header' };
}

function AuthEntry({ scheme }: { scheme: AnyScheme }) {
  const { name, type, location } = schemeDisplay(scheme);
  return (
    <div className="text-sm my-4">
      <div className="flex flex-wrap items-center gap-3 not-prose">
        <span className="font-medium font-mono text-fd-primary">{name}</span>
        <span className="text-sm font-mono text-fd-muted-foreground">{type}</span>
      </div>
      <div className="prose-no-margin pt-2.5 empty:hidden">
        {scheme.description && <p>{scheme.description as string}</p>}
        <p>In: <code>{location}</code></p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dropdown label for each security requirement
// ---------------------------------------------------------------------------

function SecurityLabel({ security }: { security: Record<string, string[]> }) {
  return (
    <div className="flex flex-col text-xs min-w-0">
      {Object.entries(security).map(([key, scopes]) => (
        <code key={key} className="truncate">
          <span className="font-medium">{key}</span>
          {scopes.length > 0 && (
            <>
              {' '}
              <span className="text-fd-muted-foreground">{scopes.join(', ')}</span>
            </>
          )}
        </code>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main exported component
// ---------------------------------------------------------------------------

export function AuthSectionClient({ securities, allSchemes }: AuthSectionClientProps) {
  const items = securities.map((sec, i) => ({
    value: String(i),
    security: sec,
  }));

  const [value, setValue] = useState(items[0].value);
  const current = securities[Number(value)];

  return (
    <div className="mt-10">
      <div className="flex items-start justify-between gap-2">
        {/* Heading styled to match fumadocs h2 inside prose */}
        <h2 id="authorization" className="my-0! text-xl font-semibold tracking-tight">
          Authorization
        </h2>

        {items.length > 1 ? (
          <SelectPrimitive.Root value={value} onValueChange={setValue}>
            <SelectPrimitive.Trigger className="not-prose flex items-center w-fit min-w-0 rounded-md border p-2 gap-2 text-start text-sm text-fd-secondary-foreground bg-fd-secondary hover:bg-fd-accent focus:outline-none focus:ring focus:ring-fd-ring *:min-w-0">
              <SelectPrimitive.Value>
                <SecurityLabel security={securities[Number(value)]} />
              </SelectPrimitive.Value>
              <SelectPrimitive.Icon asChild>
                <ChevronDown className="ms-auto size-3.5 text-fd-muted-foreground shrink-0" />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
              <SelectPrimitive.Content className="z-50 overflow-hidden rounded-lg border bg-fd-popover text-fd-popover-foreground shadow-md">
                <SelectPrimitive.ScrollUpButton className="flex items-center justify-center py-1">
                  <ChevronUp className="size-4" />
                </SelectPrimitive.ScrollUpButton>
                <SelectPrimitive.Viewport className="p-1">
                  {items.map(({ value: v, security }) => (
                    <SelectPrimitive.Item
                      key={v}
                      value={v}
                      className="flex select-none flex-row items-center rounded-md py-1.5 px-2 text-sm outline-none focus:bg-fd-accent focus:text-fd-accent-foreground"
                    >
                      <SelectPrimitive.ItemText>
                        <SecurityLabel security={security} />
                      </SelectPrimitive.ItemText>
                      <SelectPrimitive.ItemIndicator className="ms-auto">
                        <Check className="size-3.5 text-fd-primary" />
                      </SelectPrimitive.ItemIndicator>
                    </SelectPrimitive.Item>
                  ))}
                </SelectPrimitive.Viewport>
                <SelectPrimitive.ScrollDownButton className="flex items-center justify-center py-1">
                  <ChevronDown className="size-4" />
                </SelectPrimitive.ScrollDownButton>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        ) : (
          <div className="not-prose">
            <SecurityLabel security={items[0].security} />
          </div>
        )}
      </div>

      <div className="divide-y">
        {Object.keys(current).map((key) => {
          const scheme = allSchemes[key];
          if (!scheme) return null;
          return <AuthEntry key={key} scheme={scheme} />;
        })}
      </div>
    </div>
  );
}
