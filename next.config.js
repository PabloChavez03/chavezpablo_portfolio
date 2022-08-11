const { config } = require('dotenv');
config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_PUBLIC_KEY: process.env.YOUR_PUBLIC_KEY,
  }
}

module.exports = nextConfig
