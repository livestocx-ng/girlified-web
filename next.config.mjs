import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    // Expose Maps key to the client (Maps JS API requires a browser key)
    NEXT_PUBLIC_GOOGLE_MAP_API_KEY: (process.env.GOOGLE_MAP_API_KEY || '').replace(
      /^['"]|['"]$/g,
      ''
    ),
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
});
