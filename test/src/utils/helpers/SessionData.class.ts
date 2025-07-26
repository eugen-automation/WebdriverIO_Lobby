import { envFileDataType, Player, Operator } from './../../models/types/sessionData.type';
import { GameListType } from '../../models/types/API_Responses/getGamesListWithLimits.type.ts';
import { API } from '../API/apiChecker.api.ts';
import { CasinoComponentEnum, GamesNamesEnum } from '../../models/enums/gameNames.enum.ts';
import { GameType, LimitSet } from "../../models/types/Game.ts";
import { GetGamesListWithLimitsResponse } from '../../models/types/API_Responses/getGamesListWithLimits.type.ts';
import Services from '../API/services.api.ts';
import { gameAdminPropertiesEnum } from '../../models/enums/gameAdminProperties.enum.ts';
import { AdditionalParamsType } from '../../models/types/lobby.type.ts';
import { Prerequisite } from './common.prerequisite.ts';

let deviceName;


if (browser.isMobile) {
  deviceName = browser.capabilities['appium:deviceName'] || browser.capabilities['deviceName'];
}
// break;


export default class Data {
  operator: Operator;
  player: Player;
  game: GameType;
  limit: LimitSet;
  urls: { apiUrl: string, apiClientUrl: string, servicesUrl: string, translationServiceUrl: string, sawUrl: string; lobbyUrl: string; lobbyOhterUrl: string; swManageUrl: string; };
  languageId: string;
  config: { deviceOrientation: string, isNewGame: string, environment: string, token: string, };

  
  constructor(envFileVariables: envFileDataType) {
    this.operator = { id: envFileVariables.operatorId, secretkey: envFileVariables.secretKey };
    this.player = { name: envFileVariables.activePlayer, password: envFileVariables.playerPassword };
    this.game = { name: envFileVariables.gameToTest, type: Prerequisite.getGameType(envFileVariables.gameToTest) };
    this.urls = {
      apiUrl: envFileVariables.apiUrl, apiClientUrl: envFileVariables.apiClientUrl, servicesUrl: envFileVariables.servicesUrl,
      translationServiceUrl: envFileVariables.translationServiceUrl, sawUrl: envFileVariables.sawOldUrl, lobbyUrl: envFileVariables.lobbyUrl,
      lobbyOhterUrl: envFileVariables.lobbyOtherUrl,
      swManageUrl: envFileVariables.swManageUrl,
    };
    this.languageId = envFileVariables.languageId;
    this.config = { deviceOrientation: envFileVariables.deviceOrientation, isNewGame: envFileVariables.isNewGame, environment: envFileVariables.environment, token: envFileVariables.token };
  }





  static async buildSessionDataObject(casinoUnit: CasinoComponentEnum, fetchGameData: boolean = true, game: GamesNamesEnum = undefined) {
    console.log('@@@ buildSessionDataObject function was called');

    try {

      //Process environment variables
      const envVars = await Data.processEnvVariables(game);

      // keep env file data in new object
      const newObj = new Data(envVars);

      // if player does not exist then create it
      const createAccResult = await API.createAccount(newObj);
      // if found not expected error then fail
      if (!['0', '3'].includes(createAccResult.errorCode)) {
        throw new Error(`Failed to create a new player:${newObj.player.name}. Was found error:${createAccResult.errorCode}, with description: ${createAccResult.description}`);
      };

      // for game, get data from api call getGameListWithLimits
      casinoUnit === 0 && await newObj._fetchGameData();

      // //* GET REGISTER TOKEN *//
      const tokenData = await API.registerToken(newObj, fetchGameData);
      if (tokenData.errorCode === '0') {
        newObj.player.token = tokenData?.description;
      } else { throw new Error(`There is error in registerToken(). Error code: ${tokenData.errorCode} with message: ${tokenData.description}`) }


      return newObj;
    }
    catch (err) {
      throw new Error(err);
    }
  }

