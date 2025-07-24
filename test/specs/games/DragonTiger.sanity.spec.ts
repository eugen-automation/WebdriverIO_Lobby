// import { gameStatusMap } from '../src/models/enums/gameStatus.enum.ts';
import { deepClone } from '../../src/utils/helpers/generalLogic.helper.ts'
// import DragonTigerGamePo from '../pageObjects/games/DragonTiger.game.po.ts';
// import allureReporter from '@wdio/allure-reporter';
import { CasinoComponentEnum, GamesNamesEnum } from '../../src/models/enums/gameNames.enum.ts';
import { TranslationDictionary } from '../../src/models/types/translationDict.type.ts';
import { PlaceBetData } from '../../src/models/types/placeBetData.ts';
import Data from '../../src/utils/helpers/SessionData.class.ts';
import Services from '../../src/utils/API/services.api.ts';
import { Prerequisite } from '../../src/utils/helpers/common.prerequisite.ts';
// import assert from 'assert';
// import { addArgumentsToAllure } from '../../../src/helpers/allureReporter.helper.ts';
// import BettingAreaPo from '../src/pageObjects/components/BettingArea.comp.po.ts';
// import HeaderPo from '../../../src/pageObjects/components/Header.comp.po.ts';
// import GamePagePo from '../../src/pageObjects/LiveGames/common/GamePage.comm.ts_toBeDeleted';
import { DragonTigerPage } from '../../src/pageObjects/LiveGames/DT/DragonTigerPage.ts';


// import NotificationsPo from '../../../src/pageObjects/components/Notifications.comp.po.ts';
// import GameStatusPo from '../../../src/pageObjects/components/GameStatus.comp.po.ts';
// import { CardId, emptyCardMap } from '../../../src/models/enums/cardIds.enum.ts';
// import { betspotList } from '../../../src/models/types/betspotList.ts';
// import WinningAnimationPo from '../../../src/pageObjects/components/WinningAnimation.comp.po.ts';
// import { adminGameParam } from '../../src/models/types/adminParam.ts';
// import notificationJSONData from '../../../src/JSON/games/notificationsDetails.data.json' assert { type: 'json' };
// import { QA } from '../../src/models/enums/qa.enum.ts';



// read from .env file the games to run tests on
const gameName: GamesNamesEnum = Prerequisite.getListOfGamesToBeTested()[0];
if (gameName !== GamesNamesEnum.DT) {
    console.error(`Game name is incorrect: ${gameName}. Please specify correct game to run Dragon Tiger sanity tests!!!`);
    process.exit(1);  // Exit the process with a non-zero code to indicate failure
}

let sessionData: Data;
let betDetails: PlaceBetData;
let TRANSLATION_DICTIONARY: TranslationDictionary;
const PYB_MIN_TIMER = 7;
const EXPECTED_PLAYER_BALANCE = 10000;

const roadmapTranslationKeys = {
    dragon: 'DT.beadRoadMap.DragonSymbol',
    tiger: 'DT.beadRoadMap.TigerSymbol',
    tie: 'DT.beadRoadMap.TieSymbol',
}


