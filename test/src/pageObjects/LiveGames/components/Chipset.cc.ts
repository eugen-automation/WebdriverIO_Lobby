import { chipsetLocators } from '../../../selectors/games/commonComponents.sel.ts';
import { Chip } from '../../../models/types/chip.type.ts';
// import Services from '../../utils/API/services.api.ts';
// import { GetJoinToken } from '../../utils/API/apiClient.api.ts'
// import Data from '../../utils/helpers/SessionData.class.ts';
// import { adminGameParam } from '../../models/types/adminParam.ts';
// import { Betspot } from '../../models/types/betspotList.ts';
// import { GamesEnum } from '../../models/enums/gameNames.enum.ts';
// import { ChipColorMapping } from '../../models/mappings/chipColors.map.ts';


export class Chipset {

  get mainChip() { return $(chipsetLocators.defaultChip) }
  get chip1() { return $(chipsetLocators.chip1) }
  get chip2() { return $(chipsetLocators.chip2) }
  get chip3() { return $(chipsetLocators.chip3) }
  get chip4() { return $(chipsetLocators.chip4) }
  get chip5() { return $(chipsetLocators.chip5) }
  get chip6() { return $(chipsetLocators.chip6) }

  // get chip1ColorElem() { return this.chip1.$(chipsetLocators.chipColor)}
  // get chip2ColorElem() { return this.chip2.$(chipsetLocators.chipColor)}
  // get chip3ColorElem() { return this.chip3.$(chipsetLocators.chipColor)}
  // get chip4ColorElem() { return this.chip4.$(chipsetLocators.chipColor)}
  // get chip5ColorElem() { return this.chip5.$(chipsetLocators.chipColor)}
  // get chip6ColorElem() { return this.chip6.$(chipsetLocators.chipColor)}








  // methods


  // private async getDefaultChipValue() {
  //   console.log('@@@ getDefaultChipValue function was called');

  //   await this.mainChip.waitForDisplayed({ timeout: 10000 });
  //   return await this.mainChip.getText();
  // }


  /**
     *
     * @param {String} expectedValue Check if default chip has the expected value
     * @returns Boolean
     */
  // async hasExpectedChipValueAsMainChip(expectedValue: string) {
  //   console.log('@@@ hasExpectedChipValueAsMainChip function was called');

  //   return expectedValue === (await this.getDefaultChipValue());
  // }
//!
  public async getChipsetFromGameWithValues(isMainChipRequiredToInclude = true) {
    console.log('@@@ getChipsetFromGameWithValues function was called');

    try {

      let chips: Chip[] = [
        { name: 'selectedChip', element: this.mainChip },
        { name: 'chip1', element: this.chip1 },
        { name: 'chip2', element: this.chip2 },
        { name: 'chip3', element: this.chip3 },
        { name: 'chip4', element: this.chip4 },
        { name: 'chip5', element: this.chip5 },
        { name: 'chip6', element: this.chip6 },
      ];

      // Create an array of promises that resolve to an object containing the name and text of each element
      const promises = chips.map(async (chip) => {
        chip.valueAsText = await chip.element.getText();
      });

      // get all text values
      await Promise.all(promises);

      for (const chip of chips) {
        chip.valueAsNumber = this.changeChipValueFromTextToNumbers(chip.valueAsText);
      }

      // remove the main chip from array  of chips
      if (!isMainChipRequiredToInclude) {
        chips = chips.filter(chip => chip.name !== 'selectedChip');
      }

      return chips;


    } catch (error) {
      throw new Error(`Error in getChipsetWithValues - ${error}`);
    }
  }

  // public getColorPerChipAsTextFromHex(hexValue: string) {
  //   console.log('@@@ getColorPerChipAsTextFromHex function was called');

  //   return ChipColorMapping[hexValue] || 'UnknownColor'; // Default to 'UnknownColor' if not found
  // }

  // async selectChipByValue(expectedChipValue: string, listOfGameChips: Chip[]) {
  //   console.log('@@@ selectChipByValue function was called');
  //   // AllureReporter.addStep('Select chip with value: ', expectedChipValue)

  //   try {

  //     // if (await this.hasExpectedChipValueAsMainChip(expectedChipValue)) {
  //     //   console.info('The main chip has already the required chip value');
  //     //   return true;
  //     // }

  //     // click the chipset
  //     // await genericActionsLibs.clickWebElement(
  //     //   this.mainChipLocator,
  //     // );
  //     await this.mainChip.click();
  //     // await this.mainChipLocator

  //     // await browser.pause(100);

