export enum CasinoComponentEnum{
  LiveGames = 0,
  Lobby = 1,
  SAW =2
}

export enum GamesNamesEnum {
  RO = 'RO',
  TRO = 'TRO',
  DRO = 'DRO',
  BJ = 'BJ',
  UBJ = 'UBJ',
  BAC = 'BAC',
  // SP = "SP",
  DT = 'DT',
  SB = 'SB',
  AB = 'AB',
  TP = 'TP',
  TP2020 = 'TP2020',
  TTC = 'TTC',
  UP = 'UP',

  // getPropertyFromValue = (v) => {
  //   return Object.keys(gamesEnum).find((x) => {
  //     return gamesEnum[x] === v;
  //   });
  // },
}

export enum PlayingGameTypeEnum{
  Card= 'card', 
  Ball = 'ball',
  Dice = 'dice'
}