  async _fetchGameData() {
    console.log('@@@ _fetchGameData function was called');

    try {

      // get list of available games
      const gamesListResult = await API.getGamesListWithLimits(this);

      //pick the correct game from result
      if (gamesListResult) {
        //TODO: to improve to take next game on parallel execution
        const gameIdData: GameListType = await this.getRequiredGameData(gamesListResult);

        // assign object data to 
        this.game.connectionUrl = gameIdData.connectionUrl;
        this.game.id = gameIdData?.gameID;
        this.game.nameUI = gameIdData?.gameName;
        this.game.playersNumber = gameIdData.PlayersNumber;

        let limit1;
        if (!Array.isArray(gameIdData.limitSetList.limitSet)) {
          const limitTemp = [gameIdData?.limitSetList?.limitSet];
          limit1 = limitTemp[0];
        }
        else {
          limit1 = gameIdData?.limitSetList?.limitSet[0];
        }
        this.limit = { id: limit1?.limitSetID, minBet: limit1.minBet, maxBet: limit1.maxBet, minBetBehind: limit1.minBetBehind, maxBetBehind: limit1.maxBetBehind };

        // //* GET CHIPSET FROM SERVICES //
        // this.game.chipset = await Chipset.getChips(this);
      }
      else {
        throw new Error(`API>>getGamesListWithLimits(): Not found any open ${this.game.name} game!`);
      }
    }
    catch (err) {
      throw new Error(err);
    }
  }

  _formatGameDirectLink(data: Data, params?: AdditionalParamsType) {
    console.log('@@@ _formatGameDirectLink function was called');

    try {

      // replaces
      let liveGamesUrl = data.game.connectionUrl.replace('amp;', '')
        .replace('languageID={1}', 'languageID=' + data.languageId)
        .replace('loginToken={2}', 'loginToken=' + data.player.token);

      // replace also the operator id
      liveGamesUrl = liveGamesUrl.replace(/operatorID=\d+/, `operatorID=${data.operator.id}`);


      //* ADDITIONAL PARAMS *//
      // home url
      data?.game?.homeUrl ? liveGamesUrl = liveGamesUrl + `&homeURL=${this.game.homeUrl}` : liveGamesUrl
      //invoke type
      params?.game?.invokeType ? liveGamesUrl = liveGamesUrl + `&InvokeType=${params.game.invokeType}` : liveGamesUrl
      //open mode
      params?.game?.openMode ? liveGamesUrl = liveGamesUrl + `&OpenMode=${params.game.openMode}` : liveGamesUrl
      //new lobby
      params?.game?.newLobby ? liveGamesUrl = liveGamesUrl + `&NewLobby=${params.game.newLobby}` : liveGamesUrl;
      //super six for baccarat only
      params?.game?.isSuperSixBac && data.game.name === GamesNamesEnum.BAC ? liveGamesUrl = liveGamesUrl + `&isSuperSix=${params.game.isSuperSixBac}` : liveGamesUrl;


      console.log('liveGamesUrl :>> ', liveGamesUrl);
      return liveGamesUrl;
    }
    catch (err) {
      throw new Error(err)
    }
  }

  _formatLobbyDirectLink(data: Data, params: AdditionalParamsType) {
    console.log('@@@ _formatGameDirectLinkThroughLobby function was called');

    try {

      let liveGamesUrl = this.urls.lobbyUrl + `?operatorID=${data.operator.id}&token=${data.player.token}&username=${data.player.name}`

      //* ADDITIONAL PARAMS *//
      // default category
      params?.lobby?.languageId? liveGamesUrl = liveGamesUrl + `&languageID=${params.lobby.languageId}` : liveGamesUrl;
      params?.lobby?.defaultCategory ? liveGamesUrl = liveGamesUrl + `&defaultCategory=${params.lobby.defaultCategory}` : liveGamesUrl;
      params?.lobby?.homeUrl ? liveGamesUrl = liveGamesUrl + `&homeURL=${params.lobby.homeUrl}` : liveGamesUrl;

     
      
      console.log('liveGamesThroughLobbyUrl :>> ', liveGamesUrl);
      return liveGamesUrl;
    } catch (err) {
      throw new Error(err)
    }
  }

