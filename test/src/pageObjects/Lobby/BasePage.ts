
import { AdditionalParamsType } from '../../models/types/lobby.type.ts'
import { LobbyBasePageLocators } from '../../selectors/lobby.sel.ts'
import Data from '../../utils/helpers/SessionData.class'
import allureReporter from '@wdio/allure-reporter';
import GameCard from './pages/components/GameCard';
import LanguageMenu from './pages/components/LanguageMenu';
import SettingsMenu from './pages/components/SettingsMenu';

/**
 * BasePage class represents the base page object for the lobby.
 * It contains common elements and methods that can be used across different pages in the lobby.
 */
export default class BasePage {
    gameCard = GameCard;
    languageMenu = LanguageMenu;
    settingsMenu = SettingsMenu;

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
    get menuLanguageEnglishItem() { return $(LobbyBasePageLocators.menu.languageView.englishLanguageItem) }


    async openLobbyByDirectLink(data: Data, params: AdditionalParamsType = undefined) { //allureStep: any = undefined, enterFullScreen: boolean = true) {
        console.log('@@@ openByDirectLink function was called');

        let path: string;
        try {

            path = data._formatLobbyDirectLink(data, params);

            await browser.url(path);
            // if not found page, then retry
            if (await browser.getTitle() === 'Not Found') {
                await browser.pause(3000);
                await browser.url(path);
                if ((await browser.getTitle()).toLowerCase() === 'not found') {
                    throw new Error(`The navigation failed to url: ${path}`);
                }
            }

            return this.isLoggedIn();
        } catch (err) {
            throw new Error(err);
        }
    }

    async isLoggedIn(): Promise<boolean> {

        if (await this.balance.waitForDisplayed({
            timeout: 30000,
            timeoutMsg: 'Player balance was not displayed within 30 seconds'
        })) {
            return true;
        }
        else {
            return false;
        }
    }

    async openMenu() {
        try {
            await allureReporter.step(`Open menu`, async () => {
                await this.menuBtn.click();
                await this.menuLanguageItem.waitForDisplayed({
                    timeout: 5000,
                    timeoutMsg: 'Menu was not displayed within 5 seconds'
                });
            });
        } catch (err) {
            console.error('Error in openMenu(): ', err);
            throw new Error(err);
        }
    }

    async openMenuLanguage() {

        await this.openMenu();
        await allureReporter.step(`Open menu language`, async () => {

            await this.menuLanguageItem.click();
            await this.menuLanguageEnglishItem.waitForDisplayed({
                timeout: 5000,
                timeoutMsg: 'Menu was not displayed within 5 seconds'
            });
        });
    }

    //web only
    async openMenuFullScreen() {

        await this.openMenu();

        await allureReporter.step(`Open menu full screen`, async () => {
            await this.menuFullScreenItem.click();
            await this.menuLanguageItem.waitForDisplayed({
                timeout: 5000,
                timeoutMsg: 'Menu was not displayed within 5 seconds'
            });
        });
    }

    async isHomeBtnDisplayed(): Promise<boolean> {
        try {

            await this.openMenu();

            await this.menuHomeItem.waitForDisplayed({
                timeout: 5000,
                timeoutMsg: 'Home menu item was not displayed within 5 seconds'
            });
            return true;
        } catch (err) {
            console.error('Error in isHomeBtnDisplayed(): ', err);
            return false;
        }
    }
}