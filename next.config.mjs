/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['@better-auth/kysely-adapter', 'kysely'],
  }
};

export default nextConfig;
