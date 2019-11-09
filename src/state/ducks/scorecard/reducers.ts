import { ActionType, createReducer } from "typesafe-actions";
import uuid from "uuid/v4";

import * as actions from "./actions";
import { IScorecardEntry } from "./types";

export interface IScorecardState {
  readonly entries: IScorecardEntry[];
}

export const initialState: IScorecardState = {
  entries: []
};

export type ScorecardAction = ActionType<typeof actions>;

export const scorecardReducer = createReducer<IScorecardState, ScorecardAction>(
  initialState
)
  .handleAction(actions.addPlayer, (state, action) => ({
    ...state,
    entries: [
      ...state.entries,
      {
        id: uuid(),
        name: action.payload,
        yellow: { cards: [], wager: 0 },
        white: { cards: [], wager: 0 },
        blue: { cards: [], wager: 0 },
        green: { cards: [], wager: 0 },
        red: { cards: [], wager: 0 },
        purple: { cards: [], wager: 0 }
      }
    ]
  }))
  .handleAction(actions.addCard, (state, action) => {
    const { id, expedition, card } = action.payload;

    return {
      ...state,
      entries: state.entries.map(entry =>
        entry.id === id
          ? {
              ...entry,
              [expedition]: {
                ...entry[expedition],
                cards: [...entry[expedition].cards, card]
              }
            }
          : entry
      )
    };
  })
  .handleAction(actions.removeCard, (state, action) => {
    const { id, expedition, card: cardToRemove } = action.payload;

    return {
      ...state,
      entries: state.entries.map(entry =>
        entry.id === id
          ? {
              ...entry,
              [expedition]: {
                ...entry[expedition],
                cards: entry[expedition].cards.filter(
                  card => card !== cardToRemove
                )
              }
            }
          : entry
      )
    };
  })
  .handleAction(actions.changeWager, (state, action) => {
    const { id, expedition, wager } = action.payload;

    return {
      ...state,
      entries: state.entries.map(entry =>
        entry.id === id
          ? { ...entry, [expedition]: { ...entry[expedition], wager } }
          : entry
      )
    };
  });
