//!BaseGamePage include toate componentele comune și servește ca bază pentru clasele specifice jocurilor.

import { GamesNamesEnum } from '../../models/enums/gameNames.enum.ts';
import { openModeType } from '../../models/enums/openModeTypes.enum.ts_toBeDeleted';
import { AdditionalParamsType } from '../../models/types/lobby.type.ts';
import Data from '../../utils/helpers/SessionData.class.ts';
import { ActionButtons } from './components/ActionButtons.cc.ts';
import { Balance } from './components/Balance.cc.ts';
import { Chipset } from './components/Chipset.cc.ts';
import { LastWinners } from './components/LastWinners.cc.ts';
import { Timer } from './components/Timer.cc.ts';
import { Notifications } from './components/Notifications.cc.ts';


export abstract class BaseGamePage {
    actionButtons: ActionButtons;
    balance: Balance;
    chipset: Chipset;
    notifications: Notifications;
    lastWinners: LastWinners;
    timer: Timer;

    PAGE_LOAD_TIMEOUT = 20000; // Maximum wait time for page load in milliseconds    
    TIMEOUT_INTERVAL = 1000; // Time interval between checks in milliseconds    
    MAX_RETRIES_NO_LOBBY = 3;
    MAX_RETRIES_WITH_LOBBY = 7;


    constructor() {
        this.actionButtons = new ActionButtons;
        this.balance = new Balance;
        this.chipset = new Chipset;
        this.notifications = new Notifications();
        this.lastWinners = new LastWinners();
        this.timer = new Timer();

    }

    async navigateTo(url: string): Promise<void> {
        await browser.url(url);
        await browser.pause(1000); // Așteaptă încărcarea paginii
    }




