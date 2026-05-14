import { test, expect } from '@playwright/test';

test.describe('Articles API Testing', () => {

  test('Should return 404 Not Found for non-existing article', async ({ request }) => {
    
    const response = await request.get('/api/articles/this-article-does-not-exist-12345');

    expect(response.status()).toBe(404);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('errors');
  });

});
