import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
  private page: Page;
  private globalFeedTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalFeedTab = page.getByText('Global Feed');
  }

  async navigate() {
await this.page.goto('https://conduit.bondaracademy.com');
  }

  async switchToGlobalFeed() {
    await this.globalFeedTab.click();
  }

  async verifyArticleIsVisible(title: string) {
    const specificArticle = this.page.locator('app-article-list').getByRole('heading', { name: title });
    await expect(specificArticle).toBeVisible({ timeout: 10000 });
  }
}
