/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.autocenter-kaddoura.de" },
      { protocol: "https", hostname: "www.volvocars.com" },
    ],
  },
};

module.exports = nextConfig;
