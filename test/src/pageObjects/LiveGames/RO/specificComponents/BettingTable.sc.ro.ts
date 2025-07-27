// import { generateRandomNumber } from '../../../../helpers/generalLogic.helper.ts';
import { ROBetspotsEnum } from '../../../../models/enums/betspots.enum.ts';
import { GamesNamesEnum } from '../../../../models/enums/gameNames.enum.ts';
import { ROLocators } from "../../../../selectors/games/specificComponents.sel.ts"
// import ChipsetPo from      '../../../components/Chipset.comp.po.ts';



class BettingTable {

    game: GamesNamesEnum;

    constructor(game) {
        this.game = game;
    }

    get container() {
        return {
            get betspot() { return $(ROLocators.bettingTableOnly) },
        }
    }

    get inside() {
        return {
            [ROBetspotsEnum.Zero]: {
                get betspot() { return $(ROLocators.inside.zero.betspot) },
                get chip() { return $(ROLocators.inside.zero.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get background() { return $(ROLocators.inside.zero.background) },
                get winHighlight() { return $(ROLocators.inside.zero.winHighlight) },
                get fontColor() { return $(ROLocators.inside.zero.fontColor) },
                get multiplier() { return $(ROLocators.inside.zero.multiplier) }
            },
            [ROBetspotsEnum.One]: {

                get betspot() { return $(ROLocators.inside.one.betspot) },
                get chip() { return $(ROLocators.inside.one.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.one.multiplier) },

                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.one.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.one.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.one.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.one.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.one.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.one.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },

            [ROBetspotsEnum.Two]: {

                get betspot() { return $(ROLocators.inside.two.betspot) },
                get chip() { return $(ROLocators.inside.two.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.two.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.two.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.two.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.two.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.two.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.two.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.two.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Three]: {

                get betspot() { return $(ROLocators.inside.three.betspot) },
                get chip() { return $(ROLocators.inside.three.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.three.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.three.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.three.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.three.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.three.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.three.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.three.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Four]: {

                get betspot() { return $(ROLocators.inside.four.betspot) },
                get chip() { return $(ROLocators.inside.four.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.four.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.four.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.four.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.four.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.four.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.four.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.four.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Five]: {

                get betspot() { return $(ROLocators.inside.five.betspot) },
                get chip() { return $(ROLocators.inside.five.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.five.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.five.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.five.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.five.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.five.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.five.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.five.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Six]: {

                get betspot() { return $(ROLocators.inside.six.betspot) },
                get chip() { return $(ROLocators.inside.six.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.six.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.six.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.six.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.six.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.six.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.six.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.six.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Seven]: {

                get betspot() { return $(ROLocators.inside.seven.betspot) },
                get chip() { return $(ROLocators.inside.seven.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.seven.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.seven.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.seven.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.seven.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.seven.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.seven.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.seven.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Eight]: {

                get betspot() { return $(ROLocators.inside.eight.betspot) },
                get chip() { return $(ROLocators.inside.eight.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.eight.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.eight.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.eight.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.eight.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.eight.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.eight.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.eight.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Nine]: {

                get betspot() { return $(ROLocators.inside.nine.betspot) },
                get chip() { return $(ROLocators.inside.nine.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.nine.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.nine.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.nine.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.nine.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.nine.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.nine.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.nine.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Ten]: {

                get betspot() { return $(ROLocators.inside.ten.betspot) },
                get chip() { return $(ROLocators.inside.ten.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.ten.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.ten.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.ten.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.ten.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.ten.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.ten.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.ten.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Eleven]: {

                get betspot() { return $(ROLocators.inside.eleven.betspot) },
                get chip() { return $(ROLocators.inside.eleven.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.eleven.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.eleven.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.eleven.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.eleven.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.eleven.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.eleven.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.eleven.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twelve]: {
                get betspot() { return $(ROLocators.inside.twelve.betspot) },
                get chip() { return $(ROLocators.inside.twelve.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twelve.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twelve.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twelve.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twelve.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twelve.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twelve.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twelve.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirteen]: {
                get betspot() { return $(ROLocators.inside.thirteen.betspot) },
                get chip() { return $(ROLocators.inside.thirteen.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirteen.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirteen.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirteen.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirteen.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Fourteen]: {
                get betspot() { return $(ROLocators.inside.fourteen.betspot) },
                get chip() { return $(ROLocators.inside.fourteen.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.fourteen.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.fourteen.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.fourteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.fourteen.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.fourteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.fourteen.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.fourteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Fifteen]: {
                get betspot() { return $(ROLocators.inside.fifteen.betspot) },
                get chip() { return $(ROLocators.inside.fifteen.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.fifteen.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.fifteen.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.fifteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.fifteen.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.fifteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.fifteen.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.fifteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Sixteen]: {
                get betspot() { return $(ROLocators.inside.sixteen.betspot) },
                get chip() { return $(ROLocators.inside.sixteen.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.sixteen.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.sixteen.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.sixteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.sixteen.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.sixteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.sixteen.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.sixteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Seventeen]: {
                get betspot() { return $(ROLocators.inside.seventeen.betspot) },
                get chip() { return $(ROLocators.inside.seventeen.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.seventeen.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.seventeen.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.seventeen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.seventeen.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.seventeen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.seventeen.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.seventeen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Eighteen]: {
                get betspot() { return $(ROLocators.inside.eighteen.betspot) },
                get chip() { return $(ROLocators.inside.eighteen.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.eighteen.multiplier) },

                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.eighteen.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.eighteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.eighteen.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.eighteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.eighteen.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.eighteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Nineteen]: {
                get betspot() { return $(ROLocators.inside.nineteen.betspot) },
                get chip() { return $(ROLocators.inside.nineteen.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.nineteen.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.nineteen.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.nineteen.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.nineteen.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.nineteen.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.nineteen.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.nineteen.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twenty]: {
                get betspot() { return $(ROLocators.inside.twenty.betspot) },
                get chip() { return $(ROLocators.inside.twenty.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twenty.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twenty.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twenty.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twenty.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twenty.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twenty.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twenty.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentyone]: {
                get betspot() { return $(ROLocators.inside.twentyone.betspot) },
                get chip() { return $(ROLocators.inside.twentyone.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentyone.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentyone.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentyone.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentyone.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentyone.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentyone.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentyone.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentytwo]: {
                get betspot() { return $(ROLocators.inside.twentytwo.betspot) },
                get chip() { return $(ROLocators.inside.twentytwo.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentytwo.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentytwo.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentythree]: {
                get betspot() { return $(ROLocators.inside.twentythree.betspot) },
                get chip() { return $(ROLocators.inside.twentythree.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentythree.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentythree.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentythree.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentythree.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentythree.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentythree.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentythree.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentyfour]: {
                get betspot() { return $(ROLocators.inside.twentyfour.betspot) },
                get chip() { return $(ROLocators.inside.twentyfour.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentyfour.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentyfour.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentyfive]: {
                get betspot() { return $(ROLocators.inside.twentyfive.betspot) },
                get chip() { return $(ROLocators.inside.twentyfive.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentyfive.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentyfive.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentysix]: {
                get betspot() { return $(ROLocators.inside.twentysix.betspot) },
                get chip() { return $(ROLocators.inside.twentysix.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentysix.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentysix.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentysix.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentysix.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentysix.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentysix.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentysix.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentyseven]: {
                get betspot() { return $(ROLocators.inside.twentyseven.betspot) },
                get chip() { return $(ROLocators.inside.twentyseven.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentyseven.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentyseven.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentyeight]: {
                get betspot() { return $(ROLocators.inside.twentyeight.betspot) },
                get chip() { return $(ROLocators.inside.twentyeight.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentyeight.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentyeight.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Twentynine]: {
                get betspot() { return $(ROLocators.inside.twentynine.betspot) },
                get chip() { return $(ROLocators.inside.twentynine.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.twentynine.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.twentynine.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.twentynine.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.twentynine.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.twentynine.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.twentynine.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.twentynine.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirty]: {
                get betspot() { return $(ROLocators.inside.thirty.betspot) },
                get chip() { return $(ROLocators.inside.thirty.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirty.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirty.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirty.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirty.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirty.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirty.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirty.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirtyone]: {
                get betspot() { return $(ROLocators.inside.thirtyone.betspot) },
                get chip() { return $(ROLocators.inside.thirtyone.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirtyone.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirtyone.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirtytwo]: {
                get betspot() { return $(ROLocators.inside.thirtytwo.betspot) },
                get chip() { return $(ROLocators.inside.thirtytwo.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirtytwo.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirtytwo.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirtythree]: {
                get betspot() { return $(ROLocators.inside.thirtythree.betspot) },
                get chip() { return $(ROLocators.inside.thirtythree.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirtythree.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirtythree.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirtyfour]: {
                get betspot() { return $(ROLocators.inside.thirtyfour.betspot) },
                get chip() { return $(ROLocators.inside.thirtyfour.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirtyfour.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirtyfour.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirtyfive]: {

                get betspot() { return $(ROLocators.inside.thirtyfive.betspot) },
                get chip() { return $(ROLocators.inside.thirtyfive.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirtyfive.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirtyfive.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            },
            [ROBetspotsEnum.Thirtysix]: {

                get betspot() { return $(ROLocators.inside.thirtysix.betspot) },
                get chip() { return $(ROLocators.inside.thirtysix.chip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get multiplier() { return $(ROLocators.inside.thirtysix.multiplier) },
                sideBets: {
                    split: {
                        get betspot() { return $(ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.left) },
                        get chip() { return $(ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.left + ROLocators.sideBets.leftChip) },
                    },
                    street: {
                        get betspot() { return $(ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.bottom) },
                        get chip() { return $(ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.bottom + ROLocators.sideBets.bottomChip) },
                    },
                    corner: {
                        get betspot() { return $(ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.corner) },
                        get chip() { return $(ROLocators.inside.thirtysix.betspot + ROLocators.sideBets.corner + ROLocators.sideBets.cornerChip) },
                    }
                }
            }
        }
    }

    get outside() {
        return {
            get [ROBetspotsEnum.DozenFirst]() {
                return {
                    get betspot() { return $(ROLocators.outside.dozenFirst) },
                    get chip() { return $(ROLocators.outside.dozenFirstChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
            get [ROBetspotsEnum.DozenSecond]() {
                return {
                    get betspot() { return $(ROLocators.outside.dozenSecond) },
                    get chip() { return $(ROLocators.outside.dozenSecondChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
            get [ROBetspotsEnum.DozenThird]() {
                return {
                    get betspot() { return $(ROLocators.outside.dozenThird) },
                    get chip() { return $(ROLocators.outside.dozenThirdChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
            get [ROBetspotsEnum.OneToEighteen]() {
                return {
                    get betspot() { return $(ROLocators.outside.oneto18) },
                    get chip() { return $(ROLocators.outside.oneto18Chip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
            get [ROBetspotsEnum.NineteenToThirtysix]() {
                return {
                    get betspot() { return $(ROLocators.outside.nineteento36) },
                    get chip() { return $(ROLocators.outside.nineteento36Chip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
            [ROBetspotsEnum.Even]: {

                get betspot() { return $(ROLocators.outside.even) },
                get chip() { return $(ROLocators.outside.evenChip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
            },
            [ROBetspotsEnum.Odd]: {

                get betspot() { return $(ROLocators.outside.odd) },
                get chip() { return $(ROLocators.outside.oddChip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },

            },
            get [ROBetspotsEnum.Red]() {
                return {
                    get betspot() { return $(ROLocators.outside.red) },
                    get chip() { return $(ROLocators.outside.redChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    get diamond() { return $(ROLocators.outside.redDiamond) },
                }
            },
            [ROBetspotsEnum.Black]: {
                get betspot() { return $(ROLocators.outside.black) },
                get chip() { return $(ROLocators.outside.blackChip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get diamond() { return $(ROLocators.outside.blackDiamond) },
            },
            [ROBetspotsEnum.Blue]: {
                get betspot() { return $(ROLocators.outside.blue) },
                get chip() { return $(ROLocators.outside.bblueChip) },
                get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                get chipText() { return $(ROLocators.chipSpecific.chipText) },
                get diamond() { return $(ROLocators.outside.blueDiamond) },
            },
            get [ROBetspotsEnum.ColumnThird]() {
                return {
                    get betspot() { return $(ROLocators.outside.columnThird) },
                    get chip() { return $(ROLocators.outside.columnThirdChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
            get [ROBetspotsEnum.ColumnSecond]() {
                return {
                    get betspot() { return $(ROLocators.outside.columnSecond) },
                    get chip() { return $(ROLocators.outside.columnSecondChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
            get [ROBetspotsEnum.ColumnFirst]() {
                return {
                    get betspot() { return $(ROLocators.outside.columnFirst) },
                    get chip() { return $(ROLocators.outside.columnFirstChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                }
            },
        }
    }



    getStraightUpForNumber(number: number, returnOnlyBetspotElem = false) {
        try {
            const allElems = Object.keys(this.inside);

            const key = allElems[number];
            const elems = this.inside[key]

            if (returnOnlyBetspotElem) {
                return elems.betspot;
            }
            else {
                return elems;
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }

    async getAllStraightUpAndSidesForNumber(number: number) {

        try {
            const straightUpWithSideBets = [];

            const straightUpElem = await this.getStraightUpForNumber(number);

            straightUpWithSideBets.push(straightUpElem.betspot);
            for (const item in straightUpElem.sideBets) {
                straightUpWithSideBets.push(straightUpElem.sideBets[item].betspot)
            }

            return straightUpWithSideBets;
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async getOutsideBetspotsForSpecificNumber(number: number) {
        try {
            const listOfOutsidebetspots = [];

            if (number !== 0) {

                // red black
                if (this.isRed(number)) {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.Red].betspot);
                }
                else {
                    if (this.game !== GamesNamesEnum.DRO) {
                        listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.Black].betspot);
                    }
                    else {
                        listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.Blue].betspot);
                    }
                };

                if (this.game !== GamesNamesEnum.DRO) {
                    // odd even
                    if (this.isEven(number)) {
                        listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.Even].betspot);
                    }
                    else {
                        listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.Odd].betspot);
                    };
                }


                // oneToEighteen
                if (this.isOneToEighteen(number)) {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.OneToEighteen].betspot);
                }
                else {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.NineteenToThirtysix].betspot);
                };


                // 1st 1-12, 2nd 1-12, 3rd 1-12
                if (this.isFirstTwelve(number)) {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.DozenFirst].betspot);
                }
                else if (this.isSecondTwelve(number)) {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.DozenSecond].betspot);
                } else {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.DozenThird].betspot);
                }

                // 1st 2 to 1, 2nd 2 to 1, 3rd 2 to 1
                if (this.isColumnFirstTwoToOne(number)) {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.ColumnFirst].betspot);
                }
                else if (this.isColumnSecondTwoToOne(number)) {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.ColumnSecond].betspot);
                } else {
                    listOfOutsidebetspots.push(this.outside[ROBetspotsEnum.ColumnThird].betspot);
                }
            }
            else {
                // for case is zero no outside betspots
            }
            // const resolvedBetspots = await Promise.all(listOfOutsidebetspots)
            return listOfOutsidebetspots;
        }
        catch (err) {
            throw new Error(err)
        }

    }

    isRed(number: number) {
        if (this.game !== GamesNamesEnum.DRO)
            return [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number);
        else
            return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35].includes(number);
    };
    isBlack(number: number) {
        return [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].includes(number);
    }
    isBlue(number: number) {
        return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36].includes(number);
    }
    isBlackOrBlue(number: number) {
        if (this.game !== GamesNamesEnum.DRO)
            return [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35].includes(number);
        else
            return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36].includes(number);
    };

    async isLucky(numberElement: ChainablePromiseElement) {
        console.log('LuckynumberElement :>> ',await numberElement.selector);
        
   
        const hasAfterContent =  await browser.execute((el) => {
            const styles =  window.getComputedStyle(el, '::after');
            return styles.content !== 'none' && styles.content !== '';
        }, numberElement as unknown as HTMLElement);

        console.log("hasAfterContent++++++++++++++++++++", hasAfterContent)
        return hasAfterContent;
} 

    isEven(number: number): boolean {
        return number % 2 === 0;
    };
    isOdd(number: number): boolean {
        return number % 2 !== 0;
    };
    isOneToEighteen(number: number) {
        return number >= 1 && number <= 18;
    };
    isNineteenToThirtysix(number: number) {
        return number >= 19 && number <= 36;
    };
    isFirstTwelve(number: number) {
        return number >= 1 && number <= 12;
    };
    isSecondTwelve(number: number) {
        return number >= 13 && number <= 24;
    };
    isThirdTwelve(number: number) {
        return number >= 25 && number <= 36;
    };
    isColumnFirstTwoToOne(number: number) {
        return [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34].includes(number);
    };
    isColumnSecondTwoToOne(number: number) {
        return [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35].includes(number);
    };
    isColumnThirdTwoToOne(number: number) {
        return [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].includes(number);
    };

    async getBetspotBackgroundColor(element: ChainablePromiseElement) {
        try {
            if (element) {
                const backgroundColor = await element.getCSSProperty('background-color');
                return backgroundColor?.value;
            }
            else {
                throw new Error('Element is undefined in getBetspotBackgroundColor');
            }
        }
        catch (err) {
            throw new Error(err)
        }
    };

    async getDiamondColor(element: ChainablePromiseElement) {
        try {
            if (element) {
                const diamondColor = await element.getCSSProperty('background-color');
                return diamondColor?.value;
            }
            else {
                throw new Error('Element is undefined in getBetspotBackgroundColor');
            }
        }
        catch (err) {
            throw new Error(err)
        }
    };

    async getBetspotFontColor(element: ChainablePromiseElement) {
        try {
            if (element) {
                const fontColor = await element.getCSSProperty('color');
                return fontColor?.value;
            }
            else {
                throw new Error('Element is undefined in getBetspotFontColor');
            }
        }
        catch (err) {
            throw new Error(err)
        }
    };

    async getBetspotText(element: ChainablePromiseElement) {
        try {
            if (element) {
                const text = await element.getText();
                // remove any multipliers related text
                const parsedText = text.replace(/X\d+\n/, '');
                return parsedText;
            }
            else {
                throw new Error('Element is undefined in getBetspotText');
            }
        }
        catch (err) {
            throw new Error(err)
        }
    };

    // Helper function to fetch properties for a single element
    async fetchBetspotProperties(element: ChainablePromiseElement) {
        try {
            const [backgroundColor, diamondColor, fontColor, text] = await Promise.all([
                this.getBetspotBackgroundColor(element),
                this.getDiamondColor(element),
                this.getBetspotFontColor(element),
                this.getBetspotText(element)
            ]);
            return { backgroundColor, diamondColor, fontColor, text };
        }
        catch (err) {
            throw new Error(err)
        }
    };

    // async placeBetOnRandomNumber(betAmount: number) {
    //     const randomStraightUpNumber = generateRandomNumber(0, 36);
    //     console.log('Random straight up number:', randomStraightUpNumber);

    //     const betspotToPlaceBet = await this.getStraightUpForNumber(randomStraightUpNumber, true);

    //     // select required chipset
    //     if (
    //         await ChipsetPo.selectChipByValueNew(betAmount)) {
    //         console.log('betDetails.betAmount :>> ', betAmount);

    //         // place bets
    //         // for (const elem of listOfBetspotsToPlaceBet) {
    //             await betspotToPlaceBet.click();
    //             browser.pause(250);
    //         // }
    //     }

    // }

}

export default BettingTable;