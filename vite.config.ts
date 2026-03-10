import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import { componentTagger } from "component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tanstackRouter(), tailwindcss(), componentTagger(
    {
      includeId: true,          // data-component-id="src/Button.tsx:15:4"
      includeName: false,       // data-component-name="Button"
      includePath: false,        // data-component-path="src/Button.tsx"
      includeLine: false,        // data-component-line="15"
      includeFile: false,        // data-component-file="Button.tsx"
      includeContent: false,    // data-component-content="%7B...%7D"
      developmentOnly: true     // Only in development
    }
  )],
  server: {
    port: 8080,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    include: ["src/**/__tests__/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