  _formatLobbyLoginLink(data: Data, params: AdditionalParamsType) {
    console.log('@@@ _formatLobbyDirectLink function was called');

    try {

      let lobbyUrl = this.urls.lobbyUrl + `login?operatorID=${data.operator.id}`

      console.log('LobbyUrl :>> ', lobbyUrl);
      return lobbyUrl;
    } catch (err) {
      throw new Error(err)
    }
  }

  private async getRequiredGameData(gameListFromApiResponse: GetGamesListWithLimitsResponse) {
    console.log('@@@ getRequiredGameData function was called');

    try {
      //make sure it's array
      const gameListFromApiResponseLocal = Array.isArray(gameListFromApiResponse.game) ? gameListFromApiResponse.game : [gameListFromApiResponse.game];

      if (process.env.ENVIRONMENT.toLowerCase() === 'prod') {
        browser.execute(() => {

          alert('Atention please, running tests on PRODUCTION!');
        });
        for (const elem of gameListFromApiResponseLocal) {
          if (this.game.name === GamesNamesEnum.BJ && Number(elem.PlayersNumber) !== 1) {
            // if(elem.gameName.toLowerCase().includes('Test BJ 3 HD')){
            if (elem.gameName === 'Test BJ 2 HD') {
              return elem;
            }
          }
        }
        throw new Error(`Not found required ${this.game.name} game! Please check game filter criteria.`);
      } else {

        for (const elem of gameListFromApiResponseLocal) {
          // specific logic for identifying the BJ, UBJ and TRO games
          if (this.game.name === GamesNamesEnum.BJ || this.game.name === GamesNamesEnum.UBJ) {
            if ((this.game.name === GamesNamesEnum.BJ && Number(elem.PlayersNumber) !== 1)
              || (this.game.name === GamesNamesEnum.UBJ && Number(elem.PlayersNumber) == 1)
            ) {
              // if was found the expected game
              return elem;
            }
          }
          else if (this.game.name === GamesNamesEnum.RO || this.game.name === GamesNamesEnum.DRO || this.game.name === GamesNamesEnum.TRO) {
            const result = await Services.GameRules.getGameRules(Number(elem.gameID), [gameAdminPropertiesEnum.rThunderMode, gameAdminPropertiesEnum.rDragonMode]);

            if (result[gameAdminPropertiesEnum.rThunderMode.toString()] === 0 && result[gameAdminPropertiesEnum.rDragonMode.toString()] === 0 && this.game.name === GamesNamesEnum.RO) {
              return elem;
            }
            else if (result[gameAdminPropertiesEnum.rDragonMode.toString()] === 1 && this.game.name === GamesNamesEnum.DRO) {
              return elem;
            }
            else if (result[gameAdminPropertiesEnum.rThunderMode.toString()] === 1 && this.game.name === GamesNamesEnum.TRO) {
              return elem;
            }
          }
          else { return elem; }
        }
        throw new Error(`Not found any ${this.game.name} game opened! Please check.`);
      }

      // get the worker id for device
      // const index = Prerequisite.getIdFromWorkerId();
      // if (gameListFromApiResponseLocal[index]) {
      //   return gameListFromApiResponseLocal[index]
      // } else {
      //   throw new Error(`Cannot find any available game for running in parralel for device no. ${index}. There are only games: ${gameListFromApiResponseLocal}`);
      // }
    }
    catch (err) {
      throw new Error(err);
    }
  }

  // async _changePlayerName(newPlayerName: string) {
  //   console.log('@@@ _changePlayerName function was called');


  //   try {


