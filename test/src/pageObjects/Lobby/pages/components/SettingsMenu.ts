 import { LobbyBasePageLocators } from '../../../../selectors/lobby.sel';


class SettingsPopup {
  get personalizationToggle() { return $(LobbyBasePageLocators.menu.settingsView.personalizationToggle); }

  async togglePersonalization(): Promise<void> {
    await this.personalizationToggle.click();
  }
}
export default new SettingsPopup();