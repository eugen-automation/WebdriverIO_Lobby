import { config } from './wdio.conf.ts';

//
// ==================
// Specify Test Files
// ==================
//
config.specs = [

  // SANITY
  // '../../specs/Games/Sanity/generalFlow.sanity.ts',
  // '../../specs/Games/Sanity/BlackJack.sanity.ts',
  // '../../specs/Games/Sanity/UnlimitedBlackJack.sanity.ts',
  // '../../specs/Games/Sanity/ThirtyTwoCards.sanity.ts',
  // '../../specs/sanity/DragonTiger.sanity.ts',
  // '../../specs/sanity/Baccarat.sanity.ts',
  '../specs/lobby/Lobby.sanity.spec.ts',
  // '../../specs/Games/Sanity/Roulette.sanity.ts',


];

// config.hostname = '192.168.17.33';  // Appium server hostname
// config.port=  4723; // Appium server port
// config.path = '/wd/hub'; // Path to Appium server (when device-farm is started)


// ============
// Capabilities
// ============
config.capabilities = [

  /* web*/
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: ['--window-size=1366,768']
      }
  },

      /* Realme with Chrome browser*/
  // {
  //   platformName: 'Android',
  //   port: 4723,
  //   'appium:deviceName': '9a0ad1b1',
  //   'appium:platformVersion': '13.0',
  //   'appium:automationName': 'UiAutomator2',
  //   'appium:browserName': 'Chrome',  
  //   'appium:noReset': true
  // },

  /* Realme with Samsung browser*/
  // {
  //   platformName: 'Android',
  //   'appium:browserName': '', // Nu folosim browserName pentru aplicații
  //   'appium:appPackage': 'com.sec.android.app.sbrowser',
  //   'appium:appActivity': 'com.sec.android.app.sbrowser.SBrowserMainActivity',
  //   'appium:noReset': true, // să nu reinstaleze app-ul de fiecare dată
  //   port: 4723,
  //   'appium:deviceName': '9a0ad1b1',
  //   'appium:platformVersion': '13.0',
  //   'appium:automationName': 'UiAutomator2',
  //   // 'appium:webdriverBidi': false
  // },




  /* Remote phone from appium*/
//   {
//   platformName: "Android",
//   "appium:udid": "2023090992", // or whatever device UDID from device farm
//   "appium:platformVersion": "13", // adjust as per actual device
//   "appium:automationName": "UiAutomator2",
//   'appium:browserName': 'Chrome',  
//   "appium:noReset": true,
//   'appium:newCommandTimeout': 300
// }




  /* Galaxy A12s */
  // {
  //   platformName: 'Android',
  //   browserName: 'chrome',
  //   browserVersion: 'stable',
  //  port:4723
  //   'appium:deviceName': 'R58R83832MT',
  //   'appium:platformVersion': '13.0',
  //   'appium:automationName': 'UiAutomator2',
  //   'appium:ignoreHiddenApiPolicyError' : true,
  //   'appium:unlockType': 'password',
  //   'appium:unlockKey': 'secret',
  // },



  // /* Galaxy s23 */
  // {
  //   platformName: 'Android',
  //   port: 4723,
  //   'appium:browserName': '', // Nu folosim browserName pentru aplicații
  //   'appium:appPackage': 'com.sec.android.app.sbrowser',
  //   'appium:appActivity': 'com.sec.android.app.sbrowser.SBrowserMainActivity',
  //   'appium:noReset': true, // să nu reinstaleze app-ul de fiecare dată
  //   'appium:deviceName': 'RFCW9185N3A',
  //   'appium:platformVersion': '13.0',
  //   'appium:automationName': 'UiAutomator2',
  //   'appium:newCommandTimeout': 300,
  // },
];


// config.maxInstances = 2;
config.execArgv = ['--inspect'];  // debug mode

export { config };
