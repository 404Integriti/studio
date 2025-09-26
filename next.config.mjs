/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'testing.tricode.org',
      },
      {
        protocol: 'https',
        hostname: 'websitesblogs.integritistaffing.com',
      },
    ],
  },

};
 
export default nextConfig;

 