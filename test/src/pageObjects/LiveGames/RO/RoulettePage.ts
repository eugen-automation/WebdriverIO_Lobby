import { BaseGamePage } from "../BasePage.game.ts";
import { GamesNamesEnum } from '../../../models/enums/gameNames.enum.ts';
import { ROLocators } from '../../../selectors/games/specificComponents.sel.ts';
import BettingTable from './specificComponents/BettingTable.sc.ro.ts';
import FavoriteBets from './specificComponents/FavoriteBets.sc.ro.ts';
import Statistics from './specificComponents/Statistics.sc.ro.ts';
import RaceTrack from './specificComponents/RaceTrack.sc.ro.ts';
import LastWinBar from './specificComponents/LastWin.sc.ro.ts';
import LuckyNumbers from './specificComponents/LuckyNumbers.sc.ro.ts';


export class RoulettePage extends BaseGamePage {
    bettingArea: BettingTable;
    racetrack: RaceTrack;

    game: GamesNamesEnum;
    constructor(game) {
            super();
            this.game = game;
            this.bettingArea = new BettingTable(game);
            this.racetrack = new RaceTrack(game);
            // this.roadmap = new Roadmap();
            // this.statistics = new StatisticsRoadmap();
        }

    // get BettingTable() {
    //     return new BettingTable(this.game);
    // }

    // get RaceTrack() {
    //     return new RaceTrack(this.game);
    // }

    // get LastWinBar() {
    //     return new LastWinBar(this.game);
    // }

    // get Statistics() {
    //     return new Statistics(this.game);
    // }

    // get FavoriteBets() {
    //     return FavoriteBets;
    // }

    // get LuckyNumbers() {
    //     if (this.game === GamesEnum.TRO) {
    //         return LuckyNumbers;
    //     }
    //     else {
    //         return null;
    //     }
    // }


    // get winningNumberAnimation() { return $(ROLocators.winNumberAnimation) }
    // get dolly() { return $(ROLocators.dolly) }
    get headerWinningNumber() { return $(ROLocators.headerWinningNumber) }
    // get menuCloseButton() { return $(ROLocators.menuCloseBtn) }
    // get showRacetrackBtn() { return $(ROLocators.outside.bblueChip) }

    async getHeaderWinningNumber() {
        console.log('@@@ getHeaderWinningNumber function was called');

        try {
            // handle case when result is Zero
            const headerWinningNumber = await Promise.race([
                this.headerWinningNumber,
                new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1000)) // 2 seconds timeout
            ]);

            if (headerWinningNumber) {
                // console.log('headerWinningNumber: ', headerWinningNumber)
                const returnResult = await this.headerWinningNumber.getText();

                return returnResult;
            }
            else {
                return '0';
            }
        }
        catch (err) {
            throw new Error(err)
        }
    }



}
