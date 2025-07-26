import { GamesEnum } from "../enums/gameNames.enum";
import { LanguagesEnum } from "../enums/languages.enums";


export type GameType = {
  id?: string;
  type?: string;
  nameUI?: string;
  name: GamesEnum;
  // dealerName?: string;
  connectionUrl?: string;
  playersNumber?: number;
  // chipset?: number[];
  // limit?: LimitSet;
  // backupLimit?: LimitSet;
  homeUrl?: string;
}

export type LimitSet = {
    id: string;
    minBet: string;
    maxBet: string;
    minBetBehind?: string;
    maxBetBehind?: string;
}

