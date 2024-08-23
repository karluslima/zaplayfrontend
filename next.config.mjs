/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'savegnago.vteximg.com.br',
        port: '',
      },
    ],
  }
};

export default nextConfig;
