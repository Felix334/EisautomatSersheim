/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  extends: ['next/core-web-vitals', 'next/babel'],
  images: {
    
  },
  experimental: {
    images: {
      allowFsAccess: true,
    },
  },
};


export default nextConfig;