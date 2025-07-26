import { GamesNamesEnum } from "../enums/gameNames.enum.ts";


export function loginPathMapping(gameType: string) {

  switch (gameType) {
    case GamesNamesEnum.RO:
    case GamesNamesEnum.TRO:
    case GamesNamesEnum.DRO:
      return 'RService/';

    case GamesNamesEnum.BJ:
    case GamesNamesEnum.UBJ:
      return 'BJService/';

    case GamesNamesEnum.BAC:
      return 'BCService/';

    case GamesNamesEnum.DT:
      return 'DTClientService/';

    case GamesNamesEnum.SB:
      return 'SBService/';

    case GamesNamesEnum.AB:
      return 'ABService/';

    case GamesNamesEnum.TP2020:
    case GamesNamesEnum.TP:
      return 'TPService/';

    case GamesNamesEnum.TTC:
      return 'TTService/';

    case GamesNamesEnum.UP:
      return 'UPService/';

  }
}
