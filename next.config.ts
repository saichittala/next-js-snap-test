import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/next-js-snap-test' : '',
  output: 'export', // This replaces 'next export'
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;


// "homepage": "https://saichittala.github.io/next-js-snap-test/",