// run tests for each game
describe('SANITY: Dragon Tiger specific cases', async () => {

    // original object sessionData with values
    let dataObject: Data;

    // original object betDetails with values
    let betObject: PlaceBetData;
    const dragonTigerPage = new DragonTigerPage();


    before('Calling one time before tests to set default params value', async () => {

        console.log('asfasdfa')
        // build direct link object, used to open game
        dataObject = await Data.buildSessionDataObject(CasinoComponentEnum.LiveGames, true, gameName);
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
        // TRANSLATION_DICTIONARY = await Services.Translations.getTraslatedDictionary(dataObject.game.type, dataObject.languageId);

        // DT special params
        // await Services.Params.updateGameParams(tempDataObject, adminGameParam.preBetsAllowed, '1');

    });

    beforeEach('Calling before each test', async () => {
        try {

            // copy object - make a object copy before each test
            sessionData = deepClone(dataObject);

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

        await browser.pause(250);
        // open a new tab
        await browser.navigateTo('about:blank');
    });



    // it(`SANITY_1 ${gameName} : Check Side Bets on betting area`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         // configure side bets
    //         betDetails.betspots = BettingAreaPo.getAllSideBetspots(gameName)

    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Place bet on all side-betspots`, async () => {
    //             await BettingAreaPo.placeBet(betDetails)
    //         });

    //         await allureReporter.step(`Check for 'Bets Accepted' notification`, async () => {
    //             const expectedNotificationText = TRANSLATION_DICTIONARY[notificationJSONData.betsAccepted.translationKey];
    //             const foundNotificationText = await NotificationsPo.getNotificationMessage();

    //             assert.strictEqual(expectedNotificationText, foundNotificationText, `Was found wrong notification. Expected: ${expectedNotificationText}, found: ${foundNotificationText}`);
    //         });

    //         await allureReporter.step(`Check for proper bet amount`, async () => {
    //             const betAmount = await HeaderPo.getBetAmount();
    //             assert.strictEqual(betDetails.betspots.betspotsToPlaceBets.length * betDetails.betAmount, betAmount, `Expected bet amount: ${betDetails.betspots.betspotsToPlaceBets.length * betDetails.betAmount}, found in game: ${betAmount}`)
    //         });

    //         await allureReporter.step(`Check there are no bets/chips on main betspots`, async () => {
    //             assert.ok(!await DragonTigerGamePo.bettingArea.dragon.chip.isDisplayed(), `There is chip being placed on Dragon betspot`);
    //             assert.ok(!await DragonTigerGamePo.bettingArea.tiger.chip.isDisplayed(), `There is chip being placed on Tiger betspot`);
    //             assert.ok(!await DragonTigerGamePo.bettingArea.tie.chip.isDisplayed(), `There is chip being placed on Tie betspot`);
    //         });

    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });

    it.only(`SANITY_2_1 ${gameName} : Check Road Map and Prediction road are displayed`, async function () {
        console.info('-----------------------------------------------------------------------------------------------------------------------------');
        console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
        console.info('-----------------------------------------------------------------------------------------------------------------------------');



        try {
            // addArgumentsToAllure(QA.Eugen);
           await dragonTigerPage.openByDirectLink(sessionData);

        //    dragonTigerPage.chipset.

            // await allureReporter.step('Open game by direct link', async () => {
                // await GamePagePo.openByDirectLink(sessionData);

                // check that corrrect balance when tests starts
                // const gameBalance = await HeaderPo.getBalance();
                // assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
            // })

            // await allureReporter.step(`Check the Road map and Prediction road are displayed in game`, async () => {
                // await DragonTigerGamePo.roadmap.map.waitForDisplayed({ timeout: 10000 });
                // assert.ok(await DragonTigerGamePo.roadmap.map.isDisplayed(), `Not found the Road Map in the game`);
                // assert.ok(await DragonTigerGamePo.predictionRoad.isDisplayed(), `Not found the Prediction Road in the game`);
            // });
            // console.log('asdfasdf');

        } catch (err) {
            throw new Error(err)
        }
    });

    // it(`SANITY_2_2 ${gameName} : Check Road Map changes after clicking on it`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         const minimumRoadMapCellsTestRequired = 2;
    //         // TIE # hex color
    //         const roadMapGreenCircleHexValue = '##007f12';
    //         const chineseSymbol = ['龍', '虎'];


    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Check to have minimum roadmap statistics: ${minimumRoadMapCellsTestRequired} round history`, async () => {
    //             assert.ok(await DragonTigerGamePo.roadmap.map.isDisplayed(), `Not found the Road Map in the game`);
    //             console.log('await DragonTigerGamePo.roadmap.allItems.length :>> ', await DragonTigerGamePo.roadmap.allItems.length);
    //             assert.ok(await DragonTigerGamePo.roadmap.allItems.length >= minimumRoadMapCellsTestRequired, 'Found less data in Road map than required for test. Please check!');
    //         });


    //         await allureReporter.step(`Check that road map changes values after clicking on it`, async () => {

    //             // get circle color and text
    //             const itemValueDefaultViewText = await DragonTigerGamePo.roadmap.firstItem.getText();
    //             const itemValueDefaultViewColor = await DragonTigerGamePo.roadmap.firstItemColor.getAttribute('fill');

    //             //click on road map
    //             await DragonTigerGamePo.roadmap.map.click();
    //             // get text and color
    //             const itemValueViewAfterFirstClickText = await DragonTigerGamePo.roadmap.firstItem.getText();
    //             const itemValueViewAfterFirstClickColor = await DragonTigerGamePo.roadmap.firstItemColor.getAttribute('fill');

    //             //click on road map
    //             await DragonTigerGamePo.roadmap.map.click();
    //             const itemValueViewAfterSecondClickText = await DragonTigerGamePo.roadmap.firstItem.getText();
    //             const itemValueViewAfterSecondClickColor = await DragonTigerGamePo.roadmap.firstItemColor.getAttribute('fill');

    //             //click on road map
    //             await DragonTigerGamePo.roadmap.map.click();
    //             const itemValueViewAfterLastClickText = await DragonTigerGamePo.roadmap.firstItem.getText();
    //             const itemValueViewAfterLastClickColor = await DragonTigerGamePo.roadmap.firstItemColor.getAttribute('fill');


    //             // check TIE case
    //             if (itemValueDefaultViewColor === roadMapGreenCircleHexValue) {
    //                 // the text and color not change after 1st click for TIE only
    //                 assert.strictEqual(itemValueDefaultViewText, itemValueViewAfterFirstClickText, 'Tie default text value and after 1st click are not the same!');
    //                 // the chinese text is the expected one, same color
    //                 assert.ok(chineseSymbol.includes(itemValueViewAfterSecondClickText), `The expected Tiger chinese symbol not found. Found: ${itemValueViewAfterSecondClickText}`);
    //             }
    //             // Dragon and Tiger cases
    //             else {
    //                 // check that after 1st click a number is displayed
    //                 assert.notDeepStrictEqual(itemValueDefaultViewText, itemValueViewAfterFirstClickText, `Expected to find number value after click once on road map, but not found`)
    //                 // check that after 
    //                 assert.ok(chineseSymbol.includes(itemValueViewAfterSecondClickText), `The expected Tiger chinese symbol not found. Found: ${itemValueViewAfterSecondClickText}`);
    //             }

    //             // [OPTIONAL]
    //             // check same color after clicks
    //             assert.strictEqual(itemValueDefaultViewColor, itemValueViewAfterFirstClickColor, `Tie color before and after 1st click are different. Expected: ${itemValueDefaultViewColor}, found: ${itemValueViewAfterFirstClickColor}`);
    //             assert.strictEqual(itemValueDefaultViewColor, itemValueViewAfterSecondClickColor, `Tie color before and after 2st click are different. Expected: ${itemValueDefaultViewColor}, found: ${itemValueViewAfterSecondClickColor}`);
    //             assert.strictEqual(itemValueDefaultViewColor, itemValueViewAfterLastClickColor, `Tie color before and after last click are different. Expected: ${itemValueDefaultViewColor}, found: ${itemValueViewAfterLastClickColor}`);

    //             // check the same text after 3 clicks is displayed
    //             assert.strictEqual(itemValueDefaultViewText, itemValueViewAfterLastClickText, `The default view text: ${itemValueDefaultViewText}, not equals the last click text: ${itemValueViewAfterLastClickText}`)
    //         });

    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });

    // it(`SANITY_2_3 ${gameName} : Check Road Map static values update on click change`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');

    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         const minimumRoadMapCellsTestRequired = 3;
    //         const roadMapDragonChineseValue = '龍';
    //         const roadMapTigerChineseValue = '虎';
    //         const roadMapTieChineseValue = '和';

    //         // Creating a new Map
    //         const map = new Map();
    //         let defaultRoadMapView: string[] = [];
    //         let textRoadMapView: string[] = [];
    //         let numberRoadMapView: string[] = [];
    //         let chineseSymbolRoadMapView: string[] = [];


    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         })

    //         await allureReporter.step(`Check the Road map and Prediction road are displayed in game`, async () => {

    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[gameName].PLACE_YOUR_BETS.text, gameName, 10);
    //             await DragonTigerGamePo.roadmap.map.waitForDisplayed({ timeout: 1000 });
    //         })

    //         await allureReporter.step(`Check there is minimum data in roadmap`, async () => {
    //             assert.ok(await DragonTigerGamePo.roadmap.allItems.length >= minimumRoadMapCellsTestRequired, 'Found less data in Road map than required for test. Please check!');
    //         })

    //         await allureReporter.step(`Read the roadmap data`, async () => {

    //             const allElems = await DragonTigerGamePo.roadmap.allItems;
    //             if (Array.isArray(allElems)) {
    //                 for (let elem of allElems) {
    //                     // const elemText = await elem.getText();
    //                     const elemColor = await elem.$('circle').getAttribute('fill');
    //                     if (elemColor) {
    //                         map.set(elemColor, elem)
    //                     }

    //                 }

    //                 // set keys as array
    //                 defaultRoadMapView = [...map.keys()]
    //                 assert.ok(defaultRoadMapView.length >= 2, 'Found too less data in roadmap to continue the test. Please make sure to have at least Dragon & Tiger data')

    //                 // get text values
    //                 for (const value of map.values()) {
    //                     const elemText = await value.getText();
    //                     if (elemText) {
    //                         textRoadMapView.push(elemText)
    //                     }
    //                 }

    //                 //click on road map to view numbers
    //                 await DragonTigerGamePo.roadmap.map.click();

    //                 for (const value of map.values()) {
    //                     const elemText = await value.getText();
    //                     if (elemText) {
    //                         numberRoadMapView.push(elemText)
    //                     }
    //                 }

    //                 //click on road map to view chinese symbols
    //                 await DragonTigerGamePo.roadmap.map.click();

    //                 for (const value of map.values()) {
    //                     const elemText = await value.getText();
    //                     if (elemText) {
    //                         chineseSymbolRoadMapView.push(elemText)
    //                     }
    //                 }
    //             }
    //             else {
    //                 throw new Error(`Not found the list of roadmap items!`)
    //             }
    //         })

    //         await allureReporter.step(`Check for correct text change on roadmap click`, async (s0) => {
    //             for (let i = 0; i < defaultRoadMapView.length; i++) {

    //                 // dragon case
    //                 if (chineseSymbolRoadMapView[i] === roadMapDragonChineseValue) {
    //                     await s0.step(`Check DRAGON item on road map for proper values`, async (s1) => {

    //                         await s1.step(`Check for proper translation value on default roadmap view: ${TRANSLATION_DICTIONARY[roadmapTranslationKeys.dragon]},`, async () => {
    //                             assert.strictEqual(TRANSLATION_DICTIONARY[roadmapTranslationKeys.dragon], textRoadMapView[i], `Wrong translation found`)

    //                         })
    //                         await s1.step(`Check to display card value by click on roadmap: ${numberRoadMapView[i]}`, () => {
    //                             assert.ok(!isNaN(parseInt(numberRoadMapView[i])), `Is not a number!`);
    //                         });

    //                         await s1.step(`Check to display proper chinese symbol by click on roadmap: ${roadMapDragonChineseValue}`, () => {
    //                             assert.strictEqual(chineseSymbolRoadMapView[i], roadMapDragonChineseValue)
    //                         });
    //                     });
    //                 }
    //                 //tiger case
    //                 else if (chineseSymbolRoadMapView[i] === roadMapTigerChineseValue) {
    //                     await s0.step(`Check TIGER item on road map for proper values`, async (s1) => {
    //                         await s1.step(`Check for proper translation value on default roadmap view: ${TRANSLATION_DICTIONARY[roadmapTranslationKeys.tiger]},`, async () => {
    //                             assert.strictEqual(TRANSLATION_DICTIONARY[roadmapTranslationKeys.tiger], textRoadMapView[i], `Wrong translation for Tiger`);
    //                         });
    //                         await s1.step(`Check to display card value by click on roadmap: ${numberRoadMapView[i]}`, () => {
    //                             assert.ok(!isNaN(parseInt(numberRoadMapView[i])), `Is not a number!`);
    //                         });
    //                         await s1.step(`Check to display proper chinese symbol by click on roadmap: ${roadMapTigerChineseValue}`, () => {
    //                             assert.strictEqual(chineseSymbolRoadMapView[i], roadMapTigerChineseValue)
    //                         })
    //                     });

    //                 }
    //                 else {
    //                     await s0.step(`Check TIE item on road map for proper values`, async (s1) => {
    //                         await s1.step(`Check for proper translation value on default roadmap view: ${TRANSLATION_DICTIONARY[roadmapTranslationKeys.tie]},`, async () => {
    //                             assert.strictEqual(TRANSLATION_DICTIONARY[roadmapTranslationKeys.tie], textRoadMapView[i], `Wrong translation for Tie`);
    //                         });
    //                         await s1.step(`Check NOT to display card value by click on roadmap for TIE only: ${numberRoadMapView[i]}`, () => {
    //                             assert.strictEqual(TRANSLATION_DICTIONARY[roadmapTranslationKeys.tie], numberRoadMapView[i], `Not found symbol for Tie on roadmap click!`)
    //                         });
    //                         await s1.step(`Check to display proper chinese symbol by click on roadmap: ${roadMapTieChineseValue}`, () => {
    //                             assert.strictEqual(chineseSymbolRoadMapView[i], roadMapTieChineseValue)
    //                         })
    //                     });

    //                 }
    //             }
    //         })

    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });

    // it(`SANITY_3: ${gameName}: Check Cancel round in Place Your Bets`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

            
    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         })

    //         const balanceBeforeCancel = await HeaderPo.getBalance();


    //         await allureReporter.step(`Cancel the round in Place Your Bets phase`, async () => {
    //             // wait PYB
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text);

    //             await Services.TableManager.cancelRound(Number(sessionData.game.id));
    //         });

    //         await allureReporter.step(`Check for proper notification`, async () => {
    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.cancelRound.translationKey], 'Not found Cancel round notification');
    //         });

    //         // get header data after cancel
    //         const balanceAfterCancel = await HeaderPo.getBalance();

    //         await allureReporter.step(`Check balance before and after cancel round to be the same`, () => {
    //             assert.strictEqual(balanceBeforeCancel, balanceAfterCancel, `Balance before cancel round: ${balanceBeforeCancel} and after cancel round: ${balanceAfterCancel} are not the same`);
    //         })
    //     }
    //     catch (err) { throw new Error(err) }
    //     finally {
    //         await Services.TableManager.pauseOff(Number(sessionData.game.id));
    //     }

    // });

    // it(`SANITY_4: ${gameName}: Check Cancel round after placing bets`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         let betAmountBeforePlacingBet, balanceBeforePlacingBet;



    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);

    //             betAmountBeforePlacingBet = await HeaderPo.getBetAmount();
    //             balanceBeforePlacingBet = gameBalance;
    //         });

    //         await allureReporter.step(`Place bet on one main betspot and check for notification`, async () => {

    //             await BettingAreaPo.placeBet(betDetails);

    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.betsAccepted.translationKey], 'Not found Bets Accepted notification');
    //         });

    //         await allureReporter.step(`Check for Bets Accepted notification`, async () => {
    //         });

    //         await allureReporter.step(`Check for porper bet amount and balance after place bet`, async () => {
    //             assert.strictEqual(await HeaderPo.getBetAmount(), betDetails.betAmount, 'Found wrong bet amount after placing bets');
    //             assert.strictEqual(await HeaderPo.getBalance(), balanceBeforePlacingBet - betDetails.betAmount, 'Found wrong balance after placing bets');
    //         });

    //         await allureReporter.step(`Cancel the round after placing bets`, async () => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].NO_MORE_BETS.text);
    //             await Services.TableManager.cancelRound(Number(sessionData.game.id));
    //         });

    //         await allureReporter.step(`Check for proper cancel notification`, async () => {
    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.cancelRound.translationKey], 'Not found Cancel round notification');
    //         });

    //         // wait a little
    //         await browser.pause(2000)
    //         await allureReporter.step(`Check the bet amount and balance to be the same before and after place bet`, async () => {
    //             assert.strictEqual(betAmountBeforePlacingBet, await HeaderPo.getBetAmount(), 'Wrong bet amount after cancel round');
    //             assert.strictEqual(balanceBeforePlacingBet, await HeaderPo.getBalance(), 'Wrong balance after cancel round');
    //         });
    //     }
    //     catch (err) { throw new Error(err) }
    //     finally {
    //         await Services.TableManager.pauseOff(Number(sessionData.game.id));
    //     }
    // });

    // it.skip(`SANITY_4 ${gameName} : Check 'Wait for Next Game' phase`, () => {
    // });

    // it(`SANITY_5 ${gameName} : Check Undo cards`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         const expectedCardClassName = 'card card-hearts-ace';   // the card after undo
    //         const playerCardsMapBeforeUndo: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.SEVEN_OF_HEARTS, CardId.KING_OF_HEARTS],
    //         };
    //         const playerCardsMapAfterUndo: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.ACE_OF_HEARTS],
    //         };
    //         let tigerVirtualCardsElem;



    //         await allureReporter.step(`Open the game by direct link`, async (s1) => {

    //             // open game by direct link
    //             await GamePagePo.openByDirectLink(sessionData, s1);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Send specific cards in Table Manager for player and dealer to be dealt`, async (s1) => {

    //             // wait for PLACE YOUR BETS phase
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[sessionData.game.name]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             // Send cards to TM in PYB
    //             await Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMapBeforeUndo, [], [], undefined, s1);
    //         });


    //         // undo
    //         await allureReporter.step(`Undo last card in Table Manager!`, async () => {

    //             // wait for NO more bets
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].NO_MORE_BETS.text);

    //             // get virtual card elem
    //             tigerVirtualCardsElem = DragonTigerGamePo.bettingArea.tiger.virtualCard;

    //             // wait for tiger virtual card to start undo
    //             await browser.waitUntil(async function () {
    //                 const className = await tigerVirtualCardsElem.getAttribute('class');
    //                 console.log('wait for tiger card :>> ', className);
    //                 return !(await className.includes('undefined'));
    //             })

    //             await Services.TableManager.undoLastCard(Number(sessionData.game.id));
    //         })

    //         await allureReporter.step(`Getting a new card after UNDO for Tiger`, async () => {
    //             await Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMapAfterUndo, [], [], true);
    //         })


    //         await allureReporter.step(`Check Tiger got a new card `, async () => {

    //             assert.ok(await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].DRAGON_WINS.text), `Not found the Dragon win`);

    //             const foundCardInGame = await tigerVirtualCardsElem.getAttribute('class');
    //             assert.strictEqual(expectedCardClassName, foundCardInGame, `Not found the correct card after undo. Expected: ${expectedCardClassName}, found: ${foundCardInGame}`);
    //         })

    //     } catch (err) {
    //         throw new Error(err)
    //     }


    // });

    // it(`SANITY_6 ${gameName} : Check highlight on winning betspots for both main and side bets`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         // let dragonBetspotElem, dragonBigBetspotElem, dragonSmallBetspotElem, dragonClubsBetspotElem, dragonDiamondBetspotElem, dragonHeartsBetspotElem, dragonSpadesBetspotElem,
    //         // tieBetspotElem,
    //         let tigerBetspotElem, tigerBigBetspotElem, tigerSmallBetspotElem, tigerClubsBetspotElem, tigerDiamondBetspotElem, tigerHeartsBetspotElem, tigerSpadesBetspotElem;
    //         // let dragonBetspotColor, dragonBigBetspotColor, dragonSmallBetspotColor, dragonClubsBetspotColor, dragonDiamondBetspotColor, dragonHeartsBetspotColor, dragonSpadesBetspotColor,
    //         // tieBetspotColor, tieBetspotColorOpacity,
    //         let tigerBetspotColor, tigerBigBetspotColor, tigerSmallBetspotColor, tigerClubsBetspotColor, tigerDiamondBetspotColor, tigerHeartsBetspotColor, tigerSpadesBetspotColor;
    //         const playerCardsMap: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.SEVEN_OF_DIAMONDS, CardId.KING_OF_HEARTS],
    //         };
    //         const highlightedBetspotWin = '{"property":"background","value":"none 0% 0% auto repeat padding-box border-box scroll rgba(0, 155, 212, 1)","parsed":{}}';
    //         const highlightedBetspotNoChange = '{"property":"background","value":"none 0% 0% auto repeat padding-box border-box scroll rgba(0, 155, 212, 0.5)","parsed":{}}';
    //         // const highlightedTigerWin = '{"property":"background","value":"none 0% 0% auto repeat padding-box border-box scroll rgba(204, 41, 41, 0.5)","parsed":{}}';
    //         // const dragonColor = 'rgba(204,41,41,0.7)';
    //         // const tieBetspotExpectedOpacity = '0.7';
    //         const tigerColor = 'rgba(0,155,212,0.7)';



    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Send specific cards in Table Manager for player and dealer to be dealt`, async (s1) => {

    //             // wait for PLACE YOUR BETS phase
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[sessionData.game.name]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             // Send cards to TM in PYB
    //             await Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMap, [], [], undefined, s1);
    //         });


    //         await allureReporter.step(`Getting the betspots elements before reading css background color`, async () => {

    //             [tigerBetspotElem, tigerBigBetspotElem, tigerSmallBetspotElem, tigerClubsBetspotElem, tigerDiamondBetspotElem, tigerHeartsBetspotElem, tigerSpadesBetspotElem] = await Promise.all([
    //                 DragonTigerGamePo.bettingArea.tiger.backgroundColor, DragonTigerGamePo.bettingArea.tigerBig.betspot, DragonTigerGamePo.bettingArea.tigerSmall.betspot,
    //                 DragonTigerGamePo.bettingArea.tigerClubs.betspot, DragonTigerGamePo.bettingArea.tigerDiamonds.betspot, DragonTigerGamePo.bettingArea.tigerHearts.betspot,
    //                 DragonTigerGamePo.bettingArea.tigerSpades.betspot
    //             ])


    //             // tieBetspotElem = DragonTigerGamePo.bettingArea.tie.backgroundColor;

    //             // dragonBetspotElem = DragonTigerGamePo.bettingArea.dragon.backgroundColor;
    //             // dragonBigBetspotElem = DragonTigerGamePo.bettingArea.dragonBig.betspot;
    //             // dragonSmallBetspotElem = DragonTigerGamePo.bettingArea.dragonSmall.betspot;
    //             // dragonClubsBetspotElem = DragonTigerGamePo.bettingArea.dragonClubs.betspot;
    //             // dragonDiamondBetspotElem = DragonTigerGamePo.bettingArea.dragonDiamonds.betspot;
    //             // dragonHeartsBetspotElem = DragonTigerGamePo.bettingArea.dragonDiamonds.betspot;
    //             // dragonSpadesBetspotElem = DragonTigerGamePo.bettingArea.dragonSpades.betspot;

    //         })

    //         await allureReporter.step(`Getting the betspot background color, in order to detect the highlight`, async () => {

    //             // wait for RESULT_READY phase
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].TIGER_WINS.text);


    //             [tigerBetspotColor, tigerBigBetspotColor, tigerSmallBetspotColor, tigerClubsBetspotColor, tigerDiamondBetspotColor, tigerHeartsBetspotColor, tigerSpadesBetspotColor,
    //                 // tieBetspotColor, tieBetspotColorOpacity,
    //                 // dragonBetspotColor, dragonBigBetspotColor, dragonSmallBetspotColor, dragonClubsBetspotColor, dragonDiamondBetspotColor, dragonHeartsBetspotColor, dragonSpadesBetspotColor
    //             ] = await Promise.all([
    //                 tigerBetspotElem.getAttribute('fill'),
    //                 tigerBigBetspotElem.getCSSProperty('background'),
    //                 tigerSmallBetspotElem.getCSSProperty('background'),
    //                 tigerClubsBetspotElem.getCSSProperty('background'),
    //                 tigerDiamondBetspotElem.getCSSProperty('background'),
    //                 tigerHeartsBetspotElem.getCSSProperty('background'),
    //                 tigerSpadesBetspotElem.getCSSProperty('background'),

    //                 // tieBetspotElem.getAttribute('fill'),
    //                 // tieBetspotElem.getAttribute('opacity'),

    //                 // dragonBetspotElem.getAttribute('fill'),
    //                 // dragonBigBetspotElem.getCSSProperty('background'),
    //                 // dragonSmallBetspotElem.getCSSProperty('background'),
    //                 // dragonClubsBetspotElem.getCSSProperty('background'),
    //                 // dragonDiamondBetspotElem.getCSSProperty('background'),
    //                 // dragonHeartsBetspotElem.getCSSProperty('background'),
    //                 // dragonSpadesBetspotElem.getCSSProperty('background'),

    //             ]);
    //         })

    //         await allureReporter.step(`Check for proper betspot highlight in Result Ready phase`, () => {
    //             // assert.equal(dragonBetspotColor, dragonColor, 'Found wrong color for Dragon betspot');
    //             // assert.strictEqual(JSON.stringify(dragonBigBetspotColor), highlightedTigerWin, 'Found wrong color for Dragon betspot');
    //             // assert.strictEqual(JSON.stringify(dragonSmallBetspotColor), highlightedTigerWin, `Found wrong color for Dragon betspot`);
    //             // assert.strictEqual(JSON.stringify(dragonClubsBetspotColor), highlightedTigerWin, 'Found wrong color for Dragon betspot');
    //             // assert.strictEqual(JSON.stringify(dragonDiamondBetspotColor), highlightedTigerWin, 'Found wrong color for Dragon betspot');
    //             // assert.strictEqual(JSON.stringify(dragonHeartsBetspotColor), highlightedTigerWin, 'Found wrong color for Dragon betspot');
    //             // assert.strictEqual(JSON.stringify(dragonSpadesBetspotColor), highlightedTigerWin, 'Found wrong color for Dragon betspot');

    //             // assert.strictEqual(tieBetspotColor, tieBetspotColor, 'Found wrong color for Dragon betspot');
    //             // assert.strictEqual(tieBetspotColorOpacity, tieBetspotExpectedOpacity, 'Found wrong color for Dragon betspot');

    //             assert.strictEqual(tigerBetspotColor, tigerColor, 'Found wrong color for Dragon betspot');
    //             assert.strictEqual(JSON.stringify(tigerBigBetspotColor), highlightedBetspotWin, 'Found wrong color for Dragon betspot');
    //             assert.strictEqual(JSON.stringify(tigerSmallBetspotColor), highlightedBetspotNoChange, 'Found wrong color for Dragon betspot');
    //             assert.strictEqual(JSON.stringify(tigerClubsBetspotColor), highlightedBetspotNoChange, 'Found wrong color for Dragon betspot');
    //             assert.strictEqual(JSON.stringify(tigerDiamondBetspotColor), highlightedBetspotNoChange, 'Found wrong color for Dragon betspot');
    //             assert.strictEqual(JSON.stringify(tigerHeartsBetspotColor), highlightedBetspotWin, 'Found wrong color for Dragon betspot');
    //             assert.strictEqual(JSON.stringify(tigerSpadesBetspotColor), highlightedBetspotNoChange, 'Found wrong color for Dragon betspot');

    //         })

    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // })

    // it(`SANITY_7 ${gameName} : Check total chips percentage for Dragon, Tiger and Tie`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         betDetails.betspots = BettingAreaPo.getAllMainBetspots(gameName);
    //         const dragonTotalChipsElem = DragonTigerGamePo.bettingArea.dragon.totalChips;
    //         const tigerTotalChipsElem = DragonTigerGamePo.bettingArea.tiger.totalChips;
    //         const tieTotalChipsElem = DragonTigerGamePo.bettingArea.tie.totalChips;


    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });


    //         await allureReporter.step(`Check initial values of Total Chips `, async () => {

    //             // wait for Place Your Bets
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].PLACE_YOUR_BETS.text);

    //             //get the total chips values
    //             let [dragonTotalChipsText, tigerTotalChipsText, tieTotalChipsText] = await Promise.all([dragonTotalChipsElem.getText(), tigerTotalChipsElem.getText(), tieTotalChipsElem.getText()]);

    //             assert.strictEqual('0%', dragonTotalChipsText, 'Dragon initial value of total chips % is not 0')
    //             assert.strictEqual('0%', tigerTotalChipsText, 'Tiger initial value of total chips % is not 0')
    //             assert.strictEqual('0%', tieTotalChipsText, 'Tie initial value of total chips % is not 0')
    //         });

    //         // place bet
    //         await allureReporter.step(`Place bet`, async () => {
    //             await BettingAreaPo.placeBet(betDetails)
    //         });

    //         await allureReporter.step(`Check for Bets Accepted notification`, async () => {
    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.betsAccepted.translationKey], 'Not found Bets Accepted notification');
    //         });




    //         await allureReporter.step(`Check after place bets the Total Chips to update properly`, async () => {

    //             await browser.pause(500);

    //             //get the total chips values
    //             let [dragonTotalChipsText, tigerTotalChipsText, tieTotalChipsText] = await Promise.all([dragonTotalChipsElem.getText(), tigerTotalChipsElem.getText(), tieTotalChipsElem.getText()]);

    //             assert.strictEqual('33%', dragonTotalChipsText, `Found wrong value for Dragon total chips. Expected: 33, found: ${dragonTotalChipsText}`);
    //             assert.strictEqual('33%', tigerTotalChipsText, `Found wrong value for Dragon total chips. Expected: 33, found: ${tigerTotalChipsText}`);
    //             assert.strictEqual('33%', tieTotalChipsText, `Found wrong value for Dragon total chips. Expected: 33, found: ${tieTotalChipsText}`);


    //             const finalDragonTotalChipsValue = Number(dragonTotalChipsText.replace('%', ''));
    //             const finalTigerTotalChipsValue = Number(tigerTotalChipsText.replace('%', ''));
    //             const finalTieTotalChipsValue = Number(tieTotalChipsText.replace('%', ''));

    //             const finalTotalChipsSum = finalDragonTotalChipsValue + finalTigerTotalChipsValue + finalTieTotalChipsValue;
    //             assert.ok((finalTotalChipsSum <= 100) && (finalTotalChipsSum > 98), `Total Chips sum is not > 98% and <= 100%, please check`);
    //         })

    //         await allureReporter.step(`Check next round to have the same total chips values`, async () => {

    //             // await GameStatusPo.waitForResultReadySpecificCase(gameName);
    //             await GameStatusPo.waitForSpecificGamePhase([gameStatusMap[gameName].TIGER_WINS.text, gameStatusMap[gameName].DRAGON_WINS.text, gameStatusMap[gameName].TIE_WINS.text]);

    //             // wait for 
    //             await DragonTigerGamePo.bettingArea.dragon.totalChips.waitForDisplayed({ timeout: 15000 })

    //             let [dragonTotalChipsText, tigerTotalChipsText, tieTotalChipsText] = await Promise.all([dragonTotalChipsElem.getText(), tigerTotalChipsElem.getText(), tieTotalChipsElem.getText()]);


    //             assert.strictEqual('33%', dragonTotalChipsText, `Found wrong value for Dragon total chips in next round. Expected: 33, found: ${dragonTotalChipsText}`);
    //             assert.strictEqual('33%', tigerTotalChipsText, `Found wrong value for Dragon total chips in next round. Expected: 33, found: ${tigerTotalChipsText}`);
    //             assert.strictEqual('33%', tieTotalChipsText, `Found wrong value for Dragon total chips in next round. Expected: 33, found: ${tieTotalChipsText}`);
    //         })


    //     } catch (err) {

    //     }

    // });

    // it(`SANITY_8 ${gameName} : Check cards not to be displayed on betting area in PYB but in no more bets they appear`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);


    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Wait for PLACE YOUR BETS phase and check no virtual cards`, async () => {

    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].PLACE_YOUR_BETS.text);

    //             // no virtual cards displayed
    //             assert.ok(! await DragonTigerGamePo.bettingArea.dragon.virtualCard.isDisplayed(), 'Dragon Virtual Cards found in Place Your Bets phase')
    //             assert.ok(! await DragonTigerGamePo.bettingArea.tiger.virtualCard.isDisplayed(), 'Tiger Virtual Cards found in Place Your Bets phase')
    //         })

    //         await allureReporter.step(`Wait for RESULT READY phase and check no virtual cards`, async () => {

    //             // await GameStatusPo.waitForResultReadySpecificCase(gameName);
    //             await GameStatusPo.waitForSpecificGamePhase([gameStatusMap[gameName].TIGER_WINS.text, gameStatusMap[gameName].DRAGON_WINS.text, gameStatusMap[gameName].TIE_WINS.text]);

    //             // no virtual cards displayed
    //             assert.ok(await DragonTigerGamePo.bettingArea.dragon.virtualCard.isDisplayed(), 'Dragon Virtual Cards NOT found in Place Your Bets phase')
    //             assert.ok(await DragonTigerGamePo.bettingArea.tiger.virtualCard.isDisplayed(), 'Tiger Virtual Cards NOT found in Place Your Bets phase')

    //         })


    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });

    // it(`SANITY_9 ${gameName} : Check that for main and side bets the correct text and color is displayed`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');

    //     try {
    //         addArgumentsToAllure(QA.Ala);

    //         let tigerBetspotText, tigerBackground, dragonBetspotText, dragonBackground, tieBetspotText, tieBackground,
    //             dragonSmallBetspot, tigerSmallBetspot, dragonBigBetspot, tigerBigBetspot,
    //             dragonTigerDiamondIcons, dragonTigerHeartsIcons, dragonTigerSpadesIcons, dragonTigerClubsIcons, dragonDiamondBetspot,
    //             dragonHeartsBetspot, dragonSpadesBetspot, dragonClubsBetspot, tigerDiamondBetspot, tigerHeartsBetspot, tigerSpadesBetspot, tigerClubsBetspot;

    //         let returnedTigerText, returnedTigerColor, returnedDragonText, returnedDragonColor, returnedTieText, returnedTieColor, returnedDragonSmallColor, returnedDragonBigColor, returnedDragonSmallText, returnedDragonBigText, returnedTigerSmallColor, returnedTigerBigColor, returnedTigerSmallText,
    //             returnedTigerBigText, diamondsIcons, heartsIcons, spadesIcons, clubsIcons, dragonDiamondColor, dragonHeartsColor, dragonSpadesColor, dragonClubsColor, tigerDiamondColor, tigerHeartsColor, tigerSpadesColor, tigerClubsColor;
    //         const expectedTigerText = 'TIGER';
    //         const expectedTigerColor = 'rgba(0,155,212,0.7)';
    //         const expectedDragonText = 'DRAGON';
    //         const expectedDragonColor = 'rgba(204,41,41,0.7)';
    //         const expectedTieText = 'TIE 8:1';
    //         const expectedTieColor = 'rgb(0,153,43)';
    //         const expectedDragonSmallText = 'SMALL';
    //         const expectedDragonSmallColor = 'rgba(204,41,41,0.7)';
    //         const expectedDragonBigText = 'BIG';
    //         const expectedDragonBigColor = 'rgba(204,41,41,0.7)';
    //         const expectedTigerSmallText = 'SMALL';
    //         const expectedTigerSmallColor = 'rgba(0,155,212,0.7)';
    //         const expectedTigerBigText = 'BIG';
    //         const expectedTigerBigColor = 'rgba(0,155,212,0.7)';
    //         const expectedDragonDiamondColor = 'rgba(204,41,41,0.7)';
    //         const expectedDragonHeartsColor = 'rgba(204,41,41,0.7)';
    //         const expectedDragonSpadesColor = 'rgba(204,41,41,0.7)';
    //         const expectedDragonClubsColor = 'rgba(204,41,41,0.7)';
    //         const expectedTigerDiamondColor = 'rgba(0,155,212,0.7)';
    //         const expectedTigerHeartsColor = 'rgba(0,155,212,0.7)';
    //         const expectedTigerSpadesColor = 'rgba(0,155,212,0.7)';
    //         const expectedTigerClubsColor = 'rgba(0,155,212,0.7)';



    //         //Open the game
    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Fetching all betting area betspot elements`, async () => {
    //             console.log(`Start fetching dragon betspots data`);
    //             //Defining all betspots elements
    //             [dragonBetspotText, dragonBackground, dragonBigBetspot, dragonSmallBetspot,
    //                 dragonDiamondBetspot, dragonTigerDiamondIcons, dragonHeartsBetspot, dragonTigerHeartsIcons, dragonSpadesBetspot, dragonTigerSpadesIcons, dragonClubsBetspot, dragonTigerClubsIcons,
    //             ] = await Promise.all([
    //                 DragonTigerGamePo.bettingArea.dragon.text, DragonTigerGamePo.bettingArea.dragon.backgroundColor,
    //                 DragonTigerGamePo.bettingArea.dragonBig.betspot, DragonTigerGamePo.bettingArea.dragonSmall.betspot,
    //                 DragonTigerGamePo.bettingArea.dragonDiamonds.betspot, DragonTigerGamePo.bettingArea.dragonTigerDiamondIcons,
    //                 DragonTigerGamePo.bettingArea.dragonHearts.betspot, DragonTigerGamePo.bettingArea.dragonTigerHeartsIcons,
    //                 DragonTigerGamePo.bettingArea.dragonSpades.betspot, DragonTigerGamePo.bettingArea.dragonTigerSpadesIcons,
    //                 DragonTigerGamePo.bettingArea.dragonClubs.betspot, DragonTigerGamePo.bettingArea.dragonTigerClubsIcons,
    //             ]);




    //             console.log(`Start fetching tiger betspots data`);
    //             [tigerBetspotText, tigerBackground, tigerBigBetspot, tigerSmallBetspot, tigerDiamondBetspot, tigerHeartsBetspot, tigerSpadesBetspot, tigerClubsBetspot,

    //                 tieBetspotText, tieBackground
    //             ] = await Promise.all([
    //                 DragonTigerGamePo.bettingArea.tiger.text, DragonTigerGamePo.bettingArea.tiger.backgroundColor,
    //                 DragonTigerGamePo.bettingArea.tigerBig.betspot, DragonTigerGamePo.bettingArea.tigerSmall.betspot,
    //                 DragonTigerGamePo.bettingArea.tigerDiamonds.betspot, DragonTigerGamePo.bettingArea.tigerHearts.betspot,
    //                 DragonTigerGamePo.bettingArea.tigerSpades.betspot, DragonTigerGamePo.bettingArea.tigerClubs.betspot,

    //                 DragonTigerGamePo.bettingArea.tie.text, DragonTigerGamePo.bettingArea.tie.backgroundColor
    //             ]);
    //         });

    //         // Wait for PLACE YOUR BETS phase
    //         await allureReporter.step('Wait for PYB to check text & color of main and side bets', async () => {
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text, gameName, 10);
    //         });

    //         //Getting text&color for all betspots
    //         await allureReporter.step(`Getting all betspots color and text`, async () => {
    //             [returnedDragonText, returnedDragonColor,
    //                 returnedDragonBigText, returnedDragonBigColor,
    //                 returnedDragonSmallText, returnedDragonSmallColor,
    //                 diamondsIcons,
    //                 heartsIcons,
    //                 spadesIcons,
    //                 clubsIcons,
    //                 dragonDiamondColor,
    //                 dragonHeartsColor,
    //                 dragonSpadesColor,
    //                 dragonClubsColor,

    //                 returnedTieText, returnedTieColor,

    //                 returnedTigerText, returnedTigerColor,
    //                 returnedTigerBigText, returnedTigerBigColor,
    //                 returnedTigerSmallText, returnedTigerSmallColor,
    //                 tigerDiamondColor,
    //                 tigerHeartsColor,
    //                 tigerSpadesColor,
    //                 tigerClubsColor]
    //                 = await Promise.all([dragonBetspotText.getText(), dragonBackground.getAttribute('fill'),
    //                 dragonBigBetspot.getText(), dragonBigBetspot.getCSSProperty('background-color'),
    //                 dragonSmallBetspot.getText(), dragonSmallBetspot.getCSSProperty('background-color'),
    //                     dragonTigerDiamondIcons,
    //                     dragonTigerHeartsIcons,
    //                     dragonTigerSpadesIcons,
    //                     dragonTigerClubsIcons,
    //                 dragonDiamondBetspot.getCSSProperty('background-color'),
    //                 dragonHeartsBetspot.getCSSProperty('background-color'),
    //                 dragonSpadesBetspot.getCSSProperty('background-color'),
    //                 dragonClubsBetspot.getCSSProperty('background-color'),

    //                 tieBetspotText.getText(), tieBackground.getCSSProperty('fill'),

    //                 tigerBetspotText.getText(), tigerBackground.getAttribute('fill'),
    //                 tigerBigBetspot.getText(), tigerBigBetspot.getCSSProperty('background-color'),
    //                 tigerSmallBetspot.getText(), tigerSmallBetspot.getCSSProperty('background-color'),
    //                 tigerDiamondBetspot.getCSSProperty('background-color'),
    //                 tigerHeartsBetspot.getCSSProperty('background-color'),
    //                 tigerSpadesBetspot.getCSSProperty('background-color'),
    //                 tigerClubsBetspot.getCSSProperty('background-color')
    //                 ])
    //         });


    //         //Check text&color for Dragon main betspot
    //         await allureReporter.step('Check correct text & color is displayed for Dragon main betspot', async () => {

    //             assert.strictEqual(expectedDragonText, returnedDragonText, `Found text for dragon betspot is ${returnedDragonText}. It doesn't match with the expected ${expectedDragonText} text `)
    //             assert.strictEqual(expectedDragonColor, returnedDragonColor, `Found color is ${returnedDragonColor}. It doesn't match with the expected ${expectedDragonColor} color`)
    //         });


    //         //Check text&color for Tiger main betspot
    //         await allureReporter.step('Check correct text & color is displayed for Tiger main betspot', async () => {
    //             // console.log('Check text&color for Tiger main betspot')

    //             assert.strictEqual(expectedTigerText, returnedTigerText, `Found text for tiger betspot is ${returnedTigerText}. It doesn't match with the expected ${expectedTigerText} text `)
    //             assert.strictEqual(expectedTigerColor, returnedTigerColor, `Found color is ${returnedTigerColor}. It doesn't match with the expected ${expectedTigerColor} color`)

    //         });


    //         //Check text&color for Tie main betspot
    //         await allureReporter.step('Check correct text & color is displayed for Tie main betspot', async () => {
    //             // console.log('Check text&color for Tie main betspot')

    //             assert.strictEqual(expectedTieText, returnedTieText, `Found text for tie betspot is ${returnedTieText}. It doesn't match with the expected ${expectedTieText} text `)
    //             assert.strictEqual(expectedTieColor, returnedTieColor.value, `Found color is ${returnedTieColor.value}. It doesn't match with the expected ${expectedTieColor} color`)

    //         });


    //         //Check text&color for Small&Big sidebets
    //         await allureReporter.step('Check correct text&color is displayed for sidebets SMALL&BIG', async (s1) => {

    //             //Check Dragon text&color for Small&Big sidebets
    //             await s1.step('Check correct Dragon text&color is displayed for sidebets SMALL&BIG', () => {
    //                 // console.log('Check Dragon text&color for Small&Big sidebets')
    //                 assert.strictEqual(expectedDragonSmallText, returnedDragonSmallText, `Found text for dragon small betspot is ${returnedDragonSmallText}. It doesn't match with the ${expectedDragonSmallText} text`)
    //                 assert.strictEqual(expectedDragonSmallColor, returnedDragonSmallColor.value, `Found color for dragon small betspot is ${returnedDragonSmallColor.value}. It doesn't match with the ${expectedDragonSmallColor} color`)
    //                 assert.strictEqual(expectedDragonBigText, returnedDragonBigText, `Found text for dragon big betspot is ${returnedDragonBigText}. It doesn't match with the ${expectedDragonBigText} text`)
    //                 assert.strictEqual(expectedDragonBigColor, returnedDragonBigColor.value, `Found color for dragon big betspot is ${returnedDragonBigColor.value}. It doesn't match with the ${expectedDragonBigColor} color`)
    //             })

    //             //Check Tiger text&color for Small&Big sidebets
    //             await s1.step('Check correct Tiger text&color is displayed for sidebets SMALL&BIG', () => {
    //                 // console.log('Checking Tiger text&color for Small&Big sidebets')
    //                 assert.strictEqual(expectedTigerSmallText, returnedTigerSmallText, `Found text for tiger small betspot is ${returnedTigerSmallText}. It doesn't match with the ${expectedTigerSmallText} text`)
    //                 assert.strictEqual(expectedTigerSmallColor, returnedTigerSmallColor.value, `Found color for tiger small betspot is ${returnedTigerSmallColor.value}. It doesn't match with the ${expectedTigerSmallColor} color`)
    //                 assert.strictEqual(expectedTigerBigText, returnedTigerBigText, `Found text for tiger big betspot is ${returnedTigerBigText}. It doesn't match with the ${expectedTigerBigText} text`)
    //                 assert.strictEqual(expectedTigerBigColor, returnedTigerBigColor.value, `Found color for tiger big betspot is ${returnedTigerBigColor.value}. It doesn't match with the ${expectedTigerBigColor} color`)
    //             })

    //         });


    //         //Check icons for Diamond, Hearts, Clubs and Spades sidebetspots
    //         await allureReporter.step('Check correct icons are displayed for Diamonds, Hearts, Clubs and Spades betspots', async (s1) => {

    //             // Check hearts icons
    //             await s1.step('Check 2 hearts icons are displayed', async () => {
    //                 // console.log('Checking hearts icons')
    //                 assert.strictEqual(2, heartsIcons.length, 'Could not find 2 elements of Hearts')
    //                 for (let elem of heartsIcons) {
    //                     assert.ok(await elem.isDisplayed(), 'Hearts icon is not displayed');
    //                 }
    //             })

    //             // Check diamond icons
    //             await s1.step('Check 2 diamond icons are displayed', async () => {
    //                 // console.log('Checking diamond icons')
    //                 assert.strictEqual(2, diamondsIcons.length, 'Could not find 2 elements of Diamond')
    //                 for (let elem of diamondsIcons) {
    //                     assert.ok(await elem.isDisplayed(), 'Diamond icon is not displayed');
    //                 }
    //             })

    //             //Check spades icons
    //             await s1.step('Check 2 spades icons are displayed', async () => {
    //                 // console.log('Checking spades icons')
    //                 assert.strictEqual(2, spadesIcons.length, 'Could not find 2 elements of Spades')
    //                 for (let elem of spadesIcons) {
    //                     assert.ok(await elem.isDisplayed(), 'Spades icon is not displayed');
    //                 }
    //             })

    //             //Check clubs icons
    //             await s1.step('Check 2 clubs icons are displayed', async () => {
    //                 // console.log('Checking clubs icons')
    //                 assert.strictEqual(2, clubsIcons.length, 'Clubs')
    //                 for (let elem of clubsIcons) {
    //                     assert.ok(await elem.isDisplayed(), 'Clubs icon is not displayed');
    //                 }
    //             });
    //         });


    //         //Check colors of Diamond, Hearts, Clubs and Spades sidebetspots
    //         await allureReporter.step('Check correct colors are displayed for Diamond, Hearts, Clubs and Spades sidebetspots', async (s1) => {
    //             // console.log('Checking colors of Diamond, Hearts, Clubs and Spades sidebetspots')
    //             await s1.step('Check correct colors are displayed for Dragon Diamonds, Hearts, Clubs and Spades betspots ', () => {
    //                 assert.strictEqual(expectedDragonDiamondColor, dragonDiamondColor.value, `Found color for dragon diamond betspot is ${dragonDiamondColor.value}. It doesn't match with the ${expectedDragonDiamondColor} color`)
    //                 assert.strictEqual(expectedDragonHeartsColor, dragonHeartsColor.value, `Found color for dragon diamond betspot is ${dragonHeartsColor.value}. It doesn't match with the ${expectedDragonHeartsColor} color`)
    //                 assert.strictEqual(expectedDragonSpadesColor, dragonSpadesColor.value, `Found color for dragon diamond betspot is ${dragonSpadesColor.value}. It doesn't match with the ${expectedDragonSpadesColor} color`)
    //                 assert.strictEqual(expectedDragonClubsColor, dragonClubsColor.value, `Found color for dragon diamond betspot is ${dragonClubsColor.value}. It doesn't match with the ${expectedDragonClubsColor} color`)

    //             });
    //             await s1.step('Check correct colors are displayed for Tiger Diamonds, Hearts, Clubs and Spades betspots ', () => {
    //                 assert.strictEqual(expectedTigerDiamondColor, tigerDiamondColor.value, `Found color for dragon diamond betspot is ${tigerDiamondColor.value}. It doesn't match with the ${expectedTigerDiamondColor} color`)
    //                 assert.strictEqual(expectedTigerHeartsColor, tigerHeartsColor.value, `Found color for dragon diamond betspot is ${tigerHeartsColor.value}. It doesn't match with the ${expectedTigerHeartsColor} color`)
    //                 assert.strictEqual(expectedTigerSpadesColor, tigerSpadesColor.value, `Found color for dragon diamond betspot is ${tigerSpadesColor.value}. It doesn't match with the ${expectedTigerSpadesColor} color`)
    //                 assert.strictEqual(expectedTigerClubsColor, tigerClubsColor.value, `Found color for dragon diamond betspot is ${tigerClubsColor.value}. It doesn't match with the ${expectedTigerClubsColor} color`)

    //             });


    //         });


    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // })

    // it(`SANITY_10_1 ${gameName} : Check payout in case of TIE`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         const expectedPayoutAmount = betDetails.betAmount * 9;
    //         // betDetails.betspots = BettingAreaPo.getOneMainBetspot(gameName);
    //         betDetails.betspots.betspotsToPlaceBets = [betspotList.DT.mainBets['tie']];
    //         // set cards by game for player
    //         const playerCardsMap: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.SEVEN_OF_DIAMONDS, CardId.SEVEN_OF_HEARTS],
    //         };

    //         // Enable pre-bet allowed
    //         await Services.Params.updateGameParams(sessionData, adminGameParam.preBetsAllowed, '0');




    //         await allureReporter.step(`Open the game by direct link`, async (s1) => {

    //             // open game by direct link
    //             await GamePagePo.openByDirectLink(sessionData, s1);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         })

    //         await allureReporter.step(`Send specific cards in Table Manager for player and dealer to be dealt`, async (s1) => {

    //             // wait for PLACE YOUR BETS phase
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[sessionData.game.name]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             // Send cards to TM in PYB
    //             await Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMap, [], [], undefined, s1);
    //         })

    //         await allureReporter.step('Place bet', async (s1) => {
    //             // place bet
    //             let placeBetResult = await BettingAreaPo.placeBet(betDetails, { isBetAlreadyPlacedForFirstPlaceBetPhase: false, isBetAlreadyPlacedForSecondPlaceBetPhase: false }, s1);
    //             if (!placeBetResult) {
    //                 assert.ok(false, 'Failed to place bet, check logs');
    //             }
    //         })

    //         await allureReporter.step(`Check for Bets Accepted notification`, async () => {
    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.betsAccepted.translationKey], 'Not found Bets Accepted notification');
    //         });

    //         // Check for proper payout
    //         await allureReporter.step('Result Ready: Check the winning animation', async (s1) => {

    //             await GameStatusPo.waitForSpecificGamePhase([gameStatusMap[gameName].TIGER_WINS.text, gameStatusMap[gameName].DRAGON_WINS.text, gameStatusMap[gameName].TIE_WINS.text]);


    //             assert.ok(await WinningAnimationPo.winningContainer.waitForDisplayed({ timeout: 10000 }), `Was not found the winning animation!`);

    //             const foundWinningAmount = await WinningAnimationPo.getWinningAmount();
    //             assert.strictEqual(expectedPayoutAmount, foundWinningAmount, `Wrong Winning Amount. Expected: ${expectedPayoutAmount}, found: ${foundWinningAmount}`)

    //         });

    //         // wait a new round to start and check the balance
    //         await allureReporter.step('Place Your Bets: Check for proper payout', async (s1) => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text, 60);


    //             // check that bet amount increased
    //             const newRoundBalance = await HeaderPo.getBalance();

    //             // check the balance to decrease
    //             await s1.step(`Check the 'balance' before placing bet: ${EXPECTED_PLAYER_BALANCE} and after win: ${newRoundBalance}. The bet amount is: ${betDetails.betAmount}`, () => {
    //                 assert.strictEqual(EXPECTED_PLAYER_BALANCE + expectedPayoutAmount - betDetails.betAmount, newRoundBalance, 'Wrong payout');
    //             });
    //         })

    //     } catch (err) { throw new Error(err) }
    //     finally {
    //         // Enable pre-bet allowed
    //         await Services.Params.updateGameParams(sessionData, adminGameParam.preBetsAllowed, '1');
    //     }
    // });

    // it(`SANITY_10_2 ${gameName} : Check payout in case of TIGER, TIGER BIG and TIGER Suit`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         const expectedPayoutAmount = ((betDetails.betAmount + betDetails.betAmount) + (betDetails.betAmount + betDetails.betAmount) + (betDetails.betAmount * 2 + betDetails.betAmount));
    //         // betDetails.betspots = BettingAreaPo.getOneMainBetspot(gameName);
    //         betDetails.betspots.betspotsToPlaceBets = [betspotList.DT.mainBets['tiger'], betspotList.DT.sideBets['tigerBig'], betspotList.DT.sideBets['tigerHearts']];
    //         // set cards by game for player
    //         const playerCardsMap: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.SEVEN_OF_DIAMONDS, CardId.KING_OF_HEARTS],
    //         };

    //         // Enable pre-bet allowed
    //         await Services.Params.updateGameParams(sessionData, adminGameParam.preBetsAllowed, '0');




    //         await allureReporter.step(`Open the game by direct link`, async (s1) => {

    //             // open game by direct link
    //             await GamePagePo.openByDirectLink(sessionData, s1);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         })

    //         await allureReporter.step(`Send specific cards in Table Manager for player and dealer to be dealt`, async (s1) => {

    //             // wait for PLACE YOUR BETS phase
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[sessionData.game.name]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             // Send cards to TM in PYB
    //             await Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMap, [], [], undefined, s1);
    //         })

    //         await allureReporter.step('Place bet', async (s1) => {
    //             // place bet
    //             let placeBetResult = await BettingAreaPo.placeBet(betDetails, { isBetAlreadyPlacedForFirstPlaceBetPhase: false, isBetAlreadyPlacedForSecondPlaceBetPhase: false }, s1);
    //             if (!placeBetResult) {
    //                 assert.ok(false, 'Failed to place bet, check logs');
    //             }
    //         })

    //         await allureReporter.step(`Check for Bets Accepted notification`, async () => {
    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.betsAccepted.translationKey], 'Not found Bets Accepted notification');
    //         });

    //         // Check for proper payout
    //         await allureReporter.step('Result Ready: Check the winning animation', async (s1) => {

    //             await GameStatusPo.waitForSpecificGamePhase([gameStatusMap[gameName].TIGER_WINS.text, gameStatusMap[gameName].DRAGON_WINS.text, gameStatusMap[gameName].TIE_WINS.text]);


    //             assert.ok(await WinningAnimationPo.winningContainer.waitForDisplayed({ timeout: 10000 }), `Was not found the winning animation!`);

    //             const foundWinningAmount = await WinningAnimationPo.getWinningAmount();
    //             assert.strictEqual(expectedPayoutAmount, foundWinningAmount, `Wrong Winning Amount. Expected: ${expectedPayoutAmount}, found: ${foundWinningAmount}`)

    //         });

    //         // wait a new round to start and check the balance
    //         await allureReporter.step('Place Your Bets: Check for proper payout', async (s1) => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text, 60);


    //             // check that bet amount increased
    //             const newRoundBalance = await HeaderPo.getBalance();

    //             // check the balance to decrease
    //             await s1.step(`Check the 'balance' before placing bet: ${EXPECTED_PLAYER_BALANCE} and after win: ${newRoundBalance}. The bet amount is: ${betDetails.betAmount * betDetails.betspots.betspotsToPlaceBets.length}`, () => {
    //                 assert.strictEqual(EXPECTED_PLAYER_BALANCE + expectedPayoutAmount - (betDetails.betAmount * betDetails.betspots.betspotsToPlaceBets.length), newRoundBalance, 'Wrong payout');
    //             });
    //         })

    //     } catch (err) { throw new Error(err) }
    //     finally {
    //         // Enable pre-bet allowed
    //         await Services.Params.updateGameParams(sessionData, adminGameParam.preBetsAllowed, '1');
    //     }
    // });

    // it(`SANITY_10_3 ${gameName} : Check payout in case of DRAGON, DRAGON SMALL and DRAGON Suit`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         // const expectedPayoutAmount = (betDetails.betAmount * betDetails.betspots.betspotsToPlaceBets.length) + (betDetails.betAmount * betDetails.betspots.betspotsToPlaceBets.length);
    //         const expectedPayoutAmount = ((betDetails.betAmount + betDetails.betAmount) + (betDetails.betAmount + betDetails.betAmount) + (betDetails.betAmount * 2 + betDetails.betAmount));

    //         // betDetails.betspots = BettingAreaPo.getOneMainBetspot(gameName);
    //         betDetails.betspots.betspotsToPlaceBets = [betspotList.DT.mainBets['dragon'], betspotList.DT.sideBets['dragonSmall'], betspotList.DT.sideBets['dragonClubs'],];
    //         // set cards by game for player
    //         const playerCardsMap: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.FOUR_OF_CLUBS, CardId.ACE_OF_HEARTS],
    //         };





    //         // Enable pre-bet allowed
    //         await Services.Params.updateGameParams(sessionData, adminGameParam.preBetsAllowed, '0');

    //         await allureReporter.step(`Open the game by direct link`, async (s1) => {

    //             // open game by direct link
    //             await GamePagePo.openByDirectLink(sessionData, s1);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         })

    //         await allureReporter.step(`Send specific cards in Table Manager for player and dealer to be dealt`, async (s1) => {

    //             // wait for PLACE YOUR BETS phase
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[sessionData.game.name]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             // Send cards to TM in PYB
    //             await Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMap, [], [], undefined, s1);
    //         })

    //         await allureReporter.step('Place bet', async (s1) => {
    //             // place bet
    //             let placeBetResult = await BettingAreaPo.placeBet(betDetails, { isBetAlreadyPlacedForFirstPlaceBetPhase: false, isBetAlreadyPlacedForSecondPlaceBetPhase: false }, s1);
    //             if (!placeBetResult) {
    //                 assert.ok(false, 'Failed to place bet, check logs');
    //             }
    //         })

    //         await allureReporter.step(`Check for Bets Accepted notification`, async () => {
    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.betsAccepted.translationKey], 'Not found Bets Accepted notification');
    //         });

    //         // Check for proper payout
    //         await allureReporter.step('Result Ready: Check the winning animation', async (s1) => {

    //             await GameStatusPo.waitForSpecificGamePhase([gameStatusMap[gameName].TIGER_WINS.text, gameStatusMap[gameName].DRAGON_WINS.text, gameStatusMap[gameName].TIE_WINS.text]);


    //             assert.ok(await WinningAnimationPo.winningContainer.waitForDisplayed({ timeout: 10000 }), `Was not found the winning animation!`);

    //             const foundWinningAmount = await WinningAnimationPo.getWinningAmount();
    //             assert.strictEqual(expectedPayoutAmount, foundWinningAmount, `Wrong Winning Amount. Expected: ${expectedPayoutAmount}, found: ${foundWinningAmount}`)

    //         });

    //         // wait a new round to start and check the balance
    //         await allureReporter.step('Place Your Bets: Check for proper payout', async (s1) => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text, 60);


    //             // check that bet amount increased
    //             const newRoundBalance = await HeaderPo.getBalance();

    //             // check the balance to decrease
    //             await s1.step(`Check the 'balance' before placing bet: ${EXPECTED_PLAYER_BALANCE} and after win: ${newRoundBalance}. The bet amount is: ${betDetails.betAmount * betDetails.betspots.betspotsToPlaceBets.length}`, () => {
    //                 assert.strictEqual(EXPECTED_PLAYER_BALANCE + expectedPayoutAmount - (betDetails.betAmount * betDetails.betspots.betspotsToPlaceBets.length), newRoundBalance, 'Wrong payout');
    //             });
    //         })

    //     } catch (err) { throw new Error(err) }
    //     finally {
    //         // Enable pre-bet allowed
    //         await Services.Params.updateGameParams(sessionData, adminGameParam.preBetsAllowed, '1');
    //     }
    // });

    // it(`SANITY_12 ${gameName} : Check color swap on betting area using Admin param`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         const redBgColorValue = 'rgba(204,41,41,0.7)';
    //         const blueBgColorValue = 'rgba(0,155,212,0.7)'



    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Check default background color for Dragon and Tiger`, async () => {
    //             await DragonTigerGamePo.bettingArea.dragon.backgroundColor.waitForDisplayed({ timeout: 5000 })
    //             const dragonBgColorDefault = await DragonTigerGamePo.bettingArea.dragon.backgroundColor.getAttribute('fill');
    //             console.log('dragon:', dragonBgColorDefault);
    //             const tigerBgColorDefault = await DragonTigerGamePo.bettingArea.tiger.backgroundColor.getAttribute('fill');
    //             console.log('tiger', tigerBgColorDefault);
    //             // may add also side-bets

    //             assert.strictEqual(redBgColorValue, dragonBgColorDefault, 'Found wrong color for dragon betspot default background')
    //             assert.strictEqual(blueBgColorValue, tigerBgColorDefault, 'Found wrong color for tiger betspot default background')
    //         });


    //         await allureReporter.step('Swap the betting area colors in Admin and re-open game', async () => {

    //             // set admin param
    //             await Services.Params.updateGameParams(sessionData, adminGameParam.colorSwapValue, '1');

    //             await GamePagePo.openByDirectLink(sessionData);
    //         });

    //         await allureReporter.step(`Check background color for Dragon and Tiger after color swap`, async () => {

    //             await DragonTigerGamePo.bettingArea.dragon.backgroundColor.waitForDisplayed({ timeout: 5000 })

    //             const dragonBgColorAfterSwap = await DragonTigerGamePo.bettingArea.dragon.backgroundColor.getCSSProperty('fill');
    //             console.log('dragon after:', dragonBgColorAfterSwap.value);
    //             const tigerBgColorAfterSwap = await DragonTigerGamePo.bettingArea.tiger.backgroundColor.getCSSProperty('fill');
    //             console.log('tiger after: ', tigerBgColorAfterSwap.value);
    //             // may add also side-bets verification

    //             // check for color swap
    //             assert.strictEqual(redBgColorValue, tigerBgColorAfterSwap.value, 'Found wrong background color for tiger betspot!')
    //             assert.strictEqual(blueBgColorValue, dragonBgColorAfterSwap.value, 'Found wrong background color for dragon betspot!')
    //         });

    //     }
    //     catch (err) {
    //         throw new Error(err)
    //     }
    //     finally {
    //         await Services.Params.updateGameParams(sessionData, adminGameParam.colorSwapValue, '0');
    //     }
    // });

    // it(`SANITY_13_1 ${gameName} : Check text and color in header when Tie wins`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');

    //     try {
    //         addArgumentsToAllure(QA.Ala);

    //         const expectedGameStatusColor = 'rgb(0, 127, 18) 0%';
    //         //Set cards in order for TIE to win
    //         const playerCardsMap: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.FIVE_OF_HEARTS, CardId.FIVE_OF_CLUBS],
    //         };




    //         //Open the game
    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         //Wait for PLACE YOUR BETS phase
    //         await allureReporter.step('Wait for PYB phase', async () => {
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             //Send cards to TM in PYB
    //             Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMap, [], []);

    //         });


    //         //Wait for Result Ready phase
    //         await allureReporter.step('Wait for Reasult Ready phase in order to check Header text&color', async () => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].TIE_WINS.text)

    //         });


    //         const foundGameStatus = await HeaderPo.gameStatus.getText();
    //         const translatedGameStatus = TRANSLATION_DICTIONARY['tieWins'].toUpperCase();

    //         const foundGameStatusBackground = (await DragonTigerGamePo.headerResultReadyColor.tieWin.getCSSProperty('background-image')).value
    //         const foundGameStatusColor = foundGameStatusBackground.match(/rgb\(\d+, \d+, \d+\) \d+%/)[0]
    //         // console.log(foundGameStatusColor)

    //         //Check correct text&color is dipslayed in Header in case TIE wins
    //         await allureReporter.step('Check correct text&color is displayed in Header when TIE wins', async () => {
    //             assert.strictEqual(translatedGameStatus, foundGameStatus, `Found text is ${foundGameStatus}. It doesn't match with expected ${translatedGameStatus} text `);
    //             assert.strictEqual(expectedGameStatusColor, foundGameStatusColor, `Found color is ${foundGameStatusColor}. It doesn't match with expected ${expectedGameStatusColor} color`)
    //         });


    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });

    // it(`SANITY_13_2 ${gameName} : Check text and color in header when Dragon wins`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Ala);

    //         const expectedGameStatusColor = 'rgb(216, 0, 0) 0%';
    //         //Set cards in order for DRAGON to win
    //         const playerCardsMap: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.FIVE_OF_HEARTS, CardId.THREE_OF_CLUBS],
    //         };




    //         //Open the game
    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         //Wait for PLACE YOUR BETS phase
    //         await allureReporter.step('Wait for PYB phase', async () => {
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             //Send cards to TM in PYB
    //             Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMap, [], []);

    //         });


    //         //Wait for Result Ready phase
    //         await allureReporter.step('Wait for Reasult Ready phase in order to check Header text&color', async () => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].DRAGON_WINS.text)

    //         });


    //         const foundGameStatus = await HeaderPo.gameStatus.getText();
    //         const translatedGameStatus = TRANSLATION_DICTIONARY['dragonWins'].toUpperCase();

    //         const foundGameStatusBackground = (await DragonTigerGamePo.headerResultReadyColor.dragonWin.getCSSProperty('background-image')).value
    //         const foundGameStatusColor = foundGameStatusBackground.match(/rgb\(\d+, \d+, \d+\) \d+%/)[0]
    //         // console.log(foundGameStatusColor)

    //         //Check correct text&color is dipslayed in Header in case Dragon wins
    //         await allureReporter.step('Check correct text&color is displayed in Header when Dragon wins', async () => {
    //             assert.strictEqual(translatedGameStatus, foundGameStatus, `Found text is ${foundGameStatus}. It doesn't match with expected ${translatedGameStatus} text `);
    //             assert.strictEqual(expectedGameStatusColor, foundGameStatusColor, `Found color is ${foundGameStatusColor}. It doesn't match with expected ${expectedGameStatusColor} color`)
    //         });


    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });

    // it(`SANITY_13_3 ${gameName} : Check text and color in header when Tiger wins`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');



    //     try {
    //         addArgumentsToAllure(QA.Ala);

    //         const expectedGameStatusColor = 'rgb(0, 136, 178) 0%';
    //         //Set cards in order for TIGER to win
    //         const playerCardsMap: Record<GamesEnum, CardId[]> = {
    //             ...emptyCardMap,
    //             [GamesEnum.DT]: [CardId.THREE_OF_HEARTS, CardId.FIVE_OF_CLUBS],
    //         };




    //         //Open the game
    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         //Wait for PLACE YOUR BETS phase
    //         await allureReporter.step('Wait for PYB phase', async () => {
    //             await GameStatusPo.waitPlaceYourBetsPhaseWithProperTimer(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text, gameName, PYB_MIN_TIMER);

    //             //Send cards to TM in PYB
    //             Services.TableManager.sendCardsInTableManager(gameName, Number(sessionData.game.id), playerCardsMap, [], []);

    //         });


    //         //Wait for Result Ready phase
    //         await allureReporter.step('Wait for Reasult Ready phase in order to check Header text&color', async () => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName].TIGER_WINS.text)

    //         });


    //         const foundGameStatus = await HeaderPo.gameStatus.getText();
    //         const translatedGameStatus = TRANSLATION_DICTIONARY['tigerWins'].toUpperCase();

    //         const foundGameStatusBackground = (await DragonTigerGamePo.headerResultReadyColor.tigerWin.getCSSProperty('background-image')).value;
    //         const foundGameStatusColor = foundGameStatusBackground.match(/rgb\(\d+, \d+, \d+\) \d+%/)[0];


    //         //Check correct text&color is dipslayed in Header in case Tiger wins
    //         await allureReporter.step('Check correct text&color is displayed in Header when Tiger wins', async () => {
    //             assert.strictEqual(translatedGameStatus, foundGameStatus, `Found text is ${foundGameStatus}. It doesn't match with expected ${translatedGameStatus} text `);
    //             assert.strictEqual(expectedGameStatusColor, foundGameStatusColor, `Found color is ${foundGameStatusColor}. It doesn't match with expected ${expectedGameStatusColor} color`)
    //         });


    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });

    // it(`SANITY_15 ${gameName} : Check chips are displayed on betting area in the next round`, async function () {
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');
    //     console.info('<<<<<<<<<<<< STARTING TEST EXECUTION: ', this?.test?.title, '>>>>>>>>>>>');
    //     console.info('-----------------------------------------------------------------------------------------------------------------------------');


    //     try {
    //         addArgumentsToAllure(QA.Eugen);

    //         // specify betspots
    //         const oneSideBetspotLocator = BettingAreaPo.getOneSideBetspot(gameName);
    //         betDetails.betspots.betspotsToPlaceBets = betDetails.betspots.betspotsToPlaceBets.concat(oneSideBetspotLocator.betspotsToPlaceBets);

    //         // await allureReporter.step(`Cancel the round in order to get the updated param 'preBetAllowed' to work`, async () => {
    //         //     await Services.TableManager.cancelRound(Number(sessionData.game.id));
    //         //     await browser.pause(2000)
    //         //     await Services.TableManager.pauseOff(Number(sessionData.game.id));
    //         // })

    //         await allureReporter.step('Open game by direct link', async () => {
    //             await GamePagePo.openByDirectLink(sessionData);

    //             // check that corrrect balance when tests starts
    //             const gameBalance = await HeaderPo.getBalance();
    //             assert.strictEqual(EXPECTED_PLAYER_BALANCE, gameBalance, `Wrong balance was found! Expected: ${EXPECTED_PLAYER_BALANCE}, found:${gameBalance}`);
    //         });

    //         await allureReporter.step(`Place bet on all side-betspots and check for 'Bets Accepted' notification`, async () => {

    //             await BettingAreaPo.placeBet(betDetails);

    //             assert.strictEqual(await NotificationsPo.getNotificationMessage(), TRANSLATION_DICTIONARY[notificationJSONData.betsAccepted.translationKey], 'Not found Bets Accepted notification');
    //         });

    //         await allureReporter.step(`Wait for next round`, async () => {
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName]?.NO_MORE_BETS.text);
    //             await GameStatusPo.waitForSpecificGamePhase(gameStatusMap[gameName]?.PLACE_YOUR_BETS.text);
    //         });

    //         await allureReporter.step(`Check there are chips on betting area from previous round`, async () => {
    //             for (let betspot of betDetails.betspots.betspotsToPlaceBets) {
    //                 assert.ok(await $(betspot.chipLocator).isDisplayed(), `Have not found the chip for ${betspot.name} betspot. Please check!`);
    //             }
    //         });

    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // });
});