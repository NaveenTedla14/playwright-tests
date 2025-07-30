# 🔍 Microsoft Search Bar - Playwright Tests

This project consists of automated end-to-end test scripts using Playwright to validate the **search functionality** of [microsoft.com](https://www.microsoft.com), including edge cases, user behaviors, and input types.

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/playwright-search-tests.git
cd playwright-search-tests

### 2. Install dependencies

npm install

### 3. Run all tests

npx playwright test

### 4. Run tests in headed mode

npx playwright test --headed

### 5. Run tests in diffrent browsers

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

### 6. View test reports

npx playwright show-report

To generate the report:

npx playwright test --reporter html

