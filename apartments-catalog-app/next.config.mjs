/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    CLIENT_API_URL: "http://localhost:3001",
  },
};

export default nextConfig;
