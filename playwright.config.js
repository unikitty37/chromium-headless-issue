import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'pnpm run build && pnpm run preview',
    port: 5174,
    reuseExistingServer: !process.env.CI,
  },

  testDir: 'e2e',

  projects: [
    {
      name: 'old-chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'new-chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chromium' },
    },
  ],
})