  //     // search for expected chip value and click on that chip
  //     for (const chip of listOfGameChips) {
  //       if (chip.valueAsText === expectedChipValue && chip.name !== 'selectedChip')  {
  //         await chip.element.click()//genericActionsLibs.clickWebElement(chip.element);

  //         return true;
  //       }
  //     }
  //     throw new Error(`Not found the required chip amount:${expectedChipValue} in list of chips: ${listOfGameChips}`)

  //     // return false;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }

  // private adaptChipValuesToDisplayLetters(chipAmount: number) {
  //   console.log('@@@ adaptChipValuesToDisplayLetters function was called');

  //   try {

  //     const ranges = [
  //       { divider: 1e9, suffix: 'G' },
  //       { divider: 1e6, suffix: 'M' },
  //       { divider: 1e3, suffix: 'K' }
  //     ];

  //     for (var i = 0; i < ranges.length; i++) {
  //       if (chipAmount >= ranges[i].divider) {
  //         console.log((chipAmount / ranges[i].divider).toString() + ranges[i].suffix);
  //         return (chipAmount / ranges[i].divider).toString() + ranges[i].suffix;
  //       }
  //     }
  //     return chipAmount.toString();
  //   }
  //   catch (err) {
  //     throw new Error('Why why why you got here?')
  //   }
  // }
//!
  private changeChipValueFromTextToNumbers(chipAmount: string): number {
    console.log('@@@ changeChipValueFromTextToNumbers function was called');

    try {

      if (chipAmount) {
        if (chipAmount.includes('K')) {
          chipAmount = chipAmount.replace('K', '');
          return Number(chipAmount) * 1000;
        }
        if (chipAmount.includes('M')) {
          chipAmount = chipAmount.replace('M', '');
          return Number(chipAmount) * 1000000
        }
        if (chipAmount.includes('.')) {
          return Number(chipAmount);
        }

        return Number(chipAmount);
      }
      throw new Error('Got undefined as argument in changeChipValueFromTextToNumbers()');
    }
    catch (err) {
      throw new Error(`There is error in changeChipValueFromTextToNumbers(): ${err}`);
    }
  }

  // private generateChipsetBellowAndAboveTheLimit(min: string, max: string) {
  //   console.log('@@@ generateChipsetBellowAndAboveTheLimit function was called');

  //   try {

  //     const minAsNumber = Number(min);
  //     const maxAsNumber = Number(max);

  //     const first = minAsNumber - 0.5;
  //     const second = minAsNumber * 10 < maxAsNumber ? minAsNumber * 10 : minAsNumber;
  //     const third = Math.floor((maxAsNumber + minAsNumber) / 4);;
  //     const fourth = maxAsNumber / 2; // required for Max table bet notification
  //     const fifth = maxAsNumber;
  //     const sixth = maxAsNumber * 2;
  //     const seventh = maxAsNumber * 3;
  //     const eifhth = maxAsNumber * 4;
  //     const ninth = maxAsNumber * 5;
  //     const tenth = maxAsNumber * 6;

  //     return [first, second, third, fourth, fifth, sixth, seventh, eifhth, ninth, tenth]
  //   }
  //   catch (err) {
  //     throw new Error(`Found error in generateChipsetBasedOnMinMax():${err.message}`)
  //   }
  // }

  // used in place bet!
  // selectChipBasedOnProvidedBetAmount(randomAmountToBet: number, availableChipsInGame: Chip[]) {
  //   console.log('@@@ selectChipBasedOnProvidedBetAmount function was called');

  //   for (let i = availableChipsInGame.length - 1; i >= 0; i--) {

  //     const chipValue = availableChipsInGame[i].valueAsNumber;
  //     // console.log('chipValue :>> ', chipValue);
  //     const numberOfChips = Math.floor(randomAmountToBet / chipValue);
  //     // console.log('numberOfChips :>> ', numberOfChips);

  //     if (numberOfChips > 0) {
  //       availableChipsInGame[i].multiplier = numberOfChips;
  //       //     chipAmountAndMultiplierList.push({ chip: chipValue, multiplier: numberOfChips })
  //       randomAmountToBet -= numberOfChips * chipValue;
  //     }
  //   }
  //   // console.log('OBJECT WITH :', JSON.stringify(availableChipsInGame))
  //   return availableChipsInGame;
  // }

  // async getColorForChipBeingPlacedOnBetspot(betspot: Betspot, game: GamesEnum) {
  //   console.log('@@@ getColorForChipBeingPlacedOnBetspot function was called');
  //   console.log('betspot :>> ', betspot);
  //   try {

  //     // const chipLocator = ;
  //     // get chip element
  //     const chipOnBetspotElem = await $(betspot.chipLocator);
  //     console.log('chipOnBetspotElem.elementId :>> ', chipOnBetspotElem.elementId);

