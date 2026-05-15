import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  globalSetup: require.resolve('./global-setup'),
  use: {
    baseURL: 'https://conduit-api.bondaracademy.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'auth/user-state.json',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
