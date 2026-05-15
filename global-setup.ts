import { request } from '@playwright/test';

async function globalSetup() {
  const apiContext = await request.newContext({
    baseURL: 'https://conduit-api.bondaracademy.com'
  });

  const randomId = Math.floor(1000 + Math.random() * 9000);
  const email = `hrehory.auth.${randomId}@test.com`;
  const username = `hrehory_auth_${randomId}`;
  const password = "SecurePassword123!";

  const registerResponse = await apiContext.post('/api/users', {
    data: { user: { username, email, password } }
  });

  if (!registerResponse.ok()) {
    throw new Error(`Global registration failed: ${await registerResponse.text()}`);
  }

  const loginResponse = await apiContext.post('/api/users/login', {
    data: { user: { email, password } }
  });

  if (!loginResponse.ok()) {
    throw new Error(`Global login failed: ${await loginResponse.text()}`);
  }

  await apiContext.storageState({ path: 'auth/user-state.json' });
  await apiContext.dispose();
}

export default globalSetup;
