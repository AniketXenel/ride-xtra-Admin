/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ride-xtra-admin-eta.vercel.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
