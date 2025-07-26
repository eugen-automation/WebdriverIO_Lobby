import { GamesNamesEnum } from "../enums/gameNames.enum";

export type Player = {
    name: string;
    id?: string;
    password?: string;
    token?: string;
    betBehindPlayer?: string, 
    bannedPlayer?: string
};

export type Operator = {
    id: string;
    secretkey: string;
};

export type GameAndLimit = {
    name: string;
    limit: { id: string }[];
};

export type OperatorData = {
    operator: Operator[];
    gameAndLimit: GameAndLimit[];
};


export type envFileDataType = {
    languageId?: string;
    deviceOrientation?: string;
    operatorId?: string;
    gameToTest?: GamesNamesEnum;
    isNewGame?: string;
    environment?: string;
    apiUrl?: string;
    apiClientUrl?: string;
    servicesUrl?: string;
    translationServiceUrl?: string;
    mobileGameDomain?: string;
    webGameDomain?: string;
    sawOldUrl?: string;
    lobbyUrl?: string;
    lobbyOtherUrl?: string;
    swManageUrl?: string;
    token?: string;
    secretKey?: string;
    activePlayer?: string;
    betBehindPlayer?: string;
    bannedPlayer?: string;
    playerPassword?: string;
};