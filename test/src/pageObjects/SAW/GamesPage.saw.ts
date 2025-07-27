import { LobbyGamePageLocators } from "../../selectors/lobby.sel";
import { BasePage } from "./BasePage.saw";

class GamesPage extends BasePage {

    get categoresList() { return $(LobbyGamePageLocators.categoresList) }










    
}
export default new GamesPage();