import { LanguagesEnum } from '../../../../models/enums/languages.enum';
import { LobbyBasePageLocators } from '../../../../selectors/lobby.sel';


class LanguagePopup {
  get englishLanguage() { return $(LobbyBasePageLocators.menu.languageView.englishLanguageItem); }
  get chineseLanguage() { return $(LobbyBasePageLocators.menu.languageView.chineseLanguageItem); }
  get koreanLanguage() { return $(LobbyBasePageLocators.menu.languageView.koreanLanguageItem); }
  get japanLanguage() { return $(LobbyBasePageLocators.menu.languageView.japanLanguageItem); }
  get russianLanguage() { return $(LobbyBasePageLocators.menu.languageView.russianLanguageItem); }

  // select language
  async selectLanguage(language: LanguagesEnum) {
    switch (language) {
      case LanguagesEnum.ENGLISH:
        await this.englishLanguage.click();
        break;
      case LanguagesEnum.CHINESE:
        await this.chineseLanguage.click();
        break;
      case LanguagesEnum.KOREAN:
        await this.koreanLanguage.click();
        break;
      case LanguagesEnum.JAPAN:
        await this.japanLanguage.click();
        break;
      case LanguagesEnum.RUSSIAN:
        await this.russianLanguage.click();
        break;
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }
}
export default new LanguagePopup();