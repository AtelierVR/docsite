import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const basePath = process.env.NEXT_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const config = {
  output: process.env.NEXT_OUTPUT === 'export'
    ? 'export'
    : process.env.NEXT_OUTPUT === 'standalone'
      ? 'standalone'
      : undefined,
  reactStrictMode: true,
  assetPrefix: basePath,
  basePath: basePath,
  rewrites: async () => ([
    {
      source: `${basePath}/:path*`,
      destination: `/:path*`,
    }
  ]),
  images: {
    unoptimized: process.env.NEXT_OUTPUT === 'export',
  },
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(',').map(s => s.trim())
    : [
      process.env.ADDRESS,
      process.env.HTTP_DOMAIN
    ]
};

export default withMDX(config);
