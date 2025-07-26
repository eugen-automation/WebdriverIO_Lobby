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



// ============
// Capabilities
// ============
config.capabilities = [

  /* web*/
  {
    browserName: 'chrome',
   'goog:chromeOptions': {
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor',
                '--remote-debugging-port=9222'
            ]
        }
  },

 

];


// config.maxInstances = 2;
config.execArgv = ['--inspect'];  // debug mode

export { config };
