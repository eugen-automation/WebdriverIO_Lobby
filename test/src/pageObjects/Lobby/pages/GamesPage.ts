import { LobbyGamesPageLocators } from '../../../selectors/lobby.sel.ts';
import BasePage from '../BasePage.ts';

class GamesPage extends BasePage {
  get categoryContainer() { return $(LobbyGamesPageLocators.categoresList); }
  get rouletteGameCategory() { return $(LobbyGamesPageLocators.roCategory); }
  get baccaratGameCategory() { return $(LobbyGamesPageLocators.bacCategory); }
  get thirtyTwoCardsGameCategory() { return $(LobbyGamesPageLocators.ttcCategory); }
  get teenpatti2020GameCategory() { return $(LobbyGamesPageLocators.tp2020Category); }
  get dragonTigerGameCategory() { return $(LobbyGamesPageLocators.dtCategory); }
  get blackJackGameCategory() { return $(LobbyGamesPageLocators.bjCategory); }
  get andarBaharGameCategory() { return $(LobbyGamesPageLocators.abCategory); }
  get sicBoGameCategory() { return $(LobbyGamesPageLocators.sbCategory); }
  get slotsGameCategory() { return $(LobbyGamesPageLocators.slotsCategory); }
  get topGamesGameCategory() { return $(LobbyGamesPageLocators.topGamesCategory); }
  get pageTitle() { return $(LobbyGamesPageLocators.pageTitle); }



  async openGameCategory(lobbyUrl: string, gameCategory: string) {

    const gamesPath = `?defaultCategory=${gameCategory}`;

    // const baseUrl = await browser.getUrl();
    await browser.url(lobbyUrl + gamesPath);
    console.log(`Navigated to ${lobbyUrl + gamesPath}`);
  }

  async getAvailableGameCategoriesByName(): Promise<string[]> {
    let foundCategories: string[] = [];
    const selectorMatch = await this.categoryContainer.$$('div');
    for (const elem of selectorMatch) {
      const result = await elem.getAttribute('data-testid');
      result !== null ? foundCategories.push(result) : 'No data-testid found for element';
    }
    return foundCategories;
  }

  async getAvailableGameCategoriesBySelectors(): Promise<string[]> {
    let foundCategories: string[] = [];
    const selectorMatch = await this.categoryContainer.$$('div');
    for (const elem of selectorMatch) {
      const result = await elem.getAttribute('data-testid');
      result !== null ? foundCategories.push(result) : 'No data-testid found for element';
    }
    return foundCategories;
  }
}
export default new GamesPage();