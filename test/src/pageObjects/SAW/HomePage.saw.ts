import { LobbyBasePageLocators, LobbyHomePageLocators } from "../../selectors/lobby.sel"
import { BasePage } from './BasePage.saw';

class HomePage extends BasePage {

    get bannerElem() { return $(LobbyHomePageLocators.bannerElem) }



}


export default new HomePage();