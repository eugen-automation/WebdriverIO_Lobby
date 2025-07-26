
import allureReporter from '@wdio/allure-reporter';
import 'dotenv/config'
import {
  axiosGetRequest, axiosPostRequest, decryptPassword,
  encryptPassword,
} from './helper.api.ts';
import { GamesNamesEnum } from '../../models/enums/gameNames.enum.ts';
import { CardIdEnum, getCardNameFromCardId } from '../../models/enums/cardIds.enum.ts';
import { WinningNumberRoulette } from '../../models/enums/winningNumberRoulette.enum.ts';
import { DiceRollValueSicBoEnum } from '../../models/enums/diceRollValueSicBo.enum.ts';
import { LanguagesEnum } from '../../models/enums/languages.enum.ts';
import { loginPathMapping } from '../../models/mappings/loginCallPath.map.ts';
import Data from '../helpers/SessionData.class.ts';
import { AdminParamStructure } from '../../models/types/adminParam.ts';


const { SERVICES_URL } = process.env;
const { TRANSLATION_SERVICE_URL } = process.env;
const automationPath = 'Automation/';

type sideBet = {
  SideBetId: number,
  Min: number,
  Max: number
};

type LuckyNumber = {
  [key: string]: number;
}

enum LimitsCallSuccessResponseMessages {
  updateChips = "Chips have been updated succesfully",
  EnableDefaultChips = "Use Default Chips Range for has been successfully enabled",
  DisableSideBets = "Use side bet has been successfully disabled",
  AddSideBet = "Side bets have been successfully added",
  RemoveSideBet = "Side bets have been successfully removed"
}

enum AdminParamsSuccessResponseMessages {
  updateGameParams = 'Parameter has been updated successfully',
  updateOperatorAndMobileConfigParam = 'Parameter has been updated successfully',
}

