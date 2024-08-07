npx playwright test
npx playwright test homepage-test.spec.js
npx playwright test homepage-test.spec.js --project=chromium
npx playwright test homepage-test.spec.js --project=chromium --headed
npx playwright test homepage-test.spec.js --project=chromium --headed --debug

npx playwright codegen
npx playwright codegen --help
npx playwright codegen --target python
npx playwright codegen --browser chromium
npx playwright codegen --device "iPhone 13"
npx playwright codegen --viewport-size "1280,720"
