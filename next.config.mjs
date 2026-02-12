/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Local development
      {
        protocol: 'http',
        hostname: 'https://ride-xtra-admin-eta.vercel.app/',
        port: '8082',
        pathname: '/**',
      },

      // Production (VM External IP)
      {
        protocol: 'https',
        hostname: 'https://ride-xtra-admin-eta.vercel.app/',
        port: '3030', // IMPORTANT if images come from backend
        pathname: '/**',
      },
    ],
  },

  // // App is served under sub-path
  // basePath: '/RideXtra',
  // assetPrefix: '/RideXtra/',
};

export default nextConfig;
