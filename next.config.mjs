/**
 *  @type {import('next').NextConfig}
 */

//  Usar esto hasta que NextJS apruebe el `next.config.ts`
import * as tsImport from "ts-import";
const loadTS = (filePath) => tsImport.loadSync(filePath);

const LangsSupported = loadTS("./src/utils/constants.ts").LangsSupported;

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
