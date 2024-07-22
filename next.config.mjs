import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'app');
    return config;
  },
};

export default nextConfig;