  //     //! to be adjusted to work for all games!
  //     // if (chipOnBetspotLocator == '[data-testid="main-bet-chip"]') {
  //     if (game === GamesEnum.BJ || game === GamesEnum.UBJ) {
  //       if (chipOnBetspotElem.elementId) {
  //         // get class with color for main bet
  //         const elem2 = await chipOnBetspotElem.$('.basicColor');
  //         if (elem2.elementId) {
  //           // get attribute color
  //           const chipColorToReturn = await elem2.getAttribute('fill');
  //           console.log('chipColorToReturn :>> ', chipColorToReturn);
  //           return chipColorToReturn;
  //         }
  //       }
  //       else {
  //         throw new Error(`getColorForChipBeingPlacedOnBetspot(): Not found the web element with locator: ${betspot.chipLocator}, in game!`);
  //       }
  //     }
  //     else if (game === GamesEnum.RO || game === GamesEnum.DRO || game === GamesEnum.TRO) {
  //       const elem2 = await chipOnBetspotElem.$('[data-testid="chipColor"]');
  //       console.log('elem2.elementId :>> ', elem2.elementId);
  //       if (elem2.elementId != undefined) {
  //         const fillValue = await elem2.getAttribute('fill');
  //         console.log('fillValue :>> ', fillValue);
  //         // get attribute color
  //         return fillValue;
  //       }
  //     }
  //     else {
  //       // get class with color for bet behind
  //       const elem2 = await chipOnBetspotElem.$('.basicColor');
  //       console.log('elem2.elementId :>> ', elem2.elementId);
  //       if (elem2.elementId != undefined) {
  //         const fillValue = await elem2.getAttribute('fill');
  //         console.log('fillValue :>> ', fillValue);
  //         // get attribute color
  //         return fillValue;
  //       }
  //     }
  //   }
  //   catch (err) {
  //     // throw new Error(`There is error in function: getColorForChipBeingPlacedOnBetspot(). Make sure there is any chip placed on betspot with selector: ${chipOnBetspotLocator}`);
  //     throw new Error(err);
  //   }
  // }

  // convertChipStringToArrayOfNumbers(chipsString: string, numberOfChipsInGame: number = 6): number[] {
  //   console.log('@@@ convertChipStringToArrayOfNumbers function was called');

  //   // from an array of strings it removes spaces, make array, convert to numbers and remove unused 4 chips
  //   try {

  //     // Clean up the input string and split it into an array
  //     let chipsArray = chipsString.replace(/ /g, "").split(',');
  //     if (chipsArray.length) {

  //       // Convert the array elements to numbers and sort them
  //       let sortedChipsArray = chipsArray.map(Number).sort((a, b) => a - b);

  //       // Keep only the first CHIPS_NUMBER_IN_GAME elements, adjusting for the difference
  //       let trimmedChipsArray = sortedChipsArray.slice(0, -Math.abs(sortedChipsArray.length - numberOfChipsInGame));

  //       // console.log('trimmedChipsArray', trimmedChipsArray);
  //       return trimmedChipsArray;

  //     }
  //     else {
  //       throw new Error('convertChipStringToArrayOfNumbers() funtion got as chip list an empty list, please check')
  //     }
  //   } catch (err) { throw new Error(err) }
  // }

  // convertChipColorsintoArray(chipColorsFromAdminParams: string, chipNumberInGame = 6) {
  //   console.log('@@@ convertChipColorsintoArray function was called');

  //   let chipColorsFromApiParamsResponseDataAsArray = chipColorsFromAdminParams.replace(/ /g, "").split(',');
  //   chipColorsFromApiParamsResponseDataAsArray = chipColorsFromApiParamsResponseDataAsArray.slice(0, -Math.abs(chipColorsFromApiParamsResponseDataAsArray.length - chipNumberInGame));
  //   return chipColorsFromApiParamsResponseDataAsArray;
  // }

  // getListOfChips(chips: string, numberOfChipsdisplayedInGame: number = 6) {
  //   console.log('@@@ getListOfChips function was called');;

  //   // Clean up the input string and split it into an array
  //   let chipsArray = chips.replace(/ /g, "").split(',');
  //   if (chipsArray.length) {

  //     // Convert the array elements to numbers and sort them
  //     let sortedChipsArray = chipsArray.map(Number).sort((a, b) => a - b);

  //     // Keep only the first CHIPS_NUMBER_IN_GAME elements, adjusting for the difference
  //     if (sortedChipsArray.length > 6) {
  //       return sortedChipsArray.slice(0, -Math.abs(sortedChipsArray.length - numberOfChipsdisplayedInGame));
  //     }

