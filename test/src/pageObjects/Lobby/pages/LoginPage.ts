import { LobbyLoginPageLocators } from "../../../selectors/lobby.sel"
import allureReporter from '@wdio/allure-reporter';


class LoginPage {
    get loginText() { return $(LobbyLoginPageLocators.loginText) }
    get inputUsername() { return $(LobbyLoginPageLocators.usernameInput) }
    get inputPassword() { return $(LobbyLoginPageLocators.passwordInput) }
    get btnLogin() { return $(LobbyLoginPageLocators.submitBtn) }
    get errorMessage() { return $(LobbyLoginPageLocators.errorMessage) } // Adjusted to use the correct selector for the error message


    async performLogin(username: string, password: string) {
        await allureReporter.step('Login with username and password', async () => {
            // Wait for the login text to be displayed
            await this.loginText.waitForDisplayed({timeout: 30000, timeoutMsg: 'Login text not displayed'});
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.btnLogin.click();
        });
    }

    async assertErrorMessage(expectedText) {
        const actualText = await this.errorMessage.getText();
        expect(actualText).toContain(expectedText);
    }

    async isLoginButtonDisplayed() {
        return await this.btnLogin.isDisplayed();
    }

    async open(lobbyUrl: string) {
        await allureReporter.step(`Open lobby login page: ${lobbyUrl}`, async () => {
            await browser.url(lobbyUrl);

            // Wait for the logo to be displayed
            await this.inputUsername.waitForDisplayed({
                timeout: 30000, // Wait up to x seconds
                timeoutMsg: 'Login fields not displayed', // Custom error message
                reverse: false
            });
        });
    }
}

export default new LoginPage();