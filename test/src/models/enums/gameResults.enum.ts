
import { GamesNamesEnum } from './gameNames.enum.ts';

const enum GameResultEnum {
  ANDAR = 'ANDAR',
  BAHAR = 'BAHAR',
  BANKER_WINS = 'BANKER_WINS',
  BLACK = 'BLACK',
  BLUE = 'BLUE',
  CANCELED = 'CANCELED',
  CALC_WINNERS = 'CALC_WINNERS',
  CLOSED = 'CLOSED',
  DEALING = 'DEALING',
  DRAGON_WINS = 'DRAGON_WINS',
  IDLE = 'IDLE',
  LAST_BETS = 'LAST_BETS',
  LIGHTNING = 'LIGHTNING',
  MAKE_DECISION = 'MAKE_DECISION',
  NO_MORE_BETS = 'NO_MORE_BETS',
  NO_STATUS = 'NO_STATUS',
  NOT_DECIDED = 'NOT_DECIDED',
  NOT_DECIED = 'NOT_DECIED',
  NUMBER_SELECTED = 'NUMBER_SELECTED',
  PAUSED = 'PAUSED',
  PLAYER_A_WINS = 'PLAYER_A_WINS',
  PLAYER_B_WINS = 'PLAYER_B_WINS',
  PLAYER_WINS = 'PLAYER_WINS',
  PLACE_YOUR_BETS = 'PLACE_YOUR_BETS',
  PUSH = 'PUSH',
  RECORD_RESULTS = 'RECORD_RESULTS',
  RED = 'RED',
  RESULT_READY = 'RESULT_READY',
  SHOW_DEALER_CARDS = 'SHOW_DEALER_CARDS',
  SHOW_RESULTS = 'SHOW_RESULTS',
  TIE_WINS = 'TIE_WINS',
  TIGER_WINS = 'TIGER_WINS',
  WAIT_FOR_GAME = 'WAIT_FOR_GAME',
  WAIT_FOR_NEXT_GAME = 'WAIT_FOR_NEXT_GAME',
  WAIT_FOR_PLAYER_DECISION = 'WAIT_FOR_PLAYER_DECISION',
  YOU_PLAYED = 'YOU_PLAYED',
  ZERO = 'ZERO',
}

interface GameStatusData {
  id: number,
  text: string
}

interface gameStatuses {
  [GameResultEnum.PLACE_YOUR_BETS]?: GameStatusData;
  [GameResultEnum.MAKE_DECISION]?: GameStatusData;
  [GameResultEnum.CANCELED]?: GameStatusData;
  [GameResultEnum.PAUSED]?: GameStatusData;
  [GameResultEnum.DEALING]?: GameStatusData;
  [GameResultEnum.RESULT_READY]?: GameStatusData;
  [GameResultEnum.WAIT_FOR_GAME]?: GameStatusData;
  [GameResultEnum.PLACE_YOUR_BETS]?: GameStatusData;
  [GameResultEnum.NO_MORE_BETS]?: GameStatusData;
  [GameResultEnum.WAIT_FOR_NEXT_GAME]?: GameStatusData;
  [GameResultEnum.IDLE]?: GameStatusData;
  [GameResultEnum.LAST_BETS]?: GameStatusData;
  [GameResultEnum.WAIT_FOR_PLAYER_DECISION]?: GameStatusData;
  [GameResultEnum.SHOW_DEALER_CARDS]?: GameStatusData;
  [GameResultEnum.CALC_WINNERS]?: GameStatusData;
  [GameResultEnum.NOT_DECIDED]?: GameStatusData;
  [GameResultEnum.PLAYER_A_WINS]?: GameStatusData;
  [GameResultEnum.PLAYER_B_WINS]?: GameStatusData;
  [GameResultEnum.PUSH]?: GameStatusData;
  [GameResultEnum.BANKER_WINS]?: GameStatusData;
  [GameResultEnum.PLAYER_WINS]?: GameStatusData;
  [GameResultEnum.TIE_WINS]?: GameStatusData;
  [GameResultEnum.NO_STATUS]?: GameStatusData;
  [GameResultEnum.CLOSED]?: GameStatusData;
  [GameResultEnum.NOT_DECIED]?: GameStatusData;
  [GameResultEnum.RECORD_RESULTS]?: GameStatusData;
  [GameResultEnum.BAHAR]?: GameStatusData;
  [GameResultEnum.ANDAR]?: GameStatusData;
  [GameResultEnum.NUMBER_SELECTED]?: GameStatusData;
  [GameResultEnum.LIGHTNING]?: GameStatusData;
  [GameResultEnum.RED]?: GameStatusData;
  [GameResultEnum.BLACK]?: GameStatusData;
  [GameResultEnum.ZERO]?: GameStatusData;
  [GameResultEnum.BLUE]?: GameStatusData;
  [GameResultEnum.DRAGON_WINS]?: GameStatusData;
  [GameResultEnum.TIGER_WINS]?: GameStatusData;
}

