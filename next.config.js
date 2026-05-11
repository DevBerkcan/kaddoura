/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.autocenter-kaddoura.de" },
      { protocol: "https", hostname: "www.volvocars.com" },
      { protocol: "https", hostname: "d38vh54tbm9io9.cloudfront.net" },
    ],
  },
};

module.exports = nextConfig;
