import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const pathing = path.resolve;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": pathing(__dirname, "./src"),
      "@hooks": pathing(__dirname, "./src/components/hooks"),
      "@pages": pathing(__dirname, "./src/components/pages"),
      "@ui": pathing(__dirname, "./src/components/core-ui"),
      "@context": pathing(__dirname, "./src/context"),
    },
  },
});