    async waitForPageLoad() {
        console.log('@@@ waitForPageLoad function was called');

        try {
            await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
                timeout: this.PAGE_LOAD_TIMEOUT,
                timeoutMsg: `Page did not load completely within ${this.PAGE_LOAD_TIMEOUT} seconds`,
            });
        } catch (Error) {
            throw new Error(`Error message in waitForPageLoad(), ${Error.message}`);
        }
    }

    async waitForGameLoad(useLobby: boolean = false, gameName: GamesNamesEnum) {
        console.log('@@@ waitForGameLoad function was called');

        try {
            const xFactor = 10;
            const maxRetries = useLobby ? this.MAX_RETRIES_WITH_LOBBY : this.MAX_RETRIES_NO_LOBBY;
            // const isMobileFullScreenDisplayedFlag = false;
            await browser.pause(500)

            for (let i = 0; i < maxRetries * xFactor; i++) {

                if (browser.isMobile) {
                    let [isLoadingScreenDisplayed, isGameLoadingErrorDisplayed, isGameElement] = await Promise.all([
                        this.notifications.loadingScreen.mainElement.isDisplayed(),
                        this.notifications.errorPage.isDisplayed(),
                        // FullScreenAnimationCompPo.fullScreenElement.isDisplayed(),
                        browser.$('#layout').isExisting(),
                    ]);
                    console.debug('::isLoadingScreenDisplayed::', isLoadingScreenDisplayed)
                    console.debug('::isGameLoadingErrorDisplayed::', isGameLoadingErrorDisplayed)
                    // console.debug('::isMobileFullScreenDisplayed::', isMobileFullScreenDisplayed)
                    console.debug('::isSomeGameElementDisplayed::', isGameElement)


                    // if there is error message on game load
                    if (isGameLoadingErrorDisplayed) {
                        // await allureReporter.step('Found error on game load', async () => {
                        await browser.takeScreenshot();
                        // assert.ok(false, 'Found error on game load, see screenshot');
                        // });
                        return false;
                    }

                    // check why
                    // if (gameName === GamesEnum.TRO) {
                    //   isMobileFullScreenDisplayed = true;
                    // }

                    // if full-screen displayed
                    console.info('____________Checking if game loaded: !isLoadingScreenDisplayed &&  isGameElement', !isLoadingScreenDisplayed && isGameElement);
                    if (!isLoadingScreenDisplayed && isGameElement) {
                        break;
                    } else {
                        // PAUSE
                        await browser.pause(this.TIMEOUT_INTERVAL);
                        console.log(`Wait ${this.TIMEOUT_INTERVAL}ms to complete loading the game`);
                        // console.log('######################i:', i, 'maxRetries:', maxRetries,  'xFactor:', xFactor);
                        // console.log('#@#$@$#@$%%maxRetries * xFactor * this.TIMEOUT_INTERVAL', maxRetries * xFactor * this.TIMEOUT_INTERVAL)
                    }
                }
                if (!browser.isMobile) {
                    await browser.pause(5000);
                    break;
                }
                if (i === maxRetries * xFactor - 1) {
                    // allureReporter.step(`Was not able to load the game after: ${(maxRetries * xFactor * this.TIMEOUT_INTERVAL) / 1000} sec`, '', 'failed');
                    // assert.ok(false, `Unable to load the game after ${(maxRetries * xFactor * this.TIMEOUT_INTERVAL) / 1000} sec`);
                    return false;
                }
            }
        } catch (err) {
            throw new Error(err)
        }
    }

    async openByDirectLink(data: Data, openType: openModeType = openModeType.gameDirectLink, params: AdditionalParamsType = undefined) { //allureStep: any = undefined, enterFullScreen: boolean = true) {
        console.log('@@@ openByDirectLink function was called');

        let path: string;
        try {

            // Switch chose to open game through direct link or not
            // switch (openType) {
                // case openModeType.gameDirectLink:
                    path = data._formatGameDirectLink(data, params);
                    // allureStep.step(`Open the ${data.game.name} game using direct link: ${path}`, async () => { });
                    // break;
                // case openModeType.lobbyDirectLink:
                    // path = data._formatLobbyDirectLink(data, params);
                    // allureStep.step(`Open the ${data.game.name} game through lobby using direct link: ${path}`, async () => { });
                    // break;
                // case openModeType.lobbyLoginPage:
                    // path = data._formatLobbyLoginLink(data, params);
                    // allureStep.step(`Open the lobby using direct link: ${path}`, async () => { });
                    // break;
                // default:
                    // path = data._formatGameDirectLink(data, params);
                // allureStep.step(`Open the ${data.game.name} game using direct link: ${path}`, async () => { });
            // }


            await browser.url(path);

            // if not found page, then retry
            if (await browser.getTitle() === 'Not Found') {
                await browser.pause(3000);
                await browser.url(path);
                if ((await browser.getTitle()).toLowerCase() === 'not found') {
                    throw new Error(`The navigation failed to url: ${path}`);
                }
            }

            //unlock device
            if (browser.isAndroid && browser.isLocked) {
                await browser.unlock();
            }

            //wait for game to load and enter the full-screen
            if (data.game.name) {

                await $('#video').waitForDisplayed({
                    timeout: 30000, // Wait up to x seconds
                    timeoutMsg: 'Video comp. was not displayed within 30 seconds', // Custom error message
                });
                // await this.waitForGameLoad(undefined, data.game.name); // Pass useLobby to the waitForGameLoad function

                // if (browser.isMobile && data.game.name !== GamesEnum.TRO && enterFullScreen) {
                // const result: boolean = await FullScreenAnimationCompPo.enterFullScreen();
                // console.debug('@@After_FullScreenAnimation.enterFullScreen', result);
                // if (!result) {
                //   assert.ok(false, 'Was not able to enter full screen');
                // }
                // }
                // return path;
            }

            return path;
        } catch (err) {
            throw new Error(err);
        }
    }

    async openErrorPageByDirectLink(session: Data, useLobby: boolean = false) {
        console.log('@@@ openErrorPageByDirectLink function was called');

        const path = session._formatGameDirectLink(session)

        // open direct link
        await browser.url(path);
        console.log('Direct link to open game: ', path);

        // ENTER FULL-SCREEN FOR ANDROID MOBILE DEVICES
        // if (browser.isAndroid && session.game.name !== GamesEnum.TP2020) {
        //   const result: boolean = await FullScreenAnimationCompPo.enterFullScreen();
        //   if (!result) { assert.ok(false, 'Was not able to enter full screen'); }
        // }
    }

    async openGameAndCheckLoadingScreen(data: Data, loadingScreenMessage: string) {
        console.log('@@@ openGameAndCheckLoadingScreen function was called');

        let path: string;
        try {

            // Open the game
            path = data._formatGameDirectLink(data,);
            // .step(`Open the ${data.game.name} game using direct link: ${path}`, async () => { });

            // Wait for the game to load the specific Url
            await browser.url(path);

            // wait for loading screen
            const loadingScreenTextArray = await this.notifications.getLoadingScreenProgressText();
            console.log("++++++++++++++++++++++++++++", loadingScreenTextArray)
            if (loadingScreenTextArray) {
                // [ALLURE TEST SETUP]
                // const notificationKey = notificationJSONData.loadingScreenMessages;
                // convert into array the expected text to search for
                const texts = loadingScreenMessage.split('/');
                const found = texts.some((r) => loadingScreenTextArray.includes(r));

                // assert.ok(found, `Not found any text of ${texts} while loading the game`);
                return false;
            }
        } catch (err) {
            throw new Error(err);
        }
    }

    async openTestingEnvIFrame() {
        console.log('@@@ openByIFrame function was called');

        const path = "https://fakesite.xpgtesting.com/"
        // open SAW
        await browser.url(path);
        console.log('Openning the iframe: ', path);
    }
}