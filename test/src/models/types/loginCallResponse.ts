export type LoginCallResponse = {
  PlayerID: number;
  chatLoginToken: string;
  currencySymbol: string;
  currencyCode: string;
  chips: string;
  chipsRange: string;
  seatsNumber: number;
  qualities?: {
    QuialityClass: number;
    StreamsList: any[]; // You may replace 'any[]' with the actual type of StreamsList if known
    BitRate: number;
    QualityName: string;
    publishType: number;
    AdditionalParams: Record<string, any>; // You may replace 'Record<string, any>' with the actual type if known
  }[];
  conversionChart: Record<string, number>;
  isMultiTable: boolean;
  limits?: {
    $id: string;
    betType: number;
    min: number;
    max: number;
  }[];
  sideBets?: {
    $id: string;
    sideBetType: number;
    min: number;
    max: number;
  }[];
};

// need this function as Login call result for some games has properties sideBets, Limits, for other sideBets, limits
export function normalizedLoginCallResponse(data): LoginCallResponse {
  const normalizedData: LoginCallResponse = {
    ...data,
    limits: data.limits || data.Limits,
    sideBets: data.sideBets || data.SideBets,
  }

  return normalizedData;
}