const Services = {

  TableManager: {
    cancelRound: async (gameID: number, retryCount: number = 0) => {
      // console.log('$$#############$$$$$$$$$retryCount:', retryCount);
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}CancelRound`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        const body = {
          gameId: gameID,
          Token: decryptedPassword,
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        console.log('+++++++++++++++++++++cancelRoundInTableManager(): requestResponse:', requestResponse?.status);
        if (requestResponse?.status === 200) {
          return requestResponse;
        }
        if (requestResponse?.status === 401 && retryCount < 3) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!cancelRoundInTableManager(): Received 401 response, retrying attempt:', retryCount + 1);
          await new Promise((resolve) => setTimeout(resolve, 7000));
          const returnResult = await Services.TableManager.cancelRound(gameID, retryCount + 1);
          return returnResult;
        }

        console.log('Found wrong status result:', requestResponse?.status);
        allureReporter.step(`Wrong status code returned from cancelRound():${requestResponse?.status}`, () => { });
        return undefined;
      } catch (err) {
        if (retryCount < 3) { // Retry only up to 3 times (adjust the retryCount as needed)
          const retryDelay = 7000 * 2 ** retryCount; // Increase the delay exponentially with each retry
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
          const returnResultLast = await Services.TableManager.cancelRound(gameID, retryCount + 1); // Recursive call with increased retryCount
          return returnResultLast;
        }
        allureReporter.step(`There is code exception in cancelRound(): ${err}`, () => { });
        throw new Error(`cancelRound() returned error: ${err.message}`)
      }
    },

    pauseOn: async (gameID: number) => {
      console.log('@@pauseOnInTableManager() called!');
      // console.log('$$#############$$$$$$$$$gameID:', gameID);
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}SetPauseOn`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        const body = {
          gameId: gameID,
          Token: decryptedPassword,
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        // console.log('+++++++++++++++++++++requestResponse:', requestResponse?.status);
        if (requestResponse?.status === 200) {
          return requestResponse;
        }

        console.log('Found wrong status result:', requestResponse?.status);
        allureReporter.step(`Wrong status code returned from pauseOn():${requestResponse?.status}`, () => { });
        return undefined;
      } catch (err) {
        allureReporter.step(`There is code exception in pauseOn(): ${err}`, () => { });
        return undefined;
      }
    },

    pauseOff: async (gameID: number) => {
      console.log('@@pauseOffInTableManager() called!');

      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}SetPauseOff`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        const body = {
          gameId: gameID,
          Token: decryptedPassword,
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        // console.log('+++++++++++++++++++++requestResponse:', requestResponse?.status);
        if (requestResponse?.status === 200) {
          return requestResponse;
        }

        console.log('Found wrong status result:', requestResponse?.status);
        allureReporter.step(`Wrong status code returned from pauseOff():${requestResponse?.status}`, () => { });
        return undefined;
      } catch (err) {
        allureReporter.step(`There is code exception in pauseOff(): ${err}`, () => { });
        return undefined;
      }
    },

    sendCardsInTableManager: async (game: GamesNamesEnum, gameID: number, playerCardsMap: Record<GamesNamesEnum, (CardIdEnum | WinningNumberRoulette | DiceRollValueSicBoEnum)[]>, dealerCardsMap: Record<GamesNamesEnum, CardIdEnum[]> | [] = [], communityCardsMap: Record<GamesNamesEnum, CardIdEnum[]> | [] = [], IsUsedAfterUndoCardsValue: boolean = false, specificAllureStep: any = allureReporter) => {
      console.log(`@@sendRoundResultInTableManager() called! Players cards are: ${JSON.stringify(playerCardsMap)}`);

      let cardNames: string = '';
      let diceValues: string = '';
      let winningNumber: string = '';

      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}SendCards`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);

        // Get the specific playerCards array based on the gameID
        const playerCards = playerCardsMap[game] || [];
        const dealerCards = dealerCardsMap[game] || [];
        const communityCards = communityCardsMap[game] || [];
        const cardsObject = { playerCards, dealerCards, communityCards };

        const body = {
          PlayerCardsIds: playerCards,
          // DealerCardsIds used only for BJ, TP, SP
          DealerCardsIds: dealerCards,
          // CommunityCardsIds used only for SP
          CommunityCardsIds: communityCards,
          Token: decryptedPassword,
          GameId: gameID,
          IsUsedAfterUndoCards: IsUsedAfterUndoCardsValue,
        };


        // add details about sent cards into allure
        for (const arrayName in cardsObject) {
          const cardsArray = cardsObject[arrayName];

          if (cardsArray.length > 0) {
            if (game === GamesNamesEnum.RO || game === GamesNamesEnum.TRO) {

              const getNameFromNumber = (number) => WinningNumberRoulette[number] || 'UNKNOWN';
              winningNumber = cardsArray.map((element) => getNameFromNumber(element)).join(', ');
              await specificAllureStep.step(`Send winning number result: ${winningNumber}`, () => { });
            } else if (game === GamesNamesEnum.SB) {

              const getNameFromNumber = (number) => DiceRollValueSicBoEnum[number] || 'UNKNOWN';
              diceValues = cardsArray.map((element) => getNameFromNumber(element)).join(', ');
              await specificAllureStep.step(`Send dice values: ${diceValues}`, () => { });
            } else {
              cardNames = cardsArray.map((element) => getCardNameFromCardId(element)).join(', ');
              await specificAllureStep.step(`Configure Table Manager to send cards: ${arrayName}: ${cardNames}`, () => {
              });
            }
          }
        }
        //! DO NOT use WAIT for this request, it will get timeout (because wait all cards to be dealt)
        axiosPostRequest(requestUrl, body);

      } catch (err) {
        await specificAllureStep.step(`There is error in sendCardsInTableManager(): ${err}`, () => { });
        // return undefined;
        throw new Error(err)
      }
      // return void;
    },

    sendCardsInTableManagerWithAwait: async (game: GamesNamesEnum, gameID: number, playerCardsMap: Record<GamesNamesEnum, (CardIdEnum | WinningNumberRoulette | DiceRollValueSicBoEnum)[]>, dealerCardsMap: Record<GamesNamesEnum, CardIdEnum[]> | [] = [], communityCardsMap: Record<GamesNamesEnum, CardIdEnum[]> | [] = [], IsUsedAfterUndoCardsValue: boolean = true, specificAllureStep: any = allureReporter) => {
      console.log(`@@sendCardsInTableManagerWithAwait() called! Players cards are: ${JSON.stringify(playerCardsMap)}`);

      let cardNames: string = '';
      let diceValues: string = '';
      let winningNumber: string = '';

      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}SendCards`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);

        // Get the specific playerCards array based on the gameID
        const playerCards = playerCardsMap[game] || [];
        const dealerCards = dealerCardsMap[game] || [];
        const communityCards = communityCardsMap[game] || [];
        const cardsObject = { playerCards, dealerCards, communityCards };

        const body = {
          PlayerCardsIds: playerCards,
          // DealerCardsIds used only for BJ, TP, SP
          DealerCardsIds: dealerCards,
          // CommunityCardsIds used only for SP
          CommunityCardsIds: communityCards,
          Token: decryptedPassword,
          GameId: gameID,
          IsUsedAfterUndoCards: IsUsedAfterUndoCardsValue,
        };


        // add details about sent cards into allure
        for (const arrayName in cardsObject) {
          const cardsArray = cardsObject[arrayName];

          if (cardsArray.length > 0) {
            if (game === GamesNamesEnum.RO || game === GamesNamesEnum.TRO) {

              const getNameFromNumber = (number) => WinningNumberRoulette[number] || 'UNKNOWN';
              winningNumber = cardsArray.map((element) => getNameFromNumber(element)).join(', ');
              await specificAllureStep.step(`Send winning number result: ${winningNumber}`, () => { });
            } else if (game === GamesNamesEnum.SB) {

              const getNameFromNumber = (number) => DiceRollValueSicBoEnum[number] || 'UNKNOWN';
              diceValues = cardsArray.map((element) => getNameFromNumber(element)).join(', ');
              await specificAllureStep.step(`Send dice values: ${diceValues}`, () => { });
            } else {
              cardNames = cardsArray.map((element) => getCardNameFromCardId(element)).join(', ');
              await specificAllureStep.step(`Configure Table Manager to send cards: ${arrayName}: ${cardNames}`, () => {
              });
            }
          }
        }
        //! DO NOT use WAIT for this request, it will get timeout (because wait all cards to be dealt)
        await axiosPostRequest(requestUrl, body);

      } catch (err) {
        await specificAllureStep.step(`There is error in sendCardsInTableManagerWithAwait(): ${err}`, () => { });
        // return undefined;
        throw new Error(err)
      }
      // return void;
    },

    undoLastCard: async (gameID: number) => {
      console.log('@@undoLastCard() called!', gameID);
      // console.log('$$#############$$$$$$$$$gameID:', gameID);
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}UndoLastCard`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        const body = {
          gameId: gameID,
          Token: decryptedPassword,
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        // console.log('+++++++++++++++++++++requestResponse:', requestResponse?.status);
        if (requestResponse?.status === 200) {
          return requestResponse;
        }

        console.log('Found wrong status result:', requestResponse?.status);
        allureReporter.step(`Wrong status code returned from undoLastCard():${requestResponse?.status}`, () => { });
        throw new Error(`Wrong status code returned from undoLastCard():${requestResponse?.status}`)
        // return undefined;
      } catch (err) {
        allureReporter.step(`There is code exception in undoLastCard(): ${err}`, () => { });
        throw new Error(err);
      }
    },
  },

  Params: {
    getGameParams: async (operatorId: string, gameType: string) => {
      try {
        const apigetParams: string = 'ApiParams/';
        const requestUrl: string = `${SERVICES_URL + apigetParams}Game/${operatorId}/${gameType}`;

        // if response status is ok
        const requestResponse = await axiosGetRequest(requestUrl);
        if (requestResponse?.status != 200 || requestResponse?.data === '') {
          throw new Error(`Failed to get Admin params, error message: ${requestResponse?.data}`);
        };

        return requestResponse.data
      }
      catch (err) {
        throw new Error(err);
      }
    },

    updateOperatorAndMobileConfigParam: async (operatorId: string, configGroupId: string, configId: string, configValue: string) => {
      // console.log('@@ updateOperatorAndMobileConfigParam() called!');
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}UpdateParameter/`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        const body = {
          OperatorId: operatorId,
          ConfigGroupId: configGroupId,
          ConfigId: configId,
          ConfigValue: configValue,
          Token: decryptedPassword,
        };
        // console.log('+++++++++++++++++++++++++++++++ requestUrl:', requestUrl);
        // console.log('+++++++++++++++++++++++++++ body:', body);
        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status != 200 || requestResponse?.data ? requestResponse?.data.toLowerCase() != AdminParamsSuccessResponseMessages.updateOperatorAndMobileConfigParam.toLowerCase() : undefined) {
          throw new Error(`Failed to update operator/mobile param: ${configId} with error message: ${requestResponse?.data}`);
        };

        return requestResponse;
      }
      catch (err) {
        throw new Error(`updateOperatorAndMobileConfigParam() for ${configId}: ${err.message}`)
      }
    },

    updateGameParams: async (session: Data, param: AdminParamStructure, newParamValue: string) => {
      console.log('@@updateGameParams() called', param.name, newParamValue);

      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}UpdateGameParameter/`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        // console.log('+++++++++++++++++++++++++ process.env.TOKEN:', process.env.TOKEN);
        const body = {
          OperatorId: session.operator.id,
          GametypeId: session.game.type,
          ConfigId: param.id,
          ConfigName: param.name,
          ConfigValue: newParamValue,
          Token: decryptedPassword,
        };
        // console.log('+++++++++++++++++++++++++++++++ requestUrl:', requestUrl);
        // console.log('+++++++++++++++++++++++++++ body:', body);
        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status != 200 || requestResponse?.data ? requestResponse?.data.toLowerCase() != AdminParamsSuccessResponseMessages.updateGameParams.toLowerCase() : undefined) {
          throw new Error(`Failed to update game param: ${param.name} with error message: ${requestResponse?.data}`);
        };

        return requestResponse;
      } catch (err) {
        allureReporter.step(`There is error in updateGameParams(): ${err.message}`, () => { });
        // console.log(`There is error in updateGameParams(): ${Error}`);
        throw new Error(`updateGameParams() for ${param?.name}: ${err.message}`)
      }
    },
  },

  Limits: {
    updateChips: async (limitId: number, chipsValues: string) => {

      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}UpdateChips/`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);

        const body = {
          LimitId: limitId,
          ChipsValues: chipsValues,
          Token: decryptedPassword
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status != 200 || requestResponse?.data ? requestResponse?.data.toLowerCase() != LimitsCallSuccessResponseMessages.updateChips.toLowerCase() : undefined) {
          throw new Error(`Failed to update chips in limit: ${limitId} with error message: ${requestResponse?.data}`);
        };
        return requestResponse;

      }
      catch (Error) {
        allureReporter.step(`There is error in UpdateChipsInLimits(): ${Error}`, () => { });
        console.log(`There is error in UpdateChipsInLimits(): ${Error}`);
        return undefined;
      }
    },

    enableDefaultChips: async (limitId: number) => {
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}EnableDefaultChips`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        // const encryptedPassword = encryptPassword('xxx')

        const body = {
          LimitId: limitId,
          Token: decryptedPassword
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status != 200 || requestResponse?.data ? requestResponse?.data.toLowerCase() != LimitsCallSuccessResponseMessages.EnableDefaultChips.toLowerCase() : undefined) {
          throw new Error(`Failed to enable default chips in limit: ${limitId} with error message: ${requestResponse?.data}`);
        };
        return requestResponse;

      }
      catch (err) {
        allureReporter.step(`There is error in EnableDefaultChipsInLimits(): ${err}`, () => { });
        throw new Error(err)
      }
    },

    disableSideBets: async (limitId: number) => {
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}DisableSideBets/`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);

        const body = {
          LimitId: limitId,
          Token: decryptedPassword
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status != 200 || requestResponse?.data ? requestResponse?.data.toLowerCase() != LimitsCallSuccessResponseMessages.DisableSideBets.toLocaleLowerCase() : undefined) {
          throw new Error(`Failed to disable side-bets in limit: ${limitId} with error message: ${requestResponse?.data}`);
        };
        return requestResponse;

      }
      catch (Error) {
        allureReporter.step(`There is error in DisableSideBetsInLimits(): ${Error}`, () => { });
        console.log(`There is error in DisableSideBetsInLimits(): ${Error}`);
        return undefined;
      }
    },

    addSideBets: async (limitId: number, sideBetsList: sideBet[]) => {
      console.log('Called function Services.addSideBet()');
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}AddSideBets/`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);

        const body = {
          LimitId: limitId,
          Token: decryptedPassword,
          SideBets: sideBetsList
        };


        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status != 200 || requestResponse?.data ? requestResponse?.data.toLowerCase() != LimitsCallSuccessResponseMessages.AddSideBet.toLocaleLowerCase() : undefined) {
          throw new Error(`Failed to add side-bet id: ${JSON.stringify(sideBetsList)} in limit: ${limitId} with error message: ${requestResponse?.data}`);
        };

        return requestResponse;

      }
      catch (err) {
        allureReporter.step(`There is error in addSideBetInLimits(): ${Error}`, () => { });
        console.log(`There is error in addSideBetInLimits(): ${Error}`);
        throw new Error(err)
      }
    },

    removeSideBets: async (limitId: number, sideBetId: number[]) => {
      try {
        const requestUrl: string = `${SERVICES_URL + automationPath}RemoveSideBets/`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);

        const body = {
          LimitId: limitId,
          Token: decryptedPassword,
          SideBetIds: sideBetId
        };


        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status != 200 || requestResponse?.data ? requestResponse?.data.toLowerCase() != LimitsCallSuccessResponseMessages.RemoveSideBet.toLocaleLowerCase() : undefined) {
          throw new Error(`Failed to remove side-bet id: ${sideBetId} in limit: ${limitId} with error message: ${requestResponse?.data}`);
        };
        return requestResponse;

      }
      catch (Error) {
        allureReporter.step(`There is error in removeSideBetInLimits(): ${Error}`, () => { });
        console.log(`There is error in removeSideBetInLimits(): ${Error}`);
        return undefined;
      }
    },
  },

  GameRules: {
    getGameRules: async (gameID: number, propIds: number[]) => {
      console.log('Function GameRules.getGameRules() called ');

      try {

        const requestUrl: string = `${SERVICES_URL + automationPath}GetGameRules`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        const body = {
          GameId: gameID,
          Token: decryptedPassword,
          "PropIds": [],
          "ShouldGetAllRules": true
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        if (requestResponse?.status === 200) {
          let finalResult = {};
          // result  { 205: 15000, 208: 2500, 226: 7000, 228: 50, 229: 25, 235: 14, 236: 500, 237: 120000, 240: 1, 241: 0 }
          if (propIds.length > 0) {
            for (const prop in requestResponse.data) {
              if (propIds.includes(Number(prop))) {
                finalResult[prop] = requestResponse.data[prop];
              }
            }
          }
          else {
            finalResult = requestResponse.data;
          }
          if (Object.keys(finalResult).length === 0) {
            return null;
          }
          return finalResult;
        }

        console.log('Found wrong status result:', requestResponse?.status);
        allureReporter.step(`Wrong status code returned from getGameRules():${requestResponse?.status}`, () => { });
        throw new Error(`Wrong status code returned from getGameRules():${requestResponse?.status}`)
      } catch (err) {
        allureReporter.step(`There is code exception in getGameRules(): ${err}`, () => { });
        throw new Error(err);
      }
    }
  },

  GameServer: {
    sendLuckyNumbers: async (gameID: number, luckyNumbers: LuckyNumber, game: GamesNamesEnum) => {
      console.log('@@@sendLuckyNumberts function was called');

      try {
        if (game !== GamesNamesEnum.TRO) {
          throw new Error(`Please call Services = GameServer.sendLuckyNumbers request only for Thunder games!`);
        }
        const requestUrl: string = `${SERVICES_URL + automationPath}SendLuckyNumbers`;
        const decryptedPassword = decryptPassword(process.env.TOKEN);
        const body = {
          GameId: gameID,
          Token: decryptedPassword,
          LuckyNumbersWithPayouts: luckyNumbers
        };

        const requestResponse = await axiosPostRequest(requestUrl, body);
        console.log('+++++++++++++++++++++sendLuckyNumbers(): requestResponse:', requestResponse?.status);
        if (requestResponse?.status === 200) {
          return requestResponse;
        }

        console.log('Found wrong status result:', requestResponse?.status);
        allureReporter.step(`Wrong status code returned from sendLuckyNumbers():${requestResponse?.status}`, () => { });
        throw new Error(`Wrong status code returned from sendLuckyNumbers():${requestResponse?.status}`)
      } catch (err) {
        allureReporter.step(`There is code exception in sendLuckyNumbers(): ${err}`, () => { });
        throw new Error(`sendLuckyNumbers() returned error: ${err.message}`)
      }
    },
  },

  Account: {
    login: async (game: GamesNamesEnum, gameIdArg: string, tokenArg: string) => {
      console.log('Function Acount.login() called ')

      try {
        const apiGameService: string = loginPathMapping(game);
        const requestUrl: string = `${SERVICES_URL + apiGameService}Login`;

        const body = {
          gameId: gameIdArg,
          token: tokenArg,
        }

        const responseResult = await axiosPostRequest(requestUrl, body);

        // if response status is ok, then return data
        if (responseResult.status === 200) {
          return responseResult.data;
        }

        return undefined;
      }
      catch (err) {
        throw new Error(`There is error in Services.Login: ${err.message}`)
      }
    }
  },

  Translations: {
    getTraslatedDictionary: async (gameType: string, langId: LanguagesEnum) => {
      // const apiGetTranslatedDictionaryRequest = 'GetTraslatedDirctionary/';

      const requestUrl = `${TRANSLATION_SERVICE_URL}GetTraslatedDirctionary/${gameType}/${langId}`;
      // console.log('@@ getTranslationDictionary() requestUrl:', requestUrl);
      try {
        const response = await axiosGetRequest(requestUrl);
        // console.log('Translation dictionary:', response?.data);
        return response?.data; // Assuming the response contains the translation dictionary
      } catch (error) {
        throw new Error(`Error fetching translation dictionary: ${error.message}`); // Rethrow the error to handle it in the calling code
      }
    }
  },
}

export default Services;