  //     return sortedChipsArray;
  //   }
  //   else {
  //     throw new Error('convertChipStringToArrayOfNumbers() funtion got as chip list an empty list, please check')
  //   }

  // }

  // async getChips(session: Data) {
  //   console.log('@@@ getChips function was called');

  //   try {
  //     let loginCallData;

  //     const tokenData = await GetJoinToken(session);
  //     if (tokenData?.errorCode === '0') {

  //       // get list of chips from Login call(limits values)
  //       loginCallData = await Services.Account.login(session?.game?.name, session?.game?.id, (tokenData?.description));
  //     }
  //     // if found errorCode then fail the execution
  //     else {
  //       throw new Error(`There is error in API call GetJoinToken(). Error code:${tokenData?.errorCode} with description:${tokenData?.description}`)
  //     }
  //     // if not found chips in Limit, then get from Admin
  //     const chips: string = loginCallData.chipsRange ? loginCallData.chipsRange : (await Services.Params.getGameParams(session.operator.id, session.game.type)).chipAmounts;

  //     // get the list of chips as number[] from limits or admin params (acc. to priority)
  //     return this.getListOfChips(chips);
  //   }
  //   catch (err) {
  //     throw new Error(err)
  //   }
  // }

  // async getamountForAdjutedChipBeingPlacedOnBetspot(chipOnBetspotLocator: string) {
  //   console.log('@@@ getamountForAdjutedChipBeingPlacedOnBetspot function was called');

  //   // get chip locator
  //   const elem = await browser.$(chipOnBetspotLocator);
  //   if (elem.elementId) {
  //     // get value from chip as text
  //     const convertedElem = await elem.getText()
  //     // convert text to numbers
  //     if (convertedElem.toLowerCase().includes("k")) {
  //       return parseFloat(convertedElem.toLowerCase().replace("k", "")) * 1000;
  //     } else {
  //       return parseFloat(convertedElem.toLowerCase().replace("m", "")) * 10000;
  //     }
  //   }
  //   throw new Error(`There is error in function: getamountForAdjutedChipBeingPlacedOnBetspot(). Make sure there is any chip placed on betspot with selector: ${chipOnBetspotLocator}`);
  // }

  // async updateChipsetAboveLimitRange(data: Data, betMinMaxToConsider = 'bet') {
  //   console.log('@@@ updateChipsetAboveLimitRange function was called');

  //   // set new chipset to include invalid chips based on new limit
  //   const newChipset = betMinMaxToConsider === 'bet' ? this.generateChipsetBellowAndAboveTheLimit(data.limit.minBet, data.limit.maxBet) : this.generateChipsetBellowAndAboveTheLimit(data.limit.minBetBehind, data.limit.maxBetBehind);

  //   // enable default chips in limit in order to disable them from limits and use chips from Admin Params
  //   // update chips to be beyound and above the limit
  //   await Promise.all([Services.Limits.enableDefaultChips(Number(data.limit.id)),
  //   Services.Params.updateGameParams(data, adminGameParam.chipAmounts, newChipset.toString())])

  //   return newChipset.slice(0, -4)
  // }

  // async getGameChipsColor(chipElements: Chip[]) {
  //   console.log('@@@ getGameChipsColor function was called');

  //   for (let chip of chipElements) {
  //     // console.log('chip.element :>> ', chip.element);
  //     const fillValue = await chip.element.$(chipsetLocators.chipColor).getAttribute('fill');

  //     // console.log('fillValue :>> ', fillValue);
  //     chip.color = this.getColorPerChipAsTextFromHex(fillValue);
  //   }

  // }
//!
  async selectChipByValueNew(expectedChipValue: number) {
    console.log('@@@ selectChipByValue function was called');
    // AllureReporter.addStep('Select chip with value: ', expectedChipValue)

    try {
      // get chips text from game
      const listOfGameChips: Chip[] = await this.getChipsetFromGameWithValues();

      if (listOfGameChips.length > 0) {


        // search for expected chip value and click on that chip
        for (const chip of listOfGameChips) {

          // if required chip is the default one
          if (chip.name === 'selectedChip' && chip.valueAsNumber === expectedChipValue) {
            return true;
          }

          if (chip.valueAsNumber === expectedChipValue) {
            // check for required chip
            await this.mainChip.waitForClickable({ timeout: 3000 });
            await this.mainChip.click();
            await browser.pause(100);

            await chip.element.waitForClickable({ timeout: 3000 });
            await chip.element.click();

            return true;
          }
        }
      }

      throw new Error(`Not found the required chip amount:${expectedChipValue} in list of chips: ${listOfGameChips}`)

      // return false;
    } catch (err) {
      throw new Error(err);
    }
  }

}