  //     this.player.name = newPlayerName;
  //     // if player does not exist then create it
  //     const createAccResult = await API.createAccount(this);
  //     // if found not expected error then fail
  //     if (!['0', '3'].includes(createAccResult.errorCode)) {
  //       throw new Error(`Failed to create a new player:${this.player.name}. Was found error:${createAccResult.errorCode}, with description: ${createAccResult.description}`);
  //     }

  //     // update player token
  //     const callResult = await API.registerToken(this);
  //     if (callResult?.errorCode === '0') {
  //       this.player.token = callResult.description;
  //     }
  //     else {
  //       throw new Error(`Token not created for player:${this.player.name}. Was found error code:${callResult?.errorCode} with description: ${callResult?.description} `)
  //     }

  //   }
  //   catch (err) {
  //     throw new Error(err)
  //   }
  // }

  // async _changePlayerToBetBehind() {
  //   console.log('@@@ _changePlayerToBetBehind function was called');


  //   try {

  //     if (browser.isMobile) {
  //       // update player name
  //       this.player.name = process.env.BET_BEHIND_PLAYER + '_' + deviceName.slice(-3);
  //     }
  //     else {
  //       this.player.name = process.env.BET_BEHIND_PLAYER + '_' + browser.sessionId.slice(-3);
  //     }

  //     // if player does not exist then create it
  //     const createAccResult = await API.createAccount(this);
  //     // if found not expected error then fail
  //     if (!['0', '3'].includes(createAccResult.errorCode)) {
  //       throw new Error(`Failed to create a new player:${this.player.name}. Was found error:${createAccResult.errorCode}, with description: ${createAccResult.description}`);
  //     }

  //     // update player token
  //     const callResult = await API.registerToken(this);
  //     if (callResult?.errorCode === '0') {
  //       this.player.token = callResult.description;
  //     }
  //     else {
  //       throw new Error(`Token not created for player:${this.player.name}. Was found error code:${callResult?.errorCode} with description: ${callResult?.description} `)
  //     }
  //   }
  //   catch (err) {
  //     throw new Error(err)
  //   }
  // }

  // async _changePlayerToBannedOne() {
  //   console.log('@@@ _changePlayerToBannedOne function was called');


  //   try {

  //     this.player.name = process.env.BANNED_PLAYER;


  //     // update player token
  //     const callResult = await API.registerToken(this);
  //     if (callResult?.errorCode === '0') {
  //       this.player.token = callResult.description;
  //     }
  //     else {
  //       throw new Error(`Token not created for player:${this.player.name}. Was found error code:${callResult?.errorCode} with description: ${callResult?.description} `)
  //     }
  //   }
  //   catch (err) {
  //     throw new Error(err)
  //   }
  // }

  // if not specify the new operator id, then the SW operator id will be considered
  // async _changeOperatorToSW() {
  //   console.log('@@@ _changeOperatorToSW function was called');

  //   try {
  //     this.operator.id = process.env.SW_OPERATOR_ID;
  //     // this.operator.secretkey = process.env.SECRET_KEY; // same as others


  //     const createAccResult = await API.createAccount(this);
  //     // if found not expected error then fail
  //     if (!['0', '3'].includes(createAccResult.errorCode)) {
  //       throw new Error(`Failed to create a new player:${this.player.name}. Was found error:${createAccResult.errorCode}, with description: ${createAccResult.description}`);
  //     }

  //     // update player token
  //     const callResult = await API.registerToken(this);
  //     if (callResult?.errorCode === '0') {
  //       this.player.token = callResult.description;
  //     }
  //     else {
  //       throw new Error(`Token not created for player:${this.player.name}. Was found error code:${callResult?.errorCode} with description: ${callResult?.description} `)
  //     }
  //   }
  //   catch (err) {
  //     throw new Error(err)
  //   }
  // }

  // async _changeLimitId() {
  //   console.log('@@@ _changeLimitId function was called');


  //   // take the second limit
  //   try {

  //     let limit1;

  //     // get all game and limits data
  //     const gamesListResult = await API.getGamesListWithLimits(this);

  //     //pick the correct game from result
  //     if (gamesListResult) {

