import { LobbyGameCardPageLocators } from '../../../../selectors/lobby.sel'

class GameCard {

  get dealerImage() { return $(LobbyGameCardPageLocators.dealerImage); }
  get gameName() { return $(LobbyGameCardPageLocators.gameName); }
  get gameNames() { return $$(LobbyGameCardPageLocators.gameName); }
  get minLimit() { return $(LobbyGameCardPageLocators.minLimit); }
  get playersCount() { return $(LobbyGameCardPageLocators.playersCount); }

  // Hover popup (web only)
  get hoverPopup() { return $(LobbyGameCardPageLocators.hoverPopup); }
  get muteButton() { return $(LobbyGameCardPageLocators.muteButton); }
  get heartButton() { return $(LobbyGameCardPageLocators.heartButton); }
  get playButton() { return $(LobbyGameCardPageLocators.playButton); }
  get roadmap() { return $(LobbyGameCardPageLocators.roadmap); }
  get moreInfoArrow() { return $(LobbyGameCardPageLocators.moreInfoArrow); }

  // Extended popup (after More Info)
  get extendedPopup() { return $(LobbyGameCardPageLocators.extendedPopup); }
  get similarGames() { return $(LobbyGameCardPageLocators.similarGames); }
  get closeExtended() { return $(LobbyGameCardPageLocators.closeExtended); }



  /**
     * Hover to trigger small popup (web only)
     */
  async hoverCard(gameCard: WebdriverIO.Element) {
    if (!browser.isMobile) {
      await gameCard.moveTo();

      // Wait for the hover popup to be displayed
      await this.hoverPopup.waitForDisplayed({
        timeout: 5000, // Wait up to 5 seconds    
        timeoutMsg: 'Hover popup not displayed', // Custom error message
        reverse: false
      });
    }
  }

  /**
   * Tap to trigger extended popup (mobile only)
   */
  async tapCard(gameCard: WebdriverIO.Element) {
    if (browser.isMobile) {
      await gameCard.click();
      
      // Wait for the hover popup to be displayed
      await this.extendedPopup.waitForDisplayed({
        timeout: 5000, // Wait up to 5 seconds    
        timeoutMsg: 'Extended popup not displayed', // Custom error message
        reverse: false
      });
    }
  }

  /**
   * Open extended popup (web: via hover + click, mobile: just tap)
   */
  async openExtendedPopup(gameCard: WebdriverIO.Element) {
    if (browser.isMobile) {
      await this.tapCard(gameCard);
    } else {
      await this.hoverCard(gameCard);
      await this.moreInfoArrow.click();
    }

    // Wait for the hover popup to be displayed
      await this.extendedPopup.waitForDisplayed({
        timeout: 5000, // Wait up to 5 seconds    
        timeoutMsg: 'Extended popup not displayed', // Custom error message
        reverse: false
      });
  }

  async toggleMute() {
    if (!browser.isMobile && await this.muteButton.isDisplayed()) {
      await this.muteButton.click();
    }
  }

  async toggleFavourite() {
    if (!browser.isMobile && await this.heartButton.isDisplayed()) {
      await this.heartButton.click();
    }
  }

  async closeExtendedPopup() {
    await this.closeExtended.click();
  }

  async isExtendedPopupDisplayed(): Promise<boolean> {
    return await this.extendedPopup.isDisplayed();
  }
}
export default new GameCard()