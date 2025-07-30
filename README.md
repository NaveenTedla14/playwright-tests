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
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run all tests

```bash
npx playwright test
```

### 4. Run tests in headed mode

```bash
npx playwright test --headed
```

### 5. Run tests in diffrent browsers

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### 6. View test reports

```bash
npx playwright show-report

To generate the report:

npx playwright test --reporter html
```

## Test Coverage

| Test Case ID| Description                                                  | Expected Result                      | Status(chrome)|Status(firefox)|Status(safari)
|-------------|--------------------------------------------------------------|--------------------------------------|---------------|---------------|--------------|
| TC01        | Search bar is visible and interactive                        | Search bar is displayed              | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC02        | Search with valid input ,click search button                 | Results are dispalyed                | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC03        | Search with valid input, press Enter                         | Resutls are displayed                | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC04        | Search and navigating to first result                        | Navigated and verified Title         | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC05        | Click and Select from Dropdown Menu                          | Navigated to menu and verified Title | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC06        | Search with random input                                     | page displays with no results text   | ✅ Pass       | ✅ Pass        | ✅ Pass      | 
| TC07        | Search with empty input                                      | no results are displayed             | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC08        | Search with special characters                               | page shows results                   | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC09        | Search with whitespace                                       | page shows no results                | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC10        | Search input field does not accept more than 100 characters  | Only 100 chars allowed               | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC11        | Search with multilingual input (French)                      | page shows results                   | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC12        | Paste input into search field via keyboard paste simulation  | page shows results                   | ✅ Pass       | ✅ Pass        | ✅ Pass      |
| TC13        | Search with valid input and shows autocomplete suggestions   | auto suggestions are displayed       | ✅ Pass       | ✅ Pass        | ✅ Pass      |


