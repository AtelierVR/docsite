import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

console.log('Docs base path:', process.env.DOCS_BASE_PATH);

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ['typescript', 'twoslash'],
  assetPrefix: process.env.DOCS_BASE_PATH || undefined,
  rewrites: [
    {
      source: `${process.env.DOCS_BASE_PATH || ''}/_next/static/:path*`,
      destination: `/_next/static/:path*`,
    }
  ]
};

export default withMDX(config);
