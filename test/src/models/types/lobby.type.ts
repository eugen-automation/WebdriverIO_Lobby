export type PlayerTokenDataType = {
  operatorId: string,
  username: string,
  token?: string,
  secretKey?: string
};

export type AdditionalParamsType = {

  lobby?: {
    homeUrl?: string,
    defaultCategory?: string,
    operatorId?: string,
    languageId?: string,
  },
  game?: {
    invokeType?: string,
    openMode?: string,
    newLobby?: string,
    homeUrl?: string,
    isSuperSixBac?: string,
  }
}

