import { LobbyBasePageLocators } from "../../selectors/lobby.sel"

// pages/base.page.ts
export abstract class BasePage {

     get headerElem() { return $('header') }
     get logoImg() { return $(LobbyBasePageLocators.logoImg) }
     get forYouLink() { return $(LobbyBasePageLocators.forYouLink) }
     get gamesLink() { return $(LobbyBasePageLocators.gamesLink) }
     get favoritesLink() { return $(LobbyBasePageLocators.favoritesLink) }
     get searchInput() { return $(LobbyBasePageLocators.searchInput) }
     get balance() { return $(LobbyBasePageLocators.balance) }
     get playersCount() { return $(LobbyBasePageLocators.playersCount) }
     get menuBtn() { return $(LobbyBasePageLocators.menuBtn) }
     get menuHomeItem() { return $(LobbyBasePageLocators.menu.homeMenuItem) }
     get menuFullScreenItem() { return $(LobbyBasePageLocators.menu.fullScreenMenuItem) }
     get menuSettingsItem() { return $(LobbyBasePageLocators.menu.settingsMenuItem) }
     get menuLanguageItem() { return $(LobbyBasePageLocators.menu.languageMenuItem) }
     get menuLanguageEnglishItem() { return $(LobbyBasePageLocators.menu.languageView.enLanguageItem) }


    // async getHeaderElem(): Promise<ChainablePromiseElement> {
    //     await this.headerElem.waitForExist({ timeout: 5000 });
    //     return this.headerElem;
    // }

    // async getMenuElem(): Promise<ChainablePromiseElement> {
    //     await this.menuBtn.waitForExist({ timeout: 5000 });
    //     return this.menuBtn;
    // }

    // async getHomeMenuItemElem(): Promise<ChainablePromiseElement> {
    //     await this.homeMenuItem.waitForExist({ timeout: 5000 });
    //     return this.homeMenuItem;
    // }

    // async getLanguageElem(): Promise<ChainablePromiseElement> {
    //     await this.languageMenuItem.waitForExist({ timeout: 5000 });
    //     return this.languageMenuItem;
    // }

    // async getEnLanguageElem(): Promise<ChainablePromiseElement> {
    //     await this.enLanguageMenuItem.waitForExist({ timeout: 5000 });
    //     return this.enLanguageMenuItem;
    // }

    // Common header actions
    // async clickLogo(): Promise<void> {
    //     await this.logoImg.click();
    // }

    // async search(query: string): Promise<void> {
    //     await this.searchInput.setValue(query);
    //     await browser.keys('Enter');
    // }

    // async logout(): Promise<void> {
    //     await this.profileMenu.click();
    //     await this.logoutButton.click();
    // }

    // Abstract methods to be implemented by child classes
    // abstract getPageUrl(): string;
    // abstract isPageOpen(): Promise<boolean>;

    // async verifyPageUrl(): Promise<void> {
    //     await browser.waitUntil(
    //         async () => (await browser.getUrl()).includes(this.getPageUrl()),
    //         { timeoutMsg: `Expected URL to contain ${this.getPageUrl()}` }
    //     );
    // }

    async isHeaderDisplayed(): Promise<boolean> {
        try {
            await this.headerElem.waitForDisplayed({
                timeout: 30000,
                timeoutMsg: 'Header was not displayed within 30 seconds',
                interval: 1000, // Check every second (optional)
            });
            return true;
        } catch (error) {
            if (error.name === 'AssertionError' || error.name === 'WaitUntilTimeoutError') {
                // Expected timeout error - header not found
                return false;
            }
            // Unexpected error - log it and return false
            console.error('Unexpected error checking header display:', error);
            return false;
        }
    }

    
    // Wait for the logo to be displayed
    // await HomePage.headerElem.waitForDisplayed({
    //     timeout: 30000, // Wait up to x seconds
    //     timeoutMsg: 'Logged in header was not displayed within 30 seconds', // Custom error message
    // });
}