import { LobbyForYouPageLocators } from './../../../selectors/lobby.sel';
import BasePage from '../BasePage.ts';


class ForYouPage extends BasePage {
  get banners() { return $(LobbyForYouPageLocators.bannerElem); }
  get categoryTitles() { return $$(LobbyForYouPageLocators.categoryTitle); }
  get categoryTitleTopGames() { return $(LobbyForYouPageLocators.categoryTopGamesSeeAll); }
  get seeAllLink() { return $(LobbyForYouPageLocators.categorySeeAllGeneric); }


  async getSeeAllLinks() {
    try {

      const id = await this.seeAllLink.getAttribute('data-testid');
      console.log(`See All link data-testid is : ${id}`);

      // }
      // return seeAllLinks;
      console.log('See All links clicked for all categories');
    } catch (error) {
      console.error('Error clicking See All links:', error);
    }
  }
}

export default new ForYouPage();