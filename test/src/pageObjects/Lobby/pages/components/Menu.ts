  import { LobbyBasePageLocators } from '../../../../selectors/lobby.sel';
 

 class MenuPopup {
  get fullScreenOption() { return $(LobbyBasePageLocators.menu.fullScreenMenuItem); }
  get languageOption() { return $(LobbyBasePageLocators.menu.languageMenuItem); }
  get settingsOption() { return $(LobbyBasePageLocators.menu.settingsMenuItem); }
  get homeOption() { return $(LobbyBasePageLocators.menu.homeMenuItem); }

  async openLanguage(): Promise<void> {
    await this.languageOption.click();
  }

  async openSettings(): Promise<void> {
    await this.settingsOption.click();
  }
}
export default new MenuPopup();