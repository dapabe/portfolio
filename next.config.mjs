/** @type {import('next').NextConfig} */

import { LangsSupported } from "./src/utils/constants.mjs/index.js"

export default {
  experimental: {
    appDir: true
  },
  i18n: {
    locales: LangsSupported,
    defaultLocale: LangsSupported[0],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
