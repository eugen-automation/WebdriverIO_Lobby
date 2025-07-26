
export type AdminParamStructure = {
  id: string;
  name?: string;
  defaultValue?: string;
};

export type IAdminOperatorParams = {
  useSideBets?: AdminParamStructure;
  IPCountryBlackListBlock?: AdminParamStructure;
  IPCountryCheckFunctionality?: AdminParamStructure;
  playerIPWhiteList?: AdminParamStructure;
};

export type IAdminGameParams = {
  currencies?: AdminParamStructure;
  currenciesSide?: AdminParamStructure;
  chipAmounts?: AdminParamStructure;
  chipColors?: AdminParamStructure;
  BJUseMultiCommands?: AdminParamStructure;
  preBetsAllowed?: AdminParamStructure;
  userGameIdleTimeout?: AdminParamStructure;
  block1to1bets?: AdminParamStructure;
  mobileMenuItems?: AdminParamStructure;
  enableLobby?: AdminParamStructure;
  colorSwapValue?: AdminParamStructure;
  enableBlackTheme?: AdminParamStructure;
  enableFavoriteBet?: AdminParamStructure;
  lobbySessionLength?: AdminParamStructure;
  loginTokenExtendTime?: AdminParamStructure;
  extendTokenInterval?: AdminParamStructure;
};




export const adminOperatorParams: IAdminOperatorParams = {
  useSideBets: { id: '31', name: 'useSideBets', defaultValue: '1' },
  IPCountryBlackListBlock: { id: '90', name: 'IPCountryBlackListBlock', defaultValue: '' },
  IPCountryCheckFunctionality: { id: '138', name: 'IPCountryCheckFunctionality', defaultValue: 'false' },
  playerIPWhiteList: { id: '91', name: 'playerIPWhiteList', defaultValue: '' },
};


export const adminGameParam: IAdminGameParams = {
  currencies: { id: '3000', name: 'currencies', defaultValue: 'IDR' },
  currenciesSide: { id: '3001', name: 'currenciesSide', defaultValue: 'right' },
  chipAmounts: { id: '3009', name: 'chipAmounts', defaultValue: '1,5,10,50,100,500,1000,5000,10000,100000' },
  chipColors: { id: '3012', name: 'chipColors', defaultValue: 'red,yellow,blue,gold,brown,black,orange,purple,gold,brown' },
  BJUseMultiCommands: { id: '3070', name: 'BJUseMultiCommands', defaultValue: '1' },
  preBetsAllowed: { id: '3096', name: 'preBetsAllowed', defaultValue: '0' },
  userGameIdleTimeout: { id: '3027', name: 'userGameIdleTimeout', defaultValue: '1800000' },
  block1to1bets: { id: '3071', name: 'block1to1bets', defaultValue: '0' },
  mobileMenuItems: { id: '3099', name: 'mobileMenuItems', defaultValue: 'lobby,info,gamerules,limits,history,statistics,chat,settings,sound,home' },
  enableLobby: { id: '3107', name: 'enableLobby', defaultValue: '1' },
  colorSwapValue: { id: '3109', name: 'colorSwapValue', defaultValue: '0' },
  enableFavoriteBet: { id: '3089', name: 'EnableFavoriteBet', defaultValue: '1' },
  lobbySessionLength: { id: '55', name: 'Lobby session length', defaultValue: '900' },
  loginTokenExtendTime: { id: '65', name: 'LoginTokenExtendTime', defaultValue: '6000' },
  extendTokenInterval: { id: '89', name: 'ExtendTokenInterval', defaultValue: '60' },
};


