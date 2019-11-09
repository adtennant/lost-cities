import { IApplicationState } from "..";
import { IScorecardResult, IExpedition } from "./types";
import { createSelector } from "reselect";

export const getEntries = (state: IApplicationState) => state.scorecard.entries;

const calculateScore = (expedition: IExpedition) => {
  if (expedition.cards.length === 0 && expedition.wager === 0) {
    return 0;
  }

  const points = expedition.cards.reduce((total, card) => total + card, 0);
  const subtotal = points - 20;

  const total = subtotal * (expedition.wager + 1);
  const bonus = expedition.cards.length >= 8 ? 20 : 0;
  return total + bonus;
};

export const getResults = createSelector(
  getEntries,
  (entries): IScorecardResult[] =>
    entries
      .map(entry => ({
        id: entry.id,
        name: entry.name,
        yellow: calculateScore(entry.yellow),
        white: calculateScore(entry.white),
        blue: calculateScore(entry.blue),
        green: calculateScore(entry.green),
        red: calculateScore(entry.red),
        purple: calculateScore(entry.purple)
      }))
      .map(result => ({
        ...result,
        total:
          result.yellow +
          result.white +
          result.blue +
          result.green +
          result.red +
          result.purple
      }))
);
