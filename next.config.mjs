/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  extends: ['next/core-web-vitals', 'next/babel'],
  /*rewrites: async () => {
    return [
      {
        source: '/Kontakt',
        destination: '/Routes/Kontakt',
      },
      {
        source: '/Zutaten',
        destination: '/routes/impressum',
      },
      // Add more rewrites for other routes
    ];
  },*/
};
export default nextConfig;