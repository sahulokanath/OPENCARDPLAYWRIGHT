import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';

// Load JSON test data
const jsonTestData = DataProvider.getTestDataFromJson();

for (const data of jsonTestData) {

    test(`Login Test - ${data.username} - ${data.expected} @datadriven`, async ({ page }) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.username, data.password); // ✅ FIXED

        if (data.expected.toLowerCase() === 'success') {
            const myAccountPage = new MyAccountPage(page);
            const isLoggedIn = await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        } else {
            const errorMessage = await loginPage.getloginErrorMessage();
            expect(errorMessage).toContain('Warning: No match');
        }
    });
}