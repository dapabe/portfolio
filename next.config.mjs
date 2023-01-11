//  Usar esto hasta que NextJS apruebe el `next.config.ts`
import { loadSync } from "ts-import";
const loadTS = (filePath) => loadSync(filePath);

const LangsSupported = loadTS("./src/constants/random.ts").LangsSupported;

/**
 *  @type {import('next').NextConfig}
 */
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
  }
};
