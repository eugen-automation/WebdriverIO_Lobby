import { GamesNamesEnum } from "../../../../models/enums/gameNames.enum.ts";
import { ROLocators } from "../../../../selectors/games/specificComponents.sel.ts"



class Statistics {

    game: GamesNamesEnum;
    constructor(game) {
        this.game = game;
    }

    get openBtn() { return $(ROLocators.statistics.statisticsBtn) };
    get tab() { return $(ROLocators.statistics.statisticsTab) };

    get tabTitle() { return $(ROLocators.statistics.statisticsTitle) };
    get tabTitleIcon() { return $(ROLocators.statistics.statisticsTitleIcon) };

    get racetrackTable() {
        return {
            get elem() { return $(ROLocators.statistics.statisticsTable1) },
            get tierColumn() { return $(ROLocators.statistics.statisticsTableRacetrackFirstColumn) },
            get orphelinsColumn() { return $(ROLocators.statistics.statisticsTableRacetrackSecondColumn) },
            get voisinsColumn() { return $(ROLocators.statistics.statisticsTableRacetrackThirdColumn) },
            get zeroColumn() { return $(ROLocators.statistics.statisticsTableRacetrackFourthColumn) }
        }
    }

    get colorsTable() {
        return {
            get elem() { return $(ROLocators.statistics.statisticsTableColors) },
            get redColumn() { return $(ROLocators.statistics.statisticsTableColorsFirstColumn) },
            get greenColumn() { return $(ROLocators.statistics.statisticsTableColorsSecondColumn) },
            get blackBlueColumn() { return $(ROLocators.statistics.statisticsTableColorsThirdColumn) },
        }
    }

    get evenOddsTable() {
        return {
            get elem() { return $(ROLocators.statistics.statisticsTableEvenOdd) },
            get evenColumn() { return $(ROLocators.statistics.statisticsTableEvenOddFirstColumn) },
            get zeroColumn() { return $(ROLocators.statistics.statisticsTableEvenOddSecondColumn) },
            get oddColumn() { return $(ROLocators.statistics.statisticsTableEvenOddThirdColumn) },
        }
    }

    get hotNumbersBar() { return $(ROLocators.statistics.statisticsTableHotNumbers) };
    get coldNumbersBar() { return $(ROLocators.statistics.statisticsTableColdNumbers) };

    get slider() {
        return {
            get container() { return $(ROLocators.statistics.statisticsSlider) },

            get oneHundred() {
                return {
                    get elem() { return $(ROLocators.statistics.statisticsSlider100Rounds) },
                    get text() { return $(ROLocators.statistics.statisticsSlider100RoundsText) },
                    get circle() { return $(ROLocators.statistics.statisticsSlider100RoundsCircle) },

                }
            },
            get twoHundreds() {
                return {
                    get elem() { return $(ROLocators.statistics.statisticsSlider200Rounds) },
                    get text() { return $(ROLocators.statistics.statisticsSlider200RoundsText) }
                }
            },
            get threeHundreds() {
                return {
                    get elem() { return $(ROLocators.statistics.statisticsSlider300Rounds) },
                    get text() { return $(ROLocators.statistics.statisticsSlider300RoundsText) },
                }
            },
            get fourHundreds() {
                return {
                    get elem() { return $(ROLocators.statistics.statisticsSlider400Rounds) },
                    get text() { return $(ROLocators.statistics.statisticsSlider400RoundsText) },
                }
            },
            get fiveHundreds() {
                return {
                    get elem() { return $(ROLocators.statistics.statisticsSlider500Rounds) },
                    get text() { return $(ROLocators.statistics.statisticsSlider500RoundsText) },
                }
            },
        }
    }

    get lastXRoundsText() { return $(ROLocators.statistics.statisticsLast100Rounds) };

    get statisticsImage() { return $(ROLocators.statistics.statisticsImage) };

    get statisticsTranslations() {
        return {
            statisticsTitleTranslationKey: "RO.Menu.Statistics",
            statisticsTierTranslationKey: "tier",
            statisticsOrphelinsTranslationKey: "orphelins",
            statisticsVoisinsTranslationKey: "voisins",
            statisticsZeroTranslationKey: "zero",
            statisticsRedTranslationKey: "red",
            statisticsBlackTranslationKey: "black",
            statisticsBlueTranslationKey: "blue",
            statisticsEvenTranslationKey: "even",
            statisticsOddTranslationKey: "odd",
            statisticsHotNumbersTranslationKey: "RO.Statistics.hotNumbers",
            statisticsColdNumbersTranslationKey: "RO.Statistics.coldNumbers",
            statisticsLast100RoundsTranslationKey: "RO.Statistics.LastRounds",
        }
    }

    async getTableSum(tableColumns) {
        const columnTexts = await Promise.all(tableColumns.map(column => column.getText()));
        const percentages = columnTexts.map(text => parseFloat(text.split(" ")[1] || 0));
        const returnResult = percentages.reduce((sum, value) => sum + value, 0);
        // console.log('returnResult :>> ', returnResult);
        return returnResult;
    }
}



export default Statistics;