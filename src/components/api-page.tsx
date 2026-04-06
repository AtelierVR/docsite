import { openapi } from '@/lib/openapi';
import { createAPIPage, type CreateAPIPageOptions } from 'fumadocs-openapi/ui';
import type { RenderContext } from 'fumadocs-openapi';
import client from './api-page.client';
import { type AnyScheme, AuthSectionClient } from './auth-section.client';
import { AutoOpenFirstResponse } from './auto-open-response.client';

// Derive the exact method type that renderOperationLayout receives
type OperationMethod = Parameters<NonNullable<NonNullable<CreateAPIPageOptions['content']>['renderOperationLayout']>>[2];

function CustomAuthSection({ method, ctx }: { method: OperationMethod; ctx: RenderContext }) {
  const allSchemes = (ctx.schema.dereferenced.components?.securitySchemes ?? {}) as Record<string, AnyScheme>;
  const securities = ((method.security ?? ctx.schema.dereferenced.security ?? []) as Record<string, string[]>[]).filter(
    (v: Record<string, string[]>) => Object.keys(v).length > 0,
  );
  if (securities.length === 0) return null;

  return <AuthSectionClient securities={securities} allSchemes={allSchemes} />;
}

// ---------------------------------------------------------------------------
// APIPage with custom operation layout (replaces authSchemes slot only)
// ---------------------------------------------------------------------------

export const APIPage = createAPIPage(openapi, {
  client,
  content: {
    renderOperationLayout: (slots, ctx, method) => (
      <div className="flex flex-col gap-x-6 gap-y-4 @4xl:flex-row @4xl:items-start">
        <div className="min-w-0 flex-1">
          {slots.header}
          {slots.apiPlayground}
          {slots.description}
          <CustomAuthSection method={method} ctx={ctx} />
          {slots.parameters}
          {slots.body}
          <AutoOpenFirstResponse>{slots.responses}</AutoOpenFirstResponse>
          {slots.callbacks}
        </div>
        <div className="@4xl:sticky @4xl:top-[calc(var(--fd-docs-row-1,2rem)+1rem)] @4xl:w-[400px]">
          {slots.apiExample}
        </div>
      </div>
    ),
  },
});

