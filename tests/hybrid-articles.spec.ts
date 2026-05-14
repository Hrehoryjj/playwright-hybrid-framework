import {test, expect} from '@playwright/test';
import {ArticleController} from '../api-helpers/ArticleController';
import {HomePage} from '../page-objects/HomePage';
import {ArticlePage} from '../page-objects/ArticlePage';

test.describe('Conduit Hybrid Flows', () => {
    test('Creating article with API and checking with UI', async ({request, page}) => {

const articleController = new ArticleController(request);
const homePage = new HomePage(page);
const articlePage = new ArticlePage(page);
const token = await articleController.loginAndGetToken();   
const uniqueTitle = `Playwright Deep Dive Part ${Date.now()}`;
const createResponse = await articleController.createArticle(token, uniqueTitle);

const responseBody = await createResponse.json();
const articleSlug = responseBody.article.slug;

await articlePage.openBySlug(articleSlug);
await articlePage.verifyArticleContent(uniqueTitle, "Selenium has served the industry for decades, but modern web applications demand faster execution, built-in waiting mechanisms, and robust network interception. This article explores how Playwright solves the flakiness problem out of the box.");

});
});