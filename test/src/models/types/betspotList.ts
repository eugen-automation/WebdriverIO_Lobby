// import { RoSideBets } from './betspotList';

import { BJLocators, DTLocators, ROLocators, TTCLocators, UBJLocators } from "../../selectors/games/game.locators.ts";
import { BJBetspotsEnum, UBJBetspotsEnum, DTBetspotsEnum, TTCBetspotsEnum, ROBetspotsEnum, } from "../enums/betspots.enum.ts";
import { GamesNamesEnum } from "../enums/gameNames.enum.ts"


export type Betspot = {
    betType?: number;
    betspotLocator: string;
    chipLocator?: string;
    textLocator?: string;
    name: string;
}
export type RoBetspot = {

    betspotLocator: string;
    chipLocator: string;
    name: string;
    sideBets?: RoSideBets;

}
export type RoSideBets = {
    split: { betspotLocator: string, chipLocator: string },
    street: { betspotLocator: string, chipLocator: string },
    corner: { betspotLocator: string, chipLocator: string },
}

export type CardGame = {
    mainBets: Record<string, Betspot>;
    sideBets?: Record<string, Betspot>;
}

export type BallGame = {
    inside: Record<string, RoBetspot>;
    outside?: Record<string, RoBetspot>;
    racetrack?: Record<string, RoBetspot>;
}

export type DiceGame = {
    bets: Record<string, Betspot>;
}

export type BetSpotType = {
    [GamesNamesEnum.BJ]: CardGame;
    [GamesNamesEnum.UBJ]: CardGame;
    [GamesNamesEnum.AB]: CardGame;
    [GamesNamesEnum.BAC]: CardGame;
    [GamesNamesEnum.DT]: CardGame;
    [GamesNamesEnum.SB]: DiceGame;
    [GamesNamesEnum.TP]: CardGame;
    [GamesNamesEnum.TP2020]: CardGame;
    [GamesNamesEnum.TTC]: CardGame;
    [GamesNamesEnum.UP]: CardGame;
    [GamesNamesEnum.RO]: BallGame;
    [GamesNamesEnum.TRO]: BallGame;
    [GamesNamesEnum.DRO]: BallGame;
}

export const betspotList =
{
    [GamesNamesEnum.BJ]: {
        mainBets:
        {
            [BJBetspotsEnum.Main]: {
                betType: 1,
                betspotLocator: BJLocators.mainBetspot,
                chipLocator: BJLocators.mainBetspotChip,
                name: 'Main',
            },
            [BJBetspotsEnum.BetBehind]:
            {
                betType: 2,
                betspotLocator: BJLocators.betBehind,
                chipLocator: BJLocators.betBehindBetspotChip,
                name: 'Bet Behind',
            }
        },

        sideBets: {
            [BJBetspotsEnum.PerfectPairs]:
            {
                betType: 40,
                betspotLocator: BJLocators.perfectPairs,
                chipLocator: BJLocators.perfectPairBetspotChip,
                name: 'Perfect Pairs',
            },
            [BJBetspotsEnum.TwentyOnePlusThree]:
            {
                betType: 41,
                betspotLocator: BJLocators.twentyonePlusThree,
                chipLocator: BJLocators.twentyonePlusThreeBetspotChip,
                name: '21+3',
            },
        },
    },
    [GamesNamesEnum.UBJ]: {
        mainBets: {
            [UBJBetspotsEnum.Main]: {
                betType: 1,
                betspotLocator: UBJLocators.mainBetspot,
                chipLocator: UBJLocators.mainBetspotChip,
                name: 'Main',
            },
        },
        sideBets: {
            [UBJBetspotsEnum.AnyPairs]:
            {
                betType: 40,
                betspotLocator: UBJLocators.anyPair,
                chipLocator: UBJLocators.anyPairBetspotChip,
                name: 'Any Pairs',
            },
            [UBJBetspotsEnum.TwentyOnePlusThree]:
            {
                betType: 41,
                betspotLocator: UBJLocators.twentyonePlusThree,
                chipLocator: UBJLocators.twentyonePlusThreeBetspotChip,
                name: '21+3',
            },
            [UBJBetspotsEnum.Hot3]:
            {
                betType: 42,
                betspotLocator: UBJLocators.hot3,
                chipLocator: UBJLocators.hot3BetspotChip,
                name: 'Hot 3',
            },
            [UBJBetspotsEnum.BustIt]:
            {
                betType: 43,
                betspotLocator: UBJLocators.bustIt,
                chipLocator: UBJLocators.bustItBetspotChip,
                name: 'Bust It',
            },
        }
    },
    [GamesNamesEnum.AB]: {
        mainBets:
        {
            firstBahar: {
                betType: 1,
                betspotLocator: '[data-name="bet-first-bahar"]',
                chipLocator: '',
                name: 'First Bahar',
            },
            secondBahar:
            {
                betType: 2,
                betspotLocator: '[data-name="bet-second-bahar"]',
                chipLocator: '',
                name: 'Second Bahar',
            },
            firstAndar: {
                betType: 3,
                betspotLocator: '[data-name="bet-first-andar"]',
                chipLocator: '',
                name: 'First Andar',
            },
            secondAndar:
            {
                betType: 4,
                betspotLocator: '[data-name="bet-second-andar"]',
                chipLocator: '',
                name: 'Second Andar',
            },
        },

        sideBets: {
            sideFirstBahar:
            {
                betType: 29,
                betspotLocator: '[data-name="side-bet-bahar"]',
                chipLocator: '',
                name: 'Side Bahar',
            },
            sideFirstAndar:
            {
                betType: 30,
                betspotLocator: '[data-name="side-bet-andar"]',
                chipLocator: '',
                name: 'Side Andar',
            },
        },
    },
    [GamesNamesEnum.BAC]: {
        mainBets:
        {
            banker: {
                betType: 1,
                betspotLocator: '[data-name="main-bet banker"]',
                chipLocator: '',
                name: 'Banker',
            },
            player:
            {
                betType: 2,
                betspotLocator: '[data-name="main-bet player"]',
                chipLocator: '',
                name: 'Player',
            },
            tie: {
                betType: 3,
                betspotLocator: '[data-name="main-bet tie"]',
                chipLocator: '',
                name: 'Tie',
            },
        },

        sideBets: {
            bankerPair:
            {
                betType: 11,
                betspotLocator: '[data-name="side-bet bankerPair"]',
                chipLocator: '',
                name: 'Banker Pair',
            },
            playerPair:
            {
                betType: 10,
                betspotLocator: '[data-name="side-bet playerPair"]',
                chipLocator: '',
                name: 'Player Pair',
            },
            superSix:
            {
                betType: 13,
                betspotLocator: '[data-name="side-bet superSix"]',
                chipLocator: '[data-testid="side-bet-chip twentyonePlusThree"]',
                name: 'Super Six',
            },
            dragon:
            {
                betType: 14,
                betspotLocator: '[data-name="side-bet dragon"]',
                chipLocator: '',
                name: 'Dragon',
            },
            tiger:
            {
                betType: 15,
                betspotLocator: '[data-name="side-bet tiger"]',
                chipLocator: '',
                name: 'Tiger',
            },
        },
    },
    [GamesNamesEnum.DT]: {
        mainBets:
        {
            [DTBetspotsEnum.Dragon]: {
                betType: 1,
                betspotLocator: DTLocators.dragon,
                chipLocator: DTLocators.dragonChip,
                name: 'Dragon',
            },
            [DTBetspotsEnum.Tiger]:
            {
                betType: 2,
                betspotLocator: DTLocators.tiger,
                chipLocator: DTLocators.tigerChip,
                name: 'Tiger',
            },
            [DTBetspotsEnum.Tie]:
            {
                betType: 3,
                betspotLocator: DTLocators.tie,
                chipLocator: DTLocators.tieChip,
                name: 'Tie',
            }
        },

        sideBets: {
            [DTBetspotsEnum.DragonDiamonds]:
            {
                betType: 25,
                betspotLocator: DTLocators.dragonDiamonds,
                chipLocator: DTLocators.dragonDiamondsChip,
                name: 'Dragon Diamond',
            },
            [DTBetspotsEnum.DragonClubs]:
            {
                betType: 28,
                betspotLocator: DTLocators.dragonClubs,
                chipLocator: DTLocators.dragonClubsChip,
                name: 'Dragon Clubs',
            },
            [DTBetspotsEnum.DragonHearts]:
            {
                betType: 27,
                betspotLocator: DTLocators.dragonHearts,
                chipLocator: DTLocators.dragonHeartsChip,
                name: 'Dragon Hearts',
            },
            [DTBetspotsEnum.DragonSpades]:
            {
                betType: 26,
                betspotLocator: DTLocators.dragonSpades,
                chipLocator: DTLocators.dragonSpadesChip,
                name: 'Dragon Spades',
            },
            [DTBetspotsEnum.TigerDiamonds]:
            {
                betType: 21,
                betspotLocator: DTLocators.tigerDiamonds,
                chipLocator: DTLocators.tigerDiamondsChip,
                name: 'Tiger Diamonds',
            },
            [DTBetspotsEnum.TigerHearts]:
            {
                betType: 23,
                betspotLocator: DTLocators.tigerHearts,
                chipLocator: DTLocators.tigerHeartsChip,
                name: 'Tiger Hearts',
            },
            [DTBetspotsEnum.TigerClubs]:
            {
                betType: 24,
                betspotLocator: DTLocators.tigerClubs,
                chipLocator: DTLocators.tigerClubsChip,
                name: 'Tiger Clubs',
            },
            [DTBetspotsEnum.TigerSpades]:
            {
                betType: 22,
                betspotLocator: DTLocators.tigerSpades,
                chipLocator: DTLocators.tigerSpadesChip,
                name: 'Tiger Spades',
            },
            [DTBetspotsEnum.DragonSmall]:
            {
                betType: 18,
                betspotLocator: DTLocators.dragonSmall,
                chipLocator: DTLocators.dragonSmallChip,
                name: 'Dragon Small',
            },
            [DTBetspotsEnum.DragonBig]:
            {
                betType: 17,
                betspotLocator: DTLocators.dragonBig,
                chipLocator: DTLocators.dragonBigChip,
                name: 'Dragon Big',
            },
            [DTBetspotsEnum.TigerSmall]:
            {
                betType: 20,
                betspotLocator: DTLocators.tigerSmall,
                chipLocator: DTLocators.tigerSmallChip,
                name: 'Tiger Small',
            },
            [DTBetspotsEnum.TigerBig]:
            {
                betType: 19,
                betspotLocator: DTLocators.tigerBig,
                chipLocator: DTLocators.tigerBigChip,
                name: 'Tiger Big',
            },
        },
    },
    [GamesNamesEnum.SB]: {
        bets:
        {
            bet111: {
                betType: 1,
                betspotLocator: '[data-name="bet111"]',
                chipLocator: '[data-name=""]',
                name: 'bet 1 1 1',
            },
            bet222: {
                betType: 1,
                betspotLocator: '[data-name="bet222"]',
                chipLocator: '[data-name=""]',
                name: 'bet 2 2 2',
            },
            bet333: {
                betType: 1,
                betspotLocator: '[data-name="bet333"]',
                chipLocator: '[data-name=""]',
                name: 'bet 3 3 3',
            },
            bet444: {
                betType: 1,
                betspotLocator: '[data-name="bet444"]',
                chipLocator: '[data-name=""]',
                name: 'bet 4 4 4',
            },
            bet555: {
                betType: 1,
                betspotLocator: '[data-name="bet555"]',
                chipLocator: '[data-name=""]',
                name: 'bet 5 5 5',
            },
            bet666: {
                betType: 1,
                betspotLocator: '[data-name="bet666"]',
                chipLocator: '[data-name=""]',
                name: 'bet 6 6 6',
            },
            bet11: {
                betType: 1,
                betspotLocator: '[data-name="bet1-1"]',
                chipLocator: '[data-name=""]',
                name: 'bet 1 1',
            },
            bet22: {
                betType: 1,
                betspotLocator: '[data-name="bet2-2"]',
                chipLocator: '[data-name=""]',
                name: 'bet 2 2',
            },
            bet33: {
                betType: 1,
                betspotLocator: '[data-name="bet3-3"]',
                chipLocator: '[data-name=""]',
                name: 'bet 3 3',
            },
            bet44: {
                betType: 1,
                betspotLocator: '[data-name="bet4-4"]',
                chipLocator: '[data-name=""]',
                name: 'bet 4 4',
            },
            bet55: {
                betType: 1,
                betspotLocator: '[data-name="bet5-5"]',
                chipLocator: '[data-name=""]',
                name: 'bet 5 5',
            },
            bet66: {
                betType: 1,
                betspotLocator: '[data-name="bet6-6"]',
                chipLocator: '[data-name=""]',
                name: 'bet 6 6',
            },
            betOne: {
                betType: 1,
                betspotLocator: '[data-name="betOne"]',
                chipLocator: '[data-name=""]',
                name: 'bet 1',
            },
            betTwo: {
                betType: 1,
                betspotLocator: '[data-name="betTwo"]',
                chipLocator: '[data-name=""]',
                name: 'bet 2',
            },
            betThree: {
                betType: 1,
                betspotLocator: '[data-name="betThree"]',
                chipLocator: '[data-name=""]',
                name: 'bet 3',
            },
            betFour: {
                betType: 1,
                betspotLocator: '[data-name="betFour"]',
                chipLocator: '[data-name=""]',
                name: 'bet 4',
            },
            betFive: {
                betType: 1,
                betspotLocator: '[data-name="betFive"]',
                chipLocator: '[data-name=""]',
                name: 'bet 5',
            },
            betSix: {
                betType: 1,
                betspotLocator: '[data-name="betSix"]',
                chipLocator: '[data-name=""]',
                name: 'bet 6',
            },
            big: {
                betType: 1,
                betspotLocator: '[data-name="big"]',
                chipLocator: '[data-name=""]',
                name: 'bet Big',
            },
            small: {
                betType: 1,
                betspotLocator: '[data-name="small"]',
                chipLocator: '[data-name=""]',
                name: 'bet Small',
            },
            anyTripple: {
                betType: 1,
                betspotLocator: '[data-name="anyTripple"]',
                chipLocator: '[data-name=""]',
                name: 'bet Any Tripple',
            },
        },
    },
    [GamesNamesEnum.TP2020]: {
        mainBets:
        {
            playerA: {
                betType: 1,
                betspotLocator: '[data-name="main-bet playera"]',
                chipLocator: '[data-name=""]',
                textLocator: '[for="playerA"]',
                name: 'Player A',
            },
            playerB: {
                betType: 1,
                betspotLocator: '[data-name="main-bet playerb"]',
                chipLocator: '[data-name=""]',
                textLocator: '[for="playerB"]',
                name: 'Player B',
            },
        },
        sideBets: {
            playerAPairPlus: {
                betType: 33,
                betspotLocator: '[data-name="side-bet playera"]',
                textLocator: '//div[@data-name="side-bet playera"]/div',
                name: 'Player A Pair Plus',
            },
            playerBPairPlus: {
                betType: 34,
                betspotLocator: '[data-name="side-bet playerb"]',
                textLocator: '//div[@data-name="side-bet playerb"]/div',
                name: 'Player B Pair Plus',
            },
            bonus3Plus3: {
                betType: 35,
                betspotLocator: '[data-name="side-bet 3plus3Bonus"]',
                chipLocator: '',
                name: '3+3 Bonus',
            },
        },
    },
    [GamesNamesEnum.TTC]: {
        mainBets:
        {
            [TTCBetspotsEnum.Player8Bet]: {
                betType: 1,
                betspotLocator: TTCLocators.player8Bet,
                chipLocator: TTCLocators.player8BetChip,
                textLocator: TTCLocators.player8Text,
                name: 'Player 8 Bet',
            },
            [TTCBetspotsEnum.Player9Bet]:
            {
                betType: 2,
                betspotLocator: TTCLocators.player9Bet,
                chipLocator: TTCLocators.player9BetChip,
                textLocator: TTCLocators.player9Text,
                name: 'Player 9 Bet',
            },
            [TTCBetspotsEnum.Player10Bet]:
            {
                betType: 2,
                betspotLocator: TTCLocators.player10Bet,
                chipLocator: TTCLocators.player10BetChip,
                textLocator: TTCLocators.player10Text,
                name: 'Player 10 Bet',
            },
            [TTCBetspotsEnum.Player11Bet]:
            {
                betType: 2,
                betspotLocator: TTCLocators.player11Bet,
                chipLocator: TTCLocators.player11BetChip,
                textLocator: TTCLocators.player11Text,
                name: 'Player 11 Bet',
            },
        },
        sideBets: {
            [TTCBetspotsEnum.Player8Lay]: {
                betType: 36,
                betspotLocator: TTCLocators.player8Lay,
                chipLocator: TTCLocators.player8LayChip,
                name: 'Player 8 Lay',
            },
            [TTCBetspotsEnum.Player9Lay]:
            {
                betType: 37,
                betspotLocator: TTCLocators.player9Lay,
                chipLocator: TTCLocators.player9LayChip,
                name: 'Player 9 Lay',
            },
            [TTCBetspotsEnum.Player10Lay]:
            {
                betType: 38,
                betspotLocator: TTCLocators.player10Lay,
                chipLocator: TTCLocators.player10LayChip,
                name: 'Player 10 Lay',
            },
            [TTCBetspotsEnum.Player11Lay]:
            {
                betType: 39,
                betspotLocator: TTCLocators.player11Lay,
                chipLocator: TTCLocators.player11LayChip,
                name: 'Player 11 Lay',
            },
        },
    },
    [GamesNamesEnum.UP]: {
        mainBets:
        {
            ante: {
                betType: 1,
                betspotLocator: '[data-name="main-bet ante"]',
                chipLocator: '',
                name: 'Ante',
            },
            // to be added blind
        },

        sideBets: {
            trips: {
                betType: 2,
                betspotLocator: '[data-name="side-bet trips"]',
                chipLocator: '',
                name: 'Trips',
            }
        },
    },
    [GamesNamesEnum.RO]: {
        inside:
        {

            [ROBetspotsEnum.Zero]: {
                betspotLocator: ROLocators.inside.zero.betspot,
                chipLocator: ROLocators.inside.zero.chip,
                name: 'Straight Up Zero',
            },
            [ROBetspotsEnum.One]: {
                betspotLocator: ROLocators.inside.one.betspot,
                chipLocator: ROLocators.inside.one.chip,
                name: 'Straight Up One',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.one.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.one.sideBets.left.chip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.one.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.one.sideBets.bottom.chip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.one.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.one.sideBets.corner.chip,
                    }
                }
            },
            [ROBetspotsEnum.Two]: {
                betspotLocator: ROLocators.inside.two.betspot,
                chipLocator: ROLocators.inside.two.chip,
                name: 'Straight Up Two',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.two.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.two.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.two.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.two.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.two.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.two.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Three]: {
                betspotLocator: ROLocators.inside.three.betspot,
                chipLocator: ROLocators.inside.three.chip,
                name: 'Straight Up Three',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.three.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.three.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.three.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.three.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.three.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.three.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Four]: {
                betspotLocator: ROLocators.inside.four.betspot,
                chipLocator: ROLocators.inside.four.chip,
                name: 'Straight Up Four',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.four.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.four.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.four.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.four.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.four.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.four.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Five]: {
                betspotLocator: ROLocators.inside.five.betspot,
                chipLocator: ROLocators.inside.five.chip,
                name: 'Straight Up Five',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.five.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.five.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.five.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.five.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.five.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.five.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Six]: {
                betspotLocator: ROLocators.inside.six.betspot,
                chipLocator: ROLocators.inside.six.chip,
                name: 'Straight Up Six',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.six.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.six.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.six.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.six.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.six.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.six.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Seven]: {
                betspotLocator: ROLocators.inside.seven.betspot,
                chipLocator: ROLocators.inside.seven.chip,
                name: 'Straight Up Seven',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.seven.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.seven.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.seven.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.seven.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.seven.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.seven.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Eight]: {
                betspotLocator: ROLocators.inside.eight.betspot,
                chipLocator: ROLocators.inside.eight.chip,
                name: 'Straight Up Eight',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.eight.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.eight.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.eight.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.eight.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.eight.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.eight.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Nine]: {
                betspotLocator: ROLocators.inside.nine.betspot,
                chipLocator: ROLocators.inside.nine.chip,
                name: 'Straight Up Nine',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.nine.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.nine.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.nine.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.nine.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.nine.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.nine.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    },
                },
            },
            [ROBetspotsEnum.Ten]: {
                betspotLocator: ROLocators.inside.ten.betspot,
                chipLocator: ROLocators.inside.ten.chip,
                name: 'Straight Up Ten',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.ten.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.ten.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.ten.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.ten.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.ten.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.ten.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Eleven]: {
                betspotLocator: ROLocators.inside.eleven.betspot,
                chipLocator: ROLocators.inside.eleven.chip,
                name: 'Straight Up Eleven',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.eleven.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.eleven.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.eleven.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.eleven.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.eleven.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.eleven.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twelve]: {
                betspotLocator: ROLocators.inside.twelve.betspot,
                chipLocator: ROLocators.inside.twelve.chip,
                name: 'Straight Up Twelve',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twelve.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twelve.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twelve.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twelve.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twelve.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twelve.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirteen]: {
                betspotLocator: ROLocators.inside.thirteen.betspot,
                chipLocator: ROLocators.inside.thirteen.chip,
                name: 'Straight Up Thirteen',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirteen.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirteen.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirteen.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Fourteen]: {
                betspotLocator: ROLocators.inside.fourteen.betspot,
                chipLocator: ROLocators.inside.fourteen.chip,
                name: 'Straight Up Fourteen',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.fourteen.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.fourteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.fourteen.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.fourteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.fourteen.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.fourteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Fifteen]: {
                betspotLocator: ROLocators.inside.fifteen.betspot,
                chipLocator: ROLocators.inside.fifteen.chip,
                name: 'Straight Up Fifteen',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.fifteen.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.fifteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.fifteen.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.fifteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.fifteen.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.fifteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Sixteen]: {
                betspotLocator: ROLocators.inside.sixteen.betspot,
                chipLocator: ROLocators.inside.sixteen.chip,
                name: 'Straight Up Sixteen',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.sixteen.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.sixteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.sixteen.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.sixteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.sixteen.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.sixteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Seventeen]: {
                betspotLocator: ROLocators.inside.seventeen.betspot,
                chipLocator: ROLocators.inside.seventeen.chip,
                name: 'Straight Up Seventeen',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.seventeen.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.seventeen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.seventeen.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.seventeen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.seventeen.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.seventeen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Eighteen]: {
                betspotLocator: ROLocators.inside.eighteen.betspot,
                chipLocator: ROLocators.inside.eighteen.chip,
                name: 'Straight Up Eighteen',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.eighteen.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.eighteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.eighteen.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.eighteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.eighteen.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.eighteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Nineteen]: {
                betspotLocator: ROLocators.inside.nineteen.betspot,
                chipLocator: ROLocators.inside.nineteen.chip,
                name: 'Straight Up Nineteen',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.nineteen.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.nineteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.nineteen.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.nineteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.nineteen.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.nineteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twenty]: {
                betspotLocator: ROLocators.inside.twenty.betspot,
                chipLocator: ROLocators.inside.twenty.chip,
                name: 'Straight Up Twenty',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twenty.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twenty.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twenty.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twenty.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twenty.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twenty.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentyone]: {
                betspotLocator: ROLocators.inside.twentyone.betspot,
                chipLocator: ROLocators.inside.twentyone.chip,
                name: 'Straight Up Twenty-One',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentyone.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentyone.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentyone.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentyone.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentyone.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentyone.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentytwo]: {
                betspotLocator: ROLocators.inside.twentytwo.betspot,
                chipLocator: ROLocators.inside.twentytwo.chip,
                name: 'Straight Up Twenty-Two',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentythree]: {
                betspotLocator: ROLocators.inside.twentythree.betspot,
                chipLocator: ROLocators.inside.twentythree.chip,
                name: 'Straight Up Twenty-Three',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentythree.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentythree.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentythree.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentythree.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentythree.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentythree.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentyfour]: {
                betspotLocator: ROLocators.inside.twentyfour.betspot,
                chipLocator: ROLocators.inside.twentyfour.chip,
                name: 'Straight Up Twenty-Four',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentyfive]: {
                betspotLocator: ROLocators.inside.twentyfive.betspot,
                chipLocator: ROLocators.inside.twentyfive.chip,
                name: 'Straight Up Twenty-Five',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentysix]: {
                betspotLocator: ROLocators.inside.twentysix.betspot,
                chipLocator: ROLocators.inside.twentysix.chip,
                name: 'Straight Up Twenty-Six',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentysix.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentysix.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentysix.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentysix.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentysix.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentysix.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentyseven]: {
                betspotLocator: ROLocators.inside.twentyseven.betspot,
                chipLocator: ROLocators.inside.twentyseven.chip,
                name: 'Straight Up Twenty-Seven',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentyeight]: {
                betspotLocator: ROLocators.inside.twentyeight.betspot,
                chipLocator: ROLocators.inside.twentyeight.chip,
                name: 'Straight Up Twenty-Eight',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Twentynine]: {
                betspotLocator: ROLocators.inside.twentynine.betspot,
                chipLocator: ROLocators.inside.twentynine.chip,
                name: 'Straight Up Twenty-Nine',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.twentynine.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.twentynine.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.twentynine.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.twentynine.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.twentynine.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.twentynine.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirty]: {
                betspotLocator: ROLocators.inside.thirty.betspot,
                chipLocator: ROLocators.inside.thirty.chip,
                name: 'Straight Up Thirty',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirty.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirty.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirty.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirty.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirty.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirty.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirtyone]: {
                betspotLocator: ROLocators.inside.thirtyone.betspot,
                chipLocator: ROLocators.inside.thirtyone.chip,
                name: 'Straight Up Thirty-One',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirtytwo]: {
                betspotLocator: ROLocators.inside.thirtytwo.betspot,
                chipLocator: ROLocators.inside.thirtytwo.chip,
                name: 'Straight Up Thirty-Two',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirtythree]: {
                betspotLocator: ROLocators.inside.thirtythree.betspot,
                chipLocator: ROLocators.inside.thirtythree.chip,
                name: 'Straight Up Thirty-Three',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirtyfour]: {
                betspotLocator: ROLocators.inside.thirtyfour.betspot,
                chipLocator: ROLocators.inside.thirtyfour.chip,
                name: 'Straight Up Thirty-Four',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirtyfive]: {
                betspotLocator: ROLocators.inside.thirtyfive.betspot,
                chipLocator: ROLocators.inside.thirtyfive.chip,
                name: 'Straight Up Thirty-Five',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
            [ROBetspotsEnum.Thirtysix]: {
                betspotLocator: ROLocators.inside.thirtysix.betspot,
                chipLocator: ROLocators.inside.thirtysix.chip,
                name: 'Straight Up Thirty-Six',
                sideBets: {
                    split: {
                        betspotLocator: ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.left,
                        chipLocator: ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip,
                    },
                    street: {
                        betspotLocator: ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.bottom,
                        chipLocator: ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip,
                    },
                    corner: {
                        betspotLocator: ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.corner,
                        chipLocator: ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip,
                    }
                }
            },
        },
        outside: {

            [ROBetspotsEnum.DozenFirst]:
            {
                betspotLocator: ROLocators.outside.dozenFirst,
                chipLocator: ROLocators.outside.dozenFirstChip,
                name: 'Dozen First',
            },
            [ROBetspotsEnum.DozenSecond]:
            {
                betspotLocator: ROLocators.outside.dozenSecond,
                chipLocator: ROLocators.outside.dozenSecondChip,
                name: 'Dozen Second',
            },
            [ROBetspotsEnum.DozenThird]:
            {
                betspotLocator: ROLocators.outside.dozenThird,
                chipLocator: ROLocators.outside.dozenThirdChip,
                name: 'Dozen ',
            },
            [ROBetspotsEnum.OneToEighteen]:
            {
                betspotLocator: ROLocators.outside.oneto18,
                chipLocator: ROLocators.outside.oneto18Chip,
                name: '1-18',
            },
            [ROBetspotsEnum.NineteenToThirtysix]:
            {
                betspotLocator: ROLocators.outside.nineteento36,
                chipLocator: ROLocators.outside.nineteento36Chip,
                name: '19-36',
            },
            [ROBetspotsEnum.Even]:
            {
                betspotLocator: ROLocators.outside.even,
                chipLocator: ROLocators.outside.evenChip,
                name: 'Even',
            },
            [ROBetspotsEnum.Odd]:
            {
                betspotLocator: ROLocators.outside.odd,
                chipLocator: ROLocators.outside.oddChip,
                name: 'Odd',
            },
            [ROBetspotsEnum.Red]:
            {
                betspotLocator: ROLocators.outside.red,
                chipLocator: ROLocators.outside.redChip,
                name: 'Red',
            },
            [ROBetspotsEnum.Black]:
            {
                betspotLocator: ROLocators.outside.black,
                chipLocator: ROLocators.outside.blackChip,
                name: 'Black',
            },
            [ROBetspotsEnum.ColumnThird]:
            {
                betspotLocator: ROLocators.outside.columnThird,
                chipLocator: ROLocators.outside.columnThirdChip,
                name: '2 to 1 Column Third',
            },
            [ROBetspotsEnum.ColumnSecond]:
            {
                betspotLocator: ROLocators.outside.columnSecond,
                chipLocator: ROLocators.outside.columnSecondChip,
                name: '2 to 1 Column Second',
            },
            [ROBetspotsEnum.ColumnFirst]:
            {
                betspotLocator: ROLocators.outside.columnFirst,
                chipLocator: ROLocators.outside.columnFirstChip,
                name: '2 to 1 Column First',
            },
        },
        racetrack: {
            [ROBetspotsEnum.Tier]: {
                betspotLocator: ROLocators.racetrack.combinedBetspots.tier,
                chipLocator: ROLocators.racetrack.combinedBetspots.tierChip,
                name: 'Racetrack Tier',
            },
            [ROBetspotsEnum.Orphelins]: {
                betspotLocator: ROLocators.racetrack.combinedBetspots.orphelins,
                chipLocator: ROLocators.racetrack.combinedBetspots.orphelinsChip,
                name: 'Racetrack Orphelins',
            },
            [ROBetspotsEnum.VoisinsDuZero]: {
                betspotLocator: ROLocators.racetrack.combinedBetspots.voisinsDuZero,
                chipLocator: ROLocators.racetrack.combinedBetspots.voisinsDuZeroChip,
                name: 'Racetrack Voisins-du-Zero',
            },
        }
    },
}

betspotList[GamesNamesEnum.DRO] = {
    ...betspotList[GamesNamesEnum.RO]
}

betspotList[GamesNamesEnum.TRO] = {
    ...betspotList[GamesNamesEnum.RO]
}















