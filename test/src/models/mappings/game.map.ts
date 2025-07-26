import { GamesNamesEnum } from "../enums/gameNames.enum.ts";
import { GameTypesEnum } from "../enums/gameTypes.enum.ts";


export function gameNameMapping(rawGame: string | undefined): GamesNamesEnum {
  console.log('@@@gameMapping() function was called!');

  if (!rawGame) {
    throw new Error('"GAME_NAME" not found in environment config file');
  }

  switch (rawGame.toLowerCase().replace(/\s/g, '')) {
    case 'ro':
    case 'roulette':
    case 'roulete':
    case 'roullete':
    case 'roullette':
      return GamesNamesEnum.RO;
    case 'tro':
    case 'thunderroulette':
    case 'thunderoulette':
    case 'thunderroulete':
    case 'thunderroullete':
    case 'thunderroullette':
      return GamesNamesEnum.TRO;
    case 'dro':
    case 'dragonro':
    case 'dragonroulette':
      return GamesNamesEnum.DRO;
    case 'blackjack':
    case 'bj':
      return GamesNamesEnum.BJ;
    case 'unlimitedblackjack':
    case 'ubj':
      return GamesNamesEnum.UBJ;
    case 'bacarat':
    case 'baccarat':
    case 'bac':
      return GamesNamesEnum.BAC;
    case 'dragontiger':
    case 'dragon tiger':
    case 'dt':
      return GamesNamesEnum.DT;
    case 'sicbo':
    case 'sb':
      return GamesNamesEnum.SB;
    case 'andarbahar':
    case 'ab':
      return GamesNamesEnum.AB;
    case 'tp20':
    case 'tp2020':
    case 'tppvp':
    case 'teenpattipvp':
    case 'teenpatti20':
    case 'teenpatti-2020':
    case 'teenpatti20-20':
    case 'teenpatti2020':
      return GamesNamesEnum.TP2020;
    case 'teenpatti':
    case 'tp':
      return GamesNamesEnum.TP;
    case 'ttc':
    case 'thirtytwo':
    case 'thirtytwocards':
    case '32cards':
      return GamesNamesEnum.TTC;
    case 'up':
    case 'ultimatepoker':
      return GamesNamesEnum.UP;
    default:
      return 'undefined' as GamesNamesEnum;
  }
}

export function gameTypeMapping(gameName: GamesNamesEnum): string {
  console.log('@@@gameTypeMapping() function was called!');

  if (!gameName) {
    throw new Error('"GAME_NAME" not found in environment config file');
  }

  switch (gameName) {
    case GamesNamesEnum.RO:
      return GameTypesEnum.RO;

    case GamesNamesEnum.TRO:
      return GameTypesEnum.TRO;

    case GamesNamesEnum.DRO:
      return GameTypesEnum.DRO;

    case GamesNamesEnum.BJ:
      return GameTypesEnum.BJ;

    case GamesNamesEnum.UBJ:
      return GameTypesEnum.UBJ;

    case GamesNamesEnum.BAC:
      return GameTypesEnum.BAC;

    case GamesNamesEnum.DT:
      return GameTypesEnum.DT;

    case GamesNamesEnum.SB:
      return GameTypesEnum.SB;

    case GamesNamesEnum.AB:
      return GameTypesEnum.AB;

    case GamesNamesEnum.TP2020:
      return GameTypesEnum.TP2020;

    case GamesNamesEnum.TP:
      return GameTypesEnum.TP;

    case GamesNamesEnum.TTC:
      return GameTypesEnum.TTC;

    case GamesNamesEnum.UP:
      return GameTypesEnum.UP;
    default:
      return '0';
  }
}
