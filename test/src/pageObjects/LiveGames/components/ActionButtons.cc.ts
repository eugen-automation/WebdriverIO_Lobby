
import { actionButtonLocators } from '../../../selectors/games/commonComponents.sel.ts';



export class ActionButtons {

  get undoBtn() { return $(actionButtonLocators.undoBtn) }
  // get undoBtnText() { return $(actionButtonLocators.undoBtnText) }
  get repeatBtn() { return $(actionButtonLocators.repeatBtn) }
  // get repeatBtnText() { return $(actionButtonLocators.repeatBtnText) }
  get doubleBtn() { return $(actionButtonLocators.doubleBtn) }
  // get doubleBtnText() { return $(actionButtonLocators.doubleBtnText) }


  async isUndoButtonActive() {
    console.log('@@@ isUndoButtonActive function was called');
    
    const className = await this.undoBtn.getAttribute('class');
    if (className.includes('disabled')) {
      return false;
    }
    else {
      return true;
    }
  }

  async isRepeatButtonActive() {
    console.log('@@@ isRepeatButtonActive function was called');

    const className = await this.repeatBtn.getAttribute('class');
    if (className.includes('disabled')) {
      return false
    }
    else {
      return true
    }
  }

  async isDoubleButtonActive() {
console.log('@@@ isDoubleButtonActive function was called');

    const className = await this.doubleBtn.getAttribute('class');
    if (className.includes('disabled')) {
      return false;
    }
    else {
      return true;
    }
  }
}
