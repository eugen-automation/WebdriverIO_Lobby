
import { CasinoComponentEnum } from '../../src/models/enums/gameNames.enum.ts';

import Data from '../../src/utils/helpers/SessionData.class.ts';
import Services from '../../src/utils/API/services.api.ts';
import allureReporter from '@wdio/allure-reporter';
import assert from 'assert';

import { adminGameParam } from '../../src/models/types/adminParam.ts';
import { QAEnum } from '../../src/models/enums/qa.enum.ts';
import { addArgumentsToAllure } from '../../src/utils/helpers/allureReporter.helper.ts';

import LoginPage from '../../src/pageObjects/Lobby/pages/LoginPage.ts';
import ForYouPage from './../../src/pageObjects/Lobby/pages/ForYouPage.ts';
import GamesPage from '../../src/pageObjects/Lobby/pages/GamesPage.ts';
import SearchPage from '../../src/pageObjects/Lobby/pages/SearchPage.ts';
import FavoritesPage from '../../src/pageObjects/Lobby/pages/FavoritesPage.ts';
import { gameNameMapping, gameTypeMapping } from '../../src/models/mappings/game.map.ts';
import { GameTypesEnum } from '../../src/models/enums/gameTypes.enum.ts';





// run tests for each game
describe('SANITY: Lobby test suite', async () => {

    // const lobbyPage = BasePage;
    // original object sessionData with values
    // let dataObject: Data;
    let sessionData: Data;
    let unit = CasinoComponentEnum.Lobby;



    before('Calling one time before tests to set default params value', async () => {
        // await browser.pause(2000);
        // build direct link object, used to open game
        sessionData = await Data.buildSessionDataObject(unit, false);

        // if(await browser.isMobile){
        //     await browser.setWindowSize(1920, 1080);
        // }

        // const tempDataObject = new Data(dataObject.operator.id, dataObject.game.type)

        // enable default chips in limit in order to disable them and use chips from Admin Params
        // await Services.Limits.enableDefaultChips(Number(dataObject.limit.id));

        // set default values in Admin
        // await Prerequisite.setDefaultValuesForAdminParams(tempDataObject);

        // build a new object, used for placing bets
        // betObject = await PlaceBetData.createNewBetDetailsObjectData(dataObject);

        // enable all side-bets
        // await BettingAreaPo.enableAllSideBetsInLimit(dataObject)

        // get game dictionary
        // TRANSLATION_DICTIONARY = await Services.Translations.getTraslatedDictionary(dataObject.game.type, dataObject.game.languageId);

        // DT special params
        // await Services.Params.updateGameParams(tempDataObject, adminGameParam.preBetsAllowed, '1');

    });

    // beforeEach('Calling before each test', async () => {
    //     try {

    //         // copy object - make a object copy before each test
    //         // sessionData = deepClone(dataObject);

    //         //copy object - make a object copy before each test
    //         // betDetails = structuredClone(betObject);

    //         // update player balance
    //         // BalanceComm.updateBalance(EXPECTED_PLAYER_BALANCE, sessionData);

    //         // allureReporter.addStep('This STEP IS FROM beforeEach');


    //     } catch (err) {
    //         // assert.fail(err)
    //     }
    // });

    // afterEach('Execute after each test', async () => {

    //     // await browser.pause(250);
    //     // open a new tab
    //     // await browser.navigateTo('about:blank');
    // });


    it(`SANITY_1_0 ${unit} : Check to be redirected to Lobby login if not specified operator id in url`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');


        try {
            addArgumentsToAllure(QAEnum.Eugen);

            await LoginPage.open(sessionData.urls.lobbyOhterUrl);

            await allureReporter.step('Check for login page to be displayed', async () => {
                // Check if the login page is displayed         
                assert.ok(await LoginPage.isLoginButtonDisplayed(), `Login page is not displayed!!!`);
            });

        } catch (err) {
            throw new Error(err)
        }
    });

    it.only(`SANITY_1_1 ${unit} : Check negative login`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        try {
            addArgumentsToAllure(QAEnum.Eugen);

            await LoginPage.open(sessionData.urls.lobbyOhterUrl);

            await LoginPage.login('wrong_username', '');

            await allureReporter.step('Check for error message to be displayed', async () => {
                assert.ok(await LoginPage.errorMessage.waitForDisplayed({ timeout: 30000 }), 'Error message is not displayed!!!');
            });

        } catch (err) {
            throw new Error(err)
        }
    });

    it(`SANITY_1_2 ${unit} : Check positive login`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        try {
            addArgumentsToAllure(QAEnum.Eugen);
            await LoginPage.open(sessionData.urls.lobbyOhterUrl);
            await LoginPage.login(sessionData.player.name, sessionData.player.password);

            await allureReporter.step(`Check for successful login`, async () => {
                // Check an element to exactly match with baseline
                assert.ok(await ForYouPage.isLoggedIn(), `Failed to login!!!`);
            });

        } catch (err) {
            throw new Error(err)
        }
    });

    it(`SANITY_2_0 ${unit} : Open Lobby with direct link`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');


        try {
            addArgumentsToAllure(QAEnum.Eugen);
            assert.ok(await ForYouPage.openLobbyByDirectLink(sessionData), 'Failed to open Lobby with direct link');

            allureReporter.step(`Check for successful login`, async () => {
                // Check an element to exactly match with baseline
                assert.ok(await ForYouPage.isLoggedIn(), `Failed to login!!!`);
            });

        } catch (err) {
            throw new Error(err)
        }
    });

    it(`SANITY_2_1 ${unit} : Open Lobby with default category`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');


        const defaultCategoryGame = 'baccarat';

        try {
            addArgumentsToAllure(QAEnum.Eugen);

            assert.ok(await ForYouPage.openLobbyByDirectLink(sessionData, { lobby: { defaultCategory: defaultCategoryGame } }), 'Failed to login');


            await allureReporter.step(`Check correct category to be selected after login`, async () => {
                // check url to contain game category
                assert.ok((await browser.getUrl()).includes(`/games?gameCategory=${defaultCategoryGame}`), `The URL does not contain the expected game category: ${defaultCategoryGame}`);
                assert.strictEqual((await GamesPage.pageTitle.getText()).toLowerCase(), defaultCategoryGame, `The page title does not match the expected game category: ${defaultCategoryGame}`);
                assert.strictEqual((await GamesPage.baccaratGameCategory.getText()).toLowerCase(), defaultCategoryGame, `The expected game category is not selected: ${defaultCategoryGame}`);
            })
        } catch (err) {
            throw new Error(err)
        }
    });

    it(`SANITY_2_2 ${unit} : Show default EN if Provider language is wrong`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        // open lobby by direct link with invalid language

        try {

            assert.ok(await ForYouPage.openLobbyByDirectLink(sessionData, { lobby: { languageId: '12345' } }), 'Failed to open Lobby with direct link and invalid language');

            // open menu
            await ForYouPage.openMenuLanguage();

            // check EN is selected
            const className = await ForYouPage.menuLanguageEnglishItem.getAttribute('class');
            assert.ok(className.includes('active'), `English is selected as default language: ${className}`);
        }
        catch (err) {
            throw new Error(err)
        }

    });

    it(`SANITY_2_3 ${unit} : Show default EN if Provider language missing in url`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        // open lobby by direct link without language id
        assert.ok(await ForYouPage.openLobbyByDirectLink(sessionData, undefined), 'Failed to open Lobby with direct link');

        // open language in menu
        await ForYouPage.openMenuLanguage();


        // check EN is selected
        const enElem = await ForYouPage.menuLanguageEnglishItem;

        // check EN is selected
        const className = await ForYouPage.menuLanguageEnglishItem.getAttribute('class');
        assert.ok(className.includes('active'), `English is selected as default language: ${className}`);

    });

    it(`SANITY_2_4 ${unit} : Check there is just one distinct game with limit per game category`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        const ignoredGameCategories = ['slots', 'topgames', 'foryou'];


        try {
            addArgumentsToAllure(QAEnum.Eugen);

            // login into lobby & open Top games
            assert.ok(await ForYouPage.openLobbyByDirectLink(sessionData), 'Failed to open Lobby with direct link');

            // open games
            if (!browser.isMobile) {
                // click on Games link
                await GamesPage.gamesLink.click();
            }

            // get list of available game categories
            const availableCategories = await GamesPage.getAvailableGameCategoriesByName();

            // go to each game category and check for distinct games
            for (const category of availableCategories) {
                const mySet1 = new Set();
                // exclude ignored categories
                if (!ignoredGameCategories.includes(category.toLowerCase())) {

                    console.log('Open game category :>> ', category);

                    // open game category
                    await GamesPage.openGameCategory(sessionData.urls.lobbyUrl, category);

                    // wait the game cards to be fully loaded
                    await browser.waitUntil(async () => {
                        return (await GamesPage.gameCard.gameName.isDisplayed()) && (await GamesPage.gameCard.gameNames.length > 0);
                    }, {
                        timeout: 30000,
                        timeoutMsg: `Game cards for category ${category} were not loaded in time`
                    });

                    // get all game cards
                    const gameCardsList = await GamesPage.gameCard.gameNames;

                    // get all attribute values for game cards
                    for (const gameCard of gameCardsList) {
                        const gameData = await gameCard.getAttribute('data-details');
                        mySet1.add(gameData);

                        console.log('gameData :>> ', gameData);
                    }

                    // check for distinct games
                    assert.strictEqual(mySet1.size, gameCardsList.length, `There are duplicated games in category ${category}: ${Array.from(mySet1).join(', ')}`);
                }
            }

        } catch (err) {
            throw new Error(err)
        }
    });

    it(`SANITY_2_5 ${unit} : Check all game categories to be displayed`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        try {
            addArgumentsToAllure(QAEnum.Eugen);

            // open lobby by direct link
            assert.ok(await ForYouPage.openLobbyByDirectLink(sessionData), 'Failed to open Lobby with direct link');

            // open Games page
            if (!browser.isMobile) {
                await GamesPage.gamesLink.click();
            };

            // get all game categories
            const gameCategories = await GamesPage.getAvailableGameCategoriesBySelectors();
            console.log('gameCategories :>> ', gameCategories);

            // check for all game categories to be displayed
            let foundGameTypes: string[] = [];
            for (const game of gameCategories) {
                if (game.toLowerCase() === 'topgames' || game.toLowerCase() === 'foryou' || game.toLowerCase() === 'slots') {
                    continue; // skip special categories
                }
                foundGameTypes.push(gameTypeMapping(gameNameMapping(game)));
            }
            console.log('foundGameTypes :>> ', foundGameTypes);

            const allAvailableGameTypes = Object.values(GameTypesEnum);
            console.log('allAvailableGameTypes :>> ', allAvailableGameTypes);
            let extraValues = allAvailableGameTypes.filter(value => !foundGameTypes.includes(value));
            console.log('extraValues :>> ', extraValues);
            const allowed = ['8', '26', '32'];// ignored games

            assert.ok(!extraValues.some(val => !allowed.includes(val)), 'There are missing game categories in the Lobby: ' + extraValues.join(', '));

        } catch (err) {
            throw new Error(err)
        }

    })

    xit(`SANITY_2_5 ${unit} : Check for proper Error page`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');


        await browser.url(sessionData.urls.lobbyUrl + 'error');

        // check url to contain game category
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual(sessionData.urls.lobbyUrl + 'error');

        // Check an element to exactly match with baseline
        // await expect(browser).toMatchFullPageSnapshot('errorPage_BaseLine', 0.5);
    });

    // no Recently Played Games section in Lobby if param session details enamble is false

    //! open SAW, login, open lobby, wait to expire the token check to be displayed the login page not the error page
    xit(`SANITY_2_6 ${unit} : Open Lobby with direct link`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');


        try {

            // set admin params to expire token quickly
            await Services.Params.updateGameParams(sessionData, adminGameParam.lobbySessionLength, '20');
            await Services.Params.updateGameParams(sessionData, adminGameParam.loginTokenExtendTime, '30');
            await Services.Params.updateGameParams(sessionData, adminGameParam.extendTokenInterval, '10');

            await browser.pause(500);

            // open
            await browser.url(sessionData.urls.sawUrl);
            console.log('asdfa');

        } catch (err) {
            throw new Error(err)
        }
        finally {
            await Services.Params.updateGameParams(sessionData, adminGameParam.lobbySessionLength, adminGameParam.lobbySessionLength.defaultValue);
            await Services.Params.updateGameParams(sessionData, adminGameParam.loginTokenExtendTime, adminGameParam.loginTokenExtendTime.defaultValue);
            await Services.Params.updateGameParams(sessionData, adminGameParam.extendTokenInterval, adminGameParam.extendTokenInterval.defaultValue);
        }
    });





    //! Check click on logo after login, to return to For You page
    xit(`SANITY_2_7 ${unit} : Click on Logo returns to home page`, async function () {

        const lobbyPages = ['games', 'favorites', 'search?noResults=', 'search?q=bac', 'search?c=topGames']

        //    async lobbyPages.forEach(page => {
        for (let page of lobbyPages) {
            await browser.url(sessionData.urls.lobbyUrl + page);

            const headerElem = await ForYouPage.logoImg;
            await headerElem.click();  // to adjust to click on logo spcecifically
            //! add assertion
        }

    });

    // games.forEach((game) => {
    xit(`SANITY_2_8 ${unit} : Check return to Lobby from games opened with direct link`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        // const games = [GamesEnum.AB, GamesEnum.BAC, GamesEnum.BJ, GamesEnum.DT, GamesEnum.RO, GamesEnum.SB, GamesEnum.TP2020, GamesEnum.TTC, GamesEnum.UBJ]
        // const gameSessionData = await Data.buildSessionDataObject(CasinoComponent.LiveGames, true, game);

        // console.log('!!!!!!!!!game :>> ', game);
        //open game by direct link
        // await ForYouPage.openLobbyByDirectLink(gameSessionData);

        //return to Lobby if enableLobby is set to 1
        // console.log('goog, next one!')
        //click Lobby button
        // wait for page title to be Lobby
        // get the url and check to have operatorid, language, token

        //check if Lobby is opened

        // });
    });




    it(`SANITY_2_15 ${unit} : Home button test 1`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');

        if (!browser.isMobile) {
            this.skip();
        }

        try {

            const homeUrl = 'https://www.google.fr/';

            assert.ok(await ForYouPage.openLobbyByDirectLink(sessionData, { lobby: { languageId: '2057', homeUrl: homeUrl } }), 'Failed to open Lobby with direct link');

            // open menu
            await ForYouPage.openMenu();

            // check there is Home button in the menu
            assert.ok(await ForYouPage.isHomeBtnDisplayed(), `Home button is not displayed in the menu!!!`);

            // click on Home button
            await this.menuHomeItem.click();

            // check if home page is opened
            await browser.pause(3000);
            const currentUrl = await browser.getUrl();

            // assertions
            expect(currentUrl).toEqual(homeUrl);


        } catch (err) {
            throw new Error(err)
        }
    });

});

