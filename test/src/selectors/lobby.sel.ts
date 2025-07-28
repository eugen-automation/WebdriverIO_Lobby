export const LobbyLoginPageLocators = {
  loginText: 'h2=Login',
  errorMessage: '[data-testid="loginErrorMessage"]',
  usernameInput: '//input[@name="username"]',
  passwordInput: '//input[@name="password"]',
  submitBtn: '//button[@type="submit"]',
};

export const LobbyBasePageLocators = {
  logoImg: '[data-testid="logo"]',
  forYouLink: '[data-testid="forYou"]',
  gamesLink: '[data-testid="games"]',
  favoritesLink: '[data-testid="favourites"]',
  searchInput: '[data-testid="search"]',
  balance: '[data-testid="Balance"]',
  playersCount: '[data-testid="UsersCount"]',
  menuBtn: '[data-testid="menu"]',
  menu: {
    fullScreenMenuItem: '[data-testid="fullScreen"]',
    settingsMenuItem: '[data-testid="settings"]',
    languageMenuItem: '[data-testid="language"]',
    homeMenuItem: '[data-testid="home"]',
    languageView: {
      englishLanguageItem: '[data-testid="2057-lang"]',
      chineseLanguageItem: '[data-testid="2052-lang"]',
      koreanLanguageItem: '[data-testid="1042-lang"]',
      japanLanguageItem: '[data-testid="1041-lang"]',
      russianLanguageItem: '[data-testid="1049-lang"]',
    },
    settingsView: {
      personalizationToggle: '[data-testid="personalizationToggle"]',
    }
  }
};

export const LobbyForYouPageLocators = {
  bannerElem: '[data-testid="BackButton"]',
  headerBackgrImg: '.css-1qten00',
  gamesCardContainer: '[data-testid="GamesGrid"]',
  categoryTitle: '[data-testid="categoryTitle"]',
  categoryTopGamesSeeAll: '[data-testid="seeAll-topGames"]',
  categoryROSeeAll: '[data-testid="seeAll-Roulette"]',
  categoryBACSeeAll: '[data-testid=seeAll-Baccarat"]',
  categorySeeAllGeneric: 'button.see-all-button',

};

export const LobbyGamesPageLocators = {
  categoresList: '[data-testid="CategoriesContainer"]',
  roCategory: '[data-testid="Roulette"]',
  bacCategory: '[data-testid="Baccarat"]',
  ttcCategory: '[data-testid="32Cards"]',
  tp2020Category: '[data-testid="TeenPatti20-20"]',
  dtCategory: '[data-testid="DragonTiger"]',
  bjCategory: '[data-testid="Blackjack"]',
  abCategory: '[data-testid="AndarBahar"]',
  sbCategory: '[data-testid="SicBo"]',
  slotsCategory: '[data-testid="Slots"]',
  topGamesCategory: '[data-testid="TopGames"]',
  pageTitle: '[data-testid="pageTitle"]',
  backBtn: '[data-testid="GL-back"]',
}

export const LobbyFavouritesPageLocators = {
  backBtn: '[data-name="GL-goToLogin"]',
};

export const LobbySearchPageLocators = {
  backBtn: '[data-name="GL-goToLogin"]',
};

export const LobbyErrorPageLocators = {
  backBtn: '[data-name="GL-goToLogin"]',
};

export const LobbyGameCardPageLocators = {
  // gameCardContainer: '[data-testid="GamesGrid"]',
  gameName: '[data-testid="gameName"]',
  minLimit: '[data-testid="gameMinBet"]',
  playersCount: '[data-testid="gameUserCount"]',
  dealerImage: '[data-testid=""]',
  muteButton: '[data-testid="soundButton"]',
  heartButton: '[data-testid="favoriteButton"]',
  playButton: '[data-testid="playButton"]',
  roadmap: '[data-testid="gameStatistics"]',
  moreInfoArrow: '[data-testid="moreInfoButton"]',
  hoverPopup: '[data-testid="hover-popup"]',
  extendedPopup: '[data-testid="extended-popup"]',
  dealerInfo: '[data-testid="dealerInfo"]',
  gameDescription: '[data-testid="gameDescription"]',
  similarGamesContainer: '[data-testid="similarGamesContainer"]',
  similarGames: '[data-testid="similar-game-card"]',
  closeExtended: '[data-testid="closeModalButton"]',
}
