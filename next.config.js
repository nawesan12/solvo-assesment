/** @type {import("next").NextConfig} */
const PWA = require("next-pwa")

const withPWA = PWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
})

const config = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  }
})

module.exports = config