  //       // get all data for required game
  //       const gameIdData: GameListType = await this.getRequiredGameData(gamesListResult);
  //       console.log('gameIdData :>> ', gameIdData);

  //       // get the limit if result is array or not
  //       if (!Array.isArray(gameIdData.limitSetList.limitSet)) {
  //         const limitTemp = [gameIdData?.limitSetList?.limitSet];
  //         limit1 = limitTemp[1];
  //       }
  //       else {
  //         limit1 = gameIdData?.limitSetList?.limitSet[1];
  //       }
  //       console.log('limit1 :>> ', limit1);

  //       // if not found the second limit
  //       if (limit1) {
  //         this.limit = { id: limit1?.limitSetID, minBet: limit1?.minBet, maxBet: limit1?.maxBet, minBetBehind: limit1?.minBetBehind, maxBetBehind: limit1?.maxBetBehind };
  //       }
  //       else {
  //         throw new Error(`Not found the second limit to use in tests. Make sure to have 2 limits defined for automation tests`)
  //       }
  //     }

  //     // update player token
  //     const callResult = await API.registerToken(this, true);
  //     if (callResult?.errorCode === '0') {
  //       this.player.token = callResult.description;
  //     }
  //   }
  //   catch (err) {
  //     throw new Error(err)
  //   }
  // }

  // async _changeLimitIdToAnInexistentOne(newLimitId: string) {
  //   console.log('@@@ _changeLimitIdToAnInexistentOne function was called');

  //   // take the second limit
  //   try {

  //     this.limit.id = newLimitId;

  //     // update player token
  //     const callResult = await API.registerToken(this, true);
  //     if (callResult?.errorCode === '0') {
  //       this.player.token = callResult.description;
  //     }
  //   }
  //   catch (err) {
  //     throw new Error(err)
  //   }
  // }

  static readEnvVariables() {
    try {

      const envConfig: envFileDataType = {
        languageId: process.env.LANGUAGE_ID,
        deviceOrientation: process.env.DEVICE_ORIENTATION,
        operatorId: process.env.OPERATOR_ID,
        gameToTest: undefined,
        isNewGame: process.env.IS_NEW_GAME,
        environment: process.env.ENVIRONMENT,
        apiUrl: process.env.API_URL,
        apiClientUrl: process.env.API_CLIENT_URL,
        servicesUrl: process.env.SERVICES_URL,
        translationServiceUrl: process.env.TRANSLATION_SERVICE_URL,
        mobileGameDomain: process.env.MOBILE_GAME_DOMAIN,
        webGameDomain: process.env.WEB_GAME_DOMAIN,
        sawOldUrl: process.env.SAW_OLD_URL,
        lobbyUrl: process.env.LOBBY_URL,
        lobbyOtherUrl: process.env.LOBBY_OPT_URL,
        swManageUrl: process.env.SW_MANAGE_URL,
        token: process.env.TOKEN,
        secretKey: process.env.SECRET_KEY,
        activePlayer: process.env.ACTIVE_PLAYER,
        betBehindPlayer: process.env.BET_BEHIND_PLAYER,
        bannedPlayer: process.env.BANNED_PLAYER,
        playerPassword: process.env.PLAYER_PASSWORD,
      }

      return envConfig;
    }
    catch (err) {
      throw new Error('Fail to read all environment variables from .env file')
    }

  }

  static processEnvVariables(gameName: GamesNamesEnum = undefined) {
    try {

      //Read environment variables
      const envConfig: envFileDataType = Data.readEnvVariables();

      // @ts-ignore
      envConfig.activePlayer = envConfig.activePlayer + '_' + browser.options._[0].match(/wdio\.conf\.(.*?)\.ts/)[1];

      // set as game - the one that was processed in the beginning of the test
      envConfig.gameToTest = gameName;

      // other logic to be added

      return envConfig;
    }
    catch (err) {
      throw new Error(err)
    }
  }


}
