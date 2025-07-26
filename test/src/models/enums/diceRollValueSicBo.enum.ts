
export enum DiceRollValueSicBoEnum {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  // getPropertyFromValue = (v) => Object.keys(cardId).find((x) => cardId[x] === v),
}

export const getPropertyFromValue = (v: number): string | undefined => {
  const result = Object.keys(DiceRollValueSicBoEnum).find((x) => DiceRollValueSicBoEnum[x] === v);
  return result as string | undefined;
};