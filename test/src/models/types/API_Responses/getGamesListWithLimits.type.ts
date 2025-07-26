

export type LimitSetType = {
    limitSetID: string;
    minBet: string;
    maxBet: string;
    minBetBehind?: string;
    maxBetBehind?: string;
}

export type GameListType = {
    gameID?: string;
    gameType?: string;
    gameName?: string;
    dealerName?: string;
    dealerImageUrl?: string;
    isOpen?: string;
    connectionUrl?: string;
    winParams?: string;
    openHour?: string;
    closeHour?: string;
    PlayersNumber?: number;
    PlayersNumberInGame?: number;
    limitSetList?: LimitSetListType;
}



export type ErrorResponseType = {
    errorCode: number;
    description: string;
}

export type GetGamesListWithLimitsResponse = {
    // gamesList: {
    game: GameListType[];
    // };
    // errorCode: number;
    // description: string;
}

export type LimitSetListType = {
    limitSet: LimitSetType[]; // Defined as an array of LimitSet
}
