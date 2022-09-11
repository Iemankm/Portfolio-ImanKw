/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
