import { SAWLoginPageLocators } from "../../selectors/saw.sel.ts"


class LoginPage {

    get logoImg() { return $(SAWLoginPageLocators.logoImg) }
    get loginText() { return $(SAWLoginPageLocators.loginText) }
    get username() { return $(SAWLoginPageLocators.usernameInput) }
    get password() { return $(SAWLoginPageLocators.passwordInput) }
    get loginButton() { return $(SAWLoginPageLocators.submitBtn) }
    get errorMessage() { return $('//div[@class="sc-gKXOVf dJWFGW"]') } // Adjusted to use the correct selector for the error message


    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }


    async assertErrorMessage(expectedText) {
        const actualText = await this.errorMessage.getText();
        expect(actualText).toContain(expectedText);
    }

    async isLoginButtonDisplayed() {
        return await this.loginButton.isDisplayed();
    }

}

export default new LoginPage();