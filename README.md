# Playwright Hybrid Test Automation Framework

A professional test automation framework built with Playwright and TypeScript from scratch. This project demonstrates a hybrid automation approach combining fast API data seeding with robust UI validation to achieve maximum test execution speed and environment stability.

## Target Application
The framework automates testing on a real-world production platform Conduit (RealWorld App):
- UI Website: "https://conduit.bondaracademy.com/"
- Backend API: 'https://conduit-api.bondaracademy.com/'

## Architecture and Project Structure
The project follows clean coding standards and strict layers separation for high maintainability:
- api-helpers/ — API controllers seeding dynamic test data on the fly via HTTP requests.
- page-objects/ — UI page classes utilizing the Page Object Model (POM) pattern and modern locators.
- tests/ — Isolated, parallelized end-to-end test scenarios (Pure API and Hybrid workflows).

## Key Features Demonstrated
- AAA Pattern (Arrange, Act, Assert): Clean, highly readable test structure.
- Dynamic On-the-Fly Registration: Tests create their own unique users dynamically, avoiding flaky states and shared account dependencies.
- Auto-waiting and Smart Locators: Utilizing page.getByText() and strict timeouts to eliminate implicit or thread sleeps.
- Robust Failure Capturing: Automatic HTML test reports with screenshots and video recordings on failure.

## Tech Stack
- Language: TypeScript
- Test Runner / Framework: Playwright Engine

## Quick Start

### Installation
Ensure you have Node.js installed, then clone the repository and run:
```bash
npm install
```

### Run Tests
```bash
# Execute all tests in headless mode
npx playwright test

# View interactive HTML report
npx playwright show-report
```