interface Games {
  [GamesNamesEnum.AB]: gameStatuses;
  [GamesNamesEnum.BAC]: gameStatuses;
  [GamesNamesEnum.BJ]: gameStatuses;
  [GamesNamesEnum.DT]: gameStatuses;
  [GamesNamesEnum.RO]: gameStatuses;
  [GamesNamesEnum.SB]: gameStatuses;
  [GamesNamesEnum.TP2020]: gameStatuses;
  [GamesNamesEnum.TRO]: gameStatuses;
  [GamesNamesEnum.DRO]: gameStatuses;
  [GamesNamesEnum.TTC]: gameStatuses;
  [GamesNamesEnum.UBJ]: gameStatuses;
  [GamesNamesEnum.UP]: gameStatuses;
}

export const gameStatusMap: Games = {
  [GamesNamesEnum.BJ]: {
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 8, text: 'placeYourBets' },
    [GameResultEnum.MAKE_DECISION]: { id: 9, text: 'makeDecision' },
    [GameResultEnum.CANCELED]: { id: 7, text: 'canceled' },
    [GameResultEnum.PAUSED]: { id: 6, text: 'paused' },
    [GameResultEnum.DEALING]: { id: 0, text: 'dealCards' },
    // [StatusEnum.NO_MORE_BETS]: 0,
    [GameResultEnum.RESULT_READY]: { id: 10, text: 'showResults' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame' },
  },
  [GamesNamesEnum.UBJ]: {
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 8, text: 'placeYourBets' },
    [GameResultEnum.MAKE_DECISION]: { id: 9, text: 'makeDecision' },
    [GameResultEnum.CANCELED]: { id: 7, text: 'canceled' },
    [GameResultEnum.PAUSED]: { id: 6, text: 'paused' },
    [GameResultEnum.DEALING]: { id: 0, text: 'dealCards' },
    // [StatusEnum.NO_MORE_BETS]: 0,
    [GameResultEnum.RESULT_READY]: { id: 10, text: 'showResults' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame' },
  },
  [GamesNamesEnum.TP2020]: {
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.IDLE]: { id: 0, text: 'idle' },
    // [StatusEnum.PLACE_YOUR_BETS]: {id:0, text:'waitForPlayers'},
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 1, text: 'pleasePlaceBets' },
    [GameResultEnum.LAST_BETS]: { id: 0, text: 'lastBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 3, text: 'noMoreBets' },
    [GameResultEnum.WAIT_FOR_PLAYER_DECISION]: { id: 0, text: 'waitForPlayersDecision' },
    [GameResultEnum.SHOW_DEALER_CARDS]: { id: 0, text: 'showDealerCards' },
    [GameResultEnum.CALC_WINNERS]: { id: 0, text: 'calcWinners' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'showResults' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
    [GameResultEnum.NOT_DECIDED]: { id: 0, text: 'notDecided' },
    [GameResultEnum.PLAYER_A_WINS]: { id: 0, text: 'PvPHandAWins' },
    [GameResultEnum.PLAYER_B_WINS]: { id: 0, text: 'PvPHandBWins' },
    [GameResultEnum.PUSH]: { id: 0, text: 'push' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame' },
  },
  [GamesNamesEnum.BAC]: {
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 1, text: 'pleasePlaceBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 3, text: 'noMoreBets' },
    [GameResultEnum.NOT_DECIDED]: { id: 0, text: 'notDecided' },
    [GameResultEnum.BANKER_WINS]: { id: 0, text: 'bankerWins' },
    [GameResultEnum.PLAYER_WINS]: { id: 0, text: 'statusPanel.PlayerWins' },
    [GameResultEnum.TIE_WINS]: { id: 0, text: 'tieWins' },
  },
  [GamesNamesEnum.TTC]: {
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 1, text: 'pleasePlaceBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 3, text: 'noMoreBets' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'TT.RoundResult.resultReady' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
  },
  [GamesNamesEnum.DT]: {
    [GameResultEnum.NO_STATUS]: { id: 0, text: 'noStatus' },
    [GameResultEnum.CLOSED]: { id: 0, text: 'closed' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 1, text: 'placeYourBets' },
    [GameResultEnum.LAST_BETS]: { id: 0, text: 'lastBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 3, text: 'noMoreBets' },
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.NOT_DECIED]: { id: 0, text: 'notDecided' },
    [GameResultEnum.TIGER_WINS]: { id: 0, text: 'tigerWins' },
    [GameResultEnum.DRAGON_WINS]: { id: 0, text: 'dragonWins' },
    [GameResultEnum.TIE_WINS]: { id: 0, text: 'tieWins' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'showResults' },
  },
  [GamesNamesEnum.SB]: {
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 0, text: 'placeYourBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 0, text: 'noMoreBets' },
    [GameResultEnum.RECORD_RESULTS]: { id: 0, text: 'RecordResults' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'TT.RoundResult.resultReady' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
  },
  [GamesNamesEnum.AB]: {
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 0, text: 'pleasePlaceBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 0, text: 'noMoreBets' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
    [GameResultEnum.NO_STATUS]: { id: 0, text: 'noResult' },
    [GameResultEnum.BAHAR]: { id: 0, text: 'bahar' },
    [GameResultEnum.ANDAR]: { id: 0, text: 'andar' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame' },
    [GameResultEnum.WAIT_FOR_GAME]: { id: 0, text: 'waitForGame' },
  },
  [GamesNamesEnum.UP]: {
    [GameResultEnum.IDLE]: { id: 0, text: 'Idle' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 0, text: 'placeYourBets' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'showResults' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
    [GameResultEnum.DEALING]: { id: 0, text: 'dealing' },
    [GameResultEnum.WAIT_FOR_PLAYER_DECISION]: { id: 0, text: 'waitForPlayersDecision' },
    [GameResultEnum.CLOSED]: { id: 0, text: 'closed' },
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame' },
  },
  [GamesNamesEnum.RO]: {
    [GameResultEnum.NO_STATUS]: { id: 0, text: 'none' },
    [GameResultEnum.CLOSED]: { id: 0, text: 'closed' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 1, text: 'pleasePlaceBets' },
    [GameResultEnum.LAST_BETS]: { id: 2, text: 'lastBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 3, text: 'noMoreBets' },
    [GameResultEnum.NUMBER_SELECTED]: { id: 0, text: 'numberSelected' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'resultReady' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.RED]: { id: 0, text: 'red' },
    [GameResultEnum.BLACK]: { id: 0, text: 'black' },
    [GameResultEnum.ZERO]: { id: 0, text: 'zero' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame'}
  },
  [GamesNamesEnum.DRO]: {
    [GameResultEnum.NO_STATUS]: { id: 0, text: 'none' },
    [GameResultEnum.CLOSED]: { id: 0, text: 'closed' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 1, text: 'pleasePlaceBets' },
    [GameResultEnum.LAST_BETS]: { id: 2, text: 'lastBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 3, text: 'noMoreBets' },
    [GameResultEnum.NUMBER_SELECTED]: { id: 0, text: 'numberSelected' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'resultReady' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.LIGHTNING]: { id: 0, text: 'lightingRound' },
    [GameResultEnum.RED]: { id: 0, text: 'red' },
    [GameResultEnum.ZERO]: { id: 0, text: 'zero' },
    [GameResultEnum.BLUE]: { id: 0, text: 'blue' },
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame'}
  },
  [GamesNamesEnum.TRO]: {
    [GameResultEnum.NO_STATUS]: { id: 0, text: 'none' },
    [GameResultEnum.CLOSED]: { id: 0, text: 'closed' },
    [GameResultEnum.PLACE_YOUR_BETS]: { id: 1, text: 'pleasePlaceBets' },
    [GameResultEnum.LAST_BETS]: { id: 2, text: 'lastBets' },
    [GameResultEnum.NO_MORE_BETS]: { id: 3, text: 'noMoreBets' },
    [GameResultEnum.NUMBER_SELECTED]: { id: 0, text: 'numberSelected' },
    [GameResultEnum.RESULT_READY]: { id: 0, text: 'resultReady' },
    [GameResultEnum.PAUSED]: { id: 0, text: 'paused' },
    [GameResultEnum.CANCELED]: { id: 0, text: 'canceled' },
    [GameResultEnum.RED]: { id: 0, text: 'red' },
    [GameResultEnum.BLACK]: { id: 0, text: 'black' },
    [GameResultEnum.ZERO]: { id: 0, text: 'zero' },
    [GameResultEnum.LIGHTNING] : { id: 8, text: 'lightingRound'},
    [GameResultEnum.WAIT_FOR_NEXT_GAME]: { id: 0, text: 'waitForNextGame'}
  },
}

export const resultReadyPhase = {
  [GamesNamesEnum.BJ]: [gameStatusMap[GamesNamesEnum.BJ][GameResultEnum.RESULT_READY].text],
  [GamesNamesEnum.UBJ]: [gameStatusMap[GamesNamesEnum.BJ][GameResultEnum.RESULT_READY].text],
  [GamesNamesEnum.DT]: [gameStatusMap[GamesNamesEnum.DT][GameResultEnum.DRAGON_WINS].text, gameStatusMap[GamesNamesEnum.DT][GameResultEnum.TIGER_WINS].text, gameStatusMap[GamesNamesEnum.DT][GameResultEnum.TIE_WINS].text],
  [GamesNamesEnum.TP2020]: [gameStatusMap[GamesNamesEnum.TP2020][GameResultEnum.PLAYER_A_WINS].text, gameStatusMap[GamesNamesEnum.TP2020][GameResultEnum.PLAYER_B_WINS].text, gameStatusMap[GamesNamesEnum.TP2020][GameResultEnum.PUSH].text, gameStatusMap[GamesNamesEnum.TP2020][GameResultEnum.RESULT_READY].text],
  [GamesNamesEnum.TTC]: [gameStatusMap[GamesNamesEnum.TTC][GameResultEnum.RESULT_READY].text],
  [GamesNamesEnum.RO]: [gameStatusMap[GamesNamesEnum.RO][GameResultEnum.RED].text, gameStatusMap[GamesNamesEnum.RO][GameResultEnum.BLACK].text, gameStatusMap[GamesNamesEnum.RO][GameResultEnum.ZERO].text],
  [GamesNamesEnum.DRO]: [gameStatusMap[GamesNamesEnum.DRO][GameResultEnum.RED].text, gameStatusMap[GamesNamesEnum.DRO][GameResultEnum.BLUE].text, gameStatusMap[GamesNamesEnum.DRO][GameResultEnum.ZERO].text],
  [GamesNamesEnum.TRO]: [gameStatusMap[GamesNamesEnum.TRO][GameResultEnum.RED].text, gameStatusMap[GamesNamesEnum.TRO][GameResultEnum.BLACK].text, gameStatusMap[GamesNamesEnum.TRO][GameResultEnum.ZERO].text],
}


export const enum ABPlaceYourBetsPhaseNumber {
  first = 1,
  second = 2
}
