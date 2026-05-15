# Playwright Hybrid Framework (UI + API)

A lightweight test automation framework built to demonstrate modern hybrid test architecture using Playwright and TypeScript. Designed to validate end-to-end user workflows with high execution speed and environment stability.

## Features

- Hybrid UI + API test execution
- Page Object Model (POM) architecture
- Explicit backend request contexts for fast data seeding
- Automated runtime test user registration
- Isolated data cleanup via hooks
- Parallel execution support
- Built-in Playwright HTML reporting
- GitHub Actions CI pipeline integration

## Project Structure

```
/api-helpers
  - ArticleController.ts
/page-objects
  - HomePage.ts
  - ArticlePage.ts
/tests
  - api-articles.spec.ts
  - hybrid-articles.spec.ts
```

## Running Tests

Install dependencies:  
```bash
npm install
```

Run all tests in headless mode:  
``` bash
npx playwright test
```

Open interactive HTML test report:  
``` bash
npx playwright show-report
```

## Reporting

The framework utilizes standard Playwright HTML Reporter to generate comprehensive test run details, complete with step-by-step logs, screenshots on failure, and video recordings.

## Project Purpose

This project was built as part of my QA Automation path to practice and master:
- Full-stack hybrid test synchronization (API seeding + UI verification)
- Scalable, low-maintenance test suite design
- Flakiness elimination via modern element locators and automatic waiting
- Automated regression pipeline setup (CI/CD)

## Tech Stack

- TypeScript
- Playwright Engine
- Node.js
- GitHub Actions

## Author

Hryhorii Markevych  
QA Automation Engineer
