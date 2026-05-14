import { APIRequestContext } from '@playwright/test';

export class ArticleController {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

      async loginAndGetToken(): Promise<string> {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const professionalEmail = `hrehory.qa.${randomId}@test.com`;
    const professionalUsername = `hrehory_qa_${randomId}`;
    const defaultPassword = "SecurePassword123!";

    const registerResponse = await this.request.post('/api/users', {
      data: {
        user: {
          username: professionalUsername,
          email: professionalEmail,
          password: defaultPassword
        }
      }
    });

    if (!registerResponse.ok()) {
      throw new Error(`Registration failed. Status ${registerResponse.status()}: ${await registerResponse.text()}`);
    }

    const loginResponse = await this.request.post('/api/users/login', {
      data: {
        user: {
          email: professionalEmail,
          password: defaultPassword
        }
      }
    });

    if (!loginResponse.ok()) {
      throw new Error(`Failed to login. Status ${loginResponse.status()}: ${await loginResponse.text()}`);
    }

    const loginBody = await loginResponse.json();
    return loginBody.user.token;
  }

  async createArticle(token: string, title: string) {
    const response = await this.request.post('/api/articles', {
      headers: {
        'Authorization': `Token ${token}`
      },
      data: {
        article: {
          title: title,
          description: "Why modern engineering teams are migrating from Selenium to Playwright in 2026.",
          body: "Selenium has served the industry for decades, but modern web applications demand faster execution, built-in waiting mechanisms, and robust network interception. This article explores how Playwright solves the flakiness problem out of the box.",
          tagList: ["automation", "playwright", "architecture"]
        }
      }
    });
    return response; 
  }
  async deleteArticle(token: string, slug: string) {
    const deleteResponse = await this.request.delete(`/api/articles/${slug}`, {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
     }
}
