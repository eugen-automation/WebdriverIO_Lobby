import { GamesNamesEnum } from "../../../../models/enums/gameNames.enum.ts";
import { ROLocators } from "../../../../selectors/games/specificComponents.sel.ts"
import BettingTable from "./BettingTable.sc.ro.ts";





class LastWinBar {

    game: GamesNamesEnum;
    BettingTableSubPo: BettingTable;
    backgroundBarColor: string;
    numberFontColorRed: string;
    numberFontColorWhite: string;
    numberFontColorBlue: string;
    numberFontColorGreen: string;


    lastWinNumberFontColor: string;
    lastWinNumberRedBackground: string;
    lastWinNumberBlackBackground: string;
    lastWinNumberGreenBackground: string;
    lastWinNumberBlueBackground: string;

    constructor(game) {
        this.game = game;
        this.BettingTableSubPo = new BettingTable(this.game);
        this.backgroundBarColor = 'rgba(0,0,0,0.7)';
        this.numberFontColorRed = 'rgba(255,51,51,1)';
        this.numberFontColorWhite = 'rgba(255,255,255,1)';
        this.numberFontColorBlue = 'rgba(0,155,212,1)';
        this.numberFontColorGreen = 'rgba(0,179,51,1)';

        this.lastWinNumberFontColor = 'rgba(255,255,255,1)';
        this.lastWinNumberRedBackground = 'rgba(255,51,51,1)';
        this.lastWinNumberBlackBackground = 'rgba(119,119,119,1)';
        this.lastWinNumberGreenBackground = 'rgba(0,179,51,1)';
        this.lastWinNumberBlueBackground = 'rgba(0,155,212,1)';
    }

    get barContainer() { return $(ROLocators.lastWin.lastWinbar) };
    get lastWinNumber() { return $(ROLocators.lastWin.lastWinNumber) };
    get lastWinNumberMultiplier() {return $(ROLocators.lastWin.lastWinMultiplier)}
    get winBarNumber1() { return $(ROLocators.lastWin.winBarNumber1) };
    get lastWinNumberMultiplier1() {return $(ROLocators.lastWin.lastWinMultiplier1)}
    get winBarNumber2() { return $(ROLocators.lastWin.winBarNumber2) };
    get lastWinNumberMultiplier2() {return $(ROLocators.lastWin.lastWinMultiplier2)}
    get winBarNumber3() { return $(ROLocators.lastWin.winBarNumber3) };
    get lastWinNumberMultiplier3() {return $(ROLocators.lastWin.lastWinMultiplier3)}
    get winBarNumber4() { return $(ROLocators.lastWin.winBarNumber4) };
    get lastWinNumberMultiplier4() {return $(ROLocators.lastWin.lastWinMultiplier4)}
    get winBarNumber5() { return $(ROLocators.lastWin.winBarNumber5) };
    get lastWinNumberMultiplier5() {return $(ROLocators.lastWin.lastWinMultiplier5)}
    get winBarNumber6() { return $(ROLocators.lastWin.winBarNumber6) };
    get lastWinNumberMultiplier6() {return $(ROLocators.lastWin.lastWinMultiplier6)}
    get winBarNumber7() { return $(ROLocators.lastWin.winBarNumber7) };
    get lastWinNumberMultiplier7() {return $(ROLocators.lastWin.lastWinMultiplier7)}
    get winBarNumber8() { return $(ROLocators.lastWin.winBarNumber8) };
    get lastWinNumberMultiplier8() {return $(ROLocators.lastWin.lastWinMultiplier8)}
    get winBarNumber9() { return $(ROLocators.lastWin.winBarNumber9) };
    get lastWinNumberMultiplier9() {return $(ROLocators.lastWin.lastWinMultiplier9)}
    get winBarNumber10() { return $(ROLocators.lastWin.winBarumber10) };
    get lastWinNumberMultiplier10() {return $(ROLocators.lastWin.lastWinMultiplier10)}
    get winBarNumber11() { return $(ROLocators.lastWin.winBarNumber11) };
    get lastWinNumberMultiplier11() {return $(ROLocators.lastWin.lastWinMultiplier11)}
    get winBarNumber12() { return $(ROLocators.lastWin.winBarNumber12) };
    get lastWinNumberMultiplier12() {return $(ROLocators.lastWin.lastWinMultiplier12)}
    get winBarNumber13() { return $(ROLocators.lastWin.winBarNumber13) };
    get lastWinNumberMultiplier13() {return $(ROLocators.lastWin.lastWinMultiplier13)}




   async getNumberFontColor(straightUpNumber: number,straightUpElement: ChainablePromiseElement): Promise < string > {
        if (this.game === GamesNamesEnum.TRO &&  (await this.BettingTableSubPo.isLucky(straightUpElement))){ 
            return this.numberFontColorWhite;
        }

        if (straightUpNumber === 0) {
            return this.numberFontColorGreen;
        }

        if (this.BettingTableSubPo.isRed(straightUpNumber)) {
            return this.numberFontColorRed;
        }

        if (this.game === GamesNamesEnum.DRO && this.BettingTableSubPo.isBlue(straightUpNumber)) {
            return this.numberFontColorBlue;
        }
        else if ((this.game === GamesNamesEnum.RO || this.game === GamesNamesEnum.TRO) && this.BettingTableSubPo.isBlack(straightUpNumber)) {
            return this.numberFontColorWhite;
        }

        //TODO: consider that the font=color can be white if number is a thunder multipler. This case is not covered
    }

    async getRandomPayout() {
        const randomPayout = [50, 100, 150, 200, 250, 500]
        const randomIndex = Math.floor(Math.random() * randomPayout.length);
        return randomPayout[randomIndex];
    }
}


export default LastWinBar;