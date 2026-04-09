# Structure

## Content

| Path | Description |
|---|---|
| `content/(introduction)/` | Getting started and contributing guides |
| `content/(guides)/` | Avatar, world, and shader documentation |
| `content/(technical)/` | Relay protocol and server internals |
| `content/api/` | Auto-generated API reference (from OpenAPI) |

## Source

| Path | Description |
|---|---|
| `src/components/` | Custom MDX components and API page renderer |
| `src/app/` | Next.js App Router pages and layouts |
| `src/lib/` | Shared utilities (source adapter, OpenAPI loader) |
| `scripts/generate-docs.ts` | Generates `content/api/(generated)/` from OpenAPI |
