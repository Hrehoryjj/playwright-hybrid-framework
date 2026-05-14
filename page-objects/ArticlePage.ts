import { Locator, Page, expect } from '@playwright/test';
import { HomePage } from './HomePage';

export class ArticlePage {
  private page: Page;
  private articleTitle: Locator;
  private articleBody: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articleTitle = page.locator('.banner h1');
    this.articleBody = page.locator('.article-content p');
  }

    async openBySlug(slug: string) {
    await this.page.goto(`https://conduit.bondaracademy.com/article/${slug}`);
  }


  async verifyArticleContent(expectedTitle: string, expectedBody: string) {
    await expect(this.articleTitle).toHaveText(expectedTitle);
  await expect(this.articleBody).toHaveText(expectedBody);
  }
}
