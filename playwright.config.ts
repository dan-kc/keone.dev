import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  forbidOnly: !!process.env.CI,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:4322",
    browserName: "chromium",
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
    },
  },
  webServer: {
    command: `node --input-type=module -e "import { preview } from 'astro'; await preview({server:{host:'127.0.0.1',port:4322}})"`,
    url: "http://127.0.0.1:4322",
  },
});
