
import { languageMapping } from '../../models/mappings/language.map.ts';
import { GamesNamesEnum } from '../../models/enums/gameNames.enum.ts';
import { GameTypesEnum } from "../../models/enums/gameTypes.enum.ts";
import Services from '../API/services.api.ts';
import { adminGameParam, adminOperatorParams } from '../../models/types/adminParam.ts';
import Data from './SessionData.class.ts';
import { gameNameMapping } from '../../models/mappings/game.map.ts';



export const Prerequisite = {

  getListOfGamesToBeTested: () => {
    console.log('@@@getListOfGamesToBeTested() function was called!')
    
    // get the game name from .env file
    const gameNames: GamesNamesEnum[] = Prerequisite.gameMappingList(process.env.GAME_NAME ? process.env.GAME_NAME.split(',') : []);

    /**
    * ! ATTENTION! Next row will EXCLUDE games that the automation test will not run for */
    // gameNames = gameNames.filter((arrayItem) => /* arrayItem !== gamesEnum.RO && */ arrayItem !== gamesEnum.TRO);

    return gameNames;
  },

  gameMappingList(rawGame: string[]): GamesNamesEnum[] {
    console.log('@@@ gameMappingList() function was called!');
  
    const rawGameListLowerCase: string[] = rawGame.map((str) => str.toLowerCase());
    if (rawGameListLowerCase.includes('allgames') || rawGameListLowerCase.includes('all')) {
      console.log('Games the tests will run for:', Object.values(GamesNamesEnum));
      return Object.values(GamesNamesEnum);
    }
    // remove if there are any empty spaces inside array items and as items
    const filteredGameList = rawGameListLowerCase.map((value) => value.trim()).filter((value) => value !== '');
    const mappedGames = filteredGameList.map((game) => gameNameMapping(game));
    console.log('Games the tests will run for:', mappedGames);
    return mappedGames;
  },

  getGameType: (game: GamesNamesEnum) => {
    try {
      return GameTypesEnum[game];
    } catch (err) {
      throw new Error(err)
    }
  },

  getGameLanguage: () => {
    return languageMapping(process.env.LANGUAGE);
  },

  getIdFromWorkerId: (): number => {
    // run tests using different players, in order to run tets in parallel.
    const wId = process.env.WDIO_WORKER_ID;
    return parseInt(wId.split('-')[0], 10);
  },

  setDefaultValuesForAdminParams: async (session: Data) => {

    const promisesGameParams = [];
    const promisesOperatorParams = [];

    try {

      if (adminGameParam) {
        for (const key in adminGameParam) {

          if (adminGameParam.hasOwnProperty(key)) {

            const promise = Services.Params.updateGameParams(session, adminGameParam[key], adminGameParam[key].defaultValue);
            promisesGameParams.push(promise);


            // log.info(`Changing admin game param: ${adminGameParam[key].name} with value: ${adminGameParam[key].defaultValue}`)
          }
        }
      }

      // try {
      //   await Promise.all(promisesGameParams);
      //   console.log('All side bets added successfully.');
      // } catch (error) {
      //   console.error('Error adding side bets:', error);
      // }

      if (adminOperatorParams) {
        for (const key in adminOperatorParams) {
          const promise = Services.Params.updateOperatorAndMobileConfigParam(session.operator.id, '1', adminOperatorParams[key].id, adminOperatorParams[key].defaultValue)
          // log.info(`Changing admin operator param: ${adminOperatorParams[key].name} with value: ${adminOperatorParams[key].defaultValue}`);
          promisesOperatorParams.push(promise)
        }
      }

      const newArray = promisesGameParams.concat(promisesOperatorParams);

      try {
        await Promise.all(newArray);
        console.log('All game/operator params successfully updated');
      } catch (error) {
        console.error('Error updating game/operator params:', error);
      }
    }
    catch (err) {
      console.error('There is error in setAdminDefaultParams(): ', err.message)
      throw new Error(err)
    }
  },

  getOperatorIdAndGameType: (game: GamesNamesEnum) => {
    try {

      const operatorId_ = process.env.BT_OPERATOR_ID;

      const gameType_ = Prerequisite.getGameType(game);

      return { operatorId: operatorId_, gameType: gameType_ }
    }
    catch (err) {
      throw new Error(err)
    }
  },
  
}



