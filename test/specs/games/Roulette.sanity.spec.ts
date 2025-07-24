// import { gameStatusMap } from '../src/models/enums/gameStatus.enum.ts';
// import { deepClone } from '../../src/utils/helpers/generalLogic.helper.ts'
// import DragonTigerGamePo from '../pageObjects/games/DragonTiger.game.po.ts';
// import allureReporter from '@wdio/allure-reporter';
import { CasinoComponentEnum, GamesNamesEnum } from '../../src/models/enums/gameNames.enum.ts';
import { TranslationDictionary } from '../../src/models/types/translationDict.type.ts';
import { PlaceBetData } from '../../src/models/types/placeBetData.ts';
import Data from '../../src/utils/helpers/SessionData.class.ts';
// import Services from '../../src/utils/API/services.api.ts';
import { Prerequisite } from '../../src/utils/helpers/common.prerequisite.ts';
// import assert from 'assert';
// import { addArgumentsToAllure } from '../../../src/helpers/allureReporter.helper.ts';
// import BettingAreaPo from '../src/pageObjects/components/BettingArea.comp.po.ts';
// import HeaderPo from '../../../src/pageObjects/components/Header.comp.po.ts';
// import {GamePagePo} from '../../src/pageObjects/LiveGames/BaseGamePage.ts';
// import NotificationsPo from '../../../src/pageObjects/components/Notifications.comp.po.ts';
// import GameStatusPo from '../../../src/pageObjects/components/GameStatus.comp.po.ts';
// import { CardId, emptyCardMap } from '../../../src/models/enums/cardIds.enum.ts';
// import { betspotList } from '../../../src/models/types/betspotList.ts';
// import WinningAnimationPo from '../../../src/pageObjects/components/WinningAnimation.comp.po.ts';
// import { adminGameParam } from '../../src/models/types/adminParam.ts';
// import notificationJSONData from '../../../src/JSON/games/notificationsDetails.data.json' assert { type: 'json' };
import { QAEnum } from '../../src/models/enums/qa.enum.ts';
// import { BaccaratPage } from '../../src/pageObjects/LiveGames/BAC/BaccaratPage.ts';
import { openModeType } from '../../src/models/enums/openModeTypes.enum.ts_toBeDeleted';
import { RoulettePage } from '../../src/pageObjects/LiveGames/RO/RoulettePage.ts';




// read from .env file the games to run tests on
const gameName: GamesNamesEnum = Prerequisite.getListOfGamesToBeTested()[0];
if (gameName !== GamesNamesEnum.RO) {
    console.error(`Game name is incorrect: ${gameName}. Please specify correct game to run Baccarat sanity tests!!!`);
    process.exit(1);  // Exit the process with a non-zero code to indicate failure
}

let sessionData: Data;
let betDetails: PlaceBetData;
let TRANSLATION_DICTIONARY: TranslationDictionary;
const PYB_MIN_TIMER = 7;
const EXPECTED_PLAYER_BALANCE = 10000;




// run tests for each game
describe('SANITY: Baccarat specific cases', async () => {
    // create a new instance of the game page object
    const roulettePage = new RoulettePage(gameName);

    // original object sessionData with values
    let sessionData: Data;

    // original object betDetails with values
    // let betObject: PlaceBetData;


    before('Calling one time before tests to set default params value', async () => {

        // build direct link object, used to open game
        sessionData = await Data.buildSessionDataObject(CasinoComponentEnum.LiveGames, true, gameName);
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

    beforeEach('Calling before each test', async () => {
        try {

            // copy object - make a object copy before each test
            // sessionData = deepClone(dataObject);

            //copy object - make a object copy before each test
            // betDetails = structuredClone(betObject);

            // update player balance
            // HeaderPo.updateBalance(EXPECTED_PLAYER_BALANCE, sessionData);

            // allureReporter.addStep('This STEP IS FROM beforeEach');
        } catch (err) {
            // assert.fail(err)
        }
    });

    afterEach('Execute after each test', async () => {

        // await browser.pause(250);
        // open a new tab
        // await browser.navigateTo('about:blank');
    });




    it.only(`SANITY_2_1 ${gameName} : Go to Lobby from Roulette (liveGames link)`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');



        try {
            // addArgumentsToAllure(QA.Eugen);
            const menuBtn = 'div[type="button"][aria-haspopup="dialog"]';
            const lobbyBtn = 'span=Lobby';

               
// !roulettePage.chipset.

            // await allureReporter.step('Open game by direct link', async () => {
                await roulettePage.openByDirectLink(sessionData, openModeType.gameDirectLink);         // check that corrrect balance when tests starts
            // Wait for the logo to be displayed

            

            if (browser.isMobile) {
                await $(menuBtn).waitForDisplayed({
                    timeout: 30000, // Wait up to x seconds
                    timeoutMsg: 'Logo image was not displayed within 30 seconds', // Custom error message
                });
                await $(menuBtn).click();
            }
            else {
                await $(lobbyBtn).waitForDisplayed({
                    timeout: 30000, // Wait up to x seconds
                    timeoutMsg: 'Logo image was not displayed within 30 seconds', // Custom error message
                });
            }

            // go to Lobby
            await $(lobbyBtn).click();
            // open back the game

            // go to home

            // const gameBalance = await HeaderPo.getBalance();
            // assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
            // })

            // await allureReporter.step(`Check the Road map and Prediction road are displayed in game`, async () => {
            // await DragonTigerGamePo.roadmap.map.waitForDisplayed({ timeout: 10000 });
            // assert.ok(await DragonTigerGamePo.roadmap.map.isDisplayed(), `Not found the Road Map in the game`);
            // assert.ok(await DragonTigerGamePo.predictionRoad.isDisplayed(), `Not found the Prediction Road in the game`);
            // });
            console.log('abcd');

        } catch (err) {
            throw new Error(err)
        }
    });


});