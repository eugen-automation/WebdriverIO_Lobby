import { balanceLocators } from "../../../selectors/games/commonComponents.sel";
import { API } from "../../../utils/API/apiChecker.api";
import { getTextEvenIfHidden } from "../../../utils/helpers/generalLogic.helper";
import { clientGetPlayerBalanceAndExtendLoginToken } from "../../../utils/API/apiClient.api";
import Data from "../../../utils/helpers/SessionData.class";



export class Balance {

    private get balanceAmount() { return $(balanceLocators.balanceValue) };
    private get balanceCurrency() { return $(balanceLocators.balanceCurrency) };


    async getBalanceAmount(): Promise<number> {
        console.log('@@@ getBalance function was called');


        try {
            // let balanceValue;
            let returnResult = await getTextEvenIfHidden(this.balanceAmount);

            let balanceValue = returnResult.value;
            // if the return value is not empty
            if (balanceValue) {
                // remove empty spaces
                balanceValue = balanceValue.replace(' ', '').replace(/,/g, '');
                // console.log('balanceValue :>> ', balanceValue);
                return Number(balanceValue);
            }
            else {
                // log.error(`Got value: ${balanceValue} in function >> getBalance() is empty`);
                throw new Error(`Got value: ${balanceValue} in function >> getBalance() is empty `);
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }

    async getBalanceCurrency(): Promise<string> {
        console.log('@@@ getBalanceCurrency function was called');


        try {
            // let balanceValue;
            let returnResult = await getTextEvenIfHidden(this.balanceCurrency);

            let balanceValue = returnResult.value;
            // if the return value is not empty
            if (balanceValue) {
                // remove empty spaces
                balanceValue = balanceValue.replace(' ', '');
                return balanceValue;
            }
            else {
                throw new Error(`Got value: ${balanceValue} in function >> getBalanceCurrency() is empty `);
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }


    async updateBalance(requiredInitialBalanceValue: number, session: Data) {
        console.log('@@@ updateBalance function was called');


        try {

            const opType = process.env.OPERATOR_TYPE;
            //BT case
            if (opType.toLowerCase() === 'bt') {
                // Calling API Method getAccountBalance to get the balance of the player
                const initialBalance = await API.getAccountBalance(session);

                // if found the expected balance
                if (requiredInitialBalanceValue === initialBalance.balance) {
                    // log.info(`Expected player balance: ${requiredInitialBalanceValue}, real balance ${Math.trunc(initialBalance.balance)}`);
                    return;
                }

                if (initialBalance.balance < requiredInitialBalanceValue) {
                    await API.accountDeposit(
                        session,
                        requiredInitialBalanceValue - initialBalance.balance,
                    );

                } else if (initialBalance.balance > requiredInitialBalanceValue) {

                    await API.accountWithdrawal(
                        session,
                        initialBalance.balance - requiredInitialBalanceValue,
                    );
                }

                await browser.pause(1500);
                // console.log('--------------------------------------------------------')
                const endBalance = await API.getAccountBalance(session);
            } // SW case
            else {
                // get current player balance
                const playerBalanceRaw = await clientGetPlayerBalanceAndExtendLoginToken(session);
                const playerBalance = Number(playerBalanceRaw.balance);

                if (playerBalance === requiredInitialBalanceValue) {
                    return;
                }

                await browser.url(session.urls.swManageUrl);
                await $('#txtOperatorID').waitForDisplayed({ timeout: 60000 });

                await $('#txtOperatorID').setValue(session.operator.id);
                await $('#txtLogin').setValue(session.player.name);

                if (playerBalance < requiredInitialBalanceValue) {
                    await $('#txtMoney').setValue(requiredInitialBalanceValue - playerBalance);
                }
                else if (playerBalance > requiredInitialBalanceValue) {
                    await $('#txtMoney').setValue(-(playerBalance - requiredInitialBalanceValue));
                }

                await $('#ddEnvirnoment').selectByVisibleText(process.env.ENVIRONMENT);

                // await browser.pause(250)
                await $('#btnDeposit').click();
            }


        } catch (err) {

        }
    }
}

