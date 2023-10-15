/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLinaria = require('next-with-linaria');

const nextConfig = {
  // App Directory を有効化
  experimental: {
    appDir: true,
  },
};
module.exports = withLinaria(nextConfig);
