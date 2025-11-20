/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["urbanmakes.com"], // <-- add this
  },
};

module.exports = nextConfig;
