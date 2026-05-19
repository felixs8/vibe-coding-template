import { defineConfig } from "cypress";

// Patch for Cypress 15 + Next.js 16 compatibility.
// Cypress 15's nextHandler calls webpackModule.init() which Next.js 16 removed
// (webpack 5 is always used). A no-op is safe.
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const nextWebpack = require("next/dist/compiled/webpack/webpack.js");
  if (typeof nextWebpack.init !== "function") {
    nextWebpack.init = () => {};
  }
} catch {
  // ignore if module path changes in future Next.js versions
}

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
