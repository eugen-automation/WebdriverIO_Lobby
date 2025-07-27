import { GamesNamesEnum } from "../../../../models/enums/gameNames.enum.ts";
import { ROLocators } from "../../../../selectors/games/specificComponents.sel.ts"
import BettingTableSubPo from "./BettingTable.sc.ro.ts";

class RaceTrack {

    game: GamesNamesEnum;
    constructor(game) {
        this.game = game;
    }

    get racetrackBtn() { return $(ROLocators.racetrack.racetrackBtn) };
    get racetrackBettingArea() { return $(ROLocators.racetrack.racetrackBettingArea) };
    get racetrackBettingAreaSvg() { return $(ROLocators.racetrack.racetrackBettingAreaSvg) };

    get tier() {
        return {
            get betspot() { return $(ROLocators.racetrack.combinedBetspots.tier) },
            get chip() { return $(ROLocators.racetrack.combinedBetspots.tierChip) },
            get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
            get chipText() { return $(ROLocators.chipSpecific.chipText) },
            // get text() { return $(ROLocators.racetrack.tierText) },
        }
    }
    get orphelins() {
        return {
            get betspot() { return $(ROLocators.racetrack.combinedBetspots.orphelins) },
            get chip() { return $(ROLocators.racetrack.combinedBetspots.orphelinsChip) },
            get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
            get chipText() { return $(ROLocators.chipSpecific.chipText) },
            // get text() { return $(ROLocators.racetrack.orphelinsText) },
        }
    }
    get voisinsDuZero() {
        return {
            get betspot() { return $(ROLocators.racetrack.combinedBetspots.voisinsDuZero) },
            get chip() { return $(ROLocators.racetrack.combinedBetspots.voisinsDuZeroChip) },
            get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
            get chipText() { return $(ROLocators.chipSpecific.chipText) },
            // get text() { return $(ROLocators.racetrack.voisinsDuZeroText) },
        }
    }

    get numbers() {
        return {
            get zero() {
                return {
                    get betspot() { return $(ROLocators.racetrack.zero) },
                    get chip() { return $(ROLocators.racetrack.zeroChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.zeroText) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get one() {
                return {
                    get betspot() { return $(ROLocators.racetrack.one) },
                    get chip() { return $(ROLocators.racetrack.oneChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.oneText) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get two() {
                return {
                    get betspot() { return $(ROLocators.racetrack.two) },
                    get chip() { return $(ROLocators.racetrack.twoChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.twoText) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get three() {
                return {
                    get betspot() { return $(ROLocators.racetrack.three) },
                    get chip() { return $(ROLocators.racetrack.threeChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.threeText) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get four() {
                return {
                    get betspot() { return $(ROLocators.racetrack.four) },
                    get chip() { return $(ROLocators.racetrack.fourChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get five() {
                return {
                    get betspot() { return $(ROLocators.racetrack.five) },
                    get chip() { return $(ROLocators.racetrack.fiveChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get six() {
                return {
                    get betspot() { return $(ROLocators.racetrack.six) },
                    get chip() { return $(ROLocators.racetrack.sixChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get seven() {
                return {
                    get betspot() { return $(ROLocators.racetrack.seven) },
                    get chip() { return $(ROLocators.racetrack.sevenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get eight() {
                return {
                    get betspot() { return $(ROLocators.racetrack.eight) },
                    get chip() { return $(ROLocators.racetrack.eightChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get nine() {
                return {
                    get betspot() { return $(ROLocators.racetrack.nine) },
                    get chip() { return $(ROLocators.racetrack.nineChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get ten() {
                return {
                    get betspot() { return $(ROLocators.racetrack.ten) },
                    get chip() { return $(ROLocators.racetrack.tenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get eleven() {
                return {
                    get betspot() { return $(ROLocators.racetrack.eleven) },
                    get chip() { return $(ROLocators.racetrack.elevenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twelve() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twelve) },
                    get chip() { return $(ROLocators.racetrack.twelveChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirteen() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirteen) },
                    get chip() { return $(ROLocators.racetrack.thirteenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get fourteen() {
                return {
                    get betspot() { return $(ROLocators.racetrack.fourteen) },
                    get chip() { return $(ROLocators.racetrack.fourteenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get fifteen() {
                return {
                    get betspot() { return $(ROLocators.racetrack.fifteen) },
                    get chip() { return $(ROLocators.racetrack.fifteenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get sixteen() {
                return {
                    get betspot() { return $(ROLocators.racetrack.sixteen) },
                    get chip() { return $(ROLocators.racetrack.sixteenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get seventeen() {
                return {
                    get betspot() { return $(ROLocators.racetrack.seventeen) },
                    get chip() { return $(ROLocators.racetrack.seventeenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get eighteen() {
                return {
                    get betspot() { return $(ROLocators.racetrack.eighteen) },
                    get chip() { return $(ROLocators.racetrack.eighteenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get nineteen() {
                return {
                    get betspot() { return $(ROLocators.racetrack.nineteen) },
                    get chip() { return $(ROLocators.racetrack.nineteenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twenty() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twenty) },
                    get chip() { return $(ROLocators.racetrack.twentyChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentyone() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentyone) },
                    get chip() { return $(ROLocators.racetrack.twentyoneChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentytwo() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentytwo) },
                    get chip() { return $(ROLocators.racetrack.twentytwoChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentythree() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentythree) },
                    get chip() { return $(ROLocators.racetrack.twentythreeChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentyfour() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentyfour) },
                    get chip() { return $(ROLocators.racetrack.twentyfourChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentyfive() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentyfive) },
                    get chip() { return $(ROLocators.racetrack.twentyfiveChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentysix() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentysix) },
                    get chip() { return $(ROLocators.racetrack.twentysixChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentyseven() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentyseven) },
                    get chip() { return $(ROLocators.racetrack.twentysevenChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentyeight() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentyeight) },
                    get chip() { return $(ROLocators.racetrack.twentyeightChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get twentynine() {
                return {
                    get betspot() { return $(ROLocators.racetrack.twentynine) },
                    get chip() { return $(ROLocators.racetrack.twentynineChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirty() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirty) },
                    get chip() { return $(ROLocators.racetrack.thirtyChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirtyone() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirtyone) },
                    get chip() { return $(ROLocators.racetrack.thirtyoneChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirtytwo() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirtytwo) },
                    get chip() { return $(ROLocators.racetrack.thirtytwoChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirtythree() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirtythree) },
                    get chip() { return $(ROLocators.racetrack.thirtythreeChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirtyfour() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirtyfour) },
                    get chip() { return $(ROLocators.racetrack.thirtyfourChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirtyfive() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirtyfive) },
                    get chip() { return $(ROLocators.racetrack.thirtyfiveChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
            get thirtysix() {
                return {
                    get betspot() { return $(ROLocators.racetrack.thirtysix) },
                    get chip() { return $(ROLocators.racetrack.thirtysixChip) },
                    get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
                    get chipText() { return $(ROLocators.chipSpecific.chipText) },
                    // get text() { return $(ROLocators.racetrack.) },
                    // get backgroundColor() { return $(ROLocators.racetrack.) },
                }
            },
        }
    }

    async isRacetrackBtnActive(): Promise<boolean> {
        console.log('@@@ isSideBetsPanelActive function was called');

        try {


            const elemPointerEventProp = await this.racetrackBtn.getCSSProperty('pointer-events');
            return elemPointerEventProp?.value !== 'none' ? true : false;

        } catch (err) {
            throw new Error(err);
        }
    };
}

export default RaceTrack;