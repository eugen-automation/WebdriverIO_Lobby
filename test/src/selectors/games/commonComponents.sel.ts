
export const headerLocators = {
    betAmount: '#bet-value',
    betCurrency: '#bet-currency',
    gameName: '#gamename',
    gameLimit: '#gamelimit',
    gameStatus: '#game-status-text',
    gameStatusTimer: '#game-status-timer-text',
    gameStatusWaitForNextGame: '[data-name="waitForNextGame"]',
    roundId: '#roundid',
    balanceValue: '#balance-value',
    balanceCurrency: '#balance-currency',
    header: '[data-testid="header"]',
    
    backgroundColor: '[data-testid="phaseBackgroundColor"]',
};

export const balanceLocators = {
    balanceValue: '#balance-value',
    balanceCurrency: '#balance-currency',   
}

export const notificationLocators = {
    notificationText: 'div[data-name="notification-text"]',
    notificationContainer: '[data-name="notification-container"]',
    allNotificationWrapper: '.all-notification-wrapper',
    warnNotificationContainer: '.warn-container',
    systemNotification: 'div.popup-container',
    systemNotificationData: 'div.text-content',
    systemNotificationCloseBtn: 'button.close.noti-action-button.grey',
    systemNotificationOkBtn: 'button.ok.noti-action-button.grey',
    errorOnGameLoad: '//div[@id="error"]',
};

export const actionButtonLocators = {
    // action buttons
    undoBtn: '.css-198uax',
    // undoBtnText: '#undoText',
    repeatBtn: '.css-rj80up',
    // repeatBtnText: '#repeatText',
    doubleBtn: '.css-rj80up',
    // doubleBtnText: '#doubleText',
};

export const chipsetLocators = {
    // chipset
    defaultChip: '#chip-main',
    chip1: '#chip-0',
    chip2: '#chip-1',
    chip3: '#chip-2',
    chip4: '#chip-3',
    chip5: '#chip-4',
    chip6: '#chip-5',
    chipColor: '.decorationsBg',
};

export const menuLocators = {
    // menu button
    menuBtn: '#menu-button',
    menuTab: '#menu',
    menuItems: '//div[@class="sc-kEYyzF huEcZK click-target"]',

    tabId: '#tab',
    info: '#info',
    home: '#home',
    lobby: '#lobby',

    infoTabTotalBet: 'table > tbody > tr:nth-child(7) > td:nth-child(2)',
    infoTabLastWin: 'table > tbody > tr:nth-child(8) > td:nth-child(2)',
    infoTabTitle: '.sc-jDwBTQ irKFNX',
    homeBtnIcon: '//div[@class="sc-ckVGcZ daFhFh"]',
    homeButtonIconInLobbyMenuTab:'[data-name="GL-icon-home"]',
    menuCloseBtn: '[data-testid="menuCloseBtn"]',
};

export const fullScreenAnimationLocators = {
    // full-screen
    androidFullScreenAnimation: '//*[@id="fullscreen-android"]',
    iosFullScreenAnimation: '//*[@id="fullscreen-ios"]',

};

export const winningAnimationLocators = {
    // winning-animation
    winningPopup: '#winning-container',
    winningText: '#winning-msg',
    winningAmount: '#winning-amount-number',
    winningCurrency: '#winning-amount-currency'
};

export const loadingScreenLocators = {
    // loading screen
    loadingScreenProgressText: '#loading-text',
    loadingScreen: '#loading-page',
    loadingLogo: '#loading-game-logo',
};

export const videoLocators = {
    // others
    unmuteBtn: '#audio-playerDiv',
    playVideoBtn: '#playButton-playerDiv',
    videoPlayer: '#h5live-playerDiv',
};

export const iframeLocators = {
    iframeContainer: '[data-testid="sawContainer"]',
    listOfGames: '[data-testid="listOfGames"]',

    rouletteLink: '[data-testid="rouletteButton"]',
    dragonRouletteLink: '[data-testid="dragonRouletteButton"]',
    thunderRouletteLink: '[data-testid="thunderRouletteButton"]',
    andarBaharLink: '[data-testid="andarBaharButton"]',
    ultimatePokerLink: '[data-testid="ultimatePokerButton"]',
    sicBoLink: '[data-testid="sicBoButton"]',
    thirtyTwoCardsLink: '[data-testid="thirtyTwoCardsButton"]',
    teenPattiLink: '[data-testid="teenPattiButton"]',
    teenPatti2020Link: '[data-testid="teenPatti2020Button"]',
    dragonTigerLink: '[data-testid="dragonTigerButton"]',
    blackjackLink: '[data-testid="blackjackButton"]',
    unlimitedBlackjackLink: '[data-testid="unlimitedBlackjackButton"]',
    baccaratLink: '[data-testid="baccaratButton"]',


}