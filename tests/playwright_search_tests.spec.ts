// playwright_search_tests.spec.ts
import { test, expect } from '@playwright/test';

const baseURL = 'https://learn.microsoft.com/en-us/search/';

// Tests related to Search Functionality
test.describe('Microsoft Learn Search Functionality', () => {



  // Hook function to navigate to baseURL before each test
  test.beforeEach(async ({ page }) => {
    // Navigate to base URL before each test and open the search interface
    await page.goto(baseURL);
  });


  // To verify search bar is visibile and interactive
  test('TC01: Search bar is visible and interactive', async ({ page }) => {
    // Check if search input is visible to the user
    await expect(page.locator('input[id="facet-search-input"]')).toBeVisible();
  });


  // To verify search functionality with valid input ,click search button and display results
  test('TC02: Search with valid input ,click search button and display results', async ({ page }) => {
    // Enter a valid search term 'Azure' and verify results are shown
    await page.fill('input[id="facet-search-input"]', 'Azure');
    // Click on the Search button
    await page.click('button[id="facet-search-submit"]');
    await expect(page).toHaveURL(/search/);
    // First search result to be visible
    await expect(page.locator('a[data-bi-name="searchItem.0"]')).toBeVisible();
    // First search result to contain text 'Azure'
    await expect(
      page.locator('a[data-bi-name="searchItem.0"]')
    ).toContainText(/Azure/i);
  });


  // To verify search functionality with valid input,press Enter and display results
  test('TC03: Search with valid input, press Enter and  shows results', async ({ page }) => {
    // Enter a valid search term 'Azure' and verify results are shown
    await page.fill('input[id="facet-search-input"]', 'Azure');
    // Press Enter button to begin search
    await page.press('input[id="facet-search-input"]', 'Enter');
    await expect(page).toHaveURL(/search/);
    // First search result to be visible
    await expect(page.locator('a[data-bi-name="searchItem.0"]')).toBeVisible();
    // First search result to contain text 'Azure'
    await expect(
      page.locator('a[data-bi-name="searchItem.0"]')
    ).toContainText(/Azure/i);
  });


  // To verify search and navigating to first result link
  test('TC04: Search with valid input and navigating to first result link', async ({ page }) => {
    // Enter a valid search term 'Azure developer documentation' and verify results are shown
    await page.fill('input[id="facet-search-input"]', 'Azure developer documentation');
    // Click on search button
    await page.click('button[id="facet-search-submit"]');
    await expect(page).toHaveURL(/search/);
    // Verify first result is visible
    await expect(page.locator('a[data-bi-name="searchItem.0"]')).toBeVisible();
    // Verify first result contain text 'Azure developer documentation'
    await expect(
      page.locator('a[data-bi-name="searchItem.0"]')
    ).toContainText(/Azure developer documentation/i);
    // Click on the first result
    await page.click('a[data-bi-name="searchItem.0"]')
    // Verify titile 'Azure developer documentation' is displayed
    await expect(
      page.locator('[id="hero-title"]')
    ).toContainText("Azure developer documentation");
  });


  // To click and select from Dropdown Menu
  test('TC05: Click and Select from Dropdown Menu', async ({ page }) => {
    // click on 'Product Documentation' Menu
    await page.click('panel-controller[data-bi-name$="product-documentation"]');
    // click on the 'Azure' link
    await page.click('a[data-bi-name$="azure"]');
    // Verify title 'Azure documentation' is displayed
    await expect(
      page.locator('[id="hero-title"]')
    ).toContainText("Azure documentation");

  });

  // To verify search with random input and page displays with 'no resutls' text
  test('TC06: Search with random input and page displays with no results text', async ({ page }) => {
    // Provided random input in the search field 'asdfgh12345'
    await page.fill('input[id="facet-search-input"]', 'asdfgh12345');
    // Press enter to begin search
    await page.press('input[id="facet-search-input"]', 'Enter');
    await expect(page).toHaveURL(/search/);
    // verify 'no results' text is displayed on page
    await expect(
      page.locator('h2[data-test-id="site-search-noresults"]')
    ).toContainText('No results');
  });

  // To verify search with empty input and no results are displayed
  test('TC07: Search with empty input and no results are displayed', async ({ page }) => {
    // Submit empty search input and verify page remains the same
    await page.press('input[id="facet-search-input"]', 'Enter');
    await expect(page).toHaveURL(baseURL);
    // verify results are not visible
    await expect(
      page.locator('a[data-bi-name="searchItem.0"]')
    ).not.toBeVisible();
  });

  // To verify search with special characters and page shows results
  test('TC08: Search with special characters and page shows results', async ({ page }) => {
    // Search using only special characters '@#$%*&'
    await page.fill('input[id="facet-search-input"]', '@#$%*&');
    // Press enter to begin search
    await page.press('input[id="facet-search-input"]', 'Enter');
    await expect(page).toHaveURL(/search/);
    // verify first result is visible
    await expect(page.locator('li[data-bi-name="result"]').first()).toBeVisible();
  });

  // To verify search with whitespace and page shows with no results
  test('TC09: Search with whitespace and page shows no results', async ({ page }) => {
    // Provide whitespace in the search field
    await page.fill('input[id="facet-search-input"]', '     ');
    // Press enter to begin the search
    await page.press('input[id="facet-search-input"]', 'Enter');
    await expect(page).toHaveURL(baseURL);
    // verify resutls are not visible
    await expect(
      page.locator('a[data-bi-name="searchItem.0"]')
    ).not.toBeVisible();
  });

  // To verify search input field does not accept more than 100 characters
  test('TC10: Search input field does not accept more than 100 characters', async ({ page }) => {
    // Provide a long string (250 chars) 
    const longInput = 'a'.repeat(250);
    const searchInput = page.locator('input[id="facet-search-input"]');
    await searchInput.fill(longInput);
    // verify only 100 characters are input in the search
    const actualValue = await searchInput.inputValue();
    expect(actualValue.length).toBeLessThanOrEqual(100);
    // verify search attribut has maxlenght of '100'
    await expect(searchInput).toHaveAttribute('maxlength', '100');

  });

  // To verify search with French input and verify results
  test('TC11: Search with multilingual input (French)', async ({ page }) => {
    // Provide french input "S'il vous plaît" in the search field
    await page.fill('input[id="facet-search-input"]', "S'il vous plaît");
    // Press enter to begin the search
    await page.press('input[id="facet-search-input"]', 'Enter');
    await expect(page).toHaveURL(/search/);
    // verify first result is visible
    await expect(page.locator('li[data-bi-name="result"]').first()).toBeVisible();
  });

  // To verify paste into the search field
  test('TC12: Paste input into search field via keyboard paste simulation and verify results', async ({ page }) => {
    const text = 'Azure';
    // click on the search field
    const searchBox = page.locator('input[id="facet-search-input"]');
    await searchBox.click();
    // paste the word 'Azure' into the search box
    await page.keyboard.insertText(text);
    // press enter to begin the search
    await page.press('input[id="facet-search-input"]', 'Enter');
    await expect(page).toHaveURL(/search/);
    // verify first result is visible
    await expect(page.locator('li[data-bi-name="result"]').first()).toBeVisible();
  });

  // To verify autocomplete suggestions are displayed
  test('TC13: Search with valid input and shows autocomplete suggestions', async ({ page }) => {
    // Enter a valid search term 'Azure' and verify results are shown
    await page.fill('input[id="facet-search-input"]', 'Azure');
    // verify autocomplete suggestion displays first result that contains text 'Azure'
    await expect(
      page.locator('ul[role="listbox"] span').first()
    ).toContainText(/Azure/i);
  })


});