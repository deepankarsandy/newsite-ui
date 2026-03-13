import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "component-tagger";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tanstackRouter(),
    tailwindcss(),
    componentTagger({
      includeId: true, // data-component-id="src/Button.tsx:15:4"
      includeName: false, // data-component-name="Button"
      includePath: false, // data-component-path="src/Button.tsx"
      includeLine: false, // data-component-line="15"
      includeFile: false, // data-component-file="Button.tsx"
      includeContent: false, // data-component-content="%7B...%7D"
      developmentOnly: true, // Only in development
    }),
  ],
  server: {
    port: 8080,
    allowedHosts: ["sandyhome.local"],
  },
  // base: process.env.NODE_ENV === "production" ? "/site/" : "/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/__tests__/**/*.{test,spec}.{ts,tsx}"],
  },
  preview: {
    port: 5000,
    allowedHosts: ["sandyhome.local", "deepankar.ddns.net"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./assets"),
    },
  },
});
