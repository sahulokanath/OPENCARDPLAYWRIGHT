import { Page, Locator } from '@playwright/test';


//action methods 
// Page --> flow incaplucation
//define the varibale
export class LoginPage {
    private readonly page: Page;
    private readonly loginlink: Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginlink = this.page.locator('#login2');
        this.usernameInput = this.page.locator('#loginusername');
        this.passwordInput = this.page.locator('#loginpassword');
        this.loginButton = this.page.getByRole('button', { name: 'Log in' });
    }

    async clickLoginLink(): Promise<void> {
        await this.loginlink.click();
    }

    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.clear();
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    async performLogin(username: string, password: string): Promise<void> {
        await this.clickLoginLink();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

