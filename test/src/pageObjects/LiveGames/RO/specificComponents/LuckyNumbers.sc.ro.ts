import { GamesNamesEnum } from "../../../../models/enums/gameNames.enum";
import { ROLocators } from "../../../../selectors/games/specificComponents.sel.ts"


class LuckyNumbers {


  get boxContainer() { return $(ROLocators.luckyNumbers.luckyNumbersContainer) }
  get bettingAreaMultiplier() { return $(ROLocators.multipliers.bettingAreaMultiplier) }

  get box1() {
    return {
      get svg() { return $(ROLocators.luckyNumbers.luckyNumberBoxSvg0) },
      get betspot() { return $(ROLocators.luckyNumbers.luckyNumberBox0) },
      get chip() { return $(ROLocators.luckyNumbers.luckyNumberBox0Chip) },
      get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
      get text() { return $(ROLocators.luckyNumbers.luckyNumberBox0Text) },
      get multiplier() { return $(ROLocators.multipliers.luckyNumber0Multiplier) },

    }
  }

  get box2() {
    return {
      get svg() { return $(ROLocators.luckyNumbers.luckyNumberBoxSvg1) },
      get betspot() { return $(ROLocators.luckyNumbers.luckyNumberBox1) },
      get chip() { return $(ROLocators.luckyNumbers.luckyNumberBox1Chip) },
      get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
      get text() { return $(ROLocators.luckyNumbers.luckyNumberBox1Text) },
      get multiplier() { return $(ROLocators.multipliers.luckyNumber1Multiplier) },

    }
  }

  get box3() {
    return {
      get svg() { return $(ROLocators.luckyNumbers.luckyNumberBoxSvg1) },
      get betspot() { return $(ROLocators.luckyNumbers.luckyNumberBox1) },
      get chip() { return $(ROLocators.luckyNumbers.luckyNumberBox1Chip) },
      get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
      get text() { return $(ROLocators.luckyNumbers.luckyNumberBox1Text) },
      get multiplier() { return $(ROLocators.multipliers.luckyNumber1Multiplier) },

    }
  }

  get box4() {
    return {
      get svg() { return $(ROLocators.luckyNumbers.luckyNumberBoxSvg1) },
      get betspot() { return $(ROLocators.luckyNumbers.luckyNumberBox1) },
      get chip() { return $(ROLocators.luckyNumbers.luckyNumberBox1Chip) },
      get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
      get text() { return $(ROLocators.luckyNumbers.luckyNumberBox1Text) },
      get multiplier() { return $(ROLocators.multipliers.luckyNumber1Multiplier) },

    }
  }

  get box5() {
    return {
      get svg() { return $(ROLocators.luckyNumbers.luckyNumberBoxSvg1) },
      get betspot() { return $(ROLocators.luckyNumbers.luckyNumberBox1) },
      get chip() { return $(ROLocators.luckyNumbers.luckyNumberBox1Chip) },
      get chipColor() { return $(ROLocators.chipSpecific.chipColor) },
      get text() { return $(ROLocators.luckyNumbers.luckyNumberBox1Text) },
      get multiplier() { return $(ROLocators.multipliers.luckyNumber1Multiplier) },

    }
  }

}

export default new LuckyNumbers();