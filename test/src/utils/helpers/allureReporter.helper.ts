import assert from 'assert';
import allureReporter from '@wdio/allure-reporter'
import { GamesNamesEnum } from '../../models/enums/gameNames.enum.ts';
import { capitalizeFirstLetter } from './generalLogic.helper.ts'
import { QAEnum } from '../../models/enums/qa.enum.ts'

const enviroment = process.env.ENVIRONMENT;


export function addAllureDetailsToTestCases(gameName: GamesNamesEnum, notifKey: any) {
  addArgumentsToAllure();

  // allureReporter.addFeature(notifKey.type);
  allureReporter.addStory(gameName);
  allureReporter.addDescription(notifKey.description, 'text');
  // allureReporter.addOwner(qa.Eugen)

  // experimental
  // allureReporter.addLabel('allure_label', 'value of allure_label');
  // allureReporter.addTag('regression');
  // allureReporter.addAllureId('allure_id');
}

export function addAllureDetailsToNotificationTests(gameName: GamesNamesEnum, notifKey: any) {

  // add device/browser specific details
  addArgumentsToAllure();

  // add parentSuite, subSuite for suite section of Allure Dashboard
  allureReporter.addParentSuite('LC GAMES');
  allureReporter.addSubSuite(notifKey.type)

  // add details for Features by Stories section of Allure Dashboard
  allureReporter.addEpic(enviroment)
  allureReporter.addStory(gameName);

  // add details to each test
  allureReporter.addDescription(notifKey.description, 'text');
  allureReporter.addOwner(notifKey?.owner)
  allureReporter.addTag('regression');

}
// export function addAllureDetailsToErrorPages(gameName: gamesEnum, notifKey: any) {

//   // add device/browser specific details
//   addArgumentsToAllure();

//   // add parentSuite, subSuite for suite section of Allure Dashboard
//   allureReporter.addParentSuite('LC GAMES');
//   allureReporter.addSubSuite(notifKey.type)

//   // add details for Features by Stories section of Allure Dashboard
//   allureReporter.addEpic(enviroment)
//   allureReporter.addStory(gameName);

//   // add details to each test
//   allureReporter.addDescription(notifKey.description, 'text');
//   allureReporter.addOwner(qa.Catalin)
//   allureReporter.addTag('regression');

// }
// export function addAllureDetailsToSystemOperationNotifications(gameName: gamesEnum, notifKey: any) {

//   // add device/browser specific details
//   addArgumentsToAllure();

//   // add parentSuite, subSuite for suite section of Allure Dashboard
//   allureReporter.addParentSuite('LC GAMES');
//   allureReporter.addSubSuite(notifKey.type)

//   // add details for Features by Stories section of Allure Dashboard
//   allureReporter.addEpic(enviroment)
//   allureReporter.addStory(gameName);

//   // add details to each test
//   allureReporter.addDescription(notifKey.description, 'text');
//   allureReporter.addOwner(qa.CatalinEugen)
//   allureReporter.addTag('regression');

// }

export function addArgumentsToAllure(testOwner: string = 'qa') {
console.log('Called addArgumentsToAllure() function')
  // add environment details
  allureReporter.addArgument('1.Environment', enviroment)

  // add device orientation details
  if (browser.isMobile) {
    const deviceOrientation = process.env.DEVICE_ORIENTATION;
    deviceOrientation && allureReporter.addArgument('2.Device orientation', capitalizeFirstLetter(deviceOrientation.toLowerCase()));

    // add device platform version details
    // @ts-ignore
    allureReporter.addArgument('3.Platform version', capitalizeFirstLetter(browser.capabilities?.platformName) + ' ' + capitalizeFirstLetter(browser.capabilities?.platformVersion));

    // add device name and model
    
    if (browser.isIOS) { allureReporter.addArgument('4.Device name', capitalizeFirstLetter(browser.capabilities['deviceName'])); }
    else {
      // @ts-ignore
      allureReporter.addArgument('4.Device name', capitalizeFirstLetter(browser.capabilities?.deviceManufacturer) + ' ' + capitalizeFirstLetter(browser.capabilities?.deviceModel));
    }
  }

  allureReporter.addOwner(testOwner);

  // @ts-ignore
  // allureReporter.addArgument('Platform name', capitalizeFirstLetter(browser.capabilities?.platformName));

  // @ts-ignore
  // allureReporter.addArgument('Browser name', capitalizeFirstLetter(browser.capabilities?.browserName));
  // @ts-ignore
  // allureReporter.addArgument('Device screen size', browser.capabilities?.deviceScreenSize);
  // browser.capabilities?.deviceScreenSize && allureReporter.addArgument('Device screen size', browser.capabilities?.deviceScreenSize);
  // @ts-ignore
  // browser.capabilities?.deviceManufacturer && allureReporter.addArgument('Device manufacturer', capitalizeFirstLetter(browser.capabilities?.deviceManufacturer));
  // @ts-ignore

}

export function checkForRelatedBugs(game: GamesNamesEnum, notificationKnownBugs: Array<{ game: string, bugUrl: string }>) {
  // console.log('@@@checkForRelatedBugs(): game', game);

  notificationKnownBugs.forEach((bug) => {
    // console.log('@@@@gameMapping(bug.game)', ['any', 'all', gameMapping(bug.game)].includes(bug.game.toLowerCase()));
    if (['any', 'all', game.toLowerCase()].includes(bug.game.toLowerCase())) {
      allureReporter.addIssue(`${bug.bugUrl}`);
      assert.ok(false, `Test failed because of existing bug: ${bug.bugUrl}`);
    }
  });
}
