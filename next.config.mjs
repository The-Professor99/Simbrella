/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ap.rdcpix.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ar.rdcpix.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
