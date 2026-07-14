# Playwright Automation Suite


An end-to-end test automation framework built with Playwright and JavaScript, testing the [AutomationExercise](https://automationexercise.com) e-commerce platform.

---

## Tech Stack

- **Playwright**: E2E and API testing
- **JavaScript**: Test language
- **Page Object Model**: Architecture pattern
- **GitHub Actions**: CI/CD pipeline
- **dotenv**: Secure credential management

---

## Test Coverage

| Flow | Tests | Type |
|---|---|---|
| Login | Valid login, Invalid credentials | UI |
| Signup | New account, Existing email | UI |
| Search | Found results, No results | UI |
| Cart | Add to cart, Checkout without login | UI |
| Checkout | Full purchase with payment | UI |
| Logout | Successful logout | UI |
| Hybrid API + UI | Create user via API, Login via UI | API + UI |

---

## Project Structure

```
playwright-automation-suite/
├── pages/
│   ├── LoginPage.js
│   ├── SignupPage.js
│   ├── RegisterPage.js
│   ├── SearchPage.js
│   ├── CartPage.js
│   ├── CartModal.js
│   ├── CheckoutPage.js
│   └── PaymentPage.js
├── tests/
│   ├── login.spec.js
│   ├── signup.spec.js
│   ├── search.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   ├── logout.spec.js
│   └── apiCreateAndLogin.spec.js
├── .github/
│   └── workflows/
│       └── playwright.yml
├── .env
└── playwright.config.js
```

---

## Running Locally

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
git clone https://github.com/Rafia-Haider/playwright-automation-suite.git
cd playwright-automation-suite
npm install
npx playwright install
```

### Environment Variables

Create a `.env` file in the root directory:

```
TEST_EMAIL=your_email@test.com
TEST_PASSWORD=your_password
```

### Run All Tests

```bash
npx playwright test
```

### Run a Specific File

```bash
npx playwright test login.spec.js
```

### Run in Headed Mode

```bash
npx playwright test --headed
```

### View HTML Report

```bash
npx playwright show-report
```

---

## CI/CD

Tests run automatically on every push via GitHub Actions across Chromium, Firefox, and WebKit. Credentials are stored as GitHub repository secrets and never appear in the codebase.

---

## Key Concepts Demonstrated

- **Page Object Model**: Locators and actions encapsulated in reusable page classes, keeping tests clean and maintainable
- **Cross-browser testing**: All tests run on Chromium, Firefox, and WebKit
- **Dynamic test data**: Unique emails generated per run using `Date.now()` to prevent conflicts
- **Hybrid API + UI testing**: User created via Playwright request API, then verified through browser login
- **Secure credential handling**: dotenv locally, GitHub Secrets in CI
- **Negative testing**: Invalid credentials, existing email, empty search results, unauthorized checkout attempts

## Bugs Found During Testing

| Bug | Expected | Actual | Status |
|---|---|---|---|
| API 11 Create Account returns wrong status code | 201 Created | 200 OK | Reported |
