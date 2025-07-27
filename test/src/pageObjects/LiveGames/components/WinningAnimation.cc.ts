import { winningAnimationLocators } from '../../../selectors/games/commonComponents.sel';



export class WinningAnimation {

    get winningContainer() { return $(winningAnimationLocators.winningPopup) }
    get winningAmount() { return $(winningAnimationLocators.winningAmount) }
    get winningCurrency() { return $(winningAnimationLocators.winningCurrency) }



    async getWinningAmount() {
        console.log('@@@ getWinningAmount function was called');
        try {

            if (await this.winningAmount.isExisting()) {
                await this.winningAmount.waitForDisplayed({ timeout: 50000, timeoutMsg: 'Winning animation pop-up did not appear within the specified timeout' });

                const winningAmount = await this.winningAmount.getText();
                console.log('winningAmount :>> ', winningAmount);

                if (winningAmount) {
                    return Number(winningAmount);
                }
                else {
                    return 0;
                }

            } else {
                throw new Error('Winning animation element does not exist');
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }

    async getWinningCurrency() {
        console.log('@@@ getWinningCurrency function was called');

        await this.winningCurrency.waitForDisplayed({ timeout: 30000 });

        const winningCurrency = await this.winningCurrency.getText();
        if (winningCurrency) {
            return winningCurrency;
        }
        throw new Error(`Got no text for Winning Animation currency`)
    }

}
