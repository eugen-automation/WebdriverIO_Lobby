import { ROLocators } from "../../../../selectors/games/specificComponents.sel.ts"


class FavoriteBets {


    get openBtn() { return $(ROLocators.favoriteBets.favoritBetsBtn) }
    get tab() { return $(ROLocators.favoriteBets.favoritBetsTab) }
    get tabTitle() { return $(ROLocators.favoriteBets.tabTitle) }
    get tabTitleIcon() { return $(ROLocators.favoriteBets.tabIcon) }

    get noBetsScreen() {
        return {
            text: $(ROLocators.favoriteBets.tabTextNoPlacedBets),
            image: $(ROLocators.favoriteBets.tabImageNoPlacedBets),
        }
    }
    get saveBetsSection() {
        return {
            star1: this.getStar1(),
            star1PathTag: this.secondPathOfStar1(),
            field1: $(ROLocators.favoriteBets.saveLastBetsField1),
            field2: $(ROLocators.favoriteBets.saveLastBetsField2),
            field3: $(ROLocators.favoriteBets.saveLastBetsField3),
            field4: $(ROLocators.favoriteBets.saveLastBetsField4),
            field1WithBetsSaved: $(ROLocators.favoriteBets.field1WithSavedBets),
        }
    }

    get repeatBetsSection() {
        return {
            autoConfirmText: $(ROLocators.favoriteBets.autoConfirmText),
            toggle: $(ROLocators.favoriteBets.switchToggle),
            roundsSlider: $(ROLocators.favoriteBets.roundSlider),
            textBelowRoundsSlider: $(ROLocators.favoriteBets.textBelowRoundsSlider),
            playBtn: $(ROLocators.favoriteBets.playButton),
        }
    }
    private getStar1() {
        return $(ROLocators.favoriteBets.star1);
    }

    private secondPathOfStar1() {
        return this.getStar1().$('path:nth-of-type(2)');
    }
}

export default new FavoriteBets();