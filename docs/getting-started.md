# Getting Started

## Prerequisites

- Node.js 20+
- A built OpenAPI spec from the [NoxVR Node](https://github.com/AtelierVR/node) project

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Generate API Reference

API reference pages are auto-generated from the node server's OpenAPI spec:

```bash
# 1. Copy openapi.yaml from the node project
cp ../node/_openapi.yaml public/openapi.yaml

# 2. Generate MDX pages
npx ts-node scripts/generate-docs.ts
```

> `content/api/(generated)/` and `.source/` are gitignored — regenerate them locally or in CI.

## Build

```bash
npm run build   # Static export to out/
```
