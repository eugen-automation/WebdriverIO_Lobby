import allureReporter from '@wdio/allure-reporter';
import { axiosPostRequest, extractDataFromXML, md5 } from './helper.api.ts';
import 'dotenv/config'
import { GetGamesListWithLimitsResponse } from '../../models/types/API_Responses/getGamesListWithLimits.type.ts';
import { GamesNamesEnum } from '../../models/enums/gameNames.enum.ts';
import Data from '../helpers/SessionData.class.ts';


export const API = {

  createAccount: async function (session: Data): Promise<any> {

    let responseResult;

    try {
      // console.log('@@@ value sent to MD5()', `${playerDetails.operatorSecretKey}operatorID=${playerDetails.operatorId}&username=${playerDetails.playerName}${newPasswordValueFormatted}${newNicknameValueFormatted}${newStatusValueFormatted}${groupLimitIdValueFormatted}&bulkOperation=${bulkOperationValue}`);
      const accPw = md5(`${session.operator.secretkey}operatorId=${session.operator.id}&username=${session.player.name}`);
      const url = `${session.urls.apiUrl}createAccount`;
      const body = `accessPassword=${accPw}&operatorId=${session.operator.id}&username=${session.player.name}`;

      responseResult = await axiosPostRequest(url, body);
      return (await getDataFromXML(responseResult, true));
    } catch (err) {
      allureReporter.step(`There is error in API call createAccount(). ${err}`, () => { });
      throw new Error(`There is error in API call createAccount(). ${err}`);
    }
  },

  kickPlayersFromGames: async function (dataDetails: Data) {
    try {
      const detailsData = `operatorId=${dataDetails.operator.id}&username=${dataDetails.player.name}`;
      const accPw = md5(
        `${dataDetails.operator.secretkey}${detailsData}`,
      );
      const url = `${dataDetails.urls.apiUrl}kickPlayerFromGames`;
      const body = `accessPassword=${accPw}&${detailsData}`;

      const responseResult = await axiosPostRequest(url, body);
      await getDataFromXML(responseResult);
    } catch (err) {
      allureReporter.step(`There is error in API call kickPlayersFromGames(). ${err}`, () => { });
      throw new Error(`There is error in API call kickPlayersFromGames(). ${err}`);
    }
  },

  registerToken: async function (session: Data, useLimitId: boolean = true): Promise<any> {
    console.log('Called @@@registerToken() function')

    let detailsData: string;

    try {

      // for games include also the limitId
      if (useLimitId) {
        detailsData = `operatorId=${session.operator.id}&username=${session.player.name}&props=limitsetid:${session.limit.id}`
      }
      else {
        detailsData = `operatorId=${session.operator.id}&username=${session.player.name}`;
      };


      const accPw = md5(
        `${session.operator.secretkey}${detailsData}`,
      );
      const url = `${session.urls.apiUrl}registerToken`;
      const body = `accessPassword=${accPw}&${detailsData}`;

      const responseResult = await axiosPostRequest(url, body);
      const result = await getDataFromXML(responseResult);
      return result;
    } catch (err) {
      allureReporter.step(`There is error in API call registerToken(). ${err}`, () => { });
      throw new Error(`There is error in API call registerToken(). ${err}`);
    }
  },

  getAccountBalance: async function (playerDetails: Data): Promise<{ errorCode: string; balance: number, currency: string }> {
    try {
      const detailsData = `operatorId=${playerDetails.operator.id}&username=${playerDetails.player.name}`;
      const accPw = md5(
        `${playerDetails.operator.secretkey}${detailsData}`,
      );
      const url = `${playerDetails.urls.apiUrl}getAccountBalance`;
      const body = `accessPassword=${accPw}&${detailsData}`;

      const responseResult = await axiosPostRequest(url, body);
      const result = await getDataFromXML(responseResult);
      return result;
    } catch (err) {
      allureReporter.step(`There is error in API call getAccountBalance(). ${err}`, () => { });
      throw new Error(`There is error in API call getAccountBalance(). ${err}`);
    }
  },

  accountDeposit: async function (playerDetails: Data, amount: number = 0) {
    // console.log('@@accountDeposit(): amount', amount);
    try {
      // use date to generate a random number
      const d = new Date();
      const transID = d.getTime();

      const detailsData = `operatorID=${playerDetails.operator.id}&username=${playerDetails.player.name}&amount=${amount}&transactionID=${transID}`;
      const accPw = md5(`${playerDetails.operator.secretkey}${detailsData}`);
      const url = `${playerDetails.urls.apiUrl}accountDeposit`;
      const body = `accessPassword=${accPw}&${detailsData}`;

      const responseResult = await axiosPostRequest(url, body);

      const result = await getDataFromXML(responseResult);
      return result?.transactionID;
    } catch (err) {
      allureReporter.step(`There is error in API call accountDeposit(). ${err}`, () => { });
      throw new Error(`There is error in API call accountDeposit(). ${err}`);
    }
  },

  accountWithdrawal: async function (playerDetails: Data, amount: number = 0) {
    try {
      // console.log('@@accountWithdrawal(): amount', amount);
      // generate date to get a random number
      const d = new Date();
      const transID = d.getTime();
      // generate the accessPassword
      const detailsData = `operatorID=${playerDetails.operator.id}&username=${playerDetails.player.name}&amount=${amount}&transactionID=${transID}`;
      const accPw = md5(`${playerDetails.operator.secretkey}${detailsData}`);
      const url = `${playerDetails.urls.apiUrl}accountWithdrawal`;
      const body = `accessPassword=${accPw}&${detailsData}`;

      const responseResult = await axiosPostRequest(url, body);
      const result = await getDataFromXML(responseResult);
      return result?.transactionID;
    } catch (err) {
      allureReporter.step(`There is error in API call accountWithdrawal(). ${err}`, () => { });
      throw new Error(`There is error in API call accountWithdrawal(). ${err}`);
    }
  },

  getGamesListWithLimits: async function (session: Data, onlineOnlyValue = 1,
  ): Promise<GetGamesListWithLimitsResponse> {
    // won't work if put 'onlineOnlyValue=true' here
    try {
      const newGame = session.config.isNewGame;
      const detailsData = `operatorId=${session.operator.id}&username=${session.player.name}&gameType=${session.game.type}&onlineOnly=${onlineOnlyValue}&openNewGames=${newGame}`;
      const accPw = md5(`${session.operator.secretkey}${detailsData}`);

      //   includeInOutLimits;
      //   includeBaccaratBigRoadMap;
      //   includeDragonTigerBigRoadMap;
      //   IncludeRouletteLastResults;
      //   IncludeRouletteStatistics;
      //   IncludeAndarBaharLastResults;
      //   IncludeTeenPattiLastResults;
      // IncludeThirtyTwoCardsLastResults;

      const url = `${session.urls.apiUrl}getGamesListWithLimits`;
      const body = `accessPassword=${accPw}&${detailsData}`;
      // console.log('url :>> ', url);
      // console.log('body :>> ', body);

      const responseResult = await axiosPostRequest(url, body);
      // getGamesListWithLimits.name
      const result = await getDataFromXML(responseResult);
      return result?.gamesList;
    } catch (err) {
      allureReporter.step(`There is error in API call getGamesListWithLimits(). ${err}`, () => { });
      throw new Error(`There is error in API call getGamesListWithLimits(). ${err}`);
    }
  },

  /**
     *
     * @param sessionDetails Data object with operator, player data
     * @param newNickname New nickname of the player
     * @param newPassword New user's password, MD5 hashed
     * @param newStatus Possibe values: 1 - active, 2 - suspended
     * @param groupLimitId A valid group limit id to be assigned to the user. Value “-1” means any group limit id will be removed.
     * @param bulkOperation indicates whether the list of usernames is compressed. Possible values: 0 - Not Compressed (default), 1 - Compressed
     * @returns
     *
     */
  changeAccount: async function (sessionDetails: Data, newNicknameValue: string = '', newPasswordValue: string = '', newStatusValue: number = 1, groupLimitIdValue: number = 0, bulkOperationValue: number = 0): Promise<any> {
    // console.log('@@@changeAccount!', playerDetails)
    let responseResult;
    const newNicknameValueFormatted: string = newNicknameValue !== '' ? `&newNickname=${newNicknameValue}` : '';
    const newPasswordValueFormatted: string = newPasswordValue !== '' ? `&newPassword=${newPasswordValue}` : '';
    const newStatusValueFormatted: string = newStatusValue !== 0 ? `&newStatus=${newStatusValue}` : '';
    const groupLimitIdValueFormatted: string = groupLimitIdValue !== 0 ? `&groupLimitId=${groupLimitIdValue}` : '';

    try {
      // console.log('@@@ value sent to MD5()', `${playerDetails.operatorSecretKey}operatorID=${playerDetails.operatorId}&username=${playerDetails.playerName}${newPasswordValueFormatted}${newNicknameValueFormatted}${newStatusValueFormatted}${groupLimitIdValueFormatted}&bulkOperation=${bulkOperationValue}`);
      const accPw = md5(`${sessionDetails.operator.secretkey}operatorID=${sessionDetails.operator.id}&username=${sessionDetails.player.name}${newPasswordValueFormatted}${newNicknameValueFormatted}${newStatusValueFormatted}${groupLimitIdValueFormatted}&bulkOperation=${bulkOperationValue}`);
      const url = `${sessionDetails.urls.apiUrl}changeAccount`;
      const body = `accessPassword=${accPw}&operatorID=${sessionDetails.operator.id}&username=${sessionDetails.player.name}${newPasswordValueFormatted}${newNicknameValueFormatted}${newStatusValueFormatted}${groupLimitIdValueFormatted}&bulkOperation=${bulkOperationValue}`;

      responseResult = await axiosPostRequest(url, body);
      return (await getDataFromXML(responseResult));
    } catch (err) {
      allureReporter.step(`There is error in API call changeAccount(). ${err}`, () => { });
      throw new Error(`There is error in API call changeAccount(). ${err}`);
    }
  }


}


async function getDataFromXML(axioPostRequestResponse, ignoreResponseError: boolean = false) {

  try {

    // parse xml and extract data
    const xmlDataResult = await extractDataFromXML(await axioPostRequestResponse?.data);
    // @ts-ignore
    return xmlDataResult?.response;
  }
  catch (err) {
    throw new Error(`Failed to extract data from XML response -> errorCode: ${JSON.stringify(axioPostRequestResponse)}!`);
  }
  // console.log('#$%@$#%@#$%@#$%', functionName);
  // if not undefined
  // if (axioPostRequestResponse !== undefined) {


  // @ts-ignore
  // if (!ignoreResponseError && xmlDataResult?.response?.errorCode === '0') {
  // @ts-ignore
  // return xmlDataResult?.response;
  // @ts-ignore
  // } else if (ignoreResponseError && xmlDataResult?.response?.errorCode !== '0') {
  // @ts-ignore
  // return xmlDataResult.response;
  // }
  // @ts-ignore
  // throw new Error(`Failed to extract data from XML response -> errorCode: ${xmlDataResult?.response?.errorCode}, description: ${xmlDataResult?.response?.description}!`);
  // }
  // return undefined;
}
