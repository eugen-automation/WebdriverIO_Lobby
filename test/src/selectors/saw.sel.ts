export const SAWLoginPageLocators = {
  logoImg: '//img[src="App_Themes/Black/images/logo.png"]',
  loginText: '#pageBody_contentPageBody_lblLoginName',
  usernameInput: '#pageBody_contentPageBody_txtEmail',
  passwordInput: '#pageBody_contentPageBody_txtPassword',
  submitBtn: '#pageBody_contentPageBody_btnLogin',
  errorMessage: '#pageBody_contentPageBody_lblErrorMessage',

};

export const SAWHeaderLocators = {
  logoImg: '//img[alt="Logo"]',
  forYouLink: '',
  gamesLink: '',
  favoritesLink: '',
  searchInput: '//input[@placeholder="Search"]',
  balance: '',
  playersCount: '',
  menuBtn: '[data-testid="menu"]',
  menu: {
    fullScreenMenuItem: '[data-testid="fullScreen"]',
    settingsMenuItem: '[data-testid="settings"]',
    languageMenuItem: '[data-testid="language"]',
    homeMenuItem: '[data-testid="home"]',
    languageView: {
      enLanguageItem: '[data-testid="2057-lang"]',
    }
  }
};

export const SAWGamePageLocators = {
  categoresList: '[data-testid="CategoriesContainer"]',
  backBtn: '[data-testid="GL-back"]',
}

export const SAWHomePageLocators = {
  bannerElem: '[data-testid="BackButton"]',
  gamesCardContainer: '[data-testid="GamesGrid"]',
};


export const SAWErrorPageLocators = {
  backBtn: '[data-name="GL-goToLogin"]',